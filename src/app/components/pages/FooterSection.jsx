import React from "react";

const FooterSection = () => {
  return (
    <footer className="footer border z-10 border-t-[var(--color-border)] border-l-transparent border-r-transparent text-white flex justify-center">
      <div className="container p-12 flex justify-between">
        <span>LOGO</span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
