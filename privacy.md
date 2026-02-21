# Privacy Policy

**Last Updated: 18 February 2026**

This Privacy Policy describes how Fridgly ("we", "us", "our") collects, uses, processes, shares, and protects your information when you use the Fridgly mobile application and related services (collectively, the "Service"). By using the Service, you acknowledge this Privacy Policy.

---

## 1. Interpretation and Definitions

### 1.1 Interpretation
Words with capitalised initial letters have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.

### 1.2 Definitions
- **Account** means the unique profile created for you to access the Service.
- **App** means the mobile application titled "Fridgly".
- **Company, We, Us, or Our** means Fridgly.
- **Device** means any device that can access the Service (such as a smartphone or tablet).
- **Personal Data** means any information that identifies you or can reasonably be linked to you.
- **Sensitive Personal Data** means Personal Data that may be subject to enhanced protections under applicable laws (for example, information revealing racial or ethnic origin, or religious or philosophical beliefs).
- **Usage Data** means data collected automatically through use of the Service, including device information, activity logs, and analytics data.
- **User Content** means content you upload, submit, or store through the Service, including text entries, meal logs, recipes, pantry items, photographs, preferences, and other inputs.
- **You** means the individual using the Service, or the organisation on whose behalf the Service is used.

---

## 2. Types of Data We Collect

We collect the categories of data described below. Some categories may qualify as sensitive personal information under certain privacy laws depending on what you choose to provide.

### 2.1 Personal Data You Provide
When you create an Account or use the Service, we collect:

- **Full name** (first and last name)
- **Email address**
- **Password** (stored in hashed form; we never store plaintext passwords)

We do **not** collect phone numbers, mailing addresses, or billing addresses. If you purchase a subscription in the future, payments will be processed entirely by third-party payment providers (e.g., Apple App Store / Google Play). We do not store debit/credit card numbers.

### 2.2 Account and Authentication Data
To enable login and secure your Account, we process:

- Login credentials (email/password) or authentication tokens
- A unique Account identifier (UUID)
- Session and refresh tokens for maintaining login state
- If you use social login: an identity token or OAuth credential provided by the third-party authentication provider (see Section 2.8)

### 2.3 User Content
Because Fridgly is a nutrition and food-management app, we collect User Content you choose to provide, such as:

- **Food preferences and dislikes** (e.g., favourite cuisines, disliked ingredients)
- **Dietary preferences and restrictions** (e.g., halal, vegetarian, gluten-free, allergies)
- **Recipe data** (recipes you save, create, or import — including title, ingredients, cooking steps, and associated images)
- **Weekly meal plan** (which recipes are assigned to which days)
- **Pantry inventory** (item names, quantities, remaining amounts, purchase dates, and status)
- **Staple items** (items you always keep in stock)
- **Grocery / shopping lists** (generated or manually added items)
- **Nutrition and macro logs** (meal descriptions and estimated nutritional data)
- **Recipe interactions** (swipe preferences — right-swipe / left-swipe / cooked / added-to-plan — used to improve recommendations)
- **Recommendation weights** (a per-user preference vector stored in your profile to personalise recipe suggestions)
- **Help & feedback posts** (questions, bug reports, or feature requests you submit, including any attached images)

### 2.4 Photographs and Camera Data
Certain features of the Service use your Device camera or photo library. We request the relevant permission before accessing either. Specifically:

| Feature | Camera | Photo Library | What happens to the image |
|---|:---:|:---:|---|
| **Receipt / fridge scanning** (adding pantry items) | ✅ | ✅ | Uploaded to our secure cloud storage; sent to an AI vision model for item extraction; stored for reference |
| **Meal photo macro estimation** (nutrition logging) | ✅ | — | Uploaded to our secure cloud storage; sent to an AI vision model for nutritional estimation; stored for reference |
| **Screenshot recipe import** | — | ✅ | Sent as a temporary, base64-encoded payload to an AI vision model for recipe extraction; **not** stored on our servers after processing |
| **Feedback / bug report attachments** | — | ✅ | Uploaded to our secure cloud storage alongside your feedback text; stored for support purposes |

Images uploaded to cloud storage are stored in private buckets on Supabase Storage. You can request deletion of your stored images at any time (see Section 6).

### 2.5 Sensitive Personal Data
You may choose to provide sensitive information — including information revealing racial or ethnic origin and religious or philosophical beliefs — where you enter dietary preferences or restrictions that can imply religion, philosophy, or culture (e.g., halal, kosher). Where required by law, we process sensitive personal data based on your explicit consent or other lawful basis permitted by applicable law.

### 2.6 Usage Data and Analytics
We use **PostHog** (EU-hosted instance at `eu.i.posthog.com`) as our product analytics platform. PostHog may automatically collect certain Usage Data, including:

