import React, { useState } from 'react';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { getCoffeeRecommendation } from '../services/geminiService';
import { LoadingState, RecommendationResult } from '../types';
import { MENU_ITEMS } from '../constants';

const AiBarista: React.FC = () => {
  const [preference, setPreference] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [recommendation, setRecommendation] = useState<RecommendationResult | null>(null);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!preference.trim()) return;

    setStatus(LoadingState.LOADING);
    setRecommendation(null);

    try {
      const menuJson = JSON.stringify(MENU_ITEMS.map(item => ({ name: item.name, description: item.description, tags: item.tags })));
      const result = await getCoffeeRecommendation(preference, menuJson);
      setRecommendation(result);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="barista" className="py-24 bg-coffee-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-coffee-800 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coffee-950 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-coffee-800 rounded-full mb-6">
            <Sparkles className="w-6 h-6 text-coffee-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-50 font-bold mb-4">Meet Your AI Barista</h2>
          <p className="text-coffee-200 text-lg max-w-2xl mx-auto font-light">
            Not sure what to order? Tell us how you're feeling or what flavors you love, and our Gemini-powered barista will curate the perfect cup for you.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-coffee-700 p-8 md:p-12 rounded-xl shadow-2xl">
          <form onSubmit={handleRecommend} className="space-y-6">
            <div>
              <label htmlFor="preference" className="block text-coffee-200 text-sm font-bold uppercase tracking-widest mb-3">
                Your Mood or Taste
              </label>
              <textarea
                id="preference"
                rows={3}
                className="w-full bg-coffee-800/50 border border-coffee-600 text-coffee-100 placeholder-coffee-500 focus:border-coffee-400 focus:ring-1 focus:ring-coffee-400 rounded-none p-4 outline-none transition-all resize-none text-lg"
                placeholder="e.g., I need energy but something sweet, or maybe something cozy for a rainy day..."
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={status === LoadingState.LOADING || !preference.trim()}
                className="bg-coffee-100 text-coffee-900 hover:bg-white px-8 py-4 font-bold uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 min-w-[200px] justify-center"
              >
                {status === LoadingState.LOADING ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Brewing Ideas...
                  </>
                ) : (
                  <>
                    Find My Coffee
                  </>
                )}
              </button>
            </div>
          </form>

          {status === LoadingState.ERROR && (
            <div className="mt-8 p-4 bg-red-900/20 border border-red-800 text-red-200 text-center">
              <p>Oops! The barista spilled the milk. Please try again.</p>
            </div>
          )}

          {status === LoadingState.SUCCESS && recommendation && (
            <div className="mt-10 bg-coffee-100 text-coffee-900 p-8 relative animate-fade-in">
              <div className="absolute -top-3 -left-3">
                <div className="bg-coffee-600 text-white p-2 shadow-lg">
                   <Sparkles className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold mb-4 border-b border-coffee-300 pb-4">
                We Recommend: <span className="text-coffee-700">{recommendation.coffeeName}</span>
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase text-coffee-500 tracking-widest mb-1">Why this cup?</h4>
                  <p className="text-lg font-serif italic leading-relaxed text-coffee-800">
                    "{recommendation.reasoning}"
                  </p>
                </div>
                
                <div className="bg-white/50 p-4 border-l-4 border-coffee-500">
                  <h4 className="text-xs font-bold uppercase text-coffee-500 tracking-widest mb-1">Barista Tip</h4>
                  <p className="text-coffee-800 font-medium">
                    {recommendation.customNote}
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button 
                  onClick={() => setStatus(LoadingState.IDLE)}
                  className="text-coffee-600 hover:text-coffee-900 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 mx-auto"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Another
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiBarista;