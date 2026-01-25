import {j as e} from "./vendor-ui-ChKirxi5.js";
import {r as N} from "./vendor-react-C-0J8HPx.js";
import {u as _} from "./vendor-query-2oCPVP0F.js";
import {d as j, M as T, e as C, E as I, F as W, l as E, T as S, Z as A, g as M, S as F, j as R} from "./index-CGMClAOr.js";
import {C as v, c as y, a as D, b as $} from "./card-CNsNpwoj.js";
import {S as L} from "./skeleton-CamB8oBF.js";
import {i as O, g as P, a as H} from "./warningColors-BftiDjLg.js";
import {M as U, D as G, a as z} from "./minimize-2-N9t6Qbv9.js";
import {N as X} from "./navigation-BO7T71M9.js";
import {C as B} from "./chevron-up-f2vS5DHH.js";
import {W as Z} from "./wind-DcCUA9bR.js";
import {C as q} from "./circle-alert-BkZwHj05.js";
const K = "https://public.yallsoft.app/rhy/warning_images/directory.json"
  , Y = "https://public.yallsoft.app/rhy/warning_images"
  , V = () => {
    const {data: l, isLoading: p, error: x} = _({
        queryKey: ["warningImagesDirectory"],
        queryFn: async () => {
            const n = await fetch(K);
            if (!n.ok)
                throw new Error("Failed to fetch directory");
            return n.json()
        }
        ,
        staleTime: 3e5,
        refetchInterval: 3e5
    });
    return {
        getImageForWarning: n => {
            if (!l)
                return null;
            const c = l.files.filter(o => !!(o.commonId === n || o.fileName.startsWith(n) || n.startsWith(o.commonId)));
            if (c.length === 0)
                return null;
            const m = c.filter(o => o.fileName.includes("_UPG")).sort( (o, u) => {
                const h = o.fileName.match(/_UPG(\d+)/)
                  , t = u.fileName.match(/_UPG(\d+)/)
                  , s = h ? parseInt(h[1]) : 0;
                return (t ? parseInt(t[1]) : 0) - s
            }
            )
              , g = m.length > 0 ? m[0] : c.find(o => !o.fileName.includes("_UPG")) || c[0];
            return `${Y}/${g.path}`
        }
        ,
        isLoading: p,
        error: x
    }
}
  , Q = ({imageUrl: l, warningTitle: p, commonId: x, warningColor: d="#FFA500"}) => {
    const [n,c] = N.useState(!1)
      , [m,g] = N.useState(!0)
      , [o,u] = N.useState(!1)
      , h = t => {
        t.stopPropagation();
        const s = document.createElement("a");
        s.href = l,
        s.download = `${x}.png`,
        s.target = "_blank",
        document.body.appendChild(s),
        s.click(),
        document.body.removeChild(s)
    }
    ;
    return o ? null : e.jsxs(e.Fragment, {
        children: [!n && e.jsxs("div", {
            className: j("absolute bottom-3 right-3 md:bottom-4 md:right-4 lg:bottom-5 lg:right-5", "rounded-lg overflow-hidden", "border-2 cursor-pointer hover:shadow-xl hover:scale-105 z-10", "transition-all duration-200", "max-w-[6rem] max-h-[6rem] sm:max-w-[7rem] sm:max-h-[7rem] md:max-w-[10rem] md:max-h-[10rem] lg:max-w-[12rem] lg:max-h-[12rem]", "group"),
            style: {
                borderColor: d
            },
            onClick: () => c(!0),
            children: [m && e.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center animate-pulse",
                style: {
                    backgroundColor: `${d}15`
                },
                children: e.jsx("div", {
                    className: "w-8 h-8 border-4 border-t-transparent rounded-full animate-spin",
                    style: {
                        borderColor: d,
                        borderTopColor: "transparent"
                    }
                })
            }), e.jsx("img", {
                src: l,
                alt: `${p} - ${x}`,
                className: j("w-full h-auto object-contain transition-opacity duration-200", m && "opacity-0"),
                onLoad: () => g(!1),
                onError: () => {
                    u(!0),
                    g(!1)
                }
            }), e.jsx("div", {
                className: "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center",
                children: e.jsx(U, {
                    className: "w-6 h-6 md:w-7 md:h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-lg"
                })
            }), !m && e.jsx("div", {
                className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1.5 md:p-2",
                children: e.jsx("p", {
                    className: "text-white text-[10px] md:text-xs font-medium truncate",
                    children: "Click to expand"
                })
            })]
        }), n && e.jsx("div", {
            className: "mt-3 md:mt-4 animate-in slide-in-from-bottom-4 duration-300",
            children: e.jsxs("div", {
                className: "relative rounded-lg overflow-hidden border-2 cursor-pointer hover:shadow-lg transition-all duration-200",
                style: {
                    borderColor: d
                },
                onClick: () => c(!1),
                children: [e.jsx("img", {
                    src: l,
                    alt: `${p} - ${x}`,
                    className: "w-full h-auto object-contain max-h-[600px] bg-black/5"
                }), e.jsxs("div", {
                    className: "absolute top-2 right-2 flex gap-2",
                    children: [e.jsx("button", {
                        onClick: h,
                        className: "p-2 rounded-lg bg-black/70 hover:bg-black/90 text-white transition-all hover:scale-105 active:scale-95",
                        style: {
                            backgroundColor: `${d}ee`,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                        },
                        title: "Download image",
                        children: e.jsx(G, {
                            className: "w-4 h-4"
                        })
                    }), e.jsx("button", {
                        onClick: t => {
                            t.stopPropagation(),
                            c(!1)
                        }
                        ,
                        className: "p-2 rounded-lg bg-black/70 hover:bg-black/90 text-white transition-all hover:scale-105 active:scale-95",
                        style: {
                            backgroundColor: `${d}ee`,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                        },
                        title: "Minimize",
                        children: e.jsx(z, {
                            className: "w-4 h-4"
                        })
                    })]
                })]
            })
        })]
    })
}
  , me = () => {
    const {data: l, isLoading: p, error: x} = _({
        queryKey: ["warnings"],
        queryFn: R,
        refetchInterval: 15e3
    })
      , {getImageForWarning: d} = V()
      , [n,c] = N.useState({})
      , m = t => {
        c(s => ({
            ...s,
            [t]: !s[t]
        }))
    }
      , g = (t, s) => {
        const a = s ? "w-8 h-8" : "w-6 h-6";
        return t.includes("Tornado") ? e.jsx(S, {
            className: a
        }) : t.includes("Thunderstorm") ? e.jsx(A, {
            className: a
        }) : t.includes("Flood") ? e.jsx(M, {
            className: a
        }) : t.includes("Wind") ? e.jsx(Z, {
            className: a
        }) : t.includes("Winter") || t.includes("Blizzard") || t.includes("Snow") ? e.jsx(F, {
            className: a
        }) : e.jsx(q, {
            className: a
        })
    }
      , o = t => {
        const s = H(t.product, t.significance);
        return s ? {
            borderColor: s.dark,
            backgroundColor: `${s.main}20`,
            "--warning-color": s.main,
            "--warning-dark": s.dark
        } : {
            borderColor: "#FFA500",
            backgroundColor: "#FFA50020"
        }
    }
      , u = t => {
        const s = new Date
          , a = new Date(t.expires_at)
          , w = new Date(t.issued_at)
          , i = Math.floor((a.getTime() - s.getTime()) / 6e4)
          , r = Math.floor(i / 60)
          , f = i % 60
          , b = Math.floor((a.getTime() - w.getTime()) / 6e4);
        return {
            remaining: i > 0 ? `${r > 0 ? `${r}h ` : ""}${f}m remaining` : "Expired",
            duration: `${Math.floor(b / 60)}h ${b % 60}m total`,
            percentage: t.elapsed_percentage
        }
    }
      , h = t => !t || t === null || t === void 0 ? "0" : t >= 1e6 ? `${(t / 1e6).toFixed(1)}M` : t >= 1e3 ? `${(t / 1e3).toFixed(0)}K` : t.toString();
    return p ? e.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [e.jsx("h1", {
            className: "text-3xl font-bold mb-6",
            children: "Top 10 Weather Warnings"
        }), e.jsx("div", {
            className: "space-y-4",
            children: [...Array(10)].map( (t, s) => e.jsx(L, {
                className: "h-[200px]"
            }, s))
        })]
    }) : x ? e.jsx("div", {
        className: "container mx-auto px-4 py-8",
        children: e.jsx(v, {
            className: "text-center glass-card",
            children: e.jsx(y, {
                className: "pt-6",
                children: e.jsx("p", {
                    className: "text-lg text-red-400",
                    children: "Failed to load warnings data"
                })
            })
        })
    }) : !l || l.length === 0 ? e.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [e.jsx("h1", {
            className: "text-3xl font-bold mb-6",
            children: "Top 10 Weather Warnings"
        }), e.jsx(v, {
            className: "text-center glass-card",
            children: e.jsx(y, {
                className: "pt-6",
                children: e.jsx("p", {
                    className: "text-lg text-muted-foreground",
                    children: "No active warnings at this time"
                })
            })
        })]
    }) : e.jsxs("div", {
        className: "container mx-auto px-4 py-6 bg-monitor-bg min-h-screen text-foreground font-sans selection:bg-monitor-active/30 max-w-6xl",
        children: [e.jsxs("div", {
            className: "mb-6 text-center",
            children: [e.jsx("h1", {
                className: "text-3xl md:text-4xl font-bold mb-1 font-tech uppercase tracking-wider text-white drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]",
                children: "Top 10 Warnings"
            }), e.jsx("p", {
                className: "text-gray-400 font-mono text-xs md:text-sm uppercase tracking-tight",
                children: "// PRIORITY ALERT FEED // NATIONWIDE SCAN"
            })]
        }), e.jsx("div", {
            className: "space-y-3 md:space-y-4",
            children: l.map( (t, s) => {
                var f, b;
                const a = u(t)
                  , w = O(t)
                  , i = P(t)
                  , r = o(t);
                return e.jsxs(v, {
                    className: j("relative overflow-hidden transition-all duration-300 hover:scale-[1.005] tech-card", i === "extreme" && "border-monitor-danger shadow-[0_0_20px_rgba(239,68,68,0.2)]", i === "severe" && "border-monitor-warning shadow-[0_0_15px_rgba(245,158,11,0.2)]"),
                    style: r,
                    children: [i === "extreme" && e.jsx("div", {
                        className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-monitor-danger via-white/50 to-monitor-danger animate-pulse"
                    }), i === "severe" && e.jsx("div", {
                        className: "absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-monitor-warning via-white/30 to-monitor-warning"
                    }), e.jsx(D, {
                        className: "p-3 md:p-4 pb-2 md:pb-2 border-b border-black/20",
                        children: e.jsxs($, {
                            className: "flex items-center justify-between gap-2",
                            children: [e.jsxs("div", {
                                className: "flex items-center gap-2 md:gap-3 flex-1 min-w-0",
                                children: [e.jsxs("span", {
                                    className: "text-xl md:text-2xl font-bold font-mono opacity-60",
                                    style: {
                                        color: r["--warning-dark"] || "#666"
                                    },
                                    children: ["#", String(s + 1).padStart(2, "0")]
                                }), e.jsx("div", {
                                    style: {
                                        color: r["--warning-color"] || "#FFA500"
                                    },
                                    children: g(t.title, w)
                                }), e.jsxs("div", {
                                    className: "min-w-0 flex-1",
                                    children: [e.jsxs("div", {
                                        className: "flex items-center gap-2 flex-wrap",
                                        children: [t.emergency && e.jsx("span", {
                                            className: "px-1.5 py-0.5 bg-monitor-danger text-black text-[10px] font-bold font-mono uppercase tracking-wider rounded animate-pulse",
                                            children: "EMERGENCY"
                                        }), ((f = t.tags) == null ? void 0 : f.PDS) && e.jsx("span", {
                                            className: "px-1.5 py-0.5 bg-purple-600 text-white text-[10px] font-bold font-mono uppercase tracking-wider rounded",
                                            children: "PDS"
                                        }), ((b = t.tags) == null ? void 0 : b.TORNADO) === "OBSERVED" && e.jsx("span", {
                                            className: "px-1.5 py-0.5 bg-monitor-danger text-white text-[10px] font-bold font-mono uppercase tracking-wider rounded animate-pulse",
                                            children: "CONFIRMED"
                                        }), e.jsx("span", {
                                            className: "text-base md:text-lg font-bold font-tech uppercase tracking-wide text-white break-words leading-tight",
                                            children: t.title
                                        })]
                                    }), e.jsxs("div", {
                                        className: "flex items-center gap-2 text-xs text-white/70 mt-1 font-mono",
                                        children: [e.jsx(T, {
                                            className: "h-3 w-3"
                                        }), e.jsx("span", {
                                            children: C(t)
                                        })]
                                    })]
                                })]
                            }), e.jsxs("div", {
                                className: "flex items-center gap-2 md:gap-4 flex-shrink-0",
                                children: [e.jsxs("div", {
                                    className: "text-right hidden sm:block",
                                    children: [e.jsx("div", {
                                        className: "text-base md:text-lg font-bold font-mono",
                                        style: {
                                            color: r["--warning-color"]
                                        },
                                        children: h(t.population)
                                    }), e.jsx("div", {
                                        className: "text-[10px] text-gray-500 font-tech uppercase tracking-wider",
                                        children: "Pop. Impact"
                                    })]
                                }), e.jsxs("a", {
                                    href: `https://web.weatherwise.app/#wid=${t.id}&wr=1`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: j("flex items-center gap-2 px-3 py-2 rounded transition-all text-xs font-bold font-mono uppercase tracking-wide border", "hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]", i === "extreme" && "bg-monitor-danger hover:bg-red-600 text-white border-red-400", i === "severe" && "bg-monitor-warning hover:bg-orange-600 text-black border-orange-400", i === "moderate" && "bg-yellow-600 hover:bg-yellow-700 text-white border-yellow-400", i === "standard" && "bg-blue-600 hover:bg-blue-700 text-white border-blue-400"),
                                    children: [e.jsx("img", {
                                        src: "/WeatherWise_Black_Border.png",
                                        alt: "WeatherWise",
                                        className: "w-4 h-4 object-contain"
                                    }), e.jsx("span", {
                                        className: "hidden sm:inline",
                                        children: "RADAR"
                                    }), e.jsx(I, {
                                        className: "w-3 h-3"
                                    })]
                                })]
                            })]
                        })
                    }), e.jsxs(y, {
                        className: "p-3 md:p-4 pt-3 relative space-y-3",
                        children: [e.jsx("div", {
                            className: "flex items-center justify-between sm:hidden",
                            children: e.jsxs("div", {
                                className: "text-sm font-bold font-mono",
                                style: {
                                    color: r["--warning-color"]
                                },
                                children: ["POP: ", h(t.population)]
                            })
                        }), e.jsxs("div", {
                            className: "flex items-center justify-between font-mono text-[10px] md:text-xs uppercase tracking-wide",
                            children: [e.jsxs("span", {
                                className: "text-gray-400",
                                children: ["STATUS: ", a.remaining]
                            }), e.jsxs("span", {
                                className: "text-gray-500",
                                children: ["DURATION: ", a.duration]
                            })]
                        }), e.jsx("div", {
                            className: "relative w-full h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/5",
                            children: e.jsx("div", {
                                className: "h-full rounded-full transition-all duration-300",
                                style: {
                                    width: `${a.percentage * 100}%`,
                                    backgroundColor: r["--warning-color"] || "#FFA500"
                                }
                            })
                        }), e.jsxs("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-2",
                            children: [t.tags.MAX_WIND_GUST && e.jsxs("div", {
                                className: "bg-black/30 rounded border border-white/5 p-1.5 md:p-2 text-center",
                                children: [e.jsx("p", {
                                    className: "text-[9px] uppercase font-tech tracking-wider text-gray-500",
                                    children: "Max Wind"
                                }), e.jsx("p", {
                                    className: "font-bold text-base md:text-lg font-mono",
                                    style: {
                                        color: r["--warning-dark"]
                                    },
                                    children: t.tags.MAX_WIND_GUST
                                })]
                            }), t.tags.MAX_HAIL_SIZE && e.jsxs("div", {
                                className: "bg-black/30 rounded border border-white/5 p-1.5 md:p-2 text-center",
                                children: [e.jsx("p", {
                                    className: "text-[9px] uppercase font-tech tracking-wider text-gray-500",
                                    children: "Max Hail"
                                }), e.jsx("p", {
                                    className: "font-bold text-base md:text-lg font-mono",
                                    style: {
                                        color: r["--warning-dark"]
                                    },
                                    children: t.tags.MAX_HAIL_SIZE
                                })]
                            }), !t.tags.MAX_HAIL_SIZE && t.tags.HAIL_THREAT && e.jsxs("div", {
                                className: "bg-black/30 rounded border border-white/5 p-1.5 md:p-2 text-center",
                                children: [e.jsx("p", {
                                    className: "text-[9px] uppercase font-tech tracking-wider text-gray-500",
                                    children: "Hail Threat"
                                }), e.jsx("p", {
                                    className: "font-bold text-xs md:text-sm font-mono uppercase",
                                    style: {
                                        color: r["--warning-dark"]
                                    },
                                    children: t.tags.HAIL_THREAT
                                })]
                            }), !t.tags.MAX_WIND_GUST && t.tags.WIND_THREAT && e.jsxs("div", {
                                className: "bg-black/30 rounded border border-white/5 p-1.5 md:p-2 text-center",
                                children: [e.jsx("p", {
                                    className: "text-[9px] uppercase font-tech tracking-wider text-gray-500",
                                    children: "Wind Threat"
                                }), e.jsx("p", {
                                    className: "font-bold text-xs md:text-sm font-mono uppercase",
                                    style: {
                                        color: r["--warning-dark"]
                                    },
                                    children: t.tags.WIND_THREAT
                                })]
                            }), t.tags.SOURCE && e.jsxs("div", {
                                className: "bg-black/30 rounded border border-white/5 p-1.5 md:p-2 text-center",
                                children: [e.jsx("p", {
                                    className: "text-[9px] uppercase font-tech tracking-wider text-gray-500",
                                    children: "Source"
                                }), e.jsx("p", {
                                    className: "font-bold text-[10px] md:text-xs font-mono uppercase truncate",
                                    style: {
                                        color: r["--warning-dark"]
                                    },
                                    children: t.tags.SOURCE
                                })]
                            }), t.tags.TIME_MOT_LOC && e.jsxs("div", {
                                className: "bg-black/30 rounded border border-white/5 p-1.5 md:p-2 text-center",
                                children: [e.jsx("p", {
                                    className: "text-[9px] uppercase font-tech tracking-wider text-gray-500",
                                    children: "Vector"
                                }), e.jsxs("div", {
                                    className: "flex items-center justify-center gap-1",
                                    children: [e.jsx(X, {
                                        className: "w-3 h-3 text-white/70",
                                        style: {
                                            transform: `rotate(${t.tags.TIME_MOT_LOC.direction}deg)`
                                        }
                                    }), e.jsxs("p", {
                                        className: "font-bold text-xs font-mono uppercase text-white",
                                        children: [t.tags.TIME_MOT_LOC.speed, "KT"]
                                    })]
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "pt-2 border-t border-white/5 mt-1",
                            children: [e.jsxs("button", {
                                onClick: () => m(t.id),
                                className: "flex items-center justify-between w-full text-[10px] font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-wide py-1 group",
                                children: [e.jsxs("span", {
                                    className: "flex items-center gap-2 group-hover:text-monitor-active transition-colors",
                                    children: [e.jsx(W, {
                                        className: "w-3 h-3"
                                    }), "Raw CAP Protocol Text"]
                                }), n[t.id] ? e.jsx(B, {
                                    className: "w-3 h-3"
                                }) : e.jsx(E, {
                                    className: "w-3 h-3"
                                })]
                            }), n[t.id] && e.jsx("div", {
                                className: "mt-2 p-3 bg-black/50 rounded border border-white/10 overflow-x-auto",
                                children: e.jsx("pre", {
                                    className: "text-[10px] text-gray-400 font-mono whitespace-pre-wrap leading-relaxed",
                                    children: t.text
                                })
                            })]
                        }), ( () => {
                            const k = d(t.common_id);
                            return k ? e.jsx("div", {
                                className: "mt-2 border border-white/10 rounded overflow-hidden",
                                children: e.jsx(Q, {
                                    imageUrl: k,
                                    warningTitle: t.title,
                                    commonId: t.common_id,
                                    warningColor: r["--warning-color"]
                                })
                            }) : null
                        }
                        )()]
                    })]
                }, t.id)
            }
            )
        })]
    })
}
;
export {me as default};
