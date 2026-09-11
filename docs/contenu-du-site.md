# Contenu du site PicPhone

Relevé exhaustif de tous les textes publiés, page par page, dans l'ordre de
lecture. Établi le 28 juillet 2026, révisé le 11 septembre 2026 pour refléter
la refonte de la page d'accueil suivant le brief « Contenu final du site
web » — la page Fonctionnalités dédiée a été retirée, son contenu étant
remplacé par les sections Solution et Démonstration ci-dessous.

À quoi ça sert : relire la copy sans ouvrir le code, la faire valider, la faire
traduire, ou retrouver dans quel fichier vit une phrase précise.

**Message directeur, valable partout :** *PicPhone facilite la communication et
réduit l'isolement des seniors.*

**Deux pages :**

| Page | Adresse | Fichier |
| --- | --- | --- |
| Accueil | `/` | `src/Home.tsx` |
| Résidences (EHPAD) | `/#/ehpad` | `src/Ehpad.tsx` |

---

# Éléments partagés

## En-tête — `src/components/SiteHeader.tsx`

Logo PicPhone, puis :

| Libellé | Destination |
| --- | --- |
| Le constat | Accueil, section 01 |
| La solution | Accueil, section 02 |
| Comment ça marche | Accueil, section 04 |
| Tarifs | Accueil, section 07 |
| Pour les établissements | Page Résidences |
| Questions | Accueil, FAQ |
| **Télécharger PicPhone** *(bouton)* | Bloc CTA final |

Sur mobile, tout passe dans le menu déroulant, bouton compris.

## Les deux appels à l'action — `src/trial.ts`

> **Découvrir PicPhone** — dans le hero, renvoie vers la section La solution.
> **Télécharger PicPhone** — à Tarifs et dans le CTA final.
> *Sans engagement. Aucune étape technique côté senior.*

Un formulaire (FAQ, Contact) a son propre bouton, au mot près :
**Envoyer ma demande**.

## Pied de page — `src/components/SiteFooter.tsx`

> Une application pensée pour que les familles restent vraiment proches, simplement.

Badges *Télécharger sur l'App Store* et *Disponible sur Google Play*.

| Produit | Ressources | Contact |
| --- | --- | --- |
| Le constat | Questions fréquentes | bonjour@picphone.fr |
| La solution | Isolement des seniors | 01 00 00 00 00 |
| Comment ça marche | Témoignages de familles | Instagram · LinkedIn · Facebook |
| Tarifs | Support | |
| Pour les établissements | | |
| Télécharger PicPhone | | |

Bas de page : *© 2026 PicPhone — Rester proches, simplement.* · Mentions légales ·
Confidentialité · CGU

---

# Page 1 — Accueil (`src/Home.tsx`)

## 01 · Hero

> # Rester proches, même à distance.
>
> PicPhone permet aux personnes âgées d'appeler et de voir leurs proches en un
> geste, simplement en cliquant sur leur photo.
>
> [ Découvrir PicPhone ]

Fond : les trois photographies de familles en fondu enchaîné existantes
(`src/assets/hero/`), réutilisées comme visuel de la section — pas de nouveau
tournage prévu à ce stade.

## 02 · Le constat

> ## La technologie isole les seniors
>
> En France, de nombreux seniors vivent seuls et voient leurs proches moins
> souvent. Et lorsque la technologie devient trop compliquée, elle peut
> parfois renforcer cette distance au lieu de la réduire.

## 03 · La solution

> ## Appeler ses proches, simplement. Des solutions pensées pour le quotidien.
>
> Avec PicPhone, le senior retrouve ses proches en un geste : il suffit
> d'appuyer sur une photo pour lancer un appel audio ou vidéo. L'application
> l'accompagne aussi jour après jour avec des rappels utiles, tels que
> rendez-vous médicaux, prise de médicaments, hydratation, activité physique.
> PicPhone réunit ainsi le lien avec les proches et l'accompagnement du
> quotidien, dans une seule interface, pensée pour être simple.

Vidéo : en attendant le vrai tournage, un aperçu réutilise une capture
d'écran réelle de l'app dans le cadre de téléphone du site, avec un bouton
lecture décoratif et un badge « Vidéo de démonstration — à venir ».

## 04 · Pour qui ?

**Pour les seniors** — *Une technologie qui s'adapte à eux.*
Une interface simple, pensée pour être utilisée sans apprentissage compliqué.
- Les proches sont visibles en photo
- Un seul geste pour appeler
- Pas de menus complexes

**Pour les aidants et les familles** — *Garder le lien, simplement.*
L'aidant configure PicPhone pour que le senior puisse ensuite l'utiliser en
toute simplicité.
- Installation et configuration par l'aidant
- Gestion des proches
- Synchronisation avec le téléphone du senior
- Une solution pensée pour rassurer les proches

## 05 · Comment ça marche ?

> ## PicPhone se met en place en 3 étapes.

| | Étape | Détail |
| --- | --- | --- |
| 01 | L'aidant installe | L'aidant installe et paramètre PicPhone. |
| 02 | L'aidant synchronise | Les aidants configurent et synchronisent l'interface du senior avec les contacts et les éléments nécessaires à son utilisation. |
| 03 | C'est prêt | Le senior retrouve une interface simple avec les photos de ses proches et les fonctions utiles à son quotidien. |

## 06 · Démonstration de l'application

> ## Plus qu'un appel, une présence au quotidien.
>
> La vidéo doit permettre de voir clairement l'interface et les
> fonctionnalités : appels audio et vidéo, photos des proches et rappels du
> quotidien.

Même traitement d'aperçu que la section 03, dans un cadre plus grand.

## 07 · Témoignages

> ## Ils restent proches grâce à PicPhone.

