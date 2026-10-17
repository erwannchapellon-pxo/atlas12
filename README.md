# ATLAS / 12 — v1.2

Application statique PWA pour GitHub Pages avec 58 illustrations anatomiques vectorielles originales (29 exercices × 2 positions).

## Publication dans GitHub (sans terminal)

1. Exporter une sauvegarde JSON de l’application existante dans **Plus → Réglages** et conserver le fichier personnel sur son appareil.
2. Ouvrir `https://github.com/erwannchapellon-pxo/atlas12` → branche `main`.
3. Via **Add file → Upload files**, déposer **le contenu** du dossier fourni (`index.html`, `sw.js`, `manifest.webmanifest`, `README.md`, `icons/` et `assets/`) directement à la racine, puis **Commit changes**. Ne pas envoyer le dossier parent.
4. Si GitHub refuse de remplacer un fichier existant via Upload files, ouvrir le fichier sur GitHub, cliquer sur le crayon **Edit**, puis remplacer son contenu par la version locale pour les fichiers texte. Pour les assets, uploader tout le répertoire `assets/` depuis la racine.
5. Attendre la coche verte dans **Actions**, puis ouvrir `https://erwannchapellon-pxo.github.io/atlas12/`.
6. Fermer et rouvrir la PWA sur iPhone. La nouvelle version du cache service worker est `atlas12-app-v1.2.0`.

## Données, sécurité et licences

- Les séries, poids, mensurations et paramètres conservent la clé `localStorage` historique `atlas12-data-v1`. **Pas de migration destructive.**
- Les photos personnelles restent dans IndexedDB et sont incluses dans l’export JSON. Ne jamais envoyer l’export personnel sur GitHub public.
- Les 58 illustrations SVG sont **dessinées spécifiquement pour cette application**, pas copiées d’un site tiers. Leur rendu est anatomique stylisé, **non photographique** : ce sont des repères de positions, pas un tutoriel biomécanique exhaustif.
- Cette version est une application statique, compatible avec GitHub Pages sans React ni serveur.
- Pour une conservation durable des données, effectuer des sauvegardes JSON régulières.
