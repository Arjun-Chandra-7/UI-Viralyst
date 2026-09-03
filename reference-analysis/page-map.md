# Page Map — Aardvark Book Club

Measured at desktop standard viewport (1440x900), total scroll height: **12,666px**.

```
[0px - 80px]            Header / Navigation (Fixed/Sticky at top)
                         - Brand Logo link
                         - Navigation list (Books, How it Works, Gift, Sign In, Get Started)
                         - Menu hamburger toggle button

[0px - 1050px]          1. Hero Section (.hero.is--bg-yellow)
                         - Yellow background with ellipse intro clip-path
                         - Large Champ headline: "Unbox stories worth talking about"
                         - Sub-paragraph description
                         - CTA Button Alt: "Log-in / Sign-up now"
                         - Handwritten callout: "Pick 1-3 books every month"
                         - Canvas 120-frame hero sequence animation

[1050px - 2215px]       2. Books Showcase Section (.books.is--bg-white)
                         - Section header: "This month’s books"
                         - Month selection & Category filter tags (Fiction, Thriller, Sci-Fi, Romance, etc.)
                         - Horizontal book slider with book covers, badges, descriptions, and interactive modal/hover
                         - "Browse all books" link

[2215px - 3033px]       3. Flow / How It Works Intro (.flow.is--inner-clip.is--bg-soft-pink)
                         - Soft pink background with decorative scalloped/curved border
                         - "How it works" headline and 3 numbered step columns:
                           1. Pick your books
                           2. Delivered to your door
                           3. Join the conversation

[3033px - 5733px]       4. Box Unboxing Interactive Sequence (.box)
                         - Pinned scroll sequence (Height: 2700px, 3 full screen viewports of scroll travel)
                         - 120-frame Canvas unboxing animation scrubbed smoothly with Lenis + ScrollTrigger
                         - Step-by-step overlaid narrative callouts synchronized with the unboxing frames

[5733px - 7123px]       5. Genre Interactive Section (.genre.is--bright-pink)
                         - Vibrant bright pink background
                         - Headline: "Find your next obsession"
                         - Interactive genre tag selectors (Literary, Psychological, Fantasy, etc.)
                         - Dynamic mascot & book visual reaction on hover / selection

[7123px - 7933px]       6. Benefits Section (.benefits)
                         - Membership perks grid:
                           - Hardcovers at paperback prices
                           - Free shipping
                           - Skip or cancel anytime
                           - Exclusive club editions

[7933px - 8618px]       7. FAQ Section (.faq.is--bg-white)
                         - Section title: "Frequently Asked Questions"
                         - Interactive accordion items with custom smooth height expansion and chevron animation

[8618px - 9588px]       8. Gifting Section (.gift)
                         - Section banner: "Give the gift of reading"
                         - Gift box visuals and gift membership CTA

[8618px - 8900px]       9. Tagline Curve (.tagline-curve)
                         - Curved SVG text path wrapping with computed radial font size

[9588px - 9923px]       10. Badge Marquee Section (.badge)
                         - Press quotes, reader ratings, and community awards marquee ticker

[9923px - 11072px]      11. Members' Choice Section (.choice.is--outer-clip.is--bg-yellow)
                         - Yellow section with community favorite picks and reader quotes

[11072px - 12119px]     12. Exclusive Editions Section (.exclusive.is--bg-white)
                         - Custom foil stamping, painted edges, special dust jacket highlights

[12119px - 12666px]     13. Footer (.footer)
                         - Parallax mascot reveal on scroll (clamp top-bottom to top-top, scrub: 0.2)
                         - Newsletter subscription input form
                         - Social links & navigation directory
                         - Copyright, Terms, Privacy Policy
```
