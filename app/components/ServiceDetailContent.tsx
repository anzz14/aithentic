"use client";

import { useState } from "react";

import { AuditModal } from "./AuditModal";
import { ServiceInquiryModal } from "./ServiceInquiryModal";
import type { ServiceCard } from "./servicesData";

type ServiceDetailContentProps = {
  service: ServiceCard;
};

const SEO_SERVICE_SLUGS = new Set([
  "fullstack-seo",
  "ai-so",
  "content-seo",
]);

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isServiceInquiryOpen, setIsServiceInquiryOpen] = useState(false);

  const handleOpenCta = () => {
    if (SEO_SERVICE_SLUGS.has(service.slug)) {
      setIsAuditOpen(true);
      return;
    }

    setIsServiceInquiryOpen(true);
  };

  return (
    <>
      <article className="service-detail__card">
        <h2 className="service-detail__label">Content</h2>
        <p className="service-detail__content">{service.detail.content}</p>

        <h2 className="service-detail__label">Features</h2>
        <ul className="service-detail__features">
          {service.detail.features.map((feature) => (
            <li key={feature} className="service-detail__feature">
              <span className="service-detail__dot" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <h2 className="service-detail__label">CTA</h2>
        <button className="service-detail__cta" type="button" onClick={handleOpenCta}>
          {"-> "}
          {service.detail.cta}
        </button>
      </article>

      <AuditModal
        open={isAuditOpen}
        heading={`${service.title} Inquiry`}
        initialHelpWith={[service.title]}
        onClose={() => setIsAuditOpen(false)}
      />

      <ServiceInquiryModal
        open={isServiceInquiryOpen}
        serviceTitle={service.title}
        onClose={() => setIsServiceInquiryOpen(false)}
      />
    </>
  );
}
