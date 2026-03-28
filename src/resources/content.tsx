import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Noven",
  lastName: "Fauzian",
  name: "Dianwan Noven Nur Fauzian",
  role: "Informatics Engineering Student & AI Enthusiast",
  avatar: "/images/avatar-baru.jpg",
  email: "dianwannovennf@gmail.com",
  location: "Asia/Jakarta", // Purbalingga timezone
  languages: ["English", "Bahasa Indonesia"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Updates</>,
  description: <>Stay updated with my latest projects and AI insights.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/novennf/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}`,
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/novennf/",
    essential: true,
  }
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as an ${person.role}`,
  headline: <>Translating complex AI concepts into practical applications.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Medical Cost Prediction
        </Text>
      </Row>
    ),
    href: "/work/medical-cost-prediction",
  },
  subline: (
    <>
      I'm Noven, an Informatics Engineering student passionate about Artificial Intelligence and tech ecosystems. I build, engage, and lead dynamic AI communities.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Purbalingga, Central Java`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "https://cal.com" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I believe technology is only as powerful as the people who can understand it. I'm Noven, an Informatics Engineering student specializing in AI and Data ecosystems. My expertise goes beyond just Python and data analysis; it's about bridging the gap between heavy technical frameworks and everyday users. My ultimate goal is to build AI solutions that genuinely help and improve people's lives. Whether I'm developing intelligent applications or driving community tech initiatives, I am eager to shape the future of accessible AI.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience & Projects",
    experiences: [
      {
        company: "Pijak in collaboration with IBM SkillsBuild",
        timeframe: "February 2026 - Present",
        role: "Student Intern | AI Engineer Learning Path",
        achievements: [
          <>Completed a comprehensive AI engineering curriculum via IBM SkillsBuild, mastering core concepts in machine learning, data science, and artificial intelligence.</>,
          <>Gained hands-on experience using Python to process datasets, train predictive models, and evaluate algorithmic performance for real-world scenarios.</>,
        ],
        images: [],
      },
      {
        company: "Google | Universitas Muhammadiyah Purwokerto",
        timeframe: "September 2025 - December 2025",
        role: "Google Student Ambassador",
        achievements: [
          <>Served as the main point of contact between students, faculty, and Google teams, presenting Google technologies at various campus events.</>,
          <>Achieved a Top 100 ranking among 800 Google Student Ambassadors nationwide by actively driving student engagement and tech initiatives.</>,
        ],
        images: [],
      },
      {
        company: "ASEAN Foundation",
        timeframe: "September 2025 - September 2026",
        role: "Master Trainer AI Ready ASEAN",
        achievements: [
          <>Delivered training sessions on Fundamentals of Generative AI, AI Ethics & Safety, and AI applications for digital literacy.</>,
          <>Prepared structured learning materials and conducted technical documentation to support training delivery.</>,
        ],
        images: [],
      },
      {
        company: "Orbit Future Academy",
        timeframe: "August 2025 - November 2025",
        role: "AWS re/Start Cloud Computing Cohort",
        achievements: [
          <>Completed an intensive cloud computing training program covering Linux OS, Python, networking, security, and databases.</>,
          <>Gained hands-on experience in provisioning, configuring, and managing core AWS services including EC2, S3, IAM, VPC, and RDS.</>,
        ],
        images: [],
      },
      {
        company: "Independent Project",
        timeframe: "April 2025",
        role: "Medical Cost Prediction Project",
        achievements: [
          <>Built a regression model to predict medical costs to assist health insurance providers in setting premiums.</>,
          <>Trained and evaluated several machine learning models, with a Random Forest Regressor achieving an excellent R2 score of approximately 0.92.</>,
        ],
        images: [],
      },
      {
        company: "Mars Computer",
        timeframe: "November 2022 - April 2023",
        role: "Data Entry Intern",
        achievements: [
          <>Input total income and sold items from customer receipts into Excel.</>,
          <>Save and archive documents related to the entered data for easy future access.</>,
          <>Create reports or summaries from the entered data for further analysis.</>,
          <>Upload product content for sale on the marketplace.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education Level",
    institutions: [
      {
        name: "Universitas Muhammadiyah Purwokerto",
        description: <>Informatics Engineering (GPA: 3.78) | August 2024 - Present<br/>Developed a store invoicing application using conditional concepts in C#.</>,
      },
      {
        name: "SMK YPT 1 Purbalingga",
        description: <>Computer and Network Engineering (Final Score: 85) | July 2021 - May 2024<br/>Built websites (Front-End) and created an LED Running Text Display using Arduino.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills & Specializations",
    skills: [
      {
        title: "Artificial Intelligence & Data Science",
        description: <>Python, Machine Learning, Predictive Modeling, Exploratory Data Analysis, Model Evaluation, Generative AI.</>,
        tags: [
          { name: "Python", icon: "code" },
          { name: "Machine Learning", icon: "globe" },
        ],
        images: [],
      },
      {
        title: "Cloud & Databases",
        description: <>AWS (EC2, S3, RDS), SQL, Google BigQuery, Linux Operating Systems.</>,
        tags: [
          { name: "AWS", icon: "database" },
          { name: "SQL", icon: "database" },
        ],
        images: [],
      },
      {
        title: "Leadership & Communication",
        description: <>Public Speaking, Training & Facilitation, Curriculum Development, Technical Writing.</>,
        tags: [
          { name: "Training", icon: "person" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writings on AI & Technology...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Work & Leadership – ${person.name}`,
  description: `AI and Dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Creatives",
  title: `Activity gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
  instagramPostIds: ["DRvo286iaz0","DS2MA3Wk4Bm","DS1yE31EwTs","DO09xAxCQxE", "DPIVQEBCRFQ", "DQULV2Tk7mp","DSQkC3Bk9mr","DS0ekWyExkd", "DR8VulbExQK", "DRcmmxkCWIg", "DRZ1hmRCW-r","DPbka5lic5n"], // Replace this with your own Instagram Post IDs
};

export { person, social, newsletter, home, about, blog, work, gallery };
