"use client";

import { motion, AnimatePresence, delay } from "framer-motion";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
