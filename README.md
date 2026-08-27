# WEM Navigator Track 8 Integrated MVP v1.4

This build adds the one-page executive snapshot/dashboard, separates the full breakdown, forces AI Readiness into every assessment, separates manager-friction questions from context, uses tile-based Genesys journey selection, removes assessment interstitials, and adds a peer-reviewable service-copy table.

WEM Navigator Integrated MVP v1.3

Key update: concise behavioural answer options; maturity score bands 0-20 / 21-40 / 41-60 / 61-80 / 81-100.

# Genesys WEM Navigator - Track 8 MVP

Static, GitHub Pages-ready booth application. No build step and no backend required.

## Run
- Open `index.html` directly, or serve the folder with any static server.
- GitHub Pages: upload all files at the repository root and enable Pages.
- Internal QA mode: append `?internal=1` to expose the internal JSON trace and CSV export.

## Customer flow
Welcome -> context -> module choice -> assessment -> lead capture -> reveal -> report.

## PDF
The **Download / save PDF** button opens the browser print dialog using a dedicated print stylesheet. Choose **Save as PDF**. This is intentionally separate from the long-screen layout.

## Data / privacy
The booth MVP stores completed assessments in browser `localStorage` only. There is no automated email or CRM integration. Internal CSV export is hidden unless `?internal=1` is used. Clear browser site data after the event if required by the approved retention process.

## Configuration
`config.js` owns questions, weights, findings, benefits, services and industry references. The application logic in `app.js` consumes semantic dimension IDs rather than literal question wording, so peer-review wording changes can be made without rewriting finding rules as long as the dimension remains the same.

## Current MVP limitations
- Complete WEM asks all selected questions; adaptive branching is not yet enabled.
- Industry references are calibrated reference values, not empirical averages.
- Observed WEM Navigator peer benchmarking is explicitly future-only and is not built.
- Benefits are directional ranges; no customer-specific financial ROI calculator is included.
- Service mapping is deterministic and intentionally restrained to a Best Fit plus optional second fit.

## v1.2 refinement pass
- Five questions for each discipline are now presented together on one module page with shorthand maturity-stage choices; the selected option reveals the full behavioural description.
- Added optional, non-scored future priorities (maximum two) to sharpen recommendations without changing maturity.
- Combined WEM and AI Readiness are presented as compact summary cards alongside the radar; the separate AI panel has been removed.
- Module cards include a discreet Genesys Support tile, while the main service section is shorter and uses small related-service cards.
- Benefit cards no longer display source/deck text and the PTO-hours benefit is suppressed.
- Benefit ranges use a spaced hyphen.
- Print CSS has been further condensed for A4/PDF output.


## v1.8 corrections
- Fixed industry/size context persistence on the form.
- Radar now shows the customer and industry benchmark as overlaid webs.
- Added calibrated industry AI-readiness references.
- Radar title is centred at the top of the widget.
- Priority capability signals use dimension-specific next-stage guides derived from maturity gates.
- Added subtle widget borders to match the reference design.
- Combined WEM summary narrative expanded beyond a single comparison label.


Build note: v1.8 preserves the integrated v1.7 configuration/logic and only applies snapshot layout, radar benchmark visibility, context-state robustness, and removal of the hardcoded demo state.


## Lead capture readiness
Completed assessments continue to save locally in the browser for the GitHub Pages MVP. The exported CSV now includes contact-interest, priorities, manager-friction, module scores, AI score/stage, recommended service, and raw answers. `config.js` also includes an empty `leadEndpoint` setting. Leave it blank for GitHub Pages/local-only operation. Later, when a Cloudflare Worker endpoint is available, set this value to the Worker URL and the same completed assessment record will also be POSTed to the backend without changing the assessment logic.

## AI-enabled QM recommendation logic
AI-enabled Quality Management is promoted only when the assessment evidence supports it. A reasonable QM foundation (QM score >= 50) is required. Developing AI readiness or an explicit AI priority can surface AI-Enabled Quality Management Readiness & Validation. Stronger AI readiness (>= 63) without an identified AI-governance pain can surface the focused AI-Enabled Quality Management Pilot. Where QM foundations are weak, the app continues to prioritise QM improvement rather than prematurely recommending AI scoring.
