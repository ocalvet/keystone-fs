var keystone = require('keystone');
var Types = keystone.Field.Types;

var Gallery = new keystone.List('Gallery');

Gallery.add({
  name: { type: String, required: true, initial: true },
  description: { type: Types.Html, wysiwyg: true },
  images: { type: Types.CloudinaryImages },
  published: { type: Boolean },
  publishDate: { type: Types.Date, index: true },
});

Gallery.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Gallery.schema.pre('save', function (next) {
  let gallery = this;
  if (gallery.isModified('published') && gallery.published) {
    this.publishDate = Date.now();
  }
  return next();
});

Gallery.defaultColumns = 'name';
Gallery.register();