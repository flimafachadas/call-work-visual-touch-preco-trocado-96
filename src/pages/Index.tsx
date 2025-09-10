
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import PricingSection from "@/components/PricingSection";
// ... keep existing code
// ... keep existing code
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ImageLoadingProgress } from "@/components/ui/image-loading-progress";
import { memo, Suspense, lazy, useState } from "react";
import ErrorBoundary from "@/components/ui/error-boundary";
import { Skeleton } from "@/components/ui/loading-skeleton";

// Lazy load non-critical sections
const GallerySection = lazy(() => import("@/components/GallerySection"));
const TrustSection = lazy(() => import("@/components/TrustSection"));
const CommentsSection = lazy(() => import("@/components/CommentsSection"));
const RatingsSection = lazy(() => import("@/components/RatingsSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));

const LoadingFallback = () => (
  <div className="py-24">
    <div className="container mx-auto px-6">
      <Skeleton variant="card" className="mb-8" />
      <Skeleton lines={3} />
    </div>
  </div>
);

const Index = memo(() => {
  const [imageLoadingComplete, setImageLoadingComplete] = useState(false);

  // Lista das imagens mais críticas para mostrar progresso
  const criticalImages = [
    '/lovable-uploads/d94e1b20-0b59-4780-b234-09c04cff5b01.png', // Logo
    '/lovable-uploads/d91d5080-a3c7-4e3e-bdc6-d716b0e083e8.png', // Hero desktop 1
    '/lovable-uploads/842688d4-d152-455f-8cee-7621fd74bbd4.png', // Hero desktop 2
    '/lovable-uploads/a8a6fecb-b546-44a0-994f-4cb7740621b7.png', // Hero desktop 3
    '/lovable-uploads/95c45394-1c48-4339-b422-e34278df3023.png', // Hero mobile 1
    '/lovable-uploads/985427a7-7474-4478-9b2e-3756604c3d1a.png', // Hero mobile 2
    '/lovable-uploads/75962962-3ffc-4cb2-96da-2ad93a5354b5.png', // Hero mobile 3
    '/lovable-uploads/16cfd104-336c-4121-9a65-c19125385b93.png', // About
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <ImageLoadingProgress 
          images={criticalImages}
          showPercentage={false}
          hideWhenComplete={true}
          onComplete={() => setImageLoadingComplete(true)}
        />
        
        <Header />
        <main role="main" className={`transition-all duration-500 ${imageLoadingComplete ? 'pt-20 lg:pt-24' : 'pt-28 lg:pt-32'}`}>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <FacilitiesSection />
          <PricingSection />
          
          <Suspense fallback={<LoadingFallback />}>
            <GallerySection />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <TrustSection />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <RatingsSection />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <CommentsSection />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <PartnersSection />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <BlogSection />
          </Suspense>
          
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </ErrorBoundary>
  );
});

Index.displayName = "Index";

export default Index;
