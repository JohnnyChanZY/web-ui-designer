/* ============================================
   Web UI Design Prompt Generator - App v2
   ============================================ */

// ============================================
// Font List (real Google Fonts)
// ============================================
const FONTS = [
    { name: 'Inter', family: "'Inter', sans-serif", category: 'sans', desc: '现代通用，适合 UI 界面' },
    { name: 'Poppins', family: "'Poppins', sans-serif", category: 'sans', desc: '几何风格，圆润友好' },
    { name: 'DM Sans', family: "'DM Sans', sans-serif", category: 'sans', desc: '低调优雅，适合正文' },
    { name: 'Outfit', family: "'Outfit', sans-serif", category: 'sans', desc: '现代几何，干净利落' },
    { name: 'Space Grotesk', family: "'Space Grotesk', sans-serif", category: 'sans', desc: '科技感，适合产品页' },
    { name: 'Sora', family: "'Sora', sans-serif", category: 'sans', desc: '日系现代，适合 SaaS' },
    { name: 'Manrope', family: "'Manrope', sans-serif", category: 'sans', desc: '人文主义，高可读性' },
    { name: 'Plus Jakarta Sans', family: "'Plus Jakarta Sans', sans-serif", category: 'sans', desc: '东南亚风，时尚现代' },
    { name: 'Lexend', family: "'Lexend', sans-serif", category: 'sans', desc: '优化阅读体验' },
    { name: 'Be Vietnam Pro', family: "'Be Vietnam Pro', sans-serif", category: 'sans', desc: '越南设计，简洁有力' },
    { name: 'Albert Sans', family: "'Albert Sans', sans-serif", category: 'sans', desc: '低调通用，适合长文' },
    { name: 'Nunito', family: "'Nunito', sans-serif", category: 'sans', desc: '圆润可爱，适合教育/儿童' },
    { name: 'Playfair Display', family: "'Playfair Display', serif", category: 'serif', desc: '优雅衬线，适合奢侈品' },
    { name: 'Merriweather', family: "'Merriweather', serif", category: 'serif', desc: '经典衬线，适合长文阅读' },
    { name: 'Roboto Slab', family: "'Roboto Slab', serif", category: 'serif', desc: '几何衬线，稳重专业' },
    { name: 'JetBrains Mono', family: "'JetBrains Mono', monospace", category: 'mono', desc: '编程字体，技术感强' },
    { name: 'Fira Code', family: "'Fira Code', monospace", category: 'mono', desc: '连字等宽，开发者首选' },
    { name: 'Space Mono', family: "'Space Mono', monospace", category: 'mono', desc: '复古等宽，适合创意展示' },
    { name: 'Geist Mono', family: "'Geist Mono', monospace", category: 'mono', desc: 'Vercel 出品，极客风格' },
];

// ============================================
// Label Maps
// ============================================
const LABELS = {
    navigation: {
        'top-fixed':     { zh: '顶部固定导航', en: 'fixed top navigation bar' },
        'sidebar':       { zh: '侧边栏导航', en: 'sidebar navigation with collapsible menu' },
        'hamburger':     { zh: '汉堡菜单', en: 'hamburger menu navigation' },
        'mega-menu':     { zh: '超级菜单', en: 'mega menu navigation with dropdown panels' },
        'tab-bar':       { zh: '底部标签栏', en: 'bottom tab bar navigation' },
        'floating':      { zh: '浮动导航', en: 'floating pill-shaped navigation bar' }
    },
    layout: {
        'single-column': { zh: '单列布局', en: 'single column centered layout' },
        'two-column':    { zh: '双栏布局', en: 'two-column layout with sidebar' },
        'grid':          { zh: '网格布局', en: 'responsive grid card layout' },
        'masonry':       { zh: '瀑布流', en: 'masonry/pinterest-style layout' },
        'dashboard':     { zh: '仪表盘', en: 'dashboard layout with panels and widgets' },
        'landing':       { zh: '着陆页', en: 'landing page with hero section, features, and CTA' }
    },
    typography: {},
    visualStyle: {
        'minimal-clean': { zh: '极简清爽', en: 'minimal and clean design with ample whitespace' },
        'glassmorphism': { zh: '毛玻璃', en: 'glassmorphism style with frosted glass effects and transparency' },
        'neumorphism':   { zh: '新拟态', en: 'neumorphism/soft UI with subtle shadows and embossed elements' },
        'brutalist':     { zh: '粗野主义', en: 'brutalist design with bold borders, raw aesthetics, and high contrast' },
        'gradient-rich': { zh: '渐变丰富', en: 'gradient-rich design with vibrant color transitions' },
        'flat-design':   { zh: '扁平化', en: 'flat design with solid colors and no shadows' }
    },
    buttonStyle: {
        'rounded': { zh: '圆角按钮', en: 'rounded corner buttons (8px radius)' },
        'pill':    { zh: '胶囊按钮', en: 'pill-shaped buttons with fully rounded edges' },
        'sharp':   { zh: '直角按钮', en: 'sharp-cornered rectangular buttons' },
        'ghost':   { zh: '幽灵按钮', en: 'ghost/outline buttons with transparent background' }
    },
    cardStyle: {
        'elevated':   { zh: '阴影卡片', en: 'elevated cards with drop shadows' },
        'bordered':   { zh: '边框卡片', en: 'bordered cards with visible outlines' },
        'flat-card':  { zh: '扁平卡片', en: 'flat cards with subtle background differentiation' },
        'glass-card': { zh: '毛玻璃卡片', en: 'glassmorphism cards with frosted glass effect' }
    }
};

