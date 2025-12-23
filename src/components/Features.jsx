import React from 'react';
import { motion } from 'framer-motion';
import supportBg from '../assets/support_bg.png';
import feature1 from '../assets/feature_section_1/eira-section1.1.png';
import feature2 from '../assets/feature_section_1/eira-section1.2.png';
import feature3 from '../assets/feature_section_1/eira-section1.3.png';

const Features = () => {
  return (
    <section className="py-12 md:py-20 px-3 md:px-10 max-w-6xl mx-auto">
       <div className="text-center">
          <h3 className="font-serif text-3xl md:text-4xl text-indigo-950">That's where Eira comes in.</h3>
       </div>
      
       {/* Feature 1: Talk freely */}
       <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-10 relative isolate my-32 md:my-42 lg:my-56">
          {/* Image Side (Left) */}
          <div className="flex-1 flex justify-center md:justify-end">
             <div className="relative w-full max-w-[470px]">
                 {/* Stronger Green Glow - Centered behind image */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#b0ebc3] rounded-full blur-[130px] -z-10 opacity-80"></div>
                 
                 {/* Image */}
                 <img src={feature1} alt="Talk freely UI" className="w-full h-auto relative z-10 " />
             </div>
          </div>

          {/* Text Side (Right) */}
          <div className="flex-1 text-center md:text-left md:pl-20">
             <span className="inline-block px-4 py-1.5 bg-[#E6F3EA] text-[#2D5B39] rounded-full text-xs font-bold tracking-wider uppercase mb-6">
               Talk to Eira
             </span>
             <h4 className="font-bold text-3xl md:text-5xl mb-6 text-indigo-950 leading-tight">
               Talk freely, in your own <br/> words.
             </h4>
             <p className="font-sans text-gray-500 text-lg leading-relaxed max-w-md mx-auto md:mx-0 ">
               Eira listens without judging and helps you open up at your own pace.
             </p>
          </div>
       </div>

       {/* Feature 2: Eira remembers */}
       <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-10 relative isolate my-32 md:my-42 lg:my-56">
          {/* Image Side (Right) */}
          <div className="flex-1 flex justify-center md:justify-start">
             <div className="relative w-full max-w-[480px]">
                 {/* Stronger Blue Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#d3dffc] rounded-full blur-[130px] -z-10 opacity-80"></div>
                 
                 {/* Image */}
                  <img src={feature2} alt="Eira remembers UI" className="w-full h-auto relative z-10" />
             </div>
          </div>

          {/* Text Side (Left) */}
          <div className="flex-1 text-center md:text-left md:pl-8">
             <span className="inline-block px-4 py-1.5 bg-[#E6F0FF] text-[#2B4B80] rounded-full text-xs font-bold tracking-wider uppercase mb-6">
               Advance Memory
             </span>
             <h4 className="font-bold text-3xl md:text-5xl mb-6 text-indigo-950 leading-tight">
               Eira remembers what <br/> matters
             </h4>
             <p className="font-sans text-gray-500 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
               Eira remembers important things from your conversations and follows up, so you don't have to start from zero every time.
             </p>
          </div>
       </div>

       {/* Feature 3: Make sense of mood */}
       <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-10 relative my-32 md:my-42 lg:my-56 isolate">
          {/* Image Side (Left) */}
          <div className="flex-1 flex justify-center md:justify-end">
             <div className="relative w-full max-w-[400px]">
                 {/* Stronger Pink Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#ffd4d4] rounded-full blur-[120px] -z-10 opacity-80"></div>
                 
                 {/* Image */}
                 <img src={feature3} alt="Mood report UI" className="w-full h-auto relative z-10" />
             </div>
          </div>

          {/* Text Side (Right) */}
          <div className="flex-1 text-center md:text-left md:pl-20 ">
             <span className="inline-block px-4 py-1.5 bg-[#FFE6E6] text-[#802B2B] rounded-full text-xs font-bold tracking-wider uppercase mb-6">
               Mood Reports
             </span>
             <h4 className="font-bold text-3xl md:text-5xl mb-6 text-indigo-950 leading-tight">
               Make sense of your <br/> mood
             </h4>
             <p className="font-sans text-gray-500 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
               Over time, Eira helps you understand patterns in your thoughts and emotions, giving you clearer insight into what's going on.
             </p>
          </div>
       </div>


       {/* Feature 4: Coming Soon (Right Support) */}
       <div className="py-24 md:py-48  relative isolate flex flex-col items-center text-center overflow-hidden w-full ">
            {/* Subtle Yellow Blur Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FFF9C4] rounded-full blur-[120px] -z-10 opacity-60"></div>

            {/* Abstract Illustration Background - WIDER */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] -z-10 opacity-30 pointer-events-none mix-blend-multiply">
               <img src={supportBg} alt="" className="w-full h-full object-contain" />
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 bg-[#FFF59D] text-[#8D7B00] rounded-full text-sm font-medium tracking-wide lowercase mb-8">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
               </svg>
               coming soon
            </div>

            <div className="relative inline-block mb-6">
               {/* Solid Color Text with Subtle Entry Animation */}
               <motion.h4 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="font-bold text-3xl md:text-6xl text-indigo-950"
               >
                  Get the right support
               </motion.h4>
            </div>
            
            {/* Wider Paragraph */}
            <p className="font-sans text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
               When you need more than conversation, Eira helps you connect with the right professional, with context already in place.
            </p>
       </div>
    </section>
  );
};

export default Features;
