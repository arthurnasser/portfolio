import { useBlogPosts } from '../hooks/useBlogPosts';
import BlogPostList from '../components/BlogPostList';

export default function BlogPage() {
  const { posts, loading, error } = useBlogPosts();

  if (loading) return <div className="p-8 text-center">Carregando...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Conteúdos <span className="text-orange-300"> para Transformar </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Insights e estratégias para impulsionar seu negócio no mundo digital
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <BlogPostList 
          posts={posts.filter(post => post.status === 'published')} 
          onDelete={() => {}}
        />
      </div>
    </div>
  );
}