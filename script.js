let products = [];
let categories = [];
let currentCategory = "Todos";
let search = "";
let cart = [];

const $ = id => document.getElementById(id);
const money = value => "$" + value.toLocaleString("es-CL");

// 🔹 Cargar productos desde JSON
fetch("products.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    categories = ["Todos", ...new Set(products.map(p => p.category))];
    renderCategories();
    renderProducts();
    renderCart();
  })
  .catch(err => console.error("Error al cargar productos:", err));

function renderCategories() {
  $("categories").innerHTML = categories.map(category => `
    <button class="category ${category === currentCategory ? "active" : ""}"
      onclick="setCategory('${category}')">${category}</button>
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
    const text = `${product.name} ${product.category} ${product.desc}`.toLowerCase();
    return categoryOK && text.includes(search.toLowerCase());
  });

  $("productCount").textContent = `${filtered.length} producto${filtered.length !== 1 ? "s" : ""}`;
  $("empty").classList.toggle("show", filtered.length === 0);

  $("products").innerHTML = filtered.map(product => `
    <article class="card">
      <div class="product-image">
        ${product.image 
          ? `<img src="${product.image}" alt="${product.name}" style="max-width:100%;max-height:100%;border-radius:15px;">` 
          : product.emoji}
      </div>
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <div class="card-bottom">
        <span class="price">${money(product.price)}</span>
        <button class="add" onclick="addToCart(${product.id})" aria-label="Agregar ${product.name}">+</button>
      </div>
    </article>
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
    ? cart
