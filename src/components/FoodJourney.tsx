import React, {useState} from 'react'
import { ORGANS } from '../data/organs'

const STEPS = [
  {id:'mouth', name:'Mouth', text:'Food is chewed and mixed with saliva.'},
  {id:'pharynx', name:'Pharynx', text:'Passage to the esophagus.'},
  {id:'esophagus', name:'Esophagus', text:'Muscular tube that moves food to the stomach.'},
  {id:'stomach', name:'Stomach', text:'Food is mixed with digestive juices.'},
  {id:'duodenum', name:'Duodenum', text:'First part of the small intestine where digestion continues.'},
  {id:'jejunum', name:'Jejunum', text:'Main site of nutrient absorption.'},
  {id:'ileum', name:'Ileum', text:'Absorbs remaining nutrients.'},
  {id:'large', name:'Large intestine', text:'Absorbs water and forms stool.'},
  {id:'rectum', name:'Rectum', text:'Stores stool until elimination.'},
  {id:'anus', name:'Anus', text:'Exit point for waste.'},
]

export default function FoodJourney(){
  const [index, setIndex] = useState(0)

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">{STEPS[index].name}</h3>
          <p className="text-gray-600">{STEPS[index].text}</p>
        </div>
        <div className="text-sm text-gray-500">{index+1} / {STEPS.length}</div>
      </div>

      <div className="h-24 bg-gray-50 rounded flex items-center justify-center mb-4">
        <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse" aria-hidden="true"></div>
      </div>

      <div className="flex justify-between">
        <button onClick={()=>setIndex(i=>Math.max(0,i-1))} className="px-3 py-2 bg-gray-100 rounded">Previous</button>
        <button onClick={()=>setIndex(i=>Math.min(STEPS.length-1,i+1))} className="px-3 py-2 bg-blue-600 text-white rounded">Next</button>
      </div>
    </div>
  )
}
