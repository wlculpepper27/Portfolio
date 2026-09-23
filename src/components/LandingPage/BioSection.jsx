import { MainLayoutContainer } from '../../MainLayout.jsx'

const bioSectionLabel = '01 / BIO'

const bioMainParagraph =
  'My name is Weston Culpepper, a highly motivated and dedicated Computer Science student at North Carolina A&T State University with a strong academic record (3.9 GPA) and a passion for building robust, user-centric software solutions. With hands-on experience as a Software Engineering Intern at Aflac, I have a proven ability to streamline complex processes, develop full-stack applications, and collaborate effectively within Agile teams to deliver impactful results.'

const bioAsideParagraph =
  'My success in competitive hackathons demonstrates my capacity to thrive under pressure, rapidly prototype AI-driven platforms, and work cross-functionally to transform intricate data into intuitive user experiences. Proficient in a diverse tech stack including Java, Python, C++, React, and Node.js, I am eager to apply my technical expertise, leadership skills, and problem-solving mindset to create innovative solutions that drive efficiency and make a tangible difference. Guided by the Eagle Scout values of leadership and service, I\'m a collaborative team player.'

export default function BioSection() {
  return (
    <section id="bio" className="bg-gray-950 py-32">
      <MainLayoutContainer>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col items-start gap-6 lg:col-span-4">
            <img
              src="/WC_Shield.jpg"
              alt="WC shield"
              className="h-48 w-48 object-contain"
            />
            <span className="font-label text-xs uppercase tracking-[0.3em] text-accent">
              {bioSectionLabel}
            </span>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-3xl text-lg leading-relaxed text-white md:text-xl">
              {bioMainParagraph}
            </p>

            <div className="mt-16 max-w-xl border-l-2 border-accent pl-8">
              <p className="leading-loose text-gray-400">
                {bioAsideParagraph}
              </p>
            </div>
          </div>
        </div>
      </MainLayoutContainer>
    </section>
  )
}