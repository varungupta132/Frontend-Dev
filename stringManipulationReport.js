let product = " wireless headphones PRO ";
let cleaned = product.trim().toLowerCase().split(" ").filter(word => word).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ").replace("Pro", "Pro Edition");
console.log(`Cleaned Title: ${cleaned}`);
console.log(`Length: ${cleaned.length}`);
