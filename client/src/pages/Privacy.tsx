import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-6">
            <Link href="/">
              <Button variant="outline" className="font-ui flex items-center gap-2 shadow-pixel">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="m12 19-7-7 7-7"/>
                  <path d="M19 12H5"/>
                </svg>
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="font-pixel text-primary text-3xl mb-4">PRIVACY <span className="text-secondary">POLICY</span></h1>
            <p className="font-body text-xl">Last Updated: April 14, 2024</p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-pixel">
            <div className="space-y-8 font-body text-lg">
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">1. INTRODUCTION</h2>
                <p>
                  Welcome to the PixelPlay Privacy Policy. This policy explains how we collect, use, disclose, and 
                  safeguard your information when you use our platform. We respect your privacy and are committed to 
                  protecting your personal data.
                </p>
                <p className="mt-2">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                  please do not access the platform.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">2. INFORMATION WE COLLECT</h2>
                <p>We may collect the following types of information:</p>
                
                <h3 className="font-ui text-accent mt-4 mb-2">2.1 Personal Data</h3>
                <p>
                  Personal data refers to information that can be used to identify you individually. This may include:
                </p>
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>Your name, email address, and username</li>
                  <li>Profile information, including your profile picture</li>
                  <li>Account credentials, such as passwords and security questions</li>
                  <li>Payment information when you make purchases</li>
                  <li>Communication data when you contact us or participate in forums</li>
                </ul>
                
                <h3 className="font-ui text-accent mt-4 mb-2">2.2 Usage Data</h3>
                <p>
                  We may also collect information on how you access and use our platform, including:
                </p>
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>Your IP address, browser type, and device information</li>
                  <li>Pages you visit and features you use</li>
                  <li>Time spent on certain pages and game engagement metrics</li>
                  <li>Referral source and access times</li>
                  <li>Operating system and other technology identifiers on your device</li>
                </ul>
                
                <h3 className="font-ui text-accent mt-4 mb-2">2.3 Cookies and Tracking Data</h3>
                <p>
                  We use cookies and similar tracking technologies to collect information about your browsing activities. 
                  For more information about our use of cookies, please see our Cookie Policy.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">3. HOW WE USE YOUR INFORMATION</h2>
                <p>We may use the information we collect for various purposes, including to:</p>
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>Provide, maintain, and improve our platform</li>
                  <li>Process transactions and send related information</li>
                  <li>Create and manage your account</li>
                  <li>Send administrative information, such as updates and security alerts</li>
                  <li>Personalize your experience and deliver content and game features</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Protect against harmful or illegal activity</li>
                </ul>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">4. SHARING YOUR INFORMATION</h2>
                <p>We may share your information in the following situations:</p>
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li><span className="font-semibold">Service Providers:</span> We may share your information with third-party vendors who provide services on our behalf.</li>
                  <li><span className="font-semibold">Business Transfers:</span> If we're involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                  <li><span className="font-semibold">Legal Requirements:</span> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                  <li><span className="font-semibold">With Your Consent:</span> We may share your information with your consent or at your direction.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">5. DATA SECURITY</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of 
                  transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">6. CHILDREN'S PRIVACY</h2>
                <p>
                  Our platform is not intended for children under 13 years of age. We do not knowingly collect personal 
                  information from children under 13. If you are a parent or guardian and believe your child has provided 
                  us with personal information, please contact us.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">7. YOUR PRIVACY RIGHTS</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>The right to access personal information we hold about you</li>
                  <li>The right to request correction of inaccurate data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to object to or restrict processing of your data</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p className="mt-2">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">8. CHANGES TO THIS PRIVACY POLICY</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
                  Policy periodically for any changes.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">9. CONTACT US</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-2 flex items-center">
                  <span className="text-accent">Email:</span>
                  <span className="ml-2">privacy@pixelplay.com</span>
                </p>
                <p className="mt-1 flex items-center">
                  <span className="text-accent">Address:</span>
                  <span className="ml-2">123 Pixel Street, Gaming City, PN 12345</span>
                </p>
              </section>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="flex justify-center space-x-6">
              <Link href="/terms">
                <a className="font-ui text-secondary hover:text-primary transition-colors">Terms of Service</a>
              </Link>
              <Link href="/cookies">
                <a className="font-ui text-secondary hover:text-primary transition-colors">Cookie Policy</a>
              </Link>
              <Link href="/contact">
                <a className="font-ui text-secondary hover:text-primary transition-colors">Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;