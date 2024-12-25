import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import slugify from 'slugify';
import { Monitor, Smartphone, Code, Eye, Layout } from 'lucide-react';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { analyzeSeo } from '../../utils/seoAnalyzer';
import SeoAnalysis from '../../components/SeoAnalysis';
import type { BlogPost } from '../../types/blog';

const defaultValues: Partial<BlogPost> = {
  status: 'draft',
  publishDate: new Date().toISOString().split('T')[0],
  author: 'Admin',
  content: '',
  tags: [],
  keywords: [],
  seoTitle: '',
  seoDescription: '',
  focusKeyword: '',
  slug: '',
  title: '',
  featuredImage: '',
  category: '',
  excerpt: ''
};

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { createPost, updatePost, posts } = useBlogPosts();
  const [seoAnalysis, setSeoAnalysis] = useState(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [editorMode, setEditorMode] = useState<'design' | 'code' | 'preview'>('design');
  const [designContent, setDesignContent] = useState('');

  const { register, handleSubmit, watch, setValue, getValues, reset } = useForm<BlogPost>({
    defaultValues
  });

  const content = watch('content');

  useEffect(() => {
    if (id) {
      const post = posts.find(p => p.id === id);
      if (post) {
        reset(post);
        setDesignContent(post.content.replace(/<p>/g, '').replace(/<\/p>/g, '\n\n').replace(/<br>/g, '\n'));
      }
    }
  }, [id, posts, reset]);

  useEffect(() => {
    const values = getValues();
    const analysis = analyzeSeo({
      title: values.title || '',
      slug: values.slug || '',
      content: values.content || '',
      seoTitle: values.seoTitle || '',
      seoDescription: values.seoDescription || '',
      focusKeyword: values.focusKeyword || '',
      featuredImage: values.featuredImage
    });
    setSeoAnalysis(analysis);
  }, [content, watch('focusKeyword'), watch('title'), watch('seoTitle'), watch('seoDescription'), getValues]);

  const convertDesignToHtml = (text: string) => {
    return text
      .split('\n\n')
      .map(paragraph => paragraph.trim())
      .filter(paragraph => paragraph)
      .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
      .join('\n');
  };

  useEffect(() => {
    if (editorMode === 'design') {
      const htmlContent = convertDesignToHtml(designContent);
      setValue('content', htmlContent);
    }
  }, [designContent, editorMode, setValue]);

  const onSubmit = async (data: BlogPost) => {
    try {
      const postData = {
        ...data,
        excerpt: data.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...',
        tags: Array.isArray(data.tags) ? data.tags : data.tags?.split(',').map(tag => tag.trim()) || [],
        keywords: Array.isArray(data.keywords) ? data.keywords : data.keywords?.split(',').map(keyword => keyword.trim()) || []
      };

      if (id) {
        await updatePost(id, postData);
        toast.success('Post atualizado com sucesso!');
      } else {
        await createPost(postData);
        toast.success('Post criado com sucesso!');
      }
      navigate('/admin/blog');
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Erro ao salvar post');
    }
  };

  const saveAsDraft = async () => {
    const data = getValues();
    const postData = {
      ...data,
      status: 'draft',
      excerpt: data.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...',
      tags: Array.isArray(data.tags) ? data.tags : data.tags?.split(',').map(tag => tag.trim()) || [],
      keywords: Array.isArray(data.keywords) ? data.keywords : data.keywords?.split(',').map(keyword => keyword.trim()) || []
    };

    try {
      if (id) {
        await updatePost(id, postData);
      } else {
        await createPost(postData);
      }
      toast.success('Rascunho salvo com sucesso!');
      navigate('/admin/blog');
    } catch (error) {
      console.error('Error saving draft:', error);
      toast.error('Erro ao salvar rascunho');
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
          {id ? 'Editar Post' : 'Novo Post'}
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
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
                      if (!watch('seoTitle')) {
                        setValue('seoTitle', e.target.value);
                      }
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Palavra-chave foco
                  </label>
                  <input
                    type="text"
                    {...register('focusKeyword')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Conteúdo
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="flex rounded-lg overflow-hidden border border-gray-300">
                        <button
                          type="button"
                          onClick={() => setEditorMode('design')}
                          className={`px-4 py-2 text-sm font-medium flex items-center gap-2 ${
                            editorMode === 'design'
                              ? 'bg-purple-600 text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Layout className="w-4 h-4" />
                          Design
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditorMode('code')}
                          className={`px-4 py-2 text-sm font-medium flex items-center gap-2 ${
                            editorMode === 'code'
                              ? 'bg-purple-600 text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Code className="w-4 h-4" />
                          HTML
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditorMode('preview')}
                          className={`px-4 py-2 text-sm font-medium flex items-center gap-2 ${
                            editorMode === 'preview'
                              ? 'bg-purple-600 text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Eye className="w-4 h-4" />
                          Preview
                        </button>
                      </div>
                      <div className="flex rounded-lg overflow-hidden border border-gray-300">
                        <button
                          type="button"
                          onClick={() => setViewMode('desktop')}
                          className={`p-2 ${
                            viewMode === 'desktop'
                              ? 'bg-purple-600 text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                          title="Visualização Desktop"
                        >
                          <Monitor className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setViewMode('mobile')}
                          className={`p-2 ${
                            viewMode === 'mobile'
                              ? 'bg-purple-600 text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                          title="Visualização Mobile"
                        >
                          <Smartphone className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={`grid ${editorMode === 'preview' ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                    {editorMode === 'design' && (
                      <div className="col-span-2">
                        <textarea
                          value={designContent}
                          onChange={(e) => setDesignContent(e.target.value)}
                          rows={30}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base"
                          placeholder="Digite seu texto aqui... Use Enter duas vezes para criar um novo parágrafo."
                        />
                      </div>
                    )}
                    
                    {editorMode === 'code' && (
                      <div className="col-span-2">
                        <textarea
                          {...register('content')}
                          rows={30}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-mono text-sm"
                          placeholder="Digite seu código HTML aqui..."
                        />
                      </div>
                    )}

                    {editorMode === 'preview' && (
                      <div 
                        className={`col-span-2 bg-white rounded-lg shadow p-6 ${
                          viewMode === 'mobile' ? 'max-w-sm mx-auto' : ''
                        }`}
                      >
                        <div 
                          className="prose max-w-none"
                          dangerouslySetInnerHTML={{ __html: content }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">SEO</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Título SEO
                      </label>
                      <input
                        type="text"
                        {...register('seoTitle')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Meta descrição
                      </label>
                      <textarea
                        {...register('seoDescription')}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tags (separadas por vírgula)
                      </label>
                      <input
                        type="text"
                        {...register('tags')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Keywords (separadas por vírgula)
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
                    onClick={() => navigate('/admin/blog')}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={saveAsDraft}
                    className="px-6 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50"
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
              </div>
            </form>
          </div>

          <div className="space-y-6">
            {seoAnalysis && (
              <SeoAnalysis 
                validation={seoAnalysis.validation}
                focusKeyword={watch('focusKeyword')}
                score={seoAnalysis.score}
                suggestions={seoAnalysis.suggestions}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}