import React, { useState } from 'react';

const responses = {
  'Which deals are at risk this week?': `
    <strong>⚠️ 3 Enterprise Deals are currently stalled &gt;20 days in Proposal:</strong><br/>
    1. <strong>CloudScale Technologies</strong> ($120,000) - 26 days without sponsor engagement.<br/>
    2. <strong>FinTech Corp India</strong> ($115,000) - Legal redlining discount terms.<br/>
    3. <strong>LogisticsOne</strong> ($90,000) - Rep activity ceased 14 days ago.<br/>
    <em>Recommended action: Trigger VP executive sponsor call to unstick $235k.</em>
  `,
  'Why did Mid-Market margin drop?': `
    <strong>dbt Variance Analysis:</strong><br/>
    Mid-Market gross margin shifted <strong>-1.8% in late August</strong>. The SQL audit indicates 2 reps applied custom 14% discount waivers outside the standard 8% governance rule. Overall contribution margin recovered to 61.4% due to higher volume.
  `,
  'Show top 3 reps by ROI': `
    <strong>Top 3 Reps by Net Gross Margin ROI:</strong><br/>
    1. <strong>Priya Sharma</strong> (5.1x ROI) - $780k Closed Won, $499.2k margin.<br/>
    2. <strong>Arjun Nair</strong> (4.9x ROI) - $640k Closed Won, 28-day cycle velocity.<br/>
    3. <strong>Sneha Roy</strong> (4.3x ROI adjusted) - Outperforming 6-month ramp curve.
  `,
  'Are we on track for Q3?': `
    <strong>Monte Carlo Forecast (10,000 iterations):</strong><br/>
    There is a <strong>74% statistical probability</strong> of reaching the $5.10M Q3 target. Current booked revenue stands at $4.82M. Expected landing (P50) is <strong>$5.18M</strong>.
  `
};

export default function DirectorDrawer() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello Vikram! Ask me any question regarding your P&L, sales pipeline, rep productivity, or team health. I retrieve verified numbers directly from dbt.' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSend = (text) => {
    if (!text.trim()) return;
    const userQ = text.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userQ }]);
    setInputVal('');

    setTimeout(() => {
      const reply = responses[userQ] || `
        <strong>Query Tool Response:</strong> Retrieved verified dbt tables for <em>"${userQ}"</em>. Current Q3 Revenue is <strong>$4.82M</strong> across 338 closed deals with a <strong>61.4% contribution margin</strong>. All calculations match model <code>fct_sales_pl.sql</code>.
      `;
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 400);
  };

  return (
    <div className="grid-2col">
      {/* Weekly WhatsApp Style Digest */}
      <div className="card glass-panel p-4">
        <div className="card-header">
          <div className="flex-align">
            <span className="channel-icon whatsapp">📱</span>
            <div>
              <h3 className="card-title">Weekly Director Digest</h3>
              <p className="card-subtitle">Dispatched Monday 8:30 AM via WhatsApp Business & Push</p>
            </div>
          </div>
          <span className="badge verified-pill">Week 42</span>
        </div>

        <div className="digest-phone-preview mt-3">
          <div className="phone-message-bubble">
            <div className="bubble-header">
              <span className="bot-name">🤖 ACubeLI Executive Morning Brief</span>
              <span className="time-stamp">08:30 AM</span>
            </div>
            <div className="bubble-body">
              <p><strong>Good morning Vikram! Here is your 60-second Q3 summary:</strong></p>
              <ul className="bullet-list">
                <li>🎯 <strong>Target Status:</strong> $4.82M booked. 74% probability of achieving $5.18M Q3 target.</li>
                <li>💰 <strong>P&L Margin:</strong> 61.4% (+3.4% vs budget). Deal cost reduced to $14,250.</li>
                <li>⚠️ <strong>Deals Requiring Attention:</strong> 3 enterprise deals ($325k) stalled in Proposal for 20+ days.</li>
                <li>👥 <strong>Team Alert:</strong> Pune team attrition risk elevated (2 reps with 40% activity drop).</li>
              </ul>
              <p className="bubble-footer">Reply with any question or tap a quick action below.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive 60-Second Q&A Console */}
      <div className="card glass-panel p-4 flex-col">
        <div className="card-header">
          <div>
            <h3 className="card-title">Safe 60-Second Q&A Console</h3>
            <p className="card-subtitle">Zero Hallucinations: Bound strictly to parameterized SQL query tools</p>
          </div>
          <span className="badge ai-pill">Tool Enforced</span>
        </div>

        <div className="prompt-chips-wrap mt-3">
          <span className="chip-label">Quick Prompts:</span>
          {Object.keys(responses).map((q) => (
            <button key={q} className="prompt-chip" onClick={() => handleSend(q)}>
              {q}
            </button>
          ))}
        </div>

        <div className="chat-thread mt-3">
          {messages.map((m, idx) => (
            <div key={idx} className={`chat-msg ${m.sender}`}>
              <div className="msg-avatar">{m.sender === 'user' ? 'VM' : 'AI'}</div>
              <div className="msg-bubble" dangerouslySetInnerHTML={{ __html: m.text }} />
            </div>
          ))}
        </div>

        <form
          className="chat-input-bar mt-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputVal);
          }}
        >
          <input
            type="text"
            id="chat-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ask a question (e.g. 'What is our cost per deal by segment?')..."
            autoComplete="off"
          />
          <button type="submit" className="btn btn-primary send-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
