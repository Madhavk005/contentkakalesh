import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { CinematicPlayer } from "@/components/cinematic-player";

// This enables static generation for all project pages
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.slug);
  
  if (!project) return { title: "Not Found" };
  
  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <CinematicPlayer project={project} />;
}
