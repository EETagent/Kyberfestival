const speaker = import.meta.globEager("../assets/images/speakers/*.jpg");
const speakerAVIF = import.meta.globEager(
  "../assets/images/avif/speakers/*.avif"
);

import ORGANIZATIONS from "./organizations";

export interface SpeakersInterface {
  name: string;
  role: string;
  organization: ORGANIZATIONS;
  description: string;
  image: string;
  imageAVIF: string;
  social?: SpeakersSocial;
}

export interface SpeakersSocial {
  web?: string;
  twitter?: string;
  facebook?: string;
}

export const SPEAKERS: SpeakersInterface[] = [
  {
    name: "Radko Sáblík",
    role: "Ředitel SSPŠ",
    organization: ORGANIZATIONS.SSPS,
    description:
      "Středoškolský pedagog, spisovatel, od roku 2002 ředitel Smíchovské střední průmyslové školy, člen expertní skupiny Strategie 2030+ a od října 2018 místostarosta města Mníšek pod Brdy za Občanskou demokratickou stranu.",
    image: speaker["../assets/images/speakers/person_sablik.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_sablik.avif"].default,
    social: {
      web: "https://sablik.eu",
      twitter: "https://twitter.com/RadkoSablik",
    },
  },

  {
    name: "Vojtěch Jungmann",
    role: "Student druhého ročníku oboru kybernetická bezpečnost. Koordinátor konference",
    organization: ORGANIZATIONS.SSPS,
    description:
      "Zajímá se o kybernetickou bezpečnost a programování, 3. místo v národním finále kybernetické soutěže, hlavní koordinátor konference.",
    image: speaker["../assets/images/speakers/person_jungmann.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_jungmann.avif"]
        .default,
  },

  {
    name: "Karel Řehka",
    role: "Ředitel NÚKIB",
    organization: ORGANIZATIONS.NUKIB,
    description:
      "Karel Řehka je český voják, od března 2020 ředitel Národního úřadu pro kybernetickou a informační bezpečnost (NÚKIB), v letech 2010 až 2014 velitel 601. skupiny speciálních sil generála Moravce.",
    image: speaker["../assets/images/speakers/person_rehka.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_rehka.avif"].default,
    social: {
      web: "https://nukib.cz/cs/o-nukib/vedeni-uradu/",
      twitter: "https://twitter.com/nukib_cz",
    },
  },

  {
    name: "Radka Wildová",
    role: "Prorektorka university Karlovy",
    organization: ORGANIZATIONS.CUNI,
    description:
      "Česká profesorka zabývající se rozvojem počáteční čtenářské gramotnosti a pregramotnosti a prorektorka Univerzity Karlovy pro koncepci a kvalitu vzdělávací činnosti. Vystudovala obor učitelství pro 1. stupeň ZŠ na Pedagogické fakultě Univerzity Karlovy.",
    image: speaker["../assets/images/speakers/person_wildova.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_wildova.avif"].default,
  },

  {
    name: "Petr Pavel",
    role: "Armádní generál Armády České republiky ve výslužbě",
    organization: ORGANIZATIONS.SPOLUSILNĚJSI,
    description:
      "Armádní generál ve výslužbě, bývalý náčelník Generálního štábu Armády České republiky a předseda vojenského výboru NATO. Za své služby získal mnoho českých i mezinárodních vojenských vyznamenání. Dnes se věnuje přednáškám a besedám s občany. Na jaře 2020 založil iniciativu Spolu silnější, nejprve ve formě sbírky, která pomáhá lidem v první linii boje s epidemií a těm, na které krize dopadá nejhůře. Později dal s experty dali dohromady doporučení pro lepší zvládání krizí a nyní usiluje o důkladnou revizi krizového řízení naší země. Snaží se jít příkladem v aktivním občanství a dobrovolnictví.",
    image: speaker["../assets/images/speakers/person_pavel.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_pavel.avif"].default,
    social: {
      web: "https://www.spolusilnejsi.cz/",
      twitter: "https://twitter.com/general_pavel",
    },
  },

  {
    name: "Jaroslav Burčík",
    role: "Vedoucí, Centum exlelence ITU, ČVUT FEL",
    organization: ORGANIZATIONS.CVUT,
    description: "",
    image: speaker["../assets/images/speakers/person_burcik.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_burcik.avif"].default,
    social: { web: "https://comtel.fel.cvut.cz/cs/users/burcik" },
  },

  {
    name: "Tomáš Müller",
    role: "Prezident české pobočky AFCEA",
    organization: ORGANIZATIONS.AFCEA,
    description: "",
    image: speaker["../assets/images/speakers/person_muller.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_muller.avif"].default,
    social: { web: "https://www.afcea.cz/rada-pobocky/" },
  },

  {
    name: "Vít Šimral",
    role: "Člen Rady hl. m. Prahy s gescí školství, sportu, vědy a podpory podnikání",
    organization: ORGANIZATIONS.PRAHA,
    description:
      "Vít Šimral je český politik, politolog, sociolog a ekonom, člen Rady hlavního města Prahy s gescí školství, sportu a podpory podnikání. Angažuje se v oblasti boje s korupcí. Je členem Mensy ČR, Amnesty International, českého skauta či Českého běžeckého klubu",
    image: speaker["../assets/images/speakers/person_simral.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_simral.avif"].default,
    social: {
      web: "https://praha.pirati.cz/lide/vit-simral/",
      twitter: "https://twitter.com/piratsimral",
      facebook: "https://www.facebook.com/piratsimral",
    },
  },

  {
    name: "Lukáš Kolek",
    role: "Projektový ředitel Charles Games",
    organization: ORGANIZATIONS.CUNI,
    description:
      "Projektový ředitel a game designer Charles Games. Mezi nejvýznamnější projekty, na kterých pracuje, patří například Attentat 1942 nebo Svoboda 1945: Liberation",
    image: speaker["../assets/images/speakers/person_kolek.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_kolek.avif"].default,
    social: {
      web: "https://charlesgames.net/",
      twitter: "https://twitter.com/CharlesGames_CZ",
      facebook: "https://www.facebook.com/CharlesGamesCZ",
    },
  },

  {
    name: "Tomáš Jeřábek",
    role: "Katedra informačních technologií a technické výchovy",
    organization: ORGANIZATIONS.CUNI,
    description:
      "Řadu let působí v oblasti vzdělávání učitelů, kde se zaměřuje na možnosti využívání ICT ve vzdělávání a didaktiku ICT. Jeho domovským pracovištěm je katedra Informačních technologií a technické výchovy na Pedagogické faukltě Univerzity Karlovy, kde se podílí na pedagogické a vědecké činnosti pracoviště. Poslední 3 roky vedl projekt Podpora rozvoje digitální gramotnosti, ve kterém se řešily koncepce rozvoje digitální gramotnosti a metodická podpora pro školy v rámci začleňování rozvoje digitální gramotnosti do výuky v kontextu aktuálních revizi RVP.",
    image: speaker["../assets/images/speakers/person_jerabek.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_jerabek.avif"].default,
    social: {
      web: "https://is.cuni.cz/webapps/whois2/osoba/1797009260385461/?lang=cs",
    },
  },

  {
    name: "Nathan Němec",
    role: "Učitel předmětu Kybernetická bezpečnost",
    organization: ORGANIZATIONS.SSPS,
    description: "",
    image: speaker["../assets/images/speakers/person_nemec.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_nemec.avif"].default,
  },

  {
    name: "Zdeněk Kusovský",
    role: "Manažer kybernetické bezpečnosti a pověřenec pro ochranu osobních údajů",
    organization: ORGANIZATIONS.SUKL,
    description:
      "Pracovní zkušenosti jak z oblasti analýz a programování rozsáhlých IS, tak systémové a síťová administrace. A to jak ve výkonných pozicích programátora, administrátora, tak v managerských na pozicích ředitele IT firmy nebo společnosti dodávající řešení a provozující informační systémy významné energetické společnosti (ČEPS)",
    image: speaker["../assets/images/speakers/person_kusovsky.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_kusovsky.avif"]
        .default,
  },

  {
    name: "Adéla Sílešová",
    role: "Koordinátorka JSNS",
    organization: ORGANIZATIONS.JSNS,
    description:
      "Koordinátorka projektů mediálního vzdělávání v týmu vzdělávacího programu JSNS. Jejím nejvýznamnějším projektem je videohra DigiStories: Nela",
    image: speaker["../assets/images/speakers/person_silesova.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_silesova.avif"]
        .default,
    social: { web: "https://www.jsns.cz" },
  },

  {
    name: "Anna Jungmannová",
    role: "Studentka ZŠ",
    organization: ORGANIZATIONS.DOCTRINA,
    description:
      "Žákyně 8.třídy ZŠ Doctrina v Liberci. Zajímá se o robotiku, programování webů, šifry a háčkování. Vítězka národního finále Kybersoutez.cz do 15 let, 1. místo Microsoft Office Arena 2021, 1. místo Microsoft Office Arena 2020, 4. místo IT Slot 2021.",
    image: speaker["../assets/images/speakers/person_jungmannova.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_jungmannova.avif"]
        .default,
  },

  {
    name: "Jaroslav Faltýn",
    role: "Zástupce ředitele odboru základního vzdělávání a mládeže",
    organization: ORGANIZATIONS.MSMT,
    description:
      "Na MŠMT se věnuje digitálnímu vzdělávání, je předsedou České národní koalice pro digitální pracovní místa a členem rady vlády pro informační společnost.",
    image: speaker["../assets/images/speakers/person_faltyn.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_faltyn.avif"].default,
  },

  {
    name: "David Sýkora",
    role: "Učitel předmětu Kybernetická bezpečnost",
    organization: ORGANIZATIONS.SSPS,
    description: "",
    image: speaker["../assets/images/speakers/person_sykora.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_sykora.avif"].default,
  },

  {
    name: "Olga Hölzlová",
    role: "Ředitelka Střední školy informatiky a poštovnictví Brno",
    organization: ORGANIZATIONS.CICHNOVABRNO,
    description: "",
    image: speaker["../assets/images/speakers/person_holzlova.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_holzlova.avif"]
        .default,
  },

  {
    name: "Karel Kovář",
    role: "Náměstkem sekce vzdělávání, sportu a mládeže",
    organization: ORGANIZATIONS.MSMT,
    description:
      "Vystudoval Fakultu tělesné výchovy a sportu na Univerzitě Karlově a dlouhodobě působil v jejím vedení. Více než deset let působil na katedře pedagogiky, psychologie a didaktiky sportu, vyučoval pedagogiku sportu, zabýval se uplatněním absolventů tělovýchovných oborů a učitelů na trhu práce, věnoval se dalšímu vzdělávání pedagogických pracovníků a celoživotnímu vzdělávání.",
    image: speaker["../assets/images/speakers/person_kovar.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_kovar.avif"].default,
  },

  {
    name: "Petr Seifert",
    role: "Vedoucí odboru vzdělávání NÚKIB",
    organization: ORGANIZATIONS.NUKIB,
    description: "",
    image: speaker["../assets/images/speakers/person_generic.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_generic.avif"].default,
  },

  {
    name: "Josef Střelec",
    role: "Ředitel Centra kybernetické bezpečnosti",
    organization: ORGANIZATIONS.AFCEA,
    description: "",
    image: speaker["../assets/images/speakers/person_strelec.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_strelec.avif"].default,
  },

  {
    name: "Lucie Kosová",
    role: "Odbor prevence kriminality",
    organization: ORGANIZATIONS.MVCR,
    description: "",
    image: speaker["../assets/images/speakers/person_generic.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_generic.avif"].default,
  },

  {
    name: "Petr Vojtěch",
    role: "Ředitel SPŠ a SOŠ Dvůr Králové nad Labem",
    organization: ORGANIZATIONS.SPSASOSDVURKRALOVE,
    description: "",
    image: speaker["../assets/images/speakers/person_vojtech.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_vojtech.avif"].default,
  },

  {
    name: "Martin Beneš",
    role: "Doktorand Pedf UK",
    organization: ORGANIZATIONS.CUNI,
    description: "",
    image: speaker["../assets/images/speakers/person_generic.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_generic.avif"].default,
  },

  {
    name: "Bohumil Kartous",
    role: "Ředitel Pražského inovačního institutu",
    organization: ORGANIZATIONS.PRAZSKÝINOVACNIINSITUT,
    description: "",
    image: speaker["../assets/images/speakers/person_kartous.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_kartous.avif"].default,
  },

  {
    name: "Jiří Macek",
    role: "Vyučující odborných předmětů v oblasti KYB, vedoucí IT",
    organization: ORGANIZATIONS.SPSASOSDVURKRALOVE,
    description: "",
    image: speaker["../assets/images/speakers/person_macek.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_macek.avif"].default,
  },

  {
    name: "Jaroslav Tihlařík",
    role: "Učitel kybernetické bezpečnosti Střední školy informatiky a poštovnictví Brno",
    organization: ORGANIZATIONS.CICHNOVABRNO,
    description: "",
    image: speaker["../assets/images/speakers/person_generic.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_generic.avif"].default,
  },

  {
    name: "Lucie Hrušková",
    role: "Studentka prvního ročníku oboru kybernetická bezpečnost",
    organization: ORGANIZATIONS.SSPS,
    description: "",
    image: speaker["../assets/images/speakers/person_hruskova.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_hruskova.avif"]
        .default,
  },
];
