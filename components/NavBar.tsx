import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
] as const;

const styles = {
  header:
  "sticky top-0 z-50 bg-white/70 backdrop-blur dark:bg-neutral-950/60",
  container: "mx-auto max-w-screen-xl px-4 sm:px-6",
  row: "flex h-16 items-center justify-between",
  link:
    "rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-white/10",
  cta:
  "ml-2 inline-flex items-center justify-center overflow-hidden rounded-[10px] transition focus:outline-none focus:ring-4 focus:ring-emerald-500/25 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950",
  mobileBtn:
    "list-none rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm transition hover:bg-neutral-50 dark:border-white/15 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-white/10",
  mobilePanel:
    "absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] dark:border-white/15 dark:bg-neutral-950",
  mobileItem:
    "block rounded-xl px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-white/10",
  mobileCta:
    "mt-1 inline-flex w-full items-center justify-center overflow-hidden rounded-[10px] transition focus:outline-none focus:ring-4 focus:ring-emerald-500/25 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950",
};

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="grid size-10 place-items-center rounded-2xl bg-neutral-900 text-white">
       <Image
        src="/fridglylogo.png"
        alt="Fridgly logo"
        width={18}
        height={18}
        className="opacity-95"
        />
      </div>

      <div className="leading-tight">
        <div className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Fridgly</div>
        <div className="text-xs text-neutral-500 dark:text-neutral-400">AI powered nutritionist</div>
      </div>
    </Link>
  );
}

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <Brand />

          {/* Desktop */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </Link>
            ))}
            <Link href="/#cta" aria-label="Download on the App Store" className={styles.cta}>
              <Image src="/download.svg" alt="" width={120} height={40} priority />
            </Link>
          </nav>

          {/* Mobile */}
          <div className="md:hidden">
            <details className="group relative">
              <summary className={styles.mobileBtn}>Menu</summary>
              <div className={styles.mobilePanel}>
                <div className="p-2">
                  {links.map((l) => (
                    <Link key={l.href} href={l.href} className={styles.mobileItem}>
                      {l.label}
                    </Link>
                  ))}
                  <Link
                    href="/#cta"
                    aria-label="Download on the App Store"
                    className={styles.mobileCta}
                  >
                    <Image src="/download.svg" alt="" width={120} height={40} />
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
