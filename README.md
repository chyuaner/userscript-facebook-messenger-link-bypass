# Facebook & Messenger Link Bypass (All-in-One)

一個輕量、極速的 Userscript 腳本，自動繞過 Facebook 和 Messenger 的外連確認頁面（`l.php`、`flx/warn` 等跳轉警告），讓您點擊連結後直接前往目標網址。

---

## 🚀 一鍵安裝 (Direct Install)

請先確保您的瀏覽器已安裝 Userscript 管理器（如 [Tampermonkey 竄改猴](https://www.tampermonkey.net/)），然後點擊下方連結即可直接觸發安裝：

[![Install with Tampermonkey](https://img.shields.io/badge/%E2%9A%A1%20%E4%B8%80%E9%8D%B5%E5%AE%89%E8%A3%9D-Tampermonkey-green?style=for-the-badge&logo=tampermonkey)](https://github.com/chyuaner/userscript-facebook-messenger-link-bypass/raw/main/index.user.js)

> 🔗 **手動複製連結：**  
> `https://github.com/chyuaner/userscript-facebook-messenger-link-bypass/raw/main/index.user.js`  

---

## ✨ 功能特點

- ⚡ **極速跳轉：** 在網頁 DOM 載入前（`document-start`）即執行跳轉，完全感受不到中轉頁面的存在。
- ↩️ **無痛返回：** 採用 `window.location.replace` 進行重導向，不會在瀏覽器的歷史紀錄（History）中留下無用的垃圾警告頁，方便您隨時點擊瀏覽器的「上一頁」返回。
- 🛡️ **安全乾淨：** 不收集任何隱私資訊，僅提取 Facebook/Messenger 加密跳轉參數中的原始目標網址並直接前往。

---

## 🌐 支援網址範圍 (Match Rules)

本腳本會自動作用於以下網址：
- `*://*.facebook.com/flms/faq/*`
- `*://*.facebook.com/l.php?u=*`
- `*://*.facebook.com/flx/warn/?u=*`
- `*://*.messenger.com/l.php?u=*`
- `*://l.facebook.com/l.php?u=*`
- `*://l.messenger.com/l.php?u=*`

---

## 🛠️ 使用說明

1. **安裝管理器：**  
   若尚未安裝 Userscript 管理器，請依您的瀏覽器下載安裝：
   - Chrome / Edge / Opera / Firefox / Safari: [Tampermonkey 竄改猴官網](https://www.tampermonkey.net/)
2. **安裝此腳本：**  
   點擊上方 [⚡ 一鍵安裝] 按鈕，瀏覽器會自動彈出 Tampermonkey 的安裝確認畫面，點擊 **「安裝 (Install)」** 即可。
3. **開始使用：**  
   安裝完成後，即可直接在 Facebook 或 Messenger 上點擊任何外部連結，腳本將會自動為您繞過跳轉警告。
