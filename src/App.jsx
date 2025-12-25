import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Snow from './components/Snow'
import FloatingAudio from './components/FloatingAudio'
import './App.css'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white relative selection:bg-purple-100">
        <Analytics />
        <Snow />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <FloatingAudio />
      </div>
    </Router>
  )
}

export default App
