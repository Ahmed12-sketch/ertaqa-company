"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, ShieldCheck, Lightbulb, BadgeCheck } from "lucide-react";
import Link from "next/link";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="px-4 md:px-16 max-w-[1280px] mx-auto relative z-10 text-center md:text-right"
        >
          <span className="text-accent font-medium uppercase tracking-wider mb-2 block">
            تعرف علينا
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            شريكك في رحلة الابتكار والنمو
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-primary-foreground/80 md:ml-auto">
            نحن نؤمن بأن النجاح يبدأ من الرؤية الواضحة والعمل الجاد والنزاهة
            الثابتة. في ارتقاء، نجمع بين الخبرة العميقة والحلول التقنية المبتكرة
            لنصنع الفرق.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background transition-colors duration-300">
        <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="aspect-video bg-card rounded-3xl overflow-hidden shadow-2xl border-4 border-border/50">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Team Story"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-1 md:order-2 space-y-8 text-right"
            >
              <div>
                <span className="text-accent font-bold tracking-widest uppercase">
                  قصتنا
                </span>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
                  نحو أفق جديد من التميز
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed text-lg">
                  بدأت ارتقاء كفكرة طموحة لسد الفجوة الكبيرة بين أحدث التقنيات
                  الرقمية والاحتياجات الفعلية للسوق المحلي. واليوم، نفخر بكوننا
                  أحد الرواد في تقديم الخدمات الاستشارية والحلول البرمجية.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm glass-card">
                  <Eye className="text-accent mb-3" size={32} />
                  <h3 className="text-xl font-bold text-foreground mb-2">رؤيتنا</h3>
                  <p className="text-muted-foreground text-sm">
                    أن نكون الخيار الأول والملهم للشركات الباحثة عن التحول الرقمي والتميز.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm glass-card">
                  <Rocket className="text-accent mb-3" size={32} />
                  <h3 className="text-xl font-bold text-foreground mb-2">رسالتنا</h3>
                  <p className="text-muted-foreground text-sm">
                    تقديم قيمة استثنائية من خلال دمج الخبرة البشرية التراكمية مع التقنية.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values (Bento Grid) */}
      <section className="py-24 bg-muted/30">
        <div className="px-4 md:px-16 max-w-[1280px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              قيمنا التي تحركنا
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              نلتزم بمجموعة من المبادئ والركائز الراسخة التي تضمن جودة خدماتنا.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "النزاهة",
                desc: "الصدق والشفافية هما أساس تعاملاتنا في كل مشروع.",
                icon: <ShieldCheck size={32} />,
              },
              {
                title: "الابتكار",
                desc: "نبحث دائماً عن طرق جديدة ومبدعة لحل التحديات المعقدة.",
                icon: <Lightbulb size={32} />,
              },
              {
                title: "الجودة",
                desc: "التميز ليس خياراً، بل هو معيارنا الثابت والدائم.",
                icon: <BadgeCheck size={32} />,
              },
            ].map((val, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-card p-8 rounded-3xl border border-border shadow-sm group glass-card"
              >
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300 mx-auto md:mx-0 md:mr-auto">
                  <div className="text-foreground group-hover:text-accent-foreground transition-colors duration-300">
                    {val.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center md:text-right">
                  {val.title}
                </h3>
                <p className="text-muted-foreground text-center md:text-right">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-20">
            مسيرتنا وإنجازاتنا
          </h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-border/50 hidden md:block"></div>

            <div className="space-y-16">
              {[
                { year: "٢٠٢٤", title: "التوسع الإقليمي", desc: "افتتاح مكاتبنا الجديدة في ٤ دول مختلفة وتقديم الخدمات بنجاح لأكثر من ٥٠٠ عميل جديد.", align: "right" },
                { year: "٢٠٢٢", title: "جائزة الابتكار التقني", desc: "الحصول على المركز الأول في جوائز التميز الرقمي الوطنية للحلول المؤسسية المبتكرة.", align: "left" },
                { year: "٢٠٢٠", title: "انطلاق ارتقاء", desc: "تأسيس الشركة رسمياً في مدينة الرياض بفريق عمل متكامل شغوف بصناعة التغيير الرقمي.", align: "right" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center justify-between ${
                    item.align === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden md:block w-5/12"></div>
                  <div className="z-20 w-8 h-8 rounded-full bg-accent border-4 border-background shadow-lg ring-4 ring-accent/20"></div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="md:w-5/12 mt-8 md:mt-0 bg-card p-8 rounded-3xl border border-border text-right shadow-sm glass-card"
                  >
                    <span className="text-xl text-accent font-bold mb-2 block">
                      {item.year}
                    </span>
                    <h4 className="text-2xl font-bold text-foreground mb-3">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-16 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground rounded-[2.5rem] p-12 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
            هل أنت مستعد للارتقاء بأعمالك معنا؟
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 relative z-10">
            تواصل معنا اليوم ودعنا نخطط سوياً للخطوة الاستراتيجية والمشروع التقني.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
            >
              ابدأ مشروعك الآن
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
