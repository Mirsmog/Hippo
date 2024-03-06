import dotenv from 'dotenv'
import payload from 'payload'
import { InitOptions } from 'payload/config'
dotenv.config()

let cashed = (global as any).payload

if (!cashed) {
  cashed = (global as any).payload = {
    client: null,
    promise: null
  }
}

interface Args {
  initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async ({ initOptions }: Args = {}) => {
  const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET;
  if (!PAYLOAD_SECRET) {
    throw new Error('The payload SECRET_KEY not found, please check your key at .env')
  }
  if (cashed.client) return cashed.client

  if (!cashed.promise) return cashed.promise = payload.init({
    secret: PAYLOAD_SECRET,
    local: initOptions ? false : true,
    ...(initOptions || {})
  })

  try {
    cashed.client = await cashed.promise
  } catch (error) {
    cashed.promise = null
    throw error
  }
  return cashed.client
}