import businessInsider from '../assets/logos/business-insider.png'
import forbs from '../assets/logos/forbes.png'
import techcrunch from '../assets/logos/techcrunch.png'
import theNewYorkTimes from '../assets/logos/the-new-york-times.png'
import usaToday from '../assets/logos/usa-today.png'
import screen1 from '../assets/app/app-screen-1.png'
import screen2 from '../assets/app/app-screen-2.png'
import screen3 from '../assets/app/app-screen-3.png'
import customer1 from '../assets/customers/ben.jpg'
import customer2 from '../assets/customers/dave.jpg'
import customer3 from '../assets/customers/hannah.jpg'
import customer4 from '../assets/customers/steve.jpg'
import meal1 from '../assets/gallery/gallery-1.jpg'
import meal2 from '../assets/gallery/gallery-2.jpg'
import meal3 from '../assets/gallery/gallery-3.jpg'
import meal4 from '../assets/gallery/gallery-4.jpg'
import meal5 from '../assets/gallery/gallery-5.jpg'
import meal6 from '../assets/gallery/gallery-6.jpg'
import meal7 from '../assets/gallery/gallery-7.jpg'
import meal8 from '../assets/gallery/gallery-8.jpg'
import meal9 from '../assets/gallery/gallery-9.jpg'
import meal10 from '../assets/gallery/gallery-10.jpg'
import meal11 from '../assets/gallery/gallery-11.jpg'
import meal12 from '../assets/gallery/gallery-12.jpg'
import {
  PauseIcon,
  CakeIcon,
  GlobeAltIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import customerDelivered1 from '../assets/customers/customer-1.jpg'
import customerDelivered2 from '../assets/customers/customer-2.jpg'
import customerDelivered3 from '../assets/customers/customer-3.jpg'
import customerDelivered4 from '../assets/customers/customer-4.jpg'
import customerDelivered5 from '../assets/customers/customer-5.jpg'
import customerDelivered6 from '../assets/customers/customer-6.jpg'
import foodMeal1 from '../assets/meals/meal-1.jpg'
import foodMeal2 from '../assets/meals/meal-2.jpg'

export const navLinks = [
  {
    id: 'how',
    title: 'How it works',
    className: 'nav-link',
  },
  {
    id: 'meals',
    title: 'Meals',
    className: 'nav-link',
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
    className: 'nav-link',
  },
  {
    id: 'pricing',
    title: 'Pricing',
    className: 'nav-link',
  },
  {
    id: 'cta',
    title: 'Try for free',
    className: 'cta-button',
  },
]

export const featured = [
  {
    logo: techcrunch,
    alt: 'Techcrunch logo',
  },
  {
    logo: businessInsider,
    alt: 'Business Insider logo',
  },
  {
    logo: theNewYorkTimes,
    alt: 'The New York Times logo',
  },
  {
    logo: forbs,
    alt: 'Forbs logo',
  },
  {
    logo: usaToday,
    alt: 'USA Today logo',
  },
]

export const howItWorks = [
  {
    id: '1',
    step: '01',
    title: 'Tell us what you like (and what not)',
    content:
      'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
    imgSrc: screen1,
    imgAlt: 'iPhone app preferences selection screen',
  },
  {
    id: '2',
    step: '02',
    title: 'Approve your weekly meal plan',
    content:
      'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
    imgSrc: screen2,
    imgAlt: 'iPhone app meal approving plan screen',
  },
  {
    id: '3',
    step: '03',
    title: 'Receive meals at convenient time',
    content:
      'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
    imgSrc: screen3,
    imgAlt: 'iPhone app delivery screen',
  },
]

export const feedback = [
  {
    id: 'feedback-1',
    img: customer1,
    content:
      'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    name: 'Dave Bryson',
  },
  {
    id: 'feedback-2',
    img: customer2,
    content:
      "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    name: 'Ben Hadley',
  },
  {
    id: 'feedback-3',
    img: customer3,
    content:
      'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',
    name: 'Hannah Smith',
  },
  {
    id: 'feedback-4',
    img: customer4,
    content:
      "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    name: 'Steve Miller',
  },
]

export const testimonialImages = [
  {
    id: 'meal 1',
    img: meal1,
  },
  {
    id: 'meal 2',
    img: meal2,
  },
  {
    id: 'meal 3',
    img: meal3,
  },
  {
    id: 'meal 4',
    img: meal4,
  },
  {
    id: 'meal 5',
    img: meal5,
  },
  {
    id: 'meal 6',
    img: meal6,
  },
  {
    id: 'meal 7',
    img: meal7,
  },
  {
    id: 'meal 8',
    img: meal8,
  },
  {
    id: 'meal 9',
    img: meal9,
  },
  {
    id: 'meal 10',
    img: meal10,
  },
  {
    id: 'meal 11',
    img: meal11,
  },
  {
    id: 'meal 12',
    img: meal12,
  },
]

export const pricingCard = [
  {
    id: '1',
    name: 'starter',
    price: 399,
    text: "per month. That's just $13 per meal!",
    features: [
      {
        id: 1,
        title: '1 meal per day',
      },
      {
        id: 2,
        title: 'Order from 11am to 9pm',
      },
      {
        id: 3,
        title: 'Delivery is free',
      },
      {
        id: 4,
        title: '',
      },
    ],
  },
  {
    id: '2',
    name: 'complete',
    price: 649,
    text: "per month. That's just $11 per meal!",
    features: [
      {
        id: 1,
        title: '2 meals per day',
      },
      {
        id: 2,
        title: 'Order 24/7',
      },
      {
        id: 3,
        title: 'Delivery is free',
      },
      {
        id: 4,
        title: 'Get access to latest recipes',
      },
    ],
  },
]

export const pricingFeature = [
  {
    id: '1',
    title: 'Never cook again!',
    content:
      'Our subscriptions cover 365 days per year, even including major holidays.',
    icon: <CakeIcon />,
  },
  {
    id: '2',
    title: 'Local and organic',
    content:
      'Our cooks only use local, fresh, and organic products to prepare your meals.',
    icon: <GlobeAltIcon />,
  },
  {
    id: '3',
    title: 'No waste',
    content:
      'All our partners only use reusable containers to package all your meals.',
    icon: <TrashIcon />,
  },
  {
    id: '4',
    title: 'Pause anytime',
    content:
      'Going on vacation? Just pause your subscription, and we refund unused days.',
    icon: <PauseIcon />,
  },
]

export const footerLinks = [
  {
    title: 'Contact us',
    links: [
      '623 Harrison St., 2nd Floor, San Francisco, CA 94107',
      '+415-201-6370',
      'hello@omnifood.com',
    ],
  },
  {
    title: 'Account',
    links: ['Create account', 'Sign in', 'iOS app', 'Android app'],
  },
  {
    title: 'Company',
    links: ['About Omnifood', 'For Business', 'Cooking partners', 'Careers'],
  },
  {
    title: 'Resources',
    links: ['Recipe directory', 'Help center', 'Privacy & terms'],
  },
]

export const socialMedia = [
  {
    id: 'instagram',
    icon: <FaInstagram />,
  },
  {
    id: 'facebook',
    icon: <FaFacebook />,
  },
  {
    id: 'twitter',
    icon: <FaTwitter />,
  },
]

export const deliveredImages = [
  {
    id: 'customer-1',
    customerImage: customerDelivered1,
  },
  {
    id: 'customer-2',
    customerImage: customerDelivered2,
  },
  {
    id: 'customer-3',
    customerImage: customerDelivered3,
  },
  {
    id: 'customer-4',
    customerImage: customerDelivered4,
  },
  {
    id: 'customer-5',
    customerImage: customerDelivered5,
  },
  {
    id: 'customer-6',
    customerImage: customerDelivered6,
  },
]

export const dietList = [
  {
    title: 'Vegetarian',
  },
  {
    title: 'Vegan',
  },
  {
    title: 'Pescatarian',
  },
  {
    title: 'Gluten-free',
  },
  {
    title: 'Lactose-free',
  },
  {
    title: 'Keto',
  },
  {
    title: 'Paleo',
  },
  {
    title: 'Low FODMAP',
  },
  {
    title: 'Kid-friendly',
  },
]

export const foodCard = [
  {
    id: '1',
    title: 'Japanese Gyozas',
    categories: ['vegetarian'],
    img: foodMeal1,
    calories: 650,
    nutriScore: 74,
    rating: 4.9,
    voted: 537,
  },
  {
    id: '2',
    title: 'Avocado Salad',
    categories: ['vegan', 'paleo'],
    img: foodMeal2,
    calories: 400,
    nutriScore: 92,
    rating: 4.8,
    voted: 441,
  },
]
