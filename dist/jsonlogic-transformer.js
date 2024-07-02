var wr = { exports: {} }, Or, tn;
function os() {
  if (tn) return Or;
  tn = 1;
  var e = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, u = Object.prototype.hasOwnProperty, c = (_, f) => {
    for (var h in f) e(_, h, { get: f[h], enumerable: !0 });
  }, N = (_, f, h, P) => {
    if (f && typeof f == "object" || typeof f == "function") for (let O of n(f)) !u.call(_, O) && O !== h && e(_, O, { get: () => f[O], enumerable: !(P = r(f, O)) || P.enumerable });
    return _;
  }, E = (_) => N(e({}, "__esModule", { value: !0 }), _), y = {};
  c(y, { defaultOptions: () => D, numericQuantity: () => x, numericRegex: () => R, numericRegexWithTrailingInvalid: () => v, parseRomanNumerals: () => G, romanNumeralRegex: () => $, romanNumeralUnicodeRegex: () => I, romanNumeralUnicodeToAsciiMap: () => p, romanNumeralValues: () => T, vulgarFractionToAsciiMap: () => w, vulgarFractionsRegex: () => b }), Or = E(y);
  var w = { "¼": "1/4", "½": "1/2", "¾": "3/4", "⅐": "1/7", "⅑": "1/9", "⅒": "1/10", "⅓": "1/3", "⅔": "2/3", "⅕": "1/5", "⅖": "2/5", "⅗": "3/5", "⅘": "4/5", "⅙": "1/6", "⅚": "5/6", "⅛": "1/8", "⅜": "3/8", "⅝": "5/8", "⅞": "7/8", "⅟": "1/" }, R = /^(?=-?\s*\.\d|-?\s*\d)(-)?\s*((?:\d(?:[\d,_]*\d)?)*)(([eE][+-]?\d(?:[\d,_]*\d)?)?|\.\d(?:[\d,_]*\d)?([eE][+-]?\d(?:[\d,_]*\d)?)?|(\s+\d(?:[\d,_]*\d)?\s*)?\s*\/\s*\d(?:[\d,_]*\d)?)?$/, v = new RegExp(R.source.replace(/\$$/, "(?:\\s*[^\\.\\d\\/].*)?")), b = new RegExp(`(${Object.keys(w).join("|")})`), T = { MMM: 3e3, MM: 2e3, M: 1e3, CM: 900, DCCC: 800, DCC: 700, DC: 600, D: 500, CD: 400, CCC: 300, CC: 200, C: 100, XC: 90, LXXX: 80, LXX: 70, LX: 60, L: 50, XL: 40, XXX: 30, XX: 20, XII: 12, XI: 11, X: 10, IX: 9, VIII: 8, VII: 7, VI: 6, V: 5, IV: 4, III: 3, II: 2, I: 1 }, p = { "Ⅰ": "I", "Ⅱ": "II", "Ⅲ": "III", "Ⅳ": "IV", "Ⅴ": "V", "Ⅵ": "VI", "Ⅶ": "VII", "Ⅷ": "VIII", "Ⅸ": "IX", "Ⅹ": "X", "Ⅺ": "XI", "Ⅻ": "XII", "Ⅼ": "L", "Ⅽ": "C", "Ⅾ": "D", "Ⅿ": "M", "ⅰ": "I", "ⅱ": "II", "ⅲ": "III", "ⅳ": "IV", "ⅴ": "V", "ⅵ": "VI", "ⅶ": "VII", "ⅷ": "VIII", "ⅸ": "IX", "ⅹ": "X", "ⅺ": "XI", "ⅻ": "XII", "ⅼ": "L", "ⅽ": "C", "ⅾ": "D", "ⅿ": "M" }, I = new RegExp(`(${Object.keys(p).join("|")})`, "gi"), $ = /^(?=[MDCLXVI])(M{0,3})(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i, D = { round: 3, allowTrailingInvalid: !1, romanNumerals: !1 }, G = (_) => {
    let f = `${_}`.replace(I, (A, k) => p[k]).toUpperCase(), h = $.exec(f);
    if (!h) return NaN;
    let [, P, O, C, g] = h;
    return (T[P] ?? 0) + (T[O] ?? 0) + (T[C] ?? 0) + (T[g] ?? 0);
  }, H = /^\s*\//, x = (_, f = D) => {
    if (typeof _ == "number" || typeof _ == "bigint") return _;
    let h = NaN, P = `${_}`.replace(b, (M, B) => ` ${w[B]}`).replace("⁄", "/").trim();
    if (P.length === 0) return NaN;
    let O = { ...D, ...f }, C = (O.allowTrailingInvalid ? v : R).exec(P);
    if (!C) return O.romanNumerals ? G(P) : NaN;
    let [, g, A, k] = C, U = A.replace(/[,_]/g, ""), F = k == null ? void 0 : k.replace(/[,_]/g, "");
    if (!U && F && F.startsWith(".") ? h = 0 : h = parseInt(U), !F) return g ? h * -1 : h;
    let j = O.round === !1 ? NaN : parseFloat(`1e${Math.floor(Math.max(0, O.round))}`);
    if (F.startsWith(".") || F.startsWith("e") || F.startsWith("E")) {
      let M = parseFloat(`${h}${F}`);
      h = isNaN(j) ? M : Math.round(M * j) / j;
    } else if (H.test(F)) {
      let M = parseInt(U), B = parseInt(F.replace("/", ""));
      h = isNaN(j) ? M / B : Math.round(M * j / B) / j;
    } else {
      let M = F.split("/"), [B, J] = M.map((Q) => parseInt(Q));
      h += isNaN(j) ? B / J : Math.round(B * j / J) / j;
    }
    return g ? h * -1 : h;
  };
  return Or;
}
var Er, rn;
function cs() {
  if (rn) return Er;
  rn = 1;
  var e = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, u = Object.prototype.hasOwnProperty, c = (_, f) => {
    for (var h in f)
      e(_, h, { get: f[h], enumerable: !0 });
  }, N = (_, f, h, P) => {
    if (f && typeof f == "object" || typeof f == "function")
      for (let O of n(f))
        !u.call(_, O) && O !== h && e(_, O, { get: () => f[O], enumerable: !(P = r(f, O)) || P.enumerable });
    return _;
  }, E = (_) => N(e({}, "__esModule", { value: !0 }), _), y = {};
  c(y, {
    defaultOptions: () => D,
    numericQuantity: () => x,
    numericRegex: () => R,
    numericRegexWithTrailingInvalid: () => v,
    parseRomanNumerals: () => G,
    romanNumeralRegex: () => $,
    romanNumeralUnicodeRegex: () => I,
    romanNumeralUnicodeToAsciiMap: () => p,
    romanNumeralValues: () => T,
    vulgarFractionToAsciiMap: () => w,
    vulgarFractionsRegex: () => b
  }), Er = E(y);
  var w = {
    "¼": "1/4",
    "½": "1/2",
    "¾": "3/4",
    "⅐": "1/7",
    "⅑": "1/9",
    "⅒": "1/10",
    "⅓": "1/3",
    "⅔": "2/3",
    "⅕": "1/5",
    "⅖": "2/5",
    "⅗": "3/5",
    "⅘": "4/5",
    "⅙": "1/6",
    "⅚": "5/6",
    "⅛": "1/8",
    "⅜": "3/8",
    "⅝": "5/8",
    "⅞": "7/8",
    "⅟": "1/"
  }, R = /^(?=-?\s*\.\d|-?\s*\d)(-)?\s*((?:\d(?:[\d,_]*\d)?)*)(([eE][+-]?\d(?:[\d,_]*\d)?)?|\.\d(?:[\d,_]*\d)?([eE][+-]?\d(?:[\d,_]*\d)?)?|(\s+\d(?:[\d,_]*\d)?\s*)?\s*\/\s*\d(?:[\d,_]*\d)?)?$/, v = new RegExp(
    R.source.replace(/\$$/, "(?:\\s*[^\\.\\d\\/].*)?")
  ), b = new RegExp(
    `(${Object.keys(w).join("|")})`
  ), T = {
    MMM: 3e3,
    MM: 2e3,
    M: 1e3,
    CM: 900,
    DCCC: 800,
    DCC: 700,
    DC: 600,
    D: 500,
    CD: 400,
    CCC: 300,
    CC: 200,
    C: 100,
    XC: 90,
    LXXX: 80,
    LXX: 70,
    LX: 60,
    L: 50,
    XL: 40,
    XXX: 30,
    XX: 20,
    XII: 12,
    // only here for tests; not used in practice
    XI: 11,
    // only here for tests; not used in practice
    X: 10,
    IX: 9,
    VIII: 8,
    VII: 7,
    VI: 6,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
    I: 1
  }, p = {
    // Roman Numeral One (U+2160)
    "Ⅰ": "I",
    // Roman Numeral Two (U+2161)
    "Ⅱ": "II",
    // Roman Numeral Three (U+2162)
    "Ⅲ": "III",
    // Roman Numeral Four (U+2163)
    "Ⅳ": "IV",
    // Roman Numeral Five (U+2164)
    "Ⅴ": "V",
    // Roman Numeral Six (U+2165)
    "Ⅵ": "VI",
    // Roman Numeral Seven (U+2166)
    "Ⅶ": "VII",
    // Roman Numeral Eight (U+2167)
    "Ⅷ": "VIII",
    // Roman Numeral Nine (U+2168)
    "Ⅸ": "IX",
    // Roman Numeral Ten (U+2169)
    "Ⅹ": "X",
    // Roman Numeral Eleven (U+216A)
    "Ⅺ": "XI",
    // Roman Numeral Twelve (U+216B)
    "Ⅻ": "XII",
    // Roman Numeral Fifty (U+216C)
    "Ⅼ": "L",
    // Roman Numeral One Hundred (U+216D)
    "Ⅽ": "C",
    // Roman Numeral Five Hundred (U+216E)
    "Ⅾ": "D",
    // Roman Numeral One Thousand (U+216F)
    "Ⅿ": "M",
    // Small Roman Numeral One (U+2170)
    "ⅰ": "I",
    // Small Roman Numeral Two (U+2171)
    "ⅱ": "II",
    // Small Roman Numeral Three (U+2172)
    "ⅲ": "III",
    // Small Roman Numeral Four (U+2173)
    "ⅳ": "IV",
    // Small Roman Numeral Five (U+2174)
    "ⅴ": "V",
    // Small Roman Numeral Six (U+2175)
    "ⅵ": "VI",
    // Small Roman Numeral Seven (U+2176)
    "ⅶ": "VII",
    // Small Roman Numeral Eight (U+2177)
    "ⅷ": "VIII",
    // Small Roman Numeral Nine (U+2178)
    "ⅸ": "IX",
    // Small Roman Numeral Ten (U+2179)
    "ⅹ": "X",
    // Small Roman Numeral Eleven (U+217A)
    "ⅺ": "XI",
    // Small Roman Numeral Twelve (U+217B)
    "ⅻ": "XII",
    // Small Roman Numeral Fifty (U+217C)
    "ⅼ": "L",
    // Small Roman Numeral One Hundred (U+217D)
    "ⅽ": "C",
    // Small Roman Numeral Five Hundred (U+217E)
    "ⅾ": "D",
    // Small Roman Numeral One Thousand (U+217F)
    "ⅿ": "M"
  }, I = new RegExp(
    `(${Object.keys(p).join("|")})`,
    "gi"
  ), $ = /^(?=[MDCLXVI])(M{0,3})(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i, D = {
    round: 3,
    allowTrailingInvalid: !1,
    romanNumerals: !1
  }, G = (_) => {
    const f = `${_}`.replace(
      I,
      (A, k) => p[k]
    ).toUpperCase(), h = $.exec(f);
    if (!h)
      return NaN;
    const [, P, O, C, g] = h;
    return (T[P] ?? 0) + (T[O] ?? 0) + (T[C] ?? 0) + (T[g] ?? 0);
  }, H = /^\s*\//, x = (_, f = D) => {
    if (typeof _ == "number" || typeof _ == "bigint")
      return _;
    let h = NaN;
    const P = `${_}`.replace(
      b,
      (M, B) => ` ${w[B]}`
    ).replace("⁄", "/").trim();
    if (P.length === 0)
      return NaN;
    const O = {
      ...D,
      ...f
    }, C = (O.allowTrailingInvalid ? v : R).exec(P);
    if (!C)
      return O.romanNumerals ? G(P) : NaN;
    const [, g, A, k] = C, U = A.replace(/[,_]/g, ""), F = k == null ? void 0 : k.replace(/[,_]/g, "");
    if (!U && F && F.startsWith(".") ? h = 0 : h = parseInt(U), !F)
      return g ? h * -1 : h;
    const j = O.round === !1 ? NaN : parseFloat(`1e${Math.floor(Math.max(0, O.round))}`);
    if (F.startsWith(".") || F.startsWith("e") || F.startsWith("E")) {
      const M = parseFloat(`${h}${F}`);
      h = isNaN(j) ? M : Math.round(M * j) / j;
    } else if (H.test(F)) {
      const M = parseInt(U), B = parseInt(F.replace("/", ""));
      h = isNaN(j) ? M / B : Math.round(M * j / B) / j;
    } else {
      const M = F.split("/"), [B, J] = M.map((Q) => parseInt(Q));
      h += isNaN(j) ? B / J : Math.round(B * j / J) / j;
    }
    return g ? h * -1 : h;
  };
  return Er;
}
process.env.NODE_ENV === "production" ? wr.exports = os() : wr.exports = cs();
var kt = wr.exports, Bt = { exports: {} }, Sr, nn;
function us() {
  if (nn) return Sr;
  nn = 1;
  var e = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, u = Object.prototype.hasOwnProperty, c = (i, t) => {
    for (var s in t) e(i, s, { get: t[s], enumerable: !0 });
  }, N = (i, t, s, l) => {
    if (t && typeof t == "object" || typeof t == "function") for (let d of n(t)) !u.call(i, d) && d !== s && e(i, d, { get: () => t[d], enumerable: !(l = r(t, d)) || l.enumerable });
    return i;
  }, E = (i) => N(e({}, "__esModule", { value: !0 }), i), y = {};
  c(y, { Immer: () => Ge, applyPatches: () => Ze, castDraft: () => Ue, castImmutable: () => gt, createDraft: () => pe, current: () => Te, enableMapSet: () => je, enablePatches: () => De, finishDraft: () => _t, freeze: () => k, immerable: () => R, isDraft: () => p, isDraftable: () => I, nothing: () => w, original: () => G, produce: () => _e, produceWithPatches: () => rt, setAutoFreeze: () => bt, setUseStrictShallowCopy: () => nt }), Sr = E(y);
  var w = Symbol.for("immer-nothing"), R = Symbol.for("immer-draftable"), v = Symbol.for("immer-state");
  function b(i, ...t) {
    throw new Error(`[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`);
  }
  var T = Object.getPrototypeOf;
  function p(i) {
    return !!i && !!i[v];
  }
  function I(i) {
    var t;
    return i ? D(i) || Array.isArray(i) || !!i[R] || !!((t = i.constructor) != null && t[R]) || O(i) || C(i) : !1;
  }
  var $ = Object.prototype.constructor.toString();
  function D(i) {
    if (!i || typeof i != "object") return !1;
    let t = T(i);
    if (t === null) return !0;
    let s = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return s === Object ? !0 : typeof s == "function" && Function.toString.call(s) === $;
  }
  function G(i) {
    return p(i) || b(15, i), i[v].t;
  }
  function H(i, t) {
    x(i) === 0 ? Reflect.ownKeys(i).forEach((s) => {
      t(s, i[s], i);
    }) : i.forEach((s, l) => t(l, s, i));
  }
  function x(i) {
    let t = i[v];
    return t ? t.o : Array.isArray(i) ? 1 : O(i) ? 2 : C(i) ? 3 : 0;
  }
  function _(i, t) {
    return x(i) === 2 ? i.has(t) : Object.prototype.hasOwnProperty.call(i, t);
  }
  function f(i, t) {
    return x(i) === 2 ? i.get(t) : i[t];
  }
  function h(i, t, s) {
    let l = x(i);
    l === 2 ? i.set(t, s) : l === 3 ? i.add(s) : i[t] = s;
  }
  function P(i, t) {
    return i === t ? i !== 0 || 1 / i === 1 / t : i !== i && t !== t;
  }
  function O(i) {
    return i instanceof Map;
  }
  function C(i) {
    return i instanceof Set;
  }
  function g(i) {
    return i.e || i.t;
  }
  function A(i, t) {
    if (O(i)) return new Map(i);
    if (C(i)) return new Set(i);
    if (Array.isArray(i)) return Array.prototype.slice.call(i);
    let s = D(i);
    if (t === !0 || t === "class_only" && !s) {
      let l = Object.getOwnPropertyDescriptors(i);
      delete l[v];
      let d = Reflect.ownKeys(l);
      for (let V = 0; V < d.length; V++) {
        let X = d[V], W = l[X];
        W.writable === !1 && (W.writable = !0, W.configurable = !0), (W.get || W.set) && (l[X] = { configurable: !0, writable: !0, enumerable: W.enumerable, value: i[X] });
      }
      return Object.create(T(i), l);
    } else {
      let l = T(i);
      if (l !== null && s) return { ...i };
      let d = Object.create(l);
      return Object.assign(d, i);
    }
  }
  function k(i, t = !1) {
    return F(i) || p(i) || !I(i) || (x(i) > 1 && (i.set = i.add = i.clear = i.delete = U), Object.freeze(i), t && Object.entries(i).forEach(([s, l]) => k(l, !0))), i;
  }
  function U() {
    b(2);
  }
  function F(i) {
    return Object.isFrozen(i);
  }
  var j = {};
  function M(i) {
    let t = j[i];
    return t || b(0, i), t;
  }
  function B(i, t) {
    j[i] || (j[i] = t);
  }
  var J;
  function Q() {
    return J;
  }
  function Y(i, t) {
    return { a: [], i, p: t, P: !0, d: 0 };
  }
  function te(i, t) {
    t && (M("Patches"), i.f = [], i.h = [], i.b = t);
  }
  function de(i) {
    Z(i), i.a.forEach(He), i.a = null;
  }
  function Z(i) {
    i === J && (J = i.i);
  }
  function tt(i) {
    return J = Y(J, i);
  }
  function He(i) {
    let t = i[v];
    t.o === 0 || t.o === 1 ? t.x() : t.m = !0;
  }
  function pt(i, t) {
    t.d = t.a.length;
    let s = t.a[0];
    return i !== void 0 && i !== s ? (s[v].s && (de(t), b(4)), I(i) && (i = Ke(t, i), t.i || Be(t, i)), t.f && M("Patches").T(s[v].t, i, t.f, t.h)) : i = Ke(t, s, []), de(t), t.f && t.b(t.f, t.h), i !== w ? i : void 0;
  }
  function Ke(i, t, s) {
    if (F(t)) return t;
    let l = t[v];
    if (!l) return H(t, (d, V) => Ye(i, l, t, d, V, s)), t;
    if (l.n !== i) return t;
    if (!l.s) return Be(i, l.t, !0), l.t;
    if (!l.c) {
      l.c = !0, l.n.d--;
      let d = l.e, V = d, X = !1;
      l.o === 3 && (V = new Set(d), d.clear(), X = !0), H(V, (W, S) => Ye(i, l, d, W, S, s, X)), Be(i, d, !1), s && i.f && M("Patches").g(l, s, i.f, i.h);
    }
    return l.e;
  }
  function Ye(i, t, s, l, d, V, X) {
    if (p(d)) {
      let W = V && t && t.o !== 3 && !_(t.r, l) ? V.concat(l) : void 0, S = Ke(i, d, W);
      if (h(s, l, S), p(S)) i.P = !1;
      else return;
    } else X && s.add(d);
    if (I(d) && !F(d)) {
      if (!i.p.y && i.d < 1) return;
      Ke(i, d), (!t || !t.n.i) && typeof l != "symbol" && Object.prototype.propertyIsEnumerable.call(s, l) && Be(i, d);
    }
  }
  function Be(i, t, s = !1) {
    !i.i && i.p.y && i.P && k(t, s);
  }
  function Oe(i, t) {
    let s = Array.isArray(i), l = { o: s ? 1 : 0, n: t ? t.n : Q(), s: !1, c: !1, r: {}, i: t, t: i, u: null, e: null, x: null, l: !1 }, d = l, V = Ie;
    s && (d = [l], V = ve);
    let { revoke: X, proxy: W } = Proxy.revocable(d, V);
    return l.u = W, l.x = X, W;
  }
  var Ie = { get(i, t) {
    if (t === v) return i;
    let s = g(i);
    if (!_(s, t)) return Pe(i, s, t);
    let l = s[t];
    return i.c || !I(l) ? l : l === Le(i.t, t) ? (Se(i), i.e[t] = Me(l, i)) : l;
  }, has(i, t) {
    return t in g(i);
  }, ownKeys(i) {
    return Reflect.ownKeys(g(i));
  }, set(i, t, s) {
    let l = ke(g(i), t);
    if (l != null && l.set) return l.set.call(i.u, s), !0;
    if (!i.s) {
      let d = Le(g(i), t), V = d == null ? void 0 : d[v];
      if (V && V.t === s) return i.e[t] = s, i.r[t] = !1, !0;
      if (P(s, d) && (s !== void 0 || _(i.t, t))) return !0;
      Se(i), $e(i);
    }
    return i.e[t] === s && (s !== void 0 || t in i.e) || Number.isNaN(s) && Number.isNaN(i.e[t]) || (i.e[t] = s, i.r[t] = !0), !0;
  }, deleteProperty(i, t) {
    return Le(i.t, t) !== void 0 || t in i.t ? (i.r[t] = !1, Se(i), $e(i)) : delete i.r[t], i.e && delete i.e[t], !0;
  }, getOwnPropertyDescriptor(i, t) {
    let s = g(i), l = Reflect.getOwnPropertyDescriptor(s, t);
    return l && { writable: !0, configurable: i.o !== 1 || t !== "length", enumerable: l.enumerable, value: s[t] };
  }, defineProperty() {
    b(11);
  }, getPrototypeOf(i) {
    return T(i.t);
  }, setPrototypeOf() {
    b(12);
  } }, ve = {};
  H(Ie, (i, t) => {
    ve[i] = function() {
      return arguments[0] = arguments[0][0], t.apply(this, arguments);
    };
  }), ve.deleteProperty = function(i, t) {
    return ve.set.call(this, i, t, void 0);
  }, ve.set = function(i, t, s) {
    return Ie.set.call(this, i[0], t, s, i[0]);
  };
  function Le(i, t) {
    let s = i[v];
    return (s ? g(s) : i)[t];
  }
  function Pe(i, t, s) {
    var d;
    let l = ke(t, s);
    return l ? "value" in l ? l.value : (d = l.get) == null ? void 0 : d.call(i.u) : void 0;
  }
  function ke(i, t) {
    if (!(t in i)) return;
    let s = T(i);
    for (; s; ) {
      let l = Object.getOwnPropertyDescriptor(s, t);
      if (l) return l;
      s = T(s);
    }
  }
  function $e(i) {
    i.s || (i.s = !0, i.i && $e(i.i));
  }
  function Se(i) {
    i.e || (i.e = A(i.t, i.n.p.S));
  }
  var Ge = class {
    constructor(i) {
      this.y = !0, this.S = !1, this.produce = (t, s, l) => {
        if (typeof t == "function" && typeof s != "function") {
          let V = s;
          s = t;
          let X = this;
          return function(W = V, ...S) {
            return X.produce(W, (m) => s.call(this, m, ...S));
          };
        }
        typeof s != "function" && b(6), l !== void 0 && typeof l != "function" && b(7);
        let d;
        if (I(t)) {
          let V = tt(this), X = Me(t, void 0), W = !0;
          try {
            d = s(X), W = !1;
          } finally {
            W ? de(V) : Z(V);
          }
          return te(V, l), pt(d, V);
        } else if (!t || typeof t != "object") {
          if (d = s(t), d === void 0 && (d = t), d === w && (d = void 0), this.y && k(d, !0), l) {
            let V = [], X = [];
            M("Patches").T(t, d, V, X), l(V, X);
          }
          return d;
        } else b(1, t);
      }, this.produceWithPatches = (t, s) => {
        if (typeof t == "function") return (V, ...X) => this.produceWithPatches(V, (W) => t(W, ...X));
        let l, d;
        return [this.produce(t, s, (V, X) => {
          l = V, d = X;
        }), l, d];
      }, typeof (i == null ? void 0 : i.autoFreeze) == "boolean" && this.setAutoFreeze(i.autoFreeze), typeof (i == null ? void 0 : i.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(i.useStrictShallowCopy);
    }
    createDraft(i) {
      I(i) || b(8), p(i) && (i = Te(i));
      let t = tt(this), s = Me(i, void 0);
      return s[v].l = !0, Z(t), s;
    }
    finishDraft(i, t) {
      let s = i && i[v];
      (!s || !s.l) && b(9);
      let { n: l } = s;
      return te(l, t), pt(void 0, l);
    }
    setAutoFreeze(i) {
      this.y = i;
    }
    setUseStrictShallowCopy(i) {
      this.S = i;
    }
    applyPatches(i, t) {
      let s;
      for (s = t.length - 1; s >= 0; s--) {
        let d = t[s];
        if (d.path.length === 0 && d.op === "replace") {
          i = d.value;
          break;
        }
      }
      s > -1 && (t = t.slice(s + 1));
      let l = M("Patches").A;
      return p(i) ? l(i, t) : this.produce(i, (d) => l(d, t));
    }
  };
  function Me(i, t) {
    let s = O(i) ? M("MapSet").I(i, t) : C(i) ? M("MapSet").D(i, t) : Oe(i, t);
    return (t ? t.n : Q()).a.push(s), s;
  }
  function Te(i) {
    return p(i) || b(10, i), Je(i);
  }
  function Je(i) {
    if (!I(i) || F(i)) return i;
    let t = i[v], s;
    if (t) {
      if (!t.s) return t.t;
      t.c = !0, s = A(i, t.n.p.S);
    } else s = A(i, !0);
    return H(s, (l, d) => {
      h(s, l, Je(d));
    }), t && (t.c = !1), s;
  }
  function De() {
    let i = "replace", t = "add", s = "remove";
    function l(z, ue, q, se) {
      switch (z.o) {
        case 0:
        case 2:
          return V(z, ue, q, se);
        case 1:
          return d(z, ue, q, se);
        case 3:
          return X(z, ue, q, se);
      }
    }
    function d(z, ue, q, se) {
      let { t: oe, r: ie } = z, ce = z.e;
      ce.length < oe.length && ([oe, ce] = [ce, oe], [q, se] = [se, q]);
      for (let K = 0; K < oe.length; K++) if (ie[K] && ce[K] !== oe[K]) {
        let ne = ue.concat([K]);
        q.push({ op: i, path: ne, value: L(ce[K]) }), se.push({ op: i, path: ne, value: L(oe[K]) });
      }
      for (let K = oe.length; K < ce.length; K++) {
        let ne = ue.concat([K]);
        q.push({ op: t, path: ne, value: L(ce[K]) });
      }
      for (let K = ce.length - 1; oe.length <= K; --K) {
        let ne = ue.concat([K]);
        se.push({ op: s, path: ne });
      }
    }
    function V(z, ue, q, se) {
      let { t: oe, e: ie } = z;
      H(z.r, (ce, K) => {
        let ne = f(oe, ce), re = f(ie, ce), le = K ? _(oe, ce) ? i : t : s;
        if (ne === re && le === i) return;
        let Ee = ue.concat(ce);
        q.push(le === s ? { op: le, path: Ee } : { op: le, path: Ee, value: re }), se.push(le === t ? { op: s, path: Ee } : le === s ? { op: t, path: Ee, value: L(ne) } : { op: i, path: Ee, value: L(ne) });
      });
    }
    function X(z, ue, q, se) {
      let { t: oe, e: ie } = z, ce = 0;
      oe.forEach((K) => {
        if (!ie.has(K)) {
          let ne = ue.concat([ce]);
          q.push({ op: s, path: ne, value: K }), se.unshift({ op: t, path: ne, value: K });
        }
        ce++;
      }), ce = 0, ie.forEach((K) => {
        if (!oe.has(K)) {
          let ne = ue.concat([ce]);
          q.push({ op: t, path: ne, value: K }), se.unshift({ op: s, path: ne, value: K });
        }
        ce++;
      });
    }
    function W(z, ue, q, se) {
      q.push({ op: i, path: [], value: ue === w ? void 0 : ue }), se.push({ op: i, path: [], value: z });
    }
    function S(z, ue) {
      return ue.forEach((q) => {
        let { path: se, op: oe } = q, ie = z;
        for (let re = 0; re < se.length - 1; re++) {
          let le = x(ie), Ee = se[re];
          typeof Ee != "string" && typeof Ee != "number" && (Ee = "" + Ee), (le === 0 || le === 1) && (Ee === "__proto__" || Ee === "constructor") && b(19), typeof ie == "function" && Ee === "prototype" && b(19), ie = f(ie, Ee), typeof ie != "object" && b(18, se.join("/"));
        }
        let ce = x(ie), K = m(q.value), ne = se[se.length - 1];
        switch (oe) {
          case i:
            switch (ce) {
              case 2:
                return ie.set(ne, K);
              case 3:
                b(16);
              default:
                return ie[ne] = K;
            }
          case t:
            switch (ce) {
              case 1:
                return ne === "-" ? ie.push(K) : ie.splice(ne, 0, K);
              case 2:
                return ie.set(ne, K);
              case 3:
                return ie.add(K);
              default:
                return ie[ne] = K;
            }
          case s:
            switch (ce) {
              case 1:
                return ie.splice(ne, 1);
              case 2:
                return ie.delete(ne);
              case 3:
                return ie.delete(q.value);
              default:
                return delete ie[ne];
            }
          default:
            b(17, oe);
        }
      }), z;
    }
    function m(z) {
      if (!I(z)) return z;
      if (Array.isArray(z)) return z.map(m);
      if (O(z)) return new Map(Array.from(z.entries()).map(([q, se]) => [q, m(se)]));
      if (C(z)) return new Set(Array.from(z).map(m));
      let ue = Object.create(T(z));
      for (let q in z) ue[q] = m(z[q]);
      return _(z, R) && (ue[R] = z[R]), ue;
    }
    function L(z) {
      return p(z) ? m(z) : z;
    }
    B("Patches", { A: S, g: l, T: W });
  }
  function je() {
    class i extends Map {
      constructor(S, m) {
        super(), this[v] = { o: 2, i: m, n: m ? m.n : Q(), s: !1, c: !1, e: void 0, r: void 0, t: S, u: this, l: !1, m: !1 };
      }
      get size() {
        return g(this[v]).size;
      }
      has(S) {
        return g(this[v]).has(S);
      }
      set(S, m) {
        let L = this[v];
        return X(L), (!g(L).has(S) || g(L).get(S) !== m) && (s(L), $e(L), L.r.set(S, !0), L.e.set(S, m), L.r.set(S, !0)), this;
      }
      delete(S) {
        if (!this.has(S)) return !1;
        let m = this[v];
        return X(m), s(m), $e(m), m.t.has(S) ? m.r.set(S, !1) : m.r.delete(S), m.e.delete(S), !0;
      }
      clear() {
        let S = this[v];
        X(S), g(S).size && (s(S), $e(S), S.r = /* @__PURE__ */ new Map(), H(S.t, (m) => {
          S.r.set(m, !1);
        }), S.e.clear());
      }
      forEach(S, m) {
        let L = this[v];
        g(L).forEach((z, ue, q) => {
          S.call(m, this.get(ue), ue, this);
        });
      }
      get(S) {
        let m = this[v];
        X(m);
        let L = g(m).get(S);
        if (m.c || !I(L) || L !== m.t.get(S)) return L;
        let z = Me(L, m);
        return s(m), m.e.set(S, z), z;
      }
      keys() {
        return g(this[v]).keys();
      }
      values() {
        let S = this.keys();
        return { [Symbol.iterator]: () => this.values(), next: () => {
          let m = S.next();
          return m.done ? m : { done: !1, value: this.get(m.value) };
        } };
      }
      entries() {
        let S = this.keys();
        return { [Symbol.iterator]: () => this.entries(), next: () => {
          let m = S.next();
          if (m.done) return m;
          let L = this.get(m.value);
          return { done: !1, value: [m.value, L] };
        } };
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    }
    function t(W, S) {
      return new i(W, S);
    }
    function s(W) {
      W.e || (W.r = /* @__PURE__ */ new Map(), W.e = new Map(W.t));
    }
    class l extends Set {
      constructor(S, m) {
        super(), this[v] = { o: 3, i: m, n: m ? m.n : Q(), s: !1, c: !1, e: void 0, t: S, u: this, a: /* @__PURE__ */ new Map(), m: !1, l: !1 };
      }
      get size() {
        return g(this[v]).size;
      }
      has(S) {
        let m = this[v];
        return X(m), m.e ? !!(m.e.has(S) || m.a.has(S) && m.e.has(m.a.get(S))) : m.t.has(S);
      }
      add(S) {
        let m = this[v];
        return X(m), this.has(S) || (V(m), $e(m), m.e.add(S)), this;
      }
      delete(S) {
        if (!this.has(S)) return !1;
        let m = this[v];
        return X(m), V(m), $e(m), m.e.delete(S) || (m.a.has(S) ? m.e.delete(m.a.get(S)) : !1);
      }
      clear() {
        let S = this[v];
        X(S), g(S).size && (V(S), $e(S), S.e.clear());
      }
      values() {
        let S = this[v];
        return X(S), V(S), S.e.values();
      }
      entries() {
        let S = this[v];
        return X(S), V(S), S.e.entries();
      }
      keys() {
        return this.values();
      }
      [Symbol.iterator]() {
        return this.values();
      }
      forEach(S, m) {
        let L = this.values(), z = L.next();
        for (; !z.done; ) S.call(m, z.value, z.value, this), z = L.next();
      }
    }
    function d(W, S) {
      return new l(W, S);
    }
    function V(W) {
      W.e || (W.e = /* @__PURE__ */ new Set(), W.t.forEach((S) => {
        if (I(S)) {
          let m = Me(S, W);
          W.a.set(S, m), W.e.add(m);
        } else W.e.add(S);
      }));
    }
    function X(W) {
      W.m && b(3, JSON.stringify(g(W)));
    }
    B("MapSet", { I: t, D: d });
  }
  var be = new Ge(), _e = be.produce, rt = be.produceWithPatches.bind(be), bt = be.setAutoFreeze.bind(be), nt = be.setUseStrictShallowCopy.bind(be), Ze = be.applyPatches.bind(be), pe = be.createDraft.bind(be), _t = be.finishDraft.bind(be);
  function Ue(i) {
    return i;
  }
  function gt(i) {
    return i;
  }
  return Sr;
}
var Ir, sn;
function ls() {
  if (sn) return Ir;
  sn = 1;
  var e = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, u = Object.prototype.hasOwnProperty, c = (t, s) => {
    for (var l in s)
      e(t, l, { get: s[l], enumerable: !0 });
  }, N = (t, s, l, d) => {
    if (s && typeof s == "object" || typeof s == "function")
      for (let V of n(s))
        !u.call(t, V) && V !== l && e(t, V, { get: () => s[V], enumerable: !(d = r(s, V)) || d.enumerable });
    return t;
  }, E = (t) => N(e({}, "__esModule", { value: !0 }), t), y = {};
  c(y, {
    Immer: () => Me,
    applyPatches: () => pe,
    castDraft: () => gt,
    castImmutable: () => i,
    createDraft: () => _t,
    current: () => Je,
    enableMapSet: () => be,
    enablePatches: () => je,
    finishDraft: () => Ue,
    freeze: () => U,
    immerable: () => R,
    isDraft: () => I,
    isDraftable: () => $,
    nothing: () => w,
    original: () => H,
    produce: () => rt,
    produceWithPatches: () => bt,
    setAutoFreeze: () => nt,
    setUseStrictShallowCopy: () => Ze
  }), Ir = E(y);
  var w = Symbol.for("immer-nothing"), R = Symbol.for("immer-draftable"), v = Symbol.for("immer-state"), b = process.env.NODE_ENV !== "production" ? [
    // All error codes, starting by 0:
    function(t) {
      return `The plugin for '${t}' has not been loaded into Immer. To enable the plugin, import and call \`enable${t}()\` when initializing your application.`;
    },
    function(t) {
      return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${t}'`;
    },
    "This object has been frozen and should not be mutated",
    function(t) {
      return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + t;
    },
    "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    "Immer forbids circular references",
    "The first or second argument to `produce` must be a function",
    "The third argument to `produce` must be a function or undefined",
    "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    "First argument to `finishDraft` must be a draft returned by `createDraft`",
    function(t) {
      return `'current' expects a draft, got: ${t}`;
    },
    "Object.defineProperty() cannot be used on an Immer draft",
    "Object.setPrototypeOf() cannot be used on an Immer draft",
    "Immer only supports deleting array indices",
    "Immer only supports setting array indices and the 'length' property",
    function(t) {
      return `'original' expects a draft, got: ${t}`;
    }
    // Note: if more errors are added, the errorOffset in Patches.ts should be increased
    // See Patches.ts for additional errors
  ] : [];
  function T(t, ...s) {
    if (process.env.NODE_ENV !== "production") {
      const l = b[t], d = typeof l == "function" ? l.apply(null, s) : l;
      throw new Error(`[Immer] ${d}`);
    }
    throw new Error(
      `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var p = Object.getPrototypeOf;
  function I(t) {
    return !!t && !!t[v];
  }
  function $(t) {
    var s;
    return t ? G(t) || Array.isArray(t) || !!t[R] || !!((s = t.constructor) != null && s[R]) || C(t) || g(t) : !1;
  }
  var D = Object.prototype.constructor.toString();
  function G(t) {
    if (!t || typeof t != "object")
      return !1;
    const s = p(t);
    if (s === null)
      return !0;
    const l = Object.hasOwnProperty.call(s, "constructor") && s.constructor;
    return l === Object ? !0 : typeof l == "function" && Function.toString.call(l) === D;
  }
  function H(t) {
    return I(t) || T(15, t), t[v].base_;
  }
  function x(t, s) {
    _(t) === 0 ? Reflect.ownKeys(t).forEach((l) => {
      s(l, t[l], t);
    }) : t.forEach((l, d) => s(d, l, t));
  }
  function _(t) {
    const s = t[v];
    return s ? s.type_ : Array.isArray(t) ? 1 : C(t) ? 2 : g(t) ? 3 : 0;
  }
  function f(t, s) {
    return _(t) === 2 ? t.has(s) : Object.prototype.hasOwnProperty.call(t, s);
  }
  function h(t, s) {
    return _(t) === 2 ? t.get(s) : t[s];
  }
  function P(t, s, l) {
    const d = _(t);
    d === 2 ? t.set(s, l) : d === 3 ? t.add(l) : t[s] = l;
  }
  function O(t, s) {
    return t === s ? t !== 0 || 1 / t === 1 / s : t !== t && s !== s;
  }
  function C(t) {
    return t instanceof Map;
  }
  function g(t) {
    return t instanceof Set;
  }
  function A(t) {
    return t.copy_ || t.base_;
  }
  function k(t, s) {
    if (C(t))
      return new Map(t);
    if (g(t))
      return new Set(t);
    if (Array.isArray(t))
      return Array.prototype.slice.call(t);
    const l = G(t);
    if (s === !0 || s === "class_only" && !l) {
      const d = Object.getOwnPropertyDescriptors(t);
      delete d[v];
      let V = Reflect.ownKeys(d);
      for (let X = 0; X < V.length; X++) {
        const W = V[X], S = d[W];
        S.writable === !1 && (S.writable = !0, S.configurable = !0), (S.get || S.set) && (d[W] = {
          configurable: !0,
          writable: !0,
          // could live with !!desc.set as well here...
          enumerable: S.enumerable,
          value: t[W]
        });
      }
      return Object.create(p(t), d);
    } else {
      const d = p(t);
      if (d !== null && l)
        return { ...t };
      const V = Object.create(d);
      return Object.assign(V, t);
    }
  }
  function U(t, s = !1) {
    return j(t) || I(t) || !$(t) || (_(t) > 1 && (t.set = t.add = t.clear = t.delete = F), Object.freeze(t), s && Object.entries(t).forEach(([l, d]) => U(d, !0))), t;
  }
  function F() {
    T(2);
  }
  function j(t) {
    return Object.isFrozen(t);
  }
  var M = {};
  function B(t) {
    const s = M[t];
    return s || T(0, t), s;
  }
  function J(t, s) {
    M[t] || (M[t] = s);
  }
  var Q;
  function Y() {
    return Q;
  }
  function te(t, s) {
    return {
      drafts_: [],
      parent_: t,
      immer_: s,
      // Whenever the modified draft contains a draft from another scope, we
      // need to prevent auto-freezing so the unowned draft can be finalized.
      canAutoFreeze_: !0,
      unfinalizedDrafts_: 0
    };
  }
  function de(t, s) {
    s && (B("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = s);
  }
  function Z(t) {
    tt(t), t.drafts_.forEach(pt), t.drafts_ = null;
  }
  function tt(t) {
    t === Q && (Q = t.parent_);
  }
  function He(t) {
    return Q = te(Q, t);
  }
  function pt(t) {
    const s = t[v];
    s.type_ === 0 || s.type_ === 1 ? s.revoke_() : s.revoked_ = !0;
  }
  function Ke(t, s) {
    s.unfinalizedDrafts_ = s.drafts_.length;
    const l = s.drafts_[0];
    return t !== void 0 && t !== l ? (l[v].modified_ && (Z(s), T(4)), $(t) && (t = Ye(s, t), s.parent_ || Oe(s, t)), s.patches_ && B("Patches").generateReplacementPatches_(
      l[v].base_,
      t,
      s.patches_,
      s.inversePatches_
    )) : t = Ye(s, l, []), Z(s), s.patches_ && s.patchListener_(s.patches_, s.inversePatches_), t !== w ? t : void 0;
  }
  function Ye(t, s, l) {
    if (j(s))
      return s;
    const d = s[v];
    if (!d)
      return x(
        s,
        (V, X) => Be(t, d, s, V, X, l)
      ), s;
    if (d.scope_ !== t)
      return s;
    if (!d.modified_)
      return Oe(t, d.base_, !0), d.base_;
    if (!d.finalized_) {
      d.finalized_ = !0, d.scope_.unfinalizedDrafts_--;
      const V = d.copy_;
      let X = V, W = !1;
      d.type_ === 3 && (X = new Set(V), V.clear(), W = !0), x(
        X,
        (S, m) => Be(t, d, V, S, m, l, W)
      ), Oe(t, V, !1), l && t.patches_ && B("Patches").generatePatches_(
        d,
        l,
        t.patches_,
        t.inversePatches_
      );
    }
    return d.copy_;
  }
  function Be(t, s, l, d, V, X, W) {
    if (process.env.NODE_ENV !== "production" && V === l && T(5), I(V)) {
      const S = X && s && s.type_ !== 3 && // Set objects are atomic since they have no keys.
      !f(s.assigned_, d) ? X.concat(d) : void 0, m = Ye(t, V, S);
      if (P(l, d, m), I(m))
        t.canAutoFreeze_ = !1;
      else
        return;
    } else W && l.add(V);
    if ($(V) && !j(V)) {
      if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
        return;
      Ye(t, V), (!s || !s.scope_.parent_) && typeof d != "symbol" && Object.prototype.propertyIsEnumerable.call(l, d) && Oe(t, V);
    }
  }
  function Oe(t, s, l = !1) {
    !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && U(s, l);
  }
  function Ie(t, s) {
    const l = Array.isArray(t), d = {
      type_: l ? 1 : 0,
      // Track which produce call this is associated with.
      scope_: s ? s.scope_ : Y(),
      // True for both shallow and deep changes.
      modified_: !1,
      // Used during finalization.
      finalized_: !1,
      // Track which properties have been assigned (true) or deleted (false).
      assigned_: {},
      // The parent draft state.
      parent_: s,
      // The base state.
      base_: t,
      // The base proxy.
      draft_: null,
      // set below
      // The base copy with any updated values.
      copy_: null,
      // Called by the `produce` function.
      revoke_: null,
      isManual_: !1
    };
    let V = d, X = ve;
    l && (V = [d], X = Le);
    const { revoke: W, proxy: S } = Proxy.revocable(V, X);
    return d.draft_ = S, d.revoke_ = W, S;
  }
  var ve = {
    get(t, s) {
      if (s === v)
        return t;
      const l = A(t);
      if (!f(l, s))
        return ke(t, l, s);
      const d = l[s];
      return t.finalized_ || !$(d) ? d : d === Pe(t.base_, s) ? (Ge(t), t.copy_[s] = Te(d, t)) : d;
    },
    has(t, s) {
      return s in A(t);
    },
    ownKeys(t) {
      return Reflect.ownKeys(A(t));
    },
    set(t, s, l) {
      const d = $e(A(t), s);
      if (d != null && d.set)
        return d.set.call(t.draft_, l), !0;
      if (!t.modified_) {
        const V = Pe(A(t), s), X = V == null ? void 0 : V[v];
        if (X && X.base_ === l)
          return t.copy_[s] = l, t.assigned_[s] = !1, !0;
        if (O(l, V) && (l !== void 0 || f(t.base_, s)))
          return !0;
        Ge(t), Se(t);
      }
      return t.copy_[s] === l && // special case: handle new props with value 'undefined'
      (l !== void 0 || s in t.copy_) || // special case: NaN
      Number.isNaN(l) && Number.isNaN(t.copy_[s]) || (t.copy_[s] = l, t.assigned_[s] = !0), !0;
    },
    deleteProperty(t, s) {
      return Pe(t.base_, s) !== void 0 || s in t.base_ ? (t.assigned_[s] = !1, Ge(t), Se(t)) : delete t.assigned_[s], t.copy_ && delete t.copy_[s], !0;
    },
    // Note: We never coerce `desc.value` into an Immer draft, because we can't make
    // the same guarantee in ES5 mode.
    getOwnPropertyDescriptor(t, s) {
      const l = A(t), d = Reflect.getOwnPropertyDescriptor(l, s);
      return d && {
        writable: !0,
        configurable: t.type_ !== 1 || s !== "length",
        enumerable: d.enumerable,
        value: l[s]
      };
    },
    defineProperty() {
      T(11);
    },
    getPrototypeOf(t) {
      return p(t.base_);
    },
    setPrototypeOf() {
      T(12);
    }
  }, Le = {};
  x(ve, (t, s) => {
    Le[t] = function() {
      return arguments[0] = arguments[0][0], s.apply(this, arguments);
    };
  }), Le.deleteProperty = function(t, s) {
    return process.env.NODE_ENV !== "production" && isNaN(parseInt(s)) && T(13), Le.set.call(this, t, s, void 0);
  }, Le.set = function(t, s, l) {
    return process.env.NODE_ENV !== "production" && s !== "length" && isNaN(parseInt(s)) && T(14), ve.set.call(this, t[0], s, l, t[0]);
  };
  function Pe(t, s) {
    const l = t[v];
    return (l ? A(l) : t)[s];
  }
  function ke(t, s, l) {
    var V;
    const d = $e(s, l);
    return d ? "value" in d ? d.value : (
      // This is a very special case, if the prop is a getter defined by the
      // prototype, we should invoke it with the draft as context!
      (V = d.get) == null ? void 0 : V.call(t.draft_)
    ) : void 0;
  }
  function $e(t, s) {
    if (!(s in t))
      return;
    let l = p(t);
    for (; l; ) {
      const d = Object.getOwnPropertyDescriptor(l, s);
      if (d)
        return d;
      l = p(l);
    }
  }
  function Se(t) {
    t.modified_ || (t.modified_ = !0, t.parent_ && Se(t.parent_));
  }
  function Ge(t) {
    t.copy_ || (t.copy_ = k(
      t.base_,
      t.scope_.immer_.useStrictShallowCopy_
    ));
  }
  var Me = class {
    constructor(t) {
      this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (s, l, d) => {
        if (typeof s == "function" && typeof l != "function") {
          const X = l;
          l = s;
          const W = this;
          return function(m = X, ...L) {
            return W.produce(m, (z) => l.call(this, z, ...L));
          };
        }
        typeof l != "function" && T(6), d !== void 0 && typeof d != "function" && T(7);
        let V;
        if ($(s)) {
          const X = He(this), W = Te(s, void 0);
          let S = !0;
          try {
            V = l(W), S = !1;
          } finally {
            S ? Z(X) : tt(X);
          }
          return de(X, d), Ke(V, X);
        } else if (!s || typeof s != "object") {
          if (V = l(s), V === void 0 && (V = s), V === w && (V = void 0), this.autoFreeze_ && U(V, !0), d) {
            const X = [], W = [];
            B("Patches").generateReplacementPatches_(s, V, X, W), d(X, W);
          }
          return V;
        } else
          T(1, s);
      }, this.produceWithPatches = (s, l) => {
        if (typeof s == "function")
          return (W, ...S) => this.produceWithPatches(W, (m) => s(m, ...S));
        let d, V;
        return [this.produce(s, l, (W, S) => {
          d = W, V = S;
        }), d, V];
      }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
    }
    createDraft(t) {
      $(t) || T(8), I(t) && (t = Je(t));
      const s = He(this), l = Te(t, void 0);
      return l[v].isManual_ = !0, tt(s), l;
    }
    finishDraft(t, s) {
      const l = t && t[v];
      (!l || !l.isManual_) && T(9);
      const { scope_: d } = l;
      return de(d, s), Ke(void 0, d);
    }
    /**
     * Pass true to automatically freeze all copies created by Immer.
     *
     * By default, auto-freezing is enabled.
     */
    setAutoFreeze(t) {
      this.autoFreeze_ = t;
    }
    /**
     * Pass true to enable strict shallow copy.
     *
     * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
     */
    setUseStrictShallowCopy(t) {
      this.useStrictShallowCopy_ = t;
    }
    applyPatches(t, s) {
      let l;
      for (l = s.length - 1; l >= 0; l--) {
        const V = s[l];
        if (V.path.length === 0 && V.op === "replace") {
          t = V.value;
          break;
        }
      }
      l > -1 && (s = s.slice(l + 1));
      const d = B("Patches").applyPatches_;
      return I(t) ? d(t, s) : this.produce(
        t,
        (V) => d(V, s)
      );
    }
  };
  function Te(t, s) {
    const l = C(t) ? B("MapSet").proxyMap_(t, s) : g(t) ? B("MapSet").proxySet_(t, s) : Ie(t, s);
    return (s ? s.scope_ : Y()).drafts_.push(l), l;
  }
  function Je(t) {
    return I(t) || T(10, t), De(t);
  }
  function De(t) {
    if (!$(t) || j(t))
      return t;
    const s = t[v];
    let l;
    if (s) {
      if (!s.modified_)
        return s.base_;
      s.finalized_ = !0, l = k(t, s.scope_.immer_.useStrictShallowCopy_);
    } else
      l = k(t, !0);
    return x(l, (d, V) => {
      P(l, d, De(V));
    }), s && (s.finalized_ = !1), l;
  }
  function je() {
    process.env.NODE_ENV !== "production" && b.push(
      'Sets cannot have "replace" patches.',
      function(q) {
        return "Unsupported patch operation: " + q;
      },
      function(q) {
        return "Cannot apply patch, path doesn't resolve: " + q;
      },
      "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
    );
    const s = "replace", l = "add", d = "remove";
    function V(q, se, oe, ie) {
      switch (q.type_) {
        case 0:
        case 2:
          return W(
            q,
            se,
            oe,
            ie
          );
        case 1:
          return X(q, se, oe, ie);
        case 3:
          return S(
            q,
            se,
            oe,
            ie
          );
      }
    }
    function X(q, se, oe, ie) {
      let { base_: ce, assigned_: K } = q, ne = q.copy_;
      ne.length < ce.length && ([ce, ne] = [ne, ce], [oe, ie] = [ie, oe]);
      for (let re = 0; re < ce.length; re++)
        if (K[re] && ne[re] !== ce[re]) {
          const le = se.concat([re]);
          oe.push({
            op: s,
            path: le,
            // Need to maybe clone it, as it can in fact be the original value
            // due to the base/copy inversion at the start of this function
            value: ue(ne[re])
          }), ie.push({
            op: s,
            path: le,
            value: ue(ce[re])
          });
        }
      for (let re = ce.length; re < ne.length; re++) {
        const le = se.concat([re]);
        oe.push({
          op: l,
          path: le,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: ue(ne[re])
        });
      }
      for (let re = ne.length - 1; ce.length <= re; --re) {
        const le = se.concat([re]);
        ie.push({
          op: d,
          path: le
        });
      }
    }
    function W(q, se, oe, ie) {
      const { base_: ce, copy_: K } = q;
      x(q.assigned_, (ne, re) => {
        const le = h(ce, ne), Ee = h(K, ne), qe = re ? f(ce, ne) ? s : l : d;
        if (le === Ee && qe === s)
          return;
        const Ce = se.concat(ne);
        oe.push(qe === d ? { op: qe, path: Ce } : { op: qe, path: Ce, value: Ee }), ie.push(
          qe === l ? { op: d, path: Ce } : qe === d ? { op: l, path: Ce, value: ue(le) } : { op: s, path: Ce, value: ue(le) }
        );
      });
    }
    function S(q, se, oe, ie) {
      let { base_: ce, copy_: K } = q, ne = 0;
      ce.forEach((re) => {
        if (!K.has(re)) {
          const le = se.concat([ne]);
          oe.push({
            op: d,
            path: le,
            value: re
          }), ie.unshift({
            op: l,
            path: le,
            value: re
          });
        }
        ne++;
      }), ne = 0, K.forEach((re) => {
        if (!ce.has(re)) {
          const le = se.concat([ne]);
          oe.push({
            op: l,
            path: le,
            value: re
          }), ie.unshift({
            op: d,
            path: le,
            value: re
          });
        }
        ne++;
      });
    }
    function m(q, se, oe, ie) {
      oe.push({
        op: s,
        path: [],
        value: se === w ? void 0 : se
      }), ie.push({
        op: s,
        path: [],
        value: q
      });
    }
    function L(q, se) {
      return se.forEach((oe) => {
        const { path: ie, op: ce } = oe;
        let K = q;
        for (let Ee = 0; Ee < ie.length - 1; Ee++) {
          const qe = _(K);
          let Ce = ie[Ee];
          typeof Ce != "string" && typeof Ce != "number" && (Ce = "" + Ce), (qe === 0 || qe === 1) && (Ce === "__proto__" || Ce === "constructor") && T(19), typeof K == "function" && Ce === "prototype" && T(19), K = h(K, Ce), typeof K != "object" && T(18, ie.join("/"));
        }
        const ne = _(K), re = z(oe.value), le = ie[ie.length - 1];
        switch (ce) {
          case s:
            switch (ne) {
              case 2:
                return K.set(le, re);
              case 3:
                T(16);
              default:
                return K[le] = re;
            }
          case l:
            switch (ne) {
              case 1:
                return le === "-" ? K.push(re) : K.splice(le, 0, re);
              case 2:
                return K.set(le, re);
              case 3:
                return K.add(re);
              default:
                return K[le] = re;
            }
          case d:
            switch (ne) {
              case 1:
                return K.splice(le, 1);
              case 2:
                return K.delete(le);
              case 3:
                return K.delete(oe.value);
              default:
                return delete K[le];
            }
          default:
            T(17, ce);
        }
      }), q;
    }
    function z(q) {
      if (!$(q))
        return q;
      if (Array.isArray(q))
        return q.map(z);
      if (C(q))
        return new Map(
          Array.from(q.entries()).map(([oe, ie]) => [oe, z(ie)])
        );
      if (g(q))
        return new Set(Array.from(q).map(z));
      const se = Object.create(p(q));
      for (const oe in q)
        se[oe] = z(q[oe]);
      return f(q, R) && (se[R] = q[R]), se;
    }
    function ue(q) {
      return I(q) ? z(q) : q;
    }
    J("Patches", {
      applyPatches_: L,
      generatePatches_: V,
      generateReplacementPatches_: m
    });
  }
  function be() {
    class t extends Map {
      constructor(m, L) {
        super(), this[v] = {
          type_: 2,
          parent_: L,
          scope_: L ? L.scope_ : Y(),
          modified_: !1,
          finalized_: !1,
          copy_: void 0,
          assigned_: void 0,
          base_: m,
          draft_: this,
          isManual_: !1,
          revoked_: !1
        };
      }
      get size() {
        return A(this[v]).size;
      }
      has(m) {
        return A(this[v]).has(m);
      }
      set(m, L) {
        const z = this[v];
        return W(z), (!A(z).has(m) || A(z).get(m) !== L) && (l(z), Se(z), z.assigned_.set(m, !0), z.copy_.set(m, L), z.assigned_.set(m, !0)), this;
      }
      delete(m) {
        if (!this.has(m))
          return !1;
        const L = this[v];
        return W(L), l(L), Se(L), L.base_.has(m) ? L.assigned_.set(m, !1) : L.assigned_.delete(m), L.copy_.delete(m), !0;
      }
      clear() {
        const m = this[v];
        W(m), A(m).size && (l(m), Se(m), m.assigned_ = /* @__PURE__ */ new Map(), x(m.base_, (L) => {
          m.assigned_.set(L, !1);
        }), m.copy_.clear());
      }
      forEach(m, L) {
        const z = this[v];
        A(z).forEach((ue, q, se) => {
          m.call(L, this.get(q), q, this);
        });
      }
      get(m) {
        const L = this[v];
        W(L);
        const z = A(L).get(m);
        if (L.finalized_ || !$(z) || z !== L.base_.get(m))
          return z;
        const ue = Te(z, L);
        return l(L), L.copy_.set(m, ue), ue;
      }
      keys() {
        return A(this[v]).keys();
      }
      values() {
        const m = this.keys();
        return {
          [Symbol.iterator]: () => this.values(),
          next: () => {
            const L = m.next();
            return L.done ? L : {
              done: !1,
              value: this.get(L.value)
            };
          }
        };
      }
      entries() {
        const m = this.keys();
        return {
          [Symbol.iterator]: () => this.entries(),
          next: () => {
            const L = m.next();
            if (L.done)
              return L;
            const z = this.get(L.value);
            return {
              done: !1,
              value: [L.value, z]
            };
          }
        };
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    }
    function s(S, m) {
      return new t(S, m);
    }
    function l(S) {
      S.copy_ || (S.assigned_ = /* @__PURE__ */ new Map(), S.copy_ = new Map(S.base_));
    }
    class d extends Set {
      constructor(m, L) {
        super(), this[v] = {
          type_: 3,
          parent_: L,
          scope_: L ? L.scope_ : Y(),
          modified_: !1,
          finalized_: !1,
          copy_: void 0,
          base_: m,
          draft_: this,
          drafts_: /* @__PURE__ */ new Map(),
          revoked_: !1,
          isManual_: !1
        };
      }
      get size() {
        return A(this[v]).size;
      }
      has(m) {
        const L = this[v];
        return W(L), L.copy_ ? !!(L.copy_.has(m) || L.drafts_.has(m) && L.copy_.has(L.drafts_.get(m))) : L.base_.has(m);
      }
      add(m) {
        const L = this[v];
        return W(L), this.has(m) || (X(L), Se(L), L.copy_.add(m)), this;
      }
      delete(m) {
        if (!this.has(m))
          return !1;
        const L = this[v];
        return W(L), X(L), Se(L), L.copy_.delete(m) || (L.drafts_.has(m) ? L.copy_.delete(L.drafts_.get(m)) : (
          /* istanbul ignore next */
          !1
        ));
      }
      clear() {
        const m = this[v];
        W(m), A(m).size && (X(m), Se(m), m.copy_.clear());
      }
      values() {
        const m = this[v];
        return W(m), X(m), m.copy_.values();
      }
      entries() {
        const m = this[v];
        return W(m), X(m), m.copy_.entries();
      }
      keys() {
        return this.values();
      }
      [Symbol.iterator]() {
        return this.values();
      }
      forEach(m, L) {
        const z = this.values();
        let ue = z.next();
        for (; !ue.done; )
          m.call(L, ue.value, ue.value, this), ue = z.next();
      }
    }
    function V(S, m) {
      return new d(S, m);
    }
    function X(S) {
      S.copy_ || (S.copy_ = /* @__PURE__ */ new Set(), S.base_.forEach((m) => {
        if ($(m)) {
          const L = Te(m, S);
          S.drafts_.set(m, L), S.copy_.add(L);
        } else
          S.copy_.add(m);
      }));
    }
    function W(S) {
      S.revoked_ && T(3, JSON.stringify(A(S)));
    }
    J("MapSet", { proxyMap_: s, proxySet_: V });
  }
  var _e = new Me(), rt = _e.produce, bt = _e.produceWithPatches.bind(
    _e
  ), nt = _e.setAutoFreeze.bind(_e), Ze = _e.setUseStrictShallowCopy.bind(_e), pe = _e.applyPatches.bind(_e), _t = _e.createDraft.bind(_e), Ue = _e.finishDraft.bind(_e);
  function gt(t) {
    return t;
  }
  function i(t) {
    return t;
  }
  return Ir;
}
var an;
function xr() {
  return an || (an = 1, process.env.NODE_ENV === "production" ? Bt.exports = us() : Bt.exports = ls()), Bt.exports;
}
var Cr = Object.defineProperty, fs = Object.getOwnPropertyDescriptor, ps = Object.getOwnPropertyNames, hs = Object.prototype.hasOwnProperty, ds = (e, r) => {
  for (var n in r)
    Cr(e, n, { get: r[n], enumerable: !0 });
}, ys = (e, r, n, u) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let c of ps(r))
      !hs.call(e, c) && c !== n && Cr(e, c, { get: () => r[c], enumerable: !(u = fs(r, c)) || u.enumerable });
  return e;
}, ms = (e) => ys(Cr({}, "__esModule", { value: !0 }), e), jn = {};
ds(jn, {
  defaultCELValueProcessor: () => Ts,
  defaultMongoDBValueProcessor: () => ks,
  defaultRuleProcessorCEL: () => Rt,
  defaultRuleProcessorElasticSearch: () => Pr,
  defaultRuleProcessorJSONata: () => Rr,
  defaultRuleProcessorJsonLogic: () => Vr,
  defaultRuleProcessorMongoDB: () => Vt,
  defaultRuleProcessorParameterized: () => Kt,
  defaultRuleProcessorSQL: () => qn,
  defaultRuleProcessorSpEL: () => xt,
  defaultSpELValueProcessor: () => Ds,
  defaultValueProcessor: () => Ls,
  defaultValueProcessorByRule: () => St,
  defaultValueProcessorCELByRule: () => Ws,
  defaultValueProcessorMongoDBByRule: () => Fs,
  defaultValueProcessorSpELByRule: () => Ms,
  formatQuery: () => xs,
  jsonLogicAdditionalOperators: () => Ns
});
var Bn = ms(jn), Un = "~", on = Un, cn = Un, zn = ",", bs = (e, r = zn) => typeof e == "string" ? e.split(`\\${r}`).map((n) => n.split(r)).reduce((n, u, c) => c === 0 ? u : [
  ...n.slice(0, n.length - 1),
  `${n[n.length - 1]}${r}${u[0]}`,
  ...u.slice(1)
], []) : [], ge = (e) => typeof e == "string" ? e.trim() : e, Re = (e) => Array.isArray(e) ? e.map(ge) : typeof e == "string" ? bs(e, zn).filter((r) => !/^\s*$/.test(r)).map((r) => r.trim()) : typeof e == "number" ? [e] : [], _s = kt, Ve = (e, r = {}) => {
  if (!r.parseNumbers || typeof e == "bigint" || typeof e == "number")
    return e;
  if (r.parseNumbers === "native")
    return parseFloat(e);
  const n = (
    // TODO: Should these options be configurable?
    (0, _s.numericQuantity)(e, {
      allowTrailingInvalid: r.parseNumbers === "enhanced",
      romanNumerals: !0,
      round: !1
    })
  );
  return isNaN(n) ? e : n;
}, gs = kt, vs = new RegExp(
  gs.numericRegex.source.replace(/^\^/, "^\\s*").replace(/\$$/, "\\s*$")
), ot = (e) => e === null || typeof e != "object" ? !1 : Object.getPrototypeOf(e) === Object.prototype, Xe = (e) => ot(e) && "rules" in e && Array.isArray(e.rules), at = (e) => Xe(e) && typeof e.combinator == "string", Xn = (e) => {
  switch (e.toLowerCase()) {
    case "null":
      return "is null";
    case "notnull":
      return "is not null";
    case "notin":
      return "not in";
    case "notbetween":
      return "not between";
    case "contains":
    case "beginswith":
    case "endswith":
      return "like";
    case "doesnotcontain":
    case "doesnotbeginwith":
    case "doesnotendwith":
      return "not like";
    default:
      return e;
  }
}, un = {
  "=": "$eq",
  "!=": "$ne",
  "<": "$lt",
  "<=": "$lte",
  ">": "$gt",
  ">=": "$gte",
  in: "$in",
  notIn: "$nin"
}, ln = {
  and: "&&",
  or: "||"
}, Ns = {
  startsWith: (e, r) => typeof e == "string" && e.startsWith(r),
  endsWith: (e, r) => typeof e == "string" && e.endsWith(r)
}, Jn = (e) => ({
  ...e,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error TS doesn't keep track of odd/even indexes here
  rules: e.rules.map((r) => {
    if (typeof r == "string")
      return r;
    if (Xe(r))
      return Jn(r);
    let { value: n } = r;
    return typeof n == "string" && (n = Ve(n, { parseNumbers: !0 })), { ...r, value: n };
  })
}), ft = (e) => typeof e == "string" && e.length > 0 || typeof e == "number" && !isNaN(e) || typeof e != "string" && typeof e != "number", ye = (e, r) => r && (typeof e == "number" || typeof e == "bigint" || typeof e == "string" && vs.test(e)), Os = (e) => e.length >= 3, Zt = (e = ["", ""]) => Array.isArray(e) ? e : typeof e == "string" ? [e, e] : e ?? ["", ""], Et = (e) => e === null || typeof e > "u" || e === "", Ut = (e) => /^(does)?not/i.test(e), yt = (e, r) => typeof e != "string" || !r ? e : e.replaceAll('"', '\\"'), Rt = ({ field: e, operator: r, value: n, valueSource: u }, { escapeQuotes: c, parseNumbers: N } = {}) => {
  const E = u === "field", y = r.replace(/^=$/, "=="), w = typeof n == "number" || typeof n == "boolean" || typeof n == "bigint" || ye(n, N);
  switch (y) {
    case "<":
    case "<=":
    case "==":
    case "!=":
    case ">":
    case ">=":
      return `${e} ${y} ${E || w ? ge(n) : `"${yt(n, c)}"`}`;
    case "contains":
    case "doesNotContain":
      return `${Ut(y) ? "!" : ""}${e}.contains(${E ? ge(n) : `"${yt(n, c)}"`})`;
    case "beginsWith":
    case "doesNotBeginWith":
      return `${Ut(y) ? "!" : ""}${e}.startsWith(${E ? ge(n) : `"${yt(n, c)}"`})`;
    case "endsWith":
    case "doesNotEndWith":
      return `${Ut(y) ? "!" : ""}${e}.endsWith(${E ? ge(n) : `"${yt(n, c)}"`})`;
    case "null":
      return `${e} == null`;
    case "notNull":
      return `${e} != null`;
    case "in":
    case "notIn": {
      const R = Ut(y), v = Re(n);
      return `${R ? "!(" : ""}${e} in [${v.map(
        (b) => E || ye(b, N) ? `${ge(b)}` : `"${yt(b, c)}"`
      ).join(", ")}]${R ? ")" : ""}`;
    }
    case "between":
    case "notBetween": {
      const R = Re(n);
      if (R.length >= 2 && !Et(R[0]) && !Et(R[1])) {
        const [v, b] = R, T = ye(v, !0) ? Ve(v, { parseNumbers: !0 }) : NaN, p = ye(b, !0) ? Ve(b, { parseNumbers: !0 }) : NaN;
        let I = isNaN(T) ? E ? `${v}` : `"${yt(v, c)}"` : T, $ = isNaN(p) ? E ? `${b}` : `"${yt(b, c)}"` : p;
        if (I === T && $ === p && p < T) {
          const D = p;
          $ = T, I = D;
        }
        return r === "between" ? `(${e} >= ${I} && ${e} <= ${$})` : `(${e} < ${I} || ${e} > ${$})`;
      } else
        return "";
    }
  }
  return "";
}, Vt = ({ field: e, operator: r, value: n, valueSource: u }, { parseNumbers: c } = {}) => {
  const N = u === "field", E = typeof n == "number" || typeof n == "boolean" || typeof n == "bigint" || ye(n, c);
  if (r === "=" && !N)
    return `{"${e}":${E ? ge(n) : JSON.stringify(n)}}`;
  switch (r) {
    case "<":
    case "<=":
    case "=":
    case "!=":
    case ">":
    case ">=": {
      const y = un[r];
      return N ? `{"$expr":{"${y}":["$${e}","$${n}"]}}` : `{"${e}":{"${y}":${E ? ge(n) : JSON.stringify(n)}}}`;
    }
    case "contains":
      return N ? `{"$where":"this.${e}.includes(this.${n})"}` : `{"${e}":{"$regex":${JSON.stringify(n)}}}`;
    case "beginsWith":
      return N ? `{"$where":"this.${e}.startsWith(this.${n})"}` : `{"${e}":{"$regex":${JSON.stringify(`^${n}`)}}}`;
    case "endsWith":
      return N ? `{"$where":"this.${e}.endsWith(this.${n})"}` : `{"${e}":{"$regex":${JSON.stringify(`${n}$`)}}}`;
    case "doesNotContain":
      return N ? `{"$where":"!this.${e}.includes(this.${n})"}` : `{"${e}":{"$not":{"$regex":${JSON.stringify(n)}}}}`;
    case "doesNotBeginWith":
      return N ? `{"$where":"!this.${e}.startsWith(this.${n})"}` : `{"${e}":{"$not":{"$regex":${JSON.stringify(`^${n}`)}}}}`;
    case "doesNotEndWith":
      return N ? `{"$where":"!this.${e}.endsWith(this.${n})"}` : `{"${e}":{"$not":{"$regex":${JSON.stringify(`${n}$`)}}}}`;
    case "null":
      return `{"${e}":null}`;
    case "notNull":
      return `{"${e}":{"$ne":null}}`;
    case "in":
    case "notIn": {
      const y = Re(n);
      return N ? `{"$where":"${r === "notIn" ? "!" : ""}[${y.map((w) => `this.${w}`).join(",")}].includes(this.${e})"}` : `{"${e}":{"${un[r]}":[${y.map(
        (w) => ye(w, c) ? `${ge(w)}` : JSON.stringify(w)
      ).join(",")}]}}`;
    }
    case "between":
    case "notBetween": {
      const y = Re(n);
      if (y.length >= 2 && ft(y[0]) && ft(y[1])) {
        const [w, R] = y, v = ye(w, !0) ? Ve(w, { parseNumbers: !0 }) : NaN, b = ye(R, !0) ? Ve(R, { parseNumbers: !0 }) : NaN, T = N || !isNaN(v) ? `${w}` : `${JSON.stringify(w)}`, p = N || !isNaN(b) ? `${R}` : `${JSON.stringify(R)}`;
        return r === "between" ? N ? `{"$and":[{"$expr":{"$gte":["$${e}","$${T}"]}},{"$expr":{"$lte":["$${e}","$${p}"]}}]}` : `{"${e}":{"$gte":${T},"$lte":${p}}}` : N ? `{"$or":[{"$expr":{"$lt":["$${e}","$${T}"]}},{"$expr":{"$gt":["$${e}","$${p}"]}}]}` : `{"$or":[{"${e}":{"$lt":${T}}},{"${e}":{"$gt":${p}}}]}`;
      } else
        return "";
    }
  }
  return "";
}, zt = (e) => /^(does)?not/i.test(e), $r = (e, r) => r ? `!(${e})` : `${e}`, mt = (e, r) => typeof e != "string" || !r ? e : e.replaceAll("'", "\\'"), xt = ({ field: e, operator: r, value: n, valueSource: u }, { escapeQuotes: c, parseNumbers: N } = {}) => {
  const E = u === "field", y = r.replace(/^=$/, "=="), w = typeof n == "number" || typeof n == "boolean" || typeof n == "bigint" || ye(n, N);
  switch (y) {
    case "<":
    case "<=":
    case "==":
    case "!=":
    case ">":
    case ">=":
      return `${e} ${y} ${E || w ? ge(n) : `'${mt(n, c)}'`}`;
    case "contains":
    case "doesNotContain":
      return $r(
        `${e} matches ${E || w ? ge(n) : `'${mt(n, c)}'`}`,
        zt(y)
      );
    case "beginsWith":
    case "doesNotBeginWith": {
      const R = E ? `'^'.concat(${ge(n)})` : `'${typeof n == "string" && !n.startsWith("^") || w ? "^" : ""}${mt(n, c)}'`;
      return $r(`${e} matches ${R}`, zt(y));
    }
    case "endsWith":
    case "doesNotEndWith": {
      const R = E ? `${ge(n)}.concat('$')` : `'${mt(n, c)}${typeof n == "string" && !n.endsWith("$") || w ? "$" : ""}'`;
      return $r(`${e} matches ${R}`, zt(y));
    }
    case "null":
      return `${e} == null`;
    case "notNull":
      return `${e} != null`;
    case "in":
    case "notIn": {
      const R = zt(y) ? "!" : "", v = Re(n);
      return v.length > 0 ? `${R}(${v.map(
        (b) => `${e} == ${E || ye(b, N) ? `${ge(b)}` : `'${mt(b, c)}'`}`
      ).join(" or ")})` : "";
    }
    case "between":
    case "notBetween": {
      const R = Re(n);
      if (R.length >= 2 && !Et(R[0]) && !Et(R[1])) {
        const [v, b] = R, T = ye(v, !0) ? Ve(v, { parseNumbers: !0 }) : NaN, p = ye(b, !0) ? Ve(b, { parseNumbers: !0 }) : NaN;
        let I = isNaN(T) ? E ? `${v}` : `'${mt(v, c)}'` : T, $ = isNaN(p) ? E ? `${b}` : `'${mt(b, c)}'` : p;
        if (I === T && $ === p && p < T) {
          const D = p;
          $ = T, I = D;
        }
        return r === "between" ? `(${e} >= ${I} and ${e} <= ${$})` : `(${e} < ${I} or ${e} > ${$})`;
      } else
        return "";
    }
  }
  return "";
}, Es = (e, r, n) => n && typeof e == "string" ? e.replaceAll(`${r}`, `${r}${r}`) : e, St = ({ operator: e, value: r, valueSource: n }, { escapeQuotes: u, parseNumbers: c, quoteFieldNamesWith: N, quoteValuesWith: E } = {}) => {
  const y = n === "field", [w, R] = Zt(N), v = e.toLowerCase(), b = E || "'", T = ($) => Es($, b, u), p = ($) => `${b}${T($)}${b}`, I = ($) => `${w}${$}${R}`;
  switch (v) {
    case "null":
    case "notnull":
      return "";
    case "in":
    case "notin": {
      const $ = Re(r);
      return $.length > 0 ? `(${$.map(
        (D) => y ? I(D) : ye(D, c) ? `${ge(D)}` : `${p(D)}`
      ).join(", ")})` : "";
    }
    case "between":
    case "notbetween": {
      const $ = Re(r);
      if ($.length >= 2 && ft($[0]) && ft($[1])) {
        const [D, G] = $;
        return y ? `${I(D)} and ${I(G)}` : ye(D, c) && ye(G, c) ? `${ge(D)} and ${ge(G)}` : `${p(D)} and ${p(G)}`;
      }
      return "";
    }
    case "contains":
    case "doesnotcontain":
      return y ? `${b}%${b} || ${I(r)} || ${b}%${b}` : `${b}%${T(r)}%${b}`;
    case "beginswith":
    case "doesnotbeginwith":
      return y ? `${I(r)} || ${b}%${b}` : `${b}${T(r)}%${b}`;
    case "endswith":
    case "doesnotendwith":
      return y ? `${b}%${b} || ${I(r)}` : `${b}%${T(r)}${b}`;
  }
  return typeof r == "boolean" ? r ? "TRUE" : "FALSE" : y ? I(r) : ye(r, c) ? `${ge(r)}` : `${p(r)}`;
}, Ss = { "<": "lt", "<=": "lte", ">": "gt", ">=": "gte" }, Xt = (e, r) => /^(does)?not/i.test(e) ? { bool: { must_not: r } } : r, Ar = (e) => e == null ? void 0 : e.replace(/('|\\)/g, "\\$1"), Is = {
  beginsWith: "startsWith",
  doesNotContain: "contains",
  doesNotBeginWith: "startsWith",
  doesNotEndWith: "endsWith"
}, $s = (e, r, n) => {
  const u = `doc['${e}'].${Is[r] ?? r}(doc['${n}'])`;
  return r.startsWith("d") ? `!${u}` : u;
}, $t = (e, r) => typeof e == "boolean" ? e : ye(e, r) ? Ve(e, { parseNumbers: r }) : e, Pr = ({ field: e, operator: r, value: n, valueSource: u }, { parseNumbers: c } = {}) => {
  if (u === "field") {
    if (Re(n).some((E) => typeof E != "string")) return !1;
    const N = Ar(e);
    switch (r) {
      case "=":
      case "!=":
      case ">":
      case ">=":
      case "<":
      case "<=": {
        const E = r === "=" ? "==" : r, y = Ar(n);
        return y ? {
          bool: {
            filter: {
              script: {
                script: `doc['${N}'] ${E} doc['${y}']`
              }
            }
          }
        } : !1;
      }
      case "in":
      case "notIn": {
        const E = Re(n);
        if (E.length > 0) {
          const y = E.map((w) => ({
            bool: { filter: { script: { script: `doc['${N}'] == doc['${w}']` } } }
          }));
          return { bool: r === "in" ? { should: y } : { must_not: y } };
        }
        return !1;
      }
      case "between":
      case "notBetween": {
        const E = Re(n);
        if (E.length >= 2 && E[0] && E[1]) {
          const y = `doc['${N}'] >= doc['${E[0]}'] && doc['${N}'] <= doc['${E[1]}']`;
          return {
            bool: {
              filter: { script: { script: r === "notBetween" ? `!(${y})` : y } }
            }
          };
        }
        return !1;
      }
      case "contains":
      case "doesNotContain":
      case "beginsWith":
      case "doesNotBeginWith":
      case "endsWith":
      case "doesNotEndWith": {
        const E = Ar(n);
        return E ? {
          bool: {
            filter: {
              script: {
                script: $s(N, r, E)
              }
            }
          }
        } : !1;
      }
    }
  }
  switch (r) {
    case "<":
    case "<=":
    case ">":
    case ">=":
      return {
        range: {
          [e]: {
            [Ss[r]]: $t(n, c)
          }
        }
      };
    case "=":
      return { term: { [e]: $t(n, c) } };
    case "!=":
      return { bool: { must_not: { term: { [e]: $t(n, c) } } } };
    case "null":
      return { bool: { must_not: { exists: { field: e } } } };
    case "notNull":
      return { exists: { field: e } };
    case "in":
    case "notIn": {
      const N = Re(n).map((E) => $t(E, c));
      if (N.length > 0) {
        const E = N.map((y) => ({ term: { [e]: $t(y, c) } }));
        return { bool: r === "in" ? { should: E } : { must_not: E } };
      }
      return !1;
    }
    case "between":
    case "notBetween": {
      const N = Re(n);
      if (N.length >= 2 && ft(N[0]) && ft(N[1])) {
        let [E, y] = N;
        if (ye(E, !0) && ye(y, !0)) {
          const w = Ve(E, { parseNumbers: !0 }), R = Ve(y, { parseNumbers: !0 });
          if (R < w) {
            const v = R;
            y = w, E = v;
          } else
            E = w, y = R;
        }
        return Xt(r, { range: { [e]: { gte: E, lte: y } } });
      }
      return !1;
    }
    case "contains":
    case "doesNotContain":
      return Xt(r, { regexp: { [e]: { value: n } } });
    case "beginsWith":
    case "doesNotBeginWith":
      return Xt(r, { regexp: { [e]: { value: `${n}.*` } } });
    case "endsWith":
    case "doesNotEndWith":
      return Xt(r, { regexp: { [e]: { value: `.*${n}` } } });
  }
  return !1;
}, Jt = (e) => /^(does)?not/i.test(e), At = (e, r) => `"${typeof e != "string" || !r ? e : e.replaceAll('"', '\\"')}"`, wt = (e, r) => r ? `$not(${e})` : `${e}`, fn = (e) => `${e}`.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Rr = ({ field: e, operator: r, value: n, valueSource: u }, { escapeQuotes: c, parseNumbers: N = !0, quoteFieldNamesWith: E = ["", ""] } = {}) => {
  const y = u === "field", w = typeof n == "number" || typeof n == "boolean" || typeof n == "bigint" || ye(n, N), [R, v] = Zt(E), b = (T) => `${R}${T}${v}`;
  switch (r) {
    case "<":
    case "<=":
    case "=":
    case "!=":
    case ">":
    case ">=":
      return `${b(e)} ${r} ${y ? b(ge(n)) : w ? ge(n) : At(n, c)}`;
    case "contains":
    case "doesNotContain":
      return wt(
        `$contains(${b(e)}, ${y ? b(ge(n)) : At(n, c)})`,
        Jt(r)
      );
    case "beginsWith":
    case "doesNotBeginWith":
      return wt(
        y ? `$substring(${b(e)}, 0, $length(${b(ge(n))})) = ${b(ge(n))}` : `$contains(${b(e)}, /^${fn(n)}/)`,
        Jt(r)
      );
    case "endsWith":
    case "doesNotEndWith":
      return wt(
        y ? `$substring(${b(e)}, $length(${b(e)}) - $length(${b(ge(n))})) = ${b(ge(n))}` : `$contains(${b(e)}, /${fn(n)}$/)`,
        Jt(r)
      );
    case "null":
      return `${b(e)} = null`;
    case "notNull":
      return `${b(e)} != null`;
    case "in":
    case "notIn": {
      const T = Re(n);
      return wt(
        `${b(e)} in [${T.map(
          (p) => y ? `${b(ge(p))}` : ye(p, N) ? `${ge(p)}` : At(p, c)
        ).join(", ")}]`,
        Jt(r)
      );
    }
    case "between":
    case "notBetween": {
      const T = Re(n);
      if (T.length >= 2 && !Et(T[0]) && !Et(T[1])) {
        const [p, I] = T, $ = ye(p, !0) ? Ve(p, { parseNumbers: !0 }) : NaN, D = ye(I, !0) ? Ve(I, { parseNumbers: !0 }) : NaN;
        let G = isNaN($) ? y ? `${p}` : p : $, H = isNaN(D) ? y ? `${I}` : I : D;
        if (G === $ && H === D && D < $) {
          const f = D;
          H = $, G = f;
        }
        const x = ye(p, N) && ye(I, N), _ = `${b(e)} >= ${y ? b(p) : x ? G : At(G, c)} and ${b(e)} <= ${y ? b(I) : x ? H : At(H, c)}`;
        return r === "between" ? `(${_})` : wt(_, !0);
      } else
        return "";
    }
  }
  return "";
}, As = (e) => e.replace(/^(=)$/, "$1=").replace(/^notNull$/i, "!=").replace(/^null$/i, "=="), Pt = (e, r) => /^(does)?not/i.test(e) ? { "!": r } : r, Vr = ({ field: e, operator: r, value: n, valueSource: u }, { parseNumbers: c } = {}) => {
  const N = u === "field", E = { var: e }, y = (w) => N ? { var: `${w}` } : ye(w, c) ? Ve(w, { parseNumbers: c }) : w;
  switch (r) {
    case "<":
    case "<=":
    case "=":
    case "!=":
    case ">":
    case ">=":
      return {
        [As(r)]: [E, y(n)]
      };
    case "null":
    case "notNull":
      return {
        [`${r === "notNull" ? "!" : "="}=`]: [E, null]
      };
    case "in":
    case "notIn": {
      const w = Re(n).map(y);
      return Pt(r, { in: [E, w] });
    }
    case "between":
    case "notBetween": {
      const w = Re(n);
      if (w.length >= 2 && ft(w[0]) && ft(w[1])) {
        let [R, v] = w;
        if (!N && ye(R, !0) && ye(v, !0)) {
          const T = Ve(R, { parseNumbers: !0 }), p = Ve(v, { parseNumbers: !0 });
          if (p < T) {
            const I = p;
            v = T, R = I;
          } else
            R = T, v = p;
        } else N && (R = { var: R }, v = { var: v });
        return Pt(r, { "<=": [R, E, v] });
      }
      return !1;
    }
    case "contains":
    case "doesNotContain": {
      const w = {
        in: [y(n), E]
      };
      return Pt(r, w);
    }
    case "beginsWith":
    case "doesNotBeginWith": {
      const w = {
        startsWith: [E, y(n)]
      };
      return Pt(r, w);
    }
    case "endsWith":
    case "doesNotEndWith": {
      const w = {
        endsWith: [E, y(n)]
      };
      return Pt(r, w);
    }
  }
  return !1;
}, Kt = (e, r, n) => {
  const {
    fieldData: u,
    format: c,
    getNextNamedParam: N,
    parseNumbers: E,
    paramPrefix: y,
    paramsKeepPrefix: w,
    numberedParams: R,
    quoteFieldNamesWith: v = ["", ""],
    valueProcessor: b = St
  } = r ?? {}, { processedParams: T = [] } = n ?? {}, p = c === "parameterized", I = [], $ = {}, D = (h) => p ? { sql: h, params: I } : { sql: h, params: $ }, G = b(e, {
    parseNumbers: E,
    quoteFieldNamesWith: v,
    fieldData: u,
    format: c
  }), H = Xn(e.operator), x = H.toLowerCase();
  if ((x === "in" || x === "not in" || x === "between" || x === "not between") && !G)
    return D("");
  if (x === "is null" || x === "is not null")
    return D(
      `${v[0]}${e.field}${v[1]} ${H}`
    );
  if (e.valueSource === "field")
    return D(
      `${v[0]}${e.field}${v[1]} ${H} ${G}`.trim()
    );
  if (x === "in" || x === "not in") {
    const h = Re(e.value);
    if (p)
      return h.forEach(
        (O) => I.push(ye(O, E) ? Ve(O, { parseNumbers: E }) : O)
      ), D(
        `${v[0]}${e.field}${v[1]} ${H} (${h.map(
          (O, C) => R ? `${y}${T.length + 1 + h.length - (h.length - C)}` : "?"
        ).join(", ")})`
      );
    const P = [];
    return h.forEach((O) => {
      const C = N(e.field);
      P.push(`${y}${C}`), $[`${w ? y : ""}${C}`] = ye(
        O,
        E
      ) ? Ve(O, { parseNumbers: E }) : O;
    }), D(
      `${v[0]}${e.field}${v[1]} ${H} (${P.join(", ")})`
    );
  } else if (x === "between" || x === "not between") {
    const h = Re(e.value), [P, O] = h.slice(0, 2).map((A) => ye(A, E) ? Ve(A, { parseNumbers: E }) : A);
    if (p)
      return I.push(P), I.push(O), D(
        `${v[0]}${e.field}${v[1]} ${H} ${R ? `${y}${T.length + 1}` : "?"} and ${R ? `${y}${T.length + 2}` : "?"}`
      );
    const C = N(e.field), g = N(e.field);
    return $[`${w ? y : ""}${C}`] = P, $[`${w ? y : ""}${g}`] = O, D(
      `${v[0]}${e.field}${v[1]} ${H} ${y}${C} and ${y}${g}`
    );
  }
  let _ = e.value;
  typeof e.value == "string" && (ye(e.value, E) ? _ = Ve(e.value, { parseNumbers: E }) : _ = /^'.*'$/g.test(G) ? G.replace(/(^'|'$)/g, "") : (
    /* istanbul ignore next */
    G
  ));
  let f = "";
  return p ? I.push(_) : (f = N(e.field), $[`${w ? y : ""}${f}`] = _), D(
    `${v[0]}${e.field}${v[1]} ${H} ${p ? R ? `${y}${T.length + 1}` : "?" : `${y}${f}`}`.trim()
  );
}, qn = (e, r) => {
  const {
    parseNumbers: n,
    escapeQuotes: u,
    quoteFieldNamesWith: c = ["", ""],
    quoteValuesWith: N = "'",
    valueProcessor: E = St
  } = r ?? {}, y = E(e, {
    parseNumbers: n,
    escapeQuotes: u,
    quoteFieldNamesWith: c,
    quoteValuesWith: N
  }), w = Xn(e.operator), R = w.toLowerCase();
  if ((R === "in" || R === "not in" || R === "between" || R === "not between") && !y)
    return "";
  const [v, b] = Zt(c);
  return `${v}${e.field}${b} ${w} ${y}`.trim();
}, pn = (e) => Xe(e) ? Qn(e) : e, Qn = (e) => {
  const r = [], n = (c) => r.push(pn(c));
  let u = 0;
  for (let c = 0; c < e.rules.length; c += 2)
    if (e.rules.length === 1)
      n(e.rules[0]);
    else if (e.rules[c + 1] === "and") {
      u = c;
      let N = 1;
      for (; e.rules[u + N] === "and"; )
        c += 2, N += 2;
      r.push({
        // @ts-expect-error Too complicated to keep track of odd/even indexes in TS
        rules: e.rules.slice(u, c + 1).map(pn)
      }), c -= 2;
    } else e.rules[c + 1] === "or" && (c === 0 || c === e.rules.length - 3 ? ((c === 0 || e.rules[c - 1] === "or") && n(e.rules[c]), n(e.rules[c + 1]), c === e.rules.length - 3 && n(e.rules[c + 2])) : (e.rules[c - 1] === "and" || n(e.rules[c]), n(e.rules[c + 1])));
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error TS still thinks returnArray has length 0
    r.length === 1 && typeof r[0] == "object" && Xe(r[0]) ? { ...e, ...r[0] } : { ...e, rules: r }
  );
}, Yt = (e) => {
  if (at(e))
    return e;
  const r = Qn(e), n = r.rules.map(
    (N) => typeof N == "string" || !Xe(N) ? N : Yt(N)
  ), u = n.length < 2 ? "and" : n[1], c = n.filter((N) => typeof N != "string");
  return { ...r, combinator: u, rules: c };
}, hn = (e) => ot(e) && typeof e.valid == "boolean", We = (e, r, n) => {
  if (typeof r == "boolean")
    return r;
  if (hn(r))
    return r.valid;
  if (typeof n == "function" && !Xe(e)) {
    const u = n(e);
    if (typeof u == "boolean")
      return u;
    if (hn(u))
      return u.valid;
  }
  return !0;
}, Gn = xr(), dn = (e) => ot(e) && "name" in e && typeof e.name == "string", yn = (e) => ot(e) && "value" in e && typeof e.value == "string";
function mn(e, r) {
  return (0, Gn.produce)((u) => {
    const c = {};
    let N = !!r;
    if (dn(u) && !yn(u) ? (c.value = u.name, N = !0) : !dn(u) && yn(u) && (c.name = u.value, N = !0), N)
      return Object.assign({}, r, u, c);
  })(e);
}
function ws(e, r) {
  return Array.isArray(e) ? (0, Gn.produce)((u) => {
    if (Rs(u))
      for (const c of u)
        c.options.forEach(
          (N, E) => c.options[E] = mn(N, r)
        );
    else
      u.forEach((c, N) => u[N] = mn(c, r));
  })(e) : [];
}
var Ps = (e) => {
  const r = /* @__PURE__ */ new Set(), n = [];
  return e.forEach((u) => {
    r.has(u.value ?? u.name) || (r.add(u.value ?? u.name), n.push(u));
  }), e.length === n.length ? e : n;
}, Hn = (e) => Array.isArray(e) && e.length > 0 && ot(e[0]) && "options" in e[0], Rs = (e) => Array.isArray(e) && e.length > 0 && ot(e[0]) && "options" in e[0] && ot(e[0].options[0]) && ("name" in e[0].options[0] || "value" in e[0].options[0]), lt = (e, r) => (Hn(e) ? e.flatMap((n) => n.options) : e).find((n) => n.name === r), Vs = (e) => Ps(Hn(e) ? e.flatMap((r) => r.options) : e);
function xs(e, r = {}) {
  let n = "json", u = St, c = null, N = ["", ""], E = () => !0, y = [], w = {}, R = "", v = ":", b = !1, T = !1, p = !1, I = on, $ = cn, D = "'";
  if (typeof r == "string")
    n = r.toLowerCase(), n === "mongodb" ? c = Vt : n === "parameterized" || n === "parameterized_named" ? c = Kt : n === "cel" ? c = Rt : n === "spel" ? c = xt : n === "jsonlogic" ? c = Vr : n === "elasticsearch" ? c = Pr : n === "jsonata" && (c = Rr);
  else {
    n = (r.format ?? "json").toLowerCase();
    const { valueProcessor: _ = null, ruleProcessor: f = null } = r;
    typeof f == "function" && (c = f), u = typeof _ == "function" ? (h, P) => Os(_) ? _(h.field, h.operator, h.value, h.valueSource) : _(h, P) : n === "mongodb" ? c ?? Vt : n === "cel" ? c ?? Rt : n === "spel" ? c ?? xt : n === "jsonlogic" ? c ?? Vr : n === "elasticsearch" ? c ?? Pr : n === "jsonata" ? c ?? Rr : St, N = Zt(r.quoteFieldNamesWith), E = r.validator ?? (() => !0), y = ws(r.fields ?? []), R = r.fallbackExpression ?? "", v = r.paramPrefix ?? ":", b = !!r.paramsKeepPrefix, T = !!r.numberedParams, p = !!r.parseNumbers, I = r.placeholderFieldName ?? on, $ = r.placeholderOperatorName ?? cn, D = r.quoteValuesWith ?? "'";
  }
  if (R || (R = n === "mongodb" ? '"$and":[{"$expr":true}]' : n === "cel" || n === "spel" ? "1 == 1" : "(1 = 1)"), n === "json" || n === "json_without_ids") {
    const _ = p ? Jn(e) : e;
    return n === "json" ? JSON.stringify(_, null, 2) : JSON.stringify(
      _,
      (f, h) => (
        // Remove `id` and `path` keys; leave everything else unchanged.
        f === "id" || f === "path" ? void 0 : h
      )
    );
  }
  if (typeof E == "function") {
    const _ = E(e);
    if (typeof _ == "boolean") {
      if (_ === !1)
        return n === "parameterized" ? { sql: R, params: [] } : n === "parameterized_named" ? { sql: R, params: {} } : n === "mongodb" ? `{${R}}` : n === "jsonlogic" ? !1 : n === "elasticsearch" ? {} : R;
    } else
      w = _;
  }
  const G = {}, H = Vs(y);
  H.forEach((_) => {
    typeof _.validator == "function" && (G[_.value ?? /* istanbul ignore next */
    _.name] = _.validator);
  });
  const x = (_) => {
    let f, h;
    if (_.id && (f = w[_.id]), H.length) {
      const P = H.filter((O) => O.name === _.field);
      if (P.length) {
        const O = P[0];
        typeof O.validator == "function" && (h = O.validator);
      }
    }
    return [f, h];
  };
  if (n === "sql") {
    const _ = (f, h) => {
      if (!We(f, w[f.id ?? /* istanbul ignore next */
      ""]))
        return h ? R : (
          /* istanbul ignore next */
          ""
        );
      const P = f.rules.map((O) => {
        if (typeof O == "string")
          return O;
        if (Xe(O))
          return _(O, f.rules.length === 1);
        const [C, g] = x(O);
        if (!We(O, C, g) || O.field === I || O.operator === $)
          return "";
        const A = (O.valueSource ?? "value") === "value", k = lt(y, O.field);
        return typeof c == "function" ? c(O, {
          parseNumbers: p,
          escapeQuotes: A,
          quoteFieldNamesWith: N,
          fieldData: k,
          format: n,
          quoteValuesWith: D
        }) : qn(O, {
          parseNumbers: p,
          escapeQuotes: A,
          valueProcessor: u,
          quoteFieldNamesWith: N,
          fieldData: k,
          format: n,
          quoteValuesWith: D
        });
      });
      return P.length === 0 ? R : `${f.not ? "NOT " : ""}(${P.filter(Boolean).join(at(f) ? ` ${f.combinator} ` : " ")})`;
    };
    return _(e, !0);
  }
  if (n === "parameterized" || n === "parameterized_named") {
    const _ = n === "parameterized", f = [], h = {}, P = /* @__PURE__ */ new Map(), O = (A) => {
      P.has(A) || P.set(A, /* @__PURE__ */ new Set());
      const k = `${A}_${P.get(A).size + 1}`;
      return P.get(A).add(k), k;
    }, C = (A) => {
      const [k, U] = x(A);
      if (!We(A, k, U) || A.field === I || A.operator === $)
        return "";
      const F = lt(y, A.field), j = Object.fromEntries(
        Array.from(P.entries()).map(([Q, Y]) => [
          Q,
          Array.from(Y)
        ])
      ), M = (typeof c == "function" ? c : Kt)(
        A,
        {
          getNextNamedParam: O,
          fieldParamNames: j,
          parseNumbers: p,
          quoteFieldNamesWith: N,
          fieldData: F,
          format: n,
          paramPrefix: v,
          paramsKeepPrefix: b,
          numberedParams: T,
          fallbackExpression: R,
          valueProcessor: u,
          fields: y,
          placeholderFieldName: I,
          placeholderOperatorName: $,
          validator: E
        },
        {
          processedParams: f
        }
      );
      if (!ot(M))
        return "";
      const { sql: B, params: J } = M;
      return typeof B != "string" || !B ? "" : (n === "parameterized" && Array.isArray(J) ? f.push(...J) : n === "parameterized_named" && ot(J) && (Object.assign(h, J), Object.keys(J).forEach((Q) => {
        var Y;
        return (Y = P.get(A.field)) == null ? void 0 : Y.add(Q);
      })), B);
    }, g = (A, k) => {
      if (!We(A, w[A.id ?? /* istanbul ignore next */
      ""]))
        return k ? R : (
          /* istanbul ignore next */
          ""
        );
      const U = A.rules.map((F) => typeof F == "string" ? F : Xe(F) ? g(F, A.rules.length === 1) : C(F));
      return U.length === 0 ? R : `${A.not ? "NOT " : ""}(${U.filter(Boolean).join(at(A) ? ` ${A.combinator} ` : " ")})`;
    };
    return _ ? { sql: g(e, !0), params: f } : { sql: g(e, !0), params: h };
  }
  if (n === "mongodb") {
    const _ = (P, O) => {
      if (!We(P, w[P.id ?? /* istanbul ignore next */
      ""]))
        return O ? R : "";
      const C = `"$${P.combinator.toLowerCase()}"`;
      let g = !1;
      const A = P.rules.map((k) => {
        if (Xe(k)) {
          const M = _(k);
          return M ? (g = !0, /^\{.+\}$/.test(M) ? M : `{${M}}`) : "";
        }
        const [U, F] = x(k);
        if (!We(k, U, F) || k.field === I || k.operator === $)
          return "";
        const j = lt(y, k.field);
        return (c ?? u)(k, {
          parseNumbers: p,
          fieldData: j,
          format: n
        });
      }).filter(Boolean);
      return A.length > 0 ? A.length === 1 && !g ? A[0] : `${C}:[${A.join(",")}]` : R;
    }, f = at(e) ? e : Yt(e), h = _(f, !0);
    return /^\{.+\}$/.test(h) ? h : `{${h}}`;
  }
  if (n === "cel") {
    const _ = (f, h) => {
      if (!We(f, w[f.id ?? /* istanbul ignore next */
      ""]))
        return h ? R : "";
      const P = f.rules.map((g) => {
        if (typeof g == "string")
          return ln[g];
        if (Xe(g))
          return _(g);
        const [A, k] = x(g);
        if (!We(g, A, k) || g.field === I || g.operator === $)
          return "";
        const U = lt(y, g.field);
        return (c ?? u)(g, {
          parseNumbers: p,
          escapeQuotes: (g.valueSource ?? "value") === "value",
          fieldData: U,
          format: n
        });
      }).filter(Boolean).join(
        at(f) ? ` ${ln[f.combinator]} ` : " "
      ), [O, C] = f.not || !h ? [`${f.not ? "!" : ""}(`, ")"] : ["", ""];
      return P ? `${O}${P}${C}` : R;
    };
    return _(e, !0);
  }
  if (n === "spel") {
    const _ = (f, h) => {
      if (!We(f, w[f.id ?? /* istanbul ignore next */
      ""]))
        return h ? R : "";
      const P = f.rules.map((g) => {
        if (typeof g == "string")
          return g;
        if (Xe(g))
          return _(g);
        const [A, k] = x(g);
        if (!We(g, A, k) || g.field === I || g.operator === $)
          return "";
        const U = lt(y, g.field);
        return (c ?? u)(g, {
          parseNumbers: p,
          escapeQuotes: (g.valueSource ?? "value") === "value",
          fieldData: U,
          format: n
        });
      }).filter(Boolean).join(at(f) ? ` ${f.combinator} ` : " "), [O, C] = f.not || !h ? [`${f.not ? "!" : ""}(`, ")"] : ["", ""];
      return P ? `${O}${P}${C}` : R;
    };
    return _(e, !0);
  }
  if (n === "jsonata") {
    const _ = (f, h) => {
      if (!We(f, w[f.id ?? /* istanbul ignore next */
      ""]))
        return h ? R : "";
      const P = f.rules.map((g) => {
        if (typeof g == "string")
          return g;
        if (Xe(g))
          return _(g);
        const [A, k] = x(g);
        if (!We(g, A, k) || g.field === I || g.operator === $)
          return "";
        const U = lt(y, g.field);
        return (c ?? u)(g, {
          parseNumbers: p,
          escapeQuotes: (g.valueSource ?? "value") === "value",
          fieldData: U,
          format: n,
          quoteFieldNamesWith: N
        });
      }).filter(Boolean).join(at(f) ? ` ${f.combinator} ` : " "), [O, C] = f.not || !h ? [`${f.not ? "$not" : ""}(`, ")"] : ["", ""];
      return P ? `${O}${P}${C}` : R;
    };
    return _(e, !0);
  }
  if (n === "jsonlogic") {
    const _ = at(e) ? e : Yt(e), f = (h, P) => {
      if (!We(h, w[h.id ?? /* istanbul ignore next */
      ""]))
        return !1;
      const O = h.rules.map((g) => {
        if (Xe(g))
          return f(g);
        const [A, k] = x(g);
        if (!We(g, A, k) || g.field === I || g.operator === $)
          return !1;
        const U = lt(y, g.field);
        return (c ?? u)(g, {
          parseNumbers: p,
          fieldData: U,
          format: n
        });
      }).filter(Boolean);
      if (O.length === 0)
        return !1;
      const C = { [h.combinator]: O };
      return h.not ? { "!": C } : C;
    };
    return f(_);
  }
  if (n === "elasticsearch") {
    const _ = at(e) ? e : Yt(e), f = (P) => {
      if (!We(P, w[P.id ?? /* istanbul ignore next */
      ""]))
        return !1;
      const O = P.rules.map((C) => {
        if (Xe(C))
          return f(C);
        const [g, A] = x(C);
        if (!We(C, g, A) || C.field === I || C.operator === $)
          return !1;
        const k = lt(y, C.field);
        return (c ?? u)(C, {
          parseNumbers: p,
          fieldData: k,
          format: n
        });
      }).filter(Boolean);
      return O.length === 0 ? !1 : {
        bool: P.not ? {
          must_not: P.combinator === "or" ? { bool: { should: O } } : O
        } : { [P.combinator === "or" ? "should" : "must"]: O }
      };
    }, h = f(_);
    return h === !1 ? {} : h;
  }
  return "";
}
var Cs = {
  default: St,
  mongodb: Vt,
  cel: Rt,
  spel: xt
}, er = (e) => (r, n, u, c) => Cs[e](
  { field: r, operator: n, value: u, valueSource: c },
  { parseNumbers: !1 }
), Ls = er("default"), ks = er("mongodb"), Ts = er("cel"), Ds = er("spel"), Ws = Rt, Fs = Vt, Ms = xt, Lr = Object.defineProperty, js = Object.getOwnPropertyDescriptor, Bs = Object.getOwnPropertyNames, Us = Object.prototype.hasOwnProperty, zs = (e, r) => {
  for (var n in r)
    Lr(e, n, { get: r[n], enumerable: !0 });
}, Xs = (e, r, n, u) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let c of Bs(r))
      !Us.call(e, c) && c !== n && Lr(e, c, { get: () => r[c], enumerable: !(u = js(r, c)) || u.enumerable });
  return e;
}, Js = (e) => Xs(Lr({}, "__esModule", { value: !0 }), e), Kn = {};
zs(Kn, {
  parseJsonLogic: () => g1
});
var qs = Js(Kn), Qs = ",", Gs = {
  "=": "!=",
  "!=": "=",
  "<": ">=",
  "<=": ">",
  ">": "<=",
  ">=": "<",
  beginsWith: "doesNotBeginWith",
  doesNotBeginWith: "beginsWith",
  endsWith: "doesNotEndWith",
  doesNotEndWith: "endsWith",
  contains: "doesNotContain",
  doesNotContain: "contains",
  between: "notBetween",
  notBetween: "between",
  in: "notIn",
  notIn: "in",
  notNull: "null",
  null: "notNull"
}, qt = (e, r = Qs) => e.map((n) => `${n ?? ""}`.replaceAll(r[0], `\\${r[0]}`)).join(r), Hs = kt;
new RegExp(
  Hs.numericRegex.source.replace(/^\^/, "^\\s*").replace(/\$$/, "\\s*$")
);
var me = (e) => e === null || typeof e != "object" ? !1 : Object.getPrototypeOf(e) === Object.prototype, tr = (e) => me(e) && "rules" in e && Array.isArray(e.rules), bn = (e) => tr(e) && typeof e.combinator == "string", Ks = (e) => tr(e) && typeof e.combinator > "u", Yn = (e) => {
  if (Ks(e))
    return e;
  const { combinator: r, ...n } = e, u = [], { length: c } = e.rules;
  return e.rules.forEach((N, E) => {
    tr(N) ? u.push(Yn(N)) : u.push(N), r && E < c - 1 && u.push(r);
  }), { ...n, rules: u };
}, Ys = Object.keys, Zs = xr(), _n = (e) => me(e) && "name" in e && typeof e.name == "string", gn = (e) => me(e) && "value" in e && typeof e.value == "string";
function Ct(e, r) {
  return (0, Zs.produce)((u) => {
    const c = {};
    let N = !!r;
    if (_n(u) && !gn(u) ? (c.value = u.name, N = !0) : !_n(u) && gn(u) && (c.name = u.value, N = !0), N)
      return Object.assign({}, r, u, c);
  })(e);
}
var e1 = (e) => {
  const r = /* @__PURE__ */ new Set(), n = [];
  return e.forEach((u) => {
    r.has(u.value ?? u.name) || (r.add(u.value ?? u.name), n.push(u));
  }), e.length === n.length ? e : n;
}, t1 = (e) => Array.isArray(e) && e.length > 0 && me(e[0]) && "options" in e[0], vn = (e) => Array.isArray(e) && e.length > 0 && me(e[0]) && "options" in e[0] && me(e[0].options[0]) && ("name" in e[0].options[0] || "value" in e[0].options[0]), r1 = (e) => e1(t1(e) ? e.flatMap((r) => r.options) : e), Nn = (e, r, n) => {
  var N;
  const u = Ct(e), c = Ct(n);
  return u.value === c.value ? !1 : typeof u.comparator == "string" ? u[u.comparator] === c[u.comparator] : ((N = u.comparator) == null ? void 0 : N.call(u, c, r)) ?? /* istanbul ignore next */
  !1;
}, n1 = (e, r, n) => {
  if (!e.comparator) {
    const u = (c) => (c.value ?? /* istanbul ignore next */
    c.name) !== (e.value ?? /* istanbul ignore next */
    e.name);
    return vn(r) ? r.map((c) => ({
      ...c,
      options: c.options.filter(u)
    })) : r.filter(u);
  }
  return vn(r) ? r.map((u) => ({
    ...u,
    options: u.options.filter((c) => Nn(e, n, c))
  })).filter((u) => u.options.length > 0) : r.filter((u) => Nn(e, n, u));
}, s1 = ["value"], i1 = {
  name: "name",
  value: "name",
  valueSources: null,
  label: "label"
}, On = (e, r, n) => {
  const u = e ? Ct(e) : (
    /* istanbul ignore else */
    i1
  );
  if (u.valueSources)
    return typeof u.valueSources == "function" ? u.valueSources(r) : u.valueSources;
  if (n) {
    const c = n(u.value, r, {
      fieldData: Ct(u)
    });
    if (c) return c;
  }
  return s1;
}, a1 = (e) => {
  const r = e ? Array.isArray(e) ? e : Object.keys(e).map((n) => ({ ...e[n], name: n })).sort((n, u) => n.label.localeCompare(u.label)) : [];
  return r1(r);
};
function o1(e) {
  const { fieldsFlat: r, fieldName: n, operator: u, subordinateFieldName: c, getValueSources: N } = e;
  if (r.length === 0) return !0;
  let E = !1;
  const y = Ct(r.find((w) => w.name === n));
  return y && (!c && u !== "notNull" && u !== "null" && !On(y, u, N).some((w) => w === "value") ? E = !1 : E = !0, E && c && (On(y, u, N).some((w) => w === "field") && n !== c && n1(
    y,
    r,
    u
  ).find((R) => R.name === c) || (E = !1))), E;
}
var c1 = (e) => me(e) && "var" in e, et = (e) => c1(e) && typeof e.var == "string", En = (e) => me(e) && "==" in e, Sn = (e) => me(e) && "===" in e, In = (e) => me(e) && "!=" in e, $n = (e) => me(e) && "!==" in e, u1 = (e) => me(e) && "!" in e, l1 = (e) => me(e) && "!!" in e, f1 = (e) => me(e) && "or" in e, p1 = (e) => me(e) && "and" in e, h1 = (e) => me(e) && ">" in e, d1 = (e) => me(e) && ">=" in e, y1 = (e) => me(e) && "<" in e && e["<"].length === 2, m1 = (e) => me(e) && "<=" in e && e["<="].length === 2, b1 = (e) => me(e) && "in" in e && Array.isArray(e.in[1]), An = (e) => me(e) && "in" in e && !Array.isArray(e.in[1]), wn = (e) => me(e) && "<" in e && Array.isArray(e["<"]) && e["<"].length === 3, _1 = (e) => me(e) && "<=" in e && Array.isArray(e["<="]) && e["<="].length === 3, Pn = (e) => me(e) && "startsWith" in e, Rn = (e) => me(e) && "endsWith" in e, Vn = { combinator: "and", rules: [] };
function g1(e, r = {}) {
  const n = a1(r.fields), { getValueSources: u, listsAsArrays: c, jsonLogicOperations: N } = r, E = (b, T, p) => o1({
    fieldName: b,
    fieldsFlat: n,
    operator: T,
    subordinateFieldName: p,
    getValueSources: u
  });
  function y(b, T) {
    var _;
    if (T && !me(b))
      return !1;
    const [p, I] = ((_ = Object.entries(b)) == null ? void 0 : _[0]) ?? [];
    if (N && Ys(N).includes(p)) {
      const f = N[p](I);
      return f ? T && !tr(f) ? { combinator: "and", rules: [f] } : f : !1;
    }
    if (p1(b))
      return {
        combinator: "and",
        rules: b.and.map((f) => y(f)).filter(Boolean)
      };
    if (f1(b))
      return {
        combinator: "or",
        rules: b.or.map((f) => y(f)).filter(Boolean)
      };
    if (u1(b)) {
      const f = y(b["!"]);
      if (f) {
        if (!bn(f) && (f.operator === "between" || f.operator === "in" || f.operator === "contains" || f.operator === "beginsWith" || f.operator === "endsWith")) {
          const h = { ...f, operator: Gs[f.operator] };
          return T ? { combinator: "and", rules: [h] } : h;
        } else if (wn(b["!"]) || bn(f))
          return { ...f, not: !0 };
        return { combinator: "and", rules: [f], not: !0 };
      }
      return !1;
    } else if (l1(b))
      return y(b["!!"]) || !1;
    let $ = !1, D = "", G = "=", H = "", x;
    if (
      // Basic boolean operations
      En(b) || Sn(b) || In(b) || $n(b) || h1(b) || d1(b) || y1(b) || m1(b) || An(b) || Pn(b) || Rn(b)
    ) {
      const [f, h] = I;
      if (et(f) && !me(h))
        D = f.var, H = h;
      else if (!me(f) && et(h))
        D = h.var, H = f;
      else if (et(f) && et(h))
        D = f.var, H = h.var, x = "field";
      else
        return !1;
      En(b) || Sn(b) ? G = H === null ? "null" : "=" : In(b) || $n(b) ? G = H === null ? "notNull" : "!=" : An(b) ? G = "contains" : Pn(b) ? G = "beginsWith" : Rn(b) ? G = "endsWith" : G = p, E(D, G, x === "field" ? H : void 0) && ($ = { field: D, operator: G, value: H, valueSource: x });
    } else if (wn(b) && et(b["<"][1])) {
      D = b["<"][1].var;
      const f = [b["<"][0], b["<"][2]];
      if (f.every(et) || f.every((h) => typeof h == "string") || f.every((h) => typeof h == "number") || f.every((h) => typeof h == "boolean"))
        return y({
          and: [{ ">": [{ var: D }, f[0]] }, { "<": [{ var: D }, f[1]] }]
        }) || /* istanbul ignore next */
        !1;
    } else if (_1(b) && et(b["<="][1])) {
      D = b["<="][1].var, G = "between";
      const f = [b["<="][0], b["<="][2]];
      if (b["<="].every(et)) {
        const h = f;
        x = "field";
        const P = h.map((O) => O.var).filter((O) => E(D, G, O));
        H = c ? P : qt(P, ",");
      } else
        (f.every((h) => typeof h == "string") || f.every((h) => typeof h == "number") || f.every((h) => typeof h == "boolean")) && (H = c ? f : qt(
          f.map((h) => `${h}`),
          ","
        ));
      E(D, G) && H.length >= 2 && ($ = { field: D, operator: G, value: H, valueSource: x });
    } else if (b1(b) && et(I[0])) {
      if (D = I[0].var, G = "in", b.in[1].every(et)) {
        x = "field";
        const f = b.in[1].map((h) => h.var).filter((h) => E(D, G, h));
        H = c ? f : qt(f, ",");
      } else
        (b.in[1].every((f) => typeof f == "string") || b.in[1].every((f) => typeof f == "number") || b.in[1].every((f) => typeof f == "boolean")) && (H = c ? b.in[1] : qt(
          b.in[1].map((f) => `${f}`),
          ","
        ));
      H.length > 0 && ($ = { field: D, operator: G, value: H, valueSource: x });
    }
    return $ ? T ? { combinator: "and", rules: [$] } : $ : !1;
  }
  let w = e;
  if (typeof e == "string")
    try {
      w = JSON.parse(e);
    } catch {
      return Vn;
    }
  const R = y(w, !0), v = R || Vn;
  return r.independentCombinators ? Yn(v) : v;
}
const J1 = (e) => {
  try {
    const r = qs.parseJsonLogic(e);
    return Bn.formatQuery(r, "json");
  } catch (r) {
    throw console.error(`Error while parsing JsonLogic expression - ${r}`), new Error("Invalid JsonLogic expression");
  }
};
var kr = Object.defineProperty, v1 = Object.getOwnPropertyDescriptor, N1 = Object.getOwnPropertyNames, O1 = Object.prototype.hasOwnProperty, E1 = (e, r) => {
  for (var n in r)
    kr(e, n, { get: r[n], enumerable: !0 });
}, S1 = (e, r, n, u) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let c of N1(r))
      !O1.call(e, c) && c !== n && kr(e, c, { get: () => r[c], enumerable: !(u = v1(r, c)) || u.enumerable });
  return e;
}, I1 = (e) => S1(kr({}, "__esModule", { value: !0 }), e), Zn = {};
E1(Zn, {
  parseSQL: () => U1
});
var $1 = I1(Zn), A1 = ",", Qt = (e, r = A1) => e.map((n) => `${n ?? ""}`.replaceAll(r[0], `\\${r[0]}`)).join(r), w1 = kt;
new RegExp(
  w1.numericRegex.source.replace(/^\^/, "^\\s*").replace(/\$$/, "\\s*$")
);
var It = (e) => e === null || typeof e != "object" ? !1 : Object.getPrototypeOf(e) === Object.prototype, xn = (e) => It(e) && "rules" in e && Array.isArray(e.rules), P1 = xr(), Cn = (e) => It(e) && "name" in e && typeof e.name == "string", Ln = (e) => It(e) && "value" in e && typeof e.value == "string";
function Lt(e, r) {
  return (0, P1.produce)((u) => {
    const c = {};
    let N = !!r;
    if (Cn(u) && !Ln(u) ? (c.value = u.name, N = !0) : !Cn(u) && Ln(u) && (c.name = u.value, N = !0), N)
      return Object.assign({}, r, u, c);
  })(e);
}
var R1 = (e) => {
  const r = /* @__PURE__ */ new Set(), n = [];
  return e.forEach((u) => {
    r.has(u.value ?? u.name) || (r.add(u.value ?? u.name), n.push(u));
  }), e.length === n.length ? e : n;
}, V1 = (e) => Array.isArray(e) && e.length > 0 && It(e[0]) && "options" in e[0], kn = (e) => Array.isArray(e) && e.length > 0 && It(e[0]) && "options" in e[0] && It(e[0].options[0]) && ("name" in e[0].options[0] || "value" in e[0].options[0]), x1 = (e) => R1(V1(e) ? e.flatMap((r) => r.options) : e), Tn = (e, r, n) => {
  var N;
  const u = Lt(e), c = Lt(n);
  return u.value === c.value ? !1 : typeof u.comparator == "string" ? u[u.comparator] === c[u.comparator] : ((N = u.comparator) == null ? void 0 : N.call(u, c, r)) ?? /* istanbul ignore next */
  !1;
}, C1 = (e, r, n) => {
  if (!e.comparator) {
    const u = (c) => (c.value ?? /* istanbul ignore next */
    c.name) !== (e.value ?? /* istanbul ignore next */
    e.name);
    return kn(r) ? r.map((c) => ({
      ...c,
      options: c.options.filter(u)
    })) : r.filter(u);
  }
  return kn(r) ? r.map((u) => ({
    ...u,
    options: u.options.filter((c) => Tn(e, n, c))
  })).filter((u) => u.options.length > 0) : r.filter((u) => Tn(e, n, u));
}, L1 = ["value"], k1 = {
  name: "name",
  value: "name",
  valueSources: null,
  label: "label"
}, Dn = (e, r, n) => {
  const u = e ? Lt(e) : (
    /* istanbul ignore else */
    k1
  );
  if (u.valueSources)
    return typeof u.valueSources == "function" ? u.valueSources(r) : u.valueSources;
  if (n) {
    const c = n(u.value, r, {
      fieldData: Lt(u)
    });
    if (c) return c;
  }
  return L1;
}, T1 = (e) => {
  const r = e ? Array.isArray(e) ? e : Object.keys(e).map((n) => ({ ...e[n], name: n })).sort((n, u) => n.label.localeCompare(u.label)) : [];
  return x1(r);
};
function D1(e) {
  const { fieldsFlat: r, fieldName: n, operator: u, subordinateFieldName: c, getValueSources: N } = e;
  if (r.length === 0) return !0;
  let E = !1;
  const y = Lt(r.find((w) => w.name === n));
  return y && (!c && u !== "notNull" && u !== "null" && !Dn(y, u, N).some((w) => w === "value") ? E = !1 : E = !0, E && c && (Dn(y, u, N).some((w) => w === "field") && n !== c && C1(
    y,
    r,
    u
  ).find((R) => R.name === c) || (E = !1))), E;
}
var W1 = function() {
  var e = function(ut, ee, ae, fe) {
    for (ae = ae || {}, fe = ut.length; fe--; ae[ut[fe]] = ee) ;
    return ae;
  }, r = [1, 8], n = [1, 4], u = [2, 4], c = [1, 11], N = [1, 10], E = [2, 16], y = [1, 14], w = [1, 15], R = [1, 16], v = [6, 8], b = [2, 148], T = [1, 19], p = [1, 20], I = [16, 33, 35, 36, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $ = [16, 18, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], D = [2, 162], G = [1, 29], H = [6, 8, 14, 17, 146, 150, 152, 154], x = [1, 42], _ = [1, 61], f = [1, 53], h = [1, 60], P = [1, 62], O = [1, 63], C = [1, 64], g = [1, 65], A = [1, 66], k = [1, 59], U = [1, 54], F = [1, 55], j = [1, 56], M = [1, 57], B = [1, 58], J = [1, 43], Q = [1, 44], Y = [1, 45], te = [1, 47], de = [1, 34], Z = [1, 67], tt = [16, 35, 36, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], He = [6, 8, 14, 17, 150, 152, 154], pt = [2, 145], Ke = [1, 76], Ye = [1, 77], Be = [6, 8, 14, 17, 43, 133, 138, 144, 146, 150, 152, 154], Oe = [1, 80], Ie = [1, 79], ve = [1, 81], Le = [6, 8, 14, 17, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 109, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], Pe = [6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 109, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], ke = [1, 102], $e = [1, 100], Se = [1, 101], Ge = [1, 96], Me = [1, 97], Te = [1, 98], Je = [1, 99], De = [1, 103], je = [1, 104], be = [1, 105], _e = [1, 106], rt = [1, 107], bt = [1, 108], nt = [2, 107], Ze = [6, 8, 14, 17, 34, 36, 43, 45, 51, 52, 53, 71, 72, 74, 77, 79, 81, 89, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], pe = [6, 8, 14, 17, 34, 36, 43, 45, 51, 52, 53, 71, 72, 74, 77, 79, 81, 89, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 105, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], _t = [2, 82], Ue = [1, 110], gt = [1, 109], i = [1, 117], t = [2, 65], s = [1, 119], l = [16, 35, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], d = [16, 29, 35, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 121, 195], V = [1, 162], X = [1, 164], W = [17, 43], S = [6, 8, 14, 16, 17, 34, 35, 36, 43, 45, 50, 51, 52, 53, 56, 57, 59, 60, 62, 71, 72, 74, 76, 77, 79, 81, 82, 83, 84, 86, 87, 88, 89, 90, 91, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 105, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182, 192, 193, 194, 195], m = [2, 60], L = [1, 174], z = [1, 172], ue = [6, 8, 138, 146], q = [16, 35, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], se = [6, 8, 14, 17, 138, 144, 146, 150, 152, 154], oe = [6, 8, 14, 17, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], ie = [6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 93, 94, 95, 96, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], ce = [6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 79, 81, 89, 93, 94, 95, 96, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], K = [16, 35, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], ne = [16, 35, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], re = [6, 8, 14, 17, 43, 157], le = [16, 35, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], Ee = [71, 74, 77], qe = [16, 35, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], Ce = [1, 239], vt = [6, 8, 14, 17], ct = [1, 257], rr = [1, 253], Dr = [2, 199], Wr = [1, 261], Fr = [1, 262], Tt = [6, 8, 14, 17, 43, 129, 135, 138, 144, 146, 150, 152, 154, 182], nr = [1, 264], sr = [1, 267], ir = [1, 268], Dt = [1, 269], Wt = [1, 270], ar = [2, 176], or = [1, 266], we = [6, 8, 14, 17, 36, 43, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 179, 180, 182], Mr = [6, 8, 14, 17, 135, 138, 144, 146, 150, 152, 154], jr = [1, 282], Br = [2, 181], Ur = [170, 173], cr = [6, 8, 14, 17, 36, 43, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 179, 180, 182, 192, 193, 194], zr = [2, 201], Xr = [1, 287], ur = [1, 299], Jr = [1, 307], qr = [1, 308], Qr = [1, 309], Gr = [6, 8, 14, 17, 138, 146, 150, 152, 154], Hr = [1, 319], lr = [1, 325], fr = [1, 326], pr = [2, 206], hr = [1, 337], Kr = [16, 152], dr = [6, 8, 14, 17, 152, 154], Ft = [1, 353], yr = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, main: 3, selectClause: 4, semicolonOpt: 5, EOF: 6, unionClause: 7, ";": 8, unionClauseNotParenthesized: 9, unionClauseParenthesized: 10, order_by_opt: 11, limit_opt: 12, selectClauseParenthesized: 13, UNION: 14, distinctOpt: 15, "(": 16, ")": 17, SELECT: 18, highPriorityOpt: 19, maxStateMentTimeOpt: 20, straightJoinOpt: 21, sqlSmallResultOpt: 22, sqlBigResultOpt: 23, sqlBufferResultOpt: 24, sqlCacheOpt: 25, sqlCalcFoundRowsOpt: 26, selectExprList: 27, selectDataSetOpt: 28, ALL: 29, DISTINCT: 30, DISTINCTROW: 31, HIGH_PRIORITY: 32, MAX_STATEMENT_TIME: 33, "=": 34, NUMERIC: 35, STRAIGHT_JOIN: 36, SQL_SMALL_RESULT: 37, SQL_BIG_RESULT: 38, SQL_BUFFER_RESULT: 39, SQL_CACHE: 40, SQL_NO_CACHE: 41, SQL_CALC_FOUND_ROWS: 42, ",": 43, selectExpr: 44, "*": 45, selectExprStar: 46, expr: 47, selectExprAliasOpt: 48, identifier: 49, DOT: 50, AS: 51, IDENTIFIER: 52, STRING: 53, string: 54, number: 55, EXPONENT_NUMERIC: 56, HEX_NUMERIC: 57, boolean: 58, TRUE: 59, FALSE: 60, null: 61, NULL: 62, literal: 63, place_holder: 64, function_call: 65, function_call_param_list: 66, function_call_param: 67, identifier_list: 68, case_expr_opt: 69, when_then_list: 70, WHEN: 71, THEN: 72, case_when_else: 73, ELSE: 74, case_when: 75, CASE: 76, END: 77, simple_expr_prefix: 78, "+": 79, simple_expr: 80, "-": 81, "~": 82, "!": 83, BINARY: 84, expr_list: 85, ROW: 86, EXISTS: 87, "{": 88, "}": 89, "||": 90, WILDCARD: 91, bit_expr: 92, "|": 93, "&": 94, "<<": 95, ">>": 96, "/": 97, DIV: 98, MOD: 99, "%": 100, "^": 101, not_opt: 102, NOT: 103, escape_opt: 104, ESCAPE: 105, predicate: 106, IN: 107, BETWEEN: 108, AND: 109, SOUNDS: 110, LIKE: 111, REGEXP: 112, comparison_operator: 113, ">=": 114, ">": 115, "<=": 116, "<": 117, "<>": 118, "!=": 119, sub_query_data_set_opt: 120, ANY: 121, boolean_primary: 122, IS: 123, boolean_extra: 124, UNKNOWN: 125, OR: 126, XOR: 127, where_opt: 128, WHERE: 129, group_by_opt: 130, group_by: 131, roll_up_opt: 132, WITH: 133, ROLLUP: 134, GROUP_BY: 135, group_by_order_by_item_list: 136, order_by: 137, ORDER_BY: 138, group_by_order_by_item: 139, sort_opt: 140, ASC: 141, DESC: 142, having_opt: 143, HAVING: 144, limit: 145, LIMIT: 146, OFFSET: 147, procedure_opt: 148, procedure: 149, PROCEDURE: 150, for_update_lock_in_share_mode_opt: 151, FOR: 152, UPDATE: 153, LOCK: 154, SHARE: 155, MODE: 156, FROM: 157, table_references: 158, partitionOpt: 159, escaped_table_reference: 160, table_reference: 161, OJ: 162, join_inner_cross: 163, INNER: 164, CROSS: 165, left_right: 166, LEFT: 167, RIGHT: 168, out_opt: 169, OUTER: 170, left_right_out_opt: 171, join_table: 172, JOIN: 173, table_factor: 174, join_condition: 175, on_join_condition: 176, NATURAL: 177, join_condition_opt: 178, ON: 179, USING: 180, partition_names: 181, PARTITION: 182, aliasOpt: 183, index_or_key: 184, INDEX: 185, KEY: 186, for_opt: 187, identifier_list_opt: 188, index_hint_list_opt: 189, index_hint_list: 190, index_hint: 191, USE: 192, IGNORE: 193, FORCE: 194, PLACE_HOLDER: 195, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "EOF", 8: ";", 14: "UNION", 16: "(", 17: ")", 18: "SELECT", 29: "ALL", 30: "DISTINCT", 31: "DISTINCTROW", 32: "HIGH_PRIORITY", 33: "MAX_STATEMENT_TIME", 34: "=", 35: "NUMERIC", 36: "STRAIGHT_JOIN", 37: "SQL_SMALL_RESULT", 38: "SQL_BIG_RESULT", 39: "SQL_BUFFER_RESULT", 40: "SQL_CACHE", 41: "SQL_NO_CACHE", 42: "SQL_CALC_FOUND_ROWS", 43: ",", 45: "*", 50: "DOT", 51: "AS", 52: "IDENTIFIER", 53: "STRING", 56: "EXPONENT_NUMERIC", 57: "HEX_NUMERIC", 59: "TRUE", 60: "FALSE", 62: "NULL", 71: "WHEN", 72: "THEN", 74: "ELSE", 76: "CASE", 77: "END", 79: "+", 81: "-", 82: "~", 83: "!", 84: "BINARY", 86: "ROW", 87: "EXISTS", 88: "{", 89: "}", 90: "||", 91: "WILDCARD", 93: "|", 94: "&", 95: "<<", 96: ">>", 97: "/", 98: "DIV", 99: "MOD", 100: "%", 101: "^", 103: "NOT", 105: "ESCAPE", 107: "IN", 108: "BETWEEN", 109: "AND", 110: "SOUNDS", 111: "LIKE", 112: "REGEXP", 114: ">=", 115: ">", 116: "<=", 117: "<", 118: "<>", 119: "!=", 121: "ANY", 123: "IS", 125: "UNKNOWN", 126: "OR", 127: "XOR", 129: "WHERE", 133: "WITH", 134: "ROLLUP", 135: "GROUP_BY", 138: "ORDER_BY", 141: "ASC", 142: "DESC", 144: "HAVING", 146: "LIMIT", 147: "OFFSET", 150: "PROCEDURE", 152: "FOR", 153: "UPDATE", 154: "LOCK", 155: "SHARE", 156: "MODE", 157: "FROM", 162: "OJ", 164: "INNER", 165: "CROSS", 167: "LEFT", 168: "RIGHT", 170: "OUTER", 173: "JOIN", 177: "NATURAL", 179: "ON", 180: "USING", 182: "PARTITION", 185: "INDEX", 186: "KEY", 192: "USE", 193: "IGNORE", 194: "FORCE", 195: "PLACE_HOLDER" },
    productions_: [0, [3, 3], [3, 3], [5, 1], [5, 0], [7, 1], [7, 3], [10, 4], [10, 4], [13, 3], [9, 4], [9, 4], [4, 12], [15, 1], [15, 1], [15, 1], [15, 0], [19, 1], [19, 0], [20, 3], [20, 0], [21, 1], [21, 0], [22, 1], [22, 0], [23, 1], [23, 0], [24, 1], [24, 0], [25, 0], [25, 1], [25, 1], [26, 1], [26, 0], [27, 3], [27, 1], [44, 1], [44, 1], [44, 2], [46, 3], [48, 0], [48, 2], [48, 1], [48, 2], [48, 1], [54, 1], [55, 1], [55, 1], [55, 1], [58, 1], [58, 1], [61, 1], [63, 1], [63, 1], [63, 1], [63, 1], [63, 1], [65, 4], [66, 3], [66, 1], [67, 0], [67, 1], [67, 1], [67, 2], [67, 1], [49, 1], [49, 3], [68, 1], [68, 3], [69, 0], [69, 1], [70, 4], [70, 5], [73, 0], [73, 2], [75, 5], [78, 2], [78, 2], [78, 2], [78, 2], [78, 2], [80, 1], [80, 1], [80, 1], [80, 1], [80, 3], [80, 4], [80, 3], [80, 4], [80, 4], [80, 1], [80, 3], [80, 3], [80, 5], [92, 1], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [102, 0], [102, 1], [104, 0], [104, 2], [106, 1], [106, 6], [106, 6], [106, 6], [106, 4], [106, 5], [106, 4], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [120, 1], [120, 1], [122, 1], [122, 4], [122, 3], [122, 6], [124, 1], [124, 1], [47, 1], [47, 4], [47, 2], [47, 3], [47, 3], [47, 3], [85, 1], [85, 3], [128, 0], [128, 2], [130, 0], [130, 1], [132, 0], [132, 2], [131, 3], [11, 0], [11, 1], [137, 3], [136, 1], [136, 3], [139, 2], [140, 0], [140, 1], [140, 1], [143, 0], [143, 2], [145, 2], [145, 4], [145, 4], [12, 0], [12, 1], [148, 0], [148, 1], [149, 2], [151, 0], [151, 2], [151, 4], [28, 0], [28, 10], [158, 1], [158, 3], [160, 1], [160, 4], [163, 0], [163, 1], [163, 1], [166, 1], [166, 1], [169, 0], [169, 1], [171, 0], [171, 2], [172, 4], [172, 5], [172, 4], [172, 6], [172, 5], [178, 0], [178, 1], [176, 2], [175, 1], [175, 4], [161, 1], [161, 1], [181, 1], [181, 3], [159, 0], [159, 4], [183, 0], [183, 2], [183, 1], [184, 1], [184, 1], [187, 0], [187, 2], [187, 2], [187, 2], [188, 0], [188, 1], [189, 0], [189, 1], [190, 1], [190, 3], [191, 6], [191, 6], [191, 6], [174, 4], [174, 4], [174, 3], [64, 1]],
    performAction: function(ee, ae, fe, Ne, he, a, br) {
      var o = a.length - 1;
      switch (he) {
        case 1:
        case 2:
          return { nodeType: "Main", value: a[o - 2], hasSemicolon: a[o - 1] };
        case 3:
        case 146:
          this.$ = !0;
          break;
        case 4:
          this.$ = !1;
          break;
        case 5:
        case 13:
        case 14:
        case 15:
        case 17:
        case 19:
        case 21:
        case 23:
        case 25:
        case 27:
        case 30:
        case 31:
        case 32:
        case 37:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 61:
        case 62:
        case 64:
        case 70:
        case 74:
        case 81:
        case 82:
        case 83:
        case 84:
        case 90:
        case 94:
        case 108:
        case 110:
        case 111:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
        case 123:
        case 124:
        case 125:
        case 126:
        case 127:
        case 131:
        case 133:
        case 142:
        case 144:
        case 149:
        case 155:
        case 156:
        case 158:
        case 163:
        case 165:
        case 166:
        case 177:
        case 178:
        case 179:
        case 180:
        case 182:
        case 191:
        case 193:
        case 195:
        case 196:
        case 204:
        case 205:
        case 211:
        case 213:
          this.$ = a[o];
          break;
        case 6:
          this.$ = a[o - 2], this.$.orderBy = a[o - 1], this.$.limit = a[o];
          break;
        case 7:
        case 8:
          this.$ = { type: "Union", left: a[o - 3], distinctOpt: a[o - 1], right: a[o] };
          break;
        case 9:
          this.$ = { type: "SelectParenthesized", value: a[o - 1] };
          break;
        case 10:
        case 11:
          this.$ = { type: "Union", left: a[o - 3], distinctOpt: a[o - 1], right: a[o] };
          break;
        case 12:
          this.$ = {
            type: "Select",
            distinctOpt: a[o - 10],
            highPriorityOpt: a[o - 9],
            maxStateMentTimeOpt: a[o - 8],
            straightJoinOpt: a[o - 7],
            sqlSmallResultOpt: a[o - 6],
            sqlBigResultOpt: a[o - 5],
            sqlBufferResultOpt: a[o - 4],
            sqlCacheOpt: a[o - 3],
            sqlCalcFoundRowsOpt: a[o - 2],
            selectItems: a[o - 1],
            from: a[o].from,
            partition: a[o].partition,
            where: a[o].where,
            groupBy: a[o].groupBy,
            having: a[o].having,
            orderBy: a[o].orderBy,
            limit: a[o].limit,
            procedure: a[o].procedure,
            updateLockMode: a[o].updateLockMode
          };
          break;
        case 16:
        case 18:
        case 20:
        case 22:
        case 24:
        case 26:
        case 28:
        case 29:
        case 33:
        case 60:
        case 69:
        case 73:
        case 107:
        case 109:
        case 141:
        case 143:
        case 145:
        case 148:
        case 154:
        case 157:
        case 162:
        case 164:
        case 167:
        case 176:
        case 181:
        case 190:
        case 199:
        case 206:
        case 210:
        case 212:
          this.$ = null;
          break;
        case 34:
          a[o - 2].value.push(a[o]);
          break;
        case 35:
          this.$ = { type: "SelectExpr", value: [a[o]] };
          break;
        case 36:
        case 65:
          this.$ = { type: "Identifier", value: a[o] };
          break;
        case 38:
          this.$ = a[o - 1], this.$.alias = a[o].alias, this.$.hasAs = a[o].hasAs;
          break;
        case 39:
        case 66:
          this.$ = a[o - 2], a[o - 2].value += "." + a[o];
          break;
        case 40:
        case 201:
          this.$ = { alias: null, hasAs: null };
          break;
        case 41:
        case 43:
          this.$ = { alias: a[o], hasAs: !0 };
          break;
        case 42:
          this.$ = { alias: a[o], hasAs: !1 };
          break;
        case 44:
          this.$ = { alias: a[$01], hasAs: !1 };
          break;
        case 45:
          this.$ = { type: "String", value: a[o] };
          break;
        case 46:
        case 47:
        case 48:
          this.$ = { type: "Number", value: a[o] };
          break;
        case 49:
          this.$ = { type: "Boolean", value: "TRUE" };
          break;
        case 50:
          this.$ = { type: "Boolean", value: "FALSE" };
          break;
        case 51:
          this.$ = { type: "Null", value: "null" };
          break;
        case 57:
          this.$ = { type: "FunctionCall", name: a[o - 3], params: a[o - 1] };
          break;
        case 58:
          a[o - 2].push(a[o]), this.$ = a[o - 2];
          break;
        case 59:
          this.$ = [a[o]];
          break;
        case 63:
          this.$ = { type: "FunctionCallParam", distinctOpt: a[o - 1], value: a[o] };
          break;
        case 67:
          this.$ = { type: "IdentifierList", value: [a[o]] };
          break;
        case 68:
        case 173:
          this.$ = a[o - 2], a[o - 2].value.push(a[o]);
          break;
        case 71:
          this.$ = { type: "WhenThenList", value: [{ when: a[o - 2], then: a[o] }] };
          break;
        case 72:
          this.$ = a[o - 4], this.$.value.push({ when: a[o - 2], then: a[o] });
          break;
        case 75:
          this.$ = { type: "CaseWhen", caseExprOpt: a[o - 3], whenThenList: a[o - 2], else: a[o - 1] };
          break;
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
          this.$ = { type: "Prefix", prefix: a[o - 1], value: a[o] };
          break;
        case 85:
          this.$ = { type: "SimpleExprParentheses", value: a[o - 1] };
          break;
        case 86:
          this.$ = { type: "SimpleExprParentheses", value: a[o - 2], hasRow: !0 };
          break;
        case 87:
          this.$ = { type: "SubQuery", value: a[o - 1] };
          break;
        case 88:
          this.$ = { type: "SubQuery", value: a[o - 1], hasExists: !0 };
          break;
        case 89:
          this.$ = { type: "IdentifierExpr", identifier: a[o - 2], value: a[o - 1] };
          break;
        case 91:
          this.$ = { type: "StartsWithExpr", value: a[o - 2] };
          break;
        case 92:
          this.$ = { type: "EndsWithExpr", value: a[o] };
          break;
        case 93:
          this.$ = { type: "ContainsExpr", value: a[o - 2] };
          break;
        case 95:
          this.$ = { type: "BitExpression", operator: "|", left: a[o - 2], right: a[o] };
          break;
        case 96:
          this.$ = { type: "BitExpression", operator: "&", left: a[o - 2], right: a[o] };
          break;
        case 97:
          this.$ = { type: "BitExpression", operator: "<<", left: a[o - 2], right: a[o] };
          break;
        case 98:
          this.$ = { type: "BitExpression", operator: ">>", left: a[o - 2], right: a[o] };
          break;
        case 99:
          this.$ = { type: "BitExpression", operator: "+", left: a[o - 2], right: a[o] };
          break;
        case 100:
          this.$ = { type: "BitExpression", operator: "-", left: a[o - 2], right: a[o] };
          break;
        case 101:
          this.$ = { type: "BitExpression", operator: "*", left: a[o - 2], right: a[o] };
          break;
        case 102:
          this.$ = { type: "BitExpression", operator: "/", left: a[o - 2], right: a[o] };
          break;
        case 103:
          this.$ = { type: "BitExpression", operator: "DIV", left: a[o - 2], right: a[o] };
          break;
        case 104:
          this.$ = { type: "BitExpression", operator: "MOD", left: a[o - 2], right: a[o] };
          break;
        case 105:
          this.$ = { type: "BitExpression", operator: "%", left: a[o - 2], right: a[o] };
          break;
        case 106:
          this.$ = { type: "BitExpression", operator: "^", left: a[o - 2], right: a[o] };
          break;
        case 112:
          this.$ = { type: "InSubQueryPredicate", hasNot: a[o - 4], left: a[o - 5], right: a[o - 1] };
          break;
        case 113:
          this.$ = { type: "InExpressionListPredicate", hasNot: a[o - 4], left: a[o - 5], right: a[o - 1] };
          break;
        case 114:
          this.$ = { type: "BetweenPredicate", hasNot: a[o - 4], left: a[o - 5], right: { left: a[o - 2], right: a[o] } };
          break;
        case 115:
          this.$ = { type: "SoundsLikePredicate", hasNot: !1, left: a[o - 3], right: a[o] };
          break;
        case 116:
          this.$ = { type: "LikePredicate", hasNot: a[o - 3], left: a[o - 4], right: a[o - 1], escape: a[o] };
          break;
        case 117:
          this.$ = { type: "RegexpPredicate", hasNot: a[o - 2], left: a[o - 3], right: a[o] };
          break;
        case 128:
          this.$ = { type: "IsNullBooleanPrimary", hasNot: a[o - 1], value: a[o - 3] };
          break;
        case 129:
          this.$ = { type: "ComparisonBooleanPrimary", left: a[o - 2], operator: a[o - 1], right: a[o] };
          break;
        case 130:
          this.$ = { type: "ComparisonSubQueryBooleanPrimary", operator: a[o - 4], subQueryOpt: a[o - 3], left: a[o - 5], right: a[o - 1] };
          break;
        case 132:
          this.$ = { type: "BooleanExtra", value: a[o] };
          break;
        case 134:
          this.$ = { type: "IsExpression", hasNot: a[o - 1], left: a[o - 3], right: a[o] };
          break;
        case 135:
          this.$ = { type: "NotExpression", value: a[o] };
          break;
        case 136:
          this.$ = { type: "OrExpression", operator: a[o - 1], left: a[o - 2], right: a[o] };
          break;
        case 137:
          this.$ = { type: "AndExpression", operator: a[o - 1], left: a[o - 2], right: a[o] };
          break;
        case 138:
          this.$ = { type: "XorExpression", operator: a[o - 1], left: a[o - 2], right: a[o] };
          break;
        case 139:
          this.$ = { type: "ExpressionList", value: [a[o]] };
          break;
        case 140:
        case 215:
          this.$ = a[o - 2], this.$.value.push(a[o]);
          break;
        case 147:
          this.$ = { type: "GroupBy", value: a[o - 1], rollUp: a[o] };
          break;
        case 150:
          this.$ = { type: "OrderBy", value: a[o - 1], rollUp: a[o] };
          break;
        case 151:
        case 197:
          this.$ = [a[o]];
          break;
        case 152:
          this.$ = a[o - 2], a[o - 2].push(a[o]);
          break;
        case 153:
          this.$ = { type: "GroupByOrderByItem", value: a[o - 1], sortOpt: a[o] };
          break;
        case 159:
          this.$ = { type: "Limit", value: [a[o]] };
          break;
        case 160:
          this.$ = { type: "Limit", value: [a[o - 2], a[o]] };
          break;
        case 161:
          this.$ = { type: "Limit", value: [a[o], a[o - 2]], offsetMode: !0 };
          break;
        case 168:
          this.$ = a[o - 1] + " " + a[o];
          break;
        case 169:
          this.$ = a[o - 3] + " " + a[o - 2] + " " + a[o - 1] + " " + a[o];
          break;
        case 170:
          this.$ = {};
          break;
        case 171:
          this.$ = { from: a[o - 8], partition: a[o - 7], where: a[o - 6], groupBy: a[o - 5], having: a[o - 4], orderBy: a[o - 3], limit: a[o - 2], procedure: a[o - 1], updateLockMode: a[o] };
          break;
        case 172:
          this.$ = { type: "TableReferences", value: [a[o]] };
          break;
        case 174:
          this.$ = { type: "TableReference", value: a[o] };
          break;
        case 175:
          this.$ = { type: "TableReference", hasOj: !0, value: a[o - 1] };
          break;
        case 183:
          this.$ = { leftRight: null, outOpt: null };
          break;
        case 184:
          this.$ = { leftRight: a[o - 1], outOpt: a[o] };
          break;
        case 185:
          this.$ = { type: "InnerCrossJoinTable", innerCrossOpt: a[o - 2], left: a[o - 3], right: a[o], condition: null };
          break;
        case 186:
          this.$ = { type: "InnerCrossJoinTable", innerCrossOpt: a[o - 3], left: a[o - 4], right: a[o - 1], condition: a[o] };
          break;
        case 187:
          this.$ = { type: "StraightJoinTable", left: a[o - 3], right: a[o - 1], condition: a[o] };
          break;
        case 188:
          this.$ = { type: "LeftRightJoinTable", leftRight: a[o - 4], outOpt: a[o - 3], left: a[o - 5], right: a[o - 1], condition: a[o] };
          break;
        case 189:
          this.$ = { type: "NaturalJoinTable", leftRight: a[o - 2].leftRight, outOpt: a[o - 2].outOpt, left: a[o - 4], right: a[o] };
          break;
        case 192:
          this.$ = { type: "OnJoinCondition", value: a[o] };
          break;
        case 194:
          this.$ = { type: "UsingJoinCondition", value: a[o - 1] };
          break;
        case 198:
          this.$ = a[o - 2], a[o - 2].push(a[o]);
          break;
        case 200:
          this.$ = { type: "Partitions", value: a[o - 1] };
          break;
        case 202:
          this.$ = { hasAs: !0, alias: a[o] };
          break;
        case 203:
          this.$ = { hasAs: !1, alias: a[o] };
          break;
        case 207:
        case 208:
        case 209:
          this.$ = { type: "ForOptIndexHint", value: a[o] };
          break;
        case 214:
          this.$ = { type: "IndexHintList", value: [a[o]] };
          break;
        case 216:
          this.$ = { type: "UseIndexHint", value: a[o - 1], forOpt: a[o - 3], indexOrKey: a[o - 4] };
          break;
        case 217:
          this.$ = { type: "IgnoreIndexHint", value: a[o - 1], forOpt: a[o - 3], indexOrKey: a[o - 4] };
          break;
        case 218:
          this.$ = { type: "ForceIndexHint", value: a[o - 1], forOpt: a[o - 3], indexOrKey: a[o - 4] };
          break;
        case 219:
          this.$ = { type: "TableFactor", value: a[o - 3], partition: a[o - 2], alias: a[o - 1].alias, hasAs: a[o - 1].hasAs, indexHintOpt: a[o] };
          break;
        case 220:
          this.$ = { type: "TableFactor", value: { type: "SubQuery", value: a[o - 2] }, alias: a[o].alias, hasAs: a[o].hasAs };
          break;
        case 221:
          this.$ = a[o - 1], this.$.hasParentheses = !0;
          break;
        case 222:
          this.$ = { type: "PlaceHolder", value: a[o], param: a[o].slice(2, -1) };
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 7: 3, 9: 5, 10: 6, 13: 7, 16: r, 18: n }, { 1: [3] }, { 5: 9, 6: u, 8: c, 14: N }, { 5: 12, 6: u, 8: c }, e([16, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], E, { 15: 13, 29: y, 30: w, 31: R }), e(v, [2, 5]), e([6, 8, 146], b, { 11: 17, 137: 18, 138: T }), { 14: p }, { 4: 21, 18: n }, { 6: [1, 22] }, { 15: 23, 18: E, 29: y, 30: w, 31: R }, { 6: [2, 3] }, { 6: [1, 24] }, e(I, [2, 18], { 19: 25, 32: [1, 26] }), e($, [2, 13]), e($, [2, 14]), e($, [2, 15]), e(v, D, { 12: 27, 145: 28, 146: G }), e(H, [2, 149]), { 16: x, 35: _, 47: 32, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 136: 30, 139: 31, 195: Z }, { 15: 68, 16: E, 29: y, 30: w, 31: R }, { 17: [1, 69] }, { 1: [2, 1] }, { 4: 70, 9: 71, 18: n }, { 1: [2, 2] }, e(tt, [2, 20], { 20: 72, 33: [1, 73] }), e(I, [2, 17]), e(v, [2, 6]), e(He, [2, 163]), { 35: [1, 74] }, e(H, pt, { 132: 75, 43: Ke, 133: Ye }), e(Be, [2, 151]), e(Be, [2, 154], { 140: 78, 109: Oe, 126: Ie, 127: ve, 141: [1, 82], 142: [1, 83] }), e(Le, [2, 133], { 113: 85, 34: [1, 86], 114: [1, 87], 115: [1, 88], 116: [1, 89], 117: [1, 90], 118: [1, 91], 119: [1, 92], 123: [1, 84] }), { 16: x, 35: _, 47: 93, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, e(Pe, [2, 127]), e(Pe, [2, 111], { 102: 94, 45: ke, 79: $e, 81: Se, 93: Ge, 94: Me, 95: Te, 96: Je, 97: De, 98: je, 99: be, 100: _e, 101: rt, 103: bt, 107: nt, 108: nt, 111: nt, 112: nt, 110: [1, 95] }), e(Ze, [2, 94]), e(pe, [2, 81]), e(pe, _t, { 50: Ue, 90: gt }), e(pe, [2, 83]), e(pe, [2, 84]), { 4: 112, 16: x, 18: n, 35: _, 47: 113, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 85: 111, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, { 16: [1, 114] }, { 16: [1, 115] }, { 49: 116, 52: i }, e(pe, [2, 90]), { 90: [1, 118] }, e(pe, [2, 52]), e(pe, [2, 53]), e(pe, [2, 54]), e(pe, [2, 55]), e(pe, [2, 56]), e([6, 8, 14, 17, 34, 36, 43, 45, 50, 51, 52, 53, 71, 72, 74, 77, 79, 81, 89, 90, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 105, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], t, { 16: s }), { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 120, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 121, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 122, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 123, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 124, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 195: Z }, { 16: x, 35: _, 47: 126, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 69: 125, 71: [2, 69], 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, e(pe, [2, 45]), e(pe, [2, 46]), e(pe, [2, 47]), e(pe, [2, 48]), e(pe, [2, 49]), e(pe, [2, 50]), e(pe, [2, 51]), e(pe, [2, 222]), { 10: 128, 13: 127, 16: r }, e([6, 8, 14, 138, 146], [2, 9]), e(v, [2, 10], { 14: N }), e(v, [2, 11]), e(l, [2, 22], { 21: 129, 36: [1, 130] }), { 34: [1, 131] }, e(He, [2, 159], { 43: [1, 132], 147: [1, 133] }), e(H, [2, 150]), { 16: x, 35: _, 47: 32, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 139: 134, 195: Z }, { 134: [1, 135] }, e(Be, [2, 153]), { 16: x, 35: _, 47: 136, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, { 16: x, 35: _, 47: 137, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, { 16: x, 35: _, 47: 138, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, e(Be, [2, 155]), e(Be, [2, 156]), e([59, 60, 62, 125], nt, { 102: 139, 103: bt }), { 16: x, 29: [1, 142], 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 106: 140, 120: 141, 121: [1, 143], 195: Z }, e(d, [2, 118]), e(d, [2, 119]), e(d, [2, 120]), e(d, [2, 121]), e(d, [2, 122]), e(d, [2, 123]), e(d, [2, 124]), e(Le, [2, 135]), { 107: [1, 144], 108: [1, 145], 111: [1, 146], 112: [1, 147] }, { 111: [1, 148] }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 149, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 150, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 151, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 152, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 153, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 154, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 155, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 156, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 157, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 158, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 159, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 160, 195: Z }, e([59, 60, 62, 107, 108, 111, 112, 125], [2, 108]), { 91: [1, 161] }, { 52: V }, { 17: [1, 163], 43: X }, { 17: [1, 165] }, e(W, [2, 139], { 109: Oe, 126: Ie, 127: ve }), { 16: x, 35: _, 47: 113, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 85: 166, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, { 4: 167, 18: n }, { 16: x, 35: _, 47: 168, 49: 39, 50: Ue, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, e(S, t), { 49: 169, 52: i }, e(W, m, { 122: 33, 106: 35, 92: 36, 80: 37, 63: 38, 65: 40, 78: 41, 75: 46, 54: 48, 55: 49, 58: 50, 61: 51, 64: 52, 66: 170, 67: 171, 46: 173, 47: 175, 49: 176, 16: x, 30: L, 35: _, 45: z, 52: f, 53: h, 56: P, 57: O, 59: C, 60: g, 62: A, 76: k, 79: U, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 103: de, 195: Z }), e(pe, [2, 76]), e(pe, [2, 77]), e(pe, [2, 78]), e(pe, [2, 79]), e(pe, [2, 80]), { 70: 177, 71: [1, 178] }, { 71: [2, 70], 109: Oe, 126: Ie, 127: ve }, e(ue, [2, 7], { 14: p }), e(ue, [2, 8]), e(q, [2, 24], { 22: 179, 37: [1, 180] }), e(l, [2, 21]), { 35: [1, 181] }, { 35: [1, 182] }, { 35: [1, 183] }, e(Be, [2, 152]), e(se, [2, 146]), e(oe, [2, 136], { 109: Oe }), e(Le, [2, 137]), e(oe, [2, 138], { 109: Oe }), { 58: 186, 59: C, 60: g, 62: [1, 185], 124: 184, 125: [1, 187] }, e(Pe, [2, 129]), { 16: [1, 188] }, { 16: [2, 125] }, { 16: [2, 126] }, { 16: [1, 189] }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 190, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 191, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 192, 195: Z }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 193, 195: Z }, e([6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 93, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], [2, 95], { 45: ke, 79: $e, 81: Se, 94: Me, 95: Te, 96: Je, 97: De, 98: je, 99: be, 100: _e, 101: rt }), e([6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 93, 94, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], [2, 96], { 45: ke, 79: $e, 81: Se, 95: Te, 96: Je, 97: De, 98: je, 99: be, 100: _e }), e(ie, [2, 97], { 45: ke, 79: $e, 81: Se, 97: De, 98: je, 99: be, 100: _e }), e(ie, [2, 98], { 45: ke, 79: $e, 81: Se, 97: De, 98: je, 99: be, 100: _e }), e(ce, [2, 99], { 45: ke, 97: De, 98: je, 99: be, 100: _e }), e(ce, [2, 100], { 45: ke, 97: De, 98: je, 99: be, 100: _e }), e(Ze, [2, 101]), e(Ze, [2, 102]), e(Ze, [2, 103]), e(Ze, [2, 104]), e(Ze, [2, 105]), e([6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 93, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], [2, 106], { 45: ke, 79: $e, 81: Se, 94: Me, 95: Te, 96: Je, 97: De, 98: je, 99: be, 100: _e }), e(pe, [2, 91]), e(S, [2, 66]), e(pe, [2, 85]), { 16: x, 35: _, 47: 194, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, e(pe, [2, 87]), { 17: [1, 195], 43: X }, { 17: [1, 196] }, { 89: [1, 197], 109: Oe, 126: Ie, 127: ve }, e(pe, [2, 92], { 50: Ue, 90: [1, 198] }), { 17: [1, 199], 43: [1, 200] }, e(W, [2, 59]), e(W, [2, 61]), e(W, [2, 62]), { 16: x, 35: _, 47: 201, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, e(W, [2, 64], { 109: Oe, 126: Ie, 127: ve }), e([6, 8, 14, 17, 34, 43, 45, 51, 52, 53, 79, 81, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 157], _t, { 50: [1, 202], 90: gt }), { 71: [1, 204], 73: 203, 74: [1, 205], 77: [2, 73] }, { 16: x, 35: _, 47: 206, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, e(K, [2, 26], { 23: 207, 38: [1, 208] }), e(q, [2, 23]), e(tt, [2, 19]), e(He, [2, 160]), e(He, [2, 161]), e(Le, [2, 134]), e(Pe, [2, 128]), e(Le, [2, 131]), e(Le, [2, 132]), { 4: 209, 18: n }, { 4: 210, 16: x, 18: n, 35: _, 47: 113, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 85: 211, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, { 45: ke, 79: $e, 81: Se, 93: Ge, 94: Me, 95: Te, 96: Je, 97: De, 98: je, 99: be, 100: _e, 101: rt, 109: [1, 212] }, e(Pe, [2, 109], { 104: 213, 105: [1, 214] }), e(Pe, [2, 117], { 45: ke, 79: $e, 81: Se, 93: Ge, 94: Me, 95: Te, 96: Je, 97: De, 98: je, 99: be, 100: _e, 101: rt }), e(Pe, [2, 115], { 45: ke, 79: $e, 81: Se, 93: Ge, 94: Me, 95: Te, 96: Je, 97: De, 98: je, 99: be, 100: _e, 101: rt }), e(W, [2, 140], { 109: Oe, 126: Ie, 127: ve }), e(pe, [2, 86]), e(pe, [2, 88]), e(pe, [2, 89]), { 91: [1, 215] }, e(pe, [2, 57]), e(W, m, { 122: 33, 106: 35, 92: 36, 80: 37, 63: 38, 65: 40, 78: 41, 75: 46, 54: 48, 55: 49, 58: 50, 61: 51, 64: 52, 46: 173, 47: 175, 49: 176, 67: 216, 16: x, 30: L, 35: _, 45: z, 52: f, 53: h, 56: P, 57: O, 59: C, 60: g, 62: A, 76: k, 79: U, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 103: de, 195: Z }), e(W, [2, 63], { 109: Oe, 126: Ie, 127: ve }), { 45: [1, 217], 52: V }, { 77: [1, 218] }, { 16: x, 35: _, 47: 219, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, { 16: x, 35: _, 47: 220, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, { 72: [1, 221], 109: Oe, 126: Ie, 127: ve }, e(ne, [2, 28], { 24: 222, 39: [1, 223] }), e(K, [2, 25]), { 17: [1, 224] }, { 17: [1, 225] }, { 17: [1, 226], 43: X }, { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 106: 227, 195: Z }, e(Pe, [2, 116]), { 16: x, 35: _, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 228, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 195: Z }, e(pe, [2, 93]), e(W, [2, 58]), e(re, [2, 39]), e(pe, [2, 75]), { 72: [1, 229], 109: Oe, 126: Ie, 127: ve }, { 77: [2, 74], 109: Oe, 126: Ie, 127: ve }, { 16: x, 35: _, 47: 230, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, e(le, [2, 29], { 25: 231, 40: [1, 232], 41: [1, 233] }), e(ne, [2, 27]), e(Pe, [2, 130]), e(Pe, [2, 112]), e(Pe, [2, 113]), e(Pe, [2, 114]), e(Pe, [2, 110]), { 16: x, 35: _, 47: 234, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, e(Ee, [2, 71], { 109: Oe, 126: Ie, 127: ve }), e(qe, [2, 33], { 26: 235, 42: [1, 236] }), e(le, [2, 30]), e(le, [2, 31]), e(Ee, [2, 72], { 109: Oe, 126: Ie, 127: ve }), { 16: x, 27: 237, 35: _, 44: 238, 45: Ce, 46: 240, 47: 241, 49: 176, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, e(qe, [2, 32]), e(vt, [2, 170], { 28: 242, 43: [1, 243], 157: [1, 244] }), e(re, [2, 35]), e(re, [2, 36]), e(re, [2, 37]), e(re, [2, 40], { 48: 245, 51: [1, 246], 52: [1, 247], 53: [1, 248], 109: Oe, 126: Ie, 127: ve }), e(vt, [2, 12]), { 16: x, 35: _, 44: 249, 45: Ce, 46: 240, 47: 241, 49: 176, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, { 16: ct, 49: 256, 52: i, 88: rr, 158: 250, 160: 251, 161: 252, 172: 255, 174: 254 }, e(re, [2, 38]), { 52: [1, 258], 53: [1, 259] }, e(re, [2, 42]), e(re, [2, 44]), e(re, [2, 34]), e([6, 8, 14, 17, 129, 135, 138, 144, 146, 150, 152, 154], Dr, { 159: 260, 43: Wr, 182: Fr }), e(Tt, [2, 172]), e(Tt, [2, 174], { 163: 263, 166: 265, 36: nr, 164: sr, 165: ir, 167: Dt, 168: Wt, 173: ar, 177: or }), { 162: [1, 271] }, e(we, [2, 195]), e(we, [2, 196]), e([6, 8, 14, 17, 36, 43, 51, 52, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 179, 180, 192, 193, 194], Dr, { 159: 272, 50: Ue, 182: Fr }), { 4: 273, 16: ct, 18: n, 49: 256, 52: i, 88: rr, 158: 274, 160: 251, 161: 252, 172: 255, 174: 254 }, e(re, [2, 41]), e(re, [2, 43]), e(Mr, [2, 141], { 128: 275, 129: [1, 276] }), { 16: ct, 49: 256, 52: i, 88: rr, 160: 277, 161: 252, 172: 255, 174: 254 }, { 16: [1, 278] }, { 173: [1, 279] }, { 16: ct, 49: 256, 52: i, 174: 280 }, { 169: 281, 170: jr, 173: Br }, { 166: 284, 167: Dt, 168: Wt, 171: 283, 173: [2, 183] }, { 173: [2, 177] }, { 173: [2, 178] }, e(Ur, [2, 179]), e(Ur, [2, 180]), { 16: ct, 49: 256, 52: i, 161: 285, 172: 255, 174: 254 }, e(cr, zr, { 183: 286, 49: 288, 51: Xr, 52: i }), { 17: [1, 289] }, { 17: [1, 290], 43: Wr }, e(se, [2, 143], { 130: 291, 131: 292, 135: [1, 293] }), { 16: x, 35: _, 47: 294, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, e(Tt, [2, 173]), { 49: 296, 52: i, 181: 295 }, { 16: ct, 49: 256, 52: i, 174: 297 }, { 176: 298, 179: ur }, { 173: [1, 300] }, { 173: [2, 182] }, { 173: [1, 301] }, { 169: 302, 170: jr, 173: Br }, { 36: nr, 89: [1, 303], 163: 263, 164: sr, 165: ir, 166: 265, 167: Dt, 168: Wt, 173: ar, 177: or }, e(we, [2, 212], { 189: 304, 190: 305, 191: 306, 192: Jr, 193: qr, 194: Qr }), { 49: 310, 52: i }, e(cr, [2, 203], { 50: Ue }), e(we, zr, { 49: 288, 183: 311, 51: Xr, 52: i }), e(we, [2, 221]), e(Gr, [2, 157], { 143: 312, 144: [1, 313] }), e(se, [2, 144]), { 16: x, 35: _, 47: 32, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 136: 314, 139: 31, 195: Z }, e(Mr, [2, 142], { 109: Oe, 126: Ie, 127: ve }), { 17: [1, 315], 43: [1, 316] }, e(W, [2, 197], { 50: Ue }), e([6, 8, 14, 17, 36, 43, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 182], [2, 185], { 175: 317, 176: 318, 179: ur, 180: Hr }), e(we, [2, 187]), { 16: x, 35: _, 47: 320, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, { 16: ct, 49: 256, 52: i, 161: 321, 172: 255, 174: 254 }, { 16: ct, 49: 256, 52: i, 174: 322 }, { 173: [2, 184] }, e(Tt, [2, 175]), e(we, [2, 219]), e(we, [2, 213]), e(we, [2, 214]), { 184: 324, 185: lr, 186: fr }, { 184: 327, 185: lr, 186: fr }, { 184: 328, 185: lr, 186: fr }, e(cr, [2, 202], { 50: Ue }), e(we, [2, 220]), e(H, b, { 137: 18, 11: 329, 138: T }), { 16: x, 35: _, 47: 330, 49: 39, 52: f, 53: h, 54: 48, 55: 49, 56: P, 57: O, 58: 50, 59: C, 60: g, 61: 51, 62: A, 63: 38, 64: 52, 65: 40, 75: 46, 76: k, 78: 41, 79: U, 80: 37, 81: F, 82: j, 83: M, 84: B, 86: J, 87: Q, 88: Y, 91: te, 92: 36, 103: de, 106: 35, 122: 33, 195: Z }, e(se, pt, { 132: 331, 43: Ke, 133: Ye }), e([6, 8, 14, 17, 36, 43, 51, 52, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 179, 180, 182, 192, 193, 194], [2, 200]), { 49: 332, 52: i }, e(we, [2, 186]), e(we, [2, 193]), { 16: [1, 333] }, e(we, [2, 192], { 109: Oe, 126: Ie, 127: ve }), { 36: nr, 163: 263, 164: sr, 165: ir, 166: 265, 167: Dt, 168: Wt, 173: ar, 175: 334, 176: 318, 177: or, 179: ur, 180: Hr }, e(we, [2, 189]), { 191: 335, 192: Jr, 193: qr, 194: Qr }, { 16: pr, 152: hr, 187: 336 }, e(Kr, [2, 204]), e(Kr, [2, 205]), { 16: pr, 152: hr, 187: 338 }, { 16: pr, 152: hr, 187: 339 }, e(He, D, { 145: 28, 12: 340, 146: G }), e(Gr, [2, 158], { 109: Oe, 126: Ie, 127: ve }), e(se, [2, 147]), e(W, [2, 198], { 50: Ue }), { 49: 342, 52: i, 68: 341 }, e(we, [2, 188]), e(we, [2, 215]), { 16: [1, 343] }, { 135: [1, 346], 138: [1, 345], 173: [1, 344] }, { 16: [1, 347] }, { 16: [1, 348] }, e(dr, [2, 164], { 148: 349, 149: 350, 150: [1, 351] }), { 17: [1, 352], 43: Ft }, e(W, [2, 67], { 50: Ue }), { 17: [2, 210], 49: 342, 52: i, 68: 355, 188: 354 }, { 16: [2, 207] }, { 16: [2, 208] }, { 16: [2, 209] }, { 49: 342, 52: i, 68: 356 }, { 49: 342, 52: i, 68: 357 }, e(vt, [2, 167], { 151: 358, 152: [1, 359], 154: [1, 360] }), e(dr, [2, 165]), { 52: [1, 362], 65: 361 }, e(we, [2, 194]), { 49: 363, 52: i }, { 17: [1, 364] }, { 17: [2, 211], 43: Ft }, { 17: [1, 365], 43: Ft }, { 17: [1, 366], 43: Ft }, e(vt, [2, 171]), { 153: [1, 367] }, { 107: [1, 368] }, e(dr, [2, 166]), { 16: s }, e(W, [2, 68], { 50: Ue }), e(we, [2, 216]), e(we, [2, 217]), e(we, [2, 218]), e(vt, [2, 168]), { 155: [1, 369] }, { 156: [1, 370] }, e(vt, [2, 169])],
    defaultActions: { 11: [2, 3], 22: [2, 1], 24: [2, 2], 142: [2, 125], 143: [2, 126], 267: [2, 177], 268: [2, 178], 282: [2, 182], 302: [2, 184], 344: [2, 207], 345: [2, 208], 346: [2, 209] },
    parseError: function(ee, ae) {
      if (ae.recoverable)
        this.trace(ee);
      else {
        var fe = new Error(ee);
        throw fe.hash = ae, fe;
      }
    },
    parse: function(ee) {
      var ae = this, fe = [0], Ne = [null], he = [], a = this.table, br = "", o = 0, Yr = 0, ns = 2, Zr = 1, ss = he.slice.call(arguments, 1), xe = Object.create(this.lexer), ht = { yy: {} };
      for (var _r in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, _r) && (ht.yy[_r] = this.yy[_r]);
      xe.setInput(ee, ht.yy), ht.yy.lexer = xe, ht.yy.parser = this, typeof xe.yylloc > "u" && (xe.yylloc = {});
      var gr = xe.yylloc;
      he.push(gr);
      var is = xe.options && xe.options.ranges;
      typeof ht.yy.parseError == "function" ? this.parseError = ht.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      for (var as = function() {
        var Ot;
        return Ot = xe.lex() || Zr, typeof Ot != "number" && (Ot = ae.symbols_[Ot] || Ot), Ot;
      }, ze, dt, Qe, vr, Nt = {}, Mt, st, en, jt; ; ) {
        if (dt = fe[fe.length - 1], this.defaultActions[dt] ? Qe = this.defaultActions[dt] : ((ze === null || typeof ze > "u") && (ze = as()), Qe = a[dt] && a[dt][ze]), typeof Qe > "u" || !Qe.length || !Qe[0]) {
          var Nr = "";
          jt = [];
          for (Mt in a[dt])
            this.terminals_[Mt] && Mt > ns && jt.push("'" + this.terminals_[Mt] + "'");
          xe.showPosition ? Nr = "Parse error on line " + (o + 1) + `:
` + xe.showPosition() + `
Expecting ` + jt.join(", ") + ", got '" + (this.terminals_[ze] || ze) + "'" : Nr = "Parse error on line " + (o + 1) + ": Unexpected " + (ze == Zr ? "end of input" : "'" + (this.terminals_[ze] || ze) + "'"), this.parseError(Nr, {
            text: xe.match,
            token: this.terminals_[ze] || ze,
            line: xe.yylineno,
            loc: gr,
            expected: jt
          });
        }
        if (Qe[0] instanceof Array && Qe.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + dt + ", token: " + ze);
        switch (Qe[0]) {
          case 1:
            fe.push(ze), Ne.push(xe.yytext), he.push(xe.yylloc), fe.push(Qe[1]), ze = null, Yr = xe.yyleng, br = xe.yytext, o = xe.yylineno, gr = xe.yylloc;
            break;
          case 2:
            if (st = this.productions_[Qe[1]][1], Nt.$ = Ne[Ne.length - st], Nt._$ = {
              first_line: he[he.length - (st || 1)].first_line,
              last_line: he[he.length - 1].last_line,
              first_column: he[he.length - (st || 1)].first_column,
              last_column: he[he.length - 1].last_column
            }, is && (Nt._$.range = [
              he[he.length - (st || 1)].range[0],
              he[he.length - 1].range[1]
            ]), vr = this.performAction.apply(Nt, [
              br,
              Yr,
              o,
              ht.yy,
              Qe[1],
              Ne,
              he
            ].concat(ss)), typeof vr < "u")
              return vr;
            st && (fe = fe.slice(0, -1 * st * 2), Ne = Ne.slice(0, -1 * st), he = he.slice(0, -1 * st)), fe.push(this.productions_[Qe[1]][0]), Ne.push(Nt.$), he.push(Nt._$), en = a[fe[fe.length - 2]][fe[fe.length - 1]], fe.push(en);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, rs = /* @__PURE__ */ function() {
    var ut = {
      EOF: 1,
      parseError: function(ae, fe) {
        if (this.yy.parser)
          this.yy.parser.parseError(ae, fe);
        else
          throw new Error(ae);
      },
      // resets the lexer, sets new input
      setInput: function(ee, ae) {
        return this.yy = ae || this.yy || {}, this._input = ee, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var ee = this._input[0];
        this.yytext += ee, this.yyleng++, this.offset++, this.match += ee, this.matched += ee;
        var ae = ee.match(/(?:\r\n?|\n).*/g);
        return ae ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), ee;
      },
      // unshifts one char (or a string) into the input
      unput: function(ee) {
        var ae = ee.length, fe = ee.split(/(?:\r\n?|\n)/g);
        this._input = ee + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - ae), this.offset -= ae;
        var Ne = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), fe.length - 1 && (this.yylineno -= fe.length - 1);
        var he = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: fe ? (fe.length === Ne.length ? this.yylloc.first_column : 0) + Ne[Ne.length - fe.length].length - fe[0].length : this.yylloc.first_column - ae
        }, this.options.ranges && (this.yylloc.range = [he[0], he[0] + this.yyleng - ae]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = !0, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(ee) {
        this.unput(this.match.slice(ee));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var ee = this.matched.substr(0, this.matched.length - this.match.length);
        return (ee.length > 20 ? "..." : "") + ee.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var ee = this.match;
        return ee.length < 20 && (ee += this._input.substr(0, 20 - ee.length)), (ee.substr(0, 20) + (ee.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var ee = this.pastInput(), ae = new Array(ee.length + 1).join("-");
        return ee + this.upcomingInput() + `
` + ae + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(ee, ae) {
        var fe, Ne, he;
        if (this.options.backtrack_lexer && (he = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (he.yylloc.range = this.yylloc.range.slice(0))), Ne = ee[0].match(/(?:\r\n?|\n).*/g), Ne && (this.yylineno += Ne.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: Ne ? Ne[Ne.length - 1].length - Ne[Ne.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + ee[0].length
        }, this.yytext += ee[0], this.match += ee[0], this.matches = ee, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(ee[0].length), this.matched += ee[0], fe = this.performAction.call(this, this.yy, this, ae, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), fe)
          return fe;
        if (this._backtrack) {
          for (var a in he)
            this[a] = he[a];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var ee, ae, fe, Ne;
        this._more || (this.yytext = "", this.match = "");
        for (var he = this._currentRules(), a = 0; a < he.length; a++)
          if (fe = this._input.match(this.rules[he[a]]), fe && (!ae || fe[0].length > ae[0].length)) {
            if (ae = fe, Ne = a, this.options.backtrack_lexer) {
              if (ee = this.test_match(fe, he[a]), ee !== !1)
                return ee;
              if (this._backtrack) {
                ae = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return ae ? (ee = this.test_match(ae, he[Ne]), ee !== !1 ? ee : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var ae = this.next();
        return ae || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(ae) {
        this.conditionStack.push(ae);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var ae = this.conditionStack.length - 1;
        return ae > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(ae) {
        return ae = this.conditionStack.length - 1 - Math.abs(ae || 0), ae >= 0 ? this.conditionStack[ae] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(ae) {
        this.begin(ae);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(ae, fe, Ne, he) {
        switch (Ne) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            return 195;
          case 5:
            return 52;
          case 6:
            return 52;
          case 7:
            return 52;
          case 8:
            return 18;
          case 9:
            return 29;
          case 10:
            return 121;
          case 11:
            return 30;
          case 12:
            return 31;
          case 13:
            return 32;
          case 14:
            return 33;
          case 15:
            return 36;
          case 16:
            return 37;
          case 17:
            return 38;
          case 18:
            return 39;
          case 19:
            return 40;
          case 20:
            return 41;
          case 21:
            return 42;
          case 22:
            return 51;
          case 23:
            return 59;
          case 24:
            return 60;
          case 25:
            return 62;
          case 26:
            return "COLLATE";
          case 27:
            return 84;
          case 28:
            return 86;
          case 29:
            return 87;
          case 30:
            return 76;
          case 31:
            return 71;
          case 32:
            return 72;
          case 33:
            return 74;
          case 34:
            return 77;
          case 35:
            return 98;
          case 36:
            return 99;
          case 37:
            return 103;
          case 38:
            return 108;
          case 39:
            return 107;
          case 40:
            return 110;
          case 41:
            return 111;
          case 42:
            return 105;
          case 43:
            return 112;
          case 44:
            return 123;
          case 45:
            return 125;
          case 46:
            return 109;
          case 47:
            return 126;
          case 48:
            return 127;
          case 49:
            return 157;
          case 50:
            return 182;
          case 51:
            return 192;
          case 52:
            return 185;
          case 53:
            return 186;
          case 54:
            return 152;
          case 55:
            return 173;
          case 56:
            return 138;
          case 57:
            return 135;
          case 58:
            return 193;
          case 59:
            return 194;
          case 60:
            return 164;
          case 61:
            return 165;
          case 62:
            return 179;
          case 63:
            return 180;
          case 64:
            return 167;
          case 65:
            return 168;
          case 66:
            return 170;
          case 67:
            return 177;
          case 68:
            return 129;
          case 69:
            return 141;
          case 70:
            return 142;
          case 71:
            return 133;
          case 72:
            return 134;
          case 73:
            return 144;
          case 74:
            return 147;
          case 75:
            return 150;
          case 76:
            return 153;
          case 77:
            return 154;
          case 78:
            return 155;
          case 79:
            return 156;
          case 80:
            return 162;
          case 81:
            return 146;
          case 82:
            return 14;
          case 83:
            return 43;
          case 84:
            return 34;
          case 85:
            return 16;
          case 86:
            return 17;
          case 87:
            return 82;
          case 88:
            return 119;
          case 89:
            return 83;
          case 90:
            return 90;
          case 91:
            return 93;
          case 92:
            return 94;
          case 93:
            return 79;
          case 94:
            return 81;
          case 95:
            return 45;
          case 96:
            return 97;
          case 97:
            return 100;
          case 98:
            return 101;
          case 99:
            return 96;
          case 100:
            return 114;
          case 101:
            return 115;
          case 102:
            return 95;
          case 103:
            return "<=>";
          case 104:
            return 116;
          case 105:
            return 118;
          case 106:
            return 117;
          case 107:
            return 88;
          case 108:
            return 89;
          case 109:
            return 8;
          case 110:
            return 91;
          case 111:
            return 53;
          case 112:
            return 57;
          case 113:
            return 35;
          case 114:
            return 56;
          case 115:
            return 52;
          case 116:
            return 50;
          case 117:
            return 52;
          case 118:
            return 6;
          case 119:
            return "INVALID";
        }
      },
      rules: [/^(?:[/][*](.|\n)*?[*][/])/i, /^(?:[-][-]\s.*\n)/i, /^(?:[#]\s.*\n)/i, /^(?:\s+)/i, /^(?:[$][{](.*?)[}])/i, /^(?:([`][^`]+[`])+)/i, /^(?:(["][^"]+["])+)/i, /^(?:[\[]([^\]]|\]\])+[\]])/i, /^(?:SELECT\b)/i, /^(?:ALL\b)/i, /^(?:ANY\b)/i, /^(?:DISTINCT\b)/i, /^(?:DISTINCTROW\b)/i, /^(?:HIGH_PRIORITY\b)/i, /^(?:MAX_STATEMENT_TIME\b)/i, /^(?:STRAIGHT_JOIN\b)/i, /^(?:SQL_SMALL_RESULT\b)/i, /^(?:SQL_BIG_RESULT\b)/i, /^(?:SQL_BUFFER_RESULT\b)/i, /^(?:SQL_CACHE\b)/i, /^(?:SQL_NO_CACHE\b)/i, /^(?:SQL_CALC_FOUND_ROWS\b)/i, /^(?:AS\b)/i, /^(?:TRUE\b)/i, /^(?:FALSE\b)/i, /^(?:NULL\b)/i, /^(?:COLLATE\b)/i, /^(?:BINARY\b)/i, /^(?:ROW\b)/i, /^(?:EXISTS\b)/i, /^(?:CASE\b)/i, /^(?:WHEN\b)/i, /^(?:THEN\b)/i, /^(?:ELSE\b)/i, /^(?:END\b)/i, /^(?:DIV\b)/i, /^(?:MOD\b)/i, /^(?:NOT\b)/i, /^(?:BETWEEN\b)/i, /^(?:IN\b)/i, /^(?:SOUNDS\b)/i, /^(?:LIKE\b)/i, /^(?:ESCAPE\b)/i, /^(?:REGEXP\b)/i, /^(?:IS\b)/i, /^(?:UNKNOWN\b)/i, /^(?:AND\b)/i, /^(?:OR\b)/i, /^(?:XOR\b)/i, /^(?:FROM\b)/i, /^(?:PARTITION\b)/i, /^(?:USE\b)/i, /^(?:INDEX\b)/i, /^(?:KEY\b)/i, /^(?:FOR\b)/i, /^(?:JOIN\b)/i, /^(?:ORDER\s+BY\b)/i, /^(?:GROUP\s+BY\b)/i, /^(?:IGNORE\b)/i, /^(?:FORCE\b)/i, /^(?:INNER\b)/i, /^(?:CROSS\b)/i, /^(?:ON\b)/i, /^(?:USING\b)/i, /^(?:LEFT\b)/i, /^(?:RIGHT\b)/i, /^(?:OUTER\b)/i, /^(?:NATURAL\b)/i, /^(?:WHERE\b)/i, /^(?:ASC\b)/i, /^(?:DESC\b)/i, /^(?:WITH\b)/i, /^(?:ROLLUP\b)/i, /^(?:HAVING\b)/i, /^(?:OFFSET\b)/i, /^(?:PROCEDURE\b)/i, /^(?:UPDATE\b)/i, /^(?:LOCK\b)/i, /^(?:SHARE\b)/i, /^(?:MODE\b)/i, /^(?:OJ\b)/i, /^(?:LIMIT\b)/i, /^(?:UNION\b)/i, /^(?:,)/i, /^(?:=)/i, /^(?:\()/i, /^(?:\))/i, /^(?:~)/i, /^(?:!=)/i, /^(?:!)/i, /^(?:\|\|)/i, /^(?:\|)/i, /^(?:&)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:\*)/i, /^(?:\/)/i, /^(?:%)/i, /^(?:\^)/i, /^(?:>>)/i, /^(?:>=)/i, /^(?:>)/i, /^(?:<<)/i, /^(?:<=>)/i, /^(?:<=)/i, /^(?:<>)/i, /^(?:<)/i, /^(?:\{)/i, /^(?:\})/i, /^(?:;)/i, /^(?:['](%)+['])/i, /^(?:(['][^']*['])+)/i, /^(?:[0][x][0-9a-fA-F]+)/i, /^(?:[-]?[0-9]+(\.[0-9]+)?)/i, /^(?:[-]?[0-9]+(\.[0-9]+)?[eE][-+]?[0-9]+(\.[0-9]+)?)/i, /^(?:[a-zA-Z_@#\uff3f\u4e00-\u9fa5][a-zA-Z0-9_$@#\uff3f\u4e00-\u9fa5]*)/i, /^(?:\.)/i, /^(?:([`])(?:(?=(\\?))\2.)*?\1)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119], inclusive: !0 } }
    };
    return ut;
  }();
  yr.lexer = rs;
  function mr() {
    this.yy = {};
  }
  return mr.prototype = yr, yr.Parser = mr, new mr();
}(), F1 = kt, Wn = (e, r = {}) => {
  if (!r.parseNumbers || typeof e == "bigint" || typeof e == "number")
    return e;
  if (r.parseNumbers === "native")
    return parseFloat(e);
  const n = (
    // TODO: Should these options be configurable?
    (0, F1.numericQuantity)(e, {
      allowTrailingInvalid: r.parseNumbers === "enhanced",
      romanNumerals: !0,
      round: !1
    })
  );
  return isNaN(n) ? e : n;
}, M1 = (e) => (e == null ? void 0 : e.type) === "String" || (e == null ? void 0 : e.type) === "Number" || (e == null ? void 0 : e.type) === "Boolean", es = (e) => (e == null ? void 0 : e.type) === "Prefix" && (e.prefix === "+" || e.prefix === "-") && e.value.type === "Number", Gt = (e) => M1(e) || es(e), Ae = (e) => (e == null ? void 0 : e.type) === "Identifier", Fn = (e) => {
  switch (typeof e) {
    case "number":
      return `${e}`;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    default:
      return `'${e}'`;
  }
}, Fe = (e) => {
  const r = typeof e == "string" ? e : e.value;
  return r.startsWith("`") && r.endsWith("`") ? r.replaceAll(/(^`|`$)/g, "").replaceAll("``", "`") : r.startsWith('"') && r.endsWith('"') ? r.replaceAll(/(^"|"$)/g, "").replaceAll('""', '"') : r.startsWith("[") && r.endsWith("]") ? r.replaceAll(/(^\[|\]$)/g, "").replaceAll("]]", "]") : r;
}, j1 = (e) => e.replace("&&", "and").replace("||", "or").toLowerCase(), Mn = (e, r) => {
  if (r) {
    if (e === "<") return ">";
    if (e === "<=") return ">=";
    if (e === ">") return "<";
    if (e === ">=") return "<=";
  }
  return e === "<>" ? "!=" : e;
}, Ht = (e) => {
  if (e.type === "String") {
    const r = e.value;
    return r.startsWith("'") && r.endsWith("'") || r.startsWith('"') && r.endsWith('"') ? r.substring(1, r.length - 1).replaceAll(/''/gm, "'") : r;
  } else {
    if (e.type === "Boolean")
      return e.value.toLowerCase() === "true";
    if (es(e))
      return Wn(`${e.prefix}${e.value.value}`, { parseNumbers: !0 });
  }
  return Wn(e.value, { parseNumbers: !0 });
}, Tr = (e) => {
  const r = j1(e.operator);
  return e.left.type === "AndExpression" || e.left.type === "OrExpression" || e.left.type === "XorExpression" ? [...Tr(e.left), r, e.right] : [e.left, r, e.right];
}, B1 = (e) => {
  const r = Tr(e);
  let n = 0;
  const u = { combinator: "or", expressions: [] };
  let c = { combinator: "xor", expressions: [] }, N = { combinator: "and", expressions: [] };
  for (let y = 0; y < r.length - 2; y += 2) {
    let w = 0;
    if (r[y + 1] === "and" ? w = 2 - n : r[y + 1] === "xor" ? w = 1 - n : r[y + 1] === "or" && (w = 0 - n), w > 0)
      for (let R = 0; R < w; R++)
        n += 1, n === 1 ? (c = { combinator: "xor", expressions: [] }, w === 1 && (c.expressions.push(r[y]), (y >= r.length - 3 || r[y + 3] === "xor") && c.expressions.push(r[y + 2]))) : n === 2 && (N = { combinator: "and", expressions: [] }, N.expressions.push(r[y], r[y + 2]));
    else if (w < 0)
      for (let R = 0; R > w; R--)
        n -= 1, n === 1 ? (c.expressions.push(N), w === -1 && c.expressions.push(r[y + 2])) : n === 0 && (u.expressions.push(c), y >= r.length - 3 && u.expressions.push(r[y + 2]));
    else
      n === 0 ? ((y === 0 || y > 3 && r[y - 3] !== "or") && u.expressions.push(r[y]), (y >= r.length - 3 || r[y + 3] === "or") && u.expressions.push(r[y + 2])) : n === 1 ? c.expressions.push(r[y + 2]) : n === 2 && N.expressions.push(r[y + 2]);
  }
  if (n === 2 && (c.expressions.push(N), n -= 1), n === 1 && (u.expressions.push(c), n -= 1), u.expressions.length === 1 && "combinator" in u.expressions[0])
    return u.expressions[0].expressions.length === 1 && "combinator" in u.expressions[0].expressions[0] ? u.expressions[0].expressions[0] : u.expressions[0];
  const E = { combinator: "or", expressions: [] };
  for (const y of u.expressions)
    "combinator" in y && "combinator" in y.expressions[0] && y.expressions.length === 1 ? E.expressions.push(y.expressions[0]) : E.expressions.push(y);
  return E;
};
function U1(e, r = {}) {
  const { params: n, paramPrefix: u, independentCombinators: c, fields: N, getValueSources: E } = r;
  let y = /^[ \t\n\r\s]*SELECT\b/i.test(e) ? e : /^[ \t\n\r\s]*WHERE\b/i.test(e) ? `SELECT * FROM t ${e}` : `SELECT * FROM t WHERE ${e}`, w = !1;
  const R = T1(N);
  if (w = !!c, n)
    if (Array.isArray(n)) {
      let p = 0;
      y = y.replace(/\?/g, () => {
        const I = Fn(n[p]);
        return p++, I;
      });
    } else {
      const p = Object.keys(n), I = u ?? ":";
      p.forEach(($) => {
        y = y.replace(
          new RegExp(`\\${I}${$}\\b`, "ig"),
          Fn(n[$])
        );
      });
    }
  const v = (p, I, $) => D1({
    fieldName: p,
    fieldsFlat: R,
    operator: I,
    subordinateFieldName: $,
    getValueSources: E
  }), b = (p) => {
    if (p.type === "NotExpression") {
      const I = p.value.type === "SimpleExprParentheses" ? p.value.value.value[0] : p.value, $ = b(I);
      if ($)
        return xn($) ? { ...$, not: !0 } : {
          rules: [$],
          not: !0,
          ...!w && { combinator: "and" }
        };
    } else if (p.type === "SimpleExprParentheses") {
      const I = p.value.value[0];
      if (I.type === "AndExpression" || I.type === "OrExpression" || I.type === "XorExpression")
        return b(I);
      const $ = b(I);
      return $ ? { rules: [$], ...w ? {} : { combinator: "and" } } : null;
    } else if (p.type === "AndExpression" || p.type === "OrExpression" || p.type === "XorExpression") {
      if (w) {
        const H = Tr(p).map((x) => typeof x == "string" ? x : b(x));
        return H.includes(null) ? null : {
          rules: H
        };
      }
      const I = B1(p), { combinator: $ } = I, D = I.expressions.map((G) => "combinator" in G ? {
        combinator: G.combinator,
        rules: G.expressions.map((H) => "combinator" in H ? {
          combinator: H.combinator,
          rules: H.expressions.map((x) => b(x)).filter(Boolean)
        } : b(H)).filter(Boolean)
      } : b(G)).filter(Boolean);
      if (D.length > 0)
        return { combinator: $, rules: D };
    } else if (p.type === "IsNullBooleanPrimary") {
      if (Ae(p.value)) {
        const I = Fe(p.value), $ = p.hasNot ? "notNull" : "null";
        if (v(I, $))
          return {
            field: I,
            operator: $,
            value: null
          };
      }
    } else if (p.type === "ComparisonBooleanPrimary") {
      if (Ae(p.left) && !Ae(p.right) || !Ae(p.left) && Ae(p.right)) {
        const I = Ae(p.left) ? p.left.value : p.right.value, $ = [p.left, p.right].find((D) => !Ae(D));
        if (Gt($)) {
          const D = Fe(I), G = Mn(p.operator, Ae(p.right));
          if (v(D, G))
            return {
              field: D,
              operator: G,
              value: Ht($)
            };
        }
      } else if (Ae(p.left) && Ae(p.right)) {
        const I = Fe(p.left), $ = Fe(p.right), D = Mn(p.operator);
        if (v(I, D, $))
          return {
            field: I,
            operator: D,
            value: $,
            valueSource: "field"
          };
      }
    } else if (p.type === "InExpressionListPredicate") {
      if (Ae(p.left)) {
        const I = Fe(p.left), $ = p.right.value.filter(Gt).map(Ht), D = p.hasNot ? "notIn" : "in", G = p.right.value.filter(Ae).filter((H) => v(I, D, H.value)).map(Fe);
        if ($.length > 0) {
          const H = r != null && r.listsAsArrays ? $ : Qt($, ", ");
          return { field: Fe(p.left), operator: D, value: H };
        } else if (G.length > 0) {
          const H = r != null && r.listsAsArrays ? G : Qt(G, ", ");
          return {
            field: Fe(p.left),
            operator: D,
            value: H,
            valueSource: "field"
          };
        }
      }
    } else if (p.type === "BetweenPredicate") {
      if (Ae(p.left) && Gt(p.right.left) && Gt(p.right.right)) {
        const I = [p.right.left, p.right.right].map(Ht), $ = r != null && r.listsAsArrays ? I : Qt(I, ", "), D = p.hasNot ? "notBetween" : "between";
        return { field: Fe(p.left), operator: D, value: $ };
      } else if (Ae(p.left) && Ae(p.right.left) && Ae(p.right.right)) {
        const I = Fe(p.left), $ = [p.right.left, p.right.right].map(Fe), D = p.hasNot ? "notBetween" : "between";
        if ($.every((G) => v(I, D, G))) {
          const G = r != null && r.listsAsArrays ? $ : Qt($, ", ");
          return { field: I, operator: D, value: G, valueSource: "field" };
        }
      }
    } else if (p.type === "LikePredicate") {
      if (Ae(p.left) && p.right.type === "String") {
        const I = Ht(p.right), $ = I.replace(/(^%)|(%$)/g, "");
        let D = "=";
        /^%.*%$/.test(I) || I === "%" ? D = p.hasNot ? "doesNotContain" : "contains" : /%$/.test(I) ? D = p.hasNot ? "doesNotBeginWith" : "beginsWith" : /^%/.test(I) && (D = p.hasNot ? "doesNotEndWith" : "endsWith");
        const G = Fe(p.left);
        if (v(G, D))
          return { field: G, operator: D, value: $ };
      } else if (Ae(p.left) && (p.right.type === "StartsWithExpr" || p.right.type === "EndsWithExpr" || p.right.type === "ContainsExpr")) {
        let I = "", $ = "=";
        Ae(p.right.value) && (I = Fe(p.right.value)), p.right.type === "EndsWithExpr" ? $ = p.hasNot ? "doesNotEndWith" : "endsWith" : p.right.type === "StartsWithExpr" ? $ = p.hasNot ? "doesNotBeginWith" : "beginsWith" : p.right.type === "ContainsExpr" && ($ = p.hasNot ? "doesNotContain" : "contains");
        const D = Fe(p.left);
        if ($ !== "=" && v(D, $, I))
          return {
            field: D,
            operator: $,
            value: I,
            valueSource: "field"
          };
      } else if (Ae(p.left) && Ae(p.right)) {
        const I = Fe(p.left), $ = Fe(p.right), D = "=";
        if (v(I, D, $))
          return {
            field: I,
            operator: D,
            value: $,
            valueSource: "field"
          };
      }
    }
    return null;
  }, { where: T } = W1.parse(y).value;
  if (T) {
    const p = b(T);
    if (p)
      return xn(p) ? p : { rules: [p], ...w ? {} : { combinator: "and" } };
  }
  return { rules: [], ...w ? {} : { combinator: "and" } };
}
const it = {
  notIn: "not in",
  contains: "like",
  beginsWith: "like",
  endsWith: "like",
  doesNotContain: "not like",
  doesNotBeginWith: "not like",
  doesNotEndWith: "not like",
  null: "is null",
  notNull: "is not null",
  between: "between",
  notBetween: "not between"
}, z1 = (e) => {
  const { field: r = "", operator: n = "", value: u = "" } = e;
  let c = r;
  switch (n) {
    case "in": {
      const N = String(u).split(",").map((E) => E && E.trim() ? `'${E.trim()}'` : "").filter((E) => !!E).join(", ");
      c += ` ${n} (${N})`;
      break;
    }
    case "notIn": {
      const N = String(u).split(",").map((E) => E && E.trim() ? `'${E.trim()}'` : "").filter((E) => !!E).join(", ");
      c += ` ${it[n]} (${N})`;
      break;
    }
    case "contains": {
      c += ` ${it[n]} '%${u}%'`;
      break;
    }
    case "beginsWith": {
      c += ` ${it[n]} '${u}%'`;
      break;
    }
    case "endsWith": {
      c += ` ${it[n]} '%${u}'`;
      break;
    }
    case "doesNotContain": {
      c += ` ${it[n]} '%${u}%'`;
      break;
    }
    case "doesNotBeginWith": {
      c += ` ${it[n]} '${u}%'`;
      break;
    }
    case "doesNotEndWith": {
      c += ` ${it[n]} '%${u}'`;
      break;
    }
    case "null":
    case "notNull": {
      c += ` ${it[n]}`;
      break;
    }
    case "between":
    case "notBetween": {
      const N = String(u).split(",").map((E) => E && E.trim() ? `'${E.trim()}'` : "").filter((E) => !!E);
      N.length === 2 ? c += ` ${it[n]} ${N[0]} AND ${N[1]}` : c = "";
      break;
    }
    default:
      c += ` ${n} '${u}'`;
  }
  return c;
}, X1 = (e) => e.rules !== void 0, ts = (e) => {
  const { combinator: r, rules: n } = e;
  return n.map((N) => X1(N) ? `(${ts(N)})` : z1(N)).filter((N) => !!N).join(` ${r.toUpperCase()} `);
}, q1 = (e) => {
  try {
    const r = ts(e), n = $1.parseSQL(r);
    return Bn.formatQuery(n, "jsonlogic");
  } catch (r) {
    throw console.error(r), new Error("Invalid JsonLogic expression");
  }
};
export {
  J1 as transformToJSON,
  q1 as transformToJSONLogic
};
