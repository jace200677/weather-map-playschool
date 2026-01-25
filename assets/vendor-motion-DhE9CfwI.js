import {j as z} from "./vendor-ui-ChKirxi5.js";
import {r as T} from "./vendor-react-C-0J8HPx.js";
const Ie = T.createContext({});
function je(t) {
    const e = T.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const Oe = typeof window < "u"
  , ks = Oe ? T.useLayoutEffect : T.useEffect
  , Yt = T.createContext(null);
function Ne(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function Ue(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
const X = (t, e, n) => n > e ? e : n < t ? t : n;
let $t = () => {}
;
const Y = {}
  , Fs = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function Bs(t) {
    return typeof t == "object" && t !== null
}
const Is = t => /^0[^.\s]+$/u.test(t);
function We(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
const W = t => t
  , hr = (t, e) => n => e(t(n))
  , Rt = (...t) => t.reduce(hr)
  , wt = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s
}
;
class Ke {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Ne(this.subscriptions, e),
        () => Ue(this.subscriptions, e)
    }
    notify(e, n, s) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](e, n, s);
            else
                for (let o = 0; o < i; o++) {
                    const r = this.subscriptions[o];
                    r && r(e, n, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const $ = t => t * 1e3
  , G = t => t / 1e3;
function js(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Os = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
  , fr = 1e-7
  , dr = 12;
function mr(t, e, n, s, i) {
    let o, r, a = 0;
    do
        r = e + (n - e) / 2,
        o = Os(r, s, i) - t,
        o > 0 ? n = r : e = r;
    while (Math.abs(o) > fr && ++a < dr);
    return r
}
function Lt(t, e, n, s) {
    if (t === e && n === s)
        return W;
    const i = o => mr(o, 0, 1, t, n);
    return o => o === 0 || o === 1 ? o : Os(i(o), e, s)
}
const Ns = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , Us = t => e => 1 - t(1 - e)
  , Ws = Lt(.33, 1.53, .69, .99)
  , $e = Us(Ws)
  , Ks = Ns($e)
  , $s = t => (t *= 2) < 1 ? .5 * $e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , Ge = t => 1 - Math.sin(Math.acos(t))
  , Gs = Us(Ge)
  , Hs = Ns(Ge)
  , pr = Lt(.42, 0, 1, 1)
  , gr = Lt(0, 0, .58, 1)
  , _s = Lt(.42, 0, .58, 1)
  , yr = t => Array.isArray(t) && typeof t[0] != "number"
  , zs = t => Array.isArray(t) && typeof t[0] == "number"
  , vn = {
    linear: W,
    easeIn: pr,
    easeInOut: _s,
    easeOut: gr,
    circIn: Ge,
    circInOut: Hs,
    circOut: Gs,
    backIn: $e,
    backInOut: Ks,
    backOut: Ws,
    anticipate: $s
}
  , vr = t => typeof t == "string"
  , Tn = t => {
    if (zs(t)) {
        $t(t.length === 4);
        const [e,n,s,i] = t;
        return Lt(e, n, s, i)
    } else if (vr(t))
        return $t(vn[t] !== void 0),
        vn[t];
    return t
}
  , Bt = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , xn = {
    value: null,
    addProjectionMetrics: null
};
function Tr(t, e) {
    let n = new Set
      , s = new Set
      , i = !1
      , o = !1;
    const r = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function c(h) {
        r.has(h) && (u.schedule(h),
        t()),
        l++,
        h(a)
    }
    const u = {
        schedule: (h, f=!1, d=!1) => {
            const p = d && i ? n : s;
            return f && r.add(h),
            p.has(h) || p.add(h),
            h
        }
        ,
        cancel: h => {
            s.delete(h),
            r.delete(h)
        }
        ,
        process: h => {
            if (a = h,
            i) {
                o = !0;
                return
            }
            i = !0,
            [n,s] = [s, n],
            n.forEach(c),
            e && xn.value && xn.value.frameloop[e].push(l),
            l = 0,
            n.clear(),
            i = !1,
            o && (o = !1,
            u.process(h))
        }
    };
    return u
}
const xr = 40;
function Xs(t, e) {
    let n = !1
      , s = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = () => n = !0
      , r = Bt.reduce( (y, w) => (y[w] = Tr(o, e ? w : void 0),
    y), {})
      , {setup: a, read: l, resolveKeyframes: c, preUpdate: u, update: h, preRender: f, render: d, postRender: m} = r
      , p = () => {
        const y = Y.useManualTiming ? i.timestamp : performance.now();
        n = !1,
        Y.useManualTiming || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, xr), 1)),
        i.timestamp = y,
        i.isProcessing = !0,
        a.process(i),
        l.process(i),
        c.process(i),
        u.process(i),
        h.process(i),
        f.process(i),
        d.process(i),
        m.process(i),
        i.isProcessing = !1,
        n && e && (s = !1,
        t(p))
    }
      , v = () => {
        n = !0,
        s = !0,
        i.isProcessing || t(p)
    }
    ;
    return {
        schedule: Bt.reduce( (y, w) => {
            const P = r[w];
            return y[w] = (A, V=!1, b=!1) => (n || v(),
            P.schedule(A, V, b)),
            y
        }
        , {}),
        cancel: y => {
            for (let w = 0; w < Bt.length; w++)
                r[Bt[w]].cancel(y)
        }
        ,
        state: i,
        steps: r
    }
}
const {schedule: C, cancel: J, state: k, steps: ee} = Xs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : W, !0);
let Nt;
function Pr() {
    Nt = void 0
}
const O = {
    now: () => (Nt === void 0 && O.set(k.isProcessing || Y.useManualTiming ? k.timestamp : performance.now()),
    Nt),
    set: t => {
        Nt = t,
        queueMicrotask(Pr)
    }
}
  , Ys = t => e => typeof e == "string" && e.startsWith(t)
  , He = Ys("--")
  , Sr = Ys("var(--")
  , _e = t => Sr(t) ? br.test(t.split("/*")[0].trim()) : !1
  , br = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , mt = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , At = {
    ...mt,
    transform: t => X(0, 1, t)
}
  , It = {
    ...mt,
    default: 1
}
  , Tt = t => Math.round(t * 1e5) / 1e5
  , ze = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function wr(t) {
    return t == null
}
const Ar = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Xe = (t, e) => n => !!(typeof n == "string" && Ar.test(n) && n.startsWith(t) || e && !wr(n) && Object.prototype.hasOwnProperty.call(n, e))
  , qs = (t, e, n) => s => {
    if (typeof s != "string")
        return s;
    const [i,o,r,a] = s.match(ze);
    return {
        [t]: parseFloat(i),
        [e]: parseFloat(o),
        [n]: parseFloat(r),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , Vr = t => X(0, 255, t)
  , ne = {
    ...mt,
    transform: t => Math.round(Vr(t))
}
  , st = {
    test: Xe("rgb", "red"),
    parse: qs("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: s=1}) => "rgba(" + ne.transform(t) + ", " + ne.transform(e) + ", " + ne.transform(n) + ", " + Tt(At.transform(s)) + ")"
};
function Cr(t) {
    let e = ""
      , n = ""
      , s = ""
      , i = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    n = t.substring(3, 5),
    s = t.substring(5, 7),
    i = t.substring(7, 9)) : (e = t.substring(1, 2),
    n = t.substring(2, 3),
    s = t.substring(3, 4),
    i = t.substring(4, 5),
    e += e,
    n += n,
    s += s,
    i += i),
    {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(s, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const pe = {
    test: Xe("#"),
    parse: Cr,
    transform: st.transform
}
  , kt = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , Z = kt("deg")
  , H = kt("%")
  , S = kt("px")
  , Mr = kt("vh")
  , Dr = kt("vw")
  , Pn = {
    ...H,
    parse: t => H.parse(t) / 100,
    transform: t => H.transform(t * 100)
}
  , at = {
    test: Xe("hsl", "hue"),
    parse: qs("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: s=1}) => "hsla(" + Math.round(t) + ", " + H.transform(Tt(e)) + ", " + H.transform(Tt(n)) + ", " + Tt(At.transform(s)) + ")"
}
  , R = {
    test: t => st.test(t) || pe.test(t) || at.test(t),
    parse: t => st.test(t) ? st.parse(t) : at.test(t) ? at.parse(t) : pe.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? st.transform(t) : at.transform(t),
    getAnimatableNone: t => {
        const e = R.parse(t);
        return e.alpha = 0,
        R.transform(e)
    }
}
  , Er = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Rr(t) {
    var e, n;
    return isNaN(t) && typeof t == "string" && (((e = t.match(ze)) == null ? void 0 : e.length) || 0) + (((n = t.match(Er)) == null ? void 0 : n.length) || 0) > 0
}
const Zs = "number"
  , Js = "color"
  , Lr = "var"
  , kr = "var("
  , Sn = "${}"
  , Fr = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Vt(t) {
    const e = t.toString()
      , n = []
      , s = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let o = 0;
    const a = e.replace(Fr, l => (R.test(l) ? (s.color.push(o),
    i.push(Js),
    n.push(R.parse(l))) : l.startsWith(kr) ? (s.var.push(o),
    i.push(Lr),
    n.push(l)) : (s.number.push(o),
    i.push(Zs),
    n.push(parseFloat(l))),
    ++o,
    Sn)).split(Sn);
    return {
        values: n,
        split: a,
        indexes: s,
        types: i
    }
}
function Qs(t) {
    return Vt(t).values
}
function ti(t) {
    const {split: e, types: n} = Vt(t)
      , s = e.length;
    return i => {
        let o = "";
        for (let r = 0; r < s; r++)
            if (o += e[r],
            i[r] !== void 0) {
                const a = n[r];
                a === Zs ? o += Tt(i[r]) : a === Js ? o += R.transform(i[r]) : o += i[r]
            }
        return o
    }
}
const Br = t => typeof t == "number" ? 0 : R.test(t) ? R.getAnimatableNone(t) : t;
function Ir(t) {
    const e = Qs(t);
    return ti(t)(e.map(Br))
}
const Q = {
    test: Rr,
    parse: Qs,
    createTransformer: ti,
    getAnimatableNone: Ir
};
function se(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function jr({hue: t, saturation: e, lightness: n, alpha: s}) {
    t /= 360,
    e /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , r = 0;
    if (!e)
        i = o = r = n;
    else {
        const a = n < .5 ? n * (1 + e) : n + e - n * e
          , l = 2 * n - a;
        i = se(l, a, t + 1 / 3),
        o = se(l, a, t),
        r = se(l, a, t - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(r * 255),
        alpha: s
    }
}
function Gt(t, e) {
    return n => n > 0 ? e : t
}
const M = (t, e, n) => t + (e - t) * n
  , ie = (t, e, n) => {
    const s = t * t
      , i = n * (e * e - s) + s;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , Or = [pe, st, at]
  , Nr = t => Or.find(e => e.test(t));
function bn(t) {
    const e = Nr(t);
    if (!e)
        return !1;
    let n = e.parse(t);
    return e === at && (n = jr(n)),
    n
}
const wn = (t, e) => {
    const n = bn(t)
      , s = bn(e);
    if (!n || !s)
        return Gt(t, e);
    const i = {
        ...n
    };
    return o => (i.red = ie(n.red, s.red, o),
    i.green = ie(n.green, s.green, o),
    i.blue = ie(n.blue, s.blue, o),
    i.alpha = M(n.alpha, s.alpha, o),
    st.transform(i))
}
  , ge = new Set(["none", "hidden"]);
function Ur(t, e) {
    return ge.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}
function Wr(t, e) {
    return n => M(t, e, n)
}
function Ye(t) {
    return typeof t == "number" ? Wr : typeof t == "string" ? _e(t) ? Gt : R.test(t) ? wn : Gr : Array.isArray(t) ? ei : typeof t == "object" ? R.test(t) ? wn : Kr : Gt
}
function ei(t, e) {
    const n = [...t]
      , s = n.length
      , i = t.map( (o, r) => Ye(o)(o, e[r]));
    return o => {
        for (let r = 0; r < s; r++)
            n[r] = i[r](o);
        return n
    }
}
function Kr(t, e) {
    const n = {
        ...t,
        ...e
    }
      , s = {};
    for (const i in n)
        t[i] !== void 0 && e[i] !== void 0 && (s[i] = Ye(t[i])(t[i], e[i]));
    return i => {
        for (const o in s)
            n[o] = s[o](i);
        return n
    }
}
function $r(t, e) {
    const n = []
      , s = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let i = 0; i < e.values.length; i++) {
        const o = e.types[i]
          , r = t.indexes[o][s[o]]
          , a = t.values[r] ?? 0;
        n[i] = a,
        s[o]++
    }
    return n
}
const Gr = (t, e) => {
    const n = Q.createTransformer(e)
      , s = Vt(t)
      , i = Vt(e);
    return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? ge.has(t) && !i.values.length || ge.has(e) && !s.values.length ? Ur(t, e) : Rt(ei($r(s, i), i.values), n) : Gt(t, e)
}
;
function ni(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? M(t, e, n) : Ye(t)(t, e)
}
const Hr = t => {
    const e = ({timestamp: n}) => t(n);
    return {
        start: (n=!0) => C.update(e, n),
        stop: () => J(e),
        now: () => k.isProcessing ? k.timestamp : O.now()
    }
}
  , si = (t, e, n=10) => {
    let s = "";
    const i = Math.max(Math.round(e / n), 2);
    for (let o = 0; o < i; o++)
        s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`
}
  , Ht = 2e4;
function qe(t) {
    let e = 0;
    const n = 50;
    let s = t.next(e);
    for (; !s.done && e < Ht; )
        e += n,
        s = t.next(e);
    return e >= Ht ? 1 / 0 : e
}
function _r(t, e=100, n) {
    const s = n({
        ...t,
        keyframes: [0, e]
    })
      , i = Math.min(qe(s), Ht);
    return {
        type: "keyframes",
        ease: o => s.next(i * o).value / e,
        duration: G(i)
    }
}
const zr = 5;
function ii(t, e, n) {
    const s = Math.max(e - zr, 0);
    return js(n - t(s), e - s)
}
const D = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , re = .001;
function Xr({duration: t=D.duration, bounce: e=D.bounce, velocity: n=D.velocity, mass: s=D.mass}) {
    let i, o, r = 1 - e;
    r = X(D.minDamping, D.maxDamping, r),
    t = X(D.minDuration, D.maxDuration, G(t)),
    r < 1 ? (i = c => {
        const u = c * r
          , h = u * t
          , f = u - n
          , d = ye(c, r)
          , m = Math.exp(-h);
        return re - f / d * m
    }
    ,
    o = c => {
        const h = c * r * t
          , f = h * n + n
          , d = Math.pow(r, 2) * Math.pow(c, 2) * t
          , m = Math.exp(-h)
          , p = ye(Math.pow(c, 2), r);
        return (-i(c) + re > 0 ? -1 : 1) * ((f - d) * m) / p
    }
    ) : (i = c => {
        const u = Math.exp(-c * t)
          , h = (c - n) * t + 1;
        return -re + u * h
    }
    ,
    o = c => {
        const u = Math.exp(-c * t)
          , h = (n - c) * (t * t);
        return u * h
    }
    );
    const a = 5 / t
      , l = qr(i, o, a);
    if (t = $(t),
    isNaN(l))
        return {
            stiffness: D.stiffness,
            damping: D.damping,
            duration: t
        };
    {
        const c = Math.pow(l, 2) * s;
        return {
            stiffness: c,
            damping: r * 2 * Math.sqrt(s * c),
            duration: t
        }
    }
}
const Yr = 12;
function qr(t, e, n) {
    let s = n;
    for (let i = 1; i < Yr; i++)
        s = s - t(s) / e(s);
    return s
}
function ye(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const Zr = ["duration", "bounce"]
  , Jr = ["stiffness", "damping", "mass"];
function An(t, e) {
    return e.some(n => t[n] !== void 0)
}
function Qr(t) {
    let e = {
        velocity: D.velocity,
        stiffness: D.stiffness,
        damping: D.damping,
        mass: D.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!An(t, Jr) && An(t, Zr))
        if (t.visualDuration) {
            const n = t.visualDuration
              , s = 2 * Math.PI / (n * 1.2)
              , i = s * s
              , o = 2 * X(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
            e = {
                ...e,
                mass: D.mass,
                stiffness: i,
                damping: o
            }
        } else {
            const n = Xr(t);
            e = {
                ...e,
                ...n,
                mass: D.mass
            },
            e.isResolvedFromDuration = !0
        }
    return e
}
function _t(t=D.visualDuration, e=D.bounce) {
    const n = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {restSpeed: s, restDelta: i} = n;
    const o = n.keyframes[0]
      , r = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: o
    }
      , {stiffness: l, damping: c, mass: u, duration: h, velocity: f, isResolvedFromDuration: d} = Qr({
        ...n,
        velocity: -G(n.velocity || 0)
    })
      , m = f || 0
      , p = c / (2 * Math.sqrt(l * u))
      , v = r - o
      , g = G(Math.sqrt(l / u))
      , x = Math.abs(v) < 5;
    s || (s = x ? D.restSpeed.granular : D.restSpeed.default),
    i || (i = x ? D.restDelta.granular : D.restDelta.default);
    let y;
    if (p < 1) {
        const P = ye(g, p);
        y = A => {
            const V = Math.exp(-p * g * A);
            return r - V * ((m + p * g * v) / P * Math.sin(P * A) + v * Math.cos(P * A))
        }
    } else if (p === 1)
        y = P => r - Math.exp(-g * P) * (v + (m + g * v) * P);
    else {
        const P = g * Math.sqrt(p * p - 1);
        y = A => {
            const V = Math.exp(-p * g * A)
              , b = Math.min(P * A, 300);
            return r - V * ((m + p * g * v) * Math.sinh(b) + P * v * Math.cosh(b)) / P
        }
    }
    const w = {
        calculatedDuration: d && h || null,
        next: P => {
            const A = y(P);
            if (d)
                a.done = P >= h;
            else {
                let V = P === 0 ? m : 0;
                p < 1 && (V = P === 0 ? $(m) : ii(y, P, A));
                const b = Math.abs(V) <= s
                  , L = Math.abs(r - A) <= i;
                a.done = b && L
            }
            return a.value = a.done ? r : A,
            a
        }
        ,
        toString: () => {
            const P = Math.min(qe(w), Ht)
              , A = si(V => w.next(P * V).value, P, 30);
            return P + "ms " + A
        }
        ,
        toTransition: () => {}
    };
    return w
}
_t.applyToOptions = t => {
    const e = _r(t, 100, _t);
    return t.ease = e.ease,
    t.duration = $(e.duration),
    t.type = "keyframes",
    t
}
;
function ve({keyframes: t, velocity: e=0, power: n=.8, timeConstant: s=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: r, min: a, max: l, restDelta: c=.5, restSpeed: u}) {
    const h = t[0]
      , f = {
        done: !1,
        value: h
    }
      , d = b => a !== void 0 && b < a || l !== void 0 && b > l
      , m = b => a === void 0 ? l : l === void 0 || Math.abs(a - b) < Math.abs(l - b) ? a : l;
    let p = n * e;
    const v = h + p
      , g = r === void 0 ? v : r(v);
    g !== v && (p = g - h);
    const x = b => -p * Math.exp(-b / s)
      , y = b => g + x(b)
      , w = b => {
        const L = x(b)
          , B = y(b);
        f.done = Math.abs(L) <= c,
        f.value = f.done ? g : B
    }
    ;
    let P, A;
    const V = b => {
        d(f.value) && (P = b,
        A = _t({
            keyframes: [f.value, m(f.value)],
            velocity: ii(y, b, f.value),
            damping: i,
            stiffness: o,
            restDelta: c,
            restSpeed: u
        }))
    }
    ;
    return V(0),
    {
        calculatedDuration: null,
        next: b => {
            let L = !1;
            return !A && P === void 0 && (L = !0,
            w(b),
            V(b)),
            P !== void 0 && b >= P ? A.next(b - P) : (!L && w(b),
            f)
        }
    }
}
function to(t, e, n) {
    const s = []
      , i = n || Y.mix || ni
      , o = t.length - 1;
    for (let r = 0; r < o; r++) {
        let a = i(t[r], t[r + 1]);
        if (e) {
            const l = Array.isArray(e) ? e[r] || W : e;
            a = Rt(l, a)
        }
        s.push(a)
    }
    return s
}
function eo(t, e, {clamp: n=!0, ease: s, mixer: i}={}) {
    const o = t.length;
    if ($t(o === e.length),
    o === 1)
        return () => e[0];
    if (o === 2 && e[0] === e[1])
        return () => e[1];
    const r = t[0] === t[1];
    t[0] > t[o - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const a = to(e, s, i)
      , l = a.length
      , c = u => {
        if (r && u < t[0])
            return e[0];
        let h = 0;
        if (l > 1)
            for (; h < t.length - 2 && !(u < t[h + 1]); h++)
                ;
        const f = wt(t[h], t[h + 1], u);
        return a[h](f)
    }
    ;
    return n ? u => c(X(t[0], t[o - 1], u)) : c
}
function no(t, e) {
    const n = t[t.length - 1];
    for (let s = 1; s <= e; s++) {
        const i = wt(0, e, s);
        t.push(M(n, 1, i))
    }
}
function so(t) {
    const e = [0];
    return no(e, t.length - 1),
    e
}
function io(t, e) {
    return t.map(n => n * e)
}
function ro(t, e) {
    return t.map( () => e || _s).splice(0, t.length - 1)
}
function xt({duration: t=300, keyframes: e, times: n, ease: s="easeInOut"}) {
    const i = yr(s) ? s.map(Tn) : Tn(s)
      , o = {
        done: !1,
        value: e[0]
    }
      , r = io(n && n.length === e.length ? n : so(e), t)
      , a = eo(r, e, {
        ease: Array.isArray(i) ? i : ro(e, i)
    });
    return {
        calculatedDuration: t,
        next: l => (o.value = a(l),
        o.done = l >= t,
        o)
    }
}
const oo = t => t !== null;
function Ze(t, {repeat: e, repeatType: n="loop"}, s, i=1) {
    const o = t.filter(oo)
      , a = i < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
    return !a || s === void 0 ? o[a] : s
}
const ao = {
    decay: ve,
    inertia: ve,
    tween: xt,
    keyframes: xt,
    spring: _t
};
function ri(t) {
    typeof t.type == "string" && (t.type = ao[t.type])
}
class Je {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(e => {
            this.resolve = e
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(e, n) {
        return this.finished.then(e, n)
    }
}
const lo = t => t / 100;
class Qe extends Je {
    constructor(e) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var s, i;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== O.now() && this.tick(O.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (i = (s = this.options).onStop) == null || i.call(s))
        }
        ,
        this.options = e,
        this.initAnimation(),
        this.play(),
        e.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: e} = this;
        ri(e);
        const {type: n=xt, repeat: s=0, repeatDelay: i=0, repeatType: o, velocity: r=0} = e;
        let {keyframes: a} = e;
        const l = n || xt;
        l !== xt && typeof a[0] != "number" && (this.mixKeyframes = Rt(lo, ni(a[0], a[1])),
        a = [0, 100]);
        const c = l({
            ...e,
            keyframes: a
        });
        o === "mirror" && (this.mirroredGenerator = l({
            ...e,
            keyframes: [...a].reverse(),
            velocity: -r
        })),
        c.calculatedDuration === null && (c.calculatedDuration = qe(c));
        const {calculatedDuration: u} = c;
        this.calculatedDuration = u,
        this.resolvedDuration = u + i,
        this.totalDuration = this.resolvedDuration * (s + 1) - i,
        this.generator = c
    }
    updateTime(e) {
        const n = Math.round(e - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(e, n=!1) {
        const {generator: s, totalDuration: i, mixKeyframes: o, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return s.next(0);
        const {delay: c=0, keyframes: u, repeat: h, repeatType: f, repeatDelay: d, type: m, onUpdate: p, finalKeyframe: v} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)),
        n ? this.currentTime = e : this.updateTime(e);
        const g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1)
          , x = this.playbackSpeed >= 0 ? g < 0 : g > i;
        this.currentTime = Math.max(g, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let y = this.currentTime
          , w = s;
        if (h) {
            const b = Math.min(this.currentTime, i) / a;
            let L = Math.floor(b)
              , B = b % 1;
            !B && b >= 1 && (B = 1),
            B === 1 && L--,
            L = Math.min(L, h + 1),
            !!(L % 2) && (f === "reverse" ? (B = 1 - B,
            d && (B -= d / a)) : f === "mirror" && (w = r)),
            y = X(0, 1, B) * a
        }
        const P = x ? {
            done: !1,
            value: u[0]
        } : w.next(y);
        o && (P.value = o(P.value));
        let {done: A} = P;
        !x && l !== null && (A = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const V = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
        return V && m !== ve && (P.value = Ze(u, this.options, v, this.speed)),
        p && p(P.value),
        V && this.finish(),
        P
    }
    then(e, n) {
        return this.finished.then(e, n)
    }
    get duration() {
        return G(this.calculatedDuration)
    }
    get time() {
        return G(this.currentTime)
    }
    set time(e) {
        var n;
        e = $(e),
        this.currentTime = e,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
        (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        this.updateTime(O.now());
        const n = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        n && (this.time = G(this.currentTime))
    }
    play() {
        var i, o;
        if (this.isStopped)
            return;
        const {driver: e=Hr, startTime: n} = this.options;
        this.driver || (this.driver = e(r => this.tick(r))),
        (o = (i = this.options).onPlay) == null || o.call(i);
        const s = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = n ?? s),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(O.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var e, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (e = this.options).onComplete) == null || n.call(e)
    }
    cancel() {
        var e, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (e = this.options).onCancel) == null || n.call(e)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
    attachTimeline(e) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        e.observe(this)
    }
}
function uo(t) {
    for (let e = 1; e < t.length; e++)
        t[e] ?? (t[e] = t[e - 1])
}
const it = t => t * 180 / Math.PI
  , Te = t => {
    const e = it(Math.atan2(t[1], t[0]));
    return xe(e)
}
  , co = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: Te,
    rotateZ: Te,
    skewX: t => it(Math.atan(t[1])),
    skewY: t => it(Math.atan(t[2])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}
  , xe = t => (t = t % 360,
t < 0 && (t += 360),
t)
  , Vn = Te
  , Cn = t => Math.sqrt(t[0] * t[0] + t[1] * t[1])
  , Mn = t => Math.sqrt(t[4] * t[4] + t[5] * t[5])
  , ho = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Cn,
    scaleY: Mn,
    scale: t => (Cn(t) + Mn(t)) / 2,
    rotateX: t => xe(it(Math.atan2(t[6], t[5]))),
    rotateY: t => xe(it(Math.atan2(-t[2], t[0]))),
    rotateZ: Vn,
    rotate: Vn,
    skewX: t => it(Math.atan(t[4])),
    skewY: t => it(Math.atan(t[1])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Pe(t) {
    return t.includes("scale") ? 1 : 0
}
function Se(t, e) {
    if (!t || t === "none")
        return Pe(e);
    const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let s, i;
    if (n)
        s = ho,
        i = n;
    else {
        const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        s = co,
        i = a
    }
    if (!i)
        return Pe(e);
    const o = s[e]
      , r = i[1].split(",").map(mo);
    return typeof o == "function" ? o(r) : r[o]
}
const fo = (t, e) => {
    const {transform: n="none"} = getComputedStyle(t);
    return Se(n, e)
}
;
function mo(t) {
    return parseFloat(t.trim())
}
const pt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , gt = new Set(pt)
  , Dn = t => t === mt || t === S
  , po = new Set(["x", "y", "z"])
  , go = pt.filter(t => !po.has(t));
function yo(t) {
    const e = [];
    return go.forEach(n => {
        const s = t.getValue(n);
        s !== void 0 && (e.push([n, s.get()]),
        s.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    e
}
const rt = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: (t, {transform: e}) => Se(e, "x"),
    y: (t, {transform: e}) => Se(e, "y")
};
rt.translateX = rt.x;
rt.translateY = rt.y;
const ot = new Set;
let be = !1
  , we = !1
  , Ae = !1;
function oi() {
    if (we) {
        const t = Array.from(ot).filter(s => s.needsMeasurement)
          , e = new Set(t.map(s => s.element))
          , n = new Map;
        e.forEach(s => {
            const i = yo(s);
            i.length && (n.set(s, i),
            s.render())
        }
        ),
        t.forEach(s => s.measureInitialState()),
        e.forEach(s => {
            s.render();
            const i = n.get(s);
            i && i.forEach( ([o,r]) => {
                var a;
                (a = s.getValue(o)) == null || a.set(r)
            }
            )
        }
        ),
        t.forEach(s => s.measureEndState()),
        t.forEach(s => {
            s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
        }
        )
    }
    we = !1,
    be = !1,
    ot.forEach(t => t.complete(Ae)),
    ot.clear()
}
function ai() {
    ot.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (we = !0)
    }
    )
}
function vo() {
    Ae = !0,
    ai(),
    oi(),
    Ae = !1
}
class tn {
    constructor(e, n, s, i, o, r=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = n,
        this.name = s,
        this.motionValue = i,
        this.element = o,
        this.isAsync = r
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (ot.add(this),
        be || (be = !0,
        C.read(ai),
        C.resolveKeyframes(oi))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: n, element: s, motionValue: i} = this;
        if (e[0] === null) {
            const o = i == null ? void 0 : i.get()
              , r = e[e.length - 1];
            if (o !== void 0)
                e[0] = o;
            else if (s && n) {
                const a = s.readValue(n, r);
                a != null && (e[0] = a)
            }
            e[0] === void 0 && (e[0] = r),
            i && o === void 0 && i.set(e[0])
        }
        uo(e)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(e=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
        ot.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (ot.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const To = t => t.startsWith("--");
function xo(t, e, n) {
    To(e) ? t.style.setProperty(e, n) : t.style[e] = n
}
const Po = We( () => window.ScrollTimeline !== void 0)
  , So = {};
function bo(t, e) {
    const n = We(t);
    return () => So[e] ?? n()
}
const li = bo( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , vt = ([t,e,n,s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`
  , En = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: vt([0, .65, .55, 1]),
    circOut: vt([.55, 0, 1, .45]),
    backIn: vt([.31, .01, .66, -.59]),
    backOut: vt([.33, 1.53, .69, .99])
};
function ui(t, e) {
    if (t)
        return typeof t == "function" ? li() ? si(t, e) : "ease-out" : zs(t) ? vt(t) : Array.isArray(t) ? t.map(n => ui(n, e) || En.easeOut) : En[t]
}
function wo(t, e, n, {delay: s=0, duration: i=300, repeat: o=0, repeatType: r="loop", ease: a="easeOut", times: l}={}, c=void 0) {
    const u = {
        [e]: n
    };
    l && (u.offset = l);
    const h = ui(a, i);
    Array.isArray(h) && (u.easing = h);
    const f = {
        delay: s,
        duration: i,
        easing: Array.isArray(h) ? "linear" : h,
        fill: "both",
        iterations: o + 1,
        direction: r === "reverse" ? "alternate" : "normal"
    };
    return c && (f.pseudoElement = c),
    t.animate(u, f)
}
function ci(t) {
    return typeof t == "function" && "applyToOptions"in t
}
function Ao({type: t, ...e}) {
    return ci(t) && li() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300),
    e.ease ?? (e.ease = "easeOut"),
    e)
}
class Vo extends Je {
    constructor(e) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !e)
            return;
        const {element: n, name: s, keyframes: i, pseudoElement: o, allowFlatten: r=!1, finalKeyframe: a, onComplete: l} = e;
        this.isPseudoElement = !!o,
        this.allowFlatten = r,
        this.options = e,
        $t(typeof e.type != "string");
        const c = Ao(e);
        this.animation = wo(n, s, i, c, o),
        c.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !o) {
                const u = Ze(i, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(u) : xo(n, s, u),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var e, n;
        (n = (e = this.animation).finish) == null || n.call(e)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: e} = this;
        e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var e, n;
        this.isPseudoElement || (n = (e = this.animation).commitStyles) == null || n.call(e)
    }
    get duration() {
        var n, s;
        const e = ((s = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : s.call(n).duration) || 0;
        return G(Number(e))
    }
    get time() {
        return G(Number(this.animation.currentTime) || 0)
    }
    set time(e) {
        this.finishedTime = null,
        this.animation.currentTime = $(e)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(e) {
        e < 0 && (this.finishedTime = null),
        this.animation.playbackRate = e
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(e) {
        this.animation.startTime = e
    }
    attachTimeline({timeline: e, observe: n}) {
        var s;
        return this.allowFlatten && ((s = this.animation.effect) == null || s.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        e && Po() ? (this.animation.timeline = e,
        W) : n(this)
    }
}
const hi = {
    anticipate: $s,
    backInOut: Ks,
    circInOut: Hs
};
function Co(t) {
    return t in hi
}
function Mo(t) {
    typeof t.ease == "string" && Co(t.ease) && (t.ease = hi[t.ease])
}
const Rn = 10;
class Do extends Vo {
    constructor(e) {
        Mo(e),
        ri(e),
        super(e),
        e.startTime && (this.startTime = e.startTime),
        this.options = e
    }
    updateMotionValue(e) {
        const {motionValue: n, onUpdate: s, onComplete: i, element: o, ...r} = this.options;
        if (!n)
            return;
        if (e !== void 0) {
            n.set(e);
            return
        }
        const a = new Qe({
            ...r,
            autoplay: !1
        })
          , l = $(this.finishedTime ?? this.time);
        n.setWithVelocity(a.sample(l - Rn).value, a.sample(l).value, Rn),
        a.stop()
    }
}
const Ln = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Q.test(t) || t === "0") && !t.startsWith("url("));
function Eo(t) {
    const e = t[0];
    if (t.length === 1)
        return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e)
            return !0
}
function Ro(t, e, n, s) {
    const i = t[0];
    if (i === null)
        return !1;
    if (e === "display" || e === "visibility")
        return !0;
    const o = t[t.length - 1]
      , r = Ln(i, e)
      , a = Ln(o, e);
    return !r || !a ? !1 : Eo(t) || (n === "spring" || ci(n)) && s
}
function Ve(t) {
    t.duration = 0,
    t.type
}
const Lo = new Set(["opacity", "clipPath", "filter", "transform"])
  , ko = We( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Fo(t) {
    var u;
    const {motionValue: e, name: n, repeatDelay: s, repeatType: i, damping: o, type: r} = t;
    if (!(((u = e == null ? void 0 : e.owner) == null ? void 0 : u.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: l, transformTemplate: c} = e.owner.getProps();
    return ko() && n && Lo.has(n) && (n !== "transform" || !c) && !l && !s && i !== "mirror" && o !== 0 && r !== "inertia"
}
const Bo = 40;
class Io extends Je {
    constructor({autoplay: e=!0, delay: n=0, type: s="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: r="loop", keyframes: a, name: l, motionValue: c, element: u, ...h}) {
        var m;
        super(),
        this.stop = () => {
            var p, v;
            this._animation && (this._animation.stop(),
            (p = this.stopTimeline) == null || p.call(this)),
            (v = this.keyframeResolver) == null || v.cancel()
        }
        ,
        this.createdAt = O.now();
        const f = {
            autoplay: e,
            delay: n,
            type: s,
            repeat: i,
            repeatDelay: o,
            repeatType: r,
            name: l,
            motionValue: c,
            element: u,
            ...h
        }
          , d = (u == null ? void 0 : u.KeyframeResolver) || tn;
        this.keyframeResolver = new d(a, (p, v, g) => this.onKeyframesResolved(p, v, f, !g),l,c,u),
        (m = this.keyframeResolver) == null || m.scheduleResolve()
    }
    onKeyframesResolved(e, n, s, i) {
        this.keyframeResolver = void 0;
        const {name: o, type: r, velocity: a, delay: l, isHandoff: c, onUpdate: u} = s;
        this.resolvedAt = O.now(),
        Ro(e, o, r, a) || ((Y.instantAnimations || !l) && (u == null || u(Ze(e, s, n))),
        e[0] = e[e.length - 1],
        Ve(s),
        s.repeat = 0);
        const f = {
            startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Bo ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...s,
            keyframes: e
        }
          , d = !c && Fo(f) ? new Do({
            ...f,
            element: f.motionValue.owner.current
        }) : new Qe(f);
        d.finished.then( () => this.notifyFinished()).catch(W),
        this.pendingTimeline && (this.stopTimeline = d.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = d
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(e, n) {
        return this.finished.finally(e).then( () => {}
        )
    }
    get animation() {
        var e;
        return this._animation || ((e = this.keyframeResolver) == null || e.resume(),
        vo()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get time() {
        return this.animation.time
    }
    set time(e) {
        this.animation.time = e
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(e) {
        this.animation.speed = e
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(e) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var e;
        this._animation && this.animation.cancel(),
        (e = this.keyframeResolver) == null || e.cancel()
    }
}
const jo = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Oo(t) {
    const e = jo.exec(t);
    if (!e)
        return [, ];
    const [,n,s,i] = e;
    return [`--${n ?? s}`, i]
}
function fi(t, e, n=1) {
    const [s,i] = Oo(t);
    if (!s)
        return;
    const o = window.getComputedStyle(e).getPropertyValue(s);
    if (o) {
        const r = o.trim();
        return Fs(r) ? parseFloat(r) : r
    }
    return _e(i) ? fi(i, e, n + 1) : i
}
function en(t, e) {
    return (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t
}
const di = new Set(["width", "height", "top", "left", "right", "bottom", ...pt])
  , No = {
    test: t => t === "auto",
    parse: t => t
}
  , mi = t => e => e.test(t)
  , pi = [mt, S, H, Z, Dr, Mr, No]
  , kn = t => pi.find(mi(t));
function Uo(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Is(t) : !0
}
const Wo = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ko(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [s] = n.match(ze) || [];
    if (!s)
        return t;
    const i = n.replace(s, "");
    let o = Wo.has(e) ? 1 : 0;
    return s !== n && (o *= 100),
    e + "(" + o + i + ")"
}
const $o = /\b([a-z-]*)\(.*?\)/gu
  , Ce = {
    ...Q,
    getAnimatableNone: t => {
        const e = t.match($o);
        return e ? e.map(Ko).join(" ") : t
    }
}
  , Fn = {
    ...mt,
    transform: Math.round
}
  , Go = {
    rotate: Z,
    rotateX: Z,
    rotateY: Z,
    rotateZ: Z,
    scale: It,
    scaleX: It,
    scaleY: It,
    scaleZ: It,
    skew: Z,
    skewX: Z,
    skewY: Z,
    distance: S,
    translateX: S,
    translateY: S,
    translateZ: S,
    x: S,
    y: S,
    z: S,
    perspective: S,
    transformPerspective: S,
    opacity: At,
    originX: Pn,
    originY: Pn,
    originZ: S
}
  , nn = {
    borderWidth: S,
    borderTopWidth: S,
    borderRightWidth: S,
    borderBottomWidth: S,
    borderLeftWidth: S,
    borderRadius: S,
    radius: S,
    borderTopLeftRadius: S,
    borderTopRightRadius: S,
    borderBottomRightRadius: S,
    borderBottomLeftRadius: S,
    width: S,
    maxWidth: S,
    height: S,
    maxHeight: S,
    top: S,
    right: S,
    bottom: S,
    left: S,
    padding: S,
    paddingTop: S,
    paddingRight: S,
    paddingBottom: S,
    paddingLeft: S,
    margin: S,
    marginTop: S,
    marginRight: S,
    marginBottom: S,
    marginLeft: S,
    backgroundPositionX: S,
    backgroundPositionY: S,
    ...Go,
    zIndex: Fn,
    fillOpacity: At,
    strokeOpacity: At,
    numOctaves: Fn
}
  , Ho = {
    ...nn,
    color: R,
    backgroundColor: R,
    outlineColor: R,
    fill: R,
    stroke: R,
    borderColor: R,
    borderTopColor: R,
    borderRightColor: R,
    borderBottomColor: R,
    borderLeftColor: R,
    filter: Ce,
    WebkitFilter: Ce
}
  , gi = t => Ho[t];
function yi(t, e) {
    let n = gi(t);
    return n !== Ce && (n = Q),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const _o = new Set(["auto", "none", "0"]);
function zo(t, e, n) {
    let s = 0, i;
    for (; s < t.length && !i; ) {
        const o = t[s];
        typeof o == "string" && !_o.has(o) && Vt(o).values.length && (i = t[s]),
        s++
    }
    if (i && n)
        for (const o of e)
            t[o] = yi(n, i)
}
class Xo extends tn {
    constructor(e, n, s, i, o) {
        super(e, n, s, i, o, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: n, name: s} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let l = 0; l < e.length; l++) {
            let c = e[l];
            if (typeof c == "string" && (c = c.trim(),
            _e(c))) {
                const u = fi(c, n.current);
                u !== void 0 && (e[l] = u),
                l === e.length - 1 && (this.finalKeyframe = c)
            }
        }
        if (this.resolveNoneKeyframes(),
        !di.has(s) || e.length !== 2)
            return;
        const [i,o] = e
          , r = kn(i)
          , a = kn(o);
        if (r !== a)
            if (Dn(r) && Dn(a))
                for (let l = 0; l < e.length; l++) {
                    const c = e[l];
                    typeof c == "string" && (e[l] = parseFloat(c))
                }
            else
                rt[s] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: n} = this
          , s = [];
        for (let i = 0; i < e.length; i++)
            (e[i] === null || Uo(e[i])) && s.push(i);
        s.length && zo(e, s, n)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: n, name: s} = this;
        if (!e || !e.current)
            return;
        s === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = rt[s](e.measureViewportBox(), window.getComputedStyle(e.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && e.getValue(s, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const {element: e, name: n, unresolvedKeyframes: s} = this;
        if (!e || !e.current)
            return;
        const i = e.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const o = s.length - 1
          , r = s[o];
        s[o] = rt[n](e.measureViewportBox(), window.getComputedStyle(e.current)),
        r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,c]) => {
            e.getValue(l).set(c)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function Yo(t, e, n) {
    if (t instanceof EventTarget)
        return [t];
    if (typeof t == "string") {
        const i = document.querySelectorAll(t);
        return i ? Array.from(i) : []
    }
    return Array.from(t)
}
const vi = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function Ti(t) {
    return Bs(t) && "offsetHeight"in t
}
const Bn = 30
  , qo = t => !isNaN(parseFloat(t));
class Zo {
    constructor(e, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = s => {
            var o;
            const i = O.now();
            if (this.updatedAt !== i && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(s),
            this.current !== this.prev && ((o = this.events.change) == null || o.notify(this.current),
            this.dependents))
                for (const r of this.dependents)
                    r.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = n.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = O.now(),
        this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = qo(this.current))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new Ke);
        const s = this.events[e].add(n);
        return e === "change" ? () => {
            s(),
            C.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : s
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e,
        this.stopPassiveEffect = n
    }
    set(e) {
        this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
    }
    setWithVelocity(e, n, s) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - s
    }
    jump(e, n=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var e;
        (e = this.events.change) == null || e.notify(this.current)
    }
    addDependent(e) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(e)
    }
    removeDependent(e) {
        this.dependents && this.dependents.delete(e)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = O.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Bn)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Bn);
        return js(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(e) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = e(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var e, n;
        (e = this.dependents) == null || e.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function ft(t, e) {
    return new Zo(t,e)
}
const {schedule: sn, cancel: Xu} = Xs(queueMicrotask, !1)
  , K = {
    x: !1,
    y: !1
};
function xi() {
    return K.x || K.y
}
function Jo(t) {
    return t === "x" || t === "y" ? K[t] ? null : (K[t] = !0,
    () => {
        K[t] = !1
    }
    ) : K.x || K.y ? null : (K.x = K.y = !0,
    () => {
        K.x = K.y = !1
    }
    )
}
function Pi(t, e) {
    const n = Yo(t)
      , s = new AbortController
      , i = {
        passive: !0,
        ...e,
        signal: s.signal
    };
    return [n, i, () => s.abort()]
}
function In(t) {
    return !(t.pointerType === "touch" || xi())
}
function Qo(t, e, n={}) {
    const [s,i,o] = Pi(t, n)
      , r = a => {
        if (!In(a))
            return;
        const {target: l} = a
          , c = e(l, a);
        if (typeof c != "function" || !l)
            return;
        const u = h => {
            In(h) && (c(h),
            l.removeEventListener("pointerleave", u))
        }
        ;
        l.addEventListener("pointerleave", u, i)
    }
    ;
    return s.forEach(a => {
        a.addEventListener("pointerenter", r, i)
    }
    ),
    o
}
const Si = (t, e) => e ? t === e ? !0 : Si(t, e.parentElement) : !1
  , rn = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
  , ta = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function ea(t) {
    return ta.has(t.tagName) || t.tabIndex !== -1
}
const Ut = new WeakSet;
function jn(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}
function oe(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const na = (t, e) => {
    const n = t.currentTarget;
    if (!n)
        return;
    const s = jn( () => {
        if (Ut.has(n))
            return;
        oe(n, "down");
        const i = jn( () => {
            oe(n, "up")
        }
        )
          , o = () => oe(n, "cancel");
        n.addEventListener("keyup", i, e),
        n.addEventListener("blur", o, e)
    }
    );
    n.addEventListener("keydown", s, e),
    n.addEventListener("blur", () => n.removeEventListener("keydown", s), e)
}
;
function On(t) {
    return rn(t) && !xi()
}
function sa(t, e, n={}) {
    const [s,i,o] = Pi(t, n)
      , r = a => {
        const l = a.currentTarget;
        if (!On(a))
            return;
        Ut.add(l);
        const c = e(l, a)
          , u = (d, m) => {
            window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", f),
            Ut.has(l) && Ut.delete(l),
            On(d) && typeof c == "function" && c(d, {
                success: m
            })
        }
          , h = d => {
            u(d, l === window || l === document || n.useGlobalTarget || Si(l, d.target))
        }
          , f = d => {
            u(d, !1)
        }
        ;
        window.addEventListener("pointerup", h, i),
        window.addEventListener("pointercancel", f, i)
    }
    ;
    return s.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i),
        Ti(a) && (a.addEventListener("focus", c => na(c, i)),
        !ea(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    o
}
function bi(t) {
    return Bs(t) && "ownerSVGElement"in t
}
function ia(t) {
    return bi(t) && t.tagName === "svg"
}
const F = t => !!(t && t.getVelocity)
  , ra = [...pi, R, Q]
  , oa = t => ra.find(mi(t))
  , on = T.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
});
class aa extends T.Component {
    getSnapshotBeforeUpdate(e) {
        const n = this.props.childRef.current;
        if (n && e.isPresent && !this.props.isPresent) {
            const s = n.offsetParent
              , i = Ti(s) && s.offsetWidth || 0
              , o = this.props.sizeRef.current;
            o.height = n.offsetHeight || 0,
            o.width = n.offsetWidth || 0,
            o.top = n.offsetTop,
            o.left = n.offsetLeft,
            o.right = i - o.width - o.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function la({children: t, isPresent: e, anchorX: n, root: s}) {
    const i = T.useId()
      , o = T.useRef(null)
      , r = T.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: a} = T.useContext(on);
    return T.useInsertionEffect( () => {
        const {width: l, height: c, top: u, left: h, right: f} = r.current;
        if (e || !o.current || !l || !c)
            return;
        const d = n === "left" ? `left: ${h}` : `right: ${f}`;
        o.current.dataset.motionPopId = i;
        const m = document.createElement("style");
        a && (m.nonce = a);
        const p = s ?? document.head;
        return p.appendChild(m),
        m.sheet && m.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${c}px !important;
            ${d}px !important;
            top: ${u}px !important;
          }
        `),
        () => {
            p.contains(m) && p.removeChild(m)
        }
    }
    , [e]),
    z.jsx(aa, {
        isPresent: e,
        childRef: o,
        sizeRef: r,
        children: T.cloneElement(t, {
            ref: o
        })
    })
}
const ua = ({children: t, initial: e, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: o, mode: r, anchorX: a, root: l}) => {
    const c = je(ca)
      , u = T.useId();
    let h = !0
      , f = T.useMemo( () => (h = !1,
    {
        id: u,
        initial: e,
        isPresent: n,
        custom: i,
        onExitComplete: d => {
            c.set(d, !0);
            for (const m of c.values())
                if (!m)
                    return;
            s && s()
        }
        ,
        register: d => (c.set(d, !1),
        () => c.delete(d))
    }), [n, c, s]);
    return o && h && (f = {
        ...f
    }),
    T.useMemo( () => {
        c.forEach( (d, m) => c.set(m, !1))
    }
    , [n]),
    T.useEffect( () => {
        !n && !c.size && s && s()
    }
    , [n]),
    r === "popLayout" && (t = z.jsx(la, {
        isPresent: n,
        anchorX: a,
        root: l,
        children: t
    })),
    z.jsx(Yt.Provider, {
        value: f,
        children: t
    })
}
;
function ca() {
    return new Map
}
function wi(t=!0) {
    const e = T.useContext(Yt);
    if (e === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: s, register: i} = e
      , o = T.useId();
    T.useEffect( () => {
        if (t)
            return i(o)
    }
    , [t]);
    const r = T.useCallback( () => t && s && s(o), [o, s, t]);
    return !n && s ? [!1, r] : [!0]
}
const jt = t => t.key || "";
function Nn(t) {
    const e = [];
    return T.Children.forEach(t, n => {
        T.isValidElement(n) && e.push(n)
    }
    ),
    e
}
const Yu = ({children: t, custom: e, initial: n=!0, onExitComplete: s, presenceAffectsLayout: i=!0, mode: o="sync", propagate: r=!1, anchorX: a="left", root: l}) => {
    const [c,u] = wi(r)
      , h = T.useMemo( () => Nn(t), [t])
      , f = r && !c ? [] : h.map(jt)
      , d = T.useRef(!0)
      , m = T.useRef(h)
      , p = je( () => new Map)
      , [v,g] = T.useState(h)
      , [x,y] = T.useState(h);
    ks( () => {
        d.current = !1,
        m.current = h;
        for (let A = 0; A < x.length; A++) {
            const V = jt(x[A]);
            f.includes(V) ? p.delete(V) : p.get(V) !== !0 && p.set(V, !1)
        }
    }
    , [x, f.length, f.join("-")]);
    const w = [];
    if (h !== v) {
        let A = [...h];
        for (let V = 0; V < x.length; V++) {
            const b = x[V]
              , L = jt(b);
            f.includes(L) || (A.splice(V, 0, b),
            w.push(b))
        }
        return o === "wait" && w.length && (A = w),
        y(Nn(A)),
        g(h),
        null
    }
    const {forceRender: P} = T.useContext(Ie);
    return z.jsx(z.Fragment, {
        children: x.map(A => {
            const V = jt(A)
              , b = r && !c ? !1 : h === x || f.includes(V)
              , L = () => {
                if (p.has(V))
                    p.set(V, !0);
                else
                    return;
                let B = !0;
                p.forEach(q => {
                    q || (B = !1)
                }
                ),
                B && (P == null || P(),
                y(m.current),
                r && (u == null || u()),
                s && s())
            }
            ;
            return z.jsx(ua, {
                isPresent: b,
                initial: !d.current || n ? void 0 : !1,
                custom: e,
                presenceAffectsLayout: i,
                mode: o,
                root: l,
                onExitComplete: b ? void 0 : L,
                anchorX: a,
                children: A
            }, V)
        }
        )
    })
}
  , Ai = T.createContext({
    strict: !1
})
  , Un = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , dt = {};
for (const t in Un)
    dt[t] = {
        isEnabled: e => Un[t].some(n => !!e[n])
    };
function ha(t) {
    for (const e in t)
        dt[e] = {
            ...dt[e],
            ...t[e]
        }
}
const fa = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function zt(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || fa.has(t)
}
let Vi = t => !zt(t);
function da(t) {
    typeof t == "function" && (Vi = e => e.startsWith("on") ? !zt(e) : t(e))
}
try {
    da(require("@emotion/is-prop-valid").default)
} catch {}
function ma(t, e, n) {
    const s = {};
    for (const i in t)
        i === "values" && typeof t.values == "object" || (Vi(i) || n === !0 && zt(i) || !e && !zt(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
    return s
}
const qt = T.createContext({});
function Zt(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
function Ct(t) {
    return typeof t == "string" || Array.isArray(t)
}
const an = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , ln = ["initial", ...an];
function Jt(t) {
    return Zt(t.animate) || ln.some(e => Ct(t[e]))
}
function Ci(t) {
    return !!(Jt(t) || t.variants)
}
function pa(t, e) {
    if (Jt(t)) {
        const {initial: n, animate: s} = t;
        return {
            initial: n === !1 || Ct(n) ? n : void 0,
            animate: Ct(s) ? s : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function ga(t) {
    const {initial: e, animate: n} = pa(t, T.useContext(qt));
    return T.useMemo( () => ({
        initial: e,
        animate: n
    }), [Wn(e), Wn(n)])
}
function Wn(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const Mt = {};
function ya(t) {
    for (const e in t)
        Mt[e] = t[e],
        He(e) && (Mt[e].isCSSVariable = !0)
}
function Mi(t, {layout: e, layoutId: n}) {
    return gt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Mt[t] || t === "opacity")
}
const va = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Ta = pt.length;
function xa(t, e, n) {
    let s = ""
      , i = !0;
    for (let o = 0; o < Ta; o++) {
        const r = pt[o]
          , a = t[r];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0,
        !l || n) {
            const c = vi(a, nn[r]);
            if (!l) {
                i = !1;
                const u = va[r] || r;
                s += `${u}(${c}) `
            }
            n && (e[r] = c)
        }
    }
    return s = s.trim(),
    n ? s = n(e, i ? "" : s) : i && (s = "none"),
    s
}
function un(t, e, n) {
    const {style: s, vars: i, transformOrigin: o} = t;
    let r = !1
      , a = !1;
    for (const l in e) {
        const c = e[l];
        if (gt.has(l)) {
            r = !0;
            continue
        } else if (He(l)) {
            i[l] = c;
            continue
        } else {
            const u = vi(c, nn[l]);
            l.startsWith("origin") ? (a = !0,
            o[l] = u) : s[l] = u
        }
    }
    if (e.transform || (r || n ? s.transform = xa(e, t.transform, n) : s.transform && (s.transform = "none")),
    a) {
        const {originX: l="50%", originY: c="50%", originZ: u=0} = o;
        s.transformOrigin = `${l} ${c} ${u}`
    }
}
const cn = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Di(t, e, n) {
    for (const s in e)
        !F(e[s]) && !Mi(s, n) && (t[s] = e[s])
}
function Pa({transformTemplate: t}, e) {
    return T.useMemo( () => {
        const n = cn();
        return un(n, e, t),
        Object.assign({}, n.vars, n.style)
    }
    , [e])
}
function Sa(t, e) {
    const n = t.style || {}
      , s = {};
    return Di(s, n, t),
    Object.assign(s, Pa(t, e)),
    s
}
function ba(t, e) {
    const n = {}
      , s = Sa(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1,
    s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none",
    s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
    n.style = s,
    n
}
const wa = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Aa = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Va(t, e, n=1, s=0, i=!0) {
    t.pathLength = 1;
    const o = i ? wa : Aa;
    t[o.offset] = S.transform(-s);
    const r = S.transform(e)
      , a = S.transform(n);
    t[o.array] = `${r} ${a}`
}
function Ei(t, {attrX: e, attrY: n, attrScale: s, pathLength: i, pathSpacing: o=1, pathOffset: r=0, ...a}, l, c, u) {
    if (un(t, a, c),
    l) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: h, style: f} = t;
    h.transform && (f.transform = h.transform,
    delete h.transform),
    (f.transform || h.transformOrigin) && (f.transformOrigin = h.transformOrigin ?? "50% 50%",
    delete h.transformOrigin),
    f.transform && (f.transformBox = (u == null ? void 0 : u.transformBox) ?? "fill-box",
    delete h.transformBox),
    e !== void 0 && (h.x = e),
    n !== void 0 && (h.y = n),
    s !== void 0 && (h.scale = s),
    i !== void 0 && Va(h, i, o, r, !1)
}
const Ri = () => ({
    ...cn(),
    attrs: {}
})
  , Li = t => typeof t == "string" && t.toLowerCase() === "svg";
function Ca(t, e, n, s) {
    const i = T.useMemo( () => {
        const o = Ri();
        return Ei(o, e, Li(s), t.transformTemplate, t.style),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const o = {};
        Di(o, t.style, t),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
const Ma = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function hn(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(Ma.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function Da(t, e, n, {latestValues: s}, i, o=!1) {
    const a = (hn(t) ? Ca : ba)(e, s, i, t)
      , l = ma(e, typeof t == "string", o)
      , c = t !== T.Fragment ? {
        ...l,
        ...a,
        ref: n
    } : {}
      , {children: u} = e
      , h = T.useMemo( () => F(u) ? u.get() : u, [u]);
    return T.createElement(t, {
        ...c,
        children: h
    })
}
function Kn(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach( (n, s) => {
        e[0][s] = n.get(),
        e[1][s] = n.getVelocity()
    }
    ),
    e
}
function fn(t, e, n, s) {
    if (typeof e == "function") {
        const [i,o] = Kn(s);
        e = e(n !== void 0 ? n : t.custom, i, o)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function") {
        const [i,o] = Kn(s);
        e = e(n !== void 0 ? n : t.custom, i, o)
    }
    return e
}
function Wt(t) {
    return F(t) ? t.get() : t
}
function Ea({scrapeMotionValuesFromProps: t, createRenderState: e}, n, s, i) {
    return {
        latestValues: Ra(n, s, i, t),
        renderState: e()
    }
}
function Ra(t, e, n, s) {
    const i = {}
      , o = s(t, {});
    for (const f in o)
        i[f] = Wt(o[f]);
    let {initial: r, animate: a} = t;
    const l = Jt(t)
      , c = Ci(t);
    e && c && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial),
    a === void 0 && (a = e.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || r === !1;
    const h = u ? a : r;
    if (h && typeof h != "boolean" && !Zt(h)) {
        const f = Array.isArray(h) ? h : [h];
        for (let d = 0; d < f.length; d++) {
            const m = fn(t, f[d]);
            if (m) {
                const {transitionEnd: p, transition: v, ...g} = m;
                for (const x in g) {
                    let y = g[x];
                    if (Array.isArray(y)) {
                        const w = u ? y.length - 1 : 0;
                        y = y[w]
                    }
                    y !== null && (i[x] = y)
                }
                for (const x in p)
                    i[x] = p[x]
            }
        }
    }
    return i
}
const ki = t => (e, n) => {
    const s = T.useContext(qt)
      , i = T.useContext(Yt)
      , o = () => Ea(t, e, s, i);
    return n ? o() : je(o)
}
;
function dn(t, e, n) {
    var o;
    const {style: s} = t
      , i = {};
    for (const r in s)
        (F(s[r]) || e.style && F(e.style[r]) || Mi(r, t) || ((o = n == null ? void 0 : n.getValue(r)) == null ? void 0 : o.liveStyle) !== void 0) && (i[r] = s[r]);
    return i
}
const La = ki({
    scrapeMotionValuesFromProps: dn,
    createRenderState: cn
});
function Fi(t, e, n) {
    const s = dn(t, e, n);
    for (const i in t)
        if (F(t[i]) || F(e[i])) {
            const o = pt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            s[o] = t[i]
        }
    return s
}
const ka = ki({
    scrapeMotionValuesFromProps: Fi,
    createRenderState: Ri
})
  , Fa = Symbol.for("motionComponentSymbol");
function lt(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function Ba(t, e, n) {
    return T.useCallback(s => {
        s && t.onMount && t.onMount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == "function" ? n(s) : lt(n) && (n.current = s))
    }
    , [e])
}
const mn = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , Ia = "framerAppearId"
  , Bi = "data-" + mn(Ia)
  , Ii = T.createContext({});
function ja(t, e, n, s, i) {
    var p, v;
    const {visualElement: o} = T.useContext(qt)
      , r = T.useContext(Ai)
      , a = T.useContext(Yt)
      , l = T.useContext(on).reducedMotion
      , c = T.useRef(null);
    s = s || r.renderer,
    !c.current && s && (c.current = s(t, {
        visualState: e,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = c.current
      , h = T.useContext(Ii);
    u && !u.projection && i && (u.type === "html" || u.type === "svg") && Oa(c.current, n, i, h);
    const f = T.useRef(!1);
    T.useInsertionEffect( () => {
        u && f.current && u.update(n, a)
    }
    );
    const d = n[Bi]
      , m = T.useRef(!!d && !((p = window.MotionHandoffIsComplete) != null && p.call(window, d)) && ((v = window.MotionHasOptimisedAnimation) == null ? void 0 : v.call(window, d)));
    return ks( () => {
        u && (f.current = !0,
        window.MotionIsMounted = !0,
        u.updateFeatures(),
        u.scheduleRenderMicrotask(),
        m.current && u.animationState && u.animationState.animateChanges())
    }
    ),
    T.useEffect( () => {
        u && (!m.current && u.animationState && u.animationState.animateChanges(),
        m.current && (queueMicrotask( () => {
            var g;
            (g = window.MotionHandoffMarkAsComplete) == null || g.call(window, d)
        }
        ),
        m.current = !1))
    }
    ),
    u
}
function Oa(t, e, n, s) {
    const {layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: c, layoutCrossfade: u} = e;
    t.projection = new n(t.latestValues,e["data-framer-portal-id"] ? void 0 : ji(t.parent)),
    t.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!r || a && lt(a),
        visualElement: t,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: s,
        crossfade: u,
        layoutScroll: l,
        layoutRoot: c
    })
}
function ji(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : ji(t.parent)
}
function ae(t, {forwardMotionProps: e=!1}={}, n, s) {
    n && ha(n);
    const i = hn(t) ? ka : La;
    function o(a, l) {
        let c;
        const u = {
            ...T.useContext(on),
            ...a,
            layoutId: Na(a)
        }
          , {isStatic: h} = u
          , f = ga(a)
          , d = i(a, h);
        if (!h && Oe) {
            Ua();
            const m = Wa(u);
            c = m.MeasureLayout,
            f.visualElement = ja(t, d, u, s, m.ProjectionNode)
        }
        return z.jsxs(qt.Provider, {
            value: f,
            children: [c && f.visualElement ? z.jsx(c, {
                visualElement: f.visualElement,
                ...u
            }) : null, Da(t, a, Ba(d, f.visualElement, l), d, h, e)]
        })
    }
    o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
    const r = T.forwardRef(o);
    return r[Fa] = t,
    r
}
function Na({layoutId: t}) {
    const e = T.useContext(Ie).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function Ua(t, e) {
    T.useContext(Ai).strict
}
function Wa(t) {
    const {drag: e, layout: n} = dt;
    if (!e && !n)
        return {};
    const s = {
        ...e,
        ...n
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}
function Ka(t, e) {
    if (typeof Proxy > "u")
        return ae;
    const n = new Map
      , s = (o, r) => ae(o, r, t, e)
      , i = (o, r) => s(o, r);
    return new Proxy(i,{
        get: (o, r) => r === "create" ? s : (n.has(r) || n.set(r, ae(r, void 0, t, e)),
        n.get(r))
    })
}
function Oi({top: t, left: e, right: n, bottom: s}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: s
        }
    }
}
function $a({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function Ga(t, e) {
    if (!e)
        return t;
    const n = e({
        x: t.left,
        y: t.top
    })
      , s = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: s.y,
        right: s.x
    }
}
function le(t) {
    return t === void 0 || t === 1
}
function Me({scale: t, scaleX: e, scaleY: n}) {
    return !le(t) || !le(e) || !le(n)
}
function nt(t) {
    return Me(t) || Ni(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function Ni(t) {
    return $n(t.x) || $n(t.y)
}
function $n(t) {
    return t && t !== "0%"
}
function Xt(t, e, n) {
    const s = t - n
      , i = e * s;
    return n + i
}
function Gn(t, e, n, s, i) {
    return i !== void 0 && (t = Xt(t, i, s)),
    Xt(t, n, s) + e
}
function De(t, e=0, n=1, s, i) {
    t.min = Gn(t.min, e, n, s, i),
    t.max = Gn(t.max, e, n, s, i)
}
function Ui(t, {x: e, y: n}) {
    De(t.x, e.translate, e.scale, e.originPoint),
    De(t.y, n.translate, n.scale, n.originPoint)
}
const Hn = .999999999999
  , _n = 1.0000000000001;
function Ha(t, e, n, s=!1) {
    const i = n.length;
    if (!i)
        return;
    e.x = e.y = 1;
    let o, r;
    for (let a = 0; a < i; a++) {
        o = n[a],
        r = o.projectionDelta;
        const {visualElement: l} = o.options;
        l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && ct(t, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        r && (e.x *= r.x.scale,
        e.y *= r.y.scale,
        Ui(t, r)),
        s && nt(o.latestValues) && ct(t, o.latestValues))
    }
    e.x < _n && e.x > Hn && (e.x = 1),
    e.y < _n && e.y > Hn && (e.y = 1)
}
function ut(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function zn(t, e, n, s, i=.5) {
    const o = M(t.min, t.max, i);
    De(t, e, n, o, s)
}
function ct(t, e) {
    zn(t.x, e.x, e.scaleX, e.scale, e.originX),
    zn(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function Wi(t, e) {
    return Oi(Ga(t.getBoundingClientRect(), e))
}
function _a(t, e, n) {
    const s = Wi(t, n)
      , {scroll: i} = e;
    return i && (ut(s.x, i.offset.x),
    ut(s.y, i.offset.y)),
    s
}
const Xn = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , ht = () => ({
    x: Xn(),
    y: Xn()
})
  , Yn = () => ({
    min: 0,
    max: 0
})
  , E = () => ({
    x: Yn(),
    y: Yn()
})
  , Ee = {
    current: null
}
  , Ki = {
    current: !1
};
function za() {
    if (Ki.current = !0,
    !!Oe)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => Ee.current = t.matches;
            t.addEventListener("change", e),
            e()
        } else
            Ee.current = !1
}
const Xa = new WeakMap;
function Ya(t, e, n) {
    for (const s in e) {
        const i = e[s]
          , o = n[s];
        if (F(i))
            t.addValue(s, i);
        else if (F(o))
            t.addValue(s, ft(i, {
                owner: t
            }));
        else if (o !== i)
            if (t.hasValue(s)) {
                const r = t.getValue(s);
                r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i)
            } else {
                const r = t.getStaticValue(s);
                t.addValue(s, ft(r !== void 0 ? r : i, {
                    owner: t
                }))
            }
    }
    for (const s in n)
        e[s] === void 0 && t.removeValue(s);
    return e
}
const qn = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class qa {
    scrapeMotionValuesFromProps(e, n, s) {
        return {}
    }
    constructor({parent: e, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r}, a={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = tn,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const f = O.now();
            this.renderScheduledAt < f && (this.renderScheduledAt = f,
            C.render(this.render, !1, !0))
        }
        ;
        const {latestValues: l, renderState: c} = r;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = c,
        this.parent = e,
        this.props = n,
        this.presenceContext = s,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = a,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = Jt(n),
        this.isVariantNode = Ci(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: u, ...h} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const f in h) {
            const d = h[f];
            l[f] !== void 0 && F(d) && d.set(l[f])
        }
    }
    mount(e) {
        this.current = e,
        Xa.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, s) => this.bindToMotionValue(s, n)),
        Ki.current || za(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ee.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        J(this.notifyUpdate),
        J(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features) {
            const n = this.features[e];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, n) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const s = gt.has(e);
        s && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", r => {
            this.latestValues[e] = r,
            this.props.onUpdate && C.preRender(this.notifyUpdate),
            s && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)),
        this.valueSubscriptions.set(e, () => {
            i(),
            o && o(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in dt) {
            const n = dt[e];
            if (!n)
                continue;
            const {isEnabled: s, Feature: i} = n;
            if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)),
            this.features[e]) {
                const o = this.features[e];
                o.isMounted ? o.update() : (o.mount(),
                o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let s = 0; s < qn.length; s++) {
            const i = qn[s];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const o = "on" + i
              , r = e[o];
            r && (this.propEventSubscriptions[i] = this.on(i, r))
        }
        this.prevMotionValues = Ya(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(e),
            () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        const s = this.values.get(e);
        n !== s && (s && this.removeValue(e),
        this.bindToMotionValue(e, n),
        this.values.set(e, n),
        this.latestValues[e] = n.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let s = this.values.get(e);
        return s === void 0 && n !== void 0 && (s = ft(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(e, s)),
        s
    }
    readValue(e, n) {
        let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
        return s != null && (typeof s == "string" && (Fs(s) || Is(s)) ? s = parseFloat(s) : !oa(s) && Q.test(n) && (s = yi(e, n)),
        this.setBaseTarget(e, F(s) ? s.get() : s)),
        F(s) ? s.get() : s
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var o;
        const {initial: n} = this.props;
        let s;
        if (typeof n == "string" || typeof n == "object") {
            const r = fn(this.props, n, (o = this.presenceContext) == null ? void 0 : o.custom);
            r && (s = r[e])
        }
        if (n && s !== void 0)
            return s;
        const i = this.getBaseTargetFromProps(this.props, e);
        return i !== void 0 && !F(i) ? i : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new Ke),
        this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
    scheduleRenderMicrotask() {
        sn.render(this.render)
    }
}
class $i extends qa {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Xo
    }
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {vars: n, style: s}) {
        delete n[e],
        delete s[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        F(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function Gi(t, {style: e, vars: n}, s, i) {
    const o = t.style;
    let r;
    for (r in e)
        o[r] = e[r];
    i == null || i.applyProjectionStyles(o, s);
    for (r in n)
        o.setProperty(r, n[r])
}
function Za(t) {
    return window.getComputedStyle(t)
}
class Ja extends $i {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Gi
    }
    readValueFromInstance(e, n) {
        var s;
        if (gt.has(n))
            return (s = this.projection) != null && s.isProjecting ? Pe(n) : fo(e, n);
        {
            const i = Za(e)
              , o = (He(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: n}) {
        return Wi(e, n)
    }
    build(e, n, s) {
        un(e, n, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return dn(e, n, s)
    }
}
const Hi = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Qa(t, e, n, s) {
    Gi(t, e, void 0, s);
    for (const i in e.attrs)
        t.setAttribute(Hi.has(i) ? i : mn(i), e.attrs[i])
}
class tl extends $i {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = E
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (gt.has(n)) {
            const s = gi(n);
            return s && s.default || 0
        }
        return n = Hi.has(n) ? n : mn(n),
        e.getAttribute(n)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return Fi(e, n, s)
    }
    build(e, n, s) {
        Ei(e, n, this.isSVGTag, s.transformTemplate, s.style)
    }
    renderInstance(e, n, s, i) {
        Qa(e, n, s, i)
    }
    mount(e) {
        this.isSVGTag = Li(e.tagName),
        super.mount(e)
    }
}
const el = (t, e) => hn(t) ? new tl(e) : new Ja(e,{
    allowProjection: t !== T.Fragment
});
function Dt(t, e, n) {
    const s = t.getProps();
    return fn(s, e, n !== void 0 ? n : s.custom, t)
}
const Re = t => Array.isArray(t);
function nl(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ft(n))
}
function sl(t) {
    return Re(t) ? t[t.length - 1] || 0 : t
}
function il(t, e) {
    const n = Dt(t, e);
    let {transitionEnd: s={}, transition: i={}, ...o} = n || {};
    o = {
        ...o,
        ...s
    };
    for (const r in o) {
        const a = sl(o[r]);
        nl(t, r, a)
    }
}
function rl(t) {
    return !!(F(t) && t.add)
}
function Le(t, e) {
    const n = t.getValue("willChange");
    if (rl(n))
        return n.add(e);
    if (!n && Y.WillChange) {
        const s = new Y.WillChange("auto");
        t.addValue("willChange", s),
        s.add(e)
    }
}
function _i(t) {
    return t.props[Bi]
}
const ol = t => t !== null;
function al(t, {repeat: e, repeatType: n="loop"}, s) {
    const i = t.filter(ol)
      , o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
    return !o || s === void 0 ? i[o] : s
}
const ll = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , ul = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , cl = {
    type: "keyframes",
    duration: .8
}
  , hl = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , fl = (t, {keyframes: e}) => e.length > 2 ? cl : gt.has(t) ? t.startsWith("scale") ? ul(e[1]) : ll : hl;
function dl({when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: c, ...u}) {
    return !!Object.keys(u).length
}
const pn = (t, e, n, s={}, i, o) => r => {
    const a = en(s, t) || {}
      , l = a.delay || s.delay || 0;
    let {elapsed: c=0} = s;
    c = c - $(l);
    const u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: f => {
            e.set(f),
            a.onUpdate && a.onUpdate(f)
        }
        ,
        onComplete: () => {
            r(),
            a.onComplete && a.onComplete()
        }
        ,
        name: t,
        motionValue: e,
        element: o ? void 0 : i
    };
    dl(a) || Object.assign(u, fl(t, u)),
    u.duration && (u.duration = $(u.duration)),
    u.repeatDelay && (u.repeatDelay = $(u.repeatDelay)),
    u.from !== void 0 && (u.keyframes[0] = u.from);
    let h = !1;
    if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (Ve(u),
    u.delay === 0 && (h = !0)),
    (Y.instantAnimations || Y.skipAnimations) && (h = !0,
    Ve(u),
    u.delay = 0),
    u.allowFlatten = !a.type && !a.ease,
    h && !o && e.get() !== void 0) {
        const f = al(u.keyframes, a);
        if (f !== void 0) {
            C.update( () => {
                u.onUpdate(f),
                u.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new Qe(u) : new Io(u)
}
;
function ml({protectedKeys: t, needsAnimating: e}, n) {
    const s = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1,
    s
}
function zi(t, e, {delay: n=0, transitionOverride: s, type: i}={}) {
    let {transition: o=t.getDefaultTransition(), transitionEnd: r, ...a} = e;
    s && (o = s);
    const l = []
      , c = i && t.animationState && t.animationState.getState()[i];
    for (const u in a) {
        const h = t.getValue(u, t.latestValues[u] ?? null)
          , f = a[u];
        if (f === void 0 || c && ml(c, u))
            continue;
        const d = {
            delay: n,
            ...en(o || {}, u)
        }
          , m = h.get();
        if (m !== void 0 && !h.isAnimating && !Array.isArray(f) && f === m && !d.velocity)
            continue;
        let p = !1;
        if (window.MotionHandoffAnimation) {
            const g = _i(t);
            if (g) {
                const x = window.MotionHandoffAnimation(g, u, C);
                x !== null && (d.startTime = x,
                p = !0)
            }
        }
        Le(t, u),
        h.start(pn(u, h, f, t.shouldReduceMotion && di.has(u) ? {
            type: !1
        } : d, t, p));
        const v = h.animation;
        v && l.push(v)
    }
    return r && Promise.all(l).then( () => {
        C.update( () => {
            r && il(t, r)
        }
        )
    }
    ),
    l
}
function ke(t, e, n={}) {
    var l;
    const s = Dt(t, e, n.type === "exit" ? (l = t.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: i=t.getDefaultTransition() || {}} = s || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = s ? () => Promise.all(zi(t, s, n)) : () => Promise.resolve()
      , r = t.variantChildren && t.variantChildren.size ? (c=0) => {
        const {delayChildren: u=0, staggerChildren: h, staggerDirection: f} = i;
        return pl(t, e, c, u, h, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = i;
    if (a) {
        const [c,u] = a === "beforeChildren" ? [o, r] : [r, o];
        return c().then( () => u())
    } else
        return Promise.all([o(), r(n.delay)])
}
function pl(t, e, n=0, s=0, i=0, o=1, r) {
    const a = []
      , l = t.variantChildren.size
      , c = (l - 1) * i
      , u = typeof s == "function"
      , h = u ? f => s(f, l) : o === 1 ? (f=0) => f * i : (f=0) => c - f * i;
    return Array.from(t.variantChildren).sort(gl).forEach( (f, d) => {
        f.notify("AnimationStart", e),
        a.push(ke(f, e, {
            ...r,
            delay: n + (u ? 0 : s) + h(d)
        }).then( () => f.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(a)
}
function gl(t, e) {
    return t.sortNodePosition(e)
}
function yl(t, e, n={}) {
    t.notify("AnimationStart", e);
    let s;
    if (Array.isArray(e)) {
        const i = e.map(o => ke(t, o, n));
        s = Promise.all(i)
    } else if (typeof e == "string")
        s = ke(t, e, n);
    else {
        const i = typeof e == "function" ? Dt(t, e, n.custom) : e;
        s = Promise.all(zi(t, i, n))
    }
    return s.then( () => {
        t.notify("AnimationComplete", e)
    }
    )
}
function Xi(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let s = 0; s < n; s++)
        if (e[s] !== t[s])
            return !1;
    return !0
}
const vl = ln.length;
function Yi(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const n = t.parent ? Yi(t.parent) || {} : {};
        return t.props.initial !== void 0 && (n.initial = t.props.initial),
        n
    }
    const e = {};
    for (let n = 0; n < vl; n++) {
        const s = ln[n]
          , i = t.props[s];
        (Ct(i) || i === !1) && (e[s] = i)
    }
    return e
}
const Tl = [...an].reverse()
  , xl = an.length;
function Pl(t) {
    return e => Promise.all(e.map( ({animation: n, options: s}) => yl(t, n, s)))
}
function Sl(t) {
    let e = Pl(t)
      , n = Zn()
      , s = !0;
    const i = l => (c, u) => {
        var f;
        const h = Dt(t, u, l === "exit" ? (f = t.presenceContext) == null ? void 0 : f.custom : void 0);
        if (h) {
            const {transition: d, transitionEnd: m, ...p} = h;
            c = {
                ...c,
                ...p,
                ...m
            }
        }
        return c
    }
    ;
    function o(l) {
        e = l(t)
    }
    function r(l) {
        const {props: c} = t
          , u = Yi(t.parent) || {}
          , h = []
          , f = new Set;
        let d = {}
          , m = 1 / 0;
        for (let v = 0; v < xl; v++) {
            const g = Tl[v]
              , x = n[g]
              , y = c[g] !== void 0 ? c[g] : u[g]
              , w = Ct(y)
              , P = g === l ? x.isActive : null;
            P === !1 && (m = v);
            let A = y === u[g] && y !== c[g] && w;
            if (A && s && t.manuallyAnimateOnMount && (A = !1),
            x.protectedKeys = {
                ...d
            },
            !x.isActive && P === null || !y && !x.prevProp || Zt(y) || typeof y == "boolean")
                continue;
            const V = bl(x.prevProp, y);
            let b = V || g === l && x.isActive && !A && w || v > m && w
              , L = !1;
            const B = Array.isArray(y) ? y : [y];
            let q = B.reduce(i(g), {});
            P === !1 && (q = {});
            const {prevResolvedValues: gn={}} = x
              , cr = {
                ...gn,
                ...q
            }
              , yn = I => {
                b = !0,
                f.has(I) && (L = !0,
                f.delete(I)),
                x.needsAnimating[I] = !0;
                const _ = t.getValue(I);
                _ && (_.liveStyle = !1)
            }
            ;
            for (const I in cr) {
                const _ = q[I]
                  , Qt = gn[I];
                if (d.hasOwnProperty(I))
                    continue;
                let te = !1;
                Re(_) && Re(Qt) ? te = !Xi(_, Qt) : te = _ !== Qt,
                te ? _ != null ? yn(I) : f.add(I) : _ !== void 0 && f.has(I) ? yn(I) : x.protectedKeys[I] = !0
            }
            x.prevProp = y,
            x.prevResolvedValues = q,
            x.isActive && (d = {
                ...d,
                ...q
            }),
            s && t.blockInitialAnimation && (b = !1),
            b && (!(A && V) || L) && h.push(...B.map(I => ({
                animation: I,
                options: {
                    type: g
                }
            })))
        }
        if (f.size) {
            const v = {};
            if (typeof c.initial != "boolean") {
                const g = Dt(t, Array.isArray(c.initial) ? c.initial[0] : c.initial);
                g && g.transition && (v.transition = g.transition)
            }
            f.forEach(g => {
                const x = t.getBaseTarget(g)
                  , y = t.getValue(g);
                y && (y.liveStyle = !0),
                v[g] = x ?? null
            }
            ),
            h.push({
                animation: v
            })
        }
        let p = !!h.length;
        return s && (c.initial === !1 || c.initial === c.animate) && !t.manuallyAnimateOnMount && (p = !1),
        s = !1,
        p ? e(h) : Promise.resolve()
    }
    function a(l, c) {
        var h;
        if (n[l].isActive === c)
            return Promise.resolve();
        (h = t.variantChildren) == null || h.forEach(f => {
            var d;
            return (d = f.animationState) == null ? void 0 : d.setActive(l, c)
        }
        ),
        n[l].isActive = c;
        const u = r(l);
        for (const f in n)
            n[f].protectedKeys = {};
        return u
    }
    return {
        animateChanges: r,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = Zn(),
            s = !0
        }
    }
}
function bl(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !Xi(e, t) : !1
}
function et(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Zn() {
    return {
        animate: et(!0),
        whileInView: et(),
        whileHover: et(),
        whileTap: et(),
        whileDrag: et(),
        whileFocus: et(),
        exit: et()
    }
}
class tt {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
class wl extends tt {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = Sl(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        Zt(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(),
        (e = this.unmountControls) == null || e.call(this)
    }
}
let Al = 0;
class Vl extends tt {
    constructor() {
        super(...arguments),
        this.id = Al++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: n} = this.node.presenceContext
          , {isPresent: s} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === s)
            return;
        const i = this.node.animationState.setActive("exit", !e);
        n && !e && i.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: e, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const Cl = {
    animation: {
        Feature: wl
    },
    exit: {
        Feature: Vl
    }
};
function Et(t, e, n, s={
    passive: !0
}) {
    return t.addEventListener(e, n, s),
    () => t.removeEventListener(e, n)
}
function Ft(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const Ml = t => e => rn(e) && t(e, Ft(e));
function Pt(t, e, n, s) {
    return Et(t, e, Ml(n), s)
}
const qi = 1e-4
  , Dl = 1 - qi
  , El = 1 + qi
  , Zi = .01
  , Rl = 0 - Zi
  , Ll = 0 + Zi;
function j(t) {
    return t.max - t.min
}
function kl(t, e, n) {
    return Math.abs(t - e) <= n
}
function Jn(t, e, n, s=.5) {
    t.origin = s,
    t.originPoint = M(e.min, e.max, t.origin),
    t.scale = j(n) / j(e),
    t.translate = M(n.min, n.max, t.origin) - t.originPoint,
    (t.scale >= Dl && t.scale <= El || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= Rl && t.translate <= Ll || isNaN(t.translate)) && (t.translate = 0)
}
function St(t, e, n, s) {
    Jn(t.x, e.x, n.x, s ? s.originX : void 0),
    Jn(t.y, e.y, n.y, s ? s.originY : void 0)
}
function Qn(t, e, n) {
    t.min = n.min + e.min,
    t.max = t.min + j(e)
}
function Fl(t, e, n) {
    Qn(t.x, e.x, n.x),
    Qn(t.y, e.y, n.y)
}
function ts(t, e, n) {
    t.min = e.min - n.min,
    t.max = t.min + j(e)
}
function bt(t, e, n) {
    ts(t.x, e.x, n.x),
    ts(t.y, e.y, n.y)
}
function U(t) {
    return [t("x"), t("y")]
}
const Ji = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , es = (t, e) => Math.abs(t - e);
function Bl(t, e) {
    const n = es(t.x, e.x)
      , s = es(t.y, e.y);
    return Math.sqrt(n ** 2 + s ** 2)
}
class Qi {
    constructor(e, n, {transformPagePoint: s, contextWindow: i=window, dragSnapToOrigin: o=!1, distanceThreshold: r=3}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const f = ce(this.lastMoveEventInfo, this.history)
              , d = this.startEvent !== null
              , m = Bl(f.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!d && !m)
                return;
            const {point: p} = f
              , {timestamp: v} = k;
            this.history.push({
                ...p,
                timestamp: v
            });
            const {onStart: g, onMove: x} = this.handlers;
            d || (g && g(this.lastMoveEvent, f),
            this.startEvent = this.lastMoveEvent),
            x && x(this.lastMoveEvent, f)
        }
        ,
        this.handlePointerMove = (f, d) => {
            this.lastMoveEvent = f,
            this.lastMoveEventInfo = ue(d, this.transformPagePoint),
            C.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (f, d) => {
            this.end();
            const {onEnd: m, onSessionEnd: p, resumeAnimation: v} = this.handlers;
            if (this.dragSnapToOrigin && v && v(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const g = ce(f.type === "pointercancel" ? this.lastMoveEventInfo : ue(d, this.transformPagePoint), this.history);
            this.startEvent && m && m(f, g),
            p && p(f, g)
        }
        ,
        !rn(e))
            return;
        this.dragSnapToOrigin = o,
        this.handlers = n,
        this.transformPagePoint = s,
        this.distanceThreshold = r,
        this.contextWindow = i || window;
        const a = Ft(e)
          , l = ue(a, this.transformPagePoint)
          , {point: c} = l
          , {timestamp: u} = k;
        this.history = [{
            ...c,
            timestamp: u
        }];
        const {onSessionStart: h} = n;
        h && h(e, ce(l, this.history)),
        this.removeListeners = Rt(Pt(this.contextWindow, "pointermove", this.handlePointerMove), Pt(this.contextWindow, "pointerup", this.handlePointerUp), Pt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        J(this.updatePoint)
    }
}
function ue(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function ns(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function ce({point: t}, e) {
    return {
        point: t,
        delta: ns(t, tr(e)),
        offset: ns(t, Il(e)),
        velocity: jl(e, .1)
    }
}
function Il(t) {
    return t[0]
}
function tr(t) {
    return t[t.length - 1]
}
function jl(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , s = null;
    const i = tr(t);
    for (; n >= 0 && (s = t[n],
    !(i.timestamp - s.timestamp > $(e))); )
        n--;
    if (!s)
        return {
            x: 0,
            y: 0
        };
    const o = G(i.timestamp - s.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const r = {
        x: (i.x - s.x) / o,
        y: (i.y - s.y) / o
    };
    return r.x === 1 / 0 && (r.x = 0),
    r.y === 1 / 0 && (r.y = 0),
    r
}
function Ol(t, {min: e, max: n}, s) {
    return e !== void 0 && t < e ? t = s ? M(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? M(n, t, s.max) : Math.min(t, n)),
    t
}
function ss(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}
function Nl(t, {top: e, left: n, bottom: s, right: i}) {
    return {
        x: ss(t.x, n, i),
        y: ss(t.y, e, s)
    }
}
function is(t, e) {
    let n = e.min - t.min
      , s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,s] = [s, n]),
    {
        min: n,
        max: s
    }
}
function Ul(t, e) {
    return {
        x: is(t.x, e.x),
        y: is(t.y, e.y)
    }
}
function Wl(t, e) {
    let n = .5;
    const s = j(t)
      , i = j(e);
    return i > s ? n = wt(e.min, e.max - s, t.min) : s > i && (n = wt(t.min, t.max - i, e.min)),
    X(0, 1, n)
}
function Kl(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
}
const Fe = .35;
function $l(t=Fe) {
    return t === !1 ? t = 0 : t === !0 && (t = Fe),
    {
        x: rs(t, "left", "right"),
        y: rs(t, "top", "bottom")
    }
}
function rs(t, e, n) {
    return {
        min: os(t, e),
        max: os(t, n)
    }
}
function os(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const Gl = new WeakMap;
class Hl {
    constructor(e) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = E(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = e
    }
    start(e, {snapToCursor: n=!1, distanceThreshold: s}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const o = h => {
            const {dragSnapToOrigin: f} = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Ft(h).point)
        }
          , r = (h, f) => {
            const {drag: d, dragPropagation: m, onDragStart: p} = this.getProps();
            if (d && !m && (this.openDragLock && this.openDragLock(),
            this.openDragLock = Jo(d),
            !this.openDragLock))
                return;
            this.latestPointerEvent = h,
            this.latestPanInfo = f,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            U(g => {
                let x = this.getAxisMotionValue(g).get() || 0;
                if (H.test(x)) {
                    const {projection: y} = this.visualElement;
                    if (y && y.layout) {
                        const w = y.layout.layoutBox[g];
                        w && (x = j(w) * (parseFloat(x) / 100))
                    }
                }
                this.originPoint[g] = x
            }
            ),
            p && C.postRender( () => p(h, f)),
            Le(this.visualElement, "transform");
            const {animationState: v} = this.visualElement;
            v && v.setActive("whileDrag", !0)
        }
          , a = (h, f) => {
            this.latestPointerEvent = h,
            this.latestPanInfo = f;
            const {dragPropagation: d, dragDirectionLock: m, onDirectionLock: p, onDrag: v} = this.getProps();
            if (!d && !this.openDragLock)
                return;
            const {offset: g} = f;
            if (m && this.currentDirection === null) {
                this.currentDirection = _l(g),
                this.currentDirection !== null && p && p(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, g),
            this.updateAxis("y", f.point, g),
            this.visualElement.render(),
            v && v(h, f)
        }
          , l = (h, f) => {
            this.latestPointerEvent = h,
            this.latestPanInfo = f,
            this.stop(h, f),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , c = () => U(h => {
            var f;
            return this.getAnimationState(h) === "paused" && ((f = this.getAxisMotionValue(h).animation) == null ? void 0 : f.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new Qi(e,{
            onSessionStart: o,
            onStart: r,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: c
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            distanceThreshold: s,
            contextWindow: Ji(this.visualElement)
        })
    }
    stop(e, n) {
        const s = e || this.latestPointerEvent
          , i = n || this.latestPanInfo
          , o = this.isDragging;
        if (this.cancel(),
        !o || !i || !s)
            return;
        const {velocity: r} = i;
        this.startAnimation(r);
        const {onDragEnd: a} = this.getProps();
        a && C.postRender( () => a(s, i))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: n} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: s} = this.getProps();
        !s && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, s) {
        const {drag: i} = this.getProps();
        if (!s || !Ot(e, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(e);
        let r = this.originPoint[e] + s[e];
        this.constraints && this.constraints[e] && (r = Ol(r, this.constraints[e], this.elastic[e])),
        o.set(r)
    }
    resolveConstraints() {
        var o;
        const {dragConstraints: e, dragElastic: n} = this.getProps()
          , s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (o = this.visualElement.projection) == null ? void 0 : o.layout
          , i = this.constraints;
        e && lt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = Nl(s.layoutBox, e) : this.constraints = !1,
        this.elastic = $l(n),
        i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && U(r => {
            this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Kl(s.layoutBox[r], this.constraints[r]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
        if (!e || !lt(e))
            return !1;
        const s = e.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = _a(s, i.root, this.visualElement.getTransformPagePoint());
        let r = Ul(i.layout.layoutBox, o);
        if (n) {
            const a = n($a(r));
            this.hasMutatedConstraints = !!a,
            a && (r = Oi(a))
        }
        return r
    }
    startAnimation(e) {
        const {drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , c = U(u => {
            if (!Ot(u, n, this.currentDirection))
                return;
            let h = l && l[u] || {};
            r && (h = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6
              , d = i ? 40 : 1e7
              , m = {
                type: "inertia",
                velocity: s ? e[u] : 0,
                bounceStiffness: f,
                bounceDamping: d,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...h
            };
            return this.startAxisValueAnimation(u, m)
        }
        );
        return Promise.all(c).then(a)
    }
    startAxisValueAnimation(e, n) {
        const s = this.getAxisMotionValue(e);
        return Le(this.visualElement, e),
        s.start(pn(e, s, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        U(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        U(e => {
            var n;
            return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = `_drag${e.toUpperCase()}`
          , s = this.visualElement.getProps()
          , i = s[n];
        return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        U(n => {
            const {drag: s} = this.getProps();
            if (!Ot(n, s, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: r, max: a} = i.layout.layoutBox[n];
                o.set(e[n] - M(r, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: n} = this.getProps()
          , {projection: s} = this.visualElement;
        if (!lt(n) || !s || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        U(r => {
            const a = this.getAxisMotionValue(r);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[r] = Wl({
                    min: l,
                    max: l
                }, this.constraints[r])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        s.root && s.root.updateScroll(),
        s.updateLayout(),
        this.resolveConstraints(),
        U(r => {
            if (!Ot(r, e, null))
                return;
            const a = this.getAxisMotionValue(r)
              , {min: l, max: c} = this.constraints[r];
            a.set(M(l, c, i[r]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Gl.set(this.visualElement, this);
        const e = this.visualElement.current
          , n = Pt(e, "pointerdown", l => {
            const {drag: c, dragListener: u=!0} = this.getProps();
            c && u && this.start(l)
        }
        )
          , s = () => {
            const {dragConstraints: l} = this.getProps();
            lt(l) && l.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , o = i.addEventListener("measure", s);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        C.read(s);
        const r = Et(window, "resize", () => this.scalePositionWithinConstraints())
          , a = i.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: c}) => {
            this.isDragging && c && (U(u => {
                const h = this.getAxisMotionValue(u);
                h && (this.originPoint[u] += l[u].translate,
                h.set(h.get() + l[u].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            r(),
            n(),
            o(),
            a && a()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: s=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: r=Fe, dragMomentum: a=!0} = e;
        return {
            ...e,
            drag: n,
            dragDirectionLock: s,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: r,
            dragMomentum: a
        }
    }
}
function Ot(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}
function _l(t, e=10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
    n
}
class zl extends tt {
    constructor(e) {
        super(e),
        this.removeGroupControls = W,
        this.removeListeners = W,
        this.controls = new Hl(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || W
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const as = t => (e, n) => {
    t && C.postRender( () => t(e, n))
}
;
class Xl extends tt {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = W
    }
    onPointerDown(e) {
        this.session = new Qi(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Ji(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: as(e),
            onStart: as(n),
            onMove: s,
            onEnd: (o, r) => {
                delete this.session,
                i && C.postRender( () => i(o, r))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Pt(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Kt = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function ls(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const yt = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (S.test(t))
                t = parseFloat(t);
            else
                return t;
        const n = ls(t, e.target.x)
          , s = ls(t, e.target.y);
        return `${n}% ${s}%`
    }
}
  , Yl = {
    correct: (t, {treeScale: e, projectionDelta: n}) => {
        const s = t
          , i = Q.parse(t);
        if (i.length > 5)
            return s;
        const o = Q.createTransformer(t)
          , r = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * e.x
          , l = n.y.scale * e.y;
        i[0 + r] /= a,
        i[1 + r] /= l;
        const c = M(a, l, .5);
        return typeof i[2 + r] == "number" && (i[2 + r] /= c),
        typeof i[3 + r] == "number" && (i[3 + r] /= c),
        o(i)
    }
};
let us = !1;
class ql extends T.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i} = this.props
          , {projection: o} = e;
        ya(Zl),
        o && (n.group && n.group.add(o),
        s && s.register && i && s.register(o),
        us && o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Kt.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: n, visualElement: s, drag: i, isPresent: o} = this.props
          , {projection: r} = s;
        return r && (r.isPresent = o,
        us = !0,
        i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(),
        e.isPresent !== o && (o ? r.promote() : r.relegate() || C.postRender( () => {
            const a = r.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        sn.postRender( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: s} = this.props
          , {projection: i} = e;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        s && s.deregister && s.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function er(t) {
    const [e,n] = wi()
      , s = T.useContext(Ie);
    return z.jsx(ql, {
        ...t,
        layoutGroup: s,
        switchLayoutGroup: T.useContext(Ii),
        isPresent: e,
        safeToRemove: n
    })
}
const Zl = {
    borderRadius: {
        ...yt,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: yt,
    borderTopRightRadius: yt,
    borderBottomLeftRadius: yt,
    borderBottomRightRadius: yt,
    boxShadow: Yl
};
function Jl(t, e, n) {
    const s = F(t) ? t : ft(t);
    return s.start(pn("", s, e, n)),
    s.animation
}
const Ql = (t, e) => t.depth - e.depth;
class tu {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        Ne(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        Ue(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(Ql),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function eu(t, e) {
    const n = O.now()
      , s = ({timestamp: i}) => {
        const o = i - n;
        o >= e && (J(s),
        t(o - e))
    }
    ;
    return C.setup(s, !0),
    () => J(s)
}
const nr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , nu = nr.length
  , cs = t => typeof t == "string" ? parseFloat(t) : t
  , hs = t => typeof t == "number" || S.test(t);
function su(t, e, n, s, i, o) {
    i ? (t.opacity = M(0, n.opacity ?? 1, iu(s)),
    t.opacityExit = M(e.opacity ?? 1, 0, ru(s))) : o && (t.opacity = M(e.opacity ?? 1, n.opacity ?? 1, s));
    for (let r = 0; r < nu; r++) {
        const a = `border${nr[r]}Radius`;
        let l = fs(e, a)
          , c = fs(n, a);
        if (l === void 0 && c === void 0)
            continue;
        l || (l = 0),
        c || (c = 0),
        l === 0 || c === 0 || hs(l) === hs(c) ? (t[a] = Math.max(M(cs(l), cs(c), s), 0),
        (H.test(c) || H.test(l)) && (t[a] += "%")) : t[a] = c
    }
    (e.rotate || n.rotate) && (t.rotate = M(e.rotate || 0, n.rotate || 0, s))
}
function fs(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const iu = sr(0, .5, Gs)
  , ru = sr(.5, .95, W);
function sr(t, e, n) {
    return s => s < t ? 0 : s > e ? 1 : n(wt(t, e, s))
}
function ds(t, e) {
    t.min = e.min,
    t.max = e.max
}
function N(t, e) {
    ds(t.x, e.x),
    ds(t.y, e.y)
}
function ms(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
function ps(t, e, n, s, i) {
    return t -= e,
    t = Xt(t, 1 / n, s),
    i !== void 0 && (t = Xt(t, 1 / i, s)),
    t
}
function ou(t, e=0, n=1, s=.5, i, o=t, r=t) {
    if (H.test(e) && (e = parseFloat(e),
    e = M(r.min, r.max, e / 100) - r.min),
    typeof e != "number")
        return;
    let a = M(o.min, o.max, s);
    t === o && (a -= e),
    t.min = ps(t.min, e, n, a, i),
    t.max = ps(t.max, e, n, a, i)
}
function gs(t, e, [n,s,i], o, r) {
    ou(t, e[n], e[s], e[i], e.scale, o, r)
}
const au = ["x", "scaleX", "originX"]
  , lu = ["y", "scaleY", "originY"];
function ys(t, e, n, s) {
    gs(t.x, e, au, n ? n.x : void 0, s ? s.x : void 0),
    gs(t.y, e, lu, n ? n.y : void 0, s ? s.y : void 0)
}
function vs(t) {
    return t.translate === 0 && t.scale === 1
}
function ir(t) {
    return vs(t.x) && vs(t.y)
}
function Ts(t, e) {
    return t.min === e.min && t.max === e.max
}
function uu(t, e) {
    return Ts(t.x, e.x) && Ts(t.y, e.y)
}
function xs(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function rr(t, e) {
    return xs(t.x, e.x) && xs(t.y, e.y)
}
function Ps(t) {
    return j(t.x) / j(t.y)
}
function Ss(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class cu {
    constructor() {
        this.members = []
    }
    add(e) {
        Ne(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (Ue(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(i => e === i);
        if (n === 0)
            return !1;
        let s;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                s = o;
                break
            }
        }
        return s ? (this.promote(s),
        !0) : !1
    }
    promote(e, n) {
        const s = this.lead;
        if (e !== s && (this.prevLead = s,
        this.lead = e,
        e.show(),
        s)) {
            s.instance && s.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = s,
            n && (e.resumeFrom.preserveOpacity = !0),
            s.snapshot && (e.snapshot = s.snapshot,
            e.snapshot.latestValues = s.animationValues || s.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: i} = e.options;
            i === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {options: n, resumingFrom: s} = e;
            n.onExitComplete && n.onExitComplete(),
            s && s.options.onExitComplete && s.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function hu(t, e, n) {
    let s = "";
    const i = t.x.translate / e.x
      , o = t.y.translate / e.y
      , r = (n == null ? void 0 : n.z) || 0;
    if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n) {
        const {transformPerspective: c, rotate: u, rotateX: h, rotateY: f, skewX: d, skewY: m} = n;
        c && (s = `perspective(${c}px) ${s}`),
        u && (s += `rotate(${u}deg) `),
        h && (s += `rotateX(${h}deg) `),
        f && (s += `rotateY(${f}deg) `),
        d && (s += `skewX(${d}deg) `),
        m && (s += `skewY(${m}deg) `)
    }
    const a = t.x.scale * e.x
      , l = t.y.scale * e.y;
    return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`),
    s || "none"
}
const he = ["", "X", "Y", "Z"]
  , fu = 1e3;
let du = 0;
function fe(t, e, n, s) {
    const {latestValues: i} = e;
    i[t] && (n[t] = i[t],
    e.setStaticValue(t, 0),
    s && (s[t] = 0))
}
function or(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const n = _i(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: o} = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", C, !(i || o))
    }
    const {parent: s} = t;
    s && !s.hasCheckedOptimisedAppear && or(s)
}
function ar({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i}) {
    return class {
        constructor(r={}, a=e == null ? void 0 : e()) {
            this.id = du++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(gu),
                this.nodes.forEach(xu),
                this.nodes.forEach(Pu),
                this.nodes.forEach(yu)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = r,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tu)
        }
        addEventListener(r, a) {
            return this.eventHandlers.has(r) || this.eventHandlers.set(r, new Ke),
            this.eventHandlers.get(r).add(a)
        }
        notifyListeners(r, ...a) {
            const l = this.eventHandlers.get(r);
            l && l.notify(...a)
        }
        hasListeners(r) {
            return this.eventHandlers.has(r)
        }
        mount(r) {
            if (this.instance)
                return;
            this.isSVG = bi(r) && !ia(r),
            this.instance = r;
            const {layoutId: a, layout: l, visualElement: c} = this.options;
            if (c && !c.current && c.mount(r),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            t) {
                let u, h = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                C.read( () => {
                    h = window.innerWidth
                }
                ),
                t(r, () => {
                    const d = window.innerWidth;
                    d !== h && (h = d,
                    this.root.updateBlockedByResize = !0,
                    u && u(),
                    u = eu(f, 250),
                    Kt.hasAnimatedSinceResize && (Kt.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(As)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: h, hasRelativeLayoutChanged: f, layout: d}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const m = this.options.transition || c.getDefaultTransition() || Vu
                  , {onLayoutAnimationStart: p, onLayoutAnimationComplete: v} = c.getProps()
                  , g = !this.targetLayout || !rr(this.targetLayout, d)
                  , x = !h && f;
                if (this.options.layoutRoot || this.resumeFrom || x || h && (g || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const y = {
                        ...en(m, "layout"),
                        onPlay: p,
                        onComplete: v
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0,
                    y.type = !1),
                    this.startAnimation(y),
                    this.setAnimationOrigin(u, x)
                } else
                    h || As(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = d
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const r = this.getStack();
            r && r.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            J(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(Su),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: r} = this.options;
            return r && r.getProps().transformTemplate
        }
        willUpdate(r=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && or(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                const h = this.path[u];
                h.shouldResetTransform = !0,
                h.updateScroll("snapshot"),
                h.options.layoutRoot && h.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            r && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(bs);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(ws);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(Tu),
            this.nodes.forEach(mu),
            this.nodes.forEach(pu)) : this.nodes.forEach(ws),
            this.clearAllSnapshots();
            const a = O.now();
            k.delta = X(0, 1e3 / 60, a - k.timestamp),
            k.timestamp = a,
            k.isProcessing = !0,
            ee.update.process(k),
            ee.preRender.process(k),
            ee.render.process(k),
            k.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            sn.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(vu),
            this.sharedNodes.forEach(bu)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            C.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            C.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !j(this.snapshot.measuredBox.x) && !j(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const r = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = E(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0)
        }
        updateScroll(r="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1),
            a && this.instance) {
                const l = s(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: r,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !ir(this.projectionDelta)
              , l = this.getTransformTemplate()
              , c = l ? l(this.latestValues, "") : void 0
              , u = c !== this.prevTransformTemplateValue;
            r && this.instance && (a || nt(this.latestValues) || u) && (i(this.instance, c),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(r=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return r && (l = this.removeTransform(l)),
            Cu(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {visualElement: r} = this.options;
            if (!r)
                return E();
            const a = r.measureViewportBox();
            if (!(((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(Mu))) {
                const {scroll: u} = this.root;
                u && (ut(a.x, u.offset.x),
                ut(a.y, u.offset.y))
            }
            return a
        }
        removeElementScroll(r) {
            var l;
            const a = E();
            if (N(a, r),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let c = 0; c < this.path.length; c++) {
                const u = this.path[c]
                  , {scroll: h, options: f} = u;
                u !== this.root && h && f.layoutScroll && (h.wasRoot && N(a, r),
                ut(a.x, h.offset.x),
                ut(a.y, h.offset.y))
            }
            return a
        }
        applyTransform(r, a=!1) {
            const l = E();
            N(l, r);
            for (let c = 0; c < this.path.length; c++) {
                const u = this.path[c];
                !a && u.options.layoutScroll && u.scroll && u !== u.root && ct(l, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }),
                nt(u.latestValues) && ct(l, u.latestValues)
            }
            return nt(this.latestValues) && ct(l, this.latestValues),
            l
        }
        removeTransform(r) {
            const a = E();
            N(a, r);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l];
                if (!c.instance || !nt(c.latestValues))
                    continue;
                Me(c.latestValues) && c.updateSnapshot();
                const u = E()
                  , h = c.measurePageBox();
                N(u, h),
                ys(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u)
            }
            return nt(this.latestValues) && ys(a, this.latestValues),
            a
        }
        setTargetDelta(r) {
            this.targetDelta = r,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(r) {
            this.options = {
                ...this.options,
                ...r,
                crossfade: r.crossfade !== void 0 ? r.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== k.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(r=!1) {
            var f;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || (f = this.parent) != null && f.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: u, layoutId: h} = this.options;
            if (!(!this.layout || !(u || h))) {
                if (this.resolvedRelativeTargetAt = k.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const d = this.getClosestProjectingParent();
                    d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = E(),
                    this.relativeTargetOrigin = E(),
                    bt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox),
                    N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = E(),
                this.targetWithTransforms = E()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                Fl(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : N(this.target, this.layout.layoutBox),
                Ui(this.target, this.targetDelta)) : N(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const d = this.getClosestProjectingParent();
                    d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = E(),
                    this.relativeTargetOrigin = E(),
                    bt(this.relativeTargetOrigin, this.target, d.target),
                    N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Me(this.parent.latestValues) || Ni(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var m;
            const r = this.getLead()
              , a = !!this.resumingFrom || this !== r;
            let l = !0;
            if ((this.isProjectionDirty || (m = this.parent) != null && m.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === k.timestamp && (l = !1),
            l)
                return;
            const {layout: c, layoutId: u} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || u))
                return;
            N(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x
              , f = this.treeScale.y;
            Ha(this.layoutCorrected, this.treeScale, this.path, a),
            r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox,
            r.targetWithTransforms = E());
            const {target: d} = r;
            if (!d) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ms(this.prevProjectionDelta.x, this.projectionDelta.x),
            ms(this.prevProjectionDelta.y, this.projectionDelta.y)),
            St(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
            (this.treeScale.x !== h || this.treeScale.y !== f || !Ss(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ss(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", d))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(r=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            r) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ht(),
            this.projectionDelta = ht(),
            this.projectionDeltaWithTransform = ht()
        }
        setAnimationOrigin(r, a=!1) {
            const l = this.snapshot
              , c = l ? l.latestValues : {}
              , u = {
                ...this.latestValues
            }
              , h = ht();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = E()
              , d = l ? l.source : void 0
              , m = this.layout ? this.layout.source : void 0
              , p = d !== m
              , v = this.getStack()
              , g = !v || v.members.length <= 1
              , x = !!(p && !g && this.options.crossfade === !0 && !this.path.some(Au));
            this.animationProgress = 0;
            let y;
            this.mixTargetDelta = w => {
                const P = w / 1e3;
                Vs(h.x, r.x, P),
                Vs(h.y, r.y, P),
                this.setTargetDelta(h),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (bt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                wu(this.relativeTarget, this.relativeTargetOrigin, f, P),
                y && uu(this.relativeTarget, y) && (this.isProjectionDirty = !1),
                y || (y = E()),
                N(y, this.relativeTarget)),
                p && (this.animationValues = u,
                su(u, c, this.latestValues, P, x, g)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = P
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(r) {
            var a, l, c;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || c.stop(),
            this.pendingAnimation && (J(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = C.update( () => {
                Kt.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = ft(0)),
                this.currentAnimation = Jl(this.motionValue, [0, 1e3], {
                    ...r,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: u => {
                        this.mixTargetDelta(u),
                        r.onUpdate && r.onUpdate(u)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        r.onComplete && r.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const r = this.getStack();
            r && r.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(fu),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const r = this.getLead();
            let {targetWithTransforms: a, target: l, layout: c, latestValues: u} = r;
            if (!(!a || !l || !c)) {
                if (this !== r && this.layout && c && lr(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || E();
                    const h = j(this.layout.layoutBox.x);
                    l.x.min = r.target.x.min,
                    l.x.max = l.x.min + h;
                    const f = j(this.layout.layoutBox.y);
                    l.y.min = r.target.y.min,
                    l.y.max = l.y.min + f
                }
                N(a, l),
                ct(a, u),
                St(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
            }
        }
        registerSharedNode(r, a) {
            this.sharedNodes.has(r) || this.sharedNodes.set(r, new cu),
            this.sharedNodes.get(r).add(a);
            const c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const r = this.getStack();
            return r ? r.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: r} = this.options;
            return r ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: r} = this.options;
            return r ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: r} = this.options;
            if (r)
                return this.root.sharedNodes.get(r)
        }
        promote({needsReset: r, transition: a, preserveFollowOpacity: l}={}) {
            const c = this.getStack();
            c && c.promote(this, l),
            r && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const r = this.getStack();
            return r ? r.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: r} = this.options;
            if (!r)
                return;
            let a = !1;
            const {latestValues: l} = r;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const c = {};
            l.z && fe("z", r, c, this.animationValues);
            for (let u = 0; u < he.length; u++)
                fe(`rotate${he[u]}`, r, c, this.animationValues),
                fe(`skew${he[u]}`, r, c, this.animationValues);
            r.render();
            for (const u in c)
                r.setStaticValue(u, c[u]),
                this.animationValues && (this.animationValues[u] = c[u]);
            r.scheduleRender()
        }
        applyProjectionStyles(r, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                r.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                r.visibility = "",
                r.opacity = "",
                r.pointerEvents = Wt(a == null ? void 0 : a.pointerEvents) || "",
                r.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const c = this.getLead();
            if (!this.projectionDelta || !this.layout || !c.target) {
                this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                r.pointerEvents = Wt(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !nt(this.latestValues) && (r.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            r.visibility = "";
            const u = c.animationValues || c.latestValues;
            this.applyTransformsToTarget();
            let h = hu(this.projectionDeltaWithTransform, this.treeScale, u);
            l && (h = l(u, h)),
            r.transform = h;
            const {x: f, y: d} = this.projectionDelta;
            r.transformOrigin = `${f.origin * 100}% ${d.origin * 100}% 0`,
            c.animationValues ? r.opacity = c === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : r.opacity = c === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
            for (const m in Mt) {
                if (u[m] === void 0)
                    continue;
                const {correct: p, applyTo: v, isCSSVariable: g} = Mt[m]
                  , x = h === "none" ? u[m] : p(u[m], c);
                if (v) {
                    const y = v.length;
                    for (let w = 0; w < y; w++)
                        r[v[w]] = x
                } else
                    g ? this.options.visualElement.renderState.vars[m] = x : r[m] = x
            }
            this.options.layoutId && (r.pointerEvents = c === this ? Wt(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(r => {
                var a;
                return (a = r.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(bs),
            this.root.sharedNodes.clear()
        }
    }
}
function mu(t) {
    t.updateLayout()
}
function pu(t) {
    var n;
    const e = ((n = t.resumeFrom) == null ? void 0 : n.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
        const {layoutBox: s, measuredBox: i} = t.layout
          , {animationType: o} = t.options
          , r = e.source !== t.layout.source;
        o === "size" ? U(h => {
            const f = r ? e.measuredBox[h] : e.layoutBox[h]
              , d = j(f);
            f.min = s[h].min,
            f.max = f.min + d
        }
        ) : lr(o, e.layoutBox, s) && U(h => {
            const f = r ? e.measuredBox[h] : e.layoutBox[h]
              , d = j(s[h]);
            f.max = f.min + d,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[h].max = t.relativeTarget[h].min + d)
        }
        );
        const a = ht();
        St(a, s, e.layoutBox);
        const l = ht();
        r ? St(l, t.applyTransform(i, !0), e.measuredBox) : St(l, s, e.layoutBox);
        const c = !ir(a);
        let u = !1;
        if (!t.resumeFrom) {
            const h = t.getClosestProjectingParent();
            if (h && !h.resumeFrom) {
                const {snapshot: f, layout: d} = h;
                if (f && d) {
                    const m = E();
                    bt(m, e.layoutBox, f.layoutBox);
                    const p = E();
                    bt(p, s, d.layoutBox),
                    rr(m, p) || (u = !0),
                    h.options.layoutRoot && (t.relativeTarget = p,
                    t.relativeTargetOrigin = m,
                    t.relativeParent = h)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: e,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeLayoutChanged: u
        })
    } else if (t.isLead()) {
        const {onExitComplete: s} = t.options;
        s && s()
    }
    t.options.transition = void 0
}
function gu(t) {
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function yu(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function vu(t) {
    t.clearSnapshot()
}
function bs(t) {
    t.clearMeasurements()
}
function ws(t) {
    t.isLayoutDirty = !1
}
function Tu(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function As(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function xu(t) {
    t.resolveTargetDelta()
}
function Pu(t) {
    t.calcProjection()
}
function Su(t) {
    t.resetSkewAndRotation()
}
function bu(t) {
    t.removeLeadSnapshot()
}
function Vs(t, e, n) {
    t.translate = M(e.translate, 0, n),
    t.scale = M(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function Cs(t, e, n, s) {
    t.min = M(e.min, n.min, s),
    t.max = M(e.max, n.max, s)
}
function wu(t, e, n, s) {
    Cs(t.x, e.x, n.x, s),
    Cs(t.y, e.y, n.y, s)
}
function Au(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const Vu = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Ms = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , Ds = Ms("applewebkit/") && !Ms("chrome/") ? Math.round : W;
function Es(t) {
    t.min = Ds(t.min),
    t.max = Ds(t.max)
}
function Cu(t) {
    Es(t.x),
    Es(t.y)
}
function lr(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !kl(Ps(e), Ps(n), .2)
}
function Mu(t) {
    var e;
    return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot)
}
const Du = ar({
    attachResizeListener: (t, e) => Et(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , de = {
    current: void 0
}
  , ur = ar({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!de.current) {
            const t = new Du({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            de.current = t
        }
        return de.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , Eu = {
    pan: {
        Feature: Xl
    },
    drag: {
        Feature: zl,
        ProjectionNode: ur,
        MeasureLayout: er
    }
};
function Rs(t, e, n) {
    const {props: s} = t;
    t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , o = s[i];
    o && C.postRender( () => o(e, Ft(e)))
}
class Ru extends tt {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = Qo(e, (n, s) => (Rs(this.node, s, "Start"),
        i => Rs(this.node, i, "End"))))
    }
    unmount() {}
}
class Lu extends tt {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Rt(Et(this.node.current, "focus", () => this.onFocus()), Et(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Ls(t, e, n) {
    const {props: s} = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled)
        return;
    t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , o = s[i];
    o && C.postRender( () => o(e, Ft(e)))
}
class ku extends tt {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = sa(e, (n, s) => (Ls(this.node, s, "Start"),
        (i, {success: o}) => Ls(this.node, i, o ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Be = new WeakMap
  , me = new WeakMap
  , Fu = t => {
    const e = Be.get(t.target);
    e && e(t)
}
  , Bu = t => {
    t.forEach(Fu)
}
;
function Iu({root: t, ...e}) {
    const n = t || document;
    me.has(n) || me.set(n, {});
    const s = me.get(n)
      , i = JSON.stringify(e);
    return s[i] || (s[i] = new IntersectionObserver(Bu,{
        root: t,
        ...e
    })),
    s[i]
}
function ju(t, e, n) {
    const s = Iu(e);
    return Be.set(t, n),
    s.observe(t),
    () => {
        Be.delete(t),
        s.unobserve(t)
    }
}
const Ou = {
    some: 0,
    all: 1
};
class Nu extends tt {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: n, margin: s, amount: i="some", once: o} = e
          , r = {
            root: n ? n.current : void 0,
            rootMargin: s,
            threshold: typeof i == "number" ? i : Ou[i]
        }
          , a = l => {
            const {isIntersecting: c} = l;
            if (this.isInView === c || (this.isInView = c,
            o && !c && this.hasEnteredView))
                return;
            c && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {onViewportEnter: u, onViewportLeave: h} = this.node.getProps()
              , f = c ? u : h;
            f && f(l)
        }
        ;
        return ju(this.node.current, r, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(Uu(e, n)) && this.startObserver()
    }
    unmount() {}
}
function Uu({viewport: t={}}, {viewport: e={}}={}) {
    return n => t[n] !== e[n]
}
const Wu = {
    inView: {
        Feature: Nu
    },
    tap: {
        Feature: ku
    },
    focus: {
        Feature: Lu
    },
    hover: {
        Feature: Ru
    }
}
  , Ku = {
    layout: {
        ProjectionNode: ur,
        MeasureLayout: er
    }
}
  , $u = {
    ...Cl,
    ...Wu,
    ...Eu,
    ...Ku
}
  , Zu = Ka($u, el);
export {Yu as A, Zu as m};
