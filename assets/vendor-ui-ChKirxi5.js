import {r as a, R as le, a as On, b as No, c as Do} from "./vendor-react-C-0J8HPx.js";
var In = {
    exports: {}
}
  , rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo = a
  , ko = Symbol.for("react.element")
  , Fo = Symbol.for("react.fragment")
  , jo = Object.prototype.hasOwnProperty
  , $o = Lo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Bo = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Nn(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        jo.call(t, r) && !Bo.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: ko,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: $o.current
    }
}
rt.Fragment = Fo;
rt.jsx = Nn;
rt.jsxs = Nn;
In.exports = rt;
var y = In.exports;
function A(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Wo(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function ot(...e) {
    return t => e.forEach(n => Wo(n, t))
}
function W(...e) {
    return a.useCallback(ot(...e), e)
}
function Uo(e, t=[]) {
    let n = [];
    function r(i, s) {
        const c = a.createContext(s)
          , l = n.length;
        n = [...n, s];
        function f(u) {
            const {scope: p, children: v, ...h} = u
              , m = (p == null ? void 0 : p[e][l]) || c
              , g = a.useMemo( () => h, Object.values(h));
            return y.jsx(m.Provider, {
                value: g,
                children: v
            })
        }
        function d(u, p) {
            const v = (p == null ? void 0 : p[e][l]) || c
              , h = a.useContext(v);
            if (h)
                return h;
            if (s !== void 0)
                return s;
            throw new Error(`\`${u}\` must be used within \`${i}\``)
        }
        return f.displayName = i + "Provider",
        [f, d]
    }
    const o = () => {
        const i = n.map(s => a.createContext(s));
        return function(c) {
            const l = (c == null ? void 0 : c[e]) || i;
            return a.useMemo( () => ({
                [`__scope${e}`]: {
                    ...c,
                    [e]: l
                }
            }), [c, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, Go(o, ...t)]
}
function Go(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (c, {useScope: l, scopeName: f}) => {
                const u = l(i)[`__scope${f}`];
                return {
                    ...c,
                    ...u
                }
            }
            , {});
            return a.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var Oe = a.forwardRef( (e, t) => {
    const {children: n, ...r} = e
      , o = a.Children.toArray(n)
      , i = o.find(Ho);
    if (i) {
        const s = i.props.children
          , c = o.map(l => l === i ? a.Children.count(s) > 1 ? a.Children.only(null) : a.isValidElement(s) ? s.props.children : null : l);
        return y.jsx(At, {
            ...r,
            ref: t,
            children: a.isValidElement(s) ? a.cloneElement(s, void 0, c) : null
        })
    }
    return y.jsx(At, {
        ...r,
        ref: t,
        children: n
    })
}
);
Oe.displayName = "Slot";
var At = a.forwardRef( (e, t) => {
    const {children: n, ...r} = e;
    if (a.isValidElement(n)) {
        const o = Vo(n);
        return a.cloneElement(n, {
            ...Ko(r, n.props),
            ref: t ? ot(t, o) : o
        })
    }
    return a.Children.count(n) > 1 ? a.Children.only(null) : null
}
);
At.displayName = "SlotClone";
var Dn = ({children: e}) => y.jsx(y.Fragment, {
    children: e
});
function Ho(e) {
    return a.isValidElement(e) && e.type === Dn
}
function Ko(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...c) => {
            i(...c),
            o(...c)
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Vo(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Ln(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Uo(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = v => {
        const {scope: h, children: m} = v
          , g = le.useRef(null)
          , w = le.useRef(new Map).current;
        return y.jsx(o, {
            scope: h,
            itemMap: w,
            collectionRef: g,
            children: m
        })
    }
    ;
    s.displayName = t;
    const c = e + "CollectionSlot"
      , l = le.forwardRef( (v, h) => {
        const {scope: m, children: g} = v
          , w = i(c, m)
          , x = W(h, w.collectionRef);
        return y.jsx(Oe, {
            ref: x,
            children: g
        })
    }
    );
    l.displayName = c;
    const f = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , u = le.forwardRef( (v, h) => {
        const {scope: m, children: g, ...w} = v
          , x = le.useRef(null)
          , b = W(h, x)
          , C = i(f, m);
        return le.useEffect( () => (C.itemMap.set(x, {
            ref: x,
            ...w
        }),
        () => void C.itemMap.delete(x))),
        y.jsx(Oe, {
            [d]: "",
            ref: b,
            children: g
        })
    }
    );
    u.displayName = f;
    function p(v) {
        const h = i(e + "CollectionConsumer", v);
        return le.useCallback( () => {
            const g = h.collectionRef.current;
            if (!g)
                return [];
            const w = Array.from(g.querySelectorAll(`[${d}]`));
            return Array.from(h.itemMap.values()).sort( (C, E) => w.indexOf(C.ref.current) - w.indexOf(E.ref.current))
        }
        , [h.collectionRef, h.itemMap])
    }
    return [{
        Provider: s,
        Slot: l,
        ItemSlot: u
    }, p, r]
}
function it(e, t=[]) {
    let n = [];
    function r(i, s) {
        const c = a.createContext(s)
          , l = n.length;
        n = [...n, s];
        const f = u => {
            var w;
            const {scope: p, children: v, ...h} = u
              , m = ((w = p == null ? void 0 : p[e]) == null ? void 0 : w[l]) || c
              , g = a.useMemo( () => h, Object.values(h));
            return y.jsx(m.Provider, {
                value: g,
                children: v
            })
        }
        ;
        f.displayName = i + "Provider";
        function d(u, p) {
            var m;
            const v = ((m = p == null ? void 0 : p[e]) == null ? void 0 : m[l]) || c
              , h = a.useContext(v);
            if (h)
                return h;
            if (s !== void 0)
                return s;
            throw new Error(`\`${u}\` must be used within \`${i}\``)
        }
        return [f, d]
    }
    const o = () => {
        const i = n.map(s => a.createContext(s));
        return function(c) {
            const l = (c == null ? void 0 : c[e]) || i;
            return a.useMemo( () => ({
                [`__scope${e}`]: {
                    ...c,
                    [e]: l
                }
            }), [c, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, Yo(o, ...t)]
}
function Yo(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (c, {useScope: l, scopeName: f}) => {
                const u = l(i)[`__scope${f}`];
                return {
                    ...c,
                    ...u
                }
            }
            , {});
            return a.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var zo = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , j = zo.reduce( (e, t) => {
    const n = a.forwardRef( (r, o) => {
        const {asChild: i, ...s} = r
          , c = i ? Oe : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        y.jsx(c, {
            ...s,
            ref: o
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function kn(e, t) {
    e && On.flushSync( () => e.dispatchEvent(t))
}
function z(e) {
    const t = a.useRef(e);
    return a.useEffect( () => {
        t.current = e
    }
    ),
    a.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Xo(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = z(e);
    a.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var qo = "DismissableLayer", Tt = "dismissableLayer.update", Zo = "dismissableLayer.pointerDownOutside", Qo = "dismissableLayer.focusOutside", un, Fn = a.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), st = a.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: c, ...l} = e
      , f = a.useContext(Fn)
      , [d,u] = a.useState(null)
      , p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,v] = a.useState({})
      , h = W(t, R => u(R))
      , m = Array.from(f.layers)
      , [g] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1)
      , w = m.indexOf(g)
      , x = d ? m.indexOf(d) : -1
      , b = f.layersWithOutsidePointerEventsDisabled.size > 0
      , C = x >= w
      , E = ei(R => {
        const M = R.target
          , I = [...f.branches].some(_ => _.contains(M));
        !C || I || (o == null || o(R),
        s == null || s(R),
        R.defaultPrevented || c == null || c())
    }
    , p)
      , P = ti(R => {
        const M = R.target;
        [...f.branches].some(_ => _.contains(M)) || (i == null || i(R),
        s == null || s(R),
        R.defaultPrevented || c == null || c())
    }
    , p);
    return Xo(R => {
        x === f.layers.size - 1 && (r == null || r(R),
        !R.defaultPrevented && c && (R.preventDefault(),
        c()))
    }
    , p),
    a.useEffect( () => {
        if (d)
            return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (un = p.body.style.pointerEvents,
            p.body.style.pointerEvents = "none"),
            f.layersWithOutsidePointerEventsDisabled.add(d)),
            f.layers.add(d),
            ln(),
            () => {
                n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = un)
            }
    }
    , [d, p, n, f]),
    a.useEffect( () => () => {
        d && (f.layers.delete(d),
        f.layersWithOutsidePointerEventsDisabled.delete(d),
        ln())
    }
    , [d, f]),
    a.useEffect( () => {
        const R = () => v({});
        return document.addEventListener(Tt, R),
        () => document.removeEventListener(Tt, R)
    }
    , []),
    y.jsx(j.div, {
        ...l,
        ref: h,
        style: {
            pointerEvents: b ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: A(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: A(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: A(e.onPointerDownCapture, E.onPointerDownCapture)
    })
}
);
st.displayName = qo;
var Jo = "DismissableLayerBranch"
  , jn = a.forwardRef( (e, t) => {
    const n = a.useContext(Fn)
      , r = a.useRef(null)
      , o = W(t, r);
    return a.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    y.jsx(j.div, {
        ...e,
        ref: o
    })
}
);
jn.displayName = Jo;
function ei(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = z(e)
      , r = a.useRef(!1)
      , o = a.useRef( () => {}
    );
    return a.useEffect( () => {
        const i = c => {
            if (c.target && !r.current) {
                let l = function() {
                    $n(Zo, n, f, {
                        discrete: !0
                    })
                };
                const f = {
                    originalEvent: c
                };
                c.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function ti(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = z(e)
      , r = a.useRef(!1);
    return a.useEffect( () => {
        const o = i => {
            i.target && !r.current && $n(Qo, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function ln() {
    const e = new CustomEvent(Tt);
    document.dispatchEvent(e)
}
function $n(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? kn(o, i) : o.dispatchEvent(i)
}
var qa = st
  , Za = jn
  , fe = globalThis != null && globalThis.document ? a.useLayoutEffect : () => {}
  , ni = "Portal"
  , Bn = a.forwardRef( (e, t) => {
    var c;
    const {container: n, ...r} = e
      , [o,i] = a.useState(!1);
    fe( () => i(!0), []);
    const s = n || o && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body);
    return s ? No.createPortal(y.jsx(j.div, {
        ...r,
        ref: t
    }), s) : null
}
);
Bn.displayName = ni;
function ri(e, t) {
    return a.useReducer( (n, r) => t[n][r] ?? n, e)
}
var pe = e => {
    const {present: t, children: n} = e
      , r = oi(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : a.Children.only(n)
      , i = W(r.ref, ii(o));
    return typeof n == "function" || r.isPresent ? a.cloneElement(o, {
        ref: i
    }) : null
}
;
pe.displayName = "Presence";
function oi(e) {
    const [t,n] = a.useState()
      , r = a.useRef({})
      , o = a.useRef(e)
      , i = a.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [c,l] = ri(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return a.useEffect( () => {
        const f = We(r.current);
        i.current = c === "mounted" ? f : "none"
    }
    , [c]),
    fe( () => {
        const f = r.current
          , d = o.current;
        if (d !== e) {
            const p = i.current
              , v = We(f);
            e ? l("MOUNT") : v === "none" || (f == null ? void 0 : f.display) === "none" ? l("UNMOUNT") : l(d && p !== v ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    fe( () => {
        if (t) {
            let f;
            const d = t.ownerDocument.defaultView ?? window
              , u = v => {
                const m = We(r.current).includes(v.animationName);
                if (v.target === t && m && (l("ANIMATION_END"),
                !o.current)) {
                    const g = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    f = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g)
                    }
                    )
                }
            }
              , p = v => {
                v.target === t && (i.current = We(r.current))
            }
            ;
            return t.addEventListener("animationstart", p),
            t.addEventListener("animationcancel", u),
            t.addEventListener("animationend", u),
            () => {
                d.clearTimeout(f),
                t.removeEventListener("animationstart", p),
                t.removeEventListener("animationcancel", u),
                t.removeEventListener("animationend", u)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(c),
        ref: a.useCallback(f => {
            f && (r.current = getComputedStyle(f)),
            n(f)
        }
        , [])
    }
}
function We(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function ii(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function jt({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [r,o] = si({
        defaultProp: t,
        onChange: n
    })
      , i = e !== void 0
      , s = i ? e : r
      , c = z(n)
      , l = a.useCallback(f => {
        if (i) {
            const u = typeof f == "function" ? f(e) : f;
            u !== e && c(u)
        } else
            o(f)
    }
    , [i, e, o, c]);
    return [s, l]
}
function si({defaultProp: e, onChange: t}) {
    const n = a.useState(e)
      , [r] = n
      , o = a.useRef(r)
      , i = z(t);
    return a.useEffect( () => {
        o.current !== r && (i(r),
        o.current = r)
    }
    , [r, o, i]),
    n
}
var ci = "VisuallyHidden"
  , Wn = a.forwardRef( (e, t) => y.jsx(j.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
Wn.displayName = ci;
var ai = Wn
  , ui = Do.useId || ( () => {}
)
  , li = 0;
function qe(e) {
    const [t,n] = a.useState(ui());
    return fe( () => {
        e || n(r => r ?? String(li++))
    }
    , [e]),
    e || (t ? `radix-${t}` : "")
}
const fi = ["top", "right", "bottom", "left"]
  , ie = Math.min
  , H = Math.max
  , Ze = Math.round
  , Ue = Math.floor
  , se = e => ({
    x: e,
    y: e
})
  , di = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , pi = {
    start: "end",
    end: "start"
};
function _t(e, t, n) {
    return H(e, ie(t, n))
}
function ne(e, t) {
    return typeof e == "function" ? e(t) : e
}
function re(e) {
    return e.split("-")[0]
}
function Ee(e) {
    return e.split("-")[1]
}
function $t(e) {
    return e === "x" ? "y" : "x"
}
function Bt(e) {
    return e === "y" ? "height" : "width"
}
function ce(e) {
    return ["top", "bottom"].includes(re(e)) ? "y" : "x"
}
function Wt(e) {
    return $t(ce(e))
}
function mi(e, t, n) {
    n === void 0 && (n = !1);
    const r = Ee(e)
      , o = Wt(e)
      , i = Bt(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Qe(s)),
    [s, Qe(s)]
}
function vi(e) {
    const t = Qe(e);
    return [Ot(e), t, Ot(t)]
}
function Ot(e) {
    return e.replace(/start|end/g, t => pi[t])
}
function hi(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? i : s;
    default:
        return []
    }
}
function gi(e, t, n, r) {
    const o = Ee(e);
    let i = hi(re(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(Ot)))),
    i
}
function Qe(e) {
    return e.replace(/left|right|bottom|top/g, t => di[t])
}
function wi(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Un(e) {
    return typeof e != "number" ? wi(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Je(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function fn(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = ce(t)
      , s = Wt(t)
      , c = Bt(s)
      , l = re(t)
      , f = i === "y"
      , d = r.x + r.width / 2 - o.width / 2
      , u = r.y + r.height / 2 - o.height / 2
      , p = r[c] / 2 - o[c] / 2;
    let v;
    switch (l) {
    case "top":
        v = {
            x: d,
            y: r.y - o.height
        };
        break;
    case "bottom":
        v = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        v = {
            x: r.x + r.width,
            y: u
        };
        break;
    case "left":
        v = {
            x: r.x - o.width,
            y: u
        };
        break;
    default:
        v = {
            x: r.x,
            y: r.y
        }
    }
    switch (Ee(t)) {
    case "start":
        v[s] -= p * (n && f ? -1 : 1);
        break;
    case "end":
        v[s] += p * (n && f ? -1 : 1);
        break
    }
    return v
}
const yi = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , c = i.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let f = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: d, y: u} = fn(f, r, l)
      , p = r
      , v = {}
      , h = 0;
    for (let m = 0; m < c.length; m++) {
        const {name: g, fn: w} = c[m]
          , {x, y: b, data: C, reset: E} = await w({
            x: d,
            y: u,
            initialPlacement: r,
            placement: p,
            strategy: o,
            middlewareData: v,
            rects: f,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = x ?? d,
        u = b ?? u,
        v = {
            ...v,
            [g]: {
                ...v[g],
                ...C
            }
        },
        E && h <= 50 && (h++,
        typeof E == "object" && (E.placement && (p = E.placement),
        E.rects && (f = E.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : E.rects),
        {x: d, y: u} = fn(f, p, l)),
        m = -1)
    }
    return {
        x: d,
        y: u,
        placement: p,
        strategy: o,
        middlewareData: v
    }
}
;
async function Ie(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: c, strategy: l} = e
      , {boundary: f="clippingAncestors", rootBoundary: d="viewport", elementContext: u="floating", altBoundary: p=!1, padding: v=0} = ne(t, e)
      , h = Un(v)
      , g = c[p ? u === "floating" ? "reference" : "floating" : u]
      , w = Je(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
        boundary: f,
        rootBoundary: d,
        strategy: l
    }))
      , x = u === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating))
      , C = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , E = Je(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: c,
        rect: x,
        offsetParent: b,
        strategy: l
    }) : x);
    return {
        top: (w.top - E.top + h.top) / C.y,
        bottom: (E.bottom - w.bottom + h.bottom) / C.y,
        left: (w.left - E.left + h.left) / C.x,
        right: (E.right - w.right + h.right) / C.x
    }
}
const xi = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: c, middlewareData: l} = t
          , {element: f, padding: d=0} = ne(e, t) || {};
        if (f == null)
            return {};
        const u = Un(d)
          , p = {
            x: n,
            y: r
        }
          , v = Wt(o)
          , h = Bt(v)
          , m = await s.getDimensions(f)
          , g = v === "y"
          , w = g ? "top" : "left"
          , x = g ? "bottom" : "right"
          , b = g ? "clientHeight" : "clientWidth"
          , C = i.reference[h] + i.reference[v] - p[v] - i.floating[h]
          , E = p[v] - i.reference[v]
          , P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
        let R = P ? P[b] : 0;
        (!R || !await (s.isElement == null ? void 0 : s.isElement(P))) && (R = c.floating[b] || i.floating[h]);
        const M = C / 2 - E / 2
          , I = R / 2 - m[h] / 2 - 1
          , _ = ie(u[w], I)
          , k = ie(u[x], I)
          , F = _
          , D = R - m[h] - k
          , N = R / 2 - m[h] / 2 + M
          , B = _t(F, N, D)
          , O = !l.arrow && Ee(o) != null && N !== B && i.reference[h] / 2 - (N < F ? _ : k) - m[h] / 2 < 0
          , $ = O ? N < F ? N - F : N - D : 0;
        return {
            [v]: p[v] + $,
            data: {
                [v]: B,
                centerOffset: N - B - $,
                ...O && {
                    alignmentOffset: $
                }
            },
            reset: O
        }
    }
})
  , bi = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: c, platform: l, elements: f} = t
              , {mainAxis: d=!0, crossAxis: u=!0, fallbackPlacements: p, fallbackStrategy: v="bestFit", fallbackAxisSideDirection: h="none", flipAlignment: m=!0, ...g} = ne(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const w = re(o)
              , x = ce(c)
              , b = re(c) === c
              , C = await (l.isRTL == null ? void 0 : l.isRTL(f.floating))
              , E = p || (b || !m ? [Qe(c)] : vi(c))
              , P = h !== "none";
            !p && P && E.push(...gi(c, m, h, C));
            const R = [c, ...E]
              , M = await Ie(t, g)
              , I = [];
            let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (d && I.push(M[w]),
            u) {
                const N = mi(o, s, C);
                I.push(M[N[0]], M[N[1]])
            }
            if (_ = [..._, {
                placement: o,
                overflows: I
            }],
            !I.every(N => N <= 0)) {
                var k, F;
                const N = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1
                  , B = R[N];
                if (B)
                    return {
                        data: {
                            index: N,
                            overflows: _
                        },
                        reset: {
                            placement: B
                        }
                    };
                let O = (F = _.filter($ => $.overflows[0] <= 0).sort( ($, T) => $.overflows[1] - T.overflows[1])[0]) == null ? void 0 : F.placement;
                if (!O)
                    switch (v) {
                    case "bestFit":
                        {
                            var D;
                            const $ = (D = _.filter(T => {
                                if (P) {
                                    const S = ce(T.placement);
                                    return S === x || S === "y"
                                }
                                return !0
                            }
                            ).map(T => [T.placement, T.overflows.filter(S => S > 0).reduce( (S, L) => S + L, 0)]).sort( (T, S) => T[1] - S[1])[0]) == null ? void 0 : D[0];
                            $ && (O = $);
                            break
                        }
                    case "initialPlacement":
                        O = c;
                        break
                    }
                if (o !== O)
                    return {
                        reset: {
                            placement: O
                        }
                    }
            }
            return {}
        }
    }
};
function dn(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function pn(e) {
    return fi.some(t => e[t] >= 0)
}
const Ci = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = ne(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await Ie(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = dn(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: pn(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Ie(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = dn(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: pn(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function Ei(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = re(n)
      , c = Ee(n)
      , l = ce(n) === "y"
      , f = ["left", "top"].includes(s) ? -1 : 1
      , d = i && l ? -1 : 1
      , u = ne(t, e);
    let {mainAxis: p, crossAxis: v, alignmentAxis: h} = typeof u == "number" ? {
        mainAxis: u,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: u.mainAxis || 0,
        crossAxis: u.crossAxis || 0,
        alignmentAxis: u.alignmentAxis
    };
    return c && typeof h == "number" && (v = c === "end" ? h * -1 : h),
    l ? {
        x: v * d,
        y: p * f
    } : {
        x: p * f,
        y: v * d
    }
}
const Si = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: c} = t
              , l = await Ei(t, e);
            return s === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: s
                }
            }
        }
    }
}
  , Ri = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: c={
                fn: g => {
                    let {x: w, y: x} = g;
                    return {
                        x: w,
                        y: x
                    }
                }
            }, ...l} = ne(e, t)
              , f = {
                x: n,
                y: r
            }
              , d = await Ie(t, l)
              , u = ce(re(o))
              , p = $t(u);
            let v = f[p]
              , h = f[u];
            if (i) {
                const g = p === "y" ? "top" : "left"
                  , w = p === "y" ? "bottom" : "right"
                  , x = v + d[g]
                  , b = v - d[w];
                v = _t(x, v, b)
            }
            if (s) {
                const g = u === "y" ? "top" : "left"
                  , w = u === "y" ? "bottom" : "right"
                  , x = h + d[g]
                  , b = h - d[w];
                h = _t(x, h, b)
            }
            const m = c.fn({
                ...t,
                [p]: v,
                [u]: h
            });
            return {
                ...m,
                data: {
                    x: m.x - n,
                    y: m.y - r,
                    enabled: {
                        [p]: i,
                        [u]: s
                    }
                }
            }
        }
    }
}
  , Pi = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: c=0, mainAxis: l=!0, crossAxis: f=!0} = ne(e, t)
              , d = {
                x: n,
                y: r
            }
              , u = ce(o)
              , p = $t(u);
            let v = d[p]
              , h = d[u];
            const m = ne(c, t)
              , g = typeof m == "number" ? {
                mainAxis: m,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...m
            };
            if (l) {
                const b = p === "y" ? "height" : "width"
                  , C = i.reference[p] - i.floating[b] + g.mainAxis
                  , E = i.reference[p] + i.reference[b] - g.mainAxis;
                v < C ? v = C : v > E && (v = E)
            }
            if (f) {
                var w, x;
                const b = p === "y" ? "width" : "height"
                  , C = ["top", "left"].includes(re(o))
                  , E = i.reference[u] - i.floating[b] + (C && ((w = s.offset) == null ? void 0 : w[u]) || 0) + (C ? 0 : g.crossAxis)
                  , P = i.reference[u] + i.reference[b] + (C ? 0 : ((x = s.offset) == null ? void 0 : x[u]) || 0) - (C ? g.crossAxis : 0);
                h < E ? h = E : h > P && (h = P)
            }
            return {
                [p]: v,
                [u]: h
            }
        }
    }
}
  , Mi = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: c} = t
              , {apply: l= () => {}
            , ...f} = ne(e, t)
              , d = await Ie(t, f)
              , u = re(o)
              , p = Ee(o)
              , v = ce(o) === "y"
              , {width: h, height: m} = i.floating;
            let g, w;
            u === "top" || u === "bottom" ? (g = u,
            w = p === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (w = u,
            g = p === "end" ? "top" : "bottom");
            const x = m - d.top - d.bottom
              , b = h - d.left - d.right
              , C = ie(m - d[g], x)
              , E = ie(h - d[w], b)
              , P = !t.middlewareData.shift;
            let R = C
              , M = E;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = b),
            (r = t.middlewareData.shift) != null && r.enabled.y && (R = x),
            P && !p) {
                const _ = H(d.left, 0)
                  , k = H(d.right, 0)
                  , F = H(d.top, 0)
                  , D = H(d.bottom, 0);
                v ? M = h - 2 * (_ !== 0 || k !== 0 ? _ + k : H(d.left, d.right)) : R = m - 2 * (F !== 0 || D !== 0 ? F + D : H(d.top, d.bottom))
            }
            await l({
                ...t,
                availableWidth: M,
                availableHeight: R
            });
            const I = await s.getDimensions(c.floating);
            return h !== I.width || m !== I.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function ct() {
    return typeof window < "u"
}
function Se(e) {
    return Gn(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function K(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function ee(e) {
    var t;
    return (t = (Gn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Gn(e) {
    return ct() ? e instanceof Node || e instanceof K(e).Node : !1
}
function X(e) {
    return ct() ? e instanceof Element || e instanceof K(e).Element : !1
}
function J(e) {
    return ct() ? e instanceof HTMLElement || e instanceof K(e).HTMLElement : !1
}
function mn(e) {
    return !ct() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof K(e).ShadowRoot
}
function ke(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = q(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function Ai(e) {
    return ["table", "td", "th"].includes(Se(e))
}
function at(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Ut(e) {
    const t = Gt()
      , n = X(e) ? q(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function Ti(e) {
    let t = ae(e);
    for (; J(t) && !be(t); ) {
        if (Ut(t))
            return t;
        if (at(t))
            return null;
        t = ae(t)
    }
    return null
}
function Gt() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function be(e) {
    return ["html", "body", "#document"].includes(Se(e))
}
function q(e) {
    return K(e).getComputedStyle(e)
}
function ut(e) {
    return X(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function ae(e) {
    if (Se(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || mn(e) && e.host || ee(e);
    return mn(t) ? t.host : t
}
function Hn(e) {
    const t = ae(e);
    return be(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : J(t) && ke(t) ? t : Hn(t)
}
function Ne(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Hn(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = K(o);
    if (i) {
        const c = It(s);
        return t.concat(s, s.visualViewport || [], ke(o) ? o : [], c && n ? Ne(c) : [])
    }
    return t.concat(o, Ne(o, [], n))
}
function It(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Kn(e) {
    const t = q(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = J(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , c = Ze(n) !== i || Ze(r) !== s;
    return c && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: c
    }
}
function Ht(e) {
    return X(e) ? e : e.contextElement
}
function ye(e) {
    const t = Ht(e);
    if (!J(t))
        return se(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = Kn(t);
    let s = (i ? Ze(n.width) : n.width) / r
      , c = (i ? Ze(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    {
        x: s,
        y: c
    }
}
const _i = se(0);
function Vn(e) {
    const t = K(e);
    return !Gt() || !t.visualViewport ? _i : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Oi(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== K(e) ? !1 : t
}
function de(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = Ht(e);
    let s = se(1);
    t && (r ? X(r) && (s = ye(r)) : s = ye(e));
    const c = Oi(i, n, r) ? Vn(i) : se(0);
    let l = (o.left + c.x) / s.x
      , f = (o.top + c.y) / s.y
      , d = o.width / s.x
      , u = o.height / s.y;
    if (i) {
        const p = K(i)
          , v = r && X(r) ? K(r) : r;
        let h = p
          , m = It(h);
        for (; m && r && v !== h; ) {
            const g = ye(m)
              , w = m.getBoundingClientRect()
              , x = q(m)
              , b = w.left + (m.clientLeft + parseFloat(x.paddingLeft)) * g.x
              , C = w.top + (m.clientTop + parseFloat(x.paddingTop)) * g.y;
            l *= g.x,
            f *= g.y,
            d *= g.x,
            u *= g.y,
            l += b,
            f += C,
            h = K(m),
            m = It(h)
        }
    }
    return Je({
        width: d,
        height: u,
        x: l,
        y: f
    })
}
function Ii(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = ee(r)
      , c = t ? at(t.floating) : !1;
    if (r === s || c && i)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , f = se(1);
    const d = se(0)
      , u = J(r);
    if ((u || !u && !i) && ((Se(r) !== "body" || ke(s)) && (l = ut(r)),
    J(r))) {
        const p = de(r);
        f = ye(r),
        d.x = p.x + r.clientLeft,
        d.y = p.y + r.clientTop
    }
    return {
        width: n.width * f.x,
        height: n.height * f.y,
        x: n.x * f.x - l.scrollLeft * f.x + d.x,
        y: n.y * f.y - l.scrollTop * f.y + d.y
    }
}
function Ni(e) {
    return Array.from(e.getClientRects())
}
function Nt(e, t) {
    const n = ut(e).scrollLeft;
    return t ? t.left + n : de(ee(e)).left + n
}
function Di(e) {
    const t = ee(e)
      , n = ut(e)
      , r = e.ownerDocument.body
      , o = H(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = H(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Nt(e);
    const c = -n.scrollTop;
    return q(r).direction === "rtl" && (s += H(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: c
    }
}
function Li(e, t) {
    const n = K(e)
      , r = ee(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , c = 0
      , l = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const f = Gt();
        (!f || f && t === "fixed") && (c = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: c,
        y: l
    }
}
function ki(e, t) {
    const n = de(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = J(e) ? ye(e) : se(1)
      , s = e.clientWidth * i.x
      , c = e.clientHeight * i.y
      , l = o * i.x
      , f = r * i.y;
    return {
        width: s,
        height: c,
        x: l,
        y: f
    }
}
function vn(e, t, n) {
    let r;
    if (t === "viewport")
        r = Li(e, n);
    else if (t === "document")
        r = Di(ee(e));
    else if (X(t))
        r = ki(t, n);
    else {
        const o = Vn(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return Je(r)
}
function Yn(e, t) {
    const n = ae(e);
    return n === t || !X(n) || be(n) ? !1 : q(n).position === "fixed" || Yn(n, t)
}
function Fi(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Ne(e, [], !1).filter(c => X(c) && Se(c) !== "body")
      , o = null;
    const i = q(e).position === "fixed";
    let s = i ? ae(e) : e;
    for (; X(s) && !be(s); ) {
        const c = q(s)
          , l = Ut(s);
        !l && c.position === "fixed" && (o = null),
        (i ? !l && !o : !l && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ke(s) && !l && Yn(e, s)) ? r = r.filter(d => d !== s) : o = c,
        s = ae(s)
    }
    return t.set(e, r),
    r
}
function ji(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? at(t) ? [] : Fi(t, this._c) : [].concat(n), r]
      , c = s[0]
      , l = s.reduce( (f, d) => {
        const u = vn(t, d, o);
        return f.top = H(u.top, f.top),
        f.right = ie(u.right, f.right),
        f.bottom = ie(u.bottom, f.bottom),
        f.left = H(u.left, f.left),
        f
    }
    , vn(t, c, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function $i(e) {
    const {width: t, height: n} = Kn(e);
    return {
        width: t,
        height: n
    }
}
function Bi(e, t, n) {
    const r = J(t)
      , o = ee(t)
      , i = n === "fixed"
      , s = de(e, !0, i, t);
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = se(0);
    if (r || !r && !i)
        if ((Se(t) !== "body" || ke(o)) && (c = ut(t)),
        r) {
            const v = de(t, !0, i, t);
            l.x = v.x + t.clientLeft,
            l.y = v.y + t.clientTop
        } else
            o && (l.x = Nt(o));
    let f = 0
      , d = 0;
    if (o && !r && !i) {
        const v = o.getBoundingClientRect();
        d = v.top + c.scrollTop,
        f = v.left + c.scrollLeft - Nt(o, v)
    }
    const u = s.left + c.scrollLeft - l.x - f
      , p = s.top + c.scrollTop - l.y - d;
    return {
        x: u,
        y: p,
        width: s.width,
        height: s.height
    }
}
function wt(e) {
    return q(e).position === "static"
}
function hn(e, t) {
    if (!J(e) || q(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return ee(e) === n && (n = n.ownerDocument.body),
    n
}
function zn(e, t) {
    const n = K(e);
    if (at(e))
        return n;
    if (!J(e)) {
        let o = ae(e);
        for (; o && !be(o); ) {
            if (X(o) && !wt(o))
                return o;
            o = ae(o)
        }
        return n
    }
    let r = hn(e, t);
    for (; r && Ai(r) && wt(r); )
        r = hn(r, t);
    return r && be(r) && wt(r) && !Ut(r) ? n : r || Ti(e) || n
}
const Wi = async function(e) {
    const t = this.getOffsetParent || zn
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: Bi(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function Ui(e) {
    return q(e).direction === "rtl"
}
const Gi = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Ii,
    getDocumentElement: ee,
    getClippingRect: ji,
    getOffsetParent: zn,
    getElementRects: Wi,
    getClientRects: Ni,
    getDimensions: $i,
    getScale: ye,
    isElement: X,
    isRTL: Ui
};
function Hi(e, t) {
    let n = null, r;
    const o = ee(e);
    function i() {
        var c;
        clearTimeout(r),
        (c = n) == null || c.disconnect(),
        n = null
    }
    function s(c, l) {
        c === void 0 && (c = !1),
        l === void 0 && (l = 1),
        i();
        const {left: f, top: d, width: u, height: p} = e.getBoundingClientRect();
        if (c || t(),
        !u || !p)
            return;
        const v = Ue(d)
          , h = Ue(o.clientWidth - (f + u))
          , m = Ue(o.clientHeight - (d + p))
          , g = Ue(f)
          , x = {
            rootMargin: -v + "px " + -h + "px " + -m + "px " + -g + "px",
            threshold: H(0, ie(1, l)) || 1
        };
        let b = !0;
        function C(E) {
            const P = E[0].intersectionRatio;
            if (P !== l) {
                if (!b)
                    return s();
                P ? s(!1, P) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            b = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...x,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,x)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function Ki(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: c=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , f = Ht(e)
      , d = o || i ? [...f ? Ne(f) : [], ...Ne(t)] : [];
    d.forEach(w => {
        o && w.addEventListener("scroll", n, {
            passive: !0
        }),
        i && w.addEventListener("resize", n)
    }
    );
    const u = f && c ? Hi(f, n) : null;
    let p = -1
      , v = null;
    s && (v = new ResizeObserver(w => {
        let[x] = w;
        x && x.target === f && v && (v.unobserve(t),
        cancelAnimationFrame(p),
        p = requestAnimationFrame( () => {
            var b;
            (b = v) == null || b.observe(t)
        }
        )),
        n()
    }
    ),
    f && !l && v.observe(f),
    v.observe(t));
    let h, m = l ? de(e) : null;
    l && g();
    function g() {
        const w = de(e);
        m && (w.x !== m.x || w.y !== m.y || w.width !== m.width || w.height !== m.height) && n(),
        m = w,
        h = requestAnimationFrame(g)
    }
    return n(),
    () => {
        var w;
        d.forEach(x => {
            o && x.removeEventListener("scroll", n),
            i && x.removeEventListener("resize", n)
        }
        ),
        u == null || u(),
        (w = v) == null || w.disconnect(),
        v = null,
        l && cancelAnimationFrame(h)
    }
}
const Vi = Si
  , Yi = Ri
  , zi = bi
  , Xi = Mi
  , qi = Ci
  , gn = xi
  , Zi = Pi
  , Qi = (e, t, n) => {
    const r = new Map
      , o = {
        platform: Gi,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return yi(e, t, {
        ...o,
        platform: i
    })
}
;
var Ye = typeof document < "u" ? a.useLayoutEffect : a.useEffect;
function et(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!et(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !et(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Xn(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function wn(e, t) {
    const n = Xn(e);
    return Math.round(t * n) / n
}
function yt(e) {
    const t = a.useRef(e);
    return Ye( () => {
        t.current = e
    }
    ),
    t
}
function Ji(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: c=!0, whileElementsMounted: l, open: f} = e
      , [d,u] = a.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [p,v] = a.useState(r);
    et(p, r) || v(r);
    const [h,m] = a.useState(null)
      , [g,w] = a.useState(null)
      , x = a.useCallback(T => {
        T !== P.current && (P.current = T,
        m(T))
    }
    , [])
      , b = a.useCallback(T => {
        T !== R.current && (R.current = T,
        w(T))
    }
    , [])
      , C = i || h
      , E = s || g
      , P = a.useRef(null)
      , R = a.useRef(null)
      , M = a.useRef(d)
      , I = l != null
      , _ = yt(l)
      , k = yt(o)
      , F = yt(f)
      , D = a.useCallback( () => {
        if (!P.current || !R.current)
            return;
        const T = {
            placement: t,
            strategy: n,
            middleware: p
        };
        k.current && (T.platform = k.current),
        Qi(P.current, R.current, T).then(S => {
            const L = {
                ...S,
                isPositioned: F.current !== !1
            };
            N.current && !et(M.current, L) && (M.current = L,
            On.flushSync( () => {
                u(L)
            }
            ))
        }
        )
    }
    , [p, t, n, k, F]);
    Ye( () => {
        f === !1 && M.current.isPositioned && (M.current.isPositioned = !1,
        u(T => ({
            ...T,
            isPositioned: !1
        })))
    }
    , [f]);
    const N = a.useRef(!1);
    Ye( () => (N.current = !0,
    () => {
        N.current = !1
    }
    ), []),
    Ye( () => {
        if (C && (P.current = C),
        E && (R.current = E),
        C && E) {
            if (_.current)
                return _.current(C, E, D);
            D()
        }
    }
    , [C, E, D, _, I]);
    const B = a.useMemo( () => ({
        reference: P,
        floating: R,
        setReference: x,
        setFloating: b
    }), [x, b])
      , O = a.useMemo( () => ({
        reference: C,
        floating: E
    }), [C, E])
      , $ = a.useMemo( () => {
        const T = {
            position: n,
            left: 0,
            top: 0
        };
        if (!O.floating)
            return T;
        const S = wn(O.floating, d.x)
          , L = wn(O.floating, d.y);
        return c ? {
            ...T,
            transform: "translate(" + S + "px, " + L + "px)",
            ...Xn(O.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: S,
            top: L
        }
    }
    , [n, c, O.floating, d.x, d.y]);
    return a.useMemo( () => ({
        ...d,
        update: D,
        refs: B,
        elements: O,
        floatingStyles: $
    }), [d, D, B, O, $])
}
const es = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? gn({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? gn({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , ts = (e, t) => ({
    ...Vi(e),
    options: [e, t]
})
  , ns = (e, t) => ({
    ...Yi(e),
    options: [e, t]
})
  , rs = (e, t) => ({
    ...Zi(e),
    options: [e, t]
})
  , os = (e, t) => ({
    ...zi(e),
    options: [e, t]
})
  , is = (e, t) => ({
    ...Xi(e),
    options: [e, t]
})
  , ss = (e, t) => ({
    ...qi(e),
    options: [e, t]
})
  , cs = (e, t) => ({
    ...es(e),
    options: [e, t]
});
var as = "Arrow"
  , qn = a.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return y.jsx(j.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : y.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
qn.displayName = as;
var us = qn;
function ls(e, t=[]) {
    let n = [];
    function r(i, s) {
        const c = a.createContext(s)
          , l = n.length;
        n = [...n, s];
        function f(u) {
            const {scope: p, children: v, ...h} = u
              , m = (p == null ? void 0 : p[e][l]) || c
              , g = a.useMemo( () => h, Object.values(h));
            return y.jsx(m.Provider, {
                value: g,
                children: v
            })
        }
        function d(u, p) {
            const v = (p == null ? void 0 : p[e][l]) || c
              , h = a.useContext(v);
            if (h)
                return h;
            if (s !== void 0)
                return s;
            throw new Error(`\`${u}\` must be used within \`${i}\``)
        }
        return f.displayName = i + "Provider",
        [f, d]
    }
    const o = () => {
        const i = n.map(s => a.createContext(s));
        return function(c) {
            const l = (c == null ? void 0 : c[e]) || i;
            return a.useMemo( () => ({
                [`__scope${e}`]: {
                    ...c,
                    [e]: l
                }
            }), [c, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, fs(o, ...t)]
}
function fs(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (c, {useScope: l, scopeName: f}) => {
                const u = l(i)[`__scope${f}`];
                return {
                    ...c,
                    ...u
                }
            }
            , {});
            return a.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function ds(e) {
    const [t,n] = a.useState(void 0);
    return fe( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, c;
                if ("borderBoxSize"in i) {
                    const l = i.borderBoxSize
                      , f = Array.isArray(l) ? l[0] : l;
                    s = f.inlineSize,
                    c = f.blockSize
                } else
                    s = e.offsetWidth,
                    c = e.offsetHeight;
                n({
                    width: s,
                    height: c
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Kt = "Popper"
  , [Zn,lt] = ls(Kt)
  , [ps,Qn] = Zn(Kt)
  , Jn = e => {
    const {__scopePopper: t, children: n} = e
      , [r,o] = a.useState(null);
    return y.jsx(ps, {
        scope: t,
        anchor: r,
        onAnchorChange: o,
        children: n
    })
}
;
Jn.displayName = Kt;
var er = "PopperAnchor"
  , tr = a.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Qn(er, n)
      , s = a.useRef(null)
      , c = W(t, s);
    return a.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : y.jsx(j.div, {
        ...o,
        ref: c
    })
}
);
tr.displayName = er;
var Vt = "PopperContent"
  , [ms,vs] = Zn(Vt)
  , nr = a.forwardRef( (e, t) => {
    var te, Me, V, Ae, sn, cn;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: c=0, avoidCollisions: l=!0, collisionBoundary: f=[], collisionPadding: d=0, sticky: u="partial", hideWhenDetached: p=!1, updatePositionStrategy: v="optimized", onPlaced: h, ...m} = e
      , g = Qn(Vt, n)
      , [w,x] = a.useState(null)
      , b = W(t, Te => x(Te))
      , [C,E] = a.useState(null)
      , P = ds(C)
      , R = (P == null ? void 0 : P.width) ?? 0
      , M = (P == null ? void 0 : P.height) ?? 0
      , I = r + (i !== "center" ? "-" + i : "")
      , _ = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , k = Array.isArray(f) ? f : [f]
      , F = k.length > 0
      , D = {
        padding: _,
        boundary: k.filter(gs),
        altBoundary: F
    }
      , {refs: N, floatingStyles: B, placement: O, isPositioned: $, middlewareData: T} = Ji({
        strategy: "fixed",
        placement: I,
        whileElementsMounted: (...Te) => Ki(...Te, {
            animationFrame: v === "always"
        }),
        elements: {
            reference: g.anchor
        },
        middleware: [ts({
            mainAxis: o + M,
            alignmentAxis: s
        }), l && ns({
            mainAxis: !0,
            crossAxis: !1,
            limiter: u === "partial" ? rs() : void 0,
            ...D
        }), l && os({
            ...D
        }), is({
            ...D,
            apply: ({elements: Te, rects: an, availableWidth: To, availableHeight: _o}) => {
                const {width: Oo, height: Io} = an.reference
                  , Be = Te.floating.style;
                Be.setProperty("--radix-popper-available-width", `${To}px`),
                Be.setProperty("--radix-popper-available-height", `${_o}px`),
                Be.setProperty("--radix-popper-anchor-width", `${Oo}px`),
                Be.setProperty("--radix-popper-anchor-height", `${Io}px`)
            }
        }), C && cs({
            element: C,
            padding: c
        }), ws({
            arrowWidth: R,
            arrowHeight: M
        }), p && ss({
            strategy: "referenceHidden",
            ...D
        })]
    })
      , [S,L] = ir(O)
      , U = z(h);
    fe( () => {
        $ && (U == null || U())
    }
    , [$, U]);
    const Z = (te = T.arrow) == null ? void 0 : te.x
      , Re = (Me = T.arrow) == null ? void 0 : Me.y
      , Pe = ((V = T.arrow) == null ? void 0 : V.centerOffset) !== 0
      , [$e,ue] = a.useState();
    return fe( () => {
        w && ue(window.getComputedStyle(w).zIndex)
    }
    , [w]),
    y.jsx("div", {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...B,
            transform: $ ? B.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: $e,
            "--radix-popper-transform-origin": [(Ae = T.transformOrigin) == null ? void 0 : Ae.x, (sn = T.transformOrigin) == null ? void 0 : sn.y].join(" "),
            ...((cn = T.hide) == null ? void 0 : cn.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: y.jsx(ms, {
            scope: n,
            placedSide: S,
            onArrowChange: E,
            arrowX: Z,
            arrowY: Re,
            shouldHideArrow: Pe,
            children: y.jsx(j.div, {
                "data-side": S,
                "data-align": L,
                ...m,
                ref: b,
                style: {
                    ...m.style,
                    animation: $ ? void 0 : "none"
                }
            })
        })
    })
}
);
nr.displayName = Vt;
var rr = "PopperArrow"
  , hs = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , or = a.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = vs(rr, r)
      , s = hs[i.placedSide];
    return y.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: y.jsx(us, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
or.displayName = rr;
function gs(e) {
    return e !== null
}
var ws = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var g, w, x;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0
          , c = s ? 0 : e.arrowWidth
          , l = s ? 0 : e.arrowHeight
          , [f,d] = ir(n)
          , u = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , p = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + c / 2
          , v = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
        let h = ""
          , m = "";
        return f === "bottom" ? (h = s ? u : `${p}px`,
        m = `${-l}px`) : f === "top" ? (h = s ? u : `${p}px`,
        m = `${r.floating.height + l}px`) : f === "right" ? (h = `${-l}px`,
        m = s ? u : `${v}px`) : f === "left" && (h = `${r.floating.width + l}px`,
        m = s ? u : `${v}px`),
        {
            data: {
                x: h,
                y: m
            }
        }
    }
});
function ir(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var ys = Jn
  , sr = tr
  , cr = nr
  , ar = or
  , [ft,Qa] = it("Tooltip", [lt])
  , Yt = lt()
  , ur = "TooltipProvider"
  , xs = 700
  , yn = "tooltip.open"
  , [bs,lr] = ft(ur)
  , fr = e => {
    const {__scopeTooltip: t, delayDuration: n=xs, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , [s,c] = a.useState(!0)
      , l = a.useRef(!1)
      , f = a.useRef(0);
    return a.useEffect( () => {
        const d = f.current;
        return () => window.clearTimeout(d)
    }
    , []),
    y.jsx(bs, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: a.useCallback( () => {
            window.clearTimeout(f.current),
            c(!1)
        }
        , []),
        onClose: a.useCallback( () => {
            window.clearTimeout(f.current),
            f.current = window.setTimeout( () => c(!0), r)
        }
        , [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: a.useCallback(d => {
            l.current = d
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
fr.displayName = ur;
var dr = "Tooltip"
  , [Ja,dt] = ft(dr)
  , Dt = "TooltipTrigger"
  , Cs = a.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = dt(Dt, n)
      , i = lr(Dt, n)
      , s = Yt(n)
      , c = a.useRef(null)
      , l = W(t, c, o.onTriggerChange)
      , f = a.useRef(!1)
      , d = a.useRef(!1)
      , u = a.useCallback( () => f.current = !1, []);
    return a.useEffect( () => () => document.removeEventListener("pointerup", u), [u]),
    y.jsx(sr, {
        asChild: !0,
        ...s,
        children: y.jsx(j.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: A(e.onPointerMove, p => {
                p.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: A(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: A(e.onPointerDown, () => {
                f.current = !0,
                document.addEventListener("pointerup", u, {
                    once: !0
                })
            }
            ),
            onFocus: A(e.onFocus, () => {
                f.current || o.onOpen()
            }
            ),
            onBlur: A(e.onBlur, o.onClose),
            onClick: A(e.onClick, o.onClose)
        })
    })
}
);
Cs.displayName = Dt;
var Es = "TooltipPortal"
  , [eu,Ss] = ft(Es, {
    forceMount: void 0
})
  , Ce = "TooltipContent"
  , pr = a.forwardRef( (e, t) => {
    const n = Ss(Ce, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = dt(Ce, e.__scopeTooltip);
    return y.jsx(pe, {
        present: r || s.open,
        children: s.disableHoverableContent ? y.jsx(mr, {
            side: o,
            ...i,
            ref: t
        }) : y.jsx(Rs, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , Rs = a.forwardRef( (e, t) => {
    const n = dt(Ce, e.__scopeTooltip)
      , r = lr(Ce, e.__scopeTooltip)
      , o = a.useRef(null)
      , i = W(t, o)
      , [s,c] = a.useState(null)
      , {trigger: l, onClose: f} = n
      , d = o.current
      , {onPointerInTransitChange: u} = r
      , p = a.useCallback( () => {
        c(null),
        u(!1)
    }
    , [u])
      , v = a.useCallback( (h, m) => {
        const g = h.currentTarget
          , w = {
            x: h.clientX,
            y: h.clientY
        }
          , x = Ts(w, g.getBoundingClientRect())
          , b = _s(w, x)
          , C = Os(m.getBoundingClientRect())
          , E = Ns([...b, ...C]);
        c(E),
        u(!0)
    }
    , [u]);
    return a.useEffect( () => () => p(), [p]),
    a.useEffect( () => {
        if (l && d) {
            const h = g => v(g, d)
              , m = g => v(g, l);
            return l.addEventListener("pointerleave", h),
            d.addEventListener("pointerleave", m),
            () => {
                l.removeEventListener("pointerleave", h),
                d.removeEventListener("pointerleave", m)
            }
        }
    }
    , [l, d, v, p]),
    a.useEffect( () => {
        if (s) {
            const h = m => {
                const g = m.target
                  , w = {
                    x: m.clientX,
                    y: m.clientY
                }
                  , x = (l == null ? void 0 : l.contains(g)) || (d == null ? void 0 : d.contains(g))
                  , b = !Is(w, s);
                x ? p() : b && (p(),
                f())
            }
            ;
            return document.addEventListener("pointermove", h),
            () => document.removeEventListener("pointermove", h)
        }
    }
    , [l, d, s, f, p]),
    y.jsx(mr, {
        ...e,
        ref: i
    })
}
)
  , [Ps,Ms] = ft(dr, {
    isInside: !1
})
  , mr = a.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...c} = e
      , l = dt(Ce, n)
      , f = Yt(n)
      , {onClose: d} = l;
    return a.useEffect( () => (document.addEventListener(yn, d),
    () => document.removeEventListener(yn, d)), [d]),
    a.useEffect( () => {
        if (l.trigger) {
            const u = p => {
                const v = p.target;
                v != null && v.contains(l.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", u, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", u, {
                capture: !0
            })
        }
    }
    , [l.trigger, d]),
    y.jsx(st, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: u => u.preventDefault(),
        onDismiss: d,
        children: y.jsxs(cr, {
            "data-state": l.stateAttribute,
            ...f,
            ...c,
            ref: t,
            style: {
                ...c.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [y.jsx(Dn, {
                children: r
            }), y.jsx(Ps, {
                scope: n,
                isInside: !0,
                children: y.jsx(ai, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
pr.displayName = Ce;
var vr = "TooltipArrow"
  , As = a.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Yt(n);
    return Ms(vr, n).isInside ? null : y.jsx(ar, {
        ...o,
        ...r,
        ref: t
    })
}
);
As.displayName = vr;
function Ts(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function _s(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function Os(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function Is(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const c = t[i].x
          , l = t[i].y
          , f = t[s].x
          , d = t[s].y;
        l > r != d > r && n < (f - c) * (r - l) / (d - l) + c && (o = !o)
    }
    return o
}
function Ns(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    Ds(t)
}
function Ds(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var tu = fr
  , nu = pr
  , Ls = a.createContext(void 0);
function zt(e) {
    const t = a.useContext(Ls);
    return e || t || "ltr"
}
var xt = 0;
function ks() {
    a.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? xn()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? xn()),
        xt++,
        () => {
            xt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            xt--
        }
    }
    , [])
}
function xn() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var bt = "focusScope.autoFocusOnMount"
  , Ct = "focusScope.autoFocusOnUnmount"
  , bn = {
    bubbles: !1,
    cancelable: !0
}
  , Fs = "FocusScope"
  , hr = a.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...s} = e
      , [c,l] = a.useState(null)
      , f = z(o)
      , d = z(i)
      , u = a.useRef(null)
      , p = W(t, m => l(m))
      , v = a.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    a.useEffect( () => {
        if (r) {
            let m = function(b) {
                if (v.paused || !c)
                    return;
                const C = b.target;
                c.contains(C) ? u.current = C : oe(u.current, {
                    select: !0
                })
            }
              , g = function(b) {
                if (v.paused || !c)
                    return;
                const C = b.relatedTarget;
                C !== null && (c.contains(C) || oe(u.current, {
                    select: !0
                }))
            }
              , w = function(b) {
                if (document.activeElement === document.body)
                    for (const E of b)
                        E.removedNodes.length > 0 && oe(c)
            };
            document.addEventListener("focusin", m),
            document.addEventListener("focusout", g);
            const x = new MutationObserver(w);
            return c && x.observe(c, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", m),
                document.removeEventListener("focusout", g),
                x.disconnect()
            }
        }
    }
    , [r, c, v.paused]),
    a.useEffect( () => {
        if (c) {
            En.add(v);
            const m = document.activeElement;
            if (!c.contains(m)) {
                const w = new CustomEvent(bt,bn);
                c.addEventListener(bt, f),
                c.dispatchEvent(w),
                w.defaultPrevented || (js(Gs(gr(c)), {
                    select: !0
                }),
                document.activeElement === m && oe(c))
            }
            return () => {
                c.removeEventListener(bt, f),
                setTimeout( () => {
                    const w = new CustomEvent(Ct,bn);
                    c.addEventListener(Ct, d),
                    c.dispatchEvent(w),
                    w.defaultPrevented || oe(m ?? document.body, {
                        select: !0
                    }),
                    c.removeEventListener(Ct, d),
                    En.remove(v)
                }
                , 0)
            }
        }
    }
    , [c, f, d, v]);
    const h = a.useCallback(m => {
        if (!n && !r || v.paused)
            return;
        const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey
          , w = document.activeElement;
        if (g && w) {
            const x = m.currentTarget
              , [b,C] = $s(x);
            b && C ? !m.shiftKey && w === C ? (m.preventDefault(),
            n && oe(b, {
                select: !0
            })) : m.shiftKey && w === b && (m.preventDefault(),
            n && oe(C, {
                select: !0
            })) : w === x && m.preventDefault()
        }
    }
    , [n, r, v.paused]);
    return y.jsx(j.div, {
        tabIndex: -1,
        ...s,
        ref: p,
        onKeyDown: h
    })
}
);
hr.displayName = Fs;
function js(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (oe(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function $s(e) {
    const t = gr(e)
      , n = Cn(t, e)
      , r = Cn(t.reverse(), e);
    return [n, r]
}
function gr(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Cn(e, t) {
    for (const n of e)
        if (!Bs(n, {
            upTo: t
        }))
            return n
}
function Bs(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function Ws(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function oe(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && Ws(e) && t && e.select()
    }
}
var En = Us();
function Us() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = Sn(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = Sn(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function Sn(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function Gs(e) {
    return e.filter(t => t.tagName !== "A")
}
function Hs(e, t=[]) {
    let n = [];
    function r(i, s) {
        const c = a.createContext(s)
          , l = n.length;
        n = [...n, s];
        function f(u) {
            const {scope: p, children: v, ...h} = u
              , m = (p == null ? void 0 : p[e][l]) || c
              , g = a.useMemo( () => h, Object.values(h));
            return y.jsx(m.Provider, {
                value: g,
                children: v
            })
        }
        function d(u, p) {
            const v = (p == null ? void 0 : p[e][l]) || c
              , h = a.useContext(v);
            if (h)
                return h;
            if (s !== void 0)
                return s;
            throw new Error(`\`${u}\` must be used within \`${i}\``)
        }
        return f.displayName = i + "Provider",
        [f, d]
    }
    const o = () => {
        const i = n.map(s => a.createContext(s));
        return function(c) {
            const l = (c == null ? void 0 : c[e]) || i;
            return a.useMemo( () => ({
                [`__scope${e}`]: {
                    ...c,
                    [e]: l
                }
            }), [c, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, Ks(o, ...t)]
}
function Ks(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (c, {useScope: l, scopeName: f}) => {
                const u = l(i)[`__scope${f}`];
                return {
                    ...c,
                    ...u
                }
            }
            , {});
            return a.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var Et = "rovingFocusGroup.onEntryFocus"
  , Vs = {
    bubbles: !1,
    cancelable: !0
}
  , pt = "RovingFocusGroup"
  , [Lt,wr,Ys] = Ln(pt)
  , [zs,mt] = Hs(pt, [Ys])
  , [Xs,qs] = zs(pt)
  , yr = a.forwardRef( (e, t) => y.jsx(Lt.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: y.jsx(Lt.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: y.jsx(Zs, {
            ...e,
            ref: t
        })
    })
}));
yr.displayName = pt;
var Zs = a.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, orientation: r, loop: o=!1, dir: i, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: f, preventScrollOnEntryFocus: d=!1, ...u} = e
      , p = a.useRef(null)
      , v = W(t, p)
      , h = zt(i)
      , [m=null,g] = jt({
        prop: s,
        defaultProp: c,
        onChange: l
    })
      , [w,x] = a.useState(!1)
      , b = z(f)
      , C = wr(n)
      , E = a.useRef(!1)
      , [P,R] = a.useState(0);
    return a.useEffect( () => {
        const M = p.current;
        if (M)
            return M.addEventListener(Et, b),
            () => M.removeEventListener(Et, b)
    }
    , [b]),
    y.jsx(Xs, {
        scope: n,
        orientation: r,
        dir: h,
        loop: o,
        currentTabStopId: m,
        onItemFocus: a.useCallback(M => g(M), [g]),
        onItemShiftTab: a.useCallback( () => x(!0), []),
        onFocusableItemAdd: a.useCallback( () => R(M => M + 1), []),
        onFocusableItemRemove: a.useCallback( () => R(M => M - 1), []),
        children: y.jsx(j.div, {
            tabIndex: w || P === 0 ? -1 : 0,
            "data-orientation": r,
            ...u,
            ref: v,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: A(e.onMouseDown, () => {
                E.current = !0
            }
            ),
            onFocus: A(e.onFocus, M => {
                const I = !E.current;
                if (M.target === M.currentTarget && I && !w) {
                    const _ = new CustomEvent(Et,Vs);
                    if (M.currentTarget.dispatchEvent(_),
                    !_.defaultPrevented) {
                        const k = C().filter(O => O.focusable)
                          , F = k.find(O => O.active)
                          , D = k.find(O => O.id === m)
                          , B = [F, D, ...k].filter(Boolean).map(O => O.ref.current);
                        Cr(B, d)
                    }
                }
                E.current = !1
            }
            ),
            onBlur: A(e.onBlur, () => x(!1))
        })
    })
}
)
  , xr = "RovingFocusGroupItem"
  , br = a.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, focusable: r=!0, active: o=!1, tabStopId: i, ...s} = e
      , c = qe()
      , l = i || c
      , f = qs(xr, n)
      , d = f.currentTabStopId === l
      , u = wr(n)
      , {onFocusableItemAdd: p, onFocusableItemRemove: v} = f;
    return a.useEffect( () => {
        if (r)
            return p(),
            () => v()
    }
    , [r, p, v]),
    y.jsx(Lt.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: y.jsx(j.span, {
            tabIndex: d ? 0 : -1,
            "data-orientation": f.orientation,
            ...s,
            ref: t,
            onMouseDown: A(e.onMouseDown, h => {
                r ? f.onItemFocus(l) : h.preventDefault()
            }
            ),
            onFocus: A(e.onFocus, () => f.onItemFocus(l)),
            onKeyDown: A(e.onKeyDown, h => {
                if (h.key === "Tab" && h.shiftKey) {
                    f.onItemShiftTab();
                    return
                }
                if (h.target !== h.currentTarget)
                    return;
                const m = ec(h, f.orientation, f.dir);
                if (m !== void 0) {
                    if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey)
                        return;
                    h.preventDefault();
                    let w = u().filter(x => x.focusable).map(x => x.ref.current);
                    if (m === "last")
                        w.reverse();
                    else if (m === "prev" || m === "next") {
                        m === "prev" && w.reverse();
                        const x = w.indexOf(h.currentTarget);
                        w = f.loop ? tc(w, x + 1) : w.slice(x + 1)
                    }
                    setTimeout( () => Cr(w))
                }
            }
            )
        })
    })
}
);
br.displayName = xr;
var Qs = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function Js(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}
function ec(e, t, n) {
    const r = Js(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
        return Qs[r]
}
function Cr(e, t=!1) {
    const n = document.activeElement;
    for (const r of e)
        if (r === n || (r.focus({
            preventScroll: t
        }),
        document.activeElement !== n))
            return
}
function tc(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var Er = yr
  , Sr = br
  , nc = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , he = new WeakMap
  , Ge = new WeakMap
  , He = {}
  , St = 0
  , Rr = function(e) {
    return e && (e.host || Rr(e.parentNode))
}
  , rc = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = Rr(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , oc = function(e, t, n, r) {
    var o = rc(t, Array.isArray(e) ? e : [e]);
    He[n] || (He[n] = new WeakMap);
    var i = He[n]
      , s = []
      , c = new Set
      , l = new Set(o)
      , f = function(u) {
        !u || c.has(u) || (c.add(u),
        f(u.parentNode))
    };
    o.forEach(f);
    var d = function(u) {
        !u || l.has(u) || Array.prototype.forEach.call(u.children, function(p) {
            if (c.has(p))
                d(p);
            else
                try {
                    var v = p.getAttribute(r)
                      , h = v !== null && v !== "false"
                      , m = (he.get(p) || 0) + 1
                      , g = (i.get(p) || 0) + 1;
                    he.set(p, m),
                    i.set(p, g),
                    s.push(p),
                    m === 1 && h && Ge.set(p, !0),
                    g === 1 && p.setAttribute(n, "true"),
                    h || p.setAttribute(r, "true")
                } catch (w) {
                    console.error("aria-hidden: cannot operate on ", p, w)
                }
        })
    };
    return d(t),
    c.clear(),
    St++,
    function() {
        s.forEach(function(u) {
            var p = he.get(u) - 1
              , v = i.get(u) - 1;
            he.set(u, p),
            i.set(u, v),
            p || (Ge.has(u) || u.removeAttribute(r),
            Ge.delete(u)),
            v || u.removeAttribute(n)
        }),
        St--,
        St || (he = new WeakMap,
        he = new WeakMap,
        Ge = new WeakMap,
        He = {})
    }
}
  , ic = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = nc(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    oc(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , Q = function() {
    return Q = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    Q.apply(this, arguments)
};
function Pr(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function sc(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
            (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)),
            i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var ze = "right-scroll-bar-position"
  , Xe = "width-before-scroll-bar"
  , cc = "with-scroll-bars-hidden"
  , ac = "--removed-body-scroll-bar-size";
function Rt(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function uc(e, t) {
    var n = a.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var lc = typeof window < "u" ? a.useLayoutEffect : a.useEffect
  , Rn = new WeakMap;
function fc(e, t) {
    var n = uc(null, function(r) {
        return e.forEach(function(o) {
            return Rt(o, r)
        })
    });
    return lc(function() {
        var r = Rn.get(n);
        if (r) {
            var o = new Set(r)
              , i = new Set(e)
              , s = n.current;
            o.forEach(function(c) {
                i.has(c) || Rt(c, null)
            }),
            i.forEach(function(c) {
                o.has(c) || Rt(c, s)
            })
        }
        Rn.set(n, e)
    }, [e]),
    n
}
function dc(e) {
    return e
}
function pc(e, t) {
    t === void 0 && (t = dc);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(i) {
            var s = t(i, r);
            return n.push(s),
            function() {
                n = n.filter(function(c) {
                    return c !== s
                })
            }
        },
        assignSyncMedium: function(i) {
            for (r = !0; n.length; ) {
                var s = n;
                n = [],
                s.forEach(i)
            }
            n = {
                push: function(c) {
                    return i(c)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(i) {
            r = !0;
            var s = [];
            if (n.length) {
                var c = n;
                n = [],
                c.forEach(i),
                s = n
            }
            var l = function() {
                var d = s;
                s = [],
                d.forEach(i)
            }
              , f = function() {
                return Promise.resolve().then(l)
            };
            f(),
            n = {
                push: function(d) {
                    s.push(d),
                    f()
                },
                filter: function(d) {
                    return s = s.filter(d),
                    n
                }
            }
        }
    };
    return o
}
function mc(e) {
    e === void 0 && (e = {});
    var t = pc(null);
    return t.options = Q({
        async: !0,
        ssr: !1
    }, e),
    t
}
var Mr = function(e) {
    var t = e.sideCar
      , n = Pr(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return a.createElement(r, Q({}, n))
};
Mr.isSideCarExport = !0;
function vc(e, t) {
    return e.useMedium(t),
    Mr
}
var Ar = mc()
  , Pt = function() {}
  , vt = a.forwardRef(function(e, t) {
    var n = a.useRef(null)
      , r = a.useState({
        onScrollCapture: Pt,
        onWheelCapture: Pt,
        onTouchMoveCapture: Pt
    })
      , o = r[0]
      , i = r[1]
      , s = e.forwardProps
      , c = e.children
      , l = e.className
      , f = e.removeScrollBar
      , d = e.enabled
      , u = e.shards
      , p = e.sideCar
      , v = e.noIsolation
      , h = e.inert
      , m = e.allowPinchZoom
      , g = e.as
      , w = g === void 0 ? "div" : g
      , x = e.gapMode
      , b = Pr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , C = p
      , E = fc([n, t])
      , P = Q(Q({}, b), o);
    return a.createElement(a.Fragment, null, d && a.createElement(C, {
        sideCar: Ar,
        removeScrollBar: f,
        shards: u,
        noIsolation: v,
        inert: h,
        setCallbacks: i,
        allowPinchZoom: !!m,
        lockRef: n,
        gapMode: x
    }), s ? a.cloneElement(a.Children.only(c), Q(Q({}, P), {
        ref: E
    })) : a.createElement(w, Q({}, P, {
        className: l,
        ref: E
    }), c))
});
vt.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
vt.classNames = {
    fullWidth: Xe,
    zeroRight: ze
};
var hc = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function gc() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = hc();
    return t && e.setAttribute("nonce", t),
    e
}
function wc(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function yc(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var xc = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = gc()) && (wc(t, n),
            yc(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , bc = function() {
    var e = xc();
    return function(t, n) {
        a.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , Tr = function() {
    var e = bc()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , Cc = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Mt = function(e) {
    return parseInt(e || "", 10) || 0
}
  , Ec = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Mt(n), Mt(r), Mt(o)]
}
  , Sc = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return Cc;
    var t = Ec(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , Rc = Tr()
  , xe = "data-scroll-locked"
  , Pc = function(e, t, n, r) {
    var o = e.left
      , i = e.top
      , s = e.right
      , c = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(cc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body[`).concat(xe, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(ze, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Xe, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(ze, " .").concat(ze, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Xe, " .").concat(Xe, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(xe, `] {
    `).concat(ac, ": ").concat(c, `px;
  }
`)
}
  , Pn = function() {
    var e = parseInt(document.body.getAttribute(xe) || "0", 10);
    return isFinite(e) ? e : 0
}
  , Mc = function() {
    a.useEffect(function() {
        return document.body.setAttribute(xe, (Pn() + 1).toString()),
        function() {
            var e = Pn() - 1;
            e <= 0 ? document.body.removeAttribute(xe) : document.body.setAttribute(xe, e.toString())
        }
    }, [])
}
  , Ac = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    Mc();
    var i = a.useMemo(function() {
        return Sc(o)
    }, [o]);
    return a.createElement(Rc, {
        styles: Pc(i, !t, o, n ? "" : "!important")
    })
}
  , kt = !1;
if (typeof window < "u")
    try {
        var Ke = Object.defineProperty({}, "passive", {
            get: function() {
                return kt = !0,
                !0
            }
        });
        window.addEventListener("test", Ke, Ke),
        window.removeEventListener("test", Ke, Ke)
    } catch {
        kt = !1
    }
var ge = kt ? {
    passive: !1
} : !1
  , Tc = function(e) {
    return e.tagName === "TEXTAREA"
}
  , _r = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Tc(e) && n[t] === "visible")
}
  , _c = function(e) {
    return _r(e, "overflowY")
}
  , Oc = function(e) {
    return _r(e, "overflowX")
}
  , Mn = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = Or(e, r);
        if (o) {
            var i = Ir(e, r)
              , s = i[1]
              , c = i[2];
            if (s > c)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , Ic = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , Nc = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , Or = function(e, t) {
    return e === "v" ? _c(t) : Oc(t)
}
  , Ir = function(e, t) {
    return e === "v" ? Ic(t) : Nc(t)
}
  , Dc = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , Lc = function(e, t, n, r, o) {
    var i = Dc(e, window.getComputedStyle(t).direction)
      , s = i * r
      , c = n.target
      , l = t.contains(c)
      , f = !1
      , d = s > 0
      , u = 0
      , p = 0;
    do {
        var v = Ir(e, c)
          , h = v[0]
          , m = v[1]
          , g = v[2]
          , w = m - g - i * h;
        (h || w) && Or(e, c) && (u += w,
        p += h),
        c instanceof ShadowRoot ? c = c.host : c = c.parentNode
    } while (!l && c !== document.body || l && (t.contains(c) || t === c));
    return (d && (Math.abs(u) < 1 || !o) || !d && (Math.abs(p) < 1 || !o)) && (f = !0),
    f
}
  , Ve = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , An = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Tn = function(e) {
    return e && "current"in e ? e.current : e
}
  , kc = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , Fc = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , jc = 0
  , we = [];
function $c(e) {
    var t = a.useRef([])
      , n = a.useRef([0, 0])
      , r = a.useRef()
      , o = a.useState(jc++)[0]
      , i = a.useState(Tr)[0]
      , s = a.useRef(e);
    a.useEffect(function() {
        s.current = e
    }, [e]),
    a.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var m = sc([e.lockRef.current], (e.shards || []).map(Tn), !0).filter(Boolean);
            return m.forEach(function(g) {
                return g.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                m.forEach(function(g) {
                    return g.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var c = a.useCallback(function(m, g) {
        if ("touches"in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
            return !s.current.allowPinchZoom;
        var w = Ve(m), x = n.current, b = "deltaX"in m ? m.deltaX : x[0] - w[0], C = "deltaY"in m ? m.deltaY : x[1] - w[1], E, P = m.target, R = Math.abs(b) > Math.abs(C) ? "h" : "v";
        if ("touches"in m && R === "h" && P.type === "range")
            return !1;
        var M = Mn(R, P);
        if (!M)
            return !0;
        if (M ? E = R : (E = R === "v" ? "h" : "v",
        M = Mn(R, P)),
        !M)
            return !1;
        if (!r.current && "changedTouches"in m && (b || C) && (r.current = E),
        !E)
            return !0;
        var I = r.current || E;
        return Lc(I, g, m, I === "h" ? b : C, !0)
    }, [])
      , l = a.useCallback(function(m) {
        var g = m;
        if (!(!we.length || we[we.length - 1] !== i)) {
            var w = "deltaY"in g ? An(g) : Ve(g)
              , x = t.current.filter(function(E) {
                return E.name === g.type && (E.target === g.target || g.target === E.shadowParent) && kc(E.delta, w)
            })[0];
            if (x && x.should) {
                g.cancelable && g.preventDefault();
                return
            }
            if (!x) {
                var b = (s.current.shards || []).map(Tn).filter(Boolean).filter(function(E) {
                    return E.contains(g.target)
                })
                  , C = b.length > 0 ? c(g, b[0]) : !s.current.noIsolation;
                C && g.cancelable && g.preventDefault()
            }
        }
    }, [])
      , f = a.useCallback(function(m, g, w, x) {
        var b = {
            name: m,
            delta: g,
            target: w,
            should: x,
            shadowParent: Bc(w)
        };
        t.current.push(b),
        setTimeout(function() {
            t.current = t.current.filter(function(C) {
                return C !== b
            })
        }, 1)
    }, [])
      , d = a.useCallback(function(m) {
        n.current = Ve(m),
        r.current = void 0
    }, [])
      , u = a.useCallback(function(m) {
        f(m.type, An(m), m.target, c(m, e.lockRef.current))
    }, [])
      , p = a.useCallback(function(m) {
        f(m.type, Ve(m), m.target, c(m, e.lockRef.current))
    }, []);
    a.useEffect(function() {
        return we.push(i),
        e.setCallbacks({
            onScrollCapture: u,
            onWheelCapture: u,
            onTouchMoveCapture: p
        }),
        document.addEventListener("wheel", l, ge),
        document.addEventListener("touchmove", l, ge),
        document.addEventListener("touchstart", d, ge),
        function() {
            we = we.filter(function(m) {
                return m !== i
            }),
            document.removeEventListener("wheel", l, ge),
            document.removeEventListener("touchmove", l, ge),
            document.removeEventListener("touchstart", d, ge)
        }
    }, []);
    var v = e.removeScrollBar
      , h = e.inert;
    return a.createElement(a.Fragment, null, h ? a.createElement(i, {
        styles: Fc(o)
    }) : null, v ? a.createElement(Ac, {
        gapMode: e.gapMode
    }) : null)
}
function Bc(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const Wc = vc(Ar, $c);
var Nr = a.forwardRef(function(e, t) {
    return a.createElement(vt, Q({}, e, {
        ref: t,
        sideCar: Wc
    }))
});
Nr.classNames = vt.classNames;
var Ft = ["Enter", " "]
  , Uc = ["ArrowDown", "PageUp", "Home"]
  , Dr = ["ArrowUp", "PageDown", "End"]
  , Gc = [...Uc, ...Dr]
  , Hc = {
    ltr: [...Ft, "ArrowRight"],
    rtl: [...Ft, "ArrowLeft"]
}
  , Kc = {
    ltr: ["ArrowLeft"],
    rtl: ["ArrowRight"]
}
  , Fe = "Menu"
  , [De,Vc,Yc] = Ln(Fe)
  , [me,Lr] = it(Fe, [Yc, lt, mt])
  , ht = lt()
  , kr = mt()
  , [zc,ve] = me(Fe)
  , [Xc,je] = me(Fe)
  , Fr = e => {
    const {__scopeMenu: t, open: n=!1, children: r, dir: o, onOpenChange: i, modal: s=!0} = e
      , c = ht(t)
      , [l,f] = a.useState(null)
      , d = a.useRef(!1)
      , u = z(i)
      , p = zt(o);
    return a.useEffect( () => {
        const v = () => {
            d.current = !0,
            document.addEventListener("pointerdown", h, {
                capture: !0,
                once: !0
            }),
            document.addEventListener("pointermove", h, {
                capture: !0,
                once: !0
            })
        }
          , h = () => d.current = !1;
        return document.addEventListener("keydown", v, {
            capture: !0
        }),
        () => {
            document.removeEventListener("keydown", v, {
                capture: !0
            }),
            document.removeEventListener("pointerdown", h, {
                capture: !0
            }),
            document.removeEventListener("pointermove", h, {
                capture: !0
            })
        }
    }
    , []),
    y.jsx(ys, {
        ...c,
        children: y.jsx(zc, {
            scope: t,
            open: n,
            onOpenChange: u,
            content: l,
            onContentChange: f,
            children: y.jsx(Xc, {
                scope: t,
                onClose: a.useCallback( () => u(!1), [u]),
                isUsingKeyboardRef: d,
                dir: p,
                modal: s,
                children: r
            })
        })
    })
}
;
Fr.displayName = Fe;
var qc = "MenuAnchor"
  , Xt = a.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e
      , o = ht(n);
    return y.jsx(sr, {
        ...o,
        ...r,
        ref: t
    })
}
);
Xt.displayName = qc;
var qt = "MenuPortal"
  , [Zc,jr] = me(qt, {
    forceMount: void 0
})
  , $r = e => {
    const {__scopeMenu: t, forceMount: n, children: r, container: o} = e
      , i = ve(qt, t);
    return y.jsx(Zc, {
        scope: t,
        forceMount: n,
        children: y.jsx(pe, {
            present: n || i.open,
            children: y.jsx(Bn, {
                asChild: !0,
                container: o,
                children: r
            })
        })
    })
}
;
$r.displayName = qt;
var Y = "MenuContent"
  , [Qc,Zt] = me(Y)
  , Br = a.forwardRef( (e, t) => {
    const n = jr(Y, e.__scopeMenu)
      , {forceMount: r=n.forceMount, ...o} = e
      , i = ve(Y, e.__scopeMenu)
      , s = je(Y, e.__scopeMenu);
    return y.jsx(De.Provider, {
        scope: e.__scopeMenu,
        children: y.jsx(pe, {
            present: r || i.open,
            children: y.jsx(De.Slot, {
                scope: e.__scopeMenu,
                children: s.modal ? y.jsx(Jc, {
                    ...o,
                    ref: t
                }) : y.jsx(ea, {
                    ...o,
                    ref: t
                })
            })
        })
    })
}
)
  , Jc = a.forwardRef( (e, t) => {
    const n = ve(Y, e.__scopeMenu)
      , r = a.useRef(null)
      , o = W(t, r);
    return a.useEffect( () => {
        const i = r.current;
        if (i)
            return ic(i)
    }
    , []),
    y.jsx(Qt, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: A(e.onFocusOutside, i => i.preventDefault(), {
            checkForDefaultPrevented: !1
        }),
        onDismiss: () => n.onOpenChange(!1)
    })
}
)
  , ea = a.forwardRef( (e, t) => {
    const n = ve(Y, e.__scopeMenu);
    return y.jsx(Qt, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1)
    })
}
)
  , Qt = a.forwardRef( (e, t) => {
    const {__scopeMenu: n, loop: r=!1, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: f, onPointerDownOutside: d, onFocusOutside: u, onInteractOutside: p, onDismiss: v, disableOutsideScroll: h, ...m} = e
      , g = ve(Y, n)
      , w = je(Y, n)
      , x = ht(n)
      , b = kr(n)
      , C = Vc(n)
      , [E,P] = a.useState(null)
      , R = a.useRef(null)
      , M = W(t, R, g.onContentChange)
      , I = a.useRef(0)
      , _ = a.useRef("")
      , k = a.useRef(0)
      , F = a.useRef(null)
      , D = a.useRef("right")
      , N = a.useRef(0)
      , B = h ? Nr : a.Fragment
      , O = h ? {
        as: Oe,
        allowPinchZoom: !0
    } : void 0
      , $ = S => {
        var te, Me;
        const L = _.current + S
          , U = C().filter(V => !V.disabled)
          , Z = document.activeElement
          , Re = (te = U.find(V => V.ref.current === Z)) == null ? void 0 : te.textValue
          , Pe = U.map(V => V.textValue)
          , $e = da(Pe, L, Re)
          , ue = (Me = U.find(V => V.textValue === $e)) == null ? void 0 : Me.ref.current;
        (function V(Ae) {
            _.current = Ae,
            window.clearTimeout(I.current),
            Ae !== "" && (I.current = window.setTimeout( () => V(""), 1e3))
        }
        )(L),
        ue && setTimeout( () => ue.focus())
    }
    ;
    a.useEffect( () => () => window.clearTimeout(I.current), []),
    ks();
    const T = a.useCallback(S => {
        var U, Z;
        return D.current === ((U = F.current) == null ? void 0 : U.side) && ma(S, (Z = F.current) == null ? void 0 : Z.area)
    }
    , []);
    return y.jsx(Qc, {
        scope: n,
        searchRef: _,
        onItemEnter: a.useCallback(S => {
            T(S) && S.preventDefault()
        }
        , [T]),
        onItemLeave: a.useCallback(S => {
            var L;
            T(S) || ((L = R.current) == null || L.focus(),
            P(null))
        }
        , [T]),
        onTriggerLeave: a.useCallback(S => {
            T(S) && S.preventDefault()
        }
        , [T]),
        pointerGraceTimerRef: k,
        onPointerGraceIntentChange: a.useCallback(S => {
            F.current = S
        }
        , []),
        children: y.jsx(B, {
            ...O,
            children: y.jsx(hr, {
                asChild: !0,
                trapped: o,
                onMountAutoFocus: A(i, S => {
                    var L;
                    S.preventDefault(),
                    (L = R.current) == null || L.focus({
                        preventScroll: !0
                    })
                }
                ),
                onUnmountAutoFocus: s,
                children: y.jsx(st, {
                    asChild: !0,
                    disableOutsidePointerEvents: c,
                    onEscapeKeyDown: f,
                    onPointerDownOutside: d,
                    onFocusOutside: u,
                    onInteractOutside: p,
                    onDismiss: v,
                    children: y.jsx(Er, {
                        asChild: !0,
                        ...b,
                        dir: w.dir,
                        orientation: "vertical",
                        loop: r,
                        currentTabStopId: E,
                        onCurrentTabStopIdChange: P,
                        onEntryFocus: A(l, S => {
                            w.isUsingKeyboardRef.current || S.preventDefault()
                        }
                        ),
                        preventScrollOnEntryFocus: !0,
                        children: y.jsx(cr, {
                            role: "menu",
                            "aria-orientation": "vertical",
                            "data-state": no(g.open),
                            "data-radix-menu-content": "",
                            dir: w.dir,
                            ...x,
                            ...m,
                            ref: M,
                            style: {
                                outline: "none",
                                ...m.style
                            },
                            onKeyDown: A(m.onKeyDown, S => {
                                const U = S.target.closest("[data-radix-menu-content]") === S.currentTarget
                                  , Z = S.ctrlKey || S.altKey || S.metaKey
                                  , Re = S.key.length === 1;
                                U && (S.key === "Tab" && S.preventDefault(),
                                !Z && Re && $(S.key));
                                const Pe = R.current;
                                if (S.target !== Pe || !Gc.includes(S.key))
                                    return;
                                S.preventDefault();
                                const ue = C().filter(te => !te.disabled).map(te => te.ref.current);
                                Dr.includes(S.key) && ue.reverse(),
                                la(ue)
                            }
                            ),
                            onBlur: A(e.onBlur, S => {
                                S.currentTarget.contains(S.target) || (window.clearTimeout(I.current),
                                _.current = "")
                            }
                            ),
                            onPointerMove: A(e.onPointerMove, Le(S => {
                                const L = S.target
                                  , U = N.current !== S.clientX;
                                if (S.currentTarget.contains(L) && U) {
                                    const Z = S.clientX > N.current ? "right" : "left";
                                    D.current = Z,
                                    N.current = S.clientX
                                }
                            }
                            ))
                        })
                    })
                })
            })
        })
    })
}
);
Br.displayName = Y;
var ta = "MenuGroup"
  , Jt = a.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e;
    return y.jsx(j.div, {
        role: "group",
        ...r,
        ref: t
    })
}
);
Jt.displayName = ta;
var na = "MenuLabel"
  , Wr = a.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e;
    return y.jsx(j.div, {
        ...r,
        ref: t
    })
}
);
Wr.displayName = na;
var tt = "MenuItem"
  , _n = "menu.itemSelect"
  , gt = a.forwardRef( (e, t) => {
    const {disabled: n=!1, onSelect: r, ...o} = e
      , i = a.useRef(null)
      , s = je(tt, e.__scopeMenu)
      , c = Zt(tt, e.__scopeMenu)
      , l = W(t, i)
      , f = a.useRef(!1)
      , d = () => {
        const u = i.current;
        if (!n && u) {
            const p = new CustomEvent(_n,{
                bubbles: !0,
                cancelable: !0
            });
            u.addEventListener(_n, v => r == null ? void 0 : r(v), {
                once: !0
            }),
            kn(u, p),
            p.defaultPrevented ? f.current = !1 : s.onClose()
        }
    }
    ;
    return y.jsx(Ur, {
        ...o,
        ref: l,
        disabled: n,
        onClick: A(e.onClick, d),
        onPointerDown: u => {
            var p;
            (p = e.onPointerDown) == null || p.call(e, u),
            f.current = !0
        }
        ,
        onPointerUp: A(e.onPointerUp, u => {
            var p;
            f.current || (p = u.currentTarget) == null || p.click()
        }
        ),
        onKeyDown: A(e.onKeyDown, u => {
            const p = c.searchRef.current !== "";
            n || p && u.key === " " || Ft.includes(u.key) && (u.currentTarget.click(),
            u.preventDefault())
        }
        )
    })
}
);
gt.displayName = tt;
var Ur = a.forwardRef( (e, t) => {
    const {__scopeMenu: n, disabled: r=!1, textValue: o, ...i} = e
      , s = Zt(tt, n)
      , c = kr(n)
      , l = a.useRef(null)
      , f = W(t, l)
      , [d,u] = a.useState(!1)
      , [p,v] = a.useState("");
    return a.useEffect( () => {
        const h = l.current;
        h && v((h.textContent ?? "").trim())
    }
    , [i.children]),
    y.jsx(De.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: y.jsx(Sr, {
            asChild: !0,
            ...c,
            focusable: !r,
            children: y.jsx(j.div, {
                role: "menuitem",
                "data-highlighted": d ? "" : void 0,
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                ...i,
                ref: f,
                onPointerMove: A(e.onPointerMove, Le(h => {
                    r ? s.onItemLeave(h) : (s.onItemEnter(h),
                    h.defaultPrevented || h.currentTarget.focus({
                        preventScroll: !0
                    }))
                }
                )),
                onPointerLeave: A(e.onPointerLeave, Le(h => s.onItemLeave(h))),
                onFocus: A(e.onFocus, () => u(!0)),
                onBlur: A(e.onBlur, () => u(!1))
            })
        })
    })
}
)
  , ra = "MenuCheckboxItem"
  , Gr = a.forwardRef( (e, t) => {
    const {checked: n=!1, onCheckedChange: r, ...o} = e;
    return y.jsx(zr, {
        scope: e.__scopeMenu,
        checked: n,
        children: y.jsx(gt, {
            role: "menuitemcheckbox",
            "aria-checked": nt(n) ? "mixed" : n,
            ...o,
            ref: t,
            "data-state": tn(n),
            onSelect: A(o.onSelect, () => r == null ? void 0 : r(nt(n) ? !0 : !n), {
                checkForDefaultPrevented: !1
            })
        })
    })
}
);
Gr.displayName = ra;
var Hr = "MenuRadioGroup"
  , [oa,ia] = me(Hr, {
    value: void 0,
    onValueChange: () => {}
})
  , Kr = a.forwardRef( (e, t) => {
    const {value: n, onValueChange: r, ...o} = e
      , i = z(r);
    return y.jsx(oa, {
        scope: e.__scopeMenu,
        value: n,
        onValueChange: i,
        children: y.jsx(Jt, {
            ...o,
            ref: t
        })
    })
}
);
Kr.displayName = Hr;
var Vr = "MenuRadioItem"
  , Yr = a.forwardRef( (e, t) => {
    const {value: n, ...r} = e
      , o = ia(Vr, e.__scopeMenu)
      , i = n === o.value;
    return y.jsx(zr, {
        scope: e.__scopeMenu,
        checked: i,
        children: y.jsx(gt, {
            role: "menuitemradio",
            "aria-checked": i,
            ...r,
            ref: t,
            "data-state": tn(i),
            onSelect: A(r.onSelect, () => {
                var s;
                return (s = o.onValueChange) == null ? void 0 : s.call(o, n)
            }
            , {
                checkForDefaultPrevented: !1
            })
        })
    })
}
);
Yr.displayName = Vr;
var en = "MenuItemIndicator"
  , [zr,sa] = me(en, {
    checked: !1
})
  , Xr = a.forwardRef( (e, t) => {
    const {__scopeMenu: n, forceMount: r, ...o} = e
      , i = sa(en, n);
    return y.jsx(pe, {
        present: r || nt(i.checked) || i.checked === !0,
        children: y.jsx(j.span, {
            ...o,
            ref: t,
            "data-state": tn(i.checked)
        })
    })
}
);
Xr.displayName = en;
var ca = "MenuSeparator"
  , qr = a.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e;
    return y.jsx(j.div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
    })
}
);
qr.displayName = ca;
var aa = "MenuArrow"
  , Zr = a.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e
      , o = ht(n);
    return y.jsx(ar, {
        ...o,
        ...r,
        ref: t
    })
}
);
Zr.displayName = aa;
var ua = "MenuSub"
  , [ru,Qr] = me(ua)
  , _e = "MenuSubTrigger"
  , Jr = a.forwardRef( (e, t) => {
    const n = ve(_e, e.__scopeMenu)
      , r = je(_e, e.__scopeMenu)
      , o = Qr(_e, e.__scopeMenu)
      , i = Zt(_e, e.__scopeMenu)
      , s = a.useRef(null)
      , {pointerGraceTimerRef: c, onPointerGraceIntentChange: l} = i
      , f = {
        __scopeMenu: e.__scopeMenu
    }
      , d = a.useCallback( () => {
        s.current && window.clearTimeout(s.current),
        s.current = null
    }
    , []);
    return a.useEffect( () => d, [d]),
    a.useEffect( () => {
        const u = c.current;
        return () => {
            window.clearTimeout(u),
            l(null)
        }
    }
    , [c, l]),
    y.jsx(Xt, {
        asChild: !0,
        ...f,
        children: y.jsx(Ur, {
            id: o.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": n.open,
            "aria-controls": o.contentId,
            "data-state": no(n.open),
            ...e,
            ref: ot(t, o.onTriggerChange),
            onClick: u => {
                var p;
                (p = e.onClick) == null || p.call(e, u),
                !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(),
                n.open || n.onOpenChange(!0))
            }
            ,
            onPointerMove: A(e.onPointerMove, Le(u => {
                i.onItemEnter(u),
                !u.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null),
                s.current = window.setTimeout( () => {
                    n.onOpenChange(!0),
                    d()
                }
                , 100))
            }
            )),
            onPointerLeave: A(e.onPointerLeave, Le(u => {
                var v, h;
                d();
                const p = (v = n.content) == null ? void 0 : v.getBoundingClientRect();
                if (p) {
                    const m = (h = n.content) == null ? void 0 : h.dataset.side
                      , g = m === "right"
                      , w = g ? -5 : 5
                      , x = p[g ? "left" : "right"]
                      , b = p[g ? "right" : "left"];
                    i.onPointerGraceIntentChange({
                        area: [{
                            x: u.clientX + w,
                            y: u.clientY
                        }, {
                            x,
                            y: p.top
                        }, {
                            x: b,
                            y: p.top
                        }, {
                            x: b,
                            y: p.bottom
                        }, {
                            x,
                            y: p.bottom
                        }],
                        side: m
                    }),
                    window.clearTimeout(c.current),
                    c.current = window.setTimeout( () => i.onPointerGraceIntentChange(null), 300)
                } else {
                    if (i.onTriggerLeave(u),
                    u.defaultPrevented)
                        return;
                    i.onPointerGraceIntentChange(null)
                }
            }
            )),
            onKeyDown: A(e.onKeyDown, u => {
                var v;
                const p = i.searchRef.current !== "";
                e.disabled || p && u.key === " " || Hc[r.dir].includes(u.key) && (n.onOpenChange(!0),
                (v = n.content) == null || v.focus(),
                u.preventDefault())
            }
            )
        })
    })
}
);
Jr.displayName = _e;
var eo = "MenuSubContent"
  , to = a.forwardRef( (e, t) => {
    const n = jr(Y, e.__scopeMenu)
      , {forceMount: r=n.forceMount, ...o} = e
      , i = ve(Y, e.__scopeMenu)
      , s = je(Y, e.__scopeMenu)
      , c = Qr(eo, e.__scopeMenu)
      , l = a.useRef(null)
      , f = W(t, l);
    return y.jsx(De.Provider, {
        scope: e.__scopeMenu,
        children: y.jsx(pe, {
            present: r || i.open,
            children: y.jsx(De.Slot, {
                scope: e.__scopeMenu,
                children: y.jsx(Qt, {
                    id: c.contentId,
                    "aria-labelledby": c.triggerId,
                    ...o,
                    ref: f,
                    align: "start",
                    side: s.dir === "rtl" ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: d => {
                        var u;
                        s.isUsingKeyboardRef.current && ((u = l.current) == null || u.focus()),
                        d.preventDefault()
                    }
                    ,
                    onCloseAutoFocus: d => d.preventDefault(),
                    onFocusOutside: A(e.onFocusOutside, d => {
                        d.target !== c.trigger && i.onOpenChange(!1)
                    }
                    ),
                    onEscapeKeyDown: A(e.onEscapeKeyDown, d => {
                        s.onClose(),
                        d.preventDefault()
                    }
                    ),
                    onKeyDown: A(e.onKeyDown, d => {
                        var v;
                        const u = d.currentTarget.contains(d.target)
                          , p = Kc[s.dir].includes(d.key);
                        u && p && (i.onOpenChange(!1),
                        (v = c.trigger) == null || v.focus(),
                        d.preventDefault())
                    }
                    )
                })
            })
        })
    })
}
);
to.displayName = eo;
function no(e) {
    return e ? "open" : "closed"
}
function nt(e) {
    return e === "indeterminate"
}
function tn(e) {
    return nt(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
function la(e) {
    const t = document.activeElement;
    for (const n of e)
        if (n === t || (n.focus(),
        document.activeElement !== t))
            return
}
function fa(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
function da(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(f => f === t[0]) ? t[0] : t
      , i = n ? e.indexOf(n) : -1;
    let s = fa(e, Math.max(i, 0));
    o.length === 1 && (s = s.filter(f => f !== n));
    const l = s.find(f => f.toLowerCase().startsWith(o.toLowerCase()));
    return l !== n ? l : void 0
}
function pa(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const c = t[i].x
          , l = t[i].y
          , f = t[s].x
          , d = t[s].y;
        l > r != d > r && n < (f - c) * (r - l) / (d - l) + c && (o = !o)
    }
    return o
}
function ma(e, t) {
    if (!t)
        return !1;
    const n = {
        x: e.clientX,
        y: e.clientY
    };
    return pa(n, t)
}
function Le(e) {
    return t => t.pointerType === "mouse" ? e(t) : void 0
}
var va = Fr
  , ha = Xt
  , ga = $r
  , wa = Br
  , ya = Jt
  , xa = Wr
  , ba = gt
  , Ca = Gr
  , Ea = Kr
  , Sa = Yr
  , Ra = Xr
  , Pa = qr
  , Ma = Zr
  , Aa = Jr
  , Ta = to
  , nn = "DropdownMenu"
  , [_a,ou] = it(nn, [Lr])
  , G = Lr()
  , [Oa,ro] = _a(nn)
  , oo = e => {
    const {__scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: i, onOpenChange: s, modal: c=!0} = e
      , l = G(t)
      , f = a.useRef(null)
      , [d=!1,u] = jt({
        prop: o,
        defaultProp: i,
        onChange: s
    });
    return y.jsx(Oa, {
        scope: t,
        triggerId: qe(),
        triggerRef: f,
        contentId: qe(),
        open: d,
        onOpenChange: u,
        onOpenToggle: a.useCallback( () => u(p => !p), [u]),
        modal: c,
        children: y.jsx(va, {
            ...l,
            open: d,
            onOpenChange: u,
            dir: r,
            modal: c,
            children: n
        })
    })
}
;
oo.displayName = nn;
var io = "DropdownMenuTrigger"
  , so = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, disabled: r=!1, ...o} = e
      , i = ro(io, n)
      , s = G(n);
    return y.jsx(ha, {
        asChild: !0,
        ...s,
        children: y.jsx(j.button, {
            type: "button",
            id: i.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": i.open,
            "aria-controls": i.open ? i.contentId : void 0,
            "data-state": i.open ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            ...o,
            ref: ot(t, i.triggerRef),
            onPointerDown: A(e.onPointerDown, c => {
                !r && c.button === 0 && c.ctrlKey === !1 && (i.onOpenToggle(),
                i.open || c.preventDefault())
            }
            ),
            onKeyDown: A(e.onKeyDown, c => {
                r || (["Enter", " "].includes(c.key) && i.onOpenToggle(),
                c.key === "ArrowDown" && i.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault())
            }
            )
        })
    })
}
);
so.displayName = io;
var Ia = "DropdownMenuPortal"
  , co = e => {
    const {__scopeDropdownMenu: t, ...n} = e
      , r = G(t);
    return y.jsx(ga, {
        ...r,
        ...n
    })
}
;
co.displayName = Ia;
var ao = "DropdownMenuContent"
  , uo = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = ro(ao, n)
      , i = G(n)
      , s = a.useRef(!1);
    return y.jsx(wa, {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: A(e.onCloseAutoFocus, c => {
            var l;
            s.current || (l = o.triggerRef.current) == null || l.focus(),
            s.current = !1,
            c.preventDefault()
        }
        ),
        onInteractOutside: A(e.onInteractOutside, c => {
            const l = c.detail.originalEvent
              , f = l.button === 0 && l.ctrlKey === !0
              , d = l.button === 2 || f;
            (!o.modal || d) && (s.current = !0)
        }
        ),
        style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
uo.displayName = ao;
var Na = "DropdownMenuGroup"
  , Da = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = G(n);
    return y.jsx(ya, {
        ...o,
        ...r,
        ref: t
    })
}
);
Da.displayName = Na;
var La = "DropdownMenuLabel"
  , lo = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = G(n);
    return y.jsx(xa, {
        ...o,
        ...r,
        ref: t
    })
}
);
lo.displayName = La;
var ka = "DropdownMenuItem"
  , fo = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = G(n);
    return y.jsx(ba, {
        ...o,
        ...r,
        ref: t
    })
}
);
fo.displayName = ka;
var Fa = "DropdownMenuCheckboxItem"
  , po = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = G(n);
    return y.jsx(Ca, {
        ...o,
        ...r,
        ref: t
    })
}
);
po.displayName = Fa;
var ja = "DropdownMenuRadioGroup"
  , $a = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = G(n);
    return y.jsx(Ea, {
        ...o,
        ...r,
        ref: t
    })
}
);
$a.displayName = ja;
var Ba = "DropdownMenuRadioItem"
  , mo = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = G(n);
    return y.jsx(Sa, {
        ...o,
        ...r,
        ref: t
    })
}
);
mo.displayName = Ba;
var Wa = "DropdownMenuItemIndicator"
  , vo = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = G(n);
    return y.jsx(Ra, {
        ...o,
        ...r,
        ref: t
    })
}
);
vo.displayName = Wa;
var Ua = "DropdownMenuSeparator"
  , ho = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = G(n);
    return y.jsx(Pa, {
        ...o,
        ...r,
        ref: t
    })
}
);
ho.displayName = Ua;
var Ga = "DropdownMenuArrow"
  , Ha = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = G(n);
    return y.jsx(Ma, {
        ...o,
        ...r,
        ref: t
    })
}
);
Ha.displayName = Ga;
var Ka = "DropdownMenuSubTrigger"
  , go = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = G(n);
    return y.jsx(Aa, {
        ...o,
        ...r,
        ref: t
    })
}
);
go.displayName = Ka;
var Va = "DropdownMenuSubContent"
  , wo = a.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = G(n);
    return y.jsx(Ta, {
        ...o,
        ...r,
        ref: t,
        style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
wo.displayName = Va;
var iu = oo
  , su = so
  , cu = co
  , au = uo
  , uu = lo
  , lu = fo
  , fu = po
  , du = mo
  , pu = vo
  , mu = ho
  , vu = go
  , hu = wo
  , rn = "Tabs"
  , [Ya,gu] = it(rn, [mt])
  , yo = mt()
  , [za,on] = Ya(rn)
  , xo = a.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, onValueChange: o, defaultValue: i, orientation: s="horizontal", dir: c, activationMode: l="automatic", ...f} = e
      , d = zt(c)
      , [u,p] = jt({
        prop: r,
        onChange: o,
        defaultProp: i
    });
    return y.jsx(za, {
        scope: n,
        baseId: qe(),
        value: u,
        onValueChange: p,
        orientation: s,
        dir: d,
        activationMode: l,
        children: y.jsx(j.div, {
            dir: d,
            "data-orientation": s,
            ...f,
            ref: t
        })
    })
}
);
xo.displayName = rn;
var bo = "TabsList"
  , Co = a.forwardRef( (e, t) => {
    const {__scopeTabs: n, loop: r=!0, ...o} = e
      , i = on(bo, n)
      , s = yo(n);
    return y.jsx(Er, {
        asChild: !0,
        ...s,
        orientation: i.orientation,
        dir: i.dir,
        loop: r,
        children: y.jsx(j.div, {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...o,
            ref: t
        })
    })
}
);
Co.displayName = bo;
var Eo = "TabsTrigger"
  , So = a.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, disabled: o=!1, ...i} = e
      , s = on(Eo, n)
      , c = yo(n)
      , l = Mo(s.baseId, r)
      , f = Ao(s.baseId, r)
      , d = r === s.value;
    return y.jsx(Sr, {
        asChild: !0,
        ...c,
        focusable: !o,
        active: d,
        children: y.jsx(j.button, {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": f,
            "data-state": d ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...i,
            ref: t,
            onMouseDown: A(e.onMouseDown, u => {
                !o && u.button === 0 && u.ctrlKey === !1 ? s.onValueChange(r) : u.preventDefault()
            }
            ),
            onKeyDown: A(e.onKeyDown, u => {
                [" ", "Enter"].includes(u.key) && s.onValueChange(r)
            }
            ),
            onFocus: A(e.onFocus, () => {
                const u = s.activationMode !== "manual";
                !d && !o && u && s.onValueChange(r)
            }
            )
        })
    })
}
);
So.displayName = Eo;
var Ro = "TabsContent"
  , Po = a.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, forceMount: o, children: i, ...s} = e
      , c = on(Ro, n)
      , l = Mo(c.baseId, r)
      , f = Ao(c.baseId, r)
      , d = r === c.value
      , u = a.useRef(d);
    return a.useEffect( () => {
        const p = requestAnimationFrame( () => u.current = !1);
        return () => cancelAnimationFrame(p)
    }
    , []),
    y.jsx(pe, {
        present: o || d,
        children: ({present: p}) => y.jsx(j.div, {
            "data-state": d ? "active" : "inactive",
            "data-orientation": c.orientation,
            role: "tabpanel",
            "aria-labelledby": l,
            hidden: !p,
            id: f,
            tabIndex: 0,
            ...s,
            ref: t,
            style: {
                ...e.style,
                animationDuration: u.current ? "0s" : void 0
            },
            children: p && i
        })
    })
}
);
Po.displayName = Ro;
function Mo(e, t) {
    return `${e}-trigger-${t}`
}
function Ao(e, t) {
    return `${e}-content-${t}`
}
var wu = xo
  , yu = Co
  , xu = So
  , bu = Po;
export {ds as A, Za as B, nu as C, mt as D, Er as E, Sr as F, lt as G, sr as H, lu as I, ic as J, ks as K, uu as L, Nr as M, Oe as N, hr as O, j as P, st as Q, qa as R, vu as S, su as T, cr as U, Wn as V, ar as W, ys as X, it as a, jt as b, Ln as c, pe as d, z as e, A as f, Bn as g, fe as h, kn as i, y as j, tu as k, hu as l, cu as m, au as n, fu as o, pu as p, du as q, mu as r, iu as s, qe as t, W as u, zt as v, yu as w, xu as x, bu as y, wu as z};