- Anonymised device and session identifiers
- App activity logs and timestamps
- Interaction data (features used, screens viewed, actions taken — e.g., "recipe generated", "pantry item added", "receipt scanned")
- App lifecycle events (install, open, background)
- Crash logs and diagnostic data
- Performance information (e.g., load times, errors)

PostHog processes data in the **European Union**. We do not use Google Analytics, Facebook Pixel, or similar advertising-oriented trackers.

### 2.7 API Usage Data
To enforce fair-use limits, we log each AI-feature call you make (function name, timestamp, and remaining quota). This data is stored in our database and linked to your Account.

### 2.8 Social Login
You may register or log in using:

- **Google** (via OAuth 2.0 with PKCE flow)
- **Apple** (via native Sign in with Apple)

If you use social login, we receive a unique identifier and basic profile information (name, email) from the provider. We do **not** receive or store your social-media password. We do not currently support Facebook login.

### 2.9 Push Notifications
We plan to offer optional push notifications in the future to help you:

- Reach your daily macro and nutrition goals
- Remember to log meals
- Get alerts about expiring pantry items
- Receive meal-planning reminders

If and when this feature is available, you will be asked for permission before any notifications are sent. You will be able to customise which notifications you receive in your Profile → Notifications settings, and you can revoke notification permissions at any time through your Device's system settings. We will not send marketing or promotional push notifications without your explicit opt-in.

---

## 3. How We Use Your Data

### 3.1 To Provide and Maintain the Service
- Create and manage Accounts
- Authenticate users and secure access (including session management)
- Store and sync your pantry inventory, recipes, meal plans, grocery lists, and nutrition logs
- Enforce API usage quotas

### 3.2 To Personalise Your Experience
- Store and apply your food preferences, dislikes, allergies, and restrictions
- Maintain and update your personal recommendation-weight vector to improve recipe suggestions over time
- Track recipe interactions (swipes, cooks) to refine the recommendation algorithm

### 3.3 AI-Powered Features
The Service includes AI-based features. When you use these features, your data is processed as follows:

| Feature | Data sent to AI | AI Provider | Model(s) |
|---|---|---|---|
| **Recipe generation** (from preferences) | Your dietary preferences, restrictions, allergies, and pantry contents | OpenRouter | GPT-4o-mini |
| **Recipe generation** (from pantry ingredients) | Selected ingredient names | OpenRouter | GPT-4o-mini |
| **Recipe generation** (from macros) | Target nutritional goals | OpenRouter | GPT-4o-mini |
| **Cooking step generation** | Recipe title, ingredients, and restrictions | OpenRouter | Moonshot Kimi K2 |
| **Shopping list generation** | Weekly meal plan ingredients and pantry contents | OpenRouter | GPT-4o-mini |
| **Meal photo macro estimation** | Uploaded meal photograph | OpenRouter | GPT-4o (vision) |
| **Receipt / fridge scanning** | Uploaded photograph | OpenRouter | GPT-4o (vision) |
| **Screenshot recipe import** | Selected screenshot image (base64, transient) | OpenRouter | GPT-4o-mini (vision) |
| **Recipe text extraction** | Partial recipe text you type | OpenRouter | ChatGPT-4o-latest |

All AI requests are routed through **OpenRouter** (openrouter.ai), which dispatches to OpenAI and Moonshot models. We do not send your email, name, or Account identifier to AI providers. Only the minimum User Content necessary for the specific feature is transmitted.

**Recipe images** displayed in the app are sourced from **Pexels** (pexels.com), a royalty-free stock photo service. Pexels receives a text search query (the recipe name) but no Personal Data.

### 3.4 To Improve and Develop the Service
- Monitor usage patterns and feature adoption via PostHog analytics
- Fix bugs, troubleshoot issues, and improve reliability
- Understand how users interact with the Service to guide product decisions

### 3.5 Communications
- Respond to support requests and feedback submitted through the in-app Help & FAQ system
- Send service-related notices (e.g., important updates, security notices) — currently via in-app messaging only

### 3.6 Security, Fraud Prevention, and Compliance
- Protect the Service and users from abuse or fraud
- Enforce our terms and policies
- Comply with legal obligations and valid requests from authorities

### 3.7 Business Transfers
If we are involved in a merger, acquisition, restructuring, financing, or sale of assets, your information may be transferred as part of that transaction, as permitted by law.

---

## 4. Legal Bases for Processing (UK/EU)

Where applicable, we rely on the following legal bases:

