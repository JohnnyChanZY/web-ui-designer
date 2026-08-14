/* ============================================
   Web UI Design Prompt Generator - App Logic
   ============================================ */

// State
const state = {
    navigation: null,
    layout: null,
    typography: null,
    visualStyle: null,
    buttonStyle: null,
    cardStyle: null,
    colors: {
        primary: '#3b82f6',
        secondary: '#1e40af',
        accent: '#93c5fd',
        background: '#ffffff',
        text: '#111827'
    },
    features: {
        darkMode: false,
        animations: false,
        responsive: true,
        gradients: false,
        shadows: false,
        icons: false
    },
    extraNotes: ''
};

// Label mappings (Chinese + English for prompt)
const labels = {
    navigation: {
        'top-fixed': { zh: '顶部固定导航', en: 'fixed top navigation bar' },
        'sidebar': { zh: '侧边栏导航', en: 'sidebar navigation with collapsible menu' },
        'hamburger': { zh: '汉堡菜单', en: 'hamburger menu navigation' },
        'mega-menu': { zh: '超级菜单', en: 'mega menu navigation with dropdown panels' },
        'tab-bar': { zh: '标签栏', en: 'bottom tab bar navigation' },
        'floating': { zh: '浮动导航', en: 'floating pill-shaped navigation bar' }
    },
    layout: {
        'single-column': { zh: '单列布局', en: 'single column centered layout' },
        'two-column': { zh: '双栏布局', en: 'two-column layout with sidebar' },
        'grid': { zh: '网格布局', en: 'responsive grid card layout' },
        'masonry': { zh: '瀑布流', en: 'masonry/pinterest-style layout' },
        'dashboard': { zh: '仪表盘', en: 'dashboard layout with panels and widgets' },
        'landing': { zh: '着陆页', en: 'landing page with hero section, features, and CTA' }
    },
    typography: {
        'modern-sans': { zh: '现代无衬线', en: 'modern sans-serif typography (Inter/Helvetica style)' },
        'classic-serif': { zh: '经典衬线', en: 'classic serif typography (Georgia/Times style)' },
        'mono-tech': { zh: '科技等宽', en: 'monospace/tech-style typography (JetBrains Mono/Fira Code)' },
        'rounded-friendly': { zh: '圆润友好', en: 'rounded friendly typography (Nunito/Poppins style)' },
        'bold-impact': { zh: '粗体醒目', en: 'bold impactful typography with heavy weights' },
        'elegant-thin': { zh: '优雅细体', en: 'elegant thin typography with light weights' }
    },
    visualStyle: {
        'minimal-clean': { zh: '极简清爽', en: 'minimal and clean design with ample whitespace' },
        'glassmorphism': { zh: '毛玻璃', en: 'glassmorphism style with frosted glass effects and transparency' },
        'neumorphism': { zh: '新拟态', en: 'neumorphism/soft UI with subtle shadows and embossed elements' },
        'brutalist': { zh: '粗野主义', en: 'brutalist design with bold borders, raw aesthetics, and high contrast' },
        'gradient-rich': { zh: '渐变丰富', en: 'gradient-rich design with vibrant color transitions' },
        'flat-design': { zh: '扁平化', en: 'flat design with solid colors and no shadows' }
    },
    buttonStyle: {
        'rounded': { zh: '圆角按钮', en: 'rounded corner buttons (8px radius)' },
        'pill': { zh: '胶囊按钮', en: 'pill-shaped buttons with fully rounded edges' },
        'sharp': { zh: '直角按钮', en: 'sharp-cornered rectangular buttons' },
        'ghost': { zh: '幽灵按钮', en: 'ghost/outline buttons with transparent background' }
    },
    cardStyle: {
        'elevated': { zh: '阴影卡片', en: 'elevated cards with drop shadows' },
        'bordered': { zh: '边框卡片', en: 'bordered cards with visible outlines' },
        'flat-card': { zh: '扁平卡片', en: 'flat cards with subtle background differentiation' },
        'glass-card': { zh: '毛玻璃卡片', en: 'glassmorphism cards with frosted glass effect' }
    }
};

