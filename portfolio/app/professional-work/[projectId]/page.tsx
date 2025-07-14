// app/professional-work/[projectId]/page.tsx
import ProjectDetail from '../../../components/ProjectDetail';
import { projects } from '../../../data/projects';

// This function helps Next.js know which project IDs exist at build time
// TODO: update to new data points

export async function generateStaticParams() {
  return projects.groups.map((group) => ({
    projectId: group.id.toString(),
  }));
}

export default function ProjectPage({ params }) {
  const { projectId } = params;
  
  // Find the project data based on the ID from the URL
  const project = config.groups.find(g => g.id.toString() === projectId);
  const items = config.items.filter(item => item.groupID.toString() === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail project={project} items={items} />;
}