// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopBar from './components/Header/TopBar';
import MainHeader from './components/Header/MainHeader';
import RegistrationForm from './components/Form/RegistrationForm';
import InstructionsSidebar from './components/Form/InstructionsSidebar';
import ProcedureSection from './components/Sections/ProcedureSection';
import BenefitsSection from './components/Sections/BenefitsSection';
import FaqSection from './components/Sections/FaqSection';
import MainFooter from './components/Footer/MainFooter';

// Payment Summary Page (naya page)
import PaymentSummary from './components/Payment/PaymentSummary';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-white font-sans">
        <TopBar />
        <MainHeader />

        <Routes>
          {/* Home / Form Page */}
          <Route
            path="/"
            element={
              <>
                <main className="container mx-auto px-4 py-10 max-w-6xl">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <RegistrationForm />
                    </div>
                    <div className="md:col-span-1">
                      <InstructionsSidebar />
                    </div>
                  </div>

                  <ProcedureSection />
                  <BenefitsSection />
                  <FaqSection />
                </main>

                <MainFooter />
              </>
            }
          />

          {/* Payment Summary Page */}
          <Route path="/payment-summary" element={<PaymentSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;