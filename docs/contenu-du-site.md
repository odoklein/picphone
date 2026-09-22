# Contenu du site PicPhone

Relevé exhaustif de tous les textes publiés, page par page, dans l'ordre de
lecture. Établi le 28 juillet 2026, révisé le 11 septembre 2026 pour refléter
la refonte de la page d'accueil suivant le brief « Contenu final du site
web » — la page Fonctionnalités dédiée a été retirée, son contenu étant
remplacé par les sections Solution et Configuration ci-dessous.

Révisé le 21 septembre 2026 d'après le brief « Modifications — retours
cliente » : section Le constat restructurée et chiffrée, section Comment ça
marche remplacée par Configuration par l'aidant, section Démonstration
supprimée (elle montrait la même application que Solution), formulaire de la
FAQ supprimé au profit du seul formulaire de Contact.

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
| Configuration | Accueil, section 04 |
| Tarifs | Accueil, section 06 |
| Pour les établissements | Page Résidences |
| Questions | Accueil, FAQ |
| **Télécharger PicPhone** *(bouton)* | Bloc CTA final |

Sur mobile, tout passe dans le menu déroulant, bouton compris.

## Les deux appels à l'action — `src/trial.ts`

> **Découvrir PicPhone** — dans le hero, renvoie vers la section La solution.
> **Télécharger PicPhone** — à Tarifs et dans le CTA final.
> *Sans engagement. Aucune étape technique côté senior.*

Le formulaire de Contact — le seul du site — a son propre bouton, au mot
près : **Envoyer ma demande**.

## Pied de page — `src/components/SiteFooter.tsx`

> Une application pensée pour que les familles restent vraiment proches, simplement.

Badges *Télécharger sur l'App Store* et *Disponible sur Google Play*.

| Produit | Ressources | Contact |
| --- | --- | --- |
| Le constat | Questions fréquentes | bonjour@picphone.fr |
| La solution | Isolement des seniors | 01 00 00 00 00 |
| Configuration par l'aidant | Témoignages de familles | Instagram · LinkedIn · Facebook |
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

Quatre temps distincts, dans cet ordre : les chiffres, le constat, le
problème, la réponse.

**Les chiffres**

| | |
| --- | --- |
| **2 millions** | de seniors en situation d'isolement social en France. |
| **750 000** | d'entre eux sont en situation de mort sociale. |

> « Mort sociale » désigne une situation sans aucun contact humain : ni
> famille, ni amis, ni voisins, ni société.

**Le constat**

> ## La technologie isole les seniors
>
> Leurs proches pensent pourtant à eux toute la journée. Ils aimeraient juste
> entendre leur voix, voir leur visage.
>
> ### Ce n'est pas un problème d'envie. C'est un problème d'accès.

**Le problème** — les trois gestes sont affichés comme trois obstacles, à
côté du texte, plutôt que noyés dedans.

> ### Trois gestes de trop, avant même d'entendre une voix.
>
> Ouvrir la bonne application, retrouver un nom, appuyer au bon endroit…
> c'est devenu une source d'angoisse. Ce n'est pas l'envie de communiquer qui
> manque, c'est la peur de faire une erreur face à des outils trop complexes.
> Et l'isolement s'installe, silencieusement.
>
> 1. Ouvrir la bonne application
> 2. Retrouver un nom dans une liste
> 3. Appuyer au bon endroit

**La réponse**

> ### PicPhone a été conçu pour lever cette barrière.
>
> [ Voir comment → section La solution ]

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

## 05 · Configuration par l'aidant

Remplace les deux anciennes sections « Comment ça marche » (trois étapes trop
générales) et « Démonstration » (qui remontrait l'application déjà présentée
en 03). Le détail des étapes reprend la spec parcours transmise par la
cliente — `docs/parcours-4-etapes.md`, étapes 1 et 2.

