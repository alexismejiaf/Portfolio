"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
        Something went wrong
      </p>
      <h1 className="text-2xl font-semibold text-text sm:text-3xl">
        This section hit an unexpected error.
      </h1>
      <button
        type="button"
        onClick={reset}
        className="glass glass-interactive inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-text"
      >
        Try again
      </button>
    </div>
  );
}
