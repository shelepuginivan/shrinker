import { Router } from 'express'

import { urlController } from './url.module'

const urlRouter = Router()

urlRouter.get(
	'/:slug',
	(req, res, next) =>
		urlController.requestOnUrl(req, res, next)
)
urlRouter.post(
	'/',
	(req, res, next) =>
		urlController.addUrl(req, res, next)
)

export default urlRouter
