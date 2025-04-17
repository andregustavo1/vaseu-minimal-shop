
import { Mail, Phone, CreditCard, ShieldCheck, Info, Instagram } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-2 absolute bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Exchange and Return */}
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-gray-400" />
            <div>
              <p className="text-xs text-gray-400">Troca e Devolução em até 7 dias úteis</p>
            </div>
          </div>

          {/* Customer Service - Email */}
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-gray-400" />
            <div>
              <p className="text-xs text-gray-400">contato@vaseu.com</p>
            </div>
          </div>

          {/* Customer Service - Phone */}
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-gray-400" />
            <div>
              <p className="text-xs text-gray-400">(11) 9999-9999</p>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-2">
            <Instagram size={14} className="text-gray-400" />
            <a 
              href="https://www.instagram.com/vaseu_company/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              @vaseu_company
            </a>
          </div>

          {/* Payment Methods and Company Info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CreditCard size={18} className="text-gray-400" />
              <div className="flex gap-1">
                <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">Visa</span>
                <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">Master</span>
                <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">Pix</span>
              </div>
            </div>
            <Separator orientation="vertical" className="h-8 bg-gray-800 hidden sm:block" />
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <Info size={14} />
              <span>CNPJ: 00.000.000/0001-00</span>
              <span>&copy; 2025 VASEU</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
