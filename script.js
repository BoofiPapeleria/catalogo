const products = [
  {
    id: 1,
    name: "Pegamento Liquido",
    category: "Pegamentos",
    price: 1500,
    desc: "Pegamento líquido de 150 ml, su fórmula garantiza una adherencia fuerte y duradera en papel, cartón y otros materiales ligeros.",
  },
  {
    id: 2,
    name: "Pegamento",
    category: "Pegamentos",
    price: 1500,
    desc: "Ideal para manualidades y bullet journal.",
  },
  {
    id: 3,
    name: "Stickers Holográficos",
    category: "Stickers",
    price: 2500,
    emoji: "🌸",
    desc: "Set de stickers holográficos.",
  },
  {
    id: 4,
    name: "Stickers Animalitos",
    category: "Stickers",
    price: 2000,
    emoji: "🐰",
    desc: "Animalitos en colores pastel.",
  },
  {
    id: 5,
    name: "Post-it Patitas",
    category: "Post-it",
    price: 1000,
    emoji: "🐾",
    desc: "Notas adhesivas con forma de patitas.",
  },
  {
    id: 6,
    name: "Mini Block Kawaii",
    category: "Post-it",
    price: 1600,
    emoji: "🎀",
    desc: "Mini notas con diseños adorables.",
  },
  {
    id: 7,
    name: "Washi Tape Arte",
    category: "Washi Tape",
    price: 3500,
    emoji: "🎨",
    desc: "Cintas decorativas para tus proyectos.",
  },
  {
    id: 8,
    name: "Goma Macaron",
    category: "Gomas",
    price: 900,
    emoji: "🧁",
    desc: "Goma con forma de pastelito.",
  },
  {
    id: 9,
    name: "Goma Patita",
    category: "Gomas",
    price: 1400,
    desc: "Goma retráctil con diseño de gato.",
  },
  {
    id: 10,
    name: "Sacapuntas Osito",
    category: "Sacapuntas",
    price: 1200,
    emoji: "🧸",
    desc: "Sacapuntas con depósito.",
  },
  {
    id: 11,
    name: "Lápiz Gel Pastel",
    category: "Lápices",
    price: 2500,
    emoji: "✏️",
    desc: "Set de lápices en tonos pastel.",
  },
  {
    id: 12,
    name: "Lonchera Kawaii",
    category: "Loncheras",
    price: 8900,
    emoji: "🍱",
    desc: "Lonchera térmica con diseño kawaii.",
  },
];

const categories = ["Todos", ...new Set(products.map((p) => p.category))];
let currentCategory = "Todos";
let search = "";
let cart = [];

const $ = (id) => document.getElementById(id);
const money = (value) => "$" + value.toLocaleString("es-CL");

function renderCategories() {
  $("categories").innerHTML = categories
    .map(
      (category) => `
    <button class="category ${category === currentCategory ? "active" : ""}"
      onclick="setCategory('${category}')">${category}</button>
  `,
    )
    .join("");
}

function setCategory(category) {
  currentCategory = category;
  renderCategories();
  renderProducts();
}

function renderProducts() {
  const filtered = products.filter((product) => {
    const categoryOK =
      currentCategory === "Todos" || product.category === currentCategory;
    const text =
      `${product.name} ${product.category} ${product.desc}`.toLowerCase();
    return categoryOK && text.includes(search.toLowerCase());
  });

  $("productCount").textContent =
    `${filtered.length} producto${filtered.length !== 1 ? "s" : ""}`;
  $("empty").classList.toggle("show", filtered.length === 0);

  $("products").innerHTML = filtered
    .map(
      (product) => `
    <article class="card">
      <div class="product-image">${product.emoji}</div>
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <div class="card-bottom">
        <span class="price">${money(product.price)}</span>
        <button class="add" onclick="addToCart(${product.id})" aria-label="Agregar ${product.name}">+</button>
      </div>
    </article>
  `,
    )
    .join("");
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const item = cart.find((p) => p.id === id);

  if (item) item.qty++;
  else cart.push({ ...product, qty: 1 });

  renderCart();
  openCart();
}

function changeQty(id, amount) {
  const item = cart.find((p) => p.id === id);
  if (!item) return;

  item.qty += amount;
  if (item.qty <= 0) cart = cart.filter((p) => p.id !== id);
  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  $("cartCount").textContent = totalItems;
  $("cartTotal").textContent = money(total);

  $("cartItems").innerHTML = cart.length
    ? cart
        .map(
          (item) => `
      <div class="cart-item">
        <div class="cart-emoji">${item.emoji}</div>
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <small>${money(item.price)} c/u</small>
        </div>
        <div class="qty">
          <button onclick="changeQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    `,
        )
        .join("")
    : "<p style='text-align:center;color:#999;padding:40px 10px'>Tu carrito está vacío 🐾</p>";
}

function openCart() {
  $("cart").classList.add("open");
  $("overlay").classList.add("show");
}

function closeCart() {
  $("cart").classList.remove("open");
  $("overlay").classList.remove("show");
}

$("search").addEventListener("input", (e) => {
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

  const phone = "56912345678"; // CAMBIA ESTE NÚMERO
  let message = "Hola Boofi 💗 Quiero realizar este pedido:\n\n";

  cart.forEach((item) => {
    message += `• ${item.name} x${item.qty} - ${money(item.price * item.qty)}\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  message += `\nTotal: ${money(total)}\n\n¡Gracias! ✨`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank",
  );
});

renderCategories();
renderProducts();
renderCart();
