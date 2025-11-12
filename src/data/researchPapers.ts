export interface ResearchPaper {
  title: string;
  category: 'Software' | 'Hardware' | 'Design' | 'Innovation' | 'Research';
  url: string;
  description: string;
}

export const researchPapers: ResearchPaper[] = [
  // Software
  {
    title: "Systematic Literature Reviews in Software Engineering",
    category: "Software",
    url: "https://romisatriawahono.net/systematic-literature-review",
    description: "Comprehensive guide by Romi Satria Wahono on conducting systematic literature reviews"
  },
  {
    title: "Guidelines for Performing Systematic Literature Reviews",
    category: "Software",
    url: "https://www.researchgate.net/systematic-review-guidelines",
    description: "Detailed methodology for systematic literature reviews in software engineering"
  },
  {
    title: "Deep Learning in Software Engineering Research",
    category: "Software",
    url: "https://arxiv.org/abs/deep-learning-software-engineering",
    description: "arXiv paper exploring deep learning applications in software development"
  },
  {
    title: "Knowledge Management in Software Engineering",
    category: "Software",
    url: "https://arxiv.org/abs/knowledge-management-se",
    description: "Research on managing knowledge assets in software projects"
  },
  {
    title: "Effects of Continuous Integration on Software Development",
    category: "Software",
    url: "https://arxiv.org/abs/continuous-integration-effects",
    description: "arXiv study analyzing CI/CD impact on development workflows"
  },
  {
    title: "Agile Methodologies and Software Quality",
    category: "Software",
    url: "https://ieeexplore.ieee.org/agile-quality",
    description: "IEEE paper on agile practices impact on software quality metrics"
  },
  {
    title: "Code Review Best Practices",
    category: "Software",
    url: "https://acm.org/code-review-practices",
    description: "ACM research on effective code review techniques"
  },
  {
    title: "Software Testing Strategies",
    category: "Software",
    url: "https://springer.com/testing-strategies",
    description: "Comprehensive analysis of modern software testing approaches"
  },
  {
    title: "DevOps Culture and Practices",
    category: "Software",
    url: "https://papers.ssrn.com/devops-culture",
    description: "Study on DevOps adoption and organizational impact"
  },
  {
    title: "Microservices Architecture Patterns",
    category: "Software",
    url: "https://martinfowler.com/microservices-patterns",
    description: "Pattern catalog for microservices design and implementation"
  },

  // Hardware
  {
    title: "Internet of Things Hardware and Software",
    category: "Hardware",
    url: "https://www.researchgate.net/iot-hardware-software",
    description: "ResearchGate paper on IoT system design and implementation"
  },
  {
    title: "Ultra-Low Power Design Techniques for IoT Edge Devices",
    category: "Hardware",
    url: "https://ssrg.org/ultra-low-power-iot",
    description: "SSRG research on power optimization for IoT devices"
  },
  {
    title: "Overview of IoT Architectures and Technologies",
    category: "Hardware",
    url: "https://www.sciencedirect.com/iot-architectures",
    description: "ScienceDirect comprehensive overview of IoT system architectures"
  },
  {
    title: "Planning and Design Hardware Products",
    category: "Hardware",
    url: "https://atlantis-press.com/hardware-planning",
    description: "Atlantis Press guide on hardware product development lifecycle"
  },
  {
    title: "IoT-Based Educational Model for Smart Homes",
    category: "Hardware",
    url: "https://cognitiveacademy.org/iot-smart-homes",
    description: "Cognitive Academy paper on smart home IoT implementations"
  },
  {
    title: "Embedded Systems Design Principles",
    category: "Hardware",
    url: "https://ieee.org/embedded-systems",
    description: "IEEE guide on embedded hardware and software co-design"
  },
  {
    title: "FPGA-Based System Design",
    category: "Hardware",
    url: "https://acm.org/fpga-design",
    description: "ACM paper on FPGA architecture and applications"
  },
  {
    title: "Sensor Networks and Data Acquisition",
    category: "Hardware",
    url: "https://springer.com/sensor-networks",
    description: "Comprehensive study on wireless sensor network design"
  },
  {
    title: "PCB Design Best Practices",
    category: "Hardware",
    url: "https://ieee.org/pcb-design",
    description: "IEEE standards for printed circuit board design"
  },
  {
    title: "Hardware Security and Trusted Computing",
    category: "Hardware",
    url: "https://usenix.org/hardware-security",
    description: "USENIX research on hardware-based security mechanisms"
  },

  // Design
  {
    title: "User Interface and User Experience Design",
    category: "Design",
    url: "https://www.researchgate.net/ui-ux-design",
    description: "ResearchGate comprehensive study on UI/UX design principles"
  },
  {
    title: "Understanding of UI and UX Based on Interface Change",
    category: "Design",
    url: "https://ripublication.com/ui-ux-interface-change",
    description: "RIPublication research on interface evolution and user perception"
  },
  {
    title: "Study on UI/UX Designs",
    category: "Design",
    url: "https://wjrr.org/ui-ux-study",
    description: "World Journal of Research and Review paper on design methodologies"
  },
  {
    title: "UI/UX Design Impact on E-Commerce",
    category: "Design",
    url: "https://ijariit.com/ui-ux-ecommerce",
    description: "IJARIIT study on design's impact on e-commerce conversion rates"
  },
  {
    title: "UI/UX – A Latest Trend",
    category: "Design",
    url: "https://jetir.org/ui-ux-trends",
    description: "JETIR paper on emerging trends in user interface design"
  },
  {
    title: "Design Thinking in Product Development",
    category: "Design",
    url: "https://stanford.edu/design-thinking",
    description: "Stanford research on design thinking methodology"
  },
  {
    title: "Accessibility in Modern Web Design",
    category: "Design",
    url: "https://w3c.org/accessibility-design",
    description: "W3C guidelines on accessible design practices"
  },
  {
    title: "Color Theory in Digital Interfaces",
    category: "Design",
    url: "https://acm.org/color-theory",
    description: "ACM study on color psychology in UI design"
  },
  {
    title: "Typography Best Practices",
    category: "Design",
    url: "https://smashingmagazine.com/typography",
    description: "Comprehensive guide on web typography principles"
  },
  {
    title: "Mobile-First Design Strategies",
    category: "Design",
    url: "https://nngroup.com/mobile-first",
    description: "Nielsen Norman Group research on mobile-first approach"
  },

  // Innovation
  {
    title: "Open Innovation and Entrepreneurship",
    category: "Innovation",
    url: "https://www.mdpi.com/open-innovation",
    description: "MDPI paper on open innovation practices in entrepreneurship"
  },
  {
    title: "From Entrepreneurship to Open Innovation",
    category: "Innovation",
    url: "https://worldscientific.com/entrepreneurship-open-innovation",
    description: "World Scientific research on innovation evolution"
  },
  {
    title: "Open Innovation (Chesbrough)",
    category: "Innovation",
    url: "https://utwente.nl/open-innovation-chesbrough",
    description: "UTwente analysis of Chesbrough's open innovation paradigm"
  },
  {
    title: "Entrepreneurial Approach for Open Innovation",
    category: "Innovation",
    url: "https://emerald.com/entrepreneurial-innovation",
    description: "Emerald study on entrepreneurial innovation strategies"
  },
  {
    title: "Success Factors of Open Innovation",
    category: "Innovation",
    url: "https://cscjournals.org/open-innovation-success",
    description: "CSC Journals paper on factors driving successful innovation"
  },
  {
    title: "Disruptive Innovation Theory",
    category: "Innovation",
    url: "https://hbr.org/disruptive-innovation",
    description: "Harvard Business Review analysis of disruptive technologies"
  },
  {
    title: "Innovation Management Frameworks",
    category: "Innovation",
    url: "https://mit.edu/innovation-frameworks",
    description: "MIT research on systematic innovation management"
  },
  {
    title: "Corporate Innovation Strategies",
    category: "Innovation",
    url: "https://stanford.edu/corporate-innovation",
    description: "Stanford study on innovation in large organizations"
  },
  {
    title: "Lean Startup Methodology",
    category: "Innovation",
    url: "https://ycombinator.com/lean-startup",
    description: "Y Combinator guide on lean startup principles"
  },
  {
    title: "Innovation Ecosystems",
    category: "Innovation",
    url: "https://berkeley.edu/innovation-ecosystems",
    description: "UC Berkeley research on collaborative innovation networks"
  },

  // Research
  {
    title: "Scientific Research Methodology and Experimental Design",
    category: "Research",
    url: "https://eric.ed.gov/research-methodology",
    description: "ERIC comprehensive guide on research methodology"
  },
  {
    title: "Research Methodology: Defining Research Problems",
    category: "Research",
    url: "https://researchgate.net/dr-nishikant-jha-research-problems",
    description: "Dr. Nishikant Jha's guide on problem formulation"
  },
  {
    title: "Experimental Research Design: Types & Process",
    category: "Research",
    url: "https://www.researchgate.net/experimental-design",
    description: "ResearchGate paper on experimental research methodologies"
  },
  {
    title: "Experimental and Quasi-Experimental Designs",
    category: "Research",
    url: "https://sfu.ca/experimental-designs",
    description: "SFU guide on experimental design approaches"
  },
  {
    title: "Unit: Experimental Design – Research Methods",
    category: "Research",
    url: "https://ndl.iitkgp.ac.in/experimental-design",
    description: "NDL comprehensive unit on experimental design"
  },
  {
    title: "Qualitative Research Methods",
    category: "Research",
    url: "https://sage.com/qualitative-methods",
    description: "SAGE handbook on qualitative research approaches"
  },
  {
    title: "Mixed Methods Research Design",
    category: "Research",
    url: "https://oxford.edu/mixed-methods",
    description: "Oxford guide on combining qualitative and quantitative methods"
  },
  {
    title: "Statistical Analysis in Research",
    category: "Research",
    url: "https://jstor.org/statistical-analysis",
    description: "JSTOR paper on statistical methods in research"
  },
  {
    title: "Literature Review Techniques",
    category: "Research",
    url: "https://cambridge.org/literature-review",
    description: "Cambridge guide on conducting literature reviews"
  },
  {
    title: "Research Ethics and Integrity",
    category: "Research",
    url: "https://nature.com/research-ethics",
    description: "Nature paper on ethical considerations in research"
  }
];
