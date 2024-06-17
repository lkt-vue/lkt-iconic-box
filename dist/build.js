import { defineComponent as u, useSlots as d, computed as i, openBlock as o, createElementBlock as t, normalizeClass as m, createCommentVNode as n, createElementVNode as k, createBlock as b, resolveDynamicComponent as f, withCtx as p, createTextVNode as g, toDisplayString as x, unref as _, renderSlot as v } from "vue";
const h = { class: "lkt-iconic-box" }, S = {
  key: 0,
  class: "lkt-iconic-box-art"
}, y = ["src", "alt"], B = { class: "lkt-iconic-box-content" }, C = {
  key: 0,
  class: "lkt-iconic-box-extra"
}, T = /* @__PURE__ */ u({
  __name: "LktIconicBox",
  props: {
    label: { default: "" },
    labelTag: { default: "p" },
    icon: { default: "" },
    imgSrc: { default: "" }
  },
  setup(l) {
    const c = l, s = d(), a = i(() => c.labelTag ? c.labelTag : "p"), r = i(() => c.icon !== "" || c.imgSrc !== "");
    return (e, L) => (o(), t("div", h, [
      r.value ? (o(), t("div", S, [
        e.icon ? (o(), t("i", {
          key: 0,
          class: m([e.icon, "lkt-iconic-box-icon"])
        }, null, 2)) : n("", !0),
        e.imgSrc ? (o(), t("img", {
          key: 1,
          src: e.imgSrc,
          alt: e.label,
          class: "lkt-iconic-box-img"
        }, null, 8, y)) : n("", !0)
      ])) : n("", !0),
      k("div", B, [
        (o(), b(f(a.value), { class: "lkt-iconic-box-label" }, {
          default: p(() => [
            g(x(e.label), 1)
          ]),
          _: 1
        })),
        _(s).default ? (o(), t("div", C, [
          v(e.$slots, "default")
        ])) : n("", !0)
      ])
    ]));
  }
}), V = {
  install: (l) => {
    l.component("lkt-iconic-box") === void 0 && l.component("lkt-iconic-box", T);
  }
};
export {
  V as default
};
