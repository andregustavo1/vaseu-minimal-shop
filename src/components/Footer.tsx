
import { Mail, Phone, CreditCard, ShieldCheck, Info } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Exchange and Return */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-gray-400" />
              <h3 className="text-sm font-medium uppercase tracking-wider">Troca e Devolução</h3>
            </div>
            <p className="text-sm text-gray-400">Em até 7 dias úteis</p>
          </div>

          {/* Customer Service - Email */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-gray-400" />
              <h3 className="text-sm font-medium uppercase tracking-wider">Email</h3>
            </div>
            <p className="text-sm text-gray-400">contato@vaseu.com</p>
          </div>

          {/* Customer Service - Phone */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-gray-400" />
              <h3 className="text-sm font-medium uppercase tracking-wider">Telefone</h3>
            </div>
            <p className="text-sm text-gray-400">(11) 9999-9999</p>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <CreditCard size={20} className="text-gray-400" />
              <h3 className="text-sm font-medium uppercase tracking-wider">Formas de Pagamento</h3>
            </div>
            <div className="flex gap-2">
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">Visa</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">Master</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">Pix</span>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Info size={16} />
            <p>CNPJ: 00.000.000/0001-00</p>
          </div>
          <p>&copy; 2024 VASEU. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
