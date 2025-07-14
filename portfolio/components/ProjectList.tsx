//TODO: add type checks during prop adding, fix imports
import React from 'react';

const ProjectList = ({ projectGroups, onProjectSelect }) => {
            useEffect(() => {
                if (window.anime) {
                    anime({
                        targets: '.project-card',
                        translateY: [30, 0],
                        opacity: [0, 1],
                        delay: anime.stagger(100),
                        duration: 800,
                        easing: 'easeOutExpo',
                    });
                }
            }, []);
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectGroups.map(group => (
                        <div key={group.id} className="project-card animate-in" onClick={() => onProjectSelect(group.id)}>
                            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500">
                                <div className="h-56 w-full bg-slate-200 dark:bg-slate-700">
                                    {group.coverImage ? (
                                        <img src={group.coverImage} alt={group.title} className="w-full h-full object-cover object-top" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-500">
                                            <span>No Preview</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{group.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow line-clamp-3">{group.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        };
export default ProjectList;