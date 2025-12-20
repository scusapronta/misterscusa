// ==========================
//  DATABASE SCUSE (COMBINABILE, BRANDIZZATO)
// ==========================

const excuseFragments = {
  lavoro: {
    start: [
      "Giuro che stavo arrivando, ma",
      "Ti dico la verità:",
      "Piccolo aggiornamento sulla mia puntualità:",
      "Lo so che non è il massimo, ma",
      "Stavo partendo in orario, solo che",
      "La mia versione organizzata oggi ha dato forfait e",
      "Ero quasi in anticipo, finché",
      "Ho fatto finta di essere un adulto funzionale, ma",
      "Pensavo di avere tutto sotto controllo, poi",
      "La mia tabella di marcia ha deciso di scioperare e"
    ],
    reason: [
      "il treno ha deciso di fermarsi a caso in mezzo al nulla senza motivo comprensibile",
      "il bus ha scelto di passare in una timeline alternativa che non includeva la mia fermata",
      "Google Maps ha pensato fosse divertente mandarmi dalla parte opposta della città",
      "il vicino ha deciso di usare il trapano alle sette del mattino e ho dovuto negoziare la pace",
      "il pc ha deciso di aggiornarsi proprio quando avevo finito di essere in orario",
      "il cane ha rubato una scarpa e ho dovuto trattare come in un film di ostaggi",
      "il gatto ha pensato che la tastiera fosse un materasso emo e si è sdraiato lì",
      "il parcheggio sotto casa è diventato un miraggio tipo oasi nel deserto",
      "la sveglia ha suonato solo nel mondo delle idee, non nella realtà",
      "un piccolo imprevisto logistico si è trasformato in una catena di disastri degna di documentario"
    ],
    detail: [
      "e da lì il tempo ha iniziato a correre più veloce di me.",
      "e ogni tentativo di recuperare minuti ne faceva perdere almeno cinque.",
      "e risolvere il casino ha richiesto più negoziazione di una riunione con il CFO.",
      "e ho capito che oggi il karma organizzativo non è dalla mia parte.",
      "e ho passato più tempo a improvvisare che a muovermi davvero.",
      "e da quel momento la logica di questa giornata si è dissolta.",
      "e mi sono ritrovato a inseguire l’orologio con risultati discutibili.",
      "e più provavo ad accelerare, più la realtà mi metteva in pausa.",
      "e giuro che se ti mando il recap sembra una sceneggiatura comica.",
      "e a quel punto recuperare la puntualità era matematicamente impossibile."
    ],
    end: [
      "Arrivo il prima possibile e recupero tutto con gli interessi.",
      "Prometto che oggi lavoro il doppio e mi lamento la metà.",
      "Da domani faccio finta di essere una persona puntuale, giuro.",
      "Se servono dettagli, ho un intero romanzo pronto all’uso.",
      "Oggi il ritardo è sfortunato, non intenzionale: recupero come si deve.",
      "Per farmi perdonare oggi prendo io le call più scomode.",
      "Segniamo questa giornata come esempio pratico di cosa evitare in futuro.",
      "Userò questo ritardo come motivazione per migliorare, appena smetto di rincorrere il tempo.",
      "Consideriamolo un test di pazienza che tu hai superato e io no.",
      "Porterò caffè, report e pentimento in parti uguali."
    ]
  },

  amici: {
    start: [
      "Lo so, sembro la persona peggiore del gruppo, ma",
      "Raga, vi chiedo un attimo di comprensione perché",
      "Vi voglio bene, quindi sarò sincero:",
      "Giuro che non è la solita scusa triste, ma",
      "So che dovevo esserci, però",
      "Ero prontissimo a uscire, poi",
      "La mia parte socievole ce l’ha messa tutta, ma",
      "Non voglio diventare l’amico fantasma, però oggi",
      "Stavo per scrivere 'arrivo', invece",
      "Ho aperto l’armadio per vestirmi e"
    ],
    reason: [
      "il divano mi ha guardato negli occhi e mi ha chiesto di non essere abbandonato",
      "la mia energia sociale è finita in riserva rossa già a metà giornata",
      "mi sono reso conto che oggi ho fatto finta di essere un adulto troppo a lungo",
      "la voglia di uscire è scesa sotto lo zero assoluto senza preavviso",
      "mi sono seduto 'un minuto' e il tempo ha deciso di evaporare",
      "il mio outfit aveva senso nella mia testa, meno nella realtà",
      "il mio corpo ha messo modalità risparmio energetico senza chiedere permesso",
      "la mia social battery si è spenta come un telefono vecchio al 3%",
      "ho iniziato a prepararmi e mi è crollata la motivazione mentre cercavo le calze",
      "ho premuto mentalmente 'rimanda a domani' sulla funzione essere presente"
    ],
    detail: [
      "e non voglio venire a fare la pianta grassa in un angolo del locale.",
      "e finirei per guardare il vuoto invece di guardare voi.",
      "e sarei il classico amico zombie che ride mezzo secondo dopo le battute.",
      "e mi conosci: quando sono così divento un NPC in background.",
      "e vi meritate una versione di me più viva, non in modalità schermata di blocco.",
      "e prima che lo chiediate: sì, anche il cervello ha messo modalità silenziosa.",
      "e non mi va di smorzare l’energia della serata con la mia faccia da lunedì.",
      "e sarei presente solo fisicamente, ma mentalmente in modalità buffering.",
      "e non voglio trasformare la vostra uscita in un documentario sulla stanchezza.",
      "e preferisco mancare oggi che venire a rovinare le vibrazioni del gruppo."
    ],
    end: [
      "Recuperiamo nei prossimi giorni, promesso, con birra e autoironia a carico mio.",
      "La prossima volta mi incateno al tavolo con voi, giuro.",
      "Vi autorizzo ufficialmente a prendermi in giro per questa cosa.",
      "Metto già in calendario una serata extra solo per farmi perdonare.",
      "Vi mando meme e vocali imbarazzanti come presenza spirituale.",
      "La prossima volta, se dico che non esco, potete venire a suonarmi al citofono.",
      "Mi impegno a non sparire per le prossime uscite, scritto e sottoscritto.",
      "Segniamo questa come quota di assenza mensile, poi torno operativo.",
      "Vi devo almeno due serate di fila con me in versione umana, non sonnolenta.",
      "Prometto che alla prossima non mi faccio fregare dalla combo divano + stanchezza."
    ]
  },

  amore: {
    start: [
      "Ok, prima che ti arrabbi, lascia che ti spieghi:",
      "Prometto che non è la solita scusa triste, ma",
      "So che suona sospetto, però",
      "Non voglio litigare, quindi vado dritto al punto:",
      "Ti giuro che non è perché non voglio vederti, ma",
      "Lo so che ti meriti qualcuno più organizzato di me, però",
      "Prima che partano i sospetti:",
      "Non prendertela con noi, ma con la giornata di oggi perché",
      "Ho un annuncio poco romantico ma sincero:",
      "Se ti dico la verità, mi prometti di non uccidermi subito?"
    ],
    reason: [
      "la mia giornata è esplosa in mille micro problemi tutti insieme",
      "il tempo oggi ha deciso di correre contro di noi, non con noi",
      "sono fisicamente stanchissimo e ho paura di essere solo mezza persona con te",
      "il caos che ho in testa non merita di travolgere anche te stasera",
      "se esco adesso ti porto solo la versione laggata di me stesso",
      "ho fatto troppo il forte e adesso il corpo sta presentando il conto",
      "sono rimasto intrappolato tra doveri, notifiche e imprevisti a raffica",
      "oggi mi sento più vicino a una batteria scarica che a un essere umano",
      "ho sottovalutato quanto mi avrebbe steso questa giornata",
      "ho passato il giorno in modalità sopravvivenza e non mi piace portarti solo gli avanzi di energia"
    ],
    detail: [
      "e tu meriti una versione di me sveglia, non che sbadiglia ogni 30 secondi.",
      "e preferisco rimandare piuttosto che stare insieme male e di fretta.",
      "e voglio vederti quando posso esserci davvero, non solo a metà.",
      "e non mi piace l’idea di trasformare il tempo con te in una checklist di impegni.",
      "e vorrei arrivare da te con la testa e il cuore, non solo col corpo stanco.",
      "e so che forse sembra una scusa, ma è proprio perché ci tengo che te lo dico.",
      "e non voglio appoggiarmi a te solo come antistress umano con le occhiaie.",
      "e vorrei che ogni volta che ci vediamo sia qualcosa da ricordare, non da sopportare.",
      "e non mi piace l’idea di presentarmi e parlar solo in monosillabi.",
      "e preferisco spostare di un giorno piuttosto che rovinare una serata nostra."
    ],
    end: [
      "Ti va se recuperiamo domani con più calma e più noi veri?",
      "Prometto di arrivare con più energia, più tempo e magari anche un dolce.",
      "Se ti arrabbi lo capisco, ma ci tengo davvero a fare le cose bene con te.",
      "Non è una fuga, è solo un pit stop per arrivare meglio da te.",
      "Ti mando un abbraccio virtuale, in attesa di quello vero fatto come si deve.",
      "Scrivimi pure cosa ne pensi, sono pronto a incassare e migliorare.",
      "Appena la giornata smette di picchiarmi, la prima cosa che voglio fare è vederti.",
      "Se reggi ancora un giorno, ti prometto che lo facciamo valere doppio.",
      "Ti devo una serata bella, senza fretta e soprattutto senza scuse.",
      "Grazie se hai voglia di avere pazienza anche oggi, non lo do per scontato."
    ]
  },

  famiglia: {
    start: [
      "Prometto che non lo faccio apposta, ma",
      "Lo so che sembra che vi eviti, però",
      "Non è che non vi voglio vedere, solo che",
      "Prima che parta il dibattito familiare:",
      "Giuro che non è mancanza di affetto, è solo organizzazione creativa perché",
      "Non arrabbiatevi subito, ascoltate un attimo:",
      "Vi voglio bene, ma oggi",
      "Non prendetela sul personale, perché",
      "Lo dico con affetto e un po’ di ansia:",
      "Non sono sparito, è solo che"
    ],
    reason: [
      "ho una giornata incastrata malissimo tra impegni e imprevisti",
      "mi sono reso conto all’ultimo di aver promesso troppe cose a troppe persone",
      "il tempo mi è scappato di mano in modo imbarazzante",
      "sono in ritardo con alcune cose che non posso più rimandare",
      "sto cercando di chiudere un po’ di caos prima di vedervi",
      "se esco ora lascio tutto a metà e poi mi ritrovo con il doppio dello stress",
      "la mia testa è un browser con quarantotto tab aperte e nessuna musica di sottofondo",
      "la giornata è partita storta e non si è ancora rimessa in carreggiata",
      "tra una cosa e l’altra è saltata completamente la mia pianificazione ideale",
      "non voglio arrivare da voi stanco e nervoso e rovinare l’atmosfera"
    ],
    detail: [
      "e preferisco venire quando posso essere presente davvero, non solo di passaggio.",
      "e non mi va di scaricare su di voi tutta la fatica della giornata.",
      "e vorrei che il tempo insieme fosse di qualità, non una corsa contro l’orologio.",
      "e non voglio trasformare una visita in un altro impegno da spuntare.",
      "e so che magari non sembra, ma lo faccio anche per rispetto verso di voi.",
      "e mi conoscete: se arrivo stanco divento irritabile a caso.",
      "e preferisco organizzarci meglio piuttosto che fare una comparsata distratta.",
      "e mi piacerebbe venire quando posso fermarmi davvero, non solo salutare e scappare.",
      "e non voglio farvi vedere solo la versione nervosa del mio carattere.",
      "e ci tengo a recuperare quando posso ascoltare e parlare con calma."
    ],
    end: [
      "Recuperiamo prestissimo, promesso, con calma e magari anche con dolce al seguito.",
      "Vi chiamo con calma più tardi così vi racconto meglio senza correre.",
      "Organizziamo già una nuova data e questa volta la proteggo sul serio.",
      "Tenetemi un posto al tavolo per la prossima, ci sarò.",
      "Non arrabbiatevi troppo: almeno non tutti insieme, uno alla volta.",
      "Vi devo un pranzo o una cena fatti come si deve, senza orologio.",
      "La prossima volta vengo con calma e magari resto di più per recuperare.",
      "Grazie se avete ancora pazienza con i miei tempi strani da adulto difettoso.",
      "Mi impegno a organizzarmi meglio per non dovervi chiedere un altro rinvio.",
      "Appena sopravvivo a questa giornata, la prima cosa che faccio è fissare quando vengo."
    ]
  },

  altro: {
    start: [
      "Lo so che fa ridere anche a me, ma",
      "Ti giuro che non è inventata, anche se sembra",
      "Sembra una scusa scritta da uno sceneggiatore annoiato, ma",
      "Ti devo una spiegazione bizzarra:",
      "Non è facile da dire con faccia seria, ma",
      "Senza giudicare, ti chiedo di credermi quando dico che",
      "Ti prego di non ridere subito perché",
      "Non succede mai, ma oggi",
      "Lo so, suona come una barzelletta, però",
      "Se ti dico cosa è successo non mi crederai, ma"
    ],
    reason: [
      "mi scade lo yogurt e devo controllare che vada tutto per il verso giusto",
      "ho messo a lavare una sola maglietta e ora sono emotivamente coinvolto nel suo ciclo di centrifuga",
      "ho promesso al mio cuscino una relazione stabile per almeno una sera",
      "stavo solo dando un’occhiata a un video e sono finito in un buco nero di contenuti inutili ma fondamentali",
      "ho iniziato a sistemare una cosa veloce e mi sono ritrovato nel mezzo di un trasloco interiore",
      "ho provato a fare multitasking e ho perso tutte le task, compresa quella di uscire",
      "ho messo il telefono in modalità silenziosa e poi ho silenziato anche il cervello",
      "ho deciso di essere produttivo proprio nell’unico momento in cui non conveniva",
      "ho aperto una notifica e mi sono ritrovato tre ore dopo a chiedermi che giorno fosse",
      "ho deciso di riordinare un cassetto e ora sto rivalutando tutta la mia vita"
    ],
    detail: [
      "e da lì il resto della giornata ha perso qualsiasi logica apparente.",
      "e da quel momento il tempo ha iniziato a funzionare con regole tutte sue.",
      "e quando ho guardato l’orologio ho capito che era troppo tardi per tornare una persona seria.",
      "e onestamente non so se ridere o piangere della mia gestione del tempo.",
      "e mi sono accorto troppo tardi che questa storia non regge, ma è la verità.",
      "e ammetto che se questa scusa fosse di qualcun altro, ci riderei sopra anch’io.",
      "e il peggio è che non è successo niente di eroico, solo disorganizzazione creativa.",
      "e a quel punto l’unica cosa sensata da fare era arrendermi alla giornata.",
      "e sì, lo so che suona come una sceneggiatura scartata, ma è successo sul serio.",
      "e la dignità ha deciso di uscire di casa senza di me."
    ],
    end: [
      "Quindi sì, oggi vincono il caos e lo yogurt.",
      "Prometto che la prossima volta proverò ad agire da adulto quasi responsabile.",
      "Se vuoi prendermi in giro, hai piena autorizzazione: me lo merito.",
      "Mi prendo tutte le battute che ne deriveranno, fa curriculum.",
      "Puoi usare questa storia contro di me in qualsiasi futura discussione.",
      "Consideriamola una lezione pratica di cosa NON fare mai più, in teoria.",
      "La prossima volta spero almeno di avere una scusa più credibile di questa.",
      "Per ora posso offrirti solo sincerità e autoironia, ma è tutto quello che ho.",
      "Segniamo questa storia come episodio pilota della mia serie 'decisioni discutibili'.",
      "Se non altro, ora abbiamo un aneddoto assurdo da raccontare un giorno ridendo."
    ]
  }
};