- **Consent** (including explicit consent where required for sensitive personal data and camera/photo library access)
- **Performance of a Contract** (to provide the Service you request)
- **Legitimate Interests** (e.g., improving and securing the Service, analytics, and personalising recommendations — balanced against your rights)
- **Legal Obligation** (to comply with applicable laws)
- **Vital Interests** (where necessary to protect someone's life)

---

## 5. Sharing of Personal Data

**We do not sell your Personal Data.** We may share information only in limited circumstances:

### 5.1 Service Providers and Sub-processors
We use the following categories of service providers, who process data on our behalf under appropriate contractual safeguards:

| Provider | Purpose | Data shared |
|---|---|---|
| **Supabase** (supabase.com) | Authentication, database hosting, cloud storage, serverless functions | Account data, User Content, uploaded images |
| **OpenRouter** (openrouter.ai) | AI model routing and inference | User Content needed for the specific AI feature (see Section 3.3); no Personal Data identifiers |
| **PostHog** (posthog.com, EU instance) | Product analytics | Anonymised usage events, session data |
| **Pexels** (pexels.com) | Recipe stock images | Recipe name search queries only; no Personal Data |
| **Apple / Google** (authentication) | Social login | Authentication tokens exchanged during login |

### 5.2 Legal Compliance and Protection
We may disclose information if required to comply with law, respond to lawful requests, protect our rights, or protect users' safety.

### 5.3 With Your Consent
We may share information where you instruct us to do so or provide consent.

### 5.4 Aggregated or Anonymised Data
We may share aggregated or anonymised information that does not identify you for analytics, research, or business purposes.

---

## 6. Your Privacy Rights and Choices

Depending on your jurisdiction (including the UK/EU, Switzerland, and Canada), you may have rights to:

- **Access** your Personal Data
- **Correct** inaccurate data
- **Delete** your data (right to erasure)
- **Receive a copy** of your data in a portable format
- **Withdraw consent** at any time
- **Object to or restrict** certain processing

### 6.1 Account Settings
You can update your profile information, dietary preferences, and allergies directly within the app settings.

### 6.2 Camera and Photo Library Permissions
You can revoke camera or photo library permissions at any time through your Device's system settings. Revoking these permissions will disable features that rely on image capture or selection but will not affect other app functionality.

### 6.3 Analytics Opt-Out
PostHog respects "Do Not Track" signals. You may also contact us to request opt-out from analytics tracking.

### 6.4 Deleting Your Account
To delete your Account, go to Profile → Delete Account within the app, or contact us at the email below. Deleting your Account will remove your Personal Data, User Content, and uploaded images from our systems, subject to the retention practices described in Section 7.

---

## 7. Retention of Data

- **Account data and User Content**: Retained for as long as your Account is active. Upon Account deletion, we delete your data within 30 days, except where retention is required by law.
- **Uploaded images** (meal photos, receipt scans, feedback attachments): Deleted when your Account is deleted or upon your request.
- **Transient image data** (screenshot imports): Not stored on our servers; discarded immediately after AI processing.
- **Analytics data**: PostHog retains anonymised event data according to its own retention policy. This data cannot be linked back to you after Account deletion.
- **API usage logs**: Retained for the duration of your Account for quota enforcement; deleted upon Account deletion.
- **Security and legal compliance data**: We may retain certain limited data for longer where required for security, fraud prevention, dispute resolution, or legal compliance.

---

## 8. International Data Transfers

Fridgly serves international users. Your information may be processed in:

- **European Union** — PostHog analytics (EU-hosted instance)
- **United States** — Supabase infrastructure, OpenRouter AI processing
- Other locations where our service providers operate

Where required by law, we implement appropriate safeguards for international transfers (e.g., Standard Contractual Clauses).

---

## 9. Security

We use appropriate administrative, technical, and organisational measures to protect Personal Data, including:

- Encrypted data transmission (HTTPS/TLS)
- Hashed password storage (via Supabase Auth, using bcrypt)
- Row-Level Security (RLS) on all database tables, ensuring users can only access their own data
- Private storage buckets for uploaded images
- Server-side API rate limiting (200 AI calls per month per user)

However, no online service is completely secure. If we experience a security incident, we will comply with applicable breach notification obligations.

---

## 10. Children's Privacy

The Service is not intended for users under 18. We do not knowingly collect Personal Data from children. If you believe a child under 18 has provided us with Personal Data, please contact us and we will delete it promptly.

---

## 11. Device Permissions

The app may request the following device permissions:

| Permission | Purpose | Required? |
|---|---|---|
| **Camera** | Receipt/fridge scanning, meal photo macro estimation | Optional — only when you use these features |
| **Photo Library** | Screenshot import, receipt scanning, feedback attachments | Optional — only when you use these features |
| **Notifications** | Macro reminders, meal logging reminders, pantry expiry alerts (planned) | Optional — you will be asked before any notifications are sent |
| **Internet** | All app functionality (sync, AI features, authentication) | Required |

You can manage permissions at any time through your Device's system settings.

---

## 12. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Updates become effective when posted. The "Last Updated" date at the top will be revised accordingly. For material changes, we may notify you through the App or by other reasonable means.

---

## 13. Contact Us

For privacy-related enquiries, data access requests, or deletion requests, contact us at:

- **Email**: davidzhang.businesshelping@gmail.com
- **Phone**: +44 07375347418
