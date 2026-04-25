import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navya Abrol — Robotics Developer & Mechatronics Engineer",
  description: "Building autonomous robotic systems that move beyond simulation into real-world deployment. ROS2, Sensor Fusion, Autonomous Navigation, Embedded Systems.",
  keywords: ["Robotics Developer","Mechatronics Engineer","ROS2","Autonomous Systems","Sensor Fusion","SLAM","Nav2","Embedded Systems","Navya Abrol"],
  authors: [{ name: "Navya Abrol" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Display: Playfair Display — editorial, fashion, luxury presence */}
        {/* Sans: DM Sans — clean, refined, engineering credibility */}
        {/* Mono: DM Mono — technical accents, labels */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800&family=DM+Sans:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
