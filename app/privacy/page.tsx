import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Fridgly",
  description: "Privacy Policy for Fridgly.",
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

export default function PrivacyPage(): JSX.Element {
  return (
    <main className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-3 text-sm text-neutral-600">Last Updated: {LAST_UPDATED}</p>

        <div className="prose prose-neutral mt-8 max-w-none">
          <p>
            This Privacy Policy describes how Fridgly (“we”, “us”, “our”) collects,
            uses, processes, shares, and protects your information when you use the
            Fridgly mobile application and related services (collectively, the
            “Service”). By using the Service, you acknowledge this Privacy Policy.
          </p>

          <SectionH2 label="1.">Interpretation and Definitions</SectionH2>

          <SectionH3 label="1.1">Interpretation</SectionH3>
          <p>
            Words with capitalised initial letters have meanings defined under the
            following conditions. The following definitions shall have the same
            meaning regardless of whether they appear in singular or plural.
          </p>

          <SectionH3 label="1.2">Definitions</SectionH3>
          <ul className="space-y-2">
            <li>
              <Term>Account</Term> means the unique profile created for you to
              access the Service.
            </li>
            <li>
              <Term>App</Term> means the mobile application titled “Fridgly”.
            </li>
            <li>
              <Term>Company</Term>, <Term>We</Term>, <Term>Us</Term>, or{" "}
              <Term>Our</Term> means Fridgly{" "}
              
            </li>
            <li>
              <Term>Device</Term> means any device that can access the Service
              (such as a smartphone or tablet).
            </li>
            <li>
              <Term>Personal Data</Term> means any information that identifies you
              or can reasonably be linked to you.
            </li>
            <li>
              <Term>Sensitive Personal Data</Term> means Personal Data that may be
              subject to enhanced protections under applicable laws (for example,
              information revealing racial or ethnic origin, or religious or
              philosophical beliefs).
            </li>
            <li>
              <Term>Usage Data</Term> means data collected automatically through
              use of the Service, including device information, activity logs, and
              analytics data.
            </li>
            <li>
              <Term>User Content</Term> means content you upload, submit, or store
              through the Service, including text entries, meal logs, recipes,
              pantry items, preferences, and other inputs.
            </li>
            <li>
              <Term>You</Term> means the individual using the Service, or the
              organisation on whose behalf the Service is used.
            </li>
          </ul>

          <SectionH2 label="2.">Types of Data We Collect</SectionH2>
          <p>
            We collect the categories of data described below. Some categories may
            qualify as sensitive personal information under certain privacy laws
            depending on what you choose to provide.
          </p>

          <SectionH3 label="2.1">Personal Data You Provide</SectionH3>
          <p>When you create an Account or use the Service, we may collect:</p>
          <ul className="space-y-2">
            <li>First name and last name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Username and password (or other authentication credentials)</li>
            <li>
              Contact preferences (for example, whether you want to receive
              marketing emails)
            </li>
            <li>Billing address (if applicable)</li>
          </ul>

          <p>
            <Term>Payment information:</Term> If you purchase a subscription,
            payments are typically processed by third-party payment providers (for
            example, Apple App Store / Google Play or another processor). We do{" "}
            <strong>not</strong> store full debit/credit card numbers. We may
            receive limited payment-related information, such as subscription
            status, plan type, and transaction identifiers, to provide the Service
            and manage subscriptions.
          </p>

          <SectionH3 label="2.2">Account and Authentication Data</SectionH3>
          <p>To enable login and secure your Account, we may process:</p>
          <ul className="space-y-2">
            <li>Login credentials (username/password) or authentication tokens</li>
            <li>Account identifiers</li>
            <li>
              Security and verification information (as needed to protect the
              Service)
            </li>
          </ul>

          <SectionH3 label="2.3">User Content</SectionH3>
          <p>
            Because Fridgly is a nutrition and food-preference app, we collect User
            Content you choose to provide, such as:
          </p>
          <ul className="space-y-2">
            <li>Food preferences and dislikes</li>
            <li>Dietary preferences (e.g., halal, vegetarian)</li>
            <li>
              Meal and recipe data (recipes you create/save, ingredients, meal
              planning entries)
            </li>
            <li>Pantry information (items you track and related notes)</li>
          </ul>

          <SectionH3 label="2.4">Sensitive Personal Data</SectionH3>
          <p>
            You may choose to provide sensitive information including information
            revealing racial or ethnic origin and religious or philosophical
            beliefs. This may occur, for example, where you enter dietary
            preferences or restrictions that can imply religion/philosophy (e.g.,
            halal) or cultural diet patterns. Where required by law, we process
            sensitive personal data based on your explicit consent or other lawful
            basis permitted by applicable law.
          </p>

          <SectionH3 label="2.5">Usage Data</SectionH3>
          <p>We may automatically collect certain Usage Data, including:</p>
          <ul className="space-y-2">
            <li>Internet Protocol (IP) address</li>
            <li>App activity logs and time stamps</li>
            <li>Interaction data (features used, screens viewed, actions taken)</li>
            <li>Crash logs and diagnostic data</li>
            <li>Performance information (e.g., load times, errors)</li>
          </ul>

          <SectionH3 label="2.6">Push Notifications</SectionH3>
          <p>
            If you enable push notifications, we may send you service-related
            notifications (for example, reminders or account alerts). You can
            control notifications through your device settings.
          </p>

          <SectionH3 label="2.7">Social Login</SectionH3>
          <p>
            You may be able to register or log in using third-party accounts (e.g.,
            Google, Facebook, Apple, or similar providers). If you use social
            login, we may receive certain account information from the provider,
            such as a unique identifier and basic profile details, depending on
            your provider settings.
          </p>

          <SectionH2 label="3.">How We Use Your Data</SectionH2>
          <p>We use collected data for the following purposes:</p>

          <SectionH3 label="3.1">To Provide and Maintain the Service</SectionH3>
          <ul className="space-y-2">
            <li>Create and manage Accounts</li>
            <li>Authenticate users and secure access</li>
            <li>
              Provide app functionality (saving preferences, recipes, pantry, and
              related features)
            </li>
            <li>Provide subscription access (where applicable)</li>
          </ul>

          <SectionH3 label="3.2">To Personalise Your Experience</SectionH3>
          <ul className="space-y-2">
            <li>Store and apply your food preferences and dislikes</li>
            <li>Tailor content and recommendations within the Service</li>
          </ul>

          <SectionH3 label="3.3">To Improve and Develop the Service</SectionH3>
          <ul className="space-y-2">
            <li>Monitor usage and performance</li>
            <li>Fix bugs, troubleshoot, and improve reliability</li>
            <li>Understand how users interact with the Service</li>
          </ul>

          <SectionH3 label="3.4">AI-Based Features</SectionH3>
          <p>
            The Service includes AI-based features (including machine learning
            models and AI search). Where you provide User Content as part of using
            these features, we process that information to deliver the
            functionality you requested. We may use third-party AI platforms to
            support these features.
          </p>

          <SectionH3 label="3.5">Communications</SectionH3>
          <ul className="space-y-2">
            <li>Respond to support requests and enquiries</li>
            <li>
              Send service-related notices (e.g., important updates, security
              notices)
            </li>
            <li>Send push notifications (if enabled)</li>
          </ul>

          <SectionH3 label="3.6">Marketing and Promotional Communications</SectionH3>
          <p>
            Where permitted by law, we may send marketing communications. You can
            unsubscribe by clicking the unsubscribe link at the bottom of our
            marketing emails.
          </p>

          <SectionH3 label="3.7">Security, Fraud Prevention, and Compliance</SectionH3>
          <ul className="space-y-2">
            <li>Protect the Service and users from abuse or fraud</li>
            <li>Enforce our terms and policies</li>
            <li>Comply with legal obligations and valid requests from authorities</li>
          </ul>

          <SectionH3 label="3.8">Business Transfers</SectionH3>
          <p>
            If we are involved in a merger, acquisition, restructuring, financing,
            or sale of assets, your information may be transferred as part of that
            transaction, as permitted by law.
          </p>

          <SectionH2 label="4.">Legal Bases for Processing (UK/EU)</SectionH2>
          <p>Where applicable, we rely on the following legal bases:</p>
          <ul className="space-y-2">
            <li>
              <Term>Consent</Term> (including explicit consent where required for
              sensitive personal data)
            </li>
            <li>
              <Term>Performance of a Contract</Term> (to provide the Service you
              request)
            </li>
            <li>
              <Term>Legitimate Interests</Term> (e.g., improving and securing the
              Service, and sending marketing where permitted and balanced against
              your rights)
            </li>
            <li>
              <Term>Legal Obligation</Term> (to comply with applicable laws)
            </li>
            <li>
              <Term>Vital Interests</Term> (where necessary to protect someone’s
              life)
            </li>
          </ul>

          <SectionH2 label="5.">Sharing of Personal Data</SectionH2>
          <p>
            We do not sell your Personal Data. We may share information only in
            limited circumstances:
          </p>

          <SectionH3 label="5.1">Service Providers</SectionH3>
          <p>
            We may share information with vendors who help operate the Service
            (for example, hosting, analytics/diagnostics, customer support tools,
            and infrastructure providers). These providers may process Personal
            Data only on our instructions and must protect it.
          </p>

          <SectionH3 label="5.2">Business Affiliates and Business Partners</SectionH3>
          <p>
            If we share information with business affiliates or business partners,
            we will limit it to what is necessary, and where possible we will
            share data in an aggregated or de-identified form. Examples of
            categories that may be shared (if applicable) include food preferences
            and likes/dislikes. We do not share such data unless we have an
            appropriate lawful basis and suitable safeguards.
          </p>

          <SectionH3 label="5.3">Legal Compliance and Protection</SectionH3>
          <p>
            We may disclose information if required to comply with law, respond to
            lawful requests, protect our rights, or protect users’ safety.
          </p>

          <SectionH3 label="5.4">With Your Consent</SectionH3>
          <p>
            We may share information where you instruct us to do so or provide
            consent.
          </p>

          <SectionH3 label="5.5">Aggregated or Anonymised Data</SectionH3>
          <p>
            We may share aggregated or anonymised information that does not
            identify you for analytics, research, or business purposes.
          </p>

          <SectionH2 label="6.">Your Privacy Rights and Choices</SectionH2>
          <p>
            Depending on your jurisdiction (including the UK/EU, Switzerland, and
            Canada), you may have rights to access, correct, delete, or receive a
            copy of your data (where applicable), withdraw consent, and object to
            or restrict certain processing.
          </p>

          <SectionH3 label="6.1">Account Settings and Consent Preferences</SectionH3>
          <p>
            You can update certain settings and consent preferences in your
            account settings.
          </p>

          <SectionH3 label="6.2">Updating or Deleting Your Account</SectionH3>
          <p>
            To update or delete your Account, log in to your account settings and
            update your user account. Deleting your Account is intended to remove
            Personal Data associated with your Account, subject to the retention
            practices described below.
          </p>

          <SectionH2 label="7.">Retention of Data</SectionH2>
          <p>
            We retain your information for as long as you have an account with
            us, and as otherwise necessary for the purposes described in this
            Policy. We may retain certain limited data for longer where required
            for security, fraud prevention, dispute resolution, or legal
            compliance.
          </p>

          <SectionH2 label="8.">International Data Transfers</SectionH2>
          <p>
            Fridgly expects international users. Your information may be processed
            in countries outside your jurisdiction depending on where we or our
            service providers operate. Where required by law, we implement
            appropriate safeguards for international transfers.
          </p>

          <SectionH2 label="9.">Security</SectionH2>
          <p>
            We use appropriate administrative, technical, and organisational
            measures to protect Personal Data. However, no online service is
            completely secure. If we experience a security incident, we will
            comply with applicable breach notification obligations.
          </p>

          <SectionH2 label="10.">Children’s Privacy</SectionH2>
          <p>
            The Service is not intended for users under 18. We do not knowingly
            collect Personal Data from children.
          </p>

          <SectionH2 label="11.">Push Notifications</SectionH2>
          <p>
            If you opt in, we may send push notifications. You can opt out at any
            time through your Device settings.
          </p>

          <SectionH2 label="12.">Changes to This Privacy Policy</SectionH2>
          <p>
            We may update this Privacy Policy from time to time. Updates become
            effective when posted. For material changes, we may notify you
            through the App or by other means where required.
          </p>

          <SectionH2 label="13.">Contact Us</SectionH2>
          <p>
            For privacy-related enquiries, contact us at:
          </p>
          <ul className="space-y-2">
            <li>
              <Term>Email:</Term> <em>[davidzhang.businesshelping@gmail.com]</em>
            </li>
            <li>
              <Term>Phone:</Term> <em>[+44 07375347418]</em>
            </li>
          </ul>


        </div>
      </div>
    </main>
  );
}
