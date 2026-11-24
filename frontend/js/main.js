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

// 3. Datos y Lógica del Portafolio (MUTACIÓN GLITCH LENTA + LOGOS)
const portfolioCases = [
    {
        id: 'sae',
        client: 'Transportes SAE',
        logo: './frontend/src/saelogo.png',
        badge: 'ECOSISTEMA LOGÍSTICO',
        accent: 'from-zp-blue/25 via-blue-600/10 to-transparent',
        icon: 'truck',
        title: 'Sitio Corporativo & Suite Operativa',
        shortDesc: 'Presencia digital corporativa integrada con herramientas privadas de control documental y rastreo en tiempo real para su flota.',
        tags: ['Web Corporativa', 'Logística Minera', 'Arquitectura Cloud'],
        previewUrl: 'https://sae.carlosiriarte432.workers.dev/',
        displayUrl: 'transportessae.cl',
        ecosystem: [
            { name: 'SAEDocs', icon: 'file-check-2', desc: 'Control documental de flota y alertas de vencimiento.' },
            { name: 'SAETracker', icon: 'radar', desc: 'Rastreo GPS en vivo y estado de despachos por reserva.' }
        ]
    },
    {
        id: 'santa-elvira',
        client: 'Avícola Santa Elvira',
        logo: './frontend/src/santaelviralogo.png',
        badge: 'WEB CORPORATIVA',
        accent: 'from-amber-500/20 via-zp-blue/10 to-transparent',
        icon: 'store',
        title: 'Plataforma Digital',
        shortDesc: 'Sitio web de alto impacto diseñado para potenciar la identidad de marca, mostrar líneas de productos y agilizar el contacto comercial.',
        tags: ['Diseño a Medida', 'Catálogo Digital', 'Alta Velocidad'],
        previewUrl: 'https://santaelvira.carlosiriarte432.workers.dev/',
        displayUrl: 'avicolasantaelvira.cl'
    },
    {
        id: 'norfrut',
        client: 'Norfrut',
        logo: './frontend/src/norfrutlogo.png',
        badge: 'EXPORTACIÓN BILINGÜE',
        accent: 'from-emerald-500/20 via-zp-blue/10 to-transparent',
        icon: 'globe',
        title: 'Portal Internacional Bilingüe (ESP/ENG)',
        shortDesc: 'Sitio corporativo para exportadora frutícola con calendario interactivo de variedades, galería de campos y formularios segmentados.',
        tags: ['Bilingüe ESP/ENG', 'Catálogo Interactivo', 'Exportación'],
        previewUrl: 'https://norfrut.carlosiriarte432.workers.dev/',
        displayUrl: 'norfrut.cl'
    },
    {
        id: 'healthy-snacks',
        client: 'Healthy Snacks',
        logo: './frontend/src/healthysnackslogo.png',
        badge: 'E-COMMERCE',
        accent: 'from-cyan-500/20 via-zp-blue/10 to-transparent',
        icon: 'shopping-bag',
        title: 'Tienda Online & Control de Inventario',
        shortDesc: 'E-commerce propio con carrito ultrarrápido, stock sincronizado en tiempo real y pagos integrados sin comisiones mensuales.',
        tags: ['E-Commerce', 'Mercado Pago', 'Stock en Vivo']
    },
    {
        id: 'atacama-industrial',
        client: 'Ferretería Industrial Atacama',
        logo: './frontend/src/atacamalogo.png',
        badge: 'CATÁLOGO B2B',
        accent: 'from-purple-500/20 via-zp-blue/10 to-transparent',
        icon: 'file-spreadsheet',
        title: 'Portal Mayorista y Cotizador Automático',
        shortDesc: 'Sistema conectado para búsqueda instantánea de insumos industriales, listas de precios por convenio y cotizaciones en PDF.',
        tags: ['Portal B2B', 'Cotizador PDF', 'Integración Stock']
    }
];

let currentSlide = 0;
const glitchChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789</>_#%';