// Nomi categorie
const categoryNames = {
  lavoro: "Lavoro",
  amici: "Amici",
  amore: "Amore",
  famiglia: "Famiglia",
  altro: "Altro"
};

// ==========================
//  ELEMENTI DOM
// ==========================

const categoryTabs = document.querySelectorAll(".category-tab");
const excuseTextEl = document.getElementById("excuseText");
const excuseCategoryNameEl = document.getElementById("excuseCategoryName");
const btnGenerate = document.getElementById("btnGenerate");
const btnShortExcuse = document.getElementById("btnShortExcuse");
const btnLongExcuse = document.getElementById("btnLongExcuse");
const btnGenerateHero = document.getElementById("btnGenerateHero");
const btnHeroCycle = document.getElementById("btnHeroCycle");
const btnCopy = document.getElementById("btnCopy");
const btnCopyWithCategory = document.getElementById("btnCopyWithCategory");
const btnPanic = document.getElementById("btnPanic");
const statusRandomInfo = document.getElementById("statusRandomInfo");
const statTotalEl = document.getElementById("statTotal");
const statMostUsedEl = document.getElementById("statMostUsed");
const badgeLabelEl = document.getElementById("badgeLabel");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeToggleEmoji = document.getElementById("themeToggleEmoji");
const themeToggleText = document.getElementById("themeToggleText");
const fastModeToggle = document.getElementById("fastModeToggle");
const fastModeDot = document.getElementById("fastModeDot");
const fastModeLabel = document.getElementById("fastModeLabel");

