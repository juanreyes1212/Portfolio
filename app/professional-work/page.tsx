// app/professional-work/page.tsx
import ProjectList from '@/components/ProjectList';
import { projects } from '@/data/projects';

export default function ProfessionalWorkPage() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
                Professional Work
            </h1>
            <ProjectList projectGroups={projects} />
        </div>
    );
}