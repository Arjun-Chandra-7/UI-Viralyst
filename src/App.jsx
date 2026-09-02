import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import LandingPage from './components/LandingPage';
import AppShell from './components/AppShell';

// Views
import HomeView from './views/HomeView';
import ManagerView from './views/ManagerView';
import CreateView from './views/CreateView';
import ContentView from './views/ContentView';
import PerformanceView from './views/PerformanceView';

// Modals
import ContentDetailModal from './modals/ContentDetailModal';
import RequestChangesModal from './modals/RequestChangesModal';
import LoginModal from './modals/LoginModal';
import FirstTimeSetupModal from './modals/FirstTimeSetupModal';
import SettingsModal from './modals/SettingsModal';
import NotificationsDrawer from './modals/NotificationsDrawer';
import HelpSupportDrawer from './modals/HelpSupportDrawer';

// Mock Data
import { INITIAL_CONTENT } from './data/mockData';

export default function App() {
  // Navigation & Flow state
  const [showIntro, setShowIntro] = useState(true);
  const [mode, setMode] = useState('landing'); // 'landing' | 'app'
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'manager' | 'create' | 'content' | 'performance'
  const [contentFilter, setContentFilter] = useState('All');

  // Modals state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showFirstTimeSetup, setShowFirstTimeSetup] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [activeContentDetail, setActiveContentDetail] = useState(null);
  const [activeRequestChangeReel, setActiveRequestChangeReel] = useState(null);
  const [createPreloadedTopic, setCreatePreloadedTopic] = useState('');

  // Main Content Data state
  const [contentList, setContentList] = useState(INITIAL_CONTENT);

  // Content Actions
  const handleApproveContent = (reelId) => {
    setContentList(prev =>
      prev.map(item => {
        if (item.id === reelId) {
          return {
            ...item,
            status: 'Scheduled',
            date: 'Approved just now',
            scheduledFor: 'Scheduled for Tomorrow at 11:30 AM'
          };
        }
        return item;
      })
    );
  };

  const handleRequestChangeSubmit = (reelId, note) => {
    setContentList(prev =>
      prev.map(item => {
        if (item.id === reelId) {
          return {
            ...item,
            status: 'In Progress',
            date: 'Revising hooks...',
            description: `${item.description} (Revision requested: "${note}")`
          };
        }
        return item;
      })
    );
  };

  const handleReelCreated = (newReel) => {
    setContentList(prev => [newReel, ...prev]);
  };

  const handleOpenCreateWithTopic = (topic) => {
    setCreatePreloadedTopic(topic);
    setCurrentView('create');
  };

  const handleAskManager = (initialPrompt = '') => {
    setCurrentView('manager');
  };

  // 1. Cute Intro Screen
  if (showIntro) {
    return (
      <IntroScreen
        onComplete={() => setShowIntro(false)}
      />
    );
  }

  // 2. Landing Page
  if (mode === 'landing') {
    return (
      <>
        <LandingPage
          onEnterApp={() => setMode('app')}
          onOpenLogin={() => setShowLoginModal(true)}
        />

        {showLoginModal && (
          <LoginModal
            onClose={() => setShowLoginModal(false)}
            onLoginSuccess={() => {
              setShowLoginModal(false);
              setMode('app');
            }}
          />
        )}
      </>
    );
  }

  // 3. Client Command Center (App Workspace)
  return (
    <AppShell
      currentView={currentView}
      onNavigate={(viewId, filter = 'All') => {
        setCurrentView(viewId);
        if (viewId === 'content' && filter) {
          setContentFilter(filter);
        }
      }}
      onOpenSettings={() => setShowSettings(true)}
      onOpenNotifications={() => setShowNotifications(true)}
      onOpenHelp={() => setShowHelp(true)}
      onOpenFirstTimeSetup={() => setShowFirstTimeSetup(true)}
      onSignOut={() => {
        setMode('landing');
      }}
      onBackToLanding={() => setMode('landing')}
      unreadNotificationsCount={contentList.filter(c => c.status === 'Ready for Review').length + 1}
    >
      {/* 5 Core Views */}
      {currentView === 'home' && (
        <HomeView
          contentList={contentList}
          onNavigate={(viewId, filter = 'All') => {
            setCurrentView(viewId);
            if (viewId === 'content' && filter) {
              setContentFilter(filter);
            }
          }}
          onReviewContent={(reel) => setActiveContentDetail(reel)}
          onApproveContent={handleApproveContent}
          onRequestChanges={(reel) => setActiveRequestChangeReel(reel)}
          onOpenCreateWithTopic={handleOpenCreateWithTopic}
        />
      )}

      {currentView === 'manager' && (
        <ManagerView
          contentList={contentList}
          onNavigate={(viewId) => setCurrentView(viewId)}
          onCreateFromManager={handleOpenCreateWithTopic}
          onReviewContent={(reel) => setActiveContentDetail(reel)}
        />
      )}

      {currentView === 'create' && (
        <CreateView
          onReelCreated={handleReelCreated}
          initialTopic={createPreloadedTopic}
        />
      )}

      {currentView === 'content' && (
        <ContentView
          contentList={contentList}
          activeTab={contentFilter}
          onSelectTab={(tab) => setContentFilter(tab)}
          onReviewContent={(reel) => setActiveContentDetail(reel)}
          onApproveContent={handleApproveContent}
          onRequestChanges={(reel) => setActiveRequestChangeReel(reel)}
          onNavigate={(viewId) => setCurrentView(viewId)}
        />
      )}

      {currentView === 'performance' && (
        <PerformanceView
          onNavigate={(viewId) => setCurrentView(viewId)}
          onOpenCreateWithTopic={handleOpenCreateWithTopic}
        />
      )}

      {/* Modals & Drawers */}
      {activeContentDetail && (
        <ContentDetailModal
          reel={activeContentDetail}
          onClose={() => setActiveContentDetail(null)}
          onApprove={handleApproveContent}
          onRequestChanges={(reel) => setActiveRequestChangeReel(reel)}
          onAskManager={handleAskManager}
        />
      )}

      {activeRequestChangeReel && (
        <RequestChangesModal
          reel={activeRequestChangeReel}
          onClose={() => setActiveRequestChangeReel(null)}
          onSubmitChange={handleRequestChangeSubmit}
        />
      )}

      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
        />
      )}

      {showNotifications && (
        <NotificationsDrawer
          onClose={() => setShowNotifications(false)}
          onNavigate={(viewId) => {
            setCurrentView(viewId);
            setShowNotifications(false);
          }}
        />
      )}

      {showHelp && (
        <HelpSupportDrawer
          onClose={() => setShowHelp(false)}
          onAskManager={handleAskManager}
        />
      )}

      {showFirstTimeSetup && (
        <FirstTimeSetupModal
          onCompleteSetup={(setupData) => {
            setShowFirstTimeSetup(false);
            setCurrentView('home');
          }}
          onSkip={() => setShowFirstTimeSetup(false)}
        />
      )}
    </AppShell>
  );
}