// Sticky bar mobile
const mobileBtnGenerate = document.getElementById("mobileBtnGenerate");
const mobileBtnCycle = document.getElementById("mobileBtnCycle");
const mobileBtnCopy = document.getElementById("mobileBtnCopy");

// Scusa del giorno
const dailyTextEl = document.getElementById("dailyExcuseText");
const dailyMetaEl = document.getElementById("dailyExcuseMeta");
const dailyUseBtn = document.getElementById("dailyUseBtn");
const dailyNewBtn = document.getElementById("dailyNewBtn");

// Banner PWA
const pwaBanner = document.getElementById("pwaBanner");
const pwaHowBtn = document.getElementById("pwaHowBtn");
const pwaCloseBtn = document.getElementById("pwaCloseBtn");

let currentCategory = "lavoro";
let lastExcuseByCategory = {};
let statusTimeout = null;

// lengthMode: "auto" | "short" | "long"
let lengthMode = "auto";

// ==========================
//  RANDOM & GENERAZIONE
// ==========================

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function generateExcuseForCategory(categoryKey, mode = "auto") {
  const cat = excuseFragments[categoryKey];
  if (!cat) return "Errore nella matrice delle scuse. Riprova più tardi.";

  let attempt = 0;
  let result = "";
  const maxAttempts = 8;

  do {
    const s = cat.start[randomIndex(cat.start.length)];
    const r = cat.reason[randomIndex(cat.reason.length)];
    const d = cat.detail[randomIndex(cat.detail.length)];
    const e = cat.end[randomIndex(cat.end.length)];

    if (mode === "short") {
      result = r.charAt(0).toUpperCase() + r.slice(1) + ", " + e;
    } else if (mode === "long") {
      result = s + " " + r + ", " + d + " " + e;
    } else {
      result = s + " " + r + ", " + d + " " + e;
    }

    attempt++;
  } while (result === lastExcuseByCategory[categoryKey] && attempt < maxAttempts);

  lastExcuseByCategory[categoryKey] = result;
  return result;
}

