export const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Meals", href: "#meals" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export const customerAvatars = [
  "images/customers/customer-1.jpg",
  "images/customers/customer-2.jpg",
  "images/customers/customer-3.jpg",
  "images/customers/customer-4.jpg",
  "images/customers/customer-5.jpg",
  "images/customers/customer-6.jpg",
];

export const featuredLogos = [
  { src: "images/logos/business-insider.png", alt: "Business Insider" },
  { src: "images/logos/forbes.png", alt: "Forbes" },
  { src: "images/logos/techcrunch.png", alt: "TechCrunch" },
  { src: "images/logos/the-new-york-times.png", alt: "The New York Times" },
  { src: "images/logos/usa-today.png", alt: "USA Today" },
];

export const steps = [
  {
    number: "01",
    title: "Tell us what you like (and what not)",
    body: "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. We make sure you get all the nutrients and vitamins you need, no matter what diet you follow.",
    image: "images/app/app-screen-1.png",
  },
  {
    number: "02",
    title: "Approve your weekly meal plan",
    body: "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes — keep what you love.",
    image: "images/app/app-screen-2.png",
  },
  {
    number: "03",
    title: "Receive meals at your convenience",
    body: "The best chefs in town will cook your selected meal every day, and we'll deliver it to your door whenever works best for you. Change your schedule and address daily — no fuss.",
    image: "images/app/app-screen-3.png",
  },
];

export const meals = [
  {
    image: "images/meals/meal-1.jpg",
    name: "Japanese Gyozas",
    tags: [{ label: "vegetarian", color: "emerald" }],
    stats: [
      { icon: "bxs-hot", text: "650 calories" },
      { icon: "bxs-bowl-hot", text: "NutriScore ® 74" },
      { icon: "bxs-star", text: "4.9 rating (537)" },
    ],
  },
  {
    image: "images/meals/meal-2.jpg",
    name: "Avocado Salad",
    tags: [
      { label: "vegan", color: "emerald" },
      { label: "paleo", color: "amber" },
    ],
    stats: [
      { icon: "bxs-hot", text: "400 calories" },
      { icon: "bxs-bowl-hot", text: "NutriScore ® 92" },
      { icon: "bxs-star", text: "4.8 rating (441)" },
    ],
  },
];

export const diets = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Gluten-free",
  "Lactose-free",
  "Keto",
  "Paleo",
  "Low FODMAP",
  "Kid-friendly",
];

export const testimonials = [
  {
    name: "Dave Bryson",
    avatar: "images/customers/dave.jpg",
    quote:
      "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
  },
  {
    name: "Ben Hadley",
    avatar: "images/customers/ben.jpg",
    quote:
      "The AI algorithm is crazy good — it picks the right meals for me every time. It's amazing not to worry about food anymore!",
  },
  {
    name: "Steve Miller",
    avatar: "images/customers/steve.jpg",
    quote:
      "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
  },
  {
    name: "Hannah Smith",
    avatar: "images/customers/hannah.jpg",
    quote:
      "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic, vegan, and plastic-free.",
  },
];

export const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  src: `images/gallery/gallery-${i + 1}.jpg`,
  alt: `Omnifood meal photo ${i + 1}`,
}));

export const pricingPlans = [
  {
    name: "Starter",
    price: 399,
    perMeal: 13,
    features: [
      { included: true, text: "1 meal per day" },
      { included: true, text: "Order from 11am to 9pm" },
      { included: true, text: "Delivery is free" },
      { included: false, text: "Get access to latest recipes" },
    ],
  },
  {
    name: "Complete",
    price: 649,
    perMeal: 11,
    highlight: true,
    features: [
      { included: true, text: "2 meals per day" },
      { included: true, text: "Order 24/7" },
      { included: true, text: "Delivery is free" },
      { included: true, text: "Get access to latest recipes" },
    ],
  },
];

export const features = [
  {
    icon: "bx-infinite",
    title: "Never cook again",
    body: "Our subscriptions cover 365 days a year — even major holidays, no extra fees.",
  },
  {
    icon: "bx-leaf",
    title: "Local & organic",
    body: "Our cooks only use local, fresh, and organic products to prepare your meals.",
  },
  {
    icon: "bx-recycle",
    title: "Zero waste",
    body: "All our partners only use reusable containers to package every single meal.",
  },
  {
    icon: "bx-pause-circle",
    title: "Pause anytime",
    body: "Going on vacation? Just pause your subscription, and we refund unused days.",
  },
];

export const footerSections = [
  {
    title: "Account",
    links: ["Create account", "Sign in", "iOS app", "Android app"],
  },
  {
    title: "Company",
    links: ["About Omnifood", "For business", "Cooking partners", "Careers"],
  },
  {
    title: "Resources",
    links: ["Recipe directory", "Help center", "Privacy & terms"],
  },
];
