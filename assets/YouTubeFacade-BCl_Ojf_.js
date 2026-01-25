import {j as e} from "./vendor-ui-ChKirxi5.js";
import {r as c} from "./vendor-react-C-0J8HPx.js";
import {P as u} from "./play-Bz3Li2MT.js";
function p({videoId: t, title: r="Play video", className: a="", thumbnailUrl: l}) {
    const [s,o] = c.useState(!1)
      , i = l || `https://i.ytimg.com/vi/${t}/hqdefault.jpg`;
    return s ? e.jsx("iframe", {
        src: `https://www.youtube.com/embed/${t}?autoplay=1`,
        title: r,
        className: a,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: !0
    }) : e.jsxs("button", {
        onClick: () => o(!0),
        className: `relative group cursor-pointer bg-black ${a}`,
        "aria-label": r,
        children: [e.jsx("img", {
            src: i,
            alt: r,
            className: "w-full h-full object-cover",
            loading: "lazy"
        }), e.jsx("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: e.jsx("div", {
                className: "w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 group-hover:scale-110 transition-all shadow-lg",
                children: e.jsx(u, {
                    className: "w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1"
                })
            })
        })]
    })
}
export {p as Y};
