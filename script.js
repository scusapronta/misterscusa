// ==========================
//  DATABASE SCUSE (COMBINABILE, ESTESO)
// ==========================

const excuseFragments = {
  lavoro: {
    start: [
      "Giuro che stavo arrivando, ma",
      "Allora, il punto è che",
      "Ti dico la verità:",
      "Piccolo aggiornamento sulla mia puntualità:",
      "Lo so che suona male, ma",
      "Stavo partendo in orario, solo che",
      "Mi ero organizzato benissimo, finché",
      "La mia intenzione era essere in anticipo, però",
      "Non è colpa mia (credo), perché",
      "Vorrei dire che è colpa del traffico, ma",
      "Sono uscito di casa con le migliori intenzioni, ma",
      "Avevo impostato tutto perfettamente, tuttavia",
      "Nonostante tre sveglie e un caffè,",
      "Mi ero persino vestito in anticipo, solo che",
      "Ho provato a essere una persona puntuale, ma"
    ],
    reason: [
      "il treno ha deciso di fermarsi a caso in mezzo al nulla",
      "il bus sembrava in sciopero personale",
      "Google Maps mi ha mandato letteralmente nel lato sbagliato della città",
      "il vicino ha deciso di usare il trapano alle 7 di mattina",
      "il caffè ha fatto più danni che benefici",
      "la sveglia ha suonato, ma solo dentro il mio cuore",
      "il mio pc ha deciso di aggiornarsi proprio quando dovevo uscire",
      "il cane ha rubato una scarpa e ho dovuto negoziare",
      "il gatto ha pensato fosse il momento giusto per sdraiarsi sulla tastiera",
      "il condominio ha organizzato un concerto di rumori improvvisati",
      "il mio router ha pensato fosse ora di un reset spirituale",
      "la caldaia ha scelto oggi per avere una crisi esistenziale",
      "il citofono ha suonato tre volte di fila per pacchi non miei",
      "il mio cervello ha confuso l’ora di ingresso con l’ora di uscita",
      "ho sbagliato clamorosamente fuso orario mentale",
      "un misterioso ingorgo ha bloccato la strada più semplice",
      "il parcheggio ha deciso di diventare un miraggio",
      "un temporale random ha rallentato tutto il mondo tranne l’orologio",
      "il mio outfit ha fatto crashare l’autostima e ho dovuto ricominciare da capo",
      "ho perso cinque minuti qui, dieci lì, ed è diventata un’ora"
    ],
    detail: [
      "e ho dovuto capire se fossi ancora nel 2025 o in un universo parallelo.",
      "e da lì è iniziata una catena di eventi degna di una serie TV.",
      "e da quel momento la logica ha smesso di avere senso.",
      "e sistemare la situazione ha richiesto più tempo del previsto.",
      "e se ti mando le prove penserai che sia un meme.",
      "e mi ci è voluto un po’ per risolvere il casino.",
      "e ho capito che l’universo oggi non gioca dalla mia parte.",
      "e da lì il tempo ha iniziato a correre più veloce di me.",
      "e ogni volta che provavo a recuperare succedeva un imprevisto nuovo.",
      "e ovviamente tutto questo è capitato proprio oggi.",
      "e a quel punto recuperare la puntualità era matematicamente impossibile.",
      "e credo di aver sbloccato un nuovo livello di sfiga logistica.",
      "e ogni tentativo di accelerare ha solo peggiorato la situazione.",
      "e mi sono ritrovato a correre dietro all’orologio senza successo.",
      "e più cercavo di sbrigarmi, più il mondo rallentava.",
      "e giuro che neanche in un film sarebbe credibile.",
      "e penso di aver perso ufficialmente il controllo della tabella di marcia.",
      "e non saprei neanche da dove iniziare a raccontare tutto.",
      "e la cronologia degli eventi sembra scritta da un comico.",
      "e sono arrivato al punto di ridere per non piangere."
    ],
    end: [
      "Arrivo il prima possibile, promesso.",
      "Recupero tutto, anche se oggi sembra una missione impossibile.",
      "Giuro che non è pigrizia, è solo sfiga organizzata.",
      "Se servono dettagli, ho un intero romanzo da raccontare.",
      "La prossima volta metto la sveglia anche al frigorifero.",
      "Da domani divento una persona puntuale, o almeno ci provo.",
      "Prometto che rientro nelle grazie del karma lavorando extra.",
      "Se può aiutare, oggi porto anche la mia coscienza con me.",
      "Per farmi perdonare oggi faccio anche le call difficili.",
      "Oggi la mia produttività parte in ritardo, ma poi recupera.",
      "Segno questa giornata come esempio di cosa non fare più.",
      "Userò questo ritardo come motivazione per migliorare (domani).",
      "La mia puntualità oggi è in beta, ma si aggiornerà.",
      "Consideriamolo un test di pazienza, superato da te.",
      "Porterò caffè, report e pentimento in parti uguali."
    ]
  },
  amici: {
    start: [
      "Lo so, sembro la persona peggiore del gruppo, ma",
      "Raga, non odiatemi, però",
      "Vi voglio bene, quindi sarò sincero:",
      "Vi chiedo perdono in anticipo perché",
      "Giuro che non è una scusa cheap, ma",
      "So che dovevo esserci, però",
      "Ero prontissimo ad uscire, poi",
      "La mia parte sociale ce l’ha messa tutta, ma",
      "Non voglio diventare il friend tossico, però",
      "Appena ho messo un piede fuori casa",
      "Stavo per scrivere 'arrivo', invece",
      "La versione socievole di me oggi",
      "Ho aperto l’armadio per vestirmi e",
      "Vi stavo per dire 'ci sono', quando",
      "Mi ero già immaginato la serata, ma"
    ],
    reason: [
      "il divano mi ha guardato negli occhi e mi ha chiesto di restare",
      "il mio livello di energia sociale è finito al -3",
      "ho realizzato che oggi ho fatto finta di essere un adulto per troppe ore",
      "il meteo interno ha segnato pigrizia con possibilità di sonno",
      "ho iniziato a prepararmi e ho perso la motivazione cercando le calze",
      "il mio outfit ha smesso di avere senso appena l’ho indossato",
      "la mia mente ha premuto alt+f4 sulla modalità uscire",
      "è partita una combo letale tra fame, stanchezza e noia",
      "il mio corpo ha deciso che oggi è modalità risparmio energetico",
      "ho avuto un improvviso bisogno di non vedere nessun essere umano",
      "la mia voglia di uscire è scesa sotto lo zero assoluto",
      "la mia social battery si è spenta senza preavviso",
      "mi sono seduto 'un minuto' e il tempo è evaporato",
      "mi è partita la modalità non-disturbare sulla vita reale",
      "mi sono ricordato di non aver avuto un giorno off mentale da settimane"
    ],
    detail: [
      "e onestamente non voglio rovinare la serata col mio mood da panda stanco.",
      "e finirei a fare la pianta grassa in un angolo del locale.",
      "e non credo di avere la faccia adatta per fingere entusiasmo credibile.",
      "e la mia batteria sociale ha bisogno di un reset totale.",
      "e l’unica cosa che il mio cervello supporta è tuta e serie TV.",
      "e rischierei di addormentarmi sul tavolo a metà frase.",
      "e non voglio essere quella persona che sta lì e guarda il vuoto.",
      "e l’unico contatto umano che reggo oggi è quello col cuscino.",
      "e penso che il mondo sia più sicuro se resto sul divano.",
      "e se esco in queste condizioni divento un meme vivente.",
      "e vi meritate una versione di me più viva, non in modalità zombie.",
      "e sarebbe come portare un NPC al vostro tavolo.",
      "e non voglio trasformare la vostra serata in un documentario sulla stanchezza.",
      "e preferisco mancare oggi che smorzare l’energia del gruppo.",
      "e rischierei di rispondere a monosillabi tutta la sera."
    ],
    end: [
      "Recuperiamo nei prossimi giorni, promesso, birra inclusa.",
      "La prossima volta offro io, così bilanciamo il karma.",
      "Non cancellatemi dal gruppo, vi prego.",
      "Metto già in calendario una serata extra per farmi perdonare.",
      "Resto umano, solo con Wi-Fi e pigiama.",
      "Vi mando vocali imbarazzanti come pegno.",
      "Vi devo almeno due serate di fila per rimediare.",
      "Vi autorizzo a rinfacciarmelo alla prossima occasione.",
      "Faccio ammenda con cibo, tanto cibo.",
      "Vi mando meme tutta la sera in segno di presenza spirituale.",
      "Metto un promemoria solo per voi, giuro.",
      "La prossima volta se non vengo potete venire a prendermi da casa.",
      "Vi lascio carta bianca per prendermi in giro.",
      "Mettiamo data fissa, senza possibilità di forfait.",
      "Mi impegno ufficialmente a non sparire per le prossime due uscite."
    ]
  },
  amore: {
    start: [
      "Ok, prima che ti arrabbi, lascia che ti spieghi:",
      "Prometto che non è la solita scusa, ma",
      "So che sembra sospetto, però",
      "Non voglio litigare, quindi te lo dico subito:",
      "Ti giuro che non è perché non voglio vederti, ma",
      "Lo so che ti meriti qualcuno più organizzato di me, però",
      "Prima che pensi male:",
      "Non prendertela con me, ma con il destino perché",
      "Ho un annuncio poco romantico:",
      "Se ti dico la verità, non ti arrabbi troppo, vero?",
      "Ho passato tutta la giornata pensando di vederti, ma",
      "La mia testa e il mio corpo oggi non collaborano, perché",
      "Ti scrivo con affetto e un po’ di senso di colpa:",
      "Vorrei dirti che è tutto sotto controllo, ma",
      "Ti devo una spiegazione da adulto, ma con anima stanca:"
    ],
    reason: [
      "la mia giornata è esplosa in mille micro problemi tutti insieme",
      "il tempo oggi ha deciso di essere contro di noi",
      "sono fisicamente distrutto e ho paura di essere solo metà persona con te",
      "il caos che ho in testa non merita di investirti",
      "se esco adesso rischio di portarti solo la versione laggata di me stesso",
      "sono talmente stanco che potrei addormentarmi mentre mi guardi negli occhi",
      "ho una serie di cose urgenti da chiudere che non spostano, ma stressano",
      "il mio cervello ha deciso che oggi è manutenzione straordinaria",
      "non voglio vederti di corsa e con l’ansia addosso",
      "se ci vediamo ora, parlo solo in buffering",
      "ho fatto troppo il forte e ora il corpo mi presenta il conto",
      "sono rimasto intrappolato tra doveri, notifiche e imprevisti",
      "oggi mi sento più vicino a una batteria scarica che a un essere umano",
      "ho sottovalutato quanto mi avrebbe steso questa giornata",
      "non voglio trascinare fino a te tutta questa stanchezza"
    ],
    detail: [
      "e tu meriti una versione di me che non sbadiglia ogni 30 secondi.",
      "e preferisco rimandare piuttosto che stare insieme male.",
      "e vorrei vederti quando posso davvero essere presente, non solo fisicamente.",
      "e non voglio trasformare il tempo con te in una checklist.",
      "e preferisco arrivare da te con la testa e il cuore, non solo con il corpo.",
      "e voglio che quando ci vediamo sia un momento bello, non un’aggiunta caotica alla giornata.",
      "e so che forse non sembra, ma lo faccio proprio perché ci tengo.",
      "e non mi va di farti vivere la mia giornata in slow motion.",
      "e non voglio appoggiarmi a te solo come antistress umano.",
      "e vorrei che ogni volta che ci vediamo sia qualcosa da ricordare, non da sopportare.",
      "e non mi piace l’idea di vederti e sentirmi ancora in modalità sopravvivenza.",
      "e vorrei poter arrivare da te con un minimo di energia in più.",
      "e se ti vedo, voglio poterti ascoltare davvero, non solo annuire.",
      "e preferisco spostare di un giorno che rovinare una serata nostra.",
      "e non voglio che ti sembri che ti stia dando solo gli avanzi del mio tempo."
    ],
    end: [
      "Ti va se recuperiamo domani con più calma e più noi?",
      "Prometto di compensare con una versione di me al 110%.",
      "Se vuoi arrabbiarti lo capisco, ma ci tengo davvero a noi.",
      "Non è una fuga, è solo un pit stop per arrivare meglio da te.",
      "Ti mando un abbraccio virtuale, in attesa di quello vero.",
      "Scrivimi pure tutto quello che pensi, ci sto.",
      "Nel dubbio, mi sto già organizzando per il recupero ufficiale.",
      "Non ti sto evitando, sto solo cercando di arrivare da te meglio di così.",
      "Se reggi ancora un giorno, ti prometto che ne varrà la pena.",
      "Ti devo una serata bella, senza fretta e senza scuse.",
      "Mettiamoci d’accordo per quando posso essere più presente davvero.",
      "Considera questa una pausa tecnica per tornare in forma.",
      "La prossima volta vengo con energie, tempo e magari anche dolci.",
      "Appena riesco a respirare meglio, la prima cosa che faccio è vederti.",
      "Grazie se hai voglia di avere pazienza anche oggi."
    ]
  },
  famiglia: {
    start: [
      "Prometto che non lo faccio apposta, ma",
      "Lo so che sembra che vi eviti, però",
      "Non è che non vi voglio vedere, solo che",
      "Prima che parta il dibattito familiare:",
      "Giuro che non è ingratitudine, è solo organizzazione pessima perché",
      "Non arrabbiatevi subito, ascoltate:",
      "Vi voglio bene, ma oggi",
      "Non prendetela sul personale, perché",
      "Lo dico con affetto e un po’ di ansia:",
      "Non sono sparito, è solo che",
      "Vi assicuro che non è una fuga dalla famiglia, ma",
      "Vi penso, anche se oggi",
      "Non voglio sembrare quello che non ha mai tempo, ma",
      "Vi chiedo solo un po’ di comprensione perché",
      "Non so come dirvelo bene, ma"
    ],
    reason: [
      "ho una giornata incastrata malissimo tra impegni e imprevisti",
      "mi sono reso conto all’ultimo che ho sovrastimato le mie energie",
      "il tempo mi è scappato di mano in modo imbarazzante",
      "sono in ritardo con mille cose che non posso più rimandare",
      "sto cercando di chiudere alcune cose importanti prima di vedervi",
      "se esco ora lascio tutto a metà e peggioro solo il caos",
      "la mia testa è un browser con 48 tab aperte e nessuna musica",
      "la giornata è partita storta e non si è ancora raddrizzata",
      "tra una cosa e l’altra è saltata completamente la mia pianificazione",
      "non voglio arrivare da voi stanco e nervoso",
      "ho promesso troppe cose a troppe persone oggi",
      "il cervello è in modalità 'sopravvivere', non 'spostarsi'",
      "sono in ritardo con cose pratiche che devo assolutamente sistemare",
      "sono arrivato al punto di parlare da solo per organizzarmi",
      "sto cercando di mettere ordine nel caos prima di farmi vedere"
    ],
    detail: [
      "e non mi va di portarvi solo la versione stremata di me.",
      "e preferisco venire quando posso essere presente davvero.",
      "e voglio evitare di arrivare nervoso e scaricare tutto su di voi.",
      "e vorrei che il tempo insieme fosse di qualità, non solo di presenza.",
      "e non mi piace vedervi quando sono con la testa altrove.",
      "e non voglio trasformare una visita in un altro impegno da spuntare.",
      "e preferisco organizzarmi meglio per la prossima volta.",
      "e voglio che quando vengo sia un momento bello, non di corsa.",
      "e preferisco recuperare in modo decente, non al volo.",
      "e so che magari non sembra, ma lo faccio anche per rispetto.",
      "e non voglio che vi arrivi solo la versione nervosa del mio carattere.",
      "e ci tengo a vedervi quando posso ascoltare e parlare con calma.",
      "e non vorrei mettermi lì a lamentarmi tutta la visita.",
      "e preferisco rinviare piuttosto che arrivare e guardare l’orologio ogni cinque minuti.",
      "e voglio evitare di sembrare presente col corpo ma assente con la testa."
    ],
    end: [
      "Recuperiamo prestissimo, promesso.",
      "Vi chiamo con calma più tardi, così vi racconto meglio.",
      "Organizziamo già una nuova data e stavolta la proteggo davvero.",
      "Tenetemi un posto al tavolo la prossima volta.",
      "Non arrabbiatevi troppo, almeno non tutti insieme.",
      "Vi mando un messaggio più lungo dopo per spiegare meglio.",
      "Vi devo un pranzo/cena fatti come si deve.",
      "La prossima volta porto io il dolce in segno di pace.",
      "Mettiamo già a calendario una nuova visita, senza imprevisti.",
      "Vi voglio bene anche se oggi sembro irreperibile.",
      "Grazie se avete ancora pazienza con i miei tempi strani.",
      "Cerco di organizzarmi meglio per non doverlo dire di nuovo.",
      "La prossima volta vengo con calma e magari resto di più.",
      "Vi aggiorno appena sopravvivo a questa giornata.",
      "Non è mancanza di affetto, è solo mancanza di ore nel giorno."
    ]
  },
  altro: {
    start: [
      "Lo so che fa ridere anche a me, ma",
      "Ti giuro che non è inventata, però",
      "Sembra una scusa, ma è quasi vero che",
      "Ti devo una spiegazione bizzarra:",
      "Non è facile da dire con faccia seria, ma",
      "Senza giudicare, ti chiedo di credermi quando dico che",
      "Ti prego di non ridere subito perché",
      "Non succede mai, ma oggi",
      "Lo so, suona come una barzelletta, però",
      "Se ti dico cosa è successo non mi crederai, ma",
      "La situazione è così assurda che",
      "Esiste una minuscola possibilità che tu mi creda quando dico che",
      "Giuro che se fosse successo a qualcun altro riderei anche io,"
    ],
    reason: [
      "sono rimasto bloccato a parlare con il vicino complottista per mezz’ora",
      "ho aperto un cassetto a caso e ne è uscito il 2010",
      "mi sono messo a sistemare una cosa e ho risistemato mezza casa",
      "ho deciso di aggiornare 'un attimo' una cosa al pc e sono sparite due ore",
      "mi sono perso in un loop di notifiche senza fine",
      "ho iniziato a rispondere ai messaggi arretrati e ne sono spuntati il triplo",
      "ho sbagliato chat e ho dovuto gestire il disagio per qualche minuto",
      "mi sono fissato a cercare una cosa che non esisteva più",
      "mi sono ritrovato a fare ordine nei pensieri invece che nella stanza",
      "ho aperto un vecchio file e ho iniziato a riscrivere mezzo mondo"
    ],
    detail: [
      "e da lì il concetto di tempo ha iniziato a perdere significato.",
      "e non saprei neanche spiegarti come ci sono arrivato.",
      "e mi sono reso conto tardi che stavo vivendo una side quest non richiesta.",
      "e in tutto questo nessuno mi ha fermato.",
      "e onestamente ho riso da solo per non piangere.",
      "e più cercavo di tornare al punto di partenza, più mi allontanavo.",
      "e mi è sembrato troppo tardi per fingere normalità.",
      "e a quel punto era impossibile far finta di niente.",
      "e quando ho guardato l’orologio ho pensato fosse un bug.",
      "e sono rimasto qualche secondo a fissare il vuoto in silenzio."
    ],
    end: [
      "Quindi sì, sono in ritardo per motivi difficilmente spiegabili.",
      "Lo so, sembra una sceneggiatura, ma è la cronaca fedele.",
      "Se vuoi non ci credere, ma almeno sappi che mi impegno.",
      "Ti autorizzo a raccontare questa storia ad altri come esempio.",
      "Prometto che la prossima volta scelgo una scusa meno surreale.",
      "Possiamo considerarla formazione avanzata in gestione del caos.",
      "Segniamola come episodio pilota e non come abitudine.",
      "La prossima volta arrivo in anticipo, giusto per compensare.",
      "Per farmi perdonare oggi accetto qualsiasi quantità di prese in giro.",
      "Se non altro, ora hai una storia strana da sentire."
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

// ELEMENTI DOM
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
const statBadgeEl = document.getElementById("statBadge");
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

// Stato globale
let currentCategory = "lavoro";
let lastExcuseByCategory = {};
let statusTimeout = null;
let lengthMode = "auto";
let fastMode = false;
// ==========================
//  MODALITÀ ASSURDA (EASTER EGG)
// ==========================

const absurdFragments = {
  start: [
    "Non ridere, ma",
    "So che sembra impossibile, però",
    "Ti giuro che non l’avrei mai detto, ma",
    "Sembra una storia inventata, però",
    "Con tutta la sincerità del mondo:",
    "Ti prego di credermi quando ti dico che",
    "Lo so che suona surreale, ma",
    "Nemmeno Netflix avrebbe osato tanto, ma",
    "Se ti dico cosa è successo, giuro che",
    "Questa è fuori scala anche per me, ma"
  ],
  reason: [
    "sono stato rapito da un tutorial su YouTube durato tre ore",
    "il mio frigorifero ha iniziato a fare rumori di protesta sindacale",
    "il mio gatto ha dichiarato sciopero emotivo e ho dovuto mediare",
    "la sedia ha deciso di tenermi in ostaggio in modalità comfort estremo",
    "mi sono perso leggendo i commenti sotto un post completamente inutile",
    "Alexa ha deciso che oggi dovevamo ridiscutere il nostro rapporto",
    "il Wi-Fi ha chiesto una pausa di riflessione proprio ora",
    "ho scoperto un cassetto che non aprivo dal 2010 e ne sono uscito cambiato",
    "una notifica ha aperto un tunnel spazio-temporale di scroll infinito",
    "ho iniziato a riordinare 'un attimo' ed è diventato un trasloco emotivo"
  ],
  detail: [
    "e a quel punto la linea tra realtà e meme si è completamente annullata.",
    "e sinceramente non so più se vivo in una sit-com o nella vita reale.",
    "e da lì è stato tutto un susseguirsi di scelte discutibili.",
    "e onestamente non ho ancora elaborato cosa sia successo davvero.",
    "e mi sono reso conto troppo tardi che il tempo non stava collaborando.",
    "e quando ho guardato l’orologio ho pensato fosse uno scherzo.",
    "e credo che questa storia mi perseguiterà a lungo.",
    "e non saprei da dove iniziare per spiegare il caos.",
    "e il mio senso della realtà ha chiesto ufficialmente le ferie.",
    "e non ho ancora deciso se ridere o cambiare identità."
  ],
  end: [
    "Quindi sì, sono in ritardo anche con la logica.",
    "Prometto che la prossima volta scelgo una scusa meno vera e più credibile.",
    "Se vuoi ridere di me, hai la mia benedizione.",
    "Ti autorizzo a usare questa storia contro di me in eterno.",
    "Consideriamola formazione avanzata in gestione del caos.",
    "Segniamola come episodio pilota della mia serie mentale.",
    "La prossima volta spero almeno di avere una storia più normale.",
    "Per ora posso solo offrire trasparenza e un po’ di autoironia.",
    "Mettiamola così: almeno non ti annoi.",
    "Se ti sembra troppo assurdo, pensa che io l’ho vissuta davvero."
  ]
};

let absurdMode = false;
let absurdClickCount = 0;
let absurdClickTimer = null;

function toggleAbsurdMode() {
  absurdMode = !absurdMode;
  if (absurdMode) {
    showTemporaryStatus("Modalità assurda attivata: le scuse entrano in fase surreale.");
  } else {
    showTemporaryStatus("Modalità assurda disattivata: si torna alle scuse 'credibili'.");
  }
}

if (excuseCategoryNameEl) {
  excuseCategoryNameEl.addEventListener("click", () => {
    absurdClickCount++;
    if (!absurdClickTimer) {
      absurdClickTimer = setTimeout(() => {
        absurdClickCount = 0;
        absurdClickTimer = null;
      }, 600);
    }
    if (absurdClickCount >= 3) {
      clearTimeout(absurdClickTimer);
      absurdClickTimer = null;
      absurdClickCount = 0;
      toggleAbsurdMode();
    }
  });
}

// ==========================
//  MODALITÀ SUPER PANICO
// ==========================

const superPanicShort = [
  "Arrivo tra pochissimo, imprevisto al volo.",
  "Sto chiudendo una cosa urgente, ti aggiorno a breve.",
  "Piccolo imprevisto tecnico, sto arrivando.",
  "Mi serve un attimo per sistemare una cosa, arrivo.",
  "Sto risolvendo una cosa al volo, un attimo.",
  "Ritardo minimo, sto chiudendo qui e vengo.",
  "Sto finendo una cosa importante, arrivo subito dopo.",
  "Un secondo che chiudo una cosa e ci sono.",
  "Sto sistemando un imprevisto, arrivo appena posso.",
  "Sono in recupero rapido, ti aggiorno a breve."
];

let panicPressTimer = null;
let superPanicActive = false;

function generateSuperPanicExcuse() {
  const idx = Math.floor(Math.random() * superPanicShort.length);
  return superPanicShort[idx];
}
// ==========================
//  RANDOM & GENERAZIONE
// ==========================

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function generateAbsurdExcuse() {
  const s = absurdFragments.start[randomIndex(absurdFragments.start.length)];
  const r = absurdFragments.reason[randomIndex(absurdFragments.reason.length)];
  const d = absurdFragments.detail[randomIndex(absurdFragments.detail.length)];
  const e = absurdFragments.end[randomIndex(absurdFragments.end.length)];
  return `${s} ${r}, ${d} ${e}`;
}

function generateNormalExcuse(categoryKey, mode = "auto") {
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
    } else {
      result = `${s} ${r}, ${d} ${e}`;
    }

    attempt++;
  } while (result === lastExcuseByCategory[categoryKey] && attempt < maxAttempts);

  lastExcuseByCategory[categoryKey] = result;
  return result;
}

function generateExcuseForCategory(categoryKey, mode = "auto") {
  if (absurdMode) return generateAbsurdExcuse();
  return generateNormalExcuse(categoryKey, mode);
}

// ==========================
//  RENDER SCUSA
// ==========================

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

  if (opts.countAsStat) incrementStats(currentCategory);
}

