const logo = import.meta.globEager("../assets/images/partners/*.png");
const logoAVIF = import.meta.globEager("../assets/images/avif/partners/*.avif");

export interface PartnersInterface {
  organization: string;
  website: string;
  logo: string;
  logoAVIF: string;
}

export const PARTNERS: PartnersInterface[] = [
  {
    organization: "Smíchovská střední průmyslová škola",
    website: "https://www.ssps.cz",
    logo: logo["../assets/images/partners/logo_ssps.png"].default,
    logoAVIF: logoAVIF["../assets/images/avif/partners/logo_ssps.avif"].default,
  },
  {
    organization: "Univerzita Karlova",
    website: "https://cuni.cz",
    logo: logo["../assets/images/partners/logo_cuni.png"].default,
    logoAVIF: logoAVIF["../assets/images/avif/partners/logo_cuni.avif"].default,
  },
  {
    organization: "Pedagogická fakulta univerzity Karlovi",
    website: "https://pedf.cuni.cz",
    logo: logo["../assets/images/partners/logo_cuni_fakulta.png"].default,
    logoAVIF:
      logoAVIF["../assets/images/avif/partners/logo_cuni_fakulta.avif"].default,
  },
  {
    organization: "Centrum kybernetické bezpečnosti",
    website: "https://www.kybercentrum.cz",
    logo: logo["../assets/images/partners/logo_kybercentrum.png"].default,
    logoAVIF:
      logoAVIF["../assets/images/avif/partners/logo_kybercentrum.avif"].default,
  },
  {
    organization: "Hlavní město Praha",
    website: "https://www.praha.eu/",
    logo: logo["../assets/images/partners/logo_praha.png"].default,
    logoAVIF:
      logoAVIF["../assets/images/avif/partners/logo_praha.avif"].default,
  },
  {
    organization:
      "Ministerstvo školství, mládeže a tělovýchovy České republiky",
    website: "https://www.msmt.cz",
    logo: logo["../assets/images/partners/logo_msmt.png"].default,
    logoAVIF: logoAVIF["../assets/images/avif/partners/logo_msmt.avif"].default,
  },
  {
    organization: "Senát České republiky",
    website: "https://www.senat.cz",
    logo: logo["../assets/images/partners/logo_senat.png"].default,
    logoAVIF:
      logoAVIF["../assets/images/avif/partners/logo_senat.avif"].default,
  },
  {
    organization: "Národní ústav kybernetické bezpečnosti",
    website: "https://www.nukib.cz",
    logo: logo["../assets/images/partners/logo_nukib.png"].default,
    logoAVIF:
      logoAVIF["../assets/images/avif/partners/logo_nukib.avif"].default,
  },
  {
    organization: "Česká pobočka AFCEA",
    website: "https://www.afcea.cz",
    logo: logo["../assets/images/partners/logo_afcea.png"].default,
    logoAVIF:
      logoAVIF["../assets/images/avif/partners/logo_afcea.avif"].default,
  },
  {
    organization: "Aspen institute",
    website: "https://www.aspeninstitutece.org",
    logo: logo["../assets/images/partners/logo_aspen.png"].default,
    logoAVIF:
      logoAVIF["../assets/images/avif/partners/logo_aspen.avif"].default,
  },
  {
    organization: "Česká středoškolská unie",
    website: "https://stredoskolskaunie.cz",
    logo: logo["../assets/images/partners/logo_csu.png"].default,
    logoAVIF: logoAVIF["../assets/images/avif/partners/logo_csu.avif"].default,
  },
];
