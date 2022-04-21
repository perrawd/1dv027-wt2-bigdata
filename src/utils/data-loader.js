/**
 * Data-loader module.
 * Script that fetches data from API and ingest into elasticsearch.
 *
 * @author Per Rawdin <per.rawdin@student.lnu.se>
 * @version 1.0.0
 */

import { Client } from '@elastic/elasticsearch'
import axios from 'axios'

/** @type {Client} */
/** Instantiate new elasticsearch client */
const client = new Client({
  node: process.env.ELASTIC_URL,
  auth: {
    username: process.env.ELASTIC_USER,
    password: process.env.ELASTIC_PASS
  },
  caFingerprint: process.env.ELASTIC_FP,
  tls: {
    rejectUnauthorized: false
  }
})

/**
 * Fetches data from specified API.
 *
 * @param {string} url The URL to fetch the data from.
 * @return {Object} Response object.
 */
async function fetchData (url) {
  const response = await axios(url)
  return await response.json()
}

/**
 * Variables for API calls.
 */
const languages = ['javascript', 'html css', 'python', 'typescript', 'node js', 'bash', 'php', 'c%23', 'sql', 'java']
const years = ['2016', '2017', '2018', '2019', '2020', '2021']
const quarterStart = ['-01-01', '-04-01', '-07-01', '-10-01']
const quarterEnd = ['-03-31', '-06-30', '-09-30', '-12-31']

/**
 * Make API calls.
 */
// Loop each language.
for (const language of languages) {
  // Loop each year.
  for (const year of years) {
    // Loop each quarter.
    for (let quarter = 0; quarter < quarterEnd.length; quarter++) {
      // Data container.
      const data = []

      // Variables for API pagination.
      let pages = true
      let count = 0
      let offset = 0

      while (pages) {
        // Fetch data.
        const url = `${process.env.API_URL}/search?q=${language}&historical-from=${year}${quarterStart[quarter]}&historical-to=${year}${quarterEnd[quarter]}&limit=100&offset=${offset}&resdet=brief`
        const response = await fetchData(url)

        data.push(...response.hits)

        // Increment count for next page.
        count++
        offset = (count * 100) + 1

        // If page contains less than 100 results, stop current iteration.
        if (response.hits.length < 100) pages = false
      }

      // Add language tag for each document.
      data.forEach(document => (document.tag = language))

      // Ingest data in elasticsearch.
      const result = await client.helpers.bulk({
        datasource: data,
        onDocument (doc) {
          return {
            index: {
              _index: process.env.ELASTIC_INDEX
            }
          }
        }
      })
      console.log(result)
      console.log(`Data has been ingested for quarter ${quarter + 1}, ${year}`)
    }
    console.log(`Year: ${year} completed`)
  }
}
