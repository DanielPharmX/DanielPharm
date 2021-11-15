const mongoose=require('mongoose');

const shippingSchema = {
  address: { type: String, required: false },
  city: { type: String, required: false },
  postalCode: { type: String, required: false },
  country: { type: String, required: false },
};

const paymentSchema = {
  paymentMethod: { type: String, required: false }
};

const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  image: { type: String},
  price: { type: String},
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: false
  },
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [orderItemSchema],
  shipping: shippingSchema,
  payment: paymentSchema,
  itemsPrice: { type: Number },
  taxPrice: { type: Number },
  shippingPrice: { type: Number },
  totalPrice: { type: Number },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
}, {
  timestamps: true
});

const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;