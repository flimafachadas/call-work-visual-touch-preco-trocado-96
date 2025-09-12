
import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants";
import { CONTACT_SERVICES } from "@/constants/contact";
import { useContactForm } from "@/hooks/useContactForm";
import { InputField, TextareaField, SelectField } from "@/components/ui/form-field";

const ContactSection = memo(() => {
  const {
    formData,
    isSubmitting,
    hasRequiredFields,
    handleInputChange,
    handleServiceChange,
    validateAndSubmit,
    getFieldError
  } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await validateAndSubmit();
  };

  return (
    <section id="contato" className="section-padding green-gradient">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Entre em <span className="text-white/90">Contato</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Pronto para conhecer seu novo espaço de trabalho?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <Card className="glass-effect border-white/20 hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  name="nome"
                  placeholder="Seu nome *"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  error={getFieldError('nome')}
                />
                
                <InputField
                  name="whatsapp"
                  type="tel"
                  placeholder="Seu WhatsApp (85) 99999-9999 *"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  error={getFieldError('whatsapp')}
                />
                
                <SelectField
                  placeholder="Selecione o serviço de interesse *"
                  value={formData.servico}
                  onValueChange={handleServiceChange}
                  options={CONTACT_SERVICES}
                  required
                  error={getFieldError('servico')}
                />
                
                <TextareaField
                  name="mensagem"
                  placeholder="Sua mensagem (opcional)"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  error={getFieldError('mensagem')}
                />
                
                <Button 
                  type="submit"
                  disabled={isSubmitting || !hasRequiredFields}
                  className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-medium py-3 hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'ENVIANDO...' : 'CONTRATE AGORA!'}
                </Button>
                
                <p className="text-xs text-brand-dark/60 text-center">
                  * Campos obrigatórios
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="glass-effect border-white/20 hover-lift">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-brand-blue/20 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark">Contatos</h4>
                    <p className="text-brand-dark/70">(85) 3212-0748</p>
                    <p className="text-brand-dark/70">WhatsApp (85) 98833-8969</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/20 hover-lift">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-brand-orange/20 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark">Email</h4>
                    <p className="text-brand-dark/70">{CONTACT_INFO.email}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/20 hover-lift">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-brand-red/20 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark">Endereço</h4>
                    <p className="text-brand-dark/70">{CONTACT_INFO.address.street}</p>
                    <p className="text-brand-dark/70">{CONTACT_INFO.address.neighborhood}, {CONTACT_INFO.address.city}</p>
                    <p className="text-brand-dark/70">{CONTACT_INFO.address.zipCode}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/20 hover-lift">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-brand-green/20 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark">Horário de Funcionamento</h4>
                    <p className="text-brand-dark/70">Segunda a Sexta: 8h - 18h</p>
                    <p className="text-brand-dark/70">Sábado: 8h - 12h</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <Card className="glass-effect border-white/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-brand-dark mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <Button
                    onClick={() => window.open(SOCIAL_LINKS.whatsapp, '_blank')}
                    size="sm"
                    className="bg-brand-green hover:bg-brand-green/90 text-white"
                  >
                    <img src="/lovable-uploads/03b865e3-09cd-4878-b923-a80bead5fece.png" className="h-4 w-4" alt="WhatsApp" />
                  </Button>
                  <Button
                    onClick={() => window.open(SOCIAL_LINKS.instagram, '_blank')}
                    size="sm"
                    className="bg-brand-red hover:bg-brand-red/90 text-white"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => window.open('https://m.facebook.com/israelocoworking/', '_blank')}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="glass-effect border-white/20 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2861729533246!2d-38.5282486!3d-3.7276689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748fe3b7c2ec1%3A0x8a3d35b3a4b9c5a5!2sR.%20Pero%20Coelho%2C%20428%20-%20Centro%2C%20Fortaleza%20-%20CE!5e0!3m2!1spt!2sbr!4v1700000000000!5m2!1spt!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Israel Coworking Localização"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
