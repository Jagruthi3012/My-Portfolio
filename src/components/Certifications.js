import React from "react";
import CertificationsData from "../data/certifications";

const Certifications = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="p-4 pt-0 mt-10 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        
        {/* Heading */}
        <div
          id="certifications"
          className="flex flex-col text-center w-full mb-6"
        >
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">
            Certifications
          </h1>
          <p className="text-lg font-medium text-dark-orange">
            Professional Credentials & Achievements
          </p>
        </div>

        {/* Grid */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-6 border-2 rounded-md md:shadow-md"
        >
          {CertificationsData.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-5 rounded-lg border hover:shadow-lg transition duration-300"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h2 className="text-lg font-semibold text-gray-900">
                {cert.name}
              </h2>
              <p className="text-sm text-gray-600">{cert.issuer}</p>
              <p className="text-sm font-medium text-dark-orange mt-1">
                {cert.year}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
