import React from 'react'

const FACTS = [
  {title:'Gut has its own nerves', text:'The enteric nervous system helps control digestion independently.'},
  {title:'Surface area of small intestine', text:'If stretched out, the small intestine would be about 6 meters long.'}
]

export default function DidYouKnow(){
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {FACTS.map(f=> (
        <div key={f.title} className="p-4 bg-white rounded shadow flex items-start">
          <div className="w-10 h-10 bg-soft rounded-full mr-3" />
          <div>
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-gray-600">{f.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
