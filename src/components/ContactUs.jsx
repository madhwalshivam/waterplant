import React from "react";
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

const ContactUs = () => {
  return (
    <>
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
              <a href="https://www.facebook.com/people/Hydro-X-Water-Treatment-Pvt-Ltd/61554922692496/" target="_blank" rel="noreferrer">
                <Facebook className="hover:text-yellow-300" />
              </a>
              <a  href="https://www.youtube.com/channel/UCxwBekVxPJhebudTf4kDS9g" target="_blank" rel="noreferrer">
                <YouTube className="hover:text-yellow-300" />
              </a>
              <a  href="https://www.instagram.com/hydroxwatertreatmentpvt.ltd.2/" target="_blank" rel="noreferrer">
                <Instagram className="hover:text-yellow-300" />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:w-1/2 p-8 space-y-6">
            <h2 className="text-xl font-bold uppercase text-gray-800">
              We want to hear from you!
            </h2>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                />
                <input
                  type="email"
                  placeholder="Email ID*"
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Phone No*"
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Location*"
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                />
              </div>

              <textarea
                placeholder="Comments Here*"
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

      {/* Google Map Section */}
{/* Google Map Section */}
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

      {/* Testimonials Section */}
      <Testimonials />
      <Footer/>
    </>
  );
};

export default ContactUs;

