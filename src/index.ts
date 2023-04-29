import config from 'config'
import express from 'express'
import { connect } from 'mongoose'


const app = express()


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
