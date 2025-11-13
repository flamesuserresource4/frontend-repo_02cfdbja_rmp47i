import { useMemo } from 'react'
import {
  ShieldCheck,
  Bell,
  Route as RouteIcon,
  MapPin,
  Smartphone,
  Users,
  Navigation,
  Clock,
  FileText,
  AlertCircle,
  Bus,
  UserCheck,
  Activity,
  Settings,
  BarChart3,
  Radio,
  Phone,
  MessageSquare,
  Star
} from 'lucide-react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
      <ShieldCheck className="h-3.5 w-3.5" />
      {children}
    </span>
  )
}

const featureIconClass = 'h-5 w-5 text-blue-600'
const cardClass =
  'rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow duration-300'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_80%_-10%,#cfe8ff_0,transparent_45%),radial-gradient(60rem_40rem_at_-10%_10%,#e9f2ff_0,transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Trusted school ride safety</Badge>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Safer school rides. Happier mornings.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            KiddyGo brings live tracking, instant alerts and simple route management for schools,
            parents and van drivers—so every school run feels calm, on-time and safe.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#demo" className="rounded-full bg-blue-600 px-6 py-3 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Book a Demo
            </a>
            <a href="#how" className="rounded-full border border-blue-200 bg-white px-6 py-3 text-blue-700 hover:bg-blue-50">
              How It Works
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 items-center justify-center gap-6 sm:mt-12">
            <Stat number="50k+" label="Daily rides monitored" />
            <Stat number="99.9%" label="Uptime & reliability" />
            <Stat number="200+" label="Schools & operators" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-semibold text-gray-900">{number}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  )
}

