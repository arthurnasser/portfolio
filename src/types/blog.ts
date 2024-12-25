export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  seoTitle: string;
  seoDescription: string;
  focusKeyword: string;
  keywords: string[];
  author: string;
  publishDate: string;
  modifiedDate: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
}

export interface SeoValidation {
  keywordInTitle: boolean;
  keywordInSlug: boolean;
  keywordInMetaDescription: boolean;
  keywordDensity: boolean;
  keywordInFirstParagraph: boolean;
  keywordInHeadings: boolean;
  contentLength: boolean;
  readabilityScore: number;
  hasImage: boolean;
  imageAltTags: boolean;
}

export interface SeoAnalysisResult {
  validation: SeoValidation;
  suggestions: string[];
  score: number;
}