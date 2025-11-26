'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/data/personalProjectsData'; // Assuming Project interface is consistent

const getBaseRoute = (type: string) => {
    if (type.includes('work')) return 'work';
    if (type.includes('personal')) return 'personal';
    return type;
};

export default function ProjectDetail({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="mb-8">
                <Link href={`/${getBaseRoute(project.type)}/`}>
                    <span className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline group cursor-pointer">
                        <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back
                    </span>
                </Link>
            </div>
            <div className="bg-white dark:bg-slate-800/50 rounded-lg shadow-2xl w-full max-w-7xl mx-auto flex flex-col border border-slate-200 dark:border-slate-700">
                <header className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-700">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">{project.title}</h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">{project.description}</p>
                </header>
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/3 p-6 sm:p-8">
                        <div className="space-y-6">
                            {project.details.images.map((imageName, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <Image
                                        src={`/images/${project.slug}/${imageName}`}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        width={1200}
                                        height={800}
                                        className="rounded-lg w-full h-auto shadow-lg border border-slate-200 dark:border-slate-700 bg-white"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/3 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                        <div className="sticky top-24">
                            {project.details.techNotes.map(note => (
                                <div key={note.title} className="mb-8">
                                    <h4 className="font-semibold text-xl text-gray-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">{note.title}</h4>
                                    <ul className="space-y-2">
                                        {note.stack.map((tech, index) => (
                                            <li key={index} className="bg-slate-100 dark:bg-slate-700/50 p-3 rounded-md text-sm text-slate-700 dark:text-slate-300">{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}