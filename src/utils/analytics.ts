// Simple analytics utility for tracking user interactions
interface AnalyticsEvent {
  event: string;
  category?: string;
  label?: string;
  value?: number;
  timestamp: number;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private readonly maxEvents = 100;
  private readonly isDevelopment = process.env.NODE_ENV === 'development';

  track(event: string, properties?: Record<string, any>) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      category: properties?.category,
      label: properties?.label,
      value: properties?.value,
      timestamp: Date.now(),
    };

    this.events.push(analyticsEvent);

    // Keep only recent events to prevent memory leaks
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }

    if (this.isDevelopment) {
      console.log('Analytics Event:', analyticsEvent);
    }

    // Here you could integrate with Google Analytics, Mixpanel, etc.
    this.sendToExternalService(analyticsEvent);
  }

  private sendToExternalService(event: AnalyticsEvent) {
    // Placeholder for external analytics integration
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.event, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  clearEvents() {
    this.events = [];
  }

  // Common tracking methods
  trackPageView(page: string) {
    this.track('page_view', { category: 'navigation', label: page });
  }

  trackButtonClick(buttonName: string, section?: string) {
    this.track('button_click', { 
      category: 'interaction', 
      label: buttonName,
      section 
    });
  }

  trackFormSubmission(formName: string) {
    this.track('form_submit', { category: 'conversion', label: formName });
  }

  trackSectionView(sectionName: string) {
    this.track('section_view', { category: 'engagement', label: sectionName });
  }

  trackExternalLink(url: string) {
    this.track('external_link_click', { category: 'outbound', label: url });
  }
}

export const analytics = new Analytics();

// Hook for React components
export const useAnalytics = () => {
  return {
    trackPageView: analytics.trackPageView.bind(analytics),
    trackButtonClick: analytics.trackButtonClick.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    trackSectionView: analytics.trackSectionView.bind(analytics),
    trackExternalLink: analytics.trackExternalLink.bind(analytics),
    track: analytics.track.bind(analytics),
  };
};
