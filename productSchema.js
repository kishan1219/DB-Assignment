// You can can create separate JavaScript files (e.g., productCategorySchema.js, productSchema.js, etc.) for each schema and add the code mentioned above.
//  Place the schema files you created inside the models folder.

// product_category Schema:

const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
  },
});

module.exports = mongoose.model('ProductCategory', productCategorySchema);

// product Schema:

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  SKU: {
    type: String,
    unique: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
    required: true,
  },
  inventory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductInventory',
  },
  price: {
    type: Number,
    required: true,
  },
  discount_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discount',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
  },
});

module.exports = mongoose.model('Product', productSchema);

// product_inventory Schema:

const mongoose = require('mongoose');

const productInventorySchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
  },
});

module.exports = mongoose.model('ProductInventory', productInventorySchema);

// discount Schema:

const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  discount_percent: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
  },
});

module.exports = mongoose.model('Discount', discountSchema);
