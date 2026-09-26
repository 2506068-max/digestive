import React from 'react'
import { ORGANS } from '../data/organs'

export default function DigestiveSystem({onSelect}:{onSelect:(id:string)=>void}){
  return (
    <div className="relative bg-white rounded-lg shadow p-6 flex items-center justify-center">
      <svg viewBox="0 0 400 800" className="w-full max-w-sm">
        {/* Simplified illustrative shapes for hotspots — replace with realistic SVGs later */}
        <g>
          <ellipse cx="200" cy="80" rx="60" ry="35" fill="#f6e7e1" stroke="#e2b8aa"/>
          <rect x="180" y="110" width="40" height="120" rx="12" fill="#f6e7e1" stroke="#e2b8aa"/>
          <path d="M160 240 C 190 320, 210 320, 240 240 L 240 360 C 210 440, 190 440, 160 360 Z" fill="#fceee8" stroke="#e2b8aa"/>
        </g>
      </svg>
      <div className="absolute right-4 top-4 w-40 bg-white p-2 rounded">
        <h4 className="text-sm font-semibold">Organs</h4>
        <ul className="text-sm text-gray-700">
          {ORGANS.map(o=> (
            <li key={o.id}>
              <button className="text-left text-indigo-600 hover:underline" onClick={()=>onSelect(o.id)}>{o.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
