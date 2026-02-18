import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faq | Fridgly",
  description: "Contact Fridgly support.",
};

export default function FaqPage(): JSX.Element {
  return (
    <main className="w-full bg-white">
      <div className="mx-auto max-w-screen-md px-6 py-12 sm:py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
          Frequently Asked Questions: <br/>
          Send us an email!
        </h1>

        <p className="mt-4 text-base text-neutral-600">
          Need help, want to share feedback, or have a business enquiry? Email us and
          we’ll get back to you as soon as we can.
        </p>

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-950">Email</h2>

          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm font-medium text-neutral-700">General & Support</p>
              <a
                href="mailto:samuelcch9@gmail.com"
                className="text-base font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600"
              >
                samuelcch9@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm font-medium text-neutral-700">Business Enquiries</p>
              <a
                href="mailto:davidzhang.businesshelping@gmail.com"
                className="text-base font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600"
              >
                davidzhang.businesshelping@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-neutral-50 p-4">
            <p className="text-sm text-neutral-700">
              When contacting us, please include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li>Your account email (if relevant)</li>
              <li>Your device + iOS/Android version</li>
              <li>A short description of the issue</li>
              <li>Screenshots (optional)</li>
            </ul>
          </div>


        </div>
      </div>
    </main>
  );
}
