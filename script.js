const products = [
  { id:1, name:"Pegamento Líquido 150ml", category:"Pegamentos", price:1300,  images:["images/pegamento-liquido.png"], 
    desc:" Pegamento de adherencia fuerte y duradera, ideal para materiales ligeros."},

  { id:2, name:"Masilla Mágica 35gr", category:"Pegamentos",price:2500, images:["images/pegamento-magico.png"], 
    desc:"Masilla reutilizable y removible, perfecta para decorar superficies lisas."},
  
  { id:3, name:"Pegamento en Cinta 8m", category:"Pegamentos", price:1800, images:["images/pegamento-cinta8m.png"], 
    desc:"Cinta de 8 mm. Ideal para pegar de manera rápida y sin manchas."},
  
  { id:4, name:"Pegamento en Cinta 6M", category:"Pegamentos", price:1500, images:["images/pegamento-cinta6m.png"], 
    desc:"Cinta de 8 mm. Ideal para pegar de manera rápida y sin manchas."},
  
  { id:5, name:"Set de Stickers", category:"Stickers", price:800, images:["images/stickers1.png","images/stickers2.png","images/stickers3.png"], 
    desc:"3 láminas de stickers transparentes con diseños kawaii, ideales para decorar." },
  
  { id:6, name:"Set de Stickers", category:"Stickers", price:800, images:["images/stickers8.png","images/stickers9.png"], 
    desc:"3 láminas de stickers transparentes con diseños kawaii, ideales para decorar." },

  {  id:7, name:"Stickers Glitter", category:"Stickers", price:800, images:["images/stickers4.png","images/stickers5.png","images/stickers6.png","images/stickers7.png"], 
    desc:"Lámina de stickers brillantes con diseños kawaii, perfectos para dar un toque especiala tus proyectos." },
  
  { id:8, name:"Set de Stickers Sanrio", category:"Stickers", price:1800, images:["images/stickers-sanrio1.png","images/stickers-sanrio2.png"], 
    desc:"20 láminas de stickers transparentes con diseños adorables de My Melody y Cinnamoroll." },
  
  { id:9,name:"Set de Stickers Sanrio",category:"Stickers", price:1800, images:["images/stickers-sanrio3.png","images/stickers-sanrio4.png"], 
    desc:"25 láminas de stickers transparentes con diseños adorables de My Melody y Cinnamoroll." },

  { id:10,name:"Corrector en Cinta 12m",category:"Correctores", price:600, images:["images/corrector-cinta12m1.png","images/corrector-cinta12m2.png"], 
  desc:"Corrector de secado répido." },

  { id:11, name:"Corrector en Cinta 36m",category:"Correctores", price:800, images:["images/corrector-cinta36.png"], 
    desc:"Corrector de secado répido" },

  { id:12, name:"Corrector en Cinta 38m",category:"Correctores", price:1000, images:["images/corrector-cinta38.png"], 
    desc:"Corrector de secado répido" },

  { id:13, name:"Corrector Líquido 8ml",category:"Correctores", price:1000, images:["images/corrector-liquido.png"], 
    desc:"Corrector de secado répido" },

  { id:14, name:"Post it Transparentes",category:"Notas", price:800, images:["images/transparentes.png"], 
    desc:"50 Notas adhesivas transparentes de 9,5 x 7 cm. Ideales para escribir sobre tus libros sin rayarlos." },  
  
  { id:15, name:"Post it Magnéticos",category:"Notas", price:1200, images:["images/magneticas.png"], 
    desc:"50 Notas magnéticas de 10,5 x 7 cm. Perfectas para colocar sobre distintas superficies" },  

  { id:16, name:"Post it Snoopy",category:"Notas", price:1000, images:["images/snoopy.png"], 
    desc:"40 Notas adhesivas de Snoopy de 9 x 7,4cm" },  

  { id:17, name:"Post it Relojes",category:"Notas", price:800, images:["images/relojes.png"], 
    desc:"90 Notas adhesivas de relojes análogos." },  

  { id:18, name:"Goma Cat Paw",category:"Gomas", price:1500, images:["images/gomagato1.png"], 
    desc:"Goma de borrar con rodillo de limpieza, lindo diseño de patita de gato." }, 
  
  { id:19, name:"Goma Capibara",category:"Gomas", price:1500, images:["images/gomacapi.png"], 
  desc:"Goma de borrar retráctil con tierna forma de capibara." }, 

  { id:20, name:"Goma Cat Paw Retráctil",category:"Gomas", price:1600, images:["images/gomagato2.png"], 
  desc:"Goma de borrar retráctil con forma de patita de gato con glitter." }, 


];

const categories = ["Todos", ...new Set(products.map(p => p.category))];
let currentCategory = "Todos";
let search = "";
let cart = [];

const $ = id => document.getElementById(id);
const money = value => "\$" + value.toLocaleString("es-CL");

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
      <div class="product-images">
        ${product.images.map((img, i) => `
          <img src="${img}" alt="${product.name}" class="slide ${i === 0 ? "active" : ""}">
        `).join("")}
        ${product.images.length > 1 ? `
          <button class="prev">◀</button>
          <button class="next">▶</button>
        ` : ""}
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
    ? cart.map(item => `
      <div class="cart-item">
        <div class="cart-emoji">
          <img src="${item.img}" alt="${item.name}" style="width: 40px; height: 40px; object-fit: contain; display: block;">
        </div>
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
    `).join("")
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

  const phone = "56912345678"; // CAMBIA ESTE NÚMERO
  let message = "Hola Boofi 💗 Quiero realizar este pedido:\n\n";

  cart.forEach(item => {
    message += `• ${item.name} x${item.qty} - ${money(item.price * item.qty)}\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  message += `\nTotal: ${money(total)}\n\n¡Gracias! ✨`;

  window.open(`https://wa.me{phone}?text=${encodeURIComponent(message)}`, "_blank");
});

renderCategories();
renderProducts();
renderCart();

document.addEventListener("click", e => {
  if (e.target.classList.contains("prev") || e.target.classList.contains("next")) {
    const container = e.target.closest(".product-images");
    const slides = container.querySelectorAll(".slide");
    let index = [...slides].findIndex(s => s.classList.contains("active"));

    slides[index].classList.remove("active");

    if (e.target.classList.contains("next")) {
      index = (index + 1) % slides.length;
    } else {
      index = (index - 1 + slides.length) % slides.length;
    }

    slides[index].classList.add("active");
  }
});
