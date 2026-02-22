import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Normalize path to always have leading slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (lang === defaultLang) {
    // For default locale (uk), strip /en/ prefix if present
    return normalizedPath.replace(/^\/en/, '') || '/';
  }

  // For non-default locale, add prefix
  // Avoid double prefix
  if (normalizedPath.startsWith(`/${lang}`)) {
    return normalizedPath;
  }

  return `/${lang}${normalizedPath}`;
}

export function getAlternateUrl(currentPath: string, targetLang: Lang, site: string): string {
  // Remove any existing locale prefix
  let basePath = currentPath;
  for (const lang of Object.keys(ui)) {
    if (basePath.startsWith(`/${lang}/`)) {
      basePath = basePath.slice(lang.length + 1);
      break;
    }
  }

  const localizedPath = getLocalizedPath(basePath, targetLang);
  return `${site}${localizedPath.startsWith('/') ? localizedPath.slice(1) : localizedPath}`;
}