const PALETTES = {
    ocean:      { primary: '#0ea5e9', secondary: '#0284c7', accent: '#7dd3fc', background: '#f0f9ff', text: '#0f172a' },
    forest:     { primary: '#22c55e', secondary: '#16a34a', accent: '#86efac', background: '#f0fdf4', text: '#14532d' },
    sunset:     { primary: '#f97316', secondary: '#ea580c', accent: '#fdba74', background: '#fff7ed', text: '#431407' },
    lavender:   { primary: '#a855f7', secondary: '#9333ea', accent: '#d8b4fe', background: '#faf5ff', text: '#3b0764' },
    rose:       { primary: '#f43f5e', secondary: '#e11d48', accent: '#fda4af', background: '#fff1f2', text: '#881337' },
    monochrome: { primary: '#3b82f6', secondary: '#1e40af', accent: '#93c5fd', background: '#ffffff', text: '#111827' },
    dark:       { primary: '#6366f1', secondary: '#4f46e5', accent: '#a5b4fc', background: '#0f172a', text: '#e2e8f0' },
    warm:       { primary: '#eab308', secondary: '#ca8a04', accent: '#fde68a', background: '#fefce8', text: '#422006' }
};

const CATEGORY_MAP = {
    'navigation': 'navigation',
    'layout': 'layout',
    'visual-style': 'visualStyle',
    'button-style': 'buttonStyle',
    'card-style': 'cardStyle'
};

// ============================================
// State
// ============================================
const state = {
    navigation: null,
    layout: null,
    typography: null,
    visualStyle: null,
    buttonStyle: null,
    cardStyle: null,
    colors: { primary: '#3b82f6', secondary: '#1e40af', accent: '#93c5fd', background: '#ffffff', text: '#111827' },
    features: { darkMode: false, animations: false, responsive: true, gradients: false, shadows: false, icons: false },
    extraNotes: '',
    lang: 'en',
    pickerTarget: 'primary',
    pickerHue: 240,
    pickerSat: 0.59,
    pickerVal: 0.94
};

// ============================================
// Init
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initFontGrid();
    initOptionCards();
    initPalettePresets();
    initColorPicker();
    initCurrentColors();
    initFeatureToggles();
    initExtraNotes();
    initLangToggle();
    initCopyButton();
    initExportButton();
    initResetButton();
    updatePrompt();
    updateLivePreview();
});

// ============================================
// Font Grid
// ============================================
function initFontGrid() {
    const grid = document.getElementById('fontGrid');
    FONTS.forEach((font, i) => {
        // Build label map
        LABELS.typography[font.name] = {
            zh: `${font.desc}`,
            en: `Use ${font.name} (${font.category === 'sans' ? 'sans-serif' : font.category === 'serif' ? 'serif' : 'monospace'})`
        };

        const card = document.createElement('button');
        card.className = 'option-card font-card';
        card.dataset.value = font.name;
        card.dataset.category = 'typography';
        card.innerHTML = `
            <span class="font-sample" style="font-family:${font.family}">Ag 永</span>
            <span class="font-name">${font.name}</span>
        `;
        card.addEventListener('click', () => {
            grid.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            state.typography = font.name;
            updatePrompt();
            updateLivePreview();
        });
        grid.appendChild(card);
    });
}

// ============================================
// Option Cards
// ============================================
function initOptionCards() {
    document.querySelectorAll('.option-grid[data-category]').forEach(grid => {
        const category = grid.dataset.category;
        grid.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', () => {
                grid.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                const key = CATEGORY_MAP[category];
                if (key) state[key] = card.dataset.value;
                updatePrompt();
                updateLivePreview();
            });
        });
    });
}

// ============================================
// Palette Presets
// ============================================
function initPalettePresets() {
    document.querySelectorAll('.palette-preset').forEach(btn => {
        btn.addEventListener('click', () => {
            const palette = PALETTES[btn.dataset.preset];
            if (!palette) return;
            Object.assign(state.colors, palette);
            document.querySelectorAll('.palette-preset').forEach(p => p.classList.remove('selected'));
            btn.classList.add('selected');
            updateCurrentColors();
            syncPickerToColor(state.colors[state.pickerTarget]);
            updatePrompt();
            updateLivePreview();
        });
    });
}

// ============================================
// Current Colors Display
// ============================================
function initCurrentColors() {
    document.querySelectorAll('.current-color-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
            const key = swatch.dataset.key;
            state.pickerTarget = key;
            document.querySelectorAll('.color-target-btn').forEach(b => b.classList.remove('active'));
            document.querySelector(`.color-target-btn[data-target="${key}"]`)?.classList.add('active');
            syncPickerToColor(state.colors[key]);
            updatePickerTargetLabel();
        });
    });
}

function updateCurrentColors() {
    ['primary', 'secondary', 'accent', 'background', 'text'].forEach(key => {
        const swatch = document.querySelector(`.current-color-swatch[data-key="${key}"]`);
        const hex = document.getElementById(`hex-${key}`);
        if (swatch) swatch.style.background = state.colors[key];
        if (hex) hex.textContent = state.colors[key];
    });
}

