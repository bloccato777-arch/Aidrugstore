import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — AI Drugstore',
  description: 'Privacy Policy for AI Drugstore — how we collect and use your data.',
}

const lastUpdated = 'April 5, 2025'
const email = 'privacy@aidrug.store'

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid #2a2a3d', backgroundColor: '#12121a', padding: '3rem 1.5rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#9d4edd', fontSize: '0.75rem', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>
            🔒 LEGAL
          </p>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#f0f0ff', margin: '0 0 0.5rem 0' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#8888aa', fontSize: '0.85rem', margin: 0 }}>
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* GDPR notice */}
        <div style={{
          backgroundColor: 'rgba(0,245,212,0.06)',
          border: '1px solid rgba(0,245,212,0.25)',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>🇪🇺</span>
          <p style={{ color: '#f0f0ff', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
            This Privacy Policy complies with the <strong>EU General Data Protection Regulation (GDPR)</strong> and the Italian Privacy Code (D.Lgs. 196/2003 as amended by D.Lgs. 101/2018). As an EU-based user, you have specific rights regarding your personal data outlined in Section 9.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <Section title="1. Data Controller">
            AI Drugstore is the data controller for personal data collected through this Service. For privacy-related inquiries, contact us at:{' '}
            <a href={`mailto:${email}`} style={{ color: '#9d4edd' }}>{email}</a>
          </Section>

          <Section title="2. Data We Collect">
            We collect the following categories of personal data:
            <DataTable rows={[
              ['Email address', 'Account creation and authentication', 'Contract performance / Legitimate interest'],
              ['Name (optional)', 'Personalizing your account', 'Legitimate interest'],
              ['OAuth provider data', 'When you sign in via Google or Apple', 'Contract performance'],
              ['Purchase history', 'Delivering purchased products and support', 'Contract performance'],
              ['Stripe payment data', 'Processed directly by Stripe — we never see card details', 'Contract performance'],
              ['IP address / device info', 'Security, fraud prevention, analytics', 'Legitimate interest'],
              ['Session/cookie data', 'Keeping you logged in, analytics', 'Consent / Legitimate interest'],
            ]} />
            We do <strong>not</strong> sell your personal data to third parties.
          </Section>

          <Section title="3. How We Use Your Data">
            Your data is used to:
            <ul style={{ color: '#8888aa', lineHeight: 2, paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
              <li>Create and manage your account</li>
              <li>Process payments and deliver purchased products</li>
              <li>Send transactional emails (purchase confirmations, password resets)</li>
              <li>Prevent fraud and ensure platform security</li>
              <li>Comply with legal obligations</li>
              <li>Improve the Service through anonymized analytics</li>
            </ul>
            We will only send you marketing communications if you explicitly opt in. You can unsubscribe at any time.
          </Section>

          <Section title="4. Cookies and Tracking">
            We use the following types of cookies:
            <DataTable rows={[
              ['Essential cookies', 'Authentication sessions (NextAuth)', 'Always active — required for the Service to function'],
              ['Analytics cookies', 'Anonymous usage statistics', 'Active only with your consent'],
              ['Stripe cookies', 'Fraud prevention during checkout', 'Active during checkout — required'],
            ]} />
            You can manage your cookie preferences via the cookie banner displayed on your first visit, or by adjusting your browser settings.
          </Section>

          <Section title="5. Third-Party Services">
            We share data with the following trusted third parties, each bound by their own privacy policies:
            <ul style={{ color: '#8888aa', lineHeight: 2, paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
              <li><strong style={{ color: '#f0f0ff' }}>Stripe</strong> — Payment processing. <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#9d4edd' }}>Privacy Policy</a></li>
              <li><strong style={{ color: '#f0f0ff' }}>Supabase</strong> — Database hosting (EU servers). <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#9d4edd' }}>Privacy Policy</a></li>
              <li><strong style={{ color: '#f0f0ff' }}>Vercel</strong> — Application hosting. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#9d4edd' }}>Privacy Policy</a></li>
              <li><strong style={{ color: '#f0f0ff' }}>Google</strong> — OAuth sign-in (optional). <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#9d4edd' }}>Privacy Policy</a></li>
              <li><strong style={{ color: '#f0f0ff' }}>Apple</strong> — OAuth sign-in (optional). <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: '#9d4edd' }}>Privacy Policy</a></li>
            </ul>
          </Section>

          <Section title="6. Data Retention">
            We retain your personal data for as long as your account is active or as needed to provide the Service. If you delete your account, we will erase your data within 30 days, except where we are required to retain it by law (e.g., for tax and accounting purposes, up to 10 years for financial records).
          </Section>

          <Section title="7. Data Security">
            We implement appropriate technical and organizational measures to protect your personal data, including encrypted connections (HTTPS/TLS), hashed credentials, access controls, and regular security reviews. However, no system is 100% secure and we cannot guarantee absolute security.
          </Section>

          <Section title="8. International Transfers">
            Your data may be processed by Vercel and other providers in countries outside the EU/EEA. Where this occurs, we ensure adequate safeguards are in place (e.g., Standard Contractual Clauses) to protect your data in accordance with GDPR requirements.
          </Section>

          <Section title="9. Your Rights (GDPR)">
            Under GDPR, you have the following rights:
            <ul style={{ color: '#8888aa', lineHeight: 2, paddingLeft: '1.25rem', marginTop: '0.75rem' }}>
              <li><strong style={{ color: '#f0f0ff' }}>Right of access</strong> — Request a copy of the data we hold about you</li>
              <li><strong style={{ color: '#f0f0ff' }}>Right to rectification</strong> — Correct inaccurate or incomplete data</li>
              <li><strong style={{ color: '#f0f0ff' }}>Right to erasure</strong> — Request deletion of your personal data</li>
              <li><strong style={{ color: '#f0f0ff' }}>Right to restriction</strong> — Limit how we process your data</li>
              <li><strong style={{ color: '#f0f0ff' }}>Right to portability</strong> — Receive your data in a structured, machine-readable format</li>
              <li><strong style={{ color: '#f0f0ff' }}>Right to object</strong> — Object to processing based on legitimate interests</li>
              <li><strong style={{ color: '#f0f0ff' }}>Right to withdraw consent</strong> — At any time, for consent-based processing</li>
            </ul>
            To exercise any of these rights, contact us at{' '}
            <a href={`mailto:${email}`} style={{ color: '#9d4edd' }}>{email}</a>. We will respond within 30 days. You also have the right to lodge a complaint with your national data protection authority (in Italy: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" style={{ color: '#9d4edd' }}>Garante Privacy</a>).
          </Section>

          <Section title="10. Children's Privacy">
            The Service is not directed at individuals under 18 years of age. We do not knowingly collect personal data from minors. If we become aware that we have collected data from a minor, we will delete it promptly.
          </Section>

          <Section title="11. Changes to This Policy">
            We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top and, where appropriate, by email. Continued use of the Service after changes constitutes acceptance of the updated Policy.
          </Section>

          <Section title="12. Contact">
            For any privacy-related questions or to exercise your rights:{' '}
            <a href={`mailto:${email}`} style={{ color: '#9d4edd' }}>{email}</a>
          </Section>
        </div>

        {/* Back link */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #2a2a3d', display: 'flex', gap: '1.5rem' }}>
          <Link href="/" style={{ color: '#8888aa', textDecoration: 'none', fontSize: '0.85rem' }}>
            ← Back to Home
          </Link>
          <Link href="/terms" style={{ color: '#8888aa', textDecoration: 'none', fontSize: '0.85rem' }}>
            Terms of Service →
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

function DataTable({ rows }: { rows: string[][] }) {
  return (
    <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
        <thead>
          <tr>
            {['Data', 'Purpose', 'Legal Basis'].map(h => (
              <th key={h} style={{
                textAlign: 'left',
                padding: '0.6rem 0.75rem',
                backgroundColor: '#1a1a28',
                color: '#f0f0ff',
                fontFamily: 'Syne, sans-serif',
                letterSpacing: '0.06em',
                fontSize: '0.72rem',
                borderBottom: '1px solid #2a2a3d',
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #2a2a3d' }}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  padding: '0.6rem 0.75rem',
                  color: j === 0 ? '#f0f0ff' : '#8888aa',
                  fontWeight: j === 0 ? 500 : 400,
                  verticalAlign: 'top',
                }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