function updateCategoryLabel() {
  excuseCategoryNameEl.textContent = categoryNames[currentCategory] || currentCategory;
}

// fastMode: se true, meno animazioni/scroll
let fastMode = false;

function renderNewExcuse(opts = { countAsStat: true }) {
  const text = generateExcuseForCategory(currentCategory, lengthMode);

  if (!fastMode) {
    excuseTextEl.classList.remove("visible");
    void excuseTextEl.offsetWidth;
    excuseTextEl.textContent = text;
    excuseTextEl.classList.add("visible");
  } else {
    excuseTextEl.textContent = text;
    excuseTextEl.classList.add("visible");
  }

  if (opts.countAsStat) {
    incrementStats(currentCategory);
  }
}

// ==========================
//  STATISTICHE + STATO (localStorage)
// ==========================

const STATS_KEY = "scusapronta_stats_v3";
const THEME_KEY = "scusapronta_theme_v1";
const DAILY_KEY = "scusapronta_daily_v1";
const PWA_KEY = "scusapronta_pwa_dismissed_v1";
const TIPS_KEY = "scusapronta_tips_v1";

function loadStats() {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) {
      return {
        total: 0,
        perCategory: { lavoro: 0, amici: 0, amore: 0, famiglia: 0, altro: 0 },
        lastCategory: "lavoro",
        lastGeneratedAt: null,
        fastMode: false
      };
    }
    const parsed = JSON.parse(raw);
    const base = {
      total: 0,
      perCategory: { lavoro: 0, amici: 0, amore: 0, famiglia: 0, altro: 0 },
      lastCategory: "lavoro",
      lastGeneratedAt: null,
      fastMode: false
    };
    const merged = Object.assign(base, parsed, {
      perCategory: Object.assign(base.perCategory, parsed.perCategory || {})
    });
    return merged;
  } catch (e) {
    console.error("Errore nel parsing delle stats:", e);
    return {
      total: 0,
      perCategory: { lavoro: 0, amici: 0, amore: 0, famiglia: 0, altro: 0 },
      lastCategory: "lavoro",
      lastGeneratedAt: null,
      fastMode: false
    };
  }
}