// ============================================
// PS-style Color Picker
// ============================================
function initColorPicker() {
    const svWrapper = document.getElementById('svPanelWrapper');
    const svCanvas = document.getElementById('svPanel');
    const svCursor = document.getElementById('svCursor');
    const hueWrapper = document.getElementById('hueSliderWrapper');
    const hueCursor = document.getElementById('hueCursor');
    const hexInput = document.getElementById('pickerHex');
    const sliderR = document.getElementById('sliderR');
    const sliderG = document.getElementById('sliderG');
    const sliderB = document.getElementById('sliderB');
    const applyBtn = document.getElementById('applyColor');

    // Target buttons
    document.querySelectorAll('.color-target-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.color-target-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.pickerTarget = btn.dataset.target;
            syncPickerToColor(state.colors[state.pickerTarget]);
            updatePickerTargetLabel();
        });
    });

    // Draw SV panel
    function drawSVPanel() {
        const ctx = svCanvas.getContext('2d');
        const w = svCanvas.width;
        const h = svCanvas.height;
        // Base hue color
        const hueColor = hsvToHex(state.pickerHue, 1, 1);
        // Fill with hue
        ctx.fillStyle = hueColor;
        ctx.fillRect(0, 0, w, h);
        // White gradient (left to right)
        const whiteGrad = ctx.createLinearGradient(0, 0, w, 0);
        whiteGrad.addColorStop(0, 'rgba(255,255,255,1)');
        whiteGrad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = whiteGrad;
        ctx.fillRect(0, 0, w, h);
        // Black gradient (top to bottom)
        const blackGrad = ctx.createLinearGradient(0, 0, 0, h);
        blackGrad.addColorStop(0, 'rgba(0,0,0,0)');
        blackGrad.addColorStop(1, 'rgba(0,0,0,1)');
        ctx.fillStyle = blackGrad;
        ctx.fillRect(0, 0, w, h);
    }

    function updateSVCursor() {
        const x = state.pickerSat * 200;
        const y = (1 - state.pickerVal) * 200;
        svCursor.style.left = x + 'px';
        svCursor.style.top = y + 'px';
    }

    function updateHueCursor() {
        hueCursor.style.top = (state.pickerHue / 360 * 200) + 'px';
    }

    function updatePickerInfo() {
        const hex = hsvToHex(state.pickerHue, state.pickerSat, state.pickerVal);
        const rgb = hexToRgb(hex);
        document.getElementById('pickerSwatch').style.background = hex;
        hexInput.value = hex.slice(1);
        sliderR.value = rgb.r;
        sliderG.value = rgb.g;
        sliderB.value = rgb.b;
        document.getElementById('valR').textContent = rgb.r;
        document.getElementById('valG').textContent = rgb.g;
        document.getElementById('valB').textContent = rgb.b;
    }

    function updatePickerTargetLabel() {
        const names = { primary: '主色 Primary', secondary: '辅色 Secondary', accent: '强调色 Accent', background: '背景色 Background', text: '文字色 Text' };
        document.getElementById('pickerTargetLabel').textContent = names[state.pickerTarget] || '';
    }

    // SV panel drag
    let svDragging = false;
    function handleSVMove(e) {
        const rect = svWrapper.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
        state.pickerSat = x;
        state.pickerVal = 1 - y;
        updateSVCursor();
        updatePickerInfo();
    }
    svWrapper.addEventListener('mousedown', (e) => { svDragging = true; handleSVMove(e); });
    document.addEventListener('mousemove', (e) => { if (svDragging) handleSVMove(e); });
    document.addEventListener('mouseup', () => { svDragging = false; });

    // Hue slider drag
    let hueDragging = false;
    function handleHueMove(e) {
        const rect = hueWrapper.getBoundingClientRect();
        const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
        state.pickerHue = y * 360;
        updateHueCursor();
        drawSVPanel();
        updatePickerInfo();
    }
    hueWrapper.addEventListener('mousedown', (e) => { hueDragging = true; handleHueMove(e); });
    document.addEventListener('mousemove', (e) => { if (hueDragging) handleHueMove(e); });
    document.addEventListener('mouseup', () => { hueDragging = false; });

    // Hex input
    hexInput.addEventListener('input', () => {
        const val = hexInput.value.replace(/[^0-9a-fA-F]/g, '');
        if (val.length === 6) {
            const hsv = hexToHsv('#' + val);
            state.pickerHue = hsv.h;
            state.pickerSat = hsv.s;
            state.pickerVal = hsv.v;
            updateHueCursor();
            drawSVPanel();
            updateSVCursor();
            updatePickerInfo();
        }
    });

    // RGB sliders
    [sliderR, sliderG, sliderB].forEach(slider => {
        slider.addEventListener('input', () => {
            const hex = rgbToHex(+sliderR.value, +sliderG.value, +sliderB.value);
            const hsv = hexToHsv(hex);
            state.pickerHue = hsv.h;
            state.pickerSat = hsv.s;
            state.pickerVal = hsv.v;
            updateHueCursor();
            drawSVPanel();
            updateSVCursor();
            updatePickerInfo();
        });
    });

    // Apply button
    applyBtn.addEventListener('click', () => {
        const hex = hsvToHex(state.pickerHue, state.pickerSat, state.pickerVal);
        state.colors[state.pickerTarget] = hex;
        document.querySelectorAll('.palette-preset').forEach(p => p.classList.remove('selected'));
        updateCurrentColors();
        updatePrompt();
        updateLivePreview();
    });

    // Initialize
    drawSVPanel();
    syncPickerToColor(state.colors.primary);
    updatePickerTargetLabel();
}