// ==========================
//  SUPER PANICO — EVENTI
// ==========================

btnPanic.addEventListener("mousedown", () => {
  superPanicActive = false;
  panicPressTimer = setTimeout(() => {
    superPanicActive = true;
    const excuse = generateSuperPanicExcuse();
    excuseTextEl.textContent = excuse;
    excuseTextEl.classList.add("visible");
    incrementStats(currentCategory);
    showTemporaryStatus("Super Panico: scusa ultra‑rapida generata.");
  }, 450);
});

btnPanic.addEventListener("mouseup", () => {
  clearTimeout(panicPressTimer);
  if (!superPanicActive) {
    const excuse = generateExcuseForCategory(currentCategory, "long");
    excuseTextEl.textContent = "Versione modalità panico attivata:\n\n" + excuse;
    excuseTextEl.classList.add("visible");
    incrementStats(currentCategory);
    showTemporaryStatus("Modalità panico: scusa extra carica attivata.");
  }
});
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
//  FAST MODE
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
    fastModeToggle.setAttribute("aria-pressed", fastMode);
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
    excuseCategoryNameEl.textContent = categoryNames[currentCategory] || currentCategory;
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

  excuseCategoryNameEl.textContent = categoryNames[currentCategory] || currentCategory;
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
    `[${catLabel}] ${excuse} (Scusa generata da ScusaPronta: https://scusapronta.github.io/misterscusa/)`;
  copyToClipboard(formatted);
});

