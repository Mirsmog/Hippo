import express from 'express'
import dotenv from 'dotenv'
import { getPayloadClient } from './getPayload'
import { nextApp, nextHandler } from './next-utils'

dotenv.config()

const app = express()
const PORT = Number(process.env.PORT) || 5000


const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin url ${cms.getAdminURL()}`)
      }
    }
  })
  nextApp.prepare().then(() => {
    payload.logger(`NextJS started`)
    try {
      app.listen(PORT, async () => payload.logger.info(`Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`))
    } catch (error) {
      console.log(`Error on during starts the server: ${error}`)
    }
    app.use((req, res) => nextHandler(req, res))
  })
}

start()

