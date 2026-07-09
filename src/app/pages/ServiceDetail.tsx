import { useParams, Link } from "react-router";
import { services } from "../data/services";
import { Facebook, Instagram, Globe, Phone, MessageCircle, ArrowLeft, Mail } from "lucide-react";
import { localImages } from "../data/images";
import { useEffect } from "react";
import ImageCarousel from "../components/ImageCarousel";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-black mb-4">Servicio no encontrado</h2>
          <Link to="/" className="text-[#ff6b00] hover:underline">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const whatsappLink = `https://wa.me/${service.contact.whatsapp}`;
  const facebookLink = service.contact.facebook
    ? (service.contact.facebook.startsWith('http')
        ? service.contact.facebook
        : `https://facebook.com/${service.contact.facebook}`)
    : null;
  const instagramLink = service.contact.instagram ? `https://instagram.com/${service.contact.instagram.replace('@', '')}` : null;
  const websiteLink = service.contact.website
    ? (service.contact.website.startsWith('http')
        ? service.contact.website
        : `https://${service.contact.website}`)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-black text-white py-4 px-4 shadow-lg sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="inline-flex items-center text-white hover:text-[#ff6b00] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al catálogo
          </Link>
          <Link to="/">
            <img
              src={localImages.nexouyLogo}
              alt="NexoUY"
              className="h-8 md:h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className={`overflow-hidden ${
            service.id === 'stelion' ? 'h-48 md:h-56 bg-[#e6e6e6]' :
            service.id === 'volvere' ? 'h-48 md:h-56 bg-white' :
            service.id === 'dls-construcciones' ? 'h-48 md:h-56 bg-black' :
            service.id === 'quiroga-automoviles' ? 'h-48 md:h-56 bg-white' :
            service.id === 'torque-digital' ? 'h-48 md:h-56 bg-[#0a1628]' :
            service.id === 'roverano-despachante' ? 'h-48 md:h-56 bg-black' :
            service.id === 'cortinas-sur' ? 'h-48 md:h-56 bg-black' :
            service.id === 'piur-aromatizadores' ? 'h-48 md:h-56 bg-white' :
            service.id === 'terra-boutique' ? 'h-48 md:h-56 bg-white' :
            service.detailImage ? 'h-64 md:h-80 bg-gray-100' :
            'h-64 md:h-80 bg-gray-100'
          }`}>
            <img
              src={service.id === 'roverano-despachante' ? service.image : (service.detailImage || service.image)}
              alt={service.name}
              className={`w-full h-full ${
                service.id === 'stelion' ? 'object-contain p-6' :
                service.id === 'volvere' ? 'object-contain p-6' :
                service.id === 'dls-construcciones' ? 'object-contain p-4' :
                service.id === 'quiroga-automoviles' ? 'object-contain p-8' :
                service.id === 'torque-digital' ? 'object-cover' :
                service.id === 'roverano-despachante' ? 'object-contain p-6' :
                service.id === 'cortinas-sur' ? 'object-contain p-6' :
                service.id === 'piur-aromatizadores' ? 'object-contain p-8' :
                service.id === 'terra-boutique' ? 'object-contain p-8' :
                service.id === 'steffani-sastre' ? 'object-contain' :
                service.detailImage ? 'object-cover object-top' :
                'object-contain'
              }`}
            />
          </div>

          <div className="p-6 md:p-10">
            <div className="inline-block px-4 py-2 bg-[#ff6b00] text-white rounded-full mb-4">
              {service.category}
            </div>

            <h1 className="text-black mb-6">{service.name}</h1>

            <div className="mb-8">
              <h3 className="text-black mb-3">Descripción del Servicio</h3>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">{service.fullDescription}</div>
            </div>

            {/* Flyer de Roverano */}
            {service.id === 'roverano-despachante' && service.detailImage && (
              <div className="mb-8">
                <img
                  src={service.detailImage}
                  alt="Roverano Despachantes de Aduana"
                  className="w-full rounded-xl shadow-md"
                />
              </div>
            )}

            {/* Carrusel para agente inmobiliario */}
            {service.id === 'inmobiliaria' && (
              <div className="mb-8">
                <h3 className="text-black mb-4">Material de Referencia</h3>
                <div className="h-[400px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden shadow-lg">
                  <ImageCarousel images={localImages.ronnieCarousel} />
                </div>
              </div>
            )}

            {/* Proyectos de Torque Digital */}
            {service.id === 'torque-digital' && (
              <div className="mb-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-black mb-4">Proyectos Destacados</h3>
                <div className="space-y-3">
                  <a
                    href="https://puntolaburo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#ff6b00] hover:text-[#e55f00] transition-colors"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    <span className="font-medium">puntolaburo.com</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="https://volverenatural.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#ff6b00] hover:text-[#e55f00] transition-colors"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    <span className="font-medium">volverenatural.com</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="https://nexouy.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#ff6b00] hover:text-[#e55f00] transition-colors"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    <span className="font-medium">nexouy.org</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            )}

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-black mb-6">Información de Contacto</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#ff6b00] mr-3" />
                  <span className="text-gray-700">{service.contact.phone}</span>
                </div>
                {service.contact.email && (
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#ff6b00] mr-3" />
                    <a href={`mailto:${service.contact.email}`} className="text-gray-700 hover:text-[#ff6b00] transition-colors">
                      {service.contact.email}
                    </a>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-black mb-4">Conectate con nosotros</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {service.contact.email && (
                    <a
                      href={`mailto:${service.contact.email}`}
                      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-[#ff6b00] hover:text-white transition-colors group border border-gray-200"
                    >
                      <Mail className="w-8 h-8 mb-2 text-[#ff6b00] group-hover:text-white" />
                      <span>Email</span>
                    </a>
                  )}
                  {service.contact.whatsapp && (
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-[#25D366] hover:text-white transition-colors group border border-gray-200"
                    >
                      <MessageCircle className="w-8 h-8 mb-2 text-[#25D366] group-hover:text-white" />
                      <span>WhatsApp</span>
                    </a>
                  )}

                  {instagramLink && (
                    <a
                      href={instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white transition-all group border border-gray-200"
                    >
                      <Instagram className="w-8 h-8 mb-2 text-[#E4405F] group-hover:text-white" />
                      <span>Instagram</span>
                    </a>
                  )}

                  {facebookLink && (
                    <a
                      href={facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-[#1877F2] hover:text-white transition-colors group border border-gray-200"
                    >
                      <Facebook className="w-8 h-8 mb-2 text-[#1877F2] group-hover:text-white" />
                      <span>Facebook</span>
                    </a>
                  )}

                  {websiteLink && (
                    <a
                      href={websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-[#ff6b00] hover:text-white transition-colors group border border-gray-200"
                    >
                      <Globe className="w-8 h-8 mb-2 text-[#ff6b00] group-hover:text-white" />
                      <span>Sitio Web</span>
                    </a>
                  )}
                </div>
              </div>

              {service.contact.whatsapp && (
                <div className="mt-8">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#ff6b00] hover:bg-[#e55f00] text-white text-center py-4 rounded-lg transition-colors"
                  >
                    Consultar ahora por WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-[#ff6b00] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ver todos los servicios
          </Link>
        </div>
      </main>

      <footer className="bg-black text-white py-8 px-4 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <img
            src={localImages.nexouyLogoFull}
            alt="NexoUY"
            className="h-16 md:h-20 w-auto mx-auto mb-4"
          />
          <p className="text-gray-400 mb-4">Conectando profesionales con oportunidades</p>
          <p className="text-gray-500 text-sm">© 2026 NexoUY. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
