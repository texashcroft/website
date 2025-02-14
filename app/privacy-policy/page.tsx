"use client"

import { motion } from "framer-motion"
import Footer from "@/components/footer"
import Image from "next/image"

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white custom-scrollbar pt-8 sm:pt-12 scroll-smooth">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100 to-white z-0"></div>
      <div className="relative z-10">
        {/* Header */}
        <header className="relative z-10 mx-auto max-w-7xl px-4 pt-8 sm:pt-10 sm:px-6 lg:px-8 mb-12">
          <div className="flex justify-center -mt-4 mb-6">
            <div className="bg-white/30 backdrop-blur-md rounded-full p-4 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202610460-zxPPDw6Wone3NHEUW1OnvfqQxmJhZl.png"
                alt="Sendora Logo"
                width={200}
                height={44}
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-6 flex w-fit items-center justify-center rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-md border border-gray-200 relative z-50"
          >
            <span className="mr-1.5 sm:mr-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black w-4 h-4 sm:w-5 sm:h-5"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </span>
            <span className="text-xs sm:text-sm font-medium text-black">Privacy Policy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center mb-4"
          >
            Your Privacy Matters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto"
          >
            We are committed to protecting your personal information and ensuring your experience with us is as safe and
            enjoyable as possible.
          </motion.p>
        </header>

        {/* Main Content */}
        <section className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-gray-800">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Privacy Policy for Sendora.ai</h1>
            <p className="text-lg mb-4">Effective Date: [Insert Date]</p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              At Sendora.ai ("Sendora," "we," "us," or "our"), we are committed to protecting your privacy and ensuring
              the security of your personal information. This Privacy Policy outlines how we collect, use, store, and
              protect your data when you use our AI-powered sales platform, Sendora.ai. By using our services, you agree
              to the terms outlined in this policy.
            </p>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at privacy@sendora.ai.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">2. Scope of This Policy</h2>
            <p>This Privacy Policy applies to:</p>
            <ul>
              <li>The Sendora.ai website (www.sendora.ai).</li>
              <li>
                The Sendora.ai platform and its features, including cold calling, cold emailing, and cold SMS
                automation.
              </li>
              <li>Any other services provided by Sendora.ai.</li>
            </ul>
            <p>
              This policy does not apply to third-party websites, services, or applications that may be linked to or
              integrated with Sendora.ai.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">3. Information We Collect</h2>
            <p>We collect the following types of information to provide and improve our services:</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">3.1. Personal Information</h3>
            <ul>
              <li>Contact Information: Name, email address, phone number, company name, and job title.</li>
              <li>
                Account Information: Username, password, and authentication tokens for third-party integrations (e.g.,
                Google, CRM tools).
              </li>
              <li>
                Payment Information: Credit card details, billing address, and transaction history (processed by
                PCI-compliant third-party providers).
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">3.2. Campaign Data</h3>
            <ul>
              <li>Outbound Campaigns: Content of cold calls, emails, and SMS messages sent through Sendora.ai.</li>
              <li>
                Inbound Leads: Responses and interactions with prospects, including email replies and call recordings.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">3.3. Technical and Navigational Information</h3>
            <ul>
              <li>Device Information: IP address, browser type, operating system, and device identifiers.</li>
              <li>
                Usage Data: Pages visited, time spent on the platform, and actions taken (e.g., clicks, form
                submissions).
              </li>
              <li>
                Cookies and Tracking Technologies: We use cookies, web beacons, and similar technologies to enhance your
                experience and analyze usage patterns.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">3.4. Data from Third-Party Integrations</h3>
            <p>If you connect Sendora.ai to third-party services (e.g., Google, Salesforce), we collect:</p>
            <ul>
              <li>Email Data: Emails sent and received via Sendora.ai.</li>
              <li>CRM Data: Contact lists, lead information, and campaign performance metrics.</li>
              <li>Authentication Tokens: To maintain secure access to your accounts.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">3.5. Sensitive Information</h3>
            <p>We do not intentionally collect sensitive information such as:</p>
            <ul>
              <li>Social Security numbers, passport numbers, or driver's license numbers.</li>
              <li>Health or financial information unrelated to payment processing.</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">4. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">4.1. Providing and Improving Our Services</h3>
            <ul>
              <li>To operate, maintain, and enhance the Sendora.ai platform.</li>
              <li>To automate outbound prospecting and respond to inbound leads.</li>
              <li>To analyze campaign performance and optimize outreach strategies.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">4.2. Communication</h3>
            <ul>
              <li>To send transactional emails, updates, and support messages.</li>
              <li>To notify you about changes to our services or policies.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">4.3. Security and Fraud Prevention</h3>
            <ul>
              <li>To protect your data and prevent unauthorized access.</li>
              <li>To monitor for fraudulent or abusive activity.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">4.4. Legal Compliance</h3>
            <ul>
              <li>To comply with applicable laws, regulations, and legal processes.</li>
              <li>To enforce our Terms of Service and other agreements.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">4.5. Marketing and Analytics</h3>
            <ul>
              <li>To send promotional materials and newsletters (with your consent).</li>
              <li>To analyze usage patterns and improve user experience.</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">5. Data Sharing and Third Parties</h2>
            <p>We do not sell or rent your personal information. However, we may share data with:</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">5.1. Service Providers</h3>
            <ul>
              <li>
                Third-party vendors who help us deliver our services (e.g., payment processors, cloud hosting
                providers).
              </li>
              <li>
                These providers are contractually obligated to maintain the confidentiality and security of your data.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">5.2. Legal Authorities</h3>
            <ul>
              <li>When required by law or to protect our rights and safety.</li>
              <li>In response to subpoenas, court orders, or other legal processes.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">5.3. Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new owner.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">5.4. Aggregated or Anonymized Data</h3>
            <p>We may share aggregated or anonymized data for research, analytics, or marketing purposes.</p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">6. Data Security</h2>
            <p>We employ industry-standard security measures to protect your data, including:</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">6.1. Encryption</h3>
            <p>All data is encrypted in transit (using SSL/TLS) and at rest.</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">6.2. Access Controls</h3>
            <ul>
              <li>Strict access controls limit who can view your data.</li>
              <li>Employees and contractors are required to sign confidentiality agreements.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">6.3. Regular Audits</h3>
            <p>We conduct regular security audits to ensure compliance with best practices.</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">6.4. Incident Response</h3>
            <p>
              In the event of a data breach, we will notify affected users and take immediate steps to mitigate the
              impact.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">7. Data Retention</h2>
            <p>We retain your data only as long as necessary to provide our services or as required by law.</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">7.1. Account Data</h3>
            <p>Retained for the duration of your account and deleted within 60 days of cancellation.</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">7.2. Campaign Data</h3>
            <p>Retained for up to 12 months after the campaign ends, unless otherwise requested.</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">7.3. Legal Obligations</h3>
            <p>Certain data may be retained longer to comply with legal, tax, or regulatory requirements.</p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">8. Your Rights</h2>
            <p>You have the following rights regarding your data:</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">8.1. Access</h3>
            <p>Request a copy of the personal information we hold about you.</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">8.2. Correction</h3>
            <p>Update or correct inaccurate information.</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">8.3. Deletion</h3>
            <p>Request deletion of your data, subject to legal requirements.</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">8.4. Opt-Out</h3>
            <p>Unsubscribe from marketing communications at any time.</p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">8.5. Data Portability</h3>
            <p>Request a copy of your data in a machine-readable format.</p>

            <p>To exercise these rights, contact us at privacy@sendora.ai.</p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">9. International Data Transfers</h2>
            <p>
              If you are located outside the United States, your data may be transferred to and processed in the United
              States. By using Sendora.ai, you consent to this transfer.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">10. Children's Privacy</h2>
            <p>
              Sendora.ai is not intended for children under the age of 13. We do not knowingly collect or process data
              from children. If you believe we have collected data from a child, please contact us at
              privacy@sendora.ai.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you via
              email or through the Sendora.ai platform.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">12. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <p>Email: privacy@sendora.ai</p>
            <p>Address: [Insert Company Address]</p>

            <p className="mt-8">
              This comprehensive Privacy Policy ensures that Sendora.ai remains transparent, secure, and aligned with
              global data protection standards while delivering exceptional value to our customers.
            </p>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}

