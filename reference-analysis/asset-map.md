# Asset Map — Aardvark Book Club Forensic Reconstruction

## 1. Typography Fonts
The live website uses 5 proprietary / custom web fonts:

| Font Family | Weight | Style | Local File | Original URL |
|---|---|---|---|---|
| Degular | 500 (Medium) | normal | `/fonts/6a329ba7d02bd3d351e01fc6_Degular-Medium.woff2` | https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a329ba7d02bd3d351e01fc6_Degular-Medium.woff2 |
| Degular | 600 (SemiBold) | normal | `/fonts/69c51e46ef7236cf68eaef2e_degular-semibold.woff2` | https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69c51e46ef7236cf68eaef2e_degular-semibold.woff2 |
| Degular | 700 (Bold) | normal | `/fonts/69c520c7360396435501e587_degular-bold.woff2` | https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69c520c7360396435501e587_degular-bold.woff2 |
| Champ | 700 (ExtraBold) | normal | `/fonts/6963d2cdeaa0084ad1abd7f0_Champ-ExtraBold.woff` | https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6963d2cdeaa0084ad1abd7f0_Champ-ExtraBold.woff |
| Hello Organichand Webfont | 400 (Regular) | normal | `/fonts/6963d3bce4c07135f1d68628_hello-organichand-webfont.woff2` | https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6963d3bce4c07135f1d68628_hello-organichand-webfont.woff2 |

All font files have been forensically captured and saved directly into `public/fonts/`.

## 2. Animation Sequences
### A. Hero Sequence
- **Canvas Element**: `canvas[data-hero-sequence-canvas]`
- **Desktop Base URL**: `https://aardvark-book-club.b-cdn.net/frame_`
- **Frame Index Format**: 3-digit padded (`frame_000.webp` to `frame_119.webp`)
- **Total Frames**: 120
- **Frame Rate**: 24 fps
- **Type**: WebP image sequence drawn to HTML5 `<canvas>` via GSAP requestAnimationFrame / playhead.

### B. Box Unboxing Sequence
- **Canvas Element**: `canvas[data-box-sequence-canvas]`
- **Desktop Base URL**: `https://aardvark-book-club.b-cdn.net/box/frame-`
- **Mobile Base URL**: `https://aardvark-book-club.b-cdn.net/box-mobile/frame-`
- **Static Fallback**: `https://aardvark-book-club.b-cdn.net/box/frame-000.webp`
- **Frame Index Format**: 3-digit padded (`frame-000.webp` to `frame-119.webp`)
- **Total Frames**: 120
- **Type**: ScrollTrigger scrubbed sequence pinned during section traversal.

