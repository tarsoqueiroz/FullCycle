import messagesHandler from './messages'
// import messagesHandler from './api/messages'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

export default (req, res) => {
  const handler = messagesHandler
  return handler(req, res)
}
