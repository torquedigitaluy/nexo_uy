import { Link } from "react-router";
import { Service } from "../data/services";
import { Phone, Instagram } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

function getExcerpt(fullDescription: string): string {
  const paragraphs = fullDescription
    .split(/\n\n+/)
    .map((p) => p.replace(/\n/g, " ").trim())
    .filter(Boolean);
  return paragraphs.find((p) => p.length > 60) ?? paragraphs[0] ?? "";
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const excerpt = getExcerpt(service.fullDescription);

  return (
    <Link to={`/servicio/${service.id}`} className="group block h-full">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#ff6b00] h-full flex flex-col">
        <div className={`aspect-[16/10] overflow-hidden ${
          service.id === 'torque-digital' ? 'bg-[#0a1628]' :
          service.id === 'cortinas-sur' ? 'bg-black' :
          service.id === 'roverano-despachante' ? 'bg-black' :
          service.id === 'dls-construcciones' ? 'bg-black' :
          service.id === 'piur-aromatizadores' ? 'bg-white' :
          service.id === 'quiroga-automoviles' ? 'bg-white' :
          service.id === 'terra-boutique' ? 'bg-white' :
          service.id === 'security-market' ? 'bg-white' :
          'bg-gray-100'
        }`}>
          <img
            src={service.image}
            alt={service.name}
            className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${
              service.id === 'traslados' ? 'object-cover object-[center_40%]' :
              service.id === 'security-market' ? 'object-contain p-6' :
              service.id === 'dls-construcciones' ? 'object-contain p-4' :
              service.id === 'quiroga-automoviles' ? 'object-contain p-8' :
              service.id === 'torque-digital' ? 'object-cover' :
              service.id === 'steffani-sastre' ? 'object-contain p-6' :
              service.id === 'piur-aromatizadores' ? 'object-contain p-6' :
              service.id === 'cortinas-sur' ? 'object-contain p-4' :
              service.id === 'roverano-despachante' ? 'object-contain p-4' :
              service.id === 'terra-boutique' ? 'object-contain p-8' :
              'object-cover object-top'
            }`}
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="inline-block px-3 py-1 bg-[#ff6b00] text-white rounded-full mb-3 self-start">
            {service.category}
          </div>
          <h3 className="text-black mb-1">{service.name}</h3>
          <p className="text-gray-700 font-medium mb-2">{service.description}</p>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{excerpt}</p>
          <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
            {service.contact.phone ? (
              <span className="flex items-center text-gray-500 text-sm min-w-0">
                <Phone className="w-4 h-4 mr-1.5 shrink-0" />
                <span className="truncate">{service.contact.phone}</span>
              </span>
            ) : service.contact.instagram ? (
              <span className="flex items-center text-gray-500 text-sm min-w-0">
                <Instagram className="w-4 h-4 mr-1.5 shrink-0" />
                <span className="truncate">{service.contact.instagram}</span>
              </span>
            ) : (
              <span />
            )}
            <span className="flex items-center text-[#ff6b00] group-hover:translate-x-1 transition-transform whitespace-nowrap shrink-0">
              Ver más
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
