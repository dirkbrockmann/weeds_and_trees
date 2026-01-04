(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:border-1{border-style:var(--tw-border-style);border-width:1px}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media(min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media(prefers-color-scheme:dark){.tw\\:dark\\:border-white{border-color:var(--tw-color-white)}.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_1ueg0_1,._controlPanel_1ueg0_8{display:block;line-height:0;box-sizing:border-box}._displayPanel_1ueg0_1>canvas,._displayPanel_1ueg0_1>svg,._controlPanel_1ueg0_8>svg,._controlPanel_1ueg0_8>canvas{display:block;box-sizing:border-box}._trunk_1ueg0_24,._branch_1ueg0_24{stroke:#000;stroke-opacity:1;stroke-width:3px;stroke-linecap:round}@media(prefers-color-scheme:dark){._trunk_1ueg0_24,._branch_1ueg0_24{stroke:#fff}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Yu = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 400, height: 400 },
  display_margin: { top: 10, right: 10, bottom: 0, left: 10 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0 tw:border-1 tw-border-black tw:dark:border-white",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function ae(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Vu(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function So(t) {
  let n, e, r;
  t.length !== 2 ? (n = ae, e = (s, l) => ae(t(s), l), r = (s, l) => t(s) - l) : (n = t === ae || t === Vu ? t : Ku, e = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function Ku() {
  return 0;
}
function Wu(t) {
  return t === null ? NaN : +t;
}
const Zu = So(ae), Ju = Zu.right;
So(Wu).center;
const Qu = Math.sqrt(50), tl = Math.sqrt(10), nl = Math.sqrt(2);
function pe(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Qu ? 10 : a >= tl ? 5 : a >= nl ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? pe(t, n, e * 2) : [s, l, u];
}
function el(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? pe(n, t, e) : pe(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function mr(t, n, e) {
  return n = +n, t = +t, e = +e, pe(t, n, e)[2];
}
function rl(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? mr(n, t, e) : mr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Li(t, n) {
  let e;
  if (n === void 0)
    for (const r of t)
      r != null && (e < r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of t)
      (i = n(i, ++r, t)) != null && (e < i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
function Di(t, n) {
  let e;
  if (n === void 0)
    for (const r of t)
      r != null && (e > r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of t)
      (i = n(i, ++r, t)) != null && (e > i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
var il = { value: () => {
} };
function ko() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new oe(e);
}
function oe(t) {
  this._ = t;
}
function al(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
oe.prototype = ko.prototype = {
  constructor: oe,
  on: function(t, n) {
    var e = this._, r = al(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = ol(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = qi(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = qi(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new oe(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function ol(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function qi(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = il, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var wr = "http://www.w3.org/1999/xhtml";
const Hi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: wr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ie(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Hi.hasOwnProperty(n) ? { space: Hi[n], local: t } : t;
}
function sl(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === wr && n.documentElement.namespaceURI === wr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function ul(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Po(t) {
  var n = Ie(t);
  return (n.local ? ul : sl)(n);
}
function ll() {
}
function ni(t) {
  return t == null ? ll : function() {
    return this.querySelector(t);
  };
}
function cl(t) {
  typeof t != "function" && (t = ni(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new D(r, this._parents);
}
function fl(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function hl() {
  return [];
}
function Eo(t) {
  return t == null ? hl : function() {
    return this.querySelectorAll(t);
  };
}
function pl(t) {
  return function() {
    return fl(t.apply(this, arguments));
  };
}
function dl(t) {
  typeof t == "function" ? t = pl(t) : t = Eo(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new D(r, i);
}
function Oo(t) {
  return function() {
    return this.matches(t);
  };
}
function zo(t) {
  return function(n) {
    return n.matches(t);
  };
}
var gl = Array.prototype.find;
function _l(t) {
  return function() {
    return gl.call(this.children, t);
  };
}
function yl() {
  return this.firstElementChild;
}
function vl(t) {
  return this.select(t == null ? yl : _l(typeof t == "function" ? t : zo(t)));
}
var ml = Array.prototype.filter;
function wl() {
  return Array.from(this.children);
}
function bl(t) {
  return function() {
    return ml.call(this.children, t);
  };
}
function xl(t) {
  return this.selectAll(t == null ? wl : bl(typeof t == "function" ? t : zo(t)));
}
function Ml(t) {
  typeof t != "function" && (t = Oo(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new D(r, this._parents);
}
function Co(t) {
  return new Array(t.length);
}
function $l() {
  return new D(this._enter || this._groups.map(Co), this._parents);
}
function de(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
de.prototype = {
  constructor: de,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Al(t) {
  return function() {
    return t;
  };
}
function Tl(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new de(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function Nl(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new de(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Sl(t) {
  return t.__data__;
}
function kl(t, n) {
  if (!arguments.length) return Array.from(this, Sl);
  var e = n ? Nl : Tl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Al(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Pl(t.call(c, c && c.__data__, u, r)), d = p.length, y = s[u] = new Array(d), w = o[u] = new Array(d), b = l[u] = new Array(f);
    e(c, h, y, w, b, p, n);
    for (var g = 0, M = 0, _, v; g < d; ++g)
      if (_ = y[g]) {
        for (g >= M && (M = g + 1); !(v = w[M]) && ++M < d; ) ;
        _._next = v || null;
      }
  }
  return o = new D(o, r), o._enter = s, o._exit = l, o;
}
function Pl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function El() {
  return new D(this._exit || this._groups.map(Co), this._parents);
}
function Ol(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function zl(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new D(s, this._parents);
}
function Cl() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Il(t) {
  t || (t = Rl);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(n);
  }
  return new D(i, this._parents).order();
}
function Rl(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function jl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Fl() {
  return Array.from(this);
}
function Ll() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Dl() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function ql() {
  return !this.node();
}
function Hl(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Xl(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Bl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ul(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Gl(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Yl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Vl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Kl(t, n) {
  var e = Ie(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Bl : Xl : typeof n == "function" ? e.local ? Vl : Yl : e.local ? Gl : Ul)(e, n));
}
function Io(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Wl(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Zl(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Jl(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Ql(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Wl : typeof n == "function" ? Jl : Zl)(t, n, e ?? "")) : nn(this.node(), t);
}
function nn(t, n) {
  return t.style.getPropertyValue(n) || Io(t).getComputedStyle(t, null).getPropertyValue(n);
}
function tc(t) {
  return function() {
    delete this[t];
  };
}
function nc(t, n) {
  return function() {
    this[t] = n;
  };
}
function ec(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function rc(t, n) {
  return arguments.length > 1 ? this.each((n == null ? tc : typeof n == "function" ? ec : nc)(t, n)) : this.node()[t];
}
function Ro(t) {
  return t.trim().split(/^|\s+/);
}
function ei(t) {
  return t.classList || new jo(t);
}
function jo(t) {
  this._node = t, this._names = Ro(t.getAttribute("class") || "");
}
jo.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Fo(t, n) {
  for (var e = ei(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Lo(t, n) {
  for (var e = ei(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ic(t) {
  return function() {
    Fo(this, t);
  };
}
function ac(t) {
  return function() {
    Lo(this, t);
  };
}
function oc(t, n) {
  return function() {
    (n.apply(this, arguments) ? Fo : Lo)(this, t);
  };
}
function sc(t, n) {
  var e = Ro(t + "");
  if (arguments.length < 2) {
    for (var r = ei(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? oc : n ? ic : ac)(e, n));
}
function uc() {
  this.textContent = "";
}
function lc(t) {
  return function() {
    this.textContent = t;
  };
}
function cc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function fc(t) {
  return arguments.length ? this.each(t == null ? uc : (typeof t == "function" ? cc : lc)(t)) : this.node().textContent;
}
function hc() {
  this.innerHTML = "";
}
function pc(t) {
  return function() {
    this.innerHTML = t;
  };
}
function dc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function gc(t) {
  return arguments.length ? this.each(t == null ? hc : (typeof t == "function" ? dc : pc)(t)) : this.node().innerHTML;
}
function _c() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function yc() {
  return this.each(_c);
}
function vc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function mc() {
  return this.each(vc);
}
function wc(t) {
  var n = typeof t == "function" ? t : Po(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function bc() {
  return null;
}
function xc(t, n) {
  var e = typeof t == "function" ? t : Po(t), r = n == null ? bc : typeof n == "function" ? n : ni(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Mc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function $c() {
  return this.each(Mc);
}
function Ac() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Tc() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Nc(t) {
  return this.select(t ? Tc : Ac);
}
function Sc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function kc(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Pc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Ec(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Oc(t, n, e) {
  return function() {
    var r = this.__on, i, a = kc(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function zc(t, n, e) {
  var r = Pc(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Oc : Ec, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function Do(t, n, e) {
  var r = Io(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Cc(t, n) {
  return function() {
    return Do(this, t, n);
  };
}
function Ic(t, n) {
  return function() {
    return Do(this, t, n.apply(this, arguments));
  };
}
function Rc(t, n) {
  return this.each((typeof n == "function" ? Ic : Cc)(t, n));
}
function* jc() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var qo = [null];
function D(t, n) {
  this._groups = t, this._parents = n;
}
function Dn() {
  return new D([[document.documentElement]], qo);
}
function Fc() {
  return this;
}
D.prototype = Dn.prototype = {
  constructor: D,
  select: cl,
  selectAll: dl,
  selectChild: vl,
  selectChildren: xl,
  filter: Ml,
  data: kl,
  enter: $l,
  exit: El,
  join: Ol,
  merge: zl,
  selection: Fc,
  order: Cl,
  sort: Il,
  call: jl,
  nodes: Fl,
  node: Ll,
  size: Dl,
  empty: ql,
  each: Hl,
  attr: Kl,
  style: Ql,
  property: rc,
  classed: sc,
  text: fc,
  html: gc,
  raise: yc,
  lower: mc,
  append: wc,
  insert: xc,
  remove: $c,
  clone: Nc,
  datum: Sc,
  on: zc,
  dispatch: Rc,
  [Symbol.iterator]: jc
};
function Lc(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], qo);
}
function ri(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Ho(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function qn() {
}
var Nn = 0.7, ge = 1 / Nn, Jt = "\\s*([+-]?\\d+)\\s*", Sn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", at = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Dc = /^#([0-9a-f]{3,8})$/, qc = new RegExp(`^rgb\\(${Jt},${Jt},${Jt}\\)$`), Hc = new RegExp(`^rgb\\(${at},${at},${at}\\)$`), Xc = new RegExp(`^rgba\\(${Jt},${Jt},${Jt},${Sn}\\)$`), Bc = new RegExp(`^rgba\\(${at},${at},${at},${Sn}\\)$`), Uc = new RegExp(`^hsl\\(${Sn},${at},${at}\\)$`), Gc = new RegExp(`^hsla\\(${Sn},${at},${at},${Sn}\\)$`), Xi = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ri(qn, Ft, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Bi,
  // Deprecated! Use color.formatHex.
  formatHex: Bi,
  formatHex8: Yc,
  formatHsl: Vc,
  formatRgb: Ui,
  toString: Ui
});
function Bi() {
  return this.rgb().formatHex();
}
function Yc() {
  return this.rgb().formatHex8();
}
function Vc() {
  return Xo(this).formatHsl();
}
function Ui() {
  return this.rgb().formatRgb();
}
function Ft(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Dc.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Gi(n) : e === 3 ? new j(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Yn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Yn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = qc.exec(t)) ? new j(n[1], n[2], n[3], 1) : (n = Hc.exec(t)) ? new j(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Xc.exec(t)) ? Yn(n[1], n[2], n[3], n[4]) : (n = Bc.exec(t)) ? Yn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Uc.exec(t)) ? Ki(n[1], n[2] / 100, n[3] / 100, 1) : (n = Gc.exec(t)) ? Ki(n[1], n[2] / 100, n[3] / 100, n[4]) : Xi.hasOwnProperty(t) ? Gi(Xi[t]) : t === "transparent" ? new j(NaN, NaN, NaN, 0) : null;
}
function Gi(t) {
  return new j(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Yn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new j(t, n, e, r);
}
function Kc(t) {
  return t instanceof qn || (t = Ft(t)), t ? (t = t.rgb(), new j(t.r, t.g, t.b, t.opacity)) : new j();
}
function br(t, n, e, r) {
  return arguments.length === 1 ? Kc(t) : new j(t, n, e, r ?? 1);
}
function j(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ri(j, br, Ho(qn, {
  brighter(t) {
    return t = t == null ? ge : Math.pow(ge, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Nn : Math.pow(Nn, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new j(Ct(this.r), Ct(this.g), Ct(this.b), _e(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Yi,
  // Deprecated! Use color.formatHex.
  formatHex: Yi,
  formatHex8: Wc,
  formatRgb: Vi,
  toString: Vi
}));
function Yi() {
  return `#${Et(this.r)}${Et(this.g)}${Et(this.b)}`;
}
function Wc() {
  return `#${Et(this.r)}${Et(this.g)}${Et(this.b)}${Et((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Vi() {
  const t = _e(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ct(this.r)}, ${Ct(this.g)}, ${Ct(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function _e(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ct(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Et(t) {
  return t = Ct(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ki(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new J(t, n, e, r);
}
function Xo(t) {
  if (t instanceof J) return new J(t.h, t.s, t.l, t.opacity);
  if (t instanceof qn || (t = Ft(t)), !t) return new J();
  if (t instanceof J) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new J(o, s, l, t.opacity);
}
function Zc(t, n, e, r) {
  return arguments.length === 1 ? Xo(t) : new J(t, n, e, r ?? 1);
}
function J(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ri(J, Zc, Ho(qn, {
  brighter(t) {
    return t = t == null ? ge : Math.pow(ge, t), new J(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Nn : Math.pow(Nn, t), new J(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new j(
      ir(t >= 240 ? t - 240 : t + 120, i, r),
      ir(t, i, r),
      ir(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new J(Wi(this.h), Vn(this.s), Vn(this.l), _e(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = _e(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Wi(this.h)}, ${Vn(this.s) * 100}%, ${Vn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Wi(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Vn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ir(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ii = (t) => () => t;
function Jc(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Qc(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function tf(t) {
  return (t = +t) == 1 ? Bo : function(n, e) {
    return e - n ? Qc(n, e, t) : ii(isNaN(n) ? e : n);
  };
}
function Bo(t, n) {
  var e = n - t;
  return e ? Jc(t, e) : ii(isNaN(t) ? n : t);
}
const ye = (function t(n) {
  var e = tf(n);
  function r(i, a) {
    var o = e((i = br(i)).r, (a = br(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = Bo(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function nf(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function ef(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function rf(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = ai(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function af(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function W(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function of(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ai(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var xr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ar = new RegExp(xr.source, "g");
function sf(t) {
  return function() {
    return t;
  };
}
function uf(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Uo(t, n) {
  var e = xr.lastIndex = ar.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = xr.exec(t)) && (i = ar.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: W(r, i) })), e = ar.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? uf(l[0].x) : sf(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function ai(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ii(n) : (e === "number" ? W : e === "string" ? (r = Ft(n)) ? (n = r, ye) : Uo : n instanceof Ft ? ye : n instanceof Date ? af : ef(n) ? nf : Array.isArray(n) ? rf : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? of : W)(t, n);
}
function lf(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Zi = 180 / Math.PI, Mr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Go(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * Zi,
    skewX: Math.atan(l) * Zi,
    scaleX: o,
    scaleY: s
  };
}
var Kn;
function cf(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Mr : Go(n.a, n.b, n.c, n.d, n.e, n.f);
}
function ff(t) {
  return t == null || (Kn || (Kn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Kn.setAttribute("transform", t), !(t = Kn.transform.baseVal.consolidate())) ? Mr : (t = t.matrix, Go(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Yo(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var y = p.push("translate(", null, n, null, e);
      d.push({ i: y - 4, x: W(u, h) }, { i: y - 2, x: W(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: W(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: W(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: y - 4, x: W(u, h) }, { i: y - 2, x: W(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, y = f.length, w; ++d < y; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var hf = Yo(cf, "px, ", "px)", "deg)"), pf = Yo(ff, ", ", ")", ")"), en = 0, mn = 0, gn = 0, Vo = 1e3, ve, wn, me = 0, Lt = 0, Re = 0, kn = typeof performance == "object" && performance.now ? performance : Date, Ko = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function oi() {
  return Lt || (Ko(df), Lt = kn.now() + Re);
}
function df() {
  Lt = 0;
}
function we() {
  this._call = this._time = this._next = null;
}
we.prototype = Wo.prototype = {
  constructor: we,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? oi() : +e) + (n == null ? 0 : +n), !this._next && wn !== this && (wn ? wn._next = this : ve = this, wn = this), this._call = t, this._time = e, $r();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $r());
  }
};
function Wo(t, n, e) {
  var r = new we();
  return r.restart(t, n, e), r;
}
function gf() {
  oi(), ++en;
  for (var t = ve, n; t; )
    (n = Lt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --en;
}
function Ji() {
  Lt = (me = kn.now()) + Re, en = mn = 0;
  try {
    gf();
  } finally {
    en = 0, yf(), Lt = 0;
  }
}
function _f() {
  var t = kn.now(), n = t - me;
  n > Vo && (Re -= n, me = t);
}
function yf() {
  for (var t, n = ve, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : ve = e);
  wn = t, $r(r);
}
function $r(t) {
  if (!en) {
    mn && (mn = clearTimeout(mn));
    var n = t - Lt;
    n > 24 ? (t < 1 / 0 && (mn = setTimeout(Ji, t - kn.now() - Re)), gn && (gn = clearInterval(gn))) : (gn || (me = kn.now(), gn = setInterval(_f, Vo)), en = 1, Ko(Ji));
  }
}
function Qi(t, n, e) {
  var r = new we();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var vf = ko("start", "end", "cancel", "interrupt"), mf = [], Zo = 0, ta = 1, Ar = 2, se = 3, na = 4, Tr = 5, ue = 6;
function je(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  wf(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: vf,
    tween: mf,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Zo
  });
}
function si(t, n) {
  var e = et(t, n);
  if (e.state > Zo) throw new Error("too late; already scheduled");
  return e;
}
function ut(t, n) {
  var e = et(t, n);
  if (e.state > se) throw new Error("too late; already running");
  return e;
}
function et(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function wf(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Wo(a, 0, e.time);
  function a(u) {
    e.state = ta, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (e.state !== ta) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === se) return Qi(o);
        p.state === na ? (p.state = ue, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = ue, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Qi(function() {
      e.state === se && (e.state = na, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Ar, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Ar) {
      for (e.state = se, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Tr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === Tr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = ue, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function bf(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > Ar && r.state < Tr, r.state = ue, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function xf(t) {
  return this.each(function() {
    bf(this, t);
  });
}
function Mf(t, n) {
  var e, r;
  return function() {
    var i = ut(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function $f(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = ut(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function Af(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = et(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? Mf : $f)(e, t, n));
}
function ui(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = ut(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return et(i, r).value[n];
  };
}
function Jo(t, n) {
  var e;
  return (typeof n == "number" ? W : n instanceof Ft ? ye : (e = Ft(n)) ? (n = e, ye) : Uo)(t, n);
}
function Tf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Nf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Sf(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function kf(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Pf(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Ef(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Of(t, n) {
  var e = Ie(t), r = e === "transform" ? pf : Jo;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Ef : Pf)(e, r, ui(this, "attr." + t, n)) : n == null ? (e.local ? Nf : Tf)(e) : (e.local ? kf : Sf)(e, r, n));
}
function zf(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Cf(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function If(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Cf(t, a)), e;
  }
  return i._value = n, i;
}
function Rf(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && zf(t, a)), e;
  }
  return i._value = n, i;
}
function jf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Ie(t);
  return this.tween(e, (r.local ? If : Rf)(r, n));
}
function Ff(t, n) {
  return function() {
    si(this, t).delay = +n.apply(this, arguments);
  };
}
function Lf(t, n) {
  return n = +n, function() {
    si(this, t).delay = n;
  };
}
function Df(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ff : Lf)(n, t)) : et(this.node(), n).delay;
}
function qf(t, n) {
  return function() {
    ut(this, t).duration = +n.apply(this, arguments);
  };
}
function Hf(t, n) {
  return n = +n, function() {
    ut(this, t).duration = n;
  };
}
function Xf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? qf : Hf)(n, t)) : et(this.node(), n).duration;
}
function Bf(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    ut(this, t).ease = n;
  };
}
function Uf(t) {
  var n = this._id;
  return arguments.length ? this.each(Bf(n, t)) : et(this.node(), n).ease;
}
function Gf(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    ut(this, t).ease = e;
  };
}
function Yf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Gf(this._id, t));
}
function Vf(t) {
  typeof t != "function" && (t = Oo(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new gt(r, this._parents, this._name, this._id);
}
function Kf(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new gt(o, this._parents, this._name, this._id);
}
function Wf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Zf(t, n, e) {
  var r, i, a = Wf(n) ? si : ut;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function Jf(t, n) {
  var e = this._id;
  return arguments.length < 2 ? et(this.node(), e).on.on(t) : this.each(Zf(e, t, n));
}
function Qf(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function th() {
  return this.on("end.remove", Qf(this._id));
}
function nh(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ni(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, je(u[f], n, e, f, u, et(c, e)));
  return new gt(a, this._parents, n, e);
}
function eh(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Eo(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = et(c, e), y = 0, w = f.length; y < w; ++y)
          (p = f[y]) && je(p, n, e, y, f, d);
        a.push(f), o.push(c);
      }
  return new gt(a, o, n, e);
}
var rh = Dn.prototype.constructor;
function ih() {
  return new rh(this._groups, this._parents);
}
function ah(t, n) {
  var e, r, i;
  return function() {
    var a = nn(this, t), o = (this.style.removeProperty(t), nn(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function Qo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function oh(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = nn(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function sh(t, n, e) {
  var r, i, a;
  return function() {
    var o = nn(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), nn(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function uh(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = ut(this, t), u = l.on, c = l.value[a] == null ? s || (s = Qo(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function lh(t, n, e) {
  var r = (t += "") == "transform" ? hf : Jo;
  return n == null ? this.styleTween(t, ah(t, r)).on("end.style." + t, Qo(t)) : typeof n == "function" ? this.styleTween(t, sh(t, r, ui(this, "style." + t, n))).each(uh(this._id, t)) : this.styleTween(t, oh(t, r, n), e).on("end.style." + t, null);
}
function ch(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function fh(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && ch(t, o, e)), r;
  }
  return a._value = n, a;
}
function hh(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, fh(t, n, e ?? ""));
}
function ph(t) {
  return function() {
    this.textContent = t;
  };
}
function dh(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function gh(t) {
  return this.tween("text", typeof t == "function" ? dh(ui(this, "text", t)) : ph(t == null ? "" : t + ""));
}
function _h(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function yh(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && _h(i)), n;
  }
  return r._value = t, r;
}
function vh(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, yh(t));
}
function mh() {
  for (var t = this._name, n = this._id, e = ts(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = et(l, n);
        je(l, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new gt(r, this._parents, t, e);
}
function wh() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = ut(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var bh = 0;
function gt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function ts() {
  return ++bh;
}
var ct = Dn.prototype;
gt.prototype = {
  constructor: gt,
  select: nh,
  selectAll: eh,
  selectChild: ct.selectChild,
  selectChildren: ct.selectChildren,
  filter: Vf,
  merge: Kf,
  selection: ih,
  transition: mh,
  call: ct.call,
  nodes: ct.nodes,
  node: ct.node,
  size: ct.size,
  empty: ct.empty,
  each: ct.each,
  on: Jf,
  attr: Of,
  attrTween: jf,
  style: lh,
  styleTween: hh,
  text: gh,
  textTween: vh,
  remove: th,
  tween: Af,
  delay: Df,
  duration: Xf,
  ease: Uf,
  easeVarying: Yf,
  end: wh,
  [Symbol.iterator]: ct[Symbol.iterator]
};
function xh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Mh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: xh
};
function $h(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ah(t) {
  var n, e;
  t instanceof gt ? (n = t._id, t = t._name) : (n = ts(), (e = Mh).time = oi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && je(l, t, n, u, o, e || $h(l, n));
  return new gt(r, this._parents, t, n);
}
Dn.prototype.interrupt = xf;
Dn.prototype.transition = Ah;
const Nr = Math.PI, Sr = 2 * Nr, kt = 1e-6, Th = Sr - kt;
function ns(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Nh(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return ns;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Sh {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? ns : Nh(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = r - n, u = i - e, c = o - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > kt) if (!(Math.abs(h * l - u * c) > kt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, d = i - s, y = l * l + u * u, w = p * p + d * d, b = Math.sqrt(y), g = Math.sqrt(f), M = a * Math.tan((Nr - Math.acos((y + f - w) / (2 * b * g))) / 2), _ = M / g, v = M / b;
      Math.abs(_ - 1) > kt && this._append`L${n + _ * c},${e + _ * h}`, this._append`A${a},${a},0,0,${+(h * p > c * d)},${this._x1 = n + v * l},${this._y1 = e + v * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > kt || Math.abs(this._y1 - c) > kt) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Sr + Sr), f > Th ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > kt && this._append`A${r},${r},0,${+(f >= Nr)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function kh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function be(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function rn(t) {
  return t = be(Math.abs(t)), t ? t[1] : NaN;
}
function Ph(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Eh(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Oh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function xe(t) {
  if (!(n = Oh.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new li({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
xe.prototype = li.prototype;
function li(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
li.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function zh(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var es;
function Ch(t, n) {
  var e = be(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (es = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + be(t, Math.max(0, n + a - 1))[0];
}
function ea(t, n) {
  var e = be(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ra = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: kh,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => ea(t * 100, n),
  r: ea,
  s: Ch,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ia(t) {
  return t;
}
var aa = Array.prototype.map, oa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ih(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? ia : Ph(aa.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? ia : Eh(aa.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = xe(h);
    var f = h.fill, p = h.align, d = h.sign, y = h.symbol, w = h.zero, b = h.width, g = h.comma, M = h.precision, _ = h.trim, v = h.type;
    v === "n" ? (g = !0, v = "g") : ra[v] || (M === void 0 && (M = 12), _ = !0, v = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var N = y === "$" ? e : y === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = y === "$" ? r : /[%p]/.test(v) ? o : "", z = ra[v], H = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function X(m) {
      var C = N, T = P, I, St, L;
      if (v === "c")
        T = z(m) + T, m = "";
      else {
        m = +m;
        var B = m < 0 || 1 / m < 0;
        if (m = isNaN(m) ? l : z(Math.abs(m), M), _ && (m = zh(m)), B && +m == 0 && d !== "+" && (B = !1), C = (B ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + C, T = (v === "s" ? oa[8 + es / 3] : "") + T + (B && d === "(" ? ")" : ""), H) {
          for (I = -1, St = m.length; ++I < St; )
            if (L = m.charCodeAt(I), 48 > L || L > 57) {
              T = (L === 46 ? i + m.slice(I + 1) : m.slice(I)) + T, m = m.slice(0, I);
              break;
            }
        }
      }
      g && !w && (m = n(m, 1 / 0));
      var K = C.length + m.length + T.length, E = K < b ? new Array(b - K + 1).join(f) : "";
      switch (g && w && (m = n(E + m, E.length ? b - T.length : 1 / 0), E = ""), p) {
        case "<":
          m = C + m + T + E;
          break;
        case "=":
          m = C + E + m + T;
          break;
        case "^":
          m = E.slice(0, K = E.length >> 1) + C + m + T + E.slice(K);
          break;
        default:
          m = E + C + m + T;
          break;
      }
      return a(m);
    }
    return X.toString = function() {
      return h + "";
    }, X;
  }
  function c(h, f) {
    var p = u((h = xe(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(rn(f) / 3))) * 3, y = Math.pow(10, -d), w = oa[8 + d / 3];
    return function(b) {
      return p(y * b) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var Wn, rs, is;
Rh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Rh(t) {
  return Wn = Ih(t), rs = Wn.format, is = Wn.formatPrefix, Wn;
}
function jh(t) {
  return Math.max(0, -rn(Math.abs(t)));
}
function Fh(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(rn(n) / 3))) * 3 - rn(Math.abs(t)));
}
function Lh(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, rn(n) - rn(t)) + 1;
}
function Dh(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function qh(t) {
  return function() {
    return t;
  };
}
function Hh(t) {
  return +t;
}
var sa = [0, 1];
function Vt(t) {
  return t;
}
function kr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : qh(isNaN(n) ? NaN : 0.5);
}
function Xh(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Bh(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = kr(i, r), a = e(o, a)) : (r = kr(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function Uh(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = kr(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = Ju(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function Gh(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Yh() {
  var t = sa, n = sa, e = ai, r, i, a, o = Vt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return o !== Vt && (o = Xh(t[0], t[f - 1])), s = f > 2 ? Uh : Bh, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), W)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Hh), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = lf, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Vt, c()) : o !== Vt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function Vh() {
  return Yh()(Vt, Vt);
}
function Kh(t, n, e, r) {
  var i = rl(t, n, e), a;
  switch (r = xe(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Fh(i, o)) && (r.precision = a), is(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Lh(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = jh(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return rs(r);
}
function Wh(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return el(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Kh(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = mr(o, s, e), u === l)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function Nt() {
  var t = Vh();
  return t.copy = function() {
    return Gh(t, Nt());
  }, Dh.apply(t, arguments), Wh(t);
}
function Yt(t) {
  return function() {
    return t;
  };
}
function Zh(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Sh(n);
}
function Jh(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function as(t) {
  this._context = t;
}
as.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function Qh(t) {
  return new as(t);
}
function tp(t) {
  return t[0];
}
function np(t) {
  return t[1];
}
function ep(t, n) {
  var e = Yt(!0), r = null, i = Qh, a = null, o = Zh(s);
  t = typeof t == "function" ? t : t === void 0 ? tp : Yt(t), n = typeof n == "function" ? n : n === void 0 ? np : Yt(n);
  function s(l) {
    var u, c = (l = Jh(l)).length, h, f = !1, p;
    for (r == null && (a = i(p = o())), u = 0; u <= c; ++u)
      !(u < c && e(h = l[u], u, l)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(h, u, l), +n(h, u, l));
    if (p) return a = null, p + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Yt(+l), s) : t;
  }, s.y = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Yt(+l), s) : n;
  }, s.defined = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Yt(!!l), s) : e;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, r != null && (a = i(r)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? r = a = null : a = i(r = l), s) : r;
  }, s;
}
function bn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
bn.prototype = {
  constructor: bn,
  scale: function(t) {
    return t === 1 ? this : new bn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new bn(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
bn.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode('.d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;font-size:var(--d3w-font-size, 16px);line-height:var(--d3w-line-height, 1.25);font-family:var(--d3w-font-family, system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif);font-weight:var(--d3w-font-weight, 400)}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_1279t_47{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_1279t_47 ._title_1279t_59{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_1279t_47 ._label_1279t_67{fill:var(--color-text);stroke:none}._widget_1279t_47 ._lit_1279t_72{fill:var(--color-lit)}._button_1279t_76>._symbol_1279t_76,._radio_1279t_77>._radiobutton_1279t_77>._symbol_1279t_76{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_1279t_47 ._symbol_1279t_76._selected_1279t_83,._toggle_1279t_84._selected_1279t_83,._widget_1279t_47 ._symbol_1279t_76._selected_1279t_83._lit_1279t_72{fill:var(--color-selected)}._widget_1279t_47 ._symbol_1279t_76._lit_1279t_72{fill:var(--color-lit-symbol)}._slider_1279t_93>._track_1279t_93,._toggle_1279t_84>._track_1279t_93{pointer-events:none}._slider_1279t_93>._track_overlay_1279t_98,._toggle_1279t_84>._track_overlay_1279t_98{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_1279t_93>._handle_1279t_106,._toggle_1279t_84>._handle_1279t_106{fill:var(--color-handle)}')), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
function le(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function rp(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function os(t) {
  let n, e, r;
  t.length !== 2 ? (n = le, e = (s, l) => le(t(s), l), r = (s, l) => t(s) - l) : (n = t === le || t === rp ? t : ip, e = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function ip() {
  return 0;
}
function ap(t) {
  return t === null ? NaN : +t;
}
const op = os(le), sp = op.right;
os(ap).center;
const up = Math.sqrt(50), lp = Math.sqrt(10), cp = Math.sqrt(2);
function Me(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= up ? 10 : a >= lp ? 5 : a >= cp ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? Me(t, n, e * 2) : [s, l, u];
}
function fp(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? Me(n, t, e) : Me(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function Pr(t, n, e) {
  return n = +n, t = +t, e = +e, Me(t, n, e)[2];
}
function hp(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Pr(n, t, e) : Pr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Zn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function pp(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
var dp = { value: () => {
} };
function ci() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new ce(e);
}
function ce(t) {
  this._ = t;
}
function gp(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
ce.prototype = ci.prototype = {
  constructor: ce,
  on: function(t, n) {
    var e = this._, r = gp(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = _p(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = ua(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = ua(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new ce(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function _p(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function ua(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = dp, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Er = "http://www.w3.org/1999/xhtml";
const la = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Er,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Fe(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), la.hasOwnProperty(n) ? { space: la[n], local: t } : t;
}
function yp(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Er && n.documentElement.namespaceURI === Er ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function vp(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ss(t) {
  var n = Fe(t);
  return (n.local ? vp : yp)(n);
}
function mp() {
}
function fi(t) {
  return t == null ? mp : function() {
    return this.querySelector(t);
  };
}
function wp(t) {
  typeof t != "function" && (t = fi(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new q(r, this._parents);
}
function bp(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function xp() {
  return [];
}
function us(t) {
  return t == null ? xp : function() {
    return this.querySelectorAll(t);
  };
}
function Mp(t) {
  return function() {
    return bp(t.apply(this, arguments));
  };
}
function $p(t) {
  typeof t == "function" ? t = Mp(t) : t = us(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new q(r, i);
}
function ls(t) {
  return function() {
    return this.matches(t);
  };
}
function cs(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Ap = Array.prototype.find;
function Tp(t) {
  return function() {
    return Ap.call(this.children, t);
  };
}
function Np() {
  return this.firstElementChild;
}
function Sp(t) {
  return this.select(t == null ? Np : Tp(typeof t == "function" ? t : cs(t)));
}
var kp = Array.prototype.filter;
function Pp() {
  return Array.from(this.children);
}
function Ep(t) {
  return function() {
    return kp.call(this.children, t);
  };
}
function Op(t) {
  return this.selectAll(t == null ? Pp : Ep(typeof t == "function" ? t : cs(t)));
}
function zp(t) {
  typeof t != "function" && (t = ls(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new q(r, this._parents);
}
function fs(t) {
  return new Array(t.length);
}
function Cp() {
  return new q(this._enter || this._groups.map(fs), this._parents);
}
function $e(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
$e.prototype = {
  constructor: $e,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Ip(t) {
  return function() {
    return t;
  };
}
function Rp(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new $e(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function jp(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new $e(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Fp(t) {
  return t.__data__;
}
function Lp(t, n) {
  if (!arguments.length) return Array.from(this, Fp);
  var e = n ? jp : Rp, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ip(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Dp(t.call(c, c && c.__data__, u, r)), d = p.length, y = s[u] = new Array(d), w = o[u] = new Array(d), b = l[u] = new Array(f);
    e(c, h, y, w, b, p, n);
    for (var g = 0, M = 0, _, v; g < d; ++g)
      if (_ = y[g]) {
        for (g >= M && (M = g + 1); !(v = w[M]) && ++M < d; ) ;
        _._next = v || null;
      }
  }
  return o = new q(o, r), o._enter = s, o._exit = l, o;
}
function Dp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function qp() {
  return new q(this._exit || this._groups.map(fs), this._parents);
}
function Hp(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function Xp(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new q(s, this._parents);
}
function Bp() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Up(t) {
  t || (t = Gp);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(n);
  }
  return new q(i, this._parents).order();
}
function Gp(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Yp() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Vp() {
  return Array.from(this);
}
function Kp() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Wp() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Zp() {
  return !this.node();
}
function Jp(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Qp(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function td(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function nd(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function ed(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function rd(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function id(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function ad(t, n) {
  var e = Fe(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? td : Qp : typeof n == "function" ? e.local ? id : rd : e.local ? ed : nd)(e, n));
}
function hs(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function od(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function sd(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ud(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ld(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? od : typeof n == "function" ? ud : sd)(t, n, e ?? "")) : an(this.node(), t);
}
function an(t, n) {
  return t.style.getPropertyValue(n) || hs(t).getComputedStyle(t, null).getPropertyValue(n);
}
function cd(t) {
  return function() {
    delete this[t];
  };
}
function fd(t, n) {
  return function() {
    this[t] = n;
  };
}
function hd(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function pd(t, n) {
  return arguments.length > 1 ? this.each((n == null ? cd : typeof n == "function" ? hd : fd)(t, n)) : this.node()[t];
}
function ps(t) {
  return t.trim().split(/^|\s+/);
}
function hi(t) {
  return t.classList || new ds(t);
}
function ds(t) {
  this._node = t, this._names = ps(t.getAttribute("class") || "");
}
ds.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function gs(t, n) {
  for (var e = hi(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function _s(t, n) {
  for (var e = hi(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function dd(t) {
  return function() {
    gs(this, t);
  };
}
function gd(t) {
  return function() {
    _s(this, t);
  };
}
function _d(t, n) {
  return function() {
    (n.apply(this, arguments) ? gs : _s)(this, t);
  };
}
function yd(t, n) {
  var e = ps(t + "");
  if (arguments.length < 2) {
    for (var r = hi(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? _d : n ? dd : gd)(e, n));
}
function vd() {
  this.textContent = "";
}
function md(t) {
  return function() {
    this.textContent = t;
  };
}
function wd(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function bd(t) {
  return arguments.length ? this.each(t == null ? vd : (typeof t == "function" ? wd : md)(t)) : this.node().textContent;
}
function xd() {
  this.innerHTML = "";
}
function Md(t) {
  return function() {
    this.innerHTML = t;
  };
}
function $d(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Ad(t) {
  return arguments.length ? this.each(t == null ? xd : (typeof t == "function" ? $d : Md)(t)) : this.node().innerHTML;
}
function Td() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Nd() {
  return this.each(Td);
}
function Sd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function kd() {
  return this.each(Sd);
}
function Pd(t) {
  var n = typeof t == "function" ? t : ss(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Ed() {
  return null;
}
function Od(t, n) {
  var e = typeof t == "function" ? t : ss(t), r = n == null ? Ed : typeof n == "function" ? n : fi(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function zd() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Cd() {
  return this.each(zd);
}
function Id() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Rd() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function jd(t) {
  return this.select(t ? Rd : Id);
}
function Fd(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ld(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Dd(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function qd(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Hd(t, n, e) {
  return function() {
    var r = this.__on, i, a = Ld(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Xd(t, n, e) {
  var r = Dd(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Hd : qd, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function ys(t, n, e) {
  var r = hs(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Bd(t, n) {
  return function() {
    return ys(this, t, n);
  };
}
function Ud(t, n) {
  return function() {
    return ys(this, t, n.apply(this, arguments));
  };
}
function Gd(t, n) {
  return this.each((typeof n == "function" ? Ud : Bd)(t, n));
}
function* Yd() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var vs = [null];
function q(t, n) {
  this._groups = t, this._parents = n;
}
function Hn() {
  return new q([[document.documentElement]], vs);
}
function Vd() {
  return this;
}
q.prototype = Hn.prototype = {
  constructor: q,
  select: wp,
  selectAll: $p,
  selectChild: Sp,
  selectChildren: Op,
  filter: zp,
  data: Lp,
  enter: Cp,
  exit: qp,
  join: Hp,
  merge: Xp,
  selection: Vd,
  order: Bp,
  sort: Up,
  call: Yp,
  nodes: Vp,
  node: Kp,
  size: Wp,
  empty: Zp,
  each: Jp,
  attr: ad,
  style: ld,
  property: pd,
  classed: yd,
  text: bd,
  html: Ad,
  raise: Nd,
  lower: kd,
  append: Pd,
  insert: Od,
  remove: Cd,
  clone: jd,
  datum: Fd,
  on: Xd,
  dispatch: Gd,
  [Symbol.iterator]: Yd
};
function R(t) {
  return typeof t == "string" ? new q([[document.querySelector(t)]], [document.documentElement]) : new q([[t]], vs);
}
function Kd(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function ca(t, n) {
  if (t = Kd(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Wd = { passive: !1 }, Pn = { capture: !0, passive: !1 };
function or(t) {
  t.stopImmediatePropagation();
}
function Qt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Zd(t) {
  var n = t.document.documentElement, e = R(t).on("dragstart.drag", Qt, Pn);
  "onselectstart" in n ? e.on("selectstart.drag", Qt, Pn) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Jd(t, n) {
  var e = t.document.documentElement, r = R(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Qt, Pn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Jn = (t) => () => t;
function Or(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: l,
  dy: u,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Or.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Qd(t) {
  return !t.ctrlKey && !t.button;
}
function t0() {
  return this.parentNode;
}
function n0(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function e0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function r0() {
  var t = Qd, n = t0, e = n0, r = e0, i = {}, a = ci("start", "drag", "end"), o = 0, s, l, u, c, h = 0;
  function f(_) {
    _.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Wd).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(_, v) {
    if (!(c || !t.call(this, _, v))) {
      var N = M(this, n.call(this, _, v), _, v, "mouse");
      N && (R(_.view).on("mousemove.drag", d, Pn).on("mouseup.drag", y, Pn), Zd(_.view), or(_), u = !1, s = _.clientX, l = _.clientY, N("start", _));
    }
  }
  function d(_) {
    if (Qt(_), !u) {
      var v = _.clientX - s, N = _.clientY - l;
      u = v * v + N * N > h;
    }
    i.mouse("drag", _);
  }
  function y(_) {
    R(_.view).on("mousemove.drag mouseup.drag", null), Jd(_.view, u), Qt(_), i.mouse("end", _);
  }
  function w(_, v) {
    if (t.call(this, _, v)) {
      var N = _.changedTouches, P = n.call(this, _, v), z = N.length, H, X;
      for (H = 0; H < z; ++H)
        (X = M(this, P, _, v, N[H].identifier, N[H])) && (or(_), X("start", _, N[H]));
    }
  }
  function b(_) {
    var v = _.changedTouches, N = v.length, P, z;
    for (P = 0; P < N; ++P)
      (z = i[v[P].identifier]) && (Qt(_), z("drag", _, v[P]));
  }
  function g(_) {
    var v = _.changedTouches, N = v.length, P, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < N; ++P)
      (z = i[v[P].identifier]) && (or(_), z("end", _, v[P]));
  }
  function M(_, v, N, P, z, H) {
    var X = a.copy(), m = ca(H || N, v), C, T, I;
    if ((I = e.call(_, new Or("beforestart", {
      sourceEvent: N,
      target: f,
      identifier: z,
      active: o,
      x: m[0],
      y: m[1],
      dx: 0,
      dy: 0,
      dispatch: X
    }), P)) != null)
      return C = I.x - m[0] || 0, T = I.y - m[1] || 0, function St(L, B, K) {
        var E = m, rr;
        switch (L) {
          case "start":
            i[z] = St, rr = o++;
            break;
          case "end":
            delete i[z], --o;
          // falls through
          case "drag":
            m = ca(K || B, v), rr = o;
            break;
        }
        X.call(
          L,
          _,
          new Or(L, {
            sourceEvent: B,
            subject: I,
            target: f,
            identifier: z,
            active: rr,
            x: m[0] + C,
            y: m[1] + T,
            dx: m[0] - E[0],
            dy: m[1] - E[1],
            dispatch: X
          }),
          P
        );
      };
  }
  return f.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Jn(!!_), f) : t;
  }, f.container = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Jn(_), f) : n;
  }, f.subject = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Jn(_), f) : e;
  }, f.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : Jn(!!_), f) : r;
  }, f.on = function() {
    var _ = a.on.apply(a, arguments);
    return _ === a ? f : _;
  }, f.clickDistance = function(_) {
    return arguments.length ? (h = (_ = +_) * _, f) : Math.sqrt(h);
  }, f;
}
function pi(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ms(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Xn() {
}
var En = 0.7, Ae = 1 / En, tn = "\\s*([+-]?\\d+)\\s*", On = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", i0 = /^#([0-9a-f]{3,8})$/, a0 = new RegExp(`^rgb\\(${tn},${tn},${tn}\\)$`), o0 = new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`), s0 = new RegExp(`^rgba\\(${tn},${tn},${tn},${On}\\)$`), u0 = new RegExp(`^rgba\\(${ot},${ot},${ot},${On}\\)$`), l0 = new RegExp(`^hsl\\(${On},${ot},${ot}\\)$`), c0 = new RegExp(`^hsla\\(${On},${ot},${ot},${On}\\)$`), fa = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
pi(Xn, Dt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ha,
  // Deprecated! Use color.formatHex.
  formatHex: ha,
  formatHex8: f0,
  formatHsl: h0,
  formatRgb: pa,
  toString: pa
});
function ha() {
  return this.rgb().formatHex();
}
function f0() {
  return this.rgb().formatHex8();
}
function h0() {
  return ws(this).formatHsl();
}
function pa() {
  return this.rgb().formatRgb();
}
function Dt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = i0.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? da(n) : e === 3 ? new F(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Qn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Qn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = a0.exec(t)) ? new F(n[1], n[2], n[3], 1) : (n = o0.exec(t)) ? new F(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = s0.exec(t)) ? Qn(n[1], n[2], n[3], n[4]) : (n = u0.exec(t)) ? Qn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = l0.exec(t)) ? ya(n[1], n[2] / 100, n[3] / 100, 1) : (n = c0.exec(t)) ? ya(n[1], n[2] / 100, n[3] / 100, n[4]) : fa.hasOwnProperty(t) ? da(fa[t]) : t === "transparent" ? new F(NaN, NaN, NaN, 0) : null;
}
function da(t) {
  return new F(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Qn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new F(t, n, e, r);
}
function p0(t) {
  return t instanceof Xn || (t = Dt(t)), t ? (t = t.rgb(), new F(t.r, t.g, t.b, t.opacity)) : new F();
}
function zr(t, n, e, r) {
  return arguments.length === 1 ? p0(t) : new F(t, n, e, r ?? 1);
}
function F(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
pi(F, zr, ms(Xn, {
  brighter(t) {
    return t = t == null ? Ae : Math.pow(Ae, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? En : Math.pow(En, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new F(It(this.r), It(this.g), It(this.b), Te(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ga,
  // Deprecated! Use color.formatHex.
  formatHex: ga,
  formatHex8: d0,
  formatRgb: _a,
  toString: _a
}));
function ga() {
  return `#${Ot(this.r)}${Ot(this.g)}${Ot(this.b)}`;
}
function d0() {
  return `#${Ot(this.r)}${Ot(this.g)}${Ot(this.b)}${Ot((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _a() {
  const t = Te(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${It(this.r)}, ${It(this.g)}, ${It(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Te(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function It(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ot(t) {
  return t = It(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ya(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Q(t, n, e, r);
}
function ws(t) {
  if (t instanceof Q) return new Q(t.h, t.s, t.l, t.opacity);
  if (t instanceof Xn || (t = Dt(t)), !t) return new Q();
  if (t instanceof Q) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new Q(o, s, l, t.opacity);
}
function g0(t, n, e, r) {
  return arguments.length === 1 ? ws(t) : new Q(t, n, e, r ?? 1);
}
function Q(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
pi(Q, g0, ms(Xn, {
  brighter(t) {
    return t = t == null ? Ae : Math.pow(Ae, t), new Q(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? En : Math.pow(En, t), new Q(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new F(
      sr(t >= 240 ? t - 240 : t + 120, i, r),
      sr(t, i, r),
      sr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Q(va(this.h), te(this.s), te(this.l), Te(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Te(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${va(this.h)}, ${te(this.s) * 100}%, ${te(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function va(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function te(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function sr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const di = (t) => () => t;
function _0(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function y0(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function v0(t) {
  return (t = +t) == 1 ? bs : function(n, e) {
    return e - n ? y0(n, e, t) : di(isNaN(n) ? e : n);
  };
}
function bs(t, n) {
  var e = n - t;
  return e ? _0(t, e) : di(isNaN(t) ? n : t);
}
const Ne = (function t(n) {
  var e = v0(n);
  function r(i, a) {
    var o = e((i = zr(i)).r, (a = zr(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = bs(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function m0(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function w0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function b0(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = gi(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function x0(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function Z(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function M0(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = gi(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var Cr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ur = new RegExp(Cr.source, "g");
function $0(t) {
  return function() {
    return t;
  };
}
function A0(t) {
  return function(n) {
    return t(n) + "";
  };
}
function xs(t, n) {
  var e = Cr.lastIndex = ur.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Cr.exec(t)) && (i = ur.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: Z(r, i) })), e = ur.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? A0(l[0].x) : $0(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function gi(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? di(n) : (e === "number" ? Z : e === "string" ? (r = Dt(n)) ? (n = r, Ne) : xs : n instanceof Dt ? Ne : n instanceof Date ? x0 : w0(n) ? m0 : Array.isArray(n) ? b0 : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? M0 : Z)(t, n);
}
function T0(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var ma = 180 / Math.PI, Ms = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function $s(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * ma,
    skewX: Math.atan(l) * ma,
    scaleX: o,
    scaleY: s
  };
}
var ne;
function N0(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Ms : $s(n.a, n.b, n.c, n.d, n.e, n.f);
}
function S0(t) {
  return t == null || (ne || (ne = document.createElementNS("http://www.w3.org/2000/svg", "g")), ne.setAttribute("transform", t), !(t = ne.transform.baseVal.consolidate())) ? Ms : (t = t.matrix, $s(t.a, t.b, t.c, t.d, t.e, t.f));
}
function As(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var y = p.push("translate(", null, n, null, e);
      d.push({ i: y - 4, x: Z(u, h) }, { i: y - 2, x: Z(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Z(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Z(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: y - 4, x: Z(u, h) }, { i: y - 2, x: Z(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, y = f.length, w; ++d < y; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var k0 = As(N0, "px, ", "px)", "deg)"), P0 = As(S0, ", ", ")", ")"), on = 0, xn = 0, _n = 0, Ts = 1e3, Se, Mn, ke = 0, qt = 0, Le = 0, zn = typeof performance == "object" && performance.now ? performance : Date, Ns = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function _i() {
  return qt || (Ns(E0), qt = zn.now() + Le);
}
function E0() {
  qt = 0;
}
function Pe() {
  this._call = this._time = this._next = null;
}
Pe.prototype = Ss.prototype = {
  constructor: Pe,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? _i() : +e) + (n == null ? 0 : +n), !this._next && Mn !== this && (Mn ? Mn._next = this : Se = this, Mn = this), this._call = t, this._time = e, Ir();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ir());
  }
};
function Ss(t, n, e) {
  var r = new Pe();
  return r.restart(t, n, e), r;
}
function O0() {
  _i(), ++on;
  for (var t = Se, n; t; )
    (n = qt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --on;
}
function wa() {
  qt = (ke = zn.now()) + Le, on = xn = 0;
  try {
    O0();
  } finally {
    on = 0, C0(), qt = 0;
  }
}
function z0() {
  var t = zn.now(), n = t - ke;
  n > Ts && (Le -= n, ke = t);
}
function C0() {
  for (var t, n = Se, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Se = e);
  Mn = t, Ir(r);
}
function Ir(t) {
  if (!on) {
    xn && (xn = clearTimeout(xn));
    var n = t - qt;
    n > 24 ? (t < 1 / 0 && (xn = setTimeout(wa, t - zn.now() - Le)), _n && (_n = clearInterval(_n))) : (_n || (ke = zn.now(), _n = setInterval(z0, Ts)), on = 1, Ns(wa));
  }
}
function ba(t, n, e) {
  var r = new Pe();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var I0 = ci("start", "end", "cancel", "interrupt"), R0 = [], ks = 0, xa = 1, Rr = 2, fe = 3, Ma = 4, jr = 5, he = 6;
function De(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  j0(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: I0,
    tween: R0,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: ks
  });
}
function yi(t, n) {
  var e = rt(t, n);
  if (e.state > ks) throw new Error("too late; already scheduled");
  return e;
}
function lt(t, n) {
  var e = rt(t, n);
  if (e.state > fe) throw new Error("too late; already running");
  return e;
}
function rt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function j0(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Ss(a, 0, e.time);
  function a(u) {
    e.state = xa, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (e.state !== xa) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === fe) return ba(o);
        p.state === Ma ? (p.state = he, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = he, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (ba(function() {
      e.state === fe && (e.state = Ma, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Rr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Rr) {
      for (e.state = fe, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = jr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === jr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = he, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function F0(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > Rr && r.state < jr, r.state = he, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function L0(t) {
  return this.each(function() {
    F0(this, t);
  });
}
function D0(t, n) {
  var e, r;
  return function() {
    var i = lt(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function q0(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = lt(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function H0(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = rt(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? D0 : q0)(e, t, n));
}
function vi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = lt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return rt(i, r).value[n];
  };
}
function Ps(t, n) {
  var e;
  return (typeof n == "number" ? Z : n instanceof Dt ? Ne : (e = Dt(n)) ? (n = e, Ne) : xs)(t, n);
}
function X0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function B0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function U0(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function G0(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Y0(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function V0(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function K0(t, n) {
  var e = Fe(t), r = e === "transform" ? P0 : Ps;
  return this.attrTween(t, typeof n == "function" ? (e.local ? V0 : Y0)(e, r, vi(this, "attr." + t, n)) : n == null ? (e.local ? B0 : X0)(e) : (e.local ? G0 : U0)(e, r, n));
}
function W0(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Z0(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function J0(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Z0(t, a)), e;
  }
  return i._value = n, i;
}
function Q0(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && W0(t, a)), e;
  }
  return i._value = n, i;
}
function tg(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Fe(t);
  return this.tween(e, (r.local ? J0 : Q0)(r, n));
}
function ng(t, n) {
  return function() {
    yi(this, t).delay = +n.apply(this, arguments);
  };
}
function eg(t, n) {
  return n = +n, function() {
    yi(this, t).delay = n;
  };
}
function rg(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ng : eg)(n, t)) : rt(this.node(), n).delay;
}
function ig(t, n) {
  return function() {
    lt(this, t).duration = +n.apply(this, arguments);
  };
}
function ag(t, n) {
  return n = +n, function() {
    lt(this, t).duration = n;
  };
}
function og(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ig : ag)(n, t)) : rt(this.node(), n).duration;
}
function sg(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    lt(this, t).ease = n;
  };
}
function ug(t) {
  var n = this._id;
  return arguments.length ? this.each(sg(n, t)) : rt(this.node(), n).ease;
}
function lg(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    lt(this, t).ease = e;
  };
}
function cg(t) {
  if (typeof t != "function") throw new Error();
  return this.each(lg(this._id, t));
}
function fg(t) {
  typeof t != "function" && (t = ls(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new _t(r, this._parents, this._name, this._id);
}
function hg(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new _t(o, this._parents, this._name, this._id);
}
function pg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function dg(t, n, e) {
  var r, i, a = pg(n) ? yi : lt;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function gg(t, n) {
  var e = this._id;
  return arguments.length < 2 ? rt(this.node(), e).on.on(t) : this.each(dg(e, t, n));
}
function _g(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function yg() {
  return this.on("end.remove", _g(this._id));
}
function vg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = fi(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, De(u[f], n, e, f, u, rt(c, e)));
  return new _t(a, this._parents, n, e);
}
function mg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = us(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = rt(c, e), y = 0, w = f.length; y < w; ++y)
          (p = f[y]) && De(p, n, e, y, f, d);
        a.push(f), o.push(c);
      }
  return new _t(a, o, n, e);
}
var wg = Hn.prototype.constructor;
function bg() {
  return new wg(this._groups, this._parents);
}
function xg(t, n) {
  var e, r, i;
  return function() {
    var a = an(this, t), o = (this.style.removeProperty(t), an(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function Es(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Mg(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = an(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function $g(t, n, e) {
  var r, i, a;
  return function() {
    var o = an(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), an(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function Ag(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = lt(this, t), u = l.on, c = l.value[a] == null ? s || (s = Es(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function Tg(t, n, e) {
  var r = (t += "") == "transform" ? k0 : Ps;
  return n == null ? this.styleTween(t, xg(t, r)).on("end.style." + t, Es(t)) : typeof n == "function" ? this.styleTween(t, $g(t, r, vi(this, "style." + t, n))).each(Ag(this._id, t)) : this.styleTween(t, Mg(t, r, n), e).on("end.style." + t, null);
}
function Ng(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Sg(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && Ng(t, o, e)), r;
  }
  return a._value = n, a;
}
function kg(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Sg(t, n, e ?? ""));
}
function Pg(t) {
  return function() {
    this.textContent = t;
  };
}
function Eg(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Og(t) {
  return this.tween("text", typeof t == "function" ? Eg(vi(this, "text", t)) : Pg(t == null ? "" : t + ""));
}
function zg(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Cg(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && zg(i)), n;
  }
  return r._value = t, r;
}
function Ig(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Cg(t));
}
function Rg() {
  for (var t = this._name, n = this._id, e = Os(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = rt(l, n);
        De(l, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new _t(r, this._parents, t, e);
}
function jg() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = lt(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var Fg = 0;
function _t(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Os() {
  return ++Fg;
}
var ft = Hn.prototype;
_t.prototype = {
  constructor: _t,
  select: vg,
  selectAll: mg,
  selectChild: ft.selectChild,
  selectChildren: ft.selectChildren,
  filter: fg,
  merge: hg,
  selection: bg,
  transition: Rg,
  call: ft.call,
  nodes: ft.nodes,
  node: ft.node,
  size: ft.size,
  empty: ft.empty,
  each: ft.each,
  on: gg,
  attr: K0,
  attrTween: tg,
  style: Tg,
  styleTween: kg,
  text: Og,
  textTween: Ig,
  remove: yg,
  tween: H0,
  delay: rg,
  duration: og,
  ease: ug,
  easeVarying: cg,
  end: jg,
  [Symbol.iterator]: ft[Symbol.iterator]
};
function Lg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Dg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Lg
};
function qg(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Hg(t) {
  var n, e;
  t instanceof _t ? (n = t._id, t = t._name) : (n = Os(), (e = Dg).time = _i(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && De(l, t, n, u, o, e || qg(l, n));
  return new _t(r, this._parents, t, n);
}
Hn.prototype.interrupt = L0;
Hn.prototype.transition = Hg;
const Fr = Math.PI, Lr = 2 * Fr, Pt = 1e-6, Xg = Lr - Pt;
function zs(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Bg(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return zs;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Cs {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? zs : Bg(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = r - n, u = i - e, c = o - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > Pt) if (!(Math.abs(h * l - u * c) > Pt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, d = i - s, y = l * l + u * u, w = p * p + d * d, b = Math.sqrt(y), g = Math.sqrt(f), M = a * Math.tan((Fr - Math.acos((y + f - w) / (2 * b * g))) / 2), _ = M / g, v = M / b;
      Math.abs(_ - 1) > Pt && this._append`L${n + _ * c},${e + _ * h}`, this._append`A${a},${a},0,0,${+(h * p > c * d)},${this._x1 = n + v * l},${this._y1 = e + v * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Pt || Math.abs(this._y1 - c) > Pt) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Lr + Lr), f > Xg ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Pt && this._append`A${r},${r},0,${+(f >= Fr)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function it() {
  return new Cs();
}
it.prototype = Cs.prototype;
function Ug(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Ee(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function sn(t) {
  return t = Ee(Math.abs(t)), t ? t[1] : NaN;
}
function Gg(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Yg(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Vg = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Oe(t) {
  if (!(n = Vg.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new mi({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Oe.prototype = mi.prototype;
function mi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
mi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Kg(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Is;
function Wg(t, n) {
  var e = Ee(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (Is = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Ee(t, Math.max(0, n + a - 1))[0];
}
function $a(t, n) {
  var e = Ee(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Aa = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Ug,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => $a(t * 100, n),
  r: $a,
  s: Wg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Ta(t) {
  return t;
}
var Na = Array.prototype.map, Sa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Zg(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Ta : Gg(Na.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Ta : Yg(Na.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Oe(h);
    var f = h.fill, p = h.align, d = h.sign, y = h.symbol, w = h.zero, b = h.width, g = h.comma, M = h.precision, _ = h.trim, v = h.type;
    v === "n" ? (g = !0, v = "g") : Aa[v] || (M === void 0 && (M = 12), _ = !0, v = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var N = y === "$" ? e : y === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = y === "$" ? r : /[%p]/.test(v) ? o : "", z = Aa[v], H = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function X(m) {
      var C = N, T = P, I, St, L;
      if (v === "c")
        T = z(m) + T, m = "";
      else {
        m = +m;
        var B = m < 0 || 1 / m < 0;
        if (m = isNaN(m) ? l : z(Math.abs(m), M), _ && (m = Kg(m)), B && +m == 0 && d !== "+" && (B = !1), C = (B ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + C, T = (v === "s" ? Sa[8 + Is / 3] : "") + T + (B && d === "(" ? ")" : ""), H) {
          for (I = -1, St = m.length; ++I < St; )
            if (L = m.charCodeAt(I), 48 > L || L > 57) {
              T = (L === 46 ? i + m.slice(I + 1) : m.slice(I)) + T, m = m.slice(0, I);
              break;
            }
        }
      }
      g && !w && (m = n(m, 1 / 0));
      var K = C.length + m.length + T.length, E = K < b ? new Array(b - K + 1).join(f) : "";
      switch (g && w && (m = n(E + m, E.length ? b - T.length : 1 / 0), E = ""), p) {
        case "<":
          m = C + m + T + E;
          break;
        case "=":
          m = C + E + m + T;
          break;
        case "^":
          m = E.slice(0, K = E.length >> 1) + C + m + T + E.slice(K);
          break;
        default:
          m = E + C + m + T;
          break;
      }
      return a(m);
    }
    return X.toString = function() {
      return h + "";
    }, X;
  }
  function c(h, f) {
    var p = u((h = Oe(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(sn(f) / 3))) * 3, y = Math.pow(10, -d), w = Sa[8 + d / 3];
    return function(b) {
      return p(y * b) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var ee, qe, Rs;
Jg({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Jg(t) {
  return ee = Zg(t), qe = ee.format, Rs = ee.formatPrefix, ee;
}
function Qg(t) {
  return Math.max(0, -sn(Math.abs(t)));
}
function t_(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(sn(n) / 3))) * 3 - sn(Math.abs(t)));
}
function n_(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, sn(n) - sn(t)) + 1;
}
function e_(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function r_(t) {
  return function() {
    return t;
  };
}
function i_(t) {
  return +t;
}
var ka = [0, 1];
function Kt(t) {
  return t;
}
function Dr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : r_(isNaN(n) ? NaN : 0.5);
}
function a_(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function o_(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Dr(i, r), a = e(o, a)) : (r = Dr(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function s_(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Dr(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = sp(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function u_(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function l_() {
  var t = ka, n = ka, e = gi, r, i, a, o = Kt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return o !== Kt && (o = a_(t[0], t[f - 1])), s = f > 2 ? s_ : o_, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), Z)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, i_), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = T0, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Kt, c()) : o !== Kt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function c_() {
  return l_()(Kt, Kt);
}
function f_(t, n, e, r) {
  var i = hp(t, n, e), a;
  switch (r = Oe(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = t_(i, o)) && (r.precision = a), Rs(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = n_(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Qg(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return qe(r);
}
function h_(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return fp(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return f_(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = Pr(o, s, e), u === l)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function un() {
  var t = c_();
  return t.copy = function() {
    return u_(t, un());
  }, e_.apply(t, arguments), h_(t);
}
function $n(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
$n.prototype = {
  constructor: $n,
  scale: function(t) {
    return t === 1 ? this : new $n(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new $n(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
$n.prototype;
var js = typeof global == "object" && global && global.Object === Object && global, p_ = typeof self == "object" && self && self.Object === Object && self, vt = js || p_ || Function("return this")(), st = vt.Symbol, Fs = Object.prototype, d_ = Fs.hasOwnProperty, g_ = Fs.toString, yn = st ? st.toStringTag : void 0;
function __(t) {
  var n = d_.call(t, yn), e = t[yn];
  try {
    t[yn] = void 0;
    var r = !0;
  } catch {
  }
  var i = g_.call(t);
  return r && (n ? t[yn] = e : delete t[yn]), i;
}
var y_ = Object.prototype, v_ = y_.toString;
function m_(t) {
  return v_.call(t);
}
var w_ = "[object Null]", b_ = "[object Undefined]", Pa = st ? st.toStringTag : void 0;
function hn(t) {
  return t == null ? t === void 0 ? b_ : w_ : Pa && Pa in Object(t) ? __(t) : m_(t);
}
function ln(t) {
  return t != null && typeof t == "object";
}
var x_ = "[object Symbol]";
function He(t) {
  return typeof t == "symbol" || ln(t) && hn(t) == x_;
}
function Ls(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var tt = Array.isArray, Ea = st ? st.prototype : void 0, Oa = Ea ? Ea.toString : void 0;
function Ds(t) {
  if (typeof t == "string")
    return t;
  if (tt(t))
    return Ls(t, Ds) + "";
  if (He(t))
    return Oa ? Oa.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var M_ = /\s/;
function $_(t) {
  for (var n = t.length; n-- && M_.test(t.charAt(n)); )
    ;
  return n;
}
var A_ = /^\s+/;
function T_(t) {
  return t && t.slice(0, $_(t) + 1).replace(A_, "");
}
function cn(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var za = NaN, N_ = /^[-+]0x[0-9a-f]+$/i, S_ = /^0b[01]+$/i, k_ = /^0o[0-7]+$/i, P_ = parseInt;
function E_(t) {
  if (typeof t == "number")
    return t;
  if (He(t))
    return za;
  if (cn(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = cn(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = T_(t);
  var e = S_.test(t);
  return e || k_.test(t) ? P_(t.slice(2), e ? 2 : 8) : N_.test(t) ? za : +t;
}
var O_ = 1 / 0, z_ = 17976931348623157e292;
function lr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = E_(t), t === O_ || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * z_;
  }
  return t === t ? t : 0;
}
function C_(t) {
  return t;
}
var I_ = "[object AsyncFunction]", R_ = "[object Function]", j_ = "[object GeneratorFunction]", F_ = "[object Proxy]";
function qs(t) {
  if (!cn(t))
    return !1;
  var n = hn(t);
  return n == R_ || n == j_ || n == I_ || n == F_;
}
var cr = vt["__core-js_shared__"], Ca = (function() {
  var t = /[^.]+$/.exec(cr && cr.keys && cr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function L_(t) {
  return !!Ca && Ca in t;
}
var D_ = Function.prototype, q_ = D_.toString;
function Bt(t) {
  if (t != null) {
    try {
      return q_.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var H_ = /[\\^$.*+?()[\]{}|]/g, X_ = /^\[object .+?Constructor\]$/, B_ = Function.prototype, U_ = Object.prototype, G_ = B_.toString, Y_ = U_.hasOwnProperty, V_ = RegExp(
  "^" + G_.call(Y_).replace(H_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function K_(t) {
  if (!cn(t) || L_(t))
    return !1;
  var n = qs(t) ? V_ : X_;
  return n.test(Bt(t));
}
function W_(t, n) {
  return t == null ? void 0 : t[n];
}
function pn(t, n) {
  var e = W_(t, n);
  return K_(e) ? e : void 0;
}
var qr = pn(vt, "WeakMap"), Z_ = 9007199254740991, J_ = /^(?:0|[1-9]\d*)$/;
function wi(t, n) {
  var e = typeof t;
  return n = n ?? Z_, !!n && (e == "number" || e != "symbol" && J_.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function bi(t, n) {
  return t === n || t !== t && n !== n;
}
var Q_ = 9007199254740991;
function xi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Q_;
}
function Xe(t) {
  return t != null && xi(t.length) && !qs(t);
}
function ty(t, n, e) {
  if (!cn(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Xe(e) && wi(n, e.length) : r == "string" && n in e) ? bi(e[n], t) : !1;
}
var ny = Object.prototype;
function ey(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || ny;
  return t === e;
}
function ry(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var iy = "[object Arguments]";
function Ia(t) {
  return ln(t) && hn(t) == iy;
}
var Hs = Object.prototype, ay = Hs.hasOwnProperty, oy = Hs.propertyIsEnumerable, Mi = Ia(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Ia : function(t) {
  return ln(t) && ay.call(t, "callee") && !oy.call(t, "callee");
};
function sy() {
  return !1;
}
var Xs = typeof exports == "object" && exports && !exports.nodeType && exports, Ra = Xs && typeof module == "object" && module && !module.nodeType && module, uy = Ra && Ra.exports === Xs, ja = uy ? vt.Buffer : void 0, ly = ja ? ja.isBuffer : void 0, Hr = ly || sy, cy = "[object Arguments]", fy = "[object Array]", hy = "[object Boolean]", py = "[object Date]", dy = "[object Error]", gy = "[object Function]", _y = "[object Map]", yy = "[object Number]", vy = "[object Object]", my = "[object RegExp]", wy = "[object Set]", by = "[object String]", xy = "[object WeakMap]", My = "[object ArrayBuffer]", $y = "[object DataView]", Ay = "[object Float32Array]", Ty = "[object Float64Array]", Ny = "[object Int8Array]", Sy = "[object Int16Array]", ky = "[object Int32Array]", Py = "[object Uint8Array]", Ey = "[object Uint8ClampedArray]", Oy = "[object Uint16Array]", zy = "[object Uint32Array]", S = {};
S[Ay] = S[Ty] = S[Ny] = S[Sy] = S[ky] = S[Py] = S[Ey] = S[Oy] = S[zy] = !0;
S[cy] = S[fy] = S[My] = S[hy] = S[$y] = S[py] = S[dy] = S[gy] = S[_y] = S[yy] = S[vy] = S[my] = S[wy] = S[by] = S[xy] = !1;
function Cy(t) {
  return ln(t) && xi(t.length) && !!S[hn(t)];
}
function Iy(t) {
  return function(n) {
    return t(n);
  };
}
var Bs = typeof exports == "object" && exports && !exports.nodeType && exports, An = Bs && typeof module == "object" && module && !module.nodeType && module, Ry = An && An.exports === Bs, fr = Ry && js.process, Fa = (function() {
  try {
    var t = An && An.require && An.require("util").types;
    return t || fr && fr.binding && fr.binding("util");
  } catch {
  }
})(), La = Fa && Fa.isTypedArray, Us = La ? Iy(La) : Cy, jy = Object.prototype, Fy = jy.hasOwnProperty;
function Ly(t, n) {
  var e = tt(t), r = !e && Mi(t), i = !e && !r && Hr(t), a = !e && !r && !i && Us(t), o = e || r || i || a, s = o ? ry(t.length, String) : [], l = s.length;
  for (var u in t)
    Fy.call(t, u) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    wi(u, l))) && s.push(u);
  return s;
}
function Dy(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var qy = Dy(Object.keys, Object), Hy = Object.prototype, Xy = Hy.hasOwnProperty;
function By(t) {
  if (!ey(t))
    return qy(t);
  var n = [];
  for (var e in Object(t))
    Xy.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function $i(t) {
  return Xe(t) ? Ly(t) : By(t);
}
var Uy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gy = /^\w*$/;
function Ai(t, n) {
  if (tt(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || He(t) ? !0 : Gy.test(t) || !Uy.test(t) || n != null && t in Object(n);
}
var Cn = pn(Object, "create");
function Yy() {
  this.__data__ = Cn ? Cn(null) : {}, this.size = 0;
}
function Vy(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Ky = "__lodash_hash_undefined__", Wy = Object.prototype, Zy = Wy.hasOwnProperty;
function Jy(t) {
  var n = this.__data__;
  if (Cn) {
    var e = n[t];
    return e === Ky ? void 0 : e;
  }
  return Zy.call(n, t) ? n[t] : void 0;
}
var Qy = Object.prototype, tv = Qy.hasOwnProperty;
function nv(t) {
  var n = this.__data__;
  return Cn ? n[t] !== void 0 : tv.call(n, t);
}
var ev = "__lodash_hash_undefined__";
function rv(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Cn && n === void 0 ? ev : n, this;
}
function Ht(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Ht.prototype.clear = Yy;
Ht.prototype.delete = Vy;
Ht.prototype.get = Jy;
Ht.prototype.has = nv;
Ht.prototype.set = rv;
function iv() {
  this.__data__ = [], this.size = 0;
}
function Be(t, n) {
  for (var e = t.length; e--; )
    if (bi(t[e][0], n))
      return e;
  return -1;
}
var av = Array.prototype, ov = av.splice;
function sv(t) {
  var n = this.__data__, e = Be(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : ov.call(n, e, 1), --this.size, !0;
}
function uv(t) {
  var n = this.__data__, e = Be(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function lv(t) {
  return Be(this.__data__, t) > -1;
}
function cv(t, n) {
  var e = this.__data__, r = Be(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function mt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = iv;
mt.prototype.delete = sv;
mt.prototype.get = uv;
mt.prototype.has = lv;
mt.prototype.set = cv;
var In = pn(vt, "Map");
function fv() {
  this.size = 0, this.__data__ = {
    hash: new Ht(),
    map: new (In || mt)(),
    string: new Ht()
  };
}
function hv(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Ue(t, n) {
  var e = t.__data__;
  return hv(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function pv(t) {
  var n = Ue(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function dv(t) {
  return Ue(this, t).get(t);
}
function gv(t) {
  return Ue(this, t).has(t);
}
function _v(t, n) {
  var e = Ue(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function wt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
wt.prototype.clear = fv;
wt.prototype.delete = pv;
wt.prototype.get = dv;
wt.prototype.has = gv;
wt.prototype.set = _v;
var yv = "Expected a function";
function Ti(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(yv);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Ti.Cache || wt)(), e;
}
Ti.Cache = wt;
var vv = 500;
function mv(t) {
  var n = Ti(t, function(r) {
    return e.size === vv && e.clear(), r;
  }), e = n.cache;
  return n;
}
var wv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bv = /\\(\\)?/g, xv = mv(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(wv, function(e, r, i, a) {
    n.push(i ? a.replace(bv, "$1") : r || e);
  }), n;
});
function Mv(t) {
  return t == null ? "" : Ds(t);
}
function Gs(t, n) {
  return tt(t) ? t : Ai(t, n) ? [t] : xv(Mv(t));
}
function Ge(t) {
  if (typeof t == "string" || He(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Ys(t, n) {
  n = Gs(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Ge(n[e++])];
  return e && e == r ? t : void 0;
}
function $v(t, n, e) {
  var r = t == null ? void 0 : Ys(t, n);
  return r === void 0 ? e : r;
}
function Vs(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Da = st ? st.isConcatSpreadable : void 0;
function Av(t) {
  return tt(t) || Mi(t) || !!(Da && t && t[Da]);
}
function Tv(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = Av), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? Vs(i, s) : i[i.length] = s;
  }
  return i;
}
function Nv(t) {
  var n = t == null ? 0 : t.length;
  return n ? Tv(t) : [];
}
function Sv() {
  this.__data__ = new mt(), this.size = 0;
}
function kv(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Pv(t) {
  return this.__data__.get(t);
}
function Ev(t) {
  return this.__data__.has(t);
}
var Ov = 200;
function zv(t, n) {
  var e = this.__data__;
  if (e instanceof mt) {
    var r = e.__data__;
    if (!In || r.length < Ov - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new wt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function pt(t) {
  var n = this.__data__ = new mt(t);
  this.size = n.size;
}
pt.prototype.clear = Sv;
pt.prototype.delete = kv;
pt.prototype.get = Pv;
pt.prototype.has = Ev;
pt.prototype.set = zv;
function Cv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Iv() {
  return [];
}
var Rv = Object.prototype, jv = Rv.propertyIsEnumerable, qa = Object.getOwnPropertySymbols, Fv = qa ? function(t) {
  return t == null ? [] : (t = Object(t), Cv(qa(t), function(n) {
    return jv.call(t, n);
  }));
} : Iv;
function Lv(t, n, e) {
  var r = n(t);
  return tt(t) ? r : Vs(r, e(t));
}
function Ha(t) {
  return Lv(t, $i, Fv);
}
var Xr = pn(vt, "DataView"), Br = pn(vt, "Promise"), Ur = pn(vt, "Set"), Xa = "[object Map]", Dv = "[object Object]", Ba = "[object Promise]", Ua = "[object Set]", Ga = "[object WeakMap]", Ya = "[object DataView]", qv = Bt(Xr), Hv = Bt(In), Xv = Bt(Br), Bv = Bt(Ur), Uv = Bt(qr), $t = hn;
(Xr && $t(new Xr(new ArrayBuffer(1))) != Ya || In && $t(new In()) != Xa || Br && $t(Br.resolve()) != Ba || Ur && $t(new Ur()) != Ua || qr && $t(new qr()) != Ga) && ($t = function(t) {
  var n = hn(t), e = n == Dv ? t.constructor : void 0, r = e ? Bt(e) : "";
  if (r)
    switch (r) {
      case qv:
        return Ya;
      case Hv:
        return Xa;
      case Xv:
        return Ba;
      case Bv:
        return Ua;
      case Uv:
        return Ga;
    }
  return n;
});
var Va = vt.Uint8Array, Gv = "__lodash_hash_undefined__";
function Yv(t) {
  return this.__data__.set(t, Gv), this;
}
function Vv(t) {
  return this.__data__.has(t);
}
function ze(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new wt(); ++n < e; )
    this.add(t[n]);
}
ze.prototype.add = ze.prototype.push = Yv;
ze.prototype.has = Vv;
function Kv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Wv(t, n) {
  return t.has(n);
}
var Zv = 1, Jv = 2;
function Ks(t, n, e, r, i, a) {
  var o = e & Zv, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & Jv ? new ze() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], y = n[h];
    if (r)
      var w = o ? r(y, d, h, n, t, a) : r(d, y, h, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Kv(n, function(b, g) {
        if (!Wv(p, g) && (d === b || i(d, b, e, r, a)))
          return p.push(g);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === y || i(d, y, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function Qv(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function t1(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var n1 = 1, e1 = 2, r1 = "[object Boolean]", i1 = "[object Date]", a1 = "[object Error]", o1 = "[object Map]", s1 = "[object Number]", u1 = "[object RegExp]", l1 = "[object Set]", c1 = "[object String]", f1 = "[object Symbol]", h1 = "[object ArrayBuffer]", p1 = "[object DataView]", Ka = st ? st.prototype : void 0, hr = Ka ? Ka.valueOf : void 0;
function d1(t, n, e, r, i, a, o) {
  switch (e) {
    case p1:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case h1:
      return !(t.byteLength != n.byteLength || !a(new Va(t), new Va(n)));
    case r1:
    case i1:
    case s1:
      return bi(+t, +n);
    case a1:
      return t.name == n.name && t.message == n.message;
    case u1:
    case c1:
      return t == n + "";
    case o1:
      var s = Qv;
    case l1:
      var l = r & n1;
      if (s || (s = t1), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= e1, o.set(t, n);
      var c = Ks(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case f1:
      if (hr)
        return hr.call(t) == hr.call(n);
  }
  return !1;
}
var g1 = 1, _1 = Object.prototype, y1 = _1.hasOwnProperty;
function v1(t, n, e, r, i, a) {
  var o = e & g1, s = Ha(t), l = s.length, u = Ha(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : y1.call(n, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var y = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++h < l; ) {
    f = s[h];
    var b = t[f], g = n[f];
    if (r)
      var M = o ? r(g, b, f, n, t, a) : r(b, g, f, t, n, a);
    if (!(M === void 0 ? b === g || i(b, g, e, r, a) : M)) {
      y = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (y && !w) {
    var _ = t.constructor, v = n.constructor;
    _ != v && "constructor" in t && "constructor" in n && !(typeof _ == "function" && _ instanceof _ && typeof v == "function" && v instanceof v) && (y = !1);
  }
  return a.delete(t), a.delete(n), y;
}
var m1 = 1, Wa = "[object Arguments]", Za = "[object Array]", re = "[object Object]", w1 = Object.prototype, Ja = w1.hasOwnProperty;
function b1(t, n, e, r, i, a) {
  var o = tt(t), s = tt(n), l = o ? Za : $t(t), u = s ? Za : $t(n);
  l = l == Wa ? re : l, u = u == Wa ? re : u;
  var c = l == re, h = u == re, f = l == u;
  if (f && Hr(t)) {
    if (!Hr(n))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new pt()), o || Us(t) ? Ks(t, n, e, r, i, a) : d1(t, n, l, e, r, i, a);
  if (!(e & m1)) {
    var p = c && Ja.call(t, "__wrapped__"), d = h && Ja.call(n, "__wrapped__");
    if (p || d) {
      var y = p ? t.value() : t, w = d ? n.value() : n;
      return a || (a = new pt()), i(y, w, e, r, a);
    }
  }
  return f ? (a || (a = new pt()), v1(t, n, e, r, i, a)) : !1;
}
function Ni(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !ln(t) && !ln(n) ? t !== t && n !== n : b1(t, n, e, r, Ni, i);
}
var x1 = 1, M1 = 2;
function $1(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new pt(), h;
      if (!(h === void 0 ? Ni(u, l, x1 | M1, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Ws(t) {
  return t === t && !cn(t);
}
function A1(t) {
  for (var n = $i(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ws(i)];
  }
  return n;
}
function Zs(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function T1(t) {
  var n = A1(t);
  return n.length == 1 && n[0][2] ? Zs(n[0][0], n[0][1]) : function(e) {
    return e === t || $1(e, t, n);
  };
}
function N1(t, n) {
  return t != null && n in Object(t);
}
function S1(t, n, e) {
  n = Gs(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Ge(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && xi(i) && wi(o, i) && (tt(t) || Mi(t)));
}
function k1(t, n) {
  return t != null && S1(t, n, N1);
}
var P1 = 1, E1 = 2;
function O1(t, n) {
  return Ai(t) && Ws(n) ? Zs(Ge(t), n) : function(e) {
    var r = $v(e, t);
    return r === void 0 && r === n ? k1(e, t) : Ni(n, r, P1 | E1);
  };
}
function z1(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function C1(t) {
  return function(n) {
    return Ys(n, t);
  };
}
function I1(t) {
  return Ai(t) ? z1(Ge(t)) : C1(t);
}
function R1(t) {
  return typeof t == "function" ? t : t == null ? C_ : typeof t == "object" ? tt(t) ? O1(t[0], t[1]) : T1(t) : I1(t);
}
function j1(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var F1 = j1();
function L1(t, n) {
  return t && F1(t, n, $i);
}
function D1(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Xe(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var q1 = D1(L1);
function H1(t, n) {
  var e = -1, r = Xe(t) ? Array(t.length) : [];
  return q1(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function Qa(t, n) {
  var e = tt(t) ? Ls : H1;
  return e(t, R1(n));
}
var X1 = Math.ceil, B1 = Math.max;
function U1(t, n, e, r) {
  for (var i = -1, a = B1(X1((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function G1(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && ty(n, e, r) && (e = r = void 0), n = lr(n), e === void 0 ? (e = n, n = 0) : e = lr(e), r = r === void 0 ? n < e ? 1 : -1 : lr(r), U1(n, e, r);
  };
}
var Y1 = G1();
const V1 = (t, n, e = 12, r = 12) => {
  const i = un().domain([0, e]).range([0, t]), a = un().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Y1((e + 1) * (r + 1)).map(function(o) {
        return { m: o % (e + 1), n: Math.floor(o / (e + 1)), x: i(o % (e + 1)), y: a(Math.floor(o / (e + 1))) };
      });
    },
    position: function(o, s) {
      typeof o == "number" && (o = [o]), typeof s == "number" && (s = [s]);
      const l = Nv(Qa(s, function(u) {
        return Qa(
          o,
          function(c) {
            return { x: i(c), y: a(u) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, K1 = "_widget_1279t_47", W1 = "_label_1279t_67", Z1 = "_lit_1279t_72", J1 = "_button_1279t_76", Q1 = "_symbol_1279t_76", tm = "_radio_1279t_77", nm = "_radiobutton_1279t_77", em = "_selected_1279t_83", rm = "_toggle_1279t_84", im = "_slider_1279t_93", am = "_track_1279t_93", om = "_track_overlay_1279t_98", sm = "_handle_1279t_106", $ = {
  widget: K1,
  label: W1,
  lit: Z1,
  button: J1,
  symbol: Q1,
  radio: tm,
  radiobutton: nm,
  selected: em,
  toggle: rm,
  slider: im,
  track: am,
  track_overlay: om,
  handle: sm
}, Si = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = t.length;
  let e = "";
  for (let r = 0; r < 10; ++r)
    e += t[Math.floor(Math.random() * n)];
  return e;
}, ki = (t, n, e) => {
  var r, i, a, o;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, um = (t = 1) => {
  const n = it();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, lm = (t = 1) => {
  const n = it(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, cm = (t = 1) => {
  const n = it();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, fm = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = it();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, hm = (t = 1) => {
  const n = it(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, l = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, pm = (t = 1) => {
  const n = it(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, dm = (t = 1) => {
  const n = it(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var l = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, gm = (t = 1) => {
  var n = it(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, _m = (t = 1) => {
  const n = it(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Gr = (t) => {
  switch (t) {
    case "play":
      return um;
    case "forward":
      return lm;
    case "back":
      return cm;
    case "pause":
      return fm;
    case "reload":
      return hm;
    case "capture":
      return pm;
    case "rewind":
      return dm;
    case "stop":
      return gm;
    case "push":
      return _m;
  }
}, Js = () => {
  const t = "button";
  var n = Si(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", l = null, u = function(f) {
  }, c = ["play"], h = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    symbolsize: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    shape: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? a.x : (a.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? a.y : (a.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? s : (s = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? l : (l = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return u = f, this;
      u(f);
    },
    actions: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    value: function(f) {
      return typeof f > "u" ? h : (h = f, this);
    },
    click: function() {
      h = (h + 1) % c.length, u(), R(this.parentNode).select("." + $.symbol).attr("d", Gr(c[h])(r * e));
    },
    press: function(f) {
      h = (h + 1) % c.length, u(), f.select("#button_" + n).select("." + $.symbol).attr("d", Gr(c[h])(r * e));
    }
  };
}, ym = () => {
  const t = "slider", n = qe(".3f");
  var e = Si(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, l = "top-left", u = 4, c = null, h = function(g) {
  }, f = function(g) {
  }, p = [0, 1], d = 0, y = null, w = un().domain(p).range([0, r]).clamp(!0);
  const b = function(g, M, _ = p) {
    const v = g.select("#slider_" + e);
    w.domain(_), d = M, v.selectAll("." + $.handle).transition().attr("cx", w(M)), o && v.select("." + $.label).text(y + " = " + n(d)), h(), f();
  };
  return {
    type: t,
    scale: w,
    id: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    label: function(g) {
      return typeof g > "u" ? y : (y = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    girth: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    knob: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    show: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    labelpadding: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? c : (c = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return h = g, this;
      h(g);
    },
    update_end: function(g) {
      if (typeof g == "function")
        return f = g, this;
      f(g);
    },
    range: function(g) {
      return typeof g > "u" ? p : (p = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? d : (d = g, this);
    },
    reset: b,
    click: b
  };
}, vm = () => {
  const t = "radio";
  var n = Si(), e = 100, r = 20, i = 0.3, a = "round", o = "vertical", s = { x: 0, y: 0 }, l = "right", u = null, c = function(p) {
  }, h = [], f = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    buttonsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    buttonpadding: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    orientation: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? s.x : (s.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? s.y : (s.y = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return c = p, this;
      c(p);
    },
    choices: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    click: function(p, d) {
      f = d, R(this.parentNode).selectAll("." + $.symbol).classed($.selected, (y) => y == f), c();
    },
    reset: function(p, d) {
      f = d, p.select("#radio_" + n).selectAll("." + $.symbol).classed($.selected, (y) => y == f), c();
    }
  };
}, mm = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = R(a).attr("class", $.widget + " " + $.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", $.background).on("click", t.click).on("mouseover", function() {
    R(this).classed($.lit, !0), R(this.parentNode).select("." + $.symbol).classed($.lit, !0);
  }).on("mouseout", function() {
    R(this).classed($.lit, !1), R(this.parentNode).select("." + $.symbol).classed($.lit, !1);
  }), o.append("path").attr("d", Gr(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", $.symbol), r) {
    const l = ki(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", $.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return a;
}, Qs = (t, n) => {
  const e = it();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, wm = (t, n) => {
  const e = qe(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = R(l).attr("class", $.widget + " " + $.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2, c = (b) => {
    const g = b && b.sourceEvent ? b.sourceEvent : b;
    return g ? g.clientX != null ? g.clientX : g.touches && g.touches.length ? g.touches[0].clientX : g.changedTouches && g.changedTouches.length ? g.changedTouches[0].clientX : null : null;
  }, h = (b, g) => {
    const M = c(b);
    if (M == null) return null;
    const _ = g.getBoundingClientRect(), v = M - _.left, N = g.width && g.width.baseVal ? g.width.baseVal.value : _.width, P = _.width ? N / _.width : 1;
    return v * P - u;
  };
  s.append("path").attr("d", Qs(t.size(), t.girth())).attr("class", $.track), s.append("circle").attr("class", $.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", $.track_overlay).on("click", function(b) {
    const g = h(b, this);
    if (g == null) return;
    const M = Math.max(0, Math.min(t.size(), g));
    t.value(o.invert(M)), t.update(), t.update_end(), s.selectAll("." + $.handle).attr("cx", o(t.value())), t.show() && s.select("." + $.label).text(t.label() + " = " + e(t.value()));
  }).call(
    r0().on("drag", function(b) {
      const g = h(b, this);
      if (g == null) return;
      const M = Math.max(0, Math.min(t.size(), g));
      t.value(o.invert(M)), t.update(), s.selectAll("." + $.handle).attr("cx", o(t.value())), t.show() && s.select("." + $.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(b) {
      t.update_end();
    })
  );
  var f, p, d, y = "bottom";
  const w = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? p = t.labelposition().match(/bottom/i) != null ? Zn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + w : -Zn([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - w : p = t.labelposition().match(/bottom/i) != null ? Zn([t.girth() / 2, t.knob()]) + 7 + w : -Zn([t.girth() / 2, t.knob()]) - 7 - w, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, d = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", y = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", $.label).style("text-anchor", d).style("alignment-baseline", y).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + p + ")"), l;
}, bm = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = R(o).attr("class", $.widget + " " + $.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed($.selected, t.value() == 1);
  if (s.append("path").attr("d", Qs(2 * t.size(), 2 * t.size())).attr("class", $.track), s.append("circle").attr("class", $.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", $.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = ki(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", $.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return o;
}, xm = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = pp(o), l = un().domain([0, o - 1]).range([0, t.size()]), u = un().domain([0, o - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = R(c).attr("class", $.widget + " " + $.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + $.radiobutton).data(s).enter().append("g").attr("class", $.radiobutton).attr("id", (y) => "b" + y).attr("transform", (y) => t.orientation() == "vertical" ? "translate(0," + u(y) + ")" : "translate(" + l(y) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", a / 2)), f.attr("class", $.background).on("mouseover", function() {
    R(this).classed($.lit, !0), R(this.parentNode).select("." + $.symbol).classed($.lit, !0);
  }).on("mouseout", function() {
    R(this).classed($.lit, !1), R(this.parentNode).select("." + $.symbol).classed($.lit, !1);
  }), p.attr("class", $.symbol), p.filter((y) => y == t.value()).classed($.selected, !0), h.on("click", t.click);
  const d = ki(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", $.label).text(function(y, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), c;
}, pr = (t, n) => {
  switch (t.type) {
    case "button":
      return mm(t);
    case "slider":
      return wm(t);
    case "radio":
      return xm(t);
    case "toggle":
      return bm(t);
  }
}, Mm = "_displayPanel_1ueg0_1", $m = "_controlPanel_1ueg0_8", Am = "_trunk_1ueg0_24", Tm = "_branch_1ueg0_24", Nm = "_cartoon_1ueg0_32", At = {
  displayPanel: Mm,
  controlPanel: $m,
  trunk: Am,
  branch: Tm,
  cartoon: Nm
}, Sm = (t, n) => {
  const e = V1(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = Lc("#" + t).classed(t + " " + n.container_class, !0), i = t + "_display", a = t + "_controls", o = r.append("div").attr("id", i).attr("class", At.displayPanel).classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), s = r.append("div").attr("id", a).attr("class", "d3-widgets " + At.controlPanel).classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return n.debug && s.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").style("fill", "black"), { display: o, controls: s, grid: e };
};
var tu = typeof global == "object" && global && global.Object === Object && global, km = typeof self == "object" && self && self.Object === Object && self, bt = tu || km || Function("return this")(), Tt = bt.Symbol, nu = Object.prototype, Pm = nu.hasOwnProperty, Em = nu.toString, vn = Tt ? Tt.toStringTag : void 0;
function Om(t) {
  var n = Pm.call(t, vn), e = t[vn];
  try {
    t[vn] = void 0;
    var r = !0;
  } catch {
  }
  var i = Em.call(t);
  return r && (n ? t[vn] = e : delete t[vn]), i;
}
var zm = Object.prototype, Cm = zm.toString;
function Im(t) {
  return Cm.call(t);
}
var Rm = "[object Null]", jm = "[object Undefined]", to = Tt ? Tt.toStringTag : void 0;
function dn(t) {
  return t == null ? t === void 0 ? jm : Rm : to && to in Object(t) ? Om(t) : Im(t);
}
function fn(t) {
  return t != null && typeof t == "object";
}
var Fm = "[object Symbol]";
function Ye(t) {
  return typeof t == "symbol" || fn(t) && dn(t) == Fm;
}
function Ve(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var nt = Array.isArray, no = Tt ? Tt.prototype : void 0, eo = no ? no.toString : void 0;
function eu(t) {
  if (typeof t == "string")
    return t;
  if (nt(t))
    return Ve(t, eu) + "";
  if (Ye(t))
    return eo ? eo.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var Lm = /\s/;
function Dm(t) {
  for (var n = t.length; n-- && Lm.test(t.charAt(n)); )
    ;
  return n;
}
var qm = /^\s+/;
function Hm(t) {
  return t && t.slice(0, Dm(t) + 1).replace(qm, "");
}
function yt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var ro = NaN, Xm = /^[-+]0x[0-9a-f]+$/i, Bm = /^0b[01]+$/i, Um = /^0o[0-7]+$/i, Gm = parseInt;
function Ym(t) {
  if (typeof t == "number")
    return t;
  if (Ye(t))
    return ro;
  if (yt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = yt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Hm(t);
  var e = Bm.test(t);
  return e || Um.test(t) ? Gm(t.slice(2), e ? 2 : 8) : Xm.test(t) ? ro : +t;
}
var io = 1 / 0, Vm = 17976931348623157e292;
function dr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Ym(t), t === io || t === -io) {
    var n = t < 0 ? -1 : 1;
    return n * Vm;
  }
  return t === t ? t : 0;
}
function ru(t) {
  return t;
}
var Km = "[object AsyncFunction]", Wm = "[object Function]", Zm = "[object GeneratorFunction]", Jm = "[object Proxy]";
function iu(t) {
  if (!yt(t))
    return !1;
  var n = dn(t);
  return n == Wm || n == Zm || n == Km || n == Jm;
}
var gr = bt["__core-js_shared__"], ao = (function() {
  var t = /[^.]+$/.exec(gr && gr.keys && gr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function Qm(t) {
  return !!ao && ao in t;
}
var tw = Function.prototype, nw = tw.toString;
function Ut(t) {
  if (t != null) {
    try {
      return nw.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var ew = /[\\^$.*+?()[\]{}|]/g, rw = /^\[object .+?Constructor\]$/, iw = Function.prototype, aw = Object.prototype, ow = iw.toString, sw = aw.hasOwnProperty, uw = RegExp(
  "^" + ow.call(sw).replace(ew, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function lw(t) {
  if (!yt(t) || Qm(t))
    return !1;
  var n = iu(t) ? uw : rw;
  return n.test(Ut(t));
}
function cw(t, n) {
  return t == null ? void 0 : t[n];
}
function Gt(t, n) {
  var e = cw(t, n);
  return lw(e) ? e : void 0;
}
var Yr = Gt(bt, "WeakMap"), oo = (function() {
  try {
    var t = Gt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})();
function fw(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var hw = 9007199254740991, pw = /^(?:0|[1-9]\d*)$/;
function Ke(t, n) {
  var e = typeof t;
  return n = n ?? hw, !!n && (e == "number" || e != "symbol" && pw.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function dw(t, n, e) {
  n == "__proto__" && oo ? oo(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function We(t, n) {
  return t === n || t !== t && n !== n;
}
var gw = Object.prototype, _w = gw.hasOwnProperty;
function yw(t, n, e) {
  var r = t[n];
  (!(_w.call(t, n) && We(r, e)) || e === void 0 && !(n in t)) && dw(t, n, e);
}
var vw = 9007199254740991;
function Pi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= vw;
}
function Bn(t) {
  return t != null && Pi(t.length) && !iu(t);
}
function mw(t, n, e) {
  if (!yt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Bn(e) && Ke(n, e.length) : r == "string" && n in e) ? We(e[n], t) : !1;
}
var ww = Object.prototype;
function au(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || ww;
  return t === e;
}
function bw(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var xw = "[object Arguments]";
function so(t) {
  return fn(t) && dn(t) == xw;
}
var ou = Object.prototype, Mw = ou.hasOwnProperty, $w = ou.propertyIsEnumerable, su = so(/* @__PURE__ */ (function() {
  return arguments;
})()) ? so : function(t) {
  return fn(t) && Mw.call(t, "callee") && !$w.call(t, "callee");
};
function Aw() {
  return !1;
}
var uu = typeof exports == "object" && exports && !exports.nodeType && exports, uo = uu && typeof module == "object" && module && !module.nodeType && module, Tw = uo && uo.exports === uu, lo = Tw ? bt.Buffer : void 0, Nw = lo ? lo.isBuffer : void 0, Vr = Nw || Aw, Sw = "[object Arguments]", kw = "[object Array]", Pw = "[object Boolean]", Ew = "[object Date]", Ow = "[object Error]", zw = "[object Function]", Cw = "[object Map]", Iw = "[object Number]", Rw = "[object Object]", jw = "[object RegExp]", Fw = "[object Set]", Lw = "[object String]", Dw = "[object WeakMap]", qw = "[object ArrayBuffer]", Hw = "[object DataView]", Xw = "[object Float32Array]", Bw = "[object Float64Array]", Uw = "[object Int8Array]", Gw = "[object Int16Array]", Yw = "[object Int32Array]", Vw = "[object Uint8Array]", Kw = "[object Uint8ClampedArray]", Ww = "[object Uint16Array]", Zw = "[object Uint32Array]", k = {};
k[Xw] = k[Bw] = k[Uw] = k[Gw] = k[Yw] = k[Vw] = k[Kw] = k[Ww] = k[Zw] = !0;
k[Sw] = k[kw] = k[qw] = k[Pw] = k[Hw] = k[Ew] = k[Ow] = k[zw] = k[Cw] = k[Iw] = k[Rw] = k[jw] = k[Fw] = k[Lw] = k[Dw] = !1;
function Jw(t) {
  return fn(t) && Pi(t.length) && !!k[dn(t)];
}
function Qw(t) {
  return function(n) {
    return t(n);
  };
}
var lu = typeof exports == "object" && exports && !exports.nodeType && exports, Tn = lu && typeof module == "object" && module && !module.nodeType && module, tb = Tn && Tn.exports === lu, _r = tb && tu.process, co = (function() {
  try {
    var t = Tn && Tn.require && Tn.require("util").types;
    return t || _r && _r.binding && _r.binding("util");
  } catch {
  }
})(), fo = co && co.isTypedArray, cu = fo ? Qw(fo) : Jw, nb = Object.prototype, eb = nb.hasOwnProperty;
function fu(t, n) {
  var e = nt(t), r = !e && su(t), i = !e && !r && Vr(t), a = !e && !r && !i && cu(t), o = e || r || i || a, s = o ? bw(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || eb.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ke(u, l))) && s.push(u);
  return s;
}
function hu(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var rb = hu(Object.keys, Object), ib = Object.prototype, ab = ib.hasOwnProperty;
function ob(t) {
  if (!au(t))
    return rb(t);
  var n = [];
  for (var e in Object(t))
    ab.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Ze(t) {
  return Bn(t) ? fu(t) : ob(t);
}
function sb(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var ub = Object.prototype, lb = ub.hasOwnProperty;
function cb(t) {
  if (!yt(t))
    return sb(t);
  var n = au(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !lb.call(t, r)) || e.push(r);
  return e;
}
function fb(t) {
  return Bn(t) ? fu(t, !0) : cb(t);
}
var hb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pb = /^\w*$/;
function Ei(t, n) {
  if (nt(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Ye(t) ? !0 : pb.test(t) || !hb.test(t) || n != null && t in Object(n);
}
var Rn = Gt(Object, "create");
function db() {
  this.__data__ = Rn ? Rn(null) : {}, this.size = 0;
}
function gb(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var _b = "__lodash_hash_undefined__", yb = Object.prototype, vb = yb.hasOwnProperty;
function mb(t) {
  var n = this.__data__;
  if (Rn) {
    var e = n[t];
    return e === _b ? void 0 : e;
  }
  return vb.call(n, t) ? n[t] : void 0;
}
var wb = Object.prototype, bb = wb.hasOwnProperty;
function xb(t) {
  var n = this.__data__;
  return Rn ? n[t] !== void 0 : bb.call(n, t);
}
var Mb = "__lodash_hash_undefined__";
function $b(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Rn && n === void 0 ? Mb : n, this;
}
function Xt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Xt.prototype.clear = db;
Xt.prototype.delete = gb;
Xt.prototype.get = mb;
Xt.prototype.has = xb;
Xt.prototype.set = $b;
function Ab() {
  this.__data__ = [], this.size = 0;
}
function Je(t, n) {
  for (var e = t.length; e--; )
    if (We(t[e][0], n))
      return e;
  return -1;
}
var Tb = Array.prototype, Nb = Tb.splice;
function Sb(t) {
  var n = this.__data__, e = Je(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Nb.call(n, e, 1), --this.size, !0;
}
function kb(t) {
  var n = this.__data__, e = Je(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Pb(t) {
  return Je(this.__data__, t) > -1;
}
function Eb(t, n) {
  var e = this.__data__, r = Je(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function xt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
xt.prototype.clear = Ab;
xt.prototype.delete = Sb;
xt.prototype.get = kb;
xt.prototype.has = Pb;
xt.prototype.set = Eb;
var jn = Gt(bt, "Map");
function Ob() {
  this.size = 0, this.__data__ = {
    hash: new Xt(),
    map: new (jn || xt)(),
    string: new Xt()
  };
}
function zb(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Qe(t, n) {
  var e = t.__data__;
  return zb(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Cb(t) {
  var n = Qe(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Ib(t) {
  return Qe(this, t).get(t);
}
function Rb(t) {
  return Qe(this, t).has(t);
}
function jb(t, n) {
  var e = Qe(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function Mt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Mt.prototype.clear = Ob;
Mt.prototype.delete = Cb;
Mt.prototype.get = Ib;
Mt.prototype.has = Rb;
Mt.prototype.set = jb;
var Fb = "Expected a function";
function Oi(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Fb);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Oi.Cache || Mt)(), e;
}
Oi.Cache = Mt;
var Lb = 500;
function Db(t) {
  var n = Oi(t, function(r) {
    return e.size === Lb && e.clear(), r;
  }), e = n.cache;
  return n;
}
var qb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Hb = /\\(\\)?/g, Xb = Db(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(qb, function(e, r, i, a) {
    n.push(i ? a.replace(Hb, "$1") : r || e);
  }), n;
});
function tr(t) {
  return t == null ? "" : eu(t);
}
function nr(t, n) {
  return nt(t) ? t : Ei(t, n) ? [t] : Xb(tr(t));
}
function Un(t) {
  if (typeof t == "string" || Ye(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function zi(t, n) {
  n = nr(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Un(n[e++])];
  return e && e == r ? t : void 0;
}
function Bb(t, n, e) {
  var r = t == null ? void 0 : zi(t, n);
  return r === void 0 ? e : r;
}
function pu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Ub = hu(Object.getPrototypeOf, Object);
function Gb(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function Yb(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, !n && e >= r ? t : Gb(t, n, e);
}
var Vb = "\\ud800-\\udfff", Kb = "\\u0300-\\u036f", Wb = "\\ufe20-\\ufe2f", Zb = "\\u20d0-\\u20ff", Jb = Kb + Wb + Zb, Qb = "\\ufe0e\\ufe0f", tx = "\\u200d", nx = RegExp("[" + tx + Vb + Jb + Qb + "]");
function du(t) {
  return nx.test(t);
}
function ex(t) {
  return t.split("");
}
var gu = "\\ud800-\\udfff", rx = "\\u0300-\\u036f", ix = "\\ufe20-\\ufe2f", ax = "\\u20d0-\\u20ff", ox = rx + ix + ax, sx = "\\ufe0e\\ufe0f", ux = "[" + gu + "]", Kr = "[" + ox + "]", Wr = "\\ud83c[\\udffb-\\udfff]", lx = "(?:" + Kr + "|" + Wr + ")", _u = "[^" + gu + "]", yu = "(?:\\ud83c[\\udde6-\\uddff]){2}", vu = "[\\ud800-\\udbff][\\udc00-\\udfff]", cx = "\\u200d", mu = lx + "?", wu = "[" + sx + "]?", fx = "(?:" + cx + "(?:" + [_u, yu, vu].join("|") + ")" + wu + mu + ")*", hx = wu + mu + fx, px = "(?:" + [_u + Kr + "?", Kr, yu, vu, ux].join("|") + ")", dx = RegExp(Wr + "(?=" + Wr + ")|" + px + hx, "g");
function gx(t) {
  return t.match(dx) || [];
}
function _x(t) {
  return du(t) ? gx(t) : ex(t);
}
function yx(t) {
  return function(n) {
    n = tr(n);
    var e = du(n) ? _x(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Yb(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var vx = yx("toUpperCase");
function mx(t) {
  return vx(tr(t).toLowerCase());
}
function wx() {
  this.__data__ = new xt(), this.size = 0;
}
function bx(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function xx(t) {
  return this.__data__.get(t);
}
function Mx(t) {
  return this.__data__.has(t);
}
var $x = 200;
function Ax(t, n) {
  var e = this.__data__;
  if (e instanceof xt) {
    var r = e.__data__;
    if (!jn || r.length < $x - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new Mt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function dt(t) {
  var n = this.__data__ = new xt(t);
  this.size = n.size;
}
dt.prototype.clear = wx;
dt.prototype.delete = bx;
dt.prototype.get = xx;
dt.prototype.has = Mx;
dt.prototype.set = Ax;
function Tx(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function bu() {
  return [];
}
var Nx = Object.prototype, Sx = Nx.propertyIsEnumerable, ho = Object.getOwnPropertySymbols, xu = ho ? function(t) {
  return t == null ? [] : (t = Object(t), Tx(ho(t), function(n) {
    return Sx.call(t, n);
  }));
} : bu, kx = Object.getOwnPropertySymbols, Px = kx ? function(t) {
  for (var n = []; t; )
    pu(n, xu(t)), t = Ub(t);
  return n;
} : bu;
function Mu(t, n, e) {
  var r = n(t);
  return nt(t) ? r : pu(r, e(t));
}
function po(t) {
  return Mu(t, Ze, xu);
}
function Ex(t) {
  return Mu(t, fb, Px);
}
var Zr = Gt(bt, "DataView"), Jr = Gt(bt, "Promise"), Qr = Gt(bt, "Set"), go = "[object Map]", Ox = "[object Object]", _o = "[object Promise]", yo = "[object Set]", vo = "[object WeakMap]", mo = "[object DataView]", zx = Ut(Zr), Cx = Ut(jn), Ix = Ut(Jr), Rx = Ut(Qr), jx = Ut(Yr), ht = dn;
(Zr && ht(new Zr(new ArrayBuffer(1))) != mo || jn && ht(new jn()) != go || Jr && ht(Jr.resolve()) != _o || Qr && ht(new Qr()) != yo || Yr && ht(new Yr()) != vo) && (ht = function(t) {
  var n = dn(t), e = n == Ox ? t.constructor : void 0, r = e ? Ut(e) : "";
  if (r)
    switch (r) {
      case zx:
        return mo;
      case Cx:
        return go;
      case Ix:
        return _o;
      case Rx:
        return yo;
      case jx:
        return vo;
    }
  return n;
});
var wo = bt.Uint8Array, Fx = "__lodash_hash_undefined__";
function Lx(t) {
  return this.__data__.set(t, Fx), this;
}
function Dx(t) {
  return this.__data__.has(t);
}
function Ce(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new Mt(); ++n < e; )
    this.add(t[n]);
}
Ce.prototype.add = Ce.prototype.push = Lx;
Ce.prototype.has = Dx;
function qx(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Hx(t, n) {
  return t.has(n);
}
var Xx = 1, Bx = 2;
function $u(t, n, e, r, i, a) {
  var o = e & Xx, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & Bx ? new Ce() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], y = n[h];
    if (r)
      var w = o ? r(y, d, h, n, t, a) : r(d, y, h, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!qx(n, function(b, g) {
        if (!Hx(p, g) && (d === b || i(d, b, e, r, a)))
          return p.push(g);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === y || i(d, y, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function Au(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Ux(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Gx = 1, Yx = 2, Vx = "[object Boolean]", Kx = "[object Date]", Wx = "[object Error]", Zx = "[object Map]", Jx = "[object Number]", Qx = "[object RegExp]", t2 = "[object Set]", n2 = "[object String]", e2 = "[object Symbol]", r2 = "[object ArrayBuffer]", i2 = "[object DataView]", bo = Tt ? Tt.prototype : void 0, yr = bo ? bo.valueOf : void 0;
function a2(t, n, e, r, i, a, o) {
  switch (e) {
    case i2:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case r2:
      return !(t.byteLength != n.byteLength || !a(new wo(t), new wo(n)));
    case Vx:
    case Kx:
    case Jx:
      return We(+t, +n);
    case Wx:
      return t.name == n.name && t.message == n.message;
    case Qx:
    case n2:
      return t == n + "";
    case Zx:
      var s = Au;
    case t2:
      var l = r & Gx;
      if (s || (s = Ux), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= Yx, o.set(t, n);
      var c = $u(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case e2:
      if (yr)
        return yr.call(t) == yr.call(n);
  }
  return !1;
}
var o2 = 1, s2 = Object.prototype, u2 = s2.hasOwnProperty;
function l2(t, n, e, r, i, a) {
  var o = e & o2, s = po(t), l = s.length, u = po(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : u2.call(n, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var y = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++h < l; ) {
    f = s[h];
    var b = t[f], g = n[f];
    if (r)
      var M = o ? r(g, b, f, n, t, a) : r(b, g, f, t, n, a);
    if (!(M === void 0 ? b === g || i(b, g, e, r, a) : M)) {
      y = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (y && !w) {
    var _ = t.constructor, v = n.constructor;
    _ != v && "constructor" in t && "constructor" in n && !(typeof _ == "function" && _ instanceof _ && typeof v == "function" && v instanceof v) && (y = !1);
  }
  return a.delete(t), a.delete(n), y;
}
var c2 = 1, xo = "[object Arguments]", Mo = "[object Array]", ie = "[object Object]", f2 = Object.prototype, $o = f2.hasOwnProperty;
function h2(t, n, e, r, i, a) {
  var o = nt(t), s = nt(n), l = o ? Mo : ht(t), u = s ? Mo : ht(n);
  l = l == xo ? ie : l, u = u == xo ? ie : u;
  var c = l == ie, h = u == ie, f = l == u;
  if (f && Vr(t)) {
    if (!Vr(n))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new dt()), o || cu(t) ? $u(t, n, e, r, i, a) : a2(t, n, l, e, r, i, a);
  if (!(e & c2)) {
    var p = c && $o.call(t, "__wrapped__"), d = h && $o.call(n, "__wrapped__");
    if (p || d) {
      var y = p ? t.value() : t, w = d ? n.value() : n;
      return a || (a = new dt()), i(y, w, e, r, a);
    }
  }
  return f ? (a || (a = new dt()), l2(t, n, e, r, i, a)) : !1;
}
function Ci(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !fn(t) && !fn(n) ? t !== t && n !== n : h2(t, n, e, r, Ci, i);
}
var p2 = 1, d2 = 2;
function g2(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new dt(), h;
      if (!(h === void 0 ? Ci(u, l, p2 | d2, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Tu(t) {
  return t === t && !yt(t);
}
function _2(t) {
  for (var n = Ze(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Tu(i)];
  }
  return n;
}
function Nu(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function y2(t) {
  var n = _2(t);
  return n.length == 1 && n[0][2] ? Nu(n[0][0], n[0][1]) : function(e) {
    return e === t || g2(e, t, n);
  };
}
function v2(t, n) {
  return t != null && n in Object(t);
}
function Su(t, n, e) {
  n = nr(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Un(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Pi(i) && Ke(o, i) && (nt(t) || su(t)));
}
function m2(t, n) {
  return t != null && Su(t, n, v2);
}
var w2 = 1, b2 = 2;
function x2(t, n) {
  return Ei(t) && Tu(n) ? Nu(Un(t), n) : function(e) {
    var r = Bb(e, t);
    return r === void 0 && r === n ? m2(e, t) : Ci(n, r, w2 | b2);
  };
}
function M2(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function $2(t) {
  return function(n) {
    return zi(n, t);
  };
}
function A2(t) {
  return Ei(t) ? M2(Un(t)) : $2(t);
}
function ku(t) {
  return typeof t == "function" ? t : t == null ? ru : typeof t == "object" ? nt(t) ? x2(t[0], t[1]) : y2(t) : A2(t);
}
function T2(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var N2 = T2();
function S2(t, n) {
  return t && N2(t, n, Ze);
}
function k2(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Bn(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var Pu = k2(S2);
function P2(t) {
  return typeof t == "function" ? t : ru;
}
function er(t, n) {
  var e = nt(t) ? fw : Pu;
  return e(t, P2(n));
}
function E2(t, n) {
  return Ve(n, function(e) {
    return [e, t[e]];
  });
}
function O2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var z2 = "[object Map]", C2 = "[object Set]";
function I2(t) {
  return function(n) {
    var e = ht(n);
    return e == z2 ? Au(n) : e == C2 ? O2(n) : E2(n, t(n));
  };
}
var Eu = I2(Ze);
function R2(t, n) {
  var e = -1, r = Bn(t) ? Array(t.length) : [];
  return Pu(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function Fn(t, n) {
  var e = nt(t) ? Ve : R2;
  return e(t, ku(n));
}
var j2 = Object.prototype, F2 = j2.hasOwnProperty;
function L2(t, n) {
  return t != null && F2.call(t, n);
}
function Ou(t, n) {
  return t != null && Su(t, n, L2);
}
function D2(t, n, e, r) {
  if (!yt(t))
    return t;
  n = nr(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var l = Un(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != o) {
      var c = s[l];
      u = void 0, u === void 0 && (u = yt(c) ? c : Ke(n[i + 1]) ? [] : {});
    }
    yw(s, l, u), s = s[l];
  }
  return t;
}
function q2(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = zi(t, o);
    e(s, o) && D2(a, nr(o, t), s);
  }
  return a;
}
function zu(t, n) {
  if (t == null)
    return {};
  var e = Ve(Ex(t), function(r) {
    return [r];
  });
  return n = ku(n), q2(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var H2 = Math.ceil, X2 = Math.max;
function B2(t, n, e, r) {
  for (var i = -1, a = X2(H2((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function U2(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && mw(n, e, r) && (e = r = void 0), n = dr(n), e === void 0 ? (e = n, n = 0) : e = dr(e), r = r === void 0 ? n < e ? 1 : -1 : dr(r), B2(n, e, r);
  };
}
var vr = U2();
function G2() {
  var t = arguments, n = tr(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
const A = {
  widgets: {
    slider_size: 200,
    slider_gap: 1.2,
    length_slider_anchor: { x: 0.5, y: 1 },
    angle_slider_anchor: { x: 0.5, y: 5 },
    other_slider_anchor: { x: 0.5, y: 9 },
    radio_anchor: { x: 11, y: 6 },
    radio_size: 200,
    radio_orientation: "vertical",
    radio_label_position: "left",
    radio_shape: "rect",
    radio_button_size: 25,
    button_size: 30,
    reset_noise_angle_button_anchor: { x: 6.2, y: 9 },
    reset_noise_length_button_anchor: { x: 6.2, y: 10.2 }
  },
  plot: {
    height: 200,
    width: 200,
    anchor: { x: 9, y: 5 }
  },
  display: {
    pen_color: "black",
    background_color: "white"
  }
}, x = {
  N: 8,
  lw_min: 0.5,
  L: 100,
  length_left_branch: {
    range: [0, 0.95],
    default: 0.39
  },
  length_central_branch: {
    range: [0, 0.95],
    default: 0.89
  },
  length_right_branch: {
    range: [0, 0.95],
    default: 0.37
  },
  angle_left_branch: {
    range: [0, 50],
    default: 18.34
  },
  angle_central_branch: {
    range: [-20, 20],
    default: 3
  },
  angle_right_branch: {
    range: [-50, 0],
    default: -16
  },
  noise_angle: {
    range: [0, 1],
    default: 0
  },
  noise_length: {
    range: [0, 0.5],
    default: 0
  },
  thickness_scale: {
    range: [0.5, 30],
    default: 0.5
  },
  presets: {
    choices: [
      {
        name: "Boring",
        r1: 0.8,
        r2: 0.8,
        r3: 0.8,
        theta1: -24,
        theta2: 0,
        theta3: 24,
        sigma: 0,
        eta: 0,
        lw_max: 0.5
      },
      {
        name: "Weed",
        r1: 0.37,
        r2: 0.89,
        r3: 0.39,
        theta1: -16,
        theta2: 3,
        theta3: 18.34,
        sigma: 0,
        eta: 0,
        lw_max: 0.5
      },
      {
        name: "Tree",
        r1: 0.72,
        r2: 0.82,
        r3: 0.69,
        theta1: -26.25,
        theta2: -0.83,
        theta3: 33.75,
        sigma: 0.77,
        eta: 0.1,
        lw_max: 12.66
      },
      {
        name: "Phragmites",
        r1: 0.4,
        r2: 0.73,
        r3: 0.32,
        theta1: -23,
        theta2: 4,
        theta3: 43,
        sigma: 0.77,
        eta: 0.13,
        lw_max: 0.5
      },
      {
        name: "Tim Burton Tree",
        r1: 0.73,
        r2: 0.15,
        r3: 0.8,
        theta1: -20,
        theta2: 0,
        theta3: 33,
        sigma: 0.42,
        eta: 0.5,
        lw_max: 9
      },
      {
        name: "Fir",
        r1: 0.51,
        r2: 0.9,
        r3: 0.46,
        theta1: -29.1,
        theta2: -0.6,
        theta3: 34,
        sigma: 0.42,
        eta: 0,
        lw_max: 16
      }
    ],
    default: 3
  }
}, Cu = (t) => Fn(Eu(t), (n) => {
  n[1].id = n[0], n[1].label = n[1].label || G2(mx(n[0]), /_/g, " ");
}), Iu = (t) => Fn(Eu(t), (n) => n[1]), Ru = (t, n) => er(t, (e, r) => e.widget = n[r]), Y2 = (t) => zu(t, (n) => Ou(n, "range")), V2 = (t) => zu(t, (n) => Ou(n, "choices"));
Nt().domain([0, 360]).range([0, 2 * Math.PI]);
Nt().range([0, 360]).domain([0, 2 * Math.PI]);
const G = () => 2 * (Math.random() - 0.5), Y = (t) => Math.cos(t * Math.PI / 180), V = (t) => Math.sin(t * Math.PI / 180), ju = Y2(x), Fu = V2(x);
Cu(ju);
Cu(Fu);
const Lu = Iu(ju), Ii = Iu(Fu), Gn = Fn(
  Lu,
  (t) => ym().id(t.id).label(t.label).range(t.range).value(t.default).size(A.widgets.slider_size)
);
console.log(Ii);
const ti = Fn(
  Ii,
  (t) => vm().choices(Fn(t.choices, (n) => n.name)).id(t.id).value(t.default).orientation(A.widgets.radio_orientation).labelposition(A.widgets.radio_label_position).buttonsize(A.widgets.radio_button_size).size(A.widgets.radio_size).shape(A.widgets.radio_shape)
);
Ru(Lu, Gn);
Ru(Ii, ti);
const Ao = Gn.slice(0, 3), To = Gn.slice(3, 6), No = Gn.slice(6), Ri = Js().actions(["rewind"]), ji = Js().actions(["rewind"]), K2 = [Ri, ji], W2 = (t, n) => {
  const e = n.position(A.widgets.length_slider_anchor.x, vr(Ao.length).map((o) => A.widgets.length_slider_anchor.y + A.widgets.slider_gap * o)), r = n.position(A.widgets.angle_slider_anchor.x, vr(To.length).map((o) => A.widgets.angle_slider_anchor.y + A.widgets.slider_gap * o)), i = n.position(A.widgets.other_slider_anchor.x, vr(No.length).map((o) => A.widgets.other_slider_anchor.y + A.widgets.slider_gap * o)), a = n.position(A.widgets.radio_anchor.x, A.widgets.radio_anchor.y);
  Ao.forEach((o, s) => o.position(e[s])), To.forEach((o, s) => o.position(r[s])), No.forEach((o, s) => o.position(i[s])), ti[0].position(a), Ri.position(n.position(A.widgets.reset_noise_angle_button_anchor.x, A.widgets.reset_noise_angle_button_anchor.y)).size(A.widgets.button_size), ji.position(n.position(A.widgets.reset_noise_length_button_anchor.x, A.widgets.reset_noise_length_button_anchor.y)).size(A.widgets.button_size), t.selectAll(null).data(Gn).enter().append(pr), t.selectAll(null).data(ti).enter().append(pr), t.selectAll(null).data(K2).enter().append(pr);
};
var zt = [];
const Z2 = { depth: 0, x: 0, y: 0, l: 1, dx: 0, dy: 0, parent: [] };
var Ln = { depth: 0, x: 0, y: 1, l: 1, dx: 0, dy: 1, children: [], parent: Z2 };
const J2 = x.N, Du = (t, n) => {
  t.parent != null && n.push([t, t.parent]), t.children.length > 0 && er(t.children, (e) => {
    Du(e, n);
  });
}, qu = (t, n) => {
  const e = x.length_left_branch.widget.value(), r = x.length_central_branch.widget.value(), i = x.length_right_branch.widget.value(), a = x.angle_left_branch.widget.value(), o = x.angle_central_branch.widget.value(), s = x.angle_right_branch.widget.value(), l = x.noise_angle.widget.value(), u = x.noise_length.widget.value();
  if (t.depth < n) {
    let c = t.depth + 1;
    t.sigma1theta = G(), t.sigma2theta = G(), t.sigma3theta = G(), t.sigma1r = G(), t.sigma2r = G(), t.sigma3r = G();
    let h = e * (1 + u * t.sigma1r), f = r * (1 + u * t.sigma2r), p = i * (1 + u * t.sigma3r), d = a * (1 + l * t.sigma1theta), y = o * (1 + l * t.sigma2theta), w = s * (1 + l * t.sigma3theta), b = h * Y(d) * t.dx - h * V(d) * t.dy, g = h * V(d) * t.dx + h * Y(d) * t.dy, M = f * Y(y) * t.dx - f * V(y) * t.dy, _ = f * V(y) * t.dx + f * Y(y) * t.dy, v = p * Y(w) * t.dx - p * V(w) * t.dy, N = p * V(w) * t.dx + p * Y(w) * t.dy;
    t.children = [], t.children.push({ depth: c, dx: b, dy: g, x: t.x + b, y: t.y + g, l: t.l * h, children: [], parent: t }), t.children.push({ depth: c, dx: M, dy: _, x: t.x + M, y: t.y + _, l: t.l * f, children: [], parent: t }), t.children.push({ depth: c, dx: v, dy: N, x: t.x + v, y: t.y + N, l: t.l * p, children: [], parent: t }), t.children.forEach(function(P) {
      qu(P, n);
    });
  }
  return t;
}, Hu = (t) => {
  const n = x.length_left_branch.widget.value(), e = x.length_central_branch.widget.value(), r = x.length_right_branch.widget.value(), i = x.angle_left_branch.widget.value(), a = x.angle_central_branch.widget.value(), o = x.angle_right_branch.widget.value(), s = x.noise_angle.widget.value(), l = x.noise_length.widget.value();
  if (t.children.length != 0) {
    let u = n * (1 + l * t.sigma1r), c = e * (1 + l * t.sigma2r), h = r * (1 + l * t.sigma3r), f = i * (1 + s * t.sigma1theta), p = a * (1 + s * t.sigma2theta), d = o * (1 + s * t.sigma3theta), y = u * Y(f) * t.dx - u * V(f) * t.dy, w = u * V(f) * t.dx + u * Y(f) * t.dy, b = c * Y(p) * t.dx - c * V(p) * t.dy, g = c * V(p) * t.dx + c * Y(p) * t.dy, M = h * Y(d) * t.dx - h * V(d) * t.dy, _ = h * V(d) * t.dx + h * Y(d) * t.dy;
    t.children[0].dx = y, t.children[0].dy = w, t.children[0].x = t.x + y, t.children[0].y = t.y + w, t.children[0].l = t.l * n, t.children[1].dx = b, t.children[1].dy = g, t.children[1].x = t.x + b, t.children[1].y = t.y + g, t.children[1].l = t.l * e, t.children[2].dx = M, t.children[2].dy = _, t.children[2].x = t.x + M, t.children[2].y = t.y + _, t.children[2].l = t.l * r, t.children.forEach(function(v) {
      Hu(v);
    });
  }
}, Q2 = () => {
  x.presets.widget.update(), qu(Ln, J2), Du(Ln, zt);
}, tM = () => {
  Hu(Ln);
}, Xu = x.lw_min, nM = x.N;
var O, Wt, Zt;
const Rt = Nt(), jt = Nt(), Fi = Nt().range([Math.log(x.thickness_scale.widget.value()), Math.log(Xu)]).domain([0, nM]);
function Bu() {
  var t = [], n = [];
  t[0] = Di(zt, function(i) {
    return i[0].x < i[1].x ? i[0].x : i[1].x;
  }), t[1] = Li(zt, function(i) {
    return i[0].x > i[1].x ? i[0].x : i[1].x;
  }), n[0] = Di(zt, function(i) {
    return i[0].y < i[1].y ? i[0].y : i[1].y;
  }), n[1] = Li(zt, function(i) {
    return i[0].y > i[1].y ? i[0].y : i[1].y;
  }), Fi.range([Math.log(x.thickness_scale.widget.value()), Math.log(Xu)]);
  var e = t[1] - t[0], r = n[1] - n[0];
  r > e ? (jt.domain(n), Rt.domain([t[0] / e * r, t[1] / e * r])) : (jt.domain([n[0] / r * e, n[1] / r * e]), Rt.domain(t));
}
const eM = (t, n) => {
  Wt = n.display_size.width, Zt = n.display_size.height, Rt.range([n.display_margin.left, Wt - n.display_margin.right]), jt.range([Zt - n.display_margin.bottom, n.display_margin.top]), Bu(), O = t.node().getContext("2d"), O.clearRect(0, 0, Wt, Zt), O.fillStyle = A.display.background_color, O.fillRect(0, 0, Wt, Zt), er(zt, (e) => {
    O.beginPath(), O.moveTo(Rt(e[0].x), jt(e[0].y)), O.lineTo(Rt(e[1].x), jt(e[1].y)), O.lineWidth = Math.exp(Fi(e[0].depth)), O.lineCap = "round", O.strokeStyle = A.display.pen_color, O.stroke();
  });
}, rM = (t, n) => {
  Bu(), O = t.node().getContext("2d"), O.clearRect(0, 0, Wt, Zt), O.fillStyle = A.display.background_color, O.fillRect(0, 0, Wt, Zt), er(zt, (e) => {
    O.beginPath(), O.moveTo(Rt(e[0].x), jt(e[0].y)), O.lineTo(Rt(e[1].x), jt(e[1].y)), O.lineWidth = Math.exp(Fi(e[0].depth)), O.lineCap = "round", O.strokeStyle = A.display.pen_color, O.stroke();
  });
}, iM = Nt().domain([0, 2]).range([0, A.plot.width]), aM = Nt().domain([-1, 1]).range([A.plot.height, 0]);
ep().x(function(t) {
  return iM(t.x);
}).y(function(t) {
  return aM(t.y);
});
const oM = (t, n) => {
  const e = x.length_left_branch.widget.value(), r = x.length_central_branch.widget.value(), i = x.length_right_branch.widget.value(), a = x.angle_left_branch.widget.value(), o = x.angle_central_branch.widget.value(), s = x.angle_right_branch.widget.value(), l = n.position(A.plot.anchor.x, A.plot.anchor.y);
  console.log("cartoon init at ", l);
  const u = t.append("g").attr("class", At.cartoon).attr("transform", "translate(" + l.x + "," + l.y + ")");
  u.append("line").attr("class", At.trunk).attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", -200 / 2), u.selectAll("." + At.branch).data([[i, s], [r, o], [e, a]]).enter().append("line").attr("class", At.branch).attr("x1", 0).attr("x2", function(c) {
    return -200 / 2 * c[0] * Math.sin(c[1] / 180 * Math.PI);
  }).attr("y1", -200 / 2).attr("y2", function(c) {
    return -200 / 2 - A.plot.height / 2 * c[0] * Math.cos(c[1] / 180 * Math.PI);
  });
}, sM = (t) => {
  const n = x.length_left_branch.widget.value(), e = x.length_central_branch.widget.value(), r = x.length_right_branch.widget.value(), i = x.angle_left_branch.widget.value(), a = x.angle_central_branch.widget.value(), o = x.angle_right_branch.widget.value();
  console.log(n), t.select("." + At.cartoon).selectAll("." + At.branch).data([[r, o], [e, a], [n, i]]).attr("x1", 0).attr("x2", function(l) {
    return -200 / 2 * l[0] * Math.sin(l[1] / 180 * Math.PI);
  }).attr("y1", -200 / 2).attr("y2", function(l) {
    return -200 / 2 - A.plot.height / 2 * l[0] * Math.cos(l[1] / 180 * Math.PI);
  });
};
function uM(t, n, e, r) {
  Q2(), eM(t, r), oM(n, e);
}
function U(t, n, e) {
  tM(), rM(t), sM(n);
}
x.N;
const Uu = (t) => (t.children.length != 0 && (t.sigma1theta = G(), t.sigma2theta = G(), t.sigma3theta = G(), t.children.forEach(function(n) {
  Uu(n);
})), t), Gu = (t) => (t.children.length != 0 && (t.sigma1r = G(), t.sigma2r = G(), t.sigma3r = G(), t.children.forEach(function(n) {
  Gu(n);
})), t), lM = (t, n, e) => {
  x.length_left_branch.widget.update(() => U(t, n)), x.length_right_branch.widget.update(() => U(t, n)), x.length_central_branch.widget.update(() => U(t, n)), x.angle_left_branch.widget.update(() => U(t, n)), x.angle_right_branch.widget.update(() => U(t, n)), x.angle_central_branch.widget.update(() => U(t, n)), x.thickness_scale.widget.update(() => U(t, n)), x.noise_angle.widget.update(() => U(t, n)), x.noise_length.widget.update(() => U(t, n)), x.presets.widget.update(() => {
    const r = x.presets.choices[x.presets.widget.value()];
    x.length_left_branch.widget.reset(n, r.r1), x.length_central_branch.widget.reset(n, r.r2), x.length_right_branch.widget.reset(n, r.r3), x.angle_left_branch.widget.reset(n, r.theta3), x.angle_central_branch.widget.reset(n, r.theta2), x.angle_right_branch.widget.reset(n, r.theta1), x.noise_angle.widget.reset(n, r.sigma), x.noise_length.widget.reset(n, r.eta), x.thickness_scale.widget.reset(n, r.lw_max), U(t, n);
  }), Ri.update(() => {
    Uu(Ln), U(t, n);
  }), ji.update(() => {
    Gu(Ln), U(t, n);
  });
}, cM = {
  name: "@explorables/weeds_and_trees",
  title: "Weeds & Trees",
  subtitle: "Lindenmayer Systems",
  description: "Natural, Self-Similar Growth Patterns by Simple Rules",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function fM(t, n = Yu) {
  const e = Sm(t, n), r = e.display, i = e.controls, a = e.grid;
  return W2(i, a), lM(r, i), uM(r, i, a, n), {
    halt() {
    },
    reset() {
    },
    config: n,
    meta: cM
  };
}
export {
  Yu as config,
  fM as default,
  fM as load,
  cM as meta
};
