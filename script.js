const products = [
  {
    id: 1,
    name: "Pegamento Líquido 50ml",
    category: "Pegamentos",
    price: 1300,
    images: ["images/pegamento-liquido.png"],
    desc: "¡Pegado fácil y sin complicaciones! Pegamento de alta adherencia para tus trabajos escolares, manualidades y proyectos de papelería."
  },
  {
    id: 2,
    name: "Masilla Mágica 35gr",
    category: "Pegamentos",
    price: 2500,
    images: ["images/pegamento-magico.png"],
    desc: "¡Pega, despega y vuelve a usar! Masilla adhesiva moldeable y reutilizable. Ideal para fijar objetos sin dañar superficies."
  },
  {
    id: 3,
    name: "Pegamento en Cinta 8m",
    category: "Pegamentos",
    price: 1800,
    images: ["images/cinta8m.png"],
    desc: "¡Pega fácil, rápido y sin ensuciar! Cinta adhesiva ideal para trabajos de papelería, tareas y manualidades."
  },
  {
    id: 4,
    name: "Pegamento en Cinta 6m",
    category: "Pegamentos",
    price: 1600,
    images: ["images/cinta6m.png"],
    desc: "¡Tu aliado para pegar al instante! Cinta adhesiva práctica y fácil de usar. Ideal para papel, cartulina, tarjetas y pequeños proyectos."
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
    desc: "¡Tu dosis diaria de ternura! Incluye 3 láminas de stickers transparentes con adorables diseños kawaii para personalizar todo lo que quieras."
  },
  {
    id: 6,
    name: "Set de Stickers",
    category: "Stickers",
    price: 800,
    images: ["images/stickers9.png", "images/stickers10.png"],
    desc: "Set de 3 láminas transparentes con tiernas ilustraciones kawaii, perfectas para decorar."
  },
  {
    id: 7,
    name: "Stickers con Glitter",
    category: "Stickers",
    price: 800,
    images: [
      "images/stickers5.png",
      "images/stickers6.png",
      "images/stickers7.png"
    ],
    desc: "¡Brillo y magia en cada detalle! 1 lámina de stickers brillantes con diseños kawaii para destacar tus trabajos y manualidades."
  },
  {
    id: 8,
    name: "Set de Stickers Sanrio",
    category: "Stickers",
    price: 1800,
    images: ["images/sanrio1.png", "images/sanrio2.png"],
    desc: "La ternura de My Melody y Cinnamoroll en 20 láminas transparentes, perfectas para decorar."
  },
  {
    id: 9,
    name: "Set de Stickers Sanrio",
    category: "Stickers",
    price: 1800,
    images: ["images/sanrio3.png", "images/sanrio4.png"],
    desc: "La ternura de My Melody y Cinnamoroll en 20 láminas transparentes, ideales para decorar."
  },
  {
    id: 10,
    name: "Corrector en Cinta 12m",
    category: "Correctores",
    price: 600,
    images: ["images/12m1.png", "images/12m2.png"],
    desc: "¡Correcciones rápidas y limpias! Práctico corrector compacto con adorable diseño de astronauta."
    },
    {
    id: 11,
    name: "Corrector en Cinta 36m",
    category: "Correctores",
    price: 800,
    images: ["images/36m.png"],
    desc: "¡Diseño tierno y gran duración! Corrector compacto y fácil de usar para una aplicación suave al instante."
  },
  {
    id: 12,
    name: "Corrector en Cinta 38m",
    category: "Correctores",
    price: 1000,
    images: ["images/38m1.png"],
    desc: "¡Precisión y ergonomía! Corrector en cinta con tierno diseño kawaii que garantiza trazos limpios sin manchas."
  },
  {
    id: 13,
    name: "Corrector Líquido 8ml",
    category: "Correctores",
    price: 850,
    images: ["images/corrector-liquido.png"],
    desc: "Corrector con punta metálica de alta precisión y secado rápido. Ideal para uso escolar o de oficina."
  },
  {
    id: 14,
    name: "Notas Transparentes",
    category: "Notas",
    price: 800,
    images: ["images/transparentes.png"],
    desc: "¡Toma notas sin dañar tus libros! 50 notas adhesivas transparentes ideales para calcar, subrayar o escribir encima sin arruinar tus páginas."
  },
  {
    id: 15,
    name: "Notas Magnéticas",
    category: "Notas",
    price: 1200,
    images: ["images/magneticos1.png"],
    desc: "¡Se adhieren a casi cualquier superficie sin pegamento! 50 notas estáticas de colores vibrantes para dejar recados visibles en todos lados. ("
  },
  {
    id: 16,
    name: "Post-it Snoopy",
    category: "Notas",
    price: 1000,
    images: ["images/snoopy.png"],
    desc: " ¡Añade un toque tierno a tus recordatorios! 40 notas adhesivas con diseños clásicos de Snoopy para organizar tu día con estilo."
  },
  {
    id: 17,
    name: "Post-it Relojes",
    category: "Notas",
    price: 800,
    images: ["images/relojes.png"],
    desc: " ¡Organiza tus pendientes de forma creativa! Pack con 90 notas adhesivas con diseños de relojes para planificar tus horarios y tareas."
  },
  {
    id: 18,
    name: "Goma Cat Paw con Rodillo",
    category: "Gomas",
    price: 1500,
    images: ["images/gomagato1.png"],
    desc: "¡Limpieza y diversión en un solo producto! Goma de borrar con práctico rodillo integrado y tierno diseño de patita de gato."
  },
  {
    id: 19,
    name: "Goma Capibara Retráctil",
    category: "Gomas",
    price: 1500,
    images: ["images/gomacapi.png"],
    desc: "¡Borra con estilo y ternura! Goma de borrar retráctil con un adorable diseño de capibara."
  },
  {
    id: 20,
    name: "Goma Cat Paw Retráctil",
    category: "Gomas",
    price: 1600,
    images: ["images/gomagato2.png"],
    desc: "¡Un toque brillante para tu estuche! Goma de borrar retráctil en forma de patita de gato con acabado con glitter."
  },
  {
    id: 21,
    name: "Sacapuntas Kuromi",
    category: "Sacapuntas",
    price: 1800,
    images: ["images/skuromi.png"],
    desc: "¡El estilo único de Kuromi en tu estuche! Práctico set que incluye sacapuntas y goma de borrar."
  },
  {
    id: 22,
    name: "Sacapuntas Burger",
    category: "Sacapuntas",
    price: 1500,
    images: ["images/sburger.png"],
    desc: "¡El detalle más simpático para tu estuche! Un sacapuntas irresistible y original con diseño de hamburguesa."
  },
  {
    id: 23,
    name: "Sacapuntas Lucky Cat",
    category: "Sacapuntas",
    price: 1500,
    images: ["images/slucky.png"],
    desc: " ¡Atrae la buena suerte a tus estudios! Sacapuntas con diseño de gatito de la fortuna, disponible en colores negro y rosado."
  },
{
    id: 24,
    name: "Libreta Van Gogh",
    category: "Van Gogh",
    price: 1500,
    images: ["images/libreta1.png"],
    desc: "¡Inspira tu escritura! Libreta de notas con 44 páginas de líneas horizontales, perfecta para escribir y coleccionar."
  },
  {
    id: 25,
    name: "Carpeta Sobre",
    category: "Van Gogh",
    price: 1500,
    images: ["images/sobre1.png"],
    desc: "¡Organiza tus documentos con arte! Práctica carpeta tipo sobre en tamaño A4."
  },
  {
    id: 26,
    name: "Washi Tape",
    category: "Van Gogh",
    price: 700,
    images: ["images/washi.png"],
    desc: "¡Decora con arte y color! Cintas adhesivas decorativas de 5 m x 1,5 cm inspiradas en las obras maestras de Van Gogh."
  },
  {
    id: 27,
    name: "Notas Van Gogh",
    category: "Van Gogh",
    price: 1600,
    images: ["images/post-vg.png"],
    desc: " ¡Arte en cada página! 160 notas adhesivas ideales para usar como separadores y marcar tus lecturas favoritas con estilo."
  },
  {
    id: 28,
    name: "Mini Tijera Cat Paw",
    category: "Herramientas de Corte",
    price: 2000,
    images: ["images/t1.png"],
    desc: "¡Práctica y adorable! Tijera de bolsillo con diseño de patita de gato, ideal para llevar siempre en tu estuche."
  },
  {
    id: 29,
    name: "Cortador 360° Sanrio",
    category: "Herramientas de Corte",
    price: 2000,
    images: ["images/csanrio1.png"],
    desc: "¡Cortes suaves y detallados! Cuchilla giratoria de 360° en cualquier dirección, perfecta para manualidades y scrapbooking."
  },
  {
    id: 30,
    name: "Perforadora de Circulos",
    category: "Herramientas de Corte",
    price: 2500,
    images: ["images/pcirculo.png"],
    desc: "¡Círculos perfectos para tus creaciones! Perfora círculos de 2,54 cm, ideal para decoración y proyectos DIY."
  },
  {
    id: 31,
    name: "Cortador de Bordes",
    category: "Herramientas de Corte",
    price: 3000,
    images: ["images/pbordes.png"],
    desc: "¡Dale un acabado profesional a tus proyectos! Cortador especializado para esquinas y bordes de papel, cartulina o fotos."
  },
  {
    id: 32,
    name: "Mini Guillotina",
    category: "Herramientas de Corte",
    price: 4500,
    images: ["images/guillotina1.png"],
    desc: "¡Cortes rectos y precisos sin esfuerzo! Ideal para papel y cartulina, incluye regla auxiliar expansible para mayor comodidad."
  },
  {
    id: 33,
    name: "Mini Guillotina",
    category: "Herramientas de Corte",
    price: 4500,
    images: ["images/guillotina2.png"],
    desc: "¡Cortes impecables sin esfuerzo! Diseñada para papel y cartulina con total precisión, incluye una regla auxiliar extensible para medir con máxima comodidad."
  },
  {
    id: 34,
    name: "Lápiz Cortador",
    category: "Herramientas de Corte",
    price: 800,
    images: ["images/lapizcutter.png"],
    desc: "¡Control total y seguridad! Diseñado con formato de lápiz para cortes finos y exactos en tus proyectos creativos."
  },
  {
    id: 35,
    name: "Corta Carton Delgado",
    category: "Herramientas de Corte",
    price: 1500,
    images: ["images/carton.png"],
    desc: "¡Precisión y resistencia! Práctico cortador que incluye dos cuchillas de repuesto para cartón delgado y papel grueso."
  },
  {
    id: 36,
    name: "Regla Capibara 15 cm",
    category: "Reglas",
    price: 1500,
    images: ["images/regla1.png"],
    desc: "¡Dale un toque tierno a tus útiles! Regla de 15 cm con diseño de capibara para quienes aman los detalles únicos."
  },
  {
    id: 37,
    name: "Regla Cat Paw 15cm",
    category: "Reglas",
    price: 1500,
    images: ["images/regla2.png"],
    desc: "¡Brillitos y ternura en tus trazos! Regla de 15 cm con diseño de patita de gato y detalles brillantes."
  },
  {
    id: 38,
    name: "Regla Cubo 30cm",
    category: "Reglas",
    price: 1500,
    images: ["images/regla30.png"],
    desc: "¡Resistente y práctica! Regla de acrílico transparente con forma de cubo, perfecta para proyectos escolares y creativos."
  },
  {
    id: 39,
    name: "Plumones de Pizarra",
    category: "Lápices",
    price: 4000,
    images: ["images/plumones.png"],
    desc: "¡Ideal para clases, reuniones o estudios! Set de 12 marcadores de punta gruesa, escritura fluida y limpieza rápida sin dejar marcas."
  },
  {
    id: 40,
    name: "Marcadores Metálicos",
    category: "Lápices",
    price: 5500,
    images: ["images/metalicos.png"],
    desc: "¡Brillo y color en cada trazo! Set de 10 marcadores metalizados de alta calidad con doble punta (fina y pincel) para diseños creativos."
  },
  {
    id: 41,
    name: "Lápiz Borrable: Horóscopo",
    category: "Lápices",
    price: 500,
    images: ["images/borrables1.png"],
    desc: "¡Adiós a los errores! Tinta gel azul con punta fina de 0,5 mm, 100% borrable para mantener tus apuntes siempre perfectos."
  },
  {
    id: 42,
    name: "Lápiz Borrable: Kawaii",
    category: "Lápices",
    price: 500,
    images: ["images/borrables2.png"],
    desc: "¡Escribe, borra y corrige sin huellas! Tinta gel azul con punta fina de 0,5 mm, 100% borrable y limpia."
  },
  {
    id: 43,
    name: "Lápiz Gel ",
    category: "Lápices",
    price: 500,
    images: ["images/gel1.png"],
    desc: "¡Escritura fluida con tus personajes favoritos! Diseños inspirados en Blackpink, One Piece y Naruto, con tinta gel negra y punta fina de 0,5 mm para una estética impecable."
  },
  {
    id: 44,
    name: "Lápiz Spy x Family",
    category: "Lápices",
    price: 500,
    images: ["images/gelspy.png"],
    desc: "¡Adiós a los errores con tus personajes favoritos! Tinta gel negra con punta fina de 0,5 mm, 100% borrable y con diseños de Spy x Family para mantener tus apuntes siempre perfectos."
  },
  {
    id: 45,
    name: "Set de Lápices Mina",
    category: "Lápices",
    price: 1800,
    images: ["images/setminas.png"],
    desc: "¡Prácticos y adorables! Set de lápices con minas intercambiables y un tierno diseño de ositos al estilo kawaii."
  },
  {
    id: 46,
    name: "Portaminas Jujutsu Kaisen",
    category: "Lápices",
    price: 500,
    images: ["images/portaminas.png"],
    desc: "¡Suma el poder de tus hechiceros favoritos a tu estuche! Portaminas de 0,5 mm con diseños detallados e ilustraciones de tus personajes favoritos."
  },
  {
    id: 47,
    name: "Lápiz Infinito",
    category: "Lápices",
    price: 500,
    images: ["images/infinito.png"],
    desc: "¡Escribe y dibuja sin parar! Lápiz mina de larga duración con un tierno diseño kawaii, práctico y listo para acompañarte todos los días."
  },
    {
    id: 48,
    name: "Lonchera Kawaii",
    category: "Loncheras y Estuches",
    price: 4500,
    images: ["images/l1.png","images/l2.png","images/l3.png","images/l4.png","images/l5.png","images/l6.png"],
    desc: "¡Práctica, espaciosa y térmica! Ideal para transportar tu comida, cuenta con un bolsillo frontal y dos bolsillos laterales."
  },
  {
    id: 49,
    name: "Estuche Multiuso",
    category: "Loncheras y Estuches",
    price: 4500,
    images: ["images/e1.png","images/e2.png","images/e3.png","images/e4.png","images/e5.png"]
    desc: "¡Máxima la organización de tus cosas! Cuenta con 2 bolsillos externos y 12 compartimientos en su interior para mantener todo en orden."
  },
  {
    id:50,
    name: "Puntero Manito",
    category: "Puntero",
    price: 2000,
    images: ["images/puntero.png"],
    desc: "¡Práctico, plegable y divertido! Se extiende hasta 68 cm, ideal para clases o presentaciones."
  },
   {
    id:51,
    name: "Corrector + Pegamento en Cinta",
    category: "Correctores",
    price: 1500,
    images: ["images/corrector-pegamento.png"],
    desc: "."
  },
   {
    id:52,
    name: "Esquelas + Sobres Cinnamoroll",
    category: "Sanrio",
    price: 1500,
    images: ["images/esquela.png"],
    desc: ""
  },
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
