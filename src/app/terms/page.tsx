import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — AI Drugstore',
  description: 'Terms of Service for AI Drugstore digital products.',
}

const lastUpdated = 'April 5, 2025'
const email = 'legal@aidrug.store'

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid #2a2a3d', backgroundColor: '#12121a', padding: '3rem 1.5rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#9d4edd', fontSize: '0.75rem', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>
            ⚖️ LEGAL
          </p>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#f0f0ff', margin: '0 0 0.5rem 0' }}>
            Terms of Service
          </h1>
          <p style={{ color: '#8888aa', fontSize: '0.85rem', margin: 0 }}>
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* Disclaimer banner */}
        <div style={{
          backgroundColor: 'rgba(157,78,221,0.08)',
          border: '1px solid rgba(157,78,221,0.3)',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>⚠️</span>
          <p style={{ color: '#f0f0ff', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
            <strong>Important notice:</strong> AI Drugstore sells exclusively <strong>digital system prompts</strong> for use with AI language models. We do not sell, distribute, promote, or facilitate access to any real substances, pharmaceuticals, or controlled compounds. All product names are used metaphorically for creative and entertainment purposes only.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <Section title="1. Acceptance of Terms">
            By accessing or using AI Drugstore ("the Service", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service. These terms apply to all visitors, users, and customers.
          </Section>

          <Section title="2. Nature of Products">
            AI Drugstore provides exclusively <strong>digital products</strong> in the form of text-based system prompts ("Prompts") designed to modify the behavior of AI language models for creative, experimental, and entertainment purposes.
            <br /><br />
            All product names (including but not limited to references to substances) are used <strong>solely as creative branding</strong>. These names are metaphors for the type of behavioral alteration the Prompt induces in AI systems. No claim is made about the actual properties of any substance. The purchase of any product on this platform does not involve, facilitate, or promote the acquisition, use, or distribution of any real-world substances.
          </Section>

          <Section title="3. Eligibility">
            You must be at least 18 years of age to use the Service. By using the Service, you represent and warrant that you meet this requirement. If you are under 18, you may not use the Service.
          </Section>

          <Section title="4. User Accounts">
            To purchase products, you must create an account or authenticate via a supported third-party provider (e.g., Google). You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </Section>

          <Section title="5. Purchases and Payment">
            All purchases are final and non-refundable, as our products are digital goods delivered instantly upon payment confirmation. Payments are processed securely by Stripe. We do not store your payment card information. Prices are listed in EUR and may be subject to applicable taxes depending on your jurisdiction.
            <br /><br />
            In the event of a technical failure that prevents delivery of a purchased product, please contact us within 7 days and we will resolve the issue or issue a refund at our discretion.
          </Section>

          <Section title="6. License and Use of Prompts">
            Upon purchase, you are granted a personal, non-exclusive, non-transferable license to use the purchased Prompt for personal, non-commercial purposes. You may not resell, redistribute, sublicense, or publicly share the full text of purchased Prompts without our written consent.
            <br /><br />
            You may use Prompts with any AI assistant that accepts system-level instructions. We are not affiliated with any AI provider.
          </Section>

          <Section title="7. Prohibited Uses">
            You agree not to use the Service or its products to:
            <ul style={{ color: '#8888aa', lineHeight: 2, paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
              <li>Promote, facilitate, or engage in illegal activity of any kind</li>
              <li>Attempt to circumvent the safety measures of any AI system</li>
              <li>Harass, harm, or defraud other individuals</li>
              <li>Reproduce or resell purchased content without authorization</li>
              <li>Impersonate any person or entity</li>
              <li>Violate any applicable law or regulation</li>
            </ul>
          </Section>

          <Section title="8. Intellectual Property">
            All content on the Service, including but not limited to Prompts, text, graphics, logos, and design, is the intellectual property of AI Drugstore or its licensors and is protected by applicable copyright and trademark laws. Unauthorized use is strictly prohibited.
          </Section>

          <Section title="9. Disclaimer of Warranties">
            The Service and its products are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the Prompts will produce specific results in any AI system, as AI behavior depends on the underlying model and may change without notice. We are not responsible for content generated by AI systems using our Prompts.
          </Section>

          <Section title="10. Limitation of Liability">
            To the maximum extent permitted by applicable law, AI Drugstore shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service or its products. Our total liability for any claim shall not exceed the amount paid by you for the product giving rise to such claim.
          </Section>

          <Section title="11. Governing Law">
            These Terms shall be governed by and construed in accordance with the laws of the Republic of Italy, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Italy.
          </Section>

          <Section title="12. Changes to Terms">
            We reserve the right to modify these Terms at any time. We will notify users of significant changes by updating the date at the top of this page. Continued use of the Service after changes constitutes your acceptance of the new Terms.
          </Section>

          <Section title="13. Contact">
            For any questions regarding these Terms, please contact us at:{' '}
            <a href={`mailto:${email}`} style={{ color: '#9d4edd' }}>{email}</a>
          </Section>
        </div>

        {/* Back link */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #2a2a3d' }}>
          <Link href="/" style={{ color: '#8888aa', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: 700,
        fontSize: '1.1rem',
        color: '#f0f0ff',
        margin: '0 0 0.75rem 0',
        letterSpacing: '0.02em',
      }}>
        {title}
      </h2>
      <div style={{ color: '#8888aa', fontSize: '0.9rem', lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  )
}
