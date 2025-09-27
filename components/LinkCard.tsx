
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from './icons';

interface LinkCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ href, icon, title, subtitle, className = '' }) => {
  const defaultClasses = "bg-white/95 text-gray-900 backdrop-blur-sm border-white/20 shadow-[0_10px_30px_rgba(2,6,23,0.1)] hover:shadow-[0_18px_44px_rgba(2,6,23,0.15),0_0_32px_-8px_rgba(109,40,217,0.5)] focus-visible:ring-violet-500/50";
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      className={`shine-on-hover flex items-center p-4 w-full rounded-2xl border transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-4 ${className || defaultClasses}`}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <div className="flex items-center justify-center h-10 w-10 mr-4 text-current/90">
        {icon}
      </div>
      <div className="flex-grow text-left">
          <span className="font-semibold text-current leading-tight">{title}</span>
          {subtitle && <span className="text-sm text-current/80 block leading-tight">{subtitle}</span>}
      </div>
      <ChevronRight className="h-5 w-5 text-current/70 ml-4 flex-shrink-0" />
    </motion.a>
  );
};

export default LinkCard;