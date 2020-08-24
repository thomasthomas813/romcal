import { RomcalLocale } from '@romcal/models/locale/romcal-locale.type';

export default {
  advent: {
    season: 'Temps de l’Avent',
    weekday: '{{day}} de la {{week}} semaine de l’Avent',
    sunday: '{{week}} Dimanche de l’Avent',
  },
  christmastide: {
    season: 'Temps de Noël',
    day: '{{day}} dans le Temps de Noël',
    octave: '{{count}} jour dans l’Octave de Noël',
    sunday: '{{count}} Dimanche de Noël',
  },
  epiphany: {
    season: 'Epiphanie',
    before: '{{day}} avant l’Epiphanie',
    after: '{{day}} après l’Epiphanie',
  },
  ordinary_time: {
    season: 'Temps Ordinaire',
    weekday: '{{day}} de la {{week}} semaine du Temps Ordinaire',
    sunday: '{{week}} Dimanche du Temps Ordinaire',
  },
  lent: {
    season: 'Carême',
    weekday: '{{day}} de la {{week}} semaine du Carême',
    sunday: '{{week}} Dimanche du Carême',
    day_after_ash_wed: '{{day}} des Cendres',
  },
  holy_week: {
    season: 'Semaine Sainte',
    weekday: '{{day}} Saint',
  },
  paschal_triduum: {
    season: 'Triduum Pascal',
  },
  eastertide: {
    season: 'Temps de Pâques',
    weekday: '{{day}} de la {{week}} semaine de Pâques',
    sunday: '{{week}} Dimanche de Pâques',
    octave: '{{day}} de Pâques',
  },
  liturgicalColors: {
    BLACK: 'noir',
    GOLD: 'doré',
    GREEN: 'vert',
    PURPLE: 'violet',
    RED: 'rouge',
    ROSE: 'rose',
    WHITE: 'blanc',
  },
  ranks: {
    SOLEMNITY: 'Solennité',
    SUNDAY: 'Dimanche',
    TRIDUUM: 'Triduum',
    HOLY_WEEK: 'Semaine sainte',
    FEAST: 'Fête',
    MEMORIAL: 'Mémoire',
    OPT_MEMORIAL: 'Mémoire facultative',
    COMMEMORATION: 'Commémoration',
    WEEKDAY: 'Férie',
  },
  celebrations: {
    all_saints: 'Tous les Saints',
    annunciation: 'Annonciation du Seigneur',
    ascension: 'Ascension du Seigneur',
    ash_wednesday: 'Mercredi des Cendres',
    assumption: 'Assomption de la Vierge Marie',
    baptism_of_the_lord: 'Baptême du Seigneur',
    nativity_of_john_the_baptist: 'Nativité de Saint Jean le Baptiste',
    christmas: 'Nativité du Seigneur',
    christ_the_king_sunday: 'Christ, Roi de l’Univers',
    corpus_christi: 'Saint-Sacrement',
    divine_mercy_sunday: 'Dimanche de la Divine Miséricorde',
    easter_sunday: 'Dimanche de Pâques',
    epiphany: 'L’Épiphanie du Seigneur',
    good_friday: 'Vendredi Saint',
    holy_family: 'La Sainte Famille',
    holy_saturday: 'Samedi Saint',
    holy_thursday: 'Jeudi Saint',
    immaculate_conception_of_mary: 'Immaculée Conception de la Vierge Marie',
    immaculate_heart_of_mary: 'Cœur immaculé de Marie',
    joseph_spouse_of_mary: 'Saint Joseph, Époux de la Vierge Marie',
    mary_mother_of_god: 'Marie, Mère de Dieu',
    palm_sunday: 'Dimanche des Rameaux et de la Passion',
    pentecost_sunday: 'Pentecôte',
    peter_and_paul_apostles: 'Saint Pierre et Saint Paul, Apôtres',
    presentation_of_the_lord: 'Présentation du Seigneur au Temple',
    most_sacred_heart_of_jesus: 'Sacré-Cœur de Jésus',
    exaltation_of_the_holy_cross: 'La Croix Glorieuse',
    transfiguration: 'Transfiguration du Seigneur',
    trinity_sunday: 'Très Sainte Trinité',
  },
  sanctoral: {
    all_souls: 'Commémoration de tous les fidèles défunts',
    nativity_of_mary: 'Nativité de la Vierge Marie',
    andre_grasset_priest: 'Bienheureux André Grasset, Prêtre, Canadien martyr de la Révolution française (✝ 1792)',
    catherine_of_saint_augustine_virgin: 'Bienheureuse Catherine de Saint-Augustin, Religieuse hospitalière de la Miséricorde (✝ 1668)',
    dina_belanger_virgin: 'Bienheureuse Dina Bélanger, Religieuse de la congrégation des Sœurs de Jésus-Marie (✝ 1929)',
    emilie_tavernier_gamelin_religious: 'Bienheureuse Émilie Tavernier-Gamelin, Religieuse, Fondatrice des Sœurs de la Providence de Montréal (✝ 1851)',
    frederic_janssoone_priest: 'Bienheureux Frédéric Janssoone, Prêtre franciscain (✝ 1916)',
    louis_zephirin_moreau_bishop: 'Bienheureux Louis Zéphyrin Moreau, Évêque (✝ 1901)',
    marie_anne_blondin_virgin: 'Bienheureuse Marie-Anne Blondin, Religieuse, Fondatrice des Sœurs de Sainte-Anne (✝ 1890)',
    marie_leonie_paradis_virgin: 'Bienheureuse Marie-Léonie Paradis, Religieuse, Fondatrice de la Congrégation des Petites Sœurs de la Sainte Famille (✝ 1912)',
    marie_rose_durocher_virgin: 'Bienheureuse Marie-Rose Durocher, Religieuse, Fondatrice des Sœurs des Saints Noms de Jésus et de Marie (✝ 1849)',
    nykyta_budka_and_vasyl_velychkovsky_bishops: 'Bienheureux Nicétas Budka (✝ 1949) et Vasyl Velychkowsky (✝ 1973), Évêques et Martyrs',
    chair_of_saint_peter_the_apostle: 'Chaire de Saint Pierre, Apôtre',
    conversion_of_saint_paul_the_apostle: 'Conversion de Saint Paul, Apôtre',
    dedication_of_the_basilica_of_saint_mary_major: 'Dédicace de la basilique Sainte-Marie Majeure',
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: 'Dédicace des basiliques de Saint Pierre et Saint Paul, Apôtres, à Rome',
    dedication_of_the_lateran_basilica: 'Dédicace de la Basilique du Latran',
    first_martyrs_of_the_holy_roman_church: 'Premiers Saints martyrs de la Sainte Église romaine (✝ 64)',
    guardian_angels: 'Saints Anges gardiens',
    holy_innocents_martyrs: 'Saints Innocents, Martyrs (1er s.)',
    most_holy_name_of_mary: 'Le Saint Nom de Marie',
    our_lady_mediatrix_of_all_grace: 'La Vierge Marie Médiatrice',
    our_lady_of_fatima: 'Notre-Dame de Fatima',
    our_lady_of_good_counsel: 'Notre-Dame du Bon Conseil',
    our_lady_of_guadalupe: 'Notre-Dame de Guadalupe',
    our_lady_of_lourdes: 'Notre-Dame de Lourdes',
    our_lady_of_mount_carmel: 'Notre-Dame du Mont-Carmel',
    our_lady_of_sorrows: 'Notre-Dame des Douleurs',
    our_lady_of_the_rosary: 'Notre-Dame du Rosaire',
    presentation_of_mary: 'Présentation de la Vierge Marie',
    queenship_of_mary: 'Vierge Marie Reine',
    adalbert_of_prague_bishop: 'Saint Adalbert, Évêque de Prague et Martyr (✝ 997)',
    agatha_of_sicily_virgin: 'Sainte Agathe, Vierge et Martyre en Sicile (✝ 251)',
    agnes_of_rome_virgin: 'Sainte Agnès, Vierge et Martyre (✝ v. 304)',
    albert_the_great_bishop: 'Saint Albert le Grand, Frère prêcheur, Évêque de Ratisbonne, Docteur de l’Eglise (✝ 1280)',
    aloysius_gonzaga_religious: 'Saint Louis de Gonzague, Religieux Jésuite (✝ 1591)',
    alphonsus_liguori_bishop: 'Saint Alphonse-Marie de Liguori, Bishop and Doctor of the Church',
    amand_of_maastricht_bishop: 'Saint Amand d’Elnone, Missionnaire, Evêque de Maastricht (✝ v. 676)',
    ambrose_of_milan_bishop: 'Saint Ambroise, Évêque de Milan et Docteur de l’Église (✝ 397)',
    andre_bessette_religious: 'Saint Frère André Bessette, Religieux (✝ 1937)',
    andrew_dung_lac_priest_and_companions_martyrs: 'Saint André Dung Lac, Prêtre, et ses compagnons, Martyrs (✝ entre 1745 et 1862)',
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs: 'Saint André Kim Taegon, Prêtre, et Paul Chong Ha-sang et ses compagnons, Martyrs en Corée (19ème s.)',
    andrew_apostle: 'Saint André, Apôtre',
    angela_merici_virgin: 'Sainte Angèle Mérici, Religieuse, Fondatrice de la Compagnie de Sainte Ursule de Brescia (✝ 1540)',
    joachim_and_anne_patroness_of_the_province_of_quebec_parents_of_mary: 'Saints Anne, Patronne du Québec, et Joachim, Parents de la Vierge Marie (1er siècle)',
    anselm_of_canterbury_bishop: 'Saint Anselme de Cantorbéry, Évêque, docteur de l’Eglise (✝ 1109)',
    ansgar_of_hamburg_bishop: 'Saint Anschaire de Brême, Évêque (✝ 865)',
    anthony_mary_claret_bishop: 'Saint Antoine-Marie Claret, Évêque (✝ 1870)',
    anthony_of_egypt_abbot: 'Saint Antoine le Grand, Ermite en Egypte (✝ 356)',
    anthony_of_padua_priest: 'Saint Antoine, Prêtre et Docteur de l’Église (✝ 1231)',
    anthony_zaccaria_priest: 'Saint Antoine-Marie Zaccaria, Prêtre (✝ 1539)',
    apollinaris_of_ravenna_bishop: 'Saint Apollinaire, Évêque et Martyr (2ème s.)',
    athanasius_of_alexandria_bishop: 'Saint Athanase, Évêque, Docteur et Père de l’Église (✝ 373)',
    augustine_of_canterbury_bishop: 'Saint Augustin, Évêque de Cantorbéry en Angleterre (✝ 604)',
    augustine_of_hippo_bishop: 'Saint Augustin, Evêque d’Hippone, Docteur de l’Église (✝ 430)',
    saintAugustineZhaoRongPriestAndCompanionsMartyrs: 'Saints Augustin Zhao Rong et ses compagnons, Martyrs en Chine (entre 1648 et 1930)',
    barnabas_apostle: 'Saint Barnabé, Apôtre',
    bartholomew_apostle: 'Saint Barthélemy, Apôtre',
    bede_the_venerable_priest: 'Saint Bède le Vénérable, Prêtre et docteur de l’Église (✝ 735)',
    benedict_of_nursia_abbot: 'Saint Benoît de Nursie, Patriarche des moines d’Occident, Fondateur de l’ordre des Bénédictins (✝ v. 547)',
    bernadette_soubirous_virgin: 'Sainte Bernadette Soubirous, Vierge (✝ 1879)',
    bernardine_of_siena_priest: 'Saint Bernardin de Sienne, Prêtre (✝ 1444)',
    bernard_of_clairvaux_abbot: 'Saint Bernard de Clairvaux, Abbé, Docteur de l’Église (✝ 1153)',
    blaise_of_sebaste_bishop: 'Saint Blaise de Sébaste, Évêque et Martyr (✝ 316)',
    bonaventure_of_bagnoregio_bishop: 'Saint Bonaventure, Évêque d’Albano et Docteur de l’Église (✝ 1274)',
    boniface_of_mainz_bishop: 'Saint Boniface, Évêque et Martyr (✝ 754)',
    bridget_of_sweden_religious: 'Sainte Brigitte de Suède, Veuve puis Religieuse, Fondatrice de l’ordre du Saint-Sauveur (✝ 1373)',
    mutien_marie_wiaux_religious: 'Saint Mutien Marie Wiaux, Frère des Ecoles Chrétiennes (✝ 1917)',
    bruno_of_cologne_priest: 'Saint Bruno, Prêtre, Fondateur des Chartreux (✝ 1101)',
    caesarius_of_arles_bishop: 'Saint Césaire d’Arles, Évêque, Père de l’Eglise (✝ 542)',
    cajetan_of_thiene_priest: 'Saint Gaétan de Thienne, Prêtre (✝ 1547)',
    callistus_i_pope: 'Saint Calixte Ier, Pape et Martyr (✝ 222)',
    camillus_de_lellis_priest: 'Saint Camille de Lellis, Prêtre (✝ 1614)',
    casimir_of_poland: 'Saint Casimir (✝ 1484)',
    catherine_of_alexandria_virgin: 'Sainte Catherine d’Alexandrie, Vierge et Martyre (4ème s.)',
    catherine_of_siena_virgin: 'Sainte Catherine de Sienne, Vierge et Docteur de l’Eglise (✝ 1380)',
    cecilia_of_rome_virgin: 'Sainte Cécile, Vierge et Martyre à Rome (✝ 230)',
    sharbel_makhluf_priest: 'Saint Charbel Makhlouf, Moine Prêtre Maronite (✝ 1898)',
    charles_borromeo_bishop: 'Saint Charles Borromée, Archevêque de Milan (✝ 1584)',
    christopher_magallanes_priest_and_companions_martyrs: 'Saints Cristóbal Magallanes, Prêtre, et ses 24 compagnons, Martyrs Mexicains (✝ 1927)',
    clare_of_assisi_virgin: 'Sainte Claire, Vierge',
    clement_i_pope: 'Saint Clément Ier, Pape et Martyr (✝ 97)',
    clotilde_of_burgundy: 'Sainte Clotilde, Reine des Francs (✝ 545)',
    columba_of_iona_abbot: 'Saint Colomban, Religieux (✝ 615)',
    cyril_of_alexandria_bishop: 'Saint Cyrille, Évêque d’Alexandrie et Docteur de l’Église (✝ 444)',
    cyril_of_jerusalem_bishop: 'Saint Cyrille de Jérusalem, Évêque de Jérusalem, Docteur de l’Église (✝ 387)',
    damasus_i_pope: 'Saint Damase Ier, Pape (✝ 384)',
    damien_de_veuster_priest: 'Saint Père Damien, Prêtre et Missionnaire Picpus (✝ 1889)',
    denis_of_paris_bishop_and_companions_martyrs: 'Saint Denis, Évêque, et ses compagnons, martyrs à Paris (3ème s.)',
    saintDominicPriest: 'Saint Dominique de Guzman, Prêtre, Fondateur de l’Ordre des Frères prêcheurs (✝ 1221)',
    saintElizabethOfHungaryReligious: 'Sainte Élisabeth de Hongrie (✝ 1231)',
    saintElizabethOfPortugal: 'Sainte Elisabeth du Portugal, Reine (✝ 1336)',
    saintEphremDeaconAndDoctor: 'Saint Ephrem, Diacre et Docteur de l’Église, (✝ 373)',
    saintEugeneDeMazenodBishop: 'Saint Eugène de Mazenod, Fondateur des Oblats de Marie-Immaculée, Évêque de Marseille (✝ 1861)',
    saintEusebiusOfVercelliBishop: 'Saint Eusèbe de Verceil, Evêque (✝ 371)',
    saintFabianPopeAndMartyr: 'Saint Fabien, Pape et Martyr (✝ 250)',
    saintFidelisOfSigmaringenPriestAndMartyr: 'Saint Fidèle de Sigmaringen, Prêtre et Martyr (✝ 1622)',
    saintFrancesOfRomeReligious: 'Sainte Françoise Romaine, Religieuse (✝ 1440)',
    saintFrancisDeSalesBishopAndDoctor: 'Saint François de Sales, Evêque de Genève et Docteur de l’Église (✝ 1622)',
    saintFrancisOfAssisi: 'Saint François d’Assise, Fondateur de l’ordre des Frères mineurs (✝ 1226)',
    saintFrancisOfPaolaHermit: 'Saint François de Paule, Ermite, Fondateur de l’ordre des Minimes (✝ 1507)',
    saintFrancisXavierPriest: 'Saint François-Xavier, Prêtre, Jésuite Missionnaire (✝ 1552)',
    saintFrancoisDeLavalBishop: 'Saint François de Laval, Premier évêque de Québec (✝ 1708)',
    saintGenevieveVirgin: 'Sainte Geneviève, Vierge à Paris (✝ 500)',
    saintGeorgeMartyr: 'Saint Georges, Martyr (✝ 303)',
    saintGertrudeOfNivellesAbbess: 'Sainte Gertrude de Nivelles, Abbesse (✝ 659)',
    saintGertrudeTheGreatVirgin: 'Sainte Gertrude, Vierge Moniale (✝ 1301)',
    saintGregoryTheGreatPopeAndDoctor: 'Saint Grégoire le Grand, Pape et Docteur de l’Église (✝ 604)',
    saintGregoryViiPope: 'Saint Grégoire VII, Pape (✝ 1085)',
    saintHedwigReligious: 'Sainte Edwige de Silésie, Veuve puis Religieuse (✝ 1243)',
    saintHenry: 'Saint Henri, Empereur Germanique (✝ 1024)',
    saintHenryBishopAndMartyr: 'Saint Henri, Evêque et Martyr (✝ 1156)',
    saintHilaryOfPoitiersBishopAndDoctor: 'Saint Hilaire de Poitiers, Évêque et Docteur de l’Église (✝ 367)',
    saintHubertOfLiegeBishop: 'Saint Hubert, Évêque (✝ 727)',
    saintIgnatiusOfAntiochBishopAndMartyr: 'Saint Ignace d’Antioche, Évêque et Martyr, Père et Docteur de l’Eglise (✝ 115)',
    saintIgnatiusOfLoyolaPriest: 'Saint Ignace de Loyola, Prêtre, Fondateur de la Compagnie de Jésus (✝ 1556)',
    saintIrenaeusBishopAndMartyr: 'Saint Irénée, Évêque et Martyr (✝ v. 201)',
    saintIsidoreOfSevilleBishopAndDoctorOfTheChurch: 'Saint Isidore de Séville, Docteur de l’Eglise, Évêque et Confesseur (✝ 636)',
    saintIvoPriest: 'Saint Yves Hélory, Prêtre et Juge en Bretagne (✝ 1303)',
    saintJamesApostle: 'Saint Jacques le Majeur, Apôtre (✝ 44)',
    saintJaneFrancesDeChantalReligious: 'Sainte Jeanne-Françoise de Chantal, Religieuse (✝ 1641)',
    saintJanuariusBishopAndMartyr: 'Saint Janvier, Évêque de Bénévent et Martyr (✝ 305)',
    saintJeromeEmiliani: 'Saint Jérôme Émilien, Fondateur (✝ 1537)',
    saintJeromePriestAndDoctor: 'Saint Jérôme, Père et Docteur de l’Église (✝ 420)',
    saintJoanOfArcVirginSecondaryPatronessOfFrance: 'Sainte Jeanne d’Arc, Vierge, Patronne Secondaires de la France (✝ 1431)',
    saintJohnBaptistDeLaSallePriest: 'Saint Jean-Baptiste de La Salle, Prêtre et Fondateur des Frères des Ecoles Chrétiennes (✝ 1719)',
    saintJohnBerchmansReligious: 'Saint Jean Berchmans, Jésuite Belge (✝ 1621)',
    saintJohnBoscoPriest: 'Saint Jean Bosco, Prêtre, Fondateur et Éducateur (✝ 1888)',
    saintJohnChrysostomBishopAndDoctor: 'Saint Jean Chrysostome, Évêque de Constantinople et Docteur de l’Église (✝ 407)',
    saintJohnDamascenePriestAndDoctor: 'Saint Jean Damascène, Prêtre et Docteur de l’Église (✝ 749)',
    saintJohnEudesPriest: 'Saint Jean Eudes, Prêtre (✝ 1680)',
    saintJohnIPopeAndMartyr: 'Saint Jean Ier, Pape et Martyr (✝ 526)',
    saintJohnLeonardiPriest: 'Saint Jean Léonardi, Prêtre (✝ 1609)',
    saintJohnMaryVianneyPriest: 'Saint Jean-Marie Vianney (Curé d’Ars), Prêtre (✝ 1859)',
    saintJohnOfCapistranoPriest: 'Saint Jean de Capistran, Prêtre de l’Ordre des Mineurs (✝ 1456)',
    saintJohnOfGodReligious: 'Saint Jean de Dieu, Religieux, Fondateur des Frères de la Charité (✝ 1550)',
    saintJohnOfKantyPriest: 'Saint Jean de Kenty, Prêtre (✝ 1473)',
    saintJohnOfTheCrossPriestAndDoctor: 'Saint Jean de la Croix, Prêtre et Docteur de l’Église (✝ 1591)',
    saintJohnPaulIiPope: 'Saint Jean Paul II, Pape (✝ 2005)',
    saintJohnTheApostleAndEvangelist: 'Saint Jean, Apôtre et Évangéliste',
    saintJohnXxiiiPope: 'Saint Jean XXIII, Pape (✝ 1963)',
    saintJosaphatBishopAndMartyr: 'Saint Josaphat Kuntsevych, Évêque Basilien et Martyr (✝ 1623)',
    saintJosephineBakhitaVirgin: 'Sainte Joséphine Bakhita, Vierge et Religieuse (✝ 1947)',
    saintJosephOfCalasanzPriest: 'Saint Joseph de Calasanz, Prêtre (✝ 1648)',
    josephSpouseOfMaryCanada: 'Saint Joseph, Époux de la Bienheureuse Vierge Marie, Principal Patron du Canada',
    saintJosephTheWorker: 'Saint Joseph, Artisan (1er s.)',
    saintJuanDiegoCuauhtlatoatzin: 'Saint Juan Diego Cuauhtlatoatzin (✝ 1548)',
    saintJulianaOfLiegeVirgin: 'Sainte Julienne de Cornillon, Religieuse Augustine (✝ 1258)',
    saintJulieBilliartVirgin: 'Sainte Julie Billiart, Religieuse, Fondatrice de l’Institut des Sœurs de Notre-Dame (✝ 1816)',
    saintJustinMartyr: 'Saint Justin, Martyr (✝ 165)',
    saintKateriTekakwithaVirgin: 'Sainte Kateri Tekakwitha, Vierge Amérindienne (✝ 1680)',
    saintLambertBishopAndMartyr: 'Saint Lambert, Évêque et Martyr (✝ 705)',
    saintLawrenceOfBrindisiPriestAndDoctor: 'Saint Laurent de Brindisi, Prêtre et Docteur de l’Église (✝ 1619)',
    saintLawrenceOfRomeDeaconAndMartyr: 'Saint Laurent de Rome, Diacre et Martyr (✝ 258)',
    saintLawrenceRuizAndCompanionsMartyrs: 'Saints Laurent Ruiz et 15 compagnons, Martyrs à Nagasaki au Japon (✝ v. 1635)',
    saintLeoTheGreatPopeAndDoctor: 'Saint Léon le Grand, Pape et Docteur de l’Église',
    saintLouis: 'Saint Louis, Roi de France (✝ 1270)',
    saintLouisMarieGrignionDeMontfortPriest: 'Saint Louis-Marie Grignion de Montfort, Prêtre (✝ 1716)',
    saintLucyOfSyracuseVirginAndMartyr: 'Sainte Lucie de Syracuse, Vierge et Martyre en Sicile (✝ v. 305)',
    saintLukeTheEvangelist: 'Saint Luc, Évangéliste',
    saintMargaretMaryAlacoqueVirgin: 'Sainte Marguerite-Marie Alacoque, Visitandine à Paray-le-Monial (✝ 1690)',
    saintMargaretOfScotland: 'Sainte Marguerite d’Ecosse (✝ 1093)',
    saintMargueriteBourgeoysVirgin: 'Sainte Marguerite Bourgeoys, Religieuse, Fondatrice de la congrégation des Sœurs de Notre-Dame (✝ 1700)',
    saintMargueriteDYouvilleReligious: 'Sainte Marguerite d’Youville, Religieuse, Fondatrice des Sœurs de la Charité de Montréal (✝ 1771)',
    saintMariaGorettiVirginAndMartyr: 'Sainte Maria Goretti, Vierge et Martyre (✝ 1902)',
    saintMarieOfTheIncarnationReligious: 'Sainte Marie de l’Incarnation, Ursuline au Canada (✝ 1672)',
    saintMarkTheEvangelist: 'Saint Marc, Évangéliste',
    saintMartha: 'Sainte Marthe, Disciple du Christ (1er s.)',
    saintMartinDePorresReligious: 'Saint Martin de Porrès, Religieux Dominicain à Lima (✝ 1639)',
    saintMartinIPopeAndMartyr: 'Saint Martin Ier, Pape et Martyr (✝ 656)',
    saintMartinOfToursBishop: 'Saint Martin de Tours, Evêque (✝ 397)',
    saintMaryMagdalene: 'Sainte Marie-Madeleine, Disciple du Christ (1er s.)',
    saintMaryMagdaleneDePazziVirgin: 'Sainte Marie-Madeleine de Pazzi, Vierge de l’Ordre du Carmel (✝ 1607)',
    saintMatthewApostleAndEvangelist: 'Saint Matthieu, Apôtre et Évangéliste',
    saintMatthiasTheApostle: 'Saint Matthias, Apôtre',
    saintMaximilianMaryKolbePriestAndMartyr: 'Saint Maximilien-Marie Kolbe, Prêtre et Martyr (✝ 1941)',
    saintMonica: 'Sainte Monique, Mère de Saint Augustin d’Hippone (✝ 387)',
    saintNicholasBishop: 'Saint Nicolas, Évêque de Myre (✝ v. 350)',
    saintNorbertBishop: 'Saint Norbert, Évêque (✝ 1134)',
    saintPancrasMartyr: 'Saint Pancrace, Martyr à Rome (✝ v. 304)',
    saintPatrickBishop: 'Saint Patrick, Évêque (✝ 461)',
    saintPaulinusOfNolaBishop: 'Saint Paulin, Évêque (✝ 431)',
    saintPaulMikiAndCompanionsMartyrs: 'Saints Paul Miki et ses compagnons, Martyrs au Japon (✝ 1597)',
    saintPaulOfTheCrossPriest: 'Saint Paul de la Croix, Prêtre (✝ 1776)',
    saintPeterCanisiusPriestAndDoctor: 'Saint Pierre Canisius, Prêtre et Docteur de l’Église (✝ 1597)',
    saintPeterChanelPriestAndMartyr: 'Saint Pierre Chanel, Prêtre et Martyr (✝ 1841)',
    saintPeterChrysologusBishopAndDoctor: 'Saint Pierre Chrysologue, Évêque de Ravenne et Docteur de l’Église (✝ 451)',
    saintPeterClaverPriest: 'Saint Pierre Claver, Prêtre Jésuite (✝ 1654)',
    saintPeterDamianBishopAndDoctorOfTheChurch: 'Saint Pierre Damien, Évêque d’Ostie, Docteur de l’Église (✝ 1072)',
    saintPeterJulianEymardPriest: 'Saint Pierre-Julien Eymard, Prêtre, Fondateur des Pères du Saint-Sacrement (✝ 1868)',
    saintPhilipNeriPriest: 'Saint Philippe Néri, Prêtre (✝ 1595)',
    saintPioOfPietrelcinaPriest: 'Saint Pio de Pietrelcina (Padre Pio), Prêtre Capucin (✝ 1968)',
    saintPiusVPope: 'Saint Pie V, Pape (✝ 1572)',
    saintPiusXPope: 'Saint Pie X, Pape (✝ 1914)',
    saintPolycarpBishopAndMartyr: 'Saint Polycarpe, Évêque et Martyre (✝ 167)',
    saintPothinusBishopSaintBlandinaVirginAndTheirCompanionsMartyrs: 'Saint Pothin, Évêque, Sainte Blandine, Vierge, et leurs 46 compagnons, Martyrs à Lyon (✝ 177)',
    saintRaymondOfPenyafortPriest: 'Saint Raymond de Peñafort, Prêtre (✝ 1275)',
    saintRemigiusBishop: 'Saint Remi, Evêque de Reims (✝ 530)',
    saintRitaOfCascia: 'Sainte Rita da Cascia, Veuve puis Religieuse (✝ 1456)',
    saintRobertBellarmineBishopAndDoctor: 'Saint Robert Bellarmin, Jésuite, Évêque et Docteur de l’Eglise (✝ 1621)',
    saintRomualdAbbot: 'Saint Romuald, Anachorète et Père des moines Camaldules (✝ 1027)',
    saintRoseOfLima: 'Sainte Rose de Lima, Vierge (✝ 1617)',
    saintsAndrewZorardAndBenedictHermits: 'Saints André Svorad († 1009) et Benoît Stojislav († 1012), Ermites',
    saintsBasilTheGreatAndGregoryNazianzenBishopsAndDoctors: 'Saints Basile le Grand (✝ 379) et Grégoire de Naziance (✝ 390), Évêques et Docteurs de l’Église',
    saintsCharlesLwangaAndCompanionsMartyrs: 'Saints Charles Lwanga et ses douze compagnons, Martyrs (✝ 618)',
    saintScholasticaVirgin: 'Sainte Scolastique, Moniale, Sœur de Saint Benoît (✝ 543)',
    saintsCorneliusPopeAndCyprianBishopMartyrs: 'Saints Martyrs Corneille, Pape, et Cyprien, Évêque (3ème s.)',
    saintsCosmasAndDamianMartyrs: 'Saints Côme et Damien, Martyrs (3ème s.)',
    saintsCyrilMonkAndMethodiusBishop: 'Saints Cyrille, Moine, et Méthode, Évêque, Apôtres des Slaves au 9ème siècle, Copatrons de l’Europe',
    saintSebastianMartyr: 'Saint Sébastien, Martyr (✝ v. 284)',
    saintSixtusIiPopeAndCompanionsMartyrs: 'Saint Sixte II, Pape, et ses Diacres, Martyrs (✝ 258)',
    saintsJoachimAndAnne: 'Saints Anne et Joachim, Mère et Père de la Vierge Marie (1er siècle)',
    saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrs: 'Saints Jean de Brébeuf, Isaac Jogues, Prêtres Jésuites, et leurs compagnons, Martyrs (17ème siècle)',
    saintsJohnDeBrebeufIsaacJoguesPriestsAndCompanionsMartyrsSecondaryPatronsOfCanada: 'Saints Jean de Brébeuf, Isaac Jogues, Prêtres Jésuites, et leurs compagnons, Martyrs, Seconds Patrons du Canada (17ème siècle)',
    saintsJohnFisherBishopAndThomasMoreMartyrs: 'Saints Jean Fisher, Évêque, et Thomas More, Martyrs (✝ 1535)',
    saintsMarcellinusAndPeterMartyrs: 'Saints Martyrs Marcellin, Prêtre, et Pierre, Exorciste (✝ 304)',
    saintsMichaelGabrielAndRaphaelArchangels: 'Saints Michel, Gabriel and Raphaël, Archanges',
    saintsNereusAndAchilleusMartyrs: 'Saints Nérée et Achillée, Martyrs à Rome (✝ v. 304)',
    saintsPerpetuaAndFelicityMartyrs: 'Saintes Perpétue et Félicité, Martyres à Carthage (✝ 203)',
    saintsPhilipAndJamesApostles: 'Saint Philippe et Saint Jacques le Mineur, Apôtres',
    saintsPontianPopeAndHippolytusPriestMartyrs: 'Saints Pontien, Pape, et Hippolyte, Prêtre de Rome, Martyrs (✝ 235)',
    saintsSimonAndJudeApostles: 'Saint Simon (le Zélote) et Saint Jude (Thaddée), Apôtres',
    saintStanislausBishopAndMartyr: 'Saint Stanislas, Evêque de Cracovie, Martyr (✝ 1079)',
    saintStephenOfHungary: 'Saint Etienne, Roi de Hongrie (✝ 1038)',
    saintStephenTheFirstMartyr: 'Saint Étienne, Diacre et Premier Martyr (✝ 35)',
    saintsTimothyAndTitusBishops: 'Saints Timothée et Tite, Évêques, Disciples et compagnons de Saint Paul (1er s.)',
    saintSylvesterIPope: 'Saint Sylvestre Ier, Pape (✝ 335)',
    saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr: 'Sainte Thérèse-Bénédicte de la Croix (Edith Stein), Carmélite, Martyr en Pologne, Copatronne de l’Europe (✝ 1942)',
    saintTeresaOfJesusVirginAndDoctorOfTheChurch: 'Sainte Thérèse de Jésus (d’Avila), Vierge et Docteur de l’Église (✝ 1582)',
    saintThereseOfTheChildJesusVirginAndDoctor: 'Sainte Thérèse de l’Enfant-Jésus, Vierge et Docteur de l’Église (✝ 1897)',
    saintThereseOfTheChildJesusVirginSecondaryPatronessOfFrance: 'Sainte Thérèse de l’Enfant-Jésus, Docteur de l’Église, Seconde Patronne de la France (✝ 1897)',
    saintThomasAquinasPriestAndDoctor: 'Saint Thomas d’Aquin, Frère prêcheur, Docteur de l’Eglise (✝ 1274)',
    saintThomasBecketBishopAndMartyr: 'Saint Thomas Becket, Évêque et Martyr (✝ 1170)',
    saintThomasTheApostle: 'Saint Thomas, Apôtre',
    saintTuribiusOfMogrovejoBishop: 'Saint Alphonse Turibe de Mogrovejo, Évêque de Lima (✝ 1606)',
    saintVincentDeaconAndMartyr: 'Saint Vincent, Diacre et Martyr (✝ 304)',
    saintVincentDePaulPriest: 'Saint Vincent de Paul, Prêtre, Fondateur de la congrégation de la Mission et des Filles de la Charité (✝ 1660)',
    saintVincentFerrerPriest: 'Saint Vincent Ferrier, Prêtre de l’Ordre des Prêcheurs (✝ 1419)',
    saintWenceslausMartyr: 'Saint Venceslas, Martyr (✝ 929)',
    sevenHolyFoundersOfTheServiteOrder: 'Saint Alexis Falconieri et les fondateurs des Servites (✝ 1310)',
    sundayOfTheWordOfGod: 'Dimanche de la Parole de Dieu',
    theBeheadingOfSaintJohnTheBaptistMartyr: 'Martyre de Saint Jean-Baptiste',
    theMostHolyNameOfJesus: 'Saint Nom de Jésus',
    visitationOfTheBlessedVirginMary: 'Visitation de la Vierge Marie',
  },
} as RomcalLocale;
