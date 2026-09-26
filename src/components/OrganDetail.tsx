import React from 'react'
import { Organ } from '../data/organs'

export default function OrganDetail({organ}:{organ:Organ}){
  return (
    <aside className="p-4 bg-white rounded-lg shadow-md w-full">
      <h3 className="text-xl font-semibold">{organ.name}</h3>
      {organ.englishName && <div className="text-sm text-gray-500">{organ.englishName}</div>}
      <p className="mt-2 text-gray-700">{organ.description}</p>
      <h4 className="mt-3 font-medium">Functions</h4>
      <ul className="list-disc list-inside text-gray-700">
        {organ.functions.map(f=> <li key={f}>{f}</li>)}
      </ul>
      {organ.parts && (
        <>
          <h4 className="mt-3 font-medium">Parts</h4>
          <ul className="list-disc list-inside text-gray-700">
            {organ.parts.map(p=> <li key={p.id}>{p.name} — {p.description}</li>)}
          </ul>
        </>
      )}
    </aside>
  )
}
