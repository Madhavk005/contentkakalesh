"use client";

import { Download } from "lucide-react";

export const PrintButton = () => {
  return (
    <button 
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 font-medium hover:opacity-70 transition-opacity cursor-pointer"
    >
      <Download className="w-4 h-4" /> Save PDF
    </button>
  );
};
