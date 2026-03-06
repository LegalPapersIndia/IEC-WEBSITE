// src/components/Sections/ProcedureSection.jsx
export default function ProcedureSection() {
  const steps = [
    {
      number: "1",
      title: "Fill up the Application form",
      imageSrc: "assest/2.png", // ← yeh path apne project ke assets folder se match kar dena
      imgStyle: { width: "68px", marginLeft: "14px", marginTop: "27px" },
    },
    {
      number: "2",
      title: "Make online Payment",
      imageSrc: "assest/4.png",
      imgStyle: { marginTop: "16px", marginLeft: "9px" },
    },
    {
      number: "3",
      title: "Upload required documents",
      imageSrc: "assest/3.png",
      imgStyle: { width: "68px", marginLeft: "14px", marginTop: "39px" },
    },
    {
      number: "4",
      title: "Receive Certificate on mail",
      imageSrc: "assest/6.png",
      imgStyle: { marginTop: "16px", marginLeft: "9px" },
    },
  ];

  return (
    <section
      id="procedure"
      className="py-16 md:py-20 bg-gray-100"
      style={{ marginBottom: "30px", marginTop: "50px" }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 underline decoration-4 decoration-orange-500 underline-offset-8">
            Process for Applying for IEC Registration Certificate Online
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Circle with Image */}
              <div className="relative mx-auto mb-6">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xl mx-auto">
                  <img
                    src={step.imageSrc}
                    alt={`Step ${step.number}`}
                    style={step.imgStyle}
                    className="object-contain"
                  />
                </div>

                {/* Step Number (optional small badge) */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center text-orange-600 font-bold text-xl shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Title */}
              <p className="text-lg md:text-xl font-bold text-gray-800">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}