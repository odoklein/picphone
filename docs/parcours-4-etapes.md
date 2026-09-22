# PicPhone — spec parcours, 4 étapes

Spec produit destinée à l'implémentation **applicative** (app aidant + app senior).
Elle ne concerne pas ce dépôt, qui ne contient que le site vitrine.

Message directeur, le même que sur la homepage : *PicPhone facilite la communication
et réduit l'isolement des seniors.*

---

## Étape 1 — Découverte → essai → configuration aidant → code de jumelage

1. **Entrée.** Arrivée sur la homepage, majoritairement mobile (publicité réseaux
   sociaux). Un seul CTA actif : `Essayer gratuitement — jusqu'à 4 contacts`.
2. **Création de compte aidant.** Email + mot de passe, ou connexion Apple/Google.
   Aucun paiement demandé, aucune carte bancaire.
3. **Écran « Pour qui configurez-vous PicPhone ? »** Prénom du senior, lien de
   parenté (optionnel), photo du senior (optionnelle). Sert uniquement à
   personnaliser la suite du parcours.
4. **Ajout des contacts, limite 4 en essai.** Par contact : photo (obligatoire),
   prénom affiché (obligatoire), numéro ou identifiant PicPhone (obligatoire),
   position dans la grille (glisser-déposer). Le 5ᵉ contact est bloqué par un
   message non commercial : « L'essai permet 4 contacts. Vous pourrez en ajouter
   d'autres plus tard. »
5. **Réglages optionnels de l'écran senior.** Widgets activables un par un :
   rappel de médicament (heure + libellé), météo, message du jour. Tous
   désactivés par défaut.
6. **Génération du code de jumelage.** Code à 6 chiffres, valable 72 h,
   régénérable. L'écran affiche le code, la marche à suivre côté senior en trois
   lignes, et un bouton « Envoyer le code par SMS / WhatsApp ».
7. **État d'attente.** Le tableau de bord affiche « En attente de jumelage » tant
   que le code n'est pas saisi. Relance par notification à J+2 si toujours non
   jumelé.

## Étape 2 — Installation et synchronisation, sans étape technique côté senior

8. **Installation.** Par l'aidant lors d'une visite, préinstallée sur l'appareil,
   ou installée à distance via le compte du store. Le senior n'installe rien.
9. **Premier lancement côté senior.** Un seul écran, un seul champ : la saisie du
   code à 6 chiffres, en gros caractères. Aucun compte, aucun mot de passe,
   aucune adresse email demandés au senior.
10. **Jumelage.** À la validation du code, l'appareil senior récupère la
    configuration de l'étape 1 : contacts, photos, ordre d'affichage, widgets.
11. **Permissions.** Micro, caméra, notifications demandées en une seule
    séquence, en langage simple. En cas de refus, l'aidant est notifié et peut
    relancer la demande à distance.
12. **Passage en mode PicPhone.** L'app devient l'écran d'accueil par défaut.
    Aucun retour vers le lanceur système sans code aidant.
13. **Confirmation croisée.** L'aidant reçoit « L'appareil de [prénom] est prêt. »
    Le tableau de bord passe de « En attente » à « Actif ».
14. **Synchronisation continue.** Toute modification côté aidant (contact, photo,
    widget) est poussée en temps réel. Aucune validation requise côté senior.

## Étape 3 — Boucle quotidienne

15. **Écran senior au repos.** Grille de photos + widgets actifs. Aucune
    notification anxiogène, aucun badge rouge.
16. **Actions possibles côté senior.**
    - *Appel* : appui sur une photo → appel vidéo, ou audio en repli si le réseau
      est faible.
    - *Message* : appui long sur une photo → message vocal enregistré, pas de
      clavier.
    - *Humeur* : widget quotidien, trois à cinq états illustrés, un appui suffit.
      Toujours ignorable.
17. **Remontée au tableau de bord aidant, en direct.** Dernier appel (avec qui,
    durée), derniers messages vocaux, humeur du jour, dernière activité.
