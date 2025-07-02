'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const sectionRefs = {
    hero: useRef(null),
    domains: useRef(null),
    features: useRef(null),
    timeline: useRef(null),
    sponsors: useRef(null),
  };

  const sponsors = [
    { name: "Devfolio", logo: "data:image/png;base64,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", tier: "Visionary" },
    { name: "ETHIndia", logo: "data:image/png;base64,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", tier: "Visionary" }
  ];

  const domains = [
    { title: "Artificial Intelligence", icon: "🧠", desc: "Build intelligent systems that can learn and adapt" },
    { title: "Machine Learning", icon: "⚙️", desc: "Create predictive models and smart algorithms" },
    { title: "Blockchain", icon: "🔗", desc: "Develop decentralized applications and smart contracts" },
    { title: "Open Innovation", icon: "💡", desc: "Pioneer breakthrough solutions to global challenges" },
    { title: "EdTech", icon: "🎓", desc: "Transform education through technology" },
    { title: "FinTech", icon: "📈", desc: "Revolutionize financial services and payments" },
    { title: "Healthcare", icon: "🩺", desc: "Improve healthcare accessibility and outcomes" },
    { title: "Your Domain", icon: "➕", desc: "Bring your own innovative ideas to life" },
  ];

  const timeline = [
    { phase: "Registration Opens", date: "June 1, 2025", status: "completed" },
    { phase: "Team Formation", date: "September 1–15, 2025", status: "active" },
    { phase: "Problem Statements Release", date: "October 1, 2025", status: "upcoming" },
    { phase: "Hacking Phase", date: "October 18, 8:00 AM", status: "upcoming" },
    { phase: "Mentoring Sessions", date: "Throughout the event", status: "upcoming" },
    { phase: "Judging", date: "October 19, 9:00 AM", status: "upcoming" },
    { phase: "Closing Ceremony & Prizes", date: "October 19, 2:00 PM", status: "upcoming" },
  ];

  const features = [
    { title: "₹50L+ Prize Pool", desc: "Massive rewards for innovation", icon: "🏆" },
    { title: "Amazing Swags", desc: "Exclusive merchandise and tech gear", icon: "🎁" },
    { title: "Top Mentors", desc: "Learn from industry leaders", icon: "👨‍🏫" },
    { title: "Global Network", desc: "Connect with worldwide talent", icon: "🌍" },
    { title: "24/7 Support", desc: "Round-the-clock assistance", icon: "🚀" },
    { title: "Creative Freedom", desc: "Infinite possibilities to innovate", icon: "🎨" },
  ];

  // Client-side rendering check
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Countdown Timer Logic
  useEffect(() => {
    const countDownDate = new Date("Oct 18, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hoursLeft = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const minutesLeft = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secondsLeft = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

      if (distance > 0) {
        setDays(daysLeft);
        setHours(hoursLeft);
        setMinutes(minutesLeft);
        setSeconds(secondsLeft);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-poppins">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
          {isClient && (
            <div className="particles-bg" suppressHydrationWarning>
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 20}s`,
                    animationDuration: `${10 + Math.random() * 20}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-purple-500/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold font-orbitron bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                HACKFINITY
              </div>
              
              <div className="hidden md:flex space-x-8">
                {['Home', 'Domains', 'Features', 'Timeline', 'Sponsors'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-purple-400 transition-colors font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section ref={sectionRefs.hero} className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  HACKFINITY
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl mb-4 font-orbitron font-light">
                Infinite Fun. Infinite Creativity.
              </p>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                From Caffeine to Code – Experience the Best
              </p>

              <div className="mb-8">
                <p className="text-lg mb-2">World's Biggest Agentic AI Hackathon</p>
                <p className="text-3xl font-bold text-purple-400 font-orbitron">October 18, 2025</p>
              </div>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12" suppressHydrationWarning>
                {isClient ? [
                  { label: 'Days', value: days },
                  { label: 'Hours', value: hours },
                  { label: 'Minutes', value: minutes },
                  { label: 'Seconds', value: seconds }
                ].map((item, index) => (
                  <div key={index} className="bg-purple-900/30 backdrop-blur-md rounded-lg p-4 border border-purple-500/30">
                    <div className="text-2xl md:text-3xl font-bold font-orbitron text-purple-400">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                  </div>
                )) : 
                ['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
                  <div key={index} className="bg-purple-900/30 backdrop-blur-md rounded-lg p-4 border border-purple-500/30">
                    <div className="text-2xl md:text-3xl font-bold font-orbitron text-purple-400">
                      --
                    </div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105">
                  Register Now
                </button>
                <button className="border border-purple-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-500/10 transition-all">
                  Become a Sponsor
                </button>
              </div>

              {/* Current Sponsors */}
              <div className="mt-16">
                <p className="text-gray-400 mb-6">Proudly Sponsored By</p>
                <div className="flex justify-center items-center gap-8">
                  {sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-md rounded-lg p-4 hover:bg-white/20 transition-all transform hover:scale-105"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-12 w-24 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Domains Section */}
        <section ref={sectionRefs.domains} className="py-20 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Innovation Domains
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose your battlefield and create revolutionary solutions that will shape the future
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {domains.map((domain, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {domain.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-orbitron text-purple-300">
                    {domain.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {domain.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={sectionRefs.features} className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Why Hackfinity?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the ultimate hackathon with unprecedented opportunities and resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <div className="text-5xl mb-6 text-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center font-orbitron text-cyan-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-center">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={sectionRefs.timeline} className="py-20 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Event Timeline
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Your journey to innovation starts here
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full max-w-md bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 transform hover:scale-105 ${
                    event.status === 'completed' ? 'border-green-500/50 bg-green-900/10' :
                    event.status === 'active' ? 'border-yellow-500/50 bg-yellow-900/10' :
                    'border-blue-500/30'
                  }`}>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                      event.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      event.status === 'active' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {event.status.toUpperCase()}
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-orbitron text-blue-300">
                      {event.phase}
                    </h3>
                    <p className="text-gray-400">
                      {event.date}
                    </p>
                  </div>
                  
                  {/* Timeline connector */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black z-10" />
                  {index < timeline.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-purple-500 to-transparent top-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section ref={sectionRefs.sponsors} className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Become a Sponsor
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join us in empowering the next generation of innovators and gain unprecedented exposure to top talent
              </p>
            </div>

            {/* Sponsor Benefits */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-12 font-orbitron text-purple-300">Why Sponsor Hackfinity?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Global Reach", desc: "5000+ participants worldwide", icon: "🌍" },
                  { title: "Top Talent", desc: "Connect with skilled developers", icon: "⭐" },
                  { title: "Brand Exposure", desc: "Massive social media coverage", icon: "📢" },
                  { title: "Innovation", desc: "First look at cutting-edge solutions", icon: "🚀" }
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-md rounded-2xl p-6 border border-pink-500/30 text-center hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h4 className="text-xl font-bold mb-2 font-orbitron text-pink-300">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsorship Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  tier: "Visionary",
                  price: "$50,000+",
                  color: "purple",
                  features: [
                    "Keynote speaking slot",
                    "Exclusive recruiting lounge",
                    "Prime branding placement",
                    "Custom challenge sponsorship",
                    "Judging panel participation"
                  ]
                },
                {
                  tier: "Innovator",
                  price: "$25,000",
                  color: "blue",
                  features: [
                    "Dedicated challenge sponsorship",
                    "Recruiting booth access",
                    "Featured in all communications",
                    "Mentor participation",
                    "Resume database access"
                  ]
                },
                {
                  tier: "Supporter",
                  price: "$10,000",
                  color: "pink",
                  features: [
                    "Logo placement on all materials",
                    "Social media features",
                    "Resume database access",
                    "Event day presence",
                    "Networking opportunities"
                  ]
                }
              ].map((tier, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-${tier.color}-900/20 to-black/20 backdrop-blur-md rounded-2xl p-8 border border-${tier.color}-500/30 hover:border-${tier.color}-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-${tier.color}-500/20`}
                >
                  <h4 className={`text-2xl font-bold mb-4 text-${tier.color}-400 font-orbitron`}>
                    {tier.tier}
                  </h4>
                  <p className="text-4xl font-bold mb-6 font-orbitron">{tier.price}</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className={`h-5 w-5 text-${tier.color}-400 mt-1 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-8 bg-gradient-to-r from-${tier.color}-600 to-${tier.color}-700 px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-${tier.color}-500/30 transition-all`}>
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <p className="text-xl mb-8 text-gray-300">
                Ready to make an impact? Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105">
                  Become a Sponsor
                </button>
                <button className="border border-purple-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-500/10 transition-all">
                  Download Sponsorship Kit
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-black/50 border-t border-purple-500/20">
          <div className="container mx-auto px-6 text-center">
            <div className="text-3xl font-bold font-orbitron mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              HACKFINITY
            </div>
            <p className="text-gray-400 mb-6">
              Where infinite creativity meets limitless possibilities
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              {['Twitter', 'LinkedIn', 'Discord', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hackfinity. All rights reserved. Made with ❤️ for builders, creators, and hackers.
            </p>
          </div>
        </footer>

        {/* Custom Styles */}
        <style jsx>{`
          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-orbitron { font-family: 'Orbitron', monospace; }
          
          .particles-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          
          .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, #8b5cf6, transparent);
            border-radius: 50%;
            animation: float infinite linear;
          }
          
          @keyframes float {
            0% {
              transform: translateY(100vh) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-100px) rotate(360deg);
              opacity: 0;
            }
          }
          
          .bg-gradient-to-br {
            background-attachment: fixed;
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
            50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.6); }
          }
          
          .hover\\:shadow-xl:hover {
            animation: glow 2s infinite;
          }
        `}</style>
      </div>
  );
}
