import React, { useRef, useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { PORTFOLIO_DATA } from './constants';
import LinkCard from './components/LinkCard';
import ShowcaseCard from './components/ShowcaseCard';
import AIToolkit from './components/AIToolkit';
import {
  TikTokIcon,
  Youtube,
  Mail,
  SkoolIcon,
  Globe,
  ChevronLeft,
  ChevronRight,
} from './components/icons';
import type { ResourceLink } from './types';

const { name, subtitle, tagline, avatarUrl, socials, community, resources, copyright, showcase, aiTools } = PORTFOLIO_DATA;

// Header Component
const HeaderCard: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className="flex flex-col items-center text-center pt-8"
  >
    <motion.div
      initial={{ scale: 0.94, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.2 }}
      className="relative"
    >
      <img
        src={avatarUrl}
        alt="Avatar"
        className="w-24 h-24 rounded-full object-cover ring-4 ring-violet-500 ring-offset-8 ring-offset-[#2d3036] shadow-lg"
      />
    </motion.div>
    <h1 className="text-3xl font-bold text-gray-50 mt-6">{name}</h1>
    <h2 className="text-lg text-gray-400">{subtitle}</h2>

    <div className="flex items-center space-x-5 mt-6">
      {Object.entries(socials).map(([key, href]) => {
        const icons: { [key: string]: React.ReactNode } = {
          tiktok: <TikTokIcon className="w-[22px] h-[22px]" />,
          youtube: <Youtube size={22} />,
        };
        const hoverColors: { [key: string]: string } = {
            tiktok: 'hover:text-white',
            youtube: 'hover:text-[#FF0000]',
        };
        return (
          <motion.a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={key}
            className={`text-gray-400 ${hoverColors[key]} transition-colors`}
            whileHover={{ y: -3, scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            {icons[key]}
          </motion.a>
        );
      })}
       {resources.map(resource => (
          <motion.a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={resource.name}
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -3, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
              {resource.icon === 'Globe' && <Globe size={22} />}
              {resource.icon === 'Mail' && <Mail size={22} />}
              {resource.icon === 'Skool' && <SkoolIcon className="w-[22px] h-[22px]" />}
          </motion.a>
      ))}
    </div>
  </motion.div>
);


const App: React.FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15 + 0.2,
        duration: 0.5,
        ease: 'easeOut'
      },
    }),
  };

  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };
  
  useEffect(() => {
      const carouselElement = carouselRef.current;
      if (carouselElement) {
        checkScrollButtons();
        carouselElement.addEventListener('scroll', checkScrollButtons);
        window.addEventListener('resize', checkScrollButtons);

        return () => {
            carouselElement.removeEventListener('scroll', checkScrollButtons);
            window.removeEventListener('resize', checkScrollButtons);
        };
      }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[0] as HTMLElement;
      if (!card) return;
      const scrollAmount = card.offsetWidth + 24; // gap-6 = 1.5rem = 24px
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  return (
    <div className="bg-transparent min-h-screen font-sans text-gray-200 flex flex-col items-center p-4 sm:p-6 md:p-8 selection:bg-violet-500/30">
      <div className="w-full max-w-7xl mx-auto flex flex-col flex-grow">
        <header className="w-full">
            <HeaderCard />
        </header>

        <main className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-16 gap-y-10">
            <motion.section 
                className="space-y-4 text-center"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">{tagline}</p>
                <div className="pt-2 grid gap-4 max-w-sm mx-auto">
                    <LinkCard href={resources[0].url} icon={<Globe size={24} />} title="Website tổng hợp AI Tools" />
                    <LinkCard 
                        href={community.url} 
                        icon={<SkoolIcon className="w-6 h-6" />} 
                        title={community.name}
                        className="bg-gradient-to-br from-violet-500 to-purple-600 text-white border-transparent hover:saturate-150 animate-pulse-glow"
                    />
                </div>
            </motion.section>

            <motion.section 
                className="space-y-4"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                custom={1}
            >
                <h3 className="text-lg font-semibold text-gray-300 text-center tracking-wider uppercase">Mạng xã hội</h3>
                <div className="space-y-3 max-w-sm mx-auto">
                    <LinkCard href={socials.tiktok} icon={<TikTokIcon className="w-6 h-6"/>} title="TikTok" className="bg-black text-white border-gray-700 hover:bg-gray-800"/>
                    <LinkCard href={socials.youtube} icon={<Youtube size={24} />} title="YouTube" className="bg-[#FF0000] text-white border-transparent hover:brightness-110"/>
                </div>
            </motion.section>
        </main>
        
        {aiTools && aiTools.length > 0 && (
            <motion.section 
                className="w-full mt-16"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                custom={2}
            >
                <AIToolkit tools={aiTools} />
            </motion.section>
        )}

        {showcase && showcase.length > 0 && (
            <motion.section 
                className="w-full mt-16"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                custom={3}
            >
                <h3 className="text-xl font-bold text-gray-200 text-center tracking-wider uppercase mb-8">Ứng dụng</h3>
                <div className="carousel-container">
                    <div ref={carouselRef} className="scrolling-wrapper gap-6">
                        {showcase.map((item, index) => (
                            <ShowcaseCard key={`${item.title}-${index}`} item={item} />
                        ))}
                    </div>
                </div>
                 <div className="flex justify-center items-center mt-8 gap-4">
                    <button
                        onClick={() => handleScroll('left')}
                        aria-label="Previous showcase item"
                        disabled={!canScrollLeft}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={() => handleScroll('right')}
                        aria-label="Next showcase item"
                        disabled={!canScrollRight}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </motion.section>
        )}

      </div>

      <footer className="w-full text-center p-4 mt-8">
        <p className="text-sm text-gray-400">{copyright}</p>
      </footer>
    </div>
  );
};

export default App;