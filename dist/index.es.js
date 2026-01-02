(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:border-1{border-style:var(--tw-border-style);border-width:1px}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:border-white{border-color:var(--tw-color-white)}.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}._agent_gdeeu_1{fill:#000}._displayPanel_gdeeu_5,._controlPanel_gdeeu_10{display:block}@media (prefers-color-scheme: dark){._agent_gdeeu_1{fill:#fff}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Eu = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: "tw:border-1 tw-border-black tw:dark:border-white tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function Wn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ou(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function $o(t) {
  let n, e, r;
  t.length !== 2 ? (n = Wn, e = (s, l) => Wn(t(s), l), r = (s, l) => t(s) - l) : (n = t === Wn || t === Ou ? t : Cu, e = t, r = t);
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
function Cu() {
  return 0;
}
function Iu(t) {
  return t === null ? NaN : +t;
}
const Ru = $o(Wn), qu = Ru.right;
$o(Iu).center;
const ju = Math.sqrt(50), Fu = Math.sqrt(10), Du = Math.sqrt(2);
function oe(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= ju ? 10 : a >= Fu ? 5 : a >= Du ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? oe(t, n, e * 2) : [s, l, u];
}
function Lu(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? oe(n, t, e) : oe(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function _r(t, n, e) {
  return n = +n, t = +t, e = +e, oe(t, n, e)[2];
}
function Hu(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? _r(n, t, e) : _r(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var Bu = { value: () => {
} };
function No() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Zn(e);
}
function Zn(t) {
  this._ = t;
}
function Xu(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Zn.prototype = No.prototype = {
  constructor: Zn,
  on: function(t, n) {
    var e = this._, r = Xu(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = Uu(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = Di(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Di(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new Zn(t);
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
function Uu(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Di(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Bu, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var yr = "http://www.w3.org/1999/xhtml";
const Li = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: yr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ke(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Li.hasOwnProperty(n) ? { space: Li[n], local: t } : t;
}
function Yu(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === yr && n.documentElement.namespaceURI === yr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Gu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function To(t) {
  var n = ke(t);
  return (n.local ? Gu : Yu)(n);
}
function Vu() {
}
function Qr(t) {
  return t == null ? Vu : function() {
    return this.querySelector(t);
  };
}
function Ku(t) {
  typeof t != "function" && (t = Qr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new F(r, this._parents);
}
function Wu(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Zu() {
  return [];
}
function So(t) {
  return t == null ? Zu : function() {
    return this.querySelectorAll(t);
  };
}
function Ju(t) {
  return function() {
    return Wu(t.apply(this, arguments));
  };
}
function Qu(t) {
  typeof t == "function" ? t = Ju(t) : t = So(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new F(r, i);
}
function Po(t) {
  return function() {
    return this.matches(t);
  };
}
function ko(t) {
  return function(n) {
    return n.matches(t);
  };
}
var tl = Array.prototype.find;
function nl(t) {
  return function() {
    return tl.call(this.children, t);
  };
}
function el() {
  return this.firstElementChild;
}
function rl(t) {
  return this.select(t == null ? el : nl(typeof t == "function" ? t : ko(t)));
}
var il = Array.prototype.filter;
function al() {
  return Array.from(this.children);
}
function ol(t) {
  return function() {
    return il.call(this.children, t);
  };
}
function sl(t) {
  return this.selectAll(t == null ? al : ol(typeof t == "function" ? t : ko(t)));
}
function ul(t) {
  typeof t != "function" && (t = Po(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new F(r, this._parents);
}
function zo(t) {
  return new Array(t.length);
}
function ll() {
  return new F(this._enter || this._groups.map(zo), this._parents);
}
function se(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
se.prototype = {
  constructor: se,
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
function cl(t) {
  return function() {
    return t;
  };
}
function fl(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new se(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function hl(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new se(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function pl(t) {
  return t.__data__;
}
function dl(t, n) {
  if (!arguments.length) return Array.from(this, pl);
  var e = n ? hl : fl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = cl(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = gl(t.call(c, c && c.__data__, u, r)), d = p.length, _ = s[u] = new Array(d), w = o[u] = new Array(d), y = l[u] = new Array(f);
    e(c, h, _, w, y, p, n);
    for (var x = 0, M = 0, g, m; x < d; ++x)
      if (g = _[x]) {
        for (x >= M && (M = x + 1); !(m = w[M]) && ++M < d; ) ;
        g._next = m || null;
      }
  }
  return o = new F(o, r), o._enter = s, o._exit = l, o;
}
function gl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function _l() {
  return new F(this._exit || this._groups.map(zo), this._parents);
}
function yl(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function vl(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new F(s, this._parents);
}
function ml() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function wl(t) {
  t || (t = bl);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(n);
  }
  return new F(i, this._parents).order();
}
function bl(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function xl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ml() {
  return Array.from(this);
}
function Al() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function $l() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Nl() {
  return !this.node();
}
function Tl(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Sl(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Pl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function kl(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function zl(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function El(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Ol(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Cl(t, n) {
  var e = ke(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Pl : Sl : typeof n == "function" ? e.local ? Ol : El : e.local ? zl : kl)(e, n));
}
function Eo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Il(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Rl(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ql(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function jl(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Il : typeof n == "function" ? ql : Rl)(t, n, e ?? "")) : Yt(this.node(), t);
}
function Yt(t, n) {
  return t.style.getPropertyValue(n) || Eo(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Fl(t) {
  return function() {
    delete this[t];
  };
}
function Dl(t, n) {
  return function() {
    this[t] = n;
  };
}
function Ll(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Hl(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Fl : typeof n == "function" ? Ll : Dl)(t, n)) : this.node()[t];
}
function Oo(t) {
  return t.trim().split(/^|\s+/);
}
function ti(t) {
  return t.classList || new Co(t);
}
function Co(t) {
  this._node = t, this._names = Oo(t.getAttribute("class") || "");
}
Co.prototype = {
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
function Io(t, n) {
  for (var e = ti(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Ro(t, n) {
  for (var e = ti(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Bl(t) {
  return function() {
    Io(this, t);
  };
}
function Xl(t) {
  return function() {
    Ro(this, t);
  };
}
function Ul(t, n) {
  return function() {
    (n.apply(this, arguments) ? Io : Ro)(this, t);
  };
}
function Yl(t, n) {
  var e = Oo(t + "");
  if (arguments.length < 2) {
    for (var r = ti(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Ul : n ? Bl : Xl)(e, n));
}
function Gl() {
  this.textContent = "";
}
function Vl(t) {
  return function() {
    this.textContent = t;
  };
}
function Kl(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Wl(t) {
  return arguments.length ? this.each(t == null ? Gl : (typeof t == "function" ? Kl : Vl)(t)) : this.node().textContent;
}
function Zl() {
  this.innerHTML = "";
}
function Jl(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ql(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function tc(t) {
  return arguments.length ? this.each(t == null ? Zl : (typeof t == "function" ? Ql : Jl)(t)) : this.node().innerHTML;
}
function nc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ec() {
  return this.each(nc);
}
function rc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ic() {
  return this.each(rc);
}
function ac(t) {
  var n = typeof t == "function" ? t : To(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function oc() {
  return null;
}
function sc(t, n) {
  var e = typeof t == "function" ? t : To(t), r = n == null ? oc : typeof n == "function" ? n : Qr(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function uc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function lc() {
  return this.each(uc);
}
function cc() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function fc() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function hc(t) {
  return this.select(t ? fc : cc);
}
function pc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function dc(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function gc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function _c(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function yc(t, n, e) {
  return function() {
    var r = this.__on, i, a = dc(n);
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
function vc(t, n, e) {
  var r = gc(t + ""), i, a = r.length, o;
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
  for (s = n ? yc : _c, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function qo(t, n, e) {
  var r = Eo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function mc(t, n) {
  return function() {
    return qo(this, t, n);
  };
}
function wc(t, n) {
  return function() {
    return qo(this, t, n.apply(this, arguments));
  };
}
function bc(t, n) {
  return this.each((typeof n == "function" ? wc : mc)(t, n));
}
function* xc() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var jo = [null];
function F(t, n) {
  this._groups = t, this._parents = n;
}
function Pn() {
  return new F([[document.documentElement]], jo);
}
function Mc() {
  return this;
}
F.prototype = Pn.prototype = {
  constructor: F,
  select: Ku,
  selectAll: Qu,
  selectChild: rl,
  selectChildren: sl,
  filter: ul,
  data: dl,
  enter: ll,
  exit: _l,
  join: yl,
  merge: vl,
  selection: Mc,
  order: ml,
  sort: wl,
  call: xl,
  nodes: Ml,
  node: Al,
  size: $l,
  empty: Nl,
  each: Tl,
  attr: Cl,
  style: jl,
  property: Hl,
  classed: Yl,
  text: Wl,
  html: tc,
  raise: ec,
  lower: ic,
  append: ac,
  insert: sc,
  remove: lc,
  clone: hc,
  datum: pc,
  on: vc,
  dispatch: bc,
  [Symbol.iterator]: xc
};
function Ac(t) {
  return typeof t == "string" ? new F([[document.querySelector(t)]], [document.documentElement]) : new F([[t]], jo);
}
function ni(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Fo(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function kn() {
}
var yn = 0.7, ue = 1 / yn, Bt = "\\s*([+-]?\\d+)\\s*", vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $c = /^#([0-9a-f]{3,8})$/, Nc = new RegExp(`^rgb\\(${Bt},${Bt},${Bt}\\)$`), Tc = new RegExp(`^rgb\\(${tt},${tt},${tt}\\)$`), Sc = new RegExp(`^rgba\\(${Bt},${Bt},${Bt},${vn}\\)$`), Pc = new RegExp(`^rgba\\(${tt},${tt},${tt},${vn}\\)$`), kc = new RegExp(`^hsl\\(${vn},${tt},${tt}\\)$`), zc = new RegExp(`^hsla\\(${vn},${tt},${tt},${vn}\\)$`), Hi = {
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
ni(kn, kt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Bi,
  // Deprecated! Use color.formatHex.
  formatHex: Bi,
  formatHex8: Ec,
  formatHsl: Oc,
  formatRgb: Xi,
  toString: Xi
});
function Bi() {
  return this.rgb().formatHex();
}
function Ec() {
  return this.rgb().formatHex8();
}
function Oc() {
  return Do(this).formatHsl();
}
function Xi() {
  return this.rgb().formatRgb();
}
function kt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = $c.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ui(n) : e === 3 ? new R(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Rn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Rn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Nc.exec(t)) ? new R(n[1], n[2], n[3], 1) : (n = Tc.exec(t)) ? new R(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Sc.exec(t)) ? Rn(n[1], n[2], n[3], n[4]) : (n = Pc.exec(t)) ? Rn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = kc.exec(t)) ? Vi(n[1], n[2] / 100, n[3] / 100, 1) : (n = zc.exec(t)) ? Vi(n[1], n[2] / 100, n[3] / 100, n[4]) : Hi.hasOwnProperty(t) ? Ui(Hi[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function Ui(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Rn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new R(t, n, e, r);
}
function Cc(t) {
  return t instanceof kn || (t = kt(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function le(t, n, e, r) {
  return arguments.length === 1 ? Cc(t) : new R(t, n, e, r ?? 1);
}
function R(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ni(R, le, Fo(kn, {
  brighter(t) {
    return t = t == null ? ue : Math.pow(ue, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? yn : Math.pow(yn, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new R(St(this.r), St(this.g), St(this.b), ce(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Yi,
  // Deprecated! Use color.formatHex.
  formatHex: Yi,
  formatHex8: Ic,
  formatRgb: Gi,
  toString: Gi
}));
function Yi() {
  return `#${Nt(this.r)}${Nt(this.g)}${Nt(this.b)}`;
}
function Ic() {
  return `#${Nt(this.r)}${Nt(this.g)}${Nt(this.b)}${Nt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Gi() {
  const t = ce(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${St(this.r)}, ${St(this.g)}, ${St(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ce(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function St(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Nt(t) {
  return t = St(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Vi(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new G(t, n, e, r);
}
function Do(t) {
  if (t instanceof G) return new G(t.h, t.s, t.l, t.opacity);
  if (t instanceof kn || (t = kt(t)), !t) return new G();
  if (t instanceof G) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new G(o, s, l, t.opacity);
}
function Rc(t, n, e, r) {
  return arguments.length === 1 ? Do(t) : new G(t, n, e, r ?? 1);
}
function G(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ni(G, Rc, Fo(kn, {
  brighter(t) {
    return t = t == null ? ue : Math.pow(ue, t), new G(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? yn : Math.pow(yn, t), new G(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new R(
      er(t >= 240 ? t - 240 : t + 120, i, r),
      er(t, i, r),
      er(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new G(Ki(this.h), qn(this.s), qn(this.l), ce(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ce(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ki(this.h)}, ${qn(this.s) * 100}%, ${qn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ki(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function qn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function er(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ei = (t) => () => t;
function qc(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function jc(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Fc(t) {
  return (t = +t) == 1 ? Lo : function(n, e) {
    return e - n ? jc(n, e, t) : ei(isNaN(n) ? e : n);
  };
}
function Lo(t, n) {
  var e = n - t;
  return e ? qc(t, e) : ei(isNaN(t) ? n : t);
}
const fe = function t(n) {
  var e = Fc(n);
  function r(i, a) {
    var o = e((i = le(i)).r, (a = le(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = Lo(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Dc(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function Lc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Hc(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = ri(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function Bc(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function U(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Xc(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ri(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var vr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rr = new RegExp(vr.source, "g");
function Uc(t) {
  return function() {
    return t;
  };
}
function Yc(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Ho(t, n) {
  var e = vr.lastIndex = rr.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = vr.exec(t)) && (i = rr.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: U(r, i) })), e = rr.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? Yc(l[0].x) : Uc(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function ri(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ei(n) : (e === "number" ? U : e === "string" ? (r = kt(n)) ? (n = r, fe) : Ho : n instanceof kt ? fe : n instanceof Date ? Bc : Lc(n) ? Dc : Array.isArray(n) ? Hc : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Xc : U)(t, n);
}
function Gc(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Wi = 180 / Math.PI, mr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Bo(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * Wi,
    skewX: Math.atan(l) * Wi,
    scaleX: o,
    scaleY: s
  };
}
var jn;
function Vc(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? mr : Bo(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Kc(t) {
  return t == null || (jn || (jn = document.createElementNS("http://www.w3.org/2000/svg", "g")), jn.setAttribute("transform", t), !(t = jn.transform.baseVal.consolidate())) ? mr : (t = t.matrix, Bo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Xo(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var _ = p.push("translate(", null, n, null, e);
      d.push({ i: _ - 4, x: U(u, h) }, { i: _ - 2, x: U(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: U(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: U(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: _ - 4, x: U(u, h) }, { i: _ - 2, x: U(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, _ = f.length, w; ++d < _; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var Wc = Xo(Vc, "px, ", "px)", "deg)"), Zc = Xo(Kc, ", ", ")", ")"), Gt = 0, un = 0, rn = 0, Uo = 1e3, he, ln, pe = 0, zt = 0, ze = 0, mn = typeof performance == "object" && performance.now ? performance : Date, Yo = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ee() {
  return zt || (Yo(Jc), zt = mn.now() + ze);
}
function Jc() {
  zt = 0;
}
function wn() {
  this._call = this._time = this._next = null;
}
wn.prototype = Go.prototype = {
  constructor: wn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Ee() : +e) + (n == null ? 0 : +n), !this._next && ln !== this && (ln ? ln._next = this : he = this, ln = this), this._call = t, this._time = e, wr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, wr());
  }
};
function Go(t, n, e) {
  var r = new wn();
  return r.restart(t, n, e), r;
}
function Qc() {
  Ee(), ++Gt;
  for (var t = he, n; t; )
    (n = zt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Gt;
}
function Zi() {
  zt = (pe = mn.now()) + ze, Gt = un = 0;
  try {
    Qc();
  } finally {
    Gt = 0, nf(), zt = 0;
  }
}
function tf() {
  var t = mn.now(), n = t - pe;
  n > Uo && (ze -= n, pe = t);
}
function nf() {
  for (var t, n = he, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : he = e);
  ln = t, wr(r);
}
function wr(t) {
  if (!Gt) {
    un && (un = clearTimeout(un));
    var n = t - zt;
    n > 24 ? (t < 1 / 0 && (un = setTimeout(Zi, t - mn.now() - ze)), rn && (rn = clearInterval(rn))) : (rn || (pe = mn.now(), rn = setInterval(tf, Uo)), Gt = 1, Yo(Zi));
  }
}
function Ji(t, n, e) {
  var r = new wn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function ef(t, n, e) {
  var r = new wn(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? Ee() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var rf = No("start", "end", "cancel", "interrupt"), af = [], Vo = 0, Qi = 1, br = 2, Jn = 3, ta = 4, xr = 5, Qn = 6;
function Oe(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  of(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: rf,
    tween: af,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Vo
  });
}
function ii(t, n) {
  var e = Z(t, n);
  if (e.state > Vo) throw new Error("too late; already scheduled");
  return e;
}
function rt(t, n) {
  var e = Z(t, n);
  if (e.state > Jn) throw new Error("too late; already running");
  return e;
}
function Z(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function of(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Go(a, 0, e.time);
  function a(u) {
    e.state = Qi, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (e.state !== Qi) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === Jn) return Ji(o);
        p.state === ta ? (p.state = Qn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = Qn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Ji(function() {
      e.state === Jn && (e.state = ta, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = br, e.on.call("start", t, t.__data__, e.index, e.group), e.state === br) {
      for (e.state = Jn, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = xr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === xr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = Qn, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function sf(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > br && r.state < xr, r.state = Qn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function uf(t) {
  return this.each(function() {
    sf(this, t);
  });
}
function lf(t, n) {
  var e, r;
  return function() {
    var i = rt(this, t), a = i.tween;
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
function cf(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = rt(this, t), o = a.tween;
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
function ff(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Z(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? lf : cf)(e, t, n));
}
function ai(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = rt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return Z(i, r).value[n];
  };
}
function Ko(t, n) {
  var e;
  return (typeof n == "number" ? U : n instanceof kt ? fe : (e = kt(n)) ? (n = e, fe) : Ho)(t, n);
}
function hf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function pf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function df(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function gf(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function _f(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function yf(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function vf(t, n) {
  var e = ke(t), r = e === "transform" ? Zc : Ko;
  return this.attrTween(t, typeof n == "function" ? (e.local ? yf : _f)(e, r, ai(this, "attr." + t, n)) : n == null ? (e.local ? pf : hf)(e) : (e.local ? gf : df)(e, r, n));
}
function mf(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function wf(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function bf(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && wf(t, a)), e;
  }
  return i._value = n, i;
}
function xf(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && mf(t, a)), e;
  }
  return i._value = n, i;
}
function Mf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = ke(t);
  return this.tween(e, (r.local ? bf : xf)(r, n));
}
function Af(t, n) {
  return function() {
    ii(this, t).delay = +n.apply(this, arguments);
  };
}
function $f(t, n) {
  return n = +n, function() {
    ii(this, t).delay = n;
  };
}
function Nf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Af : $f)(n, t)) : Z(this.node(), n).delay;
}
function Tf(t, n) {
  return function() {
    rt(this, t).duration = +n.apply(this, arguments);
  };
}
function Sf(t, n) {
  return n = +n, function() {
    rt(this, t).duration = n;
  };
}
function Pf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Tf : Sf)(n, t)) : Z(this.node(), n).duration;
}
function kf(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    rt(this, t).ease = n;
  };
}
function zf(t) {
  var n = this._id;
  return arguments.length ? this.each(kf(n, t)) : Z(this.node(), n).ease;
}
function Ef(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    rt(this, t).ease = e;
  };
}
function Of(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Ef(this._id, t));
}
function Cf(t) {
  typeof t != "function" && (t = Po(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new ct(r, this._parents, this._name, this._id);
}
function If(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new ct(o, this._parents, this._name, this._id);
}
function Rf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function qf(t, n, e) {
  var r, i, a = Rf(n) ? ii : rt;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function jf(t, n) {
  var e = this._id;
  return arguments.length < 2 ? Z(this.node(), e).on.on(t) : this.each(qf(e, t, n));
}
function Ff(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Df() {
  return this.on("end.remove", Ff(this._id));
}
function Lf(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Qr(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Oe(u[f], n, e, f, u, Z(c, e)));
  return new ct(a, this._parents, n, e);
}
function Hf(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = So(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = Z(c, e), _ = 0, w = f.length; _ < w; ++_)
          (p = f[_]) && Oe(p, n, e, _, f, d);
        a.push(f), o.push(c);
      }
  return new ct(a, o, n, e);
}
var Bf = Pn.prototype.constructor;
function Xf() {
  return new Bf(this._groups, this._parents);
}
function Uf(t, n) {
  var e, r, i;
  return function() {
    var a = Yt(this, t), o = (this.style.removeProperty(t), Yt(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function Wo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Yf(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = Yt(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Gf(t, n, e) {
  var r, i, a;
  return function() {
    var o = Yt(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Yt(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function Vf(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = rt(this, t), u = l.on, c = l.value[a] == null ? s || (s = Wo(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function Kf(t, n, e) {
  var r = (t += "") == "transform" ? Wc : Ko;
  return n == null ? this.styleTween(t, Uf(t, r)).on("end.style." + t, Wo(t)) : typeof n == "function" ? this.styleTween(t, Gf(t, r, ai(this, "style." + t, n))).each(Vf(this._id, t)) : this.styleTween(t, Yf(t, r, n), e).on("end.style." + t, null);
}
function Wf(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Zf(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && Wf(t, o, e)), r;
  }
  return a._value = n, a;
}
function Jf(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Zf(t, n, e ?? ""));
}
function Qf(t) {
  return function() {
    this.textContent = t;
  };
}
function th(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function nh(t) {
  return this.tween("text", typeof t == "function" ? th(ai(this, "text", t)) : Qf(t == null ? "" : t + ""));
}
function eh(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function rh(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && eh(i)), n;
  }
  return r._value = t, r;
}
function ih(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, rh(t));
}
function ah() {
  for (var t = this._name, n = this._id, e = Zo(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = Z(l, n);
        Oe(l, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new ct(r, this._parents, t, e);
}
function oh() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = rt(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var sh = 0;
function ct(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Zo() {
  return ++sh;
}
var at = Pn.prototype;
ct.prototype = {
  constructor: ct,
  select: Lf,
  selectAll: Hf,
  selectChild: at.selectChild,
  selectChildren: at.selectChildren,
  filter: Cf,
  merge: If,
  selection: Xf,
  transition: ah,
  call: at.call,
  nodes: at.nodes,
  node: at.node,
  size: at.size,
  empty: at.empty,
  each: at.each,
  on: jf,
  attr: vf,
  attrTween: Mf,
  style: Kf,
  styleTween: Jf,
  text: nh,
  textTween: ih,
  remove: Df,
  tween: ff,
  delay: Nf,
  duration: Pf,
  ease: zf,
  easeVarying: Of,
  end: oh,
  [Symbol.iterator]: at[Symbol.iterator]
};
function uh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var lh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: uh
};
function ch(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function fh(t) {
  var n, e;
  t instanceof ct ? (n = t._id, t = t._name) : (n = Zo(), (e = lh).time = Ee(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Oe(l, t, n, u, o, e || ch(l, n));
  return new ct(r, this._parents, t, n);
}
Pn.prototype.interrupt = uf;
Pn.prototype.transition = fh;
function hh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function de(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Vt(t) {
  return t = de(Math.abs(t)), t ? t[1] : NaN;
}
function ph(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function dh(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var gh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ge(t) {
  if (!(n = gh.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new oi({
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
ge.prototype = oi.prototype;
function oi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
oi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function _h(t) {
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
var Jo;
function yh(t, n) {
  var e = de(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (Jo = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + de(t, Math.max(0, n + a - 1))[0];
}
function na(t, n) {
  var e = de(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ea = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: hh,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => na(t * 100, n),
  r: na,
  s: yh,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ra(t) {
  return t;
}
var ia = Array.prototype.map, aa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function vh(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? ra : ph(ia.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? ra : dh(ia.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = ge(h);
    var f = h.fill, p = h.align, d = h.sign, _ = h.symbol, w = h.zero, y = h.width, x = h.comma, M = h.precision, g = h.trim, m = h.type;
    m === "n" ? (x = !0, m = "g") : ea[m] || (M === void 0 && (M = 12), g = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var S = _ === "$" ? e : _ === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", k = _ === "$" ? r : /[%p]/.test(m) ? o : "", O = ea[m], L = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function H(v) {
      var C = S, A = k, I, At, j;
      if (m === "c")
        A = O(v) + A, v = "";
      else {
        v = +v;
        var B = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : O(Math.abs(v), M), g && (v = _h(v)), B && +v == 0 && d !== "+" && (B = !1), C = (B ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + C, A = (m === "s" ? aa[8 + Jo / 3] : "") + A + (B && d === "(" ? ")" : ""), L) {
          for (I = -1, At = v.length; ++I < At; )
            if (j = v.charCodeAt(I), 48 > j || j > 57) {
              A = (j === 46 ? i + v.slice(I + 1) : v.slice(I)) + A, v = v.slice(0, I);
              break;
            }
        }
      }
      x && !w && (v = n(v, 1 / 0));
      var X = C.length + v.length + A.length, T = X < y ? new Array(y - X + 1).join(f) : "";
      switch (x && w && (v = n(T + v, T.length ? y - A.length : 1 / 0), T = ""), p) {
        case "<":
          v = C + v + A + T;
          break;
        case "=":
          v = C + T + v + A;
          break;
        case "^":
          v = T.slice(0, X = T.length >> 1) + C + v + A + T.slice(X);
          break;
        default:
          v = T + C + v + A;
          break;
      }
      return a(v);
    }
    return H.toString = function() {
      return h + "";
    }, H;
  }
  function c(h, f) {
    var p = u((h = ge(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(Vt(f) / 3))) * 3, _ = Math.pow(10, -d), w = aa[8 + d / 3];
    return function(y) {
      return p(_ * y) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var Fn, Qo, ts;
mh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function mh(t) {
  return Fn = vh(t), Qo = Fn.format, ts = Fn.formatPrefix, Fn;
}
function wh(t) {
  return Math.max(0, -Vt(Math.abs(t)));
}
function bh(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Vt(n) / 3))) * 3 - Vt(Math.abs(t)));
}
function xh(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Vt(n) - Vt(t)) + 1;
}
function Mh(t, n) {
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
function Ah(t) {
  return function() {
    return t;
  };
}
function $h(t) {
  return +t;
}
var oa = [0, 1];
function Lt(t) {
  return t;
}
function Mr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Ah(isNaN(n) ? NaN : 0.5);
}
function Nh(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Th(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Mr(i, r), a = e(o, a)) : (r = Mr(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function Sh(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Mr(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = qu(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function Ph(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function kh() {
  var t = oa, n = oa, e = ri, r, i, a, o = Lt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return o !== Lt && (o = Nh(t[0], t[f - 1])), s = f > 2 ? Sh : Th, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), U)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, $h), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = Gc, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Lt, c()) : o !== Lt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function zh() {
  return kh()(Lt, Lt);
}
function Eh(t, n, e, r) {
  var i = Hu(t, n, e), a;
  switch (r = ge(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = bh(i, o)) && (r.precision = a), ts(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = xh(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = wh(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Qo(r);
}
function Oh(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Lu(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Eh(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = _r(o, s, e), u === l)
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
function zn() {
  var t = zh();
  return t.copy = function() {
    return Ph(t, zn());
  }, Mh.apply(t, arguments), Oh(t);
}
var Dn = le(), Ch = Math.PI / 3, Ih = Math.PI * 2 / 3;
function ns(t) {
  var n;
  return t = (0.5 - t) * Math.PI, Dn.r = 255 * (n = Math.sin(t)) * n, Dn.g = 255 * (n = Math.sin(t + Ch)) * n, Dn.b = 255 * (n = Math.sin(t + Ih)) * n, Dn + "";
}
function cn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
cn.prototype = {
  constructor: cn,
  scale: function(t) {
    return t === 1 ? this : new cn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new cn(this.k, this.x + this.k * t, this.y + this.k * n);
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
cn.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_1aazq_40{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:16px}._widget_1aazq_40 ._title_1aazq_51{font-size:20px;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_1aazq_40 ._label_1aazq_58{fill:var(--color-text);stroke:none}._widget_1aazq_40 ._lit_1aazq_63{fill:var(--color-lit)}._button_1aazq_67>._symbol_1aazq_67,._radio_1aazq_68>._radiobutton_1aazq_68>._symbol_1aazq_67{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_1aazq_40 ._symbol_1aazq_67._selected_1aazq_74,._toggle_1aazq_75._selected_1aazq_74,._widget_1aazq_40 ._symbol_1aazq_67._selected_1aazq_74._lit_1aazq_63{fill:var(--color-selected)}._widget_1aazq_40 ._symbol_1aazq_67._lit_1aazq_63{fill:var(--color-lit-symbol)}._slider_1aazq_84>._track_1aazq_84,._toggle_1aazq_75>._track_1aazq_84{pointer-events:none}._slider_1aazq_84>._track_overlay_1aazq_89,._toggle_1aazq_75>._track_overlay_1aazq_89{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_1aazq_84>._handle_1aazq_97,._toggle_1aazq_75>._handle_1aazq_97{fill:var(--color-handle)}")), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
function te(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Rh(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function es(t) {
  let n, e, r;
  t.length !== 2 ? (n = te, e = (s, l) => te(t(s), l), r = (s, l) => t(s) - l) : (n = t === te || t === Rh ? t : qh, e = t, r = t);
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
function qh() {
  return 0;
}
function jh(t) {
  return t === null ? NaN : +t;
}
const Fh = es(te), Dh = Fh.right;
es(jh).center;
const Lh = Math.sqrt(50), Hh = Math.sqrt(10), Bh = Math.sqrt(2);
function _e(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Lh ? 10 : a >= Hh ? 5 : a >= Bh ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? _e(t, n, e * 2) : [s, l, u];
}
function Xh(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? _e(n, t, e) : _e(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function Ar(t, n, e) {
  return n = +n, t = +t, e = +e, _e(t, n, e)[2];
}
function Uh(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Ar(n, t, e) : Ar(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ln(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Yh(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
var Gh = { value: () => {
} };
function si() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new ne(e);
}
function ne(t) {
  this._ = t;
}
function Vh(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
ne.prototype = si.prototype = {
  constructor: ne,
  on: function(t, n) {
    var e = this._, r = Vh(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = Kh(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = sa(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = sa(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new ne(t);
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
function Kh(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function sa(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Gh, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var $r = "http://www.w3.org/1999/xhtml";
const ua = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: $r,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ce(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), ua.hasOwnProperty(n) ? { space: ua[n], local: t } : t;
}
function Wh(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === $r && n.documentElement.namespaceURI === $r ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Zh(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function rs(t) {
  var n = Ce(t);
  return (n.local ? Zh : Wh)(n);
}
function Jh() {
}
function ui(t) {
  return t == null ? Jh : function() {
    return this.querySelector(t);
  };
}
function Qh(t) {
  typeof t != "function" && (t = ui(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new D(r, this._parents);
}
function tp(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function np() {
  return [];
}
function is(t) {
  return t == null ? np : function() {
    return this.querySelectorAll(t);
  };
}
function ep(t) {
  return function() {
    return tp(t.apply(this, arguments));
  };
}
function rp(t) {
  typeof t == "function" ? t = ep(t) : t = is(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new D(r, i);
}
function as(t) {
  return function() {
    return this.matches(t);
  };
}
function os(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ip = Array.prototype.find;
function ap(t) {
  return function() {
    return ip.call(this.children, t);
  };
}
function op() {
  return this.firstElementChild;
}
function sp(t) {
  return this.select(t == null ? op : ap(typeof t == "function" ? t : os(t)));
}
var up = Array.prototype.filter;
function lp() {
  return Array.from(this.children);
}
function cp(t) {
  return function() {
    return up.call(this.children, t);
  };
}
function fp(t) {
  return this.selectAll(t == null ? lp : cp(typeof t == "function" ? t : os(t)));
}
function hp(t) {
  typeof t != "function" && (t = as(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new D(r, this._parents);
}
function ss(t) {
  return new Array(t.length);
}
function pp() {
  return new D(this._enter || this._groups.map(ss), this._parents);
}
function ye(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
ye.prototype = {
  constructor: ye,
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
function dp(t) {
  return function() {
    return t;
  };
}
function gp(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new ye(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function _p(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new ye(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function yp(t) {
  return t.__data__;
}
function vp(t, n) {
  if (!arguments.length) return Array.from(this, yp);
  var e = n ? _p : gp, r = this._parents, i = this._groups;
  typeof t != "function" && (t = dp(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = mp(t.call(c, c && c.__data__, u, r)), d = p.length, _ = s[u] = new Array(d), w = o[u] = new Array(d), y = l[u] = new Array(f);
    e(c, h, _, w, y, p, n);
    for (var x = 0, M = 0, g, m; x < d; ++x)
      if (g = _[x]) {
        for (x >= M && (M = x + 1); !(m = w[M]) && ++M < d; ) ;
        g._next = m || null;
      }
  }
  return o = new D(o, r), o._enter = s, o._exit = l, o;
}
function mp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function wp() {
  return new D(this._exit || this._groups.map(ss), this._parents);
}
function bp(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function xp(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new D(s, this._parents);
}
function Mp() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Ap(t) {
  t || (t = $p);
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
function $p(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Np() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Tp() {
  return Array.from(this);
}
function Sp() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Pp() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function kp() {
  return !this.node();
}
function zp(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Ep(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Op(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Cp(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ip(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Rp(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function qp(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function jp(t, n) {
  var e = Ce(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Op : Ep : typeof n == "function" ? e.local ? qp : Rp : e.local ? Ip : Cp)(e, n));
}
function us(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Fp(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Dp(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Lp(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Hp(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Fp : typeof n == "function" ? Lp : Dp)(t, n, e ?? "")) : Kt(this.node(), t);
}
function Kt(t, n) {
  return t.style.getPropertyValue(n) || us(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Bp(t) {
  return function() {
    delete this[t];
  };
}
function Xp(t, n) {
  return function() {
    this[t] = n;
  };
}
function Up(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Yp(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Bp : typeof n == "function" ? Up : Xp)(t, n)) : this.node()[t];
}
function ls(t) {
  return t.trim().split(/^|\s+/);
}
function li(t) {
  return t.classList || new cs(t);
}
function cs(t) {
  this._node = t, this._names = ls(t.getAttribute("class") || "");
}
cs.prototype = {
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
function fs(t, n) {
  for (var e = li(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function hs(t, n) {
  for (var e = li(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Gp(t) {
  return function() {
    fs(this, t);
  };
}
function Vp(t) {
  return function() {
    hs(this, t);
  };
}
function Kp(t, n) {
  return function() {
    (n.apply(this, arguments) ? fs : hs)(this, t);
  };
}
function Wp(t, n) {
  var e = ls(t + "");
  if (arguments.length < 2) {
    for (var r = li(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Kp : n ? Gp : Vp)(e, n));
}
function Zp() {
  this.textContent = "";
}
function Jp(t) {
  return function() {
    this.textContent = t;
  };
}
function Qp(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function td(t) {
  return arguments.length ? this.each(t == null ? Zp : (typeof t == "function" ? Qp : Jp)(t)) : this.node().textContent;
}
function nd() {
  this.innerHTML = "";
}
function ed(t) {
  return function() {
    this.innerHTML = t;
  };
}
function rd(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function id(t) {
  return arguments.length ? this.each(t == null ? nd : (typeof t == "function" ? rd : ed)(t)) : this.node().innerHTML;
}
function ad() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function od() {
  return this.each(ad);
}
function sd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ud() {
  return this.each(sd);
}
function ld(t) {
  var n = typeof t == "function" ? t : rs(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function cd() {
  return null;
}
function fd(t, n) {
  var e = typeof t == "function" ? t : rs(t), r = n == null ? cd : typeof n == "function" ? n : ui(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function hd() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function pd() {
  return this.each(hd);
}
function dd() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function gd() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function _d(t) {
  return this.select(t ? gd : dd);
}
function yd(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function vd(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function md(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function wd(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function bd(t, n, e) {
  return function() {
    var r = this.__on, i, a = vd(n);
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
function xd(t, n, e) {
  var r = md(t + ""), i, a = r.length, o;
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
  for (s = n ? bd : wd, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function ps(t, n, e) {
  var r = us(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Md(t, n) {
  return function() {
    return ps(this, t, n);
  };
}
function Ad(t, n) {
  return function() {
    return ps(this, t, n.apply(this, arguments));
  };
}
function $d(t, n) {
  return this.each((typeof n == "function" ? Ad : Md)(t, n));
}
function* Nd() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var ds = [null];
function D(t, n) {
  this._groups = t, this._parents = n;
}
function En() {
  return new D([[document.documentElement]], ds);
}
function Td() {
  return this;
}
D.prototype = En.prototype = {
  constructor: D,
  select: Qh,
  selectAll: rp,
  selectChild: sp,
  selectChildren: fp,
  filter: hp,
  data: vp,
  enter: pp,
  exit: wp,
  join: bp,
  merge: xp,
  selection: Td,
  order: Mp,
  sort: Ap,
  call: Np,
  nodes: Tp,
  node: Sp,
  size: Pp,
  empty: kp,
  each: zp,
  attr: jp,
  style: Hp,
  property: Yp,
  classed: Wp,
  text: td,
  html: id,
  raise: od,
  lower: ud,
  append: ld,
  insert: fd,
  remove: pd,
  clone: _d,
  datum: yd,
  on: xd,
  dispatch: $d,
  [Symbol.iterator]: Nd
};
function E(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], ds);
}
function Sd(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Nr(t, n) {
  if (t = Sd(t), n === void 0 && (n = t.currentTarget), n) {
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
const Pd = { passive: !1 }, bn = { capture: !0, passive: !1 };
function ir(t) {
  t.stopImmediatePropagation();
}
function Xt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function kd(t) {
  var n = t.document.documentElement, e = E(t).on("dragstart.drag", Xt, bn);
  "onselectstart" in n ? e.on("selectstart.drag", Xt, bn) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function zd(t, n) {
  var e = t.document.documentElement, r = E(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Xt, bn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Hn = (t) => () => t;
function Tr(t, {
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
Tr.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Ed(t) {
  return !t.ctrlKey && !t.button;
}
function Od() {
  return this.parentNode;
}
function Cd(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Id() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Rd() {
  var t = Ed, n = Od, e = Cd, r = Id, i = {}, a = si("start", "drag", "end"), o = 0, s, l, u, c, h = 0;
  function f(g) {
    g.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", y, Pd).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(g, m) {
    if (!(c || !t.call(this, g, m))) {
      var S = M(this, n.call(this, g, m), g, m, "mouse");
      S && (E(g.view).on("mousemove.drag", d, bn).on("mouseup.drag", _, bn), kd(g.view), ir(g), u = !1, s = g.clientX, l = g.clientY, S("start", g));
    }
  }
  function d(g) {
    if (Xt(g), !u) {
      var m = g.clientX - s, S = g.clientY - l;
      u = m * m + S * S > h;
    }
    i.mouse("drag", g);
  }
  function _(g) {
    E(g.view).on("mousemove.drag mouseup.drag", null), zd(g.view, u), Xt(g), i.mouse("end", g);
  }
  function w(g, m) {
    if (t.call(this, g, m)) {
      var S = g.changedTouches, k = n.call(this, g, m), O = S.length, L, H;
      for (L = 0; L < O; ++L)
        (H = M(this, k, g, m, S[L].identifier, S[L])) && (ir(g), H("start", g, S[L]));
    }
  }
  function y(g) {
    var m = g.changedTouches, S = m.length, k, O;
    for (k = 0; k < S; ++k)
      (O = i[m[k].identifier]) && (Xt(g), O("drag", g, m[k]));
  }
  function x(g) {
    var m = g.changedTouches, S = m.length, k, O;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), k = 0; k < S; ++k)
      (O = i[m[k].identifier]) && (ir(g), O("end", g, m[k]));
  }
  function M(g, m, S, k, O, L) {
    var H = a.copy(), v = Nr(L || S, m), C, A, I;
    if ((I = e.call(g, new Tr("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: O,
      active: o,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), k)) != null)
      return C = I.x - v[0] || 0, A = I.y - v[1] || 0, function At(j, B, X) {
        var T = v, nr;
        switch (j) {
          case "start":
            i[O] = At, nr = o++;
            break;
          case "end":
            delete i[O], --o;
          // falls through
          case "drag":
            v = Nr(X || B, m), nr = o;
            break;
        }
        H.call(
          j,
          g,
          new Tr(j, {
            sourceEvent: B,
            subject: I,
            target: f,
            identifier: O,
            active: nr,
            x: v[0] + C,
            y: v[1] + A,
            dx: v[0] - T[0],
            dy: v[1] - T[1],
            dispatch: H
          }),
          k
        );
      };
  }
  return f.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : Hn(!!g), f) : t;
  }, f.container = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Hn(g), f) : n;
  }, f.subject = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Hn(g), f) : e;
  }, f.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Hn(!!g), f) : r;
  }, f.on = function() {
    var g = a.on.apply(a, arguments);
    return g === a ? f : g;
  }, f.clickDistance = function(g) {
    return arguments.length ? (h = (g = +g) * g, f) : Math.sqrt(h);
  }, f;
}
function ci(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function gs(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function On() {
}
var xn = 0.7, ve = 1 / xn, Ut = "\\s*([+-]?\\d+)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", qd = /^#([0-9a-f]{3,8})$/, jd = new RegExp(`^rgb\\(${Ut},${Ut},${Ut}\\)$`), Fd = new RegExp(`^rgb\\(${nt},${nt},${nt}\\)$`), Dd = new RegExp(`^rgba\\(${Ut},${Ut},${Ut},${Mn}\\)$`), Ld = new RegExp(`^rgba\\(${nt},${nt},${nt},${Mn}\\)$`), Hd = new RegExp(`^hsl\\(${Mn},${nt},${nt}\\)$`), Bd = new RegExp(`^hsla\\(${Mn},${nt},${nt},${Mn}\\)$`), la = {
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
ci(On, Et, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ca,
  // Deprecated! Use color.formatHex.
  formatHex: ca,
  formatHex8: Xd,
  formatHsl: Ud,
  formatRgb: fa,
  toString: fa
});
function ca() {
  return this.rgb().formatHex();
}
function Xd() {
  return this.rgb().formatHex8();
}
function Ud() {
  return _s(this).formatHsl();
}
function fa() {
  return this.rgb().formatRgb();
}
function Et(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = qd.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? ha(n) : e === 3 ? new q(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Bn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Bn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = jd.exec(t)) ? new q(n[1], n[2], n[3], 1) : (n = Fd.exec(t)) ? new q(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Dd.exec(t)) ? Bn(n[1], n[2], n[3], n[4]) : (n = Ld.exec(t)) ? Bn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Hd.exec(t)) ? ga(n[1], n[2] / 100, n[3] / 100, 1) : (n = Bd.exec(t)) ? ga(n[1], n[2] / 100, n[3] / 100, n[4]) : la.hasOwnProperty(t) ? ha(la[t]) : t === "transparent" ? new q(NaN, NaN, NaN, 0) : null;
}
function ha(t) {
  return new q(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Bn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new q(t, n, e, r);
}
function Yd(t) {
  return t instanceof On || (t = Et(t)), t ? (t = t.rgb(), new q(t.r, t.g, t.b, t.opacity)) : new q();
}
function Sr(t, n, e, r) {
  return arguments.length === 1 ? Yd(t) : new q(t, n, e, r ?? 1);
}
function q(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ci(q, Sr, gs(On, {
  brighter(t) {
    return t = t == null ? ve : Math.pow(ve, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? xn : Math.pow(xn, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new q(Pt(this.r), Pt(this.g), Pt(this.b), me(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: pa,
  // Deprecated! Use color.formatHex.
  formatHex: pa,
  formatHex8: Gd,
  formatRgb: da,
  toString: da
}));
function pa() {
  return `#${Tt(this.r)}${Tt(this.g)}${Tt(this.b)}`;
}
function Gd() {
  return `#${Tt(this.r)}${Tt(this.g)}${Tt(this.b)}${Tt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function da() {
  const t = me(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Pt(this.r)}, ${Pt(this.g)}, ${Pt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function me(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Pt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Tt(t) {
  return t = Pt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ga(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new V(t, n, e, r);
}
function _s(t) {
  if (t instanceof V) return new V(t.h, t.s, t.l, t.opacity);
  if (t instanceof On || (t = Et(t)), !t) return new V();
  if (t instanceof V) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new V(o, s, l, t.opacity);
}
function Vd(t, n, e, r) {
  return arguments.length === 1 ? _s(t) : new V(t, n, e, r ?? 1);
}
function V(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ci(V, Vd, gs(On, {
  brighter(t) {
    return t = t == null ? ve : Math.pow(ve, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? xn : Math.pow(xn, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new q(
      ar(t >= 240 ? t - 240 : t + 120, i, r),
      ar(t, i, r),
      ar(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new V(_a(this.h), Xn(this.s), Xn(this.l), me(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = me(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${_a(this.h)}, ${Xn(this.s) * 100}%, ${Xn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function _a(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Xn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ar(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const fi = (t) => () => t;
function Kd(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Wd(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Zd(t) {
  return (t = +t) == 1 ? ys : function(n, e) {
    return e - n ? Wd(n, e, t) : fi(isNaN(n) ? e : n);
  };
}
function ys(t, n) {
  var e = n - t;
  return e ? Kd(t, e) : fi(isNaN(t) ? n : t);
}
const we = function t(n) {
  var e = Zd(n);
  function r(i, a) {
    var o = e((i = Sr(i)).r, (a = Sr(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = ys(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Jd(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function Qd(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function t0(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = hi(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function n0(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function Y(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function e0(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = hi(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var Pr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, or = new RegExp(Pr.source, "g");
function r0(t) {
  return function() {
    return t;
  };
}
function i0(t) {
  return function(n) {
    return t(n) + "";
  };
}
function vs(t, n) {
  var e = Pr.lastIndex = or.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Pr.exec(t)) && (i = or.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: Y(r, i) })), e = or.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? i0(l[0].x) : r0(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function hi(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? fi(n) : (e === "number" ? Y : e === "string" ? (r = Et(n)) ? (n = r, we) : vs : n instanceof Et ? we : n instanceof Date ? n0 : Qd(n) ? Jd : Array.isArray(n) ? t0 : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? e0 : Y)(t, n);
}
function a0(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var ya = 180 / Math.PI, ms = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ws(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * ya,
    skewX: Math.atan(l) * ya,
    scaleX: o,
    scaleY: s
  };
}
var Un;
function o0(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? ms : ws(n.a, n.b, n.c, n.d, n.e, n.f);
}
function s0(t) {
  return t == null || (Un || (Un = document.createElementNS("http://www.w3.org/2000/svg", "g")), Un.setAttribute("transform", t), !(t = Un.transform.baseVal.consolidate())) ? ms : (t = t.matrix, ws(t.a, t.b, t.c, t.d, t.e, t.f));
}
function bs(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var _ = p.push("translate(", null, n, null, e);
      d.push({ i: _ - 4, x: Y(u, h) }, { i: _ - 2, x: Y(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Y(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Y(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: _ - 4, x: Y(u, h) }, { i: _ - 2, x: Y(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, _ = f.length, w; ++d < _; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var u0 = bs(o0, "px, ", "px)", "deg)"), l0 = bs(s0, ", ", ")", ")"), Wt = 0, fn = 0, an = 0, xs = 1e3, be, hn, xe = 0, Ot = 0, Ie = 0, An = typeof performance == "object" && performance.now ? performance : Date, Ms = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function pi() {
  return Ot || (Ms(c0), Ot = An.now() + Ie);
}
function c0() {
  Ot = 0;
}
function Me() {
  this._call = this._time = this._next = null;
}
Me.prototype = As.prototype = {
  constructor: Me,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? pi() : +e) + (n == null ? 0 : +n), !this._next && hn !== this && (hn ? hn._next = this : be = this, hn = this), this._call = t, this._time = e, kr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, kr());
  }
};
function As(t, n, e) {
  var r = new Me();
  return r.restart(t, n, e), r;
}
function f0() {
  pi(), ++Wt;
  for (var t = be, n; t; )
    (n = Ot - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Wt;
}
function va() {
  Ot = (xe = An.now()) + Ie, Wt = fn = 0;
  try {
    f0();
  } finally {
    Wt = 0, p0(), Ot = 0;
  }
}
function h0() {
  var t = An.now(), n = t - xe;
  n > xs && (Ie -= n, xe = t);
}
function p0() {
  for (var t, n = be, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : be = e);
  hn = t, kr(r);
}
function kr(t) {
  if (!Wt) {
    fn && (fn = clearTimeout(fn));
    var n = t - Ot;
    n > 24 ? (t < 1 / 0 && (fn = setTimeout(va, t - An.now() - Ie)), an && (an = clearInterval(an))) : (an || (xe = An.now(), an = setInterval(h0, xs)), Wt = 1, Ms(va));
  }
}
function ma(t, n, e) {
  var r = new Me();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var d0 = si("start", "end", "cancel", "interrupt"), g0 = [], $s = 0, wa = 1, zr = 2, ee = 3, ba = 4, Er = 5, re = 6;
function Re(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  _0(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: d0,
    tween: g0,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: $s
  });
}
function di(t, n) {
  var e = J(t, n);
  if (e.state > $s) throw new Error("too late; already scheduled");
  return e;
}
function it(t, n) {
  var e = J(t, n);
  if (e.state > ee) throw new Error("too late; already running");
  return e;
}
function J(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function _0(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = As(a, 0, e.time);
  function a(u) {
    e.state = wa, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (e.state !== wa) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === ee) return ma(o);
        p.state === ba ? (p.state = re, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = re, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (ma(function() {
      e.state === ee && (e.state = ba, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = zr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === zr) {
      for (e.state = ee, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Er, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === Er && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = re, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function y0(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > zr && r.state < Er, r.state = re, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function v0(t) {
  return this.each(function() {
    y0(this, t);
  });
}
function m0(t, n) {
  var e, r;
  return function() {
    var i = it(this, t), a = i.tween;
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
function w0(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = it(this, t), o = a.tween;
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
function b0(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = J(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? m0 : w0)(e, t, n));
}
function gi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = it(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return J(i, r).value[n];
  };
}
function Ns(t, n) {
  var e;
  return (typeof n == "number" ? Y : n instanceof Et ? we : (e = Et(n)) ? (n = e, we) : vs)(t, n);
}
function x0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function M0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function A0(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function $0(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function N0(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function T0(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function S0(t, n) {
  var e = Ce(t), r = e === "transform" ? l0 : Ns;
  return this.attrTween(t, typeof n == "function" ? (e.local ? T0 : N0)(e, r, gi(this, "attr." + t, n)) : n == null ? (e.local ? M0 : x0)(e) : (e.local ? $0 : A0)(e, r, n));
}
function P0(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function k0(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function z0(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && k0(t, a)), e;
  }
  return i._value = n, i;
}
function E0(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && P0(t, a)), e;
  }
  return i._value = n, i;
}
function O0(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Ce(t);
  return this.tween(e, (r.local ? z0 : E0)(r, n));
}
function C0(t, n) {
  return function() {
    di(this, t).delay = +n.apply(this, arguments);
  };
}
function I0(t, n) {
  return n = +n, function() {
    di(this, t).delay = n;
  };
}
function R0(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? C0 : I0)(n, t)) : J(this.node(), n).delay;
}
function q0(t, n) {
  return function() {
    it(this, t).duration = +n.apply(this, arguments);
  };
}
function j0(t, n) {
  return n = +n, function() {
    it(this, t).duration = n;
  };
}
function F0(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? q0 : j0)(n, t)) : J(this.node(), n).duration;
}
function D0(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    it(this, t).ease = n;
  };
}
function L0(t) {
  var n = this._id;
  return arguments.length ? this.each(D0(n, t)) : J(this.node(), n).ease;
}
function H0(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    it(this, t).ease = e;
  };
}
function B0(t) {
  if (typeof t != "function") throw new Error();
  return this.each(H0(this._id, t));
}
function X0(t) {
  typeof t != "function" && (t = as(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new ft(r, this._parents, this._name, this._id);
}
function U0(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new ft(o, this._parents, this._name, this._id);
}
function Y0(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function G0(t, n, e) {
  var r, i, a = Y0(n) ? di : it;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function V0(t, n) {
  var e = this._id;
  return arguments.length < 2 ? J(this.node(), e).on.on(t) : this.each(G0(e, t, n));
}
function K0(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function W0() {
  return this.on("end.remove", K0(this._id));
}
function Z0(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ui(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Re(u[f], n, e, f, u, J(c, e)));
  return new ft(a, this._parents, n, e);
}
function J0(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = is(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = J(c, e), _ = 0, w = f.length; _ < w; ++_)
          (p = f[_]) && Re(p, n, e, _, f, d);
        a.push(f), o.push(c);
      }
  return new ft(a, o, n, e);
}
var Q0 = En.prototype.constructor;
function tg() {
  return new Q0(this._groups, this._parents);
}
function ng(t, n) {
  var e, r, i;
  return function() {
    var a = Kt(this, t), o = (this.style.removeProperty(t), Kt(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function Ts(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function eg(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = Kt(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function rg(t, n, e) {
  var r, i, a;
  return function() {
    var o = Kt(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Kt(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function ig(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = it(this, t), u = l.on, c = l.value[a] == null ? s || (s = Ts(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function ag(t, n, e) {
  var r = (t += "") == "transform" ? u0 : Ns;
  return n == null ? this.styleTween(t, ng(t, r)).on("end.style." + t, Ts(t)) : typeof n == "function" ? this.styleTween(t, rg(t, r, gi(this, "style." + t, n))).each(ig(this._id, t)) : this.styleTween(t, eg(t, r, n), e).on("end.style." + t, null);
}
function og(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function sg(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && og(t, o, e)), r;
  }
  return a._value = n, a;
}
function ug(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, sg(t, n, e ?? ""));
}
function lg(t) {
  return function() {
    this.textContent = t;
  };
}
function cg(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function fg(t) {
  return this.tween("text", typeof t == "function" ? cg(gi(this, "text", t)) : lg(t == null ? "" : t + ""));
}
function hg(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function pg(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && hg(i)), n;
  }
  return r._value = t, r;
}
function dg(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, pg(t));
}
function gg() {
  for (var t = this._name, n = this._id, e = Ss(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = J(l, n);
        Re(l, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new ft(r, this._parents, t, e);
}
function _g() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = it(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var yg = 0;
function ft(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Ss() {
  return ++yg;
}
var ot = En.prototype;
ft.prototype = {
  constructor: ft,
  select: Z0,
  selectAll: J0,
  selectChild: ot.selectChild,
  selectChildren: ot.selectChildren,
  filter: X0,
  merge: U0,
  selection: tg,
  transition: gg,
  call: ot.call,
  nodes: ot.nodes,
  node: ot.node,
  size: ot.size,
  empty: ot.empty,
  each: ot.each,
  on: V0,
  attr: S0,
  attrTween: O0,
  style: ag,
  styleTween: ug,
  text: fg,
  textTween: dg,
  remove: W0,
  tween: b0,
  delay: R0,
  duration: F0,
  ease: L0,
  easeVarying: B0,
  end: _g,
  [Symbol.iterator]: ot[Symbol.iterator]
};
function vg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var mg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: vg
};
function wg(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function bg(t) {
  var n, e;
  t instanceof ft ? (n = t._id, t = t._name) : (n = Ss(), (e = mg).time = pi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Re(l, t, n, u, o, e || wg(l, n));
  return new ft(r, this._parents, t, n);
}
En.prototype.interrupt = v0;
En.prototype.transition = bg;
const Or = Math.PI, Cr = 2 * Or, $t = 1e-6, xg = Cr - $t;
function Ps(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Mg(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Ps;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class ks {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Ps : Mg(n);
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
    else if (f > $t) if (!(Math.abs(h * l - u * c) > $t) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, d = i - s, _ = l * l + u * u, w = p * p + d * d, y = Math.sqrt(_), x = Math.sqrt(f), M = a * Math.tan((Or - Math.acos((_ + f - w) / (2 * y * x))) / 2), g = M / x, m = M / y;
      Math.abs(g - 1) > $t && this._append`L${n + g * c},${e + g * h}`, this._append`A${a},${a},0,0,${+(h * p > c * d)},${this._x1 = n + m * l},${this._y1 = e + m * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > $t || Math.abs(this._y1 - c) > $t) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Cr + Cr), f > xg ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > $t && this._append`A${r},${r},0,${+(f >= Or)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Q() {
  return new ks();
}
Q.prototype = ks.prototype;
function Ag(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Ae(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Zt(t) {
  return t = Ae(Math.abs(t)), t ? t[1] : NaN;
}
function $g(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Ng(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Tg = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $e(t) {
  if (!(n = Tg.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new _i({
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
$e.prototype = _i.prototype;
function _i(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
_i.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Sg(t) {
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
var zs;
function Pg(t, n) {
  var e = Ae(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (zs = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Ae(t, Math.max(0, n + a - 1))[0];
}
function xa(t, n) {
  var e = Ae(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ma = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Ag,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => xa(t * 100, n),
  r: xa,
  s: Pg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Aa(t) {
  return t;
}
var $a = Array.prototype.map, Na = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function kg(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Aa : $g($a.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Aa : Ng($a.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = $e(h);
    var f = h.fill, p = h.align, d = h.sign, _ = h.symbol, w = h.zero, y = h.width, x = h.comma, M = h.precision, g = h.trim, m = h.type;
    m === "n" ? (x = !0, m = "g") : Ma[m] || (M === void 0 && (M = 12), g = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var S = _ === "$" ? e : _ === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", k = _ === "$" ? r : /[%p]/.test(m) ? o : "", O = Ma[m], L = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function H(v) {
      var C = S, A = k, I, At, j;
      if (m === "c")
        A = O(v) + A, v = "";
      else {
        v = +v;
        var B = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : O(Math.abs(v), M), g && (v = Sg(v)), B && +v == 0 && d !== "+" && (B = !1), C = (B ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + C, A = (m === "s" ? Na[8 + zs / 3] : "") + A + (B && d === "(" ? ")" : ""), L) {
          for (I = -1, At = v.length; ++I < At; )
            if (j = v.charCodeAt(I), 48 > j || j > 57) {
              A = (j === 46 ? i + v.slice(I + 1) : v.slice(I)) + A, v = v.slice(0, I);
              break;
            }
        }
      }
      x && !w && (v = n(v, 1 / 0));
      var X = C.length + v.length + A.length, T = X < y ? new Array(y - X + 1).join(f) : "";
      switch (x && w && (v = n(T + v, T.length ? y - A.length : 1 / 0), T = ""), p) {
        case "<":
          v = C + v + A + T;
          break;
        case "=":
          v = C + T + v + A;
          break;
        case "^":
          v = T.slice(0, X = T.length >> 1) + C + v + A + T.slice(X);
          break;
        default:
          v = T + C + v + A;
          break;
      }
      return a(v);
    }
    return H.toString = function() {
      return h + "";
    }, H;
  }
  function c(h, f) {
    var p = u((h = $e(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(Zt(f) / 3))) * 3, _ = Math.pow(10, -d), w = Na[8 + d / 3];
    return function(y) {
      return p(_ * y) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var Yn, qe, Es;
zg({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function zg(t) {
  return Yn = kg(t), qe = Yn.format, Es = Yn.formatPrefix, Yn;
}
function Eg(t) {
  return Math.max(0, -Zt(Math.abs(t)));
}
function Og(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Zt(n) / 3))) * 3 - Zt(Math.abs(t)));
}
function Cg(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Zt(n) - Zt(t)) + 1;
}
function Ig(t, n) {
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
function Rg(t) {
  return function() {
    return t;
  };
}
function qg(t) {
  return +t;
}
var Ta = [0, 1];
function Ht(t) {
  return t;
}
function Ir(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Rg(isNaN(n) ? NaN : 0.5);
}
function jg(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Fg(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Ir(i, r), a = e(o, a)) : (r = Ir(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function Dg(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Ir(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = Dh(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function Lg(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Hg() {
  var t = Ta, n = Ta, e = hi, r, i, a, o = Ht, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return o !== Ht && (o = jg(t[0], t[f - 1])), s = f > 2 ? Dg : Fg, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), Y)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, qg), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = a0, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Ht, c()) : o !== Ht;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function Bg() {
  return Hg()(Ht, Ht);
}
function Xg(t, n, e, r) {
  var i = Uh(t, n, e), a;
  switch (r = $e(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Og(i, o)) && (r.precision = a), Es(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Cg(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Eg(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return qe(r);
}
function Ug(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Xh(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Xg(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = Ar(o, s, e), u === l)
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
function Jt() {
  var t = Bg();
  return t.copy = function() {
    return Lg(t, Jt());
  }, Ig.apply(t, arguments), Ug(t);
}
function pn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
pn.prototype = {
  constructor: pn,
  scale: function(t) {
    return t === 1 ? this : new pn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new pn(this.k, this.x + this.k * t, this.y + this.k * n);
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
pn.prototype;
var Os = typeof global == "object" && global && global.Object === Object && global, Yg = typeof self == "object" && self && self.Object === Object && self, pt = Os || Yg || Function("return this")(), et = pt.Symbol, Cs = Object.prototype, Gg = Cs.hasOwnProperty, Vg = Cs.toString, on = et ? et.toStringTag : void 0;
function Kg(t) {
  var n = Gg.call(t, on), e = t[on];
  try {
    t[on] = void 0;
    var r = !0;
  } catch {
  }
  var i = Vg.call(t);
  return r && (n ? t[on] = e : delete t[on]), i;
}
var Wg = Object.prototype, Zg = Wg.toString;
function Jg(t) {
  return Zg.call(t);
}
var Qg = "[object Null]", t_ = "[object Undefined]", Sa = et ? et.toStringTag : void 0;
function nn(t) {
  return t == null ? t === void 0 ? t_ : Qg : Sa && Sa in Object(t) ? Kg(t) : Jg(t);
}
function Qt(t) {
  return t != null && typeof t == "object";
}
var n_ = "[object Symbol]";
function je(t) {
  return typeof t == "symbol" || Qt(t) && nn(t) == n_;
}
function Is(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var K = Array.isArray, Pa = et ? et.prototype : void 0, ka = Pa ? Pa.toString : void 0;
function Rs(t) {
  if (typeof t == "string")
    return t;
  if (K(t))
    return Is(t, Rs) + "";
  if (je(t))
    return ka ? ka.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var e_ = /\s/;
function r_(t) {
  for (var n = t.length; n-- && e_.test(t.charAt(n)); )
    ;
  return n;
}
var i_ = /^\s+/;
function a_(t) {
  return t && t.slice(0, r_(t) + 1).replace(i_, "");
}
function tn(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var za = NaN, o_ = /^[-+]0x[0-9a-f]+$/i, s_ = /^0b[01]+$/i, u_ = /^0o[0-7]+$/i, l_ = parseInt;
function c_(t) {
  if (typeof t == "number")
    return t;
  if (je(t))
    return za;
  if (tn(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = tn(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = a_(t);
  var e = s_.test(t);
  return e || u_.test(t) ? l_(t.slice(2), e ? 2 : 8) : o_.test(t) ? za : +t;
}
var f_ = 1 / 0, h_ = 17976931348623157e292;
function sr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = c_(t), t === f_ || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * h_;
  }
  return t === t ? t : 0;
}
function p_(t) {
  return t;
}
var d_ = "[object AsyncFunction]", g_ = "[object Function]", __ = "[object GeneratorFunction]", y_ = "[object Proxy]";
function qs(t) {
  if (!tn(t))
    return !1;
  var n = nn(t);
  return n == g_ || n == __ || n == d_ || n == y_;
}
var ur = pt["__core-js_shared__"], Ea = function() {
  var t = /[^.]+$/.exec(ur && ur.keys && ur.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function v_(t) {
  return !!Ea && Ea in t;
}
var m_ = Function.prototype, w_ = m_.toString;
function qt(t) {
  if (t != null) {
    try {
      return w_.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var b_ = /[\\^$.*+?()[\]{}|]/g, x_ = /^\[object .+?Constructor\]$/, M_ = Function.prototype, A_ = Object.prototype, $_ = M_.toString, N_ = A_.hasOwnProperty, T_ = RegExp(
  "^" + $_.call(N_).replace(b_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function S_(t) {
  if (!tn(t) || v_(t))
    return !1;
  var n = qs(t) ? T_ : x_;
  return n.test(qt(t));
}
function P_(t, n) {
  return t == null ? void 0 : t[n];
}
function en(t, n) {
  var e = P_(t, n);
  return S_(e) ? e : void 0;
}
var Rr = en(pt, "WeakMap"), k_ = 9007199254740991, z_ = /^(?:0|[1-9]\d*)$/;
function yi(t, n) {
  var e = typeof t;
  return n = n ?? k_, !!n && (e == "number" || e != "symbol" && z_.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function vi(t, n) {
  return t === n || t !== t && n !== n;
}
var E_ = 9007199254740991;
function mi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= E_;
}
function Fe(t) {
  return t != null && mi(t.length) && !qs(t);
}
function O_(t, n, e) {
  if (!tn(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Fe(e) && yi(n, e.length) : r == "string" && n in e) ? vi(e[n], t) : !1;
}
var C_ = Object.prototype;
function I_(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || C_;
  return t === e;
}
function R_(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var q_ = "[object Arguments]";
function Oa(t) {
  return Qt(t) && nn(t) == q_;
}
var js = Object.prototype, j_ = js.hasOwnProperty, F_ = js.propertyIsEnumerable, wi = Oa(/* @__PURE__ */ function() {
  return arguments;
}()) ? Oa : function(t) {
  return Qt(t) && j_.call(t, "callee") && !F_.call(t, "callee");
};
function D_() {
  return !1;
}
var Fs = typeof exports == "object" && exports && !exports.nodeType && exports, Ca = Fs && typeof module == "object" && module && !module.nodeType && module, L_ = Ca && Ca.exports === Fs, Ia = L_ ? pt.Buffer : void 0, H_ = Ia ? Ia.isBuffer : void 0, qr = H_ || D_, B_ = "[object Arguments]", X_ = "[object Array]", U_ = "[object Boolean]", Y_ = "[object Date]", G_ = "[object Error]", V_ = "[object Function]", K_ = "[object Map]", W_ = "[object Number]", Z_ = "[object Object]", J_ = "[object RegExp]", Q_ = "[object Set]", ty = "[object String]", ny = "[object WeakMap]", ey = "[object ArrayBuffer]", ry = "[object DataView]", iy = "[object Float32Array]", ay = "[object Float64Array]", oy = "[object Int8Array]", sy = "[object Int16Array]", uy = "[object Int32Array]", ly = "[object Uint8Array]", cy = "[object Uint8ClampedArray]", fy = "[object Uint16Array]", hy = "[object Uint32Array]", $ = {};
$[iy] = $[ay] = $[oy] = $[sy] = $[uy] = $[ly] = $[cy] = $[fy] = $[hy] = !0;
$[B_] = $[X_] = $[ey] = $[U_] = $[ry] = $[Y_] = $[G_] = $[V_] = $[K_] = $[W_] = $[Z_] = $[J_] = $[Q_] = $[ty] = $[ny] = !1;
function py(t) {
  return Qt(t) && mi(t.length) && !!$[nn(t)];
}
function dy(t) {
  return function(n) {
    return t(n);
  };
}
var Ds = typeof exports == "object" && exports && !exports.nodeType && exports, dn = Ds && typeof module == "object" && module && !module.nodeType && module, gy = dn && dn.exports === Ds, lr = gy && Os.process, Ra = function() {
  try {
    var t = dn && dn.require && dn.require("util").types;
    return t || lr && lr.binding && lr.binding("util");
  } catch {
  }
}(), qa = Ra && Ra.isTypedArray, Ls = qa ? dy(qa) : py, _y = Object.prototype, yy = _y.hasOwnProperty;
function vy(t, n) {
  var e = K(t), r = !e && wi(t), i = !e && !r && qr(t), a = !e && !r && !i && Ls(t), o = e || r || i || a, s = o ? R_(t.length, String) : [], l = s.length;
  for (var u in t)
    yy.call(t, u) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    yi(u, l))) && s.push(u);
  return s;
}
function my(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var wy = my(Object.keys, Object), by = Object.prototype, xy = by.hasOwnProperty;
function My(t) {
  if (!I_(t))
    return wy(t);
  var n = [];
  for (var e in Object(t))
    xy.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function bi(t) {
  return Fe(t) ? vy(t) : My(t);
}
var Ay = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $y = /^\w*$/;
function xi(t, n) {
  if (K(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || je(t) ? !0 : $y.test(t) || !Ay.test(t) || n != null && t in Object(n);
}
var $n = en(Object, "create");
function Ny() {
  this.__data__ = $n ? $n(null) : {}, this.size = 0;
}
function Ty(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Sy = "__lodash_hash_undefined__", Py = Object.prototype, ky = Py.hasOwnProperty;
function zy(t) {
  var n = this.__data__;
  if ($n) {
    var e = n[t];
    return e === Sy ? void 0 : e;
  }
  return ky.call(n, t) ? n[t] : void 0;
}
var Ey = Object.prototype, Oy = Ey.hasOwnProperty;
function Cy(t) {
  var n = this.__data__;
  return $n ? n[t] !== void 0 : Oy.call(n, t);
}
var Iy = "__lodash_hash_undefined__";
function Ry(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = $n && n === void 0 ? Iy : n, this;
}
function Ct(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Ct.prototype.clear = Ny;
Ct.prototype.delete = Ty;
Ct.prototype.get = zy;
Ct.prototype.has = Cy;
Ct.prototype.set = Ry;
function qy() {
  this.__data__ = [], this.size = 0;
}
function De(t, n) {
  for (var e = t.length; e--; )
    if (vi(t[e][0], n))
      return e;
  return -1;
}
var jy = Array.prototype, Fy = jy.splice;
function Dy(t) {
  var n = this.__data__, e = De(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Fy.call(n, e, 1), --this.size, !0;
}
function Ly(t) {
  var n = this.__data__, e = De(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Hy(t) {
  return De(this.__data__, t) > -1;
}
function By(t, n) {
  var e = this.__data__, r = De(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function dt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
dt.prototype.clear = qy;
dt.prototype.delete = Dy;
dt.prototype.get = Ly;
dt.prototype.has = Hy;
dt.prototype.set = By;
var Nn = en(pt, "Map");
function Xy() {
  this.size = 0, this.__data__ = {
    hash: new Ct(),
    map: new (Nn || dt)(),
    string: new Ct()
  };
}
function Uy(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Le(t, n) {
  var e = t.__data__;
  return Uy(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Yy(t) {
  var n = Le(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Gy(t) {
  return Le(this, t).get(t);
}
function Vy(t) {
  return Le(this, t).has(t);
}
function Ky(t, n) {
  var e = Le(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function gt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
gt.prototype.clear = Xy;
gt.prototype.delete = Yy;
gt.prototype.get = Gy;
gt.prototype.has = Vy;
gt.prototype.set = Ky;
var Wy = "Expected a function";
function Mi(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Wy);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Mi.Cache || gt)(), e;
}
Mi.Cache = gt;
var Zy = 500;
function Jy(t) {
  var n = Mi(t, function(r) {
    return e.size === Zy && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Qy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, tv = /\\(\\)?/g, nv = Jy(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Qy, function(e, r, i, a) {
    n.push(i ? a.replace(tv, "$1") : r || e);
  }), n;
});
function ev(t) {
  return t == null ? "" : Rs(t);
}
function Hs(t, n) {
  return K(t) ? t : xi(t, n) ? [t] : nv(ev(t));
}
function He(t) {
  if (typeof t == "string" || je(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Bs(t, n) {
  n = Hs(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[He(n[e++])];
  return e && e == r ? t : void 0;
}
function rv(t, n, e) {
  var r = t == null ? void 0 : Bs(t, n);
  return r === void 0 ? e : r;
}
function Xs(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var ja = et ? et.isConcatSpreadable : void 0;
function iv(t) {
  return K(t) || wi(t) || !!(ja && t && t[ja]);
}
function av(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = iv), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? Xs(i, s) : i[i.length] = s;
  }
  return i;
}
function ov(t) {
  var n = t == null ? 0 : t.length;
  return n ? av(t) : [];
}
function sv() {
  this.__data__ = new dt(), this.size = 0;
}
function uv(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function lv(t) {
  return this.__data__.get(t);
}
function cv(t) {
  return this.__data__.has(t);
}
var fv = 200;
function hv(t, n) {
  var e = this.__data__;
  if (e instanceof dt) {
    var r = e.__data__;
    if (!Nn || r.length < fv - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new gt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ut(t) {
  var n = this.__data__ = new dt(t);
  this.size = n.size;
}
ut.prototype.clear = sv;
ut.prototype.delete = uv;
ut.prototype.get = lv;
ut.prototype.has = cv;
ut.prototype.set = hv;
function pv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function dv() {
  return [];
}
var gv = Object.prototype, _v = gv.propertyIsEnumerable, Fa = Object.getOwnPropertySymbols, yv = Fa ? function(t) {
  return t == null ? [] : (t = Object(t), pv(Fa(t), function(n) {
    return _v.call(t, n);
  }));
} : dv;
function vv(t, n, e) {
  var r = n(t);
  return K(t) ? r : Xs(r, e(t));
}
function Da(t) {
  return vv(t, bi, yv);
}
var jr = en(pt, "DataView"), Fr = en(pt, "Promise"), Dr = en(pt, "Set"), La = "[object Map]", mv = "[object Object]", Ha = "[object Promise]", Ba = "[object Set]", Xa = "[object WeakMap]", Ua = "[object DataView]", wv = qt(jr), bv = qt(Nn), xv = qt(Fr), Mv = qt(Dr), Av = qt(Rr), mt = nn;
(jr && mt(new jr(new ArrayBuffer(1))) != Ua || Nn && mt(new Nn()) != La || Fr && mt(Fr.resolve()) != Ha || Dr && mt(new Dr()) != Ba || Rr && mt(new Rr()) != Xa) && (mt = function(t) {
  var n = nn(t), e = n == mv ? t.constructor : void 0, r = e ? qt(e) : "";
  if (r)
    switch (r) {
      case wv:
        return Ua;
      case bv:
        return La;
      case xv:
        return Ha;
      case Mv:
        return Ba;
      case Av:
        return Xa;
    }
  return n;
});
var Ya = pt.Uint8Array, $v = "__lodash_hash_undefined__";
function Nv(t) {
  return this.__data__.set(t, $v), this;
}
function Tv(t) {
  return this.__data__.has(t);
}
function Ne(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new gt(); ++n < e; )
    this.add(t[n]);
}
Ne.prototype.add = Ne.prototype.push = Nv;
Ne.prototype.has = Tv;
function Sv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Pv(t, n) {
  return t.has(n);
}
var kv = 1, zv = 2;
function Us(t, n, e, r, i, a) {
  var o = e & kv, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & zv ? new Ne() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], _ = n[h];
    if (r)
      var w = o ? r(_, d, h, n, t, a) : r(d, _, h, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Sv(n, function(y, x) {
        if (!Pv(p, x) && (d === y || i(d, y, e, r, a)))
          return p.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === _ || i(d, _, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function Ev(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Ov(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Cv = 1, Iv = 2, Rv = "[object Boolean]", qv = "[object Date]", jv = "[object Error]", Fv = "[object Map]", Dv = "[object Number]", Lv = "[object RegExp]", Hv = "[object Set]", Bv = "[object String]", Xv = "[object Symbol]", Uv = "[object ArrayBuffer]", Yv = "[object DataView]", Ga = et ? et.prototype : void 0, cr = Ga ? Ga.valueOf : void 0;
function Gv(t, n, e, r, i, a, o) {
  switch (e) {
    case Yv:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Uv:
      return !(t.byteLength != n.byteLength || !a(new Ya(t), new Ya(n)));
    case Rv:
    case qv:
    case Dv:
      return vi(+t, +n);
    case jv:
      return t.name == n.name && t.message == n.message;
    case Lv:
    case Bv:
      return t == n + "";
    case Fv:
      var s = Ev;
    case Hv:
      var l = r & Cv;
      if (s || (s = Ov), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= Iv, o.set(t, n);
      var c = Us(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case Xv:
      if (cr)
        return cr.call(t) == cr.call(n);
  }
  return !1;
}
var Vv = 1, Kv = Object.prototype, Wv = Kv.hasOwnProperty;
function Zv(t, n, e, r, i, a) {
  var o = e & Vv, s = Da(t), l = s.length, u = Da(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : Wv.call(n, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var _ = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++h < l; ) {
    f = s[h];
    var y = t[f], x = n[f];
    if (r)
      var M = o ? r(x, y, f, n, t, a) : r(y, x, f, t, n, a);
    if (!(M === void 0 ? y === x || i(y, x, e, r, a) : M)) {
      _ = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (_ && !w) {
    var g = t.constructor, m = n.constructor;
    g != m && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof m == "function" && m instanceof m) && (_ = !1);
  }
  return a.delete(t), a.delete(n), _;
}
var Jv = 1, Va = "[object Arguments]", Ka = "[object Array]", Gn = "[object Object]", Qv = Object.prototype, Wa = Qv.hasOwnProperty;
function tm(t, n, e, r, i, a) {
  var o = K(t), s = K(n), l = o ? Ka : mt(t), u = s ? Ka : mt(n);
  l = l == Va ? Gn : l, u = u == Va ? Gn : u;
  var c = l == Gn, h = u == Gn, f = l == u;
  if (f && qr(t)) {
    if (!qr(n))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new ut()), o || Ls(t) ? Us(t, n, e, r, i, a) : Gv(t, n, l, e, r, i, a);
  if (!(e & Jv)) {
    var p = c && Wa.call(t, "__wrapped__"), d = h && Wa.call(n, "__wrapped__");
    if (p || d) {
      var _ = p ? t.value() : t, w = d ? n.value() : n;
      return a || (a = new ut()), i(_, w, e, r, a);
    }
  }
  return f ? (a || (a = new ut()), Zv(t, n, e, r, i, a)) : !1;
}
function Ai(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !Qt(t) && !Qt(n) ? t !== t && n !== n : tm(t, n, e, r, Ai, i);
}
var nm = 1, em = 2;
function rm(t, n, e, r) {
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
      var c = new ut(), h;
      if (!(h === void 0 ? Ai(u, l, nm | em, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Ys(t) {
  return t === t && !tn(t);
}
function im(t) {
  for (var n = bi(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ys(i)];
  }
  return n;
}
function Gs(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function am(t) {
  var n = im(t);
  return n.length == 1 && n[0][2] ? Gs(n[0][0], n[0][1]) : function(e) {
    return e === t || rm(e, t, n);
  };
}
function om(t, n) {
  return t != null && n in Object(t);
}
function sm(t, n, e) {
  n = Hs(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = He(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && mi(i) && yi(o, i) && (K(t) || wi(t)));
}
function um(t, n) {
  return t != null && sm(t, n, om);
}
var lm = 1, cm = 2;
function fm(t, n) {
  return xi(t) && Ys(n) ? Gs(He(t), n) : function(e) {
    var r = rv(e, t);
    return r === void 0 && r === n ? um(e, t) : Ai(n, r, lm | cm);
  };
}
function hm(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function pm(t) {
  return function(n) {
    return Bs(n, t);
  };
}
function dm(t) {
  return xi(t) ? hm(He(t)) : pm(t);
}
function gm(t) {
  return typeof t == "function" ? t : t == null ? p_ : typeof t == "object" ? K(t) ? fm(t[0], t[1]) : am(t) : dm(t);
}
function _m(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var ym = _m();
function vm(t, n) {
  return t && ym(t, n, bi);
}
function mm(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Fe(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var wm = mm(vm);
function bm(t, n) {
  var e = -1, r = Fe(t) ? Array(t.length) : [];
  return wm(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function Za(t, n) {
  var e = K(t) ? Is : bm;
  return e(t, gm(n));
}
var xm = Math.ceil, Mm = Math.max;
function Am(t, n, e, r) {
  for (var i = -1, a = Mm(xm((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function $m(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && O_(n, e, r) && (e = r = void 0), n = sr(n), e === void 0 ? (e = n, n = 0) : e = sr(e), r = r === void 0 ? n < e ? 1 : -1 : sr(r), Am(n, e, r);
  };
}
var Nm = $m();
const Tm = (t, n, e = 12, r = 12) => {
  const i = Jt().domain([0, e]).range([0, t]), a = Jt().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Nm((e + 1) * (r + 1)).map(function(o) {
        return { m: o % (e + 1), n: Math.floor(o / (e + 1)), x: i(o % (e + 1)), y: a(Math.floor(o / (e + 1))) };
      });
    },
    position: function(o, s) {
      typeof o == "number" && (o = [o]), typeof s == "number" && (s = [s]);
      const l = ov(Za(s, function(u) {
        return Za(
          o,
          function(c) {
            return { x: i(c), y: a(u) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, Sm = "_widget_1aazq_40", Pm = "_label_1aazq_58", km = "_lit_1aazq_63", zm = "_button_1aazq_67", Em = "_symbol_1aazq_67", Om = "_radio_1aazq_68", Cm = "_radiobutton_1aazq_68", Im = "_selected_1aazq_74", Rm = "_toggle_1aazq_75", qm = "_slider_1aazq_84", jm = "_track_1aazq_84", Fm = "_track_overlay_1aazq_89", Dm = "_handle_1aazq_97", b = {
  widget: Sm,
  label: Pm,
  lit: km,
  button: zm,
  symbol: Em,
  radio: Om,
  radiobutton: Cm,
  selected: Im,
  toggle: Rm,
  slider: qm,
  track: jm,
  track_overlay: Fm,
  handle: Dm
}, Be = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = t.length;
  let e = "";
  for (let r = 0; r < 10; ++r)
    e += t[Math.floor(Math.random() * n)];
  return e;
}, $i = (t, n, e) => {
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
}, Lm = (t = 1) => {
  const n = Q();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Hm = (t = 1) => {
  const n = Q(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Bm = (t = 1) => {
  const n = Q();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Xm = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = Q();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Um = (t = 1) => {
  const n = Q(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, l = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, Ym = (t = 1) => {
  const n = Q(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, Gm = (t = 1) => {
  const n = Q(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var l = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Vm = (t = 1) => {
  var n = Q(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, Km = (t = 1) => {
  const n = Q(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Lr = (t) => {
  switch (t) {
    case "play":
      return Lm;
    case "forward":
      return Hm;
    case "back":
      return Bm;
    case "pause":
      return Xm;
    case "reload":
      return Um;
    case "capture":
      return Ym;
    case "rewind":
      return Gm;
    case "stop":
      return Vm;
    case "push":
      return Km;
  }
}, Ni = () => {
  const t = "button";
  var n = Be(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", l = null, u = function(f) {
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
      h = (h + 1) % c.length, u(), E(this.parentNode).select("." + b.symbol).attr("d", Lr(c[h])(r * e));
    },
    press: function(f) {
      h = (h + 1) % c.length, u(), f.select("#button_" + n).select("." + b.symbol).attr("d", Lr(c[h])(r * e));
    }
  };
}, Wm = () => {
  const t = "slider", n = qe(".3f");
  var e = Be(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, l = "top-left", u = null, c = function(y) {
  }, h = function(y) {
  }, f = [0, 1], p = 0, d = null, _ = Jt().domain(f).range([0, r]).clamp(!0);
  const w = function(y, x, M = f) {
    const g = y.select("#slider_" + e);
    _.domain(M), p = x, g.selectAll("." + b.handle).transition().attr("cx", _(x)), o && g.select("." + b.label).text(d + " = " + n(p)), c(), h();
  };
  return {
    type: t,
    scale: _,
    id: function(y) {
      return typeof y > "u" ? e : (e = y, this);
    },
    label: function(y) {
      return typeof y > "u" ? d : (d = y, this);
    },
    size: function(y) {
      return typeof y > "u" ? r : (r = y, this);
    },
    girth: function(y) {
      return typeof y > "u" ? i : (i = y, this);
    },
    knob: function(y) {
      return typeof y > "u" ? a : (a = y, this);
    },
    show: function(y) {
      return typeof y > "u" ? o : (o = y, this);
    },
    position: function(y) {
      return typeof y > "u" ? s : (s = y, this);
    },
    x: function(y) {
      return typeof y > "u" ? s.x : (s.x = y, this);
    },
    y: function(y) {
      return typeof y > "u" ? s.y : (s.y = y, this);
    },
    labelposition: function(y) {
      return typeof y > "u" ? l : (l = y, this);
    },
    fontsize: function(y) {
      return typeof y > "u" ? u : (u = y, this);
    },
    update: function(y) {
      if (typeof y == "function")
        return c = y, this;
      c(y);
    },
    update_end: function(y) {
      if (typeof y == "function")
        return h = y, this;
      h(y);
    },
    range: function(y) {
      return typeof y > "u" ? f : (f = y, this);
    },
    value: function(y) {
      return typeof y > "u" ? p : (p = y, this);
    },
    reset: w,
    click: w
  };
}, Zm = () => {
  const t = "toggle";
  var n = Be(), e = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(u) {
  }, l = 0;
  return {
    type: t,
    id: function(u) {
      return typeof u > "u" ? n : (n = u, this);
    },
    size: function(u) {
      return typeof u > "u" ? e : (e = u, this);
    },
    position: function(u) {
      return typeof u > "u" ? r : (r = u, this);
    },
    x: function(u) {
      return typeof u > "u" ? r.x : (r.x = u, this);
    },
    y: function(u) {
      return typeof u > "u" ? r.y : (r.y = u, this);
    },
    label: function(u) {
      return typeof u > "u" ? i : (i = u, this);
    },
    labelposition: function(u) {
      return typeof u > "u" ? a : (a = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? o : (o = u, this);
    },
    update: function(u) {
      if (typeof u == "function")
        return s = u, this;
      s(u);
    },
    value: function(u) {
      return typeof u > "u" ? l : (l = u, this);
    },
    click: function() {
      l = !l;
      const u = E(this.parentNode);
      u.select("." + b.handle).transition().attr("cx", l ? 2 * e : 0), u.classed(b.selected, l), s();
    },
    reset: function(u, c) {
      l = c;
      const h = u.select("#toggle_" + n);
      h.selectAll("." + b.handle).transition().attr("cx", l ? 2 * e : 0), h.classed(b.selected, l), s();
    }
  };
}, Jm = () => {
  const t = "radio";
  var n = Be(), e = 100, r = 20, i = 0.3, a = "round", o = "vertical", s = { x: 0, y: 0 }, l = "right", u = null, c = function(p) {
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
      f = d, E(this.parentNode).selectAll("." + b.symbol).classed(b.selected, (_) => _ == f), c();
    },
    reset: function(p, d) {
      f = d, p.select("#radio_" + n).selectAll("." + b.symbol).classed(b.selected, (_) => _ == f), c();
    }
  };
}, Qm = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = E(a).attr("class", b.widget + " " + b.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", b.background).on("click", t.click).on("mouseover", function() {
    E(this).classed(b.lit, !0), E(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    E(this).classed(b.lit, !1), E(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), o.append("path").attr("d", Lr(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", b.symbol), r) {
    const l = $i(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return a;
}, Vs = (t, n) => {
  const e = Q();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, t1 = (t, n) => {
  const e = qe(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = E(l).attr("class", b.widget + " " + b.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Vs(t.size(), t.girth())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", b.track_overlay).on("click", function(d) {
    const _ = Nr(d, this)[0];
    t.value(o.invert(_)), t.update(), t.update_end(), s.selectAll("." + b.handle).attr("cx", o(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Rd().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + b.handle).attr("cx", o(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, h, f, p = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? Ln([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Ln([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? Ln([t.girth() / 2, t.knob()]) + 7 : -Ln([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, f = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", b.label).style("text-anchor", f).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + h + ")"), l;
}, n1 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = E(o).attr("class", b.widget + " " + b.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(b.selected, t.value() == 1);
  if (s.append("path").attr("d", Vs(2 * t.size(), 2 * t.size())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", b.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = $i(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return o;
}, e1 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = Yh(o), l = Jt().domain([0, o - 1]).range([0, t.size()]), u = Jt().domain([0, o - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = E(c).attr("class", b.widget + " " + b.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + b.radiobutton).data(s).enter().append("g").attr("class", b.radiobutton).attr("id", (_) => "b" + _).attr("transform", (_) => t.orientation() == "vertical" ? "translate(0," + u(_) + ")" : "translate(" + l(_) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", a / 2)), f.attr("class", b.background).on("mouseover", function() {
    E(this).classed(b.lit, !0), E(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    E(this).classed(b.lit, !1), E(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), p.attr("class", b.symbol), p.filter((_) => _ == t.value()).classed(b.selected, !0), h.on("click", t.click);
  const d = $i(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", b.label).text(function(_, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), c;
}, Vn = (t, n) => {
  switch (t.type) {
    case "button":
      return Qm(t);
    case "slider":
      return t1(t);
    case "radio":
      return e1(t);
    case "toggle":
      return n1(t);
  }
}, r1 = "_agent_gdeeu_1", i1 = "_displayPanel_gdeeu_5", a1 = "_controlPanel_gdeeu_10", Te = {
  agent: r1,
  displayPanel: i1,
  controlPanel: a1
}, o1 = (t, n) => {
  const e = Tm(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = Ac("#" + t).classed(t + " " + n.container_class, !0), i = t + "_display", a = t + "_controls", o = r.append("div").attr("id", i).attr("class", Te.displayPanel).classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), s = r.append("div").attr("id", a).attr("class", "d3-widgets " + Te.controlPanel).classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return n.debug && s.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").style("fill", "black"), { display: o, controls: s, grid: e };
};
var Ks = typeof global == "object" && global && global.Object === Object && global, s1 = typeof self == "object" && self && self.Object === Object && self, _t = Ks || s1 || Function("return this")(), xt = _t.Symbol, Ws = Object.prototype, u1 = Ws.hasOwnProperty, l1 = Ws.toString, sn = xt ? xt.toStringTag : void 0;
function c1(t) {
  var n = u1.call(t, sn), e = t[sn];
  try {
    t[sn] = void 0;
    var r = !0;
  } catch {
  }
  var i = l1.call(t);
  return r && (n ? t[sn] = e : delete t[sn]), i;
}
var f1 = Object.prototype, h1 = f1.toString;
function p1(t) {
  return h1.call(t);
}
var d1 = "[object Null]", g1 = "[object Undefined]", Ja = xt ? xt.toStringTag : void 0;
function jt(t) {
  return t == null ? t === void 0 ? g1 : d1 : Ja && Ja in Object(t) ? c1(t) : p1(t);
}
function It(t) {
  return t != null && typeof t == "object";
}
var _1 = "[object Symbol]";
function Xe(t) {
  return typeof t == "symbol" || It(t) && jt(t) == _1;
}
function Ue(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var W = Array.isArray, Qa = xt ? xt.prototype : void 0, to = Qa ? Qa.toString : void 0;
function Zs(t) {
  if (typeof t == "string")
    return t;
  if (W(t))
    return Ue(t, Zs) + "";
  if (Xe(t))
    return to ? to.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var y1 = /\s/;
function v1(t) {
  for (var n = t.length; n-- && y1.test(t.charAt(n)); )
    ;
  return n;
}
var m1 = /^\s+/;
function w1(t) {
  return t && t.slice(0, v1(t) + 1).replace(m1, "");
}
function ht(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var no = NaN, b1 = /^[-+]0x[0-9a-f]+$/i, x1 = /^0b[01]+$/i, M1 = /^0o[0-7]+$/i, A1 = parseInt;
function $1(t) {
  if (typeof t == "number")
    return t;
  if (Xe(t))
    return no;
  if (ht(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ht(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = w1(t);
  var e = x1.test(t);
  return e || M1.test(t) ? A1(t.slice(2), e ? 2 : 8) : b1.test(t) ? no : +t;
}
var N1 = 1 / 0, T1 = 17976931348623157e292;
function fr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = $1(t), t === N1 || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * T1;
  }
  return t === t ? t : 0;
}
function Ti(t) {
  return t;
}
var S1 = "[object AsyncFunction]", P1 = "[object Function]", k1 = "[object GeneratorFunction]", z1 = "[object Proxy]";
function Js(t) {
  if (!ht(t))
    return !1;
  var n = jt(t);
  return n == P1 || n == k1 || n == S1 || n == z1;
}
var hr = _t["__core-js_shared__"], eo = function() {
  var t = /[^.]+$/.exec(hr && hr.keys && hr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function E1(t) {
  return !!eo && eo in t;
}
var O1 = Function.prototype, C1 = O1.toString;
function Ft(t) {
  if (t != null) {
    try {
      return C1.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var I1 = /[\\^$.*+?()[\]{}|]/g, R1 = /^\[object .+?Constructor\]$/, q1 = Function.prototype, j1 = Object.prototype, F1 = q1.toString, D1 = j1.hasOwnProperty, L1 = RegExp(
  "^" + F1.call(D1).replace(I1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function H1(t) {
  if (!ht(t) || E1(t))
    return !1;
  var n = Js(t) ? L1 : R1;
  return n.test(Ft(t));
}
function B1(t, n) {
  return t == null ? void 0 : t[n];
}
function Dt(t, n) {
  var e = B1(t, n);
  return H1(e) ? e : void 0;
}
var Hr = Dt(_t, "WeakMap"), ro = function() {
  try {
    var t = Dt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function X1(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var U1 = 9007199254740991, Y1 = /^(?:0|[1-9]\d*)$/;
function Ye(t, n) {
  var e = typeof t;
  return n = n ?? U1, !!n && (e == "number" || e != "symbol" && Y1.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function G1(t, n, e) {
  n == "__proto__" && ro ? ro(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Ge(t, n) {
  return t === n || t !== t && n !== n;
}
var V1 = Object.prototype, K1 = V1.hasOwnProperty;
function W1(t, n, e) {
  var r = t[n];
  (!(K1.call(t, n) && Ge(r, e)) || e === void 0 && !(n in t)) && G1(t, n, e);
}
var Z1 = 9007199254740991;
function Si(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Z1;
}
function Cn(t) {
  return t != null && Si(t.length) && !Js(t);
}
function J1(t, n, e) {
  if (!ht(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Cn(e) && Ye(n, e.length) : r == "string" && n in e) ? Ge(e[n], t) : !1;
}
var Q1 = Object.prototype;
function Qs(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Q1;
  return t === e;
}
function tw(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var nw = "[object Arguments]";
function io(t) {
  return It(t) && jt(t) == nw;
}
var tu = Object.prototype, ew = tu.hasOwnProperty, rw = tu.propertyIsEnumerable, nu = io(/* @__PURE__ */ function() {
  return arguments;
}()) ? io : function(t) {
  return It(t) && ew.call(t, "callee") && !rw.call(t, "callee");
};
function iw() {
  return !1;
}
var eu = typeof exports == "object" && exports && !exports.nodeType && exports, ao = eu && typeof module == "object" && module && !module.nodeType && module, aw = ao && ao.exports === eu, oo = aw ? _t.Buffer : void 0, ow = oo ? oo.isBuffer : void 0, Br = ow || iw, sw = "[object Arguments]", uw = "[object Array]", lw = "[object Boolean]", cw = "[object Date]", fw = "[object Error]", hw = "[object Function]", pw = "[object Map]", dw = "[object Number]", gw = "[object Object]", _w = "[object RegExp]", yw = "[object Set]", vw = "[object String]", mw = "[object WeakMap]", ww = "[object ArrayBuffer]", bw = "[object DataView]", xw = "[object Float32Array]", Mw = "[object Float64Array]", Aw = "[object Int8Array]", $w = "[object Int16Array]", Nw = "[object Int32Array]", Tw = "[object Uint8Array]", Sw = "[object Uint8ClampedArray]", Pw = "[object Uint16Array]", kw = "[object Uint32Array]", N = {};
N[xw] = N[Mw] = N[Aw] = N[$w] = N[Nw] = N[Tw] = N[Sw] = N[Pw] = N[kw] = !0;
N[sw] = N[uw] = N[ww] = N[lw] = N[bw] = N[cw] = N[fw] = N[hw] = N[pw] = N[dw] = N[gw] = N[_w] = N[yw] = N[vw] = N[mw] = !1;
function zw(t) {
  return It(t) && Si(t.length) && !!N[jt(t)];
}
function Ew(t) {
  return function(n) {
    return t(n);
  };
}
var ru = typeof exports == "object" && exports && !exports.nodeType && exports, gn = ru && typeof module == "object" && module && !module.nodeType && module, Ow = gn && gn.exports === ru, pr = Ow && Ks.process, so = function() {
  try {
    var t = gn && gn.require && gn.require("util").types;
    return t || pr && pr.binding && pr.binding("util");
  } catch {
  }
}(), uo = so && so.isTypedArray, iu = uo ? Ew(uo) : zw, Cw = Object.prototype, Iw = Cw.hasOwnProperty;
function au(t, n) {
  var e = W(t), r = !e && nu(t), i = !e && !r && Br(t), a = !e && !r && !i && iu(t), o = e || r || i || a, s = o ? tw(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || Iw.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ye(u, l))) && s.push(u);
  return s;
}
function ou(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Rw = ou(Object.keys, Object), qw = Object.prototype, jw = qw.hasOwnProperty;
function Fw(t) {
  if (!Qs(t))
    return Rw(t);
  var n = [];
  for (var e in Object(t))
    jw.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Ve(t) {
  return Cn(t) ? au(t) : Fw(t);
}
function Dw(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Lw = Object.prototype, Hw = Lw.hasOwnProperty;
function Bw(t) {
  if (!ht(t))
    return Dw(t);
  var n = Qs(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Hw.call(t, r)) || e.push(r);
  return e;
}
function Xw(t) {
  return Cn(t) ? au(t, !0) : Bw(t);
}
var Uw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Yw = /^\w*$/;
function Pi(t, n) {
  if (W(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Xe(t) ? !0 : Yw.test(t) || !Uw.test(t) || n != null && t in Object(n);
}
var Tn = Dt(Object, "create");
function Gw() {
  this.__data__ = Tn ? Tn(null) : {}, this.size = 0;
}
function Vw(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Kw = "__lodash_hash_undefined__", Ww = Object.prototype, Zw = Ww.hasOwnProperty;
function Jw(t) {
  var n = this.__data__;
  if (Tn) {
    var e = n[t];
    return e === Kw ? void 0 : e;
  }
  return Zw.call(n, t) ? n[t] : void 0;
}
var Qw = Object.prototype, tb = Qw.hasOwnProperty;
function nb(t) {
  var n = this.__data__;
  return Tn ? n[t] !== void 0 : tb.call(n, t);
}
var eb = "__lodash_hash_undefined__";
function rb(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Tn && n === void 0 ? eb : n, this;
}
function Rt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Rt.prototype.clear = Gw;
Rt.prototype.delete = Vw;
Rt.prototype.get = Jw;
Rt.prototype.has = nb;
Rt.prototype.set = rb;
function ib() {
  this.__data__ = [], this.size = 0;
}
function Ke(t, n) {
  for (var e = t.length; e--; )
    if (Ge(t[e][0], n))
      return e;
  return -1;
}
var ab = Array.prototype, ob = ab.splice;
function sb(t) {
  var n = this.__data__, e = Ke(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : ob.call(n, e, 1), --this.size, !0;
}
function ub(t) {
  var n = this.__data__, e = Ke(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function lb(t) {
  return Ke(this.__data__, t) > -1;
}
function cb(t, n) {
  var e = this.__data__, r = Ke(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function yt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
yt.prototype.clear = ib;
yt.prototype.delete = sb;
yt.prototype.get = ub;
yt.prototype.has = lb;
yt.prototype.set = cb;
var Sn = Dt(_t, "Map");
function fb() {
  this.size = 0, this.__data__ = {
    hash: new Rt(),
    map: new (Sn || yt)(),
    string: new Rt()
  };
}
function hb(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function We(t, n) {
  var e = t.__data__;
  return hb(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function pb(t) {
  var n = We(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function db(t) {
  return We(this, t).get(t);
}
function gb(t) {
  return We(this, t).has(t);
}
function _b(t, n) {
  var e = We(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function vt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
vt.prototype.clear = fb;
vt.prototype.delete = pb;
vt.prototype.get = db;
vt.prototype.has = gb;
vt.prototype.set = _b;
var yb = "Expected a function";
function ki(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(yb);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (ki.Cache || vt)(), e;
}
ki.Cache = vt;
var vb = 500;
function mb(t) {
  var n = ki(t, function(r) {
    return e.size === vb && e.clear(), r;
  }), e = n.cache;
  return n;
}
var wb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bb = /\\(\\)?/g, xb = mb(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(wb, function(e, r, i, a) {
    n.push(i ? a.replace(bb, "$1") : r || e);
  }), n;
});
function Ze(t) {
  return t == null ? "" : Zs(t);
}
function Je(t, n) {
  return W(t) ? t : Pi(t, n) ? [t] : xb(Ze(t));
}
function In(t) {
  if (typeof t == "string" || Xe(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function zi(t, n) {
  n = Je(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[In(n[e++])];
  return e && e == r ? t : void 0;
}
function Mb(t, n, e) {
  var r = t == null ? void 0 : zi(t, n);
  return r === void 0 ? e : r;
}
function su(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Ab = ou(Object.getPrototypeOf, Object);
function $b(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function Nb(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, $b(t, n, e);
}
var Tb = "\\ud800-\\udfff", Sb = "\\u0300-\\u036f", Pb = "\\ufe20-\\ufe2f", kb = "\\u20d0-\\u20ff", zb = Sb + Pb + kb, Eb = "\\ufe0e\\ufe0f", Ob = "\\u200d", Cb = RegExp("[" + Ob + Tb + zb + Eb + "]");
function uu(t) {
  return Cb.test(t);
}
function Ib(t) {
  return t.split("");
}
var lu = "\\ud800-\\udfff", Rb = "\\u0300-\\u036f", qb = "\\ufe20-\\ufe2f", jb = "\\u20d0-\\u20ff", Fb = Rb + qb + jb, Db = "\\ufe0e\\ufe0f", Lb = "[" + lu + "]", Xr = "[" + Fb + "]", Ur = "\\ud83c[\\udffb-\\udfff]", Hb = "(?:" + Xr + "|" + Ur + ")", cu = "[^" + lu + "]", fu = "(?:\\ud83c[\\udde6-\\uddff]){2}", hu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Bb = "\\u200d", pu = Hb + "?", du = "[" + Db + "]?", Xb = "(?:" + Bb + "(?:" + [cu, fu, hu].join("|") + ")" + du + pu + ")*", Ub = du + pu + Xb, Yb = "(?:" + [cu + Xr + "?", Xr, fu, hu, Lb].join("|") + ")", Gb = RegExp(Ur + "(?=" + Ur + ")|" + Yb + Ub, "g");
function Vb(t) {
  return t.match(Gb) || [];
}
function Kb(t) {
  return uu(t) ? Vb(t) : Ib(t);
}
function Wb(t) {
  return function(n) {
    n = Ze(n);
    var e = uu(n) ? Kb(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Nb(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var Zb = Wb("toUpperCase");
function Jb(t) {
  return Zb(Ze(t).toLowerCase());
}
function Qb() {
  this.__data__ = new yt(), this.size = 0;
}
function tx(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function nx(t) {
  return this.__data__.get(t);
}
function ex(t) {
  return this.__data__.has(t);
}
var rx = 200;
function ix(t, n) {
  var e = this.__data__;
  if (e instanceof yt) {
    var r = e.__data__;
    if (!Sn || r.length < rx - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new vt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function lt(t) {
  var n = this.__data__ = new yt(t);
  this.size = n.size;
}
lt.prototype.clear = Qb;
lt.prototype.delete = tx;
lt.prototype.get = nx;
lt.prototype.has = ex;
lt.prototype.set = ix;
function ax(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function gu() {
  return [];
}
var ox = Object.prototype, sx = ox.propertyIsEnumerable, lo = Object.getOwnPropertySymbols, _u = lo ? function(t) {
  return t == null ? [] : (t = Object(t), ax(lo(t), function(n) {
    return sx.call(t, n);
  }));
} : gu, ux = Object.getOwnPropertySymbols, lx = ux ? function(t) {
  for (var n = []; t; )
    su(n, _u(t)), t = Ab(t);
  return n;
} : gu;
function yu(t, n, e) {
  var r = n(t);
  return W(t) ? r : su(r, e(t));
}
function co(t) {
  return yu(t, Ve, _u);
}
function cx(t) {
  return yu(t, Xw, lx);
}
var Yr = Dt(_t, "DataView"), Gr = Dt(_t, "Promise"), Vr = Dt(_t, "Set"), fo = "[object Map]", fx = "[object Object]", ho = "[object Promise]", po = "[object Set]", go = "[object WeakMap]", _o = "[object DataView]", hx = Ft(Yr), px = Ft(Sn), dx = Ft(Gr), gx = Ft(Vr), _x = Ft(Hr), st = jt;
(Yr && st(new Yr(new ArrayBuffer(1))) != _o || Sn && st(new Sn()) != fo || Gr && st(Gr.resolve()) != ho || Vr && st(new Vr()) != po || Hr && st(new Hr()) != go) && (st = function(t) {
  var n = jt(t), e = n == fx ? t.constructor : void 0, r = e ? Ft(e) : "";
  if (r)
    switch (r) {
      case hx:
        return _o;
      case px:
        return fo;
      case dx:
        return ho;
      case gx:
        return po;
      case _x:
        return go;
    }
  return n;
});
var yo = _t.Uint8Array, yx = "__lodash_hash_undefined__";
function vx(t) {
  return this.__data__.set(t, yx), this;
}
function mx(t) {
  return this.__data__.has(t);
}
function Se(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new vt(); ++n < e; )
    this.add(t[n]);
}
Se.prototype.add = Se.prototype.push = vx;
Se.prototype.has = mx;
function wx(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function bx(t, n) {
  return t.has(n);
}
var xx = 1, Mx = 2;
function vu(t, n, e, r, i, a) {
  var o = e & xx, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & Mx ? new Se() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], _ = n[h];
    if (r)
      var w = o ? r(_, d, h, n, t, a) : r(d, _, h, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!wx(n, function(y, x) {
        if (!bx(p, x) && (d === y || i(d, y, e, r, a)))
          return p.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === _ || i(d, _, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function mu(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Ax(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var $x = 1, Nx = 2, Tx = "[object Boolean]", Sx = "[object Date]", Px = "[object Error]", kx = "[object Map]", zx = "[object Number]", Ex = "[object RegExp]", Ox = "[object Set]", Cx = "[object String]", Ix = "[object Symbol]", Rx = "[object ArrayBuffer]", qx = "[object DataView]", vo = xt ? xt.prototype : void 0, dr = vo ? vo.valueOf : void 0;
function jx(t, n, e, r, i, a, o) {
  switch (e) {
    case qx:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Rx:
      return !(t.byteLength != n.byteLength || !a(new yo(t), new yo(n)));
    case Tx:
    case Sx:
    case zx:
      return Ge(+t, +n);
    case Px:
      return t.name == n.name && t.message == n.message;
    case Ex:
    case Cx:
      return t == n + "";
    case kx:
      var s = mu;
    case Ox:
      var l = r & $x;
      if (s || (s = Ax), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= Nx, o.set(t, n);
      var c = vu(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case Ix:
      if (dr)
        return dr.call(t) == dr.call(n);
  }
  return !1;
}
var Fx = 1, Dx = Object.prototype, Lx = Dx.hasOwnProperty;
function Hx(t, n, e, r, i, a) {
  var o = e & Fx, s = co(t), l = s.length, u = co(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : Lx.call(n, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var _ = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++h < l; ) {
    f = s[h];
    var y = t[f], x = n[f];
    if (r)
      var M = o ? r(x, y, f, n, t, a) : r(y, x, f, t, n, a);
    if (!(M === void 0 ? y === x || i(y, x, e, r, a) : M)) {
      _ = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (_ && !w) {
    var g = t.constructor, m = n.constructor;
    g != m && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof m == "function" && m instanceof m) && (_ = !1);
  }
  return a.delete(t), a.delete(n), _;
}
var Bx = 1, mo = "[object Arguments]", wo = "[object Array]", Kn = "[object Object]", Xx = Object.prototype, bo = Xx.hasOwnProperty;
function Ux(t, n, e, r, i, a) {
  var o = W(t), s = W(n), l = o ? wo : st(t), u = s ? wo : st(n);
  l = l == mo ? Kn : l, u = u == mo ? Kn : u;
  var c = l == Kn, h = u == Kn, f = l == u;
  if (f && Br(t)) {
    if (!Br(n))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new lt()), o || iu(t) ? vu(t, n, e, r, i, a) : jx(t, n, l, e, r, i, a);
  if (!(e & Bx)) {
    var p = c && bo.call(t, "__wrapped__"), d = h && bo.call(n, "__wrapped__");
    if (p || d) {
      var _ = p ? t.value() : t, w = d ? n.value() : n;
      return a || (a = new lt()), i(_, w, e, r, a);
    }
  }
  return f ? (a || (a = new lt()), Hx(t, n, e, r, i, a)) : !1;
}
function Ei(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !It(t) && !It(n) ? t !== t && n !== n : Ux(t, n, e, r, Ei, i);
}
var Yx = 1, Gx = 2;
function Vx(t, n, e, r) {
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
      var c = new lt(), h;
      if (!(h === void 0 ? Ei(u, l, Yx | Gx, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function wu(t) {
  return t === t && !ht(t);
}
function Kx(t) {
  for (var n = Ve(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, wu(i)];
  }
  return n;
}
function bu(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function Wx(t) {
  var n = Kx(t);
  return n.length == 1 && n[0][2] ? bu(n[0][0], n[0][1]) : function(e) {
    return e === t || Vx(e, t, n);
  };
}
function Zx(t, n) {
  return t != null && n in Object(t);
}
function xu(t, n, e) {
  n = Je(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = In(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Si(i) && Ye(o, i) && (W(t) || nu(t)));
}
function Jx(t, n) {
  return t != null && xu(t, n, Zx);
}
var Qx = 1, t2 = 2;
function n2(t, n) {
  return Pi(t) && wu(n) ? bu(In(t), n) : function(e) {
    var r = Mb(e, t);
    return r === void 0 && r === n ? Jx(e, t) : Ei(n, r, Qx | t2);
  };
}
function e2(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function r2(t) {
  return function(n) {
    return zi(n, t);
  };
}
function i2(t) {
  return Pi(t) ? e2(In(t)) : r2(t);
}
function Mu(t) {
  return typeof t == "function" ? t : t == null ? Ti : typeof t == "object" ? W(t) ? n2(t[0], t[1]) : Wx(t) : i2(t);
}
function a2(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var o2 = a2();
function s2(t, n) {
  return t && o2(t, n, Ve);
}
function u2(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Cn(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var Au = u2(s2);
function l2(t) {
  return typeof t == "function" ? t : Ti;
}
function _n(t, n) {
  var e = W(t) ? X1 : Au;
  return e(t, l2(n));
}
function c2(t, n) {
  return Ue(n, function(e) {
    return [e, t[e]];
  });
}
function f2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var h2 = "[object Map]", p2 = "[object Set]";
function d2(t) {
  return function(n) {
    var e = st(n);
    return e == h2 ? mu(n) : e == p2 ? f2(n) : c2(n, t(n));
  };
}
var $u = d2(Ve);
function g2(t, n) {
  var e = -1, r = Cn(t) ? Array(t.length) : [];
  return Au(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function Mt(t, n) {
  var e = W(t) ? Ue : g2;
  return e(t, Mu(n));
}
var _2 = Object.prototype, y2 = _2.hasOwnProperty;
function v2(t, n) {
  return t != null && y2.call(t, n);
}
function Nu(t, n) {
  return t != null && xu(t, n, v2);
}
var m2 = "[object Boolean]";
function w2(t) {
  return t === !0 || t === !1 || It(t) && jt(t) == m2;
}
function b2(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var a = n(t[r]);
    a !== void 0 && (e = e === void 0 ? a : e + a);
  }
  return e;
}
var x2 = NaN;
function M2(t, n) {
  var e = t == null ? 0 : t.length;
  return e ? b2(t, n) / e : x2;
}
function xo(t) {
  return M2(t, Ti);
}
function A2(t, n, e, r) {
  if (!ht(t))
    return t;
  n = Je(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var l = In(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != o) {
      var c = s[l];
      u = void 0, u === void 0 && (u = ht(c) ? c : Ye(n[i + 1]) ? [] : {});
    }
    W1(s, l, u), s = s[l];
  }
  return t;
}
function $2(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = zi(t, o);
    e(s, o) && A2(a, Je(o, t), s);
  }
  return a;
}
function Oi(t, n) {
  if (t == null)
    return {};
  var e = Ue(cx(t), function(r) {
    return [r];
  });
  return n = Mu(n), $2(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var N2 = Math.ceil, T2 = Math.max;
function S2(t, n, e, r) {
  for (var i = -1, a = T2(N2((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function P2(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && J1(n, e, r) && (e = r = void 0), n = fr(n), e === void 0 ? (e = n, n = 0) : e = fr(e), r = r === void 0 ? n < e ? 1 : -1 : fr(r), S2(n, e, r);
  };
}
var Tu = P2();
function k2() {
  var t = arguments, n = Ze(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
const P = {
  widgets: {
    slider_size: 400,
    slider_gap: 1.5,
    slider_anchor: { x: 1, y: 8 },
    toggle_anchor: { x: 7, y: 4 },
    toggle_label_pos: "right",
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 },
    radio_anchor: { x: 7, y: 2 },
    radio_size: 150,
    radio_orientation: "horizontal",
    radio_label_position: "top",
    radio_shape: "rect"
  },
  simulation: {
    delay: 10
  }
}, z = {
  dt: 1,
  L: 100,
  agentsize: 1,
  speed: {
    range: [0, 1],
    default: 0.2
  },
  wiggle: {
    range: [0, 180],
    default: 50
  },
  interaction_radius: {
    range: [0, 5],
    default: 3
  },
  number_of_particles: {
    choices: [50, 100, 200, 400],
    default: 2
  },
  color_by_heading: {
    default: !0
  }
}, Ci = (t) => Mt($u(t), (n) => {
  n[1].id = n[0], n[1].label = n[1].label || k2(Jb(n[0]), /_/g, " ");
}), Ii = (t) => Mt($u(t), (n) => n[1]), Ri = (t, n) => _n(t, (e, r) => e.widget = n[r]), z2 = (t) => Oi(t, (n) => Nu(n, "range")), E2 = (t) => Oi(t, (n) => w2(n.default)), O2 = (t) => Oi(t, (n) => Nu(n, "choices")), gr = zn().domain([0, 360]).range([0, 2 * Math.PI]), C2 = zn().range([0, 360]).domain([0, 2 * Math.PI]), qi = z2(z), ji = E2(z), Fi = O2(z);
Ci(qi);
Ci(ji);
Ci(Fi);
const Su = Ii(qi), Pu = Ii(ji), ku = Ii(Fi), ie = Mt(
  Su,
  (t) => Wm().id(t.id).label(t.label).range(t.range).value(t.default).size(P.widgets.slider_size)
), Kr = Mt(
  Pu,
  (t) => Zm().id(t.id).label(t.label).value(t.default)
), Wr = Mt(
  ku,
  (t) => Jm().choices(t.choices).id(t.id).value(t.default).orientation(P.widgets.radio_orientation).labelposition(P.widgets.radio_label_position)
);
Ri(Pu, Kr);
Ri(Su, ie);
Ri(ku, Wr);
const bt = Ni().actions(["play", "pause"]), Qe = Ni().actions(["back"]), tr = Ni().actions(["rewind"]), I2 = [bt, Qe, tr], R2 = (t, n) => {
  const e = n.position(P.widgets.slider_anchor.x, Tu(ie.length).map((a) => P.widgets.slider_anchor.y + P.widgets.slider_gap * a)), r = n.position(P.widgets.toggle_anchor.x, P.widgets.toggle_anchor.y), i = n.position(P.widgets.radio_anchor.x, P.widgets.radio_anchor.y);
  ie.forEach((a, o) => a.position(e[o])), Kr[0].position(r).labelposition(P.widgets.toggle_label_pos), Wr[0].position(i).size(P.widgets.radio_size).shape(P.widgets.radio_shape), bt.position(n.position(P.widgets.playbutton_anchor.x, P.widgets.playbutton_anchor.y)).size(P.widgets.playbutton_size), tr.position(n.position(P.widgets.backbutton_anchor.x, P.widgets.backbutton_anchor.y)), Qe.position(n.position(P.widgets.resetbutton_anchor.x, P.widgets.resetbutton_anchor.y)), t.selectAll(null).data(ie).enter().append(Vn), t.selectAll(null).data(Kr).enter().append(Vn), t.selectAll(null).data(I2).enter().append(Vn), t.selectAll(null).data(Wr).enter().append(Vn);
}, q2 = (t) => {
  _n(qi, (n) => n.widget.reset(t, n.default)), _n(ji, (n) => n.widget.reset(t, n.default)), _n(Fi, (n) => n.widget.reset(t, n.default)), z.number_of_particles.widget.update();
}, wt = z.L, Mo = z.dt;
var Pe = [];
const j2 = () => {
  z.timer = {}, z.tick = 0;
  const t = z.number_of_particles.choices[z.number_of_particles.widget.value()];
  Pe = Mt(Tu(t), (n) => ({
    index: n,
    x: wt * Math.random(),
    y: wt * Math.random(),
    theta: 2 * Math.PI * Math.random()
  }));
}, F2 = () => {
  z.tick++, _n(Pe, (t) => {
    var n = Mo * z.speed.widget.value() * Math.cos(t.theta), e = Mo * z.speed.widget.value() * Math.sin(t.theta);
    const r = t.x + n, i = t.y + e;
    r < 0 && (n += wt), i < 0 && (e += wt), r > wt && (n -= wt), i > wt && (e -= wt), t.x += n, t.y += e;
    var a = Pe.filter((l) => (l.x - t.x) ** 2 + (l.y - t.y) ** 2 <= z.interaction_radius.widget.value() ** 2), o = xo(Mt(a, (l) => Math.cos(gr(l.theta)))), s = xo(Mt(a, (l) => Math.sin(gr(l.theta))));
    t.theta = C2(Math.atan2(s, o)), t.theta += gr(z.wiggle.widget.value()) * (Math.random() - 0.5);
  });
}, zu = z.L, ae = zn().domain([0, zu]), Zr = zn().domain([0, zu]), D2 = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  ae.range([0, e]), Zr.range([0, r]), t.selectAll("#origin").remove(), t.append("g").attr("id", "origin").selectAll(null).data(Pe).enter().append("circle").attr("class", Te.agent).attr("cx", (a) => ae(a.x)).attr("cy", (a) => Zr(a.y)).attr("r", ae(z.agentsize / 2)).style("fill", (a) => z.color_by_heading.widget.value() ? ns(a.theta / 2 / Math.PI) : null);
}, L2 = (t, n) => {
  t.selectAll("." + Te.agent).attr("cx", (e) => ae(e.x)).attr("cy", (e) => Zr(e.y)).style("fill", (e) => z.color_by_heading.widget.value() ? ns(e.theta / 2 / Math.PI) : null);
};
function H2(t, n) {
  F2(), L2(t);
}
function Jr(t, n) {
  j2(), D2(t, n);
}
var Ao = {};
const B2 = (t, n) => {
  bt.value() == 1 ? Ao = ef(() => H2(t), P.simulation.delay) : Ao.stop();
}, X2 = (t, n, e) => {
  tr.update(() => q2(n)), bt.update(() => B2(t)), Qe.update(() => Jr(t, e)), z.number_of_particles.widget.update(() => Jr(t, e));
}, U2 = {
  name: "@explorables/explorable_template",
  title: "Explorable Title",
  subtitle: "Explorable Subtitle",
  description: "This is a template for making a complexity explorable. The template can be used to create a new complexity explorable. This template implements the Vicsek Model.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Y2(t, n = Eu) {
  const e = o1(t, n), r = e.display, i = e.controls, a = e.grid;
  return R2(i, a), X2(r, i, n), Jr(r, n), {
    halt() {
      bt.value() === 1 && bt.press(i);
    },
    reset() {
      bt.value() === 1 && bt.press(i), tr.press(i), Qe.press(i);
    },
    config: n,
    meta: U2
  };
}
export {
  Eu as config,
  Y2 as default,
  Y2 as load,
  U2 as meta
};
