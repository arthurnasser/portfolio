import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Sobre from './components/Sobre';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ProtectedRoute from './components/ProtectedRoute';
import TestSupabase from './components/TestSupabase'; // Importando o componente de teste

// Main Pages
import Home from './pages/Home';
import AdsPage from './pages/AdsPage';
import CrmPage from './pages/CrmPage';
import LeadManagement from './pages/LeadManagement';
import WebsitesPage from './pages/WebsitesPage';
import BlogContentPage from './pages/BlogContentPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import SeoPage from './pages/SeoPage';
import ConsultingPage from './pages/ConsultingPage';
import FAQPage from './pages/FAQPage';
import CasesPage from './pages/CasesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import SocialMediaManagement from './pages/SocialMediaManagement';

// Data Analysis Pages
import CustomAnalysisPage from './pages/data/CustomAnalysisPage';
import InteractiveDashboardsPage from './pages/data/InteractiveDashboardsPage';
import DataIntelligencePage from './pages/data/DataIntelligencePage';
import ReportAutomationPage from './pages/data/ReportAutomationPage';
import BiConsultingPage from './pages/data/BiConsultingPage';
import DataToolsPage from './pages/data/DataToolsPage';

// Admin Pages
import BlogDashboard from './pages/admin/BlogDashboard';
import BlogEditor from './pages/admin/BlogEditor';
import LoginPage from './pages/admin/LoginPage';

// Legal Pages
import PrivacyPage from './pages/legal/PrivacyPage';
import TermsPage from './pages/legal/TermsPage';
import SitemapPage from './pages/legal/SitemapPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/ads" element={<AdsPage />} />
            <Route path="/crm" element={<CrmPage />} />
            <Route path="/lead-management" element={<LeadManagement />} />
            <Route path="/websites" element={<WebsitesPage />} />
            <Route path="/blog-content" element={<BlogContentPage />} />
            <Route path="/seo" element={<SeoPage />} />
            <Route path="/consulting" element={<ConsultingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/sobre" element={<Sobre />} /> {/* Added route for Sobre */}
            <Route path="/social-media-management" element={<SocialMediaManagement />} />

            {/* Data Analysis Routes */}
            <Route path="/custom-analysis" element={<CustomAnalysisPage />} />
            <Route path="/interactive-dashboards" element={<InteractiveDashboardsPage />} />
            <Route path="/data-intelligence" element={<DataIntelligencePage />} />
            <Route path="/report-automation" element={<ReportAutomationPage />} />
            <Route path="/bi-consulting" element={<BiConsultingPage />} />
            <Route path="/data-tools" element={<DataToolsPage />} />
            
            {/* Legal Routes */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route 
              path="/admin/blog" 
              element={
                <ProtectedRoute>
                  <BlogDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/blog/new" 
              element={
                <ProtectedRoute>
                  <BlogEditor />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/blog/edit/:id" 
              element={
                <ProtectedRoute>
                  <BlogEditor />
                </ProtectedRoute>
              } 
            />

            {/* Test Supabase Connection */}
            <Route path="/test-supabase" element={<TestSupabase />} /> {/* Rota para testar a conexão com o Supabase */}
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;