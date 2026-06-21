import React from "react";
import "./globals.css";

export const metadata = {
  title: "VoiceOps AI | AI Voice Agents",
  description:
    "AI voice agents for receptionists, auto service shops, restaurants, and healthcare teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
