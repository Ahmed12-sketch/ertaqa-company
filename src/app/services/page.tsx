"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Rocket,
  LineChart,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  MessageSquare,
  PenTool,
  Settings,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-16 max-w-[1280px] mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <span className="text-accent font-medium tracking-wider mb-2 block">
            باقة خدماتنا الاحترافية
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            حلول استشارية وتقنية متكاملة لنمو أعمالكم
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            نقدم مجموعة واسعة ومتكاملة من الخدمات الاستشارية والحلول البرمجية
            المصممة خصيصاً لتلبية طموحات الشركات والمؤسسات الطموحة في العصر الرقمي.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#detailed-services"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-primary/90 transition-colors"
            >
              استكشف خدماتنا
            </a>
            <Link
              href="/contact"
              className="border-2 border-border text-foreground px-8 py-4 rounded-xl font-bold hover:bg-accent/10 transition-colors"
            >
              تواصل معنا
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Detailed List */}
      <section id="detailed-services" className="bg-muted/30 py-24 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-right"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              خدماتنا التخصصية
            </h2>
            <div className="h-1.5 w-24 bg-accent rounded-full ml-auto"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: <LineChart size={32} />,
                title: "الاستشارات الاستراتيجية",
                desc: "نساعدكم في رسم خارطة طريق واضحة وجريئة لمستقبل أعمالكم، من خلال تحليلات السوق المتقدمة، وتحديد الفرص الاستثمارية الواعدة.",
                points: ["تحليل المنافسين", "تخطيط التوسع والنمو"],
              },
              {
                icon: <Rocket size={32} />,
                title: "التحول الرقمي",
                desc: "نقوم بتمكين مؤسستكم من خلال أحدث الحلول الرقمية، أتمتة كافة العمليات وبناء بنية تحتية تقنية قوية تضمن أقصى درجات الكفاءة.",
                points: ["أتمتة العمليات الذكية", "الحوسبة السحابية المتكاملة"],
              },
              {
                icon: <Settings size={32} />,
                title: "تحليل البيانات والذكاء الاصطناعي",
                desc: "نعمل على تحويل البيانات الخام إلى رؤى استراتيجية. نستخدم خوارزميات ونماذج التعلم الآلي المتطورة لتوقع اتجاهات السوق.",
                points: ["التحليلات التنبؤية المتقدمة", "لوحات التحكم التفاعلية"],
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "الأمن السيبراني والخصوصية",
                desc: "حماية أصولكم الرقمية الثمينة وبيانات عملائكم هي أولويتنا القصوى. نقدم باقة حلول وقائية وأمنية متكاملة.",
                points: ["اختبار الاختراق الوقائي", "الامتثال للمعايير الأمنية"],
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-card rounded-3xl p-10 shadow-sm border border-border/50 group flex flex-col justify-between glass-card"
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 text-accent"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-right">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-right">
                    {service.desc}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row-reverse items-center justify-between mt-auto pt-6 border-t border-border/50 gap-4">
                  <ul className="space-y-2 text-right w-full sm:w-auto">
                    {service.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2 flex-row-reverse text-sm font-medium">
                        <CheckCircle2 size={16} className="text-accent" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="text-accent font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    اطلب الخدمة <ArrowLeft size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-background transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              كيف نعمل معاً
            </h2>
            <p className="text-lg text-muted-foreground">
              منهجية عمل احترافية ومنظمة تضمن تحقيق النتائج بكل دقة
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative"
          >
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-10 right-[12%] left-[12%] h-1 bg-border/50 -z-10"></div>

            {[
              { num: 1, icon: <MessageSquare size={32} />, title: "الاستشارة", desc: "نجتمع لفهم أهدافكم والتحديات." },
              { num: 2, icon: <PenTool size={32} />, title: "التخطيط", desc: "نطور خطة عمل تفصيلية ومخصصة." },
              { num: 3, icon: <Settings size={32} />, title: "التنفيذ", desc: "يبدأ الفريق ببناء الحلول بأعلى كفاءة." },
              { num: 4, icon: <ThumbsUp size={32} />, title: "التسليم", desc: "اختبار وتفعيل المشروع مع الدعم." },
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center text-center group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-20 h-20 bg-card rounded-full border-4 border-accent flex items-center justify-center mb-6 shadow-xl relative"
                >
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold shadow-md">
                    {step.num}
                  </span>
                  <div className="text-foreground">{step.icon}</div>
                </motion.div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-10 bg-primary rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative border border-border shadow-2xl"
          >
            <div className="relative z-10 text-center md:text-right">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                هل تحتاج إلى خدمة مخصصة بالكامل؟
              </h3>
              <p className="text-primary-foreground/80 text-lg">
                نحن هنا لتصميم وتنفيذ باقات استثنائية تناسب أبعاد وطموحات شركتكم.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative z-10">
              <Link
                href="/contact"
                className="bg-accent text-accent-foreground font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-primary transition-all duration-300 shadow-xl block"
              >
                تحدث مع خبيرنا
              </Link>
            </motion.div>

            {/* Decorative blurs */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-accent/10 rounded-full blur-[80px]"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
