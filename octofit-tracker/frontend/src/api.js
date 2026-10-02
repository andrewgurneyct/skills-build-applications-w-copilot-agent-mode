export function resolveApiBase(codespaceName) {
  const name = codespaceName?.trim()
  return name && /^[a-z0-9-]+$/i.test(name)
    ? `https://${name}-8000.app.github.dev`
    : 'http://localhost:8000'
}

export const apiBase = resolveApiBase(import.meta.env?.VITE_CODESPACE_NAME)

export function normalizeResponse(data, resource) {
  const rows = Array.isArray(data) ? data : data?.results ?? data?.[resource]
  if (!Array.isArray(rows)) throw new Error('The API returned an unexpected response.')
  return {
    rows,
    count: Number.isFinite(data?.count) ? data.count : rows.length,
    next: typeof data?.next === 'string' ? data.next : null,
    previous: typeof data?.previous === 'string' ? data.previous : null,
  }
}

export async function fetchCollection(endpoint, resource, pageUrl, signal) {
  const url = new URL(pageUrl || endpoint, apiBase)
  if (url.origin !== apiBase || url.pathname !== endpoint) {
    throw new Error('The API returned an invalid pagination link.')
  }
  const target = import.meta.env?.DEV ? `${url.pathname}${url.search}` : url.href
  const response = await fetch(target, { signal, headers: { Accept: 'application/json' } })
  if (!response.ok) throw new Error(`Unable to load ${resource} (HTTP ${response.status}).`)
  return normalizeResponse(await response.json(), resource)
}