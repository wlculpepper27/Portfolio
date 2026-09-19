/**
 * Contact route. Rendered inside MainLayout from App.jsx (NavBar, <main>, Footer).
 */
import { MainLayoutContainer } from '../MainLayout.jsx'

export default function ContactPage() {
  return (
    <MainLayoutContainer className="py-24">
      <h1 className="font-headline text-3xl font-black uppercase tracking-tighter">
        Contact
      </h1>
      <p className="mt-2 text-sm text-on-surface-variant">
        Replace with your contact form.
      </p>
    </MainLayoutContainer>
  )
}
