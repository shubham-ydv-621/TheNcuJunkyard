import React, { useState } from "react";

function Footer() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState(null);

  // Function to handle link clicks
  const handleSectionClick = (section) => {
    // Toggle the section open/close
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a
            className="link link-hover"
            onClick={() => handleSectionClick("about")}
          >
            About Us
          </a>
          <a
            className="link link-hover"
            onClick={() => handleSectionClick("contact")}
          >
            Contact
          </a>
          <a
            className="link link-hover"
            onClick={() => handleSectionClick("howItWorks")}
          >
            How It Works
          </a>
          <a
            className="link link-hover"
            onClick={() => handleSectionClick("privacy")}
          >
            Privacy Policy
          </a>
        </nav>

        {/* Conditionally render content based on the active section */}
        <div>
          <div
            className={`section-content transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === "about" ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            {activeSection === "about" && (
              <div>
                <h3 className="text-lg font-bold text-pink-500">About Us</h3>
                <p className="text-gray-700 dark:text-white">
                  We are a team of dedicated individuals passionate about enhancing
                  the way you access books and educational materials. Our platform
                  aims to bridge the gap between readers and rare or hard-to-find
                  resources. Whether it's a textbook, reference material, or something
                  unique, our goal is to make sure you get the books you need, when you
                  need them. With an easy-to-use interface and a wide network, we strive
                  to make learning more accessible and enjoyable for everyone.
                </p>
              </div>
            )}
          </div>

          <div
            className={`section-content transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === "contact" ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            {activeSection === "contact" && (
              <div>
                <h3 className="text-lg font-bold text-pink-500">Contact Us</h3>
                <p className="text-gray-700 dark:text-white">
                  You can reach us via email at{" "}
                  <span className="font-semibold">shubham22csu444@ncuindia.edu</span> or
                  through our social media handles.
                </p>
              </div>
            )}
          </div>

          <div
            className={`section-content transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === "howItWorks" ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            {activeSection === "howItWorks" && (
              <div>
                <h3 className="text-lg font-bold text-pink-500">How It Works</h3>
                <p className="text-gray-700 dark:text-white">
                  Our platform allows users to request items they can't find. Once a
                  request is submitted, we try to source the item and notify the user
                  through call when it's available.
                </p>
              </div>
            )}
          </div>

          <div
            className={`section-content transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === "privacy" ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            {activeSection === "privacy" && (
              <div>
                <h3 className="text-lg font-bold text-pink-500">Privacy Policy</h3>
                <p className="text-gray-700 dark:text-white">
                  We value your privacy. Your personal information is stored securely and
                  is only used for the purpose of fulfilling your requests. We do not
                  share your information with third parties without your consent.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Social Media Links - Reduced margin */}
        <nav className="mt-0"> {/* Reduced margin here */}
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>

        {/* Copyright Section */}
        <aside className="mt-0"> {/* Reduced margin here */}
          <p className="text-center dark:text-white">
            Copyright © 2024 - All rights reserved by shubham22csu444@ncuindia.edu
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
