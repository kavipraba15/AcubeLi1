import React, { useState } from 'react';

const battlecards = {
  crm_x: {
    name: 'Freshsales',
    positioning: 'Mid-Market SaaS CRM with Freddy AI automation',
    pricing: '₹3,200 - ₹5,800 / user / month (Aggressive discounting in APAC)',
    strengths: 'Fast onboarding, clean UI, integrated phone dialer.',
    weaknesses: 'Limited enterprise role hierarchy, weak custom forecasting models.',
    talkTrack: 'Emphasize ACubeLI\'s native dbt verified data model and board-ready reporting which Freshsales native reports cannot support.',
    winRate: '68% (Won 19 of 28 deals head-to-head)'
  },
  crm_y: {
    name: 'HubSpot Sales Hub',
    positioning: 'Inbound-led SMB to Mid-Market standard',
    pricing: '₹7,500 - ₹12,500 / user / month + steep onboarding fee',
    strengths: 'Marketing-sales alignment, massive app ecosystem.',
    weaknesses: 'Expensive add-ons, inflexible cost-per-deal attribution.',
    talkTrack: 'Showcase our zero-friction rep ramp curves and executive variance explainer. HubSpot lacks native P&L contribution margin tracking.',
    winRate: '61% (Won 14 of 23 deals head-to-head)'
  },
  crm_z: {
    name: 'Salesforce Sales Cloud',
    positioning: 'Global enterprise incumbent standard',
    pricing: '₹13,800 - ₹27,500 / user / month + SI consulting cost',
    strengths: 'Infinite customization, recognized by enterprise procurement.',
    weaknesses: 'Slow implementation (6-9 mo), complex maintenance, low rep adoption.',
    talkTrack: 'Lead with speed to value: "ACubeLI deploys in 4 weeks over your existing Zoho CRM with zero disruption."',
    winRate: '54% (Won 7 of 13 enterprise deals)'
  }
};