function saveStats(stats) {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error("Impossibile salvare stats:", e);
  }
}

let stats = loadStats();
fastMode = !!stats.fastMode;

function getMostUsedCategory() {
  let bestCat = null;
  let bestCount = 0;
  for (const key of Object.keys(stats.perCategory)) {
    const val = stats.perCategory[key] || 0;
    if (val > bestCount) {
      bestCount = val;
      bestCat = key;
    }
  }
  return bestCount > 0 ? { key: bestCat, count: bestCount } : null;
}

function getBadgeLabel(total) {
  if (total >= 200) return "Leggenda dell’assenza";
  if (total >= 100) return "Maestro della scusa";
  if (total >= 50) return "Atleta del ritardo";
  if (total >= 25) return "Professionista della fuga elegante";
  if (total >= 10) return "Apprendista della giustificazione";
  if (total >= 1) return "Novizio educato";
  return "Novizio educato";
}

function renderStats() {
  if (statTotalEl) {
    const label = `Scuse generate: ${stats.total}`;
    statTotalEl.querySelector("span:last-child").textContent = label;
  }
  if (statMostUsedEl) {
    const best = getMostUsedCategory();
    const label = best
      ? `Categoria top: ${categoryNames[best.key]} (${best.count})`
      : "Categoria top: –";
    statMostUsedEl.querySelector("span:last-child").textContent = label;
  }
  if (badgeLabelEl) {
    badgeLabelEl.textContent = `Livello scuse: ${getBadgeLabel(stats.total)}`;
  }
  updateFastModeUI();
}

// ==========================
//  GESTIONE FAST MODE
// ==========================

function updateFastModeUI() {
  if (!fastModeDot || !fastModeLabel) return;
  if (fastMode) {
    fastModeDot.classList.add("fast-mode-on");
    fastModeLabel.textContent = "Modalità veloce: ON";
  } else {
    fastModeDot.classList.remove("fast-mode-on");
    fastModeLabel.textContent = "Modalità veloce: OFF";
  }
}

if (fastModeToggle) {
  fastModeToggle.addEventListener("click", () => {
    fastMode = !fastMode;
    stats.fastMode = fastMode;
    saveStats(stats);
    updateFastModeUI();
    showTemporaryStatus(
      fastMode
        ? "Modalità veloce attivata: niente fronzoli, solo scuse."
        : "Modalità veloce disattivata: torna qualche effetto scenico.",
      false
    );
  });
}

// ==========================
//  EASTER EGG + CTA DISCRETE
// ==========================

function messageForTopCategory(catKey, count) {
  switch (catKey) {
    case "lavoro":
      return `La tua categoria top è "${categoryNames[catKey]}". Forse è il momento di cambiare mestiere... o di cambiare capo. (${count} scuse)`;
    case "amici":
      return `La tua categoria top è "${categoryNames[catKey]}". I tuoi amici iniziano a sospettare, sappi che ti stanno studiando. (${count} scuse)`;
    case "amore":
      return `La tua categoria top è "${categoryNames[catKey]}". Con calma: le scuse non sostituiscono il dialogo di coppia. (${count} scuse)`;
    case "famiglia":
      return `La tua categoria top è "${categoryNames[catKey]}". La famiglia ti ama, ma il gruppo WhatsApp è in allerta. (${count} scuse)`;
    case "altro":
      return `La tua categoria top è "${categoryNames[catKey]}". Sei ufficialmente creativo nelle situazioni imbarazzanti. (${count} scuse)`;
    default:
      return `Categoria top: ${categoryNames[catKey] || catKey} (${count}).`;
  }
}

function loadTipsState() {
  try {
    const raw = localStorage.getItem(TIPS_KEY);
    if (!raw) return { savedFavoriteTip: false, fastModeTip: false };
    const parsed = JSON.parse(raw);
    return Object.assign({ savedFavoriteTip: false, fastModeTip: false }, parsed);
  } catch {
    return { savedFavoriteTip: false, fastModeTip: false };
  }
}

