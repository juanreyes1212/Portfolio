'use client'; // This component now uses Framer Motion, so it's a client component

import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

export default function ProjectList({ projectGroups }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.07
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {projectGroups.map(group => (
                // ex: /professional-work/hownd
                <Link href={`/${group.type}/${group.slug}`} key={group.id} passHref>
                    <ProjectCard group={group} />
                </Link>
            ))}
        </motion.div>
    );
}