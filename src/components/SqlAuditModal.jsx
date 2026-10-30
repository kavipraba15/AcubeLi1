import React from 'react';

export default function SqlAuditModal({ isOpen, onClose, formulaKey }) {
  if (!isOpen) return null;

  let modelName = 'marts/fct_sales_pl.sql';
  let sqlCode = `-- dbt transformation: marts/fct_sales_pl.sql
SELECT
  d.deal_id,
  d.owner_id,
  d.amount as gross_revenue,
  COALESCE(c.allocated_cost, 0) + COALESCE(d.discount_amount, 0) as cost_of_sales,
  (d.amount - (COALESCE(c.allocated_cost, 0) + COALESCE(d.discount_amount, 0))) / NULLIF(d.amount, 0) as contribution_margin_pct
FROM {{ ref('stg_zoho_deals') }} d
LEFT JOIN {{ ref('int_cost_allocations') }} c ON d.deal_id = c.deal_id
WHERE d.stage = 'Closed Won' AND d.closed_date >= '2026-07-01';`;

  if (formulaKey === 'cost_per_deal') {
    modelName = 'marts/fct_deal_unit_economics.sql';
    sqlCode = `-- dbt transformation: marts/fct_deal_unit_economics.sql
SELECT 
  deal_id,
  (allocated_sales_cost + discount_given + commission_payout) / NULLIF(deals_won_count, 0) as cost_per_deal
FROM {{ ref('int_deal_costs') }};`;
  } else if (formulaKey === 'margin') {
    modelName = 'marts/fct_contribution_margin.sql';
    sqlCode = `-- dbt transformation: marts/fct_contribution_margin.sql
SELECT 
  period,
  sum(gross_margin) / nullif(sum(gross_revenue), 0) as contribution_margin_pct
FROM {{ ref('fct_sales_pl') }}
GROUP BY period;`;
  }

  return (
    <div className="modal-backdrop show" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="flex-align">
            <span className="modal-icon">🔒</span>
            <div>
              <h3 className="modal-title">Deterministic SQL Audit Proof</h3>
              <p className="modal-subtitle">Principle: &quot;AI never does the arithmetic&quot;</p>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="audit-meta-row">
            <div className="meta-pill"><strong>dbt Model:</strong> <span>{modelName}</span></div>
            <div className="meta-pill"><strong>Execution:</strong> Postgres / Snowflake</div>
            <div className="meta-pill"><strong>Status:</strong> <span style={{ color: '#10B981' }}>PASS (0.12s)</span></div>
          </div>
          <div className="code-preview mt-3">
            <pre><code>{sqlCode}</code></pre>
          </div>
          <div className="audit-verification-badge mt-3">
            ✅ Verified: LLM only reads this output JSON. It never calculates figures internally.
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
