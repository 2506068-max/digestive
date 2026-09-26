import React from 'react'

const CARDS = [
  {title:'Digestion',text:'The process of breaking food into smaller substances the body can absorb.'},
  {title:'Absorption',text:'Moving nutrients from the digestive tract into the body.'},
  {title:'Peristalsis',text:'Wave-like muscle contractions that move food along.'}
]

export default function LearningCards(){
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {CARDS.map(c=> (
        <div key={c.title} className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">{c.title}</h3>
          <p className="text-gray-600">{c.text}</p>
        </div>
      ))}
    </div>
  )
}
