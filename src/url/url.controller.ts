import { NextFunction, Request, Response } from 'express'

import { UrlService } from './url.service'

export class UrlController {
	constructor(private readonly urlService: UrlService) {}

	async requestOnUrl(req: Request, res: Response, next: NextFunction) {
		try {
			const { slug } = req.params
			const origin = await this.urlService.requestOnUrl(slug)

			res.status(302).redirect(origin)
		} catch (error) {
			next(error)
		}
	}

	async addUrl(req: Request, res: Response, next: NextFunction) {
		try {
			const { origin, slug } = req.body
			const createdUrl = await this.urlService.addUrl(origin, slug)

			res.status(200).json(createdUrl)
		} catch (error) {
			next(error)
		}
	}
}
