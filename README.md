# ATLAS / 12 — v1.3 (images d’exercices existantes)

Cette livraison ne contient **pas de dessins générés par IA**. Elle contient une **liste vérifiée de 29 exercices**, une intégration des visuels originaux Workout Guide de Bryl Lim (CC BY-SA 4.0) et un processus GitHub Actions qui **télécharge et installe 58 fichiers SVG réels** dans le site publié. Les fichiers binaires ne peuvent pas être intégrés directement à l’archive fournie depuis cet environnement.

## Mise à jour 100 % sur le site GitHub (pas de terminal)

1. Exporter la sauvegarde JSON de l’application actuelle (Plus → Réglages). NE PAS publier ce JSON personnel.
2. Dans le dépôt `erwannchapellon-pxo/atlas12`, choisir **Settings → Pages → Build and deployment → Source : GitHub Actions** (remplace `Deploy from a branch`).
3. Décompresser le ZIP, ouvrir l’onglet Code du dépôt, branche `main`, racine. Sur Ubuntu, **Ctrl+H** affiche le dossier caché `.github` : il faut également l’envoyer.
4. **Add file → Upload files** ; sélectionner le contenu décompressé (`index.html`, `sw.js`, `manifest.webmanifest`, `icons/`, `assets/`, `scripts/`, `.github/`, `README.md`, `CREDITS_MEDIA.md`), pas le dossier parent. Valider par **Commit changes**.
5. Ouvrir l’onglet **Actions**, workflow "ATLAS12 - publier avec les visuels libres". Si besoin, **Run workflow** pour un lancement manuel.
6. Patienter jusqu’à la coche verte du workflow; ouvrir `https://erwannchapellon-pxo.github.io/atlas12/` (forcer le rechargement si nécessaire).

## Contrôles après publication

- Dans **Actions**, l’étape "Télécharger les images CC BY-SA" doit afficher 58 images téléchargées et validées.
- Tester Séances → Développé incliné haltères → images départ/arrivée visibles (pas d’anciens personnages en bâtons).
- Tester une autre machine (Hack Squat) et conserver une charge de test après fermeture de l’application.
- Sur iPhone, fermer/rouvrir la PWA pour récupérer le cache mis à jour. Les photos personnelles ajoutées continuent à prendre la priorité dans les fiches.

## Données

Les charges, mesures, séances et réglages restent sous la clé historique `atlas12-data-v1` du localStorage. Les photos personnelles restent en IndexedDB. Un changement d’origine de domaine ou une suppression de données Safari peut les effacer : conserver le JSON de sauvegarde.

## Limites importantes

- Les images distribuées sont **des illustrations publiées par une banque existante**, pas des photographies 3D réalistes type LouisMove. Quelques fiches présentent une variante proche et le signalent.
- Les 58 originaux seront présents sur GitHub Pages **après succès du workflow**, pas physiquement dans le ZIP. Le téléchargement dépend de GitHub Actions et de l’accessibilité des serveurs de la source.
- Si un téléchargement échoue, le workflow affiche une erreur et s’arrête : aucune fausse image ne sera substituée silencieusement. En secours, l’application peut essayer le CDN officiel pour afficher le visuel à l’écran.
- Les modifications/adaptations de ces images restent soumises à la licence CC BY-SA 4.0. Attribution et sources disponibles dans `CREDITS_MEDIA.md` et directement sous chaque exercice.
