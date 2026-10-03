# Factures Valexium

Générateur de factures (PDF et JPG) pour Valexium Design. Un seul site statique : aucun serveur, aucune base de données.

## Publier sur GitHub Pages (gratuit)

1. Crée un compte sur github.com, puis un nouveau dépôt **public** nommé par exemple `valexium-factures`.
2. Dans le dépôt, clique sur **Add file** puis **Upload files** et envoie tous les fichiers de ce dossier :
   `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`.
   `index.html` doit être à la racine du dépôt, pas dans un sous-dossier. Valide avec **Commit changes**.
3. Va dans **Settings**, puis **Pages**. Sous **Build and deployment**, choisis **Deploy from a branch**,
   puis la branche **main** et le dossier **/ (root)**, et enregistre.
4. Attends 1 à 10 minutes. Le lien apparaît en haut de la page Pages :
   `https://TON-PSEUDO.github.io/valexium-factures/`

## Installer comme une application

Ouvre le lien dans Chrome sur le téléphone, puis menu **⋮** et **Installer l'application**
(ou **Ajouter à l'écran d'accueil**).

## Mettre à jour

Quand tu reçois une nouvelle version de `index.html`, renvoie-le dans le dépôt avec **Add file** puis **Upload files**
(même nom : il remplace l'ancien) et valide. Rouvre le lien avec Internet pour la récupérer.

## À savoir

- Tes réglages (entreprise, moyens de paiement, compteur de factures) restent **dans le navigateur de ton téléphone**.
  Ils ne sont pas dans le dépôt. Ne mets jamais tes numéros dans le code.
- Le dépôt est public : les tarifs et noms écrits dans `index.html` sont visibles par tout le monde.
- Il faut Internet à la première ouverture (police Archivo et création du PDF). Ensuite l'application s'ouvre aussi hors ligne.
