import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import slugify from 'slugify';
import ReactMarkdown from 'react-markdown';
import type { BlogPost, SeoValidation } from '../../types/blog';

export default function BlogAdmin() {
  const [seoValidation, setSeoValidation] = useState<SeoValidation>({
    titleLength: true,
    descriptionLength: true,
    keywordsCount: true,
    contentLength: true,
    keywordDensity: true,
    hasImage: true,
    readabilityScore: 0
  });

  const [previewMode, setPreviewMode] = useState(false);
  const { register, handleSubmit, watch, setValue } = useForm<BlogPost>();
  const content = watch('content');

  const validateSeo = (data: BlogPost) => {
    const validation: SeoValidation = {
      titleLength: data.seoTitle.length >= 30 && data.seoTitle.length <= 60,
      descriptionLength: data.seoDescription.length >= 120 && data.seoDescription.length <= 160,
      keywordsCount: data.keywords.length >= 3 && data.keywords.length <= 8,
      contentLength: data.content.length >= 300,
      keywordDensity: true,
      hasImage: data.featuredImage !== '',
      readabilityScore: 0
    };

    setSeoValidation(validation);
    return Object.values(validation).every(v => v === true || typeof v === 'number');
  };

  const onSubmit = (data: BlogPost) => {
    if (!validateSeo(data)) {
      toast.error('Por favor, corrija os problemas de SEO antes de publicar.');
      return;
    }

    console.log('Post saved:', data);
    toast.success('Post salvo com sucesso!');
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
          Editor de Blog
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Informações Básicas</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Título
                </label>
                <input
                  type="text"
                  {...register('title')}
                  onChange={(e) => {
                    setValue('title', e.target.value);
                    setValue('slug', slugify(e.target.value, { lower: true }));
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slug
                </label>
                <input
                  type="text"
                  {...register('slug')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Conteúdo</h2>
              <button
                type="button"
                onClick={() => setPreviewMode(!previewMode)}
                className="text-sm text-purple-600 hover:text-orange-500"
              >
                {previewMode ? 'Editar' : 'Visualizar'}
              </button>
            </div>
            
            {previewMode ? (
              <div className="prose max-w-none p-4 border rounded-lg bg-gray-50">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            ) : (
              <textarea
                {...register('content')}
                rows={20}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-mono"
                placeholder="Use markdown para formatar seu texto..."
              />
            )}
            
            <div className="mt-2 text-sm text-gray-600">
              Suporte a Markdown: **negrito**, *itálico*, # título, - lista, [link](url)
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">SEO</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Título SEO
                  <span className={`ml-2 text-sm ${seoValidation.titleLength ? 'text-green-500' : 'text-red-500'}`}>
                    {watch('seoTitle')?.length || 0}/60
                  </span>
                </label>
                <input
                  type="text"
                  {...register('seoTitle')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Descrição
                  <span className={`ml-2 text-sm ${seoValidation.descriptionLength ? 'text-green-500' : 'text-red-500'}`}>
                    {watch('seoDescription')?.length || 0}/160
                  </span>
                </label>
                <textarea
                  {...register('seoDescription')}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Palavras-chave (separadas por vírgula)
                </label>
                <input
                  type="text"
                  {...register('keywords')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Salvar Rascunho
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg hover:opacity-90"
            >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}