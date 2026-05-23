"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-primary-container max-w-md w-full rounded-[2rem] p-8 md:p-10 text-center shadow-2xl relative overflow-hidden pointer-events-auto border border-outline/10"
            >
              {/* Decorative shapes */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-secondary-container/10 rounded-full blur-2xl"></div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 size={40} />
              </motion.div>

              <h3 className="text-2xl font-bold text-primary dark:text-white mb-3">
                تم إرسال طلبكم بنجاح!
              </h3>
              <p className="text-on-surface-variant dark:text-surface-variant mb-8 leading-relaxed">
                شكراً لتواصلك مع <strong>ارتقاء للخدمات</strong>. لقد استلمنا
                بياناتك بنجاح، وسيقوم أحد خبرائنا بالتواصل معك في أقرب وقت.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full bg-primary dark:bg-secondary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/10 transition-colors"
              >
                موافق
              </motion.button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
