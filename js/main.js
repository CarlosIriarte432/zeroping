// ==========================================================================
// ZERO PING - Script Principal (main.js) OPTIMIZADO PARA RENDIMIENTO
// ==========================================================================

// Inicializar iconos de Lucide
lucide.createIcons();

// 1. Menú Móvil
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// 2. Motor Interactivo Símbolo </> (OPTIMIZADO CON requestAnimationFrame)
function initInteractiveCodeSymbol() {
    const stage = document.getElementById('code-hero-interactive');
    const symbolGroup = document.getElementById('code-symbol-tilt');
    const glow = document.getElementById('code-cursor-glow');
    const spark1 = document.getElementById('code-spark-1');
    const spark2 = document.getElementById('code-spark-2');

    if (!stage || !symbolGroup) return;

    let isTicking = false;

    // Al entrar, quitamos la transición de CSS para que JS mueva los elementos sin lag
    stage.addEventListener('mouseenter', () => {
        symbolGroup.style.transition = 'none';
        if (glow) glow.style.transition = 'none';
        if (spark1) spark1.style.transition = 'none';
        if (spark2) spark2.style.transition = 'none';
    });

    stage.addEventListener('mousemove', (e) => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                const rect = stage.getBoundingClientRect();
                const normX = ((e.clientX - rect.left) / rect.width) - 0.5;
                const normY = ((e.clientY - rect.top) / rect.height) - 0.5;
                
                const rotateY = normX * 36;
                const rotateX = -normY * 32;
                const moveX = normX * 24;
                const moveY = normY * 20;

                symbolGroup.style.transform = `translate3d(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px, 20px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
                
                if (glow) glow.style.transform = `translate3d(${(normX * 70).toFixed(1)}px, ${(normY * 60).toFixed(1)}px, 0)`;
                if (spark1) spark1.style.transform = `translate3d(${(-normX * 45).toFixed(1)}px, ${(-normY * 45).toFixed(1)}px, 40px)`;
                if (spark2) spark2.style.transform = `translate3d(${(normX * 50).toFixed(1)}px, ${(normY * 35).toFixed(1)}px, 30px)`;
                
                isTicking = false;
            });
            isTicking = true;
        }
    }, { passive: true });

    // Al salir, devolvemos la transición de CSS para que vuelva al centro suavemente
    stage.addEventListener('mouseleave', () => {
        symbolGroup.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        if (glow) glow.style.transition = 'transform 0.4s ease-out';
        if (spark1) spark1.style.transition = 'transform 0.4s ease-out';
        if (spark2) spark2.style.transition = 'transform 0.4s ease-out';

        symbolGroup.style.transform = 'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)';
        if (glow) glow.style.transform = 'translate3d(0px, 0px, 0px)';
        if (spark1) spark1.style.transform = 'translate3d(0px, 0px, 0px)';
        if (spark2) spark2.style.transform = 'translate3d(0px, 0px, 0px)';
    });
}

// 3. Datos y Lógica del Portafolio
const portfolioCases = [
    {
        id: 'healthy-snacks',
        client: 'Healthy Snacks',
        featured: true,
        category: 'ecommerce',
        badge: 'E-COMMERCE EN VIVO',
        accent: 'from-emerald-500/20 via-zp-blue/15 to-transparent',
        icon: 'shopping-bag',
        title: 'Plataforma E-Commerce & Control de Inventario',
        shortDesc: 'Tienda online de alto rendimiento para venta de snacks saludables con stock sincronizado en tiempo real y pasarela de pago integrada.',
        tags: ['Catálogo Dinámico', 'Pasarela de Pagos', 'Control de Stock'],
        previewUrl: 'https://carlosiriarte432.github.io/healthysnacks/', 
        displayUrl: 'tienda.healthysnacks.cl'
    },
    {
        id: 'loa-logistics',
        client: 'Minera Loa Logistics',
        featured: false,
        category: 'erp',
        badge: 'ERP LOGÍSTICO',
        accent: 'from-zp-blue/20 via-blue-500/10 to-transparent',
        icon: 'truck',
        title: 'Sistema ERP de Control de Flota y Operaciones',
        shortDesc: 'Plataforma web para gestión de camionetas, control documental de conductores y programación de mantenciones en terreno.',
        tags: ['Control de Flota', 'Checklists Digitales', 'Alertas Documentales']
    },
    {
        id: 'clinica-san-lorenzo',
        client: 'Centro Médico San Lorenzo',
        featured: false,
        category: 'gestion',
        badge: 'GESTIÓN ADMINISTRATIVA',
        accent: 'from-cyan-500/20 via-zp-blue/10 to-transparent',
        icon: 'calendar-check',
        title: 'Sistema de Agendamiento y Control de Caja',
        shortDesc: 'Software administrativo a medida para gestión de horas médicas, recaudación diaria por turno y liquidación de convenios.',
        tags: ['Agenda Web', 'Cuadratura de Caja', 'Reportes Gerenciales']
    },
    {
        id: 'agronorte-export',
        client: 'AgroNorte Distribución',
        featured: false,
        category: 'erp',
        badge: 'BODEGA & B2B',
        accent: 'from-purple-500/20 via-zp-blue/10 to-transparent',
        icon: 'package-check',
        title: 'ERP Multi-Bodega y Portal de Pedidos Mayoristas',
        shortDesc: 'Control de inventario por lotes, trazabilidad de despacho y portal exclusivo para pedidos recurrentes de clientes empresas.',
        tags: ['Multi-Bodega', 'Portal Clientes B2B', 'Rutas de Despacho']
    },
    {
        id: 'ferreteria-atacama',
        client: 'Ferretería Industrial Atacama',
        featured: false,
        category: 'ecommerce',
        badge: 'CATÁLOGO & POS WEB',
        accent: 'from-amber-500/20 via-zp-blue/10 to-transparent',
        icon: 'file-spreadsheet',
        title: 'Catálogo Mayorista y Cotizador Instantáneo',
        shortDesc: 'Sistema conectado entre mostrador y web para búsqueda rápida de productos, listas de precios por convenio y emisión de cotizaciones PDF.',
        tags: ['Cotizador PDF', 'Listas de Precios B2B', 'Sincronización Stock']
    }
];

function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    
    const filtered = filter === 'all' ? portfolioCases : portfolioCases.filter(c => c.category === filter);

    grid.innerHTML = filtered.map(item => `
        <div class="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between ${item.featured ? 'md:col-span-2 lg:col-span-2 border-zp-blue/50' : ''}">
            
            <div class="relative h-40 bg-gradient-to-br ${item.accent} border-b border-white/10 p-5 flex flex-col justify-between overflow-hidden">
                <div class="flex items-center justify-between relative z-10">
                    <span class="px-3 py-1 rounded-full text-[11px] font-mono ${item.featured ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold' : 'bg-[#05060B]/80 text-zp-cyan border border-white/10'}">
                        ${item.badge}
                    </span>
                    <div class="flex items-center space-x-1.5 bg-[#05060B]/70 px-2.5 py-1 rounded-full border border-white/10">
                        <span class="w-2 h-2 rounded-full bg-rose-400/80"></span>
                        <span class="w-2 h-2 rounded-full bg-amber-400/80"></span>
                        <span class="w-2 h-2 rounded-full bg-emerald-400/80"></span>
                    </div>
                </div>

                <div class="flex items-end justify-between relative z-10">
                    <div>
                        <div class="text-xs font-mono uppercase tracking-wider text-slate-400">CLIENTE</div>
                        <div class="font-display text-xl font-bold text-white flex items-center gap-2">
                            <span>${item.client}</span>
                        </div>
                    </div>
                    <div class="w-11 h-11 rounded-xl bg-[#05060B]/80 border border-white/15 flex items-center justify-center text-zp-cyan">
                        <i data-lucide="${item.icon}" class="w-5 h-5"></i>
                    </div>
                </div>
            </div>

            <div class="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                    <h3 class="font-display ${item.featured ? 'text-2xl' : 'text-xl'} font-bold text-white mb-2">
                        ${item.title}
                    </h3>
                    <p class="text-slate-300 text-sm leading-relaxed line-clamp-2">
                        ${item.shortDesc}
                    </p>
                </div>

                <div>
                    <div class="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 mb-4">
                        ${item.tags.map(tag => `<span class="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300">${tag}</span>`).join('')}
                    </div>
                    
                    ${item.previewUrl ? `
                    <button onclick="openPreviewModal('${item.previewUrl}', '${item.displayUrl}')" class="w-full py-3 rounded-xl bg-zp-blue/20 hover:bg-zp-blue border border-zp-blue/50 hover:border-zp-blue text-zp-cyan hover:text-white text-sm font-semibold transition flex items-center justify-center gap-2 group">
                        <i data-lucide="external-link" class="w-4 h-4"></i>
                        <span>Abrir Demo en Vivo</span>
                    </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

function filterPortfolio(category) {
    ['all', 'ecommerce', 'erp', 'gestion'].forEach(cat => {
        const btn = document.getElementById(`filter-${cat}`);
        if (!btn) return;
        if (cat === category) {
            btn.className = 'px-4 py-2 rounded-xl text-xs font-mono bg-zp-blue text-white font-semibold transition';
        } else {
            btn.className = 'px-4 py-2 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition';
        }
    });
    renderPortfolio(category);
}

// 4. Lógica del Modal de Preview (Sitio en Vivo)
function openPreviewModal(url, displayUrl) {
    const modal = document.getElementById('preview-modal');
    const modalContent = document.getElementById('preview-modal-content');
    const iframe = document.getElementById('preview-iframe');
    const urlText = document.getElementById('preview-url-text');
    const loader = document.getElementById('preview-loader');

    if (!modal || !iframe) return;

    urlText.textContent = `https://${displayUrl}`;
    loader.classList.remove('hidden');
    iframe.src = url;

    modal.classList.remove('hidden');
    
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
    }, 10);
}