18. **Règles d'alerte.**
    - *Inactivité* : aucune interaction pendant une durée configurable (48 h par
      défaut) → notification à l'aidant principal.
    - *Humeur basse* : humeur négative 2 jours consécutifs, ou 3 fois sur 7 jours
      → notification à l'aidant principal.
    - *Appareil hors ligne* : plus de 12 h sans connexion → notification.
    - Toutes les alertes sont informatives, jamais médicales. Formulation type :
      « [prénom] n'a pas utilisé PicPhone depuis deux jours. Un appel ferait
      peut-être plaisir. »
19. **Escalade.** Si plusieurs aidants sont rattachés, l'alerte part d'abord à
    l'aidant principal, puis aux autres après 6 h sans consultation.
20. **Reprise.** Le cycle repart chaque matin : widgets rechargés, compteurs
    d'activité réinitialisés, historique conservé côté aidant.

## Étape 4 — Sortie de l'essai

21. **Rappels de fin d'essai.** Notifications à l'aidant à J-3 et J-1. Aucune
    notification côté senior, jamais.
22. **Aucune coupure brutale.** À l'expiration, les appels entrants restent
    possibles. Seules les fonctions de configuration passent en lecture seule
    côté aidant, jusqu'à la décision.
23. **Deux sorties possibles, présentées côte à côte.**
    - **Version payante individuelle.** Contacts illimités, tous les widgets,
      historique complet. Souscription depuis le compte aidant. Aucune
      réinstallation, aucun rejumelage : l'appareil senior ne change pas d'état.
    - **Canal PicPhone Résidences.** Même produit, même application. Le personnel
      devient l'aidant collectif : un compte de résidence gère plusieurs
      appareils depuis un tableau de bord unique. Ce n'est ni une installation
      distincte, ni une version différente. Le parcours passe par un formulaire
      de contact, pas par un paiement en ligne.
24. **Migration individuel → résidence.** Un appareil déjà jumelé à un aidant
    familial peut être rattaché à un compte de résidence sans réinitialisation.
    Les contacts familiaux existants sont conservés — c'est la condition pour que
    le lien familial ne se perde pas à l'entrée en établissement.
25. **Non-conversion.** Sans décision sous 30 jours, le compte passe en veille :
    configuration conservée, réactivation en un clic, aucune suppression de
    données ni de contacts.

---

## Ce qui est déjà implémenté dans ce dépôt (site)

Relevé remis à jour le 21 septembre 2026 : la page Fonctionnalités et le
carrousel de parcours ont disparu de la home lors des refontes successives,
et les étapes 1 et 2 sont désormais racontées dans la section Configuration.

| Brief | Où |
| --- | --- |
| §1.1 Hero, CTA unique | `src/Home.tsx` — section `.hero-cine` |
| §1.2 Bénéfice central | `src/Home.tsx` — `#solution` |
| §1.3 Écran par écran (captures réelles) | `src/Home.tsx` — `#solution`, images dans `public/images/app/` |
| §1.4 Bloc résidences | page dédiée `src/Ehpad.tsx` — `#/ehpad` |
| §1.5 CTA final | `src/Home.tsx` — `#cta` |
| Étapes 1 et 2 (configuration et jumelage, vus côté marketing) | `src/Home.tsx` — `#configuration` |

`src/components/JourneyCarousel.tsx` et `src/components/AppClutter.tsx` ne
sont plus montés par aucune page : à supprimer ou à réemployer.

Le libellé du bouton unique et ses deux destinations sont centralisés dans
`src/trial.ts` (`TRIAL_LABEL`, `TRIAL_MICRO`, `TRIAL_ANCHOR`, `TRIAL_START`).
`TRIAL_START` pointe sur un placeholder `#/essai` : à brancher sur le vrai parcours
d'essai (étape 1 ci-dessus) dès qu'il existe.

## Écart entre cette spec et l'application livrée

Le point 6 ci-dessus décrit un code de jumelage « à 6 chiffres, valable 72 h ».
L'application livrée génère un code **alphanumérique de 8 caractères** (`JL675639`),
sans durée de validité annoncée, et l'écran senior demande explicitement « le code à
8 caractères ». La section Configuration du site décrit l'application telle
qu'elle est, donc « un code à 8 caractères ».
À trancher : corriger la spec, ou aligner l'application — puis la page suivra.
