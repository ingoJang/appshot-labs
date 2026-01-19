'use client';

import Image from 'next/image';
import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Image Section */}
      <section className="w-full relative">
        <div className="w-full h-[150px] md:h-[230px] relative">
          <Image
            src="/about_head_02.jpg"
            alt="AppShot Labs - App Store Screenshot Design Studio"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-content mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 md:mb-8">
            About AppShot Labs
          </h1>
          
          <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              AppShot Labs is a design studio focused on App Store visuals and screenshot systems.
            </p>
            
            <p>
              An app store page is often the first real contact users have with a product.
              In just a few seconds, it needs to communicate value, clarity, and trust.
              We focus on what to show, what to remove, and how to guide attention within that moment.
            </p>
            
            <p>
              We don't rely on templates.
              Each app is approached individually, based on its purpose, audience, and competitive landscape.
            </p>
            
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
                What we commit to
              </h2>
              
              <ul className="space-y-4 md:space-y-5 list-none pl-0">
                <li>
                  <strong>Custom-designed visuals for each app</strong>
                  <br />
                  Every project is designed specifically for the app. No reused templates.
                </li>
                
                <li>
                  <strong>Fast and structured production</strong>
                  <br />
                  A clear workflow allows us to move quickly without sacrificing quality.
                </li>
                
                <li>
                  <strong>ASO-driven competitive analysis</strong>
                  <br />
                  Designs are informed by keyword-level research and competitor review to support visibility and conversion.
                </li>
                
                <li>
                  <strong>Optional localization for global apps</strong>
                  <br />
                  Language and nuance can be adapted for different markets as needed.
                </li>
                
                <li>
                  <strong>Editable source files</strong>
                  <br />
                  Delivered in Figma, with PSD originals included.
                  Simple text updates can be handled easily by anyone.
                </li>
                
                <li>
                  <strong>Store- and device-specific sizes</strong>
                  <br />
                  Optimized layouts for App Store, Google Play, iPad, and related formats.
                </li>
                
                <li>
                  <strong>A/B testing mindset for redesigns</strong>
                  <br />
                  Redesign decisions are made with comparison and performance in mind.
                </li>
              </ul>
            </div>
            
            <p>
              AppShot Labs designs screens that help apps get chosen, not just noticed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
