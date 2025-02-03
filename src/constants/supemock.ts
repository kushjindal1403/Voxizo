// Mock Supabase client (temporary solution)
const mockSupabaseData = [
    { id: 1, question: 'What is the cell theory?', answer: 'All living organisms are made of cells.' },
    { id: 2, question: 'What is photosynthesis?', answer: 'The process by which plants convert sunlight into energy.' }
  ];
  
  // Simulate fetching data
  export async function getFlashcards() {
    return mockSupabaseData;
  }
  