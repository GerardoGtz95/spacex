/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_D6FqqEaz.mjs';
import { $ as $$Layout } from '../../chunks/Layout_L7Fo7cav.mjs';
import { g as getLaunchBy } from '../../chunks/spacex_CMBpMwnx.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch = null;
  if (id) {
    launch = await getLaunchBy({ id });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Launch: ${launch?.id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex gap-y-4 flex-col"> <img class="w-52 h-auto"${addAttribute(launch?.links?.patch.small, "src")}${addAttribute(launch?.name, "alt")}> <h2 class="text-4xl text-white font-bold">
Launch #${launch?.flight_number} </h2> <p class="text-lg">${launch?.details}</p> </article> ` })}`;
}, "/Users/gerardogtz/Workspace/astro/curso-astro-demo/src/pages/launch/[id].astro", void 0);

const $$file = "/Users/gerardogtz/Workspace/astro/curso-astro-demo/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
