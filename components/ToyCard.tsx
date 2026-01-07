
import React from 'react';
import { Toy } from '../types';

interface ToyCardProps {
  toy: Toy;
  onAddToCart: (toy: Toy) => void;
}

const ToyCard: React.FC<ToyCardProps> = ({ toy, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img 
          src={toy.image} 
          alt={toy.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
          {toy.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-brand text-lg text-slate-800 leading-tight">{toy.name}</h3>
          <span className="text-pink-500 font-bold text-lg">${toy.price.toFixed(2)}</span>
        </div>
        
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">{toy.description}</p>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex items-center text-xs text-slate-400">
            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold text-slate-600 mr-2">{toy.rating}</span>
            <span>| {toy.ageRange}</span>
          </div>
          
          <button 
            onClick={() => onAddToCart(toy)}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2.5 rounded-2xl transition-colors shadow-sm active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
