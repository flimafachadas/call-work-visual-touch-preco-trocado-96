
export const APP_CONFIG = {
  ANIMATION_DELAYS: {
    FLOAT_BASE: '2s',
    FLOAT_SECONDARY: '4s',
  },
  PERFORMANCE: {
    MAX_METRICS: 50,
    RENDER_THRESHOLD: 1,
    SLOW_COMPONENT_THRESHOLD: 5,
    MAX_TRACKED_LINKS: 20,
    CAROUSEL_AUTOPLAY_DELAY: 4000,
    MEMORY_CLEANUP_INTERVAL: 300000, // 5 minutes
  },
  UI: {
    MOBILE_BREAKPOINT: 768,
    TABLET_BREAKPOINT: 1024,
  },
  OPTIMIZATION: {
    DEBOUNCE_DELAY: 300,
    THROTTLE_DELAY: 100,
    LAZY_LOAD_THRESHOLD: 0.1,
  },
} as const;

export const ARIA_LABELS = {
  NAVIGATION: {
    MAIN_MENU: 'Menu principal',
    MOBILE_MENU: 'Menu móvel',
    CLOSE_MENU: 'Fechar menu',
    OPEN_MENU: 'Abrir menu',
  },
  ACTIONS: {
    SCHEDULE_VISIT: 'Agendar visita via WhatsApp',
    NAVIGATE_TO: (section: string) => `Navegar para ${section}`,
    FOLLOW_ON: (platform: string) => `Seguir no ${platform}`,
  },
  CAROUSEL: {
    PREVIOUS: 'Slide anterior',
    NEXT: 'Próximo slide',
    SLIDE: (current: number, total: number) => `Slide ${current} de ${total}`,
  },
} as const;
