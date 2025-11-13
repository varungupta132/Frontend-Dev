const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];
let discountedCart = cart.map(obj => {
  let discount = 0;
  if (obj.category === "electronics") discount = 0.10;
  else if (obj.category === "fashion") discount = 0.05;
  let finalPrice = obj.price - obj.price * discount;
  return { ...obj, finalPrice };
});
let total = discountedCart.reduce((sum, item) => sum + item.finalPrice, 0);
if (total > 50000) total -= total * 0.05;
console.log("Cart Summary:");
discountedCart.forEach(i => console.log(`${i.item} (${i.category}) → ₹${i.finalPrice.toFixed(2)}`));
console.log(`Final Total: ₹${total.toFixed(2)}`);