> ## C'est l'aidant qui configure. Le senior n'a rien à installer.
>
> Tout le paramétrage se fait depuis le téléphone de l'aidant, en quelques
> minutes : les proches, leurs photos, les rappels du quotidien. Le senior,
> lui, reçoit un écran déjà prêt.

| | Étape | Détail |
| --- | --- | --- |
| 01 | L'aidant crée son compte | Une adresse e-mail et un mot de passe, ou une connexion Apple ou Google. Aucun paiement, aucune carte bancaire pour commencer. |
| 02 | Il indique pour qui | Le prénom du senior, le lien de parenté, et une photo s'il le souhaite. Ces informations servent uniquement à personnaliser la suite du parcours. |
| 03 | Il ajoute les proches | Pour chaque contact : une photo, le prénom affiché, un numéro. L'aidant place ensuite chaque visage dans la grille du senior, par glisser-déposer. |
| 04 | Il choisit les rappels du quotidien | Rappel de médicament, météo, message du jour : chaque élément s'active séparément, et reste désactivé tant que l'aidant ne l'a pas choisi. |
| 05 | Il envoie le code de jumelage | Un code à 8 caractères, transmis par SMS ou par WhatsApp. Le senior le saisit une seule fois, en gros caractères, sur un écran qui ne demande rien d'autre. |
| 06 | Tout reste synchronisé | Une photo ajoutée, un contact modifié, un rappel déplacé : la mise à jour part aussitôt sur le téléphone du senior, sans aucune manipulation de sa part. |

En regard : une capture réelle du tableau de bord de l'aidant
(`/images/app/aidant-tableau-de-bord.jpg`), puis l'encadré **Côté senior,
rien à faire** :

- Aucun compte, aucun mot de passe, aucune adresse e-mail à créer.
- Un seul écran au premier lancement : la saisie du code.
- PicPhone devient l'écran d'accueil : pas de menu où se perdre.

## 06 · Témoignages

> ## Ils restent proches grâce à PicPhone.

**À faire avant publication :** trois emplacements réservés, marqués comme
tels à l'écran (bordure pointillée, texte explicatif), en attendant de
recueillir de vrais témoignages avec l'accord des familles concernées.

## 07 · Tarifs

> ## Choisissez la formule qui vous convient.
>
> Pour tout parrainage, vous obtenez un mois gratuit en tant qu'aidant.

**À valider avant publication :** trois formules indicatives (Découverte,
Famille, Famille+) avec des tarifs marqués « à définir » — aucun prix réel
n'a encore été validé. CTA : *Télécharger PicPhone*.

## 08 · FAQ / Aide

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

**Pas de formulaire dans cette section.** Elle n'affiche que les questions et,
en regard, un lien *Nous écrire* vers la section Contact — un seul point de
collecte sur la page.

> Une question qui n'est pas dans la liste ? Notre équipe vous répond
> directement. [ Nous écrire ]

## 09 · Contact

> ## Une question ? Parlons-en.
>
> Vous souhaitez en savoir plus sur PicPhone ? Notre équipe est à votre
> disposition.

Coordonnées : bonjour@picphone.fr · 01 00 00 00 00 · France.
**Seul formulaire du site** (Nom · Prénom · E-mail · Message), CTA *Envoyer
ma demande*. Aucun back-end n'est branché : la validation affiche une
confirmation locale, rien n'est envoyé pour l'instant.

## 10 · CTA final

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
- **Le formulaire de Contact est UI seulement.** Il confirme la saisie à
  l'écran mais n'envoie rien : à connecter à un vrai point de collecte
  (e-mail, CRM…) avant mise en production.
- **Le code de jumelage est annoncé à 8 caractères** en section 05, comme
  l'application le génère aujourd'hui, alors que `docs/parcours-4-etapes.md`
  spécifie 6 chiffres valables 72 h. L'écart est déjà relevé dans cette spec :
  à trancher côté produit, la page devra suivre.
- **Les photos restent à retoucher par la cliente**, indépendamment de ces
  modifications.
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
