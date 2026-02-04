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
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState(""); // Spam protection

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Spam protection - if honeypot is filled, silently reject
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

      // Reset form
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
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
                    // placeholder="What’s your good name?"
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
                    // placeholder="What’s your email address?"
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
                    // placeholder="How can I help you?"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" >
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
  );
};

export default Contact;