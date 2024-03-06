import { buildConfig } from "payload/config";

import dotenv from 'dotenv'
dotenv.config()

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [],
  routes: {
    admin: '/sell'
  },
  admin: {},
  editor: slateEditor({})
})