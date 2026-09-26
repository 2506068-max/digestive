import React, {useState} from 'react'

const QUESTIONS = [
  {
    q: 'Which organ produces bile?',
    options: ['Stomach','Liver','Pancreas','Small intestine'],
    answer: 1
  },
  {
    q: 'Where does most nutrient absorption occur?',
    options: ['Stomach','Large intestine','Small intestine','Esophagus'],
    answer: 2
  }
]

export default function Quiz(){
  const [index,setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  function submit(){
    if(selected===null) return
    if(selected===QUESTIONS[index].answer) setScore(s=>s+1)
    if(index+1===QUESTIONS.length){
      setFinished(true)
    } else {
      setIndex(i=>i+1)
      setSelected(null)
    }
  }

  if(finished) return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold">Result</h3>
      <p className="text-gray-600">{score} / {QUESTIONS.length}</p>
    </div>
  )

  const cur = QUESTIONS[index]

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-semibold">Question {index+1} / {QUESTIONS.length}</h3>
      <p className="mt-2">{cur.q}</p>
      <div className="mt-3 space-y-2">
        {cur.options.map((o,i)=> (
          <label key={i} className="flex items-center space-x-2">
            <input type="radio" name="opt" checked={selected===i} onChange={()=>setSelected(i)} />
            <span>{o}</span>
          </label>
        ))}
      </div>
      <div className="mt-3">
        <button onClick={submit} className="px-3 py-2 bg-blue-600 text-white rounded">Submit</button>
      </div>
    </div>
  )
}
