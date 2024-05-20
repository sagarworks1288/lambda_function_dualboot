const Boot = require('./application/boot')

export const handler = async (event) => {
  // TODO implement
  const result = await Boot.invoke(event)
  const response = {
    statusCode: 200,
    body: JSON.stringify(result)
  }
  return response
}
