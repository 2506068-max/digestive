import React, {useState} from 'react'
import DigestiveSystem from '../components/DigestiveSystem'
import OrganDetail from '../components/OrganDetail'
import { ORGANS } from '../data/organs'

export default function Home(){
  const [selected, setSelected] = useState<string | null>(null)
  const organ = ORGANS.find(o=>o.id===selected) || ORGANS[0]

  return (
    <div className="container">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold">Explore Your Digestive System</h1>
        <nav>
          <a href="#explore" className="text-indigo-600">Start Exploring</a>
        </nav>
      </header>

      <section className="grid md:grid-cols-2 gap-6 items-start">
        <div>
          <div className="text-lg text-gray-600 mb-4">Discover how food travels through your body, how each organ works, and how nutrients are absorbed.</div>
          <DigestiveSystem onSelect={setSelected} />
        </div>
        <div>
          <OrganDetail organ={organ} />
        </div>
      </section>
    </div>
  )
}
