import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

export function ProjectCard({ title, description, image, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="project-card"
    >
      <img 
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=600';
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-secondary"
        >
          View Project <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
}