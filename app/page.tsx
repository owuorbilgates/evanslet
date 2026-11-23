import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Users,
  HeartHandshake,
  Music,
  Palette,
  Shirt,
  CalendarDays,
  BookOpen,
  Network,
  Mic2,
  Camera,
  PenLine,
  Hammer,
  MonitorSmartphone,
  Briefcase,
  Scissors,
  HandHeart,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { RootsGraphic } from '@/components/RootsGraphic';

const divisions = [
  {
    icon: Sparkles,
    name: 'ROOTED Talent',
    tagline: 'Discovering and connecting talent across creative and professional disciplines.',
    body: 'A platform to showcase abilities, develop profiles, build networks and connect with opportunities.',
    href: '/discover-talent',
    cta: 'Discover Talent',
  },
  {
    icon: Palette,
    name: 'ROOTED Culture',
    tagline: 'Celebrating the richness of cultural identity and creative expression.',
    body: 'From fashion and music to art, dance, heritage and traditional craftsmanship.',
    href: '/what-we-do',
    cta: 'Explore Culture',
  },
  {
    icon: Shirt,
    name: 'ROOTED Lifestyle',
    tagline: 'Bringing creativity into everyday life.',
    body: 'Fashion, merchandise, accessories, creative products and designer collaborations.',
    href: '/what-we-do',
    cta: 'Explore Lifestyle',
  },
  {
    icon: CalendarDays,
    name: 'ROOTED Experiences',
    tagline: 'Bringing people together through meaningful experiences.',
    body: 'Exhibitions, festivals, showcases, workshops and creative gatherings.',
    href: '/live',
    cta: 'Explore Experiences',
  },
  {
    icon: BookOpen,
    name: 'ROOTED Stories',
    tagline: 'Every person has a story. Every talent has a journey.',
    body: 'Authentic stories, creative journeys and cultural perspectives that deserve to be seen and heard.',
    href: '/stories',
    cta: 'Read Our Stories',
  },
  {
    icon: Network,
    name: 'ROOTED Connect',
    tagline: 'Building relationships that create possibilities.',
    body: 'Connecting talent, businesses, brands, institutions and communities through collaboration.',
    href: '/partnerships',
    cta: 'Partner With Us',
  },
];

const disciplines = [
  { icon: Music, label: 'Musicians & Singers' },
  { icon: Mic2, label: 'Dancers & Performers' },
  { icon: Scissors, label: 'Fashion Designers & Stylists' },
  { icon: Palette, label: 'Artists & Illustrators' },
  { icon: Camera, label: 'Photographers & Filmmakers' },
  { icon: PenLine, label: 'Writers & Storytellers' },
  { icon: Hammer, label: 'Artisans & Craftspeople' },
  { icon: MonitorSmartphone, label: 'Digital Creators' },
  { icon: Briefcase, label: 'Entrepreneurs & Innovators' },
  { icon: HandHeart, label: 'Mentors & Professionals' },
];

