import React from 'react';
import ProjectDetail from '@/components/ProjectDetail';
import { professionalWorkData } from '@/data/professionalWorkData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return professionalWorkData.map((project) => ({
        slug: project.slug,
    }));
}

export default function professionalWorkPage({ params }: { params: { slug: string } }) {
    const { slug } = params; 

    // Find the project data based on the slug from the URL
    const project = professionalWorkData.find(p => p.slug === slug);

    if (!project) {
        notFound(); // 404 page
    }

    return <ProjectDetail project={project} />;
}