// Preset palettes
const palettes = {
    ocean: { primary: '#0ea5e9', secondary: '#0284c7', accent: '#7dd3fc', background: '#f0f9ff', text: '#0f172a' },
    forest: { primary: '#22c55e', secondary: '#16a34a', accent: '#86efac', background: '#f0fdf4', text: '#14532d' },
    sunset: { primary: '#f97316', secondary: '#ea580c', accent: '#fdba74', background: '#fff7ed', text: '#431407' },
    lavender: { primary: '#a855f7', secondary: '#9333ea', accent: '#d8b4fe', background: '#faf5ff', text: '#3b0764' },
    rose: { primary: '#f43f5e', secondary: '#e11d48', accent: '#fda4af', background: '#fff1f2', text: '#881337' },
    monochrome: { primary: '#3b82f6', secondary: '#1e40af', accent: '#93c5fd', background: '#ffffff', text: '#111827' },
    dark: { primary: '#6366f1', secondary: '#4f46e5', accent: '#a5b4fc', background: '#0f172a', text: '#e2e8f0' },
    warm: { primary: '#eab308', secondary: '#ca8a04', accent: '#fde68a', background: '#fefce8', text: '#422006' }
};

// Category mapping for state
const categoryToState = {
    'navigation': 'navigation',
    'layout': 'layout',
    'typography': 'typography',
    'visual-style': 'visualStyle',
    'button-style': 'buttonStyle',
    'card-style': 'cardStyle'
};

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initOptionCards();
    initColorPickers();
    initPalettePresets();
    initFeatureToggles();
    initExtraNotes();
    initCopyButton();
    initResetButton();
    updatePrompt();
});

// ============================================
// Option Card Selection
// ============================================
function initOptionCards() {
    document.querySelectorAll('.option-grid').forEach(grid => {
        const category = grid.dataset.category;
        grid.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', () => {
                // Deselect siblings
                grid.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                // Select this one
                card.classList.add('selected');
                // Update state
                const stateKey = categoryToState[category];
                if (stateKey) {
                    state[stateKey] = card.dataset.value;
                }
                updatePrompt();
                updateMiniPreview();
            });
        });
    });
}

// ============================================
// Color Pickers
// ============================================
function initColorPickers() {
    const colorInputs = document.querySelectorAll('input[type="color"]');
    colorInputs.forEach(input => {
        const hexInput = document.querySelector(`.color-hex[data-for="${input.id}"]`);
        const colorKey = input.id.replace('color-', '');

        input.addEventListener('input', () => {
            state.colors[colorKey] = input.value;
            if (hexInput) hexInput.value = input.value;
            // Deselect any palette preset
            document.querySelectorAll('.palette-preset').forEach(p => p.classList.remove('selected'));
            updatePrompt();
            updateMiniPreview();
        });

        if (hexInput) {
            hexInput.addEventListener('input', () => {
                const val = hexInput.value;
                if (/^#[0-9a-fA-F]{6}$/.test(val)) {
                    state.colors[colorKey] = val;
                    input.value = val;
                    document.querySelectorAll('.palette-preset').forEach(p => p.classList.remove('selected'));
                    updatePrompt();
                    updateMiniPreview();
                }
            });
        }
    });
}

// ============================================
// Palette Presets
// ============================================
function initPalettePresets() {
    document.querySelectorAll('.palette-preset').forEach(btn => {
        btn.addEventListener('click', () => {
            const preset = btn.dataset.preset;
            const palette = palettes[preset];
            if (!palette) return;

            // Update state
            Object.assign(state.colors, palette);

            // Update UI
            document.getElementById('color-primary').value = palette.primary;
            document.getElementById('color-secondary').value = palette.secondary;
            document.getElementById('color-accent').value = palette.accent;
            document.getElementById('color-bg').value = palette.background;
            document.getElementById('color-text').value = palette.text;

            document.querySelector('.color-hex[data-for="color-primary"]').value = palette.primary;
            document.querySelector('.color-hex[data-for="color-secondary"]').value = palette.secondary;
            document.querySelector('.color-hex[data-for="color-accent"]').value = palette.accent;
            document.querySelector('.color-hex[data-for="color-bg"]').value = palette.background;
            document.querySelector('.color-hex[data-for="color-text"]').value = palette.text;

            // Visual feedback
            document.querySelectorAll('.palette-preset').forEach(p => p.classList.remove('selected'));
            btn.classList.add('selected');

            updatePrompt();
            updateMiniPreview();
        });
    });
}

