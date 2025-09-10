import { ImageAsset } from "@/types/global";

export const MAIN_GALLERY_IMAGES: ImageAsset[] = [
  {
    id: 1,
    src: "/lovable-uploads/da606267-0c00-4a79-8ad8-62ff47fc5557.png",
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
    src: "/lovable-uploads/f063501a-6102-4bd6-998b-8b3e19fcfcf6.png",
    alt: "Banheiros modernos e limpos"
  }
] as const;

export const AMBIENTE_GALLERY_IMAGES: ImageAsset[] = [
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
] as const;

// All gallery images combined for preloading
export const ALL_GALLERY_IMAGES: ImageAsset[] = [
  ...MAIN_GALLERY_IMAGES,
  ...AMBIENTE_GALLERY_IMAGES
] as const;