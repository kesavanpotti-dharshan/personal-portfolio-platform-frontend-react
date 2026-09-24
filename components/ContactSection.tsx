import React, { useState } from "react";
import {
  Mail,
  ChevronRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "../data";

// Set this in a .env file: VITE_CONTACT_API_URL=https://personal-portfolio-contact-function-gseaezhbataxhves.canadacentral-01.azurewebsites.net/api/SubmitContactForm?code=<your-function-key>
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL as string;

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full bg-ground border border-line rounded-sm px-6 py-4 text-ink placeholder:text-muted-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300 font-medium font-sans disabled:opacity-60";

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(
    null,
  );

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!CONTACT_API_URL) {
      setFormStatus("error");
      setFormErrorMessage(
        "Contact form is not configured. Please email me directly instead.",
      );
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: (formData.get("from_name") as string) ?? "",
      email: (formData.get("from_email") as string) ?? "",
      subject: (formData.get("subject") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
    };

    setFormStatus("submitting");
    setFormErrorMessage(null);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(
          text || `Request failed with status ${response.status}`,
        );
      }

      setFormStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setFormStatus("error");
      setFormErrorMessage(
        "Something went wrong sending your message. Please try again or email me directly.",
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-ground relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal bg-raised border border-line rounded-xl p-10 md:p-20 lg:p-24 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-mono text-5xl md:text-6xl font-extrabold mb-8 leading-[1.1] tracking-tighter text-ink text-balance">
                Let's build the{" "}
                <span className="text-accent">next big thing</span>{" "}
                together.
              </h2>
              <p className="text-muted-1 text-xl mb-12 leading-relaxed font-medium font-sans">
                Looking for a technical leader to navigate your next digital
                transformation? My inbox is always open.
              </p>

              <div className="space-y-8">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-6 group max-w-fit"
                >
                  <div className="w-16 h-16 border border-line rounded-lg flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="font-mono text-muted-3 text-xs uppercase tracking-[0.2em] mb-1">
                      Email
                    </p>
                    <p className="text-2xl font-bold tracking-tight text-ink font-sans">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-ground border border-line rounded-lg p-10 reveal delay-300">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 border border-cool/50 rounded-lg flex items-center justify-center mb-6 text-cool">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-ink mb-2 font-sans">
                    Message sent!
                  </h4>
                  <p className="text-muted-1 mb-8 font-sans">
                    Thanks for reaching out — I'll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormStatus("idle")}
                    className="text-accent font-mono text-sm uppercase tracking-widest hover:brightness-110 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="from_name"
                        className="font-mono text-xs text-muted-2 uppercase tracking-widest ml-1"
                      >
                        Name
                      </label>
                      <input
                        id="from_name"
                        name="from_name"
                        type="text"
                        className={inputClasses}
                        placeholder="John Doe"
                        required
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="from_email"
                        className="font-mono text-xs text-muted-2 uppercase tracking-widest ml-1"
                      >
                        Email
                      </label>
                      <input
                        id="from_email"
                        name="from_email"
                        type="email"
                        className={inputClasses}
                        placeholder="john@company.com"
                        required
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="font-mono text-xs text-muted-2 uppercase tracking-widest ml-1"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className={inputClasses}
                      placeholder="Project Opportunity"
                      required
                      disabled={formStatus === "submitting"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="font-mono text-xs text-muted-2 uppercase tracking-widest ml-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      placeholder="How can I help you?"
                      required
                      disabled={formStatus === "submitting"}
                    ></textarea>
                  </div>

                  {formStatus === "error" && (
                    <div className="flex items-start gap-3 p-4 border border-critical/40 bg-critical/10 rounded-sm text-critical text-sm font-semibold font-sans">
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      <span>
                        {formErrorMessage ??
                          "Something went wrong. Please try again."}
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-accent text-accent-ink font-mono font-bold uppercase tracking-widest py-5 rounded-md hover:brightness-110 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ChevronRight size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
