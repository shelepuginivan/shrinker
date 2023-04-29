class ServerExceptionFactory {
	static badRequest(message: string) {
		return new ServerException(400, message)
	}
}
