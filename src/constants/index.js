import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Analytics",
  "Sound classification and bridging",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Legal AI and Lyrical Assistant",
    text: "Enable Ai to detect plagiarism in music and the similarity in sounds . Also a major boost lyrical assistance.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "MultiPlatform",
    text: "Simmer is available in all platforms. IOS, Andriod and Web",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Customization",
    text: "Allow users to customize the chatbot's appearance and behavior, Tell your music bot the music you find hot!!!",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as Music Apis, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With next rhyme suggestion based on the genre content";

export const collabContent = [
  {
    id: "0",
    title: "Lyrical Assistant",
    text: collabText,
  },
  {
    id: "1",
    title: "Legal Ai",
  },
  {
    id: "2",
    title: "Music Bot",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Lyrical Assistant",
    price: "0",
    features: [
      "An AI model that can help you with your lyrics",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Legal Ai for music plagiarism, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
      "Detect lyrical and sound plagiarism using Ai models"
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "Prompting your music bot.",
      "Priority support to solve issues quickly",
      "Detect lyrical and sound plagiarism using Ai modelst",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Create Lyrics with a next rhyming line effect with AI",
    text: "In a garden where the roses bloom, Beneath the sky, a bright blue room.Each petal whispers secrets sweet,As lovers' hearts begin to beat.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Detect Possible copyrights breach in Music",
    text: "AI can detect possible copyright breaches in music by analyzing melodies, harmonies, and lyrics, comparing them to existing copyrighted works for similarities.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title:
      "Generate Lyrical title with suggestions based on the lyrical content",
    text: "AI can generate lyrical titles with suggestions by analyzing the content, themes, and emotions of the lyrics, providing creative and relevant options.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Suggest songs based on the emotions of the person",
    text: "AI can suggest songs based on a person's emotions by analyzing mood indicators and recommending tracks that match their current emotional state.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title:
      "Ask your music friend what kind of music you want to listen to using LLM ",
    text: "AI can ask your music friend about their preferred genre, mood, or artist, using language models to facilitate personalized music recommendations and conversations.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title:
      "Let data make perfect decision for you based on who you are and what AI has learnt from you!",
    text: "Powerful analytics from music data, including listening time, artist preferences, suggestions, and questions asked from LLMs, can optimize personalized recommendations and insights.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
