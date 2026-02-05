import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import ManufacturingPage from "./pages/ManufacturingPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminLayout from "./components/admin/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import ProductsManagementPage from "./pages/admin/ProductsManagementPage";
import InquiriesPage from "./pages/admin/InquiriesPage";
import ContentManagementPage from "./pages/admin/ContentManagementPage";
import GalleryManagementPage from "./pages/admin/GalleryManagementPage";
import UsersManagementPage from "./pages/admin/UsersManagementPage";
import SettingsPage from "./pages/admin/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Website */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
          <Route path="/why-choose-us" element={<Layout><WhyChooseUsPage /></Layout>} />
          <Route path="/manufacturing" element={<Layout><ManufacturingPage /></Layout>} />
          <Route path="/applications" element={<Layout><ApplicationsPage /></Layout>} />
          <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          
          {/* Admin Panel */}
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="products" element={<ProductsManagementPage />} />
            <Route path="gallery" element={<GalleryManagementPage />} />
            <Route path="content" element={<ContentManagementPage />} />
            <Route path="inquiries" element={<InquiriesPage />} />
            <Route path="users" element={<UsersManagementPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
