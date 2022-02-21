// request   - same as existing Worker API
// env       - same as existing Worker API
// params    - if filename includes [id] or [[path]]
// waitUntil - same as ctx.waitUntil in existing Worker API
// next      - used for middleware or to fetch assets
// data      - arbitrary space for passing data between middlewares
export async function onRequest({env, request: url, {cf: {country, regionCode}}}) {
  let root = new URL(url).origin
  let path = `/holidays/${country}_${regionCode}.json`.toLowerCase()
  return await env.ASSETS.fetch(root + path)
}
