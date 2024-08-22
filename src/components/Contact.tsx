"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaValue) {
      setSubmitStatus("Please complete the CAPTCHA");
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(process.env.GOOGLE_SHEET_SCRIPT_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, captcha: captchaValue }),
      });

      if (response.ok) {
        setSubmitStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setCaptchaValue(null);
      } else {
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("An error occurred. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(to bottom, #030b11 5%, #252525 30%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-lg shadow-gray-900 shadow-[0_0_20px_10px] overflow-hidden">
          <div>
            <div className="flex items-center justify-center pt-8">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/14946/14946653.png"
                width={100}
                height={100}
                alt="Icon of a yellow paper mail, proceeded by a smart phone in front with a profile of a silhouette of a green shirt and light skinned circle for a head, representing a man. And a handset phone next to the smart phone"
                unoptimized
              />
            </div>
            <div className="text-center px-6 pb-8 sm:pb-10">
              <h2 className="text-5xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-white mb-8">
                We’re excited to connect with you! Whether you have a question,
                need more information, or have specific requirements, we’re here
                to help. Reach out to us through this contact form, and let’s
                schedule a time to discuss how we can bring your project to life
                or address any inquiries you may have.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6 ">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full bg-white shadow-sm py-3 px-4 text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full bg-white shadow-sm py-3 px-4 text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full bg-white shadow-sm py-3 px-4 text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                      onChange={(value) => setCaptchaValue(value)}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "SUBMIT"}
                    </button>
                  </div>
                  {submitStatus && (
                    <p
                      className={`mt-4 text-center ${
                        submitStatus.includes("successfully")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {submitStatus}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
