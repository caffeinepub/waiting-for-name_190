# Pathak Ji Enterprises

## Current State
- Basic placeholder site with a minimal header, "under construction" message, and simple footer.
- Google Search Console meta tag `4ca470c192661571` already present in `index.html`.
- App.tsx contains an old/incorrect meta tag injected via useEffect (should be removed).
- No branding, no login functionality, no footer with address/map.

## Requested Changes (Diff)

### Add
- **Enterprise Header**: Full-width high-end header with Pathak Ji Enterprises branding, gold logo/wordmark, navigation links (Home, About, Services, Contact), and an "Agent Login" CTA button.
- **Agent Login Modal/Dialog**: Opens on clicking the Login button. Contains Username and Password fields plus a Submit button.
- **Global Headquarters Footer Section**: Professional address block for the company headquarters, plus an embedded Google Maps iframe showing the location.
- **Gold & Obsidian Black design theme**: OKLCH-based color tokens for gold (primary accent) and obsidian black (background/surface), applied site-wide.

### Modify
- **App.tsx**: Remove the old incorrect `useEffect` that injected wrong meta tag. Rebuild the layout with the new header, hero/landing section, and footer.
- **index.css**: Update design tokens to gold and obsidian black theme.
- **index.html title**: Update to "Pathak Ji Enterprises".

### Remove
- Old `useEffect` meta tag injection in App.tsx (the wrong verification code).
- Generic placeholder content.

## Implementation Plan
1. Update `index.html` title to "Pathak Ji Enterprises" (preserve existing correct meta verification tag).
2. Update `index.css` with OKLCH-based gold and obsidian black color tokens.
3. Rewrite `App.tsx` with:
   - Enterprise header: logo/wordmark, nav links, Agent Login button.
   - Agent Login dialog (modal) with Username and Password fields.
   - Hero section with brand message.
   - Footer with Global Headquarters address block and embedded Google Maps iframe.
4. Apply deterministic `data-ocid` markers to all interactive elements.