// ==========================
//  CONDIVISIONE
// ==========================

function buildShareText() {
  const catLabel = categoryNames[currentCategory] || currentCategory;
  const excuse = getCurrentExcuseText() || generateExcuseForCategory(currentCategory, lengthMode);
  return `[${catLabel}] ${excuse}\n\nScusa generata da ScusaPronta: https://scusapronta.github.io/misterscusa/`;
}

function buildShareUrlFor(platform) {
  const text = encodeURIComponent(buildShareText());
  const url = encodeURIComponent("https://scusapronta.github.io/misterscusa/");
  switch (platform) {
    case "whatsapp": return "https://wa.me/?text=" + text;
    case "telegram": return "https://t.me/share/url?url=" + url + "&text=" + text;
    case "facebook": return "https://www.facebook.com/sharer/sharer.php?u=" + url;
    case "twitter": return "https://twitter.com/intent/tweet?text=" + text;
    case "email": return "mailto:?subject=" + encodeURIComponent("Scusa epica generata per te") + "&body=" + text;
    default: return "https://scusapronta.github.io/misterscusa/";
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
        await navigator.share({ title: "ScusaPronta", text, url: pageUrl });
        return;
      } catch (e) {}
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
    if (saved === "dark" || saved === "light") return saved;
  } catch (e) {
    console.error("Errore nel leggere il tema:", e);
  }
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

