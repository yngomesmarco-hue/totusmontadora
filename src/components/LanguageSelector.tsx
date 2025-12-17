import { useLanguage, Language } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import flagSpain from '@/assets/flag-spain.png';
import flagUsa from '@/assets/flag-usa.png';
import flagBrazil from '@/assets/flag-brazil.png';

const languages: { code: Language; label: string; image: string }[] = [
  { code: 'pt', label: 'PT', image: flagBrazil },
  { code: 'en', label: 'EN', image: flagUsa },
  { code: 'es', label: 'ES', image: flagSpain },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 border border-border rounded px-2 py-1.5 hover:bg-muted/50 transition-colors">
        <img src={currentLang.image} alt={currentLang.label} className="w-6 h-6 rounded-full object-cover" />
        <ChevronDown size={14} className="text-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background border border-border z-50 min-w-[60px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center justify-center cursor-pointer ${
              language === lang.code ? 'bg-muted/50' : 'hover:bg-muted/30'
            }`}
          >
            <img src={lang.image} alt={lang.label} className="w-6 h-6 rounded-full object-cover" />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
