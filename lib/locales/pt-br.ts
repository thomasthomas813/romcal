import { Locale } from '../types/locale';

export const locale: Locale = {
  id: 'pt-br',

  seasons: {
    advent: {
      season: 'Advento',
      weekday: '$t(weekdays:{{dow}}, capitalize) da {{week}}ª semana do Advento',
      sunday: '{{week}}º Domingo do Advento',
      privileged_weekday: '{{day}} de $t(months:11)',
    },

    christmas_time: {
      season: 'Natal',
      day: '$t(weekdays:{{dow}}, capitalize) do Tempo do Natal',
      octave: '{{count}}º dia da Oitava de Natal',
      second_sunday_after_christmas: 'Segundo Domingo do Natal',
      before_epiphany: '{{day}} de $t(months:0)',
      after_epiphany: '$t(weekdays:{{dow}}, capitalize) depois da Epifania do Senhor',
    },

    ordinary_time: {
      season: 'Tempo Comum',
      weekday: '$t(weekdays:{{dow}}, capitalize) da {{week}}ª semana do Tempo Comum',
      sunday: '{{week}}º Domingo do Tempo Comum',
    },

    lent: {
      season: 'Quaresma',
      weekday: '$t(weekdays:{{dow}}, capitalize) da {{week}}ª semana da Quaresma',
      sunday: '{{week}}º Domingo da Quaresma',
      day_after_ash_wed: '$t(weekdays:{{dow}}, capitalize) depois da Quarta-feira de Cinzas',
      holy_week_day: '$t(weekdays:{{dow}}, capitalize) of Semana Santa',
    },

    paschal_triduum: {
      season: 'Tríduo Pascal',
    },

    easter_time: {
      season: 'Páscoa',
      weekday: '$t(weekdays:{{dow}}, capitalize) da {{week}}ª semana do Tempo Pascal',
      sunday: '{{week}}º Domingo do Tempo Pascal',
      octave: 'Tempo Pascal $t(weekdays:{{dow}}, capitalize)',
    },
  },

  periods: {
    epiphany: 'Epifania do Senhor',
    holy_week: 'Semana Santa',
  },

  ranks: {
    solemnity: 'solenidade',
    sunday: 'domingo',
    feast: 'festa',
    memorial: 'memória',
    weekday: 'dia de semana',
  },

  weekdays: {
    0: 'Domingo',
    1: 'Segunda-feira',
    2: 'Terça-feira',
    3: 'Quarta-feira',
    4: 'Quinta-feira',
    5: 'Sexta-feira',
    6: 'Sábado',
  },

  months: {
    0: 'Janeiro',
    1: 'Fevereiro',
    2: 'Março',
    3: 'Abril',
    4: 'Maio',
    5: 'Junho',
    6: 'Julho',
    7: 'Agosto',
    8: 'Setembro',
    9: 'Outubro',
    10: 'Novembro',
    11: 'Dezembro',
  },

  colors: {
    black: 'preto',
    gold: 'dourado',
    green: 'verde',
    purple: 'roxo',
    red: 'vermelho',
    rose: 'roséo',
    white: 'branco',
  },

  ordinals: {
    '1': 'primeiro',
    '1_feminine': 'primeira',
    '2': 'segundo',
    '2_feminine': 'segunda',
    '3': 'terceiro',
    '3_feminine': 'terceira',
    '4': 'quarto',
    '4_feminine': 'quarta',
    '5': 'quinto',
    '5_feminine': 'quinta',
    '6': 'sexto',
    '6_feminine': 'sexta',
    '7': 'sétimo',
    '7_feminine': 'sétima',
    '8': 'oitavo',
    '8_feminine': 'oitava',
    '9': 'nono',
    '9_feminine': 'nona',
    '10': 'décimo',
    '10_feminine': 'décima',
    '11': 'décimo primeiro',
    '11_feminine': 'décima primeira',
    '12': 'décimo segundo',
    '12_feminine': 'décima segunda',
    '13': 'décimo terceiro',
    '13_feminine': 'décima terceira',
    '14': 'décimo quarto',
    '14_feminine': 'décima quarta',
    '15': 'décimo quinto',
    '15_feminine': 'décima quinta',
    '16': 'décimo sexto',
    '16_feminine': 'décima sexta',
    '17': 'décimo sétimo',
    '17_feminine': 'décima sétima',
    '18': 'décimo oitavo',
    '18_feminine': 'décima oitava',
    '19': 'décimo nono',
    '19_feminine': 'décima nona',
    '20': 'vigésimo',
    '20_feminine': 'vigésima',
    '21': 'vigésimo primeiro',
    '21_feminine': 'vigésima primeira',
    '22': 'vigésimo segundo',
    '22_feminine': 'vigésima segunda',
    '23': 'vigésimo terceiro',
    '23_feminine': 'vigésima terceira',
    '24': 'vigésimo quarto',
    '24_feminine': 'vigésima quarta',
    '25': 'vigésimo quinto',
    '25_feminine': 'vigésima quinta',
    '26': 'vigésimo sexto',
    '26_feminine': 'vigésima sexta',
    '27': 'vigésimo sétimo',
    '27_feminine': 'vigésima sétima',
    '28': 'vigésimo oitavo',
    '28_feminine': 'vigésima oitava',
    '29': 'vigésimo nono',
    '29_feminine': 'vigésima nona',
    '30': 'trigésimo',
    '30_feminine': 'trigésima',
    '31': 'trigésimo primeiro',
    '31_feminine': 'trigésima primeira',
    '32': 'trigésimo segundo',
    '32_feminine': 'trigésima segunda',
    '33': 'trigésimo terceiro',
    '33_feminine': 'trigésima terceira',
    '34': 'trigésimo quarto',
    '34_feminine': 'trigésima quarta',
  },

  names: {
    adalbert_of_prague_bishop: 'Santo Adalberto de Praga, bispo e mártir',
    adelaide_of_burgundy_empress: 'Santa Adelaide de Borgonha, imperatriz',
    adelphus_of_metz_bishop: 'São Adelfus de Métis, bispo',
    agatha_of_sicily_virgin: 'Santa Águeda da Sicília, virgem e mártir',
    agnes_of_rome_virgin: 'Santa Inês de Roma, virgem e mártir',
    albert_the_great_bishop: 'Santo Alberto Magno, bispo e doutor da Igreja',
    albertina_berkenbrock_virgin: 'Beata Albertina Berkenbrock, virgem e mártir',
    all_saints: 'Todos os Santos',
    all_saints_of_the_archdiocese_of_paris: 'Todos os Santos da Arquidiocese de Paris',
    aloysius_gonzaga_religious: 'São Luís Gonzaga, religioso',
    alphonsus_mary_liguori_bishop: 'Santo Afonso Maria Liguori, bispo e doutor da Igreja',
    amandus_of_strasbourg_bishop: 'São Amand de Estrasburgo, bispo',
    amarin_of_alsace_abbot: 'São Amarino, abade e mártir',
    ambrose_of_milan_bishop: 'Santo Ambrósio de Milão, bispo e doutor da Igreja',
    andrew_apostle: 'Santo André, apóstolo',
    andrew_de_soveral_and_ambrose_francis_ferro_priests: 'Santo André de Soveral e Santo Ambrósio Francisco Ferro, presbíteros e mártires',
    andrew_dung_lac_priest_and_companions_martyrs: 'Santo André Dũng-Lạc e Companheiros, mártires',
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs: 'Santos André Kim Taegon, presbítero, Paulo Chang Hasang e Companheiros, mártires',
    angela_merici_virgin: 'Santa Angela Merici, virgem',
    annunciation_of_the_lord: 'Anunciação do Senhor',
    anselm_of_canterbury_bishop: 'Santo Anselmo de Cantuária, bispo e doutor da Igreja',
    ansgar_of_hamburg_bishop: 'Santo Oscar de Hamburgo, bispo',
    anthony_mary_claret_bishop: 'Santo Antônio Maria Claret, bispo',
    anthony_of_egypt_abbot: 'Santo Antão, abade',
    anthony_of_padua_priest: 'Santo Antônio, presbítero e doutor da Igreja',
    anthony_of_saint_anne_galvao_priest: "Santo Antônio de Sant'Anna Galvão, presbítero",
    anthony_zaccaria_priest: 'Santo Antônio Maria Zacarias, presbítero',
    apollinaris_of_ravenna_bishop: 'Santo Apolinário, bispo e mártir',
    arbogast_of_strasbourg_bishop: 'São Arbogasto, bispo',
    arbogast_of_strasbourg_bishop_patron_of_the_archdiocese_of_strasbourg: 'São Arbogasto, bispo e patrono da Arquidiocese de Estrasburgo',
    ascension_of_the_lord: 'Ascensão do Senhor',
    ash_wednesday: 'Quarta-feira de Cinzas',
    assumption_of_the_blessed_virgin_mary: 'Assunção da Bem Aventurada Virgem Maria',
    athanasius_of_alexandria_bishop: 'Santo Atanásio, bispo e doutor da Igreja',
    audoen_of_rouen_bishop: 'São Audoeno, bispo',
    augustine_of_canterbury_bishop: 'Santo Agostinho de Cantuária, bispo',
    augustine_of_hippo_bishop: 'Santo Agostinho, bispo e doutor da Igreja',
    augustine_zhao_rong_priest_and_companions_martyrs: 'Santos Agostinho Zhao Rong, presbítero, e Companheiros, mártires',
    aurelia_of_strasbourg_virgin: 'Santa Aurélia de Estrasburgo, virgem',
    baptism_of_the_lord: 'Batismo do Senhor',
    barnabas_apostle: 'São Barnabé, apóstolo',
    bartholomew_apostle: 'São Bartolomeu, apóstolo',
    bartholomew_of_the_martyrs_fernandes_bishop: 'São Bartolomeu dos mártires, bispo',
    basil_the_great_and_gregory_nazianzen_bishops: 'São Basílio Magno e São Gregório Nazianzeno, bispos e doutores da Igreja',
    beatrice_da_silva_meneses_virgin: 'Santa Beatriz da Silva, virgem',
    bede_the_venerable_priest: 'São Beda Venerável, presbítero e doutor da Igreja',
    benedict_of_aniane_abbot: 'São Bento de Aniane, abade',
    benedict_of_nursia_abbot: 'São Bento, abade',
    bernard_of_clairvaux_abbot: 'São Bernardo, abade e doutor da Igreja',
    bernardine_of_siena_priest: 'São Bernardino de Sena, presbítero',
    blaise_of_sebaste_bishop: 'São Brás, bispo e mártir',
    blessed_martyrs_of_paris: 'Beatos mártires da Revolução Francesa',
    bonaventure_of_bagnoregio_bishop: 'São Boaventura, bispo e doutor da Igreja',
    boniface_of_mainz_bishop: 'São Bonifácio, bispo e mártir',
    bridget_of_sweden_religious: 'Santa Brígida, religiosa',
    brigid_of_kildare_virgin: 'Santa Brígida de Kildare, abadessa',
    brigid_of_kildare_virgin_copatroness_of_ireland: 'Santa Brígida de Kildare, virgem e copatrona da Irlanda',
    bruno_of_cologne_priest: 'São Bruno, presbítero',
    cajetan_of_thiene_priest: 'São Caetano, presbítero',
    callistus_i_pope: 'São Calisto I, papa e mártir',
    camillus_de_lellis_priest: 'São Camilo de Lellis, presbítero',
    carmelites_of_compiegne_virgins_and_martyrs: 'Beatas Carmelitas de Compiègne, virgens e mártires',
    casimir_of_poland: 'São Casimiro',
    catherine_of_alexandria_virgin: 'Santa Catarina de Alexandria, virgem e mártir',
    catherine_of_siena_virgin: 'Santa Catarina de Siena, virgem e doutor da Igreja',
    catherine_zoe_laboure_virgin: 'Santa Catarina Labouré, virgem',
    cecilia_of_rome_virgin: 'Santa Cecília, virgem e mártir',
    ceraunus_of_paris_bishop: 'São Cerauno de Paris, bispo',
    chair_of_saint_peter_the_apostle: 'Cátedra de São Pedro, Apóstolo',
    charles_borromeo_bishop: 'São Carlos Borromeu, bispo',
    charles_lwanga_and_companions_martyrs: 'Santos Carlos Lwanga e companheiros, mártires',
    charles_of_jesus_de_foucauld: 'São Carlos de Foucauld, presbítero',
    christopher_magallanes_priest_and_companions_martyrs: 'Santos Cristóvão de Magalhães, presbítero, e Companheiros, mártires',
    clare_of_assisi_virgin: 'Santa Clara de Assis, virgem',
    clement_i_pope: 'São Clemente I, papa e mártir',
    columban_of_luxeuil_abbot: 'São Columbano, abade',
    commemoration_of_all_the_faithful_departed: 'Comemoração de Todos os Fiéis Defuntos',
    conversion_of_saint_paul_the_apostle: 'Conversão de São Paulo, Apóstolo',
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: 'Santos Cornélio, papa, e Cipriano, bispo, mártires',
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: 'Santos Cosme e Damião, mártires',
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop: 'São Cirilo o Filósofo, monge, e São Metódio, bispo',
    cyril_of_alexandria_bishop: 'São Cirilo de Alexandria, bispo e doutor da Igreja',
    cyril_of_jerusalem_bishop: 'São Cirilo de Jerusalém, bispo e doutor da Igreja',
    damasus_i_pope: 'São Dâmaso I, papa',
    daniel_brottier_priest: 'Beato Daniel Brottier, presbítero',
    dedication_of_consecrated_churches: 'Dedicação de Igrejas Consagradas', // TODO: l10n to review: Dedication of Consecrated Churches Whose Date of Consecration is Unknown
    dedication_of_the_basilica_of_saint_mary_major: 'Dedicação da basílica de Santa Maria Maior',
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: 'Dedicação das Basílicas dos Santos Pedro e Paulo, Apóstolos',
    dedication_of_the_cathedral_basilica_of_saint_denis_france: 'Dedicação da Catedral Basílica de Saint-Denis, França',
    dedication_of_the_cathedral_of_notre_dame_de_strasbourg_france: 'Dedicação da Catedral de Notre-Dame de Estrasburgo, França',
    dedication_of_the_lateran_basilica: 'Dedicação da basílica de Latrão',
    dedication_of_the_notre_dame_de_paris_cathedral_paris_france: 'Dedicação da Catedral de Notre-Dame de Paris, França',
    denis_of_paris_bishop_and_companions_martyrs: 'São Dionísio, bispo, e companheiros, mártires',
    denis_of_paris_bishop_patron_of_the_archdiocese_of_paris: 'São Dionísio, bispo e mártir, patrono da Arquidiocese de Paris',
    denis_of_paris_bishop_patron_of_the_city_and_of_the_diocese_of_saint_denis: 'São Dionísio, bispo e mártir, patrono da Cidade e da Diocese de Saint-Denis',
    divine_mercy_sunday: '{{week}}º Domingo do Tempo Pascal ou Domingo da Misericórdia',
    dominic_de_guzman_priest: 'São Domingos, presbítero',
    easter_sunday: 'Domingo da Páscoa',
    eligius_of_noyon_bishop: 'Santo Elígio, bispo',
    elizabeth_of_hungary_religious: 'Santa Isabel da Hungria, religiosa',
    elizabeth_of_portugal: 'Santa Isabel de Portugal',
    ephrem_the_syrian_deacon: 'Santo Efrém, o Sírio, diácono',
    epiphany_of_the_lord: 'Epifania do Senhor',
    eucharius_of_trier_bishop: 'Santo Eucario, bispo',
    eugenia_of_alsace_and_attala_of_alsace_virgins: 'Santas Eugenia e Attala, virgens',
    eusebius_of_vercelli_bishop: 'Santo Eusébio de Vercelli, bispo',
    exaltation_of_the_holy_cross: 'Exaltação da Santa Cruz',
    fabian_i_pope: 'São Fabiano, pap e mártir',
    faustina_kowalska_virgin: 'Santa Faustina Kowalska, virgem',
    fidelis_of_sigmaringen_priest: 'São Fiel de Sigmaringa, presbítero e mártir',
    first_martyrs_of_the_holy_roman_church: 'Primeiros mártires da Igreja de Roma',
    five_wounds_of_the_lord: 'As Cinco Chagas do Senhor',
    florentius_of_strasbourg_bishop: 'São Florêncio, bispo',
    frances_of_rome_religious: 'Santa Francisca Romana, religiosa',
    francis_de_sales_bishop: 'São Francisco de Sales, bispo e doutor da Igreja',
    francis_of_assisi: 'São Francisco de Assis, religioso',
    francis_of_paola_hermit: 'São Francisco de Paula, eremita',
    francis_xavier_priest: 'São Francisco Xavier, presbítero',
    frederic_ozanam_founder: 'Beato Frederico Ozanam, fundador',
    friday_of_the_passion_of_the_lord: 'Sexta-feira Santa',
    fructuosus_of_braga_martin_of_braga_and_gerald_of_braga_bishops: 'São Frutuoso de Braga, São Martinho de Braga e São Geraldoo de Braga, bispos',
    george_of_lydda_martyr: 'São Jorge, mártir',
    germain_of_paris_bishop: 'São Germano, bispo',
    gertrude_the_great_virgin: 'Santa Gertrudes, virgem',
    gregory_i_the_great_pope: 'São Gregório Magno, papa e doutor da Igreja',
    gregory_of_narek_abbot: 'São Gregório de Narek, abade e doutor da Igreja',
    gregory_vii_pope: 'São Gregório VII, papa',
    guardian_angel_of_portugal: 'Anjo da Guarda de Portugal',
    gundisalvus_of_amarante_priest: 'São Gonçalo de Amarante, presbítero',
    gundisalvus_of_lagos_priest: 'São Gonçalo de Lagos, presbítero',
    hedwig_of_silesia_religious: 'Santa Edviges, religiosa',
    henry_ii_emperor: 'Santo Henrique',
    hilary_of_poitiers_bishop: ' Santo Hilário, bispo e doutor da Igreja',
    hildegard_of_bingen_abbess: 'Santa Hildegarda de Bingen, virgem e doutora da Igreja',
    holy_family_of_jesus_mary_and_joseph: 'Sagrada Família',
    holy_guardian_angels: 'Santos Anjos da Guarda',
    holy_innocents_martyrs: 'Santos Inocentes, mártires',
    holy_saturday: 'Sábado Santo',
    holy_thursday: 'Quinta-feira Santa',
    ignatius_de_azevedo_priest_and_companions_martyrs: 'Beatos Inácio de Azevedo, presbítero, e companheiros, mártires',
    ignatius_of_antioch_bishop: 'Santo Inácio de Antioquia, bispo e mártir',
    ignatius_of_loyola_priest: 'Santo Inácio de Loiola, presbítero',
    immaculate_conception_of_the_blessed_virgin_mary: 'Imaculada Conceição',
    immaculate_heart_of_mary: 'Imaculado Coração de Maria',
    innocent_v_pope: 'Papa Beato Inocêncio V',
    irenaeus_of_lyon_bishop: 'Santo Irineu de Lyon, bispo, doutor da Igreja e mártir',
    isabelle_of_france_virgin: 'Beata Isabel de França, virgem',
    isidore_of_seville_bishop: 'Santo Isidoro de Sevilha, bispo e doutor da Igreja',
    jacinta_marto_and_francisco_marto: 'Santos Francisco Marto e Jacinta Marto',
    james_apostle: 'São Tiago, Apóstolo',
    jane_frances_de_chantal_religious: 'Santa Joana Francisca de Chantal, religiosa',
    januarius_i_of_benevento_bishop: 'São Januário, bispo e mártir',
    jerome_emiliani: 'São Jerônimo Emiliani',
    jerome_of_stridon_priest: 'São Jerônimo, presbítero e doutor da Igreja',
    joachim_and_anne_parents_of_mary: 'Santos Joaquim e Ana, pais da Virgem Santa Maria',
    joan_of_portugal_virgin: 'Beata Joana de Portugal, virgem',
    john_apostle: 'São João, apóstolo e evangelista',
    john_baptist_de_la_salle_priest: 'São João Batista de La Salle, presbítero',
    john_bosco_priest: 'São João Bosco, presbítero',
    john_chrysostom_bishop: 'São João Crisóstomo, bispo e doutor da Igreja',
    john_damascene_priest: 'São João Damasceno, presbítero e doutor da Igreja',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs: 'Santos João de Brébeuf, Isaac Jogues, presbíteros, e Companheiros, mártires',
    john_de_britto_priest: 'São João de Brito, presbítero e mártir',
    john_eudes_priest: 'São João Eudes, presbítero',
    john_fisher_bishop_and_thomas_more_martyrs: ' Santos João Fisher, bispo, e Tomás Moro, mártires',
    john_i_pope: 'São João I, papa e mártir',
    john_leonardi_priest: 'São João Leonardi, presbítero',
    john_mary_vianney_priest: 'São João Maria Vianney, presbítero',
    john_of_avila_priest: 'São João De Ávila, presbítero e doutor da Igreja',
    john_of_capistrano_priest: 'São João de Capistrano, presbítero',
    john_of_god_duarte_cidade_religious: 'São João de Deus, religioso',
    john_of_kanty_priest: 'São João de Kenty, presbítero',
    john_of_the_cross_priest: 'São João da Cruz, presbítero e doutor da Igreja',
    john_paul_ii_pope: 'Papa São João Paulo II',
    john_xxiii_pope: 'Papa São João XXIII',
    josaphat_kuntsevych_bishop: 'São Josafa Kuncewicz, bispo',
    joseph_de_anchieta_priest: 'São José de Anchieta, presbítero',
    joseph_of_calasanz_priest: 'São José de Calasanz, presbítero',
    joseph_spouse_of_mary: 'São José, esposo de Maria',
    joseph_the_worker: 'São José Operário',
    josephine_bakhita_virgin: 'Santa Josefina Bakhita, virgem',
    juan_diego_cuauhtlatoatzin: 'São João Diogo Cuauhtlatoatzin',
    justin_martyr: 'São Justino, mártir',
    landry_of_paris_bishop: 'São Landry de Paris, bispo',
    lawrence_of_brindisi_priest: 'São Lourenço de Brindes, presbítero e doutor da Igreja',
    lawrence_of_rome_deacon: 'São Lourenço de Roma, diácono e mártir',
    lawrence_ruiz_and_companions_martyrs: 'Santos Lourenço Ruiz e Companheiros, mártires',
    leo_i_the_great_pope: 'São Leão Magno, papa e doutor da Igreja',
    leodegar_of_autun_bishop: 'São Leodegar de Autun, bispo e mártir',
    louis_grignion_de_montfort_priest: 'São Luís Maria Grignion de Montfort, presbítero',
    louis_ix_of_france: 'São Luis de França',
    louise_de_marillac_religious: 'Santa Luísa de Marillac, religiosa',
    lucy_of_syracuse_virgin: 'Santa Luzia, virgem e mártir',
    ludan_of_scotland_pilgrim: 'São Ludan, peregrino',
    luke_evangelist: 'São Lucas, evangelista',
    madeleine_sophie_barat_virgin: 'Santa Magdalena Sofia Barat, virgem',
    marcellinus_of_rome_and_peter_the_exorcist_martyrs: 'Santos Marcelino e Pedro, mártires',
    marcellus_of_paris_bishop: 'São Marcelo de Paris, bispo',
    margaret_mary_alacoque_virgin: 'Santa Margarida Maria Alacoque, virgem',
    margaret_of_scotland: 'Santa Margarida da Escócia',
    maria_goretti_virgin: 'Santa Maria Goretti, virgem e mártir',
    marie_eugenie_of_jesus_milleret_de_brou_virgin: 'Santa Marie-Eugénie de Jésus Milleret de Brou, virgem e fundadora',
    mark_evangelist: 'São Marcos, evangelista',
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: 'Santa Marta, Maria e Lázaro',
    martin_de_porres_religious: 'São Martinho de Porres, religioso',
    martin_i_pope: 'São Martinho I, papa e mártir',
    martin_of_tours_bishop: 'São Martinho de Tours, bispo',
    mary_magdalene: 'Santa Maria Madalena',
    mary_magdalene_de_pazzi_virgin: 'Santa Maria Madalena de Pazzi, virgem',
    mary_mother_of_god: 'Maria, Mãe de Deus',
    mary_mother_of_the_church: 'Bem-aventurada Virgem Maria, Mãe da Igreja',
    mary_of_the_incarnation_barbara_acarie_religious: 'Beata Maria da Encarnação Bárbara Acarie, religiosa',
    mary_of_the_incarnation_marie_guyart_religious: 'Santa Maria da Encarnação Maria Guyart, religiosa',
    mary_of_the_providence_eugenie_smet_virgin: 'Beata Maria da Providência Eugênia Smet, virgem',
    mary_of_the_sacred_heart_sophie_therese_de_soubiran_la_louviere_virgin: 'Beata Maria Teresa de Soubiran La Louvière, virgem',
    maternus_of_cologne_bishop: 'São Materno, bispo',
    maternus_of_cologne_valerius_of_trier_and_eucharius_of_trier_bishops: 'Santos Materno, Valério e Eucário, bispos',
    matthew_apostle: 'São Mateus, apóstolo e evangelista',
    matthias_apostle: 'São Matias, apóstolo',
    maximilian_mary_raymund_kolbe_priest: 'São Maximiliano Maria Kolbe, presbítero e mártir',
    mederic_of_autun_and_droctoveus_of_autun_abbots: 'Santos Mederico e Droctoveo, abades',
    michael_gabriel_and_raphael_archangels: 'Santos Miguel, Gabriel e Rafael, arcanjos',
    modestus_andlauer_and_andrew_bauer_martyrs: 'Santos Modesto Andlauer e André Bauer, mártires',
    modestus_andlauer_martyr: 'São Modesto Andlauer, mártir',
    monica_of_hippo: 'Santa Mônica de Hipona',
    morand_of_cluny_monk: 'São Morando, monge',
    most_holy_body_and_blood_of_christ: 'Corpus Christi',
    most_holy_name_of_jesus: 'Santíssimo Nome de Jesus',
    most_holy_name_of_mary: 'Santíssimo Nome de Maria',
    most_holy_trinity: 'Santíssima Trindade',
    most_sacred_heart_of_jesus: 'Sagrado Coração de Jesus',
    nativity_of_john_the_baptist: 'Nascimento de João Batista',
    nativity_of_the_blessed_virgin_mary: 'Natividade da Virgem Santa Maria',
    nativity_of_the_lord: 'Natal',
    nereus_of_terracina_and_achilleus_of_terracina_martyrs: 'Santos Nereu e Aquileu, mártires',
    nicholas_barre_priest: 'Beato Nicolau Barré, presbítero',
    nicholas_of_myra_bishop: 'São Nicolau, bispo',
    norbert_of_xanten_bishop: 'São Norberto, obispo',
    nuno_of_saint_mary_pereira_religious: 'São Nuno de Santa Maria, religioso',
    odile_of_alsace_abbess: 'Santa Odília, abadessa',
    odile_of_alsace_abbess_patroness_of_alsace: 'Santa Odília, abadessa, patrona da Alsácia',
    our_lady_help_of_christians: 'Nossa Senhora, Auxílio dos Cristãos',
    our_lady_mediatrix_of_all_grace: 'Nossa Senhora, Medianeira de todas as Graças',
    our_lady_mother_of_divine_providence_patroness_of_puerto_rico: 'Nossa Senhora, Mãe da Divina Providência',
    our_lady_of_aparecida: 'Nossa Senhora da Conceição Aparecida',
    our_lady_of_aparecida_patroness_of_brazil: 'Nossa Senhora Aparecida',
    our_lady_of_china: 'Nossa Senhora da China',
    our_lady_of_fatima: 'Nossa Senhora de Fatima',
    our_lady_of_good_counsel: 'Nossa Senhora do Bom Conselho',
    our_lady_of_guadalupe: 'Nossa Senhora de Guadalupe',
    our_lady_of_hungary_patroness_of_hungary: 'Nossa Senhora da Hungria',
    our_lady_of_loreto: 'Nossa Senhora de Loreto',
    our_lady_of_lourdes: 'Nossa Senhora de Lourdes',
    our_lady_of_lujan_patroness_of_argentina: 'Nossa Senhora de Luján, padroeira da Argentina',
    our_lady_of_mount_carmel: 'Nossa Senhora do Monte Carmelo',
    our_lady_of_perpetual_help: 'Nossa Senhora do Perpétuo Socorro',
    our_lady_of_sorrows: 'Nossa Senhora das Dores',
    our_lady_of_the_gate_of_dawn: 'Nossa Senhora da Porta da Aurora',
    our_lady_of_the_miraculous_medal: 'Nossa Senhora da Medalha Milagrosa',
    our_lady_of_the_pillar: 'Nossa Senhora do Pilar',
    our_lady_of_the_rosary: 'Nossa Senhora do Rosário',
    our_lady_queen_of_peace: 'Nossa Senhora Rainha da Paz',
    our_lady_refuge_of_sinners: 'Nossa Senhora, Refúgio dos Pecadores',
    our_lord_jesus_christ_king_of_the_universe: 'Cristo Rei do Universo',
    palm_sunday_of_the_passion_of_the_lord: 'Domingo de Ramos',
    pancras_of_rome_martyr: 'São Pancrácio, mártir',
    passion_of_saint_john_the_baptist: 'Martírio de São João Batista',
    patrick_of_ireland_bishop: 'São Patrício, bispo',
    paul_miki_and_companions_martyrs: 'Santos Paulo Miki e Companheiros, mártires',
    paul_of_the_cross_priest: 'São Paulo da Cruz, presbítero',
    paul_vi_pope: 'São Paulo VI, papa',
    paulina_of_the_agonizing_heart_of_jesus_visintainer_virgin: 'Santa Paulina do Coração Agonizante de Jesus Visintainer, virgem',
    paulinus_of_nola_bishop: 'São Paulino de Nola, bispo',
    pentecost_sunday: 'Pentecostes',
    perpetua_of_carthage_and_felicity_of_carthage_martyrs: 'Santas Perpétua e Felicidade, mártires',
    peter_and_paul_apostles: 'São Pedro e São Paulo, Apóstolos',
    peter_canisius_priest: 'São Pedro Canísio, presbítero e doutor da Igreja',
    peter_chanel_priest: 'São Pedro Chanel, presbítero e mártir',
    peter_chrysologus_bishop: 'São Pedro Crisólogo, bispo',
    peter_claver_priest: 'São Pedro Claver, presbítero',
    peter_damian_bishop: 'São Pedro Damião, bispo e doutor da Igreja',
    peter_julian_eymard_priest: 'São Pedro Juliano Eymard, presbítero',
    philip_and_james_apostles: 'São Filipe e Tiago, apóstolos',
    philip_neri_priest: 'São Filipe Néri, presbítero',
    pius_francesco_forgione_priest: 'São Pio de Pietrelcina, presbítero',
    pius_v_pope: 'São Pio V, papa',
    pius_x_pope: 'São Pio X, papa',
    polycarp_of_smyrna_bishop: 'São Policarpo, bispo e mártir',
    pontian_i_pope_and_hippolytus_of_rome_priest: 'Santos Pôncio I, papa, e Hipólito de Roma, presbítero',
    presentation_of_the_blessed_virgin_mary: 'Apresentação da Virgem Maria',
    presentation_of_the_lord: 'Apresentação do Senhor',
    queenship_of_the_blessed_virgin_mary: 'Bem-aventurada virgem Maria, Rainha do Céu',
    raymond_of_penyafort_priest: 'São Raimundo de Penyafort, presbítero',
    richardis_of_swabia_empress: 'Santa Ricarda, imperatriz',
    rita_of_cascia_religious: 'Santa Rita de Cássia, religiosa',
    robert_bellarmine_bishop: 'São Roberto Belarmino, bispo e doutor da Igreja',
    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests: 'São Roque González Alfonso Rodríguez e São João del Castillo, presbíteros e mártires',
    romuald_of_ravenna_abbot: 'São Romualdo, abade',
    rosalie_jeanne_marie_rendu_virgin: 'Beata Rosália Rendu, virgem',
    rose_of_lima_virgin: 'Santa Rosa de Lima, virgem',
    sancha_of_portugal_and_mafalda_of_portugal_virgins: 'Beatas Sancha e Mafalda, virgens, e Teresa, religiosa',
    scholastica_of_nursia_virgin: 'Santa Escolástica, virgem',
    sebastian_of_milan_martyr: 'São Sebastião, mártir',
    seven_holy_founders_of_the_servite_order: 'Santos Sete Fundadores da Ordem dos Servitas',
    sharbel_makhluf_priest: 'São Charbel Makhluf, presbítero',
    simon_and_jude_apostles: 'Santos Simão e São Judas Tadeu, apóstolos',
    sixtus_ii_pope_and_companions_martyrs: 'São Sisto II, papa, e seus companheiros, mártires',
    stanislaus_of_szczepanow_bishop: 'Santo Estanislau, bispo e mártir',
    stephen_i_of_hungary: 'Santo Estêvão da Hungria',
    stephen_the_first_martyr: 'Santo Estêvão, primeiro mártir',
    sunday_of_the_word_of_god: '{{week}}º Domingo do Tempo Comum, ou Domingo da Palavra de Deus',
    sylvester_i_pope: 'São Silvestre I, papa',
    teresa_benedicta_of_the_cross_stein_virgin: 'Santa Teresa Benedita da Cruz, virgem e mártir',
    teresa_of_jesus_of_avila_virgin: 'São João de Ávila, presbítero e doutor da Igreja',
    teresa_of_portugal_religious: 'Beata Teresa de Portugal, religiosa',
    theotonius_of_coimbra_priest: 'Santo Teotónio, presbítero',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: 'Santa Teresinha do Menino Jesus, virgem e doutora da Igreja',
    thomas_apostle: 'São Tomé, apóstolo',
    thomas_aquinas_priest: 'São Tomás de Aquino, presbítero e doutor da Igreja',
    thomas_becket_bishop: 'São Tomás de Cantuária, bispo',
    thomas_jean_georges_rehm_priest: 'Beato Tomás João Jorge Rehm, presbítero e mártir',
    thursday_of_the_lords_supper: '$(names:holy_thursday)',
    timothy_of_ephesus_and_titus_of_crete_bishops: 'Santos Timóteo e Tito, bispos',
    transfiguration_of_the_lord: 'Transfiguração do Senhor',
    translation_of_the_relics_of_odile_of_alsace_abbess: 'Trasladação dos restos mortais da Santa Odília',
    turibius_of_mogrovejo_bishop: 'São Turíbio de Mongrovejo, bispo',
    urban_i_pope: 'Papa São Urbano I',
    valerius_of_trier_bishop: 'São Valério, bispo',
    vincent_de_paul_priest: 'São Vicente de Paulo, presbítero',
    vincent_ferrer_priest: 'São Vicente Ferrer, presbítero',
    vincent_of_saragossa_deacon: 'São Vicente de Saragoça, diácono',
    visitation_of_mary: 'Visitação da Nossa Senhora',
    wenceslaus_i_of_bohemia_martyr: 'São Venceslau, mártir',
    wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation: 'São Venceslau, mártir e patrono da nação tcheca',
    wendelin_of_trier_hermit: 'São Vendelino, eremita',
  },
};
