/**
 *
 * Elasticsearch query for retrieving count of documents per year for all languages.
 *
 * @author Per Rawdin <per.rawdin@student.lnu.se>
 * @version 1.0.0
 */

export const countAllYears = {
  query: {
    range: {
      publication_date: {
        gte: '2016-01-01',
        lte: '2021-12-31'
      }
    }
  },
  aggs: {
    langs: {
      terms: {
        field: 'tag.keyword',
        size: 20,
        order: {
          _key: 'asc'
        }
      },
      aggs: {
        lang: {
          date_histogram: {
            field: 'publication_date',
            calendar_interval: 'year'
          }
        }
      }
    }
  },
  size: 0
}
