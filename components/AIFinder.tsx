
import React, { useState } from 'react';
import { getToyRecommendation } from '../services/geminiService';
import { AIRecommendation } from '../types';

interface AIFinderProps {
  onSearch: (category: string) => void;
}

const AIFinder: React.FC<AIFinderProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AIRecommendation | null>(null);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setRecommendation(null);
    const result = await getToyRecommendation(query);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md mb-6 text-sm font-bold border border-white/20">
          <span className="animate-pulse">✨</span> Powered by AI
        </div>
        
        <h2 className="text-3xl md:text-4xl font-brand mb-4">Magic Toy Finder</h2>
        <p className="text-indigo-100 mb-8 font-medium">
          Tell us about the kid's interests or personality, and we'll find the perfect match!
        </p>

        <form onSubmit={handleAskAI} className="relative mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., 'A 6-year old who loves space and building things'"
            className="w-full bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl py-5 px-6 pr-20 text-white placeholder:text-white/60 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2.5 top-2.5 bg-white text-indigo-600 font-bold px-6 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Find Toys'}
          </button>
        </form>

        {recommendation && (
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 text-left animate-fade-in">
            <h4 className="text-xl font-brand mb-2 flex items-center gap-2">
              <span>🎁</span> {recommendation.suggestion}
            </h4>
            <p className="text-indigo-50 text-sm mb-4 leading-relaxed">
              {recommendation.reasoning}
            </p>
            <button
              onClick={() => onSearch(recommendation.toyCategory)}
              className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-sm font-bold px-4 py-2 rounded-xl hover:bg-white transition-all active:scale-95"
            >
              Browse {recommendation.toyCategory} Toys
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIFinder;
