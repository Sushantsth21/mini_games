'use client';

import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/30"
      >
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Playing?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of players and start your gaming journey today!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-purple-500/25 transition-all"
        >
          Play Now - It's Free!
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTASection;
