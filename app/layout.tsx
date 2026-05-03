import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PR Reviewer Scheduler – Auto-assign GitHub PR reviewers",
  description: "Analyzes code changes and team expertise to intelligently assign PR reviewers based on availability and workload."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="27f2b14b-71c6-4769-9225-e8812f7cf558"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
