import type { Language } from "@/contexts/LanguageContext";

export function vimeoIframeSrc(embedUrl: string, lang: Language) {
  const u = new URL(embedUrl);
  if (!u.searchParams.has("autoplay")) {
    u.searchParams.set("autoplay", "1");
  }
  u.searchParams.set("lang", lang === "pt" ? "pt" : "en");
  return u.toString();
}
