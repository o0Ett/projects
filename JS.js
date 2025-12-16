// ==UserScript==
// @name         устренение дизайнерского позора администрации
// @namespace    http://tampermonkey.net/
// @version      2025-12-15
// @description  try to take over the world!
// @author       https://github.com/o0Ett
// @match        http*://*.catwar.net/*
// @match        http*://*.catwar.su/*
// @icon         none
// ==/UserScript==

(function() {
    'use strict';




// вселенные
document.querySelectorAll('img[src*="1.svg"]').forEach(img => {
        const b = document.createElement('b');
        b.textContent = 'Озёрная вселенная';
        img.replaceWith(b);
    });
document.querySelectorAll('img[src*="2.svg"]').forEach(img => {
        const b = document.createElement('b');
        b.textContent = 'Вселенная творцов';
        img.replaceWith(b);
    });
document.querySelectorAll('img[src*="3.svg"]').forEach(img => {
        const b = document.createElement('b');
        b.textContent = 'Морская вселенная';
        img.replaceWith(b);
    });


// нахождение
document.querySelectorAll('img[src*="geo-alt.svg"]').forEach(img => {
        const b = document.createElement('b');
        b.textContent = ' — Вы находитесь в одном месте';
        img.replaceWith(b);
    });


// фракция
const clanContent = document.querySelector('[data-tab-content="clan"]');
const clanParsed = clanContent?.querySelector('.parsed');
if (clanContent) {
    clanContent.classList.remove('hidden');
    }

const targetContainer = document.querySelector('.summary-profile');
if (targetContainer && clanParsed) {
targetContainer.after(clanParsed);
    }

})();
