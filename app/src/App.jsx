import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'
import ContactPage from './pages/ContactPage.jsx'
import LandingPage from './pages/LandingPage.jsx'

/**
 * All routes below share MainLayout: NavBar, scrollable <main>, Footer.
 * Add new pages under src/pages/ and nest them here inside the MainLayout route.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
