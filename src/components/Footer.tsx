
import { Mail, Phone, CreditCard, ShieldCheck, Info, Instagram } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-2 absolute bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Collapsible Information Section */}
          <div>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="text-gray-400 hover:text-white text-xs p-0 h-auto">
                  <Info size={14} className="mr-2" />
                  Informações
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-gray-400" />
                  <p className="text-xs text-gray-400">Troca e Devolução em até 7 dias úteis</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-gray-400" />
                  <p className="text-xs text-gray-400">contato@vaseu.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-gray-400" />
                  <p className="text-xs text-gray-400">(11) 9999-9999</p>
                </div>
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
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-gray-400" />
            <div className="flex gap-1">
              <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">Visa</span>
              <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">Master</span>
              <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">Pix</span>
            </div>
          </div>

          {/* Company Info */}
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <span>CNPJ: 00.000.000/0001-00</span>
            <span>&copy; 2025 VASEU</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
