import React, {useState} from 'react'
import DigestiveSystem from '../components/DigestiveSystem'
import OrganDetail from '../components/OrganDetail'
import { ORGANS } from '../data/organs'
import FoodJourney from '../components/FoodJourney'
import SupportingOrgans from '../components/SupportingOrgans'
import LearningCards from '../components/LearningCards'
import Quiz from '../components/Quiz'
import DidYouKnow from '../components/DidYouKnow'

export default function Home(){
  const [selected, setSelected] = useState<string | null>(null)
  const organ = ORGANS.find(o=>o.id===selected) || ORGANS[0]

  return (
    <div className="container">
      <header className="flex items-center justify-between mb-8" role="banner">
        <div>
          <h1 className="hero-title">Explore Your Digestive System</h1>
          <div className="text-base text-gray-600">Discover how food travels through your body, how each organ works, and how nutrients are absorbed.</div>
        </div>
        <nav>
          <a href="#explore" className="btn btn-primary">Start Exploring</a>
        </nav>
      </header>

      <main>
      <section id="explore" className="grid md:grid-cols-2 gap-6 items-start mb-8" role="region" aria-labelledby="explore-heading">
        <h2 id="explore-heading" className="sr-only">Explore anatomy</h2>
        <div className="card">
          <DigestiveSystem onSelect={setSelected} />
        </div>
        <div>
          <OrganDetail organ={organ} />
        </div>
      </section>

      <section id="journey" className="mb-8" role="region" aria-labelledby="journey-heading">
        <h2 id="journey-heading" className="sr-only">Food journey</h2>
        <h2 className="text-2xl font-semibold mb-4">Follow the Food Journey</h2>
        <FoodJourney />
      </section>

      <section id="support" className="mb-8" role="region" aria-labelledby="support-heading">
        <h2 id="support-heading" className="sr-only">Supporting organs</h2>
        <h2 className="text-2xl font-semibold mb-4">Supporting Organs</h2>
        <SupportingOrgans />
      </section>

      <section id="didyou" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Did You Know?</h2>
        <DidYouKnow />
      </section>

      <section id="learn" className="mb-8" role="region" aria-labelledby="learn-heading">
        <h2 id="learn-heading" className="sr-only">Learning cards</h2>
        <h2 className="text-2xl font-semibold mb-4">Know Your Digestive System</h2>
        <LearningCards />
      </section>

      <section id="quiz" className="mb-8" role="region" aria-labelledby="quiz-heading">
        <h2 id="quiz-heading" className="sr-only">Quiz</h2>
        <h2 className="text-2xl font-semibold mb-4">Quick Quiz</h2>
        <Quiz />
      </section>
      </main>
    </div>
  )
}
