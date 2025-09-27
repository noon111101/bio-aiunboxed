import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AITool, AIToolCategory } from '../types';

interface AIToolkitProps {
  tools: AITool[];
}

const categories: (AIToolCategory | 'All')[] = ['All', 'Image', 'Video', 'Audio', 'Automation', 'Assistant'];

const ToolCard: React.FC<{ tool: AITool }> = ({ tool }) => (
  <motion.a
    href={tool.link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={tool.name}
    className="flex flex-col items-center justify-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-violet-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    whileHover={{ y: -5, scale: 1.05 }}
  >
    <img src={tool.iconUrl} alt={`${tool.name} logo`} className="w-16 h-16 rounded-xl object-contain bg-white p-1 shadow-md" />
    <h4 className="font-medium text-gray-100 text-center truncate w-full px-1">{tool.name}</h4>
  </motion.a>
);

const AIToolkit: React.FC<AIToolkitProps> = ({ tools }) => {
  const [activeTab, setActiveTab] = useState<AIToolCategory | 'All'>('All');

  const filteredTools = activeTab === 'All'
    ? tools
    : tools.filter(tool => tool.category.includes(activeTab as AIToolCategory));

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-gray-200 text-center tracking-wider uppercase mb-8">Các công cụ sử dụng</h3>
      <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`relative px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
              activeTab === category ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {activeTab === category && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-violet-600 rounded-full"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>
      
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <AnimatePresence>
          {filteredTools.map(tool => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AIToolkit;