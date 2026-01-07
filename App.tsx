
import React, { useState, useMemo } from 'react';
import { Toy, CartItem, ToyCategory } from './types';
import { TOYS_DATA } from './data/toys';
import Header from './components/Header';
import ToyCard from './components/ToyCard';
import Cart from './components/Cart';
import AIFinder from './components/AIFinder';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredToys = useMemo(() => {
    return TOYS_DATA.filter(toy => {
      const matchesCategory = selectedCategory === 'All' || toy.category === selectedCategory;
      const matchesSearch = toy.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           toy.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const addToCart = (toy: Toy) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === toy.id);
      if (existing) {
        return prev.map(item => item.id === toy.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...toy, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation Header */}
      <Header 
        cartCount={totalCartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onSearch={setSearchQuery}
      />

      <main className="max-w-7xl mx-auto px-6 pt-24">
        {/* Hero / AI Finder Section */}
        <div className="mb-16">
          <AIFinder onSearch={(cat) => {
            setSelectedCategory(cat);
            const el = document.getElementById('shop-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }} />
        </div>

        {/* Shop Section Header */}
        <div id="shop-section" className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-brand text-slate-800 mb-2">Explore Wonders</h2>
            <p className="text-slate-500 font-medium">Discover toys that spark joy and curiosity</p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {['All', ...Object.values(ToyCategory)].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-2xl whitespace-nowrap font-bold transition-all text-sm border-2 ${
                  selectedCategory === cat 
                    ? 'bg-pink-500 border-pink-500 text-white shadow-lg shadow-pink-200' 
                    : 'bg-white border-slate-100 text-slate-600 hover:border-blue-200 hover:text-blue-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredToys.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredToys.map(toy => (
              <ToyCard key={toy.id} toy={toy} onAddToCart={addToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
            <div className="text-6xl mb-4">🧸</div>
            <h3 className="text-2xl font-brand text-slate-800">No toys found!</h3>
            <p className="text-slate-400 mb-6">Try searching for something else or change the category.</p>
            <button 
              onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
              className="bg-blue-500 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* Cart Modal */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
      />

      {/* Footer */}
      <footer className="mt-20 py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">T</div>
              <h1 className="text-2xl font-brand text-slate-800 tracking-tight">ToyWonder</h1>
            </div>
            <p className="text-slate-400 text-sm">Where imagination takes flight. The finest collection of magical toys for curious minds.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-brand text-slate-800 mb-2">Helpful Links</h4>
            <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">Shipping Policy</a>
            <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">Returns & Exchanges</a>
            <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">Safety Guidelines</a>
          </div>
          <div>
            <h4 className="font-brand text-slate-800 mb-4">Join our Newsletter</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="email@wonder.com" className="bg-slate-50 border-none rounded-xl px-4 py-2 flex-grow text-sm focus:ring-2 focus:ring-blue-200" />
              <button className="bg-blue-500 text-white p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
