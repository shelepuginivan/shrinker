import { model, Schema } from 'mongoose'

const urlSchema = new Schema({
	origin: { type: String, required: true },
	slug: { type: String, required: true },
	isDefault: { type: Boolean, default: false }
})

export default model('Url', urlSchema)
