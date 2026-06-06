import { notFound } from "next/navigation";

import { ServiceDetailContent } from "../../components/ServiceDetailContent";
import { serviceCards } from "../../components/servicesData";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return serviceCards
		.filter((service) => service.slug !== "fullstack-seo")
		.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
	const { slug } = await params;
	const service = serviceCards.find((item) => item.slug === slug);

	if (!service) {
		notFound();
	}

	return (
		<main className="service-detail">
			<section className="service-detail__shell">
				<header className="service-detail__header">
					<p className="service-detail__kicker">Service Detail</p>
					<h1 className="service-detail__title">{service.title}</h1>
				</header>

				<ServiceDetailContent service={service} />
			</section>
		</main>
	);
}
