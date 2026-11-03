import React from 'react';
import { FileText, Linkedin, Github, Mail, ExternalLink, CheckCircle } from 'lucide-react';

export default function TicketConfirmed() {
  const links = [
    {
      title: 'Resume',
      subtitle: 'View Drive PDF',
      icon: <FileText size={16} />,
      url: 'https://drive.google.com/file/d/1B4w8SCwrcemyLbfyzs5T8QoWPm38w6v7/view?usp=sharing',
      isPlaceholder: false
    },
    {
      title: 'LinkedIn',
      subtitle: 'arnav-kumar',
      icon: <Linkedin size={16} />,
      url: 'https://www.linkedin.com/in/arnav-kumar-ba550031b/',
      isPlaceholder: false
    },
    {
      title: 'GitHub',
      subtitle: 'arnav-54',
      icon: <Github size={16} />,
      url: 'https://github.com/arnav-54',
      isPlaceholder: false
    },
    {
      title: 'Email',
      subtitle: 'arnavaru62@gmail.com',
      icon: <Mail size={16} />,
      url: 'mailto:arnavaru62@gmail.com',
      isPlaceholder: false
    }
  ];

  return (
    <section className="confirmed-section-wrapper" aria-label="Journey Completed Final Section">
      <div className="confirmed-card">
        {/* Section Header Tag */}
        <div className="confirmed-header-tag">
          <CheckCircle size={14} />
          <span>FINAL DESTINATION</span>
        </div>

        {/* Section Title */}
        <h2 className="confirmed-title">Journey Completed</h2>

        {/* Designation / Candidate Tagline */}
        <div className="confirmed-subtitle">
          Arnav Kumar, Growth Team Candidate
        </div>

        {/* Large Rubber Stamp Reading "READY FOR THE NEXT STOP" */}
        <div className="rubber-stamp-container">
          <div className="rubber-stamp" title="Official Boarding Stamp">
            <span className="stamp-main-text">READY FOR THE NEXT STOP</span>
            <span className="stamp-sub-text">WISPR FLOW • GROWTH LAB</span>
          </div>
        </div>

        {/* Four Links Grid */}
        <div className="confirmed-links-grid">
          {links.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target={item.isPlaceholder ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onClick={(e) => {
                if (item.url === '#') e.preventDefault();
              }}
              className={`confirmed-link-pill ${item.isPlaceholder ? 'placeholder-link' : ''}`}
              title={`${item.title}: ${item.subtitle}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--color-forest)' }}>{item.icon}</span>
                <span style={{ fontWeight: 700 }}>{item.title}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem' }}>
                <span style={{ opacity: item.isPlaceholder ? 0.7 : 0.9 }}>
                  {item.subtitle}
                </span>
                {!item.isPlaceholder && <ExternalLink size={12} style={{ opacity: 0.6 }} />}
              </div>
            </a>
          ))}
        </div>

        {/* Final Indian Railways Blessing */}
        <div className="yatra-blessing">
          आपकी यात्रा मंगलमय हो.
        </div>
      </div>
    </section>
  );
}


