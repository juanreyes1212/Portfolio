// app/professional-work/page.tsx
import ProjectList from '@/components/ProjectList';
import { projects } from '@/data/projects';

export default function ProfessionalWorkPage() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
                Work
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-3xl"></p>
            <ProjectList projectGroups={projects} />
        </div>
    );
}