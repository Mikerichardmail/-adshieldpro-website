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

AdShield Pro ships with pre-configured, highly optimized filter lists (such as EasyList and EasyPrivacy) that block the vast majority of mainstream advertising systems, tracking scripts, and telemetry networks automatically. However, these crowd-sourced lists are built to protect the average user across the global web. Because they are designed for broad compatibility, they naturally contain gaps. They must avoid aggressive configurations that might break legitimate functionality on niche portals, enterprise intranets, or regional services.

This is where custom filter rules become invaluable. Writing your own rules allows you to take granular control over your browsing environment. You can block site-specific annoyances, neutralize self-hosted corporate trackers (such as Matomo or Plausible analytics instances configured on custom subdomains), purge distracting user interface elements, and bypass invasive cookie consent walls. By mastering AdShield Pro's filtering syntax, you transition from a passive consumer of security lists to an active architect of your browser's security boundaries.

## The Adblock Plus Syntax Basics

AdShield Pro uses the industry-standard Adblock Plus (ABP) syntax. This declarative language is the universal standard for modern content blockers, including uBlock Origin. 

Under the hood, AdShield Pro parses these rules and compiles them into highly efficient internal data structures (typically Trie search trees). When a webpage triggers a network request, the browser's extension API inspects the request URI and resolves it against these search trees in microseconds. A single rule can target network connections, modify request headers, or manipulate the webpage's Document Object Model (DOM).

## Network Rules

Network rules intercept and block HTTP requests before they leave the browser. This prevents resources (such as JavaScript trackers or ad images) from consuming bandwidth or executing in memory.

### Block a Domain
```
||ads.example.com^
```
*   **The Double Pipe (`||`)** anchors the rule to the start of the host address. It matches protocols like `http://` or `https://` followed by the specified hostname and any subdomains (e.g., `ads.example.com` and `server1.ads.example.com`).
*   **The Caret (`^`)** acts as a separator wildcard. It matches any character that is not a letter, digit, or one of the following characters: `_`, `-`, `.`, `%`. This prevents overblocking; for example, `||example.com^` will block `example.com/index.html` but will *not* block `example.company.com`.

### Block a Specific Path
```
||example.com/analytics/track*
```
*   **The Asterisk (`*`)** acts as a wildcard, matching any sequence of characters in the URI. This rule blocks any request to `example.com` that contains the string `/analytics/track` followed by any parameters, such as `/analytics/track.js` or `/analytics/track-events?id=123`.

### Whitelist Exceptions
```
@@||example.com^
```
*   **The Double At Symbol (`@@`)** designates an exception (or whitelist) rule. Whitelist rules instruct AdShield Pro to permit connections to the target domain, even if a broader blocking rule would otherwise match it. Exception rules take precedence in the blocking pipeline, allowing you to resolve "broken site" issues without disabling your entire filter list.

### Content Type Modifiers
```
||cdn.example.com^$script,third-party
```
*   **The Dollar Sign (`$`)** separates the pattern from its active modifiers. Modifiers allow you to restrict the rule's execution scope. 
*   `$script` limits the block to JavaScript files only, letting images or stylesheets load from the CDN.
*   `$third-party` ensures the rule is only active when the request is cross-site. If you are on `example.com`, the script is allowed; if you visit `another-site.com` and it attempts to load a script from `example.com`, it is blocked.
*   Other key modifiers include `$image` (images), `$xmlhttprequest` (Fetch/XHR requests), and `$domain=example.com` (restricting the rule to execute only when browsing a specific site).

## Cosmetic Element Hiding

Cosmetic rules manipulate the DOM of a webpage. Unlike network rules, which block resources, cosmetic rules inject custom CSS stylesheets that alter the layout of the page. This is primarily used to remove empty frames, hide promotional elements, or clean up page structures after ads have been blocked at the network level.

### Hide by Class
```
example.com##.ad-container
```
*   **The Double Hash (`##`)** signals that the rule is cosmetic. The domain to the left specifies the active context. The CSS selector to the right identifies the target nodes.
*   `.ad-container` is the CSS class selector. On `example.com`, any node with `class="ad-container"` will have `display: none !important;` injected into its style attributes, rendering it invisible.

### Hide by ID
```
example.com###sidebar-ads
```
*   **The Triple Hash (`###`)** indicates ID-based selection. In this example, the element with the unique attribute `id="sidebar-ads"` is targeted and removed from the layout.

### Global Cosmetic Hiding
```
##.cookie-notice-overlay
```
*   Omitting the domain name before the `##` characters creates a global cosmetic rule. Any webpage that loads containing an element with `class="cookie-notice-overlay"` will have it hidden automatically, regardless of the site's host domain.

## Finding CSS Selectors Using Browser Developer Tools

To write effective cosmetic rules, you must identify the precise CSS class, ID, or attribute of the element you wish to hide. Modern web browsers make this straightforward through built-in developer tools:

1.  **Open Developer Tools:** Navigate to the target website, right-click the element you want to block, and select `Inspect` (or press `F12`).
2.  **Locate the DOM Node:** The browser will open the Elements panel, highlighting the specific HTML tag in the DOM hierarchy. Look for distinguishing attributes, such as `class="promotional-banner"` or `id="sponsored-post"`.
3.  **Handle Dynamic Selectors:** Modern web frameworks (like React, Angular, or Svelte) often generate dynamic classes containing random strings, such as `class="AdCard_xyz123"`. To block these, write attribute substring matches. For example, `example.com##div[class^="AdCard_"]` will target any `div` where the class name begins with `AdCard_`.

## Debugging Your Custom Rules

If a custom rule fails to block an element or breaks a website's layout, use AdShield Pro's advanced debugging tools:

1.  **Access the Element Log:** Click the AdShield Pro extension icon and open the developer dashboard's live log (often called the logger or element log).
2.  **Analyze Real-Time Activity:** Reload the target webpage. The logger will display a chronological list of all network requests, scripts, and cosmetic actions taken on the page. Network blocks are highlighted in red, whitelists in green, and cosmetic hide actions in yellow.
3.  **Inspect Triggering Rules:** Hover over a log entry to view the exact filter rule that matched the request. If your custom rule is not matching, check for syntax errors, incorrect domain anchors, or conflicting whitelists.
4.  **Bypass Cache During Tests:** When testing rules, perform a hard refresh (`Ctrl + F5` or `Cmd + Shift + R`) to force the browser to request fresh assets rather than loading cached versions from disk.

---

*[AdShield Pro](https://adshieldpro.org) blocks ads, trackers, and fingerprinting scripts — free for Chrome, Firefox, and Edge. [Install now](https://adshieldpro.org).*
