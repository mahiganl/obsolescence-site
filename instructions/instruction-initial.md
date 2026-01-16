**Rôle :** Agis comme un développeur web créatif senior et expert Astro/Tailwind.

**Objectif :** Construire le site de l'essai **"Obsolescence humaine programmée"** (Planned Human Obsolescence). Le design doit être minimaliste, typographique ("Substack-like"), et optimisé pour la lecture longue.

**Contexte des Fichiers (Structure validée) :**

- Le contenu texte est dans `/content/english` et `/content/french` (fichiers Markdown).
    
- Les illustrations principales (colorées) sont dans `/assets/colored-drawings`.
    
- Les croquis originaux (preuves d'authenticité) sont dans `/assets/original-drawings`.
    
- La photo de l'auteur est dans `/assets/about-picture`.
    

**Stack Technique :**

- Initialise un projet **Astro** avec **Tailwind CSS**.
    
- Active les **View Transitions** d'Astro. Je veux une navigation par chapitres (pages distinctes), mais avec une transition fluide instantanée (SPA-like) pour le confort de lecture.
    

**Design & UX (Mobile First) :**

- **Typographie :** Serif élégante pour le texte (confort lecture), Sans-serif propre pour l'UI.
    
- **Layout :** Minimaliste. Pas de distractions.
    
- **Responsive :** Doit être parfait sur mobile/tablette.
    
- **Thème :** Dark/Light mode toggleable.
    

**Fonctionnalités Clés & Architecture :**

1. **Architecture Multi-Domaines & Langues :**
    
    - Structure le site pour gérer deux langues (`/en/` et `/fr/`).
        
    - Prépare le terrain pour que, à la mise en ligne, le site anglais pointe vers `human-obsolescence.com` et le français vers `obsolescence-humaine.com`. Le sélecteur de langue devra être capable de gérer des liens absolus vers ces domaines.
        
2. **Navigation :**
    
    - Menu latéral (Desktop) / Menu Tiroir (Mobile) listant les chapitres.
        
    - Boutons de navigation "Chapitre Précédent / Chapitre Suivant" en bas de chaque page.
        
    - Ajoute un lien vers mon compte X ([https://x.com/mahiganL](https://x.com/mahiganL)) dans le menu ou le footer.
        
3. **Pages Spéciales :**
    
    - **À Propos (`/about`) :** Utilise le markdown "About" et la photo dans `assets/about-picture`.
        
    - **Dessins Originaux (`/original-drawings`) :** Crée une page dédiée affichant une galerie simple (grille) des images du dossier `/assets/original-drawings`. C'est une page de preuve d'authenticité importante.
        
    - **Lien Introduction :** À la fin du fichier Markdown de l'Introduction, il y a actuellement un lien externe pour voir les dessins originaux. Tu devras remplacer ce comportement pour que ce lien pointe vers la nouvelle page interne `/original-drawings`.
        

**Première Étape (POC) :** Analyse les dossiers. Initialise Astro. Configure le routing pour afficher **l'Introduction en Français** avec :

1. Une illustration tirée de `colored-drawings` en tête de chapitre.
    
2. Le titre correct "Obsolescence humaine programmée".
    
3. Le lien en bas de texte qui redirige correctement vers la page locale "Dessins Originaux".
    
4. Le switch vers la version anglaise fonctionnel.
    

Ne migre pas tout le contenu tout de suite. Montre-moi que l'architecture (Langues + Images + Navigation + Galerie) fonctionne sur cette première page.