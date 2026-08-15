/**
 * Evidence Atlas design philosophy: an editorial research field sheet where
 * community-health evidence, not decorative UI, creates the reading journey.
 */
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  Microscope,
  Network,
  X,
} from "lucide-react";

const logoUrl = "/manus-storage/ahmed-azeez-surveillance-beacon-logo_65f23e48.png";
const heroUrl = "/manus-storage/ahmed-azeez-hero-epidemiology_65247566.png";
const researchUrl = "/manus-storage/ahmed-azeez-research-network_9e786b42.png";
const communityUrl = "/manus-storage/ahmed-azeez-community-fieldnotes_790e4674.png";

const researchAreas = [
  {
    marker: "01",
    icon: Network,
    title: "Community-based surveillance",
    copy: "Examining how community leaders, representative groups, and local systems can strengthen early detection and response to infectious disease.",
  },
  {
    marker: "02",
    icon: Microscope,
    title: "Epidemiology & modelling",
    copy: "Using cross-sectional study design, structural equation modelling, and infectious-disease analytics to understand behavioural and social determinants.",
  },
  {
    marker: "03",
    icon: BookOpen,
    title: "Measurement & validation",
    copy: "Developing and adapting public-health instruments through exploratory and confirmatory factor analysis and Item Response Theory.",
  },
];

const publications = [
  {
    year: "2026",
    title: "Modeling social and behavioral factors associated with community participation in community-based surveillance of communicable diseases: a cross-sectional study in Kelantan, Malaysia.",
    venue: "Osong Public Health and Research Perspectives",
  },
  {
    year: "2025",
    title: "Modeling the determinants of community engagement in community-based surveillance of infectious diseases: Applying the Health Belief Model.",
    venue: "Journal of Public Health Research, 14, 1–10",
  },
  {
    year: "2025",
    title: "A confirmatory analysis of the knowledge, attitudes, and perceptions questionnaire for community-based surveillance of infectious diseases: A cross-sectional study in Malaysia.",
    venue: "Osong Public Health and Research Perspectives, 16, 229–241",
  },
  {
    year: "2025",
    title: "Community participation in community-based surveillance of infectious diseases: A structural equation modeling approach based on the theory of reasoned action.",
    venue: "International Journal of One Health, 11(1), 178–185",
  },
  {
    year: "2025",
    title: "Assessing community leaders’ knowledge, attitudes, and perceptions on community-based surveillance of infectious diseases: Development and validation of a questionnaire.",
    venue: "Medical Journal of Babylon, 22, 156–163",
  },
  {
    year: "2026",
    title: "Role of self-efficacy in mediating the effect between perceived barriers and benefits and intention to be involved in community-based surveillance of infectious diseases.",
    venue: "Building inclusive sustainability: Pathways to policy, community development & environmental innovation, pp. 61–70",
  },
];

