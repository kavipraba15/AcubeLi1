import React, { useState } from 'react';

const scoreComponents = [
  { name: 'Anonymous Pulse Sentiment', weight: '30%', score: 82, color: '#10B981' },
  { name: 'Workload & Hours Balance', weight: '20%', score: 74, color: '#38BDF8' },
  { name: 'Manager 1:1 Cadence', weight: '15%', score: 88, color: '#10B981' },
  { name: 'Attrition Stability (Inverted)', weight: '20%', score: 71, color: '#F59E0B' },
  { name: 'Quota Performance Trend', weight: '15%', score: 80, color: '#10B981' },
];

const riskBands = {
  high: {
    title: 'High Risk Band',
    count: '2 Reps',
    sub: '8% of team · ₹3.90 Cr pipeline at stake',
    badge: 'Immediate Action Required',
    badgeColor: '#F43F5E',
    reasons: [
      'Sharp 42% drop in CRM activity (calls, emails, logins) over past 3 weeks',
      'Quota attainment trending below benchmark for 2 consecutive quarters',
      'Manager 1:1 coaching cadence skipped (>30 days without logged check-in)'
    ],
    topDriver: 'Top SHAP Signal: Drop in CRM activity accounts for +14.2% of attrition risk.'
  },
  watch: {
    title: 'Watch List Band',
    count: '4 Reps',
    sub: '17% of team · ₹3.85 Cr pipeline at stake',
    badge: 'Moderate Monitoring',
    badgeColor: '#F59E0B',
    reasons: [
      'Quota attainment pace showing early drift from target benchmark',
      'Time since last compensation review or promotion exceeds 18 months',
      'Deal velocity in proposal stage drifted from 12 days to 24 days'
    ],
    topDriver: 'Top SHAP Signal: Workload hours compression accounts for +6.2% of risk.'
  },
  low: {
    title: 'Low Risk Band',
    count: '18 Reps',
    sub: '75% of team · ₹14.20 Cr baseline pipeline protected',
    badge: 'Stable Performance',
    badgeColor: '#10B981',
    reasons: [
      'Active weekly 1:1 manager coaching cadence consistently maintained',
      'Healthy deal velocity with consistent daily CRM record updates',
      'Quota attainment tracking at or above target tier'
    ],
    topDriver: 'Top Protective Factor: Tenured ramp curve and account equity provide -8.5% buffer.'
  }
};

