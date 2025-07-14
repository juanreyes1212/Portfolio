import React from 'react';
//TODO: add type checks during prop adding, fix imports
const ProjectDetail = ({ project, onNavigateHome }) => {
            useEffect(() => {
                if (window.anime) {
                    const tl = anime.timeline({
                        easing: 'easeOutExpo',
                        duration: 600
                    });
                    tl.add({
                        targets: '.project-detail-container',
                        opacity: [0, 1],
                        translateY: [20, 0]
                    }).add({
                        targets: '.project-image',
                        opacity: [0, 1],
                        translateY: [20, 0],
                        delay: anime.stagger(100)
                    }, '-=400');
                }
            }, [project]);

            // TODO: double-check if needed vs one from project data
            // const parseTechNotes = (noteHtml) => {
            //     if (!noteHtml) return [];
            //     const cleanHtml = noteHtml.replace(/\\n/g, ' ').replace(/<br \/>/g, ' ');
            //     const tempDiv = document.createElement('div');
            //     tempDiv.innerHTML = cleanHtml;
            //     return Array.from(tempDiv.querySelectorAll('li, p'))
            //         .map(el => el.textContent.trim().replace(/,/g, ''))
            //         .filter(text => text);
            // };

            return (
                <div className="project-detail-container animate-in">
                    <div className="mb-8">
                        <a href="#/professional-work" onClick={onNavigateHome} className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline group">
                            <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                            Back to Professional Work
                        </a>
                    </div>
                    <div className="bg-white dark:bg-slate-800/50 rounded-lg shadow-2xl w-full max-w-7xl mx-auto flex flex-col border border-slate-200 dark:border-slate-700">
                        <header className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-700">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">{project.title}</h2>
                            <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">{project.description}</p>
                        </header>
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-2/3 p-6 sm:p-8">
                                <div className="space-y-6">
                                    {project.images.map(item => (
                                        <img key={item.id} src={'./files/items/' + item.safeClientFilename} alt={item.title} className="project-image rounded-lg w-full shadow-lg border border-slate-200 dark:border-slate-700" />
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/3 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                                <div className="sticky top-24">
                                    {project.techNotes.map(note => (
                                        <div key={note.id} className="mb-8">
                                            <h4 className="font-semibold text-xl text-gray-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">{note.title}</h4>
                                            <ul className="space-y-2">
                                                {parseTechNotes(note.metaData.note).map((tech, index) => (
                                                    <li key={index} className="bg-slate-100 dark:bg-slate-700/50 p-3 rounded-md text-sm text-slate-700 dark:text-slate-300">{tech}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

export default ProjectDetail;