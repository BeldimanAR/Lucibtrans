"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Newsletter() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    details: "",
  });
  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8kru9u9",
        "template_exgnu1d",
        {
          from_name: form.name,
          to_name: "Roberto",
          from_email: form.email,
          to_email: "roberto.beldiman10@gmail.com",
          message: `${form.name},${form.phone},${form.email},${form.details}`,
        },
        "Ajs3h3ebltjbSJu4p"
      )
      .then(
        () => {
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            phone: "",
            email: "",
            details: "",
          });
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-orange-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="35.542%"
                    cy="34.553%"
                    fx="35.542%"
                    fy="34.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#fff" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse
                      fillOpacity=".04"
                      cx="185"
                      cy="15.576"
                      rx="16"
                      ry="15.576"
                    />
                    <ellipse
                      fillOpacity=".24"
                      cx="100"
                      cy="68.402"
                      rx="24"
                      ry="23.364"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="29"
                      cy="251.231"
                      rx="29"
                      ry="28.231"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="29"
                      cy="251.231"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="342"
                      cy="31.303"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".48"
                      cx="62"
                      cy="126.811"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="78"
                      cy="7.072"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="185"
                      cy="15.576"
                      rx="6"
                      ry="5.841"
                    />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Request for a quote</h3>
                <p className="text-gray-300 text-lg mb-6">
                  PLEASE PROVIDE SOME BASIC DETAILS ABOUT YOUR MOVE
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:gap-5 justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input
                      type="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-input appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Name"
                      aria-label="Name"
                    />
                    <input
                      type="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-input appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Phone"
                      aria-label="Phone"
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Email"
                      aria-label="Email"
                    />
                    <textarea
                      name="details"
                      value={form.details}
                      onChange={handleChange}
                      className="form-input appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Details"
                      aria-label="Details"
                    />
                    <button
                      type="submit"
                      className="btn text-black bg-white hover:bg-gray-300 shadow"
                    >
                      Send
                    </button>
                  </div>
                  {/* Success message */}
                  <p className="text-sm text-gray-400 mt-3">
                    Thanks for contacting!
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
