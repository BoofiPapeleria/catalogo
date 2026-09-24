const products = [
  {
    id: 1,
    name: "Pegamento Líquido 150ml",
    category: "Pegamentos",
    price: 1300,
    images: ["images/pegamento-liquido.png"],
    desc: "Pegamento de adherencia fuerte y duradera, ideal para materiales ligeros."
  },
  {
    id: 2,
    name: "Masilla Mágica 35gr",
    category: "Pegamentos",
    price: 2500,
    images: ["images/pegamento-magico.png"],
    desc: "Masilla reutilizable y removible, perfecta para decorar superficies lisas."
  },
  {
    id: 3,
    name: "Pegamento en Cinta 8m",
    category: "Pegamentos",
    price: 1800,
    images: ["images/pegamento-cinta8m.png"],
    desc: "Cinta de 8 mm, ideal para pegar de manera rápida y sin manchas."
  },
  {
    id: 4,
    name: "Pegamento en Cinta 6m",
    category: "Pegamentos",
    price: 1500,
    images: ["images/pegamento-cinta6m.png"],
    desc: "Cinta de 6 mm, ideal para pegar de manera rápida y sin manchas."
  },
  {
    id: 5,
    name: "Set de Stickers",
    category: "Stickers",
    price: 800,
    images: [
      "images/stickers1.png",
      "images/stickers2.png",
      "images/stickers3.png"
    ],
    desc: "3 láminas de stickers transparentes con diseños kawaii, ideales para decorar."
  },
  {
    id: 6,
    name: "Set de Stickers",
    category: "Stickers",
    price: 800,
    images: ["images/stickers8.png", "images/stickers9.png"],
    desc: "3 láminas de stickers transparentes con diseños kawaii, ideales para decorar."
  },
  {
    id: 7,
    name: "Stickers Glitter",
    category: "Stickers",
    price: 800,
    images: [
      "images/stickers4.png",
      "images/stickers5.png",
      "images/stickers6.png",
      "images/stickers7.png"
    ],
    desc: "Lámina de stickers brillantes con diseños kawaii, perfectos para dar un toque especial a tus proyectos."
  },
  {
    id: 8,
    name: "Set de Stickers Sanrio",
    category: "Stickers",
    price: 1800,
    images: ["images/stickers-sanrio1.png", "images/stickers-sanrio2.png"],
    desc: "20 láminas de stickers transparentes con diseños adorables de My Melody y Cinnamoroll."
  },
  {
    id: 9,
    name: "Set de Stickers Sanrio",
    category: "Stickers",
    price: 1800,
    images: ["images/stickers-sanrio3.png", "images/stickers-sanrio4.png"],
    desc: "25 láminas de stickers transparentes con diseños adorables de My Melody y Cinnamoroll."
  },
  {
    id: 10,
    name: "Corrector en Cinta 12m",
    category: "Correctores",
    price: 600,
    images: ["images/corrector-cinta12m1.png", "images/corrector-cinta12m2.png"],
    desc: "Corrector de secado rápido."
  },
  {
    id: 11,
    name: "Corrector en Cinta 36m",
    category: "Correctores",
    price: 800,
    images: ["images/corrector-cinta36.png"],
    desc: "Corrector de secado rápido."
  },
  {
    id: 12,
    name: "Corrector en Cinta 38m",
    category: "Correctores",
    price: 1000,
    images: ["images/corrector-cinta38.png"],
    desc: "Corrector de secado rápido."
  },
  {
    id: 13,
    name: "Corrector Líquido 8ml",
    category: "Correctores",
    price: 1000,
    images: ["images/corrector-liquido.png"],
    desc: "Corrector de secado rápido."
  },
  {
    id: 14,
    name: "Post-it Transparentes",
    category: "Notas",
    price: 800,
    images: ["images/transparentes.png"],
    desc: "50 notas adhesivas transparentes de 9,5 x 7 cm, ideales para escribir sobre libros sin rayarlos."
  },
  {
    id: 15,
    name: "Post-it Magnéticos",
    category: "Notas",
    price: 1200,
    images: ["images/magneticas.png"],
    desc: "50 notas magnéticas de 10,5 x 7 cm, perfectas para colocar sobre distintas superficies."
  },
  {
    id: 16,
    name: "Post-it Snoopy",
    category: "Notas",
    price: 1000,
    images: ["images/snoopy.png"],
    desc: "40 notas adhesivas de Snoopy de 9 x 7,4 cm."
  },
  {
    id: 17,
    name: "Post-it Relojes",
    category: "Notas",
    price: 800,
    images: ["images/relojes.png"],
    desc: "90 notas adhesivas con diseño de relojes análogos."
  },
  {
    id: 18,
    name: "Goma Cat Paw",
    category: "Gomas",
    price: 1500,
    images: ["images/gomagato1.png"],
    desc: "Goma de borrar con rodillo de limpieza y lindo diseño de patita de gato."
  },
  {
    id: 19,
    name: "Goma Capibara",
    category: "Gomas",
    price: 1500,
    images: ["images/gomacapi.png"],
    desc: "Goma de borrar retráctil con tierna forma de capibara."
  },
  {
    id: 20,
    name: "Goma Cat Paw Retráctil",
    category: "Gomas",
    price: 1600,
    images: ["images/gomagato2.png"],
    desc: "Goma de borrar retráctil con forma de patita de gato y glitter."
  }
];