let currentTheme = loadTheme();
applyTheme(currentTheme);

themeToggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(currentTheme);
  themeToggleBtn.setAttribute("aria-pressed", currentTheme === "dark");
  try {
    localStorage.setItem(THEME_KEY, currentTheme);
  } catch (e) {
    console.error("Impossibile salvare il tema:", e);
  }
});

// ==========================
//  STICKY BAR MOBILE
// ==========================

if (mobileBtnGenerate) {
  mobileBtnGenerate.addEventListener("click", () => renderNewExcuse());
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

    excuseCategoryNameEl.textContent = categoryNames[currentCategory] || currentCategory;
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
  return { date: todayString(), category: cat, text };
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

    excuseCategoryNameEl.textContent = categoryNames[currentCategory] || currentCategory;
    excuseTextEl.textContent = dailyState.text;
    lastExcuseByCategory[currentCategory] = dailyState.text;
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
//  BANNER PWA
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
  if (pwaBanner) pwaBanner.style.display = "none";}

function isMobileLike() {
  return /iphone|ipad|ipod|android/i.test(navigator.userAgent);
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
  pwaCloseBtn.addEventListener("click", () => dismissPwaBanner());
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
  Math.random(); // micro-random warm-up

  if (stats.lastCategory && categoryNames[stats.lastCategory]) {
    currentCategory = stats.lastCategory;
    categoryTabs.forEach(t => {
      const cat = t.getAttribute("data-category");
      if (cat === currentCategory) t.classList.add("active");
      else t.classList.remove("active");
      fastModeToggle.setAttribute("aria-pressed", fastMode);
themeToggleBtn.setAttribute("aria-pressed", currentTheme === "dark");

    });
  }

  excuseCategoryNameEl.textContent = categoryNames[currentCategory] || currentCategory;

  renderStats();
  ensureDailyExcuse();
  renderNewExcuse();
  maybeShowPwaBanner();
})();