function saveTipsState(tips) {
  try {
    localStorage.setItem(TIPS_KEY, JSON.stringify(tips));
  } catch (e) {
    console.error("Impossibile salvare tips:", e);
  }
}

let tipsState = loadTipsState();

function maybeShowTipsAndEasterEgg() {
  if (!statusRandomInfo) return;

  const total = stats.total;
  let message = null;

  if (total === 5 && !tipsState.savedFavoriteTip) {
    message =
      "Ti sta tornando utile? Salvalo nei preferiti (Ctrl+D o 'Aggiungi ai preferiti' nel browser).";
    tipsState.savedFavoriteTip = true;
    saveTipsState(tipsState);
  }

  if (!message && total === 10 && !tipsState.fastModeTip) {
    message =
      "Hai già generato 10 scuse. Se vuoi andare ancora più rapido, prova ad attivare la Modalità veloce.";
    tipsState.fastModeTip = true;
    saveTipsState(tipsState);
  }

  if (!message) {
    if (total === 25) {
      message = "Hai già generato 25 scuse. Stai diventando un professionista della fuga elegante.";
    } else if (total === 50) {
      message = "50 scuse generate. Valuta anche l’opzione 'dire la verità', ogni tanto.";
    } else if (total === 100) {
      message = "100 scuse. Complimenti, hai sbloccato il livello 'Ma sei serio?'.";
    } else if (total === 200) {
      message = "200 scuse: a questo punto devi scrivere un manuale di sopravvivenza sociale.";
    } else if (total > 0 && total % 30 === 0) {
      const best = getMostUsedCategory();
      if (best) {
        message = messageForTopCategory(best.key, best.count);
      }
    }
  }

  if (message) {
    statusRandomInfo.querySelector("span:last-child").textContent = message;
    statusRandomInfo.style.background = "rgba(0, 194, 168, 0.2)";
    statusRandomInfo.style.color = "#00423a";
    statusRandomInfo.style.transform = "translateY(-1px)";

    if (statusTimeout) clearTimeout(statusTimeout);
    statusTimeout = setTimeout(() => {
      statusRandomInfo.querySelector("span:last-child").textContent =
        "Random attivo: nessuna scusa si ripete in modo prevedibile.";
      statusRandomInfo.style.background = "rgba(255, 212, 71, 0.22)";
      statusRandomInfo.style.color = "#6b5600";
      statusRandomInfo.style.transform = "translateY(0)";
    }, 4000);
  }
}

function incrementStats(categoryKey) {
  stats.total += 1;
  if (!stats.perCategory[categoryKey]) stats.perCategory[categoryKey] = 0;
  stats.perCategory[categoryKey] += 1;
  stats.lastCategory = categoryKey;
  stats.lastGeneratedAt = Date.now();
  saveStats(stats);
  renderStats();
  maybeShowTipsAndEasterEgg();
  maybeShowPwaBanner();
}

// ==========================
//  STATUS TEMPORANEO GENERICO
// ==========================

function showTemporaryStatus(message, isError = false) {
  if (!statusRandomInfo) return;
  statusRandomInfo.querySelector("span:last-child").textContent = message;
  if (isError) {
    statusRandomInfo.style.background = "rgba(255, 75, 106, 0.06)";
    statusRandomInfo.style.color = "#a01c39";
  } else {
    statusRandomInfo.style.background = "rgba(255, 212, 71, 0.22)";
    statusRandomInfo.style.color = "#6b5600";
  }
  if (statusTimeout) clearTimeout(statusTimeout);
  statusTimeout = setTimeout(() => {
    statusRandomInfo.querySelector("span:last-child").textContent =
      "Random attivo: nessuna scusa si ripete in modo prevedibile.";
    statusRandomInfo.style.background = "rgba(255, 212, 71, 0.22)";
    statusRandomInfo.style.color = "#6b5600";
  }, 3300);
}

// ==========================
//  CAMBIO CATEGORIA
// ==========================

categoryTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    categoryTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentCategory = tab.getAttribute("data-category");
    updateCategoryLabel();
    renderNewExcuse();
  });
});

// Pulsanti lunghezza scusa
if (btnShortExcuse) {
  btnShortExcuse.addEventListener("click", () => {
    lengthMode = "short";
    renderNewExcuse();
    showTemporaryStatus("Modalità scusa breve: dritta al punto (più o meno).");
  });
}

if (btnLongExcuse) {
  btnLongExcuse.addEventListener("click", () => {
    lengthMode = "long";
    renderNewExcuse();
    showTemporaryStatus("Modalità scusa lunga: storia completa, con retroscena.");
  });
}

// Pulsante genera principale
btnGenerate.addEventListener("click", () => renderNewExcuse());

