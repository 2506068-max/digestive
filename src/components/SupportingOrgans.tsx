import React from 'react'

const ORGS = [
  {id:'liver',name:'Liver',desc:'Produces bile that helps digest fats.'},
  {id:'gallbladder',name:'Gallbladder',desc:'Stores and releases bile.'},
  {id:'pancreas',name:'Pancreas',desc:'Produces digestive enzymes.'}
]

export default function SupportingOrgans(){
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {ORGS.map(o=> (
        <div key={o.id} className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">{o.name}</h3>
          <p className="text-gray-600">{o.desc}</p>
        </div>
      ))}
    </div>
  )
}
