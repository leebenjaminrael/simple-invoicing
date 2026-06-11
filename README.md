# Invoicing

A simple, private invoicing & finance app that runs entirely in your browser. Create invoices and quotes, track clients and expenses, reconcile bank statements, and see your finances at a glance. Your data is encrypted and stays on your own device — there is no server and nothing is uploaded.

**Open it here:** **https://leebenjaminrael.github.io/simple-invoicing/**

---

## Install it as an app

You can use it straight from the link above, but installing it gives you a real app icon, its own window, and offline use.

### Mac — Chrome
1. Open the link in Chrome.
2. Click the **install icon** in the address bar (a small monitor with a down-arrow), **or** menu **⋮ → Cast, save, and share → Install page as app…**
3. It appears in your Applications / Dock with its own icon.

### Mac — Safari
1. Open the link in Safari.
2. **File → Add to Dock.**

### iPhone / iPad — Safari
1. Open the link in Safari.
2. Tap the **Share** button → **Add to Home Screen.**
3. It opens fullscreen like a normal app.

### Windows / Android
- **Chrome / Edge:** click the **install icon** in the address bar (Windows) or **menu → Install app / Add to Home screen** (Android).

> After the first load it works **offline** — you don't need internet to open it again.

---

## First-time setup

1. **Set a master password** (at least 8 characters). This encrypts your data. **Write it down somewhere safe — there is no way to recover it if you forget it.**
2. **Settings → Brand:** your app name (shown in the sidebar, lock screen and browser tab).
3. **Settings → Company:** your business details — name, address, email, phone, **VAT number**, **base currency**, **VAT %**, **VAT cycle** (Monthly / Bi-monthly / Quarterly / Bi-annual / Annual), and **tax-year start month**. Enter a VAT number and invoices are labelled "TAX INVOICE"; leave it blank and they say "INVOICE". Set VAT % to `0` if you're not registered.
4. **Settings → Logo:** upload your logo — it appears on invoice/quote PDFs.
5. **Settings → Banking:** fill in your account details for each currency you use.

Running more than one business? **Settings → Businesses → + Add business.** Each business has its own details, clients, invoices, numbering, **currency and VAT settings**; switch between them from the top of the sidebar.

---

## What it does

- **Dashboard** — this month's income, outstanding, and recent activity at a glance.
- **Finances** — monthly revenue chart with goals, pipeline, ageing, top clients, VAT summary, and an accountant report export. Cash or accrual basis.
- **Documents** — invoices and quotes: create, send, mark paid, convert quote → invoice, export PDF, compose email.
- **Clients** — your client list with outstanding balances.
- **Expenses** — categorised, multi-currency expense tracking.
- **Reconcile** — drop a bank or Wise **CSV** statement; it auto-matches payments to invoices, flags fees and transfers, and suggests expenses. Unknown bank format? A one-time column-mapping wizard remembers it for next time.

---

## Updates

Updates are automatic. When a new version is published you'll see a small **"update available — reload"** note; reloading puts you on the latest version with **all your data intact**. You never reinstall.

---

## Your data & privacy

- Stored **only in your browser**, on your device, encrypted with **AES-GCM** (key derived from your password via PBKDF2).
- **Never uploaded.** There is no backend. The only network calls are fetching exchange rates and loading the app itself — never your financial data.
- Data is **per device and per browser.** Your Mac and your phone keep separate copies (see Backups to move data between them).

---

## Backups

**Settings → Backup → Download backup (JSON).**

- The backup file is **not encrypted** — keep it somewhere safe (password manager, encrypted drive, private cloud folder).
- Restore via **Settings → Backup → Restore from backup**.
- This is also how you **move your data to another device**: download a backup on one, restore it on the other.
- Tip: take a backup before doing anything big (large imports, switching devices).

---

## Good to know

- **Currency, VAT rate, VAT cycle and tax-year start are all configurable per business** (Settings → Company) — so the app works for most countries out of the box. The defaults are South African (ZAR, 15%, bi-monthly, March year-start); change them per business as needed.
- **Forgot your password?** There's no recovery — the lock screen has a "reset vault" option that wipes the data so you can start over. Keep backups.