**À faire avant publication :** trois emplacements réservés, marqués comme
tels à l'écran (bordure pointillée, texte explicatif), en attendant de
recueillir de vrais témoignages avec l'accord des familles concernées.

## 08 · Tarifs

> ## Choisissez la formule qui vous convient.
>
> Pour tout parrainage, vous obtenez un mois gratuit en tant qu'aidant.

**À valider avant publication :** trois formules indicatives (Découverte,
Famille, Famille+) avec des tarifs marqués « à définir » — aucun prix réel
n'a encore été validé. CTA : *Télécharger PicPhone*.

## 09 · FAQ / Aide

> ## Vos questions, nos réponses.

| Question | Réponse |
| --- | --- |
| PicPhone fonctionne-t-il sur tous les téléphones ? | PicPhone est compatible avec les smartphones récents sous iOS et Android, aussi bien côté senior que côté aidant. |
| Qui doit télécharger l'application ? | L'aidant télécharge PicPhone et crée le profil du senior. L'application est ensuite installée et synchronisée sur le téléphone du senior. |
| Comment paramétrer le téléphone ? | Tout se fait depuis l'application de l'aidant, en quelques étapes guidées : ajout des proches, des photos, puis synchronisation avec le téléphone du senior. |
| Combien de temps prend l'installation ? | Quelques minutes suffisent pour créer le profil, ajouter les premiers contacts et synchroniser le téléphone du senior. |
| Peut-on ajouter un deuxième aidant avec accès au même compte senior ? | Oui. Plusieurs aidants peuvent être rattachés au même profil senior. |
| L'application est-elle payante ? | PicPhone propose un essai gratuit, puis des formules payantes détaillées dans la section Tarifs. |
| Faut-il une connexion Internet pour utiliser PicPhone ? | Oui, une connexion Wi-Fi ou données mobiles est nécessaire pour les appels audio et vidéo. |
| Le senior peut-il recevoir des appels avec PicPhone ? | Oui. Le senior peut recevoir des appels de ses proches enregistrés, en plus de pouvoir en passer d'un geste. |
| Les proches doivent-ils installer quelque chose pour appeler le senior ? | Non, le senior peut appeler ou être appelé directement depuis son écran PicPhone, sans démarche particulière pour ses proches. |
| Comment fonctionne le parrainage (un mois offert) ? | En parrainant une autre famille, vous bénéficiez d'un mois gratuit sur votre formule aidant dès que le filleul s'abonne. |

**Réponses rédigées pour ce brief, à faire valider par l'équipe produit avant
publication** — notamment les affirmations techniques (connexion requise,
absence d'installation côté proches).

Formulaire (Nom · Prénom · E-mail · Message) intégré à côté des questions.
CTA : *Envoyer ma demande*. Aucun back-end n'est branché : la validation
affiche une confirmation locale, rien n'est envoyé pour l'instant.

## 10 · Contact

> ## Une question ? Parlons-en.
>
> Vous souhaitez en savoir plus sur PicPhone ? Notre équipe est à votre
> disposition.

Coordonnées : bonjour@picphone.fr · 01 00 00 00 00 · France.
Formulaire identique à celui de la FAQ (Nom · Prénom · E-mail · Message),
CTA *Envoyer ma demande*, même absence de back-end pour l'instant.

## 11 · CTA final

> ## Le lien commence par un simple appel.
>
> Avec PicPhone, rester proche devient aussi simple qu'appuyer sur une photo.
>
> [ Télécharger PicPhone ]
> *Sans engagement. Aucune étape technique côté senior.*

---

# Page 2 — Résidences (EHPAD) — `src/Ehpad.tsx`

Page inchangée par cette révision. La cible établissements reste traitée
dans cette page dédiée, comme demandé par le brief « Contenu final du site
web » ; son contenu détaillé n'est pas repris ici, se référer directement au
fichier.

---

# Métadonnées et référencement — `index.html`

| Balise | Contenu |
| --- | --- |
| Titre | PicPhone \| Une application simple pour rester proche de sa famille |
| Description | PicPhone aide les seniors et leurs proches à rester en lien grâce à des contacts faciles, des photos familiales, des rappels et un suivi d'humeur simple. |
| Titre de partage | PicPhone \| Rester proches, sans rendre les choses compliquées |
| Description de partage | Une application simple pour aider les seniors et leurs proches à rester en lien au quotidien. |
| Image de partage | `/images/family-senior-lifestyle.png` |
| Langue | fr-FR |

Le titre de la page Résidences reste *PicPhone Résidences \| Rompre
l'isolement en EHPAD*.

---

# Points de vigilance

- **Les deux boutons ne mènent nulle part de définitif.** `TRIAL_START` dans
  `src/trial.ts` pointe sur un emplacement provisoire (`#/essai`), à brancher
  sur le vrai parcours de téléchargement/inscription.
- **Les formulaires (FAQ et Contact) sont UI seulement.** Ils confirment la
  saisie à l'écran mais n'envoient rien : à connecter à un vrai point de
  collecte (e-mail, CRM…) avant mise en production.
- **Les tarifs affichés sont des placeholders.** Trois formules indicatives,
  aucun prix validé — à remplacer dès que l'offre commerciale est arrêtée.
- **Les témoignages sont des emplacements vides**, volontairement marqués
  comme tels, en attendant de vrais retours clients avec leur accord.
- **Les réponses de la FAQ** ont été rédigées pour ce brief et doivent être
  relues par l'équipe produit, en particulier les affirmations sur la
  connexion Internet requise et l'absence d'installation côté proches.
- **Deux adresses e-mail circulent** : `bonjour@picphone.fr` (familles) et
  `etablissements@picphone.fr` (résidences, page dédiée). Le numéro
  `01 00 00 00 00` est un numéro de remplacement.
