import React from 'react';
import { Train, Volume2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="station-header">
      <div className="site-container station-header-inner">
        {/* Brand / Train Identity */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              backgroundColor: 'var(--color-forest)',
              color: '#FFFFFF',
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-subtle)',
              flexShrink: 0
            }}
          >
            <Train size={20} strokeWidth={2.2} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(0.98rem, 2.8vw, 1.12rem)',
                  letterSpacing: '0.03em',
                  color: 'var(--color-forest-deep)',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap'
                }}
              >
                Arnav Express
              </span>

              {/* EXP 2026 Badge on Desktop */}
              <span
                className="badge-mono header-desktop-exp"
                style={{
                  backgroundColor: 'var(--color-forest-surface)',
                  color: 'var(--color-forest)',
                  border: '1px solid var(--color-forest-border)',
                  fontSize: '0.65rem',
                  whiteSpace: 'nowrap'
                }}
              >
                EXP 2026
              </span>
            </div>

            {/* Subtitle Line with Mobile EXP 2026 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
                marginTop: '3px',
                whiteSpace: 'nowrap'
              }}
            >
              {/* EXP 2026 Badge on Mobile */}
              <span
                className="badge-mono header-mobile-exp"
                style={{
                  backgroundColor: 'var(--color-forest-surface)',
                  color: 'var(--color-forest)',
                  border: '1px solid var(--color-forest-border)',
                  fontSize: '0.62rem',
                  padding: '1px 5px',
                  whiteSpace: 'nowrap'
                }}
              >
                EXP 2026
              </span>
              <span>WISPR FLOW INDIA GROWTH</span>
            </div>
          </div>
        </div>

        {/* Status Indicators */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {/* Status Pill: Line Clear • On Time */}
          <div
            className="status-pill on-time"
            style={{
              padding: '4px 8px',
              whiteSpace: 'nowrap',
              fontSize: '0.68rem'
            }}
            title="Line Clear • On Time"
          >
            <span className="signal-dot green" style={{ width: '7px', height: '7px', flexShrink: 0 }}></span>
            <span className="header-status-full">LINE CLEAR • </span>
            <span>ON TIME</span>
          </div>

          {/* Station Announcement Audio Badge / PF-1 */}
          <div
            className="station-board header-pf-board"
            style={{
              padding: '4px 13px 4px 11px',
              borderWidth: '2px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'default',
              boxShadow: '0 2px 0 #1A1915',
              whiteSpace: 'nowrap'
            }}
            title="Platform 1"
          >
            <Volume2 size={12} style={{ color: 'var(--color-station-yellow-text)', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.70rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: 'var(--color-station-yellow-text)',
                marginRight: '2px'
              }}
            >
              PF-1
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

