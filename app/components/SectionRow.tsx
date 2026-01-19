'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Section } from '../mockData';
import ScreenshotCard from './ScreenshotCard';

interface SectionRowProps {
  section: Section;
}

export default function SectionRow({ section }: SectionRowProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [prevShowDetails, setPrevShowDetails] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Dev-only image error handler
  const handleImageError = (src: string) => {
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      console.warn(`[Image Error] Failed to load: ${src} on route: ${window.location.pathname}`);
    }
  };
  
  // Get the app name from the first item, or fallback to category name
  // For Web3 section, show "MetaMask" as the active product
  // For AI section, show "ChatGPT" as the active product
  // For Productivity section, show "Obsidian" as the active product
  // For Fintech section, show "Revolut" as the active product
  // For Travel section, show "Tripadvisor" as the active product
  // For other sections, extract the app name from the first item
  const appName = section.items.length > 0 
    ? (section.title === 'Web3' 
        ? 'MetaMask: Crypto & Web3 Wallet' 
        : section.title === 'AI'
        ? 'ChatGPT'
        : section.title === 'Productivity'
        ? 'Obsidian - Connected Notes'
        : section.title === 'Fintech'
        ? 'Revolut - Mobile Finance'
        : section.title === 'Travel'
        ? 'Tripadvisor'
        : section.items[0].name.replace(/\s+App \d+$/, '').trim() || section.items[0].name)
    : section.title;

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  // Scroll to top of showcase when details are closed
  useEffect(() => {
    if (prevShowDetails && !showDetails && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setPrevShowDetails(showDetails);
  }, [showDetails, prevShowDetails]);

  return (
    <div ref={containerRef} className="mb-8 md:mb-10">
      {/* Section Header */}
      <div className="mb-4 md:mb-6">
        {/* Mobile: 2-row layout */}
        <div className="sm:hidden flex flex-col gap-2">
          {/* Row 1: Icon + Title (left), Category pill (right) */}
          <div className="flex items-center justify-between gap-3 min-w-0">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                {section.title === 'Web3' ? (
                  <Image
                    src="/Metamask.webp"
                    alt="MetaMask"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                ) : section.title === 'AI' ? (
                  <Image
                    src="/Chatgpt.webp"
                    alt="ChatGPT"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                ) : section.title === 'Productivity' ? (
                  <Image
                    src="/Obsidian.webp"
                    alt="Obsidian"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                ) : section.title === 'Fintech' ? (
                  <Image
                    src="/Revolut.webp"
                    alt="Revolut"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                ) : section.title === 'Travel' ? (
                  <Image
                    src="/Tripadvisor.webp"
                    alt="Tripadvisor"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                ) : section.items.length > 0 ? (
                  <img
                    src={section.items[0].imageUrl}
                    alt={appName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs text-gray-400">📱</span>
                )}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 leading-tight min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                {appName}
              </h2>
            </div>
            <div className="text-sm px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-500 shrink-0">
              {section.title}
            </div>
          </div>
          {/* Row 2: Show details (right-aligned) */}
          <div className="flex justify-end">
            <button
              onClick={toggleDetails}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
            >
              {showDetails ? 'Back to shots ‹' : 'Show details ›'}
            </button>
          </div>
        </div>

        {/* Desktop/Tablet: Single-row layout */}
        <div className="hidden sm:flex items-center justify-between min-w-0">
          {/* Left group: App icon + App name */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
              {section.title === 'Web3' ? (
                <Image
                  src="/Metamask.webp"
                  alt="MetaMask"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              ) : section.title === 'AI' ? (
                <Image
                  src="/Chatgpt.webp"
                  alt="ChatGPT"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              ) : section.title === 'Productivity' ? (
                <Image
                  src="/Obsidian.webp"
                  alt="Obsidian"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              ) : section.title === 'Fintech' ? (
                <Image
                  src="/Revolut.webp"
                  alt="Revolut"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              ) : section.title === 'Travel' ? (
                <Image
                  src="/Tripadvisor.webp"
                  alt="Tripadvisor"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              ) : section.items.length > 0 ? (
                <img
                  src={section.items[0].imageUrl}
                  alt={appName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xs text-gray-400">📱</span>
              )}
            </div>
            <h2 className="text-lg font-semibold text-gray-900 break-words leading-tight" style={{ overflowWrap: 'anywhere' }}>
              {appName}
            </h2>
          </div>

          {/* Right group: Show details toggle + Category pill */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDetails}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
            >
              {showDetails ? 'Back to shots ‹' : 'Show details ›'}
            </button>
            <div className="text-sm px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-500">
              {section.title}
            </div>
          </div>
        </div>
      </div>

      {/* Content area with collapse transitions */}
      <div className="relative">
        {/* Carousel View */}
        <div
          className={`transition-all duration-300 ${
            showDetails 
              ? 'max-h-0 opacity-0 overflow-hidden pointer-events-none' 
              : 'max-h-[2000px] opacity-100 overflow-visible'
          }`}
        >
          {section.items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">No items yet.</p>
            </div>
          ) : (
            <div 
              className="overflow-x-auto overflow-y-hidden -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 hide-scrollbar [overscroll-behavior-x:contain] [overscroll-behavior-y:auto] [scroll-padding-x:1.5rem]"
              style={{ touchAction: 'pan-y pan-x' }}
              onWheel={(e) => {
                // Only handle horizontal scroll when Shift key is pressed (Shift + wheel = horizontal scroll)
                // Otherwise, let the event bubble and allow normal vertical page scrolling
                if (!e.shiftKey) {
                  return; // Allow default vertical scrolling behavior
                }

                const el = e.currentTarget;
                const canScrollX = el.scrollWidth > el.clientWidth;
                if (!canScrollX) return;

                // Shift + wheel: scroll carousel horizontally
                el.scrollLeft += e.deltaY; // Use deltaY when Shift is pressed (browser converts wheel to horizontal)
                e.preventDefault(); // Only prevent default for Shift+wheel horizontal scroll
              }}
            >
              <div className="flex flex-nowrap gap-3">
        {section.items.map((item) => (
                  <ScreenshotCard 
                    key={item.id} 
                    item={item}
                  />
                ))}
                {/* Trailing spacer to prevent last item clipping */}
                <div className="shrink-0 w-4 md:w-6 lg:w-8" />
              </div>
            </div>
          )}
        </div>

        {/* Details View */}
        <div
          className={`transition-all duration-300 overflow-x-hidden ${
            showDetails 
              ? 'max-h-[2000px] opacity-100 overflow-y-visible relative z-10 mb-12' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className={`bg-white rounded-xl border border-gray-200 transition-all duration-300 ${
            showDetails ? 'p-6 md:p-8' : 'p-0 m-0'
          }`}>
            {/* Hero Image - First element at the top */}
            {section.detailHeroImage && (
              <div className="mb-6">
                <div className="relative w-full rounded-xl overflow-hidden">
                  <Image
                    src={section.detailHeroImage}
                    alt={`${appName} AppShot redesign hero`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* Revolut-specific content */}
            {section.title === 'Fintech' ? (
              <>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Revolut App Store Redesign</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Overview</h4>
                  <p className="text-sm text-gray-600">
                    A concept redesign of Revolut's App Store presence to improve clarity, trust, and conversion.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Problem</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The original App Store page looked strong, but it did not clearly highlight how widely used and trusted Revolut is. Heavy reliance on white text, inconsistent spacing, and a layout that was both too tight and too loose in places reduced visibility and weakened first-impression impact.
                  </p>
                  <div className="space-y-3">
                    <div className="relative w-full overflow-hidden">
                      <img
                        src="/Revolut_Theproblem01.jpg"
                        alt="Revolut App Store original design problem - image 1"
                        style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                      />
                    </div>
                    <div className="relative w-full overflow-hidden">
                      <img
                        src="/Revolut_Theproblem02.jpg"
                        alt="Revolut App Store original design problem - image 2"
                        style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                      />
                    </div>
                    <div className="relative w-full overflow-hidden">
                      <img
                        src="/Revolut_Theproblem03.jpg"
                        alt="Revolut App Store original design problem - image 3"
                        style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                      />
                    </div>
                    <div className="relative w-full overflow-hidden">
                      <img
                        src="/Revolut_Theproblem04.jpg"
                        alt="Revolut App Store original design problem - image 4"
                        style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Goal</h4>
                  <p className="text-sm text-gray-600">
                    Make Revolut's scale and credibility immediately visible through clearer hierarchy, better contrast, and more confident use of space.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Approach</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    In fintech products, trust is the foundation of the first impression.
                    The visual system was therefore designed to feel structured, calm, and reliable from the first screen.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    Revolut's position as a leading global app was emphasized as a key trust signal,
                    helping users quickly understand the scale and credibility of the product.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    As financial services require mandatory disclosures such as
                    T&Cs apply, Capital at risk, and Fees may apply,
                    these elements were integrated into the layout in a way that maintains clarity
                    while preserving a clean visual hierarchy.
                  </p>
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/Revolut_Approach_01.jpg"
                      alt="Revolut App Store redesign approach"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic">
                  The sub-message became a trust signal, while the interest rate was emphasized to improve clarity and appeal.
                  </p>
                  <div className="relative w-full overflow-hidden mb-3 mt-6">
                    <img
                      src="/Revolut_Approach_02.jpg"
                      alt="Revolut App Store redesign visual system"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic mb-8">
                    A more structured layout with less empty space.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/Revolut_Approach_03.jpg"
                      alt="Revolut App Store simplified visual system"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic">
                  Instead of three separate warnings, the disclosure was tightened into one clear, compliant statement.
                  </p>
                  <div className="relative w-full overflow-hidden mb-3 mt-6">
                    <img
                      src="/Revolut_Approach_04.png"
                      alt="Revolut App Store redesign"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic">
                    Top: original App Store / Bottom: redesigned version
                  </p>
                </div>

                <div className="mb-6 mt-12">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Outcome</h4>
                  <p className="text-sm text-gray-600 mb-6">
                    User attention shifted from scattered UI elements to a clear flow across the headline, rate, and balance, strengthening both clarity and conversion focus.
                  </p>
                  
                  {/* Two-column image comparison */}
                  <div className="grid grid-cols-2 gap-4 mb-4 items-start">
                    {/* Left image */}
                    <div className="flex flex-col">
                      <div className="relative w-full overflow-hidden mb-2 flex items-start">
                        <img
                          src="/Revolut_Outcome_01.png"
                          alt="Before - Scattered hierarchy"
                          style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <p className="text-xs text-gray-600 opacity-70 text-center italic">
                        Before
                      </p>
                      <p className="text-xs text-gray-600 opacity-70 text-center italic mt-1">
                        The eye is drawn to unnecessary details instead of the main message.
                      </p>
                    </div>

                    {/* Right image */}
                    <div className="flex flex-col">
                      <div className="relative w-full overflow-hidden mb-2 flex items-start">
                        <img
                          src="/Revolut_Outcome_02.png"
                          alt="After - Clear visual flow"
                          style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <p className="text-xs text-gray-600 opacity-70 text-center italic">
                        After
                      </p>
                      <p className="text-xs text-gray-600 opacity-70 text-center italic mt-1">
                        The eye is guided first to trust, then evenly across the headline.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : section.title === 'Web3' ? (
              <>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">MetaMask App Store Redesign</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Overview</h4>
                  <p className="text-sm text-gray-600">
                  A clearer, more playful App Store redesign to make MetaMask and Web3 easier to approach.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Problem</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The original App Store page feels dense and technical, making MetaMask look complex and intimidating instead of clear and approachable. This weakens first impressions and makes it harder for new users to understand and trust the product.
                  </p>
                  <div className="relative w-full overflow-hidden">
                    <img
                      src="/MetaMask_Theproblem01.jpg"
                      alt="MetaMask App Store original design problem"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Goal</h4>
                  <p className="text-sm text-gray-600">
                    Shift MetaMask's App Store experience from a technical crypto tool to a welcoming, everyday product.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Approach</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The App Store screen was redesigned to feel lighter and more welcoming through a brighter background, high-contrast text, and MetaMask's brand illustrations, making Web3 feel less intimidating and easier to approach.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    The core wallet and MetaMask Card with rewards were highlighted to spark interest and show real-world utility.
                  </p>
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/MetaMask_Approach_01.jpg"
                      alt="MetaMask App Store redesign approach"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic">
                  Left: Low-contrast text / Right: Brighter and high-contrast text
                  </p>
                  <div className="relative w-full overflow-hidden mb-3 mt-6">
                    <img
                      src="/MetaMask_Approach_02.jpg"
                      alt="MetaMask App Store redesign visual system"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic mb-8">
                    Brand illustrations create a friendly, less intimidating entry into Web3.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/MetaMask_Approach_03.jpg"
                      alt="MetaMask App Store simplified visual system"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic">
                  Top: original App Store / Bottom: redesigned version
                  </p>
                </div>

                <div className="mb-6 mt-12">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Outcome</h4>
                  <p className="text-sm text-gray-600 mb-6">
                    The before-and-after comparison shows a clear shift from a feature-heavy trading interface to a warm, approachable Web3 brand experience.
                  </p>
                  
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/MetaMask_Outcome_01.jpg"
                      alt="MetaMask App Store redesign outcome"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                </div>
              </>
            ) : section.title === 'Productivity' ? (
              <>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Obsidian App Store Redesign</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Overview</h4>
                  <p className="text-sm text-gray-600">
                    A concept redesign of Obsidian's App Store presence to make its powerful note-taking system easier to understand, navigate, and value at a glance.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Problem</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The original App Store screenshots focused heavily on showing the interface, but not on explaining how Obsidian actually works.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Dense UI screens and technical visuals made the product feel complex and intimidating, especially for new users unfamiliar with knowledge-graph tools and markdown-based workflows.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    As a result, the screenshots showed features, but not the system behind them.
                  </p>
                  <div className="relative w-full overflow-hidden">
                    <img
                      src="/Obsidian_Theproblem01.jpg"
                      alt="Obsidian App Store original design problem"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Goal</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    To transform Obsidian's App Store page from a collection of raw feature screenshots into a clear visual story that explains how the app helps users think, connect ideas, and build knowledge.
                  </p>
                  <p className="text-sm text-gray-600">
                    The aim was to make the value of Obsidian immediately understandable, even to first-time users.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Approach</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The screenshots were restructured into a clear visual story that uses trust signals and focused messaging to explain how Obsidian helps users connect and organize their thinking.
                  </p>
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/Obsidian_Approach_01.jpg"
                      alt="Obsidian App Store redesign approach"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic">
                    Trust signals such as downloads and reviews are highlighted to support credibility.
                  </p>
                  <div className="relative w-full overflow-hidden mb-3 mt-6">
                    <img
                      src="/Obsidian_Approach_02.jpg"
                      alt="Obsidian App Store redesign visual system"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic mb-8">
                    Raw screenshots were simplified and paired with clear explanations to make each screen easier to understand.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/Obsidian_Approach_03.jpg"
                      alt="Obsidian App Store simplified visual system"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic">
                    Top: original App Store / Bottom: redesigned version
                  </p>
                </div>

                <div className="mb-6 mt-12">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Outcome</h4>
                  <p className="text-sm text-gray-600 mb-6">
                    The new layout makes Obsidian easier to read, understand, and trust at first glance.
                  </p>
                  
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/Obsidian_Outcome_01.jpg"
                      alt="Obsidian App Store redesign outcome"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                </div>
              </>
            ) : section.title === 'AI' ? (
              <>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ChatGPT App Store Redesign</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Overview</h4>
                  <p className="text-sm text-gray-600">
                    A concept redesign of ChatGPT's App Store presence to improve clarity, emotional impact, and first-impression appeal.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Problem</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The original App Store screenshots were informative but visually flat.
                    They relied heavily on repetitive UI screens and soft blue panels, making the experience feel functional rather than inspiring.
                  </p>
                  <div className="relative w-full overflow-hidden">
                    <img
                      src="/Chatgpt_Theproblem01.jpg"
                      alt="ChatGPT App Store original design problem"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Goal</h4>
                  <p className="text-sm text-gray-600">
                    To turn prompts into an invitation, showing users what they can create, learn, and explore with ChatGPT.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Approach</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    A global rating was introduced on the first screen to establish immediate trust and credibility.
                    The user's prompt was then elevated as the focal point of each screen, becoming the narrative device that guides the story.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Different mockups and dynamic compositions were used to create a more lively, flowing visual sequence, while short supporting copy clearly communicates what users can achieve with ChatGPT.
                  </p>
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/Chatgpt_Approach_01.jpg"
                      alt="ChatGPT App Store redesign approach"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic">
                  Global ratings and scale used as an immediate trust anchor.
                  </p>
                  <div className="relative w-full overflow-hidden mb-3 mt-6">
                    <img
                      src="/Chatgpt_Approach_02.jpg"
                      alt="ChatGPT App Store redesign visual system"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic mb-8">
                    The prompt leads the narrative, making imagination the starting point.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/Chatgpt_Approach_03.jpg"
                      alt="ChatGPT App Store simplified visual system"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic">
                    Different mockups and compositions are used to create a more dynamic visual flow.
                  </p>
                  <div className="relative w-full overflow-hidden mb-3 mt-6">
                    <img
                      src="/Chatgpt_Approach_04.jpg"
                      alt="ChatGPT App Store redesign"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic">
                    Top: original App Store / Bottom: redesigned version
                  </p>
                </div>

                <div className="mb-6 mt-12">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Outcome</h4>
                  <p className="text-sm text-gray-600 mb-6">
                    ChatGPT now feels less like a utility and more like something you want to explore.
                  </p>
                  
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/Chatgpt_Outcome_01.jpg"
                      alt="ChatGPT App Store redesign outcome"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                </div>
              </>
            ) : section.title === 'Travel' ? (
              <>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tripadvisor App Store Redesign</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Overview</h4>
                  <p className="text-sm text-gray-600">
                    A concept redesign of Tripadvisor's App Store presence to improve readability, reduce visual fatigue, and make travel discovery feel calmer, clearer, and more trustworthy.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Problem</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The original App Store screenshots were visually loud and tiring to scan. Bright neon backgrounds and dense UI created visual fatigue, making it harder to focus on the message or understand what the app offers.
                  </p>
                  <div className="relative w-full overflow-hidden">
                    <img
                      src="/Tripadvisor_Theproblem01.jpg"
                      alt="Tripadvisor App Store original design problem"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Goal</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    To create a more readable and comfortable App Store experience that helps users quickly understand what Tripadvisor does and feel confident exploring it.
                  </p>
                  <p className="text-sm text-gray-600">
                    The aim was to reduce visual noise while keeping the energy and usefulness of the product.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">The Approach</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    The layout was redesigned to guide the viewer's eye using pointing gestures, visual cues, and softer contrast, while a deeper green background and brighter accents make key elements feel more vibrant and easier to spot.
                  </p>
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/Tripadvisor_Approach_01.jpg"
                      alt="Tripadvisor App Store redesign approach"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic">
                    Directional cues create a clear visual path across the screen, making information easier to follow.
                  </p>
                  <div className="relative w-full overflow-hidden mb-3 mt-6">
                    <img
                      src="/Tripadvisor_Approach_02.jpg"
                      alt="Tripadvisor App Store redesign visual system"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic mb-8">
                    Left: Visually fatiguing / Right: Comfortable and readable
                  </p>
                </div>

                <div className="mb-6">
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/Tripadvisor_Approach_03.jpg"
                      alt="Tripadvisor App Store simplified visual system"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 opacity-70 text-center italic">
                    Top: original App Store / Bottom: redesigned version
                  </p>
                </div>

                <div className="mb-6 mt-12">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Outcome</h4>
                  <p className="text-sm text-gray-600 mb-6">
                    The redesign improves visual clarity and scanability compared to the original layout.
                  </p>
                  
                  <div className="relative w-full overflow-hidden mb-3">
                    <img
                      src="/Tripadvisor_Outcome_01.jpg"
                      alt="Tripadvisor App Store redesign outcome"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{appName}</h3>
                
                {/* TODO: Add title field to Section interface */}
                {/* <p className="text-gray-600 mb-6">{section.title}</p> */}
                
                {/* TODO: Add brief/description field to Section interface */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Overview</h4>
                  <p className="text-sm text-gray-600">
                    {/* TODO: Replace with section.brief or section.description */}
                    Project details coming soon.
                  </p>
                </div>

                {/* TODO: Add role field to Section interface */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Role</h4>
                  <p className="text-sm text-gray-600">
                    {/* TODO: Replace with section.role */}
                    Design & Development
                  </p>
                </div>

                {/* TODO: Add tools field to Section interface */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Tools</h4>
                  <p className="text-sm text-gray-600">
                    {/* TODO: Replace with section.tools */}
                    Figma, React, Next.js
                  </p>
                </div>

                {/* TODO: Add results field to Section interface */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Results</h4>
                  <p className="text-sm text-gray-600">
                    {/* TODO: Replace with section.results */}
                    Results metrics coming soon.
                  </p>
                </div>

                {/* TODO: Add timeline field to Section interface */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Timeline</h4>
                  <p className="text-sm text-gray-600">
                    {/* TODO: Replace with section.timeline */}
                    Timeline information coming soon.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
