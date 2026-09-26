import React, {useState} from 'react'
import { Organ } from '../data/organs'
import AnatomyViewer from './AnatomyViewer'

export default function OrganDetail({organ}:{organ:Organ}){
  const [open, setOpen] = useState(false)
  return (
    <aside className="p-4 bg-white rounded-lg shadow-md w-full" aria-live="polite">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{organ.name}</h3>
          {organ.englishName && <div className="text-sm text-gray-500">{organ.englishName}</div>}
        </div>
        <button onClick={()=>setOpen(true)} className="px-3 py-1 bg-soft rounded text-sm">Explore Anatomy</button>
      </div>
      <p className="mt-2 text-gray-700">{organ.description}</p>
      <h4 className="mt-3 font-medium">Functions</h4>
      <ul className="list-disc list-inside text-gray-700">
        {organ.functions.map(f=> <li key={f}>{f}</li>)}
      </ul>
      {organ.parts && (
        <>
          <h4 className="mt-3 font-medium">Parts</h4>
          <ul className="list-disc list-inside text-gray-700">
            {organ.parts.map(p=> <li key={p.id}><button className="text-indigo-600 hover:underline">{p.name}</button> — {p.description}</li>)}
          </ul>
        </>
      )}

      {open && <AnatomyViewer src={'/src/assets/svg/digestive.svg'} alt={`${organ.name} anatomy`} />}
    </aside>
  )
}
