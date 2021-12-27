const speaker = import.meta.globEager("../assets/images/speakers/*.jpg");
const speakerAVIF = import.meta.globEager(
  "../assets/images/avif/speakers/*.avif"
);

export interface SpeakersInterface {
  name: string;
  organization: string;
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
    organization: "Ředitel SSPŠ",
    description:
      "Středoškolský pedagog, spisovatel, od roku 2002 ředitel Smíchovské střední průmyslové školy, člen expertní skupiny Strategie 2030+ a od října 2018 místostarosta města Mníšek pod Brdy za Občanskou demokratickou stranu.",
    image: speaker["../assets/images/speakers/person_sablik.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_sablik.avif"].default,
    social: {
      web: "https://sablik.eu/",
      twitter: "https://twitter.com/RadkoSablik",
    },
  },
  {
    name: "Karel Řehka",
    organization: "Ředitel NÚKIB",
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
    name: "Petr Pavel",
    organization: "Armádní generál Armády České republiky ve výslužbě",
    description:
      "Armádní generál ve výslužbě, bývalý náčelník Generálního štábu Armády České republiky a předseda vojenského výboru NATO. Za své služby získal mnoho českých i mezinárodních vojenských vyznamenání. Dnes se věnuje přednáškám a besedám s občany. Na jaře 2020 založil iniciativu Spolu silnější, nejprve ve formě sbírky, která pomáhá lidem v první linii boje s epidemií a těm, na které krize dopadá nejhůře. Později dal s experty dali dohromady doporučení pro lepší zvládání krizí a nyní usiluje o důkladnou revizi krizového řízení naší země. Snaží se jít příkladem v aktivním občanství a dobrovolnictví.",
    image: speaker["../assets/images/speakers/person_pavel.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_pavel.avif"].default,
  },
  {
    name: "Radko Sáblík",
    organization: "Ředitel SSPŠ",
    description:
      "Středoškolský pedagog, spisovatel, od roku 2002 ředitel Smíchovské střední průmyslové školy, člen expertní skupiny Strategie 2030+ a od října 2018 místostarosta města Mníšek pod Brdy za Občanskou demokratickou stranu.",
    image: speaker["../assets/images/speakers/person_sablik.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_sablik.avif"].default,
    social: {
      web: "https://sablik.eu/",
      twitter: "https://twitter.com/RadkoSablik",
    },
  },
  {
    name: "Petr Pavel",
    organization: "Armádní generál Armády České republiky ve výslužbě",
    description:
      "Armádní generál ve výslužbě, bývalý náčelník Generálního štábu Armády České republiky a předseda vojenského výboru NATO. Za své služby získal mnoho českých i mezinárodních vojenských vyznamenání. Dnes se věnuje přednáškám a besedám s občany. Na jaře 2020 založil iniciativu Spolu silnější, nejprve ve formě sbírky, která pomáhá lidem v první linii boje s epidemií a těm, na které krize dopadá nejhůře. Později dal s experty dali dohromady doporučení pro lepší zvládání krizí a nyní usiluje o důkladnou revizi krizového řízení naší země. Snaží se jít příkladem v aktivním občanství a dobrovolnictví.",
    image: speaker["../assets/images/speakers/person_pavel.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_pavel.avif"].default,
  },
  {
    name: "Karel Řehka",
    organization: "Ředitel NÚKIB",
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
    name: "Radko Sáblík",
    organization: "Ředitel SSPŠ",
    description:
      "Středoškolský pedagog, spisovatel, od roku 2002 ředitel Smíchovské střední průmyslové školy, člen expertní skupiny Strategie 2030+ a od října 2018 místostarosta města Mníšek pod Brdy za Občanskou demokratickou stranu.",
    image: speaker["../assets/images/speakers/person_sablik.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_sablik.avif"].default,
    social: {
      web: "https://sablik.eu/",
      twitter: "https://twitter.com/RadkoSablik",
    },
  },
  {
    name: "Karel Řehka",
    organization: "Ředitel NÚKIB",
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
    name: "Petr Pavel",
    organization: "Armádní generál Armády České republiky ve výslužbě",
    description:
      "Armádní generál ve výslužbě, bývalý náčelník Generálního štábu Armády České republiky a předseda vojenského výboru NATO. Za své služby získal mnoho českých i mezinárodních vojenských vyznamenání. Dnes se věnuje přednáškám a besedám s občany. Na jaře 2020 založil iniciativu Spolu silnější, nejprve ve formě sbírky, která pomáhá lidem v první linii boje s epidemií a těm, na které krize dopadá nejhůře. Později dal s experty dali dohromady doporučení pro lepší zvládání krizí a nyní usiluje o důkladnou revizi krizového řízení naší země. Snaží se jít příkladem v aktivním občanství a dobrovolnictví.",
    image: speaker["../assets/images/speakers/person_pavel.jpg"].default,
    imageAVIF:
      speakerAVIF["../assets/images/avif/speakers/person_pavel.avif"].default,
  },
];
