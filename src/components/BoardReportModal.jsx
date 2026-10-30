import React from 'react';

export default function BoardReportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop show" onClick={onClose}>
      <div className="modal-dialog large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="flex-align">
            <span className="modal-icon">📄</span>
            <div>
              <h3 className="modal-title">Board of Directors Executive Summary (Q3 2026)</h3>
              <p className="modal-subtitle">Feature 13: One-click report generated with locked, audited numbers</p>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="board-deck-preview">
            <div className="deck-slide">
              <div className="slide-badge">SLIDE 1: P&amp;L PERFORMANCE</div>
              <h4 className="slide-title">Executive Sales Financials</h4>
              <div className="slide-kpis">
                <div className="s-kpi"><span className="k-num">₹4.82 Cr</span><span className="k-lbl">Closed Revenue (+14.2% YoY)</span></div>
                <div className="s-kpi"><span className="k-num">61.4%</span><span className="k-lbl">Contribution Margin (Budget: 58%)</span></div>
                <div className="s-kpi"><span className="k-num">₹11.8 Lakhs</span><span className="k-lbl">Cost per Deal Won (-8.4%)</span></div>
              </div>
              <p className="slide-text">
                &quot;Sales efficiency expanded 340 bps in Q3, driven by a 28% increase in Mid-Market velocity and disciplined discount governance capped at 8%.&quot;
              </p>
            </div>

            <div className="deck-slide mt-3">
              <div className="slide-badge">SLIDE 2: Q3/Q4 TARGET OUTLOOK</div>
              <h4 className="slide-title">Pipeline Predictability &amp; Forecast</h4>
              <div className="slide-kpis">
                <div className="s-kpi"><span className="k-num">74%</span><span className="k-lbl">Monte Carlo Probability to Hit Target</span></div>
                <div className="s-kpi"><span className="k-num">₹5.18 Cr</span><span className="k-lbl">Expected Forecast (P50)</span></div>
                <div className="s-kpi"><span className="k-num">84/100</span><span className="k-lbl">M&amp;A Predictability Score</span></div>
              </div>
              <p className="slide-text">
                &quot;Expected bookings reflect a safe landing of ₹5.18 Cr against the ₹5.10 Cr target. Unblocking 9 stalled enterprise deals will protect the P90 baseline.&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button
            className="btn btn-primary"
            onClick={() => alert('Downloading Board Deck PPTX (ACubeLI_Q3_2026_Report.pptx)...')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Download PPTX Deck</span>
          </button>
        </div>
      </div>
    </div>
  );
}
