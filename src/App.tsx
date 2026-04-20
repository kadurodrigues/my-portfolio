import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CaseStudyLayout from './components/case-study/CaseStudyLayout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import DesignSystem from './pages/DesignSystem'
import MicroFrontends from './pages/MicroFrontends'
import Articles from './pages/Articles'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/case-studies" element={<CaseStudyLayout />}>
              <Route index element={<Navigate to="design-system" replace />} />
              <Route path="design-system" element={<DesignSystem />} />
              <Route path="micro-frontends" element={<MicroFrontends />} />
            </Route>
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