// Pulsante genera dalla hero
btnGenerateHero.addEventListener("click", () => {
  const mainCard = document.querySelector(".card-main");
  if (mainCard && !fastMode) {
    mainCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  renderNewExcuse();
});

// Pulsante cambio categoria dalla hero
const cycleOrder = ["lavoro", "amici", "amore", "famiglia", "altro"];
btnHeroCycle.addEventListener("click", () => {
  let idx = cycleOrder.indexOf(currentCategory);
  if (idx === -1) idx = 0;
  idx = (idx + 1) % cycleOrder.length;
  currentCategory = cycleOrder[idx];

  categoryTabs.forEach(t => {
    const cat = t.getAttribute("data-category");
    if (cat === currentCategory) t.classList.add("active");
    else t.classList.remove("active");
  });

  updateCategoryLabel();
  renderNewExcuse();

  const mainCard = document.querySelector(".card-main");
  if (mainCard && !fastMode) {
    mainCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

// ==========================
//  COPIA
// ==========================

function getCurrentExcuseText() {
  return excuseTextEl.textContent.trim();
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showTemporaryStatus("Scusa copiata negli appunti. Ora tocca a te recitarla.");
  } catch (e) {
    console.error("Clipboard error", e);
    showTemporaryStatus("Impossibile copiare automaticamente, copia manualmente.", true);
  }
}

btnCopy.addEventListener("click", () => {
  const excuse = getCurrentExcuseText();
  if (!excuse) {
    renderNewExcuse({ countAsStat: false });
    setTimeout(() => copyToClipboard(getCurrentExcuseText()), 160);
  } else {
    copyToClipboard(excuse);
  }
});

btnCopyWithCategory.addEventListener("click", () => {
  const excuse = getCurrentExcuseText() || generateExcuseForCategory(currentCategory, lengthMode);
  const catLabel = categoryNames[currentCategory] || currentCategory;
  const formatted =
    "[" +
    catLabel +
    "] " +
    excuse +
    " (Scusa generata da ScusaPronta: https://scusapronta.github.io/misterscusa/ )";
  copyToClipboard(formatted);
});

// Modalità panico
btnPanic.addEventListener("click", () => {
  const excuse = generateExcuseForCategory(currentCategory, "long");
  const panicWrap = "Versione modalità panico attivata:\n\n" + excuse;
  if (!fastMode) {
    excuseTextEl.classList.remove("visible");
    void excuseTextEl.offsetWidth;
    excuseTextEl.textContent = panicWrap;
    excuseTextEl.classList.add("visible");
  } else {
    excuseTextEl.textContent = panicWrap;
    excuseTextEl.classList.add("visible");
  }
  incrementStats(currentCategory);
  showTemporaryStatus("Modalità panico: scusa extra carica attivata.");
});

// ==========================
//  CONDIVISIONE
// ==========================

function buildShareText() {
  const catLabel = categoryNames[currentCategory] || currentCategory;
  const excuse = getCurrentExcuseText() || generateExcuseForCategory(currentCategory, lengthMode);
  return (
    "[" +
    catLabel +
    "] " +
    excuse +
    "\n\nScusa generata da ScusaPronta: https://scusapronta.github.io/misterscusa/"
  );
}

function buildShareUrlFor(platform) {
  const text = encodeURIComponent(buildShareText());
  const url = encodeURIComponent("https://scusapronta.github.io/misterscusa/");
  switch (platform) {
    case "whatsapp":
      return "https://wa.me/?text=" + text;
    case "telegram":
      return "https://t.me/share/url?url=" + url + "&text=" + text;
    case "facebook":
      return "https://www.facebook.com/sharer/sharer.php?u=" + url;
    case "twitter":
      return "https://twitter.com/intent/tweet?text=" + text;
    case "email":
      return "mailto:?subject=" + encodeURIComponent("Scusa epica generata per te") + "&body=" + text;
    default:
      return "https://scusapronta.github.io/misterscusa/";
  }
}

document.querySelectorAll(".share-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    const platform = btn.getAttribute("data-share");
    const text = buildShareText();
    const pageUrl = "https://scusapronta.github.io/misterscusa/";

    if (platform === "link") {
      copyToClipboard(pageUrl);
      return;
    }

    if (navigator.share && (platform === "whatsapp" || platform === "telegram")) {
      try {
        await navigator.share({
          title: "ScusaPronta",
          text,
          url: pageUrl
        });
        return;
      } catch (e) {
        // fallback sotto
      }
    }

    const shareUrl = buildShareUrlFor(platform);
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  });
});

// ==========================
//  DARK MODE
// ==========================

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    themeToggleEmoji.textContent = "☀️";
    themeToggleText.textContent = "Light mode";
  } else {
    document.body.classList.remove("dark");
    themeToggleEmoji.textContent = "🌙";
    themeToggleText.textContent = "Dark mode";
  }
}

function loadTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") {
      return saved;
    }
  } catch (e) {
    console.error("Errore nel leggere il tema:", e);
  }
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

let currentTheme = loadTheme();
applyTheme(currentTheme);

themeToggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(currentTheme);
  try {
    localStorage.setItem(THEME_KEY, currentTheme);
  } catch (e) {
    console.error("Impossibile salvare il tema:", e);
  }
});

// ==========================
//  STICKY BAR MOBILE HANDLERS
// ==========================

if (mobileBtnGenerate) {
  mobileBtnGenerate.addEventListener("click", () => {
    renderNewExcuse();
  });
}

