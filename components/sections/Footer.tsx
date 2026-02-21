export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white py-10">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div>
            <div className="text-sm font-semibold text-neutral-950">Fridgly</div>
            <p className="mt-1 text-sm text-neutral-600">
              Simplify and personalize.
            </p>
            <p className="mt-4 text-xs text-neutral-500">
              © {new Date().getFullYear()} Fridgly.
            </p>
          </div>

          {/* Right */}
          <nav className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6">
            <a
              href="/privacy"
              className="text-neutral-700 transition hover:text-neutral-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/25 focus:ring-offset-2 focus:ring-offset-white rounded-full"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-neutral-700 transition hover:text-neutral-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/25 focus:ring-offset-2 focus:ring-offset-white rounded-full"
            >
              Terms of Use
            </a>
            <a
              href="/contact"
              className="text-neutral-700 transition hover:text-neutral-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/25 focus:ring-offset-2 focus:ring-offset-white rounded-full"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
