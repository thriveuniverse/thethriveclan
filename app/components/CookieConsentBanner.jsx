'use client';  // Marks this as Client Component only

import { useEffect, useState } from 'react';
import Link from 'next/link';
import CookieConsent from 'react-cookie-consent';

// Client-side component for cookie consent (handles geotargeting and blocking GA)
export default function CookieConsentBanner() {
  const [isEU, setIsEU] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Simple client-side EU detection (use a real IP API like ipapi.co for prod)
    const detectEU = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const euCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'];  // EU ISO codes
        setIsEU(euCountries.includes(data.country_code));
      } catch (err) {
        console.warn('EU detection failed, showing banner universally as fallback');
        setIsEU(true);  // Fallback: Show for all to err on caution
      }
    };
    detectEU();

    // Check existing consent
    if (document.cookie.includes('thriveclan-consent=true')) {
      setConsentGiven(true);
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    if (!window.googleAnalyticsLoaded) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-GSK522YCY0';  // Your GA4 ID
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-GSK522YCY0', { anonymize_ip: true });  // Anonymize for GDPR (optional but recommended)

      window.googleAnalyticsLoaded = true;
    }
  };

  if (!isEU || consentGiven) return null;  // Hide if not EU or already consented

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Reject All"
      cookieName="thriveclan-consent"
      onAccept={() => {
        setConsentGiven(true);
        loadGoogleAnalytics();
      }}
      onDecline={() => setConsentGiven(true)}  // Hides banner, blocks GA
      style={{ background: '#2B373B', color: '#fff', fontSize: '14px' }}
      buttonStyle={{ background: '#4A90E2', color: '#fff', fontSize: '13px' }}
      declineButtonStyle={{ background: '#6B7280', color: '#fff', fontSize: '13px' }}
      expires={365}
      sameSite="strict"
    >
      We use essential cookies for site functionality. Analytics cookies help us improve your experience.{" "}
      <span style={{ fontSize: '13px' }}>
        <Link href="/privacy" style={{ color: '#4A90E2', textDecoration: 'underline' }}>Privacy Policy</Link>
      </span>
    </CookieConsent>
  );
}