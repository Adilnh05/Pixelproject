import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Terms = () => {
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
            <h1 className="font-pixel text-primary text-3xl mb-4">TERMS OF <span className="text-secondary">SERVICE</span></h1>
            <p className="font-body text-xl">Last Updated: April 14, 2024</p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-pixel">
            <div className="space-y-8 font-body text-lg">
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">1. ACCEPTANCE OF TERMS</h2>
                <p>
                  Welcome to PixelPlay. By accessing or using our platform, you agree to be bound by these Terms of Service. 
                  If you do not agree to all of these terms, you may not access or use our services.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">2. ELIGIBILITY</h2>
                <p>
                  You must be at least 13 years old to use our services. By using our platform, you represent and
                  warrant that you meet the eligibility requirements. If you are using the services on behalf of an organization,
                  you represent and warrant that you have the authority to bind that organization to these terms.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">3. USER ACCOUNTS</h2>
                <p>
                  When you create an account, you must provide accurate and complete information. You are solely responsible
                  for the activity that occurs on your account, and you must keep your account password secure. You must
                  notify us immediately of any breach of security or unauthorized use of your account.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">4. USER CONTENT</h2>
                <p>
                  Our services may allow you to upload, submit, store, send, or receive content. You retain ownership rights in
                  your content. However, by uploading content, you grant PixelPlay a worldwide, royalty-free, and non-exclusive
                  license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or
                  future media.
                </p>
                <p className="mt-2">
                  You represent and warrant that you own or have the necessary rights to the content you upload and that the
                  content does not violate the rights of any third party.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">5. VIRTUAL CURRENCY AND ITEMS</h2>
                <p>
                  Our platform may include virtual currency (Pixels) that can be purchased or earned through gameplay.
                  Virtual currency has no real-world value and cannot be exchanged for cash or other items of monetary value.
                  We reserve the right to manage, control, modify, or eliminate virtual currency at any time.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">6. PROHIBITED CONDUCT</h2>
                <p>When using our services, you agree not to:</p>
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Post content that is offensive, harmful, or inappropriate</li>
                  <li>Use the services for any illegal or unauthorized purpose</li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>Attempt to gain unauthorized access to any part of the platform</li>
                  <li>Engage in any form of automated data collection</li>
                  <li>Impersonate another user or person</li>
                </ul>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">7. TERMINATION</h2>
                <p>
                  We reserve the right to suspend or terminate your access to our services at any time for any reason without
                  notice or liability. Upon termination, your right to use the services will immediately cease, and you must cease
                  all use of the services.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">8. DISCLAIMER OF WARRANTIES</h2>
                <p>
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or
                  implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">9. LIMITATION OF LIABILITY</h2>
                <p>
                  To the maximum extent permitted by law, PixelPlay shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages resulting from your use of or inability to use our services.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">10. CHANGES TO TERMS</h2>
                <p>
                  We reserve the right to modify these terms at any time. If we make material changes, we will notify you by
                  email or by posting a notice on our platform. Your continued use of the services after such notification
                  constitutes your acceptance of the new terms.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">11. GOVERNING LAW</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of the United States, without
                  regard to its conflict of laws principles.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">12. CONTACT US</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-2 flex items-center">
                  <span className="text-accent">Email:</span>
                  <span className="ml-2">legal@pixelplay.com</span>
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
              <Link href="/privacy">
                <a className="font-ui text-secondary hover:text-primary transition-colors">Privacy Policy</a>
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

export default Terms;