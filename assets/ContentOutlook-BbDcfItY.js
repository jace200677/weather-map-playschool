import {j as e} from "./vendor-ui-ChKirxi5.js";
import {u as Me, T as be} from "./useWeatherIntensity-CRob0yiU.js";
import {r as u} from "./vendor-react-C-0J8HPx.js";
import {C as K} from "./card-CNsNpwoj.js";
import {B as le} from "./badge-BxaPRFxH.js";
import {B as Pe} from "./button-Vm9gbfdf.js";
import {S as Ee} from "./switch-BP7_kJyt.js";
import {c as De, A as fe, l as Le, R as pe} from "./index-CGMClAOr.js";
import {C as Ce} from "./chevron-up-f2vS5DHH.js";
import {C as Ie} from "./circle-alert-BkZwHj05.js";
import {V as Re} from "./video-B9wUv_Y5.js";
import {C as Ae} from "./calendar-CCPIAxXy.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = De("TrendingDown", [["polyline", {
    points: "22 17 13.5 8.5 8.5 13.5 2 7",
    key: "1r2t7k"
}], ["polyline", {
    points: "16 17 22 17 22 11",
    key: "11uiuu"
}]]);
function Ze() {
    const {data: i, error: Z, isLoading: B} = Me()
      , P = u.useRef(null)
      , [r,V] = u.useState({
        width: 0,
        height: 200
    })
      , [a,c] = u.useState(null)
      , [I,R] = u.useState(!1)
      , [N,ye] = u.useState(!1)
      , [Y,we] = u.useState(!0)
      , [T,A] = u.useState(null)
      , v = u.useRef(null)
      , ce = u.useRef(null)
      , F = !!i
      , de = {
        history: {
            text: "text-emerald-300",
            dot: "bg-emerald-400"
        },
        current: {
            text: "text-amber-300",
            dot: "bg-amber-300"
        },
        forecast: {
            text: "text-blue-300",
            dot: "bg-blue-400"
        }
    }
      , ve = n => {
        switch (n) {
        case "forecast":
            return "Projected";
        case "current":
            return "Current";
        default:
            return "Observed"
        }
    }
    ;
    if (u.useEffect( () => {
        if (B || !F)
            return;
        const n = P.current
          , t = n == null ? void 0 : n.parentElement;
        if (!n || !t)
            return;
        const y = h => {
            h <= 0 || V(d => {
                const b = Math.floor(h);
                return Math.abs(d.width - b) < 1 ? d : {
                    ...d,
                    width: b
                }
            }
            )
        }
          , g = () => {
            const h = t.getBoundingClientRect();
            y(h.width)
        }
        ;
        if (g(),
        typeof ResizeObserver < "u") {
            const h = new ResizeObserver(d => {
                const b = d[0];
                b && y(b.contentRect.width)
            }
            );
            return h.observe(t),
            () => h.disconnect()
        }
        return window.addEventListener("resize", g),
        () => {
            window.removeEventListener("resize", g)
        }
    }
    , [B, F]),
    u.useEffect( () => {
        F || (v.current = null,
        A(null))
    }
    , [F]),
    u.useEffect( () => {
        i != null && i.wis.weather_intensity_score && a !== null && a !== i.wis.weather_intensity_score && (R(!0),
        setTimeout( () => R(!1), 1e3)),
        i != null && i.wis.weather_intensity_score && c(i.wis.weather_intensity_score)
    }
    , [i == null ? void 0 : i.wis.weather_intensity_score, a]),
    u.useEffect( () => {
        if (!i || !P.current || r.width === 0)
            return;
        const n = P.current
          , t = n.getContext("2d");
        if (!t) {
            console.error("Failed to get canvas 2D context");
            return
        }
        let y;
        const g = () => {
            var ge;
            const h = window.devicePixelRatio || 1;
            if (n.width = r.width * h,
            n.height = r.height * h,
            t.setTransform(h, 0, 0, h, 0, 0),
            n.style.width = `${r.width}px`,
            n.style.height = `${r.height}px`,
            t.clearRect(0, 0, r.width, r.height),
            !i || !i.wis || !i.score_history || !Array.isArray(i.score_history))
                return;
            const {wis: d, score_history: b} = i
              , w = d.weather_intensity_score
              , _ = ((ge = d.todays_stream_info) == null ? void 0 : ge.weather_intensity_score_threshold) || 0
              , m = new Date
              , D = new Date(m.getTime() - 60 * 60 * 1e3)
              , k = b.filter(s => s && s.timestamp && new Date(s.timestamp) >= D)
              , j = [];
            let $ = w;
            if (d.forecast_changes)
                for (let s = 1; s <= 30; s++) {
                    const x = `minute_${s}`;
                    d.forecast_changes[x] !== void 0 && ($ += d.forecast_changes[x],
                    j.push({
                        time: new Date(m.getTime() + s * 60 * 1e3),
                        score: $
                    }))
                }
            const G = [...k.map(s => s.weather_intensity_score), w, ...j.map(s => s.score)];
            Y && G.push(_);
            let l = Math.min(...G)
              , f = Math.max(...G);
            if (!Number.isFinite(l) || !Number.isFinite(f))
                return;
            if (l === f) {
                const s = l === 0 ? 5 : Math.max(Math.abs(l) * .1, 5);
                l -= s,
                f += s
            } else {
                const s = (f - l) * .1;
                l -= s,
                f += s
            }
            const o = {
                top: 20,
                right: 20,
                bottom: 40,
                left: 50
            }
              , p = r.width - o.left - o.right
              , L = r.height - o.top - o.bottom
              , te = Math.max(f - l, 1)
              , se = k[0] ? new Date(k[0].timestamp) : m;
            k.length && new Date(k[k.length - 1].timestamp);
            const ne = j.length ? j[j.length - 1].time : m;
            let J = Math.min(se.getTime(), m.getTime())
              , q = Math.max(ne.getTime(), m.getTime());
            q === J && (J -= 6e4,
            q += 6e4);
            const me = (q - J) * .05
              , re = Math.max(J - me, D.getTime())
              , he = q + me
              , _e = Math.max(he - re, 1)
              , M = s => {
                const x = Math.min(Math.max(s, l), f);
                return r.height - o.bottom - (x - l) / te * L
            }
              , O = s => {
                const x = s.getTime()
                  , oe = Math.min(Math.max(x, re), he);
                return o.left + (oe - re) / _e * p
            }
            ;
            t.strokeStyle = "rgba(255, 255, 255, 0.1)",
            t.lineWidth = 1,
            t.setLineDash([2, 2]);
            for (let s = 0; s <= 5; s++) {
                const x = o.top + s * L / 5;
                t.beginPath(),
                t.moveTo(o.left, x),
                t.lineTo(r.width - o.right, x),
                t.stroke();
                const oe = f - s * (f - l) / 5;
                t.fillStyle = "rgba(255, 255, 255, 0.6)",
                t.font = '11px "JetBrains Mono", monospace',
                t.textAlign = "right",
                t.fillText(oe.toFixed(1), o.left - 5, x + 4)
            }
            if (t.setLineDash([]),
            Y && _ > l && _ < f) {
                t.strokeStyle = "#ef4444",
                t.lineWidth = 2,
                t.setLineDash([5, 5]);
                const s = M(_);
                t.beginPath(),
                t.moveTo(o.left, s),
                t.lineTo(r.width - o.right, s),
                t.stroke(),
                t.fillStyle = "#ef4444",
                t.font = 'bold 11px "JetBrains Mono", monospace',
                t.textAlign = "left",
                t.fillText(`Threshold: ${_.toFixed(1)}`, r.width - o.right - 80, s - 5),
                t.setLineDash([])
            }
            const U = k.map(s => {
                const x = new Date(s.timestamp);
                return {
                    x: O(x),
                    y: M(s.weather_intensity_score),
                    score: s.weather_intensity_score,
                    time: x,
                    type: "history"
                }
            }
            );
            U.length > 0 && (t.strokeStyle = "#10b981",
            t.lineWidth = 3,
            t.beginPath(),
            U.forEach( (s, x) => {
                x === 0 ? t.moveTo(s.x, s.y) : t.lineTo(s.x, s.y)
            }
            ),
            t.lineTo(O(m), M(w)),
            t.stroke());
            const C = O(m);
            t.strokeStyle = "rgba(255, 255, 255, 0.3)",
            t.lineWidth = 1,
            t.beginPath(),
            t.moveTo(C, o.top),
            t.lineTo(C, r.height - o.bottom),
            t.stroke(),
            t.fillStyle = "rgba(255, 255, 255, 0.8)",
            t.font = 'bold 12px "JetBrains Mono", monospace',
            t.textAlign = "center",
            t.fillText("NOW", C, r.height - o.bottom + 20);
            const Se = Date.now() / 1e3
              , xe = Math.sin(Se * 4) * .5 + .5
              , ue = 5 + xe * 3;
            t.fillStyle = `rgba(16, 185, 129, ${.3 * xe})`,
            t.beginPath(),
            t.arc(C, M(w), ue + 5, 0, 2 * Math.PI),
            t.fill(),
            t.fillStyle = "#10b981",
            t.strokeStyle = "rgba(255, 255, 255, 0.8)",
            t.lineWidth = 2,
            t.beginPath(),
            t.arc(C, M(w), ue, 0, 2 * Math.PI),
            t.fill(),
            t.stroke();
            const W = j.map(s => ({
                x: O(s.time),
                y: M(s.score),
                score: s.score,
                time: s.time,
                type: "forecast"
            }));
            W.length > 0 && (t.strokeStyle = "#3b82f6",
            t.lineWidth = 3,
            t.setLineDash([5, 5]),
            t.beginPath(),
            t.moveTo(C, M(w)),
            W.forEach(s => {
                t.lineTo(s.x, s.y)
            }
            ),
            t.stroke(),
            t.setLineDash([])),
            t.fillStyle = "rgba(255, 255, 255, 0.6)",
            t.font = "11px system-ui",
            t.textAlign = "center";
            const ae = U[0] ? U[0].time : null;
            if (ae) {
                const s = Math.round((m.getTime() - ae.getTime()) / 6e4);
                s > 0 && t.fillText(`-${s}m`, O(ae), r.height - o.bottom + 20)
            }
            const ie = W.length ? W[W.length - 1].time : null;
            if (ie) {
                const s = Math.round((ie.getTime() - m.getTime()) / 6e4);
                s > 0 && t.fillText(`+${s}m`, O(ie), r.height - o.bottom + 20)
            }
            const ke = [...U, {
                x: C,
                y: M(w),
                score: w,
                time: m,
                type: "current"
            }, ...W];
            ce.current = {
                points: ke,
                padding: o
            };
            const S = v.current;
            if (S) {
                t.save(),
                t.setLineDash([4, 4]),
                t.strokeStyle = "rgba(255, 255, 255, 0.25)",
                t.beginPath(),
                t.moveTo(S.x, o.top),
                t.lineTo(S.x, r.height - o.bottom),
                t.stroke(),
                t.restore();
                const s = S.type === "forecast" ? "#3b82f6" : S.type === "current" ? "#facc15" : "#10b981";
                t.fillStyle = `${s}80`,
                t.beginPath(),
                t.arc(S.x, S.y, 8, 0, 2 * Math.PI),
                t.fill(),
                t.fillStyle = s,
                t.strokeStyle = "rgba(255, 255, 255, 0.8)",
                t.lineWidth = 2,
                t.beginPath(),
                t.arc(S.x, S.y, 5, 0, 2 * Math.PI),
                t.fill(),
                t.stroke()
            }
            y = requestAnimationFrame(g)
        }
        ;
        return g(),
        () => {
            y && cancelAnimationFrame(y)
        }
    }
    , [i, r, Y]),
    u.useEffect( () => {
        const n = P.current
          , t = n == null ? void 0 : n.parentElement;
        if (!n || !t || !F || r.width === 0)
            return;
        const y = h => {
            const d = ce.current;
            if (!d || d.points.length === 0) {
                v.current && (v.current = null,
                A(null));
                return
            }
            const b = n.getBoundingClientRect()
              , w = t.getBoundingClientRect()
              , _ = h.clientX - b.left
              , m = h.clientY - b.top
              , {padding: D} = d;
            if (!(_ >= D.left && _ <= r.width - D.right && m >= D.top && m <= r.height - D.bottom)) {
                v.current && (v.current = null,
                A(null)),
                n.style.cursor = "default";
                return
            }
            let j = null
              , $ = 1 / 0;
            if (d.points.forEach(p => {
                const L = Math.hypot(p.x - _, p.y - m);
                L < $ && (j = p,
                $ = L)
            }
            ),
            !j || $ > 30) {
                v.current && (v.current = null,
                A(null)),
                n.style.cursor = "default";
                return
            }
            const l = j
              , f = b.left - w.left
              , o = b.top - w.top;
            v.current = l,
            n.style.cursor = "crosshair",
            A(p => {
                if (p && p.time.getTime() === l.time.getTime() && p.type === l.type && Math.abs(p.score - l.score) < .001) {
                    const L = p.containerX
                      , te = p.containerY
                      , se = l.x + f
                      , ne = l.y + o;
                    if (Math.abs(L - se) < .5 && Math.abs(te - ne) < .5)
                        return p
                }
                return {
                    ...l,
                    containerX: l.x + f,
                    containerY: l.y + o
                }
            }
            )
        }
          , g = () => {
            v.current = null,
            A(null),
            n.style.cursor = "default"
        }
        ;
        return n.addEventListener("pointermove", y),
        n.addEventListener("pointerleave", g),
        n.addEventListener("pointercancel", g),
        n.addEventListener("pointerup", g),
        n.addEventListener("pointerdown", y),
        () => {
            n.removeEventListener("pointermove", y),
            n.removeEventListener("pointerleave", g),
            n.removeEventListener("pointercancel", g),
            n.removeEventListener("pointerup", g),
            n.removeEventListener("pointerdown", y)
        }
    }
    , [F, r]),
    B)
        return e.jsxs(K, {
            className: "glass-card p-6 mb-8 animate-pulse",
            children: [e.jsx("div", {
                className: "h-8 bg-white/10 rounded w-1/3 mb-4"
            }), e.jsx("div", {
                className: "h-48 bg-white/10 rounded"
            })]
        });
    if (Z || !i)
        return e.jsx(K, {
            className: "tech-card p-6 mb-8",
            children: e.jsx("p", {
                className: "text-red-400",
                children: "Failed to load weather intensity data"
            })
        });
    const {wis: E} = i
      , X = E.weather_intensity_score
      , Q = E.todays_stream_info.weather_intensity_score_threshold
      , ee = E.todays_stream_info.mode
      , je = X >= Q
      , z = a !== null ? X - a : 0
      , Ne = X / Q * 100
      , H = ( () => {
        switch (ee) {
        case "live":
            return {
                text: "LIVE NOW",
                color: "text-red-500",
                badgeVariant: "destructive",
                icon: pe,
                pulse: !0
            };
        case "standby":
            return {
                text: "STANDING BY",
                color: "text-yellow-500",
                badgeVariant: "secondary",
                icon: Ie,
                pulse: !0
            };
        default:
            return {
                text: "NOT STREAMING",
                color: "text-muted-foreground",
                badgeVariant: "outline",
                icon: pe,
                pulse: !1
            }
        }
    }
    )()
      , Te = H.icon;
    return e.jsxs(K, {
        className: "tech-card p-6 mb-8 border-monitor-border",
        children: [e.jsxs("div", {
            className: "flex items-start justify-between mb-4",
            children: [e.jsxs("div", {
                className: "flex-1",
                children: [e.jsxs("div", {
                    className: "flex items-center gap-2 mb-1",
                    children: [e.jsx("h2", {
                        className: "text-xl font-bold font-tech uppercase tracking-wide text-white",
                        children: "Weather Intensity Score"
                    }), e.jsx(fe, {
                        className: `w-4 h-4 ${I ? "animate-pulse text-monitor-active" : "text-gray-500"}`
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center gap-3 flex-wrap",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [e.jsx("span", {
                            className: `text-5xl font-bold font-mono transition-all duration-500 ${I ? "scale-110 text-monitor-active" : "text-white"}`,
                            children: X.toFixed(1)
                        }), z !== 0 && e.jsxs("div", {
                            className: `flex items-center gap-1 text-xs font-mono font-bold ${z > 0 ? "text-monitor-danger" : "text-monitor-success"}`,
                            children: [z > 0 ? e.jsx(be, {
                                className: "w-3 h-3"
                            }) : e.jsx(Fe, {
                                className: "w-3 h-3"
                            }), e.jsx("span", {
                                children: Math.abs(z).toFixed(2)
                            })]
                        })]
                    }), e.jsxs("span", {
                        className: "text-gray-500 font-mono text-sm self-end mb-2",
                        children: ["/ ", Q.toFixed(1), " THRESHOLD"]
                    }), je && e.jsx(le, {
                        variant: "destructive",
                        className: "animate-pulse bg-monitor-danger text-black font-bold font-mono text-xs uppercase tracking-wider border-none",
                        children: "Threshold Exceeded"
                    })]
                }), e.jsxs("div", {
                    className: "mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400 font-mono uppercase tracking-wide",
                    children: [e.jsxs("span", {
                        children: [Ne.toFixed(1), "% Saturation"]
                    }), e.jsx("span", {
                        className: "hidden sm:inline text-gray-700",
                        children: "|"
                    }), e.jsxs("span", {
                        className: "flex items-center gap-1.5",
                        children: [e.jsxs("span", {
                            className: "relative flex h-1.5 w-1.5",
                            children: [e.jsx("span", {
                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-monitor-success opacity-75"
                            }), e.jsx("span", {
                                className: "relative inline-flex rounded-full h-1.5 w-1.5 bg-monitor-success"
                            })]
                        }), "Real-time Telemetry"]
                    })]
                })]
            }), e.jsx("div", {
                className: "ml-4 flex-shrink-0",
                children: e.jsxs(le, {
                    variant: H.badgeVariant,
                    className: `gap-2 px-3 py-1.5 text-xs font-bold font-mono tracking-wide ${H.pulse ? "animate-pulse" : ""} ${ee === "live" ? "bg-monitor-danger text-black hover:bg-monitor-danger" : ee === "standby" ? "bg-monitor-warning text-black hover:bg-monitor-warning" : "bg-monitor-card border-monitor-border text-gray-500"}`,
                    children: [e.jsx(Te, {
                        className: "w-3 h-3"
                    }), H.text]
                })
            })]
        }), e.jsxs("div", {
            className: "bg-black/20 rounded-lg p-4 mb-4 w-full relative",
            children: [e.jsx("canvas", {
                ref: P,
                width: r.width,
                height: r.height,
                className: "w-full",
                style: {
                    display: r.width > 0 ? "block" : "none"
                }
            }), r.width === 0 && e.jsx("div", {
                className: "h-[200px] flex items-center justify-center",
                children: e.jsxs("div", {
                    className: "flex items-center gap-2 text-muted-foreground",
                    children: [e.jsx(fe, {
                        className: "w-5 h-5 animate-spin"
                    }), e.jsx("span", {
                        children: "Loading graph..."
                    })]
                })
            }), T && e.jsxs("div", {
                className: "pointer-events-none absolute z-10 px-3 py-2 rounded-md border border-white/10 bg-slate-900/90 backdrop-blur-sm shadow-lg",
                style: {
                    left: Math.min(Math.max(T.containerX, 16), r.width - 16),
                    top: Math.max(T.containerY - 10, 16),
                    transform: "translate(-50%, -100%)"
                },
                children: [e.jsxs("div", {
                    className: "flex items-center gap-2 text-xs text-muted-foreground",
                    children: [e.jsx("span", {
                        className: `inline-flex h-2 w-2 rounded-full ${de[T.type].dot}`
                    }), e.jsx("span", {
                        className: de[T.type].text,
                        children: ve(T.type)
                    }), e.jsx("span", {
                        children: "•"
                    }), e.jsx("span", {
                        children: T.type === "current" ? "Now" : T.time.toLocaleTimeString([], {
                            hour: "numeric",
                            minute: "2-digit"
                        })
                    })]
                }), e.jsx("div", {
                    className: "mt-1 text-sm font-semibold text-white text-center",
                    children: T.score.toFixed(1)
                })]
            }), e.jsxs("div", {
                className: "flex items-center justify-center gap-6 mt-2 text-sm",
                children: [e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [e.jsx("div", {
                        className: "w-4 h-1 bg-green-500 rounded animate-pulse"
                    }), e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "History"
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [e.jsx("div", {
                        className: "w-4 h-1 bg-blue-500 rounded",
                        style: {
                            backgroundImage: "repeating-linear-gradient(90deg, #3b82f6 0, #3b82f6 5px, transparent 5px, transparent 10px)"
                        }
                    }), e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Forecast"
                    })]
                }), Y && e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [e.jsx("div", {
                        className: "w-4 h-1 bg-red-500 rounded",
                        style: {
                            backgroundImage: "repeating-linear-gradient(90deg, #ef4444 0, #ef4444 5px, transparent 5px, transparent 10px)"
                        }
                    }), e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Threshold"
                    })]
                })]
            }), e.jsx("div", {
                className: "flex items-center justify-end mt-2",
                children: e.jsxs("label", {
                    htmlFor: "threshold-toggle",
                    className: "flex items-center gap-2 cursor-pointer",
                    children: [e.jsx("span", {
                        className: "text-sm text-muted-foreground",
                        children: "Show threshold"
                    }), e.jsx(Ee, {
                        id: "threshold-toggle",
                        checked: Y,
                        onCheckedChange: we
                    })]
                })
            })]
        }), E.forecast_reasoning && e.jsxs("div", {
            className: "bg-monitor-active/5 rounded-lg p-4 border border-monitor-active/20 relative overflow-hidden",
            children: [e.jsx("div", {
                className: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-monitor-active/50 to-transparent"
            }), e.jsxs("h3", {
                className: "font-bold text-sm mb-2 flex items-center gap-2 font-tech uppercase tracking-wide text-monitor-active",
                children: [e.jsx("span", {
                    className: "w-1.5 h-1.5 bg-monitor-active rounded-full"
                }), "Forecast Analysis", e.jsx("span", {
                    className: "text-[10px] text-gray-500 font-mono ml-auto",
                    children: "AI GENERATED REPORT"
                })]
            }), e.jsxs("div", {
                className: "relative",
                children: [e.jsx("p", {
                    className: "text-sm text-gray-300 leading-relaxed font-sans",
                    children: N ? E.forecast_reasoning : `${E.forecast_reasoning.slice(0, 200)}...`
                }), E.forecast_reasoning.length > 200 && e.jsx(Pe, {
                    variant: "ghost",
                    size: "sm",
                    className: "mt-2 h-auto p-0 text-monitor-active hover:text-white font-mono text-xs uppercase tracking-wide hover:bg-transparent",
                    onClick: () => ye(!N),
                    children: N ? e.jsxs(e.Fragment, {
                        children: [e.jsx(Ce, {
                            className: "w-3 h-3 mr-1"
                        }), "Collapse Data"]
                    }) : e.jsxs(e.Fragment, {
                        children: [e.jsx(Le, {
                            className: "w-3 h-3 mr-1"
                        }), "Expand Analysis"]
                    })
                })]
            })]
        })]
    })
}
function Qe({forecasts: i}) {
    const Z = a => {
        switch (a.toLowerCase()) {
        case "no":
        case "not likely":
            return {
                bg: "bg-red-500/10",
                text: "text-red-400",
                border: "border-red-500/20"
            };
        case "maybe":
            return {
                bg: "bg-orange-500/10",
                text: "text-orange-400",
                border: "border-orange-500/20"
            };
        case "probably":
            return {
                bg: "bg-yellow-500/10",
                text: "text-yellow-400",
                border: "border-yellow-500/20"
            };
        case "yes":
            return {
                bg: "bg-green-500/10",
                text: "text-green-400",
                border: "border-green-500/20"
            };
        case "posted":
            return {
                bg: "bg-cyan-500/10",
                text: "text-cyan-400",
                border: "border-cyan-500/20"
            };
        default:
            return {
                bg: "bg-white/5",
                text: "text-gray-300",
                border: "border-white/10"
            }
        }
    }
      , B = a => {
        let c = new Date(a);
        if (isNaN(c.getTime())) {
            if (a.match(/^\d{4}-\d{2}-\d{2}$/))
                c = new Date(a + "T00:00:00");
            else if (a.match(/^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4}$/)) {
                const N = a.split(/[\/\-]/);
                c = new Date(parseInt(N[2]),parseInt(N[0]) - 1,parseInt(N[1]))
            }
        }
        if (isNaN(c.getTime()))
            return console.error("Invalid date format:", a),
            {
                day: "N/A",
                dateNum: "--"
            };
        const I = c.toLocaleDateString("en-US", {
            weekday: "short",
            timeZone: "UTC"
        })
          , R = c.getUTCDate();
        return {
            day: I,
            dateNum: R
        }
    }
      , P = a => {
        const c = a.match(/(\d+)%/);
        return c ? c[1] + "%" : "0%"
    }
      , r = i.filter(a => ["yes", "probably"].includes(a.public_content_plan.toLowerCase())).length
      , V = i.filter(a => a.public_content_plan.toLowerCase() === "maybe").length;
    return e.jsxs(K, {
        className: "tech-card p-5 mb-8 border-monitor-border",
        children: [e.jsxs("div", {
            className: "flex items-start justify-between mb-6",
            children: [e.jsxs("div", {
                className: "flex-1",
                children: [e.jsxs("div", {
                    className: "flex items-center gap-2 mb-1",
                    children: [e.jsx("h2", {
                        className: "text-xl font-bold font-tech tracking-wide uppercase text-white",
                        children: "Daily Outlook Score"
                    }), e.jsx(Re, {
                        className: "w-4 h-4 text-gray-500"
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center gap-4 mt-2 flex-wrap",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-2 text-sm font-mono",
                        children: [e.jsx(be, {
                            className: "w-4 h-4 text-monitor-success"
                        }), e.jsxs("span", {
                            className: "text-gray-400",
                            children: [e.jsx("span", {
                                className: "text-monitor-success font-bold",
                                children: r
                            }), " LIKELY UPLOADS"]
                        })]
                    }), V > 0 && e.jsxs(e.Fragment, {
                        children: [e.jsx("span", {
                            className: "text-gray-700 hidden sm:inline",
                            children: "|"
                        }), e.jsxs("span", {
                            className: "text-sm text-gray-400 font-mono",
                            children: [e.jsx("span", {
                                className: "text-monitor-warning font-bold",
                                children: V
                            }), " POSSIBLE"]
                        })]
                    })]
                })]
            }), e.jsx("div", {
                className: "ml-4 flex-shrink-0",
                children: e.jsxs(le, {
                    variant: "secondary",
                    className: "gap-2 bg-monitor-card border border-monitor-border text-gray-400 font-mono text-xs uppercase tracking-wide",
                    children: [e.jsx(Ae, {
                        className: "w-3 h-3"
                    }), "7 Day Projection"]
                })
            })]
        }), e.jsxs("div", {
            className: "bg-black/20 rounded-lg p-3 overflow-x-auto scrollbar-subtle",
            children: [e.jsx("div", {
                className: "flex gap-4 min-w-fit pb-2",
                children: i.slice(0, 7).map(a => {
                    const c = Z(a.public_content_plan)
                      , {day: I, dateNum: R} = B(a.date);
                    parseInt(a.public_score, 10);
                    const N = a.weather_icon;
                    return e.jsxs("div", {
                        className: `${c.bg} ${c.border} border-2 rounded-xl p-4 transition-all duration-300 hover:scale-105 min-w-[170px] flex-shrink-0`,
                        children: [e.jsxs("div", {
                            className: "text-center mb-3",
                            children: [e.jsx("div", {
                                className: "font-bold text-lg font-tech",
                                children: I
                            }), e.jsx("div", {
                                className: "text-sm text-monitor-active/80 font-mono",
                                children: R
                            })]
                        }), e.jsx("div", {
                            className: "flex justify-center mb-4",
                            children: e.jsx("img", {
                                src: N,
                                alt: "Weather",
                                width: 64,
                                height: 64,
                                className: "w-16 h-16 drop-shadow-[0_0_15px_rgba(107,138,253,0.3)]",
                                loading: "lazy"
                            })
                        }), e.jsxs("div", {
                            className: "text-center mb-3",
                            children: [e.jsx("div", {
                                className: "text-xs text-gray-400 font-tech uppercase tracking-[0.2em] mb-1",
                                children: "DOS Score"
                            }), e.jsx("div", {
                                className: "text-amber-400 text-2xl font-bold font-tech bg-amber-500/10 py-1 px-3 rounded-lg border border-amber-500/20 inline-block shadow-[0_0_10px_rgba(251,191,36,0.1)]",
                                children: a.dos_score ? a.dos_score.toFixed(1) : "N/A"
                            })]
                        }), e.jsxs("div", {
                            className: "text-center mb-4",
                            children: [e.jsx("div", {
                                className: "text-xs text-gray-400 font-tech uppercase tracking-[0.2em] mb-1",
                                children: "LIVE Stream Chance"
                            }), e.jsx("div", {
                                className: "text-monitor-active text-2xl font-bold font-tech bg-monitor-active/5 py-1 px-3 rounded-lg border border-monitor-active/20 inline-block shadow-[0_0_10px_rgba(56,189,248,0.1)]",
                                children: P(a.public_score)
                            })]
                        }), e.jsxs("div", {
                            className: "text-center",
                            children: [e.jsx("div", {
                                className: "text-xs text-gray-400 font-tech uppercase tracking-[0.2em] mb-1",
                                children: "Video Upload"
                            }), e.jsx("div", {
                                className: `${c.text} font-bold text-sm font-tech uppercase py-1 px-2 rounded-lg ${c.bg} border ${c.border}`,
                                children: a.public_content_plan
                            })]
                        })]
                    }, a.day)
                }
                )
            }), e.jsxs("div", {
                className: "flex items-center justify-center gap-6 mt-4 text-[10px] font-mono uppercase tracking-wider text-gray-500",
                children: [e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [e.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-monitor-success"
                    }), e.jsx("span", {
                        children: "Yes"
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [e.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-yellow-400"
                    }), e.jsx("span", {
                        children: "Probably"
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [e.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-orange-400"
                    }), e.jsx("span", {
                        children: "Maybe"
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [e.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-monitor-danger"
                    }), e.jsx("span", {
                        children: "No/Unlikely"
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [e.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-cyan-400"
                    }), e.jsx("span", {
                        children: "Posted"
                    })]
                })]
            })]
        })]
    })
}
export {Qe as C, Ze as W};
