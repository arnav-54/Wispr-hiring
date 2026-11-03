import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export default function RailwayTicker() {
  return (
    <div className="ticker-strip" role="region" aria-label="Railway Departure Updates">
      <div className="site-container ticker-inner">
        {/* Left Side: Service Details */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
          <span
            style={{
              backgroundColor: 'var(--color-station-yellow)',
              color: '#000000',
              fontWeight: 800,
              padding: '1px 5px',
              borderRadius: '2px',
              fontSize: '0.68rem',
              flexShrink: 0
            }}
          >
            TRAIN 2026-WF
          </span>
          <span className="board-led-text" style={{ fontSize: '0.74rem', whiteSpace: 'nowrap' }}>
            <span className="ticker-label-tag">ORIGIN: </span>ROURKELA{' '}
            <span style={{ color: 'var(--board-led-dim)' }}>→</span>{' '}
            <span className="ticker-label-tag">DESTINATION: </span>WISPR FLOW INDIA
          </span>
        </div>

        {/* Right Side: Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              color: '#28DB75',
              fontWeight: 600,
              fontSize: '0.72rem'
            }}
          >
            <Clock size={12} />
            YOUR STORY STARTS HERE
          </span>
        </div>
      </div>
    </div>
  );
}

