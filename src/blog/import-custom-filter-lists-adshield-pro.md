---
title: "How to Import Custom Filter Lists Into AdShield Pro"
description: "AdShield Pro supports any Adblock Plus format filter list. Here is how to subscribe to community-maintained specialised lists for regional blocking, cookie banners, and malware domains."
slug: "import-custom-filter-lists-adshield-pro"
date: "2026-02-18"
lastmod: "2026-02-18"
author: "AdShield Pro Team"
category: "How-To"
tags: ["custom filter lists AdShield Pro", "import filter list adblock", "EasyList regional", "Fanboy annoyance list", "AdShield Pro filter lists", "subscribe filter list"]
canonical: "https://adshieldpro.org/blog/import-custom-filter-lists-adshield-pro"
og_title: "How to Import Custom Filter Lists Into AdShield Pro"
og_description: "AdShield Pro supports any Adblock Plus format filter list. Here is how to subscribe to community-maintained specialised lists for regional blocking, cookie banners, and malware domains."
og_image: "https://adshieldpro.org/og/blog-import-custom-filter-lists-adshield-pro.png"
og_type: "article"
og_url: "https://adshieldpro.org/blog/import-custom-filter-lists-adshield-pro"
og_site_name: "AdShield Pro Blog"
twitter_card: "summary_large_image"
twitter_site: "@adshieldpro"
twitter_title: "How to Import Custom Filter Lists Into AdShield Pro"
twitter_description: "AdShield Pro supports any Adblock Plus format filter list. Here is how to subscribe to community-maintained specialised lists for regional blocking, cookie banners, and malware domains."
twitter_image: "https://adshieldpro.org/og/blog-import-custom-filter-lists-adshield-pro.png"
robots: "index, follow"
schema_type: "BlogPosting"
schema_author: "AdShield Pro Team"
schema_publisher: "AdShield Pro"
schema_publisher_logo: "https://adshieldpro.org/logo.png"
reading_time: "6 min read"
featured: false
draft: false
---

# How to Import Custom Filter Lists Into AdShield Pro

## Why Use Additional Filter Lists?

AdShield Pro's default filter lists — EasyList and EasyPrivacy — cover mainstream ad networks and trackers comprehensively. Specialised community-maintained lists extend this coverage to regional networks, annoyances, and threat categories.

## How to Add a Custom List

1. Click the AdShield Pro shield icon in your toolbar
2. Navigate to **Settings → Filter Lists → Custom Lists**
3. Click **Add List URL**
4. Paste the raw URL of any `.txt` Adblock Plus format filter list
5. Click **Subscribe**

AdShield Pro fetches the list, parses it, and begins applying rules immediately. Lists auto-update on their specified schedule.

## Recommended Community Lists

**Fanboy's Annoyance List**  
Blocks cookie consent banners, newsletter popups, live chat widgets, and social media follow buttons. Dramatically reduces visual clutter beyond standard ad blocking.  
URL: `https://easylist.to/easylist/fanboy-annoyance.txt`

**EasyList Germany**  
Additional coverage for German-language ad networks not on the main EasyList.  
URL: `https://easylist.to/easylistgermany/easylistgermany.txt`

**Malware Domain Blocklist**  
Blocks domains known to distribute malware, beyond what EasyPrivacy covers.  
URL: `https://malware-filter.gitlab.io/malware-filter/urlhaus-filter.txt`

**AdGuard URL Tracking Protection**  
Strips tracking parameters from URLs (`?fbclid=`, `?gclid=`, `?utm_*`) in addition to blocking domains.  
URL: `https://filters.adtidy.org/extension/ublock/filters/17.txt`

**I don't care about cookies**  
Auto-dismisses cookie consent popups using cosmetic rules — without blocking the CMP scripts (for sites where you want legal consent logging to work).  
URL: `https://www.i-dont-care-about-cookies.eu/abp/`

## Managing Your Lists

Active lists appear under Settings → Filter Lists with their last update time and rule count. You can disable individual lists without removing them, or force an immediate update for any list.

Keep custom lists to a manageable number — each additional list adds minor parsing overhead on browser startup.

---

*[AdShield Pro](https://adshieldpro.org) blocks ads, trackers, and fingerprinting scripts — free for Chrome, Firefox, and Edge. [Install now](https://adshieldpro.org).*
