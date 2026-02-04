'use client'
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import TitleHeader from "../components/TitleHeader";
import dynamic from "next/dynamic";
import { useTranslation } from "@/hooks/useTranslation";

const ContactExperience = dynamic(
  () => import("../components/models/contact/ContactExperience"),
  { ssr: false }
);

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypot) {
      setForm({ name: "", email: "", message: "" });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Failed to send');

      setForm({ name: "", email: "", message: "" });
      setShowSuccess(true);
    } catch (error) {
      console.error("Contact Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-black-100 border border-black-50 rounded-2xl p-8 mx-4 max-w-md text-center shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{t.contact.successTitle}</h3>
            <p className="text-white-50 mb-6">{t.contact.successMessage}</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              {t.contact.close}
            </button>
          </div>
        </div>
      )}

      <section id="contact" className="flex-center section-padding">
        <div className="w-full h-full 3xl:px-28 2xl:px-20 xl:px-12">
          <TitleHeader
            title={t.contact.title}
            sub={t.contact.subtitle}
          />
          <div className="grid-12-cols mt-16">
            <div className="xl:col-span-5">
              <div className="flex-center card-border rounded-xl p-10">
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-7"
                >
                  {/* Honeypot field - hidden from users, catches bots */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="name">{t.contact.name}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">{t.contact.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message">{t.contact.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>

                  <button type="submit">
                    <div className="cta-button group">
                      <div className="bg-circle" />
                      <p className="text">
                        {loading ? t.contact.sending : t.contact.send}
                      </p>
                      <div className="arrow-wrapper">
                        <Image src="/images/arrow-down.svg" alt="arrow" width={24} height={24} />
                      </div>
                    </div>
                  </button>
                </form>
              </div>
            </div>
            <div className="xl:col-span-7 min-h-96">
              <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                <ContactExperience />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
