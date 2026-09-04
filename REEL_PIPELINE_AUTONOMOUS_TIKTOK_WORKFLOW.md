# REEL PIPELINE — AUTONOMOUS TIKTOK PRODUCTION WEBSITE & APP REVIEW WORKFLOW

## AGENT EXECUTION CONTRACT

You are the primary autonomous development agent for this project. The user will provide ONLY this workflow file. Treat it as the complete execution brief.

Your job is NOT to explain how the user should do the work. Your job is to independently:

RESEARCH → PLAN → INSPECT SKILLS → INSTALL NEEDED SKILLS → BUILD → TEST → FIX → DEPLOY → VERIFY → CONFIGURE → PREPARE REVIEW → REPORT

Do as much as technically possible yourself. Do not stop after giving instructions.

Only ask the user when a step genuinely requires login, 2FA, CAPTCHA, payment, legal identity information, acceptance of external terms, domain ownership/DNS action, unavailable credentials, or another action that only the user can legally perform. Complete everything possible before asking. After the user completes that exact action, continue autonomously.

---

# 1. PRIMARY OBJECTIVE

Build a genuine production-quality public website for the existing `reel-pipeline` project and prepare the TikTok integration for Production/App Review.

Target:

Existing Reel Pipeline
↓
TikTok Sandbox Testing
↓
Production Configuration
↓
Website Deployment
↓
URL / Domain Verification
↓
App Review Preparation
↓
Sandbox Demo
↓
Review Submission Preparation
↓
TikTok Approval
↓
Live Public Publishing

Current project:

`E:\reel-pipeline`

Known publishing result:

TikTok:
`403 unaudited_client_can_only_post_to_private_accounts`

Facebook:
Published successfully

Instagram:
Published successfully

Treat the TikTok result as an audit/review restriction. DO NOT bypass it.

Map it to a specific state such as:

`TIKTOK_AUDIT_REQUIRED`

Do not regenerate an existing reel because TikTok is blocked. Preserve it for retry after approval.

Keep platforms independent:

```json
{
  "facebook": {"status": "published", "post_id": "..."},
  "instagram": {"status": "published", "post_id": "..."},
  "tiktok": {"status": "audit_required", "post_id": null}
}
```

Suggested TikTok states:

`pending`, `uploading`, `processing`, `published`, `audit_required`, `failed`

---

# 2. AUTONOMY RULES

## MUST

- Inspect the existing workspace before changing anything.
- Preserve the existing `reel-pipeline`.
- Inspect actual dependencies and conventions before adding packages.
- Use current official documentation for TikTok, Next.js, Vercel and external APIs.
- Install only skills/tools that materially help.
- Build real functionality, not placeholders.
- Run lint/build/tests yourself.
- Diagnose and fix errors yourself.
- Re-run affected tests after fixes.
- Verify local and deployed routes.
- Deploy/configure everything allowed by available authenticated access.
- Prepare all review materials possible.
- Clearly separate completed work from unavoidable user actions.

## MUST NOT

- Ask the user to install dependencies you can install.
- Ask the user to create files/code you can create.
- Stop after scaffolding, design, or deployment.
- Claim unavailable features.
- Invent company/contact/legal information.
- Fake OAuth, TikTok authorization, publishing, approval, or demo results.
- Bypass TikTok review restrictions.
- Commit or expose secrets.
- Damage unrelated working systems.

---

# 3. AGENT SKILL STRATEGY

Inspect existing skills first.

Install only targeted skills needed for:

- Next.js
- React
- Tailwind
- responsive UI
- accessibility
- testing/Playwright
- frontend design

## Required design preference

Use the current upstream Taste Skill:

Repository:
`Leonxlnx/taste-skill`

Skill:
`design-taste-frontend`

Current installation command:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

Use it to avoid generic AI-looking UI and improve hierarchy, typography, spacing and layout.

The current default is v2 experimental. Use it unless a concrete compatibility problem exists.

## Frontend skills

Inspect `finfin/awesome-frontend-skills` and select only exact useful skills. Do NOT install the entire 70+ skill collection.

Preferred categories:

- Next.js
- React
- Tailwind
- responsive design
- accessibility
- Playwright/testing

If equivalent skills already exist, do not duplicate them.

Do not install unrelated presentation-only skills or large overlapping skill bundles without need.

---

# 4. WEBSITE PROJECT

Create a separate website project/repository unless inspection proves another location is required:

`reel-pipeline-website`

Preferred stack:

- Next.js
- React
- App Router
- TypeScript
- Tailwind CSS
- ESLint
- Playwright where useful
- GitHub
- Vercel

