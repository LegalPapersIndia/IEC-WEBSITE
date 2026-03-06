import { useEffect, useState } from 'react';

export default function PaymentSummary() {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('iecSubmittedData');
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
      } else {
        setError('No submitted data found. Redirecting to form...');
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      }
    } catch (e) {
      setError('Error loading data. Redirecting to form...');
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
  }, []);

  const handlePay = () => {
    window.location.href = 'https://www.instamojo.com/@LegalPapersIndia/l52d2d917f393479baf14f1e829a0a65c/';
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <p className="text-red-600 text-xl font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 to-blue-900 text-white py-8 px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Application Summary & Payment</h1>
          <p className="mt-3 text-lg">Please verify your details before proceeding</p>
        </div>

        <div className="p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div><strong>Application Type:</strong> {formData.application_type || 'N/A'}</div>
              <div><strong>Business Name:</strong> {formData.business_entity || 'N/A'}</div>
              <div><strong>Constitution:</strong> {formData.constitution || 'N/A'}</div>
              <div><strong>PAN:</strong> <span className="uppercase">{formData.pan_no || 'N/A'}</span></div>
              <div><strong>Email:</strong> {formData.email || 'N/A'}</div>
            </div>
            <div className="space-y-4">
              <div><strong>Contact No:</strong> {formData.contact_no || 'N/A'}</div>
              <div>
                <strong>Address:</strong><br />
                {formData.address_line1 || ''} {formData.address_line2 ? `, ${formData.address_line2}` : ''}<br />
                {formData.city ? `${formData.city}, ` : ''}{formData.state || ''} {formData.pincode ? `- ${formData.pincode}` : ''}
              </div>
              <div><strong>Business Activity:</strong> {formData.business_activity || 'N/A'}</div>
              <div><strong>SEZ:</strong> {formData.sez || 'No'}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
            <button
              onClick={() => window.location.href = '/'}
              className="px-10 py-4 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-full shadow-lg transition"
            >
              Edit Details
            </button>

            <button
              onClick={handlePay}
              className="px-12 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-full shadow-2xl transition flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a5 5 0 00-10 0v2m-3 5a5 5 0 0110 0v2a5 5 0 01-10 0v-2z" />
              </svg>
              Verify & Pay Now
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            You will be redirected to a secure Instamojo payment gateway.
          </p>
        </div>
      </div>
    </div>
  );
}