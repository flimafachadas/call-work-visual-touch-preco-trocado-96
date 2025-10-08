import { memo } from "react";
import { X } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useImageGallery } from "@/hooks/useImageGallery";
import { ImageAsset } from "@/types/global";

const GallerySection = memo(() => {

  const ambienteImages: ImageAsset[] = [
    {
      src: "/lovable-uploads/e7175f7d-5648-4940-9d89-604e0d769eef.png",
      alt: "Corredor interno moderno e bem iluminado"
    },
    {
      src: "/lovable-uploads/01bbe281-f361-4db5-ae6f-f757b6afee9d.png",
      alt: "Copa / cozinha de apoio completa"
    },
    {
      src: "https://cloud-1de12d.b-cdn.net/media/iW=540&iH=360&oX=29&oY=0&cW=483&cH=360/3957d6e590bfcfba7f41f657d4252b11/image.jpg",
      alt: "Hall de circulação"
    }
  ];

  const mainImages: ImageAsset[] = [
    {
      id: 1,
      src: "/lovable-uploads/IMG_7821-2.jpeg",
      alt: "Salas de reunião equipadas e confortáveis"
    },
    {
      id: 2,
      src: "/lovable-uploads/973ae7de-591a-4fde-9220-125a19cd2504.png",
      alt: "Recepção Israel Coworking com branding moderno"
    },
    {
      id: 3,
      src: "/lovable-uploads/0574a065-3c48-4f98-96a1-ddb5b2276cb1.png",
      alt: "Espaço exclusivo para trabalhar com foco e tranquilidade"
    },
    {
      id: 4,
      src: "/lovable-uploads/c2e56701-403c-43a6-91c9-de880db80e86.png",
      alt: "Recepção atenciosa para receber seu cliente com profissionalismo"
    },
    {
      id: 5,
      src: "/lovable-uploads/04cca21c-5b1e-497f-b3eb-5b79fb8a870f.png",
      alt: "Sala privativa com mesa de vidro e decoração moderna"
    },
    {
      id: 6,
      src: "/lovable-uploads/9853646a-8092-4529-a4dd-9f699fad0e01.png",
      alt: "Recepção moderna com atendimento personalizado"
    },
    {
      id: 7,
      src: "/lovable-uploads/IMG_7818-2.jpeg",
      alt: "Banheiros modernos e limpos"
    },
    {
      id: 8,
      src: "/lovable-uploads/IMG_7817-2.jpeg",
      alt: "Sala privativa com parede marmorizada e mesa em madeira"
    },
    {
      id: 9,
      src: "/lovable-uploads/IMG_7825-2.jpeg",
      alt: "Área externa com jardim e espaço de descanso"
    }
  ];

  // Use the optimized gallery hook
  const allImages = [...mainImages, ...ambienteImages];
  const { selectedImage, openImage, closeImage, getImageStatus } = useImageGallery(allImages, { 
    preloadAll: true 
  });

  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-brand-green">Conheça Nossos</span>{" "}
            <span className="text-brand-red">Ambientes</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed px-4">
            Espaços modernos e completos para sua produtividade
          </p>
        </div>

        <div className="space-y-8">
          {/* Novas Imagens Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-6">Nossos Espaços</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {mainImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer hover-lift"
                  onClick={() => openImage(image.src)}
                >
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    progressive={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    skeleton={
                      <div className="w-full h-48 md:h-64 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-xl" />
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 md:bottom-6 left-2 md:left-4 right-2 md:right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold text-sm md:text-lg leading-tight">{image.alt}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ambientes Adicionais */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-6">Ambientes Internos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {ambienteImages.map((image, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer hover-lift"
                  onClick={() => openImage(image.src)}
                >
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    progressive={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    skeleton={
                      <div className="w-full h-48 md:h-64 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-xl" />
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 md:bottom-6 left-2 md:left-4 right-2 md:right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold text-sm md:text-lg leading-tight">{image.alt}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal for selected image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeImage}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeImage();
                }}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10 shadow-lg"
                aria-label="Fechar imagem"
              >
                <X className="h-4 w-4 md:h-6 md:w-6 text-brand-dark" />
              </button>
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-xl md:rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

GallerySection.displayName = "GallerySection";

export default GallerySection;