function Audience() {
  const pointsSchools = useMemo(
    () => [
      { icon: RouteIcon, text: 'Simple route planning and assignments' },
      { icon: Activity, text: 'Live fleet map with ETA insights' },
      { icon: FileText, text: 'Reports on distance, delays and speed' }
    ],
    []
  )
  const pointsParents = useMemo(
    () => [
      { icon: MapPin, text: 'Live location with accurate ETAs' },
      { icon: Bell, text: 'Pickup and drop alerts, instantly' },
      { icon: UserCheck, text: 'Attendance confirmation in a tap' }
    ],
    []
  )

  return (
    <section id="audience" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Built for schools and parents together</h2>
        <p className="mt-3 text-gray-600">Everyone sees what matters to them—without learning curves.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className={`${cardClass} p-6`}> 
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">For Schools</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {pointsSchools.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <p.icon className={featureIconClass} />
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a href="#pricing" className="text-blue-700 hover:underline">See school plans →</a>
          </div>
        </div>
        <div className={`${cardClass} p-6`}> 
          <div className="flex items-center gap-3">
            <Smartphone className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">For Parents</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {pointsParents.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <p.icon className={featureIconClass} />
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a href="#features-parents" className="text-blue-700 hover:underline">Explore parent features →</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      icon: Bus,
      title: 'Start the trip',
      desc: 'Drivers or schools start a trip with one tap. Routes are assigned automatically.'
    },
    {
      icon: Navigation,
      title: 'Track live',
      desc: 'Parents and admins see live location, ETA and stops in real time.'
    },
    {
      icon: Bell,
      title: 'Instant alerts',
      desc: 'Pickup, drop and delay alerts keep everyone informed without calls.'
    }
  ]
  return (
    <section id="how" className="bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mt-3 text-gray-600">Three simple steps from morning to drop-off.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className={`${cardClass} p-6`}> 
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className={`${cardClass} p-5`}> 
      <div className="flex items-center gap-3">
        <Icon className={featureIconClass} />
        <h4 className="font-semibold text-gray-900">{title}</h4>
      </div>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function ParentFeatures() {
  const features = [
    { icon: MapPin, title: 'Live location', desc: 'Watch the ride live with accurate ETAs.' },
    { icon: Bell, title: 'Pickup/Drop alerts', desc: 'Instant notifications when the van is near and on arrival.' },
    { icon: UserCheck, title: 'Attendance marking', desc: 'Confirm pickup and drop in one tap.' },
    { icon: ShieldCheck, title: 'Driver profile', desc: 'See driver photo, vehicle number and contact if needed.' },
    { icon: AlertCircle, title: 'Safety SOS', desc: 'One button to alert school admins in emergencies.' }
  ]
  return (
    <section id="features-parents" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Features for parents</h2>
        <p className="mt-3 text-gray-600">Everything you need to feel calm and in control.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  )
}

function SchoolFeatures() {
  const features = [
    { icon: Activity, title: 'Fleet map', desc: 'Live view of all vans with ETAs and status.' },
    { icon: RouteIcon, title: 'Smart route management', desc: 'Assign, reorder and optimize routes quickly.' },
    { icon: Clock, title: 'Trip history', desc: 'Full trail of stops, timings and delays.' },
    { icon: BarChart3, title: 'Reports', desc: 'Distance, delays and speed trends at a glance.' },
    { icon: Bell, title: 'Notifications log', desc: 'See every alert sent to parents and drivers.' },
    { icon: Settings, title: 'Driver & vehicle management', desc: 'Add drivers, vans and documents in minutes.' }
  ]
  return (
    <section id="features-schools" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Features for schools</h2>
          <p className="mt-3 text-gray-600">Operational clarity without spreadsheets or calls.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyKiddyGo() {
  const points = [
    { icon: Radio, text: 'Works with any school van or cab — no hardware needed' },
    { icon: Smartphone, text: "Built for India’s unorganized transport networks" },
    { icon: Users, text: 'Simple for drivers — one-tap start/stop, auto alerts' },
    { icon: MessageSquare, text: 'Reduces parent calls and complaints; builds trust' },
    { icon: ShieldCheck, text: 'Safety-first design with clear accountability' }
  ]
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why KiddyGo</h2>
          <p className="mt-3 text-gray-600">Practical, reliable and ready for real-world school transport.</p>
          <ul className="mt-6 space-y-3">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <p.icon className={featureIconClass} />
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-100 to-blue-50 blur-2xl" />
          <div className={`${cardClass} relative grid gap-4 p-4 sm:grid-cols-2`}>
            <DeviceMock title="Parent App" subtitle="Live ride view" tone="blue" />
            <DeviceMock title="Driver App" subtitle="One-tap trips" tone="slate" />
            <DashMock title="School Dashboard" subtitle="Fleet overview" />
          </div>
        </div>
      </div>
    </section>
  )
}

function DeviceMock({ title, subtitle, tone = 'blue' }) {
  const toneClass = tone === 'blue' ? 'from-blue-500 to-blue-600' : 'from-slate-500 to-slate-600'
  return (
    <div className="flex flex-col items-center gap-3 p-3">
      <div className="h-64 w-32 rounded-3xl bg-gradient-to-br ${toneClass} p-1 shadow-sm ring-1 ring-black/5">
        <div className="h-full w-full rounded-[1.4rem] bg-white/90 p-2">
          <div className="h-full rounded-xl bg-gradient-to-br from-gray-50 to-gray-100" />
        </div>
      </div>
      <div className="text-center">
        <div className="font-medium text-gray-900">{title}</div>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
    </div>
  )
}

function DashMock({ title, subtitle }) {
  return (
    <div className="sm:col-span-2">
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-3 w-24 rounded bg-gray-200" />
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-gray-300" />
            <span className="h-2 w-2 rounded-full bg-gray-300" />
            <span className="h-2 w-2 rounded-full bg-gray-300" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="h-24 rounded-lg bg-gradient-to-br from-blue-50 to-white" />
          <div className="h-24 rounded-lg bg-gradient-to-br from-blue-50 to-white" />
          <div className="h-24 rounded-lg bg-gradient-to-br from-blue-50 to-white" />
        </div>
      </div>
      <div className="mt-3 text-center">
        <div className="font-medium text-gray-900">{title}</div>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
    </div>
  )
}

function Showcase() {
  return (
    <section className="bg-gradient-to-b from-blue-50/40 to-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">See KiddyGo in action</h2>
          <p className="mt-3 text-gray-600">Parent app, driver app and school dashboard working together.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <DeviceMock title="Parent App" subtitle="Track & alerts" tone="blue" />
          <DeviceMock title="Driver App" subtitle="Start trips" tone="slate" />
          <DashMock title="School Dashboard" subtitle="Map & reports" />
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-2">
        <div className={`${cardClass} p-6`}> 
          <div className="flex items-center gap-3">
            <Star className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">From a parent</h3>
          </div>
          <p className="mt-3 text-gray-700 italic">
            “Mornings used to be frantic. Now I just check the app, walk down at the right time and get instant updates. KiddyGo made school runs peaceful.”
          </p>
          <div className="mt-3 text-sm text-gray-500">— Priya, Mumbai</div>
        </div>
        <div className={`${cardClass} p-6`}> 
          <div className="flex items-center gap-3">
            <Star className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">From a school admin</h3>
          </div>
          <p className="mt-3 text-gray-700 italic">
            “Our transport phone barely rings now. Live tracking and automatic alerts reduced parent complaints and gave our team full visibility.”
          </p>
          <div className="mt-3 text-sm text-gray-500">— Transport Head, Delhi</div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple pricing for schools</h2>
          <p className="mt-3 text-gray-600">Parent app is included with school transport — no extra charge.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <PriceCard tier="Starter" price="₹9,999/mo" points={[
            'Up to 10 vehicles',
            'Live tracking & alerts',
            'Basic reports'
          ]}/>
          <PriceCard featured tier="Growth" price="₹19,999/mo" points={[
            'Up to 30 vehicles',
            'Route management',
            'Reports & history',
            'Priority support'
          ]}/>
          <PriceCard tier="Scale" price="Custom" points={[
            'Unlimited vehicles',
            'Advanced analytics',
            'Dedicated success manager'
          ]}/>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">Drivers use a simple mobile app. No hardware installation required.</p>
      </div>
    </section>
  )
}

function PriceCard({ tier, price, points, featured }) {
  return (
    <div className={`${cardClass} p-6 ${featured ? 'border-blue-200 ring-2 ring-blue-200' : ''}`}> 
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">{tier}</h3>
        {featured && <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">Most popular</span>}
      </div>
      <div className="mt-4 text-3xl font-bold text-gray-900">{price}</div>
      <ul className="mt-4 space-y-2 text-gray-700">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            <span className="text-sm">{p}</span>
          </li>
        ))}
      </ul>
      <a href="#demo" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-white hover:bg-blue-700">Choose plan</a>
    </div>
  )
}

