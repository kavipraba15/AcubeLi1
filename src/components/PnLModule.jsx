import React, { useState } from 'react';

// Monthly audited data for Feature 1 (Live P&L Dashboard)
const chartData = [
  { month: 'Apr', rev: 1.15, cost: 0.52, margin: '54.7%' },
  { month: 'May', rev: 1.28, cost: 0.54, margin: '57.8%' },
  { month: 'Jun', rev: 1.42, cost: 0.58, margin: '59.1%' },
  { month: 'Jul', rev: 1.55, cost: 0.61, margin: '60.6%' },
  { month: 'Aug', rev: 1.62, cost: 0.63, margin: '61.1%' },
  { month: 'Sep', rev: 1.82, cost: 0.66, margin: '63.7%' }
];

export default function PnLModule({ onInspectSql }) {
  const [activeTooltip, setActiveTooltip] = useState(null);

  // SVG Chart Geometry
  const w = 620;
  const h = 240;
  const pad = { top: 25, right: 30, bottom: 40, left: 50 };
  const maxVal = 2.0;
  const getX = (idx) => pad.left + (idx * ((w - pad.left - pad.right) / (chartData.length - 1)));
  const getY = (val) => pad.top + ((1 - (val / maxVal)) * (h - pad.top - pad.bottom));

  let revPath = `M ${getX(0)} ${getY(chartData[0].rev)}`;
  let costPath = `M ${getX(0)} ${getY(chartData[0].cost)}`;
  let areaPath = `M ${getX(0)} ${getY(chartData[0].rev)}`;

  chartData.forEach((d, i) => {
    if (i > 0) {
      revPath += ` L ${getX(i)} ${getY(d.rev)}`;
      costPath += ` L ${getX(i)} ${getY(d.cost)}`;
      areaPath += ` L ${getX(i)} ${getY(d.rev)}`;
    }
  });
  const revArea = areaPath + ` L ${getX(chartData.length - 1)} ${h - pad.bottom} L ${getX(0)} ${h - pad.bottom} Z`;

  return (
    <div>
      {/* Feature 1 Header Banner */}
      <div className="flex-align gap-2 mb-3" style={{ justifyContent: 'space-between', marginBottom: '18px' }}>
        <div className="flex-align gap-2">
          <span style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            color: '#38BDF8',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            padding: '4px 10px',
            borderRadius: '6px',
            letterSpacing: '0.04em'
          }}>
            Feature 1: Live P&amp;L Dashboard
          </span>
          <span className="badge verified-pill">Deterministic SQL · dbt Verified</span>
        </div>
      </div>

      {/* Top Core Metrics Row (Feature 1: Revenue, Cost of Sales, Contribution Margin) */}
      <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {/* Metric 1: Revenue */}
        <div className="metric-card glass-panel highlight-emerald">
          <div className="metric-header">
            <span className="metric-title">Gross Closed Revenue</span>
            <button className="inspect-btn" onClick={() => onInspectSql('revenue')}>
              <span>Inspect SQL</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </button>
          </div>
          <div className="metric-value-wrap">
            <span className="metric-val">₹4,82,00,000</span>
            <span className="trend-badge positive">+14.2% YoY</span>
          </div>
          <div className="metric-subtext">338 Closed-Won Deals · Zoho Synced</div>
        </div>

        {/* Metric 2: Cost of Sales */}
        <div className="metric-card glass-panel">
          <div className="metric-header">
            <span className="metric-title">Cost of Sales (Loaded)</span>
            <button className="inspect-btn" onClick={() => onInspectSql('cost_of_sales')}>
              <span>Inspect SQL</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </button>
          </div>
          <div className="metric-value-wrap">
            <span className="metric-val">₹1,86,00,000</span>
            <span className="trend-badge neutral">+2.1% Budget</span>
          </div>
          <div className="metric-subtext">Salaries + Comm + Tooling + Mktg</div>
        </div>

        {/* Metric 3: Contribution Margin */}
        <div className="metric-card glass-panel highlight-cyan">
          <div className="metric-header">
            <span className="metric-title">Contribution Margin</span>
            <button className="inspect-btn" onClick={() => onInspectSql('margin')}>
              <span>Inspect SQL</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </button>
          </div>
          <div className="metric-value-wrap">
            <span className="metric-val">61.4%</span>
            <span className="trend-badge positive">Target: 58.0%</span>
          </div>
          <div className="metric-subtext">Net ₹2.96 Cr Generated to Gross Profit</div>
          <div className="progress-bar-wrap">
            <div className="progress-fill" style={{ width: '61.4%' }}></div>
          </div>
        </div>
      </div>

      {/* Main Feature 1 Layout: Monthly Trend Chart (Left) + AI Variance Explainer (Right) */}
      <div className="grid-2col mt-4">
        {/* Live Revenue vs Cost of Sales Trend Chart */}
        <div className="card glass-panel p-4">
          <div className="card-header">
            <div>
              <h3 className="card-title">Live Revenue vs Cost of Sales</h3>
              <p className="card-subtitle">Monthly audited SQL data aggregated by dbt model (₹ in Cr)</p>
            </div>
            <div className="chart-legend">
              <span className="legend-item"><span className="dot emerald"></span> Revenue</span>
              <span className="legend-item"><span className="dot slate"></span> Cost of Sales</span>
            </div>
          </div>

          <div className="interactive-chart-container" style={{ position: 'relative' }}>
            <svg viewBox={`0 0 ${w} ${h}`} className="chart-svg">
              <defs>
                <linearGradient id="emeraldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45"/>
                  <stop offset="100%" stopColor="#818CF8" stopOpacity="0.0"/>
                </linearGradient>
              </defs>
              <line x1={pad.left} y1={getY(0.5)} x2={w - pad.right} y2={getY(0.5)} stroke="rgba(255,255,255,0.08)" strokeDasharray="3"/>
              <line x1={pad.left} y1={getY(1.0)} x2={w - pad.right} y2={getY(1.0)} stroke="rgba(255,255,255,0.08)" strokeDasharray="3"/>
              <line x1={pad.left} y1={getY(1.5)} x2={w - pad.right} y2={getY(1.5)} stroke="rgba(255,255,255,0.08)" strokeDasharray="3"/>

              <text x={pad.left - 10} y={getY(1.5) + 4} fill="#A5B4FC" fontSize="10" textAnchor="end" fontFamily="IBM Plex Sans">₹1.5 Cr</text>
              <text x={pad.left - 10} y={getY(1.0) + 4} fill="#A5B4FC" fontSize="10" textAnchor="end" fontFamily="IBM Plex Sans">₹1.0 Cr</text>
              <text x={pad.left - 10} y={getY(0.5) + 4} fill="#A5B4FC" fontSize="10" textAnchor="end" fontFamily="IBM Plex Sans">₹0.5 Cr</text>

              <path d={revArea} fill="url(#emeraldGrad)"/>
              <path d={costPath} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4"/>
              <path d={revPath} fill="none" stroke="#38BDF8" strokeWidth="3" style={{ filter: 'drop-shadow(0 2px 8px rgba(56,189,248,0.5))' }}/>

              {chartData.map((d, i) => (
                <g key={d.month}>
                  <circle
                    cx={getX(i)}
                    cy={getY(d.rev)}
                    r="5"
                    fill="#FFFFFF"
                    stroke="#3730A3"
                    strokeWidth="2.5"
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setActiveTooltip(d)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  />
                  <text x={getX(i)} y={h - 10} fill="#E0E7FF" fontSize="11" textAnchor="middle" fontFamily="IBM Plex Sans">{d.month}</text>
                </g>
              ))}
            </svg>

            {activeTooltip && (
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#0F172A',
                border: '1px solid #10B981',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '11px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                zIndex: 5
              }}>
                <strong style={{ color: '#FFF' }}>{activeTooltip.month} 2026</strong><br/>
                <span style={{ color: '#10B981' }}>Rev: ₹{activeTooltip.rev} Cr</span> | <span style={{ color: '#94A3B8' }}>Cost: ₹{activeTooltip.cost} Cr</span><br/>
                <span style={{ color: '#06B6D4' }}>Margin: {activeTooltip.margin}</span>
              </div>
            )}
          </div>

          <div className="chart-footer-metrics">
            <div className="stat-pill"><span className="lbl">Median Deal Size:</span><span className="val">₹48.2 Lakhs</span></div>
            <div className="stat-pill"><span className="lbl">Avg Sales Cycle:</span><span className="val">42 Days</span></div>
            <div className="stat-pill"><span className="lbl">CAC Payback:</span><span className="val">5.8 Months</span></div>
          </div>
        </div>

        {/* AI Variance Explainer (Feature 1 Blueprint: LLM explains period deltas) */}
        <div className="card glass-panel p-4 flex-col" style={{ justifyContent: 'space-between' }}>
          <div>
            <div className="ai-header">
              <div className="ai-title-wrap">
                <span className="ai-sparkle">✨</span>
                <span className="ai-title">AI Variance Explainer</span>
              </div>
              <span className="ai-model-tag">Claude 3.5 Sonnet · Verified Facts</span>
            </div>

            <div style={{ marginTop: '16px' }}>
              <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                What Changed This Month &amp; Why
              </span>
              <p className="ai-explanation-text" style={{ marginTop: '10px', fontSize: '0.86rem', lineHeight: 1.6, color: '#E2E8F0' }}>
                Contribution margin reached <strong>61.4% in September (+3.4% above target)</strong> driven by enterprise deal acceleration in APAC. Gross sales revenue rose to <strong>₹1.82 Cr/month</strong>, offsetting custom discount waivers applied in late August. Blended customer acquisition cost improved by <strong>8.4%</strong> as deal cycles stabilized at 42 days.
              </p>
            </div>

            <div style={{ marginTop: '18px', padding: '12px 14px', background: 'rgba(0, 0, 0, 0.25)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '0.72rem', color: '#A5B4FC', fontWeight: 600, marginBottom: '6px' }}>
                Key Variance Drivers Identified by SQL:
              </div>
              <ul style={{ fontSize: '0.74rem', color: '#CBD5E1', paddingLeft: '16px', margin: 0, lineHeight: 1.6 }}>
                <li>Enterprise ARR expansion: <strong>+₹21.0 Lakhs gross margin lift</strong></li>
                <li>Mid-market discount recovery: <strong>61.4% stabilized margin</strong></li>
                <li>Commission linearity: <strong>98.2% quota correlation</strong></li>
              </ul>
            </div>
          </div>

          <div className="ai-meta-bar" style={{ marginTop: '20px' }}>
            <span>Inputs: 5 pre-computed SQL deltas</span>
            <span className="audit-link" onClick={() => onInspectSql('margin')}>
              Inspect SQL Traceability &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
