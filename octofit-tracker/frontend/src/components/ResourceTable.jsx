import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function formatValue(value) {
  if (value === null || value === undefined || value === '') return '-'
  if (Array.isArray(value)) return value.map(formatValue).join(', ')
  if (typeof value === 'object') {
    return value.name ?? value.username ?? value.title ?? value._id ?? JSON.stringify(value)
  }
  return String(value)
}

export default function ResourceTable({ title, resource, endpoint, columns }) {
  const [request, setRequest] = useState({ pageUrl: null })
  const [result, setResult] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    fetchCollection(endpoint, resource, request.pageUrl, controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) setResult({ request, data })
      })
      .catch((error) => {
        if (!controller.signal.aborted) setResult({ request, error: error.message })
      })
    return () => controller.abort()
  }, [endpoint, resource, request])

  const current = result?.request === request ? result : null
  const data = current?.data

  return (
    <section aria-labelledby={`${resource}-heading`}>
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-4">
        <h1 id={`${resource}-heading`} className="mb-0">{title}</h1>
        {data && <span className="text-secondary">{data.count} records</span>}
      </div>
      {!current && <p role="status">Loading {title.toLowerCase()}...</p>}
      {current?.error && (
        <div className="alert alert-danger" role="alert">
          <p>{current.error}</p>
          <button className="btn btn-outline-danger" onClick={() => setRequest({ ...request })}>
            Retry
          </button>
        </div>
      )}
      {data && (data.rows.length ? (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <caption className="visually-hidden">{title}</caption>
            <thead>
              <tr>{columns.map(([field, label]) => <th scope="col" key={field}>{label}</th>)}</tr>
            </thead>
            <tbody>
              {data.rows.map((row, index) => (
                <tr key={row._id ?? row.id ?? index}>
                  {columns.map(([field]) => <td key={field}>{formatValue(row[field])}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : <p role="status">No {title.toLowerCase()} found.</p>)}
      {data && (data.previous || data.next) && (
        <nav className="d-flex gap-2 mt-3" aria-label={`${title} pagination`}>
          <button className="btn btn-outline-secondary" disabled={!data.previous}
            onClick={() => setRequest({ pageUrl: data.previous })}>Previous</button>
          <button className="btn btn-outline-secondary" disabled={!data.next}
            onClick={() => setRequest({ pageUrl: data.next })}>Next</button>
        </nav>
      )}
    </section>
  )
}