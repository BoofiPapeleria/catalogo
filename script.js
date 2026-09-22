let products = [];
let categories = [];
let currentCategory = "Todos";
let search = "";
let cart = [];

// Función auxiliar para simplificar la selección de elementos (reemplaza al $)
const $ = (id) => document.getElementById(id);

// Función para formatear el dinero en pesos chilenos
function money(amount) {
  return "$" + amount.toLocaleString("es-CL");
}

async function loadProducts() {
  try {
    const response = await fetch('./products.json');
    products = await response.json();
    categories = ["Todos", ...new Set(products.map(p => p.category))];
    renderCategories();
    renderProducts();
    renderCart();
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
}

function renderCategories() {
  $("categories").innerHTML = categories.map(category => `
    ${category}
  `).join("");
}

function setCategory(category) {
  currentCategory = category;
  renderCategories();
  renderProducts();
}

function renderProducts() {
  const filtered = products.filter(product => {
    const categoryOK = currentCategory === "Todos" || product.category === currentCategory;
    const text = `\({product.name}\){product.category} ${product.desc}`.toLowerCase();
    return categoryOK && text.includes(search.toLowerCase());
  });

  \(("productCount").textContent = `\){filtered.length} producto${filtered.length !== 1 ? "s" : ""}`;
  $("empty").classList.toggle("show", filtered.length === 0);

  $("products").innerHTML = filtered.map(product => `
  ${product.images && product.images.length > 0
? product.images.map(img => `

`).join("")
: product.emoji}

${product.name}
${product.desc}

${money(product.price)}
+

`).join("");
}

function addToCart(id) {
const product = products.find(p => p.id === id);
const item = cart.find(p => p.id === id);

if (item) item.qty++;
else cart.push({...product, qty: 1});

renderCart();
openCart();
}

function changeQty(id, amount) {
const item = cart.find(p => p.id === id);
if (!item) return;

item.qty += amount;
if (item.qty <= 0) cart = cart.filter(p => p.id !== id);
renderCart();
}

function renderCart() {
const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

$("cartCount").textContent = totalItems;
$("cartTotal").textContent = money(total);

$("cartItems").innerHTML = cart.length
? cart.map(item => `

${item.emoji || '🛍️'}

${item.name}
${money(item.price)} c/u

−
${item.qty}
+

`).join("")
: "

Tu carrito está vacío 🐾

";
}

function openCart() {
$("cart").classList.add("open");
$("overlay").classList.add("show");
}

function closeCart() {
$("cart").classList.remove("open");
$("overlay").classList.remove("show");
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
$("search").addEventListener("input", e => {
search = e.target.value;
renderProducts();
});

$("openCart").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("overlay").addEventListener("click", closeCart);

$("clearCart").addEventListener("click", () => {
cart = [];
renderCart();
});

$("whatsapp").addEventListener("click", () => {
if (!cart.length) {
alert("Agrega productos al carrito primero 💗");
return;
}
