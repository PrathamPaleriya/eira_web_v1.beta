import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#111111] text-[#F5F5F7] px-6 text-center">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[#3E9EDA] rounded-full blur-[100px] -translate-y-[50%] opacity-40 pointer-events-none"></div>

            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-8xl md:text-9xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
            >
                404
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl font-light text-gray-300 mb-10 max-w-md"
            >
                The page you are looking for doesn't exist or has been moved.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                <Link
                    to="/"
                    className="bg-white text-[#111111] px-8 py-3 rounded-full text-base font-semibold hover:bg-gray-200 transition-colors duration-300"
                >
                    Return Home
                </Link>
            </motion.div>
        </div>
    )
}

export default NotFound
