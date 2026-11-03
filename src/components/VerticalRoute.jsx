import React, { useState, useEffect, useRef } from 'react';
import {
  Train,
  AlertTriangle,
  Lightbulb,
  Compass,
  ChevronDown,
  ChevronUp,
  Github,
  ExternalLink,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function VerticalRoute() {
  const containerRef = useRef(null);
  const [trainTop, setTrainTop] = useState(0);
  const [activeStationIndex, setActiveStationIndex] = useState(0);
  const [expandedDetails, setExpandedDetails] = useState({});

  const toggleDetails = (key) => {
    setExpandedDetails((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Track scroll position to advance the train down the vertical line
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate where viewport center is relative to container
      const offsetFromTop = viewportHeight * 0.45 - rect.top;
      const progress = Math.max(0, Math.min(1, offsetFromTop / containerHeight));
      
      const newTrainTop = progress * (containerHeight - 32);
      setTrainTop(newTrainTop);

      // 9 stations total
      const stationCount = 9;
      const estimatedIndex = Math.min(
        stationCount - 1,
        Math.floor(progress * stationCount)
      );
      setActiveStationIndex(estimatedIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="route-section" className="route-section-wrapper" aria-label="Journey Route">
      {/* Route Section Header */}
      <div className="route-section-header">
        <div className="station-board" style={{ alignSelf: 'flex-start', marginBottom: '4px' }}>
          <span className="station-board-name">MAIN LINE ROUTE</span>
          <span className="station-board-code">TRACK #01</span>
        </div>
        <h2 className="route-headline">
          <span>From Rourkela to Wispr Flow</span>
        </h2>
        <p className="route-subline">
          MILESTONES, LESSONS & REAL-WORLD DELAYS ALONG THE TRACK
        </p>
      </div>

      {/* Railway Track Container */}
      <div ref={containerRef} className="railway-route-container">
        {/* The Vertical Track with Crossties */}
        <div className="railway-vertical-track" aria-hidden="true">
          {/* Moving Train Engine Marker */}
          <div
            className="moving-train-marker"
            style={{ top: `${trainTop}px` }}
            title="Arnav Express Current Position"
          >
            <Train size={16} />
          </div>
        </div>

        {/* Stations List */}
        <div className="route-stations-list">
          {/* 1. ROURKELA: THE BEGINNING */}
          <div className="station-node-item">
            <div
              className={`station-track-node ${
                activeStationIndex === 0
                  ? 'active-stop'
                  : activeStationIndex > 0
                  ? 'completed-stop'
                  : ''
              }`}
            />
            <div className="station-card">
              <div className="station-header-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="station-name-title">ROURKELA</div>
                  <span
                    className="badge-mono"
                    style={{
                      backgroundColor: 'rgba(31, 77, 71, 0.08)',
                      color: 'var(--color-forest)',
                      border: '1px solid var(--color-forest-border)',
                      fontSize: '0.68rem'
                    }}
                  >
                    THE BEGINNING
                  </span>
                </div>
              </div>

              <div className="station-action-text">
                I completed my schooling in Rourkela. Computer science was not my subject in class 12 and I started learning to code only after joining college.
              </div>

              {/* First Realisation Box */}
              <div className="station-realisation-box">
                <div className="realisation-badge-label">
                  <Compass size={13} />
                  <span>First Realisation</span>
                </div>
                <div>
                  My journey into technology started later than many others but it had to start somewhere.
                </div>
              </div>
            </div>
          </div>

          {/* 2. NEWTON SCHOOL OF TECHNOLOGY, PUNE (2024 TO PRESENT) */}
          <div className="station-node-item">
            <div
              className={`station-track-node ${
                activeStationIndex === 1
                  ? 'active-stop'
                  : activeStationIndex > 1
                  ? 'completed-stop'
                  : ''
              }`}
            />
            <div className="station-card">
              <div className="station-header-row">
                <div className="station-name-title">NEWTON SCHOOL OF TECHNOLOGY, PUNE</div>
                <span className="station-date-badge">2024 to present</span>
              </div>

              <div className="station-action-text">
                Started my B.Tech in AI & ML and began learning how to build web applications from scratch.
              </div>

              <div className="station-delay-box">
                <div className="delay-badge-label">
                  <AlertTriangle size={13} />
                  <span>Delay Reason</span>
                </div>
                <div>
                  My early academic scores were low. I struggled to explain what I knew, while many people around me seemed to be moving faster.
                </div>
              </div>

              <div className="station-learned-box">
                <div className="learned-badge-label">
                  <Lightbulb size={13} />
                  <span>What I Learned</span>
                </div>
                <div>
                  Progress didn't happen overnight. Consistent practice helped me improve gradually. I learned that patience and consistency matter more than trying to catch up with everyone else.
                </div>
              </div>
            </div>
          </div>

          {/* 3. TOPSQILL (MARCH TO JUNE 2025) */}
          <div className="station-node-item">
            <div
              className={`station-track-node ${
                activeStationIndex === 2
                  ? 'active-stop'
                  : activeStationIndex > 2
                  ? 'completed-stop'
                  : ''
              }`}
            />
            <div className="station-card">
              <div className="station-header-row">
                <div>
                  <div className="station-name-title">TOPSQILL</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    Software Developer Intern, remote
                  </div>
                </div>
                <span className="station-date-badge">March to June 2025</span>
              </div>

              <div className="station-action-text">
                Worked on web application features using JavaScript, React and Node.js. Improved responsive layouts, worked on performance improvements and refactored existing code.
              </div>
            </div>
          </div>

          {/* 4. LINKUP.AI (COLLEGE TEAM PROJECT) */}
          <div className="station-node-item">
            <div
              className={`station-track-node ${
                activeStationIndex === 3
                  ? 'active-stop'
                  : activeStationIndex > 3
                  ? 'completed-stop'
                  : ''
              }`}
            />
            <div className="station-card">
              <div className="station-header-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="station-name-title">LINKUP.AI</div>
                  <span
                    className="badge-mono"
                    style={{
                      backgroundColor: 'rgba(245, 184, 0, 0.15)',
                      color: '#7A5B00',
                      border: '1px solid rgba(245, 184, 0, 0.4)'
                    }}
                  >
                    <Award size={12} />
                    1ST POSITION
                  </span>
                </div>
              </div>

              <div className="station-action-text">
                Worked in a team of 7 to simulate a real-world product development environment. We divided responsibilities, built a product together and presented it at our college event, where our team secured 1st place.
              </div>

              <div style={{ marginTop: '8px' }}>
                <span
                  className="badge-mono"
                  style={{
                    backgroundColor: 'var(--color-forest-surface)',
                    color: 'var(--color-forest-deep)',
                    border: '1px solid var(--color-forest-border)',
                    fontSize: '0.74rem'
                  }}
                >
                  Role: Software Developer
                </span>
              </div>
            </div>
          </div>

          {/* 5. SHOPLEX (NOVEMBER 2025) */}
          <div className="station-node-item">
            <div
              className={`station-track-node ${
                activeStationIndex === 4
                  ? 'active-stop'
                  : activeStationIndex > 4
                  ? 'completed-stop'
                  : ''
              }`}
            />
            <div className="station-card">
              <div className="station-header-row">
                <div className="station-name-title">SHOPLEX</div>
                <span className="station-date-badge">November 2025</span>
              </div>

              <div className="station-action-text">
                Full-stack e-commerce platform using React, Node, Express, MongoDB, Prisma and JWT.
              </div>

              {/* Three Real Delay Stories */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '14px' }}>
                {/* Delay Story 1 */}
                <div className="station-delay-box">
                  <div className="delay-badge-label">
                    <AlertTriangle size={13} />
                    <span>Deleted, but still in the cart</span>
                  </div>
                  <div>
                    Deleted products remained in customer carts and the cart page crashed.
                  </div>
                  <div className="station-learned-box" style={{ margin: '8px 0 0 0' }}>
                    <div className="learned-badge-label">
                      <Lightbulb size={13} />
                      <span>Learned</span>
                    </div>
                    <div>Never assume data will always exist.</div>
                  </div>

                  <div className="tech-details-container">
                    <button
                      onClick={() => toggleDetails('shoplex-1')}
                      className="tech-details-toggle"
                      aria-expanded={!!expandedDetails['shoplex-1']}
                    >
                      <span>Technical Detail</span>
                      {expandedDetails['shoplex-1'] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    {expandedDetails['shoplex-1'] && (
                      <div className="tech-details-content">
                        Backend cleanup and frontend safety checks.
                      </div>
                    )}
                  </div>
                </div>

                {/* Delay Story 2 */}
                <div className="station-delay-box">
                  <div className="delay-badge-label">
                    <AlertTriangle size={13} />
                    <span>The page that disappeared on refresh</span>
                  </div>
                  <div>
                    Refreshing a deployed page caused a 404.
                  </div>
                  <div className="station-learned-box" style={{ margin: '8px 0 0 0' }}>
                    <div className="learned-badge-label">
                      <Lightbulb size={13} />
                      <span>Learned</span>
                    </div>
                    <div>Production behaves differently from local development.</div>
                  </div>

                  <div className="tech-details-container">
                    <button
                      onClick={() => toggleDetails('shoplex-2')}
                      className="tech-details-toggle"
                      aria-expanded={!!expandedDetails['shoplex-2']}
                    >
                      <span>Technical Detail</span>
                      {expandedDetails['shoplex-2'] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    {expandedDetails['shoplex-2'] && (
                      <div className="tech-details-content">
                        Configure SPA routing to serve index.html.
                      </div>
                    )}
                  </div>
                </div>

                {/* Delay Story 3 */}
                <div className="station-delay-box">
                  <div className="delay-badge-label">
                    <AlertTriangle size={13} />
                    <span>Building twice what I needed</span>
                  </div>
                  <div>
                    I built the admin panel separately and later merged it into the main app because of deployment and CORS complexity.
                  </div>
                  <div className="station-learned-box" style={{ margin: '8px 0 0 0' }}>
                    <div className="learned-badge-label">
                      <Lightbulb size={13} />
                      <span>Learned</span>
                    </div>
                    <div>Start simple and avoid over-engineering.</div>
                  </div>
                </div>
              </div>

              {/* Shoplex Links */}
              <div className="station-links-row">
                <a
                  href="https://github.com/arnav-54/Shoplex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="station-link-btn"
                >
                  <Github size={13} />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href="https://shoplex-frontend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="station-link-btn live-demo"
                >
                  <ExternalLink size={13} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* 6. ECHOCHAT (JANUARY 2026) */}
          <div className="station-node-item">
            <div
              className={`station-track-node ${
                activeStationIndex === 5
                  ? 'active-stop'
                  : activeStationIndex > 5
                  ? 'completed-stop'
                  : ''
              }`}
            />
            <div className="station-card">
              <div className="station-header-row">
                <div className="station-name-title">ECHOCHAT</div>
                <span className="station-date-badge">January 2026</span>
              </div>

              <div className="station-action-text">
                Built a real-time chat application with React and Node.js, using Socket.IO for live messaging and JWT for authentication.
              </div>

              <div className="station-links-row">
                <a
                  href="https://github.com/arnav-54/chat-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="station-link-btn"
                >
                  <Github size={13} />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href="https://chat-app-1-0h9p.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="station-link-btn live-demo"
                >
                  <ExternalLink size={13} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* 7. STUDENT OS (MAY 2026) - MAJOR FULL-STACK PROJECT */}
          <div className="station-node-item">
            <div
              className={`station-track-node ${
                activeStationIndex === 6
                  ? 'active-stop'
                  : activeStationIndex > 6
                  ? 'completed-stop'
                  : ''
              }`}
            />
            <div className="station-card featured-card">
              <div className="station-header-row">
                <div>
                  <div className="station-name-title" style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.4rem)' }}>
                    STUDENT OS
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--color-coral)',
                      fontWeight: 700,
                      marginTop: '2px'
                    }}
                  >
                    MAJOR FULL-STACK PROJECT
                  </div>
                </div>
                <span className="station-date-badge" style={{ backgroundColor: 'var(--color-forest)', color: '#FFFFFF' }}>
                  May 2026
                </span>
              </div>

              <div className="station-action-text" style={{ fontSize: '0.98rem' }}>
                An academic management platform designed to bring essential student tools into one place. Built with React, Node.js, Express, Prisma and MongoDB, with real-time WebSocket features and Gemini-powered tools for resumes, cover letters and mock interviews.
              </div>

              <div className="station-delay-box">
                <div className="delay-badge-label">
                  <AlertTriangle size={13} />
                  <span>THE SECOND USER FOUND THE BUG</span>
                </div>
                <div>
                  The first user could save their profile, but the second user crashed the server because an empty unique field was being treated as a duplicate.
                </div>
              </div>

              <div className="station-learned-box">
                <div className="learned-badge-label">
                  <Lightbulb size={13} />
                  <span>Learned</span>
                </div>
                <div>
                  Don't just test with one user; the second user finds the bug.
                </div>
              </div>

              {/* Technical Detail Expandable Toggle */}
              <div className="tech-details-container">
                <button
                  onClick={() => toggleDetails('studentos-detail')}
                  className="tech-details-toggle"
                  aria-expanded={!!expandedDetails['studentos-detail']}
                  style={{
                    backgroundColor: 'rgba(31, 77, 71, 0.05)',
                    borderColor: 'var(--color-forest-border)'
                  }}
                >
                  <span style={{ fontWeight: 700, color: 'var(--color-forest-deep)' }}>
                    Technical Detail: Database Conflict
                  </span>
                  {expandedDetails['studentos-detail'] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {expandedDetails['studentos-detail'] && (
                  <div className="tech-details-content">
                    A unique publicSlug field in MongoDB conflicted on multiple null values. Fixed with a safe unique fallback slug.
                  </div>
                )}
              </div>

              {/* Links */}
              <div className="station-links-row">
                <a
                  href="https://github.com/arnav-54/StudentOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="station-link-btn"
                >
                  <Github size={13} />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href="https://student-os-bice.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="station-link-btn live-demo"
                >
                  <ExternalLink size={13} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* 8. MYSOCIALLY (MARCH 2026 TO PRESENT) - CURRENT INTERNSHIP */}
          <div className="station-node-item">
            <div
              className={`station-track-node ${
                activeStationIndex === 7
                  ? 'active-stop'
                  : activeStationIndex > 7
                  ? 'completed-stop'
                  : ''
              }`}
            />
            <div className="station-card">
              <div className="station-header-row">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <div className="station-name-title">MYSOCIALLY</div>
                    <span className="badge-current-internship">
                      <CheckCircle2 size={11} />
                      CURRENT INTERNSHIP
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    Product Development Intern, remote
                  </div>
                </div>
                <span className="station-date-badge">March 2026 to present</span>
              </div>

              <div className="station-action-text">
                Working as a Product Development Intern, primarily focused on improving product UI and making features easier for users to understand. I also contribute to bug fixes and backend improvements.
              </div>
            </div>
          </div>

          {/* 9. FINAL STATION — WISPR FLOW INDIA */}
          <div className="station-node-item">
            <div className="station-track-node final-stop" />
            <div className="station-card final-station-card">
              <div className="station-header-row">
                <div>
                  <div className="station-name-title">
                    WISPR FLOW INDIA
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: 'var(--color-station-yellow)',
                      fontWeight: 700,
                      marginTop: '2px',
                      letterSpacing: '0.05em'
                    }}
                  >
                    FINAL DESTINATION
                  </div>
                </div>

                <div className="station-board" style={{ padding: '3px 10px', backgroundColor: 'var(--color-station-yellow)' }}>
                  <span className="station-board-name" style={{ fontSize: '0.76rem' }}>NEXT STOP</span>
                </div>
              </div>

              <div className="station-action-text" style={{ fontSize: '0.98rem', lineHeight: 1.6 }}>
                Next stop: Growth Lab. Preparing the ground for voice-first input across India.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
