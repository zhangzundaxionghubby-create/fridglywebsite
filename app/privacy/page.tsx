import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Fridgly",
  description: "Privacy Policy for Fridgly.",
};

const LAST_UPDATED = "18 February 2026";

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
            This Privacy Policy describes how Fridgly ("we", "us", "our") collects,
            uses, processes, shares, and protects your information when you use the
            Fridgly mobile application and related services (collectively, the
            "Service"). By using the Service, you acknowledge this Privacy Policy.
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
              <Term>App</Term> means the mobile application titled "Fridgly".
            </li>
            <li>
              <Term>Company, We, Us, or Our</Term> means Fridgly.
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
              pantry items, photographs, preferences, and other inputs.
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
          <p>When you create an Account or use the Service, we collect:</p>
          <ul className="space-y-2">
            <li><Term>Full name</Term> (first and last name)</li>
            <li><Term>Email address</Term></li>
            <li><Term>Password</Term> (stored in hashed form; we never store plaintext passwords)</li>
          </ul>
          <p>
            We do <strong>not</strong> collect phone numbers, mailing addresses, or billing addresses.
            If you purchase a subscription in the future, payments will be processed entirely by
            third-party payment providers (e.g., Apple App Store / Google Play). We do not store
            debit/credit card numbers.
          </p>

          <SectionH3 label="2.2">Account and Authentication Data</SectionH3>
          <p>To enable login and secure your Account, we process:</p>
          <ul className="space-y-2">
            <li>Login credentials (email/password) or authentication tokens</li>
            <li>A unique Account identifier (UUID)</li>
            <li>Session and refresh tokens for maintaining login state</li>
            <li>If you use social login: an identity token or OAuth credential provided by the third-party authentication provider (see Section 2.8)</li>
          </ul>

          <SectionH3 label="2.3">User Content</SectionH3>
          <p>
            Because Fridgly is a nutrition and food-management app, we collect User
            Content you choose to provide, such as:
          </p>
          <ul className="space-y-2">
            <li><Term>Food preferences and dislikes</Term> (e.g., favourite cuisines, disliked ingredients)</li>
            <li><Term>Dietary preferences and restrictions</Term> (e.g., halal, vegetarian, gluten-free, allergies)</li>
            <li><Term>Recipe data</Term> (recipes you save, create, or import — including title, ingredients, cooking steps, and associated images)</li>
            <li><Term>Weekly meal plan</Term> (which recipes are assigned to which days)</li>
            <li><Term>Pantry inventory</Term> (item names, quantities, remaining amounts, purchase dates, and status)</li>
            <li><Term>Staple items</Term> (items you always keep in stock)</li>
            <li><Term>Grocery / shopping lists</Term> (generated or manually added items)</li>
            <li><Term>Nutrition and macro logs</Term> (meal descriptions and estimated nutritional data)</li>
            <li><Term>Recipe interactions</Term> (swipe preferences — right-swipe / left-swipe / cooked / added-to-plan — used to improve recommendations)</li>
            <li><Term>Recommendation weights</Term> (a per-user preference vector stored in your profile to personalise recipe suggestions)</li>
            <li><Term>Help &amp; feedback posts</Term> (questions, bug reports, or feature requests you submit, including any attached images)</li>
          </ul>

          <SectionH3 label="2.4">Photographs and Camera Data</SectionH3>
          <p>
            Certain features of the Service use your Device camera or photo library.
            We request the relevant permission before accessing either. Specifically:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4">Feature</th>
                  <th className="text-center py-2 px-2">Camera</th>
                  <th className="text-center py-2 px-2">Photo Library</th>
                  <th className="text-left py-2 pl-4">What happens to the image</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-4">Receipt / fridge scanning (adding pantry items)</td>
                  <td className="text-center py-2 px-2">✅</td>
                  <td className="text-center py-2 px-2">✅</td>
                  <td className="py-2 pl-4">Uploaded to our secure cloud storage; sent to an AI vision model for item extraction; stored for reference</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Meal photo macro estimation (nutrition logging)</td>
                  <td className="text-center py-2 px-2">✅</td>
                  <td className="text-center py-2 px-2">—</td>
                  <td className="py-2 pl-4">Uploaded to our secure cloud storage; sent to an AI vision model for nutritional estimation; stored for reference</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Screenshot recipe import</td>
                  <td className="text-center py-2 px-2">—</td>
                  <td className="text-center py-2 px-2">✅</td>
                  <td className="py-2 pl-4">Sent as a temporary, base64-encoded payload to an AI vision model for recipe extraction; <strong>not</strong> stored on our servers after processing</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Feedback / bug report attachments</td>
                  <td className="text-center py-2 px-2">—</td>
                  <td className="text-center py-2 px-2">✅</td>
                  <td className="py-2 pl-4">Uploaded to our secure cloud storage alongside your feedback text; stored for support purposes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Images uploaded to cloud storage are stored in private buckets on Supabase Storage.
            You can request deletion of your stored images at any time (see Section 6).
          </p>

          <SectionH3 label="2.5">Sensitive Personal Data</SectionH3>
          <p>
            You may choose to provide sensitive information — including information
            revealing racial or ethnic origin and religious or philosophical beliefs —
            where you enter dietary preferences or restrictions that can imply religion,
            philosophy, or culture (e.g., halal, kosher). Where required by law, we
            process sensitive personal data based on your explicit consent or other
            lawful basis permitted by applicable law.
          </p>

          <SectionH3 label="2.6">Usage Data and Analytics</SectionH3>
          <p>
            We use <strong>PostHog</strong> (EU-hosted instance at eu.i.posthog.com) as our
            product analytics platform. PostHog may automatically collect certain Usage Data, including:
          </p>
          <ul className="space-y-2">
            <li>Anonymised device and session identifiers</li>
            <li>App activity logs and timestamps</li>
            <li>Interaction data (features used, screens viewed, actions taken — e.g., "recipe generated", "pantry item added", "receipt scanned")</li>
            <li>App lifecycle events (install, open, background)</li>
            <li>Crash logs and diagnostic data</li>
            <li>Performance information (e.g., load times, errors)</li>
          </ul>
          <p>
            PostHog processes data in the <strong>European Union</strong>. We do not use
            Google Analytics, Facebook Pixel, or similar advertising-oriented trackers.
          </p>

          <SectionH3 label="2.7">API Usage Data</SectionH3>
          <p>
            To enforce fair-use limits, we log each AI-feature call you make (function name,
            timestamp, and remaining quota). This data is stored in our database and linked
            to your Account.
          </p>

          <SectionH3 label="2.8">Social Login</SectionH3>
          <p>You may register or log in using:</p>
          <ul className="space-y-2">
            <li><Term>Google</Term> (via OAuth 2.0 with PKCE flow)</li>
            <li><Term>Apple</Term> (via native Sign in with Apple)</li>
          </ul>
          <p>
            If you use social login, we receive a unique identifier and basic profile
            information (name, email) from the provider. We do <strong>not</strong> receive
            or store your social-media password. We do not currently support Facebook login.
          </p>

          <SectionH3 label="2.9">Push Notifications</SectionH3>
          <p>We plan to offer optional push notifications in the future to help you:</p>
          <ul className="space-y-2">
            <li>Reach your daily macro and nutrition goals</li>
            <li>Remember to log meals</li>
            <li>Get alerts about expiring pantry items</li>
            <li>Receive meal-planning reminders</li>
          </ul>
          <p>
            If and when this feature is available, you will be asked for permission before
            any notifications are sent. You will be able to customise which notifications
            you receive in your Profile → Notifications settings, and you can revoke
            notification permissions at any time through your Device's system settings.
            We will not send marketing or promotional push notifications without your explicit opt-in.
          </p>

          <SectionH2 label="3.">How We Use Your Data</SectionH2>

          <SectionH3 label="3.1">To Provide and Maintain the Service</SectionH3>
          <ul className="space-y-2">
            <li>Create and manage Accounts</li>
            <li>Authenticate users and secure access (including session management)</li>
            <li>Store and sync your pantry inventory, recipes, meal plans, grocery lists, and nutrition logs</li>
            <li>Enforce API usage quotas</li>
          </ul>

          <SectionH3 label="3.2">To Personalise Your Experience</SectionH3>
          <ul className="space-y-2">
            <li>Store and apply your food preferences, dislikes, allergies, and restrictions</li>
            <li>Maintain and update your personal recommendation-weight vector to improve recipe suggestions over time</li>
            <li>Track recipe interactions (swipes, cooks) to refine the recommendation algorithm</li>
          </ul>

          <SectionH3 label="3.3">AI-Powered Features</SectionH3>
          <p>
            The Service includes AI-based features. When you use these features, your data
            is processed as follows:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4">Feature</th>
                  <th className="text-left py-2 px-2">Data sent to AI</th>
                  <th className="text-left py-2 px-2">AI Provider</th>
                  <th className="text-left py-2 pl-4">Model(s)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-4">Recipe generation (from preferences)</td>
                  <td className="py-2 px-2">Your dietary preferences, restrictions, allergies, and pantry contents</td>
                  <td className="py-2 px-2">OpenRouter</td>
                  <td className="py-2 pl-4">GPT-4o-mini</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Recipe generation (from pantry ingredients)</td>
                  <td className="py-2 px-2">Selected ingredient names</td>
                  <td className="py-2 px-2">OpenRouter</td>
                  <td className="py-2 pl-4">GPT-4o-mini</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Recipe generation (from macros)</td>
                  <td className="py-2 px-2">Target nutritional goals</td>
                  <td className="py-2 px-2">OpenRouter</td>
                  <td className="py-2 pl-4">GPT-4o-mini</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Cooking step generation</td>
                  <td className="py-2 px-2">Recipe title, ingredients, and restrictions</td>
                  <td className="py-2 px-2">OpenRouter</td>
                  <td className="py-2 pl-4">Moonshot Kimi K2</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Shopping list generation</td>
                  <td className="py-2 px-2">Weekly meal plan ingredients and pantry contents</td>
                  <td className="py-2 px-2">OpenRouter</td>
                  <td className="py-2 pl-4">GPT-4o-mini</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Meal photo macro estimation</td>
                  <td className="py-2 px-2">Uploaded meal photograph</td>
                  <td className="py-2 px-2">OpenRouter</td>
                  <td className="py-2 pl-4">GPT-4o (vision)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Receipt / fridge scanning</td>
                  <td className="py-2 px-2">Uploaded photograph</td>
                  <td className="py-2 px-2">OpenRouter</td>
                  <td className="py-2 pl-4">GPT-4o (vision)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Screenshot recipe import</td>
                  <td className="py-2 px-2">Selected screenshot image (base64, transient)</td>
                  <td className="py-2 px-2">OpenRouter</td>
                  <td className="py-2 pl-4">GPT-4o-mini (vision)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Recipe text extraction</td>
                  <td className="py-2 px-2">Partial recipe text you type</td>
                  <td className="py-2 px-2">OpenRouter</td>
                  <td className="py-2 pl-4">ChatGPT-4o-latest</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            All AI requests are routed through <strong>OpenRouter</strong> (openrouter.ai),
            which dispatches to OpenAI and Moonshot models. We do not send your email, name,
            or Account identifier to AI providers. Only the minimum User Content necessary
            for the specific feature is transmitted.
          </p>
          <p>
            <strong>Recipe images</strong> displayed in the app are sourced from <strong>Pexels</strong>
            (pexels.com), a royalty-free stock photo service. Pexels receives a text search query
            (the recipe name) but no Personal Data.
          </p>

          <SectionH3 label="3.4">To Improve and Develop the Service</SectionH3>
          <ul className="space-y-2">
            <li>Monitor usage patterns and feature adoption via PostHog analytics</li>
            <li>Fix bugs, troubleshoot issues, and improve reliability</li>
            <li>Understand how users interact with the Service to guide product decisions</li>
          </ul>

          <SectionH3 label="3.5">Communications</SectionH3>
          <ul className="space-y-2">
            <li>Respond to support requests and feedback submitted through the in-app Help &amp; FAQ system</li>
            <li>Send service-related notices (e.g., important updates, security notices) — currently via in-app messaging only</li>
          </ul>

          <SectionH3 label="3.6">Security, Fraud Prevention, and Compliance</SectionH3>
          <ul className="space-y-2">
            <li>Protect the Service and users from abuse or fraud</li>
            <li>Enforce our terms and policies</li>
            <li>Comply with legal obligations and valid requests from authorities</li>
          </ul>

          <SectionH3 label="3.7">Business Transfers</SectionH3>
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
              sensitive personal data and camera/photo library access)
            </li>
            <li>
              <Term>Performance of a Contract</Term> (to provide the Service you
              request)
            </li>
            <li>
              <Term>Legitimate Interests</Term> (e.g., improving and securing the
              Service, analytics, and personalising recommendations — balanced against your rights)
            </li>
            <li>
              <Term>Legal Obligation</Term> (to comply with applicable laws)
            </li>
            <li>
              <Term>Vital Interests</Term> (where necessary to protect someone's
              life)
            </li>
          </ul>

          <SectionH2 label="5.">Sharing of Personal Data</SectionH2>
          <p>
            <strong>We do not sell your Personal Data.</strong> We may share information only in
            limited circumstances:
          </p>

          <SectionH3 label="5.1">Service Providers and Sub-processors</SectionH3>
          <p>
            We use the following categories of service providers, who process data on our
            behalf under appropriate contractual safeguards:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4">Provider</th>
                  <th className="text-left py-2 px-2">Purpose</th>
                  <th className="text-left py-2 pl-4">Data shared</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-4"><strong>Supabase</strong> (supabase.com)</td>
                  <td className="py-2 px-2">Authentication, database hosting, cloud storage, serverless functions</td>
                  <td className="py-2 pl-4">Account data, User Content, uploaded images</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4"><strong>OpenRouter</strong> (openrouter.ai)</td>
                  <td className="py-2 px-2">AI model routing and inference</td>
                  <td className="py-2 pl-4">User Content needed for the specific AI feature (see Section 3.3); no Personal Data identifiers</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4"><strong>PostHog</strong> (posthog.com, EU instance)</td>
                  <td className="py-2 px-2">Product analytics</td>
                  <td className="py-2 pl-4">Anonymised usage events, session data</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4"><strong>Pexels</strong> (pexels.com)</td>
                  <td className="py-2 px-2">Recipe stock images</td>
                  <td className="py-2 pl-4">Recipe name search queries only; no Personal Data</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4"><strong>Apple / Google</strong> (authentication)</td>
                  <td className="py-2 px-2">Social login</td>
                  <td className="py-2 pl-4">Authentication tokens exchanged during login</td>
                </tr>
              </tbody>
            </table>
          </div>

          <SectionH3 label="5.2">Legal Compliance and Protection</SectionH3>
          <p>
            We may disclose information if required to comply with law, respond to
            lawful requests, protect our rights, or protect users' safety.
          </p>

          <SectionH3 label="5.3">With Your Consent</SectionH3>
          <p>
            We may share information where you instruct us to do so or provide
            consent.
          </p>

          <SectionH3 label="5.4">Aggregated or Anonymised Data</SectionH3>
          <p>
            We may share aggregated or anonymised information that does not
            identify you for analytics, research, or business purposes.
          </p>

          <SectionH2 label="6.">Your Privacy Rights and Choices</SectionH2>
          <p>
            Depending on your jurisdiction (including the UK/EU, Switzerland, and
            Canada), you may have rights to:
          </p>
          <ul className="space-y-2">
            <li><Term>Access</Term> your Personal Data</li>
            <li><Term>Correct</Term> inaccurate data</li>
            <li><Term>Delete</Term> your data (right to erasure)</li>
            <li><Term>Receive a copy</Term> of your data in a portable format</li>
            <li><Term>Withdraw consent</Term> at any time</li>
            <li><Term>Object to or restrict</Term> certain processing</li>
          </ul>

          <SectionH3 label="6.1">Account Settings</SectionH3>
          <p>
            You can update your profile information, dietary preferences, and allergies
            directly within the app settings.
          </p>

          <SectionH3 label="6.2">Camera and Photo Library Permissions</SectionH3>
          <p>
            You can revoke camera or photo library permissions at any time through your
            Device's system settings. Revoking these permissions will disable features
            that rely on image capture or selection but will not affect other app functionality.
          </p>

          <SectionH3 label="6.3">Analytics Opt-Out</SectionH3>
          <p>
            PostHog respects "Do Not Track" signals. You may also contact us to request
            opt-out from analytics tracking.
          </p>

          <SectionH3 label="6.4">Deleting Your Account</SectionH3>
          <p>
            To delete your Account, go to Profile → Delete Account within the app, or
            contact us at the email below. Deleting your Account will remove your Personal
            Data, User Content, and uploaded images from our systems, subject to the
            retention practices described in Section 7.
          </p>

          <SectionH2 label="7.">Retention of Data</SectionH2>
          <ul className="space-y-2">
            <li>
              <Term>Account data and User Content:</Term> Retained for as long as your Account
              is active. Upon Account deletion, we delete your data within 30 days, except
              where retention is required by law.
            </li>
            <li>
              <Term>Uploaded images</Term> (meal photos, receipt scans, feedback attachments):
              Deleted when your Account is deleted or upon your request.
            </li>
            <li>
              <Term>Transient image data</Term> (screenshot imports): Not stored on our servers;
              discarded immediately after AI processing.
            </li>
            <li>
              <Term>Analytics data:</Term> PostHog retains anonymised event data according to
              its own retention policy. This data cannot be linked back to you after Account deletion.
            </li>
            <li>
              <Term>API usage logs:</Term> Retained for the duration of your Account for quota
              enforcement; deleted upon Account deletion.
            </li>
            <li>
              <Term>Security and legal compliance data:</Term> We may retain certain limited
              data for longer where required for security, fraud prevention, dispute resolution,
              or legal compliance.
            </li>
          </ul>

          <SectionH2 label="8.">International Data Transfers</SectionH2>
          <p>Fridgly serves international users. Your information may be processed in:</p>
          <ul className="space-y-2">
            <li><strong>European Union</strong> — PostHog analytics (EU-hosted instance)</li>
            <li><strong>United States</strong> — Supabase infrastructure, OpenRouter AI processing</li>
            <li>Other locations where our service providers operate</li>
          </ul>
          <p>
            Where required by law, we implement appropriate safeguards for international
            transfers (e.g., Standard Contractual Clauses).
          </p>

          <SectionH2 label="9.">Security</SectionH2>
          <p>
            We use appropriate administrative, technical, and organisational measures to
            protect Personal Data, including:
          </p>
          <ul className="space-y-2">
            <li>Encrypted data transmission (HTTPS/TLS)</li>
            <li>Hashed password storage (via Supabase Auth, using bcrypt)</li>
            <li>Row-Level Security (RLS) on all database tables, ensuring users can only access their own data</li>
            <li>Private storage buckets for uploaded images</li>
            <li>Server-side API rate limiting (200 AI calls per month per user)</li>
          </ul>
          <p>
            However, no online service is completely secure. If we experience a security
            incident, we will comply with applicable breach notification obligations.
          </p>

          <SectionH2 label="10.">Children's Privacy</SectionH2>
          <p>
            The Service is not intended for users under 18. We do not knowingly collect
            Personal Data from children. If you believe a child under 18 has provided us
            with Personal Data, please contact us and we will delete it promptly.
          </p>

          <SectionH2 label="11.">Device Permissions</SectionH2>
          <p>The app may request the following device permissions:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4">Permission</th>
                  <th className="text-left py-2 px-2">Purpose</th>
                  <th className="text-left py-2 pl-4">Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-4"><strong>Camera</strong></td>
                  <td className="py-2 px-2">Receipt/fridge scanning, meal photo macro estimation</td>
                  <td className="py-2 pl-4">Optional — only when you use these features</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4"><strong>Photo Library</strong></td>
                  <td className="py-2 px-2">Screenshot import, receipt scanning, feedback attachments</td>
                  <td className="py-2 pl-4">Optional — only when you use these features</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4"><strong>Notifications</strong></td>
                  <td className="py-2 px-2">Macro reminders, meal logging reminders, pantry expiry alerts (planned)</td>
                  <td className="py-2 pl-4">Optional — you will be asked before any notifications are sent</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4"><strong>Internet</strong></td>
                  <td className="py-2 px-2">All app functionality (sync, AI features, authentication)</td>
                  <td className="py-2 pl-4">Required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>You can manage permissions at any time through your Device's system settings.</p>

          <SectionH2 label="12.">Changes to This Privacy Policy</SectionH2>
          <p>
            We may update this Privacy Policy from time to time. Updates become effective
            when posted. The "Last Updated" date at the top will be revised accordingly.
            For material changes, we may notify you through the App or by other reasonable means.
          </p>

          <SectionH2 label="13.">Contact Us</SectionH2>
          <p>
            For privacy-related enquiries, data access requests, or deletion requests, contact us at:
          </p>
          <ul className="space-y-2">
            <li>
              <Term>Email:</Term> davidzhang.businesshelping@gmail.com
            </li>
            <li>
              <Term>Phone:</Term> +44 07375347418
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
