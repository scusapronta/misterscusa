# 📜 Changelog – ScusaPronta

Tutte le modifiche rilevanti al progetto ScusaPronta, ordinate dal più recente al meno recente.

---

## [1.1.0] – 2025-01-XX
### Added
- Aggiunto `README.md` con descrizione del progetto, funzionalità, stack tecnico e link al deploy.
- Aggiunti file `security.txt` e `humans.txt` per migliorare trasparenza, credibilità e informazioni lato sviluppatori.
- Creato `manifest.json` per supporto PWA (aggiunta alla Home e migliore integrazione su mobile).

### Changed
- Ottimizzato il `<head>` di `index.html` con:
  - nuovo `<title>` più descrittivo e orientato alle ricerche,
  - nuova `meta description` focalizzata sul valore del generatore,
  - meta OpenGraph e Twitter Card aggiornate per anteprime social migliori,
  - canonical URL definita in modo esplicito.
- Migliorata la struttura SEO complessiva senza toccare grafica, layout o testi visibili all’utente.

### Fixed
- Rimossi meta tag duplicati o superflui che potevano confondere i motori di ricerca.

---

## [1.0.1] – 2024-12-XX
### Added
- Aggiunto `robots.txt` per permettere l’indicizzazione completa del sito e dichiarare la sitemap.
- Creata `sitemap.xml` per facilitare la scansione da parte dei motori di ricerca.

### Changed
- Aggiornata configurazione di GitHub Pages per pubblicare il sito su:  
  `https://scusapronta.github.io/misterscusa/`.

---

## [1.0.0] – 2024-12-XX
### Added
- Prima versione pubblica di ScusaPronta.
- Interfaccia principale con:
  - selezione categorie (Lavoro, Amici, Amore, Famiglia, Altro),
  - generazione di scuse brevi, lunghe e casuali,
  - “Scusa del giorno”.
- Sticky bar mobile per accesso rapido alle azioni principali.
- Integrazione Firebase Firestore per statistiche e tracking anonimo.
- Deploy iniziale tramite GitHub Pages.
