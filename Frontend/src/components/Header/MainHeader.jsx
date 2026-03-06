// src/components/Header/MainHeader.jsx
export default function MainHeader() {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-blue-900 text-white py-8 md:py-10 shadow-xl">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold italic tracking-tight">
          INDIA'S IMPORT EXPORT CODE REGISTRATION CONSULTANCY PORTAL
        </h1>
        <p className="mt-3 text-lg md:text-xl opacity-90">
          भारतीय आयात निर्यात कोड पंजीकरण कंसल्टेंसी पोर्टल
        </p>
      </div>
    </header>
  );
}