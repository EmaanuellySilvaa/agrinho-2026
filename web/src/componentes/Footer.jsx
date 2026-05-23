import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Leaf } from 'lucide-react';

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6" />
              <span className="text-lg font-bold">Agrotóxicos e Meio Ambiente</span>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Promovendo práticas agrícolas sustentáveis e conscientização sobre os impactos dos agrotóxicos no meio ambiente.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('impactos')} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Impactos ambientais
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('praticas')} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Práticas sustentáveis
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('dados')} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Dados e estatísticas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solucoes')} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Soluções alternativas
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">contato@agroambiente.org</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">+55 (11) 3456-7890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">São Paulo, Brasil</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Redes sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Junte-se ao movimento</p>
              <p className="text-sm opacity-90">
                Adote práticas sustentáveis e ajude a preservar nosso planeta para as próximas gerações.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              © 2026 Agrotóxicos e Meio Ambiente. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Política de privacidade
              </a>
              <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Termos de uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;