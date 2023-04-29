import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

import { ServerException } from '../exceptions/server.exception'

export const errorMiddleware: ErrorRequestHandler = (error: unknown, _req: Request, res: Response, _next: NextFunction) => {
	console.error(error)

	if (error instanceof ServerException) {
		res.status(error.status).json({ message: error.message })
	} else {
		res.status(500).json({ message: 'unexpected server error' })
	}
}
