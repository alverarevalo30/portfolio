import Image from "next/image";
import React from "react";
import MyLogo from "../../../../public/Logo-gradient.svg";

const FooterSection = () => {
  return (
    <footer className="footer border z-10 border-t-[var(--color-border)] border-l-transparent border-r-transparent text-white flex justify-center">
      <div className="container p-12 flex justify-between items-center">
        <span><Image src={MyLogo} alt="Github Icon" width={60} height={60} /></span>
        <p className="text-slate-300">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