// Efecto de descifrado más lento y fluido
function scrambleText(el, newText, duration = 850) {
    if (!el) return;
    if (el._scrambleInterval) clearInterval(el._scrambleInterval);

    const steps = 24;
    let frame = 0;

    el._scrambleInterval = setInterval(() => {
        frame++;
        const progress = frame / steps;
        const revealLength = Math.floor(newText.length * progress);

        let output = '';
        for (let i = 0; i < newText.length; i++) {
            if (newText[i] === ' ') {
                output += ' ';
            } else if (i < revealLength) {
                output += newText[i];
            } else {
                output += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
        }

        el.textContent = output;

        if (frame >= steps) {
            clearInterval(el._scrambleInterval);
            el.textContent = newText;
        }
    }, duration / steps);
}

function renderPortfolioSlider() {
    const dotsContainer = document.getElementById('portfolio-dots');
    if (dotsContainer) {
        dotsContainer.innerHTML = portfolioCases.map((_, idx) => `
            <button onclick="goToSlide(${idx})" class="slider-dot h-2 rounded-full transition-all duration-500 ${idx === 0 ? 'w-8 bg-zp-cyan' : 'w-2 bg-white/20 hover:bg-white/40'}" aria-label="Ir al proyecto ${idx + 1}"></button>
        `).join('');
    }
    updateProjectCard(0, false);
}

function updateProjectCard(index, animate = true) {
    const item = portfolioCases[index];
    if (!item) return;

    const accentBg = document.getElementById('proj-accent-bg');
    const badgeEl = document.getElementById('proj-badge');
    const iconBox = document.getElementById('proj-icon-box');
    const logoWrap = document.getElementById('proj-logo-wrap');
    const logoImg = document.getElementById('proj-logo');
    const clientEl = document.getElementById('proj-client');
    const titleEl = document.getElementById('proj-title');
    const descEl = document.getElementById('proj-desc');
    const ecoEl = document.getElementById('proj-ecosystem');
    const tagsEl = document.getElementById('proj-tags');
    const actionEl = document.getElementById('proj-action');
    const counter = document.getElementById('slider-counter');
    const dots = document.querySelectorAll('.slider-dot');

    const fadeDelay = animate ? 260 : 0;

    // Contador y puntos
    if (counter) {
        counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(portfolioCases.length).padStart(2, '0')}`;
    }
    dots.forEach((dot, idx) => {
        dot.className = idx === index
            ? 'slider-dot h-2 w-8 rounded-full bg-zp-cyan transition-all duration-500'
            : 'slider-dot h-2 w-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-500';
    });

    // Color de fondo lateral
    if (accentBg) {
        accentBg.className = `lg:col-span-5 relative bg-gradient-to-br ${item.accent} p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 transition-all duration-700`;
    }

    // Glitch en ícono
    if (iconBox) {
        iconBox.innerHTML = `<i data-lucide="${item.icon}" class="w-5 h-5"></i>`;
        if (animate) {
            iconBox.classList.remove('glitch-active');
            void iconBox.offsetWidth;
            iconBox.classList.add('glitch-active');
        }
    }

    // Cambio suave + glitch en el logo del cliente
    if (logoWrap && logoImg) {
        logoWrap.style.opacity = '0';
        setTimeout(() => {
            logoImg.style.display = 'block';
            logoImg.style.opacity = '1'; // <-- Restaura la opacidad si el proyecto anterior no tenía logo
            logoImg.src = item.logo;
            logoImg.alt = `Logo ${item.client}`;
            logoWrap.style.opacity = '1';
            if (animate) {
                logoWrap.classList.remove('glitch-active');
                void logoWrap.offsetWidth;
                logoWrap.classList.add('glitch-active');
            }
        }, fadeDelay);
    }

    // Mutación de textos (más lenta)
    if (animate) {
        scrambleText(badgeEl, item.badge, 650);
        scrambleText(clientEl, item.client, 800);
        scrambleText(titleEl, item.title, 950);
        descEl.style.opacity = '0';
        setTimeout(() => {
            descEl.textContent = item.shortDesc;
            descEl.style.opacity = '1';
        }, fadeDelay);
    } else {
        badgeEl.textContent = item.badge;
        clientEl.textContent = item.client;
        titleEl.textContent = item.title;
        descEl.textContent = item.shortDesc;
    }

    // Ecosistema interno (SAEDocs / SAETracker)
    if (ecoEl) {
        ecoEl.style.opacity = '0';
        setTimeout(() => {
            if (item.ecosystem) {
                ecoEl.innerHTML = `
                    <div class="pt-4 border-t border-white/10">
                        <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                            <i data-lucide="lock" class="w-3.5 h-3.5 text-zp-cyan"></i>
                            <span>Herramientas Internas Desarrolladas</span>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            ${item.ecosystem.map(sub => `
                                <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                                    <div class="w-9 h-9 rounded-lg bg-zp-blue/20 border border-zp-blue/30 flex items-center justify-center text-zp-cyan flex-shrink-0">
                                        <i data-lucide="${sub.icon}" class="w-4 h-4"></i>
                                    </div>
                                    <div>
                                        <div class="font-display font-bold text-sm text-white">${sub.name}</div>
                                        <div class="text-xs text-slate-400 leading-snug mt-0.5">${sub.desc}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            } else {
                ecoEl.innerHTML = '';
            }
            lucide.createIcons();
            ecoEl.style.opacity = '1';
        }, fadeDelay);
    }

    // Tags y Botón
    if (tagsEl && actionEl) {
        tagsEl.style.opacity = '0';
        actionEl.style.opacity = '0';
        setTimeout(() => {
            tagsEl.innerHTML = item.tags.map(tag => `
                <span class="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300">${tag}</span>
            `).join('');

            actionEl.innerHTML = item.previewUrl ? `
                <button onclick="openPreviewModal('${item.previewUrl}', '${item.displayUrl}')" class="px-5 py-2.5 rounded-xl bg-zp-blue hover:bg-blue-600 text-white text-sm font-semibold transition flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-zp-blue/25">
                    <i data-lucide="external-link" class="w-4 h-4"></i>
                    <span>Ver Demo en Vivo</span>
                </button>
            ` : `
                <span class="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                    <i data-lucide="shield-check" class="w-4 h-4"></i>
                    Proyecto Privado
                </span>
            `;
            lucide.createIcons();
            tagsEl.style.opacity = '1';
            actionEl.style.opacity = '1';
        }, fadeDelay);
    }

    lucide.createIcons();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % portfolioCases.length;
    updateProjectCard(currentSlide, true);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + portfolioCases.length) % portfolioCases.length;
    updateProjectCard(currentSlide, true);
}

function goToSlide(index) {
    if (index === currentSlide) return;
    currentSlide = index;
    updateProjectCard(currentSlide, true);
}
// 4. Lógica del Modal de Preview (OPTIMIZADA SIN LAG)
function openPreviewModal(url, displayUrl) {
    const modal = document.getElementById('preview-modal');
    const iframe = document.getElementById('preview-iframe');
    const urlText = document.getElementById('preview-url-text');
    const loader = document.getElementById('preview-loader');

    if (!modal || !iframe) return;

    urlText.textContent = `https://${displayUrl}`;
    if (loader) loader.classList.remove('hidden');

    // 1. Bloquear scroll del sitio principal para evitar repintados de fondo
    document.body.classList.add('overflow-hidden');

    // 2. Mostrar el modal primero (solo opacidad, sin scale)
    modal.classList.remove('hidden');
    void modal.offsetWidth; // Fuerza el reflow antes de animar
    modal.classList.remove('opacity-0');

    // 3. Cargar el iframe DESPUÉS de que el modal ya abrió (evita el tirón)
    iframe.onload = () => {
        if (loader) loader.classList.add('hidden');
    };

    setTimeout(() => {
        iframe.src = url;
    }, 150);
}

function closePreviewModal() {
    const modal = document.getElementById('preview-modal');
    const iframe = document.getElementById('preview-iframe');

    if (!modal) return;

    modal.classList.add('opacity-0');
    document.body.classList.remove('overflow-hidden');

    setTimeout(() => {
        modal.classList.add('hidden');
        iframe.src = 'about:blank'; // Libera la memoria RAM/GPU del sitio embebido al instante
    }, 200);
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
    renderPortfolioSlider();
    updateBlueprint();
});