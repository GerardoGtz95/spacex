import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro, f as createTransitionScope, d as renderComponent, g as renderHead } from './astro/server_D6FqqEaz.mjs';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$HeaderButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="flex-row justify-center text-white cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50
font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55
mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90
hover:opacity-100"> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"], renderTemplate`Contenido por defecto`)} ${renderSlot($$result, $$slots["after"])} </a>`;
}, "/Users/gerardogtz/Workspace/astro/curso-astro-demo/src/components/HeaderButton.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="py-4 px-4 mx-auto max-w-xl lg:py-16 lg:px-6"${addAttribute(createTransitionScope($$result, "l7r54iwe"), "data-astro-transition-persist")}> <div class="mx-auto text-center mb-8 lg:mb-16"> <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
SpaceX Launches 🚀
</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
All the information about SpaceX launches
</p> </div> <!-- <Counter client:visible /> --> <nav class="flex flex-col items-center justify-between w-full text-center md:flex-row"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rocket" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path> <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path> <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path> </svg>`, "default": ($$result2) => renderTemplate`
Ultimos lanzamientos
 ` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/oldest" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M20.993 11.646a9 9 0 1 0 -9.318 9.348"></path> <path d="M12 7v5l1 1"></path> <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path> <path d="M20.2 20.2l1.8 1.8"></path> </svg>`, "default": ($$result2) => renderTemplate`
Los mas viejos
 ` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/about" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path> <path d="M12 9h.01"></path> <path d="M11 12h1v4h1"></path> </svg>`, "default": ($$result2) => renderTemplate`
Sobre el proyecto
 ` })} </nav> </header>`;
}, "/Users/gerardogtz/Workspace/astro/curso-astro-demo/src/components/Header.astro", "self");

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/gerardogtz/Workspace/astro/curso-astro-demo/node_modules/.pnpm/astro@4.13.1_typescript@5.5.4/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-gray-900 min-h-screen pb-32"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl px-4 m-auto"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/gerardogtz/Workspace/astro/curso-astro-demo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
