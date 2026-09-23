import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ServicePage } from "@/components/landing/ServicePage";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return { title: `${service.name} | Eleva`, description: service.description };
}

export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <><ScrollToTop /><ServicePage service={service} /></>;
}
