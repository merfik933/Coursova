"use client";

import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialSection from "./components/Testimonial";
import FAQSection from "./components/Faq";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="overlay bg-[#0A2818]/30 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl">
        <nav className="hidden md:flex justify-between items-center py-6 px-8 max-w-[1240px] mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-[24px] h-[24px] relative">
              <img
                src="images/icon.svg"
                alt="GreenBank"
                width={24}
                height={24}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-[16px] md:text-[20px]">
              GreenBank
            </span>
          </div>

          <div className="flex gap-4 lg:gap-8 font-semibold text-[14px] md:text-[16px]">
            <a
              href="#why-us"
              className="hover:text-[#2BB32A] transition-colors"
            >
              Why Us
            </a>
            <a
              href="#services"
              className="hover:text-[#2BB32A] transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              className="hover:text-[#2BB32A] transition-colors"
            >
              Our Process
            </a>
            <a
              href="#payments"
              className="hover:text-[#2BB32A] transition-colors"
            >
              Payments
            </a>
            <a href="#faqs" className="hover:text-[#2BB32A] transition-colors">
              FAQs
            </a>
          </div>

          <button
            onClick={() => setIsContactModalOpen(true)}
            className="px-6 py-2 border border-[#2BB32A] rounded-full hover:bg-[#2BB32A] transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex justify-between  items-center py-6 px-4">
          <div className="flex items-center gap-2">
            <div className="w-[24px] h-[24px] relative">
              <img
                src="images/icon.svg"
                alt="GreenBank"
                width={24}
                height={24}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-[20px]">GreenBank</span>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-16 left-0 right-0 border-t border-[#00FF29]/20 bg-[#003B20]/90 backdrop-blur-sm"
            >
              <div className="flex flex-col p-4 gap-4">
                <a
                  href="#why-us"
                  className="text-white hover:text-[#00FF29] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Why Us
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-[#00FF29] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#process"
                  className="text-white hover:text-[#00FF29] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Process
                </a>
                <a
                  href="#payments"
                  className="text-white hover:text-[#00FF29] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Payments
                </a>
                <a
                  href="#faqs"
                  className="text-white hover:text-[#00FF29] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQs
                </a>
                <button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-6 py-2 border border-[#00FF29] text-white rounded-full hover:bg-[#00FF29] transition-colors"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl min-w-auto lg:min-w-[700px] font-bold leading-tight title"
                >
                  Discover the Perfect <br className="hidden lg:block" /> Credit
                  Card for You
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-[#ADB2B1] text-[14px] md:text-[18px]"
                >
                  Discover the power of our secure and rewarding credit cards.
                  Explore our range of credit cards and take control of your
                  finances today.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col gap-4"
                >
                  <button className="px-8 py-3 bg-[#2BB32A] mt-2 mb-5 text-white text-[16px] font-bold self-start rounded-full hover:bg-[#2BB32A]/90 transition-colors duration-300 flex items-center gap-2">
                    Get Started
                    <ArrowRight size={20} />
                  </button>

                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                      <img
                        src="images/avatar1.png"
                        width={40}
                        height={40}
                        alt="User"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                      <img
                        src="images/avatar2.png"
                        width={40}
                        height={40}
                        alt="User"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                      <img
                        src="images/avatar3.png"
                        width={40}
                        height={40}
                        alt="User"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">10.2k+</div>
                      <div className="text-sm text-[#ADB2B1]">
                        Active users around the world
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="relative w-full max-w-[500px] mt-12 mx-auto md:ml-auto"
              >
                {/* Circle Background */}
                <div className="absolute -z-10 w-[450px] md:w-[492px] aspect-square rounded-full bg-[#2BB32A] -right-[50%] top-[230px] -translate-y-1/2 md:top-[70%] md:-translate-y-1/2"></div>

                <div className="relative transform mb-[90px] md:mb-[0]">
                  <div className="max-w-[350px] max-h-[250px] md:max-w-[550px] md:max-h-[350px] w-full aspect-[1.586/1] relative md:top-0 top-8 -right-[50px] shadow-xl overflow-hidden card">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                    <div className="relative h-full p-10 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <svg
                          width="59"
                          height="42"
                          viewBox="0 0 59 42"
                          className="transform rotate-[-15deg] w-[24px] h-[24px] lg:w-[59px] lg:h-[42px] "
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M25.9751 33.4585C30.143 31.2807 33.4208 27.4326 34.7339 22.5321C36.047 17.6315 35.1324 12.66 32.6117 8.69011C36.3425 6.74108 40.7883 6.13079 45.1749 7.30618C54.4621 9.79467 59.9737 19.3411 57.4852 28.6283C54.9967 37.9154 45.4503 43.4271 36.1632 40.9386C31.7765 39.7632 28.2315 37.0118 25.9751 33.4585ZM25.9751 33.4585C22.2442 35.4075 17.7985 36.0178 13.4118 34.8424C4.12468 32.3539 -1.38695 22.8075 1.10154 13.5203C3.59002 4.23314 13.1365 -1.2785 22.4236 1.20999C26.8102 2.38538 30.3552 5.13679 32.6117 8.69011C28.4438 10.8678 25.1659 14.716 23.8529 19.6165C22.5398 24.517 23.4544 29.4885 25.9751 33.4585Z"
                            fill="white"
                          />
                        </svg>

                        <svg
                          width="29"
                          height="46"
                          className="transform rotate-[-10deg] w-[24px] h-[24px] lg:w-[29px] lg:h-[46px] "
                          viewBox="0 0 29 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.9763 0.174375C23.9116 -0.176322 24.9542 0.297649 25.3049 1.23302C27.1722 6.21352 28.8252 14.2976 27.7419 22.5184C26.6512 30.7954 22.759 39.3188 13.4465 44.7773C12.5847 45.2824 11.4766 44.9933 10.9714 44.1315C10.4663 43.2696 10.7554 42.1615 11.6172 41.6563C19.7391 36.8957 23.1722 29.5071 24.1554 22.0458C25.146 14.5282 23.6215 7.04745 21.9176 2.50301C21.5669 1.56764 22.0409 0.525072 22.9763 0.174375ZM13.6863 4.55285C14.6212 4.20077 15.6644 4.67319 16.0165 5.60804C17.3371 9.11454 18.5059 14.7898 17.7461 20.5739C16.9788 26.4151 14.2171 32.4732 7.58972 36.3439C6.72711 36.8477 5.61942 36.5569 5.11561 35.6943C4.61181 34.8316 4.90268 33.724 5.76528 33.2201C11.1997 30.0462 13.4997 25.1245 14.1594 20.1028C14.8265 15.0241 13.7875 9.95342 12.6311 6.88305C12.2791 5.9482 12.7515 4.90494 13.6863 4.55285ZM5.98194 9.98395C6.91511 9.62743 7.96061 10.0949 8.31713 11.0281C9.04252 12.9267 9.68491 15.9757 9.27813 19.104C8.86359 22.2919 7.3324 25.6623 3.63068 27.7995C2.76556 28.2989 1.65934 28.0025 1.15986 27.1374C0.660385 26.2723 0.956797 25.1661 1.82191 24.6666C4.32296 23.2226 5.38441 20.9938 5.6908 18.6375C6.00494 16.2217 5.49654 13.7815 4.93784 12.3191C4.58132 11.386 5.04878 10.3405 5.98194 9.98395Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="space-y-2 lg:space-y-5">
                        <div className="text-[10px] lg:text-xs text-white/60">
                          Credit Card No.
                        </div>
                        <div className="font-bold flex gap-6 text-xs lg:text-3xl">
                          <span>1682</span>
                          <span>8911</span>
                          <span>2819</span>
                          <span>2821</span>
                        </div>
                      </div>
                      <div className="w-full space-y-3 flex baseline">
                        <div className="w-full flex justify-between items-end">
                          <div className="space-y-2 lg:space-y-6">
                            <div className="text-[10px] lg:text-xs text-white/60">
                              Name
                            </div>
                            <div className="font-medium text-[12px]">
                              REHAN RAIHAN
                            </div>
                          </div>
                          <div className="space-y- lg:space-y-6">
                            <div className="text-[10px] lg:text-xs text-white/60">
                              Exp.
                            </div>
                            <div className="font-medium text-[12px]">09/11</div>
                          </div>
                          <div className="flex gap-4 items-center">
                            <svg
                              width="69"
                              height="60"
                              viewBox="0 0 69 60"
                              className="transform rotate-[-15deg] w-[24px] h-[24px] lg:w-[69px] lg:h-[60px] "
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.8152 1.64886C12.044 0.794849 12.9218 0.288043 13.7758 0.516873L26.9195 4.03872C27.7735 4.26755 28.2803 5.14536 28.0515 5.99937L25.4128 15.8472C25.2529 16.4437 24.7644 16.895 24.1572 17.0071L16.7468 18.3757C16.2725 18.4633 15.7841 18.3324 15.4172 18.0194L9.68385 13.129C9.21406 12.7283 9.01662 12.0932 9.17643 11.4967L11.8152 1.64886Z"
                                fill="white"
                              />
                              <path
                                d="M36.5562 8.2782C36.7851 7.4242 37.6629 6.91739 38.5169 7.14622L42.3827 8.18206C43.2367 8.41089 43.7435 9.2887 43.5147 10.1427L42.686 13.2353C42.4572 14.0893 41.5793 14.5962 40.7253 14.3673L36.8595 13.3315C36.0055 13.1027 35.4987 12.2248 35.7276 11.3708L36.5562 8.2782Z"
                                fill="white"
                              />
                              <path
                                d="M52.0194 12.4215C52.2482 11.5675 53.126 11.0607 53.98 11.2896L67.1237 14.8114C67.9777 15.0402 68.4845 15.9181 68.2557 16.7721L65.7697 26.05C65.5409 26.904 64.6631 27.4108 63.8091 27.1819L50.6654 23.6601C49.8114 23.4313 49.3046 22.5535 49.5334 21.6994L52.0194 12.4215Z"
                                fill="white"
                              />
                              <path
                                d="M7.46465 17.8852C7.69348 17.0312 8.57129 16.5244 9.4253 16.7532L22.569 20.275C23.423 20.5039 23.9298 21.3817 23.701 22.2357L21.215 31.5136C20.9861 32.3676 20.1083 32.8744 19.2543 32.6456L6.11062 29.1237C5.25662 28.8949 4.74981 28.0171 4.97864 27.1631L7.46465 17.8852Z"
                                fill="white"
                              />
                              <path
                                d="M29.2241 17.0863C29.4529 16.2323 30.3307 15.7254 31.1848 15.9543L44.3284 19.4761C45.1825 19.705 45.6893 20.5828 45.4604 21.4368L39.6597 43.0852C39.4309 43.9392 38.5531 44.446 37.6991 44.2172L24.5554 40.6953C23.7014 40.4665 23.1946 39.5887 23.4234 38.7347L29.2241 17.0863Z"
                                fill="white"
                              />
                              <path
                                d="M47.6689 28.6579C47.8977 27.8039 48.7755 27.2971 49.6295 27.5259L62.7732 31.0477C63.6272 31.2766 64.134 32.1544 63.9052 33.0084L61.4192 42.2863C61.1904 43.1403 60.3126 43.6471 59.4586 43.4183L46.3149 39.8964C45.4609 39.6676 44.954 38.7898 45.1829 37.9358L47.6689 28.6579Z"
                                fill="white"
                              />
                              <path
                                d="M3.11414 34.1215C3.34297 33.2675 4.22078 32.7607 5.07479 32.9895L18.2185 36.5114C19.0725 36.7402 19.5793 37.618 19.3505 38.472L16.8645 47.7499C16.6356 48.6039 15.7578 49.1107 14.9038 48.8819L1.76011 45.3601C0.906106 45.1312 0.3993 44.2534 0.628131 43.3994L3.11414 34.1215Z"
                                fill="white"
                              />
                              <path
                                d="M26.1979 46.9361C26.4267 46.0821 27.3045 45.5753 28.1585 45.8041L32.0243 46.84C32.8783 47.0688 33.3851 47.9466 33.1563 48.8006L32.3276 51.8933C32.0988 52.7473 31.221 53.2541 30.367 53.0252L26.5012 51.9894C25.6472 51.7606 25.1404 50.8828 25.3692 50.0288L26.1979 46.9361Z"
                                fill="white"
                              />
                              <path
                                d="M43.4711 44.3242C43.6309 43.7278 44.1195 43.2765 44.7267 43.1643L52.1371 41.7958C52.6113 41.7082 53.0998 41.8391 53.4667 42.1521L59.2 47.0424C59.6698 47.4431 59.8672 48.0783 59.7074 48.6747L57.0687 58.5226C56.8399 59.3766 55.962 59.8834 55.108 59.6546L41.9643 56.1328C41.1103 55.9039 40.6035 55.0261 40.8324 54.1721L43.4711 44.3242Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="px-4 py-5">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8 whyus">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex flex-col gap-4 text-center">
                <span className="font-semibold text-[48px] text-white">
                  16y
                </span>
                <p className="text-[#2BB32A] text-[16px] font-semibold">
                  Experience
                </p>
              </div>
              <div className="flex flex-col gap-4 text-center">
                <span className="font-semibold text-[48px] text-white">
                  250+
                </span>
                <p className="text-[#2BB32A] text-[16px] font-semibold">
                  Merchant Partner
                </p>
              </div>
              <div className="flex flex-col gap-4 text-center">
                <span className="font-semibold text-[48px] text-white">
                  18+
                </span>
                <p className="text-[#2BB32A] text-[16px] font-semibold">
                  Years Experience
                </p>
              </div>
              <div className="flex flex-col gap-4 text-center">
                <span className="font-semibold text-[48px] text-white">
                  10.2k+
                </span>
                <p className="text-[#2BB32A] text-[16px] font-semibold">
                  Worldwide Clients
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="partners">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <ul className="grid grid-cols-2 md:grid-cols-6 gap-8 py-[120px] justify-center items-center">
              <li className="flex justify-center items-center">
                <img src="images/upwork.png" alt="Partner 1" className="" />
              </li>
              <li className="flex justify-center items-center">
                <img src="images/petal.png" alt="Partner 2" className="" />
              </li>
              <li className="flex justify-center items-center">
                <img src="images/rakuten.png" alt="Partner 3" className="" />
              </li>
              <li className="flex justify-center items-center">
                <img src="images/nyt.png" alt="Partner 4" className="" />
              </li>
              <li className="flex justify-center items-center">
                <img src="images/vice.png" alt="Partner 5" className="" />
              </li>
              <li className="flex justify-center items-center">
                <img src="images/dell.png" alt="Partner 6" className="" />
              </li>
            </ul>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-4 pb-20">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  src: "images/security.png",
                  title: "Security Guarantee ",
                  description:
                    "Your data and funds will be securely protected.",
                },
                {
                  src: "images/pie.png",
                  title: "Investing",
                  description:
                    "Expert guidance to grow your wealth and secure your future.",
                },
                {
                  src: "images/analytics.png",
                  title: "Multiple Method",
                  description:
                    "Flexible loan options to support your goals and dreams.",
                },
              ].map((service, index) => (
                <div key={index} className="p-6 rounded-lg  flex gap-8">
                  <div className="services-type min-w-[64px] flex items-center text-center">
                    <img
                      src={service.src}
                      alt={service.title}
                      className="w-10 h-10 mx-auto object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-[24px] font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 font-normal text-[16px] text-[#ADB2B1]">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Design your personalized credit card.
                </h2>
                <p className="text-gray-400 max-w-lg">
                  You have the freedom to personalize the design of your credit
                  card, ensuring a truly unique experience that makes you feel
                  extraordinary
                </p>
                <button className="px-8 py-3 bg-[#2BB32A] rounded-full hover:bg-[#2BB32A]/90 transition-colors flex items-center gap-2">
                  Create New Card
                  <ArrowRight size={20} />
                </button>
              </div>

              <div className="relative h-[400px]">
                {/* Dark/Glass Card */}
                <div className="absolute  left-0 top-0 w-[220px] md:w-[280px] z-30">
                  <div className="w-full black aspect-[1.586/1] p-1 bg-gray-500/20 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                    <div className="relative h-full p-4 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 59 42"
                          className="transform rotate-[-15deg]  md:h-[24px] w-[20px] h-[20px]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M25.9751 33.4585C30.143 31.2807 33.4208 27.4326 34.7339 22.5321C36.047 17.6315 35.1324 12.66 32.6117 8.69011C36.3425 6.74108 40.7883 6.13079 45.1749 7.30618C54.4621 9.79467 59.9737 19.3411 57.4852 28.6283C54.9967 37.9154 45.4503 43.4271 36.1632 40.9386C31.7765 39.7632 28.2315 37.0118 25.9751 33.4585ZM25.9751 33.4585C22.2442 35.4075 17.7985 36.0178 13.4118 34.8424C4.12468 32.3539 -1.38695 22.8075 1.10154 13.5203C3.59002 4.23314 13.1365 -1.2785 22.4236 1.20999C26.8102 2.38538 30.3552 5.13679 32.6117 8.69011C28.4438 10.8678 25.1659 14.716 23.8529 19.6165C22.5398 24.517 23.4544 29.4885 25.9751 33.4585Z"
                            fill="white"
                          />
                        </svg>

                        <svg
                          width="24"
                          height="24"
                          className="transform rotate-[-10deg]  md:h-[24px] w-[20px] h-[20px]"
                          viewBox="0 0 29 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.9763 0.174375C23.9116 -0.176322 24.9542 0.297649 25.3049 1.23302C27.1722 6.21352 28.8252 14.2976 27.7419 22.5184C26.6512 30.7954 22.759 39.3188 13.4465 44.7773C12.5847 45.2824 11.4766 44.9933 10.9714 44.1315C10.4663 43.2696 10.7554 42.1615 11.6172 41.6563C19.7391 36.8957 23.1722 29.5071 24.1554 22.0458C25.146 14.5282 23.6215 7.04745 21.9176 2.50301C21.5669 1.56764 22.0409 0.525072 22.9763 0.174375ZM13.6863 4.55285C14.6212 4.20077 15.6644 4.67319 16.0165 5.60804C17.3371 9.11454 18.5059 14.7898 17.7461 20.5739C16.9788 26.4151 14.2171 32.4732 7.58972 36.3439C6.72711 36.8477 5.61942 36.5569 5.11561 35.6943C4.61181 34.8316 4.90268 33.724 5.76528 33.2201C11.1997 30.0462 13.4997 25.1245 14.1594 20.1028C14.8265 15.0241 13.7875 9.95342 12.6311 6.88305C12.2791 5.9482 12.7515 4.90494 13.6863 4.55285ZM5.98194 9.98395C6.91511 9.62743 7.96061 10.0949 8.31713 11.0281C9.04252 12.9267 9.68491 15.9757 9.27813 19.104C8.86359 22.2919 7.3324 25.6623 3.63068 27.7995C2.76556 28.2989 1.65934 28.0025 1.15986 27.1374C0.660385 26.2723 0.956797 25.1661 1.82191 24.6666C4.32296 23.2226 5.38441 20.9938 5.6908 18.6375C6.00494 16.2217 5.49654 13.7815 4.93784 12.3191C4.58132 11.386 5.04878 10.3405 5.98194 9.98395Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[6px] font-normal md:text-[10px] text-white">
                          Credit Card No.
                        </div>
                        <div className="font-medium flex gap-3 text-[8px] md:text-[14px]">
                          <span>1682</span>
                          <span>8911</span>
                          <span>2819</span>
                          <span>2821</span>
                        </div>
                      </div>
                      <div className="w-full space-y-2 flex baseline">
                        <div className="w-full flex justify-between items-end">
                          <div className="space-y-2">
                            <div className="text-[6px] md:text-[10px]">
                              Name
                            </div>
                            <div className="font-normal md:text-[12px] text-[8px]">
                              REHAN RAIHAN
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-[6px] md:text-[10px]">
                              Exp.
                            </div>
                            <div className="font-normal md:text-[12px] text-[8px]">
                              09/11
                            </div>
                          </div>
                          <div className="flex gap-4 items-center">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 69 60"
                              className="transform rotate-[-15deg]   md:h-[24px] w-[20px] h-[20px]"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.8152 1.64886C12.044 0.794849 12.9218 0.288043 13.7758 0.516873L26.9195 4.03872C27.7735 4.26755 28.2803 5.14536 28.0515 5.99937L25.4128 15.8472C25.2529 16.4437 24.7644 16.895 24.1572 17.0071L16.7468 18.3757C16.2725 18.4633 15.7841 18.3324 15.4172 18.0194L9.68385 13.129C9.21406 12.7283 9.01662 12.0932 9.17643 11.4967L11.8152 1.64886Z"
                                fill="white"
                              />
                              <path
                                d="M36.5562 8.2782C36.7851 7.4242 37.6629 6.91739 38.5169 7.14622L42.3827 8.18206C43.2367 8.41089 43.7435 9.2887 43.5147 10.1427L42.686 13.2353C42.4572 14.0893 41.5793 14.5962 40.7253 14.3673L36.8595 13.3315C36.0055 13.1027 35.4987 12.2248 35.7276 11.3708L36.5562 8.2782Z"
                                fill="white"
                              />
                              <path
                                d="M52.0194 12.4215C52.2482 11.5675 53.126 11.0607 53.98 11.2896L67.1237 14.8114C67.9777 15.0402 68.4845 15.9181 68.2557 16.7721L65.7697 26.05C65.5409 26.904 64.6631 27.4108 63.8091 27.1819L50.6654 23.6601C49.8114 23.4313 49.3046 22.5535 49.5334 21.6994L52.0194 12.4215Z"
                                fill="white"
                              />
                              <path
                                d="M7.46465 17.8852C7.69348 17.0312 8.57129 16.5244 9.4253 16.7532L22.569 20.275C23.423 20.5039 23.9298 21.3817 23.701 22.2357L21.215 31.5136C20.9861 32.3676 20.1083 32.8744 19.2543 32.6456L6.11062 29.1237C5.25662 28.8949 4.74981 28.0171 4.97864 27.1631L7.46465 17.8852Z"
                                fill="white"
                              />
                              <path
                                d="M29.2241 17.0863C29.4529 16.2323 30.3307 15.7254 31.1848 15.9543L44.3284 19.4761C45.1825 19.705 45.6893 20.5828 45.4604 21.4368L39.6597 43.0852C39.4309 43.9392 38.5531 44.446 37.6991 44.2172L24.5554 40.6953C23.7014 40.4665 23.1946 39.5887 23.4234 38.7347L29.2241 17.0863Z"
                                fill="white"
                              />
                              <path
                                d="M47.6689 28.6579C47.8977 27.8039 48.7755 27.2971 49.6295 27.5259L62.7732 31.0477C63.6272 31.2766 64.134 32.1544 63.9052 33.0084L61.4192 42.2863C61.1904 43.1403 60.3126 43.6471 59.4586 43.4183L46.3149 39.8964C45.4609 39.6676 44.954 38.7898 45.1829 37.9358L47.6689 28.6579Z"
                                fill="white"
                              />
                              <path
                                d="M3.11414 34.1215C3.34297 33.2675 4.22078 32.7607 5.07479 32.9895L18.2185 36.5114C19.0725 36.7402 19.5793 37.618 19.3505 38.472L16.8645 47.7499C16.6356 48.6039 15.7578 49.1107 14.9038 48.8819L1.76011 45.3601C0.906106 45.1312 0.3993 44.2534 0.628131 43.3994L3.11414 34.1215Z"
                                fill="white"
                              />
                              <path
                                d="M26.1979 46.9361C26.4267 46.0821 27.3045 45.5753 28.1585 45.8041L32.0243 46.84C32.8783 47.0688 33.3851 47.9466 33.1563 48.8006L32.3276 51.8933C32.0988 52.7473 31.221 53.2541 30.367 53.0252L26.5012 51.9894C25.6472 51.7606 25.1404 50.8828 25.3692 50.0288L26.1979 46.9361Z"
                                fill="white"
                              />
                              <path
                                d="M43.4711 44.3242C43.6309 43.7278 44.1195 43.2765 44.7267 43.1643L52.1371 41.7958C52.6113 41.7082 53.0998 41.8391 53.4667 42.1521L59.2 47.0424C59.6698 47.4431 59.8672 48.0783 59.7074 48.6747L57.0687 58.5226C56.8399 59.3766 55.962 59.8834 55.108 59.6546L41.9643 56.1328C41.1103 55.9039 40.6035 55.0261 40.8324 54.1721L43.4711 44.3242Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Green Card */}
                <div className="absolute  left-0 top-0 w-[220px] md:w-[280px] z-20">
                  <div className="w-full green aspect-[1.586/1] bg-[#2BB32A] rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative h-full p-4 flex flex-col justify-between text-black">
                      <div className="flex justify-between items-start">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 59 42"
                          className="transform rotate-[-15deg]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M25.9751 33.4585C30.143 31.2807 33.4208 27.4326 34.7339 22.5321C36.047 17.6315 35.1324 12.66 32.6117 8.69011C36.3425 6.74108 40.7883 6.13079 45.1749 7.30618C54.4621 9.79467 59.9737 19.3411 57.4852 28.6283C54.9967 37.9154 45.4503 43.4271 36.1632 40.9386C31.7765 39.7632 28.2315 37.0118 25.9751 33.4585ZM25.9751 33.4585C22.2442 35.4075 17.7985 36.0178 13.4118 34.8424C4.12468 32.3539 -1.38695 22.8075 1.10154 13.5203C3.59002 4.23314 13.1365 -1.2785 22.4236 1.20999C26.8102 2.38538 30.3552 5.13679 32.6117 8.69011C28.4438 10.8678 25.1659 14.716 23.8529 19.6165C22.5398 24.517 23.4544 29.4885 25.9751 33.4585Z"
                            fill="black"
                          />
                        </svg>

                        <svg
                          width="24"
                          height="24"
                          className="transform rotate-[-10deg]"
                          viewBox="0 0 29 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.9763 0.174375C23.9116 -0.176322 24.9542 0.297649 25.3049 1.23302C27.1722 6.21352 28.8252 14.2976 27.7419 22.5184C26.6512 30.7954 22.759 39.3188 13.4465 44.7773C12.5847 45.2824 11.4766 44.9933 10.9714 44.1315C10.4663 43.2696 10.7554 42.1615 11.6172 41.6563C19.7391 36.8957 23.1722 29.5071 24.1554 22.0458C25.146 14.5282 23.6215 7.04745 21.9176 2.50301C21.5669 1.56764 22.0409 0.525072 22.9763 0.174375ZM13.6863 4.55285C14.6212 4.20077 15.6644 4.67319 16.0165 5.60804C17.3371 9.11454 18.5059 14.7898 17.7461 20.5739C16.9788 26.4151 14.2171 32.4732 7.58972 36.3439C6.72711 36.8477 5.61942 36.5569 5.11561 35.6943C4.61181 34.8316 4.90268 33.724 5.76528 33.2201C11.1997 30.0462 13.4997 25.1245 14.1594 20.1028C14.8265 15.0241 13.7875 9.95342 12.6311 6.88305C12.2791 5.9482 12.7515 4.90494 13.6863 4.55285ZM5.98194 9.98395C6.91511 9.62743 7.96061 10.0949 8.31713 11.0281C9.04252 12.9267 9.68491 15.9757 9.27813 19.104C8.86359 22.2919 7.3324 25.6623 3.63068 27.7995C2.76556 28.2989 1.65934 28.0025 1.15986 27.1374C0.660385 26.2723 0.956797 25.1661 1.82191 24.6666C4.32296 23.2226 5.38441 20.9938 5.6908 18.6375C6.00494 16.2217 5.49654 13.7815 4.93784 12.3191C4.58132 11.386 5.04878 10.3405 5.98194 9.98395Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[6px] md:text-[10px]">
                          Credit Card No.
                        </div>
                        <div className="font-medium flex gap-3 text-[8px] md:text-[14px]">
                          <span>1682</span>
                          <span>8911</span>
                          <span>2819</span>
                          <span>2821</span>
                        </div>
                      </div>
                      <div className="w-full space-y-2 flex baseline">
                        <div className="w-full flex justify-between items-end">
                          <div className="space-y-2">
                            <div className="text-[6px] md:text-[10px] text-black/60">
                              Name
                            </div>
                            <div className="font-medium md:text-[12px] text-[8px]">
                              REHAN RAIHAN
                            </div>
                          </div>
                          <div className="md:space-y-2 space-y-1">
                            <div className="text-[6px] md:text-[10px] text-black/60">
                              Exp.
                            </div>
                            <div className="font-medium md:text-[12px] text-[8px]">
                              09/11
                            </div>
                          </div>
                          <div className="flex gap-4 items-center">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 69 60"
                              className="transform rotate-[-15deg]  md:h-[24px] w-[20px] h-[20px]"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.8152 1.64886C12.044 0.794849 12.9218 0.288043 13.7758 0.516873L26.9195 4.03872C27.7735 4.26755 28.2803 5.14536 28.0515 5.99937L25.4128 15.8472C25.2529 16.4437 24.7644 16.895 24.1572 17.0071L16.7468 18.3757C16.2725 18.4633 15.7841 18.3324 15.4172 18.0194L9.68385 13.129C9.21406 12.7283 9.01662 12.0932 9.17643 11.4967L11.8152 1.64886Z"
                                fill="black"
                              />
                              <path
                                d="M36.5562 8.2782C36.7851 7.4242 37.6629 6.91739 38.5169 7.14622L42.3827 8.18206C43.2367 8.41089 43.7435 9.2887 43.5147 10.1427L42.686 13.2353C42.4572 14.0893 41.5793 14.5962 40.7253 14.3673L36.8595 13.3315C36.0055 13.1027 35.4987 12.2248 35.7276 11.3708L36.5562 8.2782Z"
                                fill="black"
                              />
                              <path
                                d="M52.0194 12.4215C52.2482 11.5675 53.126 11.0607 53.98 11.2896L67.1237 14.8114C67.9777 15.0402 68.4845 15.9181 68.2557 16.7721L65.7697 26.05C65.5409 26.904 64.6631 27.4108 63.8091 27.1819L50.6654 23.6601C49.8114 23.4313 49.3046 22.5535 49.5334 21.6994L52.0194 12.4215Z"
                                fill="black"
                              />
                              <path
                                d="M7.46465 17.8852C7.69348 17.0312 8.57129 16.5244 9.4253 16.7532L22.569 20.275C23.423 20.5039 23.9298 21.3817 23.701 22.2357L21.215 31.5136C20.9861 32.3676 20.1083 32.8744 19.2543 32.6456L6.11062 29.1237C5.25662 28.8949 4.74981 28.0171 4.97864 27.1631L7.46465 17.8852Z"
                                fill="black"
                              />
                              <path
                                d="M29.2241 17.0863C29.4529 16.2323 30.3307 15.7254 31.1848 15.9543L44.3284 19.4761C45.1825 19.705 45.6893 20.5828 45.4604 21.4368L39.6597 43.0852C39.4309 43.9392 38.5531 44.446 37.6991 44.2172L24.5554 40.6953C23.7014 40.4665 23.1946 39.5887 23.4234 38.7347L29.2241 17.0863Z"
                                fill="black"
                              />
                              <path
                                d="M47.6689 28.6579C47.8977 27.8039 48.7755 27.2971 49.6295 27.5259L62.7732 31.0477C63.6272 31.2766 64.134 32.1544 63.9052 33.0084L61.4192 42.2863C61.1904 43.1403 60.3126 43.6471 59.4586 43.4183L46.3149 39.8964C45.4609 39.6676 44.954 38.7898 45.1829 37.9358L47.6689 28.6579Z"
                                fill="black"
                              />
                              <path
                                d="M3.11414 34.1215C3.34297 33.2675 4.22078 32.7607 5.07479 32.9895L18.2185 36.5114C19.0725 36.7402 19.5793 37.618 19.3505 38.472L16.8645 47.7499C16.6356 48.6039 15.7578 49.1107 14.9038 48.8819L1.76011 45.3601C0.906106 45.1312 0.3993 44.2534 0.628131 43.3994L3.11414 34.1215Z"
                                fill="black"
                              />
                              <path
                                d="M26.1979 46.9361C26.4267 46.0821 27.3045 45.5753 28.1585 45.8041L32.0243 46.84C32.8783 47.0688 33.3851 47.9466 33.1563 48.8006L32.3276 51.8933C32.0988 52.7473 31.221 53.2541 30.367 53.0252L26.5012 51.9894C25.6472 51.7606 25.1404 50.8828 25.3692 50.0288L26.1979 46.9361Z"
                                fill="black"
                              />
                              <path
                                d="M43.4711 44.3242C43.6309 43.7278 44.1195 43.2765 44.7267 43.1643L52.1371 41.7958C52.6113 41.7082 53.0998 41.8391 53.4667 42.1521L59.2 47.0424C59.6698 47.4431 59.8672 48.0783 59.7074 48.6747L57.0687 58.5226C56.8399 59.3766 55.962 59.8834 55.108 59.6546L41.9643 56.1328C41.1103 55.9039 40.6035 55.0261 40.8324 54.1721L43.4711 44.3242Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* White Card */}
                <div className="absolute  left-0 top-0 w-[220px] md:w-[280px] z-10">
                  <div className="w-full white aspect-[1.586/1] bg-white p-3 rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative text-black h-full p-4 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 59 42"
                          className="transform rotate-[-15deg] md:w-[24px] md:h-[24px] w-[20px] h-[20px]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M25.9751 33.4585C30.143 31.2807 33.4208 27.4326 34.7339 22.5321C36.047 17.6315 35.1324 12.66 32.6117 8.69011C36.3425 6.74108 40.7883 6.13079 45.1749 7.30618C54.4621 9.79467 59.9737 19.3411 57.4852 28.6283C54.9967 37.9154 45.4503 43.4271 36.1632 40.9386C31.7765 39.7632 28.2315 37.0118 25.9751 33.4585ZM25.9751 33.4585C22.2442 35.4075 17.7985 36.0178 13.4118 34.8424C4.12468 32.3539 -1.38695 22.8075 1.10154 13.5203C3.59002 4.23314 13.1365 -1.2785 22.4236 1.20999C26.8102 2.38538 30.3552 5.13679 32.6117 8.69011C28.4438 10.8678 25.1659 14.716 23.8529 19.6165C22.5398 24.517 23.4544 29.4885 25.9751 33.4585Z"
                            fill="black"
                          />
                        </svg>

                        <svg
                          width="24"
                          height="24"
                          className="transform rotate-[-10deg] md:w-[24px] md:h-[24px] w-[20px] h-[20px]"
                          viewBox="0 0 29 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.9763 0.174375C23.9116 -0.176322 24.9542 0.297649 25.3049 1.23302C27.1722 6.21352 28.8252 14.2976 27.7419 22.5184C26.6512 30.7954 22.759 39.3188 13.4465 44.7773C12.5847 45.2824 11.4766 44.9933 10.9714 44.1315C10.4663 43.2696 10.7554 42.1615 11.6172 41.6563C19.7391 36.8957 23.1722 29.5071 24.1554 22.0458C25.146 14.5282 23.6215 7.04745 21.9176 2.50301C21.5669 1.56764 22.0409 0.525072 22.9763 0.174375ZM13.6863 4.55285C14.6212 4.20077 15.6644 4.67319 16.0165 5.60804C17.3371 9.11454 18.5059 14.7898 17.7461 20.5739C16.9788 26.4151 14.2171 32.4732 7.58972 36.3439C6.72711 36.8477 5.61942 36.5569 5.11561 35.6943C4.61181 34.8316 4.90268 33.724 5.76528 33.2201C11.1997 30.0462 13.4997 25.1245 14.1594 20.1028C14.8265 15.0241 13.7875 9.95342 12.6311 6.88305C12.2791 5.9482 12.7515 4.90494 13.6863 4.55285ZM5.98194 9.98395C6.91511 9.62743 7.96061 10.0949 8.31713 11.0281C9.04252 12.9267 9.68491 15.9757 9.27813 19.104C8.86359 22.2919 7.3324 25.6623 3.63068 27.7995C2.76556 28.2989 1.65934 28.0025 1.15986 27.1374C0.660385 26.2723 0.956797 25.1661 1.82191 24.6666C4.32296 23.2226 5.38441 20.9938 5.6908 18.6375C6.00494 16.2217 5.49654 13.7815 4.93784 12.3191C4.58132 11.386 5.04878 10.3405 5.98194 9.98395Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[6px] md:text-[10px] text-black/60">
                          Credit Card No.
                        </div>
                        <div className="font-medium flex gap-3 text-[8px] md:text-[14px]">
                          <span>1682</span>
                          <span>8911</span>
                          <span>2819</span>
                          <span>2821</span>
                        </div>
                      </div>
                      <div className="w-full space-y-2 flex baseline">
                        <div className="w-full flex justify-between items-end">
                          <div className="md:space-y-2 space-y-1">
                            <div className="text-[6px] md:text-[10px]">
                              Name
                            </div>
                            <div className="font-medium md:text-[12px]  text-[8px]">
                              REHAN RAIHAN
                            </div>
                          </div>
                          <div className="md:space-y-2 space-y-1">
                            <div className="text-[6px] md:text-[10px] text-black/60">
                              Exp.
                            </div>
                            <div className="font-medium md:text-[12px]  text-[8px]">
                              09/11
                            </div>
                          </div>
                          <div className="flex gap-4 items-center">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 69 60"
                              className="transform rotate-[-15deg] md:w-[24px] md:h-[24px] w-[20px] h-[20px]"
                              fill="black"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.8152 1.64886C12.044 0.794849 12.9218 0.288043 13.7758 0.516873L26.9195 4.03872C27.7735 4.26755 28.2803 5.14536 28.0515 5.99937L25.4128 15.8472C25.2529 16.4437 24.7644 16.895 24.1572 17.0071L16.7468 18.3757C16.2725 18.4633 15.7841 18.3324 15.4172 18.0194L9.68385 13.129C9.21406 12.7283 9.01662 12.0932 9.17643 11.4967L11.8152 1.64886Z"
                                fill="black"
                              />
                              <path
                                d="M36.5562 8.2782C36.7851 7.4242 37.6629 6.91739 38.5169 7.14622L42.3827 8.18206C43.2367 8.41089 43.7435 9.2887 43.5147 10.1427L42.686 13.2353C42.4572 14.0893 41.5793 14.5962 40.7253 14.3673L36.8595 13.3315C36.0055 13.1027 35.4987 12.2248 35.7276 11.3708L36.5562 8.2782Z"
                                fill="black"
                              />
                              <path
                                d="M52.0194 12.4215C52.2482 11.5675 53.126 11.0607 53.98 11.2896L67.1237 14.8114C67.9777 15.0402 68.4845 15.9181 68.2557 16.7721L65.7697 26.05C65.5409 26.904 64.6631 27.4108 63.8091 27.1819L50.6654 23.6601C49.8114 23.4313 49.3046 22.5535 49.5334 21.6994L52.0194 12.4215Z"
                                fill="black"
                              />
                              <path
                                d="M7.46465 17.8852C7.69348 17.0312 8.57129 16.5244 9.4253 16.7532L22.569 20.275C23.423 20.5039 23.9298 21.3817 23.701 22.2357L21.215 31.5136C20.9861 32.3676 20.1083 32.8744 19.2543 32.6456L6.11062 29.1237C5.25662 28.8949 4.74981 28.0171 4.97864 27.1631L7.46465 17.8852Z"
                                fill="black"
                              />
                              <path
                                d="M29.2241 17.0863C29.4529 16.2323 30.3307 15.7254 31.1848 15.9543L44.3284 19.4761C45.1825 19.705 45.6893 20.5828 45.4604 21.4368L39.6597 43.0852C39.4309 43.9392 38.5531 44.446 37.6991 44.2172L24.5554 40.6953C23.7014 40.4665 23.1946 39.5887 23.4234 38.7347L29.2241 17.0863Z"
                                fill="black"
                              />
                              <path
                                d="M47.6689 28.6579C47.8977 27.8039 48.7755 27.2971 49.6295 27.5259L62.7732 31.0477C63.6272 31.2766 64.134 32.1544 63.9052 33.0084L61.4192 42.2863C61.1904 43.1403 60.3126 43.6471 59.4586 43.4183L46.3149 39.8964C45.4609 39.6676 44.954 38.7898 45.1829 37.9358L47.6689 28.6579Z"
                                fill="black"
                              />
                              <path
                                d="M3.11414 34.1215C3.34297 33.2675 4.22078 32.7607 5.07479 32.9895L18.2185 36.5114C19.0725 36.7402 19.5793 37.618 19.3505 38.472L16.8645 47.7499C16.6356 48.6039 15.7578 49.1107 14.9038 48.8819L1.76011 45.3601C0.906106 45.1312 0.3993 44.2534 0.628131 43.3994L3.11414 34.1215Z"
                                fill="black"
                              />
                              <path
                                d="M26.1979 46.9361C26.4267 46.0821 27.3045 45.5753 28.1585 45.8041L32.0243 46.84C32.8783 47.0688 33.3851 47.9466 33.1563 48.8006L32.3276 51.8933C32.0988 52.7473 31.221 53.2541 30.367 53.0252L26.5012 51.9894C25.6472 51.7606 25.1404 50.8828 25.3692 50.0288L26.1979 46.9361Z"
                                fill="black"
                              />
                              <path
                                d="M43.4711 44.3242C43.6309 43.7278 44.1195 43.2765 44.7267 43.1643L52.1371 41.7958C52.6113 41.7082 53.0998 41.8391 53.4667 42.1521L59.2 47.0424C59.6698 47.4431 59.8672 48.0783 59.7074 48.6747L57.0687 58.5226C56.8399 59.3766 55.962 59.8834 55.108 59.6546L41.9643 56.1328C41.1103 55.9039 40.6035 55.0261 40.8324 54.1721L43.4711 44.3242Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Stars */}
                <div className="absolute top-0 right-0 w-4 h-4 text-[#2BB32A]">
                  ★
                </div>
                <div className="absolute bottom-12 left-12 w-4 h-4 text-[#2BB32A]">
                  ★
                </div>
                <div className="absolute top-1/2 right-1/4 w-4 h-4 text-[#2BB32A]">
                  ★
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="card-learn" className="pt-10 overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] order-2 md:order-1">
                {/* Dark/Glass Card */}
                <div className="absolute  left-0 top-0 w-[220px] md:w-[280px] z-30">
                  <div className="w-full black-learn aspect-[1.586/1] p-1 bg-gray-500/20 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                    <div className="relative h-full p-4 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 59 42"
                          className="transform rotate-[-15deg]  md:h-[24px] w-[20px] h-[20px]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M25.9751 33.4585C30.143 31.2807 33.4208 27.4326 34.7339 22.5321C36.047 17.6315 35.1324 12.66 32.6117 8.69011C36.3425 6.74108 40.7883 6.13079 45.1749 7.30618C54.4621 9.79467 59.9737 19.3411 57.4852 28.6283C54.9967 37.9154 45.4503 43.4271 36.1632 40.9386C31.7765 39.7632 28.2315 37.0118 25.9751 33.4585ZM25.9751 33.4585C22.2442 35.4075 17.7985 36.0178 13.4118 34.8424C4.12468 32.3539 -1.38695 22.8075 1.10154 13.5203C3.59002 4.23314 13.1365 -1.2785 22.4236 1.20999C26.8102 2.38538 30.3552 5.13679 32.6117 8.69011C28.4438 10.8678 25.1659 14.716 23.8529 19.6165C22.5398 24.517 23.4544 29.4885 25.9751 33.4585Z"
                            fill="white"
                          />
                        </svg>

                        <svg
                          width="24"
                          height="24"
                          className="transform rotate-[-10deg]  md:h-[24px] w-[20px] h-[20px]"
                          viewBox="0 0 29 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.9763 0.174375C23.9116 -0.176322 24.9542 0.297649 25.3049 1.23302C27.1722 6.21352 28.8252 14.2976 27.7419 22.5184C26.6512 30.7954 22.759 39.3188 13.4465 44.7773C12.5847 45.2824 11.4766 44.9933 10.9714 44.1315C10.4663 43.2696 10.7554 42.1615 11.6172 41.6563C19.7391 36.8957 23.1722 29.5071 24.1554 22.0458C25.146 14.5282 23.6215 7.04745 21.9176 2.50301C21.5669 1.56764 22.0409 0.525072 22.9763 0.174375ZM13.6863 4.55285C14.6212 4.20077 15.6644 4.67319 16.0165 5.60804C17.3371 9.11454 18.5059 14.7898 17.7461 20.5739C16.9788 26.4151 14.2171 32.4732 7.58972 36.3439C6.72711 36.8477 5.61942 36.5569 5.11561 35.6943C4.61181 34.8316 4.90268 33.724 5.76528 33.2201C11.1997 30.0462 13.4997 25.1245 14.1594 20.1028C14.8265 15.0241 13.7875 9.95342 12.6311 6.88305C12.2791 5.9482 12.7515 4.90494 13.6863 4.55285ZM5.98194 9.98395C6.91511 9.62743 7.96061 10.0949 8.31713 11.0281C9.04252 12.9267 9.68491 15.9757 9.27813 19.104C8.86359 22.2919 7.3324 25.6623 3.63068 27.7995C2.76556 28.2989 1.65934 28.0025 1.15986 27.1374C0.660385 26.2723 0.956797 25.1661 1.82191 24.6666C4.32296 23.2226 5.38441 20.9938 5.6908 18.6375C6.00494 16.2217 5.49654 13.7815 4.93784 12.3191C4.58132 11.386 5.04878 10.3405 5.98194 9.98395Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[6px] font-normal md:text-[10px] text-white">
                          Credit Card No.
                        </div>
                        <div className="font-medium flex gap-3 text-[8px] md:text-[14px]">
                          <span>1682</span>
                          <span>8911</span>
                          <span>2819</span>
                          <span>2821</span>
                        </div>
                      </div>
                      <div className="w-full space-y-2 flex baseline">
                        <div className="w-full flex justify-between items-end">
                          <div className="space-y-2">
                            <div className="text-[6px] md:text-[10px]">
                              Name
                            </div>
                            <div className="font-normal md:text-[12px] text-[8px]">
                              REHAN RAIHAN
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-[6px] md:text-[10px]">
                              Exp.
                            </div>
                            <div className="font-normal md:text-[12px] text-[8px]">
                              09/11
                            </div>
                          </div>
                          <div className="flex gap-4 items-center">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 69 60"
                              className="transform rotate-[-15deg]   md:h-[24px] w-[20px] h-[20px]"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.8152 1.64886C12.044 0.794849 12.9218 0.288043 13.7758 0.516873L26.9195 4.03872C27.7735 4.26755 28.2803 5.14536 28.0515 5.99937L25.4128 15.8472C25.2529 16.4437 24.7644 16.895 24.1572 17.0071L16.7468 18.3757C16.2725 18.4633 15.7841 18.3324 15.4172 18.0194L9.68385 13.129C9.21406 12.7283 9.01662 12.0932 9.17643 11.4967L11.8152 1.64886Z"
                                fill="white"
                              />
                              <path
                                d="M36.5562 8.2782C36.7851 7.4242 37.6629 6.91739 38.5169 7.14622L42.3827 8.18206C43.2367 8.41089 43.7435 9.2887 43.5147 10.1427L42.686 13.2353C42.4572 14.0893 41.5793 14.5962 40.7253 14.3673L36.8595 13.3315C36.0055 13.1027 35.4987 12.2248 35.7276 11.3708L36.5562 8.2782Z"
                                fill="white"
                              />
                              <path
                                d="M52.0194 12.4215C52.2482 11.5675 53.126 11.0607 53.98 11.2896L67.1237 14.8114C67.9777 15.0402 68.4845 15.9181 68.2557 16.7721L65.7697 26.05C65.5409 26.904 64.6631 27.4108 63.8091 27.1819L50.6654 23.6601C49.8114 23.4313 49.3046 22.5535 49.5334 21.6994L52.0194 12.4215Z"
                                fill="white"
                              />
                              <path
                                d="M7.46465 17.8852C7.69348 17.0312 8.57129 16.5244 9.4253 16.7532L22.569 20.275C23.423 20.5039 23.9298 21.3817 23.701 22.2357L21.215 31.5136C20.9861 32.3676 20.1083 32.8744 19.2543 32.6456L6.11062 29.1237C5.25662 28.8949 4.74981 28.0171 4.97864 27.1631L7.46465 17.8852Z"
                                fill="white"
                              />
                              <path
                                d="M29.2241 17.0863C29.4529 16.2323 30.3307 15.7254 31.1848 15.9543L44.3284 19.4761C45.1825 19.705 45.6893 20.5828 45.4604 21.4368L39.6597 43.0852C39.4309 43.9392 38.5531 44.446 37.6991 44.2172L24.5554 40.6953C23.7014 40.4665 23.1946 39.5887 23.4234 38.7347L29.2241 17.0863Z"
                                fill="white"
                              />
                              <path
                                d="M47.6689 28.6579C47.8977 27.8039 48.7755 27.2971 49.6295 27.5259L62.7732 31.0477C63.6272 31.2766 64.134 32.1544 63.9052 33.0084L61.4192 42.2863C61.1904 43.1403 60.3126 43.6471 59.4586 43.4183L46.3149 39.8964C45.4609 39.6676 44.954 38.7898 45.1829 37.9358L47.6689 28.6579Z"
                                fill="white"
                              />
                              <path
                                d="M3.11414 34.1215C3.34297 33.2675 4.22078 32.7607 5.07479 32.9895L18.2185 36.5114C19.0725 36.7402 19.5793 37.618 19.3505 38.472L16.8645 47.7499C16.6356 48.6039 15.7578 49.1107 14.9038 48.8819L1.76011 45.3601C0.906106 45.1312 0.3993 44.2534 0.628131 43.3994L3.11414 34.1215Z"
                                fill="white"
                              />
                              <path
                                d="M26.1979 46.9361C26.4267 46.0821 27.3045 45.5753 28.1585 45.8041L32.0243 46.84C32.8783 47.0688 33.3851 47.9466 33.1563 48.8006L32.3276 51.8933C32.0988 52.7473 31.221 53.2541 30.367 53.0252L26.5012 51.9894C25.6472 51.7606 25.1404 50.8828 25.3692 50.0288L26.1979 46.9361Z"
                                fill="white"
                              />
                              <path
                                d="M43.4711 44.3242C43.6309 43.7278 44.1195 43.2765 44.7267 43.1643L52.1371 41.7958C52.6113 41.7082 53.0998 41.8391 53.4667 42.1521L59.2 47.0424C59.6698 47.4431 59.8672 48.0783 59.7074 48.6747L57.0687 58.5226C56.8399 59.3766 55.962 59.8834 55.108 59.6546L41.9643 56.1328C41.1103 55.9039 40.6035 55.0261 40.8324 54.1721L43.4711 44.3242Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Green Card */}
                <div className="absolute  left-0 top-0 w-[220px] md:w-[280px] z-20">
                  <div className="w-full green-learn aspect-[1.586/1] bg-[#2BB32A] rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative h-full p-4 flex flex-col justify-between text-black">
                      <div className="flex justify-between items-start">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 59 42"
                          className="transform rotate-[-15deg]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M25.9751 33.4585C30.143 31.2807 33.4208 27.4326 34.7339 22.5321C36.047 17.6315 35.1324 12.66 32.6117 8.69011C36.3425 6.74108 40.7883 6.13079 45.1749 7.30618C54.4621 9.79467 59.9737 19.3411 57.4852 28.6283C54.9967 37.9154 45.4503 43.4271 36.1632 40.9386C31.7765 39.7632 28.2315 37.0118 25.9751 33.4585ZM25.9751 33.4585C22.2442 35.4075 17.7985 36.0178 13.4118 34.8424C4.12468 32.3539 -1.38695 22.8075 1.10154 13.5203C3.59002 4.23314 13.1365 -1.2785 22.4236 1.20999C26.8102 2.38538 30.3552 5.13679 32.6117 8.69011C28.4438 10.8678 25.1659 14.716 23.8529 19.6165C22.5398 24.517 23.4544 29.4885 25.9751 33.4585Z"
                            fill="black"
                          />
                        </svg>

                        <svg
                          width="24"
                          height="24"
                          className="transform rotate-[-10deg]"
                          viewBox="0 0 29 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.9763 0.174375C23.9116 -0.176322 24.9542 0.297649 25.3049 1.23302C27.1722 6.21352 28.8252 14.2976 27.7419 22.5184C26.6512 30.7954 22.759 39.3188 13.4465 44.7773C12.5847 45.2824 11.4766 44.9933 10.9714 44.1315C10.4663 43.2696 10.7554 42.1615 11.6172 41.6563C19.7391 36.8957 23.1722 29.5071 24.1554 22.0458C25.146 14.5282 23.6215 7.04745 21.9176 2.50301C21.5669 1.56764 22.0409 0.525072 22.9763 0.174375ZM13.6863 4.55285C14.6212 4.20077 15.6644 4.67319 16.0165 5.60804C17.3371 9.11454 18.5059 14.7898 17.7461 20.5739C16.9788 26.4151 14.2171 32.4732 7.58972 36.3439C6.72711 36.8477 5.61942 36.5569 5.11561 35.6943C4.61181 34.8316 4.90268 33.724 5.76528 33.2201C11.1997 30.0462 13.4997 25.1245 14.1594 20.1028C14.8265 15.0241 13.7875 9.95342 12.6311 6.88305C12.2791 5.9482 12.7515 4.90494 13.6863 4.55285ZM5.98194 9.98395C6.91511 9.62743 7.96061 10.0949 8.31713 11.0281C9.04252 12.9267 9.68491 15.9757 9.27813 19.104C8.86359 22.2919 7.3324 25.6623 3.63068 27.7995C2.76556 28.2989 1.65934 28.0025 1.15986 27.1374C0.660385 26.2723 0.956797 25.1661 1.82191 24.6666C4.32296 23.2226 5.38441 20.9938 5.6908 18.6375C6.00494 16.2217 5.49654 13.7815 4.93784 12.3191C4.58132 11.386 5.04878 10.3405 5.98194 9.98395Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[6px] md:text-[10px]">
                          Credit Card No.
                        </div>
                        <div className="font-medium flex gap-3 text-[8px] md:text-[14px]">
                          <span>1682</span>
                          <span>8911</span>
                          <span>2819</span>
                          <span>2821</span>
                        </div>
                      </div>
                      <div className="w-full space-y-2 flex baseline">
                        <div className="w-full flex justify-between items-end">
                          <div className="space-y-2">
                            <div className="text-[6px] md:text-[10px] text-black/60">
                              Name
                            </div>
                            <div className="font-medium md:text-[12px] text-[8px]">
                              REHAN RAIHAN
                            </div>
                          </div>
                          <div className="md:space-y-2 space-y-1">
                            <div className="text-[6px] md:text-[10px] text-black/60">
                              Exp.
                            </div>
                            <div className="font-medium md:text-[12px] text-[8px]">
                              09/11
                            </div>
                          </div>
                          <div className="flex gap-4 items-center">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 69 60"
                              className="transform rotate-[-15deg]  md:h-[24px] w-[20px] h-[20px]"
                              fill="black"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.8152 1.64886C12.044 0.794849 12.9218 0.288043 13.7758 0.516873L26.9195 4.03872C27.7735 4.26755 28.2803 5.14536 28.0515 5.99937L25.4128 15.8472C25.2529 16.4437 24.7644 16.895 24.1572 17.0071L16.7468 18.3757C16.2725 18.4633 15.7841 18.3324 15.4172 18.0194L9.68385 13.129C9.21406 12.7283 9.01662 12.0932 9.17643 11.4967L11.8152 1.64886Z"
                                fill="black"
                              />
                              <path
                                d="M36.5562 8.2782C36.7851 7.4242 37.6629 6.91739 38.5169 7.14622L42.3827 8.18206C43.2367 8.41089 43.7435 9.2887 43.5147 10.1427L42.686 13.2353C42.4572 14.0893 41.5793 14.5962 40.7253 14.3673L36.8595 13.3315C36.0055 13.1027 35.4987 12.2248 35.7276 11.3708L36.5562 8.2782Z"
                                fill="black"
                              />
                              <path
                                d="M52.0194 12.4215C52.2482 11.5675 53.126 11.0607 53.98 11.2896L67.1237 14.8114C67.9777 15.0402 68.4845 15.9181 68.2557 16.7721L65.7697 26.05C65.5409 26.904 64.6631 27.4108 63.8091 27.1819L50.6654 23.6601C49.8114 23.4313 49.3046 22.5535 49.5334 21.6994L52.0194 12.4215Z"
                                fill="black"
                              />
                              <path
                                d="M7.46465 17.8852C7.69348 17.0312 8.57129 16.5244 9.4253 16.7532L22.569 20.275C23.423 20.5039 23.9298 21.3817 23.701 22.2357L21.215 31.5136C20.9861 32.3676 20.1083 32.8744 19.2543 32.6456L6.11062 29.1237C5.25662 28.8949 4.74981 28.0171 4.97864 27.1631L7.46465 17.8852Z"
                                fill="black"
                              />
                              <path
                                d="M29.2241 17.0863C29.4529 16.2323 30.3307 15.7254 31.1848 15.9543L44.3284 19.4761C45.1825 19.705 45.6893 20.5828 45.4604 21.4368L39.6597 43.0852C39.4309 43.9392 38.5531 44.446 37.6991 44.2172L24.5554 40.6953C23.7014 40.4665 23.1946 39.5887 23.4234 38.7347L29.2241 17.0863Z"
                                fill="black"
                              />
                              <path
                                d="M47.6689 28.6579C47.8977 27.8039 48.7755 27.2971 49.6295 27.5259L62.7732 31.0477C63.6272 31.2766 64.134 32.1544 63.9052 33.0084L61.4192 42.2863C61.1904 43.1403 60.3126 43.6471 59.4586 43.4183L46.3149 39.8964C45.4609 39.6676 44.954 38.7898 45.1829 37.9358L47.6689 28.6579Z"
                                fill="black"
                              />
                              <path
                                d="M3.11414 34.1215C3.34297 33.2675 4.22078 32.7607 5.07479 32.9895L18.2185 36.5114C19.0725 36.7402 19.5793 37.618 19.3505 38.472L16.8645 47.7499C16.6356 48.6039 15.7578 49.1107 14.9038 48.8819L1.76011 45.3601C0.906106 45.1312 0.3993 44.2534 0.628131 43.3994L3.11414 34.1215Z"
                                fill="black"
                              />
                              <path
                                d="M26.1979 46.9361C26.4267 46.0821 27.3045 45.5753 28.1585 45.8041L32.0243 46.84C32.8783 47.0688 33.3851 47.9466 33.1563 48.8006L32.3276 51.8933C32.0988 52.7473 31.221 53.2541 30.367 53.0252L26.5012 51.9894C25.6472 51.7606 25.1404 50.8828 25.3692 50.0288L26.1979 46.9361Z"
                                fill="black"
                              />
                              <path
                                d="M43.4711 44.3242C43.6309 43.7278 44.1195 43.2765 44.7267 43.1643L52.1371 41.7958C52.6113 41.7082 53.0998 41.8391 53.4667 42.1521L59.2 47.0424C59.6698 47.4431 59.8672 48.0783 59.7074 48.6747L57.0687 58.5226C56.8399 59.3766 55.962 59.8834 55.108 59.6546L41.9643 56.1328C41.1103 55.9039 40.6035 55.0261 40.8324 54.1721L43.4711 44.3242Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Stars */}
                <div className="absolute top-0 right-0 w-4 h-4 text-[#2BB32A]">
                  ★
                </div>
                <div className="absolute bottom-12 left-12 w-4 h-4 text-[#2BB32A]">
                  ★
                </div>
                <div className="absolute top-1/2 right-1/4 w-4 h-4 text-[#2BB32A]">
                  ★
                </div>
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Find the Perfect Credit Card for You{" "}
                </h2>
                <p className="text-gray-400 max-w-lg">
                  Discover your ideal credit card with ease. Our comprehensive
                  selection caters to every financial need and lifestyle.
                  Whether you seek cashback rewards, travel perks, or building
                  credit, we have the perfect credit card waiting for you.
                  Unleash the possibilities and find the credit card that fits
                  your unique goals and aspirations.{" "}
                </p>
                <button className="px-8 py-3 bg-[#2BB32A] rounded-full hover:bg-[#2BB32A]/90 transition-colors flex items-center gap-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}

        <TestimonialSection />

        {/* FAQs Section */}
        <FAQSection />

        <section id="card-learn" className="pt-10 overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Easy Way to manage your finances
                </h2>
                <p className="text-gray-400 max-w-lg">
                  Easy to use mobile app that support on android and ios.
                </p>
                <div className="flex gap-4">
                  <button className="px-4 py-3 rounded-[16px] bg-[#3D544D]/90 hover:bg-[#3D544D]/70 transition-colors duration-300 flex items-center gap-2">
                    <BsApple className="w-6 h-6" />
                    <div className="flex flex-col items-start">
                      <span className="text-[10px]">Download on the</span>
                      <span className="text-sm font-bold">App Store</span>
                    </div>
                  </button>
                  <button className="px-4 py-3 rounded-[16px] bg-[#3D544D]/90 hover:bg-[#3D544D]/70 transition-colors duration-300 flex items-center gap-2">
                    <BsGooglePlay className="w-6 h-6" />
                    <div className="flex flex-col items-start">
                      <span className="text-[10px]">Download on the</span>
                      <span className="text-sm font-bold">Google Play</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="relative w-full max-w-[484px] h-auto top-10">
                <img
                  src="/images/phones.webp"
                  alt="Phones"
                  className="w-full h-auto object-cover"
                  width={484}
                  height={484}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="transform bg-black/20 backdrop-blur-sm text-[#ADB2B1] py-12 relative overflow-hidden">
        <div className="container max-w-[1240px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo and description */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-5">
                <div className="w-[24px] h-[24px] relative">
                  <img
                    src="images/icon.svg"
                    alt="GreenBank"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-white text-[20px]">
                  GreenBank
                </span>
              </div>
              <p className="text-sm max-w-xs mt-4">
                Discover the power of our secure and rewarding credit cards
              </p>
            </div>

            {/* About us */}
            <div>
              <h3 className="text-white font-semibold mb-4">About us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    Investors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    Book a demo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    Credits Cards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    Savings accounts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    NFT
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    Free rewards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    Affiliate program
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-semibold mb-4">Social</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    License
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    Site Maps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ADB2B1] hover:text-green-500 transition duration-300"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 text-[#ADB2B1] pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="flex gap-2 items-center justify-center">
              <BiCopyright className="relative top-[1px]" />
              {new Date().getFullYear()} DoraDesign All Rights Reserved
            </p>
            <p className="mt-4 md:mt-0">
              This page uses cookies. See cookies details{" "}
              <a
                href="#"
                className="text-green-500 hover:underline transition duration-300"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </footer>
      {/* Contact Modal */}

      {isContactModalOpen && (
        <ContactForm setIsContactModalOpen={setIsContactModalOpen} />
      )}
    </div>
  );
}
