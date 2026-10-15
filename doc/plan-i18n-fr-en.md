# Plan : routes /fr et /en (SEO bilingue)

**Objectif** : chaque langue a ses propres URLs, indexables séparément par Google, Bing, Gemini et ChatGPT. Aujourd'hui la langue est choisie côté client (localStorage + navigateur) sur une seule URL, donc les moteurs ne voient que l'anglais.

**Décisions déjà prises (ne pas rediscuter)**
- URLs : `/fr/...` et `/en/...`. `/` redirige vers la bonne langue.
- Langue par défaut : **fr** (clientèle principale à Bruxelles).
- Les traductions existent déjà dans `constants/index.ts` (objets `{ en: ..., fr: ... }`). Pas de traduction à faire, sauf textes codés en dur trouvés en route.
- Aucune nouvelle dépendance (pas de next-intl) : le contexte existant suffit.

**Règles d'exécution**
- Next.js **16** : vérifier la doc à jour via context7 (`/vercel/next.js`) avant d'écrire du code de routing. Points connus : `params` est une `Promise` (à `await`), le middleware s'appelle `proxy.ts` (fonction exportée `proxy`).
- Changements chirurgicaux : ne pas toucher aux animations GSAP, à la 3D ni au style.
- Déploiement uniquement via `~/.local/bin/deploy-vps portfolio --dry-run`, puis `--yes` après le « oui » d'Oliver.

---

## État actuel (repères)

| Élément | Fichier |
|---|---|
| Layout racine, métadonnées, JSON-LD, script de thème, providers | `app/layout.tsx` |
| Accueil / CV / projets | `app/page.tsx`, `app/resume/page.tsx` (noindex), `app/projects/[slug]/page.tsx` (`dynamicParams = false`) |
| 404, erreurs | `app/not-found.tsx`, `app/error.tsx`, `app/global-error.tsx` |
| Sitemap / robots | `app/sitemap.ts` (8 URLs codées en dur), `app/robots.ts` |
| Langue | `contexts/LanguageContext.tsx` (state `'en'` puis détection localStorage/navigateur), `hooks/useTranslation.tsx` (utilisé par ~16 composants, expose `locale`) |
| Bouton FR/EN | `components/LanguageSwitcher.tsx` (appelle `setLanguage`) |
| Liens internes | `components/NavBar.tsx` (`href="/"`, `pendingNavRef.current = '/'`, `` `/${link}` `` pour les ancres, `` `/projects/${bubble.slug}` `` ×2, tests `pathname === '/'`, `pathname === '/resume'`, `pathname?.startsWith('/projects/')`), `components/ProjectNavigation.tsx`, `components/models/MaterialUiSlider/Slider.tsx`, `sections/ShowcaseSection.tsx`, `app/not-found.tsx` |
| API (ne pas déplacer) | `app/api/contact/route.ts` |

Avant de commencer : `grep -rn 'href=\|router.push\|pathname\|pendingNavRef.current =' components sections app` pour avoir la liste complète des liens à adapter.

---

## Étapes

### 1. Structure des routes
- Créer `app/[lang]/` et y déplacer (avec `git mv`) : `layout.tsx`, `page.tsx`, `resume/`, `projects/`, `not-found.tsx`, `error.tsx`, `providers/`.
- Rester à la racine de `app/` : `api/`, `sitemap.ts`, `robots.ts`, `globals.css`, `favicon.ico`, `global-error.tsx`.
- `app/[lang]/layout.tsx` devient le **layout racine** (`<html lang={lang}>`). Il n'y a plus de `app/layout.tsx`.
- Dans `app/[lang]/layout.tsx` : `generateStaticParams` → `[{ lang: 'fr' }, { lang: 'en' }]` et `export const dynamicParams = false` (`/de` → 404).
- Projets : `generateStaticParams` doit produire les slugs pour chaque langue. Garder `dynamicParams = false`.
- 404 globale (URL hors `[lang]`) : vérifier dans la doc Next 16 comment fournir une page 404 quand le layout racine est sous un segment dynamique (`global-not-found.tsx`, éventuellement derrière un flag dans `next.config.ts`). La page 404 doit afficher un lien vers `/fr` et renvoyer un vrai statut 404.
- Créer un petit module partagé `i18n.ts` (à la racine ou dans `constants/`) : `export const locales = ['fr', 'en'] as const`, `defaultLocale = 'fr'`, type `Locale`, et `isLocale()`. Remplacer le type `Language` du contexte par ce type ou l'aligner dessus.

