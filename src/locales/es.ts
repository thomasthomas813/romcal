import { RomcalLocale } from '@romcal/models/locale/romcal-locale.type';

export default {
  advent: {
    season: 'Adviento',
    weekday: '{{day}} de la {{week}} semana de Adviento',
    sunday: '{{week}} Domingo de Adviento',
  },
  christmastide: {
    season: 'Navidad',
    day: '{{day}} de Navidad',
    octave: '{{count}} día de la Octava de Navidad',
    sunday: '{{count}} Domingo de Navidad',
  },
  epiphany: {
    season: 'Epifanía',
    before: '{{day}} antes de la Epifanía',
    after: '{{day}} después de la Epifanía',
  },
  ordinary_time: {
    season: 'Tiempo Ordinario',
    weekday: '{{day}} de la {{week}} semana del Tiempo Ordinario',
    sunday: '{{week}} Domingo del Tiempo Ordinario',
  },
  lent: {
    season: 'Cuaresma',
    weekday: '{{day}} de la {{week}} semana de Cuaresma',
    sunday: '{{week}} Domingo de Cuaresma',
    day_after_ash_wed: '{{day}} después de Miércoles de Ceniza',
  },
  holy_week: {
    season: 'Semana Santa',
    weekday: '{{day}} de Semana Santa',
  },
  paschal_triduum: {
    season: 'Triduo Pascual',
  },
  eastertide: {
    season: 'Pascua',
    weekday: '{{day}} de la {{week}} semana de Pascua',
    sunday: '{{week}} Domingo de Pascua',
    octave: '{{day}} día de la Octava de Pascua',
  },
  liturgicalColors: {
    BLACK: 'negro',
    GOLD: 'dorado',
    GREEN: 'verde',
    PURPLE: 'modaro',
    RED: 'rojo',
    ROSE: 'rosa',
    WHITE: 'blanco',
  },
  ranks: {
    SOLEMNITY: 'solemnidades',
    SUNDAY: 'Domingo',
    TRIDUUM: 'Triduo Pascual',
    HOLY_WEEK: 'Semana Santa',
    FEAST: 'fiesta',
    MEMORIAL: 'memoria',
    OPT_MEMORIAL: 'memoria opcional',
    COMMEMORATION: 'conmemoración',
    WEEKDAY: 'ferial',
  },
  celebrations: {
    all_saints: 'Todos los Santos',
    annunciation: 'Anunciación',
    ascension: 'Ascensión del Señor',
    ash_wednesday: 'Miércoles de Ceniza',
    assumption: 'La Asunción de la Santísima Vírgen María',
    baptism_of_the_lord: 'Bautismo del Señor',
    nativity_of_john_the_baptist: 'Nacimiento de Juan Bautista',
    christmas: 'Navidad',
    christ_the_king_sunday: 'Cristo Rey',
    corpus_christi: 'Corpus Christi',
    divine_mercy_sunday: 'Domingo de la Divina Misericordia',
    easter_sunday: 'Domingo de Pascua',
    epiphany: 'Epifanía',
    good_friday: 'Viernes Santo',
    holy_family: 'Sagrada Familia',
    holy_saturday: 'Sábado Santo',
    holy_thursday: 'Jueves Santo',
    immaculate_conception_of_mary: 'Inmaculada Concepción',
    immaculate_heart_of_mary: 'Inmaculado Corazón de María',
    joseph_spouse_of_mary: 'José, Esposo de María',
    mary_mother_of_god: 'María, Madre de Dios',
    palm_sunday: 'Domingo de Ramos',
    pentecost_sunday: 'Pentecostés',
    peter_and_paul_apostles: 'San Pedro y San Pablo, Apóstoles',
    presentation_of_the_lord: 'Presentación de Jesús en el Templo',
    most_sacred_heart_of_jesus: 'Sagrado Corazón de Jesús',
    exaltation_of_the_holy_cross: 'Adoración de la Cruz',
    transfiguration: 'Transfiguración',
    trinity_sunday: 'Domingo de la Santísima Trinidad',
  },
  sanctoral: {
    '205_blessed_martyrs_of_japan': '205 Beatos y Mártires de Japón',
    all_saints_of_ireland: 'Todos los Santos de Irlanda',
    all_saints_of_wales: 'Todos los santos de Gales',
    all_souls: 'Todas las almas',
    nativity_of_mary: 'Nacimiento de la Santísima Vírgen María',
    carlos_manuel_rodriguez_santiago: 'Beato Carlos Manuel Rodriguez',
    catherine_of_saint_augustine_virgin: 'Beata María Catalina de San Agustín, Vírgen',
    innocent_xi_pope: 'Beato Inocencio XI, Papa',
    jacinta_marto_and_francisco_marto: 'Beatos Jacinta y Francisco Marto',
    laura_vicuna_virgin: 'Beata Laura Vicuna, Vírgen',
    marydolores_rodriguez_sopena_virgin: 'Beata Maria Dolores Rodriguez Sopena, Vírgen',
    pius_ix_pope: 'Beato Pío IX, Papa',
    peter_de_zuniga_and_louis_flores_priests: 'Beatos Pedro Zuniga y Luis Flores, Sacerdotes y Mártires',
    chair_of_saint_peter_the_apostle: 'Cátedra de San Pedro, Apóstol',
    conversion_of_saint_paul_the_apostle: 'Conversión de San Pablo, Apóstol',
    dedication_of_the_basilica_of_saint_mary_major: 'Dedicación de la Basílica de Santa María Mayor',
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles: 'Dedicación de las Basílicas de San Pedro y San Pablo, Apóstoles',
    first_martyrs_of_the_holy_roman_church: 'Primeros Mártires de la Iglesia de Roma',
    guardian_angels: 'Ángeles Custodios',
    holy_innocents_martyrs: 'Santos Inocentes, Mártires',
    most_holy_name_of_mary: 'Santo Nombre de la Santísima Vírgen María',
    mary_mother_of_the_church: 'María, Madre de la Iglesia',
    our_lady_help_of_christians: 'Nuestra Señora, Auxilio de los Cristianos',
    our_lady_mother_of_mercy: 'Nuestra Señora, Madre de la Misericordia',
    our_lady_of_aparecida_principal_patroness_of_brazil: 'Nuestra Señora de Aparecida, Patrona Principal de Brasil',
    our_lady_of_bethlehem: 'Nuestra Señora de Belén',
    our_lady_of_fatima: 'Nuestra Señora de Fátima',
    our_lady_of_good_counsel: 'Nuestra Señora del Buen Consejo',
    our_lady_of_guadalupe: 'Nuestra Señora de Guadalupe',
    our_lady_of_loreto: 'Nuestra Señora de Loreto',
    our_lady_of_lourdes: 'Nuestra Señora de Lourdes',
    our_lady_of_lujan_principal_patroness_of_argentina: 'Nuestra Señora de Luján, Patrona Principal de Argentina',
    our_lady_of_mercy: 'Nuestra Señora de la Misericordia',
    our_lady_of_mount_carmel: 'Nuestra Señora del Monte Carmelo',
    our_lady_of_mount_carmel_mother_and_queen_of_chile: 'Nuestra Señora del Monte Carmelo, Madre y Reina de Chile',
    our_lady_of_peace: 'Nuestra Señora, Reina de la Paz',
    our_lady_of_sorrows: 'Nuestra Señora del Socorro',
    our_lady_of_the_pillar: 'Nuestra Señora del Pilar',
    our_lady_of_the_rosary: 'Nuestra Señora del Rosario',
    our_lord_jesus_christ_the_eternal_high_priest: 'Nuestro Señor Jesucristo, Sumo y Eterno Sacerdote',
    our_lord_of_miracles: 'Nuestro Señor de los Milagros',
    john_paul_ii_pope: 'Papa San Juan Pablo II',
    john_xxiii_pope: 'Papa San Juan XXIII',
    presentation_of_mary: 'Presentación de la Santísima Vírgen María',
    queenship_of_mary: 'Santísima Vírgen María, Reina del Cielo',
    agatha_of_sicily_virgin: 'Santa Ágatha, Vírgen y Mártir',
    agnes_of_rome_virgin: 'Santa Agnes, Vírgen y Mártir',
    alban_of_britain_martyr: 'San Albano, Mártir',
    alberto_hurtado_priest: 'San Alberto Hurtado, Sacerdote',
    albert_the_great_bishop: 'San Alberto Magno, Obispo y Doctor',
    aloysius_gonzaga_religious: 'San Luis Gonzaga, Religioso',
    ambrose_of_milan_bishop: 'San Ambrosio, Obispo y Doctor',
    andrew_apostle: 'San Andrés, Apóstol',
    angela_merici_virgin: 'Santa Ángela Merici, Vírgen',
    joachim_and_anne_principal_patroness_of_the_province_of_quebec_parents_of_mary: 'Santa Ana, Patrona Principal de Quebec, y San Joaquín, Padres de la Santísima Vírgen María',
    anselm_of_canterbury_bishop: 'San Anselmo de Canterbury, Obispo y Doctor de la Iglesia',
    anthony_mary_claret_bishop: 'San Antonio María Claret, Obispo',
    anthony_of_egypt_abbot: 'San Antonio de Egipto, Abad',
    anthony_of_padua_priest: 'San Antonio de Padua, Sacerdote y Doctor de la Iglesia',
    augustine_of_canterbury_bishop: 'San Agustín de Canterbury, Obispo',
    augustine_of_hippo_bishop: 'San Agustín de Hipona, Obispo y Doctor de la Iglesia',
    barbara_of_heliopolis_virgin: 'Santa Bárbara, Vírgen y Mártir',
    barnabas_apostle: 'San Bernabé, Apóstol',
    bartholomew_apostle: 'San Bartolomeo, Apóstol',
    beatrice_da_silva_meneses_virgin: 'Santa Beatriz da Silva, Vírgen',
    bede_the_venerable_priest: 'San Beda el Venerable, Sacerdote y Doctor de la Iglesia',
    gregory_vii_pope: 'San Gregorio VII, Papa',
    mary_magdalene_de_pazzi_virgin: 'Santa María Magdalena de Pazzi, Vírgen',
    bernardine_of_siena_priest: 'San Bernardino de Siena, Sacerdote',
    bernard_of_clairvaux_abbot: 'San Bernardo de Clairvaux, Abad y Doctor de la Iglesia',
    beuno_of_wales_abbot: 'San Beuno, Abad',
    blaise_of_sebaste_bishop: 'San Blás, Obispo y Mártir',
    ansgar_of_hamburg_bishop: 'San Ascario, Obispo',
    bonaventure_of_bagnoregio_bishop: 'San Buenaventura, Obispo y Doctor',
    boniface_of_mainz_bishop: 'San Bonifacio, Obispo y Mártir',
    brigid_of_kildare_virgin_secondary_patron_of_ireland: 'Santa Brígida de Kildare, Vírgen y Patrona Secundaria de Irlanda',
    bruno_of_cologne_priest: 'San Bruno, Sacerdote',
    casimir_of_poland: 'San Casimiro',
    catherine_of_alexandria_virgin: 'Santa Catalina de Alexandria, Vírgen y Mártir',
    catherine_of_siena_virgin: 'Santa Catalina de Siena, Vírgen y Doctor de la Iglesia',
    cecilia_of_rome_virgin: 'Santa Cecilia, Vírgen y Mártir',
    christopher_magallanes_priest_and_companions_martyrs: 'San Cristóbal Magallanes, Sacerdote y Compañeros, Mártires',
    christopher_of_palestine_martyr: 'San Cristóbal, Mártir',
    clare_of_assisi_virgin: 'Santa Clara, Vírgen',
    clement_i_pope: 'San Clemente I, Papa y Mártir',
    columban_of_ireland_abbot: 'San Columbano, Abad',
    clotilde_of_burgundy: 'Santa Clotilde',
    cyril_of_alexandria_bishop: 'San Cirilio de Alexandria, Obispo y Doctor',
    cyril_of_jerusalem_bishop: 'San Cirilio de Jerusalén, Obispo y Doctor',
    david_of_wales_bishop: 'San David, Obispo',
    dominic_de_guzman_priest: 'Santo Domingo de Guzmán, Sacerdote',
    elijah_prophet: 'San Elías, profeta',
    eulalia_of_merida_virgin: 'Santa Eulalia de Mérida, Vírgen y Mártir',
    eulogius_of_cordoba_bishop: 'San Eulogio de Córdoba, Obispo',
    ezequiel_moreno_bishop: 'San Ezequiel Moreno, Obispo',
    faustina_kowalska_virgin: 'Santa Faustina Kowalska, Vírgen',
    philip_of_jesus_de_las_casas_martyr: 'San Felipe de Jesús de las Casas, Mártir',
    ferdinand_iii_of_castile: 'San Fernando',
    francis_de_sales_bishop: 'San Francisco de Sales, Obispo y Doctor',
    francis_diaz_del_rincon_priest_and_companions_martyrs: 'San Francisco Díaz, Sacerdote y Compañeros, Mártires',
    francis_ferdinand_de_capillas_priest: 'San Francisco Fernández de Capillas, Sacerdote y Mártir',
    francis_of_assisi: 'San Francisco of Asís',
    francis_xavier_priest: 'San Francisco Javier, Sacerdote',
    george_of_lydda_martyr: 'San Jorge, Mártir',
    adalbert_of_prague_bishop: 'San Adalberto, Obispo y Mártir',
    gerard_of_csanad_bishop: 'San Gerardo, Obispo',
    gertrude_of_nivelles_abbess: 'Santa Gertrudis de Nivelles, Religiosa',
    gertrude_the_great_virgin: 'Santa Gertrudis la Grande, Vírgen',
    gonsalo_garcia_martyr: 'San Gonsalo Garcia, Mártir',
    gregory_i_the_great_pope: 'San Gregorio Magno, Papa y Doctor de la Iglesia',
    benedict_of_jesus_valdivielso_saez_religious: 'San Héctor Valdivielso Sáez, Mártir',
    hedwig_religious: 'Santa Eduviges, Religiosa',
    helena_of_constantinople: 'Santa Elena',
    ignatius_of_antioch_bishop: 'San Ignacio de Antioquía, Obispo y Mártir',
    ignatius_of_loyola_priest: 'San Ignacio de Loyola, Sacerdote',
    isidore_of_seville_bishop: 'San Isidro de Sevilla, Obispo y Doctor de la Iglesia',
    isidore_the_farmer: 'San Isidro Labrador',
    james_apostle: 'Santiago, Apóstol',
    james_apostle_principal_patron_of_spain: 'Santiago, Apóstol, Patrono Principal de España',
    john_mary_vianney_priest: 'San Juan María Vianney, Sacerdote',
    joaquina_of_saint_francis_of_assisi_vedruna_religious: 'Santa Joaquina Vedruna, Religiosa',
    john_baptist_de_la_salle_priest: 'San Juan Bautista de la Salle, Sacerdote',
    john_bosco_priest: 'San Juan Bosco, Sacerdote',
    john_chrysostom_bishop: 'San Juan Crisóstomo, Obispo y Doctor de la Iglesia',
    john_i_pope: 'San Juan I, Papa y Mártir',
    john_of_god_religious: 'San Juan de Dios, Religioso',
    john_of_the_cross_priest: 'San Juan de la Cruz, Sacerdote y Doctor de la Iglesia',
    john_apostle: 'San Juan, Apóstol y Evangelista',
    joseph_de_anchieta_priest: 'San José de Anchieta, Sacerdote',
    jose_maria_de_yermo_y_parres_priest: 'San José Maria de Yermo, Sacerdote',
    josemaria_escriva_de_balaguer_priest: 'San Josemaría Escrivá de Balaguer, Sacerdote',
    joseph_spouse_of_mary_principal_patron_of_canada: 'San José, Esposo de la Santísima Vírgen María, Patrono Principal de Canadá',
    joseph_the_worker: 'San José Obrero',
    juan_diego_cuauhtlatoatzin: 'San Juan Diego Cuauhtlatoatzin',
    leo_i_the_great_pope: 'San Leo el Magno, Papa y Doctor',
    lawrence_ruiz_and_companions_martyrs: 'San Lorenzo Ruiz y Compañeros, Mártires',
    louis_ix_of_france: 'San Luis',
    joseph_of_calasanz_priest: 'San José de Calasanz, Sacerdote',
    margaret_mary_alacoque_virgin: 'Santa Margarita María de Alacoque',
    margaret_of_antioch_virgin: 'Sant Margarita de Antioquía, Vírgen y Mártir',
    mary_of_jesus_in_the_blessed_sacrament_venegas_virgin: 'Santa Maria de Jesús Sacramentado Venegas, Vírgen',
    maria_goretti_virgin: 'Santa María Goretti, Vírgen y Mártir',
    mariana_of_jesus_de_paredes_virgin: 'Santa Mariana de Jesús de Paredes, Vírgen',
    mark_evangelist: 'San Marcos, Evangelista',
    martha_of_bethany: 'Santa Marta',
    martin_de_porres_religious: 'San Martín de Porres, Religioso',
    martin_i_pope: 'San Martín I, Papa y Mártir',
    mary_magdalene: 'Santa María Magdalena',
    mary_of_the_cross_mackillop_virgin: 'Santa María de la Cruz MacKillop, Vírgen',
    matilda_of_ringelheim: 'Santa Matilda',
    matthew_apostle: 'San Mateo, Apóstol y Evangelista',
    matthias_apostle: 'San Matías, Apóstol',
    maximilian_kolbe_priest: 'San Maximiliano María Kolbe, Sacerdote y Mártir',
    miguel_febres_cordero_religious: 'San Miguel Febres Cordero, Religioso',
    monica_of_hippo: 'Santa Mónica',
    nicholas_of_myra_bishop: 'San Nicolás, Obispo',
    olga_of_kiev: 'Santa Olga',
    paul_of_the_cross_priest: 'San Pablo de la Cruz, Sacerdote',
    peter_damian_bishop: 'San Pedro Damián, Obispo y Doctor de la Iglesia',
    philip_neri_priest: 'San Felipe Neri, Sacerdote',
    pius_of_pietrelcina_priest: 'San Pío de Pietrelcina, Sacerdote',
    pius_v_pope: 'San Pío V, Papa',
    pius_x_pope: 'San Pío X, Papa',
    rita_of_cascia_religious: 'Santa Rita de Cascia',
    robert_bellarmine_bishop: 'San Roberto Bearmino, Obispo y Doctor de la Iglesia',
    roch_of_montpellier: 'San Roque',
    romuald_of_ravenna_abbot: 'San Romualdo, Abad',
    rose_of_lima_virgin: 'Santa Rosa de Lima, Vírgen',
    scholastica_of_nursia_virgin: 'Santa Escolástica, Vírgen',
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs: 'San Cornelio, Papa, y Cipriano, Obispo, Mártires',
    joachim_and_anne_parents_of_mary: 'San Joaquín y Santa Ana',
    michael_gabriel_and_raphael_archangels: 'Santos Miguel, Gabriel y Rafael, Arcángeles',
    mary_soledad_torres_acosta_virgin: 'Santa María Soledad Torres Acosta, Vírgen',
    perpetua_of_carthage_and_felicity_of_carthage_martyrs: 'Santas Perpetua y Felicidad, Mártires',
    philip_and_james_apostles: 'Santos Felipe y Santiago, Apóstoles',
    roch_gonzalez_alphonsus_rodriguez_and_john_del_castillo_priests: 'Santos Roque González, Alfonso Rodríguez Olmedo, y Juan del Castillo, Sacerdotes y Mártires',
    simon_and_jude_apostles: 'Santos Simón y Judas, Apóstoles',
    stephen_the_first_martyr: 'San Esteban, Primer Mártir',
    teresa_benedicta_of_the_cross_stein_virgin: 'Santa Teresa Benedicta de la Cruz (Edith Stein), Vírgen y Mártir',
    teresa_of_calcutta_religious: 'Santa Teresa de Calcuta, Religiosa',
    teresa_of_jesus_of_avila_virgin: 'Santa Teresa de Jesús, Vírgen y Doctor',  // TODO: Localise as `Saint Teresa of Jesus of Ávila, Virgin and Doctor of the Church`
    teresa_of_jesus_of_los_andes_virgin: 'Santa Teresa de Los Andes, Vírgen',  // TODO: Localise as `Saint Teresa of Jesus of Los Andes, Virgin`
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: 'Santa Teresita del Niño Jesús, Vírgen y Doctor',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_secondary_patroness_of_france: 'Santa Teresita del Niño Jesús, Vírgen, Patrona Secundaria de Francia',
    thomas_aquinas_priest: 'Santo Tomás de Aquino, Obispo y Doctor',
    thomas_apostle: 'Santo Tomás, Apóstol',
    vincent_de_paul_priest: 'San Vicente de Paúl, Obispo',
    holy_child_of_cebu: 'Divino Niño',  // TODO: Should it not be rather `Santo Niño de Cebú`?
    most_holy_name_of_jesus: 'Santísimo Nombre de Jesús',
    vietnamese_martyrs: 'Mártires de Vietnam',
    visitation_of_mary: 'Visitación de la Santísima Vírgen María',
    our_lady_of_sorrows_principal_patroness_of_slovakia: 'Nuestra Señora del Socorro, Patrona Principal de Eslovaquia',
    george_of_lydda_martyr_principal_patron_of_england: 'San Jorge, Mártir y Patrono Principal de Inglaterra',
    teresa_benedicta_of_the_cross_stein_virgin_secondary_patron_of_europe: 'Santa Teresa Benedicta de la Cruz (Edith Stein), Vírgen, Mártir y Patrona Secundaria de Europa',
    andrew_apostle_principal_patron_of_scotland: 'San Andrés, Apóstol y Patrono Principal de Escocia',
    david_of_wales_bishop_principal_patron_of_wales: 'San David, Obispo y Patrono Principal de Gales',
    catherine_of_siena_virgin_secundary_patroness_of_europe: 'Santa Catalina de Siena, Vírgen, Doctor de la Iglesia y Patrona Secundaria de Europa',
    catherine_of_siena_virgin_secondary_patroness_of_italy_and_europe: 'Santa Catalina de Siena, Vírgen, Doctor de la Iglesia y Patrona Secundaria de Italia y Europa',
    our_lady_of_guadalupe_principal_patroness_of_the_americas: 'Nuestra Señora de Guadalupe, Patrona Principal de América',
    francis_of_assisi_principal_patron_of_italy: 'San Francisco of Asís, Patrono de Italia',
  },
} as RomcalLocale;
