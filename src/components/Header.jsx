import React from 'react';
import { Train, Volume2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="station-header">
      <div className="site-container station-header-inner">
        {/* Brand / Train Identity */}
        <div className="header-brand-group">
          <div className="station-logo-icon">
            <Train size={20} strokeWidth={2.2} />
          </div>

          <div className="station-brand-text">
            <div className="station-brand-title-row">
              <span className="station-brand-title">Arnav Express</span>
              <span className="badge-mono header-exp-badge">EXP 2026</span>
            </div>

            <div className="station-header-subtitle">
              WISPR FLOW INDIA GROWTH
            </div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="header-right-status">
          {/* Status Pill: Line Clear • On Time */}
          <div className="status-pill on-time" title="Line Clear • On Time">
            <span className="signal-dot green"></span>
            <span className="header-status-full">LINE CLEAR • </span>
            <span>ON TIME</span>
          </div>

          {/* Station Announcement Audio Badge / PF-1 */}
          <div className="station-board header-pf-board" title="Platform 1">
            <Volume2 size={12} className="header-pf-icon" />
            <span className="header-pf-text">PF-1</span>
          </div>
        </div>
      </div>
    </header>
  );
}