// ==========================
//  MODULO PANICO
// ==========================
(function () {
  const btnPanic = document.getElementById("btnPanic");
  if (!btnPanic) return;

  let panicPressTimer = null;
  let superPanicActive = false;

  function triggerPanicFlash() {
    btnPanic.classList.add("btn-panic-boost");
    setTimeout(() => btnPanic.classList.remove("btn-panic-boost"), 180);
  }

  function handleSuperPanic() {
    if (!excuseTextEl) return;
    if (typeof generateSuperPanicExcuse !== "function") {
      // Fallback: se non esiste, usa comunque una scusa lunga
      const excuse = generateExcuseForCategory(currentCategory, "long");
      excuseTextEl.textContent = "SUPER PANICO (fallback):\n\n" + excuse;
    } else {
      const excuse = generateSuperPanicExcuse();
      excuseTextEl.textContent = excuse;
    }
    excuseTextEl.classList.add("visible");
    if (typeof incrementStats === "function") {
      incrementStats(currentCategory);
    }
    excuseTextEl.setAttribute("aria-live", "assertive");
    triggerPanicFlash();
    if (typeof showTemporaryStatus === "function") {
      showTemporaryStatus("Super Panico: scusa ultra‑rapida generata.");
    }
  }

  function handleNormalPanic() {
    if (!excuseTextEl) return;
    const excuse = generateExcuseForCategory(currentCategory, "long");
    excuseTextEl.textContent = "Versione modalità panico attivata:\n\n" + excuse;
    excuseTextEl.classList.add("visible");
    if (typeof incrementStats === "function") {
      incrementStats(currentCategory);
    }
    excuseTextEl.setAttribute("aria-live", "polite");
    triggerPanicFlash();
    if (typeof showTemporaryStatus === "function") {
      showTemporaryStatus("Modalità panico: scusa extra carica attivata.");
    }
  }

  // Desktop
  btnPanic.addEventListener("mousedown", () => {
    superPanicActive = false;
    panicPressTimer = setTimeout(() => {
      superPanicActive = true;
      handleSuperPanic();
    }, 450);
  });

  btnPanic.addEventListener("mouseup", () => {
    clearTimeout(panicPressTimer);
    if (!superPanicActive) {
      handleNormalPanic();
    }
  });

  // Mobile
  btnPanic.addEventListener("touchstart", () => {
    superPanicActive = false;
    panicPressTimer = setTimeout(() => {
      superPanicActive = true;
      handleSuperPanic();
    }, 450);
  });

  btnPanic.addEventListener("touchend", () => {
    clearTimeout(panicPressTimer);
    if (!superPanicActive) {
      handleNormalPanic();
    }
  });
})();