// ============================================
// Feature Toggles
// ============================================
function initFeatureToggles() {
    const toggleMap = {
        'feat-dark-mode': 'darkMode',
        'feat-animations': 'animations',
        'feat-responsive': 'responsive',
        'feat-gradients': 'gradients',
        'feat-shadows': 'shadows',
        'feat-icons': 'icons'
    };

    Object.entries(toggleMap).forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) {
            el.checked = state.features[key];
            el.addEventListener('change', () => {
                state.features[key] = el.checked;
                updatePrompt();
            });
        }
    });
}

// ============================================
// Extra Notes
// ============================================
function initExtraNotes() {
    const textarea = document.getElementById('extra-notes');
    textarea.addEventListener('input', () => {
        state.extraNotes = textarea.value;
        updatePrompt();
    });
}

// ============================================
// Copy Button
// ============================================
function initCopyButton() {
    const btn = document.getElementById('btn-copy');
    btn.addEventListener('click', async () => {
        const promptText = generatePrompt();
        try {
            await navigator.clipboard.writeText(promptText);
            btn.classList.add('copied');
            btn.innerHTML = '✅ 已复制';
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerHTML = '📋 复制';
            }, 2000);
        } catch (err) {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = promptText;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            btn.classList.add('copied');
            btn.innerHTML = '✅ 已复制';
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerHTML = '📋 复制';
            }, 2000);
        }
    });
}

// ============================================
// Reset Button
// ============================================
function initResetButton() {
    const btn = document.getElementById('btn-reset');
    btn.addEventListener('click', () => {
        // Reset state
        state.navigation = null;
        state.layout = null;
        state.typography = null;
        state.visualStyle = null;
        state.buttonStyle = null;
        state.cardStyle = null;
        state.colors = {
            primary: '#3b82f6',
            secondary: '#1e40af',
            accent: '#93c5fd',
            background: '#ffffff',
            text: '#111827'
        };
        state.features = {
            darkMode: false,
            animations: false,
            responsive: true,
            gradients: false,
            shadows: false,
            icons: false
        };
        state.extraNotes = '';

        // Reset UI
        document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        document.querySelectorAll('.palette-preset').forEach(p => p.classList.remove('selected'));

        document.getElementById('color-primary').value = '#3b82f6';
        document.getElementById('color-secondary').value = '#1e40af';
        document.getElementById('color-accent').value = '#93c5fd';
        document.getElementById('color-bg').value = '#ffffff';
        document.getElementById('color-text').value = '#111827';

        document.querySelector('.color-hex[data-for="color-primary"]').value = '#3b82f6';
        document.querySelector('.color-hex[data-for="color-secondary"]').value = '#1e40af';
        document.querySelector('.color-hex[data-for="color-accent"]').value = '#93c5fd';
        document.querySelector('.color-hex[data-for="color-bg"]').value = '#ffffff';
        document.querySelector('.color-hex[data-for="color-text"]').value = '#111827';

        document.getElementById('feat-dark-mode').checked = false;
        document.getElementById('feat-animations').checked = false;
        document.getElementById('feat-responsive').checked = true;
        document.getElementById('feat-gradients').checked = false;
        document.getElementById('feat-shadows').checked = false;
        document.getElementById('feat-icons').checked = false;
        document.getElementById('extra-notes').value = '';

        updatePrompt();
        updateMiniPreview();
    });
}

