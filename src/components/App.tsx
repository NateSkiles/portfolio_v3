import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'
import { SectionProvider } from './utils'

function App() {
  return (
    <SectionProvider>
      <main>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </SectionProvider>
  )
}

export default App
