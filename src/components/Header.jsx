import React from 'react';
import { Train, Radio, Volume2, ShieldCheck } from 'lucide-react';

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
                  fontSize: '1.05rem',
                  letterSpacing: '0.04em',
                  color: 'var(--color-forest-deep)',
                  textTransform: 'uppercase',
                  lineHeight: 1
                }}
              >
                Arnav Express
              </span>
              <span
                className="badge-mono"
                style={{
                  backgroundColor: 'var(--color-forest-surface)',
                  color: 'var(--color-forest)',
                  border: '1px solid var(--color-forest-border)',
                  fontSize: '0.65rem'
                }}
              >
                EXP 2026
              </span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
                marginTop: '2px'
              }}
            >
              WISPR FLOW INDIA GROWTH
            </div>
          </div>
        </div>

        {/* Status / Announcement Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="status-pill on-time" title="All systems green">
            <span className="signal-dot green"></span>
            <span style={{ display: 'none', minWidth: '48px' }} className="mobile-hide-inline">
              LINE CLEAR
            </span>
            <span>ON TIME</span>
          </div>

          {/* Station Announcement Audio Badge */}
          <div
            className="station-board"
            style={{
              padding: '4px 10px',
              borderWidth: '2px',
              cursor: 'default',
              boxShadow: '0 2px 0 #1A1915'
            }}
            title="Station Announcement Station Master"
          >
            <Volume2 size={13} style={{ color: 'var(--color-station-yellow-text)' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: 'var(--color-station-yellow-text)'
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

