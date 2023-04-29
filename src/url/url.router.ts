import { Router } from 'express'
import { urlController } from './url.module'

const urlRouter = Router()

urlRouter.get(
	'/:slug',
	(req, res) => urlController.requestOnUrl(req, res)
)
urlRouter.post('/')

export default urlRouter