function closePreviewModal() {
    const modal = document.getElementById('preview-modal');
    const modalContent = document.getElementById('preview-modal-content');
    const iframe = document.getElementById('preview-iframe');

    if (!modal) return;

    modal.classList.add('opacity-0');
    modalContent.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        iframe.src = ''; 
    }, 300);
}

// 5. Lógica del Cotizador de Proyectos
let selectedModules = [
    { name: 'Sistema ERP Integral', weeks: 4 }
];
let selectedScaleLabel = '1 a 10 (Pyme)';

function toggleModule(btnEl, name, weeks) {
    const exists = selectedModules.find(m => m.name === name);
    
    if (exists) {
        if (selectedModules.length === 1) return;
        
        selectedModules = selectedModules.filter(m => m.name !== name);
        btnEl.classList.remove('selected', 'border-zp-blue', 'bg-zp-blue/15');
        btnEl.classList.add('border-white/10', 'bg-[#070A12]');
        btnEl.querySelector('.module-icon').setAttribute('data-lucide', 'square');
        btnEl.querySelector('.module-icon').classList.replace('text-zp-cyan', 'text-slate-500');
    } else {
        selectedModules.push({ name, weeks });
        btnEl.classList.add('selected', 'border-zp-blue', 'bg-zp-blue/15');
        btnEl.classList.remove('border-white/10', 'bg-[#070A12]');
        btnEl.querySelector('.module-icon').setAttribute('data-lucide', 'check-square');
        btnEl.querySelector('.module-icon').classList.replace('text-slate-500', 'text-zp-cyan');
    }
    
    lucide.createIcons();
    updateBlueprint();
}

