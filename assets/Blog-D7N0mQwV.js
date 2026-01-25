import {j as e} from "./vendor-ui-ChKirxi5.js";
import {r as c, L as x} from "./vendor-react-C-0J8HPx.js";
import {u} from "./vendor-query-2oCPVP0F.js";
import {k as v} from "./index-CGMClAOr.js";
import {S as m} from "./skeleton-CamB8oBF.js";
import {T as g} from "./tag-D550Rw9G.js";
import {A as p} from "./arrow-right-Ch6jctBv.js";
function h(t) {
    if (!t)
        return "Coming soon";
    const o = new Date(t);
    return Number.isNaN(o.getTime()) ? t : new Intl.DateTimeFormat(void 0,{
        dateStyle: "long"
    }).format(o)
}
function f({post: t}) {
    var s;
    const o = (s = t.author) == null ? void 0 : s.trim();
    return e.jsxs(x, {
        to: `/blog/${t.slug}`,
        className: "group relative flex h-full flex-col overflow-hidden rounded-xl border border-monitor-border bg-monitor-card transition-all duration-300 hover:border-monitor-active/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:-translate-y-1",
        children: [t.heroImageUrl ? e.jsx("img", {
            src: t.heroImageUrl,
            alt: t.heroImageAlt ?? t.title,
            className: "absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105 group-hover:opacity-50",
            loading: "lazy",
            decoding: "async"
        }) : e.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-monitor-active/20 via-monitor-bg/80 to-purple-500/20 opacity-60"
        }), e.jsx("div", {
            className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-monitor-bg via-monitor-bg/80 to-transparent"
        }), e.jsxs("div", {
            className: "relative flex flex-1 flex-col z-10 p-5",
            children: [e.jsxs("div", {
                className: "flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wide text-monitor-active",
                children: [e.jsx("span", {
                    children: h(t.publishedAt ?? t.updatedAt)
                }), e.jsx("span", {
                    className: "text-gray-600",
                    children: "|"
                }), e.jsxs("span", {
                    children: [t.readingTimeMinutes, " min read"]
                }), o && e.jsxs(e.Fragment, {
                    children: [e.jsx("span", {
                        className: "text-gray-600",
                        children: "|"
                    }), e.jsxs("span", {
                        className: "text-white",
                        children: ["By ", o]
                    })]
                })]
            }), e.jsx("h3", {
                className: "mt-3 text-lg font-bold text-white transition-colors group-hover:text-monitor-active font-tech uppercase tracking-wide leading-tight",
                children: t.title
            }), e.jsx("p", {
                className: "mt-3 text-sm text-gray-400 line-clamp-3 font-sans leading-relaxed border-l-2 border-monitor-border pl-3 group-hover:border-monitor-active/50 transition-colors",
                children: t.summary
            }), t.tags.length > 0 ? e.jsx("div", {
                className: "mt-4 flex flex-wrap gap-1.5",
                children: t.tags.slice(0, 4).map(a => e.jsxs("span", {
                    className: "inline-flex items-center gap-1 rounded bg-monitor-bg/50 border border-monitor-border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-gray-300",
                    children: [e.jsx(g, {
                        className: "h-2.5 w-2.5"
                    }), a]
                }, a))
            }) : null, e.jsxs("div", {
                className: "mt-auto pt-5 text-xs font-bold font-mono text-monitor-active uppercase tracking-widest flex items-center gap-2",
                children: ["ACCESS FILE", e.jsx(p, {
                    className: "h-3 w-3 transition-transform group-hover:translate-x-1"
                })]
            })]
        })]
    })
}
function I() {
    var d;
    const {data: t, isLoading: o, error: s} = u({
        queryKey: ["blog-posts"],
        queryFn: () => v(),
        staleTime: 3e5
    })
      , a = c.useMemo( () => t ?? [], [t])
      , r = a[0] ?? null
      , i = (d = r == null ? void 0 : r.author) == null ? void 0 : d.trim()
      , l = c.useMemo( () => r ? a.slice(1) : a, [r, a]);
    return e.jsxs("div", {
        className: "min-h-screen bg-monitor-bg text-foreground font-sans",
        children: [e.jsxs("section", {
            className: "relative overflow-hidden border-b border-monitor-border/50",
            children: [e.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-monitor-active/10 via-monitor-bg to-monitor-bg"
            }), e.jsx("div", {
                className: "absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-monitor-active/50 to-transparent"
            }), e.jsxs("div", {
                className: "relative mx-auto max-w-5xl px-4 py-12 text-center",
                children: [e.jsx("span", {
                    className: "text-xs font-bold font-tech uppercase tracking-[0.3em] text-monitor-active mb-4 block",
                    children: "Ryan Hall, Y'all // Transmission Log"
                }), e.jsx("h1", {
                    className: "mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl font-tech uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]",
                    children: "Mission Reports & Updates"
                }), e.jsx("p", {
                    className: "mx-auto mt-4 max-w-3xl text-base text-gray-400 md:text-lg font-mono",
                    children: "Direct feed from Ryan, Meteorologist Andy Hill, and the Y'allBot AI system."
                })]
            })]
        }), e.jsxs("section", {
            className: "mx-auto max-w-6xl px-4 pt-8 pb-16",
            children: [o ? e.jsxs("div", {
                className: "space-y-8",
                children: [e.jsx(m, {
                    className: "h-[360px] w-full rounded-3xl bg-zinc-900/60"
                }), e.jsx("div", {
                    className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
                    children: Array.from({
                        length: 6
                    }).map( (n, b) => e.jsx(m, {
                        className: "h-[280px] rounded-2xl bg-zinc-900/60"
                    }, b))
                })]
            }) : null, !o && s ? e.jsx("div", {
                className: "rounded-2xl border border-red-500/50 bg-red-500/10 p-6 text-red-200",
                children: "Unable to load the blog right now. Please try again shortly."
            }) : null, !o && !s && a.length === 0 ? e.jsx("div", {
                className: "rounded-2xl border border-white/10 bg-zinc-900/50 p-10 text-center text-zinc-300",
                children: "Blog posts will appear here soon. Stay tuned!"
            }) : null, !o && !s && r ? e.jsxs(x, {
                to: `/blog/${r.slug}`,
                className: "group relative mb-12 block overflow-hidden rounded-xl border border-monitor-border bg-monitor-card shadow-lg transition duration-300 hover:-translate-y-1 hover:border-monitor-active/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
                children: [r.heroImageUrl ? e.jsx("img", {
                    src: r.heroImageUrl,
                    alt: r.heroImageAlt ?? r.title,
                    className: "absolute inset-0 h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60",
                    loading: "eager",
                    decoding: "async"
                }) : e.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-monitor-active/20 via-monitor-bg/80 to-purple-600/30 opacity-80"
                }), e.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-monitor-bg via-monitor-bg/90 to-transparent"
                }), e.jsxs("div", {
                    className: "relative p-8 md:p-12 z-10",
                    children: [e.jsxs("div", {
                        className: "flex flex-wrap items-center gap-3 text-xs font-bold font-mono uppercase tracking-wide text-monitor-active",
                        children: [e.jsx("span", {
                            className: "bg-monitor-active/10 border border-monitor-active/30 px-2 py-0.5 rounded text-monitor-active",
                            children: "Featured Intel"
                        }), e.jsx("span", {
                            className: "text-gray-600",
                            children: "|"
                        }), e.jsx("span", {
                            children: h(r.publishedAt ?? r.updatedAt)
                        }), e.jsx("span", {
                            className: "text-gray-600",
                            children: "|"
                        }), e.jsxs("span", {
                            children: [r.readingTimeMinutes, " min read"]
                        }), i && e.jsxs(e.Fragment, {
                            children: [e.jsx("span", {
                                className: "text-gray-600",
                                children: "|"
                            }), e.jsxs("span", {
                                className: "text-white",
                                children: ["By ", i]
                            })]
                        })]
                    }), e.jsx("h2", {
                        className: "mt-6 max-w-3xl text-3xl font-bold font-tech uppercase tracking-wide text-white transition-colors group-hover:text-monitor-active md:text-5xl leading-none drop-shadow-lg",
                        children: r.title
                    }), e.jsx("p", {
                        className: "mt-4 max-w-2xl text-base text-gray-300 md:text-lg font-sans leading-relaxed border-l-4 border-monitor-active/50 pl-4",
                        children: r.summary
                    }), r.tags.length > 0 ? e.jsx("div", {
                        className: "mt-6 flex flex-wrap gap-2",
                        children: r.tags.slice(0, 5).map(n => e.jsxs("span", {
                            className: "inline-flex items-center gap-1 rounded bg-monitor-bg/80 border border-monitor-border px-3 py-1 text-xs font-mono uppercase tracking-widest text-gray-300 hover:border-monitor-active/50 transition-colors",
                            children: [e.jsx(g, {
                                className: "h-3 w-3 text-monitor-active"
                            }), n]
                        }, n))
                    }) : null, e.jsxs("div", {
                        className: "mt-8 inline-flex items-center gap-2 text-sm font-bold font-mono uppercase tracking-widest text-monitor-active bg-monitor-active/10 px-4 py-2 rounded border border-monitor-active/20 group-hover:bg-monitor-active/20 transition-all",
                        children: ["Access Full Report", e.jsx(p, {
                            className: "h-4 w-4 transition group-hover:translate-x-1"
                        })]
                    })]
                })]
            }) : null, !o && !s && l.length > 0 ? e.jsx("div", {
                className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
                children: l.map(n => e.jsx(f, {
                    post: n
                }, n.id))
            }) : null]
        })]
    })
}
export {I as default};
