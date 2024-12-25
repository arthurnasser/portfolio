import React from 'react';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';
import type { SeoValidation } from '../types/blog';

interface SeoAnalysisProps {
  validation: SeoValidation;
  focusKeyword: string;
  score: number;
  suggestions: string[];
}

export default function SeoAnalysis({ validation, focusKeyword, score, suggestions }: SeoAnalysisProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

  const getIcon = (status: boolean) => {
    return status ? 
      <CheckCircle2 className="w-5 h-5 text-green-500" /> : 
      <XCircle className="w-5 h-5 text-red-500" />;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Análise SEO</h3>
        <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
          {score}/100
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Palavra-chave foco: "{focusKeyword}"</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              {getIcon(validation.keywordInTitle)}
              <div>
                <p className="font-medium">Palavra-chave no título</p>
                <p className="text-sm text-gray-600">
                  {validation.keywordInTitle ? 
                    'A palavra-chave aparece no início do título. Ótimo!' : 
                    'A palavra-chave deve aparecer no início do título.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              {getIcon(validation.keywordInSlug)}
              <div>
                <p className="font-medium">Palavra-chave no slug</p>
                <p className="text-sm text-gray-600">
                  {validation.keywordInSlug ? 
                    'A palavra-chave aparece no slug. Ótimo!' : 
                    'A palavra-chave deve aparecer no slug.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              {getIcon(validation.keywordInMetaDescription)}
              <div>
                <p className="font-medium">Palavra-chave na meta descrição</p>
                <p className="text-sm text-gray-600">
                  {validation.keywordInMetaDescription ? 
                    'A palavra-chave aparece na meta descrição. Ótimo!' : 
                    'A palavra-chave deve aparecer na meta descrição.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              {getIcon(validation.keywordDensity)}
              <div>
                <p className="font-medium">Densidade da palavra-chave</p>
                <p className="text-sm text-gray-600">
                  {validation.keywordDensity ? 
                    'A densidade da palavra-chave está ótima!' : 
                    'A palavra-chave deve aparecer entre 0.5% e 2.5% do texto.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              {getIcon(validation.keywordInFirstParagraph)}
              <div>
                <p className="font-medium">Palavra-chave na introdução</p>
                <p className="text-sm text-gray-600">
                  {validation.keywordInFirstParagraph ? 
                    'A palavra-chave aparece no primeiro parágrafo. Ótimo!' : 
                    'A palavra-chave deve aparecer no primeiro parágrafo.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              {getIcon(validation.keywordInHeadings)}
              <div>
                <p className="font-medium">Palavra-chave nos subtítulos</p>
                <p className="text-sm text-gray-600">
                  {validation.keywordInHeadings ? 
                    'A palavra-chave aparece em subtítulos H2/H3. Ótimo!' : 
                    'A palavra-chave deve aparecer em pelo menos um subtítulo H2/H3.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {suggestions.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">Sugestões de Melhoria</h4>
            <ul className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}