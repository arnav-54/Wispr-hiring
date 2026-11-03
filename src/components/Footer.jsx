import React from 'react';
import { ArrowUp, Train } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="station-footer">
      <div className="site-container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            paddingBottom: '24px'
          }}
        >
          {/* Top Row: Terminal Sign & Back to Top */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '2px solid var(--color-station-yellow)',
                  color: 'var(--color-station-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  fontSize: '0.85rem'
                }}
                title="Indian Railways LV (Last Vehicle) Indicator"
              >
                LV
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--text-inverse)'
                  }}
                >
                  FINAL DESTINATION • WISPR FLOW INDIA
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-inverse-muted)',
                    letterSpacing: '0.04em'
                  }}
                >
                  THANK YOU FOR TRAVELLING WITH ARNAV EXPRESS
                </div>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="railway-btn"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: 'var(--text-inverse)',
                border: '1px solid rgba(255, 255, 255, 0.18)'
              }}
              aria-label="Return to Platform 1 / Top of page"
            >
              <span>RETURN TO PLATFORM 1</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '20px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--text-inverse-muted)'
          }}
        >
          <div>
            ARNAV EXPRESS • WISPR FLOW INDIA GROWTH
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>ORIGIN: ROURKELA</span>
            <span>CLASS: GROWTH</span>
            <span>GAUGE: BROAD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

