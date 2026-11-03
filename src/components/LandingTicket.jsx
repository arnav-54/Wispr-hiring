import React, { useState, useEffect, useRef } from 'react';
import { playRailwayAnnouncement } from '../utils/sound';
import { ArrowRight, Volume2, CheckCircle2, ChevronDown, Train, Sparkles } from 'lucide-react';

export default function LandingTicket() {
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [announcementFinished, setAnnouncementFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const cleanupAudioRef = useRef(null);

  const announcementText = `Arnav Express, Rourkela se chalkar, Pune hote hue, Wispr Flow India tak jaane wali hai.

Yeh gaadi seedhi nahi chali. Kai jagah late hui, lekin har station par kuch seekha.

Aapka swagat hai. Aapki yatra mangalmay ho.`;

  const handleStartJourney = () => {
    if (isPlaying) return;

    setJourneyStarted(true);
    setIsPlaying(true);
    setAnnouncementFinished(false);
    setProgress(0);

    // Cancel any previous playback
    if (cleanupAudioRef.current) {
      cleanupAudioRef.current();
    }

    const cancelAudio = playRailwayAnnouncement(
      () => {
        // onEnded
        setIsPlaying(false);
        setAnnouncementFinished(true);
        // Smoothly scroll down to route section
        setTimeout(() => {
          const routeSection = document.getElementById('route-section');
          if (routeSection) {
            routeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 600);
      },
      (p) => {
        // onProgress
        setProgress(p);
      }
    );

    cleanupAudioRef.current = cancelAudio;
  };

  useEffect(() => {
    return () => {
      if (cleanupAudioRef.current) {
        cleanupAudioRef.current();
      }
    };
  }, []);

  const handleSkipToRoute = () => {
    const routeSection = document.getElementById('route-section');
    if (routeSection) {
      routeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="landing-ticket-wrapper">
      {/* Centered Large Indian Railway Paper Ticket */}
      <article
        className={`paper-ticket-main ${journeyStarted ? 'ticket-journey-active' : ''}`}
        aria-label="Indian Railways Boarding Ticket for Arnav Kumar"
      >
        {/* Top Header Banner */}
        <div className="ticket-top-banner">
          <div className="ticket-emblem-text">
            <Train size={17} />
            <span>भारतीय रेल / INDIAN RAILWAYS</span>
          </div>
          <div className="ticket-pnr-badge">
            PNR: ARNAV-2026
          </div>
        </div>

        {/* Ticket Main Details */}
        <div className="ticket-body-content">
          {/* Origin to Destination Row */}
          <div className="ticket-route-row">
            <div className="ticket-station-block">
              <span className="ticket-label">FROM / प्रस्थान</span>
              <div className="ticket-station-name">
                Rourkela
                <span className="ticket-station-code">[ROU]</span>
              </div>
            </div>

            <div className="ticket-route-arrow" aria-hidden="true">
              <span className="ticket-label" style={{ textAlign: 'center' }}>EXP 2026</span>
              <div className="ticket-route-line">
                <span style={{ fontSize: '0.8rem' }}>••••</span>
                <ArrowRight size={18} />
              </div>
            </div>

            <div className="ticket-station-block" style={{ textAlign: 'right' }}>
              <span className="ticket-label">TO / गंतव्य</span>
              <div className="ticket-station-name">
                Wispr Flow India
                <span className="ticket-station-code">[WF]</span>
              </div>
            </div>
          </div>

          {/* Perforation Divider with Ticket Punchouts */}
          <div className="ticket-perforation-tear">
            <div className="ticket-dashed-line"></div>
          </div>

          {/* Ticket Information Matrix */}
          <div className="ticket-matrix">
            <div>
              <span className="ticket-label">PASSENGER / नाम</span>
              <div className="ticket-matrix-val" style={{ color: 'var(--color-forest)' }}>
                Arnav Kumar
              </div>
            </div>

            <div>
              <span className="ticket-label">CLASS / श्रेणी</span>
              <div className="ticket-matrix-val" style={{ color: 'var(--color-coral)', fontSize: '0.82rem', lineHeight: '1.3' }}>
                Next Stop Wispr Flow India
              </div>
            </div>

            <div>
              <span className="ticket-label">POSITION / पद</span>
              <div className="ticket-matrix-val" style={{ color: 'var(--color-forest-deep)' }}>
                Software Developer
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Stub Footer with Barcode & Seal */}
        <div className="ticket-stub-footer">
          <div className="railway-barcode" aria-hidden="true" title="Ticket Barcode">
            <span style={{ width: '2px' }}></span>
            <span style={{ width: '4px' }}></span>
            <span style={{ width: '1px' }}></span>
            <span style={{ width: '3px' }}></span>
            <span style={{ width: '1px' }}></span>
            <span style={{ width: '5px' }}></span>
            <span style={{ width: '2px' }}></span>
            <span style={{ width: '4px' }}></span>
            <span style={{ width: '1px' }}></span>
            <span style={{ width: '6px' }}></span>
            <span style={{ width: '2px' }}></span>
            <span style={{ width: '3px' }}></span>
            <span style={{ width: '1px' }}></span>
            <span style={{ width: '4px' }}></span>
            <span style={{ width: '2px' }}></span>
            <span style={{ width: '5px' }}></span>
            <span style={{ width: '1px' }}></span>
            <span style={{ width: '3px' }}></span>
          </div>

          <div className="ticket-confirmation-seal">
            <CheckCircle2 size={13} />
            <span>YOUR JOURNEY PASS</span>
          </div>
        </div>
      </article>

      {/* Tagline Below Ticket */}
      <p className="ticket-tagline">
        "A developer's journey, with a few unexpected stops."
      </p>

      {/* Journey Start Button */}
      <button
        onClick={handleStartJourney}
        className={`journey-cta-btn ${isPlaying ? 'playing' : ''}`}
        aria-label="Journey Shuru Karein →"
      >
        <Volume2 size={20} />
        <span>Journey Shuru Karein →</span>
        {isPlaying && (
          <div className="waveform-bars-container" style={{ marginLeft: '6px' }}>
            <span className="waveform-bar active"></span>
            <span className="waveform-bar active"></span>
            <span className="waveform-bar active"></span>
            <span className="waveform-bar active"></span>
          </div>
        )}
      </button>

      {/* Departure Board-Style Captions & Audio Player Visualizer */}
      {journeyStarted && (
        <section
          className="announcement-departure-board"
          aria-live="polite"
          aria-label="Station Announcement Captions"
        >
          {/* Board Header */}
          <div className="announcement-board-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="signal-dot green"></span>
              <span>LIVE ANNOUNCEMENT • PLATFORM 1</span>
            </div>

            {/* Waveform Visualizer */}
            <div className="waveform-bars-container" title="Audio Waveform">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className={`waveform-bar ${isPlaying ? 'active' : ''}`}
                  style={{
                    backgroundColor: isPlaying ? 'var(--board-led-amber)' : 'rgba(255, 169, 41, 0.35)'
                  }}
                ></span>
              ))}
            </div>
          </div>

          {/* Board Body with Captions */}
          <div className="announcement-board-body">
            <p className="announcement-caption-text" style={{ whiteSpace: 'pre-line', lineHeight: '1.75' }}>
              {announcementText}
            </p>

            {/* Bottom Actions & Status */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                paddingTop: '8px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem'
              }}
            >
              <div style={{ color: 'var(--board-led-amber)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="signal-dot green" style={{ width: '6px', height: '6px' }}></span>
                <span>{isPlaying ? 'AUDIO BROADCAST IN PROGRESS' : 'ANNOUNCEMENT COMPLETE'}</span>
              </div>

              <button
                onClick={handleSkipToRoute}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>Continue to Route</span>
                <ChevronDown size={14} />
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}


