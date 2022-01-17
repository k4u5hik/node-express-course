const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: 1,
    max: 5
  },
  title : {
    type: String,
    required: [true, 'Title is required'],
    minlength: [3, 'Title must be at least 3 characters long'],
    maxlength: [100, 'Title must be less than 50 characters long']
  },
  comment: {
    type: String,
    required: true
  },
  // attach the user id to the review
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  // attach the product id to the review
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: true
  }
},
    {timestamps: true}
)

// user can only create one review per product
ReviewSchema.index({product: 1, user: 1}, {unique: true})

ReviewSchema.statics.calculateAverageRating = async function(productId) {
  const result = await this.aggregate([
    {$match: {product: productId}},
    {$group: {_id: '$product', averageRating: {$avg: '$rating'},numOfReviews: {$sum: 1}}},
    {$sort: {averageRating: -1}}
  ])
  console.log(result)
  try {
    await this.model('Product').findByIdAndUpdate(productId, {
      averageRating: Math.ceil(result[0]?.averageRating || 0),
      numOfReviews: result[0]?.numOfReviews || 0
    })
  } catch (err) {
    console.log(err)
  }
  console.log(result)
}
ReviewSchema.post('save', async function (){
  await this.constructor.calculateAverageRating(this.product);
})
ReviewSchema.post('remove', async function (){
  await this.constructor.calculateAverageRating(this.product);
})

module.exports = mongoose.model('Review', ReviewSchema);