// ==========================
//  MODULO PWA
// ==========================
(function () {
  const pwaBanner = document.getElementById("pwaBanner");
  const pwaCloseBtn = document.getElementById("pwaCloseBtn");
  const pwaHowBtn = document.getElementById("pwaHowBtn");

  if (!pwaBanner) return;

  function isMobileLike() {
    return /iphone|ipad|ipod|android/i.test(navigator.userAgent);
  }

  function hasDismissedPwaBanner() {
    return localStorage.getItem("pwaDismissed") === "1";
  }

  function maybeShowPwaBanner() {
    if (!pwaBanner) return;
    if (hasDismissedPwaBanner()) return;
    if (!isMobileLike()) {
      pwaBanner.style.display = "none";
      return;
    }
    if (typeof stats === "object" && typeof stats.total === "number" && stats.total >= 5) {
      pwaBanner.style.display = "flex";
    } else {
      pwaBanner.style.display = "none";
    }
  }

  if (pwaCloseBtn) {
    pwaCloseBtn.addEventListener("click", () => {
      pwaBanner.style.display = "none";
      localStorage.setItem("pwaDismissed", "1");
    });
  }

  if (pwaHowBtn) {
    pwaHowBtn.addEventListener("click", () => {
      alert(
        "Per aggiungere ScusaPronta alla schermata Home:\n\n" +
        "• Su Android: Menu (⋮) → Aggiungi a schermata Home\n" +
        "• Su iPhone: Condividi (⬆️) → Aggiungi a Home"
      );
    });
  }

  window.addEventListener("load", maybeShowPwaBanner);
})();

