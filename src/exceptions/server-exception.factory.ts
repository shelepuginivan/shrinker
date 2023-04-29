import { ServerException } from './server.exception'

export class ServerExceptionFactory {
	static badRequest(message: string) {
		return new ServerException(400, message)
	}

	static notFound(message: string) {
		return new ServerException(404, message)
	}
}
