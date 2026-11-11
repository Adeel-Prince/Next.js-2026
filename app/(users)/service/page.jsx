"use client";

import Image from "next/image";
import style from "./service.module.css";
import { easeInOut, motion } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

// Variants: define animation styles once
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const Services = () => {
  const cardRef = useRef();
  const hoverTween = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = cardRef.current;

      if (!element) return;

      // set
      gsap.set(element, {
        opacity: 0,
        y: 50,
        scale: 1,
      });
      // to
      gsap.to(element, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;

    if (hoverTween.current) {
      hoverTween.current.kill();
    }

    hoverTween.current = gsap.to(cardRef.current, {
      duration: 0.3,
      y: -50,
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    // Kill any existing hover animation
    if (hoverTween.current) {
      hoverTween.current.kill();
    }

    hoverTween.current = gsap.to(cardRef.current, {
      duration: 0.3,
      y: 0,
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      ease: "power2.in",
    });
  };

  return (
    <section className="font-roboto">
      <h1 className={style.common_heading}></h1>

      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-200">
          Our Team
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {/* <!-- Team Member 1 --> */}

          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white rounded-lg shadow-md p-6 "
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <Image
                src="/adeel.png"
                width={500}
                height={500}
                alt="adeel"
                className="w-full h-full rounded-full"
              />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.6 }}
              className="text-lg font-semibold text-center text-gray-800"
            >
              Adeel Ahmad
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.8 }}
            >
              <p className="text-sm text-gray-600 text-center mt-2">
                Full-Stack Developer
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 1 }}
              className="text-xs text-gray-500 text-center mt-1"
            >
              Node.js & JavaScript
            </motion.p>
          </motion.div>

          {/* <!-- Team Member 2 --> */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white rounded-lg shadow-md p-6 "
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <Image
                src="/member2.webp"
                width={500}
                height={500}
                alt="member2"
                className="w-full h-full rounded-full"
              />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.6 }}
              className="text-lg font-semibold text-center text-gray-800"
            >
              Olivia
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.8 }}
            >
              <p className="text-sm text-gray-600 text-center mt-2">
                Project Manager
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 1 }}
              className="text-xs text-gray-500 text-center mt-1"
            >
              Agile & Scrum
            </motion.p>
          </motion.div>

          {/* <!-- Team Member 3 --> */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white rounded-lg shadow-md p-6 "
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <Image
                src="/member3.avif"
                width={500}
                height={500}
                alt="member3"
                className="w-full h-full rounded-full"
              />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.6 }}
              className="text-lg font-semibold text-center text-gray-800"
            >
              Mike Johnson
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.8 }}
            >
              <p className="text-sm text-gray-600 text-center mt-2">
                Backend Developer
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 1 }}
              className="text-xs text-gray-500 text-center mt-1"
            >
              Node.js & Python
            </motion.p>
          </motion.div>

          {/* <!-- Team Member 4 --> */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white rounded-lg shadow-md p-6 "
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <Image
                src="/member4.jpg"
                width={500}
                height={500}
                alt="member4"
                className="w-full h-full rounded-full"
              />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.6 }}
              className="text-lg font-semibold text-center text-gray-800"
            >
              Emily Wilson
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.8 }}
            >
              <p className="text-sm text-gray-600 text-center mt-2">
                Product Manager
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 1 }}
              className="text-xs text-gray-500 text-center mt-1"
            >
              Strategy & Analytics
            </motion.p>
          </motion.div>

          {/* <!-- Team Member 5 --> */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white rounded-lg shadow-md p-6 "
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <Image
                src="/member6.jfif"
                width={500}
                height={500}
                alt="member6"
                className="w-full h-full rounded-full"
              />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.6 }}
              className="text-lg font-semibold text-center text-gray-800"
            >
              David Lee
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.8 }}
            >
              <p className="text-sm text-gray-600 text-center mt-2">
                DevOps Engineer
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 1 }}
              className="text-xs text-gray-500 text-center mt-1"
            >
              AWS & Docker
            </motion.p>
          </motion.div>

          {/* <!-- Team Member 6 --> */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white rounded-lg shadow-md p-6 "
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <Image
                src="/member5.jfif"
                width={500}
                height={500}
                alt="member5"
                className="w-full h-full rounded-full"
              />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.6 }}
              className="text-lg font-semibold text-center text-gray-800"
            >
              Anna Brown
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.8 }}
            >
              <p className="text-sm text-gray-600 text-center mt-2">
                QA Engineer
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 1 }}
              className="text-xs text-gray-500 text-center mt-1"
            >
              Testing & Automation
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Services;