### 2. Langue pilotée par l'URL
- `LanguageProvider` reçoit `lang` en prop depuis `app/[lang]/layout.tsx` et l'utilise directement : supprimer le `useState('en')` + `useEffect` de détection localStorage/navigateur. Le contenu est alors rendu côté serveur dans la bonne langue (c'est le but SEO).
- `setLanguage(lang)` : remplacer le préfixe de langue dans `usePathname()` et naviguer (`router.push`), en conservant le hash. Écrire aussi un cookie `lang=<locale>; path=/; max-age=31536000` pour mémoriser le choix.
- `LanguageSwitcher` : remplacer les `<button>` par des `<Link>` vers l'URL équivalente dans l'autre langue (meilleur pour le crawl), avec `hrefLang` et `aria-current` sur la langue active. Garder exactement le même rendu visuel (classes et styles inchangés). Écrire le cookie au clic.

### 3. Liens internes
- Tous les liens internes passent par la langue courante (`locale` de `useTranslation()`) :
  - `/` → `/${locale}`
  - `` `/${link}` `` (ancre depuis une page projet, ex. `/#contact`) → `` `/${locale}${link}` `` (ex. `/fr#contact`)
  - `` `/projects/${slug}` `` → `` `/${locale}/projects/${slug}` ``
- Tests de page dans `NavBar.tsx` : remplacer `pathname === '/'`, `pathname === '/resume'`, `startsWith('/projects/')` par des tests qui ignorent le préfixe (ex. retirer `/${locale}` du pathname avant de comparer).
- Vérifier que les animations de navigation différée (`pendingNavRef`) utilisent bien les nouvelles destinations.

