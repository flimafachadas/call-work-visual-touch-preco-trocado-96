
import { Card, CardContent } from "@/components/ui/card";
import { Users, Star } from "lucide-react";
import { memo } from "react";

interface TrustMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

const TRUST_DATA: TrustMember[] = [
  {
    id: 1,
    name: "Jaqueline Nogueira",
    role: "Profissional Liberal",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUvqC3U5mXcnVKrxGyi2gvQxZqYGgYgT48JuA1C4xWVWSirMt2G=w72-h72-p-rp-mo-ba2-br100",
    rating: 5
  },
  {
    id: 2,
    name: "Fabio Florencio",
    role: "Empreendedor",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVuca8rhRFBFwuGEtUSIuv6ViLVaepkyV1_qB_fGSGUuYMgndUJ1Q=w72-h72-p-rp-mo-ba2-br100",
    rating: 5
  },
  {
    id: 3,
    name: "Sabrinna Barros",
    role: "Profissional",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUhOA3g_YEg1Y36Sz7b8VB3ChFF6RoE6NrspyahxjXmmbercUmp=w72-h72-p-rp-mo-br100",
    rating: 5
  },
  {
    id: 4,
    name: "LUIS PRADO",
    role: "Consultor",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJL62MzoWjcsVJQMBYodItXmrDaM0hQYjXx7iFUu-NWFG48hg=w72-h72-p-rp-mo-br100",
    rating: 5
  }
];

const TrustMemberCard = memo(({ member }: { member: TrustMember }) => (
  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
    <CardContent className="p-6 text-center">
      <img
        src={member.avatar}
        alt={`Foto de ${member.name}`}
        className="w-20 h-20 rounded-full mx-auto mb-4 border-3 border-brand-orange/20"
        loading="lazy"
        decoding="async"
      />
      <div className="flex justify-center mb-3" role="img" aria-label={`${member.rating} estrelas de 5`}>
        {Array.from({ length: member.rating }, (_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
        ))}
      </div>
      <h4 className="font-semibold text-gray-800 mb-1">{member.name}</h4>
      <p className="text-brand-orange text-sm">{member.role}</p>
    </CardContent>
  </Card>
));

TrustMemberCard.displayName = "TrustMemberCard";

const TrustSection = memo(() => {
  return (
    <section id="confianca" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Estrela decorativa */}
      <div className="absolute top-20 right-10 opacity-10" aria-hidden="true">
        <img 
          src="/lovable-uploads/f57fcdeb-858a-4f5c-a2bd-6d674631b6ba.png" 
          alt="" 
          className="w-24 h-24 lg:w-32 lg:h-32 animate-float"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <header className="text-center mb-16 animate-fade-in">
          <div className="mb-4">
            <span className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold">
              <Users className="w-4 h-4 inline mr-2" aria-hidden="true" />
              Confiança
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-brand-blue">Quem Confia No</span>{" "}
            <span className="text-brand-orange">Nosso Trabalho</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profissionais de diversas áreas que escolheram o Israel Coworking 
            como parceiro para o seu crescimento profissional.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {TRUST_DATA.map((member) => (
            <TrustMemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-6 max-w-xl mx-auto shadow-sm border">
            <div className="flex items-center justify-center space-x-2 text-brand-blue mb-2">
              <Star className="w-5 h-5 fill-current text-yellow-400" />
              <span className="text-2xl font-bold">5.0</span>
            </div>
            <p className="text-gray-600 text-sm">
              Avaliação média baseada em mais de 50 reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

TrustSection.displayName = "TrustSection";

export default TrustSection;
