import Header from "@/components/header";
import Hero from "@/components/hero";
import AboutProject from "@/components/about-project";
import UnitTypes from "@/components/unit-types";
import PaymentPlans from "@/components/payment-plans";
import LocationSection from "@/components/location-section";
import Amenities from "@/components/amenities";
import AboutDeveloper from "@/components/about-developer";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import WhatsappWidget from "@/components/whatsapp-widget";
import MobileBottomBar from "@/components/mobile-bottom-bar";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <AboutProject />
      <UnitTypes />
      <PaymentPlans />
      <LocationSection />
      <Amenities />
      <AboutDeveloper />
      <ContactForm />
      <Footer />
      <WhatsappWidget />
      <MobileBottomBar />
    </main>
  );
}
