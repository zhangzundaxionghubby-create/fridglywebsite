import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Fridgly",
  description: "Terms of Use for Fridgly.",
};

const LAST_UPDATED = "16 February 2026";

type HeadingProps = {
  label: string;
  children: React.ReactNode;
};

function SectionH2({ label, children }: HeadingProps): JSX.Element {
  return (
    <h2 className="mt-10 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
      <span className="mr-2">{label}</span>
      {children}
    </h2>
  );
}

function SectionH3({ label, children }: HeadingProps): JSX.Element {
  return (
    <h3 className="mt-8 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
      <span className="mr-2">{label}</span>
      {children}
    </h3>
  );
}

function Term({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <strong className="text-base font-semibold text-neutral-950 sm:text-lg">
      {children}
    </strong>
  );
}

export default function TermsPage(): JSX.Element {
  return (
    <main className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
          Terms of Use
        </h1>

        <p className="mt-3 text-sm text-neutral-600">Last updated: {LAST_UPDATED}</p>

        <div className="prose prose-neutral mt-8 max-w-none">
          <p>
            These Terms of Use ("Terms") govern your access to and use of the Fridgly
            mobile application (the "App") and related services (collectively, the
            "Service"). By downloading, accessing, or using the Service, you agree to
            be bound by these Terms.
          </p>

          <p>If you do not agree, do not use the Service.</p>

          <SectionH2 label="1.">About Fridgly</SectionH2>
          <p>
            The Service is operated by <strong>Fridgly</strong> ("Fridgly", "we", "us",
            "our").
          </p>
          <p>
            <Term>Contact:</Term> davidzhang.businesshelping@gmail.com
          </p>

          <SectionH2 label="2.">Eligibility</SectionH2>
          <p>
            You must be at least <strong>13 years old</strong> to use the Service. If you
            are under 18, you confirm you have permission from a parent or guardian to
            use the Service.
          </p>

          <SectionH2 label="3.">Your Account</SectionH2>

          <SectionH3 label="3.1">Registration</SectionH3>
          <p>
            To use certain features, you may need to create an account. You agree to
            provide accurate and up-to-date information, including your name and email address.
          </p>

          <SectionH3 label="3.2">Account Security</SectionH3>
          <p>
            You are responsible for maintaining the confidentiality of your login
            credentials (including your password) and for all activity on your account.
            Notify us immediately if you suspect unauthorised use.
          </p>

          <SectionH3 label="3.3">Social Login (Google and Apple)</SectionH3>
          <p>
            If you sign up or log in using Google or Apple, you authorise us to receive
            information from the relevant provider (such as your name and email address)
            as needed to authenticate you and create your account. We do not receive or
            store your social login password.
          </p>

          <SectionH3 label="3.4">Managing Your Account</SectionH3>
          <p>
            You can update or delete your account through your account settings in the
            App (where available).
          </p>

          <SectionH2 label="4.">Subscriptions and Recurring Payments</SectionH2>
          <p>
            Fridgly is currently free to use. In the future, we may introduce subscriptions
            or other paid features ("Subscription"). If and when paid features become available:
          </p>
          <ul className="space-y-2">
            <li>Subscription benefits and pricing will be displayed in the App before purchase.</li>
            <li>Subscriptions will be recurring and will automatically renew unless cancelled before the end of the current billing period.</li>
            <li>You will be able to cancel renewal at any time through the relevant app store or payment platform.</li>
            <li>Refunds (if any) will be handled according to the policies of the platform you used to purchase (e.g., Apple App Store / Google Play).</li>
            <li>We may change pricing from time to time. Where required, we will notify you in advance.</li>
          </ul>

          <SectionH2 label="5.">Emails and Communications</SectionH2>

          <SectionH3 label="5.1">Service Messages</SectionH3>
          <p>
            We may send you service-related emails (e.g., verification, security alerts,
            critical updates).
          </p>

          <SectionH3 label="5.2">Marketing Emails (Opt-in)</SectionH3>
          <p>
            In the future, we may offer opt-in newsletters or promotional communications.
            If introduced, you will be able to unsubscribe at any time using the unsubscribe
            link in the email.
          </p>

          <SectionH2 label="6.">Permissions (Camera and Photo Gallery)</SectionH2>
          <p>
            The Service may request access to your Device features such as the camera
            and photo gallery in order to enable certain functionality. You can grant
            or deny these permissions through your Device settings. If you disable
            permissions, some features may not function properly.
          </p>

          <SectionH2 label="7.">Sessions and Local Storage</SectionH2>
          <p>
            The Service may use sessions and local storage on your device to support
            core functionality, remember preferences, and improve user experience. This
            is not advertising-related tracking.
          </p>

          <SectionH2 label="8.">User Content</SectionH2>

          <SectionH3 label="8.1">Your Content</SectionH3>
          <p>
            You may be able to submit, upload, store, or create content in the App
            (e.g., recipes, images, pantry items, notes) ("User Content"). You are
            responsible for your User Content and for ensuring you have the rights to
            upload it.
          </p>

          <SectionH3 label="8.2">Licence to Us</SectionH3>
          <p>
            You grant Fridgly a non-exclusive, worldwide, royalty-free licence to host,
            store, process, display, and use your User Content only as necessary to
            operate, provide, and improve the Service. This includes formatting and
            adapting content for technical purposes (e.g., displaying it on your
            device).
          </p>

          <SectionH3 label="8.3">Prohibited Content</SectionH3>
          <p>
            You agree not to upload content that is unlawful, infringes intellectual
            property rights, contains malware, or violates the rights of others.
          </p>

          <SectionH2 label="9.">Acceptable Use</SectionH2>
          <p>You agree not to:</p>
          <ul className="space-y-2">
            <li>Use the Service for unlawful purposes or in violation of applicable laws</li>
            <li>Attempt to gain unauthorised access to the Service or other users' accounts</li>
            <li>
              Reverse engineer, decompile, or attempt to extract source code (except
              where permitted by law)
            </li>
            <li>Interfere with or disrupt the Service (e.g., introducing viruses, spam, or excessive automated requests)</li>
            <li>Misuse the Service to harass, abuse, or harm others</li>
          </ul>

          <p>
            We may suspend or terminate access if we reasonably believe you have
            violated these Terms.
          </p>

          <SectionH2 label="10.">Health, Nutrition, and AI-Generated Content Disclaimer</SectionH2>
          <p>
            Fridgly provides tools to help you organise food preferences, recipes, and
            nutrition-related tracking. The Service is for informational purposes only
            and is not medical advice.
          </p>

          <SectionH3 label="10.1">AI-Generated Content</SectionH3>
          <p>
            Many features of the Service use artificial intelligence (AI) to generate
            content, including but not limited to: recipe suggestions, cooking steps,
            nutritional and macro estimates, shopping lists, and ingredient extraction
            from images. AI-generated content may be inaccurate, incomplete, or
            unsuitable for your specific needs. You should always verify nutritional
            information, ingredient lists, and cooking instructions independently
            before relying on them.
          </p>

          <SectionH3 label="10.2">Medical Disclaimer</SectionH3>
          <p>
            If you have a medical condition, allergies, dietary needs, or health
            concerns, consult a qualified healthcare professional before making dietary
            changes. Do not disregard professional medical advice because of
            information from the Service.
          </p>

          <SectionH2 label="11.">Intellectual Property</SectionH2>
          <p>
            The Service, including all software, designs, text, graphics, logos, and
            trademarks, is owned by or licensed to Fridgly and is protected by
            intellectual property laws. You are granted a limited, personal,
            non-transferable, non-exclusive licence to use the App for your own lawful
            purposes in accordance with these Terms.
          </p>

          <SectionH2 label="12.">Third-Party Services</SectionH2>
          <p>
            The Service integrates with third-party services, including but not limited to:
          </p>
          <ul className="space-y-2">
            <li><Term>Authentication providers</Term> — Google and Apple (for social login)</li>
            <li><Term>AI service providers</Term> — OpenAI and other large language model providers via OpenRouter (for recipe generation, nutritional estimation, image analysis, and other AI-powered features)</li>
            <li><Term>Analytics</Term> — PostHog (for product analytics, hosted in the EU)</li>
            <li><Term>Image providers</Term> — Pexels (for reference images)</li>
            <li><Term>Cloud infrastructure</Term> — Supabase (for authentication, database, storage, and serverless functions)</li>
          </ul>
          <p>
            Your use of those services may be governed by their own terms and policies.
            Fridgly is not responsible for third-party services.
          </p>

          <SectionH2 label="13.">Termination</SectionH2>
          <p>
            We may suspend or terminate your access to the Service at any time if you
            breach these Terms, we are required to do so by law, or it is necessary to
            protect the Service, users, or our rights.
          </p>
          <p>
            You may stop using the Service at any time. You may delete your account
            via your account settings (where available).
          </p>

          <SectionH2 label="14.">Disclaimer of Warranties</SectionH2>
          <p>
            The Service is provided on an "as is" and "as available" basis. To the
            maximum extent permitted by law, we make no warranties, express or implied,
            including fitness for a particular purpose, accuracy, and non-infringement.
          </p>

          <SectionH2 label="15.">Limitation of Liability</SectionH2>
          <p>
            To the maximum extent permitted by law, Fridgly will not be liable for
            indirect, incidental, special, consequential, or punitive damages, or loss
            of profits, loss of data, or business interruption, arising out of or
            related to your use of the Service.
          </p>
          <p>
            Nothing in these Terms limits liability for fraud, fraudulent
            misrepresentation, death or personal injury caused by negligence, or any
            liability that cannot be excluded under law.
          </p>

          <SectionH2 label="16.">Changes to These Terms</SectionH2>
          <p>
            We may update these Terms from time to time. We will post updated Terms and
            update the "Last updated" date. If changes are material, we may notify you
            within the App or by email.
          </p>

          <SectionH2 label="17.">Governing Law and Jurisdiction</SectionH2>
          <p>
            These Terms are governed by the laws of England and Wales.
            Courts located in England and Wales will have
            jurisdiction, except where consumer protection laws in your country require
            otherwise.
          </p>

          <SectionH2 label="18.">Contact Us</SectionH2>
          <p>If you have questions about these Terms, contact us at:</p>
          <p>
            <Term>Email:</Term> davidzhang.businesshelping@gmail.com, samuelcch9@gmail.com
          </p>

          <SectionH2 label="19.">Assumption of Risk (Food Preparation and Use)</SectionH2>
          <p>
            You acknowledge that preparing, cooking, handling, and consuming food
            involves inherent risks, including allergic reactions, foodborne illness,
            choking hazards, burns, cuts, and other injuries. You are solely
            responsible for ensuring that ingredients and meals are suitable for your
            dietary needs and for taking appropriate food safety precautions (including
            proper storage, hygiene, and cooking temperatures).
          </p>
          <p>
            To the maximum extent permitted by law, Fridgly is not responsible or
            liable for any injury, illness, adverse reaction, loss, damage, or death
            arising out of or related to your use of the Service, including any
            reliance on recipes, recommendations, nutritional information, or other
            content provided through the Service.
          </p>
          <p>
            Nothing in this section excludes or limits liability that cannot be
            excluded under applicable law (including liability for death or personal
            injury caused by our negligence, fraud, or fraudulent misrepresentation).
          </p>
        </div>
      </div>
    </main>
  );
}
