> Je dois finaliser la logique des domaines et de la navigation. Sois très attentif, car la configuration actuelle est incomplète.
> 
> **Objectif 1 : Deep Linking Absolu (Bascule de langue intelligente)** Le sélecteur de langue doit fonctionner page par page, pas juste pour l'accueil.
> 
> - **Logique :** Si je suis sur le Chapitre 3 en Français, cliquer sur 'English' doit m'amener directement au Chapitre 3 en Anglais sur son domaine dédié.
>     
> - **Méthode :** Modifie le composant `LanguagePicker`. Il ne peut pas simplement deviner l'URL car les slugs sont traduits (`/chapitre-3` vs `/chapter-3`). Il doit trouver la page correspondante dans l'autre langue en utilisant le champ `chapter` (numéro de chapitre) présent dans le Frontmatter des fichiers Markdown.
>     
> - **URL de sortie :**
>     
>     - Vers l'anglais : `https://human-obsolescence.com/en/{slug-anglais}`
>         
>     - Vers le français : `https://obsolescence-humaine.com/fr/{slug-francais}`
>         
> 
> **Objectif 2 : Séparation Stricte des Domaines (Police des frontières)** Je ne veux pas que le contenu FR soit accessible via le domaine EN, et inversement. Mets à jour le fichier `public/_redirects` avec ces règles de redirection 301 forcées (`!`) pour nettoyer le trafic :
> 
> Plaintext
> 
> ```
> # Si on demande du contenu FR sur le domaine Anglais -> Hop, on renvoie sur le domaine Français
> https://human-obsolescence.com/fr/* https://obsolescence-humaine.com/fr/:splat  301!
> ```

> # Si on demande du contenu EN sur le domaine Français -> Hop, on renvoie sur le domaine Anglais
> 
> https://obsolescence-humaine.com/en/* https://human-obsolescence.com/en/:splat 301!

> # Règles d'accueil (Racine)
> 
> https://human-obsolescence.com/ /en/ 301! https://obsolescence-humaine.com/ /fr/ 301!
> 
> ```
> 
> **Objectif 3 : UX Page d'accueil**
> Pour éviter la redirection `/fr/` -\> `/fr/introduction`, fais en sorte que le fichier Markdown de l'introduction serve d'index. Renomme les fichiers si nécessaire (`index.md`) pour que le contenu s'affiche directement à la racine du dossier de langue (`/fr/` et `/en/`).
> ```

> Exécute ces changements, vérifie que le build passe, et pousse sur GitHub.