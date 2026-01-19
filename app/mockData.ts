// Fixed category type - exactly 5 categories, no others allowed
export type Category = 'Web3' | 'AI' | 'Productivity' | 'Fintech' | 'Travel';

// Fixed category list in exact order
export const CATEGORIES: Category[] = ['Fintech', 'Web3', 'AI', 'Productivity', 'Travel'];

export interface ScreenshotItem {
  id: string;
  name: string;
  imageUrl: string;
  category: Category;
}

export interface Section {
  id: string;
  title: string;
  icon?: string;
  items: ScreenshotItem[];
  showViewAll?: boolean;
  count?: number;
  detailHeroImage?: string;
}

// Generate SVG placeholder URL
const generatePlaceholder = (seed: string, color: string): string => {
  const svg = `<svg width="375" height="812" xmlns="http://www.w3.org/2000/svg">
    <rect width="375" height="812" fill="${color}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${seed}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const colors = [
  '#1a1a1a', '#2d5a27', '#1e3a8a', '#7c2d12', '#581c87',
];

// MetaMask screenshots in exact order
const METAMASK_IMAGES = [
  '/Metamask_1.jpg',
  '/Metamask_2.jpg',
  '/Metamask_3.jpg',
  '/Metamask_5.jpg',
  '/Metamask_6.jpg',
  '/Metamask_7.jpg',
  '/Metamask_8.jpg',
  '/Metamask_4.jpg',
];

// ChatGPT screenshots in exact order
const CHATGPT_IMAGES = [
  '/Chatgpt_1.jpg',
  '/Chatgpt_2.jpg',
  '/Chatgpt_3.jpg',
  '/Chatgpt_4.jpg',
  '/Chatgpt_5.jpg',
  '/Chatgpt_6.jpg',
  '/Chatgpt_7.jpg',
];

// Obsidian screenshots in exact order
const OBSIDIAN_IMAGES = [
  '/Obsidian_1.jpg',
  '/Obsidian_2.jpg',
  '/Obsidian_3.jpg',
  '/Obsidian_4.jpg',
  '/Obsidian_5.jpg',
];

// Revolut screenshots in exact order
const REVOLUT_IMAGES = [
  '/Revolut_1.jpg',
  '/Revolut_2.jpg',
  '/Revolut_3.jpg',
  '/Revolut_4.jpg',
  '/Revolut_5.jpg',
  '/Revolut_6.jpg',
  '/Revolut_7.jpg',
  '/Revolut_8.jpg',
  '/Revolut_9.jpg',
];

// Tripadvisor screenshots in exact order
const TRIPADVISOR_IMAGES = [
  '/Tripadvisor_1.jpg',
  '/Tripadvisor_2.jpg',
  '/Tripadvisor_3.jpg',
  '/Tripadvisor_4.jpg',
  '/Tripadvisor_5.jpg',
  '/Tripadvisor_6.jpg',
];

const generateItems = (category: Category, count: number): ScreenshotItem[] => {
  return Array.from({ length: count }, (_, i) => {
    const seed = `${category}-${i}`;
    const colorIndex = CATEGORIES.indexOf(category) % colors.length;
    
    // For Web3 category, use MetaMask screenshots in exact order
    // For AI category, use ChatGPT screenshots in exact order
    // For Productivity category, use Obsidian screenshots in exact order
    // For Fintech category, use Revolut screenshots in exact order
    // For Travel category, use Tripadvisor screenshots in exact order
    let imageUrl: string;
    if (category === 'Web3') {
      imageUrl = METAMASK_IMAGES[i] || METAMASK_IMAGES[0];
    } else if (category === 'AI') {
      imageUrl = CHATGPT_IMAGES[i] || CHATGPT_IMAGES[0];
    } else if (category === 'Productivity') {
      imageUrl = OBSIDIAN_IMAGES[i] || OBSIDIAN_IMAGES[0];
    } else if (category === 'Fintech') {
      imageUrl = REVOLUT_IMAGES[i] || REVOLUT_IMAGES[0];
    } else if (category === 'Travel') {
      imageUrl = TRIPADVISOR_IMAGES[i] || TRIPADVISOR_IMAGES[0];
    } else {
      imageUrl = generatePlaceholder(seed, colors[colorIndex]);
    }
    
    return {
      id: seed,
      name: `${category} App ${i + 1}`,
      imageUrl,
      category,
    };
  });
};

// Generate sections for exactly the 5 categories in order
export const mockSections: Section[] = CATEGORIES.map((category, index) => {
  const sectionId = category.toLowerCase().replace(/\s+/g, '-');
  const itemCount = category === 'Web3' ? 8 : category === 'AI' ? 7 : category === 'Productivity' ? 5 : category === 'Fintech' ? 9 : 6;
  // Use deterministic count based on category index to avoid hydration errors
  const totalCount = itemCount + (index * 2) + 5;
  
  // Add detailHeroImage for all showcase apps
  const detailHeroImage = 
    category === 'Fintech' ? '/Revolut_Appshot_01.jpg' : 
    category === 'Web3' ? '/Metamask_Appshot_01.jpg' :
    category === 'Productivity' ? '/Obsidian_Appshot_01.jpg' :
    category === 'AI' ? '/Chatgpt_Appshot_01.jpg' :
    category === 'Travel' ? '/Tripadvisor_Appshot_01.jpg' :
    undefined;
  
  return {
    id: sectionId,
    title: category,
    items: generateItems(category, itemCount),
    showViewAll: true,
    count: totalCount,
    detailHeroImage,
  };
});

// Export for backward compatibility (but it's now the fixed list)
export const allCategories = CATEGORIES;
