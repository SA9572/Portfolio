import React, { useState } from "react";
import { certifications } from "../../constants";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <section
      id="certifications"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Verified certifications that showcase my skills and learning journey.
        </p>
      </div>

      {/* Certification Cards - styled like Projects */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            onClick={() => handleOpenModal(cert)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-[#8245ec] font-medium">{cert.issuer}</p>
              <p className="text-xs text-gray-400 mt-1">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal - same dark style for ALL certificates (Data Structures, Full Stack, ML, etc.) */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#0f0f1a] border border-white/10 rounded-2xl shadow-2xl shadow-purple-900/20 lg:w-full w-[90%] max-w-3xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - top right */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl font-bold hover:text-purple-400 cursor-pointer transition-colors"
            >
              &times;
            </button>

            <div className="flex flex-col">
              {/* Certificate image / logo - top */}
              <div className="w-full flex justify-center bg-[#0a0a12] px-6 pt-6 pb-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="max-w-full max-h-[280px] object-contain rounded-lg"
                />
              </div>

              {/* Link - below photo */}
              <div className="px-6 pt-2 flex justify-center">
                {selectedCert.link ? (
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Certificate
                  </a>
                ) : (
                  <span className="inline-block bg-gray-700/80 text-gray-400 px-5 py-2 rounded-xl text-sm font-medium">
                    Add link for &quot;{selectedCert.name}&quot; in constants.js
                  </span>
                )}
              </div>

              {/* Title & details */}
              <div className="px-6 lg:px-8 py-6">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                  {selectedCert.name}
                </h3>
                <p className="text-[#8245ec] font-medium text-sm mb-1">
                  {selectedCert.issuer}
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  {selectedCert.year}
                </p>

                {/* Back to Portfolio - dark gray button */}
                <button
                  onClick={handleCloseModal}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl text-base font-semibold cursor-pointer transition-colors flex items-center justify-center gap-2"
                >
                  ← Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
