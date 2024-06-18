import { defineComponent as g, useSlots as _, computed as a, openBlock as o, createElementBlock as t, createElementVNode as i, normalizeClass as v, createCommentVNode as c, createBlock as s, resolveDynamicComponent as r, withCtx as u, createTextVNode as b, toDisplayString as d, unref as x, renderSlot as h } from "vue";
const L = { class: "lkt-iconic-box-container" }, T = { class: "lkt-iconic-box" }, y = {
  key: 0,
  class: "lkt-iconic-box-art"
}, S = ["src", "alt"], B = { class: "lkt-iconic-box-content" }, C = {
  key: 0,
  class: "lkt-iconic-box-label-container"
}, N = {
  key: 1,
  class: "lkt-iconic-box-sub-label-container"
}, V = {
  key: 2,
  class: "lkt-iconic-box-extra"
}, D = /* @__PURE__ */ g({
  __name: "LktIconicBox",
  props: {
    label: { default: "" },
    labelTag: { default: "p" },
    subLabel: { default: "" },
    subLabelTag: { default: "p" },
    icon: { default: "" },
    imgSrc: { default: "" }
  },
  setup(n) {
    const l = n, k = _(), m = a(() => l.labelTag ? l.labelTag : "p"), f = a(() => l.subLabelTag ? l.subLabelTag : "p"), p = a(() => l.icon !== "" || l.imgSrc !== "");
    return (e, E) => (o(), t("div", L, [
      i("div", T, [
        p.value ? (o(), t("div", y, [
          e.icon ? (o(), t("i", {
            key: 0,
            class: v([e.icon, "lkt-iconic-box-icon"])
          }, null, 2)) : c("", !0),
          e.imgSrc ? (o(), t("img", {
            key: 1,
            src: e.imgSrc,
            alt: e.label,
            class: "lkt-iconic-box-img"
          }, null, 8, S)) : c("", !0)
        ])) : c("", !0),
        i("div", B, [
          e.label ? (o(), t("div", C, [
            (o(), s(r(m.value), { class: "lkt-iconic-box-label" }, {
              default: u(() => [
                b(d(e.label), 1)
              ]),
              _: 1
            }))
          ])) : c("", !0),
          e.subLabel ? (o(), t("div", N, [
            (o(), s(r(f.value), { class: "lkt-iconic-box-sub-label" }, {
              default: u(() => [
                b(d(e.label), 1)
              ]),
              _: 1
            }))
          ])) : c("", !0),
          x(k).default ? (o(), t("div", V, [
            h(e.$slots, "default")
          ])) : c("", !0)
        ])
      ])
    ]));
  }
}), w = {
  install: (n) => {
    n.component("lkt-iconic-box") === void 0 && n.component("lkt-iconic-box", D);
  }
};
export {
  w as default
};
