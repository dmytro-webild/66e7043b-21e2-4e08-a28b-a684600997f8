import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroCenteredLogos from '@/components/sections/hero/HeroCenteredLogos';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroCenteredLogos
      avatarsSrc={[
        "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-city-night_23-2149024755.jpg",
        "http://img.b2bpic.net/free-photo/brutal-young-man-sunglasses-hat-island-travel_1321-3839.jpg",
        "http://img.b2bpic.net/free-photo/woman-with-bun-hairstyle-dressed-stylish-green-clothes-keeps-hands-pocket-looks-away-pensively-poses-urban-place-daytime-people-street-style-lifestyle-concept_273609-56097.jpg",
        "http://img.b2bpic.net/free-photo/female-shop-seller-helping-woman-try-new-dress-tying-waistband-customer-choosing-clothes-fashion-store-buying-clothes-boutique-concept_74855-11698.jpg",
      ]}
      avatarText="Trusted by 1000+ Baku trendsetters"
      title="Everyone sells clothes. We sell style."
      description="Curated collections for Baku's most discerning dressers. Discover new arrivals and timeless pieces that define your aesthetic."
      primaryButton={{
        text: "Order on WhatsApp",
        href: "https://wa.me/994500000000",
      }}
      secondaryButton={{
        text: "View Collection",
        href: "#products",
      }}
      names={[
        "Fashion",
        "Streetwear",
        "Luxury",
        "Baku",
        "Style",
        "Exclusive",
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/going-out-concept-with-girl-night_23-2148140745.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Elevated Urban Fashion in the Heart of Baku"
      primaryButton={{
        text: "Shop Now",
        href: "#products",
      }}
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesRevealCardsBento
      tag="New Arrivals"
      title="Curated Selection"
      description="The latest styles hand-picked for the Baku urban scene."
      items={[
        {
          title: "Premium Jacket",
          description: "Urban essentials for the season. Price: 150 AZN",
          href: "https://wa.me/994500000000",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-texture-black-fabric-suit_23-2148402334.jpg",
        },
        {
          title: "Designer Shirt",
          description: "Tailored for exclusivity. Price: 85 AZN",
          href: "https://wa.me/994500000000",
          imageSrc: "http://img.b2bpic.net/free-photo/young-person-wearing-hoodie-mockup_23-2149246203.jpg",
        },
        {
          title: "Casual Knit",
          description: "Comfort meets refined style. Price: 95 AZN",
          href: "https://wa.me/994500000000",
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-pearls-necklace-with-many-white-boxes-paper-backdrop_23-2147874225.jpg",
        },
        {
          title: "City Trousers",
          description: "Perfect fit for everyday luxury. Price: 110 AZN",
          href: "https://wa.me/994500000000",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-woman-holding-her-hands-her-pockets_23-2148286449.jpg",
        },
        {
          title: "Evening Dress",
          description: "Make a statement this night. Price: 220 AZN",
          href: "https://wa.me/994500000000",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-posing-with-gloves_23-2149267484.jpg",
        },
        {
          title: "Urban Hoodie",
          description: "Sophisticated streetwear vibes. Price: 75 AZN",
          href: "https://wa.me/994500000000",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-afro-man-beige-old-school-suit-sit-table-street-fashionable-young-african-male-casual-jacket-bare-torso_627829-4740.jpg",
        },
        {
          title: "Leather Bag",
          description: "The final touch to your look. Price: 180 AZN",
          href: "https://wa.me/994500000000",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-small-decorative-objects_23-2149865458.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesTaggedCards
      tag="Why Us"
      title="The SKLAD Advantage"
      description="Why the city's fashion-forward choose us."
      items={[
        {
          tag: "Curated",
          title: "Baku Exclusive",
          description: "Fashion not found elsewhere.",
          primaryButton: {
            text: "WhatsApp",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-store-with-futuristic-concept-architecture_23-2150861874.jpg",
        },
        {
          tag: "Fast",
          title: "WhatsApp Ordering",
          description: "Direct, seamless purchase flow.",
          primaryButton: {
            text: "WhatsApp",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-fit-man-jumping-outdoors_23-2150189454.jpg",
        },
        {
          tag: "Quality",
          title: "Premium Materials",
          description: "Durability meets elegance.",
          primaryButton: {
            text: "WhatsApp",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-diverse-latin-people_23-2151057801.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Reviews"
      title="From Our Community"
      description="Voices of the Baku style scene."
      testimonials={[
        {
          name: "Leyla M.",
          role: "Fashion Student",
          quote: "The best curated selection in Baku!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-girl-posing-funfair_23-2148311364.jpg",
        },
        {
          name: "Ramin K.",
          role: "Entrepreneur",
          quote: "Fast ordering, high quality.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-woman-red-jacket-looking-front_197531-19815.jpg",
        },
        {
          name: "Amina V.",
          role: "Creative",
          quote: "Finally, a brand with a voice.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-pink-coat-standing-street_1303-31196.jpg",
        },
        {
          name: "Elvin G.",
          role: "Professional",
          quote: "My go-to for luxury streetwear.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-female-friends-standing-shop-window-with-accessories-holding-shopping-bags-smiling-chatting-back-view-window-shopping-concept_74855-11790.jpg",
        },
        {
          name: "Sara H.",
          role: "Designer",
          quote: "SKLAD always delivers excellence.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-having-fun-together_23-2149290162.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Info"
      title="Shopping Questions"
      description="How the WhatsApp ordering works."
      items={[
        {
          question: "How do I order?",
          answer: "Message us on WhatsApp with the product name and photo.",
        },
        {
          question: "Shipping in Baku?",
          answer: "We offer same-day delivery via local couriers.",
        },
        {
          question: "Do you accept returns?",
          answer: "Exchanges are welcome within 3 days of purchase.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/surrealist-portrait-fashionable-woman_23-2149224637.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Order Now"
      text="Ready to redefine your aesthetic? Order your look today via WhatsApp."
      primaryButton={{
        text: "Order on WhatsApp",
        href: "https://wa.me/994500000000",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "mailto:info@skladbaku.az",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
