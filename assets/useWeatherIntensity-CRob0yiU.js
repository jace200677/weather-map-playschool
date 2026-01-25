import {c as n} from "./index-CGMClAOr.js";
import {u as r} from "./vendor-query-2oCPVP0F.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i = n("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
async function o() {
    const e = new URL("https://public.yallsoft.app/rhy/wis.json");
    e.searchParams.set("t", Date.now().toString());
    const t = await fetch(e.toString(), {
        cache: "no-store"
    });
    if (!t.ok)
        throw new Error("Failed to fetch weather intensity data");
    return t.json()
}
function c() {
    return r({
        queryKey: ["weatherIntensity"],
        queryFn: o,
        refetchInterval: 5e3,
        staleTime: 0,
        refetchIntervalInBackground: !0
    })
}
export {i as T, c as u};
