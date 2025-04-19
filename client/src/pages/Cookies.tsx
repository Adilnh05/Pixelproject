import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Cookies = () => {
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
            <h1 className="font-pixel text-primary text-3xl mb-4">COOKIE <span className="text-secondary">POLICY</span></h1>
            <p className="font-body text-xl">Last Updated: April 14, 2024</p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-pixel">
            <div className="space-y-8 font-body text-lg">
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">1. INTRODUCTION</h2>
                <p>
                  This Cookie Policy explains how PixelPlay uses cookies and similar technologies to recognize you when you 
                  visit our platform. It explains what these technologies are and why we use them, as well as your rights to 
                  control our use of them.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">2. WHAT ARE COOKIES?</h2>
                <p>
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                  Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well 
                  as to provide reporting information.
                </p>
                <p className="mt-2">
                  Cookies set by the website owner (in this case, PixelPlay) are called "first-party cookies". Cookies set by 
                  parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party 
                  features or functionality to be provided on or through the website (such as advertising, interactive content, 
                  and analytics).
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">3. WHY DO WE USE COOKIES?</h2>
                <p>We use cookies for several reasons:</p>
                
                <h3 className="font-ui text-accent mt-4 mb-2">3.1 Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function and cannot be switched off in our systems. They are 
                  usually only set in response to actions made by you which amount to a request for services, such as setting 
                  your privacy preferences, logging in, or filling in forms.
                </p>
                
                <h3 className="font-ui text-accent mt-4 mb-2">3.2 Performance Cookies</h3>
                <p>
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of 
                  our site. They help us to know which pages are the most and least popular and see how visitors move around 
                  the site.
                </p>
                
                <h3 className="font-ui text-accent mt-4 mb-2">3.3 Functionality Cookies</h3>
                <p>
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by 
                  us or by third-party providers whose services we have added to our pages.
                </p>
                
                <h3 className="font-ui text-accent mt-4 mb-2">3.4 Targeting Cookies</h3>
                <p>
                  These cookies may be set through our site by our advertising partners. They may be used by those companies 
                  to build a profile of your interests and show you relevant advertisements on other sites.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">4. SPECIFIC COOKIES WE USE</h2>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left">Cookie Name</th>
                        <th className="border border-border p-3 text-left">Purpose</th>
                        <th className="border border-border p-3 text-left">Duration</th>
                        <th className="border border-border p-3 text-left">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3">session_id</td>
                        <td className="border border-border p-3">Authentication and session management</td>
                        <td className="border border-border p-3">Session</td>
                        <td className="border border-border p-3">Essential</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">preferences</td>
                        <td className="border border-border p-3">Stores user preferences</td>
                        <td className="border border-border p-3">1 year</td>
                        <td className="border border-border p-3">Functionality</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">_ga</td>
                        <td className="border border-border p-3">Google Analytics - Distinguishes users</td>
                        <td className="border border-border p-3">2 years</td>
                        <td className="border border-border p-3">Performance</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">_gid</td>
                        <td className="border border-border p-3">Google Analytics - Distinguishes users</td>
                        <td className="border border-border p-3">24 hours</td>
                        <td className="border border-border p-3">Performance</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">_fbp</td>
                        <td className="border border-border p-3">Facebook Pixel - Used for advertising</td>
                        <td className="border border-border p-3">3 months</td>
                        <td className="border border-border p-3">Targeting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">5. HOW CAN YOU CONTROL COOKIES?</h2>
                <p>
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by 
                  setting your preferences in the Cookie Consent Manager that we display when you first visit our website.
                </p>
                <p className="mt-2">
                  You can also control cookies through your browser settings. Most web browsers allow some control of most 
                  cookies through browser settings. To find out more about cookies, including how to see what cookies have been 
                  set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary underline">www.allaboutcookies.org</a>.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">6. WHAT ABOUT OTHER TRACKING TECHNOLOGIES?</h2>
                <p>
                  Cookies are not the only way to recognize or track visitors to a website. We may use other, similar 
                  technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). 
                  These are tiny graphics files that contain a unique identifier that enable us to recognize when someone 
                  has visited our website or opened an email that we have sent them.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">7. CHANGES TO THIS COOKIE POLICY</h2>
                <p>
                  We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new 
                  Cookie Policy on this page and updating the "Last Updated" date at the top.
                </p>
              </section>
              
              <section>
                <h2 className="font-pixel text-primary text-xl mb-4">8. CONTACT US</h2>
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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
              <Link href="/privacy">
                <a className="font-ui text-secondary hover:text-primary transition-colors">Privacy Policy</a>
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

export default Cookies;