import config from 'config'

export class Url {
	origin: string
	slug: string
	shortenedLink: string

	constructor(origin: string, slug: string) {
		const host = config.get('host') || ''

		this.origin = origin
		this.slug = slug
		this.shortenedLink = `${host}/${slug}`
	}
}
