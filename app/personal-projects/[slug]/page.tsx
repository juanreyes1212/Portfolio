import React from 'react';
import ProjectDetail from '@/components/ProjectDetail';
import { personalProjectsData } from '@/data/personalProjectsData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return personalProjectsData.map((project) => ({
        slug: project.slug,
    }));
}

export default function personalProjectsPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    // Find the project data based on the slug from the URL
    const project = personalProjectsData.find(p => p.slug === slug);

    if (!project) {
        notFound(); // 404 page
    }

    return <ProjectDetail project={project} />;
}