// ==========================
//  MODULO PANICO (universale: desktop + mobile)
// ==========================
(function () {
  const btnPanic = document.getElementById("btnPanic");
  if (!btnPanic) return;

  let pressTimer = null;
  let superPanic = false;

  function triggerFlash() {
    btnPanic.classList.add("btn-panic-boost");
    setTimeout(() => btnPanic.classList.remove("btn-panic-boost"), 180);
  }

  function doSuperPanic() {
    superPanic = true;
    const excuse = typeof generateSuperPanicExcuse === "function"
      ? generateSuperPanicExcuse()
      : generateExcuseForCategory(currentCategory, "long");

    excuseTextEl.textContent = excuse;
    excuseTextEl.classList.add("visible");
    incrementStats(currentCategory);
    excuseTextEl.setAttribute("aria-live", "assertive");
    triggerFlash();
    showTemporaryStatus("Super Panico attivato!");
    document.dispatchEvent(new Event("excuseGenerated"));
  }

  function doNormalPanic() {
    const excuse = generateExcuseForCategory(currentCategory, "long");
    excuseTextEl.textContent = "Modalità panico:\n\n" + excuse;
    excuseTextEl.classList.add("visible");
    incrementStats(currentCategory);
    excuseTextEl.setAttribute("aria-live", "polite");
    triggerFlash();
    showTemporaryStatus("Panico attivato!");
    document.dispatchEvent(new Event("excuseGenerated"));
  }

  function startPress() {
    superPanic = false;
    pressTimer = setTimeout(doSuperPanic, 450);
  }

  function endPress() {
    clearTimeout(pressTimer);
    if (!superPanic) doNormalPanic();
  }

  // Pointer events = funzionano ovunque
  btnPanic.addEventListener("pointerdown", startPress);
  btnPanic.addEventListener("pointerup", endPress);
  btnPanic.addEventListener("pointerleave", () => clearTimeout(pressTimer));
})();