export default function TeamHealthModule() {
  const [selectedBand, setSelectedBand] = useState('high');
  const active = riskBands[selectedBand];

  return (
    <div className="th-simple-container">
      {/* Module 2 Header Banner */}
      <div className="flex-align gap-2 mb-3" style={{ justifyContent: 'space-between', marginBottom: '18px' }}>
        <div className="flex-align gap-2">
          <span style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            color: '#10B981',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            padding: '4px 10px',
            borderRadius: '6px',
            letterSpacing: '0.04em'
          }}>
            Module 2: Team Health &amp; Attrition Early Warning
          </span>
          <span className="badge ml-pill">ML Model v2.4 (AUC 0.89) · DPDP Act 2023 Compliant</span>
        </div>
      </div>

      {/* Top Row: Feature 4 & Feature 5 */}
      <div className="th-simple-grid">
        {/* Feature 4: Org Health Score */}
        <div className="card glass-panel th-simple-card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Org Health Score (Feature 4)</h3>
              <p className="card-subtitle">Single score per team showing sustainability of performance (0 to 100)</p>
            </div>
            <span className="badge verified-pill">Optimal · Sustainable</span>
          </div>

          <div className="th-health-body">
            {/* Left: Clean Circle Score */}
            <div className="th-circle-display">
              <svg viewBox="0 0 160 160" className="th-circle-svg">
                <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
                <circle
                  cx="80"
                  cy="80"
                  r="68"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="12"
                  strokeDasharray="427"
                  strokeDashoffset="94"
                  strokeLinecap="round"
                  transform="rotate(-90 80 80)"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(16,185,129,0.5))' }}
                />
                <text x="80" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="36" fontWeight="800" fontFamily="IBM Plex Sans">78</text>
                <text x="80" y="98" textAnchor="middle" fill="#94A3B8" fontSize="12" fontWeight="600" fontFamily="IBM Plex Sans">/ 100</text>
              </svg>
              <div className="th-score-meta">
                <span className="th-trend-green">+3.2 pts vs Q2</span>
                <span className="th-sub-note">High Confidence (94% team response rate)</span>
              </div>
            </div>

            {/* Right: 5 Components from PDF Page 7 */}
            <div className="th-components-col">
              <span className="th-col-heading">Score Components (Weighted Formula)</span>
              {scoreComponents.map((item, idx) => (
                <div key={idx} className="th-factor-item">
                  <div className="th-factor-labels">
                    <span className="th-factor-name">{item.name}</span>
                    <span className="th-factor-weight">{item.weight}</span>
                  </div>
                  <div className="th-factor-bar-track">
                    <div className="th-factor-bar-fill" style={{ width: `${item.score}%`, background: item.color }}></div>
                  </div>
                  <span className="th-factor-val">{item.score}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature 5: Attrition Prediction */}
        <div className="card glass-panel th-simple-card">
          <div className="card-header">
            <div>
              <h3 className="card-title">90-Day Attrition Prediction (Feature 5)</h3>
              <p className="card-subtitle">Estimates probability a rep leaves within 90 days (Low / Watch / High bands)</p>
            </div>
            <span className="badge ml-pill">Model v2.4 (AUC 0.89)</span>
          </div>

          <div className="th-attrition-body">
            {/* 3 Risk Bands Selector */}
            <div className="th-bands-row">
              <button
                className={`th-band-card ${selectedBand === 'high' ? 'active-high' : ''}`}
                onClick={() => setSelectedBand('high')}
              >
                <span className="th-band-dot red"></span>
                <span className="th-band-title">High Risk</span>
                <span className="th-band-num red-text">2 Reps</span>
              </button>

              <button
                className={`th-band-card ${selectedBand === 'watch' ? 'active-watch' : ''}`}
                onClick={() => setSelectedBand('watch')}
              >
                <span className="th-band-dot amber"></span>
                <span className="th-band-title">Watch List</span>
                <span className="th-band-num amber-text">4 Reps</span>
              </button>

              <button
                className={`th-band-card ${selectedBand === 'low' ? 'active-low' : ''}`}
                onClick={() => setSelectedBand('low')}
              >
                <span className="th-band-dot green"></span>
                <span className="th-band-title">Low Risk</span>
                <span className="th-band-num green-text">18 Reps</span>
              </button>
            </div>

            {/* Selected Band Details */}
            <div className="th-reasons-card">
              <div className="th-reasons-header">
                <div>
                  <strong className="th-reasons-title">{active.title} ({active.count})</strong>
                  <p className="th-reasons-sub">{active.sub}</p>
                </div>
                <span className="th-status-chip" style={{ color: active.badgeColor, borderColor: active.badgeColor }}>
                  {active.badge}
                </span>
              </div>

              <ul className="th-bullets">
                {active.reasons.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>

              <div className="th-shap-callout">
                <span className="th-shap-icon">⚡</span>
                <span>{active.topDriver}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Feature 6: Wellbeing-to-Performance Index */}
      <div className="card glass-panel th-simple-card th-wellbeing-card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Wellbeing-to-Performance Index (Feature 6)</h3>
            <p className="card-subtitle">Lagged regression (+30d) showing how team wellbeing relates to revenue attainment</p>
          </div>
          <span className="badge formula-pill">r = +0.68 · Labeled as Association</span>
        </div>

        <div className="th-wellbeing-body">
          {/* Left: Clean Regression Chart */}
          <div className="th-chart-col">
            <svg viewBox="0 0 420 160" className="th-regression-chart">
              {/* Gridlines */}
              <line x1="40" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3" />
              <line x1="40" y1="65" x2="400" y2="65" stroke="rgba(255,255,255,0.06)" strokeDasharray="3" />
              <line x1="40" y1="110" x2="400" y2="110" stroke="rgba(255,255,255,0.06)" strokeDasharray="3" />

              {/* Y Axis Labels */}
              <text x="32" y="24" fill="#94A3B8" fontSize="10" textAnchor="end" fontFamily="IBM Plex Sans">120%</text>
              <text x="32" y="69" fill="#94A3B8" fontSize="10" textAnchor="end" fontFamily="IBM Plex Sans">100%</text>
              <text x="32" y="114" fill="#94A3B8" fontSize="10" textAnchor="end" fontFamily="IBM Plex Sans">80%</text>

              {/* X Axis Labels */}
              <text x="80" y="145" fill="#94A3B8" fontSize="10" textAnchor="middle" fontFamily="IBM Plex Sans">50 Pulse</text>
              <text x="180" y="145" fill="#94A3B8" fontSize="10" textAnchor="middle" fontFamily="IBM Plex Sans">65 Pulse</text>
              <text x="280" y="145" fill="#94A3B8" fontSize="10" textAnchor="middle" fontFamily="IBM Plex Sans">80 Pulse</text>
              <text x="380" y="145" fill="#94A3B8" fontSize="10" textAnchor="middle" fontFamily="IBM Plex Sans">95 Pulse</text>

              {/* Regression line */}
              <line x1="40" y1="125" x2="400" y2="25" stroke="#38BDF8" strokeWidth="2.5" />

              {/* Scatter Points */}
              <circle cx="70" cy="120" r="5" fill="#F43F5E" />
              <circle cx="110" cy="108" r="5" fill="#F59E0B" />
              <circle cx="150" cy="95" r="5" fill="#F59E0B" />
              <circle cx="190" cy="85" r="5" fill="#38BDF8" />
              <circle cx="230" cy="74" r="5" fill="#38BDF8" />
              <circle cx="270" cy="62" r="6" fill="#10B981" />
              <circle cx="310" cy="52" r="5" fill="#10B981" />
              <circle cx="350" cy="42" r="6" fill="#10B981" />
              <circle cx="390" cy="32" r="5" fill="#10B981" />

              {/* Threshold line */}
              <line x1="260" y1="15" x2="260" y2="128" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4" />
              <text x="265" y="18" fill="#10B981" fontSize="9" fontWeight="700" fontFamily="IBM Plex Sans">Benchmark &gt;75</text>
            </svg>
          </div>

          {/* Right: Key Insight & Privacy Shield */}
          <div className="th-details-col">
            <div className="th-insight-box">
              <span className="th-insight-badge">Statistical Takeaway (Page 8)</span>
              <p className="th-insight-text">
                Teams maintaining weekly pulse scores above <strong>75</strong> deliver an average <strong>+18.4% higher quota attainment</strong> 30 to 60 days later (r = +0.68, p &lt; 0.001).
              </p>
            </div>

            <div className="th-privacy-box">
              <div className="th-privacy-top">
                <span className="th-privacy-icon">🛡️</span>
                <strong>Section 6 Privacy &amp; Legal Safeguards</strong>
              </div>
              <p className="th-privacy-text">
                Anonymous weekly 30-second pulse. Aggregated at team level only (5+ respondents). Fully compliant with India DPDP Act 2023 &amp; GDPR. Scores are strictly prohibited from appraisal, pay, or firing decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
