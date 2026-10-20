import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Printer, 
  Wrench, 
  ShoppingBag, 
  MessageSquare,
  Clock,
  Sparkles,
  Zap,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Terminal,
  Cpu
} from 'lucide-react';

interface ContactDepartment {
  title: string;
  email: string;
  icon: React.ReactNode;
  badgeColor: string;
}

interface WhatsAppAction {
  label: string;
  message: string;
  badge: string;
}

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const whatsappNumber = "+263773732447";

  const whatsappActions: WhatsAppAction[] = [
    {
      label: 'General Tech Support',
      message: 'Hello VoLLink Team, I need assistance with your technology services.',
      badge: 'Fast Response',
    },
    {
      label: 'Printing Instant Quote',
      message: 'Hi! I would like to request an instant quote for printing services.',
      badge: 'Print Desk',
    },
    {
      label: 'Design & Branding Inquiry',
      message: 'Hello! I am looking for custom graphic design and digital branding.',
      badge: 'Design Lab',
    },
  ];

  const departments: ContactDepartment[] = [
    {
      title: 'Sales & General',
      email: 'sales@vollink.co.zw',
      icon: <ShoppingBag className="w-5 h-5 text-blue-600" />,
      badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    },
    {
      title: 'Printing Services',
      email: 'printing@vollink.co.zw',
      icon: <Printer className="w-5 h-5 text-red-600" />,
      badgeColor: 'bg-red-100 text-red-700 border-red-200',
    },
    {
      title: 'Repairs & Tech Support',
      email: 'repairs@vollink.co.zw',
      icon: <Wrench className="w-5 h-5 text-cyan-600" />,
      badgeColor: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    },
    {
      title: 'Alternative Contact',
      email: 'vollinksales@gmail.com',
      icon: <Mail className="w-5 h-5 text-slate-600" />,
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 overflow-hidden font-sans pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      
      {/* ================= DYNAMIC TECH BACKGROUND ANIMATIONS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200/50 via-rose-100/30 to-slate-50 bg-[length:200%_200%]"
        />

        {/* Dynamic Moving Tech Mesh Grid */}
        <motion.div 
          animate={{
            backgroundPosition: ['0px 0px', '36px 36px'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-[0.06]" 
          style={{
            backgroundImage: `radial-gradient(#2563eb 1.5px, transparent 1.5px), radial-gradient(#ef4444 1.5px, transparent 1.5px)`,
            backgroundSize: '36px 36px',
            backgroundPosition: '0 0, 18px 18px',
          }}
        />

        {/* Floating Glowing Color Orbs */}
        <motion.div
          animate={{
            x: [0, 90, -60, 0],
            y: [0, -70, 50, 0],
            scale: [1, 1.25, 0.85, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-cyan-400/35 via-blue-400/30 to-indigo-300/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -110, 80, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-32 w-[34rem] h-[34rem] rounded-full bg-gradient-to-br from-rose-400/30 via-red-400/25 to-amber-200/20 blur-3xl"
        />

        {/* Tech Light Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
            className={`absolute rounded-full blur-[1px] pointer-events-none ${
              i % 3 === 0 
                ? 'w-3 h-3 bg-cyan-400/60 shadow-[0_0_12px_#06b6d4]' 
                : i % 3 === 1 
                ? 'w-4 h-4 bg-red-400/50 shadow-[0_0_14px_#ef4444]' 
                : 'w-2.5 h-2.5 bg-blue-500/60 shadow-[0_0_10px_#3b82f6]'
            }`}
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= HEADER SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
            <span>COMMUNICATIONS TERMINAL // VOLLINK</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Connect With Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-blue-600 to-cyan-500">
              Tech & Creative Desk
            </span>
          </h1>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed font-sans">
            Reach out directly via our WhatsApp portal, departmental email channels, or drop us a message below.
          </p>
        </motion.div>

        {/* ================= TOP FEATURE: WHATSAPP DIRECT CONNECT PLATFORM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12 bg-slate-950 rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl relative overflow-hidden text-white group"
        >
          {/* Cyber HUD Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400 rounded-br-xl pointer-events-none" />

          {/* Background Tech Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[15rem] bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            {/* WhatsApp Header & Info */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Live WhatsApp Dispatch</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3 tracking-tight">
                <MessageCircle className="w-8 h-8 text-emerald-400" />
                WhatsApp Us Directly
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed">
                Connect instantly with our support desk on WhatsApp for immediate technical queries, quote requests, or job status updates.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Encrypted Channel
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">{whatsappNumber}</span>
              </div>
            </div>

            {/* WhatsApp Quick Action Triggers */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {whatsappActions.map((action) => {
                const encodedMsg = encodeURIComponent(action.message);
                const waUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMsg}`;

                return (
                  <motion.a
                    key={action.label}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex flex-col justify-between p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all group/item"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {action.badge}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-emerald-400 transition-colors" />
                      </div>
                      <div className="text-xs font-bold text-slate-200 group-hover/item:text-white transition-colors">
                        {action.label}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-emerald-400 group-hover/item:translate-x-1 transition-transform">
                      <span>Launch Chat</span>
                      <span>→</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Physical Address & Department Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary HQ Card */}
            <motion.div 
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/85 backdrop-blur-xl border border-slate-200 p-6 rounded-3xl shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:border-blue-400 transition-all"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-blue-500/15 via-cyan-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
              
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Headquarters Address
              </h3>

              <div className="space-y-2 text-slate-600 text-sm leading-snug">
                <p className="font-semibold text-slate-800">
                  1st Floor, Suite 3, Security Trust House
                </p>
                <p className="text-slate-600">
                  73 Kwame Nkrumah Avenue
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-600 uppercase block">Direct Line / WhatsApp</span>
                    <a href="tel:+263773732447" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      +263 773 732 447
                    </a>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50/90 px-2.5 py-1 rounded-full border border-emerald-200">
                  <Clock className="w-3 h-3" />
                  <span>Mon-Fri 8am-5pm</span>
                </div>
              </div>
            </motion.div>

            {/* Department Emails Section */}
            <div className="bg-white/85 backdrop-blur-xl border border-slate-200 p-6 rounded-3xl shadow-xl shadow-slate-200/50">
              <h3 className="text-xs font-mono text-slate-600 uppercase tracking-wider mb-4 font-semibold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-500" />
                Departmental Channels
              </h3>

              <div className="space-y-3">
                {departments.map((dept) => (
                  <motion.a
                    key={dept.email}
                    href={`mailto:${dept.email}`}
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/60 hover:border-slate-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-sm group-hover:scale-110 transition-transform">
                        {dept.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-800">{dept.title}</div>
                        <div className="text-xs font-mono text-slate-600 group-hover:text-blue-600 transition-colors">
                          {dept.email}
                        </div>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${dept.badgeColor}`}>
                      Direct
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Transmission Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-2xl shadow-slate-300/60 relative">
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    Transmit a Message
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Fill out the form below and our engineering & design team will get back to you within 24 hours.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono border border-slate-200">
                  <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                  <span>v2.4 PORTAL</span>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-emerald-900">Message Transmitted!</h3>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto">
                    Thank you for contacting VoLLink. A member of our team will review your inquiry immediately.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">
                      Service Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                    >
                      <option value="General Inquiry">General Tech Inquiry</option>
                      <option value="Printing Services">Commercial & 3D Printing</option>
                      <option value="Graphics & Design">Graphics Design & Branding</option>
                      <option value="Hardware Repairs">Hardware Repairs & Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project requirements or printing specs..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-mono text-sm font-bold uppercase tracking-wider shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                    <Zap className="w-3.5 h-3.5 text-amber-300 fill-current ml-1" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;