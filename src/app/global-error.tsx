"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          padding: "1rem",
          textAlign: "center",
          backgroundColor: "#0a0a0b",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          Something went wrong
        </p>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 600, margin: 0 }}>The app failed to load.</h1>
        <button
          type="button"
          onClick={reset}
          style={{
            borderRadius: "9999px",
            padding: "0.75rem 1.5rem",
            fontSize: "0.875rem",
            fontWeight: 600,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
