import { Link } from "react-router";
import { Service } from "../data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link to={`/servicio/${service.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#ff6b00]">
        <div className={`aspect-[4/3] overflow-hidden ${
          service.id === 'torque-digital' ? 'bg-[#0a1628]' : 'bg-gray-100'
        }`}>
          <img
            src={service.image}
            alt={service.name}
            className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${
              service.id === 'traslados' ? 'object-cover object-[center_40%]' :
              service.id === 'security-market' ? 'object-contain p-4' :
              service.id === 'dls-construcciones' ? 'object-contain p-2' :
              service.id === 'quiroga-automoviles' ? 'object-contain p-6' :
              service.id === 'torque-digital' ? 'object-cover' :
              service.id === 'steffani-sastre' ? 'object-contain p-4' :
              'object-cover object-top'
            }`}
          />
        </div>
        <div className="p-5">
          <div className="inline-block px-3 py-1 bg-[#ff6b00] text-white rounded-full mb-3">
            {service.category}
          </div>
          <h3 className="text-black mb-2">{service.name}</h3>
          <p className="text-gray-600 line-clamp-2">{service.description}</p>
          <div className="mt-4 flex items-center text-[#ff6b00] group-hover:translate-x-1 transition-transform">
            <span>Ver más</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
