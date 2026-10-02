# Anti Slop Delivery Audit

Date: 2026-10-01

Design read: corporate group landing page, grounded in user-supplied brand guidelines; ENERGY 2 / RHYTHM 2 / MOTION 1.

## Hard Gate

- R-02 PASS: visible copy contains no em dash.
- R-03 PASS: after this update, browser measurement at 375 px recorded document width 360 px. Desktop and mobile previews show logo assets contained within their surfaces.
- R-17, R-18, R-36 PASS: no unsourced metrics, testimonials, security claims, or performance claims are shown.
- R-23, R-38 PASS: brand artwork, service names, palette and logos derive from user-supplied assets. The primary Clevio leaf-and-wordmark has a transparent background; Innovator uses its supplied Innovator Camp lockup; AI Pro uses the supplied white variant and AI Staff uses a transparent white derivative of its supplied official mark.
- R-24, R-26 PASS: visible navigation and action links have real section, email, or brand-site destinations.
- R-25 PASS: measured contrast is 11.16:1 for white on Clevio blue, 8.77:1 for body blue on white, 10.08:1 for black on brand lime, and 8.20:1 for black on its lime hover state.
- R-27 PASS: this is a static information page without fetched-data states.
- R-28 PASS: no FAQ is included.
- R-32 PASS: semantic links/buttons, visible focus treatment, and keyboard-operable mobile navigation are present.
- R-33 PASS: source edits are direct; no rewrite script is part of the site.
- R-34 PASS: no theme toggle is shipped.
- R-35 PASS: npm run build completed. Desktop and mobile browser previews confirmed the Clevio, AI Staff, and AI Pro logos load and remain contained; the 375 px viewport has no horizontal overflow.
- R-37 PASS: explicit design direction is recorded in DESIGN.md from the user-supplied brand documents and instructions.

## Purpose Gate

- R-01 PASS: Clevio blue is the parent identity, green is the single approved accent, white and black remain the core neutrals.
- R-04 PASS: principle SVGs have consistent blue strokes and meanings tied to their labels; official supplied brand logos replace improvised product badges.
- R-06 PASS: Manrope supports readable UI copy; logo lettering is preserved from supplied artwork.
- R-07 PASS: pale blue arcs echo the supplied ecosystem motif.
- R-08 PASS: arrows are limited to directional actions.
- R-09, R-10, R-13 PASS: no status badges, glass surfaces, or glows.
- R-12 PASS: restrained shadows separate cards from the background.
- R-14 PASS: service cards are peers; each uses product identity from official logo assets or the available Innovator naming.
- R-19 PASS: transitions support controls only and respect reduced motion.
- R-22 PASS: the interface uses service photography, not generic illustrations.

## Liveliness and Craft

- PASS: ENERGY 2 / RHYTHM 2 / MOTION 1 are stated in DESIGN.md.
- PASS: brand colors and supplied logo forms distinguish Clevio and its sub-brands, including the requested white AI Pro and AI Staff marks.
- PASS: the hero/services and mission/principles sections have distinct visual roles.
- PASS: the color system remains within Clevio blue, white, black, blue tints, and the approved green.

## Mobile Logo Placement Follow-up

- R-03 PASS: Chromium render at 375 px shows each logo in the copy column above its description, with all cards and controls inside the viewport; desktop render at 1440 px keeps each mark centered over its photo.
- R-31 PASS: the mobile placement change is documented in DESIGN.md; separating logos from photos on narrow cards preserves the text hierarchy and avoids covering the image.
- R-35 PASS: `npm run build` succeeds after the responsive update.

## Hero and Logo Glow Follow-up

- R-03 PASS: renders at 320 px, 375 px, 768 px, and 1440 px keep all card text, buttons, and navigation within their layouts; the narrow header uses a compact, single-line group action.
- R-23 PASS: the hero and service logos use supplied assets only; no new brand artwork was created.
- R-25 PASS: transparent card marks receive a white halo and a restrained dark shadow over grayscale photos, preserving separation without a background shape.
- R-31 PASS: the primary logo removes redundant hero naming, and the single short ecosystem line reduces initial reading load. The glow replaces the prior white logo plates while keeping the official marks visually legible.

## Narrow Viewport Overflow Repair

- R-03 PASS: the fixed 320 px body minimum was removed. Chromium renders at 240 px use full-width vertical cards without clipping; the requested iPhone XR 414 px layout retains its compact image-and-copy rows without horizontal overflow.
- R-31 PASS: the very narrow fallback preserves the primary navigation control and makes the secondary group action available at practical mobile widths, without forcing a horizontal layout.
- R-35 PASS: `npm run build` completes after the viewport repair.

## Clevio Group Hero Lockup

- R-23 PASS: the hero uses the user-supplied blue Clevio Group logo, cropped only to remove transparent exterior padding.
- R-31 PASS: a slightly taller logo frame preserves the supplied group lockup's proportions while maintaining the concise hero message.

## White Product Marks and Mission Statement

- R-23 PASS: AI Pro uses its supplied white logo variant. AI Staff’s supplied black mark is recolored only to white while preserving its original alpha and proportions.
- R-25 PASS: dark contour shadows keep both white product marks legible over the grayscale photographs and on the mobile copy surface without adding a background shape.
- R-31 PASS: the hero statement now directly expresses Clevio’s human-centered mission: technology that empowers people for the common good.

## Mobile Mark Contrast and Arrow Alignment

- R-25 PASS: the narrow layout uses the supplied black AI Pro and AI Staff mark variants on white copy surfaces; desktop preserves white marks over photography.
- R-31 PASS: mobile action arrows use a fixed inline grid, unit line-height, and zero button padding so the glyph remains optically centered in every circular action.

## Footer Destinations and Social Icons

- R-24 PASS: service cards point to the user-specified Clevio AI Staff, AI Pro, and Innovator Camp destinations; social icons link to the accounts surfaced by Clevio's official site and official Clevio Camp link hub.
- R-25 PASS: social links use consistent inline SVG marks, accessible names, and 44 px minimum targets in the footer.
- R-31 PASS: the footer copyright year displays 2026.

## Mobile Header Alignment

- R-03 PASS: the header retains its logo, group action, and menu at 414 px, 360 px, and 320 px viewport widths without horizontal clipping.
- R-25 PASS: the mobile menu keeps a 44 px touch target and centers its three strokes vertically and horizontally.
