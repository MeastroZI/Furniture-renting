const mongoose = require("mongoose");
const { type } = require("os");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productId: {
    type: Number,
    required: true,
  },
  productType : {
    type :String,
    require : true 
  },
  location : {
    Country : {
      type : String,
      require : true
    },
    State : {
      type : String,
      require : true
    },
    City : {
      type : String,
      require : true
    },
    PinCode : {
      type : Number ,
      require : true
    },
    LandMark : {
      type : String ,
      require : true
    },
    HouseNum : {
      type : Number ,
      require : true 
    }
  }
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
