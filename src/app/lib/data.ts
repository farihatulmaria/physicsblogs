import { LayoutDashboard,FileText,BarChart3 } from "lucide-react";

export const navItems = [
  { id: "home", label: "Home",link:"/" },
  { id: "about", label: "About",link:"/about" },
  { id: "blog", label: "Blog",link:"/blog" },
  { id: "support", label: "Support",link:"/support" },
];

const loremContent = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare sollicitudin libero a congue. Sed pharetra quis erat pharetra egestas. Quisque vel vulputate mi, vel rhoncus lacus. Vestibulum sodales turpis sit amet condimentum accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
  
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi.</p>

  <h3>The Physics of the Situation</h3>
  <p>Aenean eget malesuada est. Aliquam fermentum, nulla quis maximus commodo, ex arcu dignissim nisl, vitae dapibus est felis ac tellus. Sed non euismod neque. Sed pharetra quis erat pharetra egestas. Quisque vel vulputate mi, vel rhoncus lacus.</p>
  
  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Consectetur adipiscing elit, sed do eiusmod tempor.</p>
`;

interface blogPost{
  id: number,
  title: string,
  category: string,
  excerpt: string,
  image: string,
  author: string,
  date: string,
  readTime: string,
  content:string,
  featured?: boolean,
  status: string,
}

export const blogPosts = [
  {
    id: 1,
    title: "The Symphony of Strings: Unraveling the Universe's Hidden Dimensions",
    category: "Quantum Mechanics",
    excerpt: "Exploring the elegant theory that suggests the universe is composed of vibrating strings of energy, hiding dimensions beyond our perception.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    author: "Tome Hope",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    content:loremContent,
    featured: true,
    status: "Published"
  },
  {
    id: 2,
    title: "Black Holes: The Event Horizon and Beyond",
    category: "Astrophysics",
    excerpt: "What happens when you cross the point of no return? A journey into the gravitational abyss where time itself stands still.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop",
    author: "Dr. Sarah Chen",
    date: "Jan 12, 2025",
    readTime: "6 min read",
    content:loremContent,
    featured: false,
    status: "Published"
  },
  {
    id: 3,
    title: "Time Dilation Explained: Einstein's Greatest Insight",
    category: "Relativity",
    excerpt: "Why time flows differently depending on your speed and gravity. The mind-bending reality of our universe.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c61df?q=80&w=2070&auto=format&fit=crop",
    author: "Tome Hope",
    date: "Jan 10, 2025",
    readTime: "5 min read",
    content:loremContent,
    featured: false,
    status: "Published"
  },
  {
    id: 4,
    title: "The Double Slit Experiment: Particle or Wave?",
    category: "Quantum Mechanics",
    excerpt: "The experiment that shattered our understanding of reality and opened the door to quantum weirdness.",
    image: "https://images.unsplash.com/photo-1614726365723-49cfae9278b7?q=80&w=1976&auto=format&fit=crop",
    author: "Prof. James Miller",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    content:loremContent,
    featured: false,
    status: "Published"
  },
  {
    id: 5,
    title: "Dark Matter: The Invisible Web That Binds Galaxies",
    category: "Cosmology",
    excerpt: "The mysterious substance that holds galaxies together but remains completely invisible to our telescopes.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2013&auto=format&fit=crop",
    author: "Tome Hope",
    date: "Jan 5, 2025",
    readTime: "6 min read",
    content:loremContent,
    featured: false,
    status: "Published"
  },
  {
    id: 6,
    title: "Entropy and the Arrow of Time",
    category: "Thermodynamics",
    excerpt: "Why does disorder always increase? Understanding the fundamental law that gives time its direction.",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2074&auto=format&fit=crop",
    author: "Dr. Emily Watson",
    date: "Jan 3, 2025",
    readTime: "9 min read",
    content:loremContent,
    featured: false,
    status: "Published"
  },
  {
    id: 7,
    title: "The Higgs Boson: God's Particle Explained",
    category: "Particle Physics",
    excerpt: "How a single particle gives mass to everything in the universe and completes the Standard Model.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    author: "Tome Hope",
    date: "Dec 28, 2024",
    readTime: "8 min read",
    content:loremContent,
    featured: false,
    status: "Published"
  },
  {
    id: 8,
    title: "Quantum Entanglement: Spooky Action at a Distance",
    category: "Quantum Mechanics",
    excerpt: "Einstein's nightmare became reality. Particles connected across space in ways that defy classical intuition.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    author: "Dr. Sarah Chen",
    date: "Dec 25, 2024",
    readTime: "6 min read",
    content:loremContent,
    featured: false,
    status: "Published"
  }
];

export const categories = [
  'All', 
  'Quantum Mechanics', 
  'Astrophysics', 
  'Relativity', 
  'Cosmology', 
  'Thermodynamics', 
  'Particle Physics'
];

export const sideBarItems = [
  {icon:LayoutDashboard, label:'Dashboard',path:'/dashboard'},
  {icon:FileText, label:'Articles',path:'/dashboard/article'},
]


