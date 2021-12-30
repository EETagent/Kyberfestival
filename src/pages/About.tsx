import { Component, For } from "solid-js";

import { SPEAKERS } from "../data/speakers";

import { Partners } from "../components/Partners";

import konferenceJPEG from "../assets/images/konference.jpg";
import konferenceAVIF from "../assets/images/avif/konference.avif";

const About: Component = () => {
  const SABLIK = SPEAKERS.find((e) => e.name === "Radko Sáblík");

  return (
    <>
      <div className="w-8/10 mx-auto mt-15">
        <div className="flex flex-col md:flex-row mb-5">
          <div className="md:w-4/10 lg:w-3/10 xl:w-[35%]">
            <div
              className='font-bold text-4xl xl:text-6xl relative content-blank after:(top-[120%] absolute w-24 h-0.5 left-0 bg-kyberfestival-green) md:after:left-[-15%] xl:after:w-40'
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2>Vítejte na konferenci!</h2>
            </div>
          </div>
          <div
            className="md:w-6/10 lg:w-7/10 mt-5 md:pl-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="font-bold">
              „Nevěřte všemu, co se vám k věření předkládá: Zkoumejte vše a
              přesvědčujte se sami!“
              <br />
              Jan Ámos Komenský.
            </p>
            <p>
              Kybernetická bezpečnost je již nyní celosvětovým problémem.
              Dokážeme propojovat věci mezi sebou, dokážeme je přimět mezi sebou
              komunikovat. Tím se ale zvyšuje riziko, že je někdo ovládne a
              způsobí nejen finanční škody. Dokážeme téměř v reálném čase
              přinášet informace k lidem po celém světě, ale v tom zahlcením
              informacemi nedokážeme přesně posoudit jejich pravdivost. Toho
              využívají jak jedinci, tak společnosti i celé státy. Mluví se o
              kybernetické či hybridní válce. Pro mnohé se stírá rozdíl mezi
              reálným a virtuálním světem.{" "}
            </p>
            <p>
              V této souvislosti je více než záhodno, aby žáci na základních
              školách i studenti na školách středních byli dostatečně vzděláváni
              v oblasti kybernetické bezpečnosti, a to ve dvou rovinách. Tou
              první je bezpečnost jimi používaných zařízení, aby je neovládl
              cizí subjekt, nepřipravil je o jejich data či finance. Tou druhou
              je dovednost se pohybovat na internetu a čelit jeho nástrahám.
              Tedy být imunní vůči různým dezinformačním kampaním, upadáním do
              bublin propagující konspirační teorie, ovlivňující jejich
              světonázor. Ale také dovednost čelit predátorům na internetu,
              kteří chtějí využít jejich nezkušenost a později je vydírat či
              přímo zneužít.{" "}
            </p>
            <p>
              Ve školním roce 2020/2021 vycházejí první studenti z pilotního
              oboru vzdělávání Kybernetická bezpečnosti, a to na Smíchovské
              střední průmyslové škole a gymnáziu, a na brněnské Střední škole
              informatiky a poštovnictví. Považujeme za vhodné se pobavit, co se
              osvědčilo a co naopak bylo nutné upravovat, abychom poskytli
              relevantní informace dalším školám, které se rozhodnou této
              problematice ve výuce také věnovat.
            </p>
            <p>
              Kybernetická bezpečnost se nejlépe učí v komunitách, a my máme
              zájem vytvořit v České republice právě takovou samoučící se
              komunitu, jejíž základ budou tvořit studenti středních škol, ale
              která bude mít přesah a provázanost i se studenty podobně
              zaměřenými (nadanými) na základních a vysokých školách. Chceme
              proto síťovat střední školy, jejich ředitele, učitele i studenty.
              Chceme vymyslet projekty a soutěže, na kterých budeme dlouhodobě
              spolupracovat.{" "}
            </p>
            <p>
              Hledáme školy, které se ve svém regionu stanou komunitním centrem
              kybernetické bezpečnosti a postupně na sebe budou nabalovat další
              školy, jejich ředitele, učitele, studenty.{" "}
            </p>
            <p>
              Chceme také navázat konkrétní spolupráci mezi takto vzniklou
              komunitou a regionální a státní správou, s odbornými organizacemi
              i soukromými subjekty. Ti všichni budou v budoucnosti potřebovat
              stále více a více odborníků na kybernetickou bezpečnost, a tak je
              v jejich bytostném zájmu takovou komunitu podporovat a pomáhat
              síťovat talenty z různých škol. Možná právě z nich se rekrutují do
              budoucna odborníci, kteří zabrání kybernetickému útoku na majetky
              i lidské životy, na šíření poplašných dezinformací a ovlivňování
              veřejného mínění za účelem vzniku chaosu a rozpadu demokratického
              státu.{" "}
            </p>
            <p>
              Proto jsme se rozhodli uspořádat Konferenci kybernetické
              bezpečnosti, která má za hlavní cíl položit základ ke vzniku
              zmíněné komunity, ve které bude zcela přirozené sdílení příkladů
              dobré praxe, spolupráce na společných konkrétních projektech a
              také na šíření osvěty v daných lokalitách mezi řediteli, učiteli,
              studenty, žáky a jejich rodiči.{" "}
            </p>
            <div className="mt-4 flex flex-row items-center">
              <figure className="w-1/7">
                <picture>
                  <source srcset={SABLIK?.imageAVIF} type="image/avif" />
                  <img
                    src={SABLIK?.image}
                    alt={SABLIK?.name}
                    className="rounded-full"
                  />
                </picture>
              </figure>
              <span className="ml-3 flex-grow">
                <span className="text-bold">Radko Sáblík</span>
                <br />
                Ředitel smíchovské střední průmyslové školy a gymnázia
              </span>
            </div>
          </div>
        </div>
        <div className="my-12">
          <div className="w-full" data-aos="fade-up" data-aos-delay="300">
            <picture>
              <source srcset={konferenceAVIF} type="image/avif" />
              <img src={konferenceJPEG} alt="Kyberfestival" className="img-fluid" />
            </picture>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-4/10 lg:w-3/10">
            <div
              className="font-bold text-4xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2>Průběh konference!</h2>
            </div>
          </div>
          <div
            className="md:w-6/10 lg:w-7/10 mt-5 md:pl-5"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p>
              První den konference bude mít hybridní charakter, tedy diskutující
              budou fyzicky přítomni v prostorách, které poskytne Hlavní město
              Praha, další budou mít možnost konferenci sledovat v živém
              vysílání a zapojovat se do diskusí svými příspěvky či dotazy
              posílanými prostřednictvím zvoleného systému. Tyto otázky či
              vyjádření bude mít k dispozici moderátor panelu a bude je
              reprodukovat jeho účastníkům. V přestávkách mezi panely bude
              prostor pro prezentaci projektů partnerů konference či pro
              rozhovory se zajímavými lidmi, odborníky, řediteli, učiteli,
              studenty. Tyto výstupy budou buď realizované v živém přenosu ze
              studia, nebo budou předtočené.
            </p>
            <p>
              K panelům budou pozváni nejen osobnosti ze státní a regionální
              správy, odborníci na kybernetickou bezpečnost, ale též ředitelé,
              učitelé a studenti středních škol. Samotnou konferenci pořádají
              studenti druhého ročníku Smíchovské střední průmyslové školy a
              gymnázia z pilotního oboru vzdělávání Kybernetická bezpečnost.
              Živý přenos zajišťuje Mediální dům Preslova, vzniklý při
              Smíchovské SPŠ a gymnáziu. I to je unikátní.{" "}
            </p>
            <p>
              Druhý den konference bude mít základ ve workshopech, kdy pracovní
              skupiny složené z různých aktérů v oblasti kybernetické
              bezpečnosti budou hledat společné projekty a také připravovat
              memorandum o spolupráci. Cílem je dojít ke konkrétním závěrům a
              položit základ vzniku komunity v oblasti kybernetické bezpečnosti.
              Chceme, aby se v každé pracovní skupině objevili zástupci partnerů
              konference, zástupci státní a regionální správy, ředitelé, učitelé
              a studenti zapojených škol.{" "}
            </p>
            <p>
              I druhý den konference bude mít hybridní charakter, živé vstupy ze
              studia a také propojení účastníků pomocí videokonferencí, což jim
              umožní ve vhodně zvoleném prostředí společně pracovat na dokumentu
              a posléze s ním seznámit další pracovní skupiny i veřejnost, která
              se sice do pracovních skupin nezapojí, ale bude mít zájem
              konferenci sledovat.
            </p>
            <p>
              Na konci konference vznikne memorandum o spolupráci a také návrhy
              na konkrétní projekty a jejich možné financování za pomoci
              prostředků státu, regionů či konkrétních výzev z evropských,
              státních či regionálních dotačních programů.{" "}
            </p>
            <div className="mt-4 flex flex-row items-center">
              <figure className="w-1/7">
                <picture>
                  <source srcset={SABLIK?.imageAVIF} type="image/avif" />
                  <img
                    src={SABLIK?.image}
                    alt={SABLIK?.name}
                    className="rounded-full"
                  />
                </picture>
              </figure>
              <span className="ml-3 flex-grow">
                <span className="text-bold">Radko Sáblík</span>
                <br />
                Ředitel smíchovské střední průmyslové školy a gymnázia
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-30">
          <div className="flex flex-row mb-5 justify-center">
            <div className="mb-5">
              <div className="text-6xl" data-aos="fade-up">
                <h2 className="text-center">Naši řečníci</h2>
              </div>
            </div>
          </div>
          <div className="grid w-1/2 md:w-full grid-cols-1 md:grid-cols-3 gap-10">
            <For each={SPEAKERS}>
              {(speaker, i) => (
                <div data-aos="fade-up" data-aos-delay="100">
                  <div className="flex flex-col justify-center items-center text-center">
                    <figure>
                      <picture>
                        <source srcset={speaker.imageAVIF} type="image/avif" />
                        <img
                          className="w-1/2 mx-auto rounded-full"
                          src={speaker.image}
                          alt={speaker.name}
                        />
                      </picture>
                    </figure>
                    <blockquote className="mt-5">
                      <p className="mb-0 font-bold">{speaker.name}</p>
                      <p className="mb-4 text-sm">{speaker.organization}</p>
                    </blockquote>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
        <div className="flex flex-col mt-15">
          <div className="flex flex-col md:flex-row mb-5">
            <div className="md:w-6/10">
              <div className="text-6xl" data-aos="fade-up">
                <h2>Partneři</h2>
              </div>
            </div>
            <div
              className="md:w-4/10 mt-5 md:pl-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                Bez pomoci našich partnerů by se mohla konference těžko v
                takovém rozsahu uskutečnit. Děkujeme Karlově univerzitě za
                poskytnutí fyzických prostor ke konání akce.
              </p>
            </div>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 mb-5">
            <Partners />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
