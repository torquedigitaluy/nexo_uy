import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import SectionBackdrop from "../components/SectionBackdrop";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { localImages } from "../data/images";
import Autoplay from "embla-carousel-autoplay";

const benefits = [
  {
    number: "01",
    title: "Más confianza desde el primer contacto",
    description:
      "Sabés que no llegaste a un profesional por una publicidad, sino por el respaldo de toda una red de especialistas.",
    size: "square" as const,
  },
  {
    number: "02",
    title: "Menos riesgos al contratar",
    description:
      "Trabajamos con personas y empresas que priorizan el cumplimiento, la responsabilidad y la satisfacción del cliente.",
    size: "square" as const,
  },
  {
    number: "03",
    title: "Una comunidad que cuida su reputación",
    description:
      "La confianza se construye con cada trabajo realizado. Por eso cada integrante tiene el compromiso de mantener los estándares de calidad que identifican a NexoUY.",
    size: "square" as const,
  },
  {
    number: "04",
    title: "Soluciones integrales en un solo lugar",
    description:
      "Si necesitás más de un servicio, nuestros profesionales trabajan de manera coordinada y pueden recomendarte otros especialistas de la comunidad con el mismo nivel de compromiso.",
    size: "rect" as const,
  },
  {
    number: "05",
    title: "Más tiempo para vos",
    description:
      "Dejás de perder horas buscando referencias, comparando opciones o leyendo opiniones contradictorias. Nosotros ya hicimos ese trabajo de selección.",
    size: "rect" as const,
  },
];

const container = "max-w-[1680px] mx-auto px-4 md:px-6";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }));

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className={container}>
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
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-[#ff6b00] transition-colors"
              >
                Acerca de Nosotros
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-[#ff6b00] transition-colors"
              >
                Nuestros Servicios
              </button>
              <button
                onClick={() => scrollToSection("contact")}
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
                  onClick={() => scrollToSection("about")}
                  className="text-white hover:text-[#ff6b00] transition-colors text-left"
                >
                  Acerca de Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white hover:text-[#ff6b00] transition-colors text-left"
                >
                  Nuestros Servicios
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
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
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white py-14 md:py-20">
        <SectionBackdrop variant="dark" />
        <div className={`relative z-10 ${container} text-center`}>
          <img
            src={localImages.nexouyLogoFull}
            alt="NexoUY"
            className="h-32 md:h-44 lg:h-52 w-auto mx-auto mb-6 max-w-full"
          />
          <h1 className="text-white mb-5 text-3xl md:text-4xl lg:text-5xl">
            Contratá con confianza. Elegí profesionales recomendados.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Hoy encontrar un profesional es fácil. Lo difícil es saber en quién confiar.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            En internet hay cientos de opciones, pero pocas garantías de que la persona que
            contratás sea realmente responsable, cumpla con lo prometido y responda cuando la
            necesitás.
          </p>
          <p className="text-base md:text-lg text-white mb-4 max-w-3xl mx-auto leading-relaxed font-semibold">
            NexoUY nació para cambiar eso.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Reunimos profesionales y empresas cuidadosamente seleccionados, recomendados entre sí
            por una comunidad que entiende que la confianza es su activo más valioso.
          </p>
          <button
            onClick={() => scrollToSection("about")}
            className="bg-[#ff6b00] hover:bg-[#e55f00] text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center"
          >
            Conocer más
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Banner Negro */}
      <section id="about" className="relative overflow-hidden bg-black text-white py-14 md:py-20">
        <SectionBackdrop variant="dark" />
        <div className={`relative z-10 ${container} text-center`}>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Cuando un integrante recomienda a otro, también pone en juego su propia reputación.
            Por eso cada profesional que forma parte de NexoUY está comprometido con brindar un
            servicio serio, responsable y de calidad.
          </p>
          <div className="w-16 h-1 bg-[#ff6b00] mx-auto mb-6"></div>
          <h2 className="text-white max-w-3xl mx-auto">
            ¿Qué beneficios obtenés al elegir un profesional de NexoUY?
          </h2>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-12 md:py-16">
        <div className={container}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className={`relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-6 flex flex-col justify-center ${
                  benefit.size === "square"
                    ? "lg:col-span-2 lg:min-h-[210px]"
                    : "sm:col-span-2 lg:col-span-3 lg:min-h-[170px]"
                }`}
              >
                <span
                  className="absolute -right-2 -top-6 text-7xl md:text-8xl font-extrabold text-gray-200/70 select-none"
                  aria-hidden="true"
                >
                  {benefit.number}
                </span>
                <div className="relative z-10">
                  <div className="w-10 h-1 bg-[#ff6b00] mb-4"></div>
                  <h4 className="text-black mb-3">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque Naranja */}
      <section className="pb-12 md:pb-16">
        <div className={container}>
          <div className="relative overflow-hidden rounded-2xl bg-[#ff6b00] text-white p-10 md:p-16 lg:p-20">
            <SectionBackdrop variant="orange" showLogo={false} />
            <p className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-4xl">
              Porque cuando necesitás resolver algo importante, no alcanza con encontrar un
              profesional. Necesitás encontrar al indicado.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 bg-gray-100">
        <div className={container}>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplay.current]}
          >
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-black mb-3">Nuestros Servicios</h2>
                <div className="w-16 h-1 bg-[#ff6b00] mb-3"></div>
                <p className="text-gray-600 max-w-2xl">
                  Descubrí nuestra selección de servicios profesionales en diferentes áreas. Hacé
                  clic en cualquier servicio para ver más información y contactar directamente.
                </p>
              </div>
              <div className="hidden sm:flex gap-2 shrink-0">
                <CarouselPrevious className="static left-auto right-auto top-auto translate-y-0" />
                <CarouselNext className="static left-auto right-auto top-auto translate-y-0" />
              </div>
            </div>

            <CarouselContent className="-ml-5">
              {services.map((service) => (
                <CarouselItem
                  key={service.id}
                  className="pl-5 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <ServiceCard service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex sm:hidden justify-center gap-3 mt-6">
              <CarouselPrevious className="static left-auto right-auto top-auto translate-y-0" />
              <CarouselNext className="static left-auto right-auto top-auto translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden py-12 md:py-16 bg-white">
        <SectionBackdrop variant="light" />
        <div className={`relative z-10 ${container}`}>
          <div className="text-center mb-8">
            <h2 className="text-black mb-3">Contactanos</h2>
            <div className="w-16 h-1 bg-[#ff6b00] mx-auto mb-3"></div>
            <p className="text-gray-600">
              ¿Tenés alguna consulta o querés formar parte de nuestro catálogo? Escribinos.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-5 mb-8">
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
      <footer className="bg-black text-white py-6">
        <div className={`${container} text-center`}>
          <img
            src={localImages.nexouyLogoFull}
            alt="NexoUY"
            className="h-14 md:h-16 w-auto mx-auto mb-4"
          />
          <p className="text-gray-400 mb-2">Conectando profesionales con oportunidades</p>
          <p className="text-gray-500 text-sm">© 2026 NexoUY. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