### 4. Redirections (`proxy.ts` à la racine)
- `matcher` : exclure `api`, `_next`, `images`, `assets`, `models`, `sitemap.xml`, `robots.txt`, et tout chemin avec une extension de fichier (`.*\\..*`).
- Chemin qui commence par `/fr` ou `/en` → laisser passer.
- `/` → **307** vers `/${langue}` avec langue = cookie `lang` sinon `Accept-Language` (commence par `fr` → fr, sinon en), et `fr` si rien (robots).
- Anciennes URLs → **301 permanent** vers la version française (préserve l'indexation) : `/projects/:slug` → `/fr/projects/:slug`, `/resume` → `/fr/resume`. Toute autre URL sans préfixe → 301 vers `/fr` + le chemin (la 404 se chargera des chemins invalides).
- Attention : `NextResponse.redirect()` fait un 307 par défaut. Passer explicitement `301` pour les anciennes URLs.

### 5. SEO par langue
- `app/[lang]/layout.tsx` → `generateMetadata({ params })` au lieu de `export const metadata`. Textes **par langue**, sans mélange :
  - **fr** : titre `Oliver Van Droogenbroeck | Développeur web freelance à Bruxelles` ; description `Développeur web freelance à Bruxelles : sites vitrines WordPress, plateformes interactives et applications de gestion sur mesure en React et Next.js.` ; `openGraph.locale: 'fr_BE'`, `alternateLocale: ['en_US']`.
  - **en** : titre `Oliver Van Droogenbroeck | Freelance Web Developer in Brussels` ; description `Freelance web developer in Brussels: WordPress showcase websites, interactive platforms and custom management apps built with React and Next.js.` ; `openGraph.locale: 'en_US'`, `alternateLocale: ['fr_BE']`.
  - Twitter : mêmes titres et descriptions.
  - Garder `metadataBase`, les icônes, `robots`, etc.
- `alternates` sur **chaque** page (accueil, projets, CV) via `generateMetadata` :
  ```ts
  alternates: {
    canonical: `/${lang}${path}`,
    languages: { fr: `/fr${path}`, en: `/en${path}`, 'x-default': `/fr${path}` },
  }
  ```
  avec `path` = `''` pour l'accueil, `/projects/${slug}` pour un projet, `/resume` pour le CV. Ne **jamais** mettre `alternates` dans le layout (sinon les pages en héritent : bug déjà corrigé une fois).
- Projets : titre et description depuis `projects[lang]` (et non plus `projects.en`).
- CV : garder `robots: { index: false, follow: true }`.
- Supprimer `<meta name="language" content="en,fr" />` (inutile, `lang` sur `<html>` suffit).
- JSON-LD : garder tel quel, ajouter `inLanguage: lang` sur l'objet `WebSite`, et `url: https://www.olivervdb.com/${lang}`.
- `app/sitemap.ts` : générer les 8 pages × 2 langues (16 URLs) à partir de `projects.en` (slugs), avec `alternates.languages` (`fr`, `en`) sur chaque entrée. Ne pas inclure `/resume`.

### 6. Textes codés en dur
- `grep` les chaînes anglaises visibles dans `app/` et `components/` hors `constants` (ex. 404 « Page not found », « Return home », `aria-label`, `alt`). Les déplacer dans `translations` (`constants/index.ts`) avec leur version française.

---

## Checklist de vérification (tout doit passer avant de proposer le déploiement)

Build : `npx tsc --noEmit`, `npx eslint` sur les fichiers modifiés, `npm run build` sans erreur. Le build doit lister `/fr`, `/en`, `/[lang]/projects/[slug]` (14 chemins).

Puis `npx next start -p 3123` et `curl` :

| Requête | Attendu |
|---|---|
| `/fr`, `/en` | 200 |
| `/fr/projects/lesarts`, `/en/projects/lesarts` (et les 6 autres slugs) | 200 |
| `/` sans en-tête | 307 → `/fr` |
| `/` avec `Accept-Language: en-US` | 307 → `/en` |
| `/` avec cookie `lang=en` | 307 → `/en` |
| `/projects/lesarts` | **301** → `/fr/projects/lesarts` |
| `/resume` | **301** → `/fr/resume` |
| `/de`, `/fr/projects/inexistant`, `/fr/nimporte` | 404 |
| `/api/contact` (POST vide) | 400 (non redirigé) |
| `/sitemap.xml`, `/robots.txt`, `/images/bg.webp` | 200 (non redirigés) |

Dans le HTML de `/fr/projects/lesarts` (et l'équivalent `en`) :
- `<html lang="fr">` (resp. `en`)
- `<title>` et `<meta name="description">` dans la bonne langue, contenu de la page en français **dans le HTML serveur** (sans JS)
- `<link rel="canonical" href="https://www.olivervdb.com/fr/projects/lesarts">`
- 3 `<link rel="alternate" hreflang=…>` : `fr`, `en`, `x-default`
- `/fr/resume` : `<meta name="robots" content="noindex, follow">`

`/sitemap.xml` : 16 URLs, toutes en `https://www.olivervdb.com/fr…` ou `/en…`, avec les alternates.

Navigateur (`npm run dev`) :
- Bouton FR/EN : change d'URL, garde la même page, rendu identique à avant.
- Menu, logo, ancres (`#contact`, etc.) depuis l'accueil **et** depuis une page projet, navigation projet précédent/suivant, slider, showcase : tous restent dans la langue courante.
- Pas d'erreur d'hydratation dans la console.

---

## Après le déploiement (à faire par Oliver)
1. Search Console → Sitemaps : soumettre à nouveau `https://www.olivervdb.com/sitemap.xml`.
2. Inspection de l'URL → demander l'indexation de `https://www.olivervdb.com/fr` et `https://www.olivervdb.com/en`, puis des pages projets `/fr/...`.
3. Bing Webmaster Tools : même chose (sitemap + URL Submission).
4. Dans 2 à 4 semaines : vérifier dans Search Console que les anciennes URLs passent en « Page avec redirection » et les nouvelles en « Indexée ».
