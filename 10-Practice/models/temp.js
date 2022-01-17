const agg = [
    {
        '$match': {
            'product': new ObjectId('61e4c10147596ed7c33b1289')
        }
    }, {
        '$group': {
            '_id': '$product',
            'averageRating': {
                '$avg': '$rating'
            },
            'numberOfReviews': {
                '$sum': 1
            }
        }
    }
];