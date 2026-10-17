# ATLAS / 12 v1.2 — auto-QA

Date : 17 octobre 2026.

## Validations réalisées
- Syntaxe JavaScript contrôlée avec Node.js (`node --check`).
- Les 58 SVG originaux (29 exercices × 2 phases) sont présents et valides au parseur XML.
- Tests d'interface automatisés Chromium dans un document de test : **11/11 scénarios validés**.
  - Accueil et navigation dans les 5 sections.
  - 4 séances et 29 exercices : visuels départ/arrivée qui se chargent.
  - Agrandissement et passage entre les phases.
  - Saisie et conservation des charges et répétitions sous la clé historique `atlas12-data-v1`.
  - Saisie poids, tour de taille, paramètres.
  - Ajout d'une photo, agrandissement, sauvegarde JSON (stockage simulé).
  - Pas de débordement horizontal sur les formats 320, 375, 390 et 430 pixels.
  - Pas d'erreur JS dans les scénarios exécutés.
- Vérification structurelle du service worker : nouvelle version de cache `atlas12-app-v1.2.0`, les 58 illustrations sont précachées.

## Limites explicites
- Le navigateur sandbox bloque le serveur local. Les images ont été chargées en data URLs **uniquement pendant les tests** ; le code livré utilise des chemins d'assets relatifs.
- IndexedDB a été simulé durant le test d'ajout de photo. Son fonctionnement réel avec Safari installé doit être vérifié sur l'iPhone.
- Le service worker et l'installation PWA ne sont pas testés de bout en bout sous Safari.
- Les visuels sont des **illustrations anatomiques vectorielles stylisées**, pas des photographies ni un guide biomécanique complet.

## Vérifications recommandées après publication
1. Accéder à `/atlas12/` depuis Safari et vérifier les deux images du développé incliné.
2. Faire le tour des quatre séances et agrandir les illustrations.
3. Tester une charge, fermer puis rouvrir la PWA, confirmer la conservation.
4. Ajouter une photo puis la réouvrir ; exporter et restaurer une sauvegarde dans un environnement de test.
5. Ouvrir la PWA une fois connecté puis tester en mode avion.
