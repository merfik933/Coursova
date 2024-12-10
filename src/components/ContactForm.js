import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = ({ setIsContactModalOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 px-4 bg-[#002b1f] bg-opacity-70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-gradient-to-br from-[#003726] to-[#001d12] text-white p-8 rounded-xl max-w-md w-full shadow-xl border border-[#2BB32A]/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-extrabold mb-4 text-[#2BB32A] text-center">
            Contact Us
          </h2>
          <p className="text-sm text-gray-300 mb-6 text-center">
            Have questions? Let us know and we'll get back to you!
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200"
              >
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  className="mt-1 block w-full rounded-lg bg-transparent border border-gray-500 text-white px-4 py-3 shadow-sm transition duration-200 ease-in-out focus:border-[#2BB32A] focus:ring focus:ring-[#2BB32A]/50 focus:outline-none placeholder-gray-400"
                  placeholder="Enter your name"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                  <i className="fas fa-user"></i>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-lg bg-transparent border border-gray-500 text-white px-4 py-3 shadow-sm transition duration-200 ease-in-out focus:border-[#2BB32A] focus:ring focus:ring-[#2BB32A]/50 focus:outline-none placeholder-gray-400"
                  placeholder="Enter your email"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-lg bg-transparent border border-gray-500 text-white px-4 py-3 shadow-sm transition duration-200 ease-in-out focus:border-[#2BB32A] focus:ring focus:ring-[#2BB32A]/50 focus:outline-none placeholder-gray-400"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setIsContactModalOpen(false)}
                className="px-4 py-2 rounded-md border border-[#2BB32A] text-sm font-medium text-[#2BB32A] bg-transparent hover:bg-[#2BB32A]/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2BB32A] transition duration-200"
              >
                Cancel
              </motion.button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-[#2BB32A] hover:bg-[#2BB32A]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2BB32A] transition duration-200 shadow-lg"
              >
                Send
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;
