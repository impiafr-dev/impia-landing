> Mise à jour 11 oct. 2026 : design v3 (clair + sombre), polices auto-hébergées dans `fonts/`, page `beta.html` (Tally), logos dans `brand/`. Les CGU reviendront à l'ouverture du service.

# 👉 Mettre la landing IMPIA en ligne CE SOIR

Ce dossier contient **uniquement la landing** (déjà prête, CTA « Commencer » → waitlist Tally).
L'app complète (auth / Mistral / Stripe) arrive lundi, séparément.

Contenu :
- `public/` = le site (index.html + CGU + confidentialité + css + polices + favicon)
- `server.js` + `package.json` = mini-serveur Node (si tu déploies en mode serveur)

---

## ⚡ Option 1 — LE PLUS RAPIDE (statique, ~2 min, HTTPS auto)

La landing est 100 % statique (le formulaire email passe par Tally, externe).
Tu n'as même pas besoin du serveur.

1. Va sur **https://app.netlify.com/drop**
2. **Glisse-dépose le dossier `public/`** (celui DANS ce dossier) sur la page.
3. C'est en ligne, en HTTPS, tout de suite. (Tu pourras brancher `impia.fr` ensuite dans Netlify → Domain settings.)

> Marche pareil avec Cloudflare Pages ou Vercel (drag & drop du dossier `public/`).

---

## 🚂 Option 2 — Railway (mode serveur Node)

Depuis CE dossier, dans le terminal :

```bash
# test local (optionnel)
npm install
npm start          # -> http://localhost:3000

# mise en ligne
npm i -g @railway/cli
railway login
railway init
railway up
```

Railway lance `npm install` puis `npm start`, sert la landing, et fournit une URL HTTPS.
**Aucune variable d'environnement à configurer** (la landing n'en a pas).

---

## ✅ Ce qui marche déjà
- Design complet (dark, violet, responsive mobile).
- Le bouton **Commencer** fait défiler vers le formulaire **waitlist Tally** → les emails partent dans Tally.
- Pages **CGU** et **Confidentialité** accessibles.

## ℹ️ Bon à savoir
- Ne mets PAS en ligne le reste du projet IMPIA ici : ce dossier suffit pour la landing.
- Le domaine `impia.fr` se branche côté hébergeur (Netlify/Railway) une fois le site en ligne.
