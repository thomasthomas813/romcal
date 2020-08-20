import { RomcalLocale } from '@romcal/models/locale/romcal-locale.type';

export default {
  advent: {
    season: 'Adwentu',
    weekday: '{{day}} {{week}} tygodnia Adwentu',
    sunday: '{{week}} Niedziela Adwentu',
  },
  christmastide: {
    season: 'Narodzenia Pańskiego',
    day: '{{day}} boże Narodzenie',
    octave: '{{count}} dzień w oktawie Narodzenia Pańskiego',
    sunday: '{{count}} Niedziela po Narodzeniu Pańskim',
  },
  epiphany: {
    season: 'Objawienie Pańskie',
    before: '{{day}} przed Objawieniem Pańskim',
    after: '{{day}} po Objawieniu Pańskim',
  },
  ordinaryTime: {
    season: 'Zwykła',
    weekday: '{{day}} {{week}} tygodnia zwykłego',
    sunday: '{{week}} Niedziela zwykła',
  },
  lent: {
    season: 'Postu',
    weekday: '{{day}} {{week}} tygodnia Wielkiego Postu',
    sunday: '{{week}} Niedziela Wielkiego Postu',
    dayAfterAshWed: '{{day}} po Popielcu',
  },
  holyWeek: {
    season: 'Wielki Tydzień',
    weekday: '{{day}} wielkiego tygodnia',
  },
  paschalTriduum: {
    season: 'Triduum Paschalne',
  },
  eastertide: {
    season: 'Wielkanoc',
    weekday: '{{day}} {{week}} tygodnia wielkanocnego',
    sunday: '{{week}} Niedziela Wielkanocna',
    octave: '{{day}} w oktawie Wielkanocy',
  },
  liturgicalColors: {
    BLACK: 'czarny',
    GOLD: 'złoty',
    GREEN: 'zielony',
    PURPLE: 'fioletowy',
    RED: 'czerwony',
    ROSE: 'różowy',
    WHITE: 'biały',
  },
  celebrations: {
    all_saints: 'Wszystkich Świętych',
    annunciation: 'Zwiastowanie Pańskie',
    ascension: 'Wniebowstąpienie Pańskie',
    ash_wednesday: 'Środa popielcowa',
    assumption: 'Wniebowzięcie Najświętszej Maryi Panny',
    baptism_of_the_lord: 'Chrzest Pański',
    nativity_of_john_the_baptist: 'Narodzenie św. Jana Chrzciciela',
    christmas: 'Narodzenie Pańskie',
    christ_the_king_sunday: 'Jezusa Chrystusa Króla Wszechświata',
    corpus_christi: 'Najświętszego Ciała i Krwi Chrystusa',
    divine_mercy_sunday: '2 Niedziela Wielkanocna czyli Miłosierdzia Bożego',
    easter_sunday: 'Niedziela Wielkanocna Zmartwychwstania Pańskiego',
    epiphany: 'Objawienie Pańskie',
    good_friday: 'Wielki Piątek',
    holy_family: 'Świętej Rodziny Jezusa, Maryi i Józefa',
    holy_saturday: 'Wielka Sobota',
    holy_thursday: 'Wielki Czwartek',
    immaculate_conception: 'Niepokalane Poczęcie Najświętszej Maryi Panny',
    immaculate_heart_of_mary: 'Niepokalanego Serca Najświętszej Maryi Panny',
    joseph_spouse_of_mary: 'Św. Józefa, Oblubieńca Najświętszej Maryi Panny',
    mary_mother_of_god: 'Świętej Bożej Rodzicielki Maryi',
    palm_sunday: 'Niedziela Palmowa Męki Pańskiej',
    pentecost_sunday: 'Niedziela Zesłania Ducha Świętego',
    peter_and_paul_apostles: 'Świętych Apostołów Piotra i Pawła',
    presentation_of_the_lord: 'Ofiarowanie Pańskie',
    sacred_heart_of_jesus: 'Najświętszego Serca Pana Jezusa',
    exaltation_of_the_holy_cross: 'Podwyższenie Krzyża Świętego',
    transfiguration: 'Przemienienie Pańskie',
    trinity_sunday: 'Niedziela Najświętszej Trójcy',
  },
  sanctoral: {
    all_souls: 'Wspomnienie wszystkich wiernych zmarłych',
    nativity_of_mary: 'Narodzenie Najświętszej Maryi Panny',
    angela_salawa_virgin: 'Bł. Anieli Salawy, dziewicy',
    anthony_julian_nowowiejski_bishop_and_companions_martyrs: 'Błogosławionych męczenników Antoniego Juliana Nowowiejskiego, biskupa, i Towarzyszy',
    bogumilus_of_dobrow_bishop: 'Bł. Bogumiła, biskupa',
    boleslawa_mary_lament_virgin: 'Bł. Bolesławy Marii Lament, dziewicy',
    bronislava_of_poland_virgin: 'Bł. Bronisławy, dziewicy',
    ceslaus_of_poland_priest: 'Bł. Czesława, prezbitera',
    edmund_bojanowski: 'Bł. Edmunda Bojanowskiego',
    honorat_kozminski_priest: 'Bł. Honorata Koźmińskiego, prezbitera',
    james_strzemie_bishop: 'Bł. Jakuba Strzemię, biskupa',
    george_matulaitis_bishop: 'Bł. Jerzego Matulewicza, biskupa',
    john_beyzym_priest: 'Bł. Jana Beyzyma, prezbitera',
    john_martin_moye_priest: 'Bł. Jana Marcina Moyego, Kapłana',
    yolanda_of_poland_religious: 'Bł. Jolanty, zakonnicy',
    caroline_kozka_virgin: 'Bł. Karoliny Kózkówny, dziewicy i męczennicy',
    mary_assunta_pallotta_virgin: 'Bł. Marii Assunty Pallotty, Dziewicy',
    mary_stella_of_the_blessed_sacrament_mardosewicz_and_companions_virgins: 'Błogosławionych dziewic i męczennic Marii Stelli i Towarzyszek',
    mary_theresa_ledochowska_virgin: 'Bł. Marii Teresy Ledóchowskiej, dziewicy',
    mary_angela_truszkowska_virgin: 'Bł. Marii Angeli Truszkowskiej, dziewicy',
    mary_of_jesus_the_good_shepherd_siedliska_virgin: 'Bł. Marii od Pana Jezusa Dobrego Pasterza (Franciszki Siedliskiej), zakonnicy',
    maurice_tornay_priest: 'Bł. Maurycego Tornaya, Kapłana i Męczennika',
    michael_kozal_bishop: 'Bł. Michała Kozala, biskupa i męczennika',
    odoric_of_pordenone_priest: 'Bł. Odoryka z Pordenone, Kapłana',
    raphael_chylinski_priest: 'Bł. Rafała Chylińskiego, prezbitera',
    salomea_of_poland_religious: 'Bł. Salomei, zakonnicy',
    vincent_kadlubek_bishop: 'Bł. Wincentego Kadłubka, biskupa',
    vincent_lewoniuk_and_companions_martyrs: 'Błogosławionych męczenników Wincentego Lewoniuka i Towarzyszy',
    wladyslaw_of_gielniow_priest: 'Bł. Władysława z Gielniowa, prezbitera',
    chair_of_saint_peter_the_apostle: 'Katedry św. Piotra, Apostoła',
    conversion_of_saint_paul_the_apostle: 'Nawrócenie św. Pawła, Apostoła',
    dedication_of_the_basilica_of_saint_mary_major: 'Rocznica poświęcenia rzymskiej Bazyliki Najświętszej Maryi Panny',
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: 'Rocznica poświęcenia rzymskich bazylik świętych apostołów Piotra i Pawła',
    dedication_of_the_lateran_basilica: 'Rocznica poświęcenia Bazyliki Laterańskiej',
    first_martyrs_of_the_holy_roman_church: 'Świętych Pierwszych Męczenników Św. Kościoła Rzymskiego',
    guardian_angels: 'Świętych Aniołów Stróżów',
    holy_innocents_martyrs: 'Św. Młodzianków, męczenników',
    most_holy_name_of_mary: 'Najświętszego Imienia Maryi',
    mary_mother_of_the_church: 'Najświętszej Maryi Panny, Matki Kościoła',
    our_lady_of_china: 'Najświętszej Maryi Panny z Chin',
    our_lady_of_czestochowa: 'Najświętszej Maryi Panny Częstochowskiej',
    our_lady_of_fatima: 'Najświętszej Maryi Panny z Fatimy',
    our_lady_of_guadalupe: 'Najświętszej Maryi Panny z Guadalupe',
    ourLadyOfLoreto: 'Najświętszej Maryi Panny Loretańskiej',
    ourLadyOfLourdes: 'Najświętszej Maryi Panny z Lourdes',
    ourLadyOfMountCarmel: 'Najświętszej Maryi Panny z Góry Karmel',
    ourLadyOfSorrows: 'Najświętszej Maryi Panny Bolesnej',
    ourLadyOfTheRosary: 'Najświętszej Maryi Panny Różańcowej',
    ourLordJesusChristTheEternalHighPriest: 'Jezusa Chrystusa, Najwyższego i Wiecznego Kapłana',
    presentationOfTheBlessedVirginMary: 'Ofiarowanie Najświętszej Maryi Panny',
    queenshipOfBlessedVirginMary: 'Najświętszej Maryi Panny, Królowej',
    saintAdalbertBishopAndMartyr: 'Św. Wojciecha, biskupa i męczennika, głównego patrona Polski',
    saintAgathaVirginAndMartyr: 'Św. Agaty, dziewicy i męczennicy',
    saintAgnesTsaoKouYingMartyr: 'Św. Agnieszki Cao Guiying, Męczennicy',
    saintAgnesVirginAndMartyr: 'Św. Agnieszki, dziewicy i męczennicy',
    saintAlbericCrescitelliPriestAndMartyr: 'Św. Alberyka Crescitellego, Kapłana i Męczennika',
    saintAlbertChmielowskiReligious: 'Św. Brata Alberta Chmielowskiego, zakonnika',
    saintAlbertTheGreatBishopAndDoctor: 'Św. Alberta Wielkiego, biskupa i doktora Kościoła',
    saintAloysiusGonzagaReligious: 'Św. Alojzego Gonzagi, zakonnika',
    saintAlphonsusMariaDeLiguoriBishopAndDoctorOfTheChurch: 'Św. Alfonsa Marii Liguoriego, biskupa i doktora Kościoła',
    saintAmbroseBishopAndDoctor: 'Św. Ambrożego, biskupa i doktora Kościoła',
    saintAndrewBobolaPriestAndMartyr: 'Św. Andrzeja Boboli, prezbitera i męczennika',
    saintAndrewDungLacAndCompanionsMartyrs: 'Świętych męczenników Andrzeja Dung-Lac, prezbitera, i Towarzyszy',
    saintAndrewKimTaegonPriestAndPaulChongHasangAndCompanionsMartyrs: 'Świętych męczenników Andrzeja Kim Taegon, prezbitera, Pawła Chong Hasang i Towarzyszy',
    saintAndrewTheApostle: 'Św. Andrzeja, Apostoła',
    saintAngelaMericiVirgin: 'Św. Anieli Merici, dziewicy',
    saintAnselmOfCanterburyBishopAndDoctorOfTheChurch: 'Św. Anzelma, biskupa i doktora Kościoła',
    saintAnsgarBishop: 'Św. Ansgara, biskupa',
    saintAnthonyMaryClaretBishop: 'Św. Antoniego Marii Clareta, biskupa',
    saintAnthonyOfEgyptAbbot: 'Św. Antoniego, opata',
    saintAnthonyOfPaduaPriestAndDoctor: 'Św. Antoniego z Padwy, prezbitera i doktora Kościoła',
    saintAnthonyZaccariaPriest: 'Św. Antoniego Marii Zaccarii, prezbitera',
    saintApollinaris: 'Św. Apolinarego, biskupa i męczennika',
    saintAthanasiusBishopAndDoctor: 'Św. Atanazego, biskupa i doktora Kościoła',
    saintAugustineOfCanterburyBishop: 'Św. Augustyna z Canterbury, biskupa',
    saintAugustineOfHippoBishopAndDoctorOfTheChurch: 'Św. Augustyna, biskupa i doktora Kościoła',
    saintAugustineZhaoRongPriestAndCompanionsMartyrs: 'Świętych męczenników Augustyna Zhao Rong, Kapłana i Towarzyszy',
    saintAugustineZhaoRongPriestAndMartyr: 'Św. Augustyna Zhao Rong, Kapłana i Męczennika',
    saintBarbaraVirginAndMartyr: 'Św. Barbary, dziewicy i męczennicy',
    saintBarnabasTheApostle: 'Św. Barnaby, Apostoła',
    saintBartholomewTheApostle: 'Św. Bartłomieja, Apostoła',
    saintBedeTheVenerablePriestAndDoctor: 'Św. Bedy Czcigodnego, prezbitera i doktora Kościoła',
    saintBenedictOfNursiaAbbot: 'Św. Benedykta, opata, patrona Europy',
    saintBernardineOfSienaPriest: 'Św. Bernardyna ze Sieny, prezbitera',
    saintBernardOfClairvauxAbbotAndDoctorOfTheChurch: 'Św. Bernarda, opata i doktora Kościoła',
    saintBlaseBishopAndMartyr: 'Św. Błażeja, biskupa i męczennika',
    saintBonaventureBishopAndDoctor: 'Św. Bonawentury, biskupa i doktora Kościoła',
    saintBonifaceBishopAndMartyr: 'Św. Bonifacego, biskupa i męczennika',
    saintBridgetOfSwedenReligious: 'Św. Brygidy, zakonnicy, patronki Europy',
    saintBrunoBonifaceOfQuerfurtBishopAndMartyr: 'Św. Brunona Bonifacego z Kwerfurtu, biskupa i męczennika',
    saintBrunoPriest: 'Św. Brunona, prezbitera',
    saintCajetanPriest: 'Św. Kajetana, prezbitera',
    saintCallistusIPopeAndMartyr: 'Św. Kaliksta I, papieża i męczennika',
    saintCamillusDeLellisPriest: 'Św. Kamila de Lellis, prezbitera',
    saintCasimir: 'Św. Kazimierza',
    saintCatherineOfAlexandriaVirginAndMartyr: 'Św. Katarzyny Aleksandryjskiej, dziewicy i męczennicy',
    saintCatherineOfSienaVirginAndDoctorOfTheChurch: 'Św. Katarzyny Sieneńskiej, dziewicy i doktora Kościoła, patronki Europye',
    saintCeciliaVirginAndMartyr: 'Św. Cecylii, dziewicy i męczennicy',
    saintCharbelMakhloufPriestAndHermit: 'Św. Sarbeliusza Makluf, prezbitera',
    saintCharlesBorromeoBishop: 'Św. Karola Boromeusza, biskupa',
    saintChristopherMagallanesAndCompanionsMartyrs: 'Świętych męczenników Krzysztofa Magallanesa, prezbitera, i Towarzyszy',
    saintClareVirgin: 'Św. Klary, dziewicy',
    saintClementIPopeAndMartyr: 'Św. Klemensa I, papieża i męczennika',
    saintColumbaAbbotAndMissionary: 'Św. Kolumbana, zakonnika',
    saintCyrilOfAlexandriaBishopAndDoctor: 'Św. Cyryla Aleksandryjskiego, biskupa i doktora Kościoła',
    saintCyrilOfJerusalemBishopAndDoctor: 'Św. Cyryla Jerozolimskiego, biskupa i doktora Kościoła',
    saintDamasusIPope: 'Św. Damazego I, papieża',
    saintDenisAndCompanionsMartyrs: 'Świętych męczenników Dionizego, biskupa, i Towarzyszy',
    saintDominicPriest: 'Św. Dominika, prezbitera',
    saintElizabethOfHungaryReligious: 'Św. Elżbiety Węgierskiej, zakonnicy',
    saintElizabethOfPortugal: 'Św. Elżbiety Portugalskiej',
    saintEphremDeaconAndDoctor: 'Św. Efrema, diakona i doktora Kościoła',
    saintEusebiusOfVercelliBishop: 'Św. Euzebiusza z Vercelii, biskupa',
    saintFabianPopeAndMartyr: 'Św. Fabiana, papieża i męczennika',
    saintFaustinaKowalskaVirginAndReligious: 'Św. Faustyny Kowalskiej, dziewicy',
    saintFidelisOfSigmaringenPriestAndMartyr: 'Św. Fidelisa z Sigmaringen, prezbitera i męczennika',
    saintFlorianMartyr: 'Św. Floriana, męczennika',
    saintFrancesOfRomeReligious: 'Św. Franciszki Rzymianki, zakonnicy',
    saintFrancisDeSalesBishopAndDoctor: 'Św. Franciszka Salezego, biskupa i doktora Kościoła',
    saintFrancisDiazPriestAndCompanionsMartyrs: 'Świętych męczenników Franciszka Diaza, Kapłana i Towarzyszy',
    saintFrancisFernandezDeCapillasPriestAndMartyr: 'Św. Franciszka Fernandeza de Capillas, Kapłana i Męczennika',
    saintFrancisOfAssisi: 'Św. Franciszka z Asyżu',
    saintFrancisOfPaolaHermit: 'Św. Franciszka z Paoli, pustelnika',
    saintFrancisXavierPriest: 'Św. Franciszka Ksawerego, prezbitera',
    saintGabrieltaurinDufresseBishopAndMartyr: 'Św. Gabriel-Taurina Dufresse, Biskupa i Męczennika',
    saintGeorgeMartyr: 'Św. Grzegorza, męczennika',
    saintGertrudeTheGreatVirgin: 'Św. Gertrudy, dziewicy',
    saintGregoryTheGreatPopeAndDoctor: 'Św. Grzegorza Wielkiego, papieża i doktora Kościoła',
    saintGregoryViiPope: 'Św. Grzegorza VII, papieża',
    saintHedwigReligious: 'Św. Jadwigi Śląskiej',
    saintHenry: 'Św. Henryka, cesarza',
    saintHenryBishopAndMartyr: 'Św. Henryka, biskupa i męczennika',
    saintHilaryOfPoitiersBishopAndDoctor: 'Św. Hilarego, biskupa i doktora Kościoła',
    hyacinthOfPolandPriest: 'Św. Jacka, prezbitera',
    saintIgnatiusOfAntiochBishopAndMartyr: 'Św. Ignacego Antiocheńskiego, biskupa i męczennika',
    saintIgnatiusOfLoyolaPriest: 'Św. Ignacego z Loyoli, prezbitera',
    saintIrenaeusBishopAndMartyr: 'Św. Ireneusza, biskupa i męczennika',
    saintIsidoreOfSevilleBishopAndDoctorOfTheChurch: 'Św. Izydora, biskupa i doktora Kościoła',
    saintJamesApostle: 'Św. Jakuba, Apostoła',
    saintJaneFrancesDeChantalReligious: 'Św. Joanny Franciszki de Chantal, zakonnicy',
    saintJanuariusBishopAndMartyr: 'Św. Januarego, biskupa i męczennika',
    saintJeromeEmiliani: 'Św. Hieronima Emilianiego',
    saintJeromePriestAndDoctor: 'Św. Hieronima, prezbitera i doktora Kościoła',
    saintJoachimHoMartyr: 'Św. Joachima Ho, Męczennika',
    saintJohnBaptistDeLaSallePriest: 'Św. Jana Chrzciciela de la Salle, prezbitera',
    saintJohnBoscoPriest: 'Św. Jana Bosko, prezbitera',
    saintJohnChrysostomBishopAndDoctor: 'Św. Jana Chryzostoma, biskupa i doktora Kościoła',
    saintJohnDamascenePriestAndDoctor: 'Św. Jana Damasceńskiego, prezbitera i doktora Kościoła',
    saintJohnEudesPriest: 'Św. Jana Eudesa, prezbitera',
    saintJohnGabrielPerboyrePriestAndMartyr: 'Św. Jana Gabriela Perboyre’a, Kapłana i Męczennika',
    saintJohnIPopeAndMartyr: 'Św. Jana I, papieża i męczennika',
    saintJohnLeonardiPriest: 'Św. Jana Leonardiego, prezbitera',
    saintJohnMaryVianneyPriest: 'Św. Jana Marii Vianneya, prezbitera',
    saintJohnOfCapistranoPriest: 'Św. Jana Kapistrana, prezbitera',
    saintJohnOfDuklaPriest: 'Św. Jana z Dukli, prezbitera',
    saintJohnOfGodReligious: 'Św. Jana Bożego, zakonnika',
    saintJohnOfKantyPriest: 'Św. Jana Kantego, prezbitera',
    saintJohnOfTheCrossPriestAndDoctor: 'Św. Jana od Krzyża, prezbitera i doktora Kościoła',
    saintJohnOfTrioraPriestAndMartyr: 'Św. Jana z Triory, Kapłana i Męczennika',
    saintJohnPaulIiPope: 'Św. Jana Pawła II, papieża',
    saintJohnSarkanderPriestAndMartyr: 'Św. Jana Sarkandra, prezbitera i męczennika',
    saintJohnTheApostleAndEvangelist: 'Św. Jana, Apostoła i Ewangelisty',
    saintJohnXxiiiPope: 'Św. Jana XXIII, papieża',
    saintJosaphatBishopAndMartyr: 'Św. Jozafata, biskupa i męczennika',
    saintJosephBilczewskiBishop: 'Św. Józefa Bilczewskiego, biskupa',
    saintJosephFreinademetzPriest: 'Św. Józefa Freinademetza, Kapłana',
    saintJosephineBakhitaVirgin: 'Św. Józefiny Bakhity, dziewicy',
    saintJosephOfCalasanzPriest: 'Św. Józefa Kalasantego, prezbitera',
    saintJosephTheWorker: 'Św. Józefa, rzemieślnika',
    saintJosephYuanPriestAndMartyr: 'Św. Józefa Yuana, Kapłana i Męczennika',
    saintJosephZhangDapengMartyr: 'Św. Józefa Zhang Dapenga, Męczennika',
    saintJuanDiegoCuauhtlatoatzin: 'Św. Jana Diego Cuahtlatoatzin',
    saintJustinMartyr: 'Św. Justyna, męczennika',
    saintKingaVirgin: 'Św. Kingi, dziewicy',
    saintLaurenceWangBingAndCompanionsMartyrs: 'Świętych męczenników Wawrzyńca Wang Binga i Towarzyszy',
    saintLawrenceBaiXiaomanMartyr: 'Św. Wawrzyńa Bai Xiaomana, Męczennika',
    saintLawrenceOfBrindisiPriestAndDoctor: 'Św. Wawrzyńca z Brindisi, prezbitera i doktora Kościoła',
    saintLawrenceOfRomeDeaconAndMartyr: 'Św. Wawrzyńca, diakona i męczennika',
    saintLawrenceRuizAndCompanionsMartyrs: 'Świętych męczenników Wawrzyńca Ruiz i Towarzyszy',
    saintLeoManginPriestAndCompanionsMartyrs: 'Świętych męczenników Leona Mangina, Kapłana i Towarzyszy',
    saintLeoTheGreatPopeAndDoctor: 'Św. Leona Wielkiego, papieża i doktora Kościoła',
    saintLouis: 'Św. Ludwika',
    saintLouisMarieGrignionDeMontfortPriest: 'Św. Ludwika Marii Grignion de Montfort, prezbitera',
    saintLucyOfSyracuseVirginAndMartyr: 'Św. Łucji, dziewicy i męczennicy',
    saintLucyYiZhenmeiVirginAndMartyr: 'Św. Łucji Yi Zhenmei, Dziewicy i Męcznnicy',
    saintLukeTheEvangelist: 'Św. Łukasza, Ewangelisty',
    saintMargaretMaryAlacoqueVirgin: 'Św. Małgorzaty Marii Alacoque, dziewicy',
    saintMargaretOfScotland: 'Św. Małgorzaty Szkockiej',
    saintMariaGorettiVirginAndMartyr: 'Św. Marii Goretti, dziewicy i męczennicy',
    saintMarkTheEvangelist: 'Św. Marka, Ewangelisty',
    saintMartha: 'Św. Marty',
    saintMartinDePorresReligious: 'Św. Marcina de Porres, zakonnika',
    saintMartinIPopeAndMartyr: 'Św. Marcina I, papieża i męczennika',
    saintMartinOfToursBishop: 'Św. Marcina z Tours, biskupa',
    saintMartinWuXueshengAndCompanionsMartyrs: 'Świętych męczenników Marcina Wu Xueshenga i Towarzyszy',
    saintMaryMagdalene: 'Św. Marii Magdaleny',
    saintMaryMagdaleneDePazziVirgin: 'Św. Marii Magdaleny de Pazzi, dziewicy',
    saintMatthewApostleAndEvangelist: 'Św. Mateusza, Apostoła i Ewangelisty',
    saintMatthiasTheApostle: 'Św. Macieja, Apostoła',
    saintMaximilianMaryKolbePriestAndMartyr: 'Św. Maksymiliana Marii Kolbego, prezbitera i męczennika',
    saintMelchiorGrodzieckiPriestAndMartyr: 'Św. Melchiora Grodzieckiego, prezbitera i męczennika',
    saintMonica: 'Św. Moniki',
    saintNicholasBishop: 'Św. Mikołaja, biskupa',
    saintNorbertBishop: 'Św. Norberta, biskupa',
    saintOttoOfBambergBishop: 'Św. Ottona, biskupa',
    saintPancrasMartyr: 'Św. Pankracego, męczennika',
    saintPatrickBishop: 'Św. Patryka, biskupa',
    saintPaulChenChangpinAndCompanionsMartyrs: 'Świętych męczenników Pawła Chen Changpina i Towarzyszy',
    saintPaulinusOfNolaBishop: 'Św. Paulina z Noli, biskupa',
    saintPaulLiuHanzouPriestAndMartyr: 'Św. Pawła Liu Hanzou, Kapłana i Męczennika',
    saintPaulMikiAndCompanionsMartyrs: 'Świętych męczenników Pawła Miki i Towarzyszy',
    saintPaulOfTheCrossPriest: 'Św. Pawła od Krzyża, prezbitera',
    saintPeterCanisiusPriestAndDoctor: 'Św. Piotra Kanizjusza, prezbitera i doktora Kościoła',
    saintPeterChanelPriestAndMartyr: 'Św. Piotra Chanela, prezbitera i męczennika',
    saintPeterChrysologusBishopAndDoctor: 'Św. Piotra Chryzologa, biskupa i doktora Kościoła',
    saintPeterClaverPriest: 'Św. Piotra Klawera, prezbitera',
    saintPeterDamianBishopAndDoctorOfTheChurch: 'Św. Piotra Damianiego, biskupa i doktora Kościoła',
    saintPeterJulianEymardPriest: 'Św. Piotra Juliani Eymarda, prezbitera',
    saintPeterLiuMartyr: 'Św. Piotra Liu, Męczennika',  // TODO: Change to `Saint Peter Liu Wenyuan, Martyr`
    saintPeterSanzBishopAndMartyr: 'Św. Piotra Sanza, Biskupa i Męczennika',
    saintPeterWuMartyr: 'Św. Piotra Wu, Męczennika',
    saintPhilipNeriPriest: 'Św. Filipa Nereusza, prezbitera',
    saintPioOfPietrelcinaPriest: 'Św. Pio z Pietrelciny, prezbitera',
    saintPiusVPope: 'Św. Piusa V, papieża',
    saintPiusXPope: 'Św. Piusa X, papieża',
    saintPolycarpBishopAndMartyr: 'Św. Polikarpa, biskupa i męczennika',
    saintRafalKalinowskiPriest: 'Św. Rafała Kalinowskiego, prezbiterat',
    saintRaymondOfPenyafortPriest: 'Św. Rajmunda z Penyafort, prezbitera',
    saintRitaOfCascia: 'Św. Rity z Cascii, zakonnicy',
    saintRobertBellarmineBishopAndDoctor: 'Św. Roberta Bellarmina, biskupa i doktora Kościoła',
    saintRomualdAbbot: 'Św. Romualda, opata',
    saintRoseOfLima: 'Św. Róży z Limy, dziewicy',
    saintsAndrewZorardAndBenedictHermits: 'Świętych pustelników Andrzeja Świerada i Benedykta',
    saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors: 'Świętych Bazylego Wielkiego i Grzegorza z Nazjanzu, biskupów i doktorów Kościoła',
    saintsBenedyktJanMateuszIsaakAndKrystynMartyrs: 'Świętych Benedykta, Jana, Mateusza, Izaaka i Krystyna, pierwszych męczenników Polski',
    saintsCharlesLwangaAndCompanionsMartyrs: 'Świętych męczenników Karola Lwangi i Towarzyszy',
    saintScholasticaVirgin: 'Św. Scholastyki, dziewicy',
    saintsCorneliusPopeAndCyprianBishopMartyrs: 'Świętych męczenników Korneliusza, papieża, i Cypriana, biskupa',
    saintsCosmasAndDamianMartyrs: 'Świętych męczenników Kosmy i Damiana',
    saintsCyrilMonkAndMethodiusBishop: 'Świętych Cyryla, mnicha i Metodego, biskupa, patronów Europy',
    saintSebastianMartyr: 'Św. Sebastiana, męczennika',
    saintsGregoryGrassiFrancisFogollaAndAnthonyFantosatiBishopsAndCompanionsMartyrs: 'Świętych męczenników Grzegorza Grassiego, Franciszka Fogolli i Antoniego Fantosatiego, Biskupów i Towarzyszy',
    saintSimonOfLipnicaPriest: 'Św. Szymona z Lipnicy, prezbitera',
    saintSixtusIiPopeAndCompanionsMartyrs: 'Świętych męczenników Sykstusa II, papieża, i Towarzyszy',
    saintsJoachimAndAnne: 'Świętych Rodziców NMP Joachima i Anny',
    saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrs: 'Świętych męczenników Jana de Brebeuf, Izaaka Jogues’a, prezbiterów oraz Towarzyszy',
    saintsJohnFisherBishopAndThomasMoreMartyrs: 'Świętych męczenników Jana Fishera, biskupa i Tomasza More’a',
    saintsLouisVersigliaBishopAndCallistusCaravarioPriestMartyrs: 'Świętych Alojzego Versiglii, Biskupa i Kaliksta Caravaria, Kapłana',
    saintsMarcellinusAndPeterMartyrs: 'Świętych męczenników Marcelina i Piotra',
    saintsMichaelGabrielAndRaphaelArchangels: 'Świętych Archaniołów Michała, Gabriela i Rafała',
    saintsNereusAndAchilleusMartyrs: 'Świętych męczenników Nereusza i Achillesa',
    saintsPerpetuaAndFelicityMartyrs: 'Świętych męczennic Perpetuy i Felicyty',
    saintsPhilipAndJamesApostles: 'Świętych Apostołów Filipa i Jakuba',
    saintsPontianPopeAndHippolytusPriestMartyrs: 'Świętych męczenników Poncjana, papieża i Hipolita, prezbiteras',
    saintsSimonAndJudeApostles: 'Świętych Apostołów Szymona i Judy Tadeusza',
    saintStanislausBishopAndMartyr: 'Św. Stanisława, biskupa i męczennika, głównego patrona Polski',
    saintStanislausKazimierczykPriest: 'Św. Stanisława Kazimierczyka, prezbitera',
    saintStanislausKostkaReligious: 'Św. Stanisława Kostki, zakonnika, patrona Polski',
    saintStephenOfHungary: 'Św. Stefana Węgierskiego',
    saintStephenTheFirstMartyr: 'Św. Szczepana, pierwszego męczennika',
    saintsTimothyAndTitusBishops: 'Świętych biskupów Tymoteusza i Tytusa',
    saintSylvesterIPope: 'Św. Sylwestra I, papieża',
    saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr: 'Św. Teresy Benedykty od Krzyża, dziewicy i męczennicy, patronki Europy',
    saintTeresaOfJesusVirginAndDoctorOfTheChurch: 'Św. Teresy od Jezusa, dziewicy i doktora Kościoła',
    saintThereseOfTheChildJesusVirginAndDoctor: 'Św. Teresy od Dzieciątka Jezus, dziewicy i doktora Kościoła',
    saintThomasAquinasPriestAndDoctor: 'Św. Tomasza z Akwinu, prezbitera i doktora Kościoła',
    saintThomasBecketBishopAndMartyr: 'Św. Tomasza Becketa, biskupa i męczennika',
    saintThomasTheApostle: 'Św. Tomasza, Apostoła',
    saintTuribiusOfMogrovejoBishop: 'Św. Turybiusza z Mongrovejo, biskupa',
    saintUrsulaLedochowskaVirgin: 'Św. Urszuli Ledóchowskiej, dziewicy',
    saintVincentDeaconAndMartyr: 'Św. Wincentego, diakona i męczennika',
    saintVincentDePaulPriest: 'Św. Wincentego à Paulo, prezbitera',
    saintVincentFerrerPriest: 'Św. Wincentego Ferreriusza, prezbitera',
    saintVincentPallottiPriest: 'Św. Wincentego Pallottiego, prezbitera',
    saintWenceslausMartyr: 'Św. Wacława, męczennika',
    saintZdislava: 'Św. Zdzisławy',
    saintZygmuntGorazdowskiPriest: 'Św. Zygmunta Gorazdowskiego, prezbitera',
    saintZygmuntSzczesnyFelinskiBishop: 'Św. Zygmunta Szczęsnego Felińskiego, biskupa',
    sevenHolyFoundersOfTheServiteOrder: 'Świętych siedmiu założycieli Zakonu Serwitów Najświętszej Maryi Panny',
    sevenMartyredNunsFromTheFranciscanMissionariesOfMary: 'Siedmiu męcznnic ze Zgromadzenia Franciszkanek Misjonarek Maryi',
    theBeheadingOfSaintJohnTheBaptistMartyr: 'Męczeństwo św. Jana Chrzciciela',
    theMostHolyNameOfJesus: 'Najświętszego Imienia Jezus',
    visitationOfTheBlessedVirginMary: 'Nawiedzenie Najświętszej Maryi Panny',
  },
} as RomcalLocale;
