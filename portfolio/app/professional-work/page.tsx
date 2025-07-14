// app/professional-work/page.tsx
import ProjectList from '../../components/ProjectList';
import { projects } from '../../data/projects';
//TODO: add remapped data variables

export default function ProfessionalWorkPage() {
  // You can add logic here to process the config data if needed
  const projectGroups = projects.groups.filter(g => g.title);
  
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Professional Work</h1>
      <ProjectList projectGroups={projectGroups} />
    </div>
  );