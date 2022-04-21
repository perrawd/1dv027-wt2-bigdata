/**
 * Data-loader module.
 * Fetches data from API and ingest into elasticsearch.
 *
 * @author Per Rawdin <per.rawdin@student.lnu.se>
 * @version 1.0.0
 */

import { Client } from '@elastic/elasticsearch'

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
