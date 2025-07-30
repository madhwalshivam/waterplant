import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Email,
  WhatsApp,
  LocationOn,
  Facebook,
  YouTube,
  Instagram,
} from "@mui/icons-material";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_waqvf98",
        "template_hq4btr9",
        form.current,
        "o5X5iqFHhGIHDBsEv"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Hydro X Water Treatment Pvt Ltd</title>
        <meta
          name="description"
          content="Contact Hydro X Water Treatment Pvt Ltd. for top-notch water and wastewater treatment solutions. Get in touch via phone, email, or WhatsApp."
        />
        <meta
          name="keywords"
          content="Contact Hydro X, Water Treatment Support, Effluent Plant Inquiry, Kangen Machine Service, Noida Water Plant"
        />
        <link rel="canonical" href="https://hydroxwatertreatment.com/contact" />
      </Helmet>

      <ToastContainer position="top-right" autoClose={4000} />

      <section className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left Info */}
          <div className="md:w-1/2 bg-blue-800 text-white p-8 space-y-4">
            <h2 className="text-xl font-bold uppercase">Contact Information</h2>
            <p className="text-sm">
              Write to us or call us, get quick response powered by our advanced
              customer support team.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Email fontSize="small" />
                <span>Contact Person: Mr. Rahul Tiwari (CEO)</span>
              </div>
              <div className="flex items-start gap-2">
                <LocationOn fontSize="small" />
                <span>
                  B 97 NOIDA SECTOR 64, Gautam Buddha Nagar - 201301, Uttar
                  Pradesh, India
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone fontSize="small" />
                <span>Call: +91-983-860-0270</span>
              </div>
              <div className="flex items-start gap-2">
                <WhatsApp fontSize="small" />
                <span>Whatsapp: +91-9838600270</span>
              </div>
            </div>

            <h3 className="mt-6 font-semibold uppercase text-sm">Get in Touch</h3>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/people/Hydro-X-Water-Treatment-Pvt-Ltd/61554922692496/"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="hover:text-yellow-300" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCxwBekVxPJhebudTf4kDS9g"
                target="_blank"
                rel="noreferrer"
              >
                <YouTube className="hover:text-yellow-300" />
              </a>
              <a
                href="https://www.instagram.com/hydroxwatertreatmentpvt.ltd.2/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="hover:text-yellow-300" />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:w-1/2 p-8 space-y-6">
            <h2 className="text-xl font-bold uppercase text-gray-800">
              We want to hear from you!
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name*"
                  required
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email ID*"
                  required
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone No*"
                  required
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                />
                <input
                  name="location"
                  type="text"
                  placeholder="Location*"
                  required
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                />
              </div>

              <textarea
                name="message"
                placeholder="Comments Here*"
                required
                className="border border-gray-300 px-4 py-2 rounded-md w-full h-24 resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="max-w-7xl mx-auto mt-10 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Hydro-X Water Treatment Pvt. Ltd."
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.313308159718!2d77.3736512!3d28.611892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce501c4f7387b%3A0xcf3f43f6d16fb7c9!2sHydro-X%20Water%20Treatment%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1721049748122!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </>
  );
};

export default ContactUs;
