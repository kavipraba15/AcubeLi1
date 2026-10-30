import React, { useState } from 'react';
import PnLModule from './components/PnLModule';
import TeamHealthModule from './components/TeamHealthModule';
import TargetPredictorModule from './components/TargetPredictorModule';
import StrategicModule from './components/StrategicModule';
import DirectorDrawer from './components/DirectorDrawer';
import SqlAuditModal from './components/SqlAuditModal';
import BoardReportModal from './components/BoardReportModal';

const moduleInfo = {
  'pnl': { title: 'P&L Intelligence', category: 'Finance Cockpit', status: 'Zoho CRM Synced' },
  'team-health': { title: 'Team Health & Attrition', category: 'People Science', status: 'ML Model v2.4' },
  'target-predictor': { title: 'Target Predictor', category: 'Revenue Ops', status: 'Monte Carlo 10k Sim' },
  'strategic': { title: 'Strategic Intelligence', category: 'Market Scenarios', status: 'Scenario AI' },
  'digest': { title: '60-Sec Executive Briefing', category: 'Director Suite', status: 'Daily Summary' },
};

export default function App() {
  const [activeTab, setActiveTab] = useState('strategic');
  const [sqlModalFormula, setSqlModalFormula] = useState(null);
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Left Navigation Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">
            <svg viewBox="0 0 32 32" fill="none" className="cube-icon">
              <path d="M16 2L3 9.5V22.5L16 30L29 22.5V9.5L16 2Z" stroke="#4F46E5" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M16 2V30M3 9.5L29 22.5M29 9.5L3 22.5" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.8"/>
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">ACube<span className="accent-text">LI</span></span>
            <span className="brand-tag">Executive Sales Intel</span>
          </div>
        </div>

        <nav className="nav-menu">
          <div className="nav-section-label">CORE MODULES</div>
          <button
            className={`nav-item ${activeTab === 'pnl' ? 'active' : ''}`}
            onClick={() => setActiveTab('pnl')}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v18h18M7 16l4-4 4 4 6-6"/>
            </svg>
            <span>P&amp;L Intelligence</span>
            <span className="badge verified-pill">SQL</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'team-health' ? 'active' : ''}`}
            onClick={() => setActiveTab('team-health')}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>Team Health</span>
            <span className="badge ml-pill">ML</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'target-predictor' ? 'active' : ''}`}
            onClick={() => setActiveTab('target-predictor')}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
            </svg>
            <span>Target Predictor</span>
            <span className="badge monte-pill">Sim</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'strategic' ? 'active' : ''}`}
            onClick={() => setActiveTab('strategic')}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
            </svg>
            <span>Strategic Intel</span>
            <span className="badge ai-pill">AI</span>
          </button>

          <div className="nav-section-label">DIRECTOR SUITE</div>
          <button
            className={`nav-item ${activeTab === 'digest' ? 'active' : ''}`}
            onClick={() => setActiveTab('digest')}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span>60-Sec Digest &amp; Q&amp;A</span>
            <span className="pulse-indicator"></span>
          </button>
        </nav>

        {/* Sidebar Footer / User Profile */}
        <div className="sidebar-footer">
          <div className="user-card">
            <div className="user-avatar">
              <span>VM</span>
              <span className="avatar-status-dot"></span>
            </div>
            <div className="user-info">
              <span className="user-name">Vikram Malhotra</span>
              <span className="user-role">VP Global Sales</span>
            </div>
            <div className="user-status-chip">PRO</div>
          </div>
        </div>
      </aside>

      {/* Main Workspace Area */}
      <main className="main-content">
        <header className="top-header">
          <div className="header-left">
            <div className="header-title-box">
              <div className="header-breadcrumbs">
                <span className="tenant-text">Apex SaaS Corp</span>
                <span className="bc-slash">/</span>
                <span className="category-text">{moduleInfo[activeTab]?.category}</span>
                <span className="live-sync-chip">
                  <span className="tenant-dot"></span>
                  {moduleInfo[activeTab]?.status}
                </span>
              </div>
              <h1 className="header-page-title">{moduleInfo[activeTab]?.title}</h1>
            </div>
          </div>
        </header>

        {/* Dynamic Workspace Content */}
        {activeTab === 'pnl' ? (
          <div className="workspace-content">
            <PnLModule onInspectSql={(formula) => setSqlModalFormula(formula)} />
          </div>
        ) : activeTab === 'team-health' ? (
          <div className="workspace-content">
            <TeamHealthModule />
          </div>
        ) : activeTab === 'target-predictor' ? (
          <div className="workspace-content">
            <TargetPredictorModule />
          </div>
        ) : activeTab === 'strategic' ? (
          <div className="workspace-content">
            <StrategicModule onOpenBoardModal={() => setIsBoardModalOpen(true)} />
          </div>
        ) : activeTab === 'digest' ? (
          <div className="workspace-content">
            <DirectorDrawer />
          </div>
        ) : (
          <div style={{
            padding: '40px 36px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 140px)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '68px',
              height: '68px',
              borderRadius: '18px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px',
              fontSize: '28px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              ⏳
            </div>
            <h2 style={{
              color: '#FFFFFF',
              fontSize: '1.35rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '8px'
            }}>
              {moduleInfo[activeTab]?.title}
            </h2>
            <p style={{
              maxWidth: '460px',
              fontSize: '0.86rem',
              color: '#94A3B8',
              lineHeight: 1.6
            }}>
              This module is queued for implementation. We are developing the core modules feature by feature.
            </p>
          </div>
        )}
      </main>

      {/* Deterministic SQL Audit Modal */}
      <SqlAuditModal
        isOpen={Boolean(sqlModalFormula)}
        formulaKey={sqlModalFormula}
        onClose={() => setSqlModalFormula(null)}
      />

      {/* Board of Directors Report Modal (Feature 13) */}
      <BoardReportModal
        isOpen={isBoardModalOpen}
        onClose={() => setIsBoardModalOpen(false)}
      />
    </div>
  );
}