## 3. Downloaded Raster and Vector Assets
Total downloaded assets: 81 images in `public/assets/`.
- `/assets/696179694070e2fa9eca375f_logo.svg`: 176x44px (natural 234x59px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696179694070e2fa9eca375f_logo.svg
- `/assets/69b9afc474f523151b7c0941_package-visual.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual.webp
- `/assets/6a95dd114588ec2d7b5f3852_earlymazywood.png`: 250x376px (natural 1440x2071px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95dd114588ec2d7b5f3852_earlymazywood.png
- `/assets/6a95de8306c788ece7de135f_crone.png`: 247x374px (natural 1440x2071px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95de8306c788ece7de135f_crone.png
- `/assets/6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`: 242x371px (natural 1440x2071px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95dfdce3d0286b64aa3e9c_thesecretdinner.png
- `/assets/6a95e0dc6d550cec545ea990_blacktail.png`: 251x377px (natural 1440x2071px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e0dc6d550cec545ea990_blacktail.png
- `/assets/6a95e1af249a44c6440815ef_scion.png`: 257x381px (natural 1440x2071px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e1af249a44c6440815ef_scion.png
- `/assets/6a95e2a5395f8a9419ddc227_fruitfly.png`: 254x379px (natural 0x0px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e2a5395f8a9419ddc227_fruitfly.png
- `/assets/696a059da09e3c123fba6a5a_logo-circle.svg`: 60x60px (natural 80x80px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696a059da09e3c123fba6a5a_logo-circle.svg
- `/assets/69849eba6ebf97ec498a7a57_01_step-illustration.webp`: 273x224px (natural 720x588px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69849eba6ebf97ec498a7a57_01_step-illustration.webp
- `/assets/69849eba1f866c516a514ade_02_step-illustration.webp`: 273x224px (natural 720x588px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69849eba1f866c516a514ade_02_step-illustration.webp
- `/assets/69849ebaea8f91077664d474_03_step-illustration.webp`: 273x224px (natural 720x588px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69849ebaea8f91077664d474_03_step-illustration.webp
- `/assets/6a354b17bd64236c99a93c7e_Step%20Illustration.webp`: 273x224px (natural 720x588px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a354b17bd64236c99a93c7e_Step%20Illustration.webp
- `/assets/69c6d9f6cb0f4ec3190ce451_box-title.svg`: 750x170px (natural 1000x227px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69c6d9f6cb0f4ec3190ce451_box-title.svg
- `/assets/69960373d1c35e0dd8ec560d_button-app-store.svg`: 0x0px (natural 300x100px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69960373d1c35e0dd8ec560d_button-app-store.svg
- `/assets/6996037302aa4574b3eecab8_button-google-play.svg`: 0x0px (natural 300x89px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6996037302aa4574b3eecab8_button-google-play.svg
- `/assets/6a316546fcc3632be3a0f631_japanesegothic.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a316546fcc3632be3a0f631_japanesegothic.webp
- `/assets/6a316572391c18aa5ca121b3_saltcrop-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a316572391c18aa5ca121b3_saltcrop-350x538.webp
- `/assets/6a31658aa896f279bb1b1761_starshipped-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31658aa896f279bb1b1761_starshipped-350x538.webp
- `/assets/6a3165abaf88f7e3504d41e2_adrift-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a3165abaf88f7e3504d41e2_adrift-350x538.webp
- `/assets/6a3165c03a6358bb05f283c8_dearmonicalewinsky.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a3165c03a6358bb05f283c8_dearmonicalewinsky.webp
- `/assets/6a3165ee2ca8f8e5f54f8384_theredwinter-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a3165ee2ca8f8e5f54f8384_theredwinter-350x538.webp
- `/assets/6a316608338869b1a00104ab_spoiledmilk-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a316608338869b1a00104ab_spoiledmilk-350x538.webp
- `/assets/6a31661e8c0a3cf2c071fa24_oursisterskeeper.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31661e8c0a3cf2c071fa24_oursisterskeeper.webp
- `/assets/6a316635dba5fe3b394caeab_soundslikelove-1-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a316635dba5fe3b394caeab_soundslikelove-1-350x538.webp
- `/assets/6a31665934faab6442519ffe_lovebythebook.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31665934faab6442519ffe_lovebythebook.webp
- `/assets/6a31cc1f142c8b52680233ed_girlsgirlold.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31cc1f142c8b52680233ed_girlsgirlold.webp
- `/assets/6a31b0d4bf9b65712f97d0d0_whenthewolfcomeshome-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b0d4bf9b65712f97d0d0_whenthewolfcomeshome-350x538.webp
- `/assets/6a31b1034e836a671635157e_deathoftheauthor-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b1034e836a671635157e_deathoftheauthor-350x538.webp
- `/assets/6a31bdb4b6bcb0188bfde193_Aardvark%20x%20Future%20Three.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31bdb4b6bcb0188bfde193_Aardvark%20x%20Future%20Three.webp
- `/assets/6a31b24beb8a0c0ddebc72d1_itshouldhavebeenyou-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b24beb8a0c0ddebc72d1_itshouldhavebeenyou-350x538.webp
- `/assets/6a31b26bd10933942ef97835_whidbey-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b26bd10933942ef97835_whidbey-350x538.webp
- `/assets/6a31b28197d5758888307962_thepoetempress-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b28197d5758888307962_thepoetempress-350x538.webp
- `/assets/6a31b29dedd02e0ccf6b9c0c_thestarvingsaints.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b29dedd02e0ccf6b9c0c_thestarvingsaints.webp
- `/assets/6a31b2b7cac42650bf13e025_meetthenewmans-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b2b7cac42650bf13e025_meetthenewmans-350x538.webp
- `/assets/6a31b2c96300c8d92b60c23a_junie-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b2c96300c8d92b60c23a_junie-350x538.webp
- `/assets/6a31b2dbedfbb8f46c5cea99_isthisacryforhelp-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b2dbedfbb8f46c5cea99_isthisacryforhelp-350x538.webp
- `/assets/6a31cc1fd65f717f3c64816d_theverydefinitionofloveold.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31cc1fd65f717f3c64816d_theverydefinitionofloveold.webp
- `/assets/6a31b339a14c82017668f539_thebuffalohunterhunter-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b339a14c82017668f539_thebuffalohunterhunter-350x538.webp
- `/assets/6a31b34dacb51a2acf64735c_operationbouncehouse-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b34dacb51a2acf64735c_operationbouncehouse-350x538.webp
- `/assets/6a31b35deb8a0c0ddebd1ca0_bride2-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b35deb8a0c0ddebd1ca0_bride2-350x538.webp
- `/assets/6a31b36c6d9062dcc2792c81_toooldforthis-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b36c6d9062dcc2792c81_toooldforthis-350x538.webp
- `/assets/6a31b37854d5cb22f4a4926c_disappointme-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b37854d5cb22f4a4926c_disappointme-350x538.webp
- `/assets/69c3adee524231cfe3dcccf6_science-fiction_book-img_02.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69c3adee524231cfe3dcccf6_science-fiction_book-img_02.webp
- `/assets/6a31b39a8b43961fe5cb8f08_allofusmurderers-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b39a8b43961fe5cb8f08_allofusmurderers-350x538.webp
- `/assets/69c3adf5f9d0633bda270aca_science-fiction_book-img_03.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69c3adf5f9d0633bda270aca_science-fiction_book-img_03.webp
- `/assets/6a31b3b7b29697f82b969099_whentheworldtipsover-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b3b7b29697f82b969099_whentheworldtipsover-350x538.webp
- `/assets/6a31b3c5576771de9683e119_girldinner-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b3c5576771de9683e119_girldinner-350x538.webp
- `/assets/6a31cc1f6c096eedfd0eee08_theunicornhuntersold.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31cc1f6c096eedfd0eee08_theunicornhuntersold.webp
- `/assets/6a31b83f7423a4003bba94c1_victorianpsycho.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b83f7423a4003bba94c1_victorianpsycho.webp
- `/assets/6a31b8543837965ccdfd46b3_localheavens-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b8543837965ccdfd46b3_localheavens-350x538.webp
- `/assets/6a31b864e8c774eb39ab8a99_wellactually-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b864e8c774eb39ab8a99_wellactually-350x538.webp
- `/assets/6a31b872dbbfe0f82f71d0f3_juliechanisdead-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b872dbbfe0f82f71d0f3_juliechanisdead-350x538.webp
- `/assets/6a31b882edd02e0ccf6da282_thehounding-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b882edd02e0ccf6da282_thehounding-350x538.webp
- `/assets/6a31b890ae99f5eba569f25c_thedevils-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b890ae99f5eba569f25c_thedevils-350x538.webp
- `/assets/6a31b8a0755fc56a1065719f_alandsowide-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b8a0755fc56a1065719f_alandsowide-350x538.webp
- `/assets/6a31b8ad3bf21098c4645dc8_themadwife-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b8ad3bf21098c4645dc8_themadwife-350x538.webp
- `/assets/6a31b8c06de3eea03f9013f5_masquerade.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b8c06de3eea03f9013f5_masquerade.webp
- `/assets/6a31b8cfdecb66ba1175decb_tilt-350x538.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31b8cfdecb66ba1175decb_tilt-350x538.webp
- `/assets/6a31cc1ff5437c6b32bdce1d_headlightsold.webp`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31cc1ff5437c6b32bdce1d_headlightsold.webp
- `/assets/69b2c25bdf51e00864bcf4f1_benefits-text-eng.svg`: 486x176px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b2c25bdf51e00864bcf4f1_benefits-text-eng.svg
- `/assets/696a402939e1e6124f2c2b39_logo-circle-big.svg`: 426x426px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696a402939e1e6124f2c2b39_logo-circle-big.svg
- `/assets/69b9b566693a6633673acc40_logo-pw.webp`: 78x78px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9b566693a6633673acc40_logo-pw.webp
- `/assets/69b9b5b7ac5a698bb7f76e69_logo-msnbc.webp`: 78x78px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9b5b7ac5a698bb7f76e69_logo-msnbc.webp
- `/assets/69b9b5c57abe05306fcadf78_logo-book-riot.webp`: 78x78px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9b5c57abe05306fcadf78_logo-book-riot.webp
- `/assets/69b9b5d24cc9818e2945bf06_logo-travel-leisure.webp`: 78x78px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9b5d24cc9818e2945bf06_logo-travel-leisure.webp
- `/assets/69d7c9f6062fc8ef7e014217_choice-heart-illustration.svg`: 0x0px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69d7c9f6062fc8ef7e014217_choice-heart-illustration.svg
- `/assets/6a424bd55394074d40414928_6a424662da0a53b9c2c606e3_isthisacryforhelp2.webp`: 275x415px (natural 0x0px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a424bd55394074d40414928_6a424662da0a53b9c2c606e3_isthisacryforhelp2.webp
- `/assets/69d9056988fcfdf2b0a8bfa2_orange-eyecatcher.svg`: 156x204px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69d9056988fcfdf2b0a8bfa2_orange-eyecatcher.svg
- `/assets/6a424bd25ff866ea5996cae2_6a42467a5013b8dca5ff09f8_thebuffalohunterhunterspec2.webp`: 266x409px (natural 0x0px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a424bd25ff866ea5996cae2_6a42467a5013b8dca5ff09f8_thebuffalohunterhunterspec2.webp
- `/assets/6a424bd25ff866ea5996cadd_6a4246885e00ecdc18382d1b_thebuffalohunterhunterauthor.webp`: 109x109px (natural 0x0px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a424bd25ff866ea5996cadd_6a4246885e00ecdc18382d1b_thebuffalohunterhunterauthor.webp
- `/assets/6a42443a15d2cf609e34a24c_6a423d476a971a161097ff07_thereformatoryv2.webp`: 273x414px (natural 0x0px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a42443a15d2cf609e34a24c_6a423d476a971a161097ff07_thereformatoryv2.webp
- `/assets/6a42443a15d2cf609e34a231_6a424039e86ff5403f03bd23_thereformatoryauthor.webp`: 107x107px (natural 0x0px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a42443a15d2cf609e34a231_6a424039e86ff5403f03bd23_thereformatoryauthor.webp
- `/assets/6a4244a6000948e7e39aa56e_6a423da669caf660d2c477bb_chaingangallstarsspecial2.webp`: 284x421px (natural 0x0px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a4244a6000948e7e39aa56e_6a423da669caf660d2c477bb_chaingangallstarsspecial2.webp
- `/assets/6a4244a5000948e7e39aa539_6a423dc0410a5d97a1248dc4_chain-gangall-starsauthor.webp`: 113x113px (natural 0x0px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a4244a5000948e7e39aa539_6a423dc0410a5d97a1248dc4_chain-gangall-starsauthor.webp
- `/assets/69dfba516e0793fc6d354036_review-star.svg`: 121x118px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69dfba516e0793fc6d354036_review-star.svg
- `/assets/6a424be60e9268be5e54b22e_6a4245f0000948e7e39bb2eb_onebadnight2.webp`: 240x370px (natural 0x0px) — https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a424be60e9268be5e54b22e_6a4245f0000948e7e39bb2eb_onebadnight2.webp
- `/assets/69dfb2530a7e746f9dfb8a6b_exclusive-slider-icon-01.webp`: 112x112px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69dfb2530a7e746f9dfb8a6b_exclusive-slider-icon-01.webp
- `/assets/69dfb2527288cd815f477968_exclusive-slider-icon-03.webp`: 120x120px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69dfb2527288cd815f477968_exclusive-slider-icon-03.webp
- `/assets/69dfb2526ae24d54399a03d8_exclusive-slider-icon-02.webp`: 164x164px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69dfb2526ae24d54399a03d8_exclusive-slider-icon-02.webp
- `/assets/696d10ebb91f9b8707240373_aardvark-logo.svg`: 221x55px (natural 0x0px) — https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696d10ebb91f9b8707240373_aardvark-logo.svg
