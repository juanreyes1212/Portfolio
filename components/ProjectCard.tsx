import Image from 'next/image';
import { Project } from '@/data/personalProjectsData'; // Assuming Project interface is consistent

export default function ProjectCard({ group }: { group: Project }) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 h-full">
            <div className="relative h-56 w-full">
                {group.coverImage ? (
                    <Image src={group.coverImage} alt={group.title} layout="fill" objectFit="cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-500">
                        <span>No Preview</span>
                    </div>
                )}
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{group.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow line-clamp-3">{group.description}</p>
            </div>
        </div>
    );
}