import { defineComponent as g, useSlots as L, computed as i, openBlock as t, createElementBlock as a, createElementVNode as d, normalizeClass as _, createCommentVNode as o, createBlock as n, resolveDynamicComponent as s, withCtx as r, createTextVNode as u, toDisplayString as b, unref as v, renderSlot as T } from "vue";
const h = { class: "lkt-iconic-box-container" }, y = { class: "lkt-iconic-box" }, S = {
  key: 0,
  class: "lkt-iconic-box-art"
}, B = ["src", "alt"], C = { class: "lkt-iconic-box-content" }, E = {
  key: 0,
  class: "lkt-iconic-box-label-container"
}, N = {
  key: 1,
  class: "lkt-iconic-box-sub-label-container"
}, V = {
  key: 2,
  class: "lkt-iconic-box-extra-label-container"
}, D = {
  key: 3,
  class: "lkt-iconic-box-extra"
}, I = /* @__PURE__ */ g({
  __name: "LktIconicBox",
  props: {
    label: { default: "" },
    labelTag: { default: "p" },
    subLabel: { default: "" },
    subLabelTag: { default: "p" },
    extraLabel: { default: "" },
    extraLabelTag: { default: "p" },
    icon: { default: "" },
    imgSrc: { default: "" }
  },
  setup(c) {
    const l = c, k = L(), f = i(() => l.labelTag ? l.labelTag : "p"), m = i(() => l.subLabelTag ? l.subLabelTag : "p"), p = i(() => l.extraLabelTag ? l.extraLabelTag : "p"), x = i(() => l.icon !== "" || l.imgSrc !== "");
    return (e, w) => (t(), a("div", h, [
      d("div", y, [
        x.value ? (t(), a("div", S, [
          e.icon ? (t(), a("i", {
            key: 0,
            class: _([e.icon, "lkt-iconic-box-icon"])
          }, null, 2)) : o("", !0),
          e.imgSrc ? (t(), a("img", {
            key: 1,
            src: e.imgSrc,
            alt: e.label,
            class: "lkt-iconic-box-img"
          }, null, 8, B)) : o("", !0)
        ])) : o("", !0),
        d("div", C, [
          e.label ? (t(), a("div", E, [
            (t(), n(s(f.value), { class: "lkt-iconic-box-label" }, {
              default: r(() => [
                u(b(e.label), 1)
              ]),
              _: 1
            }))
          ])) : o("", !0),
          e.subLabel ? (t(), a("div", N, [
            (t(), n(s(m.value), { class: "lkt-iconic-box-sub-label" }, {
              default: r(() => [
                u(b(e.subLabel), 1)
              ]),
              _: 1
            }))
          ])) : o("", !0),
          e.extraLabel ? (t(), a("div", V, [
            (t(), n(s(p.value), { class: "lkt-iconic-box-extra-label" }, {
              default: r(() => [
                u(b(e.extraLabel), 1)
              ]),
              _: 1
            }))
          ])) : o("", !0),
          v(k).default ? (t(), a("div", D, [
            T(e.$slots, "default")
          ])) : o("", !0)
        ])
      ])
    ]));
  }
}), A = {
  install: (c) => {
    c.component("lkt-iconic-box") === void 0 && c.component("lkt-iconic-box", I);
  }
};
export {
  A as default
};
