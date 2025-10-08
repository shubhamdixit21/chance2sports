import React, { useState } from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const DonateJoinUs = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    interestedFellowship: false,
    interestedDonation: false,
    interestedNewCenter: false,
    interestedOthers: false,
    sponsorProgram: false,
    sponsorAthlete: false,
    sponsorDonation: false,
    amount: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.contact || !formData.email || !formData.amount) {
      setSubmitStatus("Please fill all required fields.");
      return;
    }

    if (!/^\d+$/.test(formData.amount)) {
      setSubmitStatus("Please enter a valid amount.");
      return;
    }

    // Check at least one interest is selected
    if (
      !formData.interestedFellowship &&
      !formData.interestedDonation &&
      !formData.interestedNewCenter &&
      !formData.interestedOthers
    ) {
      setSubmitStatus("Please select at least one area of interest.");
      return;
    }

    // Simulate saving to CRM
    console.log("Form data saved to CRM:", formData);

    // Send to Google Sheets
    const result = await sendToGoogleSheets(formData);
    if (result.result === "success") {
      setIsSubmitted(true);
      setSubmitStatus("Thank you! Our team will contact you shortly.");
    } else {
      setSubmitStatus("There was an error submitting the form. Please try again.");
    }
  };

  const sendToGoogleSheets = async (data) => {
    const sheetBestURL = import.meta.env.VITE_SHEETBEST_URL;
    console.log(sheetBestURL)
    // Add date here or in the sheet if needed
    const dataWithDate = {
      ...data,
      amount: String(data.amount),
      date: new Date().toLocaleString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
    };

    try {
      const response = await fetch(sheetBestURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataWithDate),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        return { result: "success" };
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      return { result: "error" };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=diverse%20group%20of%20young%20athletes%20training%20together%20in%20modern%20sports%20facility%20with%20bright%20natural%20lighting%20professional%20photography%20clean%20white%20background&width=1440&height=400&seq=hero001&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-4">Support Our Champions</h1>
            <p className="text-xl mb-8">
              Your support helps provide free training and mentorship to aspiring athletes from underserved communities.
            </p>
            {/* <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400">2000+</div>
                <div className="text-sm">Athletes Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">500+</div>
                <div className="text-sm">Volunteer Coaches</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">150+</div>
                <div className="text-sm">Champions Created</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Sponsorship Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Become a Partner</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to express your interest. We'll contact you to complete the process.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            {/* Contact Number */}
            <div className="mb-6">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                {/* Country Code Box */}
                <div className="flex items-center px-4 py-3 border border-gray-300 rounded-l-lg bg-gray-100 text-gray-700">
                  +91
                </div>

                {/* Contact Number Input */}
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-t border-b border-r border-gray-300 rounded-r-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g. 9876543210"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            {/* Area of Interest */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Area of Interest <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interestedFellowship"
                    checked={formData.interestedFellowship}
                    onChange={handleChange}
                    className="h-5 w-5 text-orange-500 rounded focus:ring-orange-500"
                  />
                  <span className="ml-2 text-gray-700">Fellowship</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interestedDonation"
                    checked={formData.interestedDonation}
                    onChange={handleChange}
                    className="h-5 w-5 text-orange-500 rounded focus:ring-orange-500"
                  />
                  <span className="ml-2 text-gray-700">Donation</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interestedNewCenter"
                    checked={formData.interestedNewCenter}
                    onChange={handleChange}
                    className="h-5 w-5 text-orange-500 rounded focus:ring-orange-500"
                  />
                  <span className="ml-2 text-gray-700">Opening New Center</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interestedOthers"
                    checked={formData.interestedOthers}
                    onChange={handleChange}
                    className="h-5 w-5 text-orange-500 rounded focus:ring-orange-500"
                  />
                  <span className="ml-2 text-gray-700">Others</span>
                </label>
              </div>
            </div>

            {/* Sponsorship Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Sponsorship Type
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="sponsorProgram"
                    checked={formData.sponsorProgram}
                    onChange={handleChange}
                    className="h-5 w-5 text-orange-500 rounded focus:ring-orange-500"
                  />
                  <span className="ml-3 text-gray-700">Sponsoring a Program</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="sponsorAthlete"
                    checked={formData.sponsorAthlete}
                    onChange={handleChange}
                    className="h-5 w-5 text-orange-500 rounded focus:ring-orange-500"
                  />
                  <span className="ml-3 text-gray-700">Sponsoring an Athlete</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="sponsorDonation"
                    checked={formData.sponsorDonation}
                    onChange={handleChange}
                    className="h-5 w-5 text-orange-500 rounded focus:ring-orange-500"
                  />
                  <span className="ml-3 text-gray-700">Sponsoring a Donation</span>
                </label>
              </div>
            </div>

            {/* Amount */}
            <div className="mb-6">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                Amount  <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter amount"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
            >
              Submit Request
            </button>

            {/* Submission Status */}
            {submitStatus && (
              <p
                className={`mt-4 text-center text-sm ${submitStatus.includes("Thank") ? "text-green-600" : "text-red-500"
                  }`}
              >
                {submitStatus}
              </p>
            )}
          </form>

        </div>
      </section>

      {/* Join Us Section (Optional – Keep as per design) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
            <p className="text-lg text-gray-600">
              There are many ways to get involved and make a difference in our community
            </p>
          </div>
          {/* Tab navigation and content can remain unchanged */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DonateJoinUs;