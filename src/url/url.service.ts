import urlModel from './url.model'

export class UrlService {
	async requestOnUrl(slug?: string): Promise<string> {
		if (!slug) {
			throw ServerExceptionFactory.badRequest('parameter slug required')
		}

		const url = await urlModel.findOne({ slug })

		if (!url) {
			throw ServerExceptionFactory.notFound('not found')
		}

		return url.origin
	}
}
