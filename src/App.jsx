import React from 'react';
import Header from './components/Header';
import RailwayTicker from './components/RailwayTicker';
import LandingTicket from './components/LandingTicket';
import VerticalRoute from './components/VerticalRoute';
import TicketConfirmed from './components/TicketConfirmed';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-shell">
      {/* Top Header */}
      <Header />

      {/* Railway Departure Ticker Strip */}
      <RailwayTicker />

      {/* Main Journey Content */}
      <main className="site-container main-journey-content">
        {/* Landing Section: Large Centered Indian Railway Paper Ticket */}
        <LandingTicket />

        {/* Vertical Railway Route Journey */}
        <VerticalRoute />

        {/* Final Station / Ticket Confirmed Section */}
        <TicketConfirmed />
      </main>

      {/* Terminal Footer */}
      <Footer />
    </div>
  );
}