export default function HomePage() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="grain relative flex min-h-[92vh] items-center overflow-hidden bg-espresso">
        <div className="absolute inset-0">
          <div className="absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[130px]" />
          <div className="absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-clay/25 blur-[110px]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-soft">
                Rooted in Africa. Open to the World.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream text-balance sm:text-6xl lg:text-7xl">
                Talent has no{' '}
                <span className="italic text-gold">postcode.</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 font-display text-2xl italic text-gold-soft/90">
                Greatness grows everywhere.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/65">
                Where you come from should never determine how far your talent
                can take you. We discover, celebrate and connect talent while
                creating opportunities for creativity, cultural expression and
                growth.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/discover-talent"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-espresso shadow-lg shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-xl"
                >
                  Discover Talent
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/discover-talent#submit"
                  className="inline-flex items-center justify-center rounded-full border border-cream/25 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream/90 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  Join the ROOTED Community
                </Link>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <p className="mt-10 text-xs font-medium uppercase tracking-[0.3em] text-cream/40">
                Culture • Creativity • Talent • Opportunity
              </p>
            </Reveal>
          </div>

          <div className="hidden justify-center lg:col-span-5 lg:flex">
            <Reveal delay={300}>
              <RootsGraphic className="w-full max-w-sm drop-shadow-[0_0_40px_rgba(212,169,78,0.15)]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ TAGLINE MARQUEE ============ */}
      <div className="overflow-hidden border-y border-gold/20 bg-gold py-4">
        <div className="animate-marquee flex w-max items-center gap-10">
          {Array.from({ length: 4 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-10">
              {['Talent Has No Postcode', 'Rooted in Africa', 'Open to the World', 'Where Every Talent Belongs'].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-10 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.25em] text-espresso"
                  >
                    {item}
                    <span className="h-1.5 w-1.5 rounded-full bg-espresso/50" />
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ============ WHO WE ARE ============ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Who We Are
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-cream text-balance sm:text-5xl">
                  We believe in the power of people, culture and creativity.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-cream/65">
                  <p>
                    ROOTED is an African-originated, globally minded platform
                    bringing together talent, culture, creativity and
                    opportunity. Exceptional talent exists in places and
                    communities that do not always receive the visibility,
                    recognition or opportunities they deserve — our purpose is
                    to change how talent is discovered, celebrated and
                    connected.
                  </p>
                  <p>
                    Through talent showcases, creative collaborations,
                    storytelling, lifestyle initiatives, events and
                    partnerships, we create spaces where people can express
                    themselves, share their abilities and access new
                    possibilities.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
                  >
                    Our Story
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <p className="font-display text-xl italic text-gold-soft">
                    Different roots. Shared possibilities.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {[
                    {
                      icon: Users,
                      title: 'Everyone deserves to be seen',
                      body: 'Talent exists in every community, across every culture — it deserves recognition.',
                    },
                    {
                      icon: HeartHandshake,
                      title: 'Valued and given room to grow',
                      body: 'We believe everyone deserves the opportunity to be valued and to grow.',
                    },
                    {
                      icon: Sparkles,
                      title: 'Something valuable to contribute',
                      body: 'Inspired by our roots, strengthened by our diversity, driven by belief in people.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                        <item.icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-cream">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-cream/55">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="grain relative overflow-hidden border-y border-gold/10 bg-bark py-24 sm:py-32">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-gold/8 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              What We Do
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-cream text-balance sm:text-5xl">
              Creating spaces where talent and opportunity meet.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-cream/60">
              Six interconnected areas of activity, one purpose.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division, i) => (
              <Reveal key={division.name} delay={i * 90}>
                <Link
                  href={division.href}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                    <division.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-cream">
                    {division.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gold-soft/90">
                    {division.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/55">
                    {division.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors group-hover:text-gold-soft">
                    {division.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PHILOSOPHY ============ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Philosophy
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-cream text-balance sm:text-5xl">
              Talent has no. Opportunity should have no boundaries.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-cream/65">
              <p>
                Talent is everywhere, but access to opportunities is not always
                equal. A person&apos;s potential should not be judged by their
                neighbourhood, family circumstances, educational background,
                social connections or geographical location.
              </p>
              <p>
                We do not define people by what they lack. We recognise what
                they have to offer — and create spaces where that value can be
                recognised, celebrated and connected to meaningful
                opportunities.
              </p>
            </div>
          </Reveal>
          <Reveal delay={250}>
            <p className="mx-auto mt-10 max-w-2xl border-l-2 border-gold pl-6 text-left font-display text-2xl italic leading-snug text-gold-soft sm:text-center sm:border-l-0 sm:pl-0">
              &ldquo;Your background is part of your story. It is not the
              limit of your possibilities.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ SPOTLIGHT ============ */}
      <section className="border-y border-gold/10 bg-bark py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  ROOTED Spotlight
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-cream text-balance sm:text-5xl">
                  Meet the people. Discover the talent. Hear the stories.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/65">
                  ROOTED Spotlight celebrates individuals whose talents,
                  creativity, ideas and contributions deserve recognition —
                  through photography, interviews, videos and personal
                  stories, from emerging creatives to established
                  professionals.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/stories"
                    className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
                  >
                    Meet the Talent
                  </Link>
                  <Link
                    href="/discover-talent#nominate"
                    className="inline-flex items-center justify-center rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream/90 transition-all duration-300 hover:border-gold hover:text-gold"
                  >
                    Nominate Someone
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {disciplines.slice(0, 6).map((d) => (
                  <div
                    key={d.label}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
                  >
                    <d.icon className="h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm font-medium text-cream/80">
                      {d.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ JOIN THE MOVEMENT ============ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grain relative overflow-hidden rounded-[2.5rem] border border-gold/25 bg-gradient-to-br from-bark via-espresso to-bark px-6 py-16 text-center sm:px-12 sm:py-20">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-clay/25 blur-[100px]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Join the ROOTED Movement
                </p>
                <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-cream text-balance sm:text-5xl">
                  There is room for everyone.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/65">
                  Creative, artist, designer, musician, entrepreneur,
                  performer, photographer, craftsperson — or someone with a
                  skill worth sharing. Established professional who wants to
                  mentor and open doors? Business looking to connect with
                  authentic talent? There is a place for you at ROOTED.
                </p>
                <p className="mt-8 font-display text-2xl italic text-gold-soft">
                  Your talent matters. Your story matters. You belong.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/discover-talent#submit"
                    className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-espresso shadow-lg shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
                  >
                    Submit Your Talent
                  </Link>
                  <Link
                    href="/partnerships#partner"
                    className="inline-flex items-center justify-center rounded-full border border-cream/25 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream/90 transition-all duration-300 hover:border-gold hover:text-gold"
                  >
                    Become a Partner
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CLOSING STATEMENT ============ */}
      <section className="grain relative overflow-hidden border-t border-gold/10 bg-espresso py-24 sm:py-32">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/8 blur-[130px]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <div className="mx-auto mb-8 w-40">
              <RootsGraphic className="mx-auto opacity-70" />
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-[0.08em] text-cream text-balance sm:text-5xl">
              ROOTED IN AFRICA.
              <span className="block text-gold">OPEN TO THE WORLD.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/65">
              We celebrate where we come from while embracing the
              possibilities of where we can go — diversity without boundaries,
              creativity without limitations and opportunities that recognise
              the value of people everywhere.
            </p>
            <p className="mt-10 font-display text-2xl italic text-gold-soft">
              ROOTED — Where Every Talent Belongs.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
