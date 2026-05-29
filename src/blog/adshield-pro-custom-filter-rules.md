---
title: "How to Write Custom Filter Rules in AdShield Pro: A Complete Guide"
description: "AdShield Pro Pro users can write custom blocking rules using Adblock Plus syntax. This guide covers network rules, cosmetic element hiding, exception rules, and debugging techniques."
slug: "adshield-pro-custom-filter-rules"
date: "2026-04-11"
lastmod: "2026-04-11"
author: "AdShield Pro Team"
category: "How-To"
tags: ["AdShield Pro custom rules", "Adblock Plus syntax guide", "custom filter rules browser", "element hiding adblock", "block specific website elements"]
canonical: "https://adshieldpro.org/blog/adshield-pro-custom-filter-rules"
og_title: "How to Write Custom Filter Rules in AdShield Pro: A Complete Guide"
og_description: "AdShield Pro Pro users can write custom blocking rules using Adblock Plus syntax. This guide covers network rules, cosmetic element hiding, exception rules, and debugging techniques."
og_image: "https://adshieldpro.org/og/blog-adshield-pro-custom-filter-rules.png"
og_type: "article"
og_url: "https://adshieldpro.org/blog/adshield-pro-custom-filter-rules"
og_site_name: "AdShield Pro Blog"
twitter_card: "summary_large_image"
twitter_site: "@adshieldpro"
twitter_title: "How to Write Custom Filter Rules in AdShield Pro: A Complete Guide"
twitter_description: "AdShield Pro Pro users can write custom blocking rules using Adblock Plus syntax. This guide covers network rules, cosmetic element hiding, exception rules, and debugging techniques."
twitter_image: "https://adshieldpro.org/og/blog-adshield-pro-custom-filter-rules.png"
robots: "index, follow"
schema_type: "BlogPosting"
schema_author: "AdShield Pro Team"
schema_publisher: "AdShield Pro"
schema_publisher_logo: "https://adshieldpro.org/logo.png"
reading_time: "6 min read"
featured: false
draft: false
---

# How to Write Custom Filter Rules in AdShield Pro: A Complete Guide

## Why Custom Rules Matter

AdShield Pro's default filter lists cover mainstream advertising and tracking comprehensively. Custom rules handle the gaps: corporate analytics tools not on public lists, regional ad networks, and site-specific annoyances.

## The Adblock Plus Syntax Basics

AdShield Pro uses Adblock Plus (ABP) syntax — the same standard as uBlock Origin and most major blockers.

## Network Rules

**Block a domain:**
```
||ads.example.com^
```
Blocks all requests to `ads.example.com` and subdomains. `||` matches the domain start; `^` is a separator wildcard.

**Block a specific path:**
```
||example.com/analytics/track*
```
Blocks requests containing `/analytics/track` in the path.

**Whitelist exception:**
```
@@||example.com^
```
The `@@` prefix creates an exception — this domain will not be blocked even if other rules would block it.

**Content type modifier:**
```
||cdn.example.com^$script
```
Restricts the rule to block only JavaScript requests from that domain.

## Cosmetic Element Hiding

**Hide by class:**
```
example.com##.ad-container
```

**Hide by ID:**
```
example.com###sidebar-ads
```

**Global hiding (all sites):**
```
##.cookie-notice-overlay
```

## Finding CSS Selectors

Right-click any element → Inspect → look at the `class` or `id` attribute in the Elements panel → use that selector in your cosmetic rule.

## Debugging

The AdShield Pro Pro dashboard's **Element Log** shows every blocked request and hidden element on the current page, along with the rule that triggered it. If a custom rule is not matching, the log shows what requests are actually present.

---

*[AdShield Pro](https://adshieldpro.org) blocks ads, trackers, and fingerprinting scripts — free for Chrome, Firefox, and Edge. [Install now](https://adshieldpro.org).*
