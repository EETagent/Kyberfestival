export interface ProgramInterface {
  start: string;
  end: string;
  text: string;
}

export const PROGRAM: ProgramInterface[][] = [
  [
    {
      start: "09:00",
      end: "09:30",
      text: "Úvod konference",
    },
    {
      start: "09:30",
      end: "11:30",
      text: "Představení projektů hlavního města Prahy",
    },
    {
      start: "11:30",
      end: "13:00",
      text: "Kulatý stůl odborníků, zástupců regionální a státní správy",
    },
    {
      start: "13:00",
      end: "13:30",
      text: "Rozhovory s odborníky",
    },
    {
      start: "13:30",
      end: "15:00",
      text: "Příklady dobré praxe, debata škol, státní správy a odborných organizací",
    },
    {
      start: "15:00",
      end: "16:00",
      text: "Rozhovory, prezentace partnerů",
    },
    {
      start: "16:00",
      end: "18:00",
      text: "Diskuse mezi zástupci škol, studenty, učiteli, řediteli",
    },
  ],
  [
    {
      start: "09:00",
      end: "10:00",
      text: "Představení center excelence, síťování škol, společných projektů, hackathonů",
    },
    {
      start: "10:00",
      end: "11:30",
      text: "Workshopy k přípravě memoranda a usnesení",
    },
    {
      start: "11:30",
      end: "12:30",
      text: "Rozhovory se studenty a odborníky, příklady dobré praxe",
    },
    {
      start: "12:30",
      end: "14:00",
      text: "Představení výstupů pracovních skupin, společná diskuse",
    },
    {
      start: "14:00",
      end: "15:00",
      text: "Rozhovory, prezentace partnerů",
    },
    {
      start: "15:00",
      end: "16:00",
      text: "Připrava memoranda a usnesení, rozhovory",
    },
    {
      start: "16:00",
      end: "18:00",
      text: "Schválení memoranda a usnesení",
    },
  ],
];
