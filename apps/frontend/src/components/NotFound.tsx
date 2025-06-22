import { Link } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";

export function NotFound({ children }: PropsWithChildren) {
  return (
    <div className="space-y-2 p-2">
      <div>
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <p className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => window.history.back()}
          className="rounded-sm bg-emerald-500 px-2 py-1 text-sm font-black uppercase text-white"
        >
          Go back
        </button>
        <Link
          to="/"
          className="rounded-sm bg-primary px-2 py-1 text-sm font-black uppercase text-white"
        >
          Start Over
        </Link>
      </p>
    </div>
  );
}
