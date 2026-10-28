import { defineConfig } from 'vitepress'

// ── Per-locale UI strings (nav / sidebar / footer) ────────────────
// Guide/Legal body .md files are translated per-locale under
// docs/<lang>/. This object only holds the chrome labels.
const STR = {
  en: {
    home: 'Home', guide: 'Guide', formats: 'Formats', faq: 'FAQ', github: 'GitHub', productHunt: 'Product Hunt',
    guideGroup: 'Guide', intro: 'Introduction', install: 'Installation', usage: 'Usage',
    formatsLabel: 'Supported Formats', permissions: 'Permissions', troubleshooting: 'Troubleshooting', faqLabel: 'FAQ',
    legalGroup: 'Legal', privacy: 'Privacy Policy', privacyChoices: 'Privacy Choices', terms: 'Terms of Service',
    footerMessage: 'Built for macOS — simple, fast, and reliable.',
    footerCopyright: 'Copyright © 2026 NueZip Project. All rights reserved.',
    product: 'Product', about: 'About', features: 'Features', installF: 'Installation', formatsF: 'Formats',
    support: 'Support', documentation: 'Documentation', faqF: 'FAQ', troubleshootingF: 'Troubleshooting', contact: 'Contact',
    company: 'Company', privacyC: 'Privacy Policy', termsC: 'Terms of Service', githubC: 'GitHub',
  },
  es: {
    home: 'Inicio', guide: 'Guía', formats: 'Formatos', faq: 'Preguntas', github: 'GitHub', productHunt: 'Product Hunt',
    guideGroup: 'Guía', intro: 'Introducción', install: 'Instalación', usage: 'Uso',
    formatsLabel: 'Formatos compatibles', permissions: 'Permisos', troubleshooting: 'Solución de problemas', faqLabel: 'Preguntas frecuentes',
    legalGroup: 'Legal', privacy: 'Política de privacidad', privacyChoices: 'Opciones de privacidad', terms: 'Términos del servicio',
    footerMessage: 'Hecho para macOS: sencillo, rápido y fiable.',
    footerCopyright: 'Copyright © 2026 NueZip Project. Todos los derechos reservados.',
    product: 'Producto', about: 'Acerca de', features: 'Funciones', installF: 'Instalación', formatsF: 'Formatos',
    support: 'Soporte', documentation: 'Documentación', faqF: 'Preguntas frecuentes', troubleshootingF: 'Solución de problemas', contact: 'Contacto',
    company: 'Empresa', privacyC: 'Política de privacidad', termsC: 'Términos del servicio', githubC: 'GitHub',
  },
  'zh-CN': {
    home: '首页', guide: '指南', formats: '格式', faq: '常见问题', github: 'GitHub', productHunt: 'Product Hunt',
    guideGroup: '指南', intro: '简介', install: '安装', usage: '使用',
    formatsLabel: '支持的格式', permissions: '权限', troubleshooting: '故障排除', faqLabel: '常见问题',
    legalGroup: '法律', privacy: '隐私政策', privacyChoices: '隐私选项', terms: '服务条款',
    footerMessage: '专为 macOS 打造 —— 简单、快速、可靠。',
    footerCopyright: '© 2026 NueZip 项目。保留所有权利。',
    product: '产品', about: '关于', features: '功能', installF: '安装', formatsF: '格式',
    support: '支持', documentation: '文档', faqF: '常见问题', troubleshootingF: '故障排除', contact: '联系我们',
    company: '公司', privacyC: '隐私政策', termsC: '服务条款', githubC: 'GitHub',
  },
  'zh-TW': {
    home: '首頁', guide: '指南', formats: '格式', faq: '常見問題', github: 'GitHub', productHunt: 'Product Hunt',
    guideGroup: '指南', intro: '簡介', install: '安裝', usage: '使用',
    formatsLabel: '支援的格式', permissions: '權限', troubleshooting: '故障排除', faqLabel: '常見問題',
    legalGroup: '法律', privacy: '隱私政策', privacyChoices: '隱私選項', terms: '服務條款',
    footerMessage: '專為 macOS 打造 —— 簡單、快速、可靠。',
    footerCopyright: '© 2026 NueZip 專案。保留所有權利。',
    product: '產品', about: '關於', features: '功能', installF: '安裝', formatsF: '格式',
    support: '支援', documentation: '文件', faqF: '常見問題', troubleshootingF: '故障排除', contact: '聯絡我們',
    company: '公司', privacyC: '隱私政策', termsC: '服務條款', githubC: 'GitHub',
  },
  ja: {
    home: 'ホーム', guide: 'ガイド', formats: '対応形式', faq: 'よくある質問', github: 'GitHub', productHunt: 'Product Hunt',
    guideGroup: 'ガイド', intro: 'はじめに', install: 'インストール', usage: '使い方',
    formatsLabel: '対応形式', permissions: '権限', troubleshooting: 'トラブルシューティング', faqLabel: 'よくある質問',
    legalGroup: '法的事項', privacy: 'プライバシーポリシー', privacyChoices: 'プライバシーの選択', terms: '利用規約',
    footerMessage: 'macOS のために作られた —— シンプルで、高速で、信頼できる。',
    footerCopyright: 'Copyright © 2026 NueZip Project. All rights reserved.',
    product: '製品', about: '概要', features: '機能', installF: 'インストール', formatsF: '対応形式',
    support: 'サポート', documentation: 'ドキュメント', faqF: 'よくある質問', troubleshootingF: 'トラブルシューティング', contact: 'お問い合わせ',
    company: '会社', privacyC: 'プライバシーポリシー', termsC: '利用規約', githubC: 'GitHub',
  },
  de: {
    home: 'Start', guide: 'Anleitung', formats: 'Formate', faq: 'FAQ', github: 'GitHub', productHunt: 'Product Hunt',
    guideGroup: 'Anleitung', intro: 'Einführung', install: 'Installation', usage: 'Nutzung',
    formatsLabel: 'Unterstützte Formate', permissions: 'Berechtigungen', troubleshooting: 'Fehlerbehebung', faqLabel: 'FAQ',
    legalGroup: 'Rechtliches', privacy: 'Datenschutzerklärung', privacyChoices: 'Datenschutz-Optionen', terms: 'Nutzungsbedingungen',
    footerMessage: 'Für macOS entwickelt — einfach, schnell und zuverlässig.',
    footerCopyright: 'Copyright © 2026 NueZip Project. Alle Rechte vorbehalten.',
    product: 'Produkt', about: 'Über', features: 'Funktionen', installF: 'Installation', formatsF: 'Formate',
    support: 'Support', documentation: 'Dokumentation', faqF: 'FAQ', troubleshootingF: 'Fehlerbehebung', contact: 'Kontakt',
    company: 'Unternehmen', privacyC: 'Datenschutzerklärung', termsC: 'Nutzungsbedingungen', githubC: 'GitHub',
  },
  fr: {
    home: 'Accueil', guide: 'Guide', formats: 'Formats', faq: 'FAQ', github: 'GitHub', productHunt: 'Product Hunt',
    guideGroup: 'Guide', intro: 'Introduction', install: 'Installation', usage: 'Utilisation',
    formatsLabel: 'Formats pris en charge', permissions: 'Autorisations', troubleshooting: 'Dépannage', faqLabel: 'FAQ',
    legalGroup: 'Mentions légales', privacy: 'Politique de confidentialité', privacyChoices: 'Options de confidentialité', terms: 'Conditions d’utilisation',
    footerMessage: 'Conçu pour macOS — simple, rapide et fiable.',
    footerCopyright: 'Copyright © 2026 NueZip Project. Tous droits réservés.',
    product: 'Produit', about: 'À propos', features: 'Fonctionnalités', installF: 'Installation', formatsF: 'Formats',
    support: 'Assistance', documentation: 'Documentation', faqF: 'FAQ', troubleshootingF: 'Dépannage', contact: 'Contact',
    company: 'Société', privacyC: 'Politique de confidentialité', termsC: 'Conditions d’utilisation', githubC: 'GitHub',
  },
}

