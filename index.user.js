// ==UserScript==
// @name         Facebook & Messenger Link Bypass (All-in-One)
// @namespace    https://greasyfork.org/
// @version      1.2
// @description  自動繞過 Facebook/Messenger 的外連跳轉與警告頁面（flx/warn），直接前往乾淨的目標網址。
// @author       Yuan Chiu <https://yuaner.tw>
// @match        *://*.facebook.com/flms/faq/*
// @match        *://*.facebook.com/l.php?u=*
// @match        *://*.facebook.com/flx/warn/?u=*
// @match        *://*.messenger.com/l.php?u=*
// @match        *://l.facebook.com/l.php?u=*
// @match        *://l.messenger.com/l.php?u=*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    function bypass() {
        // 從當前網址解析參數
        const urlParams = new URLSearchParams(window.location.search);
        const targetUrl = urlParams.get('u');

        if (targetUrl) {
            // 使用 replace 跳轉，避免在瀏覽器歷史紀錄留下垃圾頁面，方便按「上一頁」
            window.location.replace(decodeURIComponent(targetUrl));
        }
    }

    // 在 DOM 載入前極速執行
    bypass();
})();
