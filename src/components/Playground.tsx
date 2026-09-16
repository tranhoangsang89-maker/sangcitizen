"use client";

import React, { useState } from 'react';
import Mascot360Viewer from './Mascot360Viewer';
import VoiceCloneStation from './VoiceCloneStation';

export default function Playground() {
  const [activeTab, setActiveTab] = useState<'chat' | 'mascot' | 'voice'>('chat');

  return (
    <section id="playground" className="w-full py-20 px-4 bg-slate-900/30 border-y border-slate-800 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Trải Nghiệm AI Playground</h2>
          <p className="text-slate-400">Tương tác trực tiếp với các giải pháp AI cốt lõi của Sang Citizen</p>
        </div>

        {/* Playground Container */}
        <div className="bg-[#090d16] rounded-2xl md:rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
          
          {/* Tabs - Swipable on mobile */}
          <div className="flex overflow-x-auto no-scrollbar flex-nowrap border-b border-slate-800 bg-slate-900/50 p-2 gap-2 touch-pan-x">
            <button 
              onClick={() => setActiveTab('chat')}
              className={`whitespace-nowrap flex-shrink-0 min-h-[44px] px-6 rounded-xl font-medium transition-all touch-manipulation flex items-center gap-2 ${
                activeTab === 'chat' 
                  ? 'bg-[#0055D4] text-white shadow-[0_0_15px_rgba(0,85,212,0.4)]' 
                  : 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              🤖 Live Chat Sagi
            </button>
            <button 
              onClick={() => setActiveTab('mascot')}
              className={`whitespace-nowrap flex-shrink-0 min-h-[44px] px-6 rounded-xl font-medium transition-all touch-manipulation flex items-center gap-2 ${
                activeTab === 'mascot' 
                  ? 'bg-[#FF7700] text-white shadow-[0_0_15px_rgba(255,119,0,0.4)]' 
                  : 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              🔄 360° Mascot Viewer
            </button>
            <button 
              onClick={() => setActiveTab('voice')}
              className={`whitespace-nowrap flex-shrink-0 min-h-[44px] px-6 rounded-xl font-medium transition-all touch-manipulation flex items-center gap-2 ${
                activeTab === 'voice' 
                  ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]' 
                  : 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              🎬 AI Video & Voice Studio
            </button>
          </div>

          {/* Content Area */}
          <div className="w-full relative bg-[#090d16]" style={activeTab === 'chat' ? { height: '65dvh', maxHeight: '600px' } : { minHeight: '400px' }}>
            
            {/* Tab 1: Chatbot */}
            {activeTab === 'chat' && (
              <div className="w-full h-full bg-[#090d16]">
                <iframe 
                  src="https://sagi-ai.vercel.app/" 
                  className="w-full h-full border-0"
                  allow="microphone"
                  title="Sagi AI Chatbot"
                />
              </div>
            )}

            {/* Tab 2: 360 Mascot Viewer */}
            {activeTab === 'mascot' && (
              <div className="w-full h-full p-4 sm:p-8 min-h-[400px]">
                <Mascot360Viewer />
              </div>
            )}

            {/* Tab 3: Voice Clone Station */}
            {activeTab === 'voice' && (
              <div className="flex flex-col items-center justify-center h-full p-4 sm:p-8 min-h-[400px]">
                <VoiceCloneStation />
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
