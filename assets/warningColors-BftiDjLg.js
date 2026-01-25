const n = {
    "TORNADO EMERGENCY": {
        main: "#950BA1",
        dark: "#72067A"
    },
    "TO.W": {
        main: "#FF0000",
        dark: "#cc0000"
    },
    "TO.A": {
        main: "#ff3333",
        dark: "#ff0000"
    },
    "SV.W": {
        main: "#FFA500",
        dark: "#FF8C00"
    },
    "SV.A": {
        main: "#FFB733",
        dark: "#FFA500"
    },
    "FF.W": {
        main: "#39B54A",
        dark: "#2d8f3b"
    },
    "FF.A": {
        main: "#A7E2FF",
        dark: "#87CEEB"
    },
    "WS.W": {
        main: "#FF69B4",
        dark: "#cc5490"
    },
    "WS.A": {
        main: "#4169E1",
        dark: "#0000CD"
    },
    "WW.Y": {
        main: "#87CEEB",
        dark: "#4682B4"
    },
    "BZ.W": {
        main: "#E67300",
        dark: "#CC6600"
    },
    "IS.W": {
        main: "#8B008B",
        dark: "#6b006b"
    },
    "MA.W": {
        main: "#731e56",
        dark: "#5a1743"
    },
    "FZ.W": {
        main: "#483D8B",
        dark: "#27508F"
    },
    "FZ.A": {
        main: "#ADD8E6",
        dark: "#87CEEB"
    },
    "SP.S": {
        main: "#9370DB",
        dark: "#7B68EE"
    },
    "SQ.W": {
        main: "#00BFFF",
        dark: "#0099cc"
    },
    "LE.W": {
        main: "#008B8B",
        dark: "#006b6b"
    },
    "EC.W": {
        main: "#1B4F72",
        dark: "#0A2A3F"
    },
    "EC.A": {
        main: "#2874A6",
        dark: "#1B4F72"
    },
    "CW.Y": {
        main: "#5DADE2",
        dark: "#2874A6"
    },
    "WC.Y": {
        main: "#85C1E9",
        dark: "#5DADE2"
    },
    "AV.W": {
        main: "#1E90FF",
        dark: "#0066CC"
    },
    "AV.A": {
        main: "#6495ED",
        dark: "#4F75BA"
    },
    "FL.W": {
        main: "#006400",
        dark: "#004d00"
    },
    "FA.W": {
        main: "#008B45",
        dark: "#006633"
    },
    "CF.W": {
        main: "#20B2AA",
        dark: "#178F88"
    },
    "LS.W": {
        main: "#3CB371",
        dark: "#2E8B57"
    },
    "FL.Y": {
        main: "#90EE90",
        dark: "#74c474"
    },
    "FA.Y": {
        main: "#98FB98",
        dark: "#7bc97b"
    },
    "CF.Y": {
        main: "#B0E0E6",
        dark: "#89b3b9"
    },
    "LS.Y": {
        main: "#ADD8E6",
        dark: "#8badb6"
    },
    "FL.A": {
        main: "#4F9B82",
        dark: "#3d7a66"
    },
    "FA.A": {
        main: "#5F9EA0",
        dark: "#4b7e80"
    },
    "CF.A": {
        main: "#87CEEB",
        dark: "#6ca3bc"
    },
    "LS.A": {
        main: "#79CDCD",
        dark: "#61a3a3"
    },
    "CF.S": {
        main: "#B8D8D8",
        dark: "#93acac"
    },
    "FR.Y": {
        main: "#6495ED",
        dark: "#4f75ba"
    },
    "HU.W": {
        main: "#8B0000",
        dark: "#660000"
    },
    "HU.A": {
        main: "#FFB6C1",
        dark: "#FF91A4"
    },
    "TR.W": {
        main: "#FFD700",
        dark: "#CCAC00"
    },
    "TR.A": {
        main: "#4682B4",
        dark: "#36618A"
    },
    "SS.W": {
        main: "#8B008B",
        dark: "#6B006B"
    },
    "SS.A": {
        main: "#BA55D3",
        dark: "#9A42AD"
    }
};
function u(r, a) {
    const e = `${r}.${a}`;
    return n[e] || null
}
function k(r) {
    var a, e, A, t, E, i, d, m, F, D, T;
    return !!(r.emergency || (a = r.tags) != null && a.PDS || (e = r.tags) != null && e.EDS || (A = r.title) != null && A.includes("Tornado Emergency") || ((t = r.tags) == null ? void 0 : t.THUNDERSTORM_DAMAGE_THREAT) === "DESTRUCTIVE" || ((E = r.tags) == null ? void 0 : E.THUNDERSTORM_DAMAGE_THREAT) === "CONSIDERABLE" || ((i = r.tags) == null ? void 0 : i.TORNADO_DAMAGE_THREAT) === "CONSIDERABLE" || ((d = r.tags) == null ? void 0 : d.TORNADO_DAMAGE_THREAT) === "CATASTROPHIC" || ((m = r.tags) == null ? void 0 : m.FLASH_FLOOD_DAMAGE_THREAT) === "CATASTROPHIC" || ((F = r.tags) == null ? void 0 : F.TORNADO) === "OBSERVED" || (T = (D = r.tags) == null ? void 0 : D.SOURCE) != null && T.toLowerCase().includes("confirmed"))
}
function C(r) {
    var a, e, A, t, E, i, d, m, F;
    return r.emergency || (a = r.title) != null && a.includes("Tornado Emergency") || ((e = r.tags) == null ? void 0 : e.TORNADO_DAMAGE_THREAT) === "CATASTROPHIC" || ((A = r.tags) == null ? void 0 : A.FLASH_FLOOD_DAMAGE_THREAT) === "CATASTROPHIC" || ((t = r.tags) == null ? void 0 : t.THUNDERSTORM_DAMAGE_THREAT) === "DESTRUCTIVE" ? "extreme" : (E = r.tags) != null && E.PDS || (i = r.tags) != null && i.EDS || ((d = r.tags) == null ? void 0 : d.TORNADO) === "OBSERVED" || ((m = r.tags) == null ? void 0 : m.TORNADO_DAMAGE_THREAT) === "CONSIDERABLE" || ((F = r.tags) == null ? void 0 : F.THUNDERSTORM_DAMAGE_THREAT) === "CONSIDERABLE" ? "severe" : r.product === "TO" && r.significance === "W" || r.product === "SV" && r.significance === "W" || r.product === "FF" && r.significance === "W" ? "moderate" : "standard"
}
export {u as a, C as g, k as i};
