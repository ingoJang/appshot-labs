'use client';

import Image from 'next/image';
import { CATEGORIES, Category } from '../mockData';

// Map category to icon path
const getCategoryIcon = (category: Category): string => {
  const iconMap: Record<Category, string> = {
    Web3: '/Web3.png',
    AI: '/Ai.png',
    Productivity: '/Productivity.png',
    Fintech: '/Fintech.png',
    Travel: '/Travel.png',
  };
  return iconMap[category];
};

interface SidebarFiltersProps {
  activeCategory: Category | null;
  onCategoryToggle: (category: Category) => void;
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export default function SidebarFilters({
  activeCategory,
  onCategoryToggle,
  isOpen,
  onClose,
  onToggle,
}: SidebarFiltersProps) {
  const sidebarContent = (
    <div className="h-full bg-white border-r border-border-light p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Products</h3>
      <div className="space-y-3">
        {CATEGORIES.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategoryToggle(category)}
              aria-pressed={isSelected}
              className="flex items-center gap-3 w-full text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 rounded transition-all"
            >
              <div
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                  isSelected
                    ? 'border-gray-900 bg-gray-50 scale-105'
                    : 'border-gray-200 opacity-60 group-hover:opacity-100'
                }`}
              >
                <Image
                  src={getCategoryIcon(category)}
                  alt=""
                  width={24}
                  height={24}
                  className="w-5 h-5"
                />
              </div>
              <span
                className={`text-sm transition-colors ${
                  isSelected
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-700 group-hover:text-gray-900'
                }`}
              >
                {category}
              </span>
              <span className="sr-only">
                {isSelected ? 'Selected' : 'Not selected'} category {category}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile: Filter Button */}
      <div className="lg:hidden fixed bottom-4 left-4 z-40">
        <button
          onClick={onToggle}
          className="px-4 py-2 bg-white border border-border-light rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          Filters
        </button>
      </div>

      {/* Mobile: Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar: Desktop (always visible) */}
      <aside className="hidden lg:block w-60 flex-shrink-0 sticky top-12 self-start max-h-[calc(100vh-6rem)] overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* Sidebar: Mobile (drawer) */}
      <aside
        className={`lg:hidden fixed left-0 top-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <span className="text-gray-600">×</span>
        </button>
      </aside>
    </>
  );
}
