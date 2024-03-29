/* eslint @typescript-eslint/no-var-requires: "off" */
const { BetaAnalyticsDataClient } = require('@google-analytics/data')

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GSA_CLIENT_EMAIL,
    private_key: process.env.GSA_PRIVATE_KEY,
  },
})

const PROPERTY_ID = process.env.GSA_PROPERTY_ID
const startDate = '7daysAgo'
const endDate = 'today'
const metric = 'screenPageViews'

export default async function handler(req, res) {
  const entity = req.query.entity || ''

  const response = await analyticsDataClient
    .runReport({
      property: `properties/${PROPERTY_ID}`,
      dimensions: [{ name: 'pagePathPlusQueryString' }],
      dateRanges: [{ startDate: startDate, endDate: endDate }],
      metrics: [{ name: metric }],
      dimensionFilter: {
        andGroup: {
          expressions: [
            {
              filter: {
                fieldName: 'pagePathPlusQueryString',
                stringFilter: { matchType: 'CONTAINS', value: 'thema' },
              },
            },
            {
              filter: {
                fieldName: 'hostName',
                stringFilter: {
                  matchType: 'CONTAINS',
                  value: entity,
                },
              },
            },
          ],
        },
      },
      // dimensionFilter: {
      //   filter: {
      //     fieldName: 'pagePathPlusQueryString',
      //     stringFilter: { matchType: 'CONTAINS', value: 'thema' },
      //   },
      // },
    })
    .then((res) => res[0].rows)

  const themes = Object.values(response).map((theme, i) => ({
    id: i,
    theme: theme.dimensionValues[0].value,
    views: theme.metricValues[0].value,
  }))
  res.status(200).json({ themes })
}