// ==========================
//  MODULO PWA (con trigger automatico)
// ==========================
(function () {
  const banner = document.getElementById("pwaBanner");
  const closeBtn = document.getElementById("pwaCloseBtn");
  const howBtn = document.getElementById("pwaHowBtn");

  if (!banner) return;

  function isMobileLike() {
    return /iphone|ipad|ipod|android/i.test(navigator.userAgent);
  }

  function dismissed() {
    return localStorage.getItem("pwaDismissed") === "1";
  }

  function maybeShow() {
    if (!isMobileLike()) {
      banner.style.display = "none";
      return;
    }
    if (dismissed()) {
      banner.style.display = "none";
      return;
    }
    if (stats.total >= 5) {
      banner.style.display = "flex";
    }
  }

  // Chiudi banner
  closeBtn?.addEventListener("click", () => {
    banner.style.display = "none";
    localStorage.setItem("pwaDismissed", "1");
  });

  // Istruzioni
  howBtn?.addEventListener("click", () => {
    alert(
      "Per aggiungere ScusaPronta alla schermata Home:\n\n" +
      "• Android: Menu (⋮) → Aggiungi a schermata Home\n" +
      "• iPhone: Condividi (⬆️) → Aggiungi a Home"
    );
  });

  // Trigger automatico dopo ogni scusa
  document.addEventListener("excuseGenerated", maybeShow);

  // Primo controllo
  window.addEventListener("load", maybeShow);
})();
