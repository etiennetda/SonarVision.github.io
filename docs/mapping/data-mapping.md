---
sidebar_position: 1
---

# Mapper sur OpenStreetMap

Nous allons discuter ici de tous les outils mis en place par Sonarvision nous permettant de contribuer à OpenStreetMap.

## Qu'est-ce qu'OpenStreetMap ?

OpenStreetMap (OSM) est un projet collaboratif en ligne qui vise à créer une carte du monde libre et open source. 
Contrairement aux cartes commerciales, OSM permet à tout le monde de contribuer à la carte.

Les données d'OpenStreetMap sont collectées par des contributeurs du monde entier qui utilisent des appareils GPS, 
des photos aériennes et des éditeurs en ligne pour ajouter des informations à la carte. 
Les données sont stockées dans une base de données centrale et peuvent être utilisées gratuitement 
par quiconque pour créer des cartes personnalisées, des applications de navigation, des visualisations de données et plus encore.

En résumé, OpenStreetMap est un projet communautaire qui fournit des données géographiques précises, libres et ouvertes à tous.

## Pourquoi contribuer à OpenStreetMap ?

Chez Sonarvision, nous croyons en l'openSource et en sa communauté. Pour générer, nos itinéraires, nous nous reposons sur les données de OSM.
Cependant, celle-ci reste encore très incomplète concernant la génération d'itinéraire piéton. C'est pourquoi nous contribuons tous les jours à 
l'amélioration de cette base de données pour d'une part améliorer nos itinéraires et d'autre part offrir la possibilité à d'autre projet d'utiliser ses mêmles données.
Ainsi nous espérons créer un cercle vertueux qui permettra à l'ensemble des projets se reposant sur OSM d'offrir une meilleure expérience à leur utilisateur.
Pour résumer, l'union fait la force.

## Comment contribuer à OpenStreetMap et aider Sonarvision ?

### Contribuer à OpenStreetMap
Pour contribuer à OpenStreetMap, il vous suffit de vous rendre sur le site [OpenStreetMap](https://www.openstreetmap.org/) et de créer un compte.
Rendez-vous ensuite sur l'onglet modifier et commencez à ajouter des informations sur la carte.

### Contribuer dans le but d'aider SonarVision
Pour créer nos itinéraires, nous nous reposons sur les données piétonnes de OSM. Cependant, celle-ci reste encore très incomplète dans la majorité des grandes villes.
Nous avons commencé notre travail de mapping par Paris et notamment par le 14e et 17e arrondissement de Paris. 
Voici les informations principales dont nous avons besoins :
- La position des trottoirs
- La position des passages piétons
  - Si celui-ci est équipé d'un feu sonore

### Outils mis à disposition pour le mapping
Pour effectuer ce mapping nous avons créé un fond de carte, qui nous permet d'afficher les passages piétions, 
les feux sonores et les trottoirs de la ville de Paris. Ce qui nous permet de mapper de manière précise et rapide sur 
l'ensemble de la ville de Paris.

Voici les étapes à suivre pour utiliser se layer sur OSM :
1. Commencer par vous rendre dans l'espace de mapping d'OSM via le lien suivant : [OSM](https://www.openstreetmap.org/edit?editor=id#map=13/48.8588/2.3385)
2. Puis accéder aux paramètres de fond de carte en cliquant sur la barre d'outils à droite ou avec le raccourci clavier `B`
3. Puis cliquer sur modifier le fond de carte personnalisé
4. Ajouter l'URL suivante ([URL du fond de carte](https://api.mapbox.com/styles/v1/la-monf/clatfbyq3000514qnaejzcsmy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGEtbW9uZiIsImEiOiJjbGFhejhqdnEwY201M3VwbDZpbmd5ZHZpIn0.-HQmXshZmvpEN6SAeYRlpQ))
5. Enfin, cliquer sur "Ok" et sélectionner le fond de carte personnalisé

### Base de données utilisée par notre fond de carte

| Base de donnée                                                                                                                                                                                               | Dernière mise à jour |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------:|
| [Modules sonores passages piétons (Paris)](https://opendata.paris.fr/explore/dataset/modules-sonores-passages-pietons/information/?disjunctive.libelle_secteur&disjunctive.libelle_materiel)                 |      20/03/2023      |
| [Plan de voirie - Passages piétons (Paris)](https://opendata.paris.fr/explore/dataset/plan-de-voirie-passages-pietons/information/?disjunctive.num_pave&location=16,48.87356,2.33009&basemap=jawg.streets)   |      20/03/2023      |
| [Plan de voirie - Trottoirs filaires (Paris)](https://opendata.paris.fr/explore/dataset/plan-de-voirie-trottoirs/information/?disjunctive.num_pave&disjunctive.lib_level&disjunctive.lib_classe)             |      20/03/2023      |
| [Plan de voirie - Trottoirs - Emprises (Paris)](https://opendata.paris.fr/explore/dataset/plan-de-voirie-trottoirs-emprises/information/?disjunctive.num_pave&basemap=jawg.dark&location=20,48.8864,2.31302) |      20/03/2023      |