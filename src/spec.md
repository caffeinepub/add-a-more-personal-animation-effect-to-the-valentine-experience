# Specification

## Summary
**Goal:** Add a frontend “Custom Domain” setup flow that guides users through pointing their domain to the deployed Internet Computer site, and ensure links work correctly when served from a custom domain.

**Planned changes:**
- Add a visible “Custom Domain” navigation entry or in-page section.
- Provide inputs for the user’s desired domain and the deployed frontend canister ID.
- Render step-by-step DNS configuration instructions (in English) after inputs are provided, including record types and placeholders populated with the user’s values.
- Include a short “Verify” checklist to help the user confirm the domain is live (e.g., DNS propagation wait, browser test).
- Update share/copy-link behavior to generate links from the current browser URL at runtime, avoiding hard-coded origins/hostnames so it works on both default canister URLs and custom domains.

**User-visible outcome:** Users can open a “Custom Domain” section, enter their domain and canister ID, follow clear DNS setup steps to connect the domain, and copy/share links that work correctly whether the app is accessed via the canister URL or a custom domain.
