import './App.css'
import EventHandlingDemo from './exercises/ex16/EventHandlingDemo'
import RenderAndCommitDemo from './exercises/ex17/RenderAndCommitDemo'
import SnapshotDemo from './exercises/ex18/SnapshotDemo'
import AnimalCardsDemo from './exercises/ex19/AnimalCardsDemo'

function App() {
  return (
    <main className="homework">
      <header className="homework__hero">
        <p className="homework__eyebrow">FPT University</p>
        <h1>Exercises 16 - 19</h1>
      </header>

      <section className="exercise-block" id="ex16">
        <EventHandlingDemo />
      </section>

      <section className="exercise-block" id="ex17">
        <RenderAndCommitDemo />
      </section>

      <section className="exercise-block" id="ex18">
        <SnapshotDemo />
      </section>

      <section className="exercise-block" id="ex19">
        <AnimalCardsDemo />
      </section>
    </main>
  )
}

export default App
