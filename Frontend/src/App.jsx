// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import TopBar from './components/Header/HeaderTop';
import Navbar from './components/Header/Navbar'; // Options + scroll
import RegistrationForm from './components/Form/RegistrationForm';
import InstructionsSidebar from './components/Form/InstructionsSidebar';
import ProcedureSection from './components/Sections/ProcedureSection';
import BenefitsSection from './components/Sections/BenefitsSection';
import FaqSection from './components/Sections/FaqSection';
import MainFooter from './components/Footer/MainFooter';
import PaymentSummary from './components/Payment/PaymentSummary';
import DisclaimerPage from './components/Pages/DisclaimerPage';
import HeroCarousel from './components/Sections/HeroCarousel';
import ContactPage from './components/Pages/ContactPage';
import TermsAndConditionsPage from './components/Pages/TermsAndConditionsPage';
import RefundPolicyPage from './components/Pages/RefundPolicyPage';

// Global Marquee (appears on all pages except home)
function GlobalMarquee() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-md overflow-hidden">
      <div className="marquee-container relative w-full">
        <div className="marquee inline-flex whitespace-nowrap text-sm font-medium tracking-wide py-2">
          <span className="mx-16">
            This is a private consultancy self-registration portal for obtaining import export code. Portal fees are consultancy in nature.
          </span>
          <span className="mx-16">
            This is a private consultancy self-registration portal for obtaining import export code. Portal fees are consultancy in nature.
          </span>
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  // Show global marquee on all routes EXCEPT home
  const showGlobalMarquee = location.pathname !== "/";

  // Show Navbar (options) only on home route
  const showNavbar = location.pathname === "/";

  return (
    <>
      {/* Always visible: TopBar + FullHeader (logo + title) */}
      <TopBar />

      {/* Global marquee – only non-home pages */}
      {showGlobalMarquee && <GlobalMarquee />}

      {/* Navbar (options) – only on home */}
      {showNavbar && (
        <Navbar
          navItems={[
            { label: "IEC REGISTRATION", to: "#registration-form" },
            { label: "IEC MODIFICATION", to: "#registration-form" },
            { label: "IEC RENEWAL/UPDATE", to: "#registration-form" },
            { label: "PROCEDURE", to: "#procedure" },
            { label: "BENEFITS", to: "#benefits" },
            { label: "FAQ'S", to: "#faq" },
          ]}
          handleScroll={(e, target) => {
            if (target.startsWith('#')) {
              e.preventDefault();
              const element = document.querySelector(target);
              if (element) {
                const headerOffset = 140;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }
          }}
        />
      )}

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <main className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-10 md:py-12">
              <HeroCarousel />

              <div className="mx-auto max-w-screen-2xl">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
                  <div className="lg:col-span-2">
                    <RegistrationForm />
                  </div>
                  <div className="lg:col-span-1">
                    <InstructionsSidebar />
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-screen-2xl mt-12 md:mt-16 space-y-16 md:space-y-20">
                <ProcedureSection />
                <BenefitsSection />
                <FaqSection />
              </div>

            </main>
          }
        />

        {/* Payment Summary */}
        <Route
          path="/payment-summary"
          element={
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-12">
              <div className="mx-auto max-w-screen-2xl">
                <PaymentSummary />
              </div>
            </div>
          }
        />

        {/* Refund Policy */}
        <Route
          path="/refund-policy"
          element={
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-12 md:py-16">
              <div className="mx-auto max-w-screen-2xl">
                <RefundPolicyPage />
              </div>
            </div>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-12 md:py-16">
              <div className="mx-auto max-w-screen-2xl">
                <ContactPage />
              </div>
            </div>
          }
        />

        {/* Terms and Conditions */}
        <Route
          path="/term-condition"
          element={
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-12 md:py-16">
              <div className="mx-auto max-w-screen-2xl">
                <TermsAndConditionsPage />
              </div>
            </div>
          }
        />

        {/* Disclaimer */}
        <Route
          path="/disclaimer"
          element={
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-12 md:py-16">
              <div className="mx-auto max-w-screen-2xl">
                <DisclaimerPage />
              </div>
            </div>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-[70vh] flex items-center justify-center px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center">
                404 - Page Not Found
              </h2>
            </div>
          }
        />
      </Routes>

      {/* Global Footer */}
      <MainFooter />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;