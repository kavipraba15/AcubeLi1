import React, { useState } from 'react';

export default function TargetPredictorModule() {
  const [selectedLever, setSelectedLever] = useState(null);

  // Dynamic simulation adjustments based on selected lever
  const getSimStats = () => {
    if (selectedLever === 1) {
      return { prob: '82% Likely', p50: '₹5.42 Cr', lift: '+₹24.0 Lakhs from Proposal acceleration', note: 'Simulation adjusted: 4 stalled enterprise deals unblocked' };
    }
    if (selectedLever === 2) {
      return { prob: '79% Likely', p50: '₹5.34 Cr', lift: '+₹16.5 Lakhs from Mid-Market reallocation', note: 'Simulation adjusted: 2 SDRs reallocated to high-win accounts' };
    }
    if (selectedLever === 3) {
      return { prob: '77% Likely', p50: '₹5.25 Cr', lift: '+₹6.8 Lakhs margin protected via CFO gate', note: 'Simulation adjusted: Strict 8% discount ceiling enforced' };
    }
    return { prob: '74% Likely', p50: '₹5.18 Cr', lift: 'Baseline (No levers applied)', note: '74% of 10,000 iterations exceed quota target' };
  };

  const sim = getSimStats();

  return (
    <div className="target-module-wrap">
      {/* Module 3 Header Banner */}
      <div className="flex-align" style={{ justifyContent: 'space-between', marginBottom: '20px' }}>
        <div className="flex-align gap-2">
          <span style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            color: '#38BDF8',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            padding: '5px 12px',
            borderRadius: '6px',
            letterSpacing: '0.04em'
          }}>
            Module 3: Target Predictor &amp; Attainment Simulation
          </span>
          <span className="badge monte-pill">Monte Carlo 10,000 Iterations · Stage Probability ML</span>
        </div>
      </div>

      {/* Feature 7: AI Target-Setting */}
      <div className="card glass-panel" style={{ padding: '24px 26px', marginBottom: '22px' }}>
        <div className="card-header">
          <div>
            <h3 className="card-title">AI Target-Setting (Feature 7)</h3>
            <p className="card-subtitle">Triangulates Seasonality + Rep Capacity Model + Pipeline Stage Conversion</p>
          </div>
          <span className="badge verified-pill">Recommended Target: ₹5.10 Cr</span>
        </div>

        <div className="target-triangulation-grid" style={{ marginTop: '18px' }}>
          <div className="target-factor-card">
            <div className="factor-header">
              <span className="factor-icon">📈</span>
              <span className="factor-title">1. Historical Seasonality</span>
            </div>
            <div className="factor-val">+8.4% Q3 Lift</div>
            <p className="factor-desc">3-year rolling average shows Q3 budget surge across APAC enterprise &amp; SaaS verticals.</p>
          </div>

          <div className="target-factor-card">
            <div className="factor-header">
              <span className="factor-icon">👥</span>
              <span className="factor-title">2. Rep Capacity Model</span>
            </div>
            <div className="factor-val">24 Active Reps</div>
            <p className="factor-desc">20 fully ramped (₹22 Lakhs/quota) + 4 ramping accounts for ₹4.94 Cr baseline capacity.</p>
          </div>

          <div className="target-factor-card">
            <div className="factor-header">
              <span className="factor-icon">🎯</span>
              <span className="factor-title">3. Pipeline Coverage</span>
            </div>
            <div className="factor-val">3.2x Weighted</div>
            <p className="factor-desc">₹16.3 Cr total qualified pipeline converted at stage-specific historical win rates.</p>
          </div>
        </div>
      </div>

      {/* Balanced 50/50 Grid for Feature 8 and Feature 9 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '22px', alignItems: 'stretch' }}>
        {/* Feature 8: Monte Carlo On-Track Forecast */}
        <div className="card glass-panel" style={{ padding: '24px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="card-header">
              <div>
                <h3 className="card-title">On-Track Forecast (Feature 8)</h3>
                <p className="card-subtitle">10,000 Monte Carlo simulations on live pipeline stage probabilities</p>
              </div>
              <span className="probability-badge">{sim.prob}</span>
            </div>

            <div className="monte-carlo-chart-wrap" style={{ height: '175px', margin: '14px 0 18px' }}>
              <svg viewBox="0 0 400 160" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45"/>
                    <stop offset="100%" stopColor="#818CF8" stopOpacity="0.0"/>
                  </linearGradient>
                </defs>
                <path d="M 20 140 C 90 140, 140 135, 170 80 C 200 30, 210 30, 240 80 C 270 135, 320 140, 380 140 Z" fill="url(#bellGrad)"/>
                <path d="M 20 140 C 90 140, 140 135, 170 80 C 200 30, 210 30, 240 80 C 270 135, 320 140, 380 140" fill="none" stroke="#38BDF8" strokeWidth="2.5"/>

                <line x1={215} y1={20} x2={215} y2={140} stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4"/>
                <text x={215} y="15" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="IBM Plex Sans">Target: ₹5.10 Cr</text>
                <text x={215} y="155" fill="#E0E7FF" fontSize="10" textAnchor="middle" fontFamily="IBM Plex Sans">{sim.note}</text>

                <text x={60} y="155" fill="#A5B4FC" fontSize="9" fontFamily="IBM Plex Sans">P90 (₹4.85 Cr)</text>
                <text x={330} y="155" fill="#A5B4FC" fontSize="9" fontFamily="IBM Plex Sans">P10 (₹5.52 Cr)</text>
              </svg>
            </div>

            <div className="forecast-scenarios-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
              <div className="scenario-box safe">
                <span className="sc-label">Safe (P90)</span>
                <span className="sc-val">₹4.85 Cr</span>
                <span className="sc-sub">90% Confidence Floor</span>
              </div>
              <div className={`scenario-box likely ${selectedLever ? 'active' : ''}`}>
                <span className="sc-label">Likely (P50)</span>
                <span className="sc-val" style={{ color: selectedLever ? '#38BDF8' : '#FFFFFF' }}>{sim.p50}</span>
                <span className="sc-sub">{selectedLever ? sim.lift : 'Expected Outcome'}</span>
              </div>
              <div className="scenario-box stretch">
                <span className="sc-label">Stretch (P10)</span>
                <span className="sc-val">₹5.52 Cr</span>
                <span className="sc-sub">All Levers Green</span>
              </div>
            </div>
          </div>

          <div className="hygiene-banner" style={{ marginTop: 'auto', padding: '12px 14px', borderRadius: '8px' }}>
            <div className="hygiene-icon" style={{ fontSize: '18px', marginRight: '8px' }}>⚠️</div>
            <div className="hygiene-text" style={{ fontSize: '0.74rem', lineHeight: '1.5' }}>
              <strong>Deal Hygiene Filter Applied:</strong> 4 stale deals (₹21.0 Lakhs value) with no activity &gt;30 days were downweighted to 5% win probability to protect forecast integrity.
            </div>
          </div>
        </div>

        {/* Feature 9: What Must Change Recommendations */}
        <div className="card glass-panel" style={{ padding: '24px 26px', display: 'flex', flexDirection: 'column' }}>
          <div className="card-header">
            <div>
              <h3 className="card-title">&quot;What Must Change&quot; Actions (Feature 9)</h3>
              <p className="card-subtitle">Click a lever to simulate its impact on the Monte Carlo forecast</p>
            </div>
            <span className="badge verified-pill">3 Levers Identified</span>
          </div>

          <div className="action-recommendations-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '18px', flex: 1, justifyContent: 'space-between' }}>
            {/* Lever 1 */}
            <div
              className={`action-card highlight-cyan ${selectedLever === 1 ? 'selected-lever' : ''}`}
              style={{ cursor: 'pointer', padding: '14px 16px', margin: 0 }}
              onClick={() => setSelectedLever(selectedLever === 1 ? null : 1)}
            >
              <div className="action-top">
                <span className="action-rank">#1 Highest Impact</span>
                <span className="action-gain">+₹24,00,000 Expected</span>
              </div>
              <h4 className="action-title" style={{ fontSize: '0.86rem', margin: '4px 0 4px' }}>Accelerate 9 Deals Stalled in &quot;Proposal&quot; Stage &gt;20 Days</h4>
              <p className="action-desc" style={{ fontSize: '0.74rem', lineHeight: '1.45', margin: 0 }}>
                Average velocity in Proposal has drifted from 12 days to 24 days. Triggering executive sponsor calls closes 4 of these 9 deals.
              </p>
              <div className="action-tag">Focus: 9 Zoho CRM deals in CloudScale, FinTech Corp, LogisticsOne</div>
              {selectedLever === 1 && (
                <div style={{ marginTop: '8px', fontSize: '0.72rem', color: '#38BDF8', fontWeight: 600 }}>
                  ✓ Lever Applied: Forecast likelihood boosted to 82% (+₹24 Lakhs)
                </div>
              )}
            </div>

            {/* Lever 2 */}
            <div
              className={`action-card highlight-emerald ${selectedLever === 2 ? 'selected-lever' : ''}`}
              style={{ cursor: 'pointer', padding: '14px 16px', margin: 0 }}
              onClick={() => setSelectedLever(selectedLever === 2 ? null : 2)}
            >
              <div className="action-top">
                <span className="action-rank">#2 Quick Win</span>
                <span className="action-gain">+₹16,50,000 Expected</span>
              </div>
              <h4 className="action-title" style={{ fontSize: '0.86rem', margin: '4px 0 4px' }}>Close 4 Additional Mid-Market Deals</h4>
              <p className="action-desc" style={{ fontSize: '0.74rem', lineHeight: '1.45', margin: 0 }}>
                Mid-market win-rate is trending at 48% (vs 32% Enterprise). Reallocating 2 SDRs to Mid-Market will bridge the ₹20 Lakhs gap.
              </p>
              <div className="action-tag">Focus: High-velocity 28-day cycle accounts</div>
              {selectedLever === 2 && (
                <div style={{ marginTop: '8px', fontSize: '0.72rem', color: '#10B981', fontWeight: 600 }}>
                  ✓ Lever Applied: Forecast likelihood boosted to 79% (+₹16.5 Lakhs)
                </div>
              )}
            </div>

            {/* Lever 3 */}
            <div
              className={`action-card highlight-amber ${selectedLever === 3 ? 'selected-lever' : ''}`}
              style={{ cursor: 'pointer', padding: '14px 16px', margin: 0 }}
              onClick={() => setSelectedLever(selectedLever === 3 ? null : 3)}
            >
              <div className="action-top">
                <span className="action-rank">#3 Margin Protection</span>
                <span className="action-gain">+1.8% Net Margin (+₹6.8 Lakhs)</span>
              </div>
              <h4 className="action-title" style={{ fontSize: '0.86rem', margin: '4px 0 4px' }}>Enforce Discount Approval Gate at &gt;8%</h4>
              <p className="action-desc" style={{ fontSize: '0.74rem', lineHeight: '1.45', margin: 0 }}>
                3 rogue enterprise discounts in August reduced blended contribution margin by ₹6,80,000 without speeding up close dates.
              </p>
              <div className="action-tag">Focus: Enforce strict CFO approval for discount &gt;8%</div>
              {selectedLever === 3 && (
                <div style={{ marginTop: '8px', fontSize: '0.72rem', color: '#F59E0B', fontWeight: 600 }}>
                  ✓ Lever Applied: Forecast protected +1.8% Net Margin (+₹6.8 Lakhs)
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
