# ATLAS / 12 — v1.1, galerie d'exercices

Application personnelle pour iPhone : **HTML/CSS/JavaScript**, PWA hors ligne après première ouverture, sans backend ni compte.

## Nouveautés v1.1
- Chaque exercice a un panneau **Départ / Arrivée** présentant deux schémas simplifiés de mouvement. **Attention : schémas indicatifs, ils ne sont pas des photographies ni des instructions techniques complètes.**
- Ajout de **vraies photos personnelles** pour les deux phases, directement via le sélecteur de photos de l'iPhone ; suppression ou remplacement par exercice.
- Compression locale des photos et stockage en **IndexedDB** (indépendant du journal de séries).
- Export JSON **incluant les photos** ; import des sauvegardes V1 compatible ; interface mobile et fonctionnement hors connexion.
- Correctif de cache : le service worker privilégie maintenant le réseau pour la page HTML, pour faciliter les mises à jour.

Le programme, les séries, poids, RIR, nutrition, mesures, minuteries et préférences de la V1 sont conservés sans migration : la clé `atlas12-data-v1` est inchangée.

## Mise à jour GitHub Pages (dépôt `erwannchapellon-pxo/atlas12`)

**Avant de modifier le dépôt :** ouvre ATLAS / 12 sur l'appareil où se trouvent tes mesures et utilise `Plus → Réglages → Exporter mes données`. Garde le `.json` dans Fichiers/iCloud Drive.

1. Télécharge et décompresse `ATLAS12_v1.1_GitHub_Pages.zip`.
2. Va sur https://github.com/erwannchapellon-pxo/atlas12 et assure-toi d'être à la **racine** (`/atlas12`, pas dans un sous-dossier `ATLAS12_iPhone_PWA/atlas12`).
3. Clique sur **Add file → Upload files**.
4. Sélectionne **le contenu** du dossier extrait, pas le dossier parent : `index.html`, `sw.js`, `manifest.webmanifest`, `README.md`, `icons/`.
5. Pour les fichiers déjà présents, accepte leur remplacement (ou utilise Git en ligne de commande). Fais `Commit changes` sur `main`.
6. Dans Settings → Pages, laisse `Deploy from a branch`, `main`, `/(root)`. Après le succès de l'onglet Actions, ouvre https://erwannchapellon-pxo.github.io/atlas12/ et recharge.
7. Sur iPhone, ferme puis rouvre la PWA, si besoin reconnecte-toi brièvement à Internet pour mettre à jour le cache.

⚠️ La saisie des séries et mesures est conservée sur **l'appareil/origine où elle a été faite** ; les données ne sont pas synchronisées entre Safari et la PWA ou entre iPhone et ordinateur. **Ne désinstalle pas** l'app avant sauvegarde/export.

## Déploiement local recommandé pour un développeur

```bash
# Depuis un clone du dépôt GitHub
cp -R chemin/du/zip/decompresse/. .
git add index.html sw.js manifest.webmanifest icons/ README.md
git commit -m "feat: exercise technique photos, offline diagrams and export"
git push origin main
```

## QA

Tests exécutés en navigateur Chromium mobile simulé : ouverture des quatre séances, saisie des charges/répétitions, persistance après recharge, navigation, paramètres, photos individuelles et export/import JSON (avec IndexedDB remplacé par un stockage simulé pour ces tests), absence de débordement horizontal. Le service worker a été contrôlé statiquement, mais son installation et la persistance IndexedDB réelle nécessitent un test depuis une origine HTTPS. **Aucun test sur iPhone physique n'est réalisé ici.**

## Licences et photos

Les schémas intégrés sont générés dans le code de l'application. Pour obtenir de **vraies photos** dans un exercice, ouvre son menu et appuie sur **+ Photo** pour la phase 1 et la phase 2. Utilise des images prises par toi-même ou que tu es autorisé à réutiliser. L'app n'intègre pas de photographies issues de catalogues tiers dont les droits seraient incertains.

## Limites

- Les visuels d'origine sont des schémas simplifiés. Ils peuvent aider à se repérer mais ne remplacent pas une démonstration par un professionnel.
- Les photos sont locales, non synchronisées et incluses dans l'export JSON ; la taille de la sauvegarde augmente avec le nombre de photos.
- Aucune connexion automatique à Apple Health ; aucune mesure médicale.
