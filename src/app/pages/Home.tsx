import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { localImages } from "../data/images";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header / Navigation */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <img
                src={localImages.nexouyLogo}
                alt="NexoUY"
                className="h-8 md:h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#ff6b00] transition-colors"
              >
                Acerca de Nosotros
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#ff6b00] transition-colors"
              >
                Nuestros Servicios
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#ff6b00] hover:bg-[#e55f00] text-white px-6 py-2 rounded-lg transition-colors"
              >
                Contacto
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-[#ff6b00] transition-colors text-left"
                >
                  Acerca de Nosotros
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:text-[#ff6b00] transition-colors text-left"
                >
                  Nuestros Servicios
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#ff6b00] hover:bg-[#e55f00] text-white px-6 py-2 rounded-lg transition-colors text-left"
                >
                  Contacto
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <img
            src={localImages.nexouyLogoFull}
            alt="NexoUY"
            className="h-32 md:h-44 lg:h-52 w-auto mx-auto mb-6 max-w-full px-4"
          />
          <h1 className="text-white mb-4">El Ecosistema de Confianza para Profesionales Líderes</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            ¿Sientes que tu talento se pierde en directorios masivos donde la única forma de destacar es bajando tus precios? En NexoUY hemos cambiado las reglas del juego para potenciar a los mejores emprendedores de Uruguay.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            No somos una plataforma más; somos un ecosistema de recomendación exclusivo diseñado para quienes buscan excelencia y resultados reales.
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-[#ff6b00] hover:bg-[#e55f00] text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center"
          >
            Conocer más
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-black mb-4">¿Por qué elegir NexoUY para potenciar tu actividad?</h2>
            <div className="w-20 h-1 bg-[#ff6b00] mx-auto"></div>
          </div>

          {/* Exclusividad por Rubro */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8 md:p-10 mb-8">
              <h3 className="text-white mb-4">Exclusividad por Rubro (Sin Competencia Directa)</h3>
              <p className="text-gray-200 leading-relaxed">
                Operamos bajo un concepto fundamental: <span className="text-[#ff6b00] font-medium">un solo referente por rubro</span>. Si tu perfil es aprobado, serás el único prestador recomendado en tu categoría. Cada consulta de un cliente buscando tu especialidad será derivada directamente a vos.
              </p>
            </div>
          </div>

          {/* Beneficios */}
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-[#ff6b00] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-black mb-3">Perfil de Alta Conversión</h4>
                <p className="text-gray-700 leading-relaxed">
                  Olvídate de las simples fichas de contacto. Te ofrecemos una página de aterrizaje profesional donde se destaca tu trayectoria y portafolio, diseñada específicamente para convertir interesados en clientes.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-[#ff6b00] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-black mb-3">Networking de Recomendación Cruzada</h4>
                <p className="text-gray-700 leading-relaxed">
                  Formarás parte de una red donde profesionales de rubros complementarios recomiendan tus servicios, generando un flujo de trabajo orgánico, calificado y constante.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-[#ff6b00] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-black mb-3">Posicionamiento y Tecnología a tu Servicio</h4>
                <p className="text-gray-700 leading-relaxed">
                  Nosotros nos encargamos de la estrategia digital y el mantenimiento tecnológico. Tu única preocupación será brindar el mejor servicio, mientras nosotros gestionamos tu visibilidad online.
                </p>
              </div>
            </div>
          </div>

          {/* Compromiso y oportunidad */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
              <h3 className="text-black mb-4">Un Sello de Distinción y Calidad</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Formar parte de este círculo es un reconocimiento a tu labor. El acceso está limitado a profesionales que demuestren profesionalismo, cumplimiento riguroso de plazos y un trato de excelencia con el cliente.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La permanencia en la red asegura que el público siempre encuentre en vos una solución de total confianza.
              </p>
            </div>

            <div className="bg-[#ff6b00] text-white p-8 rounded-xl border-2 border-[#e55f00]">
              <h3 className="text-white mb-4">¡Asegura tu lugar hoy!</h3>
              <p className="leading-relaxed mb-4">
                Estamos seleccionando a los fundadores de este círculo de servicios exclusivo. Es tu oportunidad de posicionarte como el referente oficial de tu rubro antes de que el cupo sea asignado a otro profesional.
              </p>
              <p className="leading-relaxed font-medium">
                ¿Estás listo para escalar tu negocio sin intermediarios innecesarios?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-black mb-4">Nuestros Servicios</h2>
            <div className="w-20 h-1 bg-[#ff6b00] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubrí nuestra selección de servicios profesionales en diferentes áreas. Hacé clic en cualquier servicio para ver más información y contactar directamente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-black mb-4">Contactanos</h2>
            <div className="w-20 h-1 bg-[#ff6b00] mx-auto mb-4"></div>
            <p className="text-gray-600">
              ¿Tenés alguna consulta o querés formar parte de nuestro catálogo? Escribinos.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#ff6b00] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-black mb-1">Email</h4>
                  <a href="mailto:nexouy.org@gmail.com" className="text-gray-600 hover:text-[#ff6b00]">
                    nexouy.org@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#ff6b00] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-black mb-1">Teléfono</h4>
                  <a href="tel:+59899556806" className="text-gray-600 hover:text-[#ff6b00]">
                    +598 99 556 806
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#ff6b00] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-black mb-1">Ubicación</h4>
                  <p className="text-gray-600">Montevideo, Uruguay</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/59899556806"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#ff6b00] hover:bg-[#e55f00] text-white py-4 rounded-lg transition-colors text-center font-medium shadow-lg hover:shadow-xl"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
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
