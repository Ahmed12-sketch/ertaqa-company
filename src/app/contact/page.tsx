"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Share2, AtSign, Users } from "lucide-react";
import { SuccessModal } from "@/components/SuccessModal";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-right"
        >
          <span className="text-accent font-medium mb-2 block">
            يسعدنا دائماً تواصلكم
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            تواصل معنا
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl ml-auto">
            نحن هنا للإجابة على جميع استفساراتكم وتقديم الدعم اللازم. يسعدنا
            سماع صوتكم والعمل سوياً لتطوير أعمالكم.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border/50 glass-card"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-right">
              أرسل لنا رسالة مباشرة
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 text-right">
                  <label className="text-sm font-medium">الاسم الكريم</label>
                  <input
                    required
                    className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent outline-none transition-all text-foreground"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <label className="text-sm font-medium">البريد الإلكتروني</label>
                  <input
                    required
                    className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent outline-none transition-all text-foreground"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 text-right">
                <label className="text-sm font-medium">الموضوع</label>
                <input
                  required
                  className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent outline-none transition-all text-foreground"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 text-right">
                <label className="text-sm font-medium">تفاصيل الرسالة</label>
                <textarea
                  required
                  className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent outline-none transition-all resize-none text-foreground"
                  rows={5}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold shadow-lg transition-colors"
              >
                إرسال الرسالة
              </motion.button>
            </form>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="bg-card p-8 rounded-3xl border border-border/50 space-y-8 glass-card">
              <motion.div
                whileHover={{ x: -10 }}
                className="flex items-start gap-4 flex-row-reverse text-right"
              >
                <div className="bg-accent/10 p-3 rounded-xl text-accent">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground mb-1">
                    اتصل بنا مباشرة
                  </h3>
                  <p className="text-xl font-bold text-foreground" dir="ltr">
                    +966 50 000 0000
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: -10 }}
                className="flex items-start gap-4 flex-row-reverse text-right"
              >
                <div className="bg-accent/10 p-3 rounded-xl text-accent">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground mb-1">
                    البريد الإلكتروني
                  </h3>
                  <p className="text-xl font-bold text-foreground">
                    info@erteqa.sa
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: -10 }}
                className="flex items-start gap-4 flex-row-reverse text-right"
              >
                <div className="bg-accent/10 p-3 rounded-xl text-accent">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground mb-1">
                    المكتب الرئيسي
                  </h3>
                  <p className="text-xl font-bold text-foreground">
                    الرياض، حي الملقا، طريق الملك فهد
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-3xl text-center shadow-lg">
              <h3 className="text-lg font-bold mb-6">
                تابعنا على شبكات التواصل
              </h3>
              <div className="flex justify-center gap-4">
                {[Share2, AtSign, Users].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    href="#"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl overflow-hidden shadow-lg h-[400px] relative group border border-border/50"
        >
          <img
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop"
            alt="Riyadh Map Placeholder"
          />
          <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
          <div className="absolute bottom-6 right-6 bg-card p-6 rounded-2xl shadow-xl max-w-sm border border-border/50 text-right glass-card">
            <h4 className="text-xl font-bold text-foreground mb-2">
              مقرنا الرئيسي في الرياض
            </h4>
            <p className="text-sm text-muted-foreground">
              يسعدنا زيارتكم لمناقشة مشاريعكم في بيئة عمل ملهمة.
            </p>
          </div>
        </motion.div>
      </div>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