// ============================================
// Generate Prompt
// ============================================
function generatePrompt() {
    const lines = [];

    lines.push('Design a web application with the following UI specifications:');
    lines.push('');

    // Navigation
    if (state.navigation) {
        const nav = labels.navigation[state.navigation];
        lines.push(`## Navigation`);
        lines.push(`- Use a ${nav.en}`);
        lines.push('');
    }

    // Layout
    if (state.layout) {
        const layout = labels.layout[state.layout];
        lines.push(`## Layout`);
        lines.push(`- Overall page structure: ${layout.en}`);
        lines.push('');
    }

    // Colors
    lines.push(`## Color Palette`);
    lines.push(`- Primary color: ${state.colors.primary}`);
    lines.push(`- Secondary color: ${state.colors.secondary}`);
    lines.push(`- Accent color: ${state.colors.accent}`);
    lines.push(`- Background color: ${state.colors.background}`);
    lines.push(`- Text color: ${state.colors.text}`);

    // Determine color mood
    const mood = getColorMood(state.colors.primary);
    if (mood) lines.push(`- Overall color mood: ${mood}`);
    lines.push('');

    // Typography
    if (state.typography) {
        const typo = labels.typography[state.typography];
        lines.push(`## Typography`);
        lines.push(`- Font style: ${typo.en}`);
        lines.push('');
    }

    // Visual Style
    if (state.visualStyle) {
        const style = labels.visualStyle[state.visualStyle];
        lines.push(`## Visual Style`);
        lines.push(`- Design approach: ${style.en}`);
        lines.push('');
    }

    // Components
    if (state.buttonStyle || state.cardStyle) {
        lines.push(`## Components`);
        if (state.buttonStyle) {
            lines.push(`- Buttons: ${labels.buttonStyle[state.buttonStyle].en}`);
        }
        if (state.cardStyle) {
            lines.push(`- Cards: ${labels.cardStyle[state.cardStyle].en}`);
        }
        lines.push('');
    }

    // Features
    const activeFeatures = [];
    if (state.features.darkMode) activeFeatures.push('dark mode support with smooth theme switching');
    if (state.features.animations) activeFeatures.push('micro-animations and hover transitions for interactive elements');
    if (state.features.responsive) activeFeatures.push('fully responsive design that works on mobile, tablet, and desktop');
    if (state.features.gradients) activeFeatures.push('gradient backgrounds and color transitions');
    if (state.features.shadows) activeFeatures.push('layered shadows for depth and visual hierarchy');
    if (state.features.icons) activeFeatures.push('consistent icon system (use Lucide, Heroicons, or similar)');

    if (activeFeatures.length > 0) {
        lines.push(`## Additional Features`);
        activeFeatures.forEach(f => lines.push(`- ${f}`));
        lines.push('');
    }

    // Extra notes
    if (state.extraNotes.trim()) {
        lines.push(`## Additional Requirements`);
        lines.push(`- ${state.extraNotes.trim()}`);
        lines.push('');
    }

    // General guidelines
    lines.push(`## General Guidelines`);
    lines.push(`- Use modern CSS (Flexbox/Grid) for layout`);
    lines.push(`- Ensure accessibility (WCAG 2.1 AA contrast ratios)`);
    lines.push(`- Keep consistent spacing (use 8px grid system)`);
    lines.push(`- Maintain visual hierarchy with clear content sections`);

    return lines.join('\n');
}

// ============================================
// Color Mood Detection
// ============================================
function getColorMood(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    if (max < 80) return 'dark and sophisticated';
    if (min > 200) return 'light and airy';

    if (r > g && r > b) {
        if (g > 150) return 'warm and energetic (orange tones)';
        return 'bold and passionate (red tones)';
    }
    if (g > r && g > b) return 'natural and calming (green tones)';
    if (b > r && b > g) {
        if (r > 150) return 'creative and vibrant (purple tones)';
        return 'professional and trustworthy (blue tones)';
    }
    if (r > 200 && g > 200) return 'optimistic and friendly (yellow tones)';
    return null;
}

// ============================================
// Update Prompt Display
// ============================================
function updatePrompt() {
    const prompt = generatePrompt();
    document.getElementById('prompt-output').textContent = prompt;

    // Update stats
    document.getElementById('stat-chars').textContent = `${prompt.length} 字符`;

    let selectionCount = 0;
    if (state.navigation) selectionCount++;
    if (state.layout) selectionCount++;
    if (state.typography) selectionCount++;
    if (state.visualStyle) selectionCount++;
    if (state.buttonStyle) selectionCount++;
    if (state.cardStyle) selectionCount++;
    Object.values(state.features).forEach(v => { if (v) selectionCount++; });
    document.getElementById('stat-selections').textContent = `${selectionCount} 项选择`;

    // Update preview tags
    updatePreviewTags();
}

