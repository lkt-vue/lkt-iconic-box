import { defineComponent as u, useSlots as m, computed as s, openBlock as o, createElementBlock as t, createElementVNode as i, normalizeClass as b, createCommentVNode as n, createBlock as k, resolveDynamicComponent as f, withCtx as p, createTextVNode as _, toDisplayString as x, unref as g, renderSlot as v } from "vue";
const h = { class: "lkt-iconic-box-container" }, S = { class: "lkt-iconic-box" }, y = {
  key: 0,
  class: "lkt-iconic-box-art"
}, B = ["src", "alt"], C = { class: "lkt-iconic-box-content" }, T = { class: "lkt-iconic-box-label-container" }, L = {
  key: 0,
  class: "lkt-iconic-box-extra"
}, N = /* @__PURE__ */ u({
  __name: "LktIconicBox",
  props: {
    label: { default: "" },
    labelTag: { default: "p" },
    icon: { default: "" },
    imgSrc: { default: "" }
  },
  setup(c) {
    const l = c, a = m(), r = s(() => l.labelTag ? l.labelTag : "p"), d = s(() => l.icon !== "" || l.imgSrc !== "");
    return (e, V) => (o(), t("div", h, [
      i("div", S, [
        d.value ? (o(), t("div", y, [
          e.icon ? (o(), t("i", {
            key: 0,
            class: b([e.icon, "lkt-iconic-box-icon"])
          }, null, 2)) : n("", !0),
          e.imgSrc ? (o(), t("img", {
            key: 1,
            src: e.imgSrc,
            alt: e.label,
            class: "lkt-iconic-box-img"
          }, null, 8, B)) : n("", !0)
        ])) : n("", !0),
        i("div", C, [
          i("div", T, [
            (o(), k(f(r.value), { class: "lkt-iconic-box-label" }, {
              default: p(() => [
                _(x(e.label), 1)
              ]),
              _: 1
            }))
          ]),
          g(a).default ? (o(), t("div", L, [
            v(e.$slots, "default")
          ])) : n("", !0)
        ])
      ])
    ]));
  }
}), E = {
  install: (c) => {
    c.component("lkt-iconic-box") === void 0 && c.component("lkt-iconic-box", N);
  }
};
export {
  E as default
};
