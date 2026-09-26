import React, {useState} from 'react'
import { ORGANS } from '../data/organs'

const HOTSPOT_POS: Record<string,{cx:number,cy:number,r?:number}> = {
  mouth: {cx:200, cy:70, r:26},
  stomach: {cx:200, cy:300, r:60},
  liver: {cx:270, cy:200, r:50},
}

export default function DigestiveSystem({onSelect}:{onSelect:(id:string)=>void}){
  const [hover, setHover] = useState<string | null>(null)

  function handleKey(e:React.KeyboardEvent, id:string){
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault()
      onSelect(id)
    }
  }

  return (
    <div className="relative bg-white rounded-lg shadow p-6 flex items-center justify-center">
      <svg viewBox="0 0 400 800" className="w-full max-w-sm">
        {/* Base anatomy shapes (stylized placeholders) */}
        <g>
          <ellipse cx="200" cy="80" rx="60" ry="35" fill="#f6e7e1" stroke="#e2b8aa"/>
          <rect x="180" y="110" width="40" height="120" rx="12" fill="#f6e7e1" stroke="#e2b8aa"/>
          <path d="M160 240 C 190 320, 210 320, 240 240 L 240 360 C 210 440, 190 440, 160 360 Z" fill="#fceee8" stroke="#e2b8aa"/>
        </g>

        {/* Hotspots rendered as focusable elements */}
        {ORGANS.map(o=> {
          const pos = HOTSPOT_POS[o.id]
          if(!pos) return null
          const isActive = hover === o.id
          return (
            <circle
              key={o.id}
              cx={pos.cx}
              cy={pos.cy}
              r={pos.r ?? 20}
              fill={isActive ? '#ffefe9' : 'transparent'}
              stroke={isActive ? '#ff7a6b' : '#cbd5e1'}
              tabIndex={0}
              role="button"
              aria-label={`${o.name} — ${o.description}`}
              onClick={()=>onSelect(o.id)}
              onKeyDown={(e)=>handleKey(e,o.id)}
              onFocus={()=>setHover(o.id)}
              onBlur={()=>setHover(null)}
              onMouseEnter={()=>setHover(o.id)}
              onMouseLeave={()=>setHover(null)}
              className="hotspot"
            />
          )
        })}
      </svg>

      <div className="absolute right-4 top-4 w-44 bg-white p-2 rounded">
        <h3 className="text-sm font-semibold">Organs</h3>
        <ul className="text-sm text-gray-700">
          {ORGANS.map(o=> (
            <li key={o.id}>
              <button className="text-left text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-300" onClick={()=>onSelect(o.id)}>{o.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
