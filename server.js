/**
 * IMPIA — Serveur landing-only (pré-lancement)
 * ------------------------------------------------------------------
 * Sert UNIQUEMENT la landing statique (index.html + CGU + confidentialité
 * + assets css/fonts/favicon). Aucune route app : ni Mistral, ni Supabase,
 * ni Stripe. L'application complète arrive sur la branche `main` (déploiement
 * GCP Cloud Run prévu séparément).
 *
 * Zéro dépendance hors Express. PORT fourni par l'hébergeur (Railway).
 * ------------------------------------------------------------------
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sert /public. `extensions: ['html']` permet /cgu -> cgu.html.
app.use(
  express.static(path.join(__dirname, 'public'), {
    extensions: ['html'],
    maxAge: '1h', // cache léger des assets statiques
  })
);

// Sonde de santé (monitoring / healthcheck Railway).
app.get('/health', (req, res) => {
  res.json({ status: 'ok', mode: 'landing-only', region: 'eu' });
});

// Tout le reste renvoie la landing (les liens d'app pointent vers la waitlist).
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`IMPIA — landing (pré-lancement) sur http://localhost:${PORT}`);
});
