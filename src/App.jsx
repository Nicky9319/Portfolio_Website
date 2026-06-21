import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './store'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { TimelineSection } from './components/sections/TimelineSection'
import { ProjectShowcase } from './components/sections/ProjectShowcase'
import { SkillsMatrix } from './components/sections/SkillsMatrix'
import { AboutSection } from './components/sections/AboutSection'
import { projects } from './data/projects'

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <HeroSection />
            <TimelineSection />
            <ProjectShowcase projects={projects} />
            <SkillsMatrix />
            <AboutSection />
          </main>
          <Footer />
        </div>
      </QueryClientProvider>
    </Provider>
  )
}

export default App