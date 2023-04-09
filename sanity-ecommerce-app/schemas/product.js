export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  field: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
  ],
}