// ── Build a themeConfig for a given locale ────────────────────────
// All *internal* links are prefixed with the locale segment so the
// default VitePress nav / sidebar / footer resolve to the localized
// page in every language. External (http/https/mailto) links are left
// untouched.
function tc(S: typeof STR.en, lang: string) {
  const base = !lang || lang === 'en' ? '' : `/${lang}`
  const L = (p: string) =>
    /^https?:\/\//.test(p) || p.startsWith('mailto:') || p.startsWith(base)
      ? p
      : `${base}${p}`
  return {
    nav: [
      { text: S.home, link: L('/') },
      { text: S.guide, link: L('/guide/introduction') },
      { text: S.formats, link: L('/guide/formats') },
      { text: S.faq, link: L('/guide/faq') },
      { text: S.github, link: 'https://github.com/nuezip/nuezip' },
      { text: S.productHunt, link: 'https://www.producthunt.com/products/nuezip-the-modern-mac-archive-utility?utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-nuezip-the-modern-mac-archive-utility' },
    ],
    sidebar: [
      {
        text: S.guideGroup,
        items: [
          { text: S.intro, link: L('/guide/introduction') },
          { text: S.install, link: L('/guide/installation') },
          { text: S.usage, link: L('/guide/usage') },
          { text: S.formatsLabel, link: L('/guide/formats') },
          { text: S.permissions, link: L('/guide/permissions') },
          { text: S.troubleshooting, link: L('/guide/troubleshooting') },
          { text: S.faqLabel, link: L('/guide/faq') },
        ],
      },
      {
        text: S.legalGroup,
        items: [
          { text: S.privacy, link: L('/guide/privacy') },
          { text: S.privacyChoices, link: L('/guide/privacy-choices') },
          { text: S.terms, link: L('/guide/terms') },
        ],
      },
    ],
    footer: {
      message: S.footerMessage,
      copyright: S.footerCopyright,
      items: [
        {
          text: S.product,
          items: [
            { text: S.about, link: L('/guide/introduction') },
            { text: S.features, link: L('/#features') },
            { text: S.installF, link: L('/guide/installation') },
            { text: S.formatsF, link: L('/guide/formats') },
          ],
        },
        {
          text: S.support,
          items: [
            { text: S.documentation, link: L('/guide/introduction') },
            { text: S.faqF, link: L('/guide/faq') },
            { text: S.troubleshootingF, link: L('/guide/troubleshooting') },
            { text: S.contact, link: 'mailto:nuezip@w3cub.com' },
          ],
        },
        {
          text: S.company,
          items: [
            { text: S.about, link: L('/guide/introduction') },
            { text: S.privacyC, link: L('/guide/privacy') },
            { text: S.termsC, link: L('/guide/terms') },
            { text: S.githubC, link: 'https://github.com/nuezip/nuezip' },
          ],
        },
      ],
    },
  }
}

