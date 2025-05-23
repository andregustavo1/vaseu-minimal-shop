
import { Mail, Phone, CreditCard, ShieldCheck, Info, Instagram } from "lucide-react";
import { Separator } from "./ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className={`py-2 absolute bottom-0 w-full ${isMobile ? 'bg-transparent' : 'bg-[#111]'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Exchange and Return */}
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className={`${isMobile ? 'text-white' : 'text-gray-400'}`} />
            <div className="flex gap-8">
              <p className={`text-xs ${isMobile ? 'text-white' : 'text-gray-400'}`}>
                Troca e Devolução
              </p>

              <p className={`text-xs flex sm:hidden items-center gap-2 ${isMobile ? 'text-white' : 'text-gray-400'}`}>
                <Mail size={14} className={`${isMobile ? 'text-white' : 'text-gray-400'}`} />
                Contato
              </p>
            </div>
          </div>

            {/* Email */}
            <div className="items-center gap-2 hidden sm:flex">
              <Mail size={14} className={`${isMobile ? 'text-white' : 'text-gray-400'}`} />
              <p className={`text-xs ${isMobile ? 'text-white' : 'text-gray-400'}`}>
                contato@vaseu.com
              </p>
            </div>

            {/* Phone */}
            <div className="items-center gap-2 hidden sm:flex">
              <Phone size={14} className={`${isMobile ? 'text-white' : 'text-gray-400'}`} />
              <p className={`text-xs ${isMobile ? 'text-white' : 'text-gray-400'}`}>
                (11) 9999-9999
              </p>
            </div>

          {/* Instagram */}
          <div className="flex items-center gap-2 hidden sm:flex">
            <Instagram size={14} className={`${isMobile ? 'text-white' : 'text-gray-400'}`} />
            <a 
              href="https://www.instagram.com/vaseu_company/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`text-xs ${isMobile ? 'text-white hover:text-gray-200' : 'text-gray-400 hover:text-white'} transition-colors`}
            >
              @vaseu_company
            </a>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-2">
            <CreditCard size={16} className={`${isMobile ? 'text-white' : 'text-gray-400'}`} />
            <div className="flex gap-1">
              <span className={`text-xs ${isMobile ? 'bg-transparent text-white' : 'bg-gray-700'} px-2 py-0.5 rounded`}>
                Visa
              </span>
              <span className={`text-xs ${isMobile ? 'bg-transparent text-white' : 'bg-gray-700'} px-2 py-0.5 rounded`}>
                Master
              </span>
              <span className={`text-xs ${isMobile ? 'bg-transparent text-white' : 'bg-gray-700'} px-2 py-0.5 rounded`}>
                Pix
              </span>
            </div>
          </div>

          {/* Separator (hidden on mobile) */}
          <Separator orientation="vertical" className="h-8 bg-gray-800 hidden sm:block" />

          {/* Company Info */}
          <div className="flex items-center gap-2">
            <Info size={14} className={`${isMobile ? 'text-white' : 'text-gray-400'}`} />
            <span className={`text-xs ${isMobile ? 'text-white' : 'text-gray-400'}`}>
              CNPJ: 53.416.490/0001-78
            </span>
            <span className={`text-xs ml-2 ${isMobile ? 'text-white' : 'text-gray-400'}`}>
              &copy; 2025 VASEU
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