function FAQ() {
  const faqs = [
    {
      q: 'How accurate is live tracking?',
      a: 'We use GPS with smart smoothing to keep ETAs realistic even in traffic. Accuracy typically stays within 20–30 meters.'
    },
    {
      q: 'Does it need internet on the van?',
      a: 'Yes. Drivers use a lightweight mobile app that works on common Android phones with basic data packs.'
    },
    {
      q: 'Do van drivers find it hard?',
      a: 'No. It’s one large button to start/stop a trip. Everything else happens automatically.'
    },
    {
      q: 'Is any hardware required?',
      a: 'No hardware. No installation. You can start in days, not months.'
    },
    {
      q: 'How does KiddyGo keep children safe?',
      a: 'Live visibility, verified drivers, attendance checks and instant alerts help schools act fast and keep everyone informed.'
    }
  ]
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">FAQs</h2>
      <div className="mt-8 divide-y divide-gray-100 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-100">
        {faqs.map((f, i) => (
          <details key={i} className="group p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium text-gray-900">{f.q}</span>
              <span className="ml-4 rounded-full border border-gray-200 p-1 text-gray-400 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section id="demo" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50rem_30rem_at_50%_-20%,#dbeafe_0,transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Ready to make school rides safer?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">Let’s show you how KiddyGo fits your routes, vans and schedule in just a short demo.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="rounded-full bg-blue-600 px-6 py-3 text-white shadow-sm hover:bg-blue-700">Book a Demo</a>
          <a href="#" className="rounded-full border border-blue-200 bg-white px-6 py-3 text-blue-700 hover:bg-blue-50">Contact Team</a>
        </div>
      </div>
    </section>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold text-gray-900">KiddyGo</span>
        </div>
        <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
          <a href="#audience" className="hover:text-blue-700">Who we help</a>
          <a href="#how" className="hover:text-blue-700">How it works</a>
          <a href="#features-parents" className="hover:text-blue-700">Features</a>
          <a href="#pricing" className="hover:text-blue-700">Pricing</a>
        </nav>
        <a href="#demo" className="hidden rounded-full bg-blue-600 px-4 py-2 text-sm text-white shadow-sm hover:bg-blue-700 sm:inline-flex">Book a Demo</a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-900">KiddyGo</span>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} KiddyGo. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Audience />
        <HowItWorks />
        <ParentFeatures />
        <SchoolFeatures />
        <WhyKiddyGo />
        <Showcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
