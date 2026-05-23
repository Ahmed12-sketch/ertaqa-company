import Link from "next/link";
import { Globe, Users, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-primary text-primary-foreground border-t border-border transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-4 md:px-8 py-20 max-w-7xl mx-auto text-right relative z-10">
        {/* Brand Info */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-black text-xl">
              إ
            </div>
            <div className="text-2xl font-bold text-primary-foreground">
              ارتقاء
            </div>
          </div>
          <p className="text-primary-foreground/70 mb-8 leading-relaxed text-sm">
            نحن نسعى دائماً لتقديم الأفضل لعملائنا عبر فريقنا المتخصص وحلولنا الابتكارية المتميزة والمصممة لتطوير قطاع الأعمال للمستقبل.
          </p>
          <div className="flex flex-row-reverse gap-4">
            <a
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              href="#"
              aria-label="Website"
            >
              <Globe size={18} />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              href="#"
              aria-label="Community"
            >
              <Users size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-primary-foreground">
            روابط سريعة
          </h4>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                عن الشركة
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                خدماتنا
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-primary-foreground/70 hover:text-accent transition-colors">
                الأسعار
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                اتصل بنا
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-primary-foreground">قانوني</h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                سياسة الخصوصية
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                الشروط والأحكام
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                سياسة الكوكيز
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-primary-foreground">
            تواصل معنا
          </h4>
          <ul className="space-y-4">
            <li className="flex flex-row-reverse items-center gap-3 text-primary-foreground/70">
              <MapPin size={18} className="text-accent" />
              <span className="text-sm">الرياض، المملكة العربية السعودية</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-3 text-primary-foreground/70">
              <Mail size={18} className="text-accent" />
              <span className="text-sm">info@erteqa.sa</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-3 text-primary-foreground/70">
              <Phone size={18} className="text-accent" />
              <span dir="ltr" className="text-sm">+966 11 000 0000</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 px-4 md:px-8 py-6 max-w-7xl mx-auto text-center md:text-right relative z-10">
        <p className="text-sm text-primary-foreground/50">
          © ٢٠٢٦ ارتقاء. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