const categories = ["Todos", ...new Set(products.map(product => product.category))];
let currentCategory = "Todos";
let search = "";
let cart = [];

if (typeof document === "undefined") {
  // This file is intended for a browser page with the matching HTML elements.
} else {
  const $ = id => document.getElementById(id);
  const money = value => "$" + value.toLocaleString("es-CL");

function escapeHTML(value) {
  const element = document.createElement("div");
  element.textContent = value;
  return element.innerHTML;
}

function renderCategories() {
  $("categories").innerHTML = categories.map(category => `
    <button
      class="category ${category === currentCategory ? "active" : ""}"
      type="button"
      data-category="${escapeHTML(category)}"
    >
      ${escapeHTML(category)}
    </button>
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
        ${product.images.map((image, index) => `
          <img
            src="${image}"
            alt="${escapeHTML(product.name)}"
            class="slide ${index === 0 ? "active" : ""}"
            loading="lazy"
          >
        `).join("")}

        ${product.images.length > 1 ? `
          <button class="prev" type="button" aria-label="Ver imagen anterior">◀</button>
          <button class="next" type="button" aria-label="Ver imagen siguiente">▶</button>
        ` : ""}
      </div>

      <h3>${escapeHTML(product.name)}</h3>
      <p>${escapeHTML(product.desc)}</p>

      <div class="card-bottom">
        <span class="price">${money(product.price)}</span>
        <button
          class="add"
          type="button"
          data-add-id="${product.id}"
          aria-label="Agregar ${escapeHTML(product.name)} al carrito"
        >
          +
        </button>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const product = products.find(product => product.id === id);
  if (!product) return;

  const item = cart.find(product => product.id === id);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  renderCart();
  openCart();
}

function changeQty(id, amount) {
  const item = cart.find(product => product.id === id);
  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

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
          <img src="${item.images[0]}" alt="${escapeHTML(item.name)}">
        </div>

        <div class="cart-item-info">
          <strong>${escapeHTML(item.name)}</strong>
          <small>${money(item.price)} c/u</small>
        </div>

        <div class="qty">
          <button type="button" data-qty-id="${item.id}" data-qty-change="-1" aria-label="Quitar una unidad de ${escapeHTML(item.name)}">−</button>
          <span aria-label="Cantidad">${item.qty}</span>
          <button type="button" data-qty-id="${item.id}" data-qty-change="1" aria-label="Agregar una unidad de ${escapeHTML(item.name)}">+</button>
        </div>
      </div>
    `).join("")
    : "<p style='text-align:center;color:#999;padding:40px 10px'>Tu carrito está vacío 🐾</p>";
}

function openCart() {
  $("cart").classList.add("open");
  $("overlay").classList.add("show");
  $("cart").setAttribute("aria-hidden", "false");
}

function closeCart() {
  $("cart").classList.remove("open");
  $("overlay").classList.remove("show");
  $("cart").setAttribute("aria-hidden", "true");
}

$("search").addEventListener("input", event => {
  search = event.target.value.trim();
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

  const phone = "56912345678";
  let message = "Hola Boofi 💗 Quiero realizar este pedido:\n\n";

  cart.forEach(item => {
    message += `• ${item.name} x${item.qty} - ${money(item.price * item.qty)}\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  message += `\nTotal: ${money(total)}\n\n¡Gracias! ✨`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
});

document.addEventListener("click", event => {
  const categoryButton = event.target.closest("[data-category]");

  if (categoryButton) {
    setCategory(categoryButton.dataset.category);
    return;
  }

  const addButton = event.target.closest("[data-add-id]");

  if (addButton) {
    addToCart(Number(addButton.dataset.addId));
    return;
  }

  const qtyButton = event.target.closest("[data-qty-id]");

  if (qtyButton) {
    changeQty(
      Number(qtyButton.dataset.qtyId),
      Number(qtyButton.dataset.qtyChange)
    );
    return;
  }

  const carouselButton = event.target.closest(".prev, .next");

  if (!carouselButton) return;

  const container = carouselButton.closest(".product-images");
  const slides = [...container.querySelectorAll(".slide")];

  if (slides.length < 2) return;

  let index = slides.findIndex(slide => slide.classList.contains("active"));

  if (index === -1) index = 0;

  slides[index].classList.remove("active");

  if (carouselButton.classList.contains("next")) {
    index = (index + 1) % slides.length;
  } else {
    index = (index - 1 + slides.length) % slides.length;
  }

  slides[index].classList.add("active");
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
  }
});

renderCategories();
  renderProducts();
  renderCart();
}
