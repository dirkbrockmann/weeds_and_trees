(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:border-1{border-style:var(--tw-border-style);border-width:1px}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media(min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media(prefers-color-scheme:dark){.tw\\:dark\\:border-white{border-color:var(--tw-color-white)}.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_1ueg0_1,._controlPanel_1ueg0_8{display:block;line-height:0;box-sizing:border-box}._displayPanel_1ueg0_1>canvas,._displayPanel_1ueg0_1>svg,._controlPanel_1ueg0_8>svg,._controlPanel_1ueg0_8>canvas{display:block;box-sizing:border-box}._trunk_1ueg0_24,._branch_1ueg0_24{stroke:#000;stroke-opacity:1;stroke-width:3px;stroke-linecap:round}@media(prefers-color-scheme:dark){._trunk_1ueg0_24,._branch_1ueg0_24{stroke:#fff}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Ku = {
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
function on(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Wu(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ko(t) {
  let e, n, r;
  t.length !== 2 ? (e = on, n = (s, l) => on(t(s), l), r = (s, l) => t(s) - l) : (e = t === on || t === Wu ? t : Zu, n = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (e(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        n(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (e(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        n(s[h], l) <= 0 ? u = h + 1 : c = h;
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
function Zu() {
  return 0;
}
function Ju(t) {
  return t === null ? NaN : +t;
}
const Qu = ko(on), tl = Qu.right;
ko(Ju).center;
const el = Math.sqrt(50), nl = Math.sqrt(10), rl = Math.sqrt(2);
function dn(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= el ? 10 : a >= nl ? 5 : a >= rl ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(e * u), s / u < t && ++s, l / u > e && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(e / u), s * u < t && ++s, l * u > e && --l), l < s && 0.5 <= n && n < 2 ? dn(t, e, n * 2) : [s, l, u];
}
function il(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? dn(e, t, n) : dn(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function br(t, e, n) {
  return e = +e, t = +t, n = +n, dn(t, e, n)[2];
}
function al(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? br(e, t, n) : br(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function qi(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function Hi(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
var ol = { value: () => {
} };
function Eo() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new sn(n);
}
function sn(t) {
  this._ = t;
}
function sl(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
sn.prototype = Eo.prototype = {
  constructor: sn,
  on: function(t, e) {
    var n = this._, r = sl(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = ul(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = Xi(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Xi(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new sn(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n);
  }
};
function ul(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Xi(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ol, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var xr = "http://www.w3.org/1999/xhtml";
const Bi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function jn(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Bi.hasOwnProperty(e) ? { space: Bi[e], local: t } : t;
}
function ll(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === xr && e.documentElement.namespaceURI === xr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function cl(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Oo(t) {
  var e = jn(t);
  return (e.local ? cl : ll)(e);
}
function fl() {
}
function ri(t) {
  return t == null ? fl : function() {
    return this.querySelector(t);
  };
}
function hl(t) {
  typeof t != "function" && (t = ri(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new D(r, this._parents);
}
function pl(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function dl() {
  return [];
}
function zo(t) {
  return t == null ? dl : function() {
    return this.querySelectorAll(t);
  };
}
function gl(t) {
  return function() {
    return pl(t.apply(this, arguments));
  };
}
function _l(t) {
  typeof t == "function" ? t = gl(t) : t = zo(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new D(r, i);
}
function Co(t) {
  return function() {
    return this.matches(t);
  };
}
function Io(t) {
  return function(e) {
    return e.matches(t);
  };
}
var yl = Array.prototype.find;
function ml(t) {
  return function() {
    return yl.call(this.children, t);
  };
}
function vl() {
  return this.firstElementChild;
}
function wl(t) {
  return this.select(t == null ? vl : ml(typeof t == "function" ? t : Io(t)));
}
var bl = Array.prototype.filter;
function xl() {
  return Array.from(this.children);
}
function Ml(t) {
  return function() {
    return bl.call(this.children, t);
  };
}
function $l(t) {
  return this.selectAll(t == null ? xl : Ml(typeof t == "function" ? t : Io(t)));
}
function Al(t) {
  typeof t != "function" && (t = Co(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new D(r, this._parents);
}
function Ro(t) {
  return new Array(t.length);
}
function Tl() {
  return new D(this._enter || this._groups.map(Ro), this._parents);
}
function gn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
gn.prototype = {
  constructor: gn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Nl(t) {
  return function() {
    return t;
  };
}
function Sl(t, e, n, r, i, a) {
  for (var o = 0, s, l = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new gn(t, a[o]);
  for (; o < l; ++o)
    (s = e[o]) && (i[o] = s);
}
function Pl(t, e, n, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = e.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = e[s]) && (f[s] = p = o.call(l, l.__data__, s, e) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : n[s] = new gn(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = e[s]) && u.get(f[s]) === l && (i[s] = l);
}
function kl(t) {
  return t.__data__;
}
function El(t, e) {
  if (!arguments.length) return Array.from(this, kl);
  var n = e ? Pl : Sl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Nl(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Ol(t.call(c, c && c.__data__, u, r)), d = p.length, y = s[u] = new Array(d), w = o[u] = new Array(d), b = l[u] = new Array(f);
    n(c, h, y, w, b, p, e);
    for (var g = 0, M = 0, _, m; g < d; ++g)
      if (_ = y[g]) {
        for (g >= M && (M = g + 1); !(m = w[M]) && ++M < d; ) ;
        _._next = m || null;
      }
  }
  return o = new D(o, r), o._enter = s, o._exit = l, o;
}
function Ol(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function zl() {
  return new D(this._exit || this._groups.map(Ro), this._parents);
}
function Cl(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Il(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = n[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = n[l];
  return new D(s, this._parents);
}
function Rl() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function jl(t) {
  t || (t = Fl);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(e);
  }
  return new D(i, this._parents).order();
}
function Fl(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ll() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Dl() {
  return Array.from(this);
}
function ql() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Hl() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Xl() {
  return !this.node();
}
function Bl(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Ul(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Gl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Yl(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Vl(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Kl(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Wl(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Zl(t, e) {
  var n = jn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Gl : Ul : typeof e == "function" ? n.local ? Wl : Kl : n.local ? Vl : Yl)(n, e));
}
function jo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Jl(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ql(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function tc(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function ec(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Jl : typeof e == "function" ? tc : Ql)(t, e, n ?? "")) : Qt(this.node(), t);
}
function Qt(t, e) {
  return t.style.getPropertyValue(e) || jo(t).getComputedStyle(t, null).getPropertyValue(e);
}
function nc(t) {
  return function() {
    delete this[t];
  };
}
function rc(t, e) {
  return function() {
    this[t] = e;
  };
}
function ic(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function ac(t, e) {
  return arguments.length > 1 ? this.each((e == null ? nc : typeof e == "function" ? ic : rc)(t, e)) : this.node()[t];
}
function Fo(t) {
  return t.trim().split(/^|\s+/);
}
function ii(t) {
  return t.classList || new Lo(t);
}
function Lo(t) {
  this._node = t, this._names = Fo(t.getAttribute("class") || "");
}
Lo.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Do(t, e) {
  for (var n = ii(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function qo(t, e) {
  for (var n = ii(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function oc(t) {
  return function() {
    Do(this, t);
  };
}
function sc(t) {
  return function() {
    qo(this, t);
  };
}
function uc(t, e) {
  return function() {
    (e.apply(this, arguments) ? Do : qo)(this, t);
  };
}
function lc(t, e) {
  var n = Fo(t + "");
  if (arguments.length < 2) {
    for (var r = ii(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? uc : e ? oc : sc)(n, e));
}
function cc() {
  this.textContent = "";
}
function fc(t) {
  return function() {
    this.textContent = t;
  };
}
function hc(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function pc(t) {
  return arguments.length ? this.each(t == null ? cc : (typeof t == "function" ? hc : fc)(t)) : this.node().textContent;
}
function dc() {
  this.innerHTML = "";
}
function gc(t) {
  return function() {
    this.innerHTML = t;
  };
}
function _c(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function yc(t) {
  return arguments.length ? this.each(t == null ? dc : (typeof t == "function" ? _c : gc)(t)) : this.node().innerHTML;
}
function mc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function vc() {
  return this.each(mc);
}
function wc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function bc() {
  return this.each(wc);
}
function xc(t) {
  var e = typeof t == "function" ? t : Oo(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Mc() {
  return null;
}
function $c(t, e) {
  var n = typeof t == "function" ? t : Oo(t), r = e == null ? Mc : typeof e == "function" ? e : ri(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ac() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Tc() {
  return this.each(Ac);
}
function Nc() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Sc() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Pc(t) {
  return this.select(t ? Sc : Nc);
}
function kc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ec(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Oc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function zc(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Cc(t, e, n) {
  return function() {
    var r = this.__on, i, a = Ec(e);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), i = { type: t.type, name: t.name, value: e, listener: a, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Ic(t, e, n) {
  var r = Oc(t + ""), i, a = r.length, o;
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
  for (s = e ? Cc : zc, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function Ho(t, e, n) {
  var r = jo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Rc(t, e) {
  return function() {
    return Ho(this, t, e);
  };
}
function jc(t, e) {
  return function() {
    return Ho(this, t, e.apply(this, arguments));
  };
}
function Fc(t, e) {
  return this.each((typeof e == "function" ? jc : Rc)(t, e));
}
function* Lc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Xo = [null];
function D(t, e) {
  this._groups = t, this._parents = e;
}
function Le() {
  return new D([[document.documentElement]], Xo);
}
function Dc() {
  return this;
}
D.prototype = Le.prototype = {
  constructor: D,
  select: hl,
  selectAll: _l,
  selectChild: wl,
  selectChildren: $l,
  filter: Al,
  data: El,
  enter: Tl,
  exit: zl,
  join: Cl,
  merge: Il,
  selection: Dc,
  order: Rl,
  sort: jl,
  call: Ll,
  nodes: Dl,
  node: ql,
  size: Hl,
  empty: Xl,
  each: Bl,
  attr: Zl,
  style: ec,
  property: ac,
  classed: lc,
  text: pc,
  html: yc,
  raise: vc,
  lower: bc,
  append: xc,
  insert: $c,
  remove: Tc,
  clone: Pc,
  datum: kc,
  on: Ic,
  dispatch: Fc,
  [Symbol.iterator]: Lc
};
function qc(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], Xo);
}
function ai(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Bo(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function De() {
}
var Te = 0.7, _n = 1 / Te, Wt = "\\s*([+-]?\\d+)\\s*", Ne = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", at = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Hc = /^#([0-9a-f]{3,8})$/, Xc = new RegExp(`^rgb\\(${Wt},${Wt},${Wt}\\)$`), Bc = new RegExp(`^rgb\\(${at},${at},${at}\\)$`), Uc = new RegExp(`^rgba\\(${Wt},${Wt},${Wt},${Ne}\\)$`), Gc = new RegExp(`^rgba\\(${at},${at},${at},${Ne}\\)$`), Yc = new RegExp(`^hsl\\(${Ne},${at},${at}\\)$`), Vc = new RegExp(`^hsla\\(${Ne},${at},${at},${Ne}\\)$`), Ui = {
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
ai(De, Ft, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Gi,
  // Deprecated! Use color.formatHex.
  formatHex: Gi,
  formatHex8: Kc,
  formatHsl: Wc,
  formatRgb: Yi,
  toString: Yi
});
function Gi() {
  return this.rgb().formatHex();
}
function Kc() {
  return this.rgb().formatHex8();
}
function Wc() {
  return Uo(this).formatHsl();
}
function Yi() {
  return this.rgb().formatRgb();
}
function Ft(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Hc.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Vi(e) : n === 3 ? new j(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ye(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ye(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Xc.exec(t)) ? new j(e[1], e[2], e[3], 1) : (e = Bc.exec(t)) ? new j(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Uc.exec(t)) ? Ye(e[1], e[2], e[3], e[4]) : (e = Gc.exec(t)) ? Ye(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Yc.exec(t)) ? Zi(e[1], e[2] / 100, e[3] / 100, 1) : (e = Vc.exec(t)) ? Zi(e[1], e[2] / 100, e[3] / 100, e[4]) : Ui.hasOwnProperty(t) ? Vi(Ui[t]) : t === "transparent" ? new j(NaN, NaN, NaN, 0) : null;
}
function Vi(t) {
  return new j(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ye(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new j(t, e, n, r);
}
function Zc(t) {
  return t instanceof De || (t = Ft(t)), t ? (t = t.rgb(), new j(t.r, t.g, t.b, t.opacity)) : new j();
}
function Mr(t, e, n, r) {
  return arguments.length === 1 ? Zc(t) : new j(t, e, n, r ?? 1);
}
function j(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
ai(j, Mr, Bo(De, {
  brighter(t) {
    return t = t == null ? _n : Math.pow(_n, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Te : Math.pow(Te, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new j(Rt(this.r), Rt(this.g), Rt(this.b), yn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ki,
  // Deprecated! Use color.formatHex.
  formatHex: Ki,
  formatHex8: Jc,
  formatRgb: Wi,
  toString: Wi
}));
function Ki() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}`;
}
function Jc() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}${Ct((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Wi() {
  const t = yn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Rt(this.r)}, ${Rt(this.g)}, ${Rt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function yn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Rt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ct(t) {
  return t = Rt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Zi(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new J(t, e, n, r);
}
function Uo(t) {
  if (t instanceof J) return new J(t.h, t.s, t.l, t.opacity);
  if (t instanceof De || (t = Ft(t)), !t) return new J();
  if (t instanceof J) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new J(o, s, l, t.opacity);
}
function Qc(t, e, n, r) {
  return arguments.length === 1 ? Uo(t) : new J(t, e, n, r ?? 1);
}
function J(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
ai(J, Qc, Bo(De, {
  brighter(t) {
    return t = t == null ? _n : Math.pow(_n, t), new J(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Te : Math.pow(Te, t), new J(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new j(
      or(t >= 240 ? t - 240 : t + 120, i, r),
      or(t, i, r),
      or(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new J(Ji(this.h), Ve(this.s), Ve(this.l), yn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = yn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ji(this.h)}, ${Ve(this.s) * 100}%, ${Ve(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ji(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Ve(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function or(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const oi = (t) => () => t;
function tf(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function ef(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function nf(t) {
  return (t = +t) == 1 ? Go : function(e, n) {
    return n - e ? ef(e, n, t) : oi(isNaN(e) ? n : e);
  };
}
function Go(t, e) {
  var n = e - t;
  return n ? tf(t, n) : oi(isNaN(t) ? e : t);
}
const mn = (function t(e) {
  var n = nf(e);
  function r(i, a) {
    var o = n((i = Mr(i)).r, (a = Mr(a)).r), s = n(i.g, a.g), l = n(i.b, a.b), u = Go(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function rf(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function af(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function of(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = si(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function sf(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function W(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function uf(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = si(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var $r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, sr = new RegExp($r.source, "g");
function lf(t) {
  return function() {
    return t;
  };
}
function cf(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Yo(t, e) {
  var n = $r.lastIndex = sr.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", e = e + ""; (r = $r.exec(t)) && (i = sr.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: W(r, i) })), n = sr.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? cf(l[0].x) : lf(e) : (e = l.length, function(u) {
    for (var c = 0, h; c < e; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function si(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? oi(e) : (n === "number" ? W : n === "string" ? (r = Ft(e)) ? (e = r, mn) : Yo : e instanceof Ft ? mn : e instanceof Date ? sf : af(e) ? rf : Array.isArray(e) ? of : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? uf : W)(t, e);
}
function ff(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Qi = 180 / Math.PI, Ar = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Vo(t, e, n, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (l = t * n + e * r) && (n -= t * l, r -= e * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), t * r < e * n && (t = -t, e = -e, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * Qi,
    skewX: Math.atan(l) * Qi,
    scaleX: o,
    scaleY: s
  };
}
var Ke;
function hf(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Ar : Vo(e.a, e.b, e.c, e.d, e.e, e.f);
}
function pf(t) {
  return t == null || (Ke || (Ke = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ke.setAttribute("transform", t), !(t = Ke.transform.baseVal.consolidate())) ? Ar : (t = t.matrix, Vo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ko(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var y = p.push("translate(", null, e, null, n);
      d.push({ i: y - 4, x: W(u, h) }, { i: y - 2, x: W(c, f) });
    } else (h || f) && p.push("translate(" + h + e + f + n);
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
var df = Ko(hf, "px, ", "px)", "deg)"), gf = Ko(pf, ", ", ")", ")"), te = 0, _e = 0, he = 0, Wo = 1e3, vn, ye, wn = 0, Lt = 0, Fn = 0, Se = typeof performance == "object" && performance.now ? performance : Date, Zo = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ui() {
  return Lt || (Zo(_f), Lt = Se.now() + Fn);
}
function _f() {
  Lt = 0;
}
function bn() {
  this._call = this._time = this._next = null;
}
bn.prototype = Jo.prototype = {
  constructor: bn,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ui() : +n) + (e == null ? 0 : +e), !this._next && ye !== this && (ye ? ye._next = this : vn = this, ye = this), this._call = t, this._time = n, Tr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Tr());
  }
};
function Jo(t, e, n) {
  var r = new bn();
  return r.restart(t, e, n), r;
}
function yf() {
  ui(), ++te;
  for (var t = vn, e; t; )
    (e = Lt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --te;
}
function ta() {
  Lt = (wn = Se.now()) + Fn, te = _e = 0;
  try {
    yf();
  } finally {
    te = 0, vf(), Lt = 0;
  }
}
function mf() {
  var t = Se.now(), e = t - wn;
  e > Wo && (Fn -= e, wn = t);
}
function vf() {
  for (var t, e = vn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : vn = n);
  ye = t, Tr(r);
}
function Tr(t) {
  if (!te) {
    _e && (_e = clearTimeout(_e));
    var e = t - Lt;
    e > 24 ? (t < 1 / 0 && (_e = setTimeout(ta, t - Se.now() - Fn)), he && (he = clearInterval(he))) : (he || (wn = Se.now(), he = setInterval(mf, Wo)), te = 1, Zo(ta));
  }
}
function ea(t, e, n) {
  var r = new bn();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var wf = Eo("start", "end", "cancel", "interrupt"), bf = [], Qo = 0, na = 1, Nr = 2, un = 3, ra = 4, Sr = 5, ln = 6;
function Ln(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  xf(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: wf,
    tween: bf,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Qo
  });
}
function li(t, e) {
  var n = nt(t, e);
  if (n.state > Qo) throw new Error("too late; already scheduled");
  return n;
}
function ut(t, e) {
  var n = nt(t, e);
  if (n.state > un) throw new Error("too late; already running");
  return n;
}
function nt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function xf(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Jo(a, 0, n.time);
  function a(u) {
    n.state = na, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (n.state !== na) return l();
    for (c in r)
      if (p = r[c], p.name === n.name) {
        if (p.state === un) return ea(o);
        p.state === ra ? (p.state = ln, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < e && (p.state = ln, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (ea(function() {
      n.state === un && (n.state = ra, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Nr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Nr) {
      for (n.state = un, i = new Array(f = n.tween.length), c = 0, h = -1; c < f; ++c)
        (p = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Sr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    n.state === Sr && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ln, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Mf(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > Nr && r.state < Sr, r.state = ln, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function $f(t) {
  return this.each(function() {
    Mf(this, t);
  });
}
function Af(t, e) {
  var n, r;
  return function() {
    var i = ut(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Tf(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = ut(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: e, value: n }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === e) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function Nf(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = nt(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Af : Tf)(n, t, e));
}
function ci(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = ut(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return nt(i, r).value[e];
  };
}
function ts(t, e) {
  var n;
  return (typeof e == "number" ? W : e instanceof Ft ? mn : (n = Ft(e)) ? (e = n, mn) : Yo)(t, e);
}
function Sf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Pf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function kf(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Ef(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Of(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, s)));
  };
}
function zf(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, s)));
  };
}
function Cf(t, e) {
  var n = jn(t), r = n === "transform" ? gf : ts;
  return this.attrTween(t, typeof e == "function" ? (n.local ? zf : Of)(n, r, ci(this, "attr." + t, e)) : e == null ? (n.local ? Pf : Sf)(n) : (n.local ? Ef : kf)(n, r, e));
}
function If(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Rf(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function jf(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Rf(t, a)), n;
  }
  return i._value = e, i;
}
function Ff(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && If(t, a)), n;
  }
  return i._value = e, i;
}
function Lf(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = jn(t);
  return this.tween(n, (r.local ? jf : Ff)(r, e));
}
function Df(t, e) {
  return function() {
    li(this, t).delay = +e.apply(this, arguments);
  };
}
function qf(t, e) {
  return e = +e, function() {
    li(this, t).delay = e;
  };
}
function Hf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Df : qf)(e, t)) : nt(this.node(), e).delay;
}
function Xf(t, e) {
  return function() {
    ut(this, t).duration = +e.apply(this, arguments);
  };
}
function Bf(t, e) {
  return e = +e, function() {
    ut(this, t).duration = e;
  };
}
function Uf(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Xf : Bf)(e, t)) : nt(this.node(), e).duration;
}
function Gf(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    ut(this, t).ease = e;
  };
}
function Yf(t) {
  var e = this._id;
  return arguments.length ? this.each(Gf(e, t)) : nt(this.node(), e).ease;
}
function Vf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ut(this, t).ease = n;
  };
}
function Kf(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Vf(this._id, t));
}
function Wf(t) {
  typeof t != "function" && (t = Co(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new yt(r, this._parents, this._name, this._id);
}
function Zf(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = e[s], u = n[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = e[s];
  return new yt(o, this._parents, this._name, this._id);
}
function Jf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Qf(t, e, n) {
  var r, i, a = Jf(e) ? li : ut;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function th(t, e) {
  var n = this._id;
  return arguments.length < 2 ? nt(this.node(), n).on.on(t) : this.each(Qf(n, t, e));
}
function eh(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function nh() {
  return this.on("end.remove", eh(this._id));
}
function rh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ri(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Ln(u[f], e, n, f, u, nt(c, n)));
  return new yt(a, this._parents, e, n);
}
function ih(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = zo(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = nt(c, n), y = 0, w = f.length; y < w; ++y)
          (p = f[y]) && Ln(p, e, n, y, f, d);
        a.push(f), o.push(c);
      }
  return new yt(a, o, e, n);
}
var ah = Le.prototype.constructor;
function oh() {
  return new ah(this._groups, this._parents);
}
function sh(t, e) {
  var n, r, i;
  return function() {
    var a = Qt(this, t), o = (this.style.removeProperty(t), Qt(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function es(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function uh(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = Qt(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function lh(t, e, n) {
  var r, i, a;
  return function() {
    var o = Qt(this, t), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Qt(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, s));
  };
}
function ch(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var l = ut(this, t), u = l.on, c = l.value[a] == null ? s || (s = es(e)) : void 0;
    (u !== n || i !== c) && (r = (n = u).copy()).on(o, i = c), l.on = r;
  };
}
function fh(t, e, n) {
  var r = (t += "") == "transform" ? df : ts;
  return e == null ? this.styleTween(t, sh(t, r)).on("end.style." + t, es(t)) : typeof e == "function" ? this.styleTween(t, lh(t, r, ci(this, "style." + t, e))).each(ch(this._id, t)) : this.styleTween(t, uh(t, r, e), n).on("end.style." + t, null);
}
function hh(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function ph(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && hh(t, o, n)), r;
  }
  return a._value = e, a;
}
function dh(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, ph(t, e, n ?? ""));
}
function gh(t) {
  return function() {
    this.textContent = t;
  };
}
function _h(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function yh(t) {
  return this.tween("text", typeof t == "function" ? _h(ci(this, "text", t)) : gh(t == null ? "" : t + ""));
}
function mh(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function vh(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && mh(i)), e;
  }
  return r._value = t, r;
}
function wh(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, vh(t));
}
function bh() {
  for (var t = this._name, e = this._id, n = ns(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = nt(l, e);
        Ln(l, t, n, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new yt(r, this._parents, t, n);
}
function xh() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = ut(this, r), c = u.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(l)), u.on = e;
    }), i === 0 && a();
  });
}
var Mh = 0;
function yt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function ns() {
  return ++Mh;
}
var ct = Le.prototype;
yt.prototype = {
  constructor: yt,
  select: rh,
  selectAll: ih,
  selectChild: ct.selectChild,
  selectChildren: ct.selectChildren,
  filter: Wf,
  merge: Zf,
  selection: oh,
  transition: bh,
  call: ct.call,
  nodes: ct.nodes,
  node: ct.node,
  size: ct.size,
  empty: ct.empty,
  each: ct.each,
  on: th,
  attr: Cf,
  attrTween: Lf,
  style: fh,
  styleTween: dh,
  text: yh,
  textTween: wh,
  remove: nh,
  tween: Nf,
  delay: Hf,
  duration: Uf,
  ease: Yf,
  easeVarying: Kf,
  end: xh,
  [Symbol.iterator]: ct[Symbol.iterator]
};
function $h(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ah = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: $h
};
function Th(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Nh(t) {
  var e, n;
  t instanceof yt ? (e = t._id, t = t._name) : (e = ns(), (n = Ah).time = ui(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Ln(l, t, e, u, o, n || Th(l, e));
  return new yt(r, this._parents, t, e);
}
Le.prototype.interrupt = $f;
Le.prototype.transition = Nh;
const Pr = Math.PI, kr = 2 * Pr, Ot = 1e-6, Sh = kr - Ot;
function rs(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Ph(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return rs;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class kh {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? rs : Ph(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, a, o) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(e, n, r, i, a) {
    if (e = +e, n = +n, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = r - e, u = i - n, c = o - e, h = s - n, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (f > Ot) if (!(Math.abs(h * l - u * c) > Ot) || !a)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - o, d = i - s, y = l * l + u * u, w = p * p + d * d, b = Math.sqrt(y), g = Math.sqrt(f), M = a * Math.tan((Pr - Math.acos((y + f - w) / (2 * b * g))) / 2), _ = M / g, m = M / b;
      Math.abs(_ - 1) > Ot && this._append`L${e + _ * c},${n + _ * h}`, this._append`A${a},${a},0,0,${+(h * p > c * d)},${this._x1 = e + m * l},${this._y1 = n + m * u}`;
    }
  }
  arc(e, n, r, i, a, o) {
    if (e = +e, n = +n, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = e + s, c = n + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Ot || Math.abs(this._y1 - c) > Ot) && this._append`L${u},${c}`, r && (f < 0 && (f = f % kr + kr), f > Sh ? this._append`A${r},${r},0,1,${h},${e - s},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Ot && this._append`A${r},${r},0,${+(f >= Pr)},${h},${this._x1 = e + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Eh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function xn(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function ee(t) {
  return t = xn(Math.abs(t)), t ? t[1] : NaN;
}
function Oh(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(n.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function zh(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Ch = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Mn(t) {
  if (!(e = Ch.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new fi({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
Mn.prototype = fi.prototype;
function fi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
fi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ih(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var is;
function Rh(t, e) {
  var n = xn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (is = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + xn(t, Math.max(0, e + a - 1))[0];
}
function ia(t, e) {
  var n = xn(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const aa = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Eh,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => ia(t * 100, e),
  r: ia,
  s: Rh,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function oa(t) {
  return t;
}
var sa = Array.prototype.map, ua = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function jh(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? oa : Oh(sa.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? oa : zh(sa.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Mn(h);
    var f = h.fill, p = h.align, d = h.sign, y = h.symbol, w = h.zero, b = h.width, g = h.comma, M = h.precision, _ = h.trim, m = h.type;
    m === "n" ? (g = !0, m = "g") : aa[m] || (M === void 0 && (M = 12), _ = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var N = y === "$" ? n : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", E = y === "$" ? r : /[%p]/.test(m) ? o : "", z = aa[m], H = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function X(v) {
      var C = N, T = E, I, Et, L;
      if (m === "c")
        T = z(v) + T, v = "";
      else {
        v = +v;
        var B = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : z(Math.abs(v), M), _ && (v = Ih(v)), B && +v == 0 && d !== "+" && (B = !1), C = (B ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + C, T = (m === "s" ? ua[8 + is / 3] : "") + T + (B && d === "(" ? ")" : ""), H) {
          for (I = -1, Et = v.length; ++I < Et; )
            if (L = v.charCodeAt(I), 48 > L || L > 57) {
              T = (L === 46 ? i + v.slice(I + 1) : v.slice(I)) + T, v = v.slice(0, I);
              break;
            }
        }
      }
      g && !w && (v = e(v, 1 / 0));
      var K = C.length + v.length + T.length, O = K < b ? new Array(b - K + 1).join(f) : "";
      switch (g && w && (v = e(O + v, O.length ? b - T.length : 1 / 0), O = ""), p) {
        case "<":
          v = C + v + T + O;
          break;
        case "=":
          v = C + O + v + T;
          break;
        case "^":
          v = O.slice(0, K = O.length >> 1) + C + v + T + O.slice(K);
          break;
        default:
          v = O + C + v + T;
          break;
      }
      return a(v);
    }
    return X.toString = function() {
      return h + "";
    }, X;
  }
  function c(h, f) {
    var p = u((h = Mn(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(ee(f) / 3))) * 3, y = Math.pow(10, -d), w = ua[8 + d / 3];
    return function(b) {
      return p(y * b) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var We, as, os;
Fh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Fh(t) {
  return We = jh(t), as = We.format, os = We.formatPrefix, We;
}
function Lh(t) {
  return Math.max(0, -ee(Math.abs(t)));
}
function Dh(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ee(e) / 3))) * 3 - ee(Math.abs(t)));
}
function qh(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, ee(e) - ee(t)) + 1;
}
function Hh(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function Xh(t) {
  return function() {
    return t;
  };
}
function Bh(t) {
  return +t;
}
var la = [0, 1];
function Vt(t) {
  return t;
}
function Er(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Xh(isNaN(e) ? NaN : 0.5);
}
function Uh(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Gh(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = Er(i, r), a = n(o, a)) : (r = Er(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function Yh(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = Er(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var l = tl(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function Vh(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Kh() {
  var t = la, e = la, n = si, r, i, a, o = Vt, s, l, u;
  function c() {
    var f = Math.min(t.length, e.length);
    return o !== Vt && (o = Uh(t[0], t[f - 1])), s = f > 2 ? Yh : Gh, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), e, n)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(e, t.map(r), W)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Bh), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), c()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = ff, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Vt, c()) : o !== Vt;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, c()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function Wh() {
  return Kh()(Vt, Vt);
}
function Zh(t, e, n, r) {
  var i = al(t, e, n), a;
  switch (r = Mn(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = Dh(i, o)) && (r.precision = a), os(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = qh(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Lh(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return as(r);
}
function Jh(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return il(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return Zh(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = br(o, s, n), u === l)
        return r[i] = o, r[a] = s, e(r);
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
function kt() {
  var t = Wh();
  return t.copy = function() {
    return Vh(t, kt());
  }, Hh.apply(t, arguments), Jh(t);
}
function Yt(t) {
  return function() {
    return t;
  };
}
function Qh(t) {
  let e = 3;
  return t.digits = function(n) {
    if (!arguments.length) return e;
    if (n == null)
      e = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      e = r;
    }
    return t;
  }, () => new kh(e);
}
function tp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ss(t) {
  this._context = t;
}
ss.prototype = {
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
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, e);
        break;
    }
  }
};
function ep(t) {
  return new ss(t);
}
function np(t) {
  return t[0];
}
function rp(t) {
  return t[1];
}
function ip(t, e) {
  var n = Yt(!0), r = null, i = ep, a = null, o = Qh(s);
  t = typeof t == "function" ? t : t === void 0 ? np : Yt(t), e = typeof e == "function" ? e : e === void 0 ? rp : Yt(e);
  function s(l) {
    var u, c = (l = tp(l)).length, h, f = !1, p;
    for (r == null && (a = i(p = o())), u = 0; u <= c; ++u)
      !(u < c && n(h = l[u], u, l)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(h, u, l), +e(h, u, l));
    if (p) return a = null, p + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Yt(+l), s) : t;
  }, s.y = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Yt(+l), s) : e;
  }, s.defined = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Yt(!!l), s) : n;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, r != null && (a = i(r)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? r = a = null : a = i(r = l), s) : r;
  }, s;
}
function me(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
me.prototype = {
  constructor: me,
  scale: function(t) {
    return t === 1 ? this : new me(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new me(this.k, this.x + this.k * t, this.y + this.k * e);
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
me.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode('.d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;font-size:var(--d3w-font-size, 16px);line-height:var(--d3w-line-height, 1.25);font-family:var(--d3w-font-family, system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif);font-weight:var(--d3w-font-weight, 400)}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_1279t_47{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_1279t_47 ._title_1279t_59{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_1279t_47 ._label_1279t_67{fill:var(--color-text);stroke:none}._widget_1279t_47 ._lit_1279t_72{fill:var(--color-lit)}._button_1279t_76>._symbol_1279t_76,._radio_1279t_77>._radiobutton_1279t_77>._symbol_1279t_76{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_1279t_47 ._symbol_1279t_76._selected_1279t_83,._toggle_1279t_84._selected_1279t_83,._widget_1279t_47 ._symbol_1279t_76._selected_1279t_83._lit_1279t_72{fill:var(--color-selected)}._widget_1279t_47 ._symbol_1279t_76._lit_1279t_72{fill:var(--color-lit-symbol)}._slider_1279t_93>._track_1279t_93,._toggle_1279t_84>._track_1279t_93{pointer-events:none}._slider_1279t_93>._track_overlay_1279t_98,._toggle_1279t_84>._track_overlay_1279t_98{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_1279t_93>._handle_1279t_106,._toggle_1279t_84>._handle_1279t_106{fill:var(--color-handle)}')), document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
function cn(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ap(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function us(t) {
  let e, n, r;
  t.length !== 2 ? (e = cn, n = (s, l) => cn(t(s), l), r = (s, l) => t(s) - l) : (e = t === cn || t === ap ? t : op, n = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (e(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        n(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (e(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        n(s[h], l) <= 0 ? u = h + 1 : c = h;
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
function op() {
  return 0;
}
function sp(t) {
  return t === null ? NaN : +t;
}
const up = us(cn), lp = up.right;
us(sp).center;
const cp = Math.sqrt(50), fp = Math.sqrt(10), hp = Math.sqrt(2);
function $n(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= cp ? 10 : a >= fp ? 5 : a >= hp ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(e * u), s / u < t && ++s, l / u > e && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(e / u), s * u < t && ++s, l * u > e && --l), l < s && 0.5 <= n && n < 2 ? $n(t, e, n * 2) : [s, l, u];
}
function pp(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? $n(e, t, n) : $n(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function Or(t, e, n) {
  return e = +e, t = +t, n = +n, $n(t, e, n)[2];
}
function dp(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Or(e, t, n) : Or(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ze(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function gp(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * n;
  return a;
}
var _p = { value: () => {
} };
function hi() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new fn(n);
}
function fn(t) {
  this._ = t;
}
function yp(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
fn.prototype = hi.prototype = {
  constructor: fn,
  on: function(t, e) {
    var n = this._, r = yp(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = mp(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = ca(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = ca(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new fn(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n);
  }
};
function mp(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function ca(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = _p, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var zr = "http://www.w3.org/1999/xhtml";
const fa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: zr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Dn(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), fa.hasOwnProperty(e) ? { space: fa[e], local: t } : t;
}
function vp(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === zr && e.documentElement.namespaceURI === zr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function wp(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ls(t) {
  var e = Dn(t);
  return (e.local ? wp : vp)(e);
}
function bp() {
}
function pi(t) {
  return t == null ? bp : function() {
    return this.querySelector(t);
  };
}
function xp(t) {
  typeof t != "function" && (t = pi(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new q(r, this._parents);
}
function Mp(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function $p() {
  return [];
}
function cs(t) {
  return t == null ? $p : function() {
    return this.querySelectorAll(t);
  };
}
function Ap(t) {
  return function() {
    return Mp(t.apply(this, arguments));
  };
}
function Tp(t) {
  typeof t == "function" ? t = Ap(t) : t = cs(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new q(r, i);
}
function fs(t) {
  return function() {
    return this.matches(t);
  };
}
function hs(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Np = Array.prototype.find;
function Sp(t) {
  return function() {
    return Np.call(this.children, t);
  };
}
function Pp() {
  return this.firstElementChild;
}
function kp(t) {
  return this.select(t == null ? Pp : Sp(typeof t == "function" ? t : hs(t)));
}
var Ep = Array.prototype.filter;
function Op() {
  return Array.from(this.children);
}
function zp(t) {
  return function() {
    return Ep.call(this.children, t);
  };
}
function Cp(t) {
  return this.selectAll(t == null ? Op : zp(typeof t == "function" ? t : hs(t)));
}
function Ip(t) {
  typeof t != "function" && (t = fs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new q(r, this._parents);
}
function ps(t) {
  return new Array(t.length);
}
function Rp() {
  return new q(this._enter || this._groups.map(ps), this._parents);
}
function An(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
An.prototype = {
  constructor: An,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function jp(t) {
  return function() {
    return t;
  };
}
function Fp(t, e, n, r, i, a) {
  for (var o = 0, s, l = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new An(t, a[o]);
  for (; o < l; ++o)
    (s = e[o]) && (i[o] = s);
}
function Lp(t, e, n, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = e.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = e[s]) && (f[s] = p = o.call(l, l.__data__, s, e) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : n[s] = new An(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = e[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Dp(t) {
  return t.__data__;
}
function qp(t, e) {
  if (!arguments.length) return Array.from(this, Dp);
  var n = e ? Lp : Fp, r = this._parents, i = this._groups;
  typeof t != "function" && (t = jp(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Hp(t.call(c, c && c.__data__, u, r)), d = p.length, y = s[u] = new Array(d), w = o[u] = new Array(d), b = l[u] = new Array(f);
    n(c, h, y, w, b, p, e);
    for (var g = 0, M = 0, _, m; g < d; ++g)
      if (_ = y[g]) {
        for (g >= M && (M = g + 1); !(m = w[M]) && ++M < d; ) ;
        _._next = m || null;
      }
  }
  return o = new q(o, r), o._enter = s, o._exit = l, o;
}
function Hp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Xp() {
  return new q(this._exit || this._groups.map(ps), this._parents);
}
function Bp(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Up(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = n[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = n[l];
  return new q(s, this._parents);
}
function Gp() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Yp(t) {
  t || (t = Vp);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(e);
  }
  return new q(i, this._parents).order();
}
function Vp(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Kp() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Wp() {
  return Array.from(this);
}
function Zp() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Jp() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Qp() {
  return !this.node();
}
function td(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function ed(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function nd(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function rd(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function id(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ad(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function od(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function sd(t, e) {
  var n = Dn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? nd : ed : typeof e == "function" ? n.local ? od : ad : n.local ? id : rd)(n, e));
}
function ds(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ud(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ld(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function cd(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function fd(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? ud : typeof e == "function" ? cd : ld)(t, e, n ?? "")) : ne(this.node(), t);
}
function ne(t, e) {
  return t.style.getPropertyValue(e) || ds(t).getComputedStyle(t, null).getPropertyValue(e);
}
function hd(t) {
  return function() {
    delete this[t];
  };
}
function pd(t, e) {
  return function() {
    this[t] = e;
  };
}
function dd(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function gd(t, e) {
  return arguments.length > 1 ? this.each((e == null ? hd : typeof e == "function" ? dd : pd)(t, e)) : this.node()[t];
}
function gs(t) {
  return t.trim().split(/^|\s+/);
}
function di(t) {
  return t.classList || new _s(t);
}
function _s(t) {
  this._node = t, this._names = gs(t.getAttribute("class") || "");
}
_s.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ys(t, e) {
  for (var n = di(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function ms(t, e) {
  for (var n = di(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function _d(t) {
  return function() {
    ys(this, t);
  };
}
function yd(t) {
  return function() {
    ms(this, t);
  };
}
function md(t, e) {
  return function() {
    (e.apply(this, arguments) ? ys : ms)(this, t);
  };
}
function vd(t, e) {
  var n = gs(t + "");
  if (arguments.length < 2) {
    for (var r = di(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? md : e ? _d : yd)(n, e));
}
function wd() {
  this.textContent = "";
}
function bd(t) {
  return function() {
    this.textContent = t;
  };
}
function xd(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Md(t) {
  return arguments.length ? this.each(t == null ? wd : (typeof t == "function" ? xd : bd)(t)) : this.node().textContent;
}
function $d() {
  this.innerHTML = "";
}
function Ad(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Td(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Nd(t) {
  return arguments.length ? this.each(t == null ? $d : (typeof t == "function" ? Td : Ad)(t)) : this.node().innerHTML;
}
function Sd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Pd() {
  return this.each(Sd);
}
function kd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ed() {
  return this.each(kd);
}
function Od(t) {
  var e = typeof t == "function" ? t : ls(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function zd() {
  return null;
}
function Cd(t, e) {
  var n = typeof t == "function" ? t : ls(t), r = e == null ? zd : typeof e == "function" ? e : pi(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Id() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Rd() {
  return this.each(Id);
}
function jd() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Fd() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ld(t) {
  return this.select(t ? Fd : jd);
}
function Dd(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function qd(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Hd(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Xd(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Bd(t, e, n) {
  return function() {
    var r = this.__on, i, a = qd(e);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), i = { type: t.type, name: t.name, value: e, listener: a, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Ud(t, e, n) {
  var r = Hd(t + ""), i, a = r.length, o;
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
  for (s = e ? Bd : Xd, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function vs(t, e, n) {
  var r = ds(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Gd(t, e) {
  return function() {
    return vs(this, t, e);
  };
}
function Yd(t, e) {
  return function() {
    return vs(this, t, e.apply(this, arguments));
  };
}
function Vd(t, e) {
  return this.each((typeof e == "function" ? Yd : Gd)(t, e));
}
function* Kd() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var ws = [null];
function q(t, e) {
  this._groups = t, this._parents = e;
}
function qe() {
  return new q([[document.documentElement]], ws);
}
function Wd() {
  return this;
}
q.prototype = qe.prototype = {
  constructor: q,
  select: xp,
  selectAll: Tp,
  selectChild: kp,
  selectChildren: Cp,
  filter: Ip,
  data: qp,
  enter: Rp,
  exit: Xp,
  join: Bp,
  merge: Up,
  selection: Wd,
  order: Gp,
  sort: Yp,
  call: Kp,
  nodes: Wp,
  node: Zp,
  size: Jp,
  empty: Qp,
  each: td,
  attr: sd,
  style: fd,
  property: gd,
  classed: vd,
  text: Md,
  html: Nd,
  raise: Pd,
  lower: Ed,
  append: Od,
  insert: Cd,
  remove: Rd,
  clone: Ld,
  datum: Dd,
  on: Ud,
  dispatch: Vd,
  [Symbol.iterator]: Kd
};
function R(t) {
  return typeof t == "string" ? new q([[document.querySelector(t)]], [document.documentElement]) : new q([[t]], ws);
}
function Zd(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function ha(t, e) {
  if (t = Zd(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Jd = { passive: !1 }, Pe = { capture: !0, passive: !1 };
function ur(t) {
  t.stopImmediatePropagation();
}
function Zt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Qd(t) {
  var e = t.document.documentElement, n = R(t).on("dragstart.drag", Zt, Pe);
  "onselectstart" in e ? n.on("selectstart.drag", Zt, Pe) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function t0(t, e) {
  var n = t.document.documentElement, r = R(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Zt, Pe), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Je = (t) => () => t;
function Cr(t, {
  sourceEvent: e,
  subject: n,
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
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
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
Cr.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function e0(t) {
  return !t.ctrlKey && !t.button;
}
function n0() {
  return this.parentNode;
}
function r0(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function i0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function a0() {
  var t = e0, e = n0, n = r0, r = i0, i = {}, a = hi("start", "drag", "end"), o = 0, s, l, u, c, h = 0;
  function f(_) {
    _.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Jd).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(_, m) {
    if (!(c || !t.call(this, _, m))) {
      var N = M(this, e.call(this, _, m), _, m, "mouse");
      N && (R(_.view).on("mousemove.drag", d, Pe).on("mouseup.drag", y, Pe), Qd(_.view), ur(_), u = !1, s = _.clientX, l = _.clientY, N("start", _));
    }
  }
  function d(_) {
    if (Zt(_), !u) {
      var m = _.clientX - s, N = _.clientY - l;
      u = m * m + N * N > h;
    }
    i.mouse("drag", _);
  }
  function y(_) {
    R(_.view).on("mousemove.drag mouseup.drag", null), t0(_.view, u), Zt(_), i.mouse("end", _);
  }
  function w(_, m) {
    if (t.call(this, _, m)) {
      var N = _.changedTouches, E = e.call(this, _, m), z = N.length, H, X;
      for (H = 0; H < z; ++H)
        (X = M(this, E, _, m, N[H].identifier, N[H])) && (ur(_), X("start", _, N[H]));
    }
  }
  function b(_) {
    var m = _.changedTouches, N = m.length, E, z;
    for (E = 0; E < N; ++E)
      (z = i[m[E].identifier]) && (Zt(_), z("drag", _, m[E]));
  }
  function g(_) {
    var m = _.changedTouches, N = m.length, E, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < N; ++E)
      (z = i[m[E].identifier]) && (ur(_), z("end", _, m[E]));
  }
  function M(_, m, N, E, z, H) {
    var X = a.copy(), v = ha(H || N, m), C, T, I;
    if ((I = n.call(_, new Cr("beforestart", {
      sourceEvent: N,
      target: f,
      identifier: z,
      active: o,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: X
    }), E)) != null)
      return C = I.x - v[0] || 0, T = I.y - v[1] || 0, function Et(L, B, K) {
        var O = v, ar;
        switch (L) {
          case "start":
            i[z] = Et, ar = o++;
            break;
          case "end":
            delete i[z], --o;
          // falls through
          case "drag":
            v = ha(K || B, m), ar = o;
            break;
        }
        X.call(
          L,
          _,
          new Cr(L, {
            sourceEvent: B,
            subject: I,
            target: f,
            identifier: z,
            active: ar,
            x: v[0] + C,
            y: v[1] + T,
            dx: v[0] - O[0],
            dy: v[1] - O[1],
            dispatch: X
          }),
          E
        );
      };
  }
  return f.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Je(!!_), f) : t;
  }, f.container = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Je(_), f) : e;
  }, f.subject = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Je(_), f) : n;
  }, f.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : Je(!!_), f) : r;
  }, f.on = function() {
    var _ = a.on.apply(a, arguments);
    return _ === a ? f : _;
  }, f.clickDistance = function(_) {
    return arguments.length ? (h = (_ = +_) * _, f) : Math.sqrt(h);
  }, f;
}
function gi(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function bs(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function He() {
}
var ke = 0.7, Tn = 1 / ke, Jt = "\\s*([+-]?\\d+)\\s*", Ee = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", o0 = /^#([0-9a-f]{3,8})$/, s0 = new RegExp(`^rgb\\(${Jt},${Jt},${Jt}\\)$`), u0 = new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`), l0 = new RegExp(`^rgba\\(${Jt},${Jt},${Jt},${Ee}\\)$`), c0 = new RegExp(`^rgba\\(${ot},${ot},${ot},${Ee}\\)$`), f0 = new RegExp(`^hsl\\(${Ee},${ot},${ot}\\)$`), h0 = new RegExp(`^hsla\\(${Ee},${ot},${ot},${Ee}\\)$`), pa = {
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
gi(He, Dt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: da,
  // Deprecated! Use color.formatHex.
  formatHex: da,
  formatHex8: p0,
  formatHsl: d0,
  formatRgb: ga,
  toString: ga
});
function da() {
  return this.rgb().formatHex();
}
function p0() {
  return this.rgb().formatHex8();
}
function d0() {
  return xs(this).formatHsl();
}
function ga() {
  return this.rgb().formatRgb();
}
function Dt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = o0.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? _a(e) : n === 3 ? new F(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Qe(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Qe(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = s0.exec(t)) ? new F(e[1], e[2], e[3], 1) : (e = u0.exec(t)) ? new F(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = l0.exec(t)) ? Qe(e[1], e[2], e[3], e[4]) : (e = c0.exec(t)) ? Qe(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = f0.exec(t)) ? va(e[1], e[2] / 100, e[3] / 100, 1) : (e = h0.exec(t)) ? va(e[1], e[2] / 100, e[3] / 100, e[4]) : pa.hasOwnProperty(t) ? _a(pa[t]) : t === "transparent" ? new F(NaN, NaN, NaN, 0) : null;
}
function _a(t) {
  return new F(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Qe(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new F(t, e, n, r);
}
function g0(t) {
  return t instanceof He || (t = Dt(t)), t ? (t = t.rgb(), new F(t.r, t.g, t.b, t.opacity)) : new F();
}
function Ir(t, e, n, r) {
  return arguments.length === 1 ? g0(t) : new F(t, e, n, r ?? 1);
}
function F(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
gi(F, Ir, bs(He, {
  brighter(t) {
    return t = t == null ? Tn : Math.pow(Tn, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ke : Math.pow(ke, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new F(jt(this.r), jt(this.g), jt(this.b), Nn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ya,
  // Deprecated! Use color.formatHex.
  formatHex: ya,
  formatHex8: _0,
  formatRgb: ma,
  toString: ma
}));
function ya() {
  return `#${It(this.r)}${It(this.g)}${It(this.b)}`;
}
function _0() {
  return `#${It(this.r)}${It(this.g)}${It(this.b)}${It((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ma() {
  const t = Nn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${jt(this.r)}, ${jt(this.g)}, ${jt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Nn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function jt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function It(t) {
  return t = jt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function va(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Q(t, e, n, r);
}
function xs(t) {
  if (t instanceof Q) return new Q(t.h, t.s, t.l, t.opacity);
  if (t instanceof He || (t = Dt(t)), !t) return new Q();
  if (t instanceof Q) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new Q(o, s, l, t.opacity);
}
function y0(t, e, n, r) {
  return arguments.length === 1 ? xs(t) : new Q(t, e, n, r ?? 1);
}
function Q(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
gi(Q, y0, bs(He, {
  brighter(t) {
    return t = t == null ? Tn : Math.pow(Tn, t), new Q(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ke : Math.pow(ke, t), new Q(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new F(
      lr(t >= 240 ? t - 240 : t + 120, i, r),
      lr(t, i, r),
      lr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Q(wa(this.h), tn(this.s), tn(this.l), Nn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Nn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${wa(this.h)}, ${tn(this.s) * 100}%, ${tn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function wa(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function tn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function lr(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const _i = (t) => () => t;
function m0(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function v0(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function w0(t) {
  return (t = +t) == 1 ? Ms : function(e, n) {
    return n - e ? v0(e, n, t) : _i(isNaN(e) ? n : e);
  };
}
function Ms(t, e) {
  var n = e - t;
  return n ? m0(t, n) : _i(isNaN(t) ? e : t);
}
const Sn = (function t(e) {
  var n = w0(e);
  function r(i, a) {
    var o = n((i = Ir(i)).r, (a = Ir(a)).r), s = n(i.g, a.g), l = n(i.b, a.b), u = Ms(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function b0(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function x0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function M0(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = yi(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function $0(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Z(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function A0(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = yi(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var Rr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, cr = new RegExp(Rr.source, "g");
function T0(t) {
  return function() {
    return t;
  };
}
function N0(t) {
  return function(e) {
    return t(e) + "";
  };
}
function $s(t, e) {
  var n = Rr.lastIndex = cr.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", e = e + ""; (r = Rr.exec(t)) && (i = cr.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: Z(r, i) })), n = cr.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? N0(l[0].x) : T0(e) : (e = l.length, function(u) {
    for (var c = 0, h; c < e; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function yi(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? _i(e) : (n === "number" ? Z : n === "string" ? (r = Dt(e)) ? (e = r, Sn) : $s : e instanceof Dt ? Sn : e instanceof Date ? $0 : x0(e) ? b0 : Array.isArray(e) ? M0 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? A0 : Z)(t, e);
}
function S0(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var ba = 180 / Math.PI, As = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ts(t, e, n, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (l = t * n + e * r) && (n -= t * l, r -= e * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), t * r < e * n && (t = -t, e = -e, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * ba,
    skewX: Math.atan(l) * ba,
    scaleX: o,
    scaleY: s
  };
}
var en;
function P0(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? As : Ts(e.a, e.b, e.c, e.d, e.e, e.f);
}
function k0(t) {
  return t == null || (en || (en = document.createElementNS("http://www.w3.org/2000/svg", "g")), en.setAttribute("transform", t), !(t = en.transform.baseVal.consolidate())) ? As : (t = t.matrix, Ts(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ns(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var y = p.push("translate(", null, e, null, n);
      d.push({ i: y - 4, x: Z(u, h) }, { i: y - 2, x: Z(c, f) });
    } else (h || f) && p.push("translate(" + h + e + f + n);
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
var E0 = Ns(P0, "px, ", "px)", "deg)"), O0 = Ns(k0, ", ", ")", ")"), re = 0, ve = 0, pe = 0, Ss = 1e3, Pn, we, kn = 0, qt = 0, qn = 0, Oe = typeof performance == "object" && performance.now ? performance : Date, Ps = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function mi() {
  return qt || (Ps(z0), qt = Oe.now() + qn);
}
function z0() {
  qt = 0;
}
function En() {
  this._call = this._time = this._next = null;
}
En.prototype = ks.prototype = {
  constructor: En,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? mi() : +n) + (e == null ? 0 : +e), !this._next && we !== this && (we ? we._next = this : Pn = this, we = this), this._call = t, this._time = n, jr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, jr());
  }
};
function ks(t, e, n) {
  var r = new En();
  return r.restart(t, e, n), r;
}
function C0() {
  mi(), ++re;
  for (var t = Pn, e; t; )
    (e = qt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --re;
}
function xa() {
  qt = (kn = Oe.now()) + qn, re = ve = 0;
  try {
    C0();
  } finally {
    re = 0, R0(), qt = 0;
  }
}
function I0() {
  var t = Oe.now(), e = t - kn;
  e > Ss && (qn -= e, kn = t);
}
function R0() {
  for (var t, e = Pn, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Pn = n);
  we = t, jr(r);
}
function jr(t) {
  if (!re) {
    ve && (ve = clearTimeout(ve));
    var e = t - qt;
    e > 24 ? (t < 1 / 0 && (ve = setTimeout(xa, t - Oe.now() - qn)), pe && (pe = clearInterval(pe))) : (pe || (kn = Oe.now(), pe = setInterval(I0, Ss)), re = 1, Ps(xa));
  }
}
function Ma(t, e, n) {
  var r = new En();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var j0 = hi("start", "end", "cancel", "interrupt"), F0 = [], Es = 0, $a = 1, Fr = 2, hn = 3, Aa = 4, Lr = 5, pn = 6;
function Hn(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  L0(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: j0,
    tween: F0,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Es
  });
}
function vi(t, e) {
  var n = rt(t, e);
  if (n.state > Es) throw new Error("too late; already scheduled");
  return n;
}
function lt(t, e) {
  var n = rt(t, e);
  if (n.state > hn) throw new Error("too late; already running");
  return n;
}
function rt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function L0(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = ks(a, 0, n.time);
  function a(u) {
    n.state = $a, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (n.state !== $a) return l();
    for (c in r)
      if (p = r[c], p.name === n.name) {
        if (p.state === hn) return Ma(o);
        p.state === Aa ? (p.state = pn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < e && (p.state = pn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Ma(function() {
      n.state === hn && (n.state = Aa, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Fr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Fr) {
      for (n.state = hn, i = new Array(f = n.tween.length), c = 0, h = -1; c < f; ++c)
        (p = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Lr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    n.state === Lr && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = pn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function D0(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > Fr && r.state < Lr, r.state = pn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function q0(t) {
  return this.each(function() {
    D0(this, t);
  });
}
function H0(t, e) {
  var n, r;
  return function() {
    var i = lt(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function X0(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = lt(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: e, value: n }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === e) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function B0(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = rt(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? H0 : X0)(n, t, e));
}
function wi(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = lt(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return rt(i, r).value[e];
  };
}
function Os(t, e) {
  var n;
  return (typeof e == "number" ? Z : e instanceof Dt ? Sn : (n = Dt(e)) ? (e = n, Sn) : $s)(t, e);
}
function U0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function G0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Y0(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function V0(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function K0(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, s)));
  };
}
function W0(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, s)));
  };
}
function Z0(t, e) {
  var n = Dn(t), r = n === "transform" ? O0 : Os;
  return this.attrTween(t, typeof e == "function" ? (n.local ? W0 : K0)(n, r, wi(this, "attr." + t, e)) : e == null ? (n.local ? G0 : U0)(n) : (n.local ? V0 : Y0)(n, r, e));
}
function J0(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Q0(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function tg(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Q0(t, a)), n;
  }
  return i._value = e, i;
}
function eg(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && J0(t, a)), n;
  }
  return i._value = e, i;
}
function ng(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Dn(t);
  return this.tween(n, (r.local ? tg : eg)(r, e));
}
function rg(t, e) {
  return function() {
    vi(this, t).delay = +e.apply(this, arguments);
  };
}
function ig(t, e) {
  return e = +e, function() {
    vi(this, t).delay = e;
  };
}
function ag(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? rg : ig)(e, t)) : rt(this.node(), e).delay;
}
function og(t, e) {
  return function() {
    lt(this, t).duration = +e.apply(this, arguments);
  };
}
function sg(t, e) {
  return e = +e, function() {
    lt(this, t).duration = e;
  };
}
function ug(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? og : sg)(e, t)) : rt(this.node(), e).duration;
}
function lg(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    lt(this, t).ease = e;
  };
}
function cg(t) {
  var e = this._id;
  return arguments.length ? this.each(lg(e, t)) : rt(this.node(), e).ease;
}
function fg(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    lt(this, t).ease = n;
  };
}
function hg(t) {
  if (typeof t != "function") throw new Error();
  return this.each(fg(this._id, t));
}
function pg(t) {
  typeof t != "function" && (t = fs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new mt(r, this._parents, this._name, this._id);
}
function dg(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = e[s], u = n[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = e[s];
  return new mt(o, this._parents, this._name, this._id);
}
function gg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function _g(t, e, n) {
  var r, i, a = gg(e) ? vi : lt;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function yg(t, e) {
  var n = this._id;
  return arguments.length < 2 ? rt(this.node(), n).on.on(t) : this.each(_g(n, t, e));
}
function mg(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function vg() {
  return this.on("end.remove", mg(this._id));
}
function wg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = pi(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Hn(u[f], e, n, f, u, rt(c, n)));
  return new mt(a, this._parents, e, n);
}
function bg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = cs(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = rt(c, n), y = 0, w = f.length; y < w; ++y)
          (p = f[y]) && Hn(p, e, n, y, f, d);
        a.push(f), o.push(c);
      }
  return new mt(a, o, e, n);
}
var xg = qe.prototype.constructor;
function Mg() {
  return new xg(this._groups, this._parents);
}
function $g(t, e) {
  var n, r, i;
  return function() {
    var a = ne(this, t), o = (this.style.removeProperty(t), ne(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function zs(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ag(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = ne(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Tg(t, e, n) {
  var r, i, a;
  return function() {
    var o = ne(this, t), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), ne(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, s));
  };
}
function Ng(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var l = lt(this, t), u = l.on, c = l.value[a] == null ? s || (s = zs(e)) : void 0;
    (u !== n || i !== c) && (r = (n = u).copy()).on(o, i = c), l.on = r;
  };
}
function Sg(t, e, n) {
  var r = (t += "") == "transform" ? E0 : Os;
  return e == null ? this.styleTween(t, $g(t, r)).on("end.style." + t, zs(t)) : typeof e == "function" ? this.styleTween(t, Tg(t, r, wi(this, "style." + t, e))).each(Ng(this._id, t)) : this.styleTween(t, Ag(t, r, e), n).on("end.style." + t, null);
}
function Pg(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function kg(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && Pg(t, o, n)), r;
  }
  return a._value = e, a;
}
function Eg(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, kg(t, e, n ?? ""));
}
function Og(t) {
  return function() {
    this.textContent = t;
  };
}
function zg(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Cg(t) {
  return this.tween("text", typeof t == "function" ? zg(wi(this, "text", t)) : Og(t == null ? "" : t + ""));
}
function Ig(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Rg(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Ig(i)), e;
  }
  return r._value = t, r;
}
function jg(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Rg(t));
}
function Fg() {
  for (var t = this._name, e = this._id, n = Cs(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = rt(l, e);
        Hn(l, t, n, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new mt(r, this._parents, t, n);
}
function Lg() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = lt(this, r), c = u.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(l)), u.on = e;
    }), i === 0 && a();
  });
}
var Dg = 0;
function mt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Cs() {
  return ++Dg;
}
var ft = qe.prototype;
mt.prototype = {
  constructor: mt,
  select: wg,
  selectAll: bg,
  selectChild: ft.selectChild,
  selectChildren: ft.selectChildren,
  filter: pg,
  merge: dg,
  selection: Mg,
  transition: Fg,
  call: ft.call,
  nodes: ft.nodes,
  node: ft.node,
  size: ft.size,
  empty: ft.empty,
  each: ft.each,
  on: yg,
  attr: Z0,
  attrTween: ng,
  style: Sg,
  styleTween: Eg,
  text: Cg,
  textTween: jg,
  remove: vg,
  tween: B0,
  delay: ag,
  duration: ug,
  ease: cg,
  easeVarying: hg,
  end: Lg,
  [Symbol.iterator]: ft[Symbol.iterator]
};
function qg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Hg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: qg
};
function Xg(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Bg(t) {
  var e, n;
  t instanceof mt ? (e = t._id, t = t._name) : (e = Cs(), (n = Hg).time = mi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Hn(l, t, e, u, o, n || Xg(l, e));
  return new mt(r, this._parents, t, e);
}
qe.prototype.interrupt = q0;
qe.prototype.transition = Bg;
const Dr = Math.PI, qr = 2 * Dr, zt = 1e-6, Ug = qr - zt;
function Is(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Gg(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Is;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Rs {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Is : Gg(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, a, o) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(e, n, r, i, a) {
    if (e = +e, n = +n, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = r - e, u = i - n, c = o - e, h = s - n, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (f > zt) if (!(Math.abs(h * l - u * c) > zt) || !a)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - o, d = i - s, y = l * l + u * u, w = p * p + d * d, b = Math.sqrt(y), g = Math.sqrt(f), M = a * Math.tan((Dr - Math.acos((y + f - w) / (2 * b * g))) / 2), _ = M / g, m = M / b;
      Math.abs(_ - 1) > zt && this._append`L${e + _ * c},${n + _ * h}`, this._append`A${a},${a},0,0,${+(h * p > c * d)},${this._x1 = e + m * l},${this._y1 = n + m * u}`;
    }
  }
  arc(e, n, r, i, a, o) {
    if (e = +e, n = +n, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = e + s, c = n + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > zt || Math.abs(this._y1 - c) > zt) && this._append`L${u},${c}`, r && (f < 0 && (f = f % qr + qr), f > Ug ? this._append`A${r},${r},0,1,${h},${e - s},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > zt && this._append`A${r},${r},0,${+(f >= Dr)},${h},${this._x1 = e + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function it() {
  return new Rs();
}
it.prototype = Rs.prototype;
function Yg(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function On(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function ie(t) {
  return t = On(Math.abs(t)), t ? t[1] : NaN;
}
function Vg(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(n.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function Kg(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Wg = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function zn(t) {
  if (!(e = Wg.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new bi({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
zn.prototype = bi.prototype;
function bi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
bi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Zg(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var js;
function Jg(t, e) {
  var n = On(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (js = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + On(t, Math.max(0, e + a - 1))[0];
}
function Ta(t, e) {
  var n = On(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Na = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Yg,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Ta(t * 100, e),
  r: Ta,
  s: Jg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Sa(t) {
  return t;
}
var Pa = Array.prototype.map, ka = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Qg(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Sa : Vg(Pa.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Sa : Kg(Pa.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = zn(h);
    var f = h.fill, p = h.align, d = h.sign, y = h.symbol, w = h.zero, b = h.width, g = h.comma, M = h.precision, _ = h.trim, m = h.type;
    m === "n" ? (g = !0, m = "g") : Na[m] || (M === void 0 && (M = 12), _ = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var N = y === "$" ? n : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", E = y === "$" ? r : /[%p]/.test(m) ? o : "", z = Na[m], H = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function X(v) {
      var C = N, T = E, I, Et, L;
      if (m === "c")
        T = z(v) + T, v = "";
      else {
        v = +v;
        var B = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : z(Math.abs(v), M), _ && (v = Zg(v)), B && +v == 0 && d !== "+" && (B = !1), C = (B ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + C, T = (m === "s" ? ka[8 + js / 3] : "") + T + (B && d === "(" ? ")" : ""), H) {
          for (I = -1, Et = v.length; ++I < Et; )
            if (L = v.charCodeAt(I), 48 > L || L > 57) {
              T = (L === 46 ? i + v.slice(I + 1) : v.slice(I)) + T, v = v.slice(0, I);
              break;
            }
        }
      }
      g && !w && (v = e(v, 1 / 0));
      var K = C.length + v.length + T.length, O = K < b ? new Array(b - K + 1).join(f) : "";
      switch (g && w && (v = e(O + v, O.length ? b - T.length : 1 / 0), O = ""), p) {
        case "<":
          v = C + v + T + O;
          break;
        case "=":
          v = C + O + v + T;
          break;
        case "^":
          v = O.slice(0, K = O.length >> 1) + C + v + T + O.slice(K);
          break;
        default:
          v = O + C + v + T;
          break;
      }
      return a(v);
    }
    return X.toString = function() {
      return h + "";
    }, X;
  }
  function c(h, f) {
    var p = u((h = zn(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(ie(f) / 3))) * 3, y = Math.pow(10, -d), w = ka[8 + d / 3];
    return function(b) {
      return p(y * b) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var nn, Xn, Fs;
t_({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function t_(t) {
  return nn = Qg(t), Xn = nn.format, Fs = nn.formatPrefix, nn;
}
function e_(t) {
  return Math.max(0, -ie(Math.abs(t)));
}
function n_(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ie(e) / 3))) * 3 - ie(Math.abs(t)));
}
function r_(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, ie(e) - ie(t)) + 1;
}
function i_(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function a_(t) {
  return function() {
    return t;
  };
}
function o_(t) {
  return +t;
}
var Ea = [0, 1];
function Kt(t) {
  return t;
}
function Hr(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : a_(isNaN(e) ? NaN : 0.5);
}
function s_(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function u_(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = Hr(i, r), a = n(o, a)) : (r = Hr(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function l_(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = Hr(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var l = lp(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function c_(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function f_() {
  var t = Ea, e = Ea, n = yi, r, i, a, o = Kt, s, l, u;
  function c() {
    var f = Math.min(t.length, e.length);
    return o !== Kt && (o = s_(t[0], t[f - 1])), s = f > 2 ? l_ : u_, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), e, n)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(e, t.map(r), Z)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, o_), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), c()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = S0, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Kt, c()) : o !== Kt;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, c()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function h_() {
  return f_()(Kt, Kt);
}
function p_(t, e, n, r) {
  var i = dp(t, e, n), a;
  switch (r = zn(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = n_(i, o)) && (r.precision = a), Fs(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = r_(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = e_(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Xn(r);
}
function d_(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return pp(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return p_(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = Or(o, s, n), u === l)
        return r[i] = o, r[a] = s, e(r);
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
function ae() {
  var t = h_();
  return t.copy = function() {
    return c_(t, ae());
  }, i_.apply(t, arguments), d_(t);
}
function be(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
be.prototype = {
  constructor: be,
  scale: function(t) {
    return t === 1 ? this : new be(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new be(this.k, this.x + this.k * t, this.y + this.k * e);
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
be.prototype;
var Ls = typeof global == "object" && global && global.Object === Object && global, g_ = typeof self == "object" && self && self.Object === Object && self, wt = Ls || g_ || Function("return this")(), st = wt.Symbol, Ds = Object.prototype, __ = Ds.hasOwnProperty, y_ = Ds.toString, de = st ? st.toStringTag : void 0;
function m_(t) {
  var e = __.call(t, de), n = t[de];
  try {
    t[de] = void 0;
    var r = !0;
  } catch {
  }
  var i = y_.call(t);
  return r && (e ? t[de] = n : delete t[de]), i;
}
var v_ = Object.prototype, w_ = v_.toString;
function b_(t) {
  return w_.call(t);
}
var x_ = "[object Null]", M_ = "[object Undefined]", Oa = st ? st.toStringTag : void 0;
function le(t) {
  return t == null ? t === void 0 ? M_ : x_ : Oa && Oa in Object(t) ? m_(t) : b_(t);
}
function oe(t) {
  return t != null && typeof t == "object";
}
var $_ = "[object Symbol]";
function Bn(t) {
  return typeof t == "symbol" || oe(t) && le(t) == $_;
}
function qs(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var tt = Array.isArray, za = st ? st.prototype : void 0, Ca = za ? za.toString : void 0;
function Hs(t) {
  if (typeof t == "string")
    return t;
  if (tt(t))
    return qs(t, Hs) + "";
  if (Bn(t))
    return Ca ? Ca.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var A_ = /\s/;
function T_(t) {
  for (var e = t.length; e-- && A_.test(t.charAt(e)); )
    ;
  return e;
}
var N_ = /^\s+/;
function S_(t) {
  return t && t.slice(0, T_(t) + 1).replace(N_, "");
}
function se(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ia = NaN, P_ = /^[-+]0x[0-9a-f]+$/i, k_ = /^0b[01]+$/i, E_ = /^0o[0-7]+$/i, O_ = parseInt;
function z_(t) {
  if (typeof t == "number")
    return t;
  if (Bn(t))
    return Ia;
  if (se(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = se(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = S_(t);
  var n = k_.test(t);
  return n || E_.test(t) ? O_(t.slice(2), n ? 2 : 8) : P_.test(t) ? Ia : +t;
}
var C_ = 1 / 0, I_ = 17976931348623157e292;
function fr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = z_(t), t === C_ || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * I_;
  }
  return t === t ? t : 0;
}
function R_(t) {
  return t;
}
var j_ = "[object AsyncFunction]", F_ = "[object Function]", L_ = "[object GeneratorFunction]", D_ = "[object Proxy]";
function Xs(t) {
  if (!se(t))
    return !1;
  var e = le(t);
  return e == F_ || e == L_ || e == j_ || e == D_;
}
var hr = wt["__core-js_shared__"], Ra = (function() {
  var t = /[^.]+$/.exec(hr && hr.keys && hr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function q_(t) {
  return !!Ra && Ra in t;
}
var H_ = Function.prototype, X_ = H_.toString;
function Bt(t) {
  if (t != null) {
    try {
      return X_.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var B_ = /[\\^$.*+?()[\]{}|]/g, U_ = /^\[object .+?Constructor\]$/, G_ = Function.prototype, Y_ = Object.prototype, V_ = G_.toString, K_ = Y_.hasOwnProperty, W_ = RegExp(
  "^" + V_.call(K_).replace(B_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Z_(t) {
  if (!se(t) || q_(t))
    return !1;
  var e = Xs(t) ? W_ : U_;
  return e.test(Bt(t));
}
function J_(t, e) {
  return t == null ? void 0 : t[e];
}
function ce(t, e) {
  var n = J_(t, e);
  return Z_(n) ? n : void 0;
}
var Xr = ce(wt, "WeakMap"), Q_ = 9007199254740991, ty = /^(?:0|[1-9]\d*)$/;
function xi(t, e) {
  var n = typeof t;
  return e = e ?? Q_, !!e && (n == "number" || n != "symbol" && ty.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Mi(t, e) {
  return t === e || t !== t && e !== e;
}
var ey = 9007199254740991;
function $i(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ey;
}
function Un(t) {
  return t != null && $i(t.length) && !Xs(t);
}
function ny(t, e, n) {
  if (!se(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Un(n) && xi(e, n.length) : r == "string" && e in n) ? Mi(n[e], t) : !1;
}
var ry = Object.prototype;
function iy(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || ry;
  return t === n;
}
function ay(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var oy = "[object Arguments]";
function ja(t) {
  return oe(t) && le(t) == oy;
}
var Bs = Object.prototype, sy = Bs.hasOwnProperty, uy = Bs.propertyIsEnumerable, Ai = ja(/* @__PURE__ */ (function() {
  return arguments;
})()) ? ja : function(t) {
  return oe(t) && sy.call(t, "callee") && !uy.call(t, "callee");
};
function ly() {
  return !1;
}
var Us = typeof exports == "object" && exports && !exports.nodeType && exports, Fa = Us && typeof module == "object" && module && !module.nodeType && module, cy = Fa && Fa.exports === Us, La = cy ? wt.Buffer : void 0, fy = La ? La.isBuffer : void 0, Br = fy || ly, hy = "[object Arguments]", py = "[object Array]", dy = "[object Boolean]", gy = "[object Date]", _y = "[object Error]", yy = "[object Function]", my = "[object Map]", vy = "[object Number]", wy = "[object Object]", by = "[object RegExp]", xy = "[object Set]", My = "[object String]", $y = "[object WeakMap]", Ay = "[object ArrayBuffer]", Ty = "[object DataView]", Ny = "[object Float32Array]", Sy = "[object Float64Array]", Py = "[object Int8Array]", ky = "[object Int16Array]", Ey = "[object Int32Array]", Oy = "[object Uint8Array]", zy = "[object Uint8ClampedArray]", Cy = "[object Uint16Array]", Iy = "[object Uint32Array]", P = {};
P[Ny] = P[Sy] = P[Py] = P[ky] = P[Ey] = P[Oy] = P[zy] = P[Cy] = P[Iy] = !0;
P[hy] = P[py] = P[Ay] = P[dy] = P[Ty] = P[gy] = P[_y] = P[yy] = P[my] = P[vy] = P[wy] = P[by] = P[xy] = P[My] = P[$y] = !1;
function Ry(t) {
  return oe(t) && $i(t.length) && !!P[le(t)];
}
function jy(t) {
  return function(e) {
    return t(e);
  };
}
var Gs = typeof exports == "object" && exports && !exports.nodeType && exports, xe = Gs && typeof module == "object" && module && !module.nodeType && module, Fy = xe && xe.exports === Gs, pr = Fy && Ls.process, Da = (function() {
  try {
    var t = xe && xe.require && xe.require("util").types;
    return t || pr && pr.binding && pr.binding("util");
  } catch {
  }
})(), qa = Da && Da.isTypedArray, Ys = qa ? jy(qa) : Ry, Ly = Object.prototype, Dy = Ly.hasOwnProperty;
function qy(t, e) {
  var n = tt(t), r = !n && Ai(t), i = !n && !r && Br(t), a = !n && !r && !i && Ys(t), o = n || r || i || a, s = o ? ay(t.length, String) : [], l = s.length;
  for (var u in t)
    Dy.call(t, u) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    xi(u, l))) && s.push(u);
  return s;
}
function Hy(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Xy = Hy(Object.keys, Object), By = Object.prototype, Uy = By.hasOwnProperty;
function Gy(t) {
  if (!iy(t))
    return Xy(t);
  var e = [];
  for (var n in Object(t))
    Uy.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Ti(t) {
  return Un(t) ? qy(t) : Gy(t);
}
var Yy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Vy = /^\w*$/;
function Ni(t, e) {
  if (tt(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Bn(t) ? !0 : Vy.test(t) || !Yy.test(t) || e != null && t in Object(e);
}
var ze = ce(Object, "create");
function Ky() {
  this.__data__ = ze ? ze(null) : {}, this.size = 0;
}
function Wy(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Zy = "__lodash_hash_undefined__", Jy = Object.prototype, Qy = Jy.hasOwnProperty;
function tm(t) {
  var e = this.__data__;
  if (ze) {
    var n = e[t];
    return n === Zy ? void 0 : n;
  }
  return Qy.call(e, t) ? e[t] : void 0;
}
var em = Object.prototype, nm = em.hasOwnProperty;
function rm(t) {
  var e = this.__data__;
  return ze ? e[t] !== void 0 : nm.call(e, t);
}
var im = "__lodash_hash_undefined__";
function am(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = ze && e === void 0 ? im : e, this;
}
function Ht(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Ht.prototype.clear = Ky;
Ht.prototype.delete = Wy;
Ht.prototype.get = tm;
Ht.prototype.has = rm;
Ht.prototype.set = am;
function om() {
  this.__data__ = [], this.size = 0;
}
function Gn(t, e) {
  for (var n = t.length; n--; )
    if (Mi(t[n][0], e))
      return n;
  return -1;
}
var sm = Array.prototype, um = sm.splice;
function lm(t) {
  var e = this.__data__, n = Gn(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : um.call(e, n, 1), --this.size, !0;
}
function cm(t) {
  var e = this.__data__, n = Gn(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function fm(t) {
  return Gn(this.__data__, t) > -1;
}
function hm(t, e) {
  var n = this.__data__, r = Gn(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function bt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
bt.prototype.clear = om;
bt.prototype.delete = lm;
bt.prototype.get = cm;
bt.prototype.has = fm;
bt.prototype.set = hm;
var Ce = ce(wt, "Map");
function pm() {
  this.size = 0, this.__data__ = {
    hash: new Ht(),
    map: new (Ce || bt)(),
    string: new Ht()
  };
}
function dm(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Yn(t, e) {
  var n = t.__data__;
  return dm(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function gm(t) {
  var e = Yn(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function _m(t) {
  return Yn(this, t).get(t);
}
function ym(t) {
  return Yn(this, t).has(t);
}
function mm(t, e) {
  var n = Yn(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function xt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
xt.prototype.clear = pm;
xt.prototype.delete = gm;
xt.prototype.get = _m;
xt.prototype.has = ym;
xt.prototype.set = mm;
var vm = "Expected a function";
function Si(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(vm);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (Si.Cache || xt)(), n;
}
Si.Cache = xt;
var wm = 500;
function bm(t) {
  var e = Si(t, function(r) {
    return n.size === wm && n.clear(), r;
  }), n = e.cache;
  return e;
}
var xm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Mm = /\\(\\)?/g, $m = bm(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(xm, function(n, r, i, a) {
    e.push(i ? a.replace(Mm, "$1") : r || n);
  }), e;
});
function Am(t) {
  return t == null ? "" : Hs(t);
}
function Vs(t, e) {
  return tt(t) ? t : Ni(t, e) ? [t] : $m(Am(t));
}
function Vn(t) {
  if (typeof t == "string" || Bn(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Ks(t, e) {
  e = Vs(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Vn(e[n++])];
  return n && n == r ? t : void 0;
}
function Tm(t, e, n) {
  var r = t == null ? void 0 : Ks(t, e);
  return r === void 0 ? n : r;
}
function Ws(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Ha = st ? st.isConcatSpreadable : void 0;
function Nm(t) {
  return tt(t) || Ai(t) || !!(Ha && t && t[Ha]);
}
function Sm(t, e, n, r, i) {
  var a = -1, o = t.length;
  for (n || (n = Nm), i || (i = []); ++a < o; ) {
    var s = t[a];
    n(s) ? Ws(i, s) : i[i.length] = s;
  }
  return i;
}
function Pm(t) {
  var e = t == null ? 0 : t.length;
  return e ? Sm(t) : [];
}
function km() {
  this.__data__ = new bt(), this.size = 0;
}
function Em(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Om(t) {
  return this.__data__.get(t);
}
function zm(t) {
  return this.__data__.has(t);
}
var Cm = 200;
function Im(t, e) {
  var n = this.__data__;
  if (n instanceof bt) {
    var r = n.__data__;
    if (!Ce || r.length < Cm - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new xt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function pt(t) {
  var e = this.__data__ = new bt(t);
  this.size = e.size;
}
pt.prototype.clear = km;
pt.prototype.delete = Em;
pt.prototype.get = Om;
pt.prototype.has = zm;
pt.prototype.set = Im;
function Rm(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (a[i++] = o);
  }
  return a;
}
function jm() {
  return [];
}
var Fm = Object.prototype, Lm = Fm.propertyIsEnumerable, Xa = Object.getOwnPropertySymbols, Dm = Xa ? function(t) {
  return t == null ? [] : (t = Object(t), Rm(Xa(t), function(e) {
    return Lm.call(t, e);
  }));
} : jm;
function qm(t, e, n) {
  var r = e(t);
  return tt(t) ? r : Ws(r, n(t));
}
function Ba(t) {
  return qm(t, Ti, Dm);
}
var Ur = ce(wt, "DataView"), Gr = ce(wt, "Promise"), Yr = ce(wt, "Set"), Ua = "[object Map]", Hm = "[object Object]", Ga = "[object Promise]", Ya = "[object Set]", Va = "[object WeakMap]", Ka = "[object DataView]", Xm = Bt(Ur), Bm = Bt(Ce), Um = Bt(Gr), Gm = Bt(Yr), Ym = Bt(Xr), Tt = le;
(Ur && Tt(new Ur(new ArrayBuffer(1))) != Ka || Ce && Tt(new Ce()) != Ua || Gr && Tt(Gr.resolve()) != Ga || Yr && Tt(new Yr()) != Ya || Xr && Tt(new Xr()) != Va) && (Tt = function(t) {
  var e = le(t), n = e == Hm ? t.constructor : void 0, r = n ? Bt(n) : "";
  if (r)
    switch (r) {
      case Xm:
        return Ka;
      case Bm:
        return Ua;
      case Um:
        return Ga;
      case Gm:
        return Ya;
      case Ym:
        return Va;
    }
  return e;
});
var Wa = wt.Uint8Array, Vm = "__lodash_hash_undefined__";
function Km(t) {
  return this.__data__.set(t, Vm), this;
}
function Wm(t) {
  return this.__data__.has(t);
}
function Cn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new xt(); ++e < n; )
    this.add(t[e]);
}
Cn.prototype.add = Cn.prototype.push = Km;
Cn.prototype.has = Wm;
function Zm(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Jm(t, e) {
  return t.has(e);
}
var Qm = 1, tv = 2;
function Zs(t, e, n, r, i, a) {
  var o = n & Qm, s = t.length, l = e.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(e);
  if (u && c)
    return u == e && c == t;
  var h = -1, f = !0, p = n & tv ? new Cn() : void 0;
  for (a.set(t, e), a.set(e, t); ++h < s; ) {
    var d = t[h], y = e[h];
    if (r)
      var w = o ? r(y, d, h, e, t, a) : r(d, y, h, t, e, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Zm(e, function(b, g) {
        if (!Jm(p, g) && (d === b || i(d, b, n, r, a)))
          return p.push(g);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === y || i(d, y, n, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), f;
}
function ev(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function nv(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var rv = 1, iv = 2, av = "[object Boolean]", ov = "[object Date]", sv = "[object Error]", uv = "[object Map]", lv = "[object Number]", cv = "[object RegExp]", fv = "[object Set]", hv = "[object String]", pv = "[object Symbol]", dv = "[object ArrayBuffer]", gv = "[object DataView]", Za = st ? st.prototype : void 0, dr = Za ? Za.valueOf : void 0;
function _v(t, e, n, r, i, a, o) {
  switch (n) {
    case gv:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case dv:
      return !(t.byteLength != e.byteLength || !a(new Wa(t), new Wa(e)));
    case av:
    case ov:
    case lv:
      return Mi(+t, +e);
    case sv:
      return t.name == e.name && t.message == e.message;
    case cv:
    case hv:
      return t == e + "";
    case uv:
      var s = ev;
    case fv:
      var l = r & rv;
      if (s || (s = nv), t.size != e.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      r |= iv, o.set(t, e);
      var c = Zs(s(t), s(e), r, i, a, o);
      return o.delete(t), c;
    case pv:
      if (dr)
        return dr.call(t) == dr.call(e);
  }
  return !1;
}
var yv = 1, mv = Object.prototype, vv = mv.hasOwnProperty;
function wv(t, e, n, r, i, a) {
  var o = n & yv, s = Ba(t), l = s.length, u = Ba(e), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in e : vv.call(e, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(e);
  if (p && d)
    return p == e && d == t;
  var y = !0;
  a.set(t, e), a.set(e, t);
  for (var w = o; ++h < l; ) {
    f = s[h];
    var b = t[f], g = e[f];
    if (r)
      var M = o ? r(g, b, f, e, t, a) : r(b, g, f, t, e, a);
    if (!(M === void 0 ? b === g || i(b, g, n, r, a) : M)) {
      y = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (y && !w) {
    var _ = t.constructor, m = e.constructor;
    _ != m && "constructor" in t && "constructor" in e && !(typeof _ == "function" && _ instanceof _ && typeof m == "function" && m instanceof m) && (y = !1);
  }
  return a.delete(t), a.delete(e), y;
}
var bv = 1, Ja = "[object Arguments]", Qa = "[object Array]", rn = "[object Object]", xv = Object.prototype, to = xv.hasOwnProperty;
function Mv(t, e, n, r, i, a) {
  var o = tt(t), s = tt(e), l = o ? Qa : Tt(t), u = s ? Qa : Tt(e);
  l = l == Ja ? rn : l, u = u == Ja ? rn : u;
  var c = l == rn, h = u == rn, f = l == u;
  if (f && Br(t)) {
    if (!Br(e))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new pt()), o || Ys(t) ? Zs(t, e, n, r, i, a) : _v(t, e, l, n, r, i, a);
  if (!(n & bv)) {
    var p = c && to.call(t, "__wrapped__"), d = h && to.call(e, "__wrapped__");
    if (p || d) {
      var y = p ? t.value() : t, w = d ? e.value() : e;
      return a || (a = new pt()), i(y, w, n, r, a);
    }
  }
  return f ? (a || (a = new pt()), wv(t, e, n, r, i, a)) : !1;
}
function Pi(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !oe(t) && !oe(e) ? t !== t && e !== e : Mv(t, e, n, r, Pi, i);
}
var $v = 1, Av = 2;
function Tv(t, e, n, r) {
  var i = n.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = n[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = n[i];
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new pt(), h;
      if (!(h === void 0 ? Pi(u, l, $v | Av, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Js(t) {
  return t === t && !se(t);
}
function Nv(t) {
  for (var e = Ti(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Js(i)];
  }
  return e;
}
function Qs(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function Sv(t) {
  var e = Nv(t);
  return e.length == 1 && e[0][2] ? Qs(e[0][0], e[0][1]) : function(n) {
    return n === t || Tv(n, t, e);
  };
}
function Pv(t, e) {
  return t != null && e in Object(t);
}
function kv(t, e, n) {
  e = Vs(e, t);
  for (var r = -1, i = e.length, a = !1; ++r < i; ) {
    var o = Vn(e[r]);
    if (!(a = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && $i(i) && xi(o, i) && (tt(t) || Ai(t)));
}
function Ev(t, e) {
  return t != null && kv(t, e, Pv);
}
var Ov = 1, zv = 2;
function Cv(t, e) {
  return Ni(t) && Js(e) ? Qs(Vn(t), e) : function(n) {
    var r = Tm(n, t);
    return r === void 0 && r === e ? Ev(n, t) : Pi(e, r, Ov | zv);
  };
}
function Iv(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function Rv(t) {
  return function(e) {
    return Ks(e, t);
  };
}
function jv(t) {
  return Ni(t) ? Iv(Vn(t)) : Rv(t);
}
function Fv(t) {
  return typeof t == "function" ? t : t == null ? R_ : typeof t == "object" ? tt(t) ? Cv(t[0], t[1]) : Sv(t) : jv(t);
}
function Lv(t) {
  return function(e, n, r) {
    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
      var l = o[++i];
      if (n(a[l], l, a) === !1)
        break;
    }
    return e;
  };
}
var Dv = Lv();
function qv(t, e) {
  return t && Dv(t, e, Ti);
}
function Hv(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Un(n))
      return t(n, r);
    for (var i = n.length, a = -1, o = Object(n); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var Xv = Hv(qv);
function Bv(t, e) {
  var n = -1, r = Un(t) ? Array(t.length) : [];
  return Xv(t, function(i, a, o) {
    r[++n] = e(i, a, o);
  }), r;
}
function eo(t, e) {
  var n = tt(t) ? qs : Bv;
  return n(t, Fv(e));
}
var Uv = Math.ceil, Gv = Math.max;
function Yv(t, e, n, r) {
  for (var i = -1, a = Gv(Uv((e - t) / (n || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += n;
  return o;
}
function Vv(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && ny(e, n, r) && (n = r = void 0), e = fr(e), n === void 0 ? (n = e, e = 0) : n = fr(n), r = r === void 0 ? e < n ? 1 : -1 : fr(r), Yv(e, n, r);
  };
}
var Kv = Vv();
const Wv = (t, e, n = 12, r = 12) => {
  const i = ae().domain([0, n]).range([0, t]), a = ae().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return Kv((n + 1) * (r + 1)).map(function(o) {
        return { m: o % (n + 1), n: Math.floor(o / (n + 1)), x: i(o % (n + 1)), y: a(Math.floor(o / (n + 1))) };
      });
    },
    position: function(o, s) {
      typeof o == "number" && (o = [o]), typeof s == "number" && (s = [s]);
      const l = Pm(eo(s, function(u) {
        return eo(
          o,
          function(c) {
            return { x: i(c), y: a(u) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, Zv = "_widget_1279t_47", Jv = "_label_1279t_67", Qv = "_lit_1279t_72", t1 = "_button_1279t_76", e1 = "_symbol_1279t_76", n1 = "_radio_1279t_77", r1 = "_radiobutton_1279t_77", i1 = "_selected_1279t_83", a1 = "_toggle_1279t_84", o1 = "_slider_1279t_93", s1 = "_track_1279t_93", u1 = "_track_overlay_1279t_98", l1 = "_handle_1279t_106", $ = {
  widget: Zv,
  label: Jv,
  lit: Qv,
  button: t1,
  symbol: e1,
  radio: n1,
  radiobutton: r1,
  selected: i1,
  toggle: a1,
  slider: o1,
  track: s1,
  track_overlay: u1,
  handle: l1
}, ki = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = t.length;
  let n = "";
  for (let r = 0; r < 10; ++r)
    n += t[Math.floor(Math.random() * e)];
  return n;
}, Ei = (t, e, n) => {
  var r, i, a, o;
  switch (n) {
    case "top":
      r = 0, i = -e / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = e / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = e / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, c1 = (t = 1) => {
  const e = it();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, f1 = (t = 1) => {
  const e = it(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, h1 = (t = 1) => {
  const e = it();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, p1 = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = it();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, d1 = (t = 1) => {
  const e = it(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, a = 0.5, o = 0.6, s = 0.6, l = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), e.arc(0, 0, t * (1 - a), r, i, !1), e.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), e.lineTo(l[0] + u[0], l[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), e.closePath(), e.toString();
}, g1 = (t = 1) => {
  const e = it(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, a = n, o = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, o), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, a, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, _1 = (t = 1) => {
  const e = it(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), e.arc(0, 0, t * (1 - a), i, r, !0), e.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var l = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(l[0] + u[0], l[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), e.closePath(), e.toString();
}, y1 = (t = 1) => {
  var e = it(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, m1 = (t = 1) => {
  const e = it(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, Vr = (t) => {
  switch (t) {
    case "play":
      return c1;
    case "forward":
      return f1;
    case "back":
      return h1;
    case "pause":
      return p1;
    case "reload":
      return d1;
    case "capture":
      return g1;
    case "rewind":
      return _1;
    case "stop":
      return y1;
    case "push":
      return m1;
  }
}, tu = () => {
  const t = "button";
  var e = ki(), n = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", l = null, u = function(f) {
  }, c = ["play"], h = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? n : (n = f, this);
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
      h = (h + 1) % c.length, u(), R(this.parentNode).select("." + $.symbol).attr("d", Vr(c[h])(r * n));
    },
    press: function(f) {
      h = (h + 1) % c.length, u(), f.select("#button_" + e).select("." + $.symbol).attr("d", Vr(c[h])(r * n));
    }
  };
}, v1 = () => {
  const t = "slider", e = Xn(".3f");
  var n = ki(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, l = "top-left", u = 4, c = null, h = function(g) {
  }, f = function(g) {
  }, p = [0, 1], d = 0, y = null, w = ae().domain(p).range([0, r]).clamp(!0);
  const b = function(g, M, _ = p) {
    const m = g.select("#slider_" + n);
    w.domain(_), d = M, m.selectAll("." + $.handle).transition().attr("cx", w(M)), o && m.select("." + $.label).text(y + " = " + e(d)), h(), f();
  };
  return {
    type: t,
    scale: w,
    id: function(g) {
      return typeof g > "u" ? n : (n = g, this);
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
}, w1 = () => {
  const t = "radio";
  var e = ki(), n = 100, r = 20, i = 0.3, a = "round", o = "vertical", s = { x: 0, y: 0 }, l = "right", u = null, c = function(p) {
  }, h = [], f = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? n : (n = p, this);
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
      f = d, p.select("#radio_" + e).selectAll("." + $.symbol).classed($.selected, (y) => y == f), c();
    }
  };
}, b1 = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = R(a).attr("class", $.widget + " " + $.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", $.background).on("click", t.click).on("mouseover", function() {
    R(this).classed($.lit, !0), R(this.parentNode).select("." + $.symbol).classed($.lit, !0);
  }).on("mouseout", function() {
    R(this).classed($.lit, !1), R(this.parentNode).select("." + $.symbol).classed($.lit, !1);
  }), o.append("path").attr("d", Vr(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", $.symbol), r) {
    const l = Ei(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", $.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return a;
}, eu = (t, e) => {
  const n = it();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, x1 = (t, e) => {
  const n = Xn(".3f"), r = "slider_" + t.id();
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
    const _ = g.getBoundingClientRect(), m = M - _.left, N = g.width && g.width.baseVal ? g.width.baseVal.value : _.width, E = _.width ? N / _.width : 1;
    return m * E - u;
  };
  s.append("path").attr("d", eu(t.size(), t.girth())).attr("class", $.track), s.append("circle").attr("class", $.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", $.track_overlay).on("click", function(b) {
    const g = h(b, this);
    if (g == null) return;
    const M = Math.max(0, Math.min(t.size(), g));
    t.value(o.invert(M)), t.update(), t.update_end(), s.selectAll("." + $.handle).attr("cx", o(t.value())), t.show() && s.select("." + $.label).text(t.label() + " = " + n(t.value()));
  }).call(
    a0().on("drag", function(b) {
      const g = h(b, this);
      if (g == null) return;
      const M = Math.max(0, Math.min(t.size(), g));
      t.value(o.invert(M)), t.update(), s.selectAll("." + $.handle).attr("cx", o(t.value())), t.show() && s.select("." + $.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(b) {
      t.update_end();
    })
  );
  var f, p, d, y = "bottom";
  const w = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? p = t.labelposition().match(/bottom/i) != null ? Ze([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + w : -Ze([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - w : p = t.labelposition().match(/bottom/i) != null ? Ze([t.girth() / 2, t.knob()]) + 7 + w : -Ze([t.girth() / 2, t.knob()]) - 7 - w, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, d = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", y = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", $.label).style("text-anchor", d).style("alignment-baseline", y).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + p + ")"), l;
}, M1 = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = R(o).attr("class", $.widget + " " + $.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed($.selected, t.value() == 1);
  if (s.append("path").attr("d", eu(2 * t.size(), 2 * t.size())).attr("class", $.track), s.append("circle").attr("class", $.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", $.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Ei(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", $.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return o;
}, $1 = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = gp(o), l = ae().domain([0, o - 1]).range([0, t.size()]), u = ae().domain([0, o - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = R(c).attr("class", $.widget + " " + $.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + $.radiobutton).data(s).enter().append("g").attr("class", $.radiobutton).attr("id", (y) => "b" + y).attr("transform", (y) => t.orientation() == "vertical" ? "translate(0," + u(y) + ")" : "translate(" + l(y) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", a / 2)), f.attr("class", $.background).on("mouseover", function() {
    R(this).classed($.lit, !0), R(this.parentNode).select("." + $.symbol).classed($.lit, !0);
  }).on("mouseout", function() {
    R(this).classed($.lit, !1), R(this.parentNode).select("." + $.symbol).classed($.lit, !1);
  }), p.attr("class", $.symbol), p.filter((y) => y == t.value()).classed($.selected, !0), h.on("click", t.click);
  const d = Ei(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", $.label).text(function(y, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), c;
}, gr = (t, e) => {
  switch (t.type) {
    case "button":
      return b1(t);
    case "slider":
      return x1(t);
    case "radio":
      return $1(t);
    case "toggle":
      return M1(t);
  }
}, A1 = "_displayPanel_1ueg0_1", T1 = "_controlPanel_1ueg0_8", N1 = "_trunk_1ueg0_24", S1 = "_branch_1ueg0_24", P1 = "_cartoon_1ueg0_32", Nt = {
  displayPanel: A1,
  controlPanel: T1,
  trunk: N1,
  branch: S1,
  cartoon: P1
}, k1 = (t, e) => {
  const n = Wv(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  ), r = qc("#" + t).classed(t + " " + e.container_class, !0), i = t + "_display", a = t + "_controls", o = r.append("div").attr("id", i).attr("class", Nt.displayPanel).classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), s = r.append("div").attr("id", a).attr("class", "d3-widgets " + Nt.controlPanel).classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height).style("width", "100%").style("height", "100%");
  return e.debug && s.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").style("fill", "black"), { display: o, controls: s, grid: n };
};
var nu = typeof global == "object" && global && global.Object === Object && global, E1 = typeof self == "object" && self && self.Object === Object && self, Mt = nu || E1 || Function("return this")(), Pt = Mt.Symbol, ru = Object.prototype, O1 = ru.hasOwnProperty, z1 = ru.toString, ge = Pt ? Pt.toStringTag : void 0;
function C1(t) {
  var e = O1.call(t, ge), n = t[ge];
  try {
    t[ge] = void 0;
    var r = !0;
  } catch {
  }
  var i = z1.call(t);
  return r && (e ? t[ge] = n : delete t[ge]), i;
}
var I1 = Object.prototype, R1 = I1.toString;
function j1(t) {
  return R1.call(t);
}
var F1 = "[object Null]", L1 = "[object Undefined]", no = Pt ? Pt.toStringTag : void 0;
function fe(t) {
  return t == null ? t === void 0 ? L1 : F1 : no && no in Object(t) ? C1(t) : j1(t);
}
function ue(t) {
  return t != null && typeof t == "object";
}
var D1 = "[object Symbol]";
function Kn(t) {
  return typeof t == "symbol" || ue(t) && fe(t) == D1;
}
function Wn(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var et = Array.isArray, ro = Pt ? Pt.prototype : void 0, io = ro ? ro.toString : void 0;
function iu(t) {
  if (typeof t == "string")
    return t;
  if (et(t))
    return Wn(t, iu) + "";
  if (Kn(t))
    return io ? io.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var q1 = /\s/;
function H1(t) {
  for (var e = t.length; e-- && q1.test(t.charAt(e)); )
    ;
  return e;
}
var X1 = /^\s+/;
function B1(t) {
  return t && t.slice(0, H1(t) + 1).replace(X1, "");
}
function vt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var ao = NaN, U1 = /^[-+]0x[0-9a-f]+$/i, G1 = /^0b[01]+$/i, Y1 = /^0o[0-7]+$/i, V1 = parseInt;
function K1(t) {
  if (typeof t == "number")
    return t;
  if (Kn(t))
    return ao;
  if (vt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = vt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = B1(t);
  var n = G1.test(t);
  return n || Y1.test(t) ? V1(t.slice(2), n ? 2 : 8) : U1.test(t) ? ao : +t;
}
var oo = 1 / 0, W1 = 17976931348623157e292;
function _r(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = K1(t), t === oo || t === -oo) {
    var e = t < 0 ? -1 : 1;
    return e * W1;
  }
  return t === t ? t : 0;
}
function au(t) {
  return t;
}
var Z1 = "[object AsyncFunction]", J1 = "[object Function]", Q1 = "[object GeneratorFunction]", tw = "[object Proxy]";
function ou(t) {
  if (!vt(t))
    return !1;
  var e = fe(t);
  return e == J1 || e == Q1 || e == Z1 || e == tw;
}
var yr = Mt["__core-js_shared__"], so = (function() {
  var t = /[^.]+$/.exec(yr && yr.keys && yr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function ew(t) {
  return !!so && so in t;
}
var nw = Function.prototype, rw = nw.toString;
function Ut(t) {
  if (t != null) {
    try {
      return rw.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var iw = /[\\^$.*+?()[\]{}|]/g, aw = /^\[object .+?Constructor\]$/, ow = Function.prototype, sw = Object.prototype, uw = ow.toString, lw = sw.hasOwnProperty, cw = RegExp(
  "^" + uw.call(lw).replace(iw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function fw(t) {
  if (!vt(t) || ew(t))
    return !1;
  var e = ou(t) ? cw : aw;
  return e.test(Ut(t));
}
function hw(t, e) {
  return t == null ? void 0 : t[e];
}
function Gt(t, e) {
  var n = hw(t, e);
  return fw(n) ? n : void 0;
}
var Kr = Gt(Mt, "WeakMap"), uo = (function() {
  try {
    var t = Gt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})();
function pw(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var dw = 9007199254740991, gw = /^(?:0|[1-9]\d*)$/;
function Zn(t, e) {
  var n = typeof t;
  return e = e ?? dw, !!e && (n == "number" || n != "symbol" && gw.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function _w(t, e, n) {
  e == "__proto__" && uo ? uo(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Jn(t, e) {
  return t === e || t !== t && e !== e;
}
var yw = Object.prototype, mw = yw.hasOwnProperty;
function vw(t, e, n) {
  var r = t[e];
  (!(mw.call(t, e) && Jn(r, n)) || n === void 0 && !(e in t)) && _w(t, e, n);
}
var ww = 9007199254740991;
function Oi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ww;
}
function Xe(t) {
  return t != null && Oi(t.length) && !ou(t);
}
function bw(t, e, n) {
  if (!vt(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Xe(n) && Zn(e, n.length) : r == "string" && e in n) ? Jn(n[e], t) : !1;
}
var xw = Object.prototype;
function su(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || xw;
  return t === n;
}
function Mw(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var $w = "[object Arguments]";
function lo(t) {
  return ue(t) && fe(t) == $w;
}
var uu = Object.prototype, Aw = uu.hasOwnProperty, Tw = uu.propertyIsEnumerable, lu = lo(/* @__PURE__ */ (function() {
  return arguments;
})()) ? lo : function(t) {
  return ue(t) && Aw.call(t, "callee") && !Tw.call(t, "callee");
};
function Nw() {
  return !1;
}
var cu = typeof exports == "object" && exports && !exports.nodeType && exports, co = cu && typeof module == "object" && module && !module.nodeType && module, Sw = co && co.exports === cu, fo = Sw ? Mt.Buffer : void 0, Pw = fo ? fo.isBuffer : void 0, Wr = Pw || Nw, kw = "[object Arguments]", Ew = "[object Array]", Ow = "[object Boolean]", zw = "[object Date]", Cw = "[object Error]", Iw = "[object Function]", Rw = "[object Map]", jw = "[object Number]", Fw = "[object Object]", Lw = "[object RegExp]", Dw = "[object Set]", qw = "[object String]", Hw = "[object WeakMap]", Xw = "[object ArrayBuffer]", Bw = "[object DataView]", Uw = "[object Float32Array]", Gw = "[object Float64Array]", Yw = "[object Int8Array]", Vw = "[object Int16Array]", Kw = "[object Int32Array]", Ww = "[object Uint8Array]", Zw = "[object Uint8ClampedArray]", Jw = "[object Uint16Array]", Qw = "[object Uint32Array]", k = {};
k[Uw] = k[Gw] = k[Yw] = k[Vw] = k[Kw] = k[Ww] = k[Zw] = k[Jw] = k[Qw] = !0;
k[kw] = k[Ew] = k[Xw] = k[Ow] = k[Bw] = k[zw] = k[Cw] = k[Iw] = k[Rw] = k[jw] = k[Fw] = k[Lw] = k[Dw] = k[qw] = k[Hw] = !1;
function tb(t) {
  return ue(t) && Oi(t.length) && !!k[fe(t)];
}
function eb(t) {
  return function(e) {
    return t(e);
  };
}
var fu = typeof exports == "object" && exports && !exports.nodeType && exports, Me = fu && typeof module == "object" && module && !module.nodeType && module, nb = Me && Me.exports === fu, mr = nb && nu.process, ho = (function() {
  try {
    var t = Me && Me.require && Me.require("util").types;
    return t || mr && mr.binding && mr.binding("util");
  } catch {
  }
})(), po = ho && ho.isTypedArray, hu = po ? eb(po) : tb, rb = Object.prototype, ib = rb.hasOwnProperty;
function pu(t, e) {
  var n = et(t), r = !n && lu(t), i = !n && !r && Wr(t), a = !n && !r && !i && hu(t), o = n || r || i || a, s = o ? Mw(t.length, String) : [], l = s.length;
  for (var u in t)
    (e || ib.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Zn(u, l))) && s.push(u);
  return s;
}
function du(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var ab = du(Object.keys, Object), ob = Object.prototype, sb = ob.hasOwnProperty;
function ub(t) {
  if (!su(t))
    return ab(t);
  var e = [];
  for (var n in Object(t))
    sb.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Qn(t) {
  return Xe(t) ? pu(t) : ub(t);
}
function lb(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var cb = Object.prototype, fb = cb.hasOwnProperty;
function hb(t) {
  if (!vt(t))
    return lb(t);
  var e = su(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !fb.call(t, r)) || n.push(r);
  return n;
}
function pb(t) {
  return Xe(t) ? pu(t, !0) : hb(t);
}
var db = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gb = /^\w*$/;
function zi(t, e) {
  if (et(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Kn(t) ? !0 : gb.test(t) || !db.test(t) || e != null && t in Object(e);
}
var Ie = Gt(Object, "create");
function _b() {
  this.__data__ = Ie ? Ie(null) : {}, this.size = 0;
}
function yb(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var mb = "__lodash_hash_undefined__", vb = Object.prototype, wb = vb.hasOwnProperty;
function bb(t) {
  var e = this.__data__;
  if (Ie) {
    var n = e[t];
    return n === mb ? void 0 : n;
  }
  return wb.call(e, t) ? e[t] : void 0;
}
var xb = Object.prototype, Mb = xb.hasOwnProperty;
function $b(t) {
  var e = this.__data__;
  return Ie ? e[t] !== void 0 : Mb.call(e, t);
}
var Ab = "__lodash_hash_undefined__";
function Tb(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Ie && e === void 0 ? Ab : e, this;
}
function Xt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Xt.prototype.clear = _b;
Xt.prototype.delete = yb;
Xt.prototype.get = bb;
Xt.prototype.has = $b;
Xt.prototype.set = Tb;
function Nb() {
  this.__data__ = [], this.size = 0;
}
function tr(t, e) {
  for (var n = t.length; n--; )
    if (Jn(t[n][0], e))
      return n;
  return -1;
}
var Sb = Array.prototype, Pb = Sb.splice;
function kb(t) {
  var e = this.__data__, n = tr(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Pb.call(e, n, 1), --this.size, !0;
}
function Eb(t) {
  var e = this.__data__, n = tr(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Ob(t) {
  return tr(this.__data__, t) > -1;
}
function zb(t, e) {
  var n = this.__data__, r = tr(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function $t(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
$t.prototype.clear = Nb;
$t.prototype.delete = kb;
$t.prototype.get = Eb;
$t.prototype.has = Ob;
$t.prototype.set = zb;
var Re = Gt(Mt, "Map");
function Cb() {
  this.size = 0, this.__data__ = {
    hash: new Xt(),
    map: new (Re || $t)(),
    string: new Xt()
  };
}
function Ib(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function er(t, e) {
  var n = t.__data__;
  return Ib(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Rb(t) {
  var e = er(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function jb(t) {
  return er(this, t).get(t);
}
function Fb(t) {
  return er(this, t).has(t);
}
function Lb(t, e) {
  var n = er(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function At(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
At.prototype.clear = Cb;
At.prototype.delete = Rb;
At.prototype.get = jb;
At.prototype.has = Fb;
At.prototype.set = Lb;
var Db = "Expected a function";
function Ci(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Db);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (Ci.Cache || At)(), n;
}
Ci.Cache = At;
var qb = 500;
function Hb(t) {
  var e = Ci(t, function(r) {
    return n.size === qb && n.clear(), r;
  }), n = e.cache;
  return e;
}
var Xb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bb = /\\(\\)?/g, Ub = Hb(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Xb, function(n, r, i, a) {
    e.push(i ? a.replace(Bb, "$1") : r || n);
  }), e;
});
function nr(t) {
  return t == null ? "" : iu(t);
}
function rr(t, e) {
  return et(t) ? t : zi(t, e) ? [t] : Ub(nr(t));
}
function Be(t) {
  if (typeof t == "string" || Kn(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Ii(t, e) {
  e = rr(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Be(e[n++])];
  return n && n == r ? t : void 0;
}
function Gb(t, e, n) {
  var r = t == null ? void 0 : Ii(t, e);
  return r === void 0 ? n : r;
}
function gu(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Yb = du(Object.getPrototypeOf, Object);
function Vb(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + e];
  return a;
}
function Kb(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, !e && n >= r ? t : Vb(t, e, n);
}
var Wb = "\\ud800-\\udfff", Zb = "\\u0300-\\u036f", Jb = "\\ufe20-\\ufe2f", Qb = "\\u20d0-\\u20ff", tx = Zb + Jb + Qb, ex = "\\ufe0e\\ufe0f", nx = "\\u200d", rx = RegExp("[" + nx + Wb + tx + ex + "]");
function _u(t) {
  return rx.test(t);
}
function ix(t) {
  return t.split("");
}
var yu = "\\ud800-\\udfff", ax = "\\u0300-\\u036f", ox = "\\ufe20-\\ufe2f", sx = "\\u20d0-\\u20ff", ux = ax + ox + sx, lx = "\\ufe0e\\ufe0f", cx = "[" + yu + "]", Zr = "[" + ux + "]", Jr = "\\ud83c[\\udffb-\\udfff]", fx = "(?:" + Zr + "|" + Jr + ")", mu = "[^" + yu + "]", vu = "(?:\\ud83c[\\udde6-\\uddff]){2}", wu = "[\\ud800-\\udbff][\\udc00-\\udfff]", hx = "\\u200d", bu = fx + "?", xu = "[" + lx + "]?", px = "(?:" + hx + "(?:" + [mu, vu, wu].join("|") + ")" + xu + bu + ")*", dx = xu + bu + px, gx = "(?:" + [mu + Zr + "?", Zr, vu, wu, cx].join("|") + ")", _x = RegExp(Jr + "(?=" + Jr + ")|" + gx + dx, "g");
function yx(t) {
  return t.match(_x) || [];
}
function mx(t) {
  return _u(t) ? yx(t) : ix(t);
}
function vx(t) {
  return function(e) {
    e = nr(e);
    var n = _u(e) ? mx(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? Kb(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var wx = vx("toUpperCase");
function bx(t) {
  return wx(nr(t).toLowerCase());
}
function xx() {
  this.__data__ = new $t(), this.size = 0;
}
function Mx(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function $x(t) {
  return this.__data__.get(t);
}
function Ax(t) {
  return this.__data__.has(t);
}
var Tx = 200;
function Nx(t, e) {
  var n = this.__data__;
  if (n instanceof $t) {
    var r = n.__data__;
    if (!Re || r.length < Tx - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new At(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function dt(t) {
  var e = this.__data__ = new $t(t);
  this.size = e.size;
}
dt.prototype.clear = xx;
dt.prototype.delete = Mx;
dt.prototype.get = $x;
dt.prototype.has = Ax;
dt.prototype.set = Nx;
function Sx(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (a[i++] = o);
  }
  return a;
}
function Mu() {
  return [];
}
var Px = Object.prototype, kx = Px.propertyIsEnumerable, go = Object.getOwnPropertySymbols, $u = go ? function(t) {
  return t == null ? [] : (t = Object(t), Sx(go(t), function(e) {
    return kx.call(t, e);
  }));
} : Mu, Ex = Object.getOwnPropertySymbols, Ox = Ex ? function(t) {
  for (var e = []; t; )
    gu(e, $u(t)), t = Yb(t);
  return e;
} : Mu;
function Au(t, e, n) {
  var r = e(t);
  return et(t) ? r : gu(r, n(t));
}
function _o(t) {
  return Au(t, Qn, $u);
}
function zx(t) {
  return Au(t, pb, Ox);
}
var Qr = Gt(Mt, "DataView"), ti = Gt(Mt, "Promise"), ei = Gt(Mt, "Set"), yo = "[object Map]", Cx = "[object Object]", mo = "[object Promise]", vo = "[object Set]", wo = "[object WeakMap]", bo = "[object DataView]", Ix = Ut(Qr), Rx = Ut(Re), jx = Ut(ti), Fx = Ut(ei), Lx = Ut(Kr), ht = fe;
(Qr && ht(new Qr(new ArrayBuffer(1))) != bo || Re && ht(new Re()) != yo || ti && ht(ti.resolve()) != mo || ei && ht(new ei()) != vo || Kr && ht(new Kr()) != wo) && (ht = function(t) {
  var e = fe(t), n = e == Cx ? t.constructor : void 0, r = n ? Ut(n) : "";
  if (r)
    switch (r) {
      case Ix:
        return bo;
      case Rx:
        return yo;
      case jx:
        return mo;
      case Fx:
        return vo;
      case Lx:
        return wo;
    }
  return e;
});
var xo = Mt.Uint8Array, Dx = "__lodash_hash_undefined__";
function qx(t) {
  return this.__data__.set(t, Dx), this;
}
function Hx(t) {
  return this.__data__.has(t);
}
function In(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new At(); ++e < n; )
    this.add(t[e]);
}
In.prototype.add = In.prototype.push = qx;
In.prototype.has = Hx;
function Xx(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Bx(t, e) {
  return t.has(e);
}
var Ux = 1, Gx = 2;
function Tu(t, e, n, r, i, a) {
  var o = n & Ux, s = t.length, l = e.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(e);
  if (u && c)
    return u == e && c == t;
  var h = -1, f = !0, p = n & Gx ? new In() : void 0;
  for (a.set(t, e), a.set(e, t); ++h < s; ) {
    var d = t[h], y = e[h];
    if (r)
      var w = o ? r(y, d, h, e, t, a) : r(d, y, h, t, e, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Xx(e, function(b, g) {
        if (!Bx(p, g) && (d === b || i(d, b, n, r, a)))
          return p.push(g);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === y || i(d, y, n, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), f;
}
function Nu(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function Yx(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var Vx = 1, Kx = 2, Wx = "[object Boolean]", Zx = "[object Date]", Jx = "[object Error]", Qx = "[object Map]", t2 = "[object Number]", e2 = "[object RegExp]", n2 = "[object Set]", r2 = "[object String]", i2 = "[object Symbol]", a2 = "[object ArrayBuffer]", o2 = "[object DataView]", Mo = Pt ? Pt.prototype : void 0, vr = Mo ? Mo.valueOf : void 0;
function s2(t, e, n, r, i, a, o) {
  switch (n) {
    case o2:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case a2:
      return !(t.byteLength != e.byteLength || !a(new xo(t), new xo(e)));
    case Wx:
    case Zx:
    case t2:
      return Jn(+t, +e);
    case Jx:
      return t.name == e.name && t.message == e.message;
    case e2:
    case r2:
      return t == e + "";
    case Qx:
      var s = Nu;
    case n2:
      var l = r & Vx;
      if (s || (s = Yx), t.size != e.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      r |= Kx, o.set(t, e);
      var c = Tu(s(t), s(e), r, i, a, o);
      return o.delete(t), c;
    case i2:
      if (vr)
        return vr.call(t) == vr.call(e);
  }
  return !1;
}
var u2 = 1, l2 = Object.prototype, c2 = l2.hasOwnProperty;
function f2(t, e, n, r, i, a) {
  var o = n & u2, s = _o(t), l = s.length, u = _o(e), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in e : c2.call(e, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(e);
  if (p && d)
    return p == e && d == t;
  var y = !0;
  a.set(t, e), a.set(e, t);
  for (var w = o; ++h < l; ) {
    f = s[h];
    var b = t[f], g = e[f];
    if (r)
      var M = o ? r(g, b, f, e, t, a) : r(b, g, f, t, e, a);
    if (!(M === void 0 ? b === g || i(b, g, n, r, a) : M)) {
      y = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (y && !w) {
    var _ = t.constructor, m = e.constructor;
    _ != m && "constructor" in t && "constructor" in e && !(typeof _ == "function" && _ instanceof _ && typeof m == "function" && m instanceof m) && (y = !1);
  }
  return a.delete(t), a.delete(e), y;
}
var h2 = 1, $o = "[object Arguments]", Ao = "[object Array]", an = "[object Object]", p2 = Object.prototype, To = p2.hasOwnProperty;
function d2(t, e, n, r, i, a) {
  var o = et(t), s = et(e), l = o ? Ao : ht(t), u = s ? Ao : ht(e);
  l = l == $o ? an : l, u = u == $o ? an : u;
  var c = l == an, h = u == an, f = l == u;
  if (f && Wr(t)) {
    if (!Wr(e))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new dt()), o || hu(t) ? Tu(t, e, n, r, i, a) : s2(t, e, l, n, r, i, a);
  if (!(n & h2)) {
    var p = c && To.call(t, "__wrapped__"), d = h && To.call(e, "__wrapped__");
    if (p || d) {
      var y = p ? t.value() : t, w = d ? e.value() : e;
      return a || (a = new dt()), i(y, w, n, r, a);
    }
  }
  return f ? (a || (a = new dt()), f2(t, e, n, r, i, a)) : !1;
}
function Ri(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !ue(t) && !ue(e) ? t !== t && e !== e : d2(t, e, n, r, Ri, i);
}
var g2 = 1, _2 = 2;
function y2(t, e, n, r) {
  var i = n.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = n[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = n[i];
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new dt(), h;
      if (!(h === void 0 ? Ri(u, l, g2 | _2, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Su(t) {
  return t === t && !vt(t);
}
function m2(t) {
  for (var e = Qn(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Su(i)];
  }
  return e;
}
function Pu(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function v2(t) {
  var e = m2(t);
  return e.length == 1 && e[0][2] ? Pu(e[0][0], e[0][1]) : function(n) {
    return n === t || y2(n, t, e);
  };
}
function w2(t, e) {
  return t != null && e in Object(t);
}
function ku(t, e, n) {
  e = rr(e, t);
  for (var r = -1, i = e.length, a = !1; ++r < i; ) {
    var o = Be(e[r]);
    if (!(a = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Oi(i) && Zn(o, i) && (et(t) || lu(t)));
}
function b2(t, e) {
  return t != null && ku(t, e, w2);
}
var x2 = 1, M2 = 2;
function $2(t, e) {
  return zi(t) && Su(e) ? Pu(Be(t), e) : function(n) {
    var r = Gb(n, t);
    return r === void 0 && r === e ? b2(n, t) : Ri(e, r, x2 | M2);
  };
}
function A2(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function T2(t) {
  return function(e) {
    return Ii(e, t);
  };
}
function N2(t) {
  return zi(t) ? A2(Be(t)) : T2(t);
}
function Eu(t) {
  return typeof t == "function" ? t : t == null ? au : typeof t == "object" ? et(t) ? $2(t[0], t[1]) : v2(t) : N2(t);
}
function S2(t) {
  return function(e, n, r) {
    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
      var l = o[++i];
      if (n(a[l], l, a) === !1)
        break;
    }
    return e;
  };
}
var P2 = S2();
function k2(t, e) {
  return t && P2(t, e, Qn);
}
function E2(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Xe(n))
      return t(n, r);
    for (var i = n.length, a = -1, o = Object(n); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var Ou = E2(k2);
function O2(t) {
  return typeof t == "function" ? t : au;
}
function Ue(t, e) {
  var n = et(t) ? pw : Ou;
  return n(t, O2(e));
}
function z2(t, e) {
  return Wn(e, function(n) {
    return [n, t[n]];
  });
}
function C2(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var I2 = "[object Map]", R2 = "[object Set]";
function j2(t) {
  return function(e) {
    var n = ht(e);
    return n == I2 ? Nu(e) : n == R2 ? C2(e) : z2(e, t(e));
  };
}
var zu = j2(Qn);
function F2(t, e) {
  var n = -1, r = Xe(t) ? Array(t.length) : [];
  return Ou(t, function(i, a, o) {
    r[++n] = e(i, a, o);
  }), r;
}
function je(t, e) {
  var n = et(t) ? Wn : F2;
  return n(t, Eu(e));
}
var L2 = Object.prototype, D2 = L2.hasOwnProperty;
function q2(t, e) {
  return t != null && D2.call(t, e);
}
function Cu(t, e) {
  return t != null && ku(t, e, q2);
}
function H2(t, e, n, r) {
  if (!vt(t))
    return t;
  e = rr(e, t);
  for (var i = -1, a = e.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var l = Be(e[i]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != o) {
      var c = s[l];
      u = void 0, u === void 0 && (u = vt(c) ? c : Zn(e[i + 1]) ? [] : {});
    }
    vw(s, l, u), s = s[l];
  }
  return t;
}
function X2(t, e, n) {
  for (var r = -1, i = e.length, a = {}; ++r < i; ) {
    var o = e[r], s = Ii(t, o);
    n(s, o) && H2(a, rr(o, t), s);
  }
  return a;
}
function Iu(t, e) {
  if (t == null)
    return {};
  var n = Wn(zx(t), function(r) {
    return [r];
  });
  return e = Eu(e), X2(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var B2 = Math.ceil, U2 = Math.max;
function G2(t, e, n, r) {
  for (var i = -1, a = U2(B2((e - t) / (n || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += n;
  return o;
}
function Y2(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && bw(e, n, r) && (n = r = void 0), e = _r(e), n === void 0 ? (n = e, e = 0) : n = _r(n), r = r === void 0 ? e < n ? 1 : -1 : _r(r), G2(e, n, r);
  };
}
var wr = Y2();
function V2() {
  var t = arguments, e = nr(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
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
}, Ru = (t) => je(zu(t), (e) => {
  e[1].id = e[0], e[1].label = e[1].label || V2(bx(e[0]), /_/g, " ");
}), ju = (t) => je(zu(t), (e) => e[1]), Fu = (t, e) => Ue(t, (n, r) => n.widget = e[r]), K2 = (t) => Iu(t, (e) => Cu(e, "range")), W2 = (t) => Iu(t, (e) => Cu(e, "choices"));
kt().domain([0, 360]).range([0, 2 * Math.PI]);
kt().range([0, 360]).domain([0, 2 * Math.PI]);
const G = () => 2 * (Math.random() - 0.5), Y = (t) => Math.cos(t * Math.PI / 180), V = (t) => Math.sin(t * Math.PI / 180), Lu = K2(x), Du = W2(x);
Ru(Lu);
Ru(Du);
const qu = ju(Lu), ji = ju(Du), Ge = je(
  qu,
  (t) => v1().id(t.id).label(t.label).range(t.range).value(t.default).size(A.widgets.slider_size)
);
console.log(ji);
const ni = je(
  ji,
  (t) => w1().choices(je(t.choices, (e) => e.name)).id(t.id).value(t.default).orientation(A.widgets.radio_orientation).labelposition(A.widgets.radio_label_position).buttonsize(A.widgets.radio_button_size).size(A.widgets.radio_size).shape(A.widgets.radio_shape)
);
Fu(qu, Ge);
Fu(ji, ni);
const No = Ge.slice(0, 3), So = Ge.slice(3, 6), Po = Ge.slice(6), Fi = tu().actions(["rewind"]), Li = tu().actions(["rewind"]), Z2 = [Fi, Li], J2 = (t, e) => {
  const n = e.position(A.widgets.length_slider_anchor.x, wr(No.length).map((o) => A.widgets.length_slider_anchor.y + A.widgets.slider_gap * o)), r = e.position(A.widgets.angle_slider_anchor.x, wr(So.length).map((o) => A.widgets.angle_slider_anchor.y + A.widgets.slider_gap * o)), i = e.position(A.widgets.other_slider_anchor.x, wr(Po.length).map((o) => A.widgets.other_slider_anchor.y + A.widgets.slider_gap * o)), a = e.position(A.widgets.radio_anchor.x, A.widgets.radio_anchor.y);
  No.forEach((o, s) => o.position(n[s])), So.forEach((o, s) => o.position(r[s])), Po.forEach((o, s) => o.position(i[s])), ni[0].position(a), Fi.position(e.position(A.widgets.reset_noise_angle_button_anchor.x, A.widgets.reset_noise_angle_button_anchor.y)).size(A.widgets.button_size), Li.position(e.position(A.widgets.reset_noise_length_button_anchor.x, A.widgets.reset_noise_length_button_anchor.y)).size(A.widgets.button_size), t.selectAll(null).data(Ge).enter().append(gr), t.selectAll(null).data(ni).enter().append(gr), t.selectAll(null).data(Z2).enter().append(gr);
};
var St = [];
const Q2 = { depth: 0, x: 0, y: 0, l: 1, dx: 0, dy: 0, parent: [] };
var Fe = { depth: 0, x: 0, y: 1, l: 1, dx: 0, dy: 1, children: [], parent: Q2 };
const tM = x.N, Hu = (t, e) => {
  t.parent != null && e.push([t, t.parent]), t.children.length > 0 && Ue(t.children, (n) => {
    Hu(n, e);
  });
}, Xu = (t, e) => {
  const n = x.length_left_branch.widget.value(), r = x.length_central_branch.widget.value(), i = x.length_right_branch.widget.value(), a = x.angle_left_branch.widget.value(), o = x.angle_central_branch.widget.value(), s = x.angle_right_branch.widget.value(), l = x.noise_angle.widget.value(), u = x.noise_length.widget.value();
  if (t.depth < e) {
    let c = t.depth + 1;
    t.sigma1theta = G(), t.sigma2theta = G(), t.sigma3theta = G(), t.sigma1r = G(), t.sigma2r = G(), t.sigma3r = G();
    let h = n * (1 + u * t.sigma1r), f = r * (1 + u * t.sigma2r), p = i * (1 + u * t.sigma3r), d = a * (1 + l * t.sigma1theta), y = o * (1 + l * t.sigma2theta), w = s * (1 + l * t.sigma3theta), b = h * Y(d) * t.dx - h * V(d) * t.dy, g = h * V(d) * t.dx + h * Y(d) * t.dy, M = f * Y(y) * t.dx - f * V(y) * t.dy, _ = f * V(y) * t.dx + f * Y(y) * t.dy, m = p * Y(w) * t.dx - p * V(w) * t.dy, N = p * V(w) * t.dx + p * Y(w) * t.dy;
    t.children = [], t.children.push({ depth: c, dx: b, dy: g, x: t.x + b, y: t.y + g, l: t.l * h, children: [], parent: t }), t.children.push({ depth: c, dx: M, dy: _, x: t.x + M, y: t.y + _, l: t.l * f, children: [], parent: t }), t.children.push({ depth: c, dx: m, dy: N, x: t.x + m, y: t.y + N, l: t.l * p, children: [], parent: t }), t.children.forEach(function(E) {
      Xu(E, e);
    });
  }
  return t;
}, Bu = (t) => {
  const e = x.length_left_branch.widget.value(), n = x.length_central_branch.widget.value(), r = x.length_right_branch.widget.value(), i = x.angle_left_branch.widget.value(), a = x.angle_central_branch.widget.value(), o = x.angle_right_branch.widget.value(), s = x.noise_angle.widget.value(), l = x.noise_length.widget.value();
  if (t.children.length != 0) {
    let u = e * (1 + l * t.sigma1r), c = n * (1 + l * t.sigma2r), h = r * (1 + l * t.sigma3r), f = i * (1 + s * t.sigma1theta), p = a * (1 + s * t.sigma2theta), d = o * (1 + s * t.sigma3theta), y = u * Y(f) * t.dx - u * V(f) * t.dy, w = u * V(f) * t.dx + u * Y(f) * t.dy, b = c * Y(p) * t.dx - c * V(p) * t.dy, g = c * V(p) * t.dx + c * Y(p) * t.dy, M = h * Y(d) * t.dx - h * V(d) * t.dy, _ = h * V(d) * t.dx + h * Y(d) * t.dy;
    t.children[0].dx = y, t.children[0].dy = w, t.children[0].x = t.x + y, t.children[0].y = t.y + w, t.children[0].l = t.l * e, t.children[1].dx = b, t.children[1].dy = g, t.children[1].x = t.x + b, t.children[1].y = t.y + g, t.children[1].l = t.l * n, t.children[2].dx = M, t.children[2].dy = _, t.children[2].x = t.x + M, t.children[2].y = t.y + _, t.children[2].l = t.l * r, t.children.forEach(function(m) {
      Bu(m);
    });
  }
}, eM = () => {
  x.presets.widget.update(), Xu(Fe, tM), Hu(Fe, St);
}, nM = () => {
  Bu(Fe);
}, Uu = x.lw_min, rM = x.N;
var S, $e, Ae;
const gt = kt(), _t = kt(), ir = kt().range([Math.log(x.thickness_scale.widget.value()), Math.log(Uu)]).domain([0, rM]), Gu = (t) => t ? {
  pen: () => "rgba(255,255,255)"
} : {
  pen: () => "rgba(0,0,0)"
};
var Rn = Gu(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  Rn = Gu(e.matches), Di(), S.clearRect(0, 0, $e, Ae), Ue(St, (n) => {
    S.beginPath(), S.moveTo(gt(n[0].x), _t(n[0].y)), S.lineTo(gt(n[1].x), _t(n[1].y)), S.lineWidth = Math.exp(ir(n[0].depth)), S.lineCap = "round", S.strokeStyle = Rn.pen(), S.stroke();
  });
});
function Di() {
  var t = [], e = [];
  t[0] = Hi(St, function(i) {
    return i[0].x < i[1].x ? i[0].x : i[1].x;
  }), t[1] = qi(St, function(i) {
    return i[0].x > i[1].x ? i[0].x : i[1].x;
  }), e[0] = Hi(St, function(i) {
    return i[0].y < i[1].y ? i[0].y : i[1].y;
  }), e[1] = qi(St, function(i) {
    return i[0].y > i[1].y ? i[0].y : i[1].y;
  }), ir.range([Math.log(x.thickness_scale.widget.value()), Math.log(Uu)]);
  var n = t[1] - t[0], r = e[1] - e[0];
  r > n ? (_t.domain(e), gt.domain([t[0] / n * r, t[1] / n * r])) : (_t.domain([e[0] / r * n, e[1] / r * n]), gt.domain(t));
}
const iM = (t, e) => {
  $e = e.display_size.width, Ae = e.display_size.height, gt.range([e.display_margin.left, $e - e.display_margin.right]), _t.range([Ae - e.display_margin.bottom, e.display_margin.top]), Di(), S = t.node().getContext("2d"), S.clearRect(0, 0, $e, Ae), Ue(St, (n) => {
    S.beginPath(), S.moveTo(gt(n[0].x), _t(n[0].y)), S.lineTo(gt(n[1].x), _t(n[1].y)), S.lineWidth = Math.exp(ir(n[0].depth)), S.lineCap = "round", S.strokeStyle = Rn.pen(), S.stroke();
  });
}, aM = (t, e) => {
  Di(), S = t.node().getContext("2d"), S.clearRect(0, 0, $e, Ae), Ue(St, (n) => {
    S.beginPath(), S.moveTo(gt(n[0].x), _t(n[0].y)), S.lineTo(gt(n[1].x), _t(n[1].y)), S.lineWidth = Math.exp(ir(n[0].depth)), S.lineCap = "round", S.strokeStyle = Rn.pen(), S.stroke();
  });
}, oM = kt().domain([0, 2]).range([0, A.plot.width]), sM = kt().domain([-1, 1]).range([A.plot.height, 0]);
ip().x(function(t) {
  return oM(t.x);
}).y(function(t) {
  return sM(t.y);
});
const uM = (t, e) => {
  const n = x.length_left_branch.widget.value(), r = x.length_central_branch.widget.value(), i = x.length_right_branch.widget.value(), a = x.angle_left_branch.widget.value(), o = x.angle_central_branch.widget.value(), s = x.angle_right_branch.widget.value(), l = e.position(A.plot.anchor.x, A.plot.anchor.y);
  console.log("cartoon init at ", l);
  const u = t.append("g").attr("class", Nt.cartoon).attr("transform", "translate(" + l.x + "," + l.y + ")");
  u.append("line").attr("class", Nt.trunk).attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", -200 / 2), u.selectAll("." + Nt.branch).data([[i, s], [r, o], [n, a]]).enter().append("line").attr("class", Nt.branch).attr("x1", 0).attr("x2", function(c) {
    return -200 / 2 * c[0] * Math.sin(c[1] / 180 * Math.PI);
  }).attr("y1", -200 / 2).attr("y2", function(c) {
    return -200 / 2 - A.plot.height / 2 * c[0] * Math.cos(c[1] / 180 * Math.PI);
  });
}, lM = (t) => {
  const e = x.length_left_branch.widget.value(), n = x.length_central_branch.widget.value(), r = x.length_right_branch.widget.value(), i = x.angle_left_branch.widget.value(), a = x.angle_central_branch.widget.value(), o = x.angle_right_branch.widget.value();
  console.log(e), t.select("." + Nt.cartoon).selectAll("." + Nt.branch).data([[r, o], [n, a], [e, i]]).attr("x1", 0).attr("x2", function(l) {
    return -200 / 2 * l[0] * Math.sin(l[1] / 180 * Math.PI);
  }).attr("y1", -200 / 2).attr("y2", function(l) {
    return -200 / 2 - A.plot.height / 2 * l[0] * Math.cos(l[1] / 180 * Math.PI);
  });
};
function cM(t, e, n, r) {
  eM(), iM(t, r), uM(e, n);
}
function U(t, e, n) {
  nM(), aM(t), lM(e);
}
x.N;
const Yu = (t) => (t.children.length != 0 && (t.sigma1theta = G(), t.sigma2theta = G(), t.sigma3theta = G(), t.children.forEach(function(e) {
  Yu(e);
})), t), Vu = (t) => (t.children.length != 0 && (t.sigma1r = G(), t.sigma2r = G(), t.sigma3r = G(), t.children.forEach(function(e) {
  Vu(e);
})), t), fM = (t, e, n) => {
  x.length_left_branch.widget.update(() => U(t, e)), x.length_right_branch.widget.update(() => U(t, e)), x.length_central_branch.widget.update(() => U(t, e)), x.angle_left_branch.widget.update(() => U(t, e)), x.angle_right_branch.widget.update(() => U(t, e)), x.angle_central_branch.widget.update(() => U(t, e)), x.thickness_scale.widget.update(() => U(t, e)), x.noise_angle.widget.update(() => U(t, e)), x.noise_length.widget.update(() => U(t, e)), x.presets.widget.update(() => {
    const r = x.presets.choices[x.presets.widget.value()];
    x.length_left_branch.widget.reset(e, r.r1), x.length_central_branch.widget.reset(e, r.r2), x.length_right_branch.widget.reset(e, r.r3), x.angle_left_branch.widget.reset(e, r.theta3), x.angle_central_branch.widget.reset(e, r.theta2), x.angle_right_branch.widget.reset(e, r.theta1), x.noise_angle.widget.reset(e, r.sigma), x.noise_length.widget.reset(e, r.eta), x.thickness_scale.widget.reset(e, r.lw_max), U(t, e);
  }), Fi.update(() => {
    Yu(Fe), U(t, e);
  }), Li.update(() => {
    Vu(Fe), U(t, e);
  });
}, hM = {
  name: "@explorables/weeds_and_trees",
  title: "Weeds & Trees",
  subtitle: "Lindenmayer Systems",
  description: "Natural, Self-Similar Growth Patterns by Simple Rules",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function pM(t, e = Ku) {
  const n = k1(t, e), r = n.display, i = n.controls, a = n.grid;
  return J2(i, a), fM(r, i), cM(r, i, a, e), {
    halt() {
    },
    reset() {
    },
    config: e,
    meta: hM
  };
}
export {
  Ku as config,
  pM as default,
  pM as load,
  hM as meta
};
