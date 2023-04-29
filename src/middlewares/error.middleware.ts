import { ErrorRequestHandler, Request, Response } from 'express'

import { ServerException } from '../exceptions/server.exception'

export const errorMiddleware: ErrorRequestHandler = (error: unknown, _req: Request, res: Response) => {
	if (error instanceof ServerException) {
		res.status(error.status).json({ message: error.message })
	} else {
		console.error(error)
		res.status(500).json({ message: 'unexpected server error' })
	}
}
