import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  MessageSquare,
  Star
} from 'lucide-react'

const featureIconClass = 'h-5 w-5 text-blue-600'
const cardClass =
  'rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-all duration-300'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
}

const stagger = { show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }

function Badge({ children }) {
  return (
    <motion.span
      variants={fadeUp}
      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
    >
      <ShieldCheck className="h-3.5 w-3.5" />
      {children}
    </motion.span>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_80%_-10%,#cfe8ff_0,transparent_45%),radial-gradient(60rem_40rem_at_-10%_10%,#e9f2ff_0,transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 lg:pt-32 lg:pb-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>Trusted school ride safety</Badge>
          <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Safer school rides. Happier mornings.
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            KiddyGo gives schools and parents live tracking, instant alerts, and simple route management—so every school run feels calm, on time and safe.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-3">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#demo"
              className="rounded-full bg-blue-600 px-6 py-3 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Book a Demo
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#how"
              className="rounded-full border border-blue-200 bg-white px-6 py-3 text-blue-700 hover:bg-blue-50"
            >
              How It Works
            </motion.a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 items-center justify-center gap-6 sm:mt-12">
            <Stat number="50k+" label="Daily rides monitored" />
            <Stat number="99.9%" label="Uptime & reliability" />
            <Stat number="200+" label="Schools & operators" />
          </motion.div>
        </motion.div>
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
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl">Built for schools and parents together</motion.h2>
        <motion.p variants={fadeUp} className="mt-3 text-gray-600">Everyone sees what matters to them—without learning curves.</motion.p>
      </motion.div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[{ title: 'For Schools', Icon: Users, points: pointsSchools }, { title: 'For Parents', Icon: Smartphone, points: pointsParents }].map((col, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className={`${cardClass} group p-6`}
          >
            <div className="flex items-center gap-3">
              <col.Icon className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">{col.title}</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {col.points.map((p, j) => (
                <li key={j} className="flex items-start gap-3 text-gray-700">
                  <p.icon className={featureIconClass} />
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              {i === 0 ? (
                <a href="#pricing" className="text-blue-700 transition-colors hover:text-blue-800 hover:underline">See school plans →</a>
              ) : (
                <a href="#features-parents" className="text-blue-700 transition-colors hover:text-blue-800 hover:underline">Explore parent features →</a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      icon: RouteIcon,
      title: 'Set up routes',
      desc: 'Upload stops and addresses, assign vehicles and drivers in minutes.'
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
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl">How it works</motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-gray-600">Three simple steps from morning to drop-off.</motion.p>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`${cardClass} p-6`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`${cardClass} p-5`}
    >
      <div className="flex items-center gap-3">
        <Icon className={featureIconClass} />
        <h4 className="font-semibold text-gray-900">{title}</h4>
      </div>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </motion.div>
  )
}

function ParentFeatures() {
  const features = [
    { icon: MapPin, title: 'Live tracking', desc: 'Watch the ride live with accurate ETAs.' },
    { icon: Bell, title: 'Pickup/Drop alerts', desc: 'Instant notifications when the van is near and on arrival.' },
    { icon: UserCheck, title: 'Attendance', desc: 'Confirm pickup and drop in one tap.' },
    { icon: MessageSquare, title: 'Notifications', desc: 'All trip updates in one place—no missed messages.' },
    { icon: AlertCircle, title: 'Child safety', desc: 'SOS and admin alerts for quick help when needed.' }
  ]
  return (
    <section id="features-parents" className="mx-auto max-w-7xl px-6 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mx-auto mb-8 max-w-3xl text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl">Features for parents</motion.h2>
        <motion.p variants={fadeUp} className="mt-3 text-gray-600">Everything you need to feel calm and in control.</motion.p>
      </motion.div>
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
    { icon: Activity, title: 'Fleet overview map', desc: 'Live view of all vehicles with ETAs and status.' },
    { icon: RouteIcon, title: 'Smart route management', desc: 'Upload addresses, assign routes and optimize quickly.' },
    { icon: Clock, title: 'Trip history', desc: 'Full trail of stops, timings and delays.' },
    { icon: BarChart3, title: 'Reports', desc: 'Distance and speed trends at a glance.' },
    { icon: Bell, title: 'Notifications log', desc: 'See every alert sent to parents and drivers.' },
    { icon: Settings, title: 'Vehicle & user management', desc: 'Add drivers, vans and documents in minutes.' }
  ]
  return (
    <section id="features-schools" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl">Features for schools</motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-gray-600">Operational clarity without spreadsheets or calls.</motion.p>
        </motion.div>
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
    { icon: Users, text: 'Simple enough for everyone — one‑tap trips, auto alerts' },
    { icon: MessageSquare, text: 'Reduces parent calls and complaints; increases trust' },
    { icon: ShieldCheck, text: 'Safety-first design with clear accountability' }
  ]
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl">Why KiddyGo</motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-gray-600">Practical, reliable and ready for real-world school transport.</motion.p>
          <ul className="mt-6 space-y-3">
            {points.map((p, i) => (
              <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-gray-700">
                <p.icon className={featureIconClass} />
                <span>{p.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-100 to-blue-50 blur-2xl" />
          <div className={`${cardClass} relative grid gap-4 p-4 sm:grid-cols-2`}>
            <DeviceMock title="Parent App" subtitle="Live ride view" tone="blue" />
            <DashMock title="School Dashboard" subtitle="Fleet overview" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function DeviceMock({ title, subtitle, tone = 'blue' }) {
  const toneClass = tone === 'blue' ? 'from-blue-500 to-blue-600' : 'from-slate-500 to-slate-600'
  return (
    <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center gap-3 p-3">
      <div className={`h-64 w-32 rounded-3xl bg-gradient-to-br ${toneClass} p-1 shadow-sm ring-1 ring-black/5`}>
        <div className="h-full w-full rounded-[1.4rem] bg-white/90 p-2">
          <div className="h-full rounded-xl bg-gradient-to-br from-gray-50 to-gray-100" />
        </div>
      </div>
      <div className="text-center">
        <div className="font-medium text-gray-900">{title}</div>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
    </motion.div>
  )
}

function DashMock({ title, subtitle }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="sm:col-span-1">
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
    </motion.div>
  )
}

function Showcase() {
  return (
    <section className="bg-gradient-to-b from-blue-50/40 to-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl">See KiddyGo in action</motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-gray-600">Parent app and school dashboard working together.</motion.p>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-2">
          <DeviceMock title="Parent App" subtitle="Track & alerts" tone="blue" />
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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${cardClass} p-6`}
        >
          <div className="flex items-center gap-3">
            <Star className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">From a parent</h3>
          </div>
          <p className="mt-3 text-gray-700 italic">
            “Mornings used to be frantic. Now I just check the app, walk down at the right time and get instant updates. KiddyGo made school runs peaceful.”
          </p>
          <div className="mt-3 text-sm text-gray-500">— Priya, Mumbai</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={`${cardClass} p-6`}
        >
          <div className="flex items-center gap-3">
            <Star className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">From a school admin</h3>
          </div>
          <p className="mt-3 text-gray-700 italic">
            “Our transport phone barely rings now. Live tracking and automatic alerts reduced parent complaints and gave our team full visibility.”
          </p>
          <div className="mt-3 text-sm text-gray-500">— Transport Head, Delhi</div>
        </motion.div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple pricing for schools</motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-gray-600">Parent app is included with school transport — no extra charge.</motion.p>
        </motion.div>
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
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`${cardClass} p-6 ${featured ? 'border-blue-200 ring-2 ring-blue-200' : ''}`}
    >
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
      <motion.a
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        href="#demo"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-white hover:bg-blue-700"
      >
        Choose plan
      </motion.a>
    </motion.div>
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
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center text-3xl font-bold text-gray-900 sm:text-4xl"
      >
        FAQs
      </motion.h2>
      <div className="mt-8 divide-y divide-gray-100 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-100">
        {faqs.map((f, i) => (
          <details key={i} className="group p-4 transition-all">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium text-gray-900">{f.q}</span>
              <span className="ml-4 rounded-full border border-gray-200 p-1 text-gray-400 transition-transform group-open:rotate-45">+</span>
            </summary>
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-3 text-gray-600"
            >
              {f.a}
            </motion.p>
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
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative mx-auto max-w-5xl px-6 py-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Ready to make school rides safer?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">Let’s show you how KiddyGo fits your routes, vans and schedule in just a short demo.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.a whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#" className="rounded-full bg-blue-600 px-6 py-3 text-white shadow-sm hover:bg-blue-700">Book a Demo</motion.a>
          <motion.a whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#" className="rounded-full border border-blue-200 bg-white px-6 py-3 text-blue-700 hover:bg-blue-50">Contact Team</motion.a>
        </div>
      </motion.div>
    </section>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ rotate: -6 }} className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <ShieldCheck className="h-5 w-5" />
          </motion.div>
          <span className="text-lg font-semibold text-gray-900">KiddyGo</span>
        </div>
        <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
          <a href="#audience" className="hover:text-blue-700">Who we help</a>
          <a href="#how" className="hover:text-blue-700">How it works</a>
          <a href="#features-parents" className="hover:text-blue-700">Features</a>
          <a href="#pricing" className="hover:text-blue-700">Pricing</a>
        </nav>
        <motion.a whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#demo" className="hidden rounded-full bg-blue-600 px-4 py-2 text-sm text-white shadow-sm hover:bg-blue-700 sm:inline-flex">Book a Demo</motion.a>
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
