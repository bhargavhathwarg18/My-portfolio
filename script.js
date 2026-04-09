const TOOLS = [
    { name: "Python", icon: "🐍", delay: 0 }, { name: "JavaScript", icon: "JS", delay: 0.1 },
    { name: "React.js", icon: "⚛️", delay: 0.2 }, { name: "Node.js", icon: "🟢", delay: 0.3 },
    { name: "PostgreSQL", icon: "🐘", delay: 0.4 }, { name: "GitHub", icon: "github", delay: 0.5 }
];

const PROJECTS = [
    { title: "AI Logic Processing Hub", status: "Active", desc: "Intelligent middleware for optimized algorithmic workflows.", tags: ["Python", "ML"], icon: "terminal", github: "https://github.com" },
    { title: "Scalable Full Stack App", status: "Stable", desc: "Modular web ecosystem for real-time interactions.", tags: ["React", "Express"], icon: "globe", github: "https://github.com" },
    { title: "Distributed DB Optimizer", status: "v1.0", desc: "SQL normalization layer for PostgreSQL monitoring.", tags: ["PostgreSQL", "SQL"], icon: "database", github: "https://github.com" },
    { title: "Vision ML Classifier", status: "Beta", desc: "Real-time object detection using lightweight neural nets.", tags: ["AIML", "Python"], icon: "cpu", github: "https://github.com" }
];

const initTheme = () => {
    let isDark = localStorage.theme !== 'light';
    document.documentElement.classList.toggle('dark', isDark);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.onclick = () => {
        isDark = !isDark;
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.theme = isDark ? 'dark' : 'light';
        updateIcons(isDark);
    };
    updateIcons(isDark);
};

const updateIcons = (isDark) => {
    const icon = document.getElementById('theme-icon');
    if (icon) icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    if (window.lucide) lucide.createIcons();
};

const render = () => {
    const tGrid = document.getElementById('tools-grid');
    if (tGrid) {
        tGrid.innerHTML = TOOLS.map(t => `
        <div class="flex flex-col items-center gap-3 p-6 rounded-2xl border bg-gray-50 dark:bg-white/[0.03] border-gray-100 dark:border-white/5 transition-all group hover:-translate-y-1 hover:border-orange-600/50">
            <div class="text-3xl h-10 w-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all animate-tool-wave" style="animation-delay: ${t.delay}s">
                ${t.name === "GitHub" ? `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                ` : (t.icon.length > 2 ? `<i data-lucide="${t.icon}"></i>` : `<span>${t.icon}</span>`)}
            </div>
            <span class="text-[9px] font-bold uppercase opacity-30 group-hover:opacity-100 font-mono tracking-widest transition-opacity">${t.name}</span>
        </div>`).join('');
    }

    const pGrid = document.getElementById('projects-grid');
    if (pGrid) {
        pGrid.innerHTML = PROJECTS.map(p => `
        <div class="reveal-card relative h-full">
            <div class="project-card-inner group flex flex-col p-8 md:p-10 rounded-[2rem] border bg-gray-50 dark:bg-white/[0.02] border-gray-100 dark:border-white/5 transition-all hover:border-orange-600/40 h-full overflow-hidden">
                <div class="flex justify-between items-start mb-8">
                    <div class="w-12 h-12 rounded-xl bg-orange-600/10 flex items-center justify-center text-orange-500 shadow-xl group-hover:scale-110 transition-transform duration-500"><i data-lucide="${p.icon}"></i></div>
                    <span class="px-3 py-1 rounded-full text-[8px] font-mono font-bold bg-orange-600/10 text-orange-500 border border-orange-600/20 uppercase">${p.status}</span>
                </div>
                <h3 class="text-xl font-bold mb-3 font-mono group-hover:text-orange-600 transition-colors uppercase">${p.title}</h3>
                <p class="text-sm opacity-60 mb-6 leading-relaxed">${p.desc}</p>
                <div class="mt-auto flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-white/5">
                    <div class="flex flex-wrap gap-2">${p.tags.map(t => `<span class="text-[8px] uppercase px-3 py-1 rounded-full bg-orange-600/10 text-orange-500 font-mono">${t}</span>`).join('')}</div>
                    <a href="${p.github}" target="_blank" class="w-10 h-10 rounded-full bg-gray-200/50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-orange-600 transition-all flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
            </div>
        </div>`).join('');
    }

    const cHead = document.getElementById('contact-heading');
    if (cHead) {
        cHead.innerHTML = ["Searching", "for", "a"].map((w, i) => `<span class="contact-word inline-block opacity-0 translate-y-full" style="transition-delay: ${i * 0.1}s">${w}</span>`).join('') + `<span class="shimmer-text block w-full sm:w-auto">Fresh Perspective?</span>`;
    }
    
    if (window.lucide) lucide.createIcons();
    initTilt();
};

