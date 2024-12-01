import { Type } from '@feathersjs/typebox'
// File type defined by Multer

export const MulterFileSchema = Type.Object({
  fieldname: Type.String(),
  filename: Type.String(),
  originalname: Type.String(),
  encoding: Type.String(),
  mimetype: Type.String(),
  buffer: Type.String(), // base64 encoded string
  size: Type.Number()
})
// Multer request handler for file upload
