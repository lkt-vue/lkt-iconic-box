import { defineComponent as L, useSlots as T, computed as n, openBlock as l, createElementBlock as a, createElementVNode as d, normalizeClass as v, createCommentVNode as o, createBlock as c, resolveDynamicComponent as r, withCtx as s, createTextVNode as u, toDisplayString as b, unref as _, renderSlot as h } from "vue";
const y = { class: "lkt-iconic-box-container" }, C = { class: "lkt-iconic-box" }, S = {
  key: 0,
  class: "lkt-iconic-box-art"
}, B = ["src", "alt"], E = { class: "lkt-iconic-box-content" }, N = {
  key: 1,
  class: "lkt-iconic-box-sub-label-container"
}, V = {
  key: 2,
  class: "lkt-iconic-box-extra-label-container"
}, D = {
  key: 3,
  class: "lkt-iconic-box-extra"
}, I = /* @__PURE__ */ L({
  __name: "LktIconicBox",
  props: {
    label: { default: "" },
    labelTag: { default: "p" },
    labelContainerTag: { default: "div" },
    subLabel: { default: "" },
    subLabelTag: { default: "p" },
    extraLabel: { default: "" },
    extraLabelTag: { default: "p" },
    icon: { default: "" },
    imgSrc: { default: "" }
  },
  setup(i) {
    const t = i, f = T(), k = n(() => t.labelTag ? t.labelTag : "p"), m = n(() => t.subLabelTag ? t.subLabelTag : "p"), g = n(() => t.extraLabelTag ? t.extraLabelTag : "p"), p = n(() => t.labelContainerTag ? t.labelContainerTag : "div"), x = n(() => t.icon !== "" || t.imgSrc !== "");
    return (e, w) => (l(), a("div", y, [
      d("div", C, [
        x.value ? (l(), a("div", S, [
          e.icon ? (l(), a("i", {
            key: 0,
            class: v([e.icon, "lkt-iconic-box-icon"])
          }, null, 2)) : o("", !0),
          e.imgSrc ? (l(), a("img", {
            key: 1,
            src: e.imgSrc,
            alt: e.label,
            class: "lkt-iconic-box-img"
          }, null, 8, B)) : o("", !0)
        ])) : o("", !0),
        d("div", E, [
          e.label ? (l(), c(r(p.value), {
            key: 0,
            class: "lkt-iconic-box-label-container"
          }, {
            default: s(() => [
              (l(), c(r(k.value), { class: "lkt-iconic-box-label" }, {
                default: s(() => [
                  u(b(e.label), 1)
                ]),
                _: 1
              }))
            ]),
            _: 1
          })) : o("", !0),
          e.subLabel ? (l(), a("div", N, [
            (l(), c(r(m.value), { class: "lkt-iconic-box-sub-label" }, {
              default: s(() => [
                u(b(e.subLabel), 1)
              ]),
              _: 1
            }))
          ])) : o("", !0),
          e.extraLabel ? (l(), a("div", V, [
            (l(), c(r(g.value), { class: "lkt-iconic-box-extra-label" }, {
              default: s(() => [
                u(b(e.extraLabel), 1)
              ]),
              _: 1
            }))
          ])) : o("", !0),
          _(f).default ? (l(), a("div", D, [
            h(e.$slots, "default")
          ])) : o("", !0)
        ])
      ])
    ]));
  }
}), A = {
  install: (i) => {
    i.component("lkt-iconic-box") === void 0 && i.component("lkt-iconic-box", I);
  }
};
export {
  A as default
};
