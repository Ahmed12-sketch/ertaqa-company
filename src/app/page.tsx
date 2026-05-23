"use client";


import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  HeadphonesIcon,
  TrendingUp,
  Code,
  Shield,
  Network,
  ArrowLeft,
  ChevronLeft,
  Globe,
  Zap,
} from "lucide-react";

// Fade Up Animation Variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Stagger Container
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden relative w-full">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-32 px-4 overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-normal"></div>
        <div className="absolute top-20 left-1/2 -translate-x-1/4 w-full max-w-md h-[300px] bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-normal"></div>

        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/60 bg-background/50 backdrop-blur-xl mb-8 shadow-sm transition-all hover:border-accent/50 hover:bg-accent/5 cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-sm font-semibold text-foreground/80">اكتشف الجيل الجديد من الخدمات التقنية</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-[4.5rem] font-black tracking-tight mb-6 leading-[1.3] md:leading-[1.15]"
          >
            نرتقي بأعمالكم نحو
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 px-2 inline-block">
              آفاق احترافية
            </span>
            جديدة
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            نقدم حلولاً استشارية وتقنية متكاملة مصممة خصيصاً لتلبية طموحات مؤسستكم، 
            مع التركيز على الجودة والابتكار في كل تفصيلة لبناء مستقبل رقمي مستدام.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold text-lg md:text-xl transition-all hover:bg-primary/95 shadow-2xl hover:shadow-primary/30 hover:-translate-y-1.5"
            >
              ابدأ مشروعك الآن
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-background border-2 border-border/80 text-foreground px-10 py-5 rounded-2xl font-bold text-lg md:text-xl transition-all hover:border-accent/60 hover:bg-accent/10 hover:-translate-y-1.5"
            >
              استكشف خدماتنا
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section (Social Proof) */}
      <section className="py-10 border-y border-border/50 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">نفتخر بثقة كبرى المؤسسات والشركات</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos - representing a professional vibe */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2 text-xl font-bold text-foreground">
                <Globe className="w-6 h-6" /> الشركة {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">معايير استثنائية</h2>
            <p className="text-lg text-muted-foreground">
              نلتزم بأعلى مقاييس الجودة العالمية في تقديم خدماتنا، لضمان تجربة متكاملة تتجاوز توقعات عملائنا وتدعم نمو أعمالهم.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "جودة موثوقة",
                desc: "نطبق أفضل الممارسات في إدارة المشاريع لضمان تسليم أعمال خالية من الأخطاء وذات كفاءة عالية.",
                icon: <ShieldCheck className="w-8 h-8" />,
              },
              {
                title: "تقنيات متقدمة",
                desc: "نستخدم أحدث لغات البرمجة وأطر العمل لتطوير أنظمة سريعة وقابلة للتوسع في المستقبل.",
                icon: <Zap className="w-8 h-8" />,
              },
              {
                title: "دعم مستمر",
                desc: "فريقنا متواجد على مدار الساعة لتقديم الدعم الفني وحل أي عقبات تقنية قد تواجهونها.",
                icon: <HeadphonesIcon className="w-8 h-8" />,
              },
            ].map((feat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="glass p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:border-accent/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className="py-24 md:py-32 bg-secondary/20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">حلولنا الشاملة</h2>
              <p className="text-lg text-muted-foreground">
                مجموعة متكاملة من الخدمات الرقمية المصممة لتعزيز كفاءة أعمالك وزيادة قدرتك التنافسية في السوق.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline hover:underline-offset-4 transition-all"
            >
              عرض كافة الخدمات
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Big Bento Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl cursor-pointer bg-primary"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Consulting"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-8 w-full z-10 text-white">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">الاستشارات الاستراتيجية</h3>
                <p className="text-white/80 max-w-md text-lg">
                  بناء خطط استراتيجية دقيقة تضمن تحقيق أهداف شركتك ونمو أرباحها بشكل مستدام وفعال.
                </p>
              </div>
            </motion.div>

            {/* Small Bento Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl flex flex-col justify-between"
            >
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">تطوير البرمجيات</h3>
                <p className="text-muted-foreground text-sm">
                  بناء أنظمة مخصصة وتطبيقات ويب حديثة بأسلوب برمجي نظيف وقابل للتوسع.
                </p>
              </div>
            </motion.div>

            {/* Small Bento Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-accent text-accent-foreground p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center mb-4 relative z-10">
                <Shield className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">الأمن السيبراني</h3>
                <p className="text-white/80 text-sm">
                  حماية متكاملة للبنية التحتية والبيانات الحساسة ضد أي هجمات خارجية.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-primary rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl border border-white/10">
          {/* Decorative shapes inside CTA */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent opacity-50"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent rounded-full blur-[100px] opacity-30"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 relative z-10">
            جاهز للانطلاق نحو القمة؟
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto relative z-10">
            لا تتردد في التواصل معنا. فريق الخبراء لدينا جاهز للاستماع إليك وتخطيط الخطوة القادمة بنجاح.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10 inline-block">
            <Link
              href="/contact"
              className="bg-background text-foreground px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-muted transition-colors inline-flex items-center gap-2"
            >
              تواصل مع الخبراء
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

