export function analyzeSeo(post: {
  title: string;
  slug: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
  focusKeyword: string;
  featuredImage?: string;
}) {
  const validation = {
    keywordInTitle: post.title.toLowerCase().includes(post.focusKeyword.toLowerCase()),
    keywordInSlug: post.slug.includes(post.focusKeyword.toLowerCase().replace(/\s+/g, '-')),
    keywordInMetaDescription: post.seoDescription.toLowerCase().includes(post.focusKeyword.toLowerCase()),
    keywordDensity: calculateKeywordDensity(post.content, post.focusKeyword),
    keywordInFirstParagraph: getFirstParagraph(post.content).toLowerCase().includes(post.focusKeyword.toLowerCase()),
    keywordInHeadings: checkKeywordInHeadings(post.content, post.focusKeyword),
    contentLength: post.content.split(/\s+/).length >= 300,
    readabilityScore: calculateReadabilityScore(post.content),
    hasImage: !!post.featuredImage,
    imageAltTags: checkImageAltTags(post.content, post.focusKeyword)
  };

  return {
    validation,
    suggestions: generateSuggestions(validation),
    score: calculateOverallScore(validation)
  };
}

function calculateKeywordDensity(content: string, keyword: string): boolean {
  const words = content.toLowerCase().split(/\s+/);
  const keywordCount = content.toLowerCase().split(keyword.toLowerCase()).length - 1;
  const density = (keywordCount / words.length) * 100;
  return density >= 0.5 && density <= 2.5;
}

function getFirstParagraph(content: string): string {
  const match = content.match(/<p>(.*?)<\/p>/);
  return match ? match[1] : '';
}

function checkKeywordInHeadings(content: string, keyword: string): boolean {
  const headings = content.match(/<h[23][^>]*>(.*?)<\/h[23]>/g) || [];
  return headings.some(heading => 
    heading.toLowerCase().includes(keyword.toLowerCase())
  );
}

function calculateReadabilityScore(content: string): number {
  // Simplified Flesch Reading Ease calculation
  const words = content.split(/\s+/).length;
  const sentences = content.split(/[.!?]+/).length;
  const syllables = countSyllables(content);
  
  const score = 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
  return Math.min(Math.max(Math.round(score), 0), 100);
}

function countSyllables(text: string): number {
  return text.toLowerCase()
    .replace(/[^a-z]/g, '')
    .replace(/[^aeiouy]+/g, ' ')
    .trim()
    .split(' ')
    .length;
}

function checkImageAltTags(content: string, keyword: string): boolean {
  const imgTags = content.match(/<img[^>]+alt=["']([^"']+)["'][^>]*>/g) || [];
  return imgTags.some(img => {
    const alt = img.match(/alt=["']([^"']+)["']/)?.[1] || '';
    return alt.toLowerCase().includes(keyword.toLowerCase());
  });
}

function generateSuggestions(validation: Record<string, boolean | number>): string[] {
  const suggestions: string[] = [];
  
  if (!validation.keywordInTitle) {
    suggestions.push('Adicione a palavra-chave ao início do título');
  }
  if (!validation.keywordInSlug) {
    suggestions.push('Inclua a palavra-chave no slug do post');
  }
  if (!validation.keywordInMetaDescription) {
    suggestions.push('Adicione a palavra-chave à meta descrição');
  }
  if (!validation.keywordDensity) {
    suggestions.push('Ajuste a densidade da palavra-chave para entre 0.5% e 2.5%');
  }
  if (!validation.keywordInFirstParagraph) {
    suggestions.push('Inclua a palavra-chave no primeiro parágrafo');
  }
  if (!validation.keywordInHeadings) {
    suggestions.push('Use a palavra-chave em pelo menos um subtítulo (H2/H3)');
  }
  if (!validation.hasImage) {
    suggestions.push('Adicione uma imagem em destaque ao post');
  }
  if (!validation.imageAltTags) {
    suggestions.push('Otimize as alt tags das imagens com a palavra-chave');
  }

  return suggestions;
}

function calculateOverallScore(validation: Record<string, boolean | number>): number {
  const weights = {
    keywordInTitle: 1.5,
    keywordInSlug: 1,
    keywordInMetaDescription: 1.2,
    keywordDensity: 1.3,
    keywordInFirstParagraph: 1.2,
    keywordInHeadings: 1.1,
    contentLength: 1,
    hasImage: 0.8,
    imageAltTags: 0.9
  };

  let totalScore = 0;
  let totalWeight = 0;

  Object.entries(weights).forEach(([key, weight]) => {
    if (key in validation) {
      totalWeight += weight;
      if (typeof validation[key] === 'boolean') {
        totalScore += validation[key] ? weight : 0;
      } else if (key === 'readabilityScore') {
        totalScore += (validation[key] as number / 100) * weight;
      }
    }
  });

  return Math.round((totalScore / totalWeight) * 100);
}