import { UrlController } from './url.controller'
import { UrlService } from './url.service'

const urlService = new UrlService()
export const urlController = new UrlController(urlService)