export default function StrategicModule({ onOpenBoardModal }) {
  const [activeComp, setActiveComp] = useState('crm_x');
  const [acv, setAcv] = useState(35); // in Lakhs (₹35 Lakhs / yr)
  const [penetration, setPenetration] = useState(6.5); // percentage

  const accountsUniverse = 12500;
  // TAM in Crores: (12,500 accounts * (acv * 1,00,000)) / 1,00,00,000
  const tamCr = ((accountsUniverse * (acv * 100000)) / 10000000).toFixed(0);
  const samCr = (tamCr * 0.35).toFixed(1);
  const somCr = ((samCr * penetration) / 100).toFixed(1);

  const c = battlecards[activeComp];

  return (
    <div className="strategic-module-wrap">
      {/* Module 4 Header Banner */}
      <div className="flex-align" style={{ justifyContent: 'space-between', marginBottom: '20px' }}>
        <div className="flex-align gap-2">
          <span style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            color: '#A78BFA',
            background: 'rgba(167, 139, 250, 0.12)',
            border: '1px solid rgba(167, 139, 250, 0.3)',
            padding: '5px 12px',
            borderRadius: '6px',
            letterSpacing: '0.04em'
          }}>
            Module 4: Strategic Intelligence &amp; Scenario AI
          </span>
          <span className="badge ai-pill">Dynamic TAM Simulator · Battlecard Engine</span>
        </div>
      </div>

      {/* Feature 10: TAM Adjuster */}
      <div className="card glass-panel" style={{ padding: '24px 26px', marginBottom: '22px' }}>
        <div className="card-header">
          <div>
            <h3 className="card-title">TAM Adjuster (Feature 10)</h3>
            <p className="card-subtitle">Account Universe &times; ACV formula with dynamic market penetration sliders</p>
          </div>
          <span className="badge verified-pill">TAM: ₹{tamCr} Cr</span>
        </div>

        <div className="tam-controls-grid" style={{ marginTop: '18px' }}>
          {/* Slider 1: ACV */}
          <div className="tam-slider-box">
            <div className="slider-header">
              <span className="slider-label">Average Contract Value (ACV):</span>
              <span className="slider-value">₹{acv} Lakhs / yr</span>
            </div>
            <input
              type="range"
              min="15"
              max="85"
              step="5"
              value={acv}
              onChange={(e) => setAcv(parseInt(e.target.value, 10))}
              className="custom-range"
            />
            <div className="slider-ticks">
              <span>₹15 L</span>
              <span>₹35 L (Target)</span>
              <span>₹55 L</span>
              <span>₹85 L (Enterprise)</span>
            </div>
          </div>

          {/* Slider 2: Market Penetration */}
          <div className="tam-slider-box">
            <div className="slider-header">
              <span className="slider-label">Target Market Penetration:</span>
              <span className="slider-value">{penetration}%</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="15.0"
              step="0.5"
              value={penetration}
              onChange={(e) => setPenetration(parseFloat(e.target.value))}
              className="custom-range"
            />
            <div className="slider-ticks">
              <span>1% (Niche)</span>
              <span>6.5% (Base)</span>
              <span>10%</span>
              <span>15% (Dominant)</span>
            </div>
          </div>
        </div>

        {/* Results Row: TAM, SAM, SOM */}
        <div className="tam-results-row" style={{ marginTop: '18px' }}>
          <div className="tam-stat-card">
            <span className="tam-stat-lbl">Total Addressable Market (TAM)</span>
            <span className="tam-stat-val">₹{tamCr} Cr</span>
            <span className="tam-stat-sub">12,500 qualified target enterprise accounts</span>
          </div>
          <div className="tam-stat-card highlight-cyan">
            <span className="tam-stat-lbl">Serviceable Addressable Market (SAM)</span>
            <span className="tam-stat-val">₹{samCr} Cr</span>
            <span className="tam-stat-sub">Mid-Market + Enterprise APAC/India (35% of TAM)</span>
          </div>
          <div className="tam-stat-card highlight-emerald">
            <span className="tam-stat-lbl">Serviceable Obtainable Market (SOM)</span>
            <span className="tam-stat-val">₹{somCr} Cr</span>
            <span className="tam-stat-sub">{penetration}% captured at ₹{acv} Lakhs ACV</span>
          </div>
        </div>
      </div>

      {/* Balanced 50/50 Grid: Feature 11 & Feature 12 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '22px', alignItems: 'stretch' }}>
        {/* Feature 11: Competitor Playbook Battlecards */}
        <div className="card glass-panel" style={{ padding: '24px 26px', display: 'flex', flexDirection: 'column' }}>
          <div className="card-header">
            <div>
              <h3 className="card-title">Competitor Battlecards (Feature 11)</h3>
              <p className="card-subtitle">LLM-analyzed public intelligence + internal CRM win/loss reasons</p>
            </div>
            <div className="competitor-tabs">
              <button className={`comp-tab ${activeComp === 'crm_x' ? 'active' : ''}`} onClick={() => setActiveComp('crm_x')}>Freshsales</button>
              <button className={`comp-tab ${activeComp === 'crm_y' ? 'active' : ''}`} onClick={() => setActiveComp('crm_y')}>HubSpot</button>
              <button className={`comp-tab ${activeComp === 'crm_z' ? 'active' : ''}`} onClick={() => setActiveComp('crm_z')}>Salesforce</button>
            </div>
          </div>

          <div className="battlecard-body" style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: '6px',
                fontSize: '0.78rem',
                color: '#10B981',
                fontWeight: 600
              }}>
                <span>🎯 Head-to-Head Win Rate:</span>
                <strong>{c.winRate}</strong>
              </div>

              <div>
                <strong style={{ color: '#FFFFFF', fontSize: '0.86rem', display: 'block', marginBottom: '4px' }}>Positioning &amp; Pricing:</strong>
                <p style={{ color: '#94A3B8', fontSize: '0.78rem', lineHeight: '1.5', margin: 0 }}>
                  <span style={{ color: '#E2E8F0', fontWeight: 600 }}>{c.positioning}</span> &middot; {c.pricing}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginTop: '4px' }}>
                <div style={{ background: 'rgba(244, 63, 94, 0.08)', border: '1px solid rgba(244, 63, 94, 0.22)', padding: '12px 14px', borderRadius: '8px' }}>
                  <strong style={{ color: '#F43F5E', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '4px' }}>
                    Their Weakness
                  </strong>
                  <p style={{ color: '#CBD5E1', fontSize: '0.74rem', lineHeight: '1.45', margin: 0 }}>{c.weaknesses}</p>
                </div>
                <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.22)', padding: '12px 14px', borderRadius: '8px' }}>
                  <strong style={{ color: '#10B981', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '4px' }}>
                    Our Winning Angle
                  </strong>
                  <p style={{ color: '#CBD5E1', fontSize: '0.74rem', lineHeight: '1.45', margin: 0 }}>{c.talkTrack}</p>
                </div>
              </div>
            </div>

            <div style={{
              padding: '10px 14px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '8px',
              fontSize: '0.72rem',
              color: '#94A3B8'
            }}>
              💡 <em>Playbook Tip:</em> In active competitor deals, attach deterministic SQL audit reports to demonstrate verifiable enterprise data integrity.
            </div>
          </div>
        </div>

        {/* Feature 12: M&A Readiness Scorecard */}
        <div className="card glass-panel" style={{ padding: '24px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="card-header">
              <div>
                <h3 className="card-title">M&amp;A / Due Diligence Readiness (Feature 12)</h3>
                <p className="card-subtitle">Readiness score for investment and acquirer scrutiny</p>
              </div>
              <div className="readiness-score-badge">
                <span className="r-score">84</span><span className="r-total">/100</span>
              </div>
            </div>

            <div className="mna-dimensions-list" style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="mna-item">
                <div className="mna-meta">
                  <span className="mna-title">Revenue Quality &amp; Recurring Share</span>
                  <span className="mna-val" style={{ color: '#10B981', fontWeight: 700 }}>92%</span>
                </div>
                <div className="mna-bar"><div className="mna-fill" style={{ width: '92%' }}></div></div>
                <span className="mna-note">88% of revenue is contracted ARR with &lt;12% top-3 customer concentration.</span>
              </div>

              <div className="mna-item">
                <div className="mna-meta">
                  <span className="mna-title">Pipeline Predictability &amp; Accuracy</span>
                  <span className="mna-val" style={{ color: '#38BDF8', fontWeight: 700 }}>81%</span>
                </div>
                <div className="mna-bar"><div className="mna-fill" style={{ width: '81%' }}></div></div>
                <span className="mna-note">Historic forecast variance within &plusmn;7% for past 4 quarters via Monte Carlo sim.</span>
              </div>

              <div className="mna-item">
                <div className="mna-meta">
                  <span className="mna-title">Sales Process &amp; Contract Completeness</span>
                  <span className="mna-val" style={{ color: '#F59E0B', fontWeight: 700 }}>76%</span>
                </div>
                <div className="mna-bar"><div className="mna-fill" style={{ width: '76%', background: '#F59E0B' }}></div></div>
                <span className="mna-note">Gap: 14 legacy contracts lack standardized indemnity clauses (Action item for Legal).</span>
              </div>

              <div className="mna-item">
                <div className="mna-meta">
                  <span className="mna-title">Team Stability &amp; Key-Person Risk</span>
                  <span className="mna-val" style={{ color: '#10B981', fontWeight: 700 }}>87%</span>
                </div>
                <div className="mna-bar"><div className="mna-fill" style={{ width: '87%' }}></div></div>
                <span className="mna-note">Healthy ramp curve balance; no single rep holds &gt;15% of annual quota.</span>
              </div>
            </div>
          </div>

          <div className="board-action-cta" style={{ marginTop: '20px' }}>
            <button
              className="btn btn-primary w-100"
              style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}
              onClick={onOpenBoardModal}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              <span>View Board of Directors Summary Report (Feature 13)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
