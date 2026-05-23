"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, Send } from "lucide-react";
import { SuccessModal } from "@/components/SuccessModal";

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const faqs = [
    {
      q: "هل يمكنني ترقية أو تغيير الباقة في أي وقت؟",
      a: "نعم، يمكنك ترقية أو خفض باقتك في أي وقت مباشرة من خلال لوحة التحكم الخاصة بك أو بالتواصل مع مستشارك المخصص. سيتم احتساب الرسوم الجديدة بشكل تناسبي بناءً على الأيام المتبقية في دورة الفوترة الحالية.",
    },
    {
      q: "ما هي طرق الدفع المتاحة للشركات؟",
      a: "نقبل جميع بطاقات الدفع والائتمان الرئيسية بالمملكة (مدى، فيزا، ماستركارد)، بالإضافة إلى التحويلات البنكية المباشرة للمؤسسات والشركات في الباقات المتقدمة والمخصصة بنظام الفواتير الرسمية.",
    },
    {
      q: "هل هناك أي رسوم إضافية أو مخفية؟",
      a: "نحن نؤمن بالشفافية والنزاهة المطلقة. الأسعار الموضحة تشمل كافة الميزات والخدمات المذكورة في الباقة بالتفصيل. لا توجد أي رسوم إعداد أو رسوم صيانة سنوية مخفية على الإطلاق.",
    },
    {
      q: "هل يتوفر خصم للدفع والتعاقد السنوي؟",
      a: "بالتأكيد! عند اختيار نظام الدفع والتعاقد السنوي، ستحصل مؤسستك تلقائياً على خصم يعادل اشتراك شهرين مجاناً (حوالي ١٦٪ خصم من القيمة الإجمالية السنوية للاشتراك).",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 md:px-16 max-w-[1280px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-accent font-medium mb-2 block">
            باقات وعروض ارتقاء
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            خطط تسعير مرنة تناسب طموحاتك
          </h1>
          <p className="text-lg text-muted-foreground">
            اختر الباقة التي تلبي احتياجات عملك اليوم، مع إمكانية التوسع السلس غداً.
          </p>
        </motion.div>
      </section>

      {/* Pricing Grid */}
      <section className="py-12 px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "الأساسية",
              title: "بداية واعدة",
              price: "٩٩٩",
              features: [
                "دعم فني عبر البريد الإلكتروني",
                "تحليلات أداء أساسية ومبسطة",
                "مستخدم استشاري واحد فقط",
              ],
              highlight: false,
            },
            {
              name: "المتقدمة",
              title: "نمو متسارع",
              price: "٢٤٩٩",
              features: [
                "دعم فني واستشاري متكامل ٢٤/٧",
                "لوحة تحكم احترافية متكاملة",
                "حتى ٥ مستخدمين متزامنين",
                "تكامل تام مع تطبيقات الطرف الثالث",
              ],
              highlight: true,
            },
            {
              name: "المخصصة",
              title: "حلول المؤسسات",
              price: "مخصص",
              features: [
                "مدير حساب ومستشار فني مخصص",
                "بنية تحتية وشبكات آمنة ومستقلة",
                "عدد مستخدمين وصلاحيات غير محدود",
              ],
              highlight: false,
            },
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 flex flex-col justify-between rounded-3xl transition-shadow shadow-sm hover:shadow-xl ${
                plan.highlight
                  ? "bg-muted border-2 border-accent relative md:-translate-y-4"
                  : "bg-card border border-border/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                  الأكثر طلباً
                </div>
              )}
              <div>
                <div className="mb-6 text-right">
                  <span
                    className={`font-medium px-3 py-1 rounded-full text-sm ${
                      plan.highlight
                        ? "bg-accent/20 text-accent"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {plan.name}
                  </span>
                  <h3
                    className="text-2xl font-bold mt-4 text-foreground"
                  >
                    {plan.title}
                  </h3>
                </div>
                <div
                  className="mb-8 text-right text-foreground"
                >
                  <span className="text-4xl font-bold">
                    {plan.price === "مخصص" ? "تواصل معنا" : plan.price}
                  </span>
                  {plan.price !== "مخصص" && (
                    <span className="text-sm opacity-80"> ريال / شهرياً</span>
                  )}
                </div>
                <ul
                  className="space-y-4 mb-10 text-right text-muted-foreground"
                >
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 justify-end">
                      {feat}
                      <CheckCircle2
                        className="text-accent"
                        size={20}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-bold transition-colors ${
                  plan.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {plan.price === "مخصص" ? "اطلب استشارة" : "اختر الباقة"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6 text-right">
              اطلب عرض سعر مخصص
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card p-8 rounded-2xl shadow-lg border border-border/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 text-right">
                  <label className="text-sm font-medium">اسم الشركة</label>
                  <input
                    required
                    className="bg-background border border-border/50 rounded-lg p-3 text-right focus:ring-2 focus:ring-accent outline-none transition-all text-foreground"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <label className="text-sm font-medium">نوع الخدمة</label>
                  <select
                    required
                    className="bg-background border border-border/50 rounded-lg p-3 text-right focus:ring-2 focus:ring-accent outline-none transition-all text-foreground"
                  >
                    <option value="">-- اختر الخدمة --</option>
                    <option>تطوير النظم</option>
                    <option>الاستشارات</option>
                    <option>الأمن السيبراني</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-right">
                <label className="text-sm font-medium">الميزانية (ريال)</label>
                <input
                  required
                  className="bg-background border border-border/50 rounded-lg p-3 text-right focus:ring-2 focus:ring-accent outline-none transition-all text-foreground"
                  type="number"
                />
              </div>
              <div className="flex flex-col gap-2 text-right">
                <label className="text-sm font-medium">التفاصيل</label>
                <textarea
                  required
                  className="bg-background border border-border/50 rounded-lg p-3 text-right focus:ring-2 focus:ring-accent outline-none transition-all text-foreground resize-none"
                  rows={4}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold flex justify-center items-center gap-2"
              >
                إرسال الطلب
                <Send size={20} className="rotate-180" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
              alt="Strategy"
              className="rounded-3xl shadow-2xl border-4 border-border/50 object-cover w-full h-[500px]"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">
            الأسئلة الشائعة
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border/50 rounded-2xl overflow-hidden glass-card"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-right flex-row-reverse focus:outline-none"
              >
                <span className="font-bold text-foreground text-lg">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openFaq === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-accent" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted-foreground text-right leading-relaxed border-t border-border/20 pt-4 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