function syncPickerToColor(hex) {
    const hsv = hexToHsv(hex);
    state.pickerHue = hsv.h;
    state.pickerSat = hsv.s;
    state.pickerVal = hsv.v;

    const svCanvas = document.getElementById('svPanel');
    const ctx = svCanvas.getContext('2d');
    const w = svCanvas.width;
    const h = svCanvas.height;
    const hueColor = hsvToHex(state.pickerHue, 1, 1);
    ctx.fillStyle = hueColor;
    ctx.fillRect(0, 0, w, h);
    const whiteGrad = ctx.createLinearGradient(0, 0, w, 0);
    whiteGrad.addColorStop(0, 'rgba(255,255,255,1)');
    whiteGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = whiteGrad;
    ctx.fillRect(0, 0, w, h);
    const blackGrad = ctx.createLinearGradient(0, 0, 0, h);
    blackGrad.addColorStop(0, 'rgba(0,0,0,0)');
    blackGrad.addColorStop(1, 'rgba(0,0,0,1)');
    ctx.fillStyle = blackGrad;
    ctx.fillRect(0, 0, w, h);

    // Update cursors
    document.getElementById('svCursor').style.left = (state.pickerSat * 200) + 'px';
    document.getElementById('svCursor').style.top = ((1 - state.pickerVal) * 200) + 'px';
    document.getElementById('hueCursor').style.top = (state.pickerHue / 360 * 200) + 'px';

    // Update info
    const rgb = hexToRgb(hex);
    document.getElementById('pickerSwatch').style.background = hex;
    document.getElementById('pickerHex').value = hex.slice(1);
    document.getElementById('sliderR').value = rgb.r;
    document.getElementById('sliderG').value = rgb.g;
    document.getElementById('sliderB').value = rgb.b;
    document.getElementById('valR').textContent = rgb.r;
    document.getElementById('valG').textContent = rgb.g;
    document.getElementById('valB').textContent = rgb.b;
}

// ============================================
// Color Conversion Utils
// ============================================
function hsvToHex(h, s, v) {
    let r, g, b;
    const i = Math.floor(h / 60) % 6;
    const f = h / 60 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }
    return rgbToHex(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
}

function hexToHsv(hex) {
    const { r, g, b } = hexToRgb(hex);
    const rf = r / 255, gf = g / 255, bf = b / 255;
    const max = Math.max(rf, gf, bf), min = Math.min(rf, gf, bf);
    const d = max - min;
    let h = 0, s = max === 0 ? 0 : d / max, v = max;
    if (d !== 0) {
        switch (max) {
            case rf: h = ((gf - bf) / d + (gf < bf ? 6 : 0)) * 60; break;
            case gf: h = ((bf - rf) / d + 2) * 60; break;
            case bf: h = ((rf - gf) / d + 4) * 60; break;
        }
    }
    return { h, s, v };
}

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16)
    };
}

function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
}

// ============================================
// Feature Toggles
// ============================================
function initFeatureToggles() {
    const map = {
        'feat-dark-mode': 'darkMode',
        'feat-animations': 'animations',
        'feat-responsive': 'responsive',
        'feat-gradients': 'gradients',
        'feat-shadows': 'shadows',
        'feat-icons': 'icons'
    };
    Object.entries(map).forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.checked = state.features[key];
        el.addEventListener('change', () => {
            state.features[key] = el.checked;
            updatePrompt();
        });
    });
}

// ============================================
// Extra Notes
// ============================================
function initExtraNotes() {
    document.getElementById('extra-notes').addEventListener('input', (e) => {
        state.extraNotes = e.target.value;
        updatePrompt();
    });
}

// ============================================
// Language Toggle
// ============================================
function initLangToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.lang = btn.dataset.lang;
            updatePrompt();
        });
    });
}

// ============================================
// Copy Button
// ============================================
function initCopyButton() {
    document.getElementById('btn-copy').addEventListener('click', async () => {
        const text = generatePrompt();
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        const btn = document.getElementById('btn-copy');
        btn.classList.add('copied');
        btn.textContent = '已复制';
        setTimeout(() => { btn.classList.remove('copied'); btn.textContent = '复制'; }, 2000);
    });
}

