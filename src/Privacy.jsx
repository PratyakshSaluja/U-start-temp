import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="h-screen overflow-auto p-6 bg-gray-100">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy for U-Start App</h1>

                <p className="mb-4">Effective Date: [Insert Date]</p>

                <p className="mb-4">U-Start ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the U-Start mobile application (the "App"). Please read this Privacy Policy carefully. By using the App, you agree to the practices described in this policy.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>

                <h3 className="text-xl font-semibold mt-4 mb-2">1.1. Personal Information</h3>
                <p className="mb-4">We may collect personal information that you provide directly to us, such as:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Profile details (if applicable)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4 mb-2">1.2. Non-Personal Information</h3>
                <p className="mb-4">We may automatically collect non-personal information about your device and usage of the App, such as:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Device type and operating system</li>
                    <li>App usage statistics</li>
                    <li>IP address</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4 mb-2">1.3. Cookies and Similar Technologies</h3>
                <p className="mb-4">We may use cookies or similar technologies to enhance user experience and analyze App performance.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We may use your information to:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Provide and manage access to the App's features</li>
                    <li>Personalize user experiences</li>
                    <li>Improve the App's performance and functionality</li>
                    <li>Send important updates, notifications, and promotional content (with your consent)</li>
                    <li>Ensure security and prevent fraud</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-4">3. Sharing Your Information</h2>
                <p className="mb-4">We do not sell your personal information. However, we may share your information with:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Service Providers: For App maintenance, analytics, and support services.</li>
                    <li>Legal Authorities: If required by law or to protect our legal rights.</li>
                    <li>Business Partners: With your consent, for collaborative purposes.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Security</h2>
                <p className="mb-4">We use appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">5. Third-Party Services</h2>
                <p className="mb-4">The App may contain links to third-party services. We are not responsible for the privacy practices of these third parties. Please review their privacy policies independently.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">6. Your Choices</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>Opt-Out: You can opt out of receiving promotional communications by following the unsubscribe instructions in our emails or contacting us directly.</li>
                    <li>Data Access and Deletion: You can request access to or deletion of your data by contacting us at [Insert Contact Email].</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-4">7. Children's Privacy</h2>
                <p className="mb-4">The App is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">8. Changes to This Privacy Policy</h2>
                <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Effective Date" will be updated. We encourage you to review this policy periodically.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">9. Contact Us</h2>
                <p className="mb-4">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                <p className="mb-2">Email: [Insert Email Address]</p>
                <p className="mb-4">Phone: [Insert Phone Number]</p>

                <p className="mt-6 font-semibold">Thank you for trusting U-Start. We are committed to safeguarding your privacy.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

