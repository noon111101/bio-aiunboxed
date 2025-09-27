
import React from 'react';
import { motion } from 'framer-motion';
import type { ShowcaseItem } from '../types';

interface ShowcaseCardProps {
  item: ShowcaseItem;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ item }) => {
  const { title, imageUrl } = item;

  return (
    <motion.div
      className="relative w-[90vw] sm:w-[28rem] md:w-[32rem] aspect-[1460/752] flex-shrink-0 rounded-3xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <a href="https://www.skool.com/ai-unboxed-1490" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <h4 className="absolute bottom-0 left-0 right-0 p-6 font-bold text-base md:text-lg text-white z-10 truncate transition-all duration-300 ease-out transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          {title}
        </h4>
      </a>
    </motion.div>
  );
};

export default ShowcaseCard;