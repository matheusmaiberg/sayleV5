import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactForm as ContactFormType } from "./types";
import { useTranslation } from "@/hooks/useTranslation";

export function ContactForm() {
  const { t } = useTranslation();

  const [form, setForm] = useState<ContactFormType>({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex-1 w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-2xl p-6 lg:p-8 min-h-[500px] flex flex-col justify-center self-stretch mx-auto lg:mx-0">
      <div className="mb-4">
        <h1 className="text-xl lg:text-1xl font-semibold mb-2 text-gray-900">
          {t('hero.contact.title')}
        </h1>
        <h2 className="text-sm font-thin text-gray-900">
          {t('hero.contact.subtitle')}
        </h2>
      </div>
      <form
        className="space-y-4 flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            name="name"
            required
            placeholder={t('hero.contact.name_placeholder')}
            value={form.name}
            onChange={handleChange}
            className="w-full px-5 py-3 border text-sm border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            required
            placeholder={t('hero.contact.email_placeholder')}
            value={form.email}
            onChange={handleChange}
            className="w-full px-5 py-3 border text-sm border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          />
        </div>
        <div>
          <input
            type="tel"
            name="whatsapp"
            required
            placeholder={t('hero.contact.whatsapp_placeholder')}
            value={form.whatsapp}
            onChange={handleChange}
            className="w-full px-5 py-3 border text-sm border-gray-300 bg-white text-gray-900 rounded-md text-smfocus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-brand-gradient text-white font-bold py-6 rounded-md hover:opacity-90 transition-all duration-300 mt-5 text-lg shadow-lg hover:shadow-xl"
        >
          {t('hero.contact.submit_button')}
        </Button>
        {submitted && (
          <p className="text-primary text-sm mt-4 text-center">
            {t('hero.contact.success_message')}
          </p>
        )}
      </form>
    </div>
  );
}
