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
