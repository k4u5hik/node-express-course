const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product
      .find({price:{$gt:30}})
      .sort('price')
      .select('name price')

  res.status(200).json({products, nbHits: products.length});
};

const getAllProducts = async (req, res) => {
  const {featured, company, name, sort, fields} = req.query;
  const queryObject = {}

  if (featured) {
    queryObject.featured = featured=== 'true'? true: false
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = {$regex: name, $options: 'i'}
  }
  //console.log(queryObject);
  let result = Product.find(queryObject)
  //sort
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList)
  } else{
    result = result.sort('createdAt')
  }

  if(fields){
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList)
  }

  const page = Number(req.query.page) || 1; // if page is not defined, set to 1
  const limit = Number(req.query.limit) || 10 // if limit is not defined, it will be 10
  const skip = (page - 1) * limit; // skip is the number of products to skip
  result = result.limit(limit).skip(skip);

  // We will have 4 pages - 7,7,7,2 , Total 23 products OR
  // We have 23 products, we want to display 10 products per page, so we have 3 pages

  const products = await result
  res.status(200).json({products, nbHits: products.length});
}

module.exports = {
  getAllProductsStatic,
  getAllProducts
}