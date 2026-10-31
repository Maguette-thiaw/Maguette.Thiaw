---
layout: default
title: Formation ingénieur
permalink: /engineering-course/
---

{% include navigation.html %}

# Ma formation : du composant au système

Tout est parti d'une curiosité simple : comprendre comment l'énergie
électrique est produite, distribuée et pilotée. Mon parcours suit cette
question, étape par étape, en passant du composant isolé au système
complet.

---

## DUT Génie Électrique, ESP de Dakar (2023-2025) : apprendre les fondations

C'est là que j'ai découvert le métier de l'intérieur. J'y ai appris
l'électrotechnique, l'électronique et l'automatisme, mais surtout à
confronter un schéma à la réalité : câbler, mesurer, tester, recommencer.

### Mes projets

#### SENELEC : maintenance préventive en postes HTA et BT

<!-- Image : un poste HTA/BT -->
<div class="project-image">
  <img src="{{ '/img/senelec-poste.png' | relative_url }}" alt="Un poste HTA/BT">
</div>

Pendant mon stage, j'ai participé à la maintenance préventive de postes
HTA et BT. Avec le PD Scan et la thermographie, je repérais les
décharges partielles et les points chauds avant qu'ils ne causent une
panne. Je rédigeais ensuite des rapports techniques sur ce que nous
avions relevé, puis ils étaient transmis à l'équipe chargée du
diagnostic sur place.

<div class="project-gallery">
  <figure>
    <img src="{{ '/img/thermographie.png' | relative_url }}" alt="Mesures de thermographie">
    <figcaption>Mesures de thermographie</figcaption>
  </figure>
  <figure>
    <img src="{{ '/img/pd-scan.png' | relative_url }}" alt="Mesures au PD Scan">
    <figcaption>Mesures au PD Scan</figcaption>
  </figure>
</div>

**Rapport technique**

[Consulter un rapport technique que j'ai rédigé](#)

Ce stage à la SENELEC, la Société Nationale d'Électricité du Sénégal,
m'a donné une première expérience concrète du terrain. J'y ai compris
qu'une bonne maintenance préventive repose sur deux choses : des mesures
fiables et des rapports clairs, parce que d'autres équipes s'appuient
dessus pour agir. J'y ai aussi appris à travailler avec rigueur et en
sécurité au contact d'installations réelles.

---

#### Commande d'une pompe par microcontrôleur ATMEGA328P

<!-- Image : une pompe -->
<div class="project-image">
  <img src="{{ '/img/pompe.png' | relative_url }}" alt="Projet de commande d'une pompe">
</div>

Ce projet a été réalisé en classe, pendant mon DUT. Il consistait à
commander une pompe à l'aide d'un microcontrôleur ATMEGA328P. J'ai
programmé le microcontrôleur pour qu'il pilote la pompe selon les
consignes données.

Ce projet m'a surtout permis d'apprendre à coder pour piloter un
système réel, et de faire le lien entre la programmation et le
fonctionnement d'un équipement électrique.

**Programmation et pilotage d'une pompe depuis un microcontrôleur.**

[Lien vers le projet](#)

---

#### Africa Féliz : dimensionnement d'un système solaire autonome

<!-- Image : un panneau solaire -->
<div class="project-image">
  <img src="{{ '/img/panneau-solaire.png' | relative_url }}" alt="Panneau solaire">
</div>

J'ai passé deux semaines en stage chez Africa Féliz, à Thiès, sur les
systèmes solaires. Nous avons dimensionné un système solaire autonome
de bout en bout. Je suis partie des besoins en énergie du site, en tenant
compte des contraintes environnementales, pour déterminer le système
adapté. J'ai ensuite préparé les documents techniques qui accompagnent
ce dimensionnement.

<div class="project-gallery">
  <figure>
    <img src="{{ '/img/africa-feliz-1.png' | relative_url }}" alt="Photo prise pendant le stage chez Africa Féliz">
    <figcaption>Photo prise pendant le stage</figcaption>
  </figure>
  <figure>
    <img src="{{ '/img/africa-feliz-2.png' | relative_url }}" alt="Photo prise pendant le stage chez Africa Féliz">
    <figcaption>Photo prise pendant le stage</figcaption>
  </figure>
</div>

Ce stage m'a montré qu'un système solaire se conçoit à partir des
besoins réels et du lieu où il sera installé, pas à partir des
panneaux. C'était une deuxième expérience de terrain, courte mais
concrète, qui a confirmé mon intérêt pour l'énergie.

---

## Licence 3 EEA, Université Paul Sabatier (2025-2026) : comprendre pourquoi ça marche

À Toulouse, je suis passée du geste à la compréhension : électronique de
puissance, automatique, contrôle-commande. J'ai donné un cadre théorique
à ce que je manipulais jusque-là.

### Projet de groupe : une interface entre un capteur à ultrasons et une Arduino

<!-- Image : capteur HC-SR04 -->
<div class="project-image">
  <img src="{{ '/img/capteur-hc-sr04.png' | relative_url }}" alt="Capteur à ultrasons HC-SR04">
</div>

Ce projet était réparti en plusieurs parties, et mon groupe était chargé
de la partie électronique. Il fallait concevoir l'interface entre un
capteur de distance à ultrasons et une carte Arduino, sans microcontrôleur,
uniquement avec des composants discrets. Cette interface déclenche le
capteur, récupère son signal et le transforme en une tension proportionnelle
à la distance, à raison de 1 V par mètre, avant de la renvoyer à l'Arduino.
Nous l'avons construite en quatre blocs, simulés sous LT-SPICE, puis câblés
et testés un par un sur platine.

<div class="project-gallery">
  <figure>
    <img src="{{ '/img/schema-blocs.png' | relative_url }}" alt="Schéma en blocs de l'interface">
    <figcaption>Schéma en blocs de l'interface</figcaption>
  </figure>
  <figure>
    <img src="{{ '/img/simulation-ltspice.png' | relative_url }}" alt="Simulation LT-SPICE">
    <figcaption>Simulation LT-SPICE</figcaption>
  </figure>
  <figure>
    <img src="{{ '/img/montage-platine.png' | relative_url }}" alt="Montage sur platine">
    <figcaption>Montage sur platine</figcaption>
  </figure>
</div>

Ce projet m'a appris à concevoir un circuit étape par étape : l'analyser,
le simuler, puis le câbler et le tester bloc par bloc. Il m'a aussi
appris à travailler en groupe sur un système dont chaque partie dépend
des autres.

---

## ENSEEIHT, cycle ingénieur (2026-) : concevoir des systèmes

Je viens d'intégrer l'ENSEEIHT, à Toulouse, où je suis en première
année de génie électrique et électronique. Je choisirai bientôt ma
spécialisation, et j'envisage sérieusement l'énergie : c'est un domaine
qui me plaît et dans lequel j'ai déjà de l'expérience, du terrain à
la SENELEC jusqu'au solaire chez Africa Féliz.
