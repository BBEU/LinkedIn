// ==UserScript==
// @name         Auto Like LinkedIn Post
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically like a specific LinkedIn post
// @author       Brecht
// @match        https://www.linkedin.com/feed/update/urn:li:activity:7287049392748941312
// @updateURL    https://raw.githubusercontent.com/BBEU/tampermonkey-scripts/main/auto-like-linkedin.js
// @downloadURL  https://raw.githubusercontent.com/BBEU/tampermonkey-scripts/main/auto-like-linkedin.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wacht tot de pagina volledig geladen is
    setTimeout(() => {
        // Zoek naar de "Like"-knop op de specifieke LinkedIn-post
        const likeButton = document.querySelector('button[aria-label="Like"]');

        if (likeButton && !likeButton.classList.contains('reacted')) {
            likeButton.click(); // Klik op de like-knop
            console.log('Post automatisch geliked!');
        } else {
            console.log('Like-knop niet gevonden of al geliked.');
        }
    }, 3000); // Wacht 3 seconden voor de zekerheid
})();
