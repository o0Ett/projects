# фракционный "профиль" до обновления
##### для корректной работы требуется установка tampermonkey и ему подобные
##### также stylish или stylus и им подобные
- копируете JavaScript код, вставляете в tampermonkey
- копируете CSS текст, вставляете в stylish и тп
- и оно должно работать вместе
##### оно всё равно видно только тогда, когда ты с игроком на одной локации, :shipit:
[//]: # (спасибо говноразрабу, бедолажечка не мог локально убрать что-то womp-womp)

## JS
```java script
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
```
## CSS
```css
/* ==UserStyle==
@name           noBadge
@namespace      github.com/openstyles/stylus
@version        1.0.0
@description    A new userstyle
@author         o0Ett
==/UserStyle== */
    
    .summary-profile .info-point {
    background-color: transparent;
    border: none;
    border-radius: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 0;
    font-size: 0.875rem;
    line-height: 0;
    vertical-align: auto;
    }
    
    .info-point img {
        display: none;
    }
```
