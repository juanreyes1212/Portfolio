import React from 'react';
import ProjectDetail from '@/components/ProjectDetail';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

// This function tells Next.js which pages to build
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const { slug } = React.use(params); //@TODO: params should be awaited before using this, come back and iterate

    // Find the project data based on the slug from the URL
    const project = projects.find(p => p.slug === slug);

    // If no project is found, show a 404 page
    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}