const initTilt = () => {
    const cards = document.querySelectorAll('.project-card-inner');
    cards.forEach(card => {
        card.onmousemove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const cX = rect.width / 2, cY = rect.height / 2;
            const rX = (y - cY) / 15, rY = (cX - x) / 15;
            card.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg) scale(1.02)`;
            card.style.setProperty('--px', `${x}px`);
            card.style.setProperty('--py', `${y}px`);
        };
        card.onmouseleave = () => card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
};

const initUI = () => {
    const navNameStr = "Bhargav Hathwar G";
    
    // GLOBAL MOUSE GLOW
    window.addEventListener('mousemove', e => {
        document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
        document.documentElement.style.setProperty('--my', `${e.clientY}px`);
        const contact = document.getElementById('contact');
        if (contact) {
            const rect = contact.getBoundingClientRect();
            contact.style.setProperty('--cx', `${e.clientX - rect.left}px`);
            contact.style.setProperty('--cy', `${e.clientY - rect.top}px`);
        }
    });

    // Navbar Scroll
    let lastY = window.scrollY;
    window.onscroll = () => {
        const nav = document.getElementById('navbar');
        if (nav) {
            nav.classList.toggle('shadow-lg', window.scrollY > 20);
            nav.classList.toggle('nav-hidden', window.scrollY > lastY && window.scrollY > 150);
        }
        lastY = window.scrollY;
    };

    // MOBILE MENU LOGIC
    const overlay = document.getElementById('menu-overlay');
    const menu = document.getElementById('mobile-menu');
    const mBtn = document.getElementById('menu-toggle');
    const mIcon = document.getElementById('menu-icon');

    const toggleMenu = (open) => {
        if(open) {
            menu.classList.add('open');
            overlay.classList.add('active');
        } else {
            menu.classList.remove('open');
            overlay.classList.remove('active');
        }
    };

    if (mBtn) mBtn.addEventListener('click', (e) => { 
        e.stopPropagation(); 
        const isOpen = menu.classList.contains('open');
        toggleMenu(!isOpen);
    });
    
    if (overlay) overlay.addEventListener('click', () => toggleMenu(false));
    
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('open') && !menu.contains(e.target) && e.target !== mBtn) {
            toggleMenu(false);
        }
    });

    document.querySelectorAll('.menu-link').forEach(l => l.addEventListener('click', () => toggleMenu(false)));

    // Navbar Name Scramble
    const navNameEl = document.getElementById('nav-name');
    if (navNameEl) setInterval(() => {
        let iter = 0;
        const int = setInterval(() => {
            navNameEl.innerText = navNameStr.split("").map((l, i) => i < iter ? navNameStr[i] : "[]-_/|"[Math.floor(Math.random()*6)]).join("");
            if (iter >= navNameStr.length) clearInterval(int);
            iter += 1/2;
        }, 30);
    }, 5000);

    // Preloader logic
    const pText = document.getElementById('preloader-text');
    let pIter = 0;
    const pInt = setInterval(() => {
        if (pText) pText.innerText = navNameStr.split("").map((l, i) => i < pIter ? navNameStr[i] : "!@#$%"[Math.floor(Math.random()*5)]).join("");
        if (pIter >= navNameStr.length) {
            clearInterval(pInt);
            const pre = document.getElementById('preloader');
            if (pre) {
                pre.style.opacity = '0';
                setTimeout(() => pre.remove(), 700);
            }
        }
        pIter += 1/3;
    }, 40);

    // Staggered Reveal Logic
    const obs = new IntersectionObserver((es) => {
        es.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('active');
                if (e.target.id === 'contact') {
                    document.querySelectorAll('.contact-word').forEach(w => {
                        w.classList.remove('opacity-0', 'translate-y-full');
                        w.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
                    });
                    document.getElementById('contact-p')?.classList.remove('opacity-0', 'translate-y-10');
                    document.getElementById('contact-btns')?.classList.remove('opacity-0', 'translate-y-10');
                }
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-card').forEach(c => obs.observe(c));
    if (document.getElementById('contact')) obs.observe(document.getElementById('contact'));
};

window.onload = () => {
    initTheme();
    render();
    initUI();
    lucide.createIcons();
};
