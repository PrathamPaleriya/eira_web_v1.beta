import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingAudio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Initialize audio object once
    useEffect(() => {
        audioRef.current = new Audio('https://ik.imagekit.io/16hfka0vz/eira_onboarding.mp3');

        // Handle audio ending
        const handleEnded = () => setIsPlaying(false);
        audioRef.current.addEventListener('ended', handleEnded);

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.removeEventListener('ended', handleEnded);
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-[100]">
            {/* 1. Magical Glow Background (Backdrop) - Only when playing */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <AnimatePresence>
                    {isPlaying && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: [0.3, 0.5, 0.3],
                                scale: [1.0, 1.2, 1.0],
                                rotate: [0, 90, 180, 270, 360]
                            }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{
                                opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                            }}
                            className="w-32 h-32 md:w-56 md:h-56 bg-linear-to-tr from-purple-500/30 via-pink-500/20 to-blue-500/30 rounded-full blur-3xl"
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* 2. Expanding Ripple Rings (Sound Waves) - Only when playing */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                {isPlaying && (
                    <>
                        <motion.div
                            className="absolute w-full h-full rounded-full border border-[#726DC5]/30"
                            initial={{ scale: 1, opacity: 0.8 }}
                            animate={{ scale: 1.4, opacity: 0 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.div
                            className="absolute w-full h-full rounded-full border border-[#A29EE3]/20"
                            initial={{ scale: 1, opacity: 0.6 }}
                            animate={{ scale: 1.8, opacity: 0 }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                        />
                    </>
                )}
            </div>


            {/* 3. Sparkles (Floating Stars) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <AnimatePresence>
                    {isPlaying && [0, 1, 2, 3, 4, 5].map((i) => (
                        <motion.svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="absolute w-2 h-2 md:w-3 md:h-3 text-[#EAD4FF]"
                            style={{
                                top: `${Math.random() * 40 - 20}%`,
                                left: `${Math.random() * 120 - 10}%`
                            }}
                            initial={{ opacity: 0, y: 10, scale: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                y: -40 - (Math.random() * 30),
                                scale: [0, Math.random() + 0.5, 0],
                                rotate: [0, 45, 90]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeOut"
                            }}
                        >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </motion.svg>
                    ))}
                </AnimatePresence>
            </div>

            {/* Button Content */}
            <motion.button
                onClick={togglePlay}
                className="relative z-10 flex items-center gap-2.5 md:gap-4 pl-2 pr-4 py-2 md:pl-4 md:pr-8 md:py-4 rounded-full group cursor-pointer border border-white/30 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                    opacity: 1,
                    y: [0, -4, 0],
                    // Pulse shadow when NOT playing to attract attention
                    boxShadow: isPlaying
                        ? "0 20px 50px -10px rgba(114, 109, 197, 0.3)"
                        : [
                            "0 10px 30px -5px rgba(114, 109, 197, 0.1)", // Low
                            "0 10px 30px -5px rgba(114, 109, 197, 0.3)", // High
                            "0 10px 30px -5px rgba(114, 109, 197, 0.1)"  // Low
                        ]
                }}
                transition={{
                    opacity: { duration: 1, delay: 1.5 },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" } // Slow pulse
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Premium Glass Background */}
                <div className={`absolute inset-0 transition-all duration-500 rounded-full ${isPlaying ? 'bg-white/95' : 'bg-white/85 hover:bg-white/95'} backdrop-blur-2xl`}></div>

                {/* Icon Container */}
                <div className={`relative z-10 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white shrink-0 transition-all duration-500 ${isPlaying ? 'bg-linear-to-tr from-[#726DC5] to-[#A29EE3] shadow-lg scale-105' : 'bg-[#1a1a1a] group-hover:bg-[#726DC5]'}`}>
                    <AnimatePresence mode="wait">
                        {isPlaying ? (
                            <motion.div
                                key="pause"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5 md:w-5 md:h-5">
                                    <rect x="6" y="4" width="4" height="16" rx="1" />
                                    <rect x="14" y="4" width="4" height="16" rx="1" />
                                </svg>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="play"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="ml-0.5"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 md:w-5 md:h-5">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 0 1 0 1.971l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" clipRule="evenodd" />
                                </svg>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Text */}
                <div className="relative z-10 flex flex-col items-start leading-none gap-0.5 md:gap-1">
                    <span className="font-serif text-[#1a1a1a] text-base md:text-xl tracking-wide">Meet Eira</span>
                    <span className={`font-sans text-[8px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold transition-colors duration-300 ${isPlaying ? 'text-[#726DC5]' : 'text-gray-400 group-hover:text-[#726DC5]'}`}>
                        Click to Listen
                    </span>
                </div>
            </motion.button>
        </div>
    );
};

export default FloatingAudio;