if (mobileBtnCycle) {
  mobileBtnCycle.addEventListener("click", () => {
    let idx = cycleOrder.indexOf(currentCategory);
    if (idx === -1) idx = 0;
    idx = (idx + 1) % cycleOrder.length;
    currentCategory = cycleOrder[idx];

    categoryTabs.forEach(t => {
      const cat = t.getAttribute("data-category");
      if (cat === currentCategory) t.classList.add("active");
      else t.classList.remove("active");
    });

    updateCategoryLabel();
    renderNewExcuse();
  });
}

if (mobileBtnCopy) {
  mobileBtnCopy.addEventListener("click", () => {
    const excuse = getCurrentExcuseText();
    if (!excuse) {
      renderNewExcuse({ countAsStat: false });
      setTimeout(() => copyToClipboard(getCurrentExcuseText()), 160);
    } else {
      copyToClipboard(excuse);
    }
  });
}

// ==========================
//  SCUSA DEL GIORNO
// ==========================

function loadDaily() {
  try {
    const raw = localStorage.getItem(DAILY_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveDaily(daily) {
  try {
    localStorage.setItem(DAILY_KEY, JSON.stringify(daily));
  } catch (e) {
    console.error("Impossibile salvare scusa del giorno:", e);
  }
}

function todayString() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function generateDailyExcuse() {
  const cats = Object.keys(excuseFragments);
  const cat = cats[randomIndex(cats.length)];
  const text = generateExcuseForCategory(cat, "long");
  return {
    date: todayString(),
    category: cat,
    text
  };
}

function renderDailyExcuse(daily) {
  if (!dailyTextEl || !dailyMetaEl) return;
  dailyTextEl.textContent = daily.text;
  const catLabel = categoryNames[daily.category] || daily.category;
  dailyMetaEl.textContent = `Categoria: ${catLabel} · aggiornata il ${daily.date}`;
}

let dailyState = loadDaily();

function ensureDailyExcuse() {
  const today = todayString();
  if (!dailyState || dailyState.date !== today) {
    dailyState = generateDailyExcuse();
    saveDaily(dailyState);
  }
  renderDailyExcuse(dailyState);
}

if (dailyUseBtn) {
  dailyUseBtn.addEventListener("click", () => {
    if (!dailyState) {
      dailyState = generateDailyExcuse();
      saveDaily(dailyState);
    }
    currentCategory = dailyState.category || "altro";
    categoryTabs.forEach(t => {
      const cat = t.getAttribute("data-category");
      if (cat === currentCategory) t.classList.add("active");
      else t.classList.remove("active");
    });
    updateCategoryLabel();
    excuseTextEl.textContent = dailyState.text;
    excuseTextEl.classList.add("visible");
    incrementStats(currentCategory);
    showTemporaryStatus("Scusa del giorno applicata al generatore.");
  });
}

if (dailyNewBtn) {
  dailyNewBtn.addEventListener("click", () => {
    dailyState = generateDailyExcuse();
    saveDaily(dailyState);
    renderDailyExcuse(dailyState);
    showTemporaryStatus("Nuova scusa del giorno generata.");
  });
}

// ==========================
//  BANNER "AGGIUNGI ALLA HOME"
// ==========================

function hasDismissedPwaBanner() {
  try {
    return localStorage.getItem(PWA_KEY) === "1";
  } catch {
    return false;
  }
}

function dismissPwaBanner() {
  try {
    localStorage.setItem(PWA_KEY, "1");
  } catch (e) {
    console.error("Impossibile salvare dismiss PWA:", e);
  }
  if (pwaBanner) pwaBanner.style.display = "none";
}

function isMobileLike() {
  return window.innerWidth <= 768;
}

function maybeShowPwaBanner() {
  if (!pwaBanner) return;
  if (hasDismissedPwaBanner()) return;
  if (!isMobileLike()) {
    pwaBanner.style.display = "none";
    return;
  }
  if (stats.total >= 5) {
    pwaBanner.style.display = "flex";
  }
}

if (pwaCloseBtn) {
  pwaCloseBtn.addEventListener("click", () => {
    dismissPwaBanner();
  });
}

if (pwaHowBtn) {
  pwaHowBtn.addEventListener("click", () => {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent || "");
    const msg = isIOS
      ? "Su iPhone/iPad: tocca l’icona Condividi nel browser, poi 'Aggiungi alla schermata Home'."
      : "Su Android: apri il menu del browser (⋮) e scegli 'Aggiungi alla schermata Home'.";
    showTemporaryStatus(msg, false);
  });
}

// ==========================
//  INIZIALIZZAZIONE
// ==========================

(function init() {
  Math.random();

  if (stats.lastCategory && categoryNames[stats.lastCategory]) {
    currentCategory = stats.lastCategory;
    categoryTabs.forEach(t => {
      const cat = t.getAttribute("data-category");
      if (cat === currentCategory) t.classList.add("active");
      else t.classList.remove("active");
    });
  }

  updateCategoryLabel();
  renderStats();
  ensureDailyExcuse();
  renderNewExcuse();
  maybeShowPwaBanner();
})();