function updatePreviewTags() {
    const container = document.getElementById('prompt-preview');
    container.innerHTML = '';

    const addTag = (text) => {
        const tag = document.createElement('span');
        tag.className = 'preview-tag';
        tag.textContent = text;
        container.appendChild(tag);
    };

    if (state.navigation) addTag(labels.navigation[state.navigation].zh);
    if (state.layout) addTag(labels.layout[state.layout].zh);
    if (state.typography) addTag(labels.typography[state.typography].zh);
    if (state.visualStyle) addTag(labels.visualStyle[state.visualStyle].zh);
    if (state.buttonStyle) addTag(labels.buttonStyle[state.buttonStyle].zh);
    if (state.cardStyle) addTag(labels.cardStyle[state.cardStyle].zh);

    // Color tag
    const colorSwatch = document.createElement('span');
    colorSwatch.className = 'preview-tag';
    colorSwatch.style.display = 'flex';
    colorSwatch.style.alignItems = 'center';
    colorSwatch.style.gap = '4px';
    colorSwatch.innerHTML = `<span style="width:10px;height:10px;border-radius:50%;background:${state.colors.primary};display:inline-block"></span> ${state.colors.primary}`;
    container.appendChild(colorSwatch);

    if (state.features.darkMode) addTag('🌙 暗色模式');
    if (state.features.animations) addTag('✨ 动效');
    if (state.features.responsive) addTag('📱 响应式');
    if (state.features.gradients) addTag('🌈 渐变');
    if (state.features.shadows) addTag('💠 阴影');
    if (state.features.icons) addTag('🎯 图标');
}

