---
sidebar_position: 1
---

# Introduction

SonarVision est une application mobile de guidage GPS conçue pour les besoins de personnes déficientes visuelles.
Dans la suite, nous appellerons simplement **utilisateurs** les personnes déficientes visuelles, formées et confortables
avec une locomotion indépendante, qui utilisent SonarVision pour effectuer des trajets. Nos utilisateurs effectuent
leurs trajets avec une canne blanche ou accompagnés d'un chien-guide.

Le service proposé vise à résoudre, au moins en partie, un nombre de problèmes rencontrés par les utilisateurs avec
d'autres applications de navigation telles que Google Maps ou Apple Plans.

Ainsi SonarVision propose à ses utilisateurs de réaliser des trajets **piétons**, dans la rue et dans une **zone de
couverture**, ainsi que sous certaines conditions de **visibilité**.

## Trajets piétons

Afin de proposer les meilleurs trajets piétons possibles, la caractéristique principale recherchée par SonarVision,
c'est la précision. Une amélioration de précision peut être apportée à trois niveaux : les itinéraires, la
géolocalisation et les instructions de navigation.

Pour créer des trajets personnalisés, qui empruntent trottoirs et passages piétons, SonarVision emploie une démarche
hybride, qui combine des éléments de création automatique d'itinéraires avec des éléments de validation et de correction
des itinéraires par un humain.

Ensuite, SonarVision utilise un système VPS (Visual Positioning System) qui utilise la caméra du smartphone pour
géolocaliser ses utilisateurs avec une précision inférieure au mètre.

Finalement, afin de guider ses utilisateurs lors d'un trajet, SonarVision propose une interface utilisateur qui combine
sons, instructions vocalisés et retours haptiques pour indiquer à ses utilisateurs la direction à suivre avec
exactitude.

Pour comprendre comment SonarVision offre une telle précision dans ces trois catégories, consulter le
guide [fonctionnement](fonctionnement/itineraires)

## Zone de couverture

SonarVision est disponible dans les agglomérations suivantes :

- Paris
- Lyon
- Marseille
- Nice
- Lille

Cette limitation vient principalement du système VPS, disponible uniquement dans ces villes. De plus, le VPS ne 
fonctionne pas à l'intérieur des bâtiments et dans certains espaces verts. Vos trajets sont conçus en conséquence et 
vérifiés par un humain.

## Visibilité

Finalement, puisque SonarVision se repose sur la caméra arrière principale de votre iPhone pour déterminer votre
position, il faut que l'image prise par celle-ci respecte certaines conditions, détaillées ci-dessous.

### Position de la caméra de votre iPhone.

La caméra doit pouvoir voir vos alentours. On ne peut donc pas utiliser SonarVision avec son smartphone dans sa poche
ou dans son sac.

Nous cherchons des solutions pour améliorer ce point très problématique pour nos utilisateurs, pour des
questions de confort et de sécurité évidentes.

Nous conseillons actuellement d'utiliser SonarVision avec une coque munie d'une lanière pour aller autour du cou. Ainsi,
l'utilisateur a les mains libres et le téléphone est légèrement mieux dissimulé sur le torse.

### Conditions lumineuses

Afin de fonctionner, SonarVision doit pouvoir identifier ses alentours. Les trajets de nuits, en particulier dans les
zones peu éclairées sont découragés, puisqu'ils peuvent mener à une perte de la géolocalisation précise et donc à
des instructions erronées. Aujourd'hui, SonarVision indique à son utilisateur de s'arrêter lorsque l'application est
incapable d'identifier précisément ses alentours.

Nous envisageons des futurs systèmes permettant d'indiquer à l'utilisateur que les conditions lumineuses sont
insuffisantes.
