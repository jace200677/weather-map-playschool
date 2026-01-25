import {j as e} from "./vendor-ui-ChKirxi5.js";
import {u as g} from "./vendor-query-2oCPVP0F.js";
import {r as f, L as h} from "./vendor-react-C-0J8HPx.js";
import {c as A, Y as T, C as b, f as p, a as E, b as S, d as L, M as C, e as R, g as j, T as _, Z as W, S as D, E as F, h as M, i as O, j as B, k as V} from "./index-CGMClAOr.js";
import {C as v} from "./card-CNsNpwoj.js";
import {B as u} from "./badge-BxaPRFxH.js";
import {Y as N} from "./YouTubeFacade-BCl_Ojf_.js";
import {E as w} from "./eye-yqi35wPg.js";
import {S as m} from "./skeleton-CamB8oBF.js";
import {W as P, C as U} from "./ContentOutlook-BbDcfItY.js";
import {i as G, g as $, a as q} from "./warningColors-BftiDjLg.js";
import {W as y} from "./wind-DcCUA9bR.js";
import {C as z} from "./circle-alert-BkZwHj05.js";
import {A as x} from "./arrow-right-Ch6jctBv.js";
import "./play-Bz3Li2MT.js";
import "./useWeatherIntensity-CRob0yiU.js";
import "./button-Vm9gbfdf.js";
import "./switch-BP7_kJyt.js";
import "./index-Dvo5GHTG.js";
import "./chevron-up-f2vS5DHH.js";
import "./video-B9wUv_Y5.js";
import "./calendar-CCPIAxXy.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H = A("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
function X({info: t}) {
    const i = o => {
        if (!o)
            return "";
        const d = o.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
        return d ? d[1] : ""
    }
      , a = t.recent_uploads && t.recent_uploads.length > 0 ? t.recent_uploads[0] : null
      , s = t.recent_live_streams && t.recent_live_streams.length > 0 ? t.recent_live_streams[0] : null
      , c = o => o && parseInt(o.replace(/,/g, "")) || 0;
    return e.jsxs(v, {
        className: "tech-card p-6 sm:p-8 space-y-6 sm:space-y-8",
        children: [e.jsxs("div", {
            className: "flex items-start justify-between gap-3",
            children: [e.jsxs("div", {
                className: "flex items-center space-x-3 min-w-0",
                children: [e.jsx(T, {
                    className: "w-7 h-7 text-red-500 flex-shrink-0"
                }), e.jsxs("div", {
                    children: [e.jsx("h2", {
                        className: "text-xl sm:text-2xl font-bold font-tech tracking-wide truncate leading-none",
                        children: t.channel_name
                    }), e.jsx("div", {
                        className: "text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-1",
                        children: "Broadcast Terminal"
                    })]
                })]
            }), e.jsx(u, {
                variant: "secondary",
                className: "text-sm flex-shrink-0 px-3 py-1",
                children: t.subscriber_count || t.current_subscribers || "0 subscribers"
            })]
        }), e.jsxs("div", {
            className: "grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2",
            children: [e.jsxs("div", {
                className: "space-y-4",
                children: [e.jsxs("div", {
                    className: "space-y-3 min-h-[5rem]",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [e.jsx(u, {
                            variant: t.is_live || t.live_status ? "destructive" : "secondary",
                            className: "inline-block text-xs px-2 py-1",
                            children: t.is_live || t.live_status ? "LIVE NOW" : "LATEST STREAM"
                        }), !(t.is_live || t.live_status) && s && e.jsx(u, {
                            variant: "outline",
                            className: "inline-block text-xs px-2 py-1 opacity-60",
                            children: "NOT LIVE"
                        })]
                    }), e.jsx("h3", {
                        className: "font-tech font-bold text-sm sm:text-base line-clamp-2 leading-snug tracking-wide uppercase",
                        children: t.is_live || t.live_status ? t.current_live_title || "Live Stream" : (s == null ? void 0 : s.title) || "No recent streams"
                    })]
                }), e.jsx("div", {
                    className: "relative aspect-video rounded-lg overflow-hidden",
                    children: e.jsx(N, {
                        videoId: i(t.is_live || t.live_status ? t.live_link || t.current_live_link : s == null ? void 0 : s.link),
                        title: t.is_live || t.live_status ? t.current_live_title || "Live Stream" : (s == null ? void 0 : s.title) || "Stream",
                        thumbnailUrl: t.is_live || t.live_status ? t.current_live_thumbnail : s == null ? void 0 : s.thumbnail,
                        className: "absolute inset-0 w-full h-full"
                    })
                }), !t.is_live && !t.live_status && s && e.jsxs("div", {
                    className: "flex items-center justify-between text-xs sm:text-sm text-muted-foreground",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [e.jsx(b, {
                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4"
                        }), e.jsx("span", {
                            className: "truncate",
                            children: s.time_since_uploaded || t.time_since_most_recent_live || "Recently"
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [e.jsx(w, {
                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4"
                        }), e.jsxs("span", {
                            className: "truncate",
                            children: [p(c(s.view_count)), " views"]
                        })]
                    })]
                })]
            }), e.jsxs("div", {
                className: "space-y-4",
                children: [e.jsxs("div", {
                    className: "space-y-3 min-h-[5rem]",
                    children: [e.jsx(u, {
                        variant: "outline",
                        className: "bg-white/5 inline-block text-xs px-2 py-1 font-mono tracking-wider",
                        children: "LATEST UPLOAD"
                    }), e.jsx("h3", {
                        className: "font-tech font-bold text-sm sm:text-base line-clamp-2 leading-snug tracking-wide uppercase",
                        children: (a == null ? void 0 : a.title) || "No recent uploads"
                    })]
                }), e.jsx("div", {
                    className: "relative aspect-video rounded-lg overflow-hidden",
                    children: e.jsx(N, {
                        videoId: i(a == null ? void 0 : a.link),
                        title: (a == null ? void 0 : a.title) || "Latest Upload",
                        thumbnailUrl: a == null ? void 0 : a.thumbnail,
                        className: "absolute inset-0 w-full h-full"
                    })
                }), a && e.jsxs("div", {
                    className: "flex items-center justify-between text-xs sm:text-sm text-muted-foreground",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [e.jsx(b, {
                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4"
                        }), e.jsx("span", {
                            className: "truncate",
                            children: a.time_since_uploaded || t.time_since_most_recent_upload || "Recently"
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [e.jsx(w, {
                            className: "w-3.5 h-3.5 sm:w-4 sm:h-4"
                        }), e.jsxs("span", {
                            className: "truncate",
                            children: [p(c(a.view_count)), " views"]
                        })]
                    })]
                })]
            }), (t.upload_averages || t.live_stream_averages) && e.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-2",
                children: [t.upload_averages && e.jsxs("div", {
                    className: "p-4 sm:p-5 tech-card rounded-lg border-monitor-border/50",
                    children: [e.jsx("p", {
                        className: "text-[10px] text-gray-500 mb-1 font-mono uppercase tracking-wider",
                        children: "Upload Average"
                    }), e.jsxs("p", {
                        className: "font-bold font-mono text-base sm:text-lg text-white",
                        children: [p(t.upload_averages.average_views), " ", e.jsx("span", {
                            className: "text-xs text-gray-500 font-normal",
                            children: "VIEWS"
                        })]
                    }), e.jsxs("p", {
                        className: "text-xs sm:text-sm text-muted-foreground mt-2",
                        children: ["~", t.upload_averages.average_days_between_uploads.toFixed(1), " days between uploads"]
                    })]
                }), t.live_stream_averages && e.jsxs("div", {
                    className: "p-4 sm:p-5 tech-card rounded-lg border-monitor-border/50",
                    children: [e.jsx("p", {
                        className: "text-[10px] text-gray-500 mb-1 font-mono uppercase tracking-wider",
                        children: "Stream Average"
                    }), e.jsxs("p", {
                        className: "font-bold font-mono text-base sm:text-lg text-white",
                        children: [p(t.live_stream_averages.average_views), " ", e.jsx("span", {
                            className: "text-xs text-gray-500 font-normal",
                            children: "VIEWS"
                        })]
                    }), e.jsxs("p", {
                        className: "text-xs sm:text-sm text-muted-foreground mt-2",
                        children: ["~", t.live_stream_averages.average_days_between_uploads.toFixed(1), " days between streams"]
                    })]
                })]
            })]
        })]
    })
}
function Y() {
    var d, r;
    const [t,i] = f.useState(0)
      , {data: a} = g({
        queryKey: ["summaries"],
        queryFn: S,
        refetchInterval: 5 * 60 * 1e3
    })
      , s = ((r = (d = a == null ? void 0 : a.community_analysis) == null ? void 0 : d.headlines) == null ? void 0 : r.headlines) || [];
    f.useEffect( () => {
        if (s.length === 0)
            return;
        const l = setInterval( () => {
            i(n => (n + 1) % s.length)
        }
        , 5e3);
        return () => clearInterval(l)
    }
    , [s.length]);
    const c = () => {
        i(l => (l - 1 + s.length) % s.length)
    }
      , o = () => {
        i(l => (l + 1) % s.length)
    }
    ;
    return s.length ? e.jsxs("div", {
        className: "border-b border-monitor-border bg-monitor-bg/80 backdrop-blur-md relative z-20 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.5)]",
        children: [e.jsx("div", {
            className: "absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-monitor-active/20 to-transparent"
        }), e.jsxs("div", {
            className: "container mx-auto px-4 py-3",
            children: [e.jsxs("div", {
                className: "flex items-center justify-between gap-4",
                children: [e.jsx("button", {
                    onClick: c,
                    className: "p-2 hover:bg-monitor-active/10 rounded-lg transition-colors text-gray-400 hover:text-monitor-active border border-transparent hover:border-monitor-active/20",
                    "aria-label": "Previous headline",
                    children: e.jsx(H, {
                        className: "w-5 h-5"
                    })
                }), e.jsxs("div", {
                    className: "flex-1 text-center",
                    children: [e.jsx("p", {
                        className: "text-xs font-bold font-tech uppercase tracking-[0.2em] mb-1 text-monitor-active",
                        children: "Situation Report"
                    }), e.jsx("p", {
                        className: "text-sm md:text-base font-medium font-sans text-white line-clamp-2 tracking-tight",
                        children: s[t]
                    })]
                }), e.jsx("button", {
                    onClick: o,
                    className: "p-2 hover:bg-monitor-active/10 rounded-lg transition-colors text-gray-400 hover:text-monitor-active border border-transparent hover:border-monitor-active/20",
                    "aria-label": "Next headline",
                    children: e.jsx(E, {
                        className: "w-5 h-5"
                    })
                })]
            }), e.jsx("div", {
                className: "flex justify-center mt-3 gap-1",
                children: s.map( (l, n) => e.jsx("button", {
                    onClick: () => i(n),
                    className: `h-1.5 rounded-full transition-all ${n === t ? "w-6 bg-monitor-active shadow-[0_0_8px_rgba(56,189,248,0.5)]" : "w-1.5 bg-gray-700 hover:bg-gray-600"}`,
                    "aria-label": `Go to headline ${n + 1}`
                }, n))
            })]
        })]
    }) : null
}
function Z({warning: t}) {
    var d;
    G(t);
    const i = $(t)
      , a = q(t.product, t.significance)
      , s = () => {
        const r = "w-5 h-5 md:w-6 md:h-6";
        return t.title.includes("Tornado") ? e.jsx(_, {
            className: r
        }) : t.title.includes("Thunderstorm") ? e.jsx(W, {
            className: r
        }) : t.title.includes("Flood") ? e.jsx(j, {
            className: r
        }) : t.title.includes("Winter") || t.title.includes("Blizzard") || t.title.includes("Snow") ? e.jsx(D, {
            className: r
        }) : t.title.includes("Wind") ? e.jsx(y, {
            className: r
        }) : e.jsx(z, {
            className: r
        })
    }
      , c = () => {
        const r = new Date
          , l = new Date(t.expires_at)
          , n = Math.floor((l.getTime() - r.getTime()) / 6e4);
        return n < 0 ? "Expired" : n < 60 ? `${n}m` : `${Math.floor(n / 60)}h ${n % 60}m`
    }
      , o = a ? {
        backgroundColor: a.main,
        borderBottom: `1px solid ${a.dark}`,
        boxShadow: `0 4px 20px -5px ${a.main}50`
    } : {};
    return e.jsxs("div", {
        className: L("w-full py-2 px-3 text-white relative overflow-hidden z-40 transition-all hover:brightness-110", i === "extreme" && "animate-pulse-slow border-b-4 border-white/20"),
        style: o,
        children: [i === "extreme" && e.jsx("div", {
            className: "absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"
        }), i === "extreme" && e.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
        }), e.jsxs(h, {
            to: "/warnings",
            className: "relative container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4",
            children: [e.jsxs("div", {
                className: "flex items-center gap-2 md:gap-3 min-w-0 w-full md:w-auto justify-center md:justify-start",
                children: [e.jsx("div", {
                    className: "p-1.5 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10 shadow-sm shrink-0",
                    children: s()
                }), e.jsxs("div", {
                    className: "min-w-0 text-center md:text-left",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-2 justify-center md:justify-start mb-0.5",
                        children: [t.emergency && e.jsx("span", {
                            className: "px-1.5 py-0.5 bg-white text-black text-[10px] font-bold font-mono uppercase tracking-wider rounded animate-pulse",
                            children: "EMERGENCY"
                        }), ((d = t.tags) == null ? void 0 : d.PDS) && e.jsx("span", {
                            className: "px-1.5 py-0.5 bg-black/40 text-white border border-white/30 text-[10px] font-bold font-mono uppercase tracking-wider rounded",
                            children: "PDS"
                        }), e.jsx("span", {
                            className: "font-bold text-sm md:text-base font-tech uppercase tracking-wide leading-tight text-shadow-sm truncate max-w-[300px] md:max-w-none",
                            children: t.title
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-wrap items-center gap-2 text-xs font-medium opacity-90 justify-center md:justify-start",
                        children: [e.jsxs("span", {
                            className: "flex items-center gap-1.5 font-mono text-white/90 bg-black/10 px-1.5 py-0.5 rounded text-[10px] md:text-xs",
                            children: [e.jsx(C, {
                                className: "w-3 h-3"
                            }), R(t)]
                        }), t.tags.HAZARD && e.jsx("span", {
                            className: "font-mono uppercase tracking-tight hidden sm:inline",
                            children: t.tags.HAZARD
                        }), t.tags.SOURCE && e.jsxs(e.Fragment, {
                            children: [e.jsx("span", {
                                className: "w-1 h-1 rounded-full bg-white/50 hidden sm:block"
                            }), e.jsx("span", {
                                className: "font-mono uppercase tracking-tight opacity-75 hidden sm:inline",
                                children: t.tags.SOURCE
                            })]
                        })]
                    })]
                })]
            }), e.jsxs("div", {
                className: "flex flex-wrap items-center justify-center md:justify-end gap-2 text-xs font-mono w-full md:w-auto bg-black/10 md:bg-transparent rounded-lg p-1.5 md:p-0",
                children: [e.jsxs("div", {
                    className: "flex items-center gap-1.5 opacity-90",
                    children: [e.jsx(b, {
                        className: "w-3.5 h-3.5"
                    }), e.jsxs("span", {
                        children: ["EXP: ", c()]
                    })]
                }), (t.tags.MAX_HAIL_SIZE || t.tags.MAX_WIND_GUST) && e.jsx("div", {
                    className: "w-px h-3 bg-white/30 hidden md:block"
                }), t.tags.MAX_HAIL_SIZE && e.jsxs("span", {
                    className: "flex items-center gap-1 font-bold bg-black/20 px-2 py-0.5 rounded border border-white/10",
                    children: [e.jsx(j, {
                        className: "w-3 h-3"
                    }), " ", t.tags.MAX_HAIL_SIZE]
                }), t.tags.MAX_WIND_GUST && e.jsxs("span", {
                    className: "flex items-center gap-1 font-bold bg-black/20 px-2 py-0.5 rounded border border-white/10",
                    children: [e.jsx(y, {
                        className: "w-3 h-3"
                    }), " ", t.tags.MAX_WIND_GUST]
                }), i === "extreme" && e.jsx("span", {
                    className: "ml-2 px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]",
                    children: "TAKE ACTION"
                })]
            })]
        })]
    })
}
function K(t) {
    if (!t)
        return "Coming soon";
    const i = new Date(t);
    return Number.isNaN(i.getTime()) ? t : new Intl.DateTimeFormat(void 0,{
        dateStyle: "medium"
    }).format(i)
}
const je = () => {
    var n;
    const {data: t, isLoading: i, error: a} = g({
        queryKey: ["forecast"],
        queryFn: O,
        refetchInterval: 3e5
    })
      , {data: s} = g({
        queryKey: ["warnings"],
        queryFn: B,
        refetchInterval: 15e3
    })
      , {data: c, isLoading: o, error: d} = g({
        queryKey: ["home-blog-posts"],
        queryFn: () => V(1),
        staleTime: 1e3 * 60 * 5
    })
      , r = c == null ? void 0 : c[0]
      , l = (n = r == null ? void 0 : r.author) == null ? void 0 : n.trim();
    return i ? e.jsxs("div", {
        className: "container mx-auto px-4 py-8 space-y-8",
        children: [e.jsx(m, {
            className: "h-[200px] w-full"
        }), e.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4",
            children: [...Array(7)].map( (k, I) => e.jsx(m, {
                className: "h-[400px]"
            }, I))
        })]
    }) : a ? e.jsx(v, {
        className: "container mx-auto px-4 py-8 text-center tech-card",
        children: e.jsx("p", {
            className: "text-lg text-red-400",
            children: "Failed to load forecast data"
        })
    }) : t ? e.jsxs("div", {
        className: "min-h-screen bg-monitor-bg text-foreground font-sans selection:bg-monitor-active/30",
        children: [s && s.length > 0 && e.jsx(Z, {
            warning: s[0]
        }), e.jsx(Y, {}), e.jsx("section", {
            className: "container mx-auto px-4 pt-6 max-w-7xl",
            children: e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4",
                children: [e.jsxs("a", {
                    href: "https://www.weatherwise.app/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Open Live Radar on WeatherWise",
                    className: "group relative overflow-hidden rounded-xl border border-monitor-border bg-monitor-card transition-all duration-300 hover:border-monitor-active/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] min-h-[110px] flex items-stretch",
                    children: [e.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-monitor-active/5 via-transparent to-purple-500/5 opacity-50 group-hover:opacity-100 transition-opacity"
                    }), e.jsxs("div", {
                        className: "relative p-4 flex flex-col justify-between w-full z-10",
                        children: [e.jsxs("div", {
                            className: "flex items-start justify-between",
                            children: [e.jsxs("div", {
                                children: [e.jsx("h3", {
                                    className: "text-lg font-bold font-tech uppercase tracking-wide text-white group-hover:text-monitor-active transition-colors",
                                    children: "Live Radar"
                                }), e.jsx("p", {
                                    className: "text-xs text-gray-400 font-mono mt-0.5",
                                    children: "INTERACTIVE TRACKING SYSTEM"
                                })]
                            }), e.jsx("div", {
                                className: "p-1.5 bg-monitor-active/10 rounded-lg border border-monitor-active/20 text-monitor-active",
                                children: e.jsx(F, {
                                    className: "w-4 h-4"
                                })
                            })]
                        }), e.jsxs("div", {
                            className: "mt-2 flex items-center gap-2 text-[10px] font-bold font-mono uppercase tracking-widest text-gray-500 group-hover:text-monitor-active transition-colors",
                            children: ["Launch Interface", e.jsx(x, {
                                className: "w-3 h-3 group-hover:translate-x-1 transition-transform"
                            })]
                        })]
                    })]
                }), e.jsxs(h, {
                    to: "/submit",
                    "aria-label": "Submit a weather photo",
                    className: "group relative overflow-hidden rounded-xl border border-monitor-border bg-monitor-card transition-all duration-300 hover:border-monitor-success/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] min-h-[110px] flex items-stretch",
                    children: [e.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-monitor-success/5 via-transparent to-green-900/5 opacity-50 group-hover:opacity-100 transition-opacity"
                    }), e.jsxs("div", {
                        className: "relative p-4 flex flex-col justify-between w-full z-10",
                        children: [e.jsxs("div", {
                            className: "flex items-start justify-between",
                            children: [e.jsxs("div", {
                                children: [e.jsx("h3", {
                                    className: "text-lg font-bold font-tech uppercase tracking-wide text-white group-hover:text-monitor-success transition-colors",
                                    children: "Submit Report"
                                }), e.jsx("p", {
                                    className: "text-xs text-gray-400 font-mono mt-0.5",
                                    children: "UPLOAD VISUAL INTEL"
                                })]
                            }), e.jsx("div", {
                                className: "p-1.5 bg-monitor-success/10 rounded-lg border border-monitor-success/20 text-monitor-success",
                                children: e.jsx(M, {
                                    className: "w-4 h-4"
                                })
                            })]
                        }), e.jsxs("div", {
                            className: "mt-2 flex items-center gap-2 text-[10px] font-bold font-mono uppercase tracking-widest text-gray-500 group-hover:text-monitor-success transition-colors",
                            children: ["Initiate Upload", e.jsx(x, {
                                className: "w-3 h-3 group-hover:translate-x-1 transition-transform"
                            })]
                        })]
                    })]
                }), e.jsxs(h, {
                    to: "/warnings",
                    "aria-label": "View Top 10 Weather Warnings",
                    className: "group relative overflow-hidden rounded-xl border border-monitor-border bg-monitor-card transition-all duration-300 hover:border-monitor-danger/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] min-h-[110px] flex items-stretch",
                    children: [e.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-monitor-danger/5 via-transparent to-red-900/5 opacity-50 group-hover:opacity-100 transition-opacity"
                    }), e.jsxs("div", {
                        className: "relative p-4 flex flex-col justify-between w-full z-10",
                        children: [e.jsxs("div", {
                            className: "flex items-start justify-between",
                            children: [e.jsxs("div", {
                                children: [e.jsx("h3", {
                                    className: "text-lg font-bold font-tech uppercase tracking-wide text-white group-hover:text-monitor-danger transition-colors",
                                    children: "Priority Alerts"
                                }), e.jsx("p", {
                                    className: "text-xs text-gray-400 font-mono mt-0.5",
                                    children: "TOP 10 CRITICAL WARNINGS"
                                })]
                            }), e.jsx("div", {
                                className: "p-1.5 bg-monitor-danger/10 rounded-lg border border-monitor-danger/20 text-monitor-danger animate-pulse-slow",
                                children: e.jsx(_, {
                                    className: "w-4 h-4"
                                })
                            })]
                        }), e.jsxs("div", {
                            className: "mt-2 flex items-center gap-2 text-[10px] font-bold font-mono uppercase tracking-widest text-gray-500 group-hover:text-monitor-danger transition-colors",
                            children: ["View Feed", e.jsx(x, {
                                className: "w-3 h-3 group-hover:translate-x-1 transition-transform"
                            })]
                        })]
                    })]
                })]
            })
        }), e.jsxs("div", {
            className: "container mx-auto px-4 py-8 space-y-8 max-w-7xl",
            children: [e.jsx(X, {
                info: t.channel_info
            }), d ? e.jsx(v, {
                className: "tech-card rounded-xl border border-monitor-border p-6 sm:p-8",
                children: e.jsxs("div", {
                    className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                    children: [e.jsxs("div", {
                        children: [e.jsx("p", {
                            className: "text-xs font-bold font-mono uppercase tracking-widest text-monitor-danger",
                            children: "Connection Error"
                        }), e.jsx("p", {
                            className: "mt-2 text-sm text-gray-400 font-sans",
                            children: "UNABLE TO RETRIEVE BLOG FEED. RETRYING..."
                        })]
                    }), e.jsxs(h, {
                        to: "/blog",
                        className: "inline-flex items-center gap-2 text-sm font-bold text-monitor-active hover:text-white transition-colors font-mono uppercase tracking-wide",
                        children: [e.jsx("span", {
                            children: "Manual Access"
                        }), e.jsx(x, {
                            className: "h-4 w-4"
                        })]
                    })]
                })
            }) : o ? e.jsxs(v, {
                className: "tech-card rounded-xl p-6 sm:p-8",
                children: [e.jsx(m, {
                    className: "h-4 w-24 bg-monitor-card/50"
                }), e.jsx(m, {
                    className: "mt-4 h-7 w-3/4 bg-monitor-card/50"
                }), e.jsx(m, {
                    className: "mt-3 h-4 w-full bg-monitor-card/50"
                }), e.jsx(m, {
                    className: "mt-3 h-4 w-2/3 bg-monitor-card/50"
                })]
            }) : r ? e.jsxs(h, {
                to: `/blog/${r.slug}`,
                "aria-label": `Read the latest blog post: ${r.title}`,
                className: "group relative block overflow-hidden rounded-xl border border-monitor-border bg-monitor-card shadow-lg transition-all duration-300 hover:border-monitor-active/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-1",
                children: [r.heroImageUrl ? e.jsx("img", {
                    src: r.heroImageUrl,
                    alt: r.heroImageAlt ?? r.title,
                    width: 800,
                    height: 400,
                    className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 transition duration-500 group-hover:scale-105 group-hover:opacity-40",
                    loading: "eager",
                    decoding: "async",
                    fetchPriority: "high"
                }) : e.jsx("div", {
                    className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-monitor-active/20 via-monitor-bg/80 to-purple-600/30 opacity-60"
                }), e.jsx("div", {
                    className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-monitor-bg via-monitor-bg/90 to-transparent"
                }), e.jsxs("div", {
                    className: "relative max-w-3xl p-6 sm:p-8 z-10",
                    children: [e.jsx("p", {
                        className: "text-xs font-bold font-mono uppercase tracking-widest text-monitor-active mb-3 bg-monitor-active/10 inline-block px-2 py-1 rounded border border-monitor-active/20",
                        children: "Latest Transmission"
                    }), e.jsxs("div", {
                        className: "flex flex-wrap items-center gap-3 text-xs text-gray-400 font-mono uppercase tracking-wide mb-4",
                        children: [e.jsx("span", {
                            className: "text-white",
                            children: K(r.publishedAt ?? r.updatedAt)
                        }), e.jsx("span", {
                            className: "text-gray-700",
                            children: "|"
                        }), e.jsxs("span", {
                            children: [r.readingTimeMinutes, " MIN READ"]
                        }), l && e.jsxs(e.Fragment, {
                            children: [e.jsx("span", {
                                className: "text-gray-700",
                                children: "|"
                            }), e.jsxs("span", {
                                children: ["AUTH: ", l]
                            })]
                        })]
                    }), e.jsx("h3", {
                        className: "text-2xl font-bold font-tech uppercase tracking-wide text-white transition-colors group-hover:text-monitor-active md:text-4xl leading-tight drop-shadow-lg",
                        children: r.title
                    }), e.jsx("p", {
                        className: "mt-4 text-sm text-gray-300 line-clamp-3 font-sans leading-relaxed border-l-2 border-monitor-active/30 pl-4 group-hover:border-monitor-active/60 transition-colors",
                        children: r.summary
                    }), e.jsxs("div", {
                        className: "mt-6 inline-flex items-center gap-2 text-sm font-bold font-mono uppercase tracking-widest text-monitor-active group-hover:text-white transition-colors",
                        children: [e.jsx("span", {
                            children: "Access Full Report"
                        }), e.jsx(x, {
                            className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        })]
                    })]
                })]
            }) : null, e.jsx(P, {}), e.jsx(U, {
                forecasts: t.days
            })]
        })]
    }) : null
}
;
export {je as default};
