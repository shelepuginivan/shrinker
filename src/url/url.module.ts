import {UrlService} from './url.service'
import {UrlController} from './url.controller'

const urlService = new UrlService()
export const urlController = new UrlController(urlService)
