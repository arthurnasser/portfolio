import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useBlogPosts } from '../hooks/useBlogPosts';

export default function BlogPostPage() {
  const { slug } = useParams();
  const { posts, loading, error } = useBlogPosts();
  const post = posts.find(p => p.slug === slug);

  if (loading) return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center text-red-500">
          <p>Erro ao carregar o post: {error}</p>
        </div>
      </div>
    </div>
  );

  if (!post) return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
          <Link 
            to="/blog"
            className="inline-flex items-center text-orange-500 hover:text-purple-600 transition-colors gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para o Blog
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-16">
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Back to Blog Link */}
        <Link 
          to="/blog"
          className="inline-flex items-center text-orange-500 hover:text-purple-600 transition-colors gap-2 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para o Blog
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{format(new Date(post.publishDate), 'dd MMM yyyy', { locale: ptBR })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            {post.category && (
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                <span>{post.category}</span>
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-2xl mb-12"
          />
        )}

        {/* Post Content */}
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={`${tag}-${index}`}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}