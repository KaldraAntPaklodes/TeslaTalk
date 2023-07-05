import stringSimilarity from 'string-similarity';

export const searchSimilarTopics = (topics, query) => {
    const normalizedQuery = query.toLowerCase();
    
    return topics.filter((topic) => {
      const storedTopic = topic.topic.toLowerCase();
      const similarity = stringSimilarity.compareTwoStrings(storedTopic, normalizedQuery);
      const threshold = 0.7; // Adjust this threshold as needed
  
      return similarity >= threshold;
    });
  };