// ============================================
// Mini Preview
// ============================================
function updateMiniPreview() {
    const miniPreview = document.getElementById('mini-preview');
    const miniNav = document.getElementById('mini-nav');
    const miniBody = document.getElementById('mini-body');

    // Update colors
    miniNav.style.background = state.colors.primary;
    miniPreview.style.background = state.colors.background;

    // Update nav style based on selection
    miniNav.style.borderRadius = '0';
    miniNav.style.position = 'relative';
    miniNav.style.bottom = 'auto';
    miniNav.style.left = 'auto';
    miniNav.style.right = 'auto';
    miniNav.style.width = '100%';
    miniNav.style.height = '36px';
    miniNav.style.display = 'flex';
    miniNav.style.justifyContent = 'space-between';
    miniNav.style.order = '-1';

    if (state.navigation === 'sidebar') {
        miniPreview.style.display = 'flex';
        miniNav.style.width = '40px';
        miniNav.style.height = '100%';
        miniNav.style.flexDirection = 'column';
        miniNav.style.order = '0';
        miniNav.querySelector('.mini-nav-links').style.display = 'flex';
        miniNav.querySelector('.mini-nav-links').style.flexDirection = 'column';
    } else if (state.navigation === 'floating') {
        miniNav.style.position = 'absolute';
        miniNav.style.bottom = '12px';
        miniNav.style.left = '25%';
        miniNav.style.right = '25%';
        miniNav.style.borderRadius = '20px';
        miniNav.style.zIndex = '10';
        miniPreview.style.position = 'relative';
        miniPreview.style.display = 'block';
    } else if (state.navigation === 'tab-bar') {
        miniPreview.style.display = 'flex';
        miniPreview.style.flexDirection = 'column';
        miniNav.style.order = '1';
        miniNav.style.borderRadius = '0';
    } else {
        miniPreview.style.display = 'flex';
        miniPreview.style.flexDirection = 'column';
    }

    // Update layout
    const bodyStyle = miniBody.style;
    switch (state.layout) {
        case 'single-column':
            bodyStyle.gridTemplateColumns = '1fr';
            bodyStyle.maxWidth = '60%';
            bodyStyle.margin = '0 auto';
            break;
        case 'two-column':
            bodyStyle.gridTemplateColumns = '1fr 1fr';
            bodyStyle.maxWidth = '100%';
            bodyStyle.margin = '0';
            break;
        case 'grid':
            bodyStyle.gridTemplateColumns = 'repeat(3, 1fr)';
            bodyStyle.maxWidth = '100%';
            bodyStyle.margin = '0';
            break;
        case 'masonry':
            bodyStyle.gridTemplateColumns = 'repeat(3, 1fr)';
            bodyStyle.gridTemplateRows = 'auto';
            bodyStyle.maxWidth = '100%';
            bodyStyle.margin = '0';
            break;
        case 'dashboard':
            bodyStyle.gridTemplateColumns = '1fr 2fr';
            bodyStyle.maxWidth = '100%';
            bodyStyle.margin = '0';
            break;
        case 'landing':
            bodyStyle.gridTemplateColumns = '1fr';
            bodyStyle.maxWidth = '100%';
            bodyStyle.margin = '0';
            break;
        default:
            bodyStyle.gridTemplateColumns = 'repeat(3, 1fr)';
            bodyStyle.maxWidth = '100%';
            bodyStyle.margin = '0';
    }

    // Update card styles
    const cards = [
        document.getElementById('mini-card-1'),
        document.getElementById('mini-card-2'),
        document.getElementById('mini-card-3')
    ];

    cards.forEach((card, i) => {
        if (!card) return;
        // Reset
        card.style.boxShadow = 'none';
        card.style.border = 'none';
        card.style.background = '#f1f5f9';
        card.style.backdropFilter = 'none';
        card.style.opacity = '1';
        card.style.borderRadius = '6px';

        // Visual style
        switch (state.visualStyle) {
            case 'glassmorphism':
                card.style.background = `${state.colors.primary}15`;
                card.style.backdropFilter = 'blur(8px)';
                card.style.border = '1px solid rgba(255,255,255,0.1)';
                break;
            case 'neumorphism':
                card.style.background = state.colors.background === '#ffffff' ? '#e8edf2' : '#1a1d27';
                card.style.boxShadow = 'inset 2px 2px 4px rgba(0,0,0,0.15), inset -2px -2px 4px rgba(255,255,255,0.7)';
                break;
            case 'brutalist':
                card.style.background = i === 0 ? '#fbbf24' : i === 1 ? '#f87171' : '#34d399';
                card.style.border = '3px solid #000';
                card.style.boxShadow = '4px 4px 0 #000';
                card.style.borderRadius = '0';
                break;
            case 'gradient-rich':
                card.style.background = `linear-gradient(135deg, ${state.colors.primary}, ${state.colors.accent})`;
                card.style.opacity = (0.7 + i * 0.15).toString();
                break;
            default:
                card.style.background = state.colors.primary + '20';
        }

        // Card style override
        switch (state.cardStyle) {
            case 'elevated':
                card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                card.style.background = state.colors.background === '#ffffff' ? '#fff' : state.colors.background;
                break;
            case 'bordered':
                card.style.border = `2px solid ${state.colors.primary}40`;
                card.style.background = state.colors.background === '#ffffff' ? '#fff' : state.colors.background;
                break;
            case 'flat-card':
                card.style.background = state.colors.background === '#ffffff' ? '#f8fafc' : '#1e293b';
                break;
            case 'glass-card':
                card.style.background = `${state.colors.primary}10`;
                card.style.backdropFilter = 'blur(8px)';
                card.style.border = '1px solid rgba(255,255,255,0.1)';
                break;
        }

        // Button style (apply to first card as a "button" preview)
        if (i === 0 && state.buttonStyle) {
            const btnRadius = {
                'rounded': '8px',
                'pill': '20px',
                'sharp': '0',
                'ghost': '8px'
            }[state.buttonStyle] || '8px';

            // Add a mini button inside card
            card.style.position = 'relative';
            card.style.display = 'flex';
            card.style.alignItems = 'center';
            card.style.justifyContent = 'center';

            // Clear and add button
            card.innerHTML = '';
            const miniBtn = document.createElement('div');
            miniBtn.style.width = '60%';
            miniBtn.style.height = '16px';
            miniBtn.style.borderRadius = btnRadius;
            miniBtn.style.background = state.buttonStyle === 'ghost' ? 'transparent' : state.colors.primary;
            miniBtn.style.border = state.buttonStyle === 'ghost' ? `2px solid ${state.colors.primary}` : 'none';
            card.appendChild(miniBtn);
        } else {
            card.innerHTML = '';
        }

        // Masonry height variation
        if (state.layout === 'masonry') {
            card.style.minHeight = (60 + i * 30) + 'px';
        } else {
            card.style.minHeight = '80px';
        }
    });

    // Update text color on mini preview
    miniPreview.style.color = state.colors.text;
}
