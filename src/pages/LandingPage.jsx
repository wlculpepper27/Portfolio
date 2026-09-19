/**
 * Home / landing route. Rendered inside MainLayout from App.jsx (NavBar, <main>, Footer).
 */
import BioSection from '../components/LandingPage/BioSection.jsx'
import HeroSection from '../components/LandingPage/HeroSection.jsx'
import ProjectsSection from '../components/LandingPage/ProjectsSection.jsx'
import SkillsSection from '../components/LandingPage/SkillsSection.jsx'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <BioSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  )
}