Use current compatible stable versions.

---

# 5. PRODUCT TRUTHFULNESS

Before writing copy, inspect the actual existing Reel Pipeline.

Known capabilities include:

- Short-form reel/video generation
- Content pipeline
- Social publishing workflow
- Facebook publishing
- Instagram publishing
- TikTok Content Posting integration currently blocked from unrestricted posting by audit/review status

Only claim real functionality.

Do NOT invent:

- Official TikTok partnership
- TikTok endorsement
- Fake AI capabilities
- Analytics that do not exist
- Scheduling that does not exist
- Fake testimonials/statistics/customers/logos

If review compliance requires a real missing interaction, implement the minimum legitimate functionality rather than pretending it exists.

---

# 6. REQUIRED ROUTES

Build:

`/`
`/about`
`/features`
`/how-it-works`
`/tiktok`
`/contact`
`/privacy`
`/terms`

Optional only when useful:

`/faq`
`/status`

Recommended structure:

```text
reel-pipeline-website/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── about/page.tsx
│   ├── features/page.tsx
│   ├── how-it-works/page.tsx
│   ├── tiktok/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
├── public/
├── tests/
├── package.json
├── .gitignore
└── README.md
```

Adapt to current conventions where appropriate.

---

# 7. DESIGN REQUIREMENTS

Use the installed design skill.

The result must be:

- Professional
- Trustworthy
- Modern
- Distinctive
- Accessible
- Responsive
- Mobile-friendly
- Strong in typography and spacing
- Not a generic AI SaaS clone

Avoid generic gradients everywhere, fake dashboard screenshots, excessive motion, poor contrast, tiny text, overcrowding, and imitation TikTok branding.

Respect reduced-motion preferences.

---

# 8. PAGE REQUIREMENTS

## Home

Explain the actual service and workflow:

Content
↓
Video Creation
↓
Review / Preparation
↓
Supported Platform Publishing
↓
Publishing Result

Use only real CTAs and real functionality.

## About

Explain what Reel Pipeline is, the problem it solves, intended users and actual publishing workflow.

## Features

Describe only verified capabilities.

Potential sections after inspection:

- Reel Creation
- Content Workflow
- Video Preparation
- Social Publishing
- Publishing Status
- TikTok Integration

## How It Works

Show the real user journey:

1. Prepare content
2. Generate the reel
3. Review output
4. Connect/authorize a supported platform when required
5. Review available settings
6. Confirm publishing
7. Track result

## TikTok

Explain:

- What the integration does
- Why authorization is required
- Required publishing permission
- What happens to content
- How settings are handled

Use accurate wording:

“The service can send eligible short-form video content to an authorized TikTok account through TikTok's supported Content Posting integration.”

Do not claim official affiliation.

---

# 9. PRIVACY / TERMS / CONTACT

## Privacy

Inspect real implementation first. Cover applicable items:

- information collected
- account/OAuth data
- token handling where applicable
- content/video processing
- publishing activity
- logs
- cookies if used
- analytics if used
- third-party services
- retention/deletion
- security
- user rights
- policy changes
- contact

Do not invent legal details.

If one genuine contact/legal value is unavailable, finish everything else and isolate that exact missing value for the user.

## Terms

Cover appropriate sections:

- acceptance
- service description
- user responsibilities
- account security
- user content and ownership
- prohibited use
- third-party platforms
- TikTok integration
- availability
- IP
- liability
- termination
- changes
- governing law
- contact

Do not fabricate identity/legal information.

## Contact

Create a legitimate support method. Never invent an email address.

---

# 10. NAVIGATION / FOOTER

Implement accessible global navigation.

Footer must visibly link to:

- About
- Features
- How It Works
- TikTok
- Contact
- Privacy Policy
- Terms of Service

Legal links must not be hidden.

---

# 11. TIKTOK VERIFICATION FILE

If TikTok provides an exact verification/signature file:

1. Preserve filename/content exactly.
2. Put it in `public/`.
3. Deploy.
4. Verify its exact public URL.

Example:

`https://YOUR_DOMAIN/tiktok-verify-xxxx.html`

Do not rename/edit it unless official instructions permit.

---

# 12. SANDBOX → PRODUCTION

Keep Sandbox. Never delete it.

Follow the current official lifecycle:

Sandbox
↓
Test Integration
↓
Production Configuration
↓
Review Submission
↓
Approval
↓
Live

Before changing settings:

1. Inspect current TikTok configuration if access exists.
2. Read current official requirements.
3. Determine whether tested Sandbox configuration can be copied/imported.
4. Avoid manually recreating settings when an official transfer/copy method exists.

