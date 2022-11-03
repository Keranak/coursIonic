# Cours Ionic

# Projet IONIC

installation de node js

installation de la cli d'angular
npm install -g @angular/cli

installation de la cli d'ionic
npm install -g @ionic/cli

installation d'un projet
possibilité de : ionic start --list (pour visionner les différents types d'application ainsi que les templates disponible pour ces application )

templates: blank=>vide 
           tabs=> tabulations en bas d'écran
           sidemenu=> navigation verticale (fixe dans un premier temps avec possibilité de mettre en place un toggle)

pour lancer directement un projet:
ionic start nom_du_projet type_de_template --type=type_d_application

pour lancer son serveur:
ionic serve (avec option -l si vous souhaitez travaillez dans le lab d'ionic )
à savoir, le lab sera à installer, théoriquement le terminal vous demande si vous souhaitez l'installer (Y/n)
si ce n'est pas le cas executer:
npm install -D -E @ionic/lab


# Projet

Site de recette de cuisine type marmiton

## Homepage
affichage des catégories en cards
entrée, plat, dessert du jour en mode aléatoire (avec note sup à 4)

authentif pour tout les utilisateurs

tout le monde peux poster une recette

Formulaire :
    - ajout recette
    - Connexion
    - Inscription
    - avis sur une recette

fiche individuelle de recette


tableau recap des recettes publié par l'utilisateur avec crud
gestion de profil


## back office
    - gestion des recettes
    - gestion des utilisateurs
    - gestion des catégories
    - gestion des commentaires

## BDD
    - recette
        -titre
        - etapes
        - ingredients
        - photo
        - difficulté
        - temps de préparation
        - temps de cuisson
        - nombre de personne
        - date de publication
        - note
    - utilisateur
        - mail
        - mot de passe
        - staut
        - pseudo
    - recette_categories
        - id_recette
        - id_categorie
    - catégorie
        - titre
    - avis
        - id_recette
        - id_utilisateur
        - note
        - commentaire
        - date
