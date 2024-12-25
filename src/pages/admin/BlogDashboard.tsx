import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Settings } from 'lucide-react';
import { toast } from 'react-hot-toast';
import BlogPostList from '../../components/BlogPostList';
import { useBlogPosts } from '../../hooks/useBlogPosts';

export default function BlogDashboard() {
  const { posts, loading, error, deletePost } = useBlogPosts();

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este post?')) {
      try {
        await deletePost(id);
        toast.success('Post excluído com sucesso!');
      } catch (error) {
        toast.error('Erro ao excluir post');
      }
    }
  };

  if (loading) return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando posts...</p>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center text-red-500">
          <p>Erro ao carregar posts: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
            Dashboard do Blog
          </h1>
          <div className="flex gap-4">
            <Link
              to="/admin/blog/new"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Plus className="w-5 h-5" />
              Novo Post
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="text-2xl font-bold text-orange-500">{posts.length}</p>
              <p className="text-gray-600">Posts Publicados</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold text-purple-600">
                {posts.filter(p => p.status === 'draft').length}
              </p>
              <p className="text-gray-600">Rascunhos</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold text-orange-500">
                {new Set(posts.flatMap(p => p.tags)).size}
              </p>
              <p className="text-gray-600">Tags Únicas</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold text-purple-600">
                {new Set(posts.map(p => p.category)).size}
              </p>
              <p className="text-gray-600">Categorias</p>
            </div>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Nenhum post encontrado</p>
            <Link
              to="/admin/blog/new"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Plus className="w-5 h-5" />
              Criar Primeiro Post
            </Link>
          </div>
        ) : (
          <BlogPostList posts={posts} onDelete={handleDelete} isAdmin />
        )}
      </div>
    </div>
  );
}