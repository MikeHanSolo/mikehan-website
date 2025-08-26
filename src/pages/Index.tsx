import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TechStack from "@/components/TechStack";
const sections = [{
  id: "work",
  label: "Work"
}, {
  id: "experience",
  label: "Skills"
} /* , {
   id: "blog",
   label: "Essays"
  } */, {
  id: "about",
  label: "About"
}];
const links = [{
  href: "mailto:mikeqhan@gmail.com",
  label: "Email",
  icon: Mail
}, {
  href: "https://www.linkedin.com/in/mikeqhan/",
  label: "LinkedIn",
  icon: Linkedin
} /* , {
   href: "https://github.com/MikeHanSolo",
   label: "GitHub",
   icon: Github
  } */];
const workExperiences = [{
  title: "Senior Director",
  company: "StoicLane (Permanent Capital Vehicle)",
  period: "Mar 2022 – May 2025",
  summary: ["As one of the first 10 hires at StoicLane, I co-built the technology team and core infrastructure that powered both the management organization and initial portfolio verticals. I created new B2B products to refine the market fit for acquired companies while executing branding, partnership, and sales strategies that accelerated portfolio company growth.", "Beyond product development, I focused on operational excellence by creating internal tools, processes, and technical knowledge systems that maintained high standards for accuracy, quality, and service efficiency. Working across multiple domains allowed me to leverage my cross-functional expertise in product, analytics, sales, and operations—helping launch new companies within tight budgets while meeting aggressive growth targets and investor expectations."],
  technologies: ["Portfolio Management", "0 to 1 Product Development", "Branding & GTM", "Sales & Demoing", "Data Analytics/ML", "Data Warehousing", "Operations Automation", "Team Budgeting"]
}, {
  title: "Product Manager",
  company: "Paylocity (HR/HCM B2B SaaS)",
  period: "Nov 2020 – Mar 2022",
  summary: ["I spearheaded growth for Data Insights and Modern Workforce Index, two enterprise analytics platforms targeting executive and people leaders at mid-to-large companies seeking data-driven organizational insights.", "My work centered upon visualization, workflow, and recommendation engine experiences that served dozens of client industries. Day-to-day, I coordinated dependencies across multiple cross-functional and other product teams to ensure our experiences were cohesive as an overall platform. My team successfully created flexible data products that adapted and scaled to solve variations of similar pain points across thousands of customers."],
  technologies: ["Enterprise SaaS", "Data Products", "Data Science/ML", "Design Systems", "A/B Testing"]
}, {
  title: "Product Manager",
  company: "Amount (Banking B2B SaaS)",
  period: "Oct 2019 – Nov 2020",
  summary: ["I drove product development across Amount's core lending infrastructure, working on digital account opening, credit underwriting engines, external APIs, and data platform capabilities that powered credit decisions for millions of consumers at major financial institutions.", "I was heavily involved in the design and launch of multiple top US banks on Amount's infrastructure, enabling these customers to rapidly deploy new lending products within months while saving millions on engineering costs. My work ensured that my team's areas of the platform scaled to handle exponential increases in lending volume while remaining flexible enough to account for complex credit policy strategies and data that varied from bank to bank."],
  technologies: ["Enterprise SaaS", "Loan Origination Products", "Data Products", "API Products", "Credit Underwriting", "Infra Migrations"]
}, {
  title: "Senior Associate, Data",
  company: "Avant (D2C Fintech)",
  period: "Aug 2017 – Oct 2019",
  summary: ["I was key in building new BI, data quality, and data warehouse infrastructure as Avant evolved into a multi-product type and multi-tenant platform serving millions of customers.", "I also led a new hire cohort in the Avant Data Rotational Program. I taught essential data analyst skills and the foundational product knowledge required across teams to navigate, understand, and extract insights from the company's shared data sources."],
  technologies: ["Business Intelligence", "Data Management", "DW Migration", "Data Automation", "IT Carve-out"]
}, {
  title: "Experienced Consultant",
  company: "West Monroe (F500 & UMM Consulting)",
  period: "Oct 2015 – Aug 2017",
  summary: ["I joined West Monroe within the Technology Practice, initially specializing in data engineering projects. My role quickly expanded to address complex challenges in data science, data strategy, and information security for clients across the healthcare, insurance, finance, and consumer goods industries, directly shaping their core technology strategies.", "I was typically staffed on small, agile teams of two to five consultants delivering high-impact technology transformations. Over time, I assumed leadership responsibilities as the primary consultant, managing project execution and directly interfacing with senior client stakeholders."],
  technologies: ["Consulting", "Predictive Analytics", "Data Warehousing", "Data Strategy", "Infosec"]
}];
const Index = () => {
  return <div className="min-h-screen flex flex-col bg-neutral-50 font-mono">
      {/* Hero Content Section */}
      <section className="hero-content">
        <main className="flex flex-col justify-center items-center flex-1 min-h-screen pt-10 px-4 w-full max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mb-8">
            <img src="/assets/images/b85f7d64-eaeb-4eee-a9b4-777ef4becec5.png" alt="Mike Han avatar" className="w-14 h-14 relative z-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
            Mike Han
          </h1>
          {/* Split intro text into three stacked divs with minimal vertical spacing */}
          <div className="flex flex-col items-center gap-y-px mb-8">
            <div className="text-base md:text-lg text-zinc-600 inline-block">Product Leader. PE Operator. Data Scientist.</div>
            <div className="text-base md:text-lg text-zinc-800 inline-block">Building SaaS from 0 to 1 & beyond. Scaling Ops teams with AI/ML.</div>
            <div className="text-base md:text-lg text-zinc-800 inline-block">Passionate about products serving startups & small business.</div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {sections.map(section => <a key={section.id} href={`#${section.id}`} className="px-3 py-1 text-xs md:text-sm rounded bg-zinc-100 text-zinc-700 border border-zinc-200 whitespace-nowrap select-none transition-colors hover:bg-zinc-200">
                {section.label}
              </a>)}
          </div>
          <div className="flex gap-3 justify-center mb-12">
            {links.map(({
            href,
            label,
            icon: Icon
          }) => <a key={label} href={href} className="rounded-full hover:bg-zinc-200 p-3 transition-colors" aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon className="text-zinc-600 hover:text-zinc-900" size={24} />
              </a>)}
          </div>
        </main>
      </section>
      
      <section id="work" className="w-full py-24" tabIndex={-1}>
        <div className="w-full max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-zinc-900">Work</h2>
          <div className="space-y-6">
            {workExperiences.map((experience, index) => <Card key={index} className="border border-zinc-200 bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center flex-shrink-0">
                      {experience.company.includes("StoicLane") ? <img src="/assets/images/ddf27a95-726d-4952-88ab-9e4131851492.png" alt="StoicLane logo" className="w-8 h-8 object-contain" /> : experience.company.includes("Paylocity") ? <img src="/assets/images/6204c863-919a-461f-b6bd-ad03fac5f0c6.png" alt="Paylocity logo" className="w-8 h-8 object-contain" /> : experience.company === "Amount (Banking B2B SaaS)" ? <img src="/assets/images/cb2cac5d-4218-42ec-81f1-4e7df128e72c.png" alt="Amount logo" className="w-8 h-8 object-contain" /> : experience.company === "Avant (D2C Fintech)" ? <img src="/assets/images/48703980-714a-4417-8b94-151cb795487e.png" alt="Avant logo" className="w-7 h-7 object-contain mx-auto" /> : experience.company === "West Monroe (F500 & UMM Consulting)" ? <img src="/assets/images/09ed48bf-35d8-431f-8ed8-2ba904acfb6d.png" alt="West Monroe Partners logo" className="w-8 h-8 object-contain ml-0.5" /> : <span className="text-sm font-semibold text-zinc-600">
                          {experience.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg font-semibold text-zinc-900 mb-0">
                        {experience.title}
                      </CardTitle>
                      <p className="text-base font-medium text-zinc-700">
                        {experience.company}
                      </p>
                    </div>
                    <span className="text-sm text-zinc-500 font-mono flex-shrink-0">
                      {experience.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-4">
                    {experience.summary.map((point, pointIndex) => <p key={pointIndex} className="text-sm text-zinc-600 leading-relaxed">
                        {point}
                      </p>)}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {experience.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-700 border border-zinc-200">
                        {tech}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
      
      <section id="experience" className="w-full py-24" tabIndex={-1}>
        <div className="w-full max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-zinc-900">Skills</h2>
          
          {/* Profile */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-zinc-900 mb-6">Profile</h3>
            <div className="space-y-4 text-sm text-zinc-600 leading-relaxed mb-6">
              <p>
                My career sits at the intersection of Product Management and Analytics. Across venture-backed startups and growth-stage enterprises I
              </p>
              <ul className="space-y-1">
                <li className="flex">
                  <span className="mr-2 flex-shrink-0">•</span>
                  <span className="pl-0">Align domain experts—engineering, design, GTM, and operations—around a product vision tied to company OKRs</span>
                </li>
                <li className="flex">
                  <span className="mr-2 flex-shrink-0">•</span>
                  <span className="pl-0">Translate data and customer feedback into better product/service experiences that differentiate in the market</span>
                </li>
                <li className="flex">
                  <span className="mr-2 flex-shrink-0">•</span>
                  <span className="pl-0">Stay hands-on and deeply understand the execution to remove blockers</span>
                </li>
              </ul>
              <p>This approach has led to a hybrid technical-and-strategic toolkit spanning product, growth, engineering, data science, go-to-market execution, and operational excellence.</p>
            </div>
          </div>

          {/* How I Create Value */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-zinc-900 mb-6">How I Create Value</h3>
            
            {/* Desktop table - hidden on mobile */}
            <div className="hidden md:block border border-zinc-200 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-zinc-50">
                    <TableHead className="font-semibold text-zinc-900 w-72">Outcome</TableHead>
                    <TableHead className="font-semibold text-zinc-900">Approach</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-sm text-zinc-600 w-72">Accelerate growth & retention while safeguarding ROI</TableCell>
                    <TableCell className="text-sm text-zinc-600">Deep customer discovery → borrow proven design patterns across industries → prototype rapidly (incl. AI) → ship in modular, ROI-positive increments.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm text-zinc-600 w-72">Raise service quality & operational efficiency</TableCell>
                    <TableCell className="text-sm text-zinc-600">Blend tech-enabled support with iterative back-office automation; track quality KPIs; leverage vendor partnerships to reduce cost and broaden service capabilities.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm text-zinc-600 w-72">Optimize resource allocation through data-driven models</TableCell>
                    <TableCell className="text-sm text-zinc-600">Build dynamic, scenario-based financial models linking spend to leading indicators; feed live data back into the model to recalibrate priorities and maximize ROI.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm text-zinc-600 border-b-0 w-72">Design reusable solutions that scale across domains</TableCell>
                    <TableCell className="text-sm text-zinc-600 border-b-0">Apply platform thinking and modular design to craft reusable toolkits, capture repeatable patterns, and foster cross-functional trust and aligned incentives—so teams readily adopt and build upon proven components.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Mobile layout - visible only on mobile */}
            <div className="md:hidden space-y-4">
              <div className="border border-zinc-200 rounded-lg p-4 bg-white">
                <h4 className="font-semibold text-zinc-900 text-sm mb-2">Outcome</h4>
                <p className="text-sm text-zinc-600 mb-3">Accelerate growth & retention while safeguarding ROI</p>
                <h4 className="font-semibold text-zinc-900 text-sm mb-2">Approach</h4>
                <p className="text-sm text-zinc-600">Deep customer discovery → borrow proven design patterns across industries → prototype rapidly (incl. AI) → ship in modular, ROI-positive increments.</p>
              </div>
              
              <div className="border border-zinc-200 rounded-lg p-4 bg-white">
                <h4 className="font-semibold text-zinc-900 text-sm mb-2">Outcome</h4>
                <p className="text-sm text-zinc-600 mb-3">Raise service quality & operational efficiency</p>
                <h4 className="font-semibold text-zinc-900 text-sm mb-2">Approach</h4>
                <p className="text-sm text-zinc-600">Blend tech-enabled support with iterative back-office automation; track quality KPIs; leverage vendor partnerships to reduce cost and broaden service capabilities.</p>
              </div>
              
              <div className="border border-zinc-200 rounded-lg p-4 bg-white">
                <h4 className="font-semibold text-zinc-900 text-sm mb-2">Outcome</h4>
                <p className="text-sm text-zinc-600 mb-3">Optimize resource allocation through data-driven models</p>
                <h4 className="font-semibold text-zinc-900 text-sm mb-2">Approach</h4>
                <p className="text-sm text-zinc-600">Build dynamic, scenario-based financial models linking spend to leading indicators; feed live data back into the model to recalibrate priorities and maximize ROI.</p>
              </div>
              
              <div className="border border-zinc-200 rounded-lg p-4 bg-white">
                <h4 className="font-semibold text-zinc-900 text-sm mb-2">Outcome</h4>
                <p className="text-sm text-zinc-600 mb-3">Design reusable solutions that scale across domains</p>
                <h4 className="font-semibold text-zinc-900 text-sm mb-2">Approach</h4>
                <p className="text-sm text-zinc-600">Apply platform thinking and modular design to craft reusable toolkits, capture repeatable patterns, and foster cross-functional trust and aligned incentives—so teams readily adopt and build upon proven components.</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-zinc-900 mb-6">Technical</h3>
            <p className="text-sm text-zinc-600 mb-4">These are the tools I've worked with most recently:</p>
            <TechStack />
          </div>
        </div>
      </section>
      
      <section id="about" className="w-full py-24" tabIndex={-1}>
        <div className="w-full max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-zinc-900">About</h2>
          <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
            <p>I'm passionate about building technology that helps small businesses punch above their weight. For the past decade I've turned fintech and B2B-SaaS ideas into enterprise-grade platforms—automating complex workflows for millions of users and guiding lean teams to market-leader status. My edge is a deep empathy for how people solve problems, informing everything from 0-to-1 roadmaps to iterative enhancements on mature products. My north star: craft intuitive workflows and data-driven guidance that put sophisticated capabilities within every user's reach.</p>
            <p>
              When I'm not shipping product, you'll find me watching soccer, hiking, assembling custom PCs, or walking my dachshund Remi. I also tackle pro-bono side projects, scout fresh tools on Product Hunt, and offer free career coaching—pursuits that keep me curious about human motivation and continually inspire the products I build.
            </p>
          </div>
        </div>
      </section>
      <footer className="w-full text-center py-6 text-xs text-zinc-400 mt-auto">
        &copy; {new Date().getFullYear()} Mike Han
      </footer>
    </div>;
};
export default Index;
