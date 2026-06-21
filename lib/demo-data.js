import {
  BarChart3,
  CalendarCheck,
  Car,
  Code2,
  ClipboardPlus,
  FileQuestion,
  Headphones,
  MessageSquareText,
  PhoneCall,
  Settings,
  ShieldCheck,
  Sparkles,
  Store,
  Utensils,
  Wrench,
} from 'lucide-react'

export const industries = [
  {
    id: 'front-desk',
    name: 'Receptionist',
    icon: Headphones,
    accent: 'text-brand-300',
    description: 'Answers FAQs, qualifies callers, routes urgent requests, and books meetings.',
    automations: ['Lead capture', 'Calendar booking', 'Call transfer', 'After-call summary'],
    prompt:
      'You are a calm front desk agent. Greet callers, understand their need, collect contact details, and book the best next step.',
  },
  {
    id: 'auto-repair',
    name: 'Auto Repair',
    icon: Car,
    accent: 'text-amber-300',
    description: 'Collects vehicle symptoms, estimates service windows, and schedules bays.',
    automations: ['VIN notes', 'Repair triage', 'Status updates', 'Pickup reminders'],
    prompt:
      'You are an auto service advisor. Ask for vehicle details, symptoms, preferred time, and explain the next service step clearly.',
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    icon: Utensils,
    accent: 'text-rose-300',
    description: 'Handles table bookings, menu questions, order status, and private events.',
    automations: ['Reservations', 'Party size logic', 'Dietary notes', 'Waitlist SMS'],
    prompt:
      'You are a restaurant host. Help guests reserve a table, answer menu questions, and capture dietary or occasion notes.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: ClipboardPlus,
    accent: 'text-emerald-300',
    description: 'Intakes patient requests, manages appointment slots, and flags urgent symptoms.',
    automations: ['Patient intake', 'Provider routing', 'HIPAA-safe notes', 'Reminder calls'],
    prompt:
      'You are a healthcare scheduling assistant. Collect only necessary intake details, avoid diagnosis, and escalate urgent symptoms.',
  },
]

export const metrics = [
  { label: 'Calls handled', value: '2,418', change: '+18%' },
  { label: 'Appointments booked', value: '384', change: '+31%' },
  { label: 'Avg response time', value: '1.7s', change: '-42%' },
  { label: 'Human handoffs', value: '8.6%', change: '-12%' },
]

export const conversations = [
  {
    customer: 'Maya Patel',
    industry: 'Restaurant',
    intent: 'Book patio table for 6',
    outcome: 'Reserved 7:30 PM',
    time: '4 min ago',
  },
  {
    customer: 'Evan Brooks',
    industry: 'Auto Repair',
    intent: 'Brake noise inspection',
    outcome: 'Scheduled bay 2',
    time: '16 min ago',
  },
  {
    customer: 'Nora Stein',
    industry: 'Healthcare',
    intent: 'Reschedule follow-up',
    outcome: 'Moved to Monday',
    time: '31 min ago',
  },
]

export const serviceCatalog = [
  {
    name: 'Brake inspection',
    price: '$39.99',
    duration: '45 min',
    status: 'Active',
    description: 'Pads, rotors, calipers, and road-test diagnosis.',
  },
  {
    name: 'Full synthetic oil change',
    price: '$50',
    duration: '2 hr',
    status: 'Active',
    description: 'Oil, filter, fluid top-off, and courtesy inspection.',
  },
  {
    name: 'AC performance check',
    price: '$89',
    duration: '60 min',
    status: 'Draft',
    description: 'Vent temperature, refrigerant pressure, and leak check.',
  },
]

export const appointments = [
  {
    customer: 'Evan Brooks',
    vehicle: '2018 Honda Civic',
    service: 'Brake inspection',
    time: 'Today, 2:30 PM',
    status: 'Confirmed',
  },
  {
    customer: 'Lina Chen',
    vehicle: '2021 Toyota RAV4',
    service: 'Oil change',
    time: 'Today, 4:00 PM',
    status: 'Needs SMS',
  },
  {
    customer: 'Marco Ruiz',
    vehicle: '2017 Ford F-150',
    service: 'AC performance check',
    time: 'Tomorrow, 9:15 AM',
    status: 'Pending',
  },
]

export const faqs = [
  {
    question: 'What are your shop hours?',
    answer: 'We are open Monday through Friday from 8 AM to 6 PM and Saturday from 9 AM to 2 PM.',
  },
  {
    question: 'Do you offer same-day brake service?',
    answer: 'Same-day service is available when parts are in stock and a bay is open. The agent should check the schedule first.',
  },
  {
    question: 'Can customers wait at the shop?',
    answer: 'Yes. The lobby has Wi-Fi, coffee, and estimated wait-time updates from the service advisor.',
  },
]

export const workflowSteps = [
  {
    title: 'Choose a business playbook',
    description: 'Start from receptionist, repair shop, restaurant, or healthcare templates.',
    icon: Sparkles,
  },
  {
    title: 'Connect voice and knowledge',
    description: 'Add FAQs, service rules, calendars, routing logic, and brand voice.',
    icon: MessageSquareText,
  },
  {
    title: 'Automate the handoff',
    description: 'Create appointments, update Supabase records, and alert staff when needed.',
    icon: CalendarCheck,
  },
  {
    title: 'Monitor every call',
    description: 'Review transcripts, sentiment, revenue impact, and quality controls.',
    icon: ShieldCheck,
  },
]

export const pricingPlans = [
  {
    name: 'Launch',
    price: '$49',
    description: 'For one location proving out voice automation.',
    features: ['1 voice agent', '500 call minutes', '1 calendar workflow', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$149',
    description: 'For busy teams with several workflows.',
    features: ['5 voice agents', '3,000 call minutes', 'CRM and SMS actions', 'Priority support'],
    featured: true,
  },
  {
    name: 'Ops',
    price: '$399',
    description: 'For multi-location teams and agencies.',
    features: ['Unlimited templates', 'Audit logs', 'Custom LLM prompts', 'SLA support'],
  },
]

export const navItems = [
  { href: '#industries', label: 'Industries' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#pricing', label: 'Pricing' },
  { href: '/dashboard', label: 'Dashboard' },
]

export const dashboardNav = [
  {
    label: 'Main',
    items: [
      { href: '/dashboard', label: 'Overview', icon: Store },
      { href: '/dashboard', label: 'Analytics', icon: BarChart3 },
      { href: '/dashboard/generations', label: 'Conversations', icon: MessageSquareText },
      { href: '/dashboard/generations', label: 'Appointments', icon: CalendarCheck },
    ],
  },
  {
    label: 'Configure',
    items: [
      { href: '/dashboard/generate', label: 'AI Agents', icon: Headphones },
      { href: '/dashboard/voices', label: 'Services', icon: Wrench },
      { href: '/dashboard/help', label: 'FAQs', icon: FileQuestion },
      { href: '/dashboard/help', label: 'Widget', icon: Code2 },
    ],
  },
  {
    label: 'Account',
    items: [
      { href: '/dashboard/settings', label: 'Settings', icon: Settings },
    ],
  },
]
