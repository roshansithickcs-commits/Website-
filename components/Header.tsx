
import React from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearch: (val: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onSearch }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
            T
          </div>
          <h1 className="text-2xl font-brand text-slate-800 tracking-tight hidden sm:block">ToyWonder</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-xl relative hidden md:block">
          <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search for toys, brands, or interests..."
            className="w-full bg-slate-50 border-none rounded-2xl py-2.5 px-5 pl-11 text-sm focus:ring-4 focus:ring-blue-50 focus:bg-white transition-all outline-none"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 text-slate-600 font-bold text-sm px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors">
            Account
          </button>
          <button 
            onClick={onCartClick}
            className="relative bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 p-2.5 rounded-2xl transition-all active:scale-95 border border-transparent hover:border-blue-100 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
