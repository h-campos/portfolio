import type { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <p className="text-2xl font-spaceGrotesk">
        This is a Next.js app with Tailwind CSS
      </p>
    </div>
  );
}