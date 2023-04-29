import { randomUUID } from 'crypto'

import { ServerExceptionFactory } from '../exceptions/server-exception.factory'
import { Url } from './url'
import urlModel from './url.model'

export class UrlService {
	async requestOnUrl(slug?: string): Promise<string> {
		if (!slug) {
			throw ServerExceptionFactory.badRequest('parameter \'slug\' required')
		}

		const url = await urlModel.findOne({ slug })

		if (!url) {
			throw ServerExceptionFactory.notFound('not found')
		}

		return url.origin
	}

	async addUrl(origin?: string, slug?: string): Promise<Url> {
		if (!origin) {
			throw ServerExceptionFactory.badRequest('parameter \'origin\' requred')
		}

		if (!slug) {
			slug = randomUUID()
		}

		const createdUrl = await urlModel.create({ origin, slug })

		return new Url(createdUrl.origin, createdUrl.slug)
	}
}
