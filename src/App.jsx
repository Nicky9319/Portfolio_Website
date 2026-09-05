import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { store } from './store'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { TimelineSection } from './components/sections/TimelineSection'
import { ProjectShowcase } from './components/sections/ProjectShowcase'
import { ConceptIdeas } from './components/sections/ConceptIdeas'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { AboutSection } from './components/sections/AboutSection'
import { projects } from './data/projects'

const queryClient = new QueryClient()

function ThemedApp() {
  const mode = useSelector((state) => state.theme.mode)

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(mode)
  }, [mode])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TimelineSection />
        <ProjectShowcase projects={projects} />
        <ConceptIdeas />
        <ExperienceSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemedApp />
      </QueryClientProvider>
    </Provider>
  )
}

export default App