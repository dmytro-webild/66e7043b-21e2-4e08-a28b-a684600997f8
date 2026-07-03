import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Brand"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />

      <main className="flex-grow flex flex-col items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              Our Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our curated selection of premium items directly from our catalog.
            </p>
          </div>

          <div className="w-full rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
            <iframe
              className="w-full h-[800px] bg-transparent"
              src="https://airtable.com/embed/appXXXXXXXX/shrYYYYYYYY?backgroundColor=dark"
              title="Airtable Collection Embed"
            />
          </div>
        </div>
      </main>

      <FooterSimple
        brand="Brand"
        columns={[
          {
            title: "Shop",
            items: [
              { label: "Collection", href: "/shop" },
              { label: "New Arrivals", href: "/shop" },
            ],
          },
          {
            title: "Company",
            items: [
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ],
          },
        ]}
        copyright="© 2024 Brand Inc. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
        ]}
      />
    </div>
  );
}