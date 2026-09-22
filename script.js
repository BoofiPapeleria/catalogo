const products = [
    { id: 1, name: "Pegamento Líquido", category: "Pegamentos", price: 1500, images:, desc: "Pegamento líquido de 150 ml, su fórmula garantiza una adherencia fuerte y duradera en papel, cartón y otros materiales ligeros" },
    { id: 2, name: "Pegamento Líquido con Glitter", category: "Pegamentos", price: 1500, stock: 8, emoji: "✨", desc: "Pegamento brillante para manualidades y bullet journal." },
    { id: 3, name: "Pegamento en Cinta Patita de Gato", category: "Pegamentos", price: 1800, stock: 12, emoji: "🐾", desc: "Cinta adhesiva en rollo en forma de adorable patita." },
    { id: 4, name: "Stickers Holográficos Sanrio x50", category: "Stickers", price: 2500, stock: 20, emoji: "🌸", desc: "Set de 50 stickers estéticos holográficos resistentes al agua." },
    { id: 5, name: "Pack Stickers Pastel Animals", category: "Stickers", price: 2000, stock: 14, emoji: "🐰", desc: "Adhesivos troquelados de animalitos pasteles para decorar." },
    { id: 6, name: "Stickers Vintage Journaling", category: "Stickers", price: 2200, stock: 9, emoji: "📜", desc: "Stickers estéticos tipo papel kraft para notas y libretas." },
    { id: 7, name: "Notas Adhesivas Post-it Patitas", category: "Post-it", price: 1000, stock: 25, emoji: "🐾", desc: "Bloc de notas adhesivas con forma de patitas de gatito." },
    { id: 8, name: "Post-it Index Marcadores de Página", category: "Post-it", price: 1300, stock: 18, emoji: "🔖", desc: "Banderitas adhesivas plásticas de colores pasteles." },
    { id: 9, name: "Mini Block Notas Sanrio", category: "Post-it", price: 1600, stock: 11, emoji: "🎀", desc: "Notas adhesivas con tiernos personajes kawaii." },
    { id: 10, name: "Washi Tape Set Van Gogh Art", category: "Van Gogh", price: 3500, stock: 6, emoji: "🎨", desc: "Set de cintas washi tape inspiradas en obras de Van Gogh." },
    { id: 11, name: "Block de Notas Arte Clásico", category: "Van Gogh", price: 2800, stock: 10, emoji: "🖼️", desc: "Libreta de notas con portadas de pintura clásica." },
    { id: 12, name: "Goma de Borrar Macarrón / Postre", category: "Gomas", price: 900, stock: 30, emoji: "🧁", desc: "Goma perfumada con forma de deliciosos pastelitos kawaii." },
    { id: 13, name: "Goma Retráctil Patita de Gato", category: "Gomas", price: 1400, stock: 17, emoji: "🐱", desc: "Goma de borrar en barra con diseño deslizante de patita." },
    { id: 14, name: "Borrador en Forma de Té boba", category: "Gomas", price: 1100, stock: 22, emoji: "🧋", desc: "Tierno borrador con diseño de vaso de bubble tea." },
    { id: 15, name: "Sacapuntas con Depósito Osito", category: "Sacapuntas", price: 1200, stock: 15, emoji: "🧸", desc: "Sacapuntas de doble hoja con depósito para viruta." },
    { id: 16, name: "Sacapuntas Kawaii Estrella", category: "Sacapuntas", price: 1000, stock: 19, emoji: "⭐", desc: "Sacapuntas ergonómico con carita feliz." },
    { id: 17, name: "Tijera Escolar Segura con Funda", category: "Corte", price: 1800, stock: 13, emoji: "✂️", desc: "Tijeras con punta roma y funda protectora de patita." },
    { id: 18, name: "Cutter en Forma de Nube", category: "Corte", price: 1500, stock: 10, emoji: "☁️", desc: "Mini cutter retráctil ideal para abrir sobres y manualidades." },
    { id: 19, name: "Lápiz Gel 10 Colores Retráctil", category: "Lápices", price: 2500, stock: 20, emoji: "✏️", desc: "Lápiz multi-color con tintas pasteles y diseño kawaii." },
    { id: 20, name: "Portaminas 0.5mm Conejito", category: "Lápices", price: 1600, stock: 16, emoji: "🐰", desc: "Portaminas con topper de conejito de goma desmontable." },
    { id: 21, name: "Set Lápices Pastel Highlighter", category: "Lápices", price: 3800, stock: 12, emoji: "🖍️", desc: "Set de 6 destacados con tonos pasteles suaves." },
    { id: 22, name: "Lonchera Térmica Kawaii Bear", category: "Loncheras", price: 8900, stock: 5, emoji: "🍱", desc: "Bolso térmico impermeable con diseño de osito tierno." },
    { id: 23, name: "Bolsa Porta Alimentos Sanrio", category: "Loncheras", price: 9500, stock: 4, emoji: "🥪", desc: "Lonchera espaciosa con forro térmico interior." },
    { id: 24, name: "Regla Flexible de Silicona Animalitos", category: "Reglas", price: 1000, stock: 25, emoji: "📏", desc: "Regla de 20cm flexible y anti-rotura con figuras." },
    { id: 25, name: "Set Reglas Kawaii Geometría Pastel", category: "Reglas", price: 2200, stock: 14, emoji: "📐", desc: "Set de regla, escuadra y transportador en tonos pasteles." }
];

const categories = ["Todos", "Pegamentos", "Stickers", "Post-it", "Van Gogh", "Gomas", "Sacapuntas", "Corte", "Lápices", "Loncheras", "Reglas"];
let currentCategory = "Todos";
let searchQuery = "";
let cart = [];

const categoryContainer = document.getElementById('categoryContainer');
const productGrid = document.getElementById('productGrid');
const emptyState = document.getElementById('emptyState');
const cartDrawer = document.getElementById('cartDrawer');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartBadge = document.getElementById('cartBadge');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const searchInput = document.getElementById('searchInput');
const searchInputMobile = document.getElementById('searchInputMobile');
const productCount = document.getElementById('productCount');
const githubModal = document.getElementById('githubModal');

function renderCategories() {
    if (!categoryContainer) return;
    categoryContainer.innerHTML = '';
    categories.forEach(cat => {
        const isSelected = cat === currentCategory;
        const btn = document.createElement('button');
        btn.className = `whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition shadow-sm flex items-center space-x-1.5 ${
            isSelected 
                ? 'bg-pink-500 text-white shadow-pink-200' 
                : 'bg-white text-gray-600 hover:bg-pink-50 border border-pink-100'
        }`;
        btn.innerHTML = `${cat}`;
        btn.onclick = () => {
            currentCategory = cat;
            renderCategories();
            renderProducts();
        };
        categoryContainer.appendChild(btn);
    });
}

function renderProducts() {
    if (!productGrid) return;
    const filtered = products.filter(p => {
        const matchesCat = currentCategory === "Todos" || p.category === currentCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    if (productCount) productCount.textContent = `Mostrando ${filtered.length} productos`;
    productGrid.innerHTML = '';

    if (filtered.length === 0) {
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    } else {
        if (emptyState) emptyState.classList.add('hidden');
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = `bg-white rounded-3xl p-4 kawaii-shadow border-2 border-pink-100 flex flex-col justify-between transition transform hover:-translate-y-1 relative group`;
        
        card.innerHTML = `
