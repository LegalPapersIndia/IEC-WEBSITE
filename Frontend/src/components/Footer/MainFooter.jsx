// src/components/Footer/MainFooter.jsx
export default function MainFooter() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-950 text-gray-200 py-12 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm max-w-3xl mx-auto">
          This is a private consultancy portal for IEC registration assistance. 
          We are not associated with DGFT or any Government authority.
        </p>
        <p className="mt-4 text-xs opacity-80">
          © {new Date().getFullYear()} IEC Registration Consultancy | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}