---

# 13. PRODUCTS / SCOPES

Configure only what the real integration requires.

Expected capability:

`Content Posting API`

Expected permission where applicable:

`video.publish`

If current official names differ, follow current official documentation and report the difference.

Do not request unrelated permissions.

---

# 14. OAUTH / REDIRECT URI

Inspect actual implementation.

If OAuth is required:

- implement it correctly
- keep secrets server-side
- configure the exact implemented redirect URI
- never use a fake callback

Example only:

`https://YOUR_DOMAIN/api/auth/tiktok/callback`

Actual route must match code.

---

# 15. DIRECT POST QUALITY

Follow current official requirements.

Target flow:

Authorized account
↓
Retrieve creator information
↓
Read available settings/privacy options
↓
Present only supported options
↓
User explicitly confirms
↓
Initialize publishing
↓
Transfer media
↓
Track result

Do not hard-code a public privacy level if it is unavailable for the creator.

Respect returned creator settings.

If current CLI-only architecture cannot legitimately demonstrate required interaction, implement the minimum real reviewable flow instead of faking UI.

---

# 16. MEDIA HOSTING

Inspect current media transfer architecture.

For production, prefer:

Reel Pipeline
↓
Controlled HTTPS media storage
↓
Verified/authorized media URL where required
↓
Platform API

Do not make production depend on an arbitrary temporary file host unless genuinely required and supported.

Do not break Facebook/Instagram while improving architecture.

---

# 17. SECURITY

Never expose:

- TikTok client secret
- Firebase private key
- service-account credentials
- access tokens
- refresh tokens
- platform secrets

Check:

`.env`
`.env.local`
`.gitignore`
staged files
Git history where possible
frontend bundles
`public/`
README
screenshots
demo recordings
logs

Use server-side environment variables.

---

# 18. LOCAL QA

Inspect actual scripts before running.

Run appropriate:

- install
- lint
- typecheck
- tests
- build
- production server

Test:

`/`
`/about`
`/features`
`/how-it-works`
`/tiktok`
`/contact`
`/privacy`
`/terms`

Verify:

- no 404
- no console errors
- no broken links
- responsive behavior
- keyboard navigation
- reasonable accessibility
- visible footer
- legal links
- contact page
- TikTok page
- verification file when available

Use browser automation/Playwright where available.

Fix all discovered issues and re-test.

---

# 19. GITHUB

If authenticated GitHub access is available:

1. Create/use repository.
2. Check `.gitignore`.
3. Confirm no secrets are staged.
4. Commit meaningful changes.
5. Push.

Preferred name:

`reel-pipeline-website`

If authentication is the only blocker, prepare everything first, then ask only for authentication.

Do not ask the user to manually run routine Git commands if you can execute them.

---

# 20. VERCEL

If authenticated Vercel access is available:

Import
→ Configure
→ Deploy
→ Wait
→ Test production

Verify live routes and exact verification-file URL if applicable.

If login is the only blocker, prepare everything and ask only for that action.

Then continue autonomously.

---

# 21. CUSTOM DOMAIN

If the user has provided/configured a domain and access exists:

Configure → verify DNS → verify HTTPS.

If DNS requires owner action, give exact records only.

Never invent a domain.

If no custom domain exists, use the deployed Vercel domain only where current TikTok requirements permit.

---

# 22. TIKTOK URL VERIFICATION

Verify, as applicable:

- website reachability
- Privacy URL
- Terms URL
- media URL/domain prefix
- exact verification file
- HTTPS
- submitted URLs match deployed URLs

Follow current official TikTok requirements.

---

# 23. APP REVIEW MATERIAL

Prepare:

## Product description

Accurately describe Reel Pipeline.

## Why TikTok integration

Explain real user benefit.

## Why publishing permission

Explain that the authorized user grants the required permission to publish selected eligible content.

## Real end-to-end flow

User opens service
↓
User prepares/selects content
↓
Reel is generated/prepared
↓
User connects TikTok
↓
User authorizes
↓
Application retrieves creator information
↓
Application shows applicable settings
↓
User explicitly confirms
↓
Application sends video
↓
Application reports result

Adapt to actual implementation. Never describe non-existent features.

---

# 24. DEMO PREPARATION

Prepare an exact demo script using the current official TikTok review requirements.

Suggested structure:

00:00 Homepage
00:10 Product purpose
00:25 Real publishing workflow
00:45 Connect TikTok
01:05 Authorization
01:25 Return to application
01:35 Creator/settings
01:55 Video review
02:15 Confirmation
02:35 Result/status
02:50 Deployed domain
03:00 Privacy
03:10 Terms

Before recording:

- verify all UI
- verify domain
- verify review configuration
- hide secrets
- demonstrate real functionality only

If the environment can record a valid demo, do it. If authenticated TikTok interaction requires the user, prepare everything and request only the minimum recording/auth action.

---

# 25. APP REVIEW CHECKLIST

Verify:

[ ] Production configured
[ ] correct app name
[ ] accurate description
[ ] non-infringing icon
[ ] website live
[ ] genuine multi-page website
[ ] all required pages live
[ ] Privacy/Terms globally visible
[ ] legitimate contact configured
[ ] required URLs verified
[ ] correct TikTok product configured
[ ] required scope configured
[ ] redirect URI correct if applicable
[ ] Sandbox tested
[ ] real flow works
[ ] creator/settings requirements handled
[ ] independent platform errors
[ ] demo prepared
[ ] review explanation prepared
[ ] no unnecessary scopes
[ ] no fake claims
[ ] no secrets
[ ] production build passes

---

# 26. FAILURE RECOVERY

For every failure:

1. Inspect error.
2. Read relevant official docs.
3. Find root cause.
4. Apply minimum safe fix.
5. Re-run failed step.
6. Re-run affected tests.
7. Continue.

Do not stop at the first error. Do not use random repeated fixes.

For review rejection:

Exact reviewer feedback
↓
Identify exact requirement
↓
Minimum necessary fix
↓
Retest
↓
Update materials if required
↓
Resubmit

---

# 27. FINAL REPORT

After completing all possible work, report:

## Completed

Exactly what was built/configured/tested/deployed.

## URLs

Actual live URLs only.

## Tests

Commands/results and important outcomes.

## Skills Used

Exactly which skills were installed/used and why.

## TikTok Configuration

Exactly what was successfully configured.

## Remaining User Actions

ONLY genuine external actions requiring:

- login
- 2FA
- CAPTCHA
- payment
- DNS/domain ownership
- legal identity
- acceptance of external terms
- TikTok account authorization
- final review submission confirmation
- unavailable credentials

For each:

1. What the user must do
2. Where
3. Why the agent cannot do it
4. What the agent will do immediately afterward

Do not list normal development work here.

---

# 28. DEFINITION OF DONE

Autonomous work is complete only when:

[ ] website exists
[ ] targeted skills applied
[ ] production-quality UI
[ ] required routes work
[ ] responsive design verified
[ ] accessibility checked
[ ] no broken links
[ ] Privacy exists
[ ] Terms exists
[ ] legal links visible
[ ] no fake claims
[ ] no secrets exposed
[ ] build passes
[ ] tests pass where applicable
[ ] Git prepared/pushed if access allows
[ ] Vercel deployed if access allows
[ ] production URLs tested
[ ] TikTok verification completed as far as access allows
[ ] Production configuration completed as far as access allows
[ ] review materials prepared
[ ] demo environment prepared
[ ] TikTok 403 mapped to audit_required
[ ] Facebook/Instagram remain independent
[ ] final report produced

---

# 29. FINAL EXECUTION ORDER

INSPECT EXISTING PROJECT
↓
RESEARCH CURRENT OFFICIAL REQUIREMENTS
↓
INSPECT AVAILABLE SKILLS
↓
INSTALL ONLY NEEDED SKILLS
↓
CREATE WEBSITE PROJECT
↓
BUILD REAL WEBSITE
↓
IMPLEMENT/VERIFY REAL REVIEWABLE TIKTOK FLOW
↓
LOCAL QA
↓
FIX ISSUES
↓
GIT PREPARATION
↓
VERCEL DEPLOYMENT
↓
LIVE TESTING
↓
URL VERIFICATION
↓
TIKTOK PRODUCTION CONFIGURATION AS ACCESS ALLOWS
↓
SANDBOX TEST
↓
REVIEW MATERIAL
↓
DEMO PREPARATION
↓
ASK USER ONLY FOR UNAVOIDABLE EXTERNAL ACTIONS
↓
CONTINUE AUTOMATICALLY
↓
FINAL REPORT

# FINAL INSTRUCTION

Act as the implementation owner.

Do not convert this workflow into a tutorial.

Do not wait for permission between ordinary phases.

Do not ask the user to do work you can do.

Make safe decisions independently.

Use current official documentation for external requirements.

Preserve working functionality.

The user should be able to provide ONLY this file to the agent and have the agent autonomously complete the maximum technically and legally possible amount of work.
