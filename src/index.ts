import bodyParser from 'body-parser'
import config from 'config'
import express, { json } from 'express'
import { connect } from 'mongoose'

import { errorMiddleware } from './middlewares/error.middleware'
import urlRouter from './url/url.router'

const app = express()

app.use(bodyParser.json())
app.use(json())
app.use('/', urlRouter)
app.use(errorMiddleware)

const start = async () => {
	const port = config.get('port') as number ?? 8000
	const mongoUri = config.get('mongoUri')

	if (typeof mongoUri !== 'string') {
		throw new Error('Failed to connect database: URI is invalid or not specified')
	}

	await connect(mongoUri)
	app.listen(port)
}

start()
	.then(() => console.log('Server successfully started...'))
	.catch((error) => console.log(error))
