
'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Mini Games
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Challenge yourself with our collection of addictive mini games. 
            Compete with players worldwide and climb the leaderboards!
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Start Playing
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-bold text-lg hover:bg-purple-400 hover:text-white transition-all"
            >
              View Leaderboard
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Why Choose Our Games?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Gamepad2,
                title: "Multiple Games",
                description: "Enjoy a variety of challenging mini games designed to test your skills and reflexes."
              },
              {
                icon: Trophy,
                title: "Global Leaderboards",
                description: "Compete with players worldwide and see how you rank against the best."
              },
              {
                icon: Users,
                title: "Community",
                description: "Join a thriving community of gamers and make new friends along the way."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Players" },
              { number: "50+", label: "Games Available" },
              { number: "1M+", label: "Games Played" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-8"
              >
                <motion.div
                  className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 MiniGames. Built with FastAPI and Next.js.</p>
        </div>
      </footer>
    </div>
  );
}