function setScale(id, label) {
    selectedScaleLabel = label;
    ['pyme', 'mediana', 'corporativo'].forEach(s => {
        const el = document.getElementById(`scale-${s}`);
        if (!el) return;
        if (s === id) {
            el.className = 'scale-btn py-3 px-4 rounded-xl border border-zp-blue bg-zp-blue/15 text-white text-xs font-mono font-semibold';
        } else {
            el.className = 'scale-btn py-3 px-4 rounded-xl border border-white/10 bg-[#070A12] text-slate-300 text-xs font-mono';
        }
    });
    updateBlueprint();
}

function updateBlueprint() {
    const listEl = document.getElementById('blueprint-modules-list');
    if (!listEl) return;
    
    listEl.innerHTML = selectedModules.map(m => `
        <span class="px-2.5 py-1 rounded-md bg-zp-blue/20 border border-zp-blue/40 text-xs font-mono text-white">
            ${m.name}
        </span>
    `).join('');

    const totalWeeks = selectedModules.reduce((acc, item) => acc + item.weeks, 1);
    const timeEl = document.getElementById('blueprint-time');
    const scaleEl = document.getElementById('blueprint-scale');
    
    if (timeEl) timeEl.textContent = `${totalWeeks} a ${totalWeeks + 2} Semanas`;
    if (scaleEl) scaleEl.textContent = selectedScaleLabel;
}

function transferQuoteToContact() {
    const modulesText = selectedModules.map(m => m.name).join(', ');
    const msgField = document.getElementById('form-message');
    
    if (msgField) {
        msgField.value = `Hola equipo Zero Ping, me interesa cotizar un sistema a medida con los siguientes módulos:\n- ${modulesText}\n\nEscala estimada: ${selectedScaleLabel}.\n\nDetalles adicionales: `;
    }
    
    const contactoSec = document.getElementById('contacto');
    if (contactoSec) {
        contactoSec.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (msgField) msgField.focus();
}

function handleContactSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById('form-name');
    const companyInput = document.getElementById('form-company');
    const feedback = document.getElementById('form-feedback');

    const name = nameInput ? nameInput.value : '';
    const company = companyInput ? companyInput.value : '';

    if (feedback) {
        feedback.classList.remove('hidden');
        feedback.innerHTML = `<strong>¡Solicitud recibida con éxito, ${name}!</strong> Hemos registrado el requerimiento para <strong>${company}</strong>. Un ingeniero de software de Zero Ping te contactará dentro de las próximas 2 horas.`;
    }
    e.target.reset();
}

window.addEventListener('DOMContentLoaded', () => {
    initInteractiveCodeSymbol();
    renderPortfolio('all');
    updateBlueprint();
});