import React from 'react';
import ProjectDetail from '@/components/ProjectDetail';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const { slug } = params; 

    // Find the project data based on the slug from the URL
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        notFound(); // 404 page
    }

    return <ProjectDetail project={project} />;
}