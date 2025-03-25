// Order of categories from basic to advanced
export const CATEGORY_ORDER = [
  'Základní koncepty',
  'Pokročilé koncepty',
  'Statistické testy',
  'Analýza dat',
  'APSTA přednášky',
  'Praktické příklady'
];

// Maps from the category to its order (index) in the roadmap
export const getCategoryOrder = (category: string): number => {
  const index = CATEGORY_ORDER.indexOf(category);
  return index !== -1 ? index : CATEGORY_ORDER.length; // Put unknown categories at the end
};

// Function to sort categories in order
export const sortCategories = (categories: string[]): string[] => {
  return [...categories].sort((a, b) => getCategoryOrder(a) - getCategoryOrder(b));
}; 