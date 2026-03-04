import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Google Search Console verification
    const meta = document.createElement("meta");
    meta.name = "google-site-verification";
    meta.content = "ANWj1CioKJPzfcszNsRDfIdcstPh0jA3TOsdXmpKoIY";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-border px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-semibold tracking-tight">My Site</h1>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Welcome</h2>
          <p className="text-muted-foreground text-lg">
            This site is under construction. Check back soon.
          </p>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