// ── Per-locale markdown renderer strings (containers + code copy) ─
const MD = {
  es: {
    container: {
      tipLabel: 'Consejo', warningLabel: 'Advertencia', dangerLabel: 'Peligro', infoLabel: 'Información', detailsLabel: 'Detalles',
    },
    codeCopyButton: { tooltipText: 'Copiar código', copiedText: 'Copiado' },
  },
  'zh-CN': {
    container: {
      tipLabel: '提示', warningLabel: '警告', dangerLabel: '危险', infoLabel: '信息', detailsLabel: '详情',
    },
    codeCopyButton: { tooltipText: '复制代码', copiedText: '已复制' },
  },
  'zh-TW': {
    container: {
      tipLabel: '提示', warningLabel: '警告', dangerLabel: '危險', infoLabel: '資訊', detailsLabel: '詳情',
    },
    codeCopyButton: { tooltipText: '複製程式碼', copiedText: '已複製' },
  },
  ja: {
    container: {
      tipLabel: 'ヒント', warningLabel: '警告', dangerLabel: '危険', infoLabel: '情報', detailsLabel: '詳細',
    },
    codeCopyButton: { tooltipText: 'コードをコピー', copiedText: 'コピーしました' },
  },
  de: {
    container: {
      tipLabel: 'Tipp', warningLabel: 'Warnung', dangerLabel: 'Gefahr', infoLabel: 'Info', detailsLabel: 'Details',
    },
    codeCopyButton: { tooltipText: 'Code kopieren', copiedText: 'Kopiert' },
  },
  fr: {
    container: {
      tipLabel: 'Conseil', warningLabel: 'Avertissement', dangerLabel: 'Danger', infoLabel: 'Info', detailsLabel: 'Détails',
    },
    codeCopyButton: { tooltipText: 'Copier le code', copiedText: 'Copié' },
  },
}

export default defineConfig({
  base: '/',
  title: 'NueZip',
  titleTemplate: 'NueZip — :title',
  description: 'NueZip — Professional archive manager for macOS. Compress, extract, and manage ZIP, RAR, 7Z, TAR and more.',
  lastUpdated: true,
  head: [
    // Favicons
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],

    // Theme and viewport
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],

    // SEO
    ['meta', { name: 'keywords', content: 'nuezip, archive, compression, macos, zip, rar, 7z, extract, compress, file-manager' }],
    ['meta', { name: 'author', content: 'NueZip Project' }],

    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'NueZip' }],
    ['meta', { property: 'og:url', content: 'https://nuezip.w3cub.com/' }],
    ['meta', { property: 'og:title', content: 'NueZip — Professional Archive Manager for macOS' }],
    ['meta', { property: 'og:description', content: 'Compress, extract, and manage all major archive formats on macOS. Native, fast, and secure.' }],
    ['meta', { property: 'og:image', content: 'https://nuezip.w3cub.com/preview.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'NueZip Preview' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://nuezip.w3cub.com/' }],
    ['meta', { name: 'twitter:title', content: 'NueZip — Professional Archive Manager for macOS' }],
    ['meta', { name: 'twitter:description', content: 'Compress, extract, and manage all major archive formats on macOS. Native, fast, and secure.' }],
    ['meta', { name: 'twitter:image', content: 'https://nuezip.w3cub.com/preview.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'NueZip Preview' }],
  ],
  themeConfig: {
    siteTitle: 'NueZip',
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nuezip/nuezip' },
    ],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: tc(STR.en, 'en'),
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: tc(STR.es, 'es'),
      markdown: MD.es,
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      themeConfig: tc(STR['zh-CN'], 'zh-CN'),
      markdown: MD['zh-CN'],
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/',
      themeConfig: tc(STR['zh-TW'], 'zh-TW'),
      markdown: MD['zh-TW'],
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: tc(STR.ja, 'ja'),
      markdown: MD.ja,
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      link: '/de/',
      themeConfig: tc(STR.de, 'de'),
      markdown: MD.de,
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      themeConfig: tc(STR.fr, 'fr'),
      markdown: MD.fr,
    },
  },
})
