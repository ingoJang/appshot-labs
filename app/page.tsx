'use client';

import { useState, useMemo } from 'react';
import Header from './components/Header';
import SidebarFilters from './components/SidebarFilters';
import SectionRow from './components/SectionRow';
import { mockSections, Section, CATEGORIES, Category } from './mockData';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCategoryToggle = (category: Category) => {
    setActiveCategory((prev) => {
      // If clicking the same category, clear it (show all)
      if (prev === category) {
        return null;
      }
      // Otherwise, set the new category as active
      return category;
    });
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  // Filter sections based on activeCategory
  const filteredSections = useMemo(() => {
    // Create a map of sections by category for quick lookup
    const sectionsByCategory = new Map<Category, Section>();
    mockSections.forEach((section) => {
      const category = section.title as Category;
      if (CATEGORIES.includes(category)) {
        sectionsByCategory.set(category, section);
      }
    });

    // If no category is selected, show all sections
    if (activeCategory === null) {
      return CATEGORIES.map((category): Section => {
        return sectionsByCategory.get(category) || {
          id: category.toLowerCase().replace(/\s+/g, '-'),
          title: category,
          items: [],
          showViewAll: true,
          count: 0,
        };
      });
    }

    // If a category is selected, show only that section
    const selectedSection = sectionsByCategory.get(activeCategory);
    if (selectedSection) {
      return [selectedSection];
    }

    // Fallback: return empty section if category not found
    return [{
      id: activeCategory.toLowerCase().replace(/\s+/g, '-'),
      title: activeCategory,
      items: [],
      showViewAll: true,
      count: 0,
    }];
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <div className="max-w-content mx-auto px-4 md:px-6 lg:px-8 overflow-x-hidden">
        <h1 className="sr-only">AppShot Labs – App Store Screenshot Design Studio</h1>
        <div className="flex gap-6 lg:gap-8 pt-6 md:pt-8">
          {/* Sidebar */}
          <SidebarFilters
            activeCategory={activeCategory}
            onCategoryToggle={handleCategoryToggle}
            isOpen={isSidebarOpen}
            onClose={handleSidebarClose}
            onToggle={handleSidebarToggle}
          />

          {/* Main Content */}
          <main className="flex-1 min-w-0 pb-12 md:pb-16 lg:ml-0 ml-0 overflow-x-hidden">
            {filteredSections.map((section) => (
              <SectionRow key={section.id} section={section} />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
