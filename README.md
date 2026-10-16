# ATLAS / 12 — application sportive personnelle

## Contenu
- `index.html` : interface HTML/CSS/JS sans framework ni dépendance externe.
- `manifest.webmanifest` + `sw.js` : configuration d'application web installable, cache hors ligne après première ouverture sur HTTPS.
- `icons/` : icônes d'écran d'accueil.

## Ouvrir rapidement
Tu peux ouvrir `index.html` dans un navigateur sur ordinateur pour tester l'interface. Sur iPhone, la prévisualisation des fichiers HTML depuis l'application Fichiers peut limiter JavaScript ou la sauvegarde locale. **Pour enregistrer tes performances au quotidien, privilégie l'installation web décrite ci-dessous.**

## Installer sur l'iPhone comme une application
1. Décompresse le ZIP, puis mets tous les fichiers du dossier `atlas12` en ligne ensemble sur un hébergement HTTPS statique (GitHub Pages, Netlify ou Cloudflare Pages). Pas de serveur ni de base de données nécessaires.
2. Ouvre l'URL publique HTTPS dans Safari sur ton iPhone.
3. Menu Partager → Sur l'écran d'accueil → cocher **Ouvrir comme app web** → Ajouter.
4. Lance l'application par son icône et fais une première ouverture avec Internet pour permettre la mise en cache. La navigation et les contenus peuvent ensuite fonctionner hors connexion.

**Note confidentialité :** les données personnelles sont sauvegardées en `localStorage` dans le contexte du site/app sur l'appareil. Pas de compte, pas de serveur, pas de synchronisation automatique. Sauvegarde régulièrement dans l'onglet **Plus → Réglages → Exporter**. Le stockage peut être supprimé lors de nettoyage des données Safari ou par le système. Sur iPhone, l'application ajoutée à l'écran d'accueil peut avoir un espace de stockage différent de l'onglet Safari.

## Fonctionnalités
- Séances Upper A, Lower A, Lower B, Upper B et exercices complets ; charges, répétitions et RIR par série ; validation de série ; rappels des charges précédentes ; minuteur de repos.
- Compteur de séries réalisées et progression 12 semaines ; calendrier ajustable.
- Objectifs caloriques, protéines, lipides, estimation des glucides ; menu 7 jours, batch cooking et liste de courses.
- Suivi poids, tour de taille, pas, sommeil, énergie, calories et protéines ; graphiques et historique.
- Rituels de récupération et rappels techniques ; export/import JSON et réglages modifiables.

## Limites
- Pas de synchronisation multiappareils, de compte, de notifications programmées ni de suivi connecté Apple Health.
- Les calories sont un point de départ et ne sont pas recalculées automatiquement en fonction de chaque mesure ; tu peux modifier les cibles dans les paramètres.
- Les menus sont indicatifs et leurs grammes ne constituent pas un bilan exact de macronutriments.