const milestones = [
  {
    period: "2025—present",
    role: "Lecturer",
    place: "Higher Health Institute of Wasit, Iraq",
    detail: "Teaching emergency health, public health, and epidemiology; mentoring undergraduate research and contributing to curriculum development.",
  },
  {
    period: "2021—2025",
    role: "PhD Researcher",
    place: "Universiti Sains Malaysia",
    detail: "Designed community-based surveillance research in Malaysia and applied EFA, CFA, IRT, SEM, and path analysis.",
  },
  {
    period: "2018—2021",
    role: "Community Health Specialist",
    place: "Public Health Department of Wasit, Iraq",
    detail: "Delivered training for health workers and doctors in antenatal care, IMNCH, and emergency obstetric and neonatal care.",
  },
  {
    period: "2010—2015",
    role: "Public Health Officer",
    place: "Public Health Department of Wasit, Iraq",
    detail: "Worked across communicable disease, health visitor, medical, pharmacy, and antenatal/postnatal care units.",
  },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Ahmed Azeez Hasan — home">
      <img src={logoUrl} alt="Surveillance beacon mark" />
      <span>
        <strong>Ahmed Azeez Hasan</strong>
        <small>Public Health · Epidemiology</small>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? "main-nav main-nav-open" : "main-nav"} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>Profile</a>
            <a href="#research" onClick={closeMenu}>Research</a>
            <a href="#publications" onClick={closeMenu}>Publications</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-rule" aria-labelledby="hero-title">
          <div className="hero-art" style={{ backgroundImage: `url(${heroUrl})` }} aria-hidden="true" />
          <div className="hero-grid page-frame">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span>Field Notes</span> · Wasit, Iraq / Kelantan, Malaysia</p>
              <h1 id="hero-title">Public-health evidence made meaningful at community level.</h1>
              <p className="hero-intro">
                Ahmed Azeez Hasan is an epidemiologist, lecturer, and public-health practitioner focused on infectious-disease surveillance, community engagement, and measurement science.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#publications">Explore selected research <ArrowDown size={16} /></a>
                <a className="text-link" href="#contact">Start a research conversation <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <aside className="evidence-panel reveal delay-1" aria-label="Research snapshot">
              <p className="panel-label">Research snapshot</p>
              <div className="stat-grid">
                <div><strong>PhD</strong><span>Community Medicine & Public Health</span></div>
                <div><strong>10+</strong><span>Years in community health practice</span></div>
                <div><strong>6+</strong><span>Published works listed in this portfolio</span></div>
              </div>
              <div className="evidence-footer">
                <span className="signal-dot" />
                Current focus: community-based infectious disease surveillance
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="intro-section page-frame section-rule">
          <div className="section-index reveal"><span>01</span><i /></div>
          <div className="intro-copy reveal delay-1">
            <p className="eyebrow">Profile</p>
            <h2>From frontline health practice to epidemiological research.</h2>
            <p>
              Ahmed’s work joins applied community health with rigorous epidemiological methods. He holds a PhD in Community Medicine and Public Health from Universiti Sains Malaysia, specialising in the epidemiology of infectious diseases, and is now a Lecturer at the Higher Health Institute of Wasit in Iraq.
            </p>
            <p>
              His research centres on how communities participate in disease surveillance and how valid, context-sensitive instruments can improve the quality of that evidence. His academic practice draws on more than a decade of public-health service and health-worker training in Iraq.
            </p>
            <div className="credential-strip">
              <span>R</span><span>Mplus</span><span>JAMOVI</span><span>JASP</span><span>SPSS</span>
            </div>
          </div>
          <div className="research-image-wrap reveal delay-2">
            <img src={researchUrl} alt="Abstract network of connected public-health evidence points" />
            <span className="image-caption">Epidemiology / biostatistics / instrument development</span>
          </div>
        </section>

        <section id="research" className="research-section section-rule">
          <div className="page-frame">
            <div className="section-heading split-heading reveal">
              <div>
                <p className="eyebrow">Research areas</p>
                <h2>Tracing the signals that strengthen public-health response.</h2>
              </div>
              <p>Methods are selected to make community knowledge measurable, interpretable, and actionable for health systems.</p>
            </div>
            <div className="research-grid">
              {researchAreas.map(({ marker, icon: Icon, title, copy }, index) => (
                <article className={`research-card reveal delay-${index + 1}`} key={marker}>
                  <div className="marker-row"><span>{marker}</span><Icon size={22} strokeWidth={1.5} /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="publications-section page-frame section-rule">
          <div className="publication-topline reveal">
            <div>
              <p className="eyebrow">Selected publications</p>
              <h2>Research in the record.</h2>
            </div>
            <a className="text-link" href="https://orcid.org/0000-0002-9004-9689" target="_blank" rel="noreferrer">
              View ORCID profile <ExternalLink size={16} />
            </a>
          </div>
          <div className="publication-list">
            {publications.map((publication, index) => (
              <article className="publication-row reveal" style={{ animationDelay: `${Math.min(index * 45, 240)}ms` }} key={publication.title}>
                <span className="publication-year">{publication.year}</span>
                <div>
                  <h3>{publication.title}</h3>
                  <p>{publication.venue}</p>
                </div>
                <a href="https://orcid.org/0000-0002-9004-9689" target="_blank" rel="noreferrer" aria-label={`Find ${publication.title} on Ahmed Azeez Hasan's ORCID profile`}>
                  <ArrowUpRight size={20} />
                </a>
              </article>
            ))}
          </div>
          <p className="source-note">Publication information is adapted from Ahmed Azeez Hasan’s curriculum vitae.</p>
        </section>

        <section className="community-feature section-rule">
          <div className="page-frame community-layout">
            <div className="community-copy reveal">
              <p className="eyebrow">Current work</p>
              <h2>Connecting surveillance systems with the places they serve.</h2>
              <p>
                Ongoing work includes a study of the spatiotemporal dynamics of four zoonotic public-health threats in Wasit Governorate, Iraq, using Bayesian hierarchical and negative binomial regression analysis.
              </p>
              <a className="text-link" href="#contact">Discuss potential collaboration <ArrowUpRight size={16} /></a>
            </div>
            <div className="community-art reveal delay-1">
              <img src={communityUrl} alt="Abstract field notes representing community health surveillance" />
            </div>
          </div>
        </section>

        <section className="experience-section page-frame section-rule" aria-labelledby="experience-title">
          <div className="section-heading reveal">
            <p className="eyebrow">Professional pathway</p>
            <h2 id="experience-title">A practice-informed academic career.</h2>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <article className="timeline-entry reveal" style={{ animationDelay: `${Math.min(index * 65, 200)}ms` }} key={milestone.period}>
                <p className="timeline-period">{milestone.period}</p>
                <div className="timeline-content">
                  <h3>{milestone.role}</h3>
                  <p className="timeline-place">{milestone.place}</p>
                  <p>{milestone.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="page-frame contact-layout">
            <div className="reveal">
              <p className="eyebrow eyebrow-light">Contact & collaboration</p>
              <h2>Let’s move useful evidence into public-health practice.</h2>
            </div>
            <div className="contact-actions reveal delay-1">
              <a className="email-link" href="mailto:ahmed.azeez1987@gmail.com">ahmed.azeez1987@gmail.com <ArrowUpRight size={19} /></a>
              <div className="contact-meta">
                <span><GraduationCap size={17} /> Higher Health Institute of Wasit</span>
                <a href="https://orcid.org/0000-0002-9004-9689" target="_blank" rel="noreferrer"><BookOpen size={17} /> ORCID: 0000-0002-9004-9689</a>
                <a href="mailto:ahmed.azeez1987@gmail.com"><Mail size={17} /> Email Ahmed</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-frame footer-inner">
          <Brand />
          <p>© {new Date().getFullYear()} Ahmed Azeez Hasan. Built as a research portfolio and academic blog.</p>
        </div>
      </footer>
    </div>
  );
}
