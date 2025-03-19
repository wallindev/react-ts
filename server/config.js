import path from 'node:path'
import dotenv from 'dotenv'
import { __dirname, IS_LIVE, IS_LOCAL } from './constants.js'

export let envFileVars = {}
if (IS_LOCAL) {
  let filePathEnv, result
  try {
    filePathEnv = path.join(__dirname, '.env')
    if (filePathEnv) {
      result = dotenv.config({ path: filePathEnv })
    } else {
      console.error('Env file not found')
    }
    envFileVars = result.parsed
  } catch (error) {
    console.error(`Error reading or parsing '${filePathEnv}' file:\n${error}`)
  }
}

export let envConfigVars = {}
if (IS_LIVE) {
  envConfigVars['CSS_PATH']    = process.env.CSS_PATH    || '/css/index.css'
  envConfigVars['DB_PATH']     = process.env.DB_PATH     || './api-data/db.json'
  envConfigVars['SECRET_AUTH'] = process.env.SECRET_AUTH || 'b029f401e21027eb9ddb4204f6aad6923c192ea2323b2bbb96d031c2c0a18051'
  envConfigVars['PORT']        = process.env.PORT        || 3000
}
