import { Request, Response } from 'express'

import { UrlService } from './url.service'

export class UrlController {
	constructor(private readonly urlService: UrlService) {}

	async requestOnUrl(req: Request, res: Response, next: NextFunction) {
		try {
			const { slug } = req.params
			const origin = await this.urlService.requestOnUrl(slug)
			res.status(302).redirect(origin)
		} catch (error) {
			if (error instanceof ServerException) {
				res.status(error.status).json({message: error.message})
			} else {
				res.status(500).json({message: 'unexpected server error'})
			}
		}
	}
}
