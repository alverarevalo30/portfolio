"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "../../../../public/images/icons/github.svg";
import LinkedInIcon from "../../../../public/images/icons/linkedin.svg";
import FacebookIcon from "../../../../public/images/icons/facebook.svg";
import InstagramIcon from "../../../../public/images/icons/instagram.svg";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

const EmailSection = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 mt-12 md:mt-12 py-8 sm:py-12 md:py-16 gap-4 px-0 lg:px-10"
      id="contact"
    >
      <div className="mb-8 md:mb-0">
        <h2 className="text-xl font-bold text-white my-2">Let's Connect</h2>
        <p className="text-[var(--color-muted)] mb-4 max-w-md">
          I'm currently open to new opportunities and collaborations. Feel free
          to reach out — whether you have a question, a project in mind, or just
          want to say hello. I'll do my best to respond promptly!
        </p>
        <div className="socials flex flex-row gap-4 mt-4">
          <Link href="https://github.com/alverarevalo30">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </Link>
          <Link href="https://www.linkedin.com/in/alverarevalo/">
            <Image
              src={LinkedInIcon}
              alt="LinkedIn Icon"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.instagram.com/alverarevalo/">
            <Image
              src={InstagramIcon}
              alt="Instagram Icon"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.facebook.com/alver.arevalo.30/">
            <Image
              src={FacebookIcon}
              alt="Facebook Icon"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit} ref={formRef}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[var(--color-card-bg)] border border-[var(--color-border)] placeholder-[var(--color-placeholder)] text-[var(--color-input-text)] text-sm rounded-lg block w-full p-2.5"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[var(--color-card-bg)] border border-[var(--color-border)] placeholder-[var(--color-placeholder)] text-[var(--color-input-text)] text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[var(--color-card-bg)] border border-[var(--color-border)] placeholder-[var(--color-placeholder)] text-[var(--color-input-text)] text-sm rounded-lg block w-full p-2.5 min-h-[120px] max-h-[300px]"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