// ============================================
// Export Markdown
// ============================================
function initExportButton() {
    document.getElementById('btn-export').addEventListener('click', () => {
        const prompt = generatePrompt();
        const md = `# Web UI Design Prompt\n\n${prompt}\n\n---\n*Generated by UI Design Prompt Generator*\n`;
        const blob = new Blob([md], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ui-design-prompt.md';
        a.click();
        URL.revokeObjectURL(url);
    });
}

// ============================================
// Reset Button
// ============================================
function initResetButton() {
    document.getElementById('btn-reset').addEventListener('click', () => {
        state.navigation = null;
        state.layout = null;
        state.typography = null;
        state.visualStyle = null;
        state.buttonStyle = null;
        state.cardStyle = null;
        state.colors = { primary: '#3b82f6', secondary: '#1e40af', accent: '#93c5fd', background: '#ffffff', text: '#111827' };
        state.features = { darkMode: false, animations: false, responsive: true, gradients: false, shadows: false, icons: false };
        state.extraNotes = '';

        document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        document.querySelectorAll('.palette-preset').forEach(p => p.classList.remove('selected'));
        document.getElementById('feat-dark-mode').checked = false;
        document.getElementById('feat-animations').checked = false;
        document.getElementById('feat-responsive').checked = true;
        document.getElementById('feat-gradients').checked = false;
        document.getElementById('feat-shadows').checked = false;
        document.getElementById('feat-icons').checked = false;
        document.getElementById('extra-notes').value = '';

        updateCurrentColors();
        syncPickerToColor(state.colors.primary);
        updatePrompt();
        updateLivePreview();
    });
}

// ============================================
// Generate Prompt
// ============================================
function generatePrompt() {
    const isZh = state.lang === 'zh';
    const lines = [];

    if (isZh) {
        lines.push('请设计一个 Web 应用，满足以下 UI 规范：');
    } else {
        lines.push('Design a web application with the following UI specifications:');
    }
    lines.push('');

    if (state.navigation) {
        const nav = LABELS.navigation[state.navigation];
        lines.push(isZh ? `## 导航` : `## Navigation`);
        lines.push(isZh ? `- 导航类型：${nav.zh}` : `- Use a ${nav.en}`);
        lines.push('');
    }

    if (state.layout) {
        const layout = LABELS.layout[state.layout];
        lines.push(isZh ? `## 布局` : `## Layout`);
        lines.push(isZh ? `- 页面结构：${layout.zh}` : `- Overall page structure: ${layout.en}`);
        lines.push('');
    }

    lines.push(isZh ? `## 颜色方案` : `## Color Palette`);
    lines.push(`- ${isZh ? '主色' : 'Primary color'}: ${state.colors.primary}`);
    lines.push(`- ${isZh ? '辅色' : 'Secondary color'}: ${state.colors.secondary}`);
    lines.push(`- ${isZh ? '强调色' : 'Accent color'}: ${state.colors.accent}`);
    lines.push(`- ${isZh ? '背景色' : 'Background color'}: ${state.colors.background}`);
    lines.push(`- ${isZh ? '文字色' : 'Text color'}: ${state.colors.text}`);
    const mood = getColorMood(state.colors.primary);
    if (mood) lines.push(`- ${isZh ? '色彩基调' : 'Overall color mood'}: ${mood}`);
    lines.push('');

    if (state.typography) {
        const font = FONTS.find(f => f.name === state.typography);
        lines.push(isZh ? `## 字体` : `## Typography`);
        if (font) {
            lines.push(isZh
                ? `- 使用字体：${font.name}（${font.category === 'sans' ? '无衬线' : font.category === 'serif' ? '衬线' : '等宽'}），${font.desc}`
                : `- Font: ${font.name} (${font.category === 'sans' ? 'sans-serif' : font.category === 'serif' ? 'serif' : 'monospace'})`
            );
        }
        lines.push('');
    }

    if (state.visualStyle) {
        const style = LABELS.visualStyle[state.visualStyle];
        lines.push(isZh ? `## 视觉风格` : `## Visual Style`);
        lines.push(isZh ? `- 设计风格：${style.zh}` : `- Design approach: ${style.en}`);
        lines.push('');
    }

    if (state.buttonStyle || state.cardStyle) {
        lines.push(isZh ? `## 组件` : `## Components`);
        if (state.buttonStyle) {
            const btn = LABELS.buttonStyle[state.buttonStyle];
            lines.push(isZh ? `- 按钮：${btn.zh}` : `- Buttons: ${btn.en}`);
        }
        if (state.cardStyle) {
            const card = LABELS.cardStyle[state.cardStyle];
            lines.push(isZh ? `- 卡片：${card.zh}` : `- Cards: ${card.en}`);
        }
        lines.push('');
    }

    const features = [];
    if (isZh) {
        if (state.features.darkMode) features.push('支持暗色模式，平滑主题切换');
        if (state.features.animations) features.push('交互动效和 hover 过渡动画');
        if (state.features.responsive) features.push('完全响应式，适配手机、平板和桌面');
        if (state.features.gradients) features.push('渐变背景和色彩过渡');
        if (state.features.shadows) features.push('层次感阴影，增强视觉深度');
        if (state.features.icons) features.push('统一图标系统（推荐 Lucide 或 Heroicons）');
    } else {
        if (state.features.darkMode) features.push('dark mode support with smooth theme switching');
        if (state.features.animations) features.push('micro-animations and hover transitions');
        if (state.features.responsive) features.push('fully responsive for mobile, tablet, and desktop');
        if (state.features.gradients) features.push('gradient backgrounds and color transitions');
        if (state.features.shadows) features.push('layered shadows for depth and hierarchy');
        if (state.features.icons) features.push('consistent icon system (Lucide, Heroicons, or similar)');
    }
    if (features.length > 0) {
        lines.push(isZh ? `## 附加特性` : `## Additional Features`);
        features.forEach(f => lines.push(`- ${f}`));
        lines.push('');
    }

    if (state.extraNotes.trim()) {
        lines.push(isZh ? `## 补充说明` : `## Additional Requirements`);
        lines.push(`- ${state.extraNotes.trim()}`);
        lines.push('');
    }

    if (isZh) {
        lines.push(`## 通用规范`);
        lines.push(`- 使用现代 CSS（Flexbox/Grid）布局`);
        lines.push(`- 确保无障碍性（WCAG 2.1 AA 对比度）`);
        lines.push(`- 保持一致的间距（8px 网格系统）`);
        lines.push(`- 清晰的视觉层级和内容分区`);
    } else {
        lines.push(`## General Guidelines`);
        lines.push(`- Use modern CSS (Flexbox/Grid) for layout`);
        lines.push(`- Ensure accessibility (WCAG 2.1 AA contrast ratios)`);
        lines.push(`- Consistent spacing (8px grid system)`);
        lines.push(`- Clear visual hierarchy and content sections`);
    }

    return lines.join('\n');
}

function getColorMood(hex) {
    const { r, g, b } = hexToRgb(hex);
    if (Math.max(r, g, b) < 80) return 'dark and sophisticated';
    if (Math.min(r, g, b) > 200) return 'light and airy';
    if (r > g && r > b) return g > 150 ? 'warm and energetic' : 'bold and passionate';
    if (g > r && g > b) return 'natural and calming';
    if (b > r && b > g) return r > 150 ? 'creative and vibrant' : 'professional and trustworthy';
    if (r > 200 && g > 200) return 'optimistic and friendly';
    return null;
}

// ============================================
// Update Prompt Display
// ============================================
function updatePrompt() {
    const prompt = generatePrompt();
    document.getElementById('prompt-output').textContent = prompt;
    document.getElementById('stat-chars').textContent = `${prompt.length} ${state.lang === 'zh' ? '字符' : 'chars'}`;

    let count = 0;
    if (state.navigation) count++;
    if (state.layout) count++;
    if (state.typography) count++;
    if (state.visualStyle) count++;
    if (state.buttonStyle) count++;
    if (state.cardStyle) count++;
    Object.values(state.features).forEach(v => { if (v) count++; });
    document.getElementById('stat-selections').textContent = `${count} ${state.lang === 'zh' ? '项选择' : 'selections'}`;

    updatePreviewTags();
}

function updatePreviewTags() {
    const container = document.getElementById('prompt-preview');
    container.innerHTML = '';
    const add = (text) => {
        const tag = document.createElement('span');
        tag.className = 'preview-tag';
        tag.textContent = text;
        container.appendChild(tag);
    };
    if (state.navigation) add(LABELS.navigation[state.navigation].zh);
    if (state.layout) add(LABELS.layout[state.layout].zh);
    if (state.typography) add(state.typography);
    if (state.visualStyle) add(LABELS.visualStyle[state.visualStyle].zh);
    if (state.buttonStyle) add(LABELS.buttonStyle[state.buttonStyle].zh);
    if (state.cardStyle) add(LABELS.cardStyle[state.cardStyle].zh);

    const colorTag = document.createElement('span');
    colorTag.className = 'preview-tag';
    colorTag.style.display = 'flex';
    colorTag.style.alignItems = 'center';
    colorTag.style.gap = '4px';
    colorTag.innerHTML = `<span style="width:10px;height:10px;border-radius:50%;background:${state.colors.primary};display:inline-block"></span>${state.colors.primary}`;
    container.appendChild(colorTag);

    if (state.features.darkMode) add('暗色模式');
    if (state.features.animations) add('动效');
    if (state.features.responsive) add('响应式');
    if (state.features.gradients) add('渐变');
    if (state.features.shadows) add('阴影');
    if (state.features.icons) add('图标');
}

// ============================================
// Live Preview (enhanced, component-level)
// ============================================
function updateLivePreview() {
    const preview = document.getElementById('live-preview');
    const c = state.colors;
    const isDark = state.features.darkMode;
    const hasAnims = state.features.animations;
    const navType = state.navigation || 'top-fixed';
    const layoutType = state.layout || 'grid';
    const btnRadius = { rounded: '8px', pill: '24px', sharp: '0', ghost: '8px' }[state.buttonStyle] || '8px';
    const cardRadius = '12px';

    // Get font family
    const fontObj = FONTS.find(f => f.name === state.typography);
    const fontFamily = fontObj ? fontObj.family : "'Inter', sans-serif";

    const bg = isDark ? (c.background === '#ffffff' ? '#0f172a' : c.background) : c.background;
    const surfaceBg = isDark ? (c.background === '#ffffff' ? '#1e293b' : adjustBrightness(c.background, -15)) : adjustBrightness(c.background, -5);
    const cardBg = isDark ? (c.background === '#ffffff' ? '#334155' : adjustBrightness(c.background, -25)) : '#ffffff';
    const textColor = isDark ? (c.text === '#111827' ? '#e2e8f0' : c.text) : c.text;
    const subtextColor = isDark ? 'rgba(226,232,240,0.6)' : 'rgba(0,0,0,0.5)';

    // Card style
    let cardStyle = `background:${cardBg};border-radius:${cardRadius};padding:14px;transition:all 0.2s;`;
    switch (state.cardStyle) {
        case 'elevated': cardStyle += `box-shadow:0 4px 16px rgba(0,0,0,${isDark ? 0.4 : 0.1});`; break;
        case 'bordered': cardStyle += `border:1.5px solid ${c.primary}30;`; break;
        case 'flat-card': cardStyle += `background:${surfaceBg};`; break;
        case 'glass-card': cardStyle += `background:${c.primary}10;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.1);`; break;
        default: cardStyle += `box-shadow:0 2px 8px rgba(0,0,0,${isDark ? 0.3 : 0.06});`; break;
    }

    // Button style
    let btnHTML = '';
    if (state.buttonStyle === 'ghost') {
        btnHTML = `<div style="display:inline-block;padding:6px 18px;border:1.5px solid ${c.primary};border-radius:${btnRadius};color:${c.primary};font-size:11px;font-weight:600;${hasAnims ? 'transition:all 0.2s;' : ''}">Get Started</div>`;
    } else {
        btnHTML = `<div style="display:inline-block;padding:6px 18px;background:${c.primary};border-radius:${btnRadius};color:white;font-size:11px;font-weight:600;${hasAnims ? 'transition:all 0.2s;' : ''}">Get Started</div>`;
    }

    // Visual style mods
    let visualMod = '';
    if (state.visualStyle === 'glassmorphism') {
        visualMod = `backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);`;
    } else if (state.visualStyle === 'neumorphism') {
        const neuBg = isDark ? '#1e293b' : '#e8edf2';
        cardStyle = `background:${neuBg};border-radius:${cardRadius};padding:14px;box-shadow:inset 2px 2px 4px rgba(0,0,0,0.15),inset -2px -2px 4px rgba(255,255,255,${isDark ? 0.05 : 0.7});`;
    } else if (state.visualStyle === 'brutalist') {
        cardStyle = `background:#fbbf24;border-radius:0;padding:14px;border:3px solid #000;box-shadow:4px 4px 0 #000;`;
    }

    // Build nav
    let navHTML = '';
    if (navType === 'sidebar') {
        navHTML = `
            <div style="display:flex;min-height:220px;background:${bg};font-family:${fontFamily};color:${textColor};">
                <div style="width:56px;background:${c.primary};padding:12px 8px;display:flex;flex-direction:column;gap:10px;align-items:center;">
                    <div style="width:24px;height:24px;background:rgba(255,255,255,0.3);border-radius:6px;"></div>
                    <div style="width:20px;height:4px;background:rgba(255,255,255,0.2);border-radius:2px;"></div>
                    <div style="width:20px;height:4px;background:rgba(255,255,255,0.2);border-radius:2px;"></div>
                    <div style="width:20px;height:4px;background:rgba(255,255,255,0.2);border-radius:2px;"></div>
                    <div style="width:20px;height:4px;background:rgba(255,255,255,0.2);border-radius:2px;"></div>
                </div>
                <div style="flex:1;padding:16px;">
                    ${buildPreviewContent()}
                </div>
            </div>`;
    } else if (navType === 'floating') {
        navHTML = `
            <div style="background:${bg};font-family:${fontFamily};color:${textColor};position:relative;min-height:220px;">
                <div style="padding:20px 16px 60px;">
                    ${buildPreviewContent()}
                </div>
                <div style="position:absolute;bottom:12px;left:15%;right:15%;height:38px;background:${c.primary};border-radius:24px;display:flex;align-items:center;justify-content:center;gap:20px;box-shadow:0 4px 20px ${c.primary}40;">
                    <div style="width:16px;height:3px;background:rgba(255,255,255,0.6);border-radius:2px;"></div>
                    <div style="width:16px;height:3px;background:rgba(255,255,255,0.4);border-radius:2px;"></div>
                    <div style="width:16px;height:3px;background:rgba(255,255,255,0.4);border-radius:2px;"></div>
                </div>
            </div>`;
    } else if (navType === 'tab-bar') {
        navHTML = `
            <div style="background:${bg};font-family:${fontFamily};color:${textColor};display:flex;flex-direction:column;min-height:220px;">
                <div style="flex:1;padding:16px;">
                    ${buildPreviewContent()}
                </div>
                <div style="height:44px;background:${surfaceBg};border-top:1px solid ${c.primary}20;display:flex;align-items:center;justify-content:space-around;padding:0 12px;">
                    <div style="font-size:10px;color:${c.primary};font-weight:600;">Home</div>
                    <div style="font-size:10px;color:${subtextColor};">Search</div>
                    <div style="font-size:10px;color:${subtextColor};">Profile</div>
                </div>
            </div>`;
    } else {
        // Top nav (default)
        navHTML = `
            <div style="background:${bg};font-family:${fontFamily};color:${textColor};">
                <div style="height:44px;background:${c.primary};display:flex;align-items:center;justify-content:space-between;padding:0 16px;">
                    <div style="font-size:14px;font-weight:700;color:white;">BrandName</div>
                    <div style="display:flex;gap:14px;">
                        <span style="font-size:11px;color:rgba(255,255,255,0.7);">Products</span>
                        <span style="font-size:11px;color:rgba(255,255,255,0.7);">About</span>
                        <span style="font-size:11px;color:rgba(255,255,255,0.7);">Contact</span>
                    </div>
                </div>
                <div style="padding:16px;">
                    ${buildPreviewContent()}
                </div>
            </div>`;
    }

    preview.innerHTML = navHTML;

    function buildPreviewContent() {
        // Hero
        const heroHTML = `
            <div style="text-align:center;padding:12px 0 16px;">
                <div style="font-size:16px;font-weight:700;margin-bottom:4px;line-height:1.3;">Build Something Amazing</div>
                <div style="font-size:10px;color:${subtextColor};margin-bottom:10px;line-height:1.4;">Create beautiful interfaces with modern design principles</div>
                ${btnHTML}
            </div>`;

        // Cards based on layout
        let cardsHTML = '';
        if (layoutType === 'single-column') {
            cardsHTML = `
                <div style="max-width:70%;margin:0 auto;">
                    <div style="${cardStyle}${visualMod}margin-bottom:8px;">
                        <div style="font-size:12px;font-weight:600;margin-bottom:3px;">Feature One</div>
                        <div style="font-size:10px;color:${subtextColor};line-height:1.4;">Description of this feature goes here with details.</div>
                        <div style="height:3px;background:${c.primary}30;border-radius:2px;margin-top:8px;"></div>
                    </div>
                </div>`;
        } else if (layoutType === 'two-column') {
            cardsHTML = `
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                    <div style="${cardStyle}${visualMod}">
                        <div style="font-size:12px;font-weight:600;margin-bottom:3px;">Dashboard</div>
                        <div style="font-size:10px;color:${subtextColor};line-height:1.4;">Analytics overview</div>
                        <div style="height:3px;background:${c.primary}30;border-radius:2px;margin-top:8px;"></div>
                    </div>
                    <div style="${cardStyle}${visualMod}">
                        <div style="font-size:12px;font-weight:600;margin-bottom:3px;">Settings</div>
                        <div style="font-size:10px;color:${subtextColor};line-height:1.4;">Configuration panel</div>
                        <div style="height:3px;background:${c.accent}40;border-radius:2px;margin-top:8px;"></div>
                    </div>
                </div>`;
        } else if (layoutType === 'dashboard') {
            cardsHTML = `
                <div style="display:grid;grid-template-columns:1fr 2fr;gap:8px;">
                    <div style="${cardStyle}${visualMod}">
                        <div style="font-size:11px;font-weight:600;margin-bottom:6px;">Stats</div>
                        <div style="font-size:18px;font-weight:700;color:${c.primary};">2,847</div>
                        <div style="font-size:9px;color:${subtextColor};">+12% this week</div>
                    </div>
                    <div style="${cardStyle}${visualMod}">
                        <div style="font-size:11px;font-weight:600;margin-bottom:6px;">Revenue Chart</div>
                        <div style="display:flex;gap:3px;align-items:flex-end;height:36px;">
                            <div style="flex:1;background:${c.primary}40;height:50%;border-radius:2px;"></div>
                            <div style="flex:1;background:${c.primary}50;height:70%;border-radius:2px;"></div>
                            <div style="flex:1;background:${c.primary}60;height:45%;border-radius:2px;"></div>
                            <div style="flex:1;background:${c.primary}70;height:85%;border-radius:2px;"></div>
                            <div style="flex:1;background:${c.primary}80;height:60%;border-radius:2px;"></div>
                            <div style="flex:1;background:${c.primary}90;height:75%;border-radius:2px;"></div>
                            <div style="flex:1;background:${c.primary};height:90%;border-radius:2px;"></div>
                        </div>
                    </div>
                </div>`;
        } else if (layoutType === 'landing') {
            cardsHTML = `
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
                    <div style="${cardStyle}${visualMod}text-align:center;">
                        <div style="width:24px;height:24px;background:${c.primary}20;border-radius:50%;margin:0 auto 6px;display:flex;align-items:center;justify-content:center;">
                            <div style="width:10px;height:10px;background:${c.primary};border-radius:3px;"></div>
                        </div>
                        <div style="font-size:11px;font-weight:600;margin-bottom:2px;">Fast</div>
                        <div style="font-size:9px;color:${subtextColor};">Lightning speed</div>
                    </div>
                    <div style="${cardStyle}${visualMod}text-align:center;">
                        <div style="width:24px;height:24px;background:${c.primary}20;border-radius:50%;margin:0 auto 6px;display:flex;align-items:center;justify-content:center;">
                            <div style="width:10px;height:10px;background:${c.secondary};border-radius:3px;"></div>
                        </div>
                        <div style="font-size:11px;font-weight:600;margin-bottom:2px;">Secure</div>
                        <div style="font-size:9px;color:${subtextColor};">Enterprise grade</div>
                    </div>
                    <div style="${cardStyle}${visualMod}text-align:center;">
                        <div style="width:24px;height:24px;background:${c.primary}20;border-radius:50%;margin:0 auto 6px;display:flex;align-items:center;justify-content:center;">
                            <div style="width:10px;height:10px;background:${c.accent};border-radius:3px;"></div>
                        </div>
                        <div style="font-size:11px;font-weight:600;margin-bottom:2px;">Scalable</div>
                        <div style="font-size:9px;color:${subtextColor};">Grows with you</div>
                    </div>
                </div>`;
        } else {
            // Default grid / masonry
            const heights = layoutType === 'masonry' ? '80px' : '70px';
            const heights2 = layoutType === 'masonry' ? '100px' : '70px';
            cardsHTML = `
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
                    <div style="${cardStyle}${visualMod}min-height:${heights};">
                        <div style="font-size:12px;font-weight:600;margin-bottom:3px;">Projects</div>
                        <div style="font-size:10px;color:${subtextColor};line-height:1.4;">Manage your work</div>
                        <div style="height:3px;background:${c.primary}30;border-radius:2px;margin-top:8px;"></div>
                    </div>
                    <div style="${cardStyle}${visualMod}min-height:${heights2};">
                        <div style="font-size:12px;font-weight:600;margin-bottom:3px;">Analytics</div>
                        <div style="font-size:10px;color:${subtextColor};line-height:1.4;">Track performance</div>
                        <div style="height:3px;background:${c.accent}40;border-radius:2px;margin-top:8px;"></div>
                    </div>
                    <div style="${cardStyle}${visualMod}min-height:${heights};">
                        <div style="font-size:12px;font-weight:600;margin-bottom:3px;">Team</div>
                        <div style="font-size:10px;color:${subtextColor};line-height:1.4;">Collaborate together</div>
                        <div style="height:3px;background:${c.secondary}30;border-radius:2px;margin-top:8px;"></div>
                    </div>
                </div>`;
        }

        return heroHTML + cardsHTML;
    }
}

function adjustBrightness(hex, amount) {
    const { r, g, b } = hexToRgb(hex);
    return rgbToHex(
        Math.max(0, Math.min(255, r + amount)),
        Math.max(0, Math.min(255, g + amount)),
        Math.max(0, Math.min(255, b + amount))
    );
}
