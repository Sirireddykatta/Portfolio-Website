import { motion } from 'framer-motion';

interface SkillCardProps {
  skill: string;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="skill-card"
    >
      <h3 className="text-lg font-semibold text-light">{skill}</h3>
    </motion.div>
  );
}