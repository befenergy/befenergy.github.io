// Traducciones de BefEnergy
const translations = {
    es: {
    // header
    logo_nombre: "BefEnergy",
    inicio: "Inicio",
    servicios: "Servicios",
    sobre: "Sobre Nosotros",
    contacto: "Contacto",
    presupuesto: "Consigue tu presupuesto",

    //cookies
    cookie_text: "Utilizamos cookies técnicas para recordar el idioma seleccionado. Al mostrar el mapa de Google Maps, Google puede establecer cookies de terceros. No utilizamos cookies de seguimiento propias.",
    cookie_accept: "Aceptar",
    // index.html
    inicio: "Inicio",
    titulo: "Bienvenido a BefEnergy",
    hero_subtitulo: "Impulsamos tu energía<br><span class=\"naranja\">con renovables</span>",
    descripcion: "Soluciones profesionales en energía solar y aerotermia para hogares y empresas.",
    hero_btn: "Solicita tu presupuesto",
    presentacion_titulo: "En BEF ENERGY",
    presentacion_p1: "Creemos en un mundo más limpio, eficiente y autosuficiente. Somos una empresa especializada en <strong>energías renovables</strong>, comprometida con el futuro del planeta y el bienestar de nuestros clientes. Ofrecemos soluciones personalizadas de <strong>fotovoltaica</strong>, <strong>aerotermia</strong> y <strong>eficiencia energética</strong> para hogares, empresas y comunidades.",
    presentacion_p2: "Nuestro objetivo es ayudarte a optimizar tu consumo energético, reducir costes y avanzar hacia un modelo más sostenible. Gracias a la innovación tecnológica y al acompañamiento de nuestro equipo técnico, transformamos espacios en fuentes de energía limpia.",
    ventaja1: "Ahorra en tu factura desde el primer día.",
    ventaja2: "Incrementa tu autonomía energética.",
    ventaja3: "Contribuye activamente a un futuro más verde.",
    ventaja4: "Accede a soluciones inteligentes adaptadas a tus necesidades.",
    presentacion_eslogan: "Be Green, be BEF.",
    presentacion_cta: "Descubre cómo podemos ayudarte a transformar tu consumo energético. Explora nuestras soluciones, solicita un estudio personalizado y comienza a ahorrar hoy mismo.",
    ventajas_titulo: "¿Por qué elegir BefEnergy?",
    ventaja5_titulo: "Atención Personalizada y Acompañamiento Integral",
    ventaja5_desc: " Te asesoramos de manera cercana y profesional en cada etapa del proyecto, adaptándonos a tus necesidades.",
    ventaja6_titulo: "Compromiso Real con la Eficiencia Energética y la Sostenibilidad",  
    ventaja6_desc: "Promovemos soluciones que reducen el consumo de combustibles fósiles y fomentan el uso de energías renovables.",
    ventaja7_titulo: "Proyectos Ejecutados con Máxima Calidad y Eficiencia",
    ventaja7_desc: "Nos aseguramos de realizar trabajos rápidos sin sacrificar la calidad ni el rendimiento energético.",
    ventaja8_titulo: "Amplia Oferta de Servicios Energéticos y Técnicos Especializados",
    ventaja8_desc: "Desde instalaciones fotovoltaicas y sistemas de aerotermia hasta instalaciones eléctricas, aguas pluviales y calderas eficientes.",
    ventaja9_titulo: "Mantenimiento Preventivo para Mayor Durabilidad y Seguridad",
    ventaja9_desc: "Revisiones y optimización continua para asegurar que tus sistemas funcionen siempre al máximo rendimiento.",
    ventaja10_titulo: "Rapidez y Agilidad en la Ejecución de Proyectos",
    ventaja10_desc: "Trabajamos para minimizar los tiempos sin comprometer la excelencia del servicio.",
    ventaja11_titulo: "Inversión Eficaz y Sostenible para tu Futuro",
    ventaja11_desc: "Garantizamos que cada proyecto sea rentable, respetuoso con el medio ambiente y una apuesta segura a largo plazo.",
    expertos_titulo: "Expertos en Instalaciones Solares",
    expertos_desc: "Nuestro equipo está formado por profesionales certificados y apasionados por la energía renovable. Garantizamos instalaciones seguras, eficientes y adaptadas a cada cliente, utilizando tecnología de vanguardia y materiales de máxima calidad.",
    experto1_titulo: "Soluciones Personalizadas",
    experto1_desc: "Propuestas adaptadas a tus necesidades únicas de instalación, mantenimiento y reparación de paneles solares.",
    experto2_titulo: "Servicio de Alta Calidad",
    experto2_desc: "Solo materiales premium y las mejores prácticas del sector para resultados duraderos y eficientes.",
    experto3_titulo: "Atención al Cliente Excepcional",
    experto3_desc: "Nos esforzamos por superar tus expectativas en cada interacción, con asesoramiento y soporte continuo.",
    experto4_titulo: "Precios Competitivos",
    experto4_desc: "Tarifas ajustadas sin sacrificar calidad, para que más personas puedan acceder a la energía solar.",

    // servicios.html
    servicios_titulo_pagina: "Servicios - BefEnergy",
    servicios_titulo: "Servicios",
    servicios_subtitulo: "Descubre <span class=\"amarillo\">nuestros servicios</span> de energía renovable",
    titulo_fotovoltaica: "Fotovoltaica",
    subtitulo_fotovoltaica: "Sobre Fotovoltaica",
    texto_fotovoltaica: "La fotovoltaica convierte la <span class='naranja'>energía solar</span> en <span class='naranja'>electricidad</span> mediante paneles solares. Es una fuente de <span class='naranja'>energía renovable</span>, <span class='naranja'>limpia</span> y <span class='naranja'>sostenible</span> que permite <span class='naranja'>ahorrar en la factura eléctrica</span> y <span class='naranja'>reducir emisiones de CO₂</span>.",
    titulo_aereotermia: "Aerotermia",
    subtitulo_aereotermia: "Sobre Aerotermia",
    texto_aereotermia: "Las <span class='amarillo'>soluciones de aerotermia</span> ofrecen <span class='amarillo'>calefacción</span>, <span class='amarillo'>refrigeración</span> y <span class='amarillo'>agua caliente</span> de forma <span class='amarillo'>eficiente</span> y <span class='amarillo'>sostenible</span>, aprovechando la <span class='amarillo'>energía del aire</span> como recurso natural. Esta tecnología permite <span class='amarillo'>reducir el consumo energético</span>, <span class='amarillo'>disminuir emisiones de CO₂</span> y <span class='amarillo'>ahorrar en la factura</span>, logrando un <span class='amarillo'>hogar más confortable y respetuoso con el medioambiente</span>.",
    titulo_calefaccion: "Calefacción",
    subtitulo_calefaccion: "Sobre Calefacción",
    texto_calefaccion: "Instalamos <span class='naranja'>sistemas de calefacción</span> <span class='naranja'>ecológicos</span> y <span class='naranja'>económicos</span>, adaptados a las <span class='naranja'>necesidades de cada espacio</span>. Nuestras soluciones permiten <span class='naranja'>ahorrar en la factura energética</span> y <span class='naranja'>reducir el impacto ambiental</span>, garantizando un <span class='naranja'>confort térmico eficiente</span> durante todo el año.",
    titulo_mantenimiento: "Mantenimiento",
    subtitulo_mantenimiento: "Sobre Mantenimiento",
    texto_mantenimiento: "Ofrecemos <span class='amarillo'>planes de mantenimiento</span> <span class='amarillo'>preventivo</span> y <span class='amarillo'>correctivo</span> para garantizar el <span class='amarillo'>rendimiento óptimo</span> y la <span class='amarillo'>máxima eficiencia</span> de tus <span class='amarillo'>instalaciones energéticas</span>. Con un buen mantenimiento, <span class='amarillo'>evitas averías</span>, <span class='amarillo'>prolongas la vida útil</span> de los equipos y <span class='amarillo'>ahorras en reparaciones costosas</span>.",
    titulo_asesoramiento: "Asesoramiento",
    subtitulo_asesoramiento: "Sobre Asesoramiento",
    texto_asesoramiento: "Brindamos <span class='naranja'>asesoramiento experto</span> para ayudarte a <span class='naranja'>tomar decisiones informadas</span> sobre tus <span class='naranja'>necesidades energéticas</span>. Te guiamos en la <span class='naranja'>elección de las mejores soluciones</span> para <span class='naranja'>ahorrar energía</span>, <span class='naranja'>reducir costes</span> y <span class='naranja'>optimizar el rendimiento</span> de tus instalaciones.",
    titulo_compromiso: "Compromiso y confianza",
    subtitulo_compromiso: "Sobre Compromiso y confianza",
    texto_compromiso: "Nos <span class='amarillo'>implicamos en cada proyecto</span> como si fuera <span class='amarillo'>único</span>, ofreciendo un <span class='amarillo'>trato cercano</span>, <span class='amarillo'>asesoramiento personalizado</span> y un <span class='amarillo'>servicio técnico profesional</span> para garantizar la <span class='amarillo'>máxima satisfacción del cliente</span>. Nuestro <span class='amarillo'>compromiso</span> es acompañarte en todo el proceso, asegurando <span class='amarillo'>calidad</span>, <span class='amarillo'>eficiencia</span> y <span class='amarillo'>resultados óptimos</span>.",

    boton_mas: "Leer más",
    boton_volver: "Volver",

    // sobre-nosotros.html
    sobre_titulo_pagina: "BefEnergy - Sobre nosotros",
    sobre_titulo: "Sobre nosotros",
    sobre_subtitulo: "Soluciones <span class=\"naranja\">sostenibles y eficientes</span> con  <span class=\"amarillo\"> compromiso e innovación. </span>",
    sobre_p1: "En <strong>BEF Energy SL</strong> somos una empresa comprometida con la eficiencia energética y la sostenibilidad. Nos especializamos en la instalación y el mantenimiento de sistemas energéticos avanzados, ofreciendo soluciones que reducen la dependencia de los combustibles fósiles y fomentan el uso de energías renovables.",
    sobre_p2: "Con sede en <strong>Igualada</strong>, ofrecemos un servicio cercano y personalizado, asegurando que cada proyecto se lleve a cabo con la máxima calidad, rapidez y eficiencia. Creemos firmemente en la importancia de implementar este tipo de instalaciones para mejorar el rendimiento energético, reducir costes y minimizar el impacto ambiental.",
    sobre_p3: "En <strong>BEF Energy</strong> trabajamos de manera ágil y efectiva, garantizando que cada intervención sea una inversión rentable, sostenible y adaptada a las necesidades de cada cliente. Nuestra cercanía, profesionalidad y compromiso con la calidad nos convierten en una empresa de referencia en el sector energético.",
    // contacto.html
    contacto_titulo_pagina: "BefEnergy - Contacto",
    contacto_hero_titulo: "¿Hablamos?",
    contacto_hero_subtitulo: "Contáctanos para una <span class=\"naranja\">atención rápida y personalizada</span>.",
    titulo_correo: "Correo electrónico",
    titulo_telefono: "Teléfono",
    titulo_horario: "Horario",
    texto_horario: "<strong>Lunes a Viernes:</strong> 7:00 – 13:00 | 15:00 – 17:00<br><strong>Sábados y Domingos:</strong> Cerrado",
    titulo_direccion: "Dirección",
    texto_direccion: "Carrer de Sant Isidre, 10, 08700 Igualada, Barcelona",
  
    // FAQ
    faq_titulo: "Preguntas Frecuentes", 
    faq1_q: "¿Cuáles son las ventajas de la energía solar?",
    faq1_a: "La energía solar permite ahorrar en la factura eléctrica, es sostenible y reduce la huella de carbono.",
    faq2_q: "¿Cuánto tiempo tarda la instalación de un sistema fotovoltaico?",
    faq2_a: "El tiempo de instalación depende del tamaño del sistema, pero normalmente se completa en pocos días.",
    faq3_q: "¿Qué es la aerotermia y cómo funciona?",
    faq3_a: "La aerotermia aprovecha la energía del aire para climatizar espacios mediante bombas de calor eficientes y sostenibles.",
    faq4_q: "¿Cuáles son los beneficios de utilizar aerotermia para calefacción y refrigeración?",
    faq4_a: "Reduce el consumo energético, es ecológica y permite calefacción y refrigeración con una sola instalación.", 
    faq5_q: "¿Qué tipos de sistemas de calefacción ecológicos ofrecen?",
    faq5_a: "Ofrecemos sistemas basados en aerotermia, suelo radiante y calderas de biomasa, entre otros.",
    faq6_q: "¿Cuál es la diferencia entre calefacción por aerotermia y calefacción tradicional?",
    faq6_a: "La aerotermia utiliza energía renovable y consume menos electricidad que los sistemas tradicionales basados en combustibles fósiles.",
    faq7_q: "¿Qué incluye el plan de mantenimiento preventivo?",
    faq7_a: "Incluye inspecciones regulares, limpieza y comprobación del correcto funcionamiento para alargar la vida útil.",
    faq8_q: "¿Con qué frecuencia se recomienda hacer el mantenimiento de los sistemas?",
    faq8_a: "Recomendamos realizar mantenimiento anual o según las indicaciones del fabricante.",
    faq9_q: "¿Qué tipo de asesoramiento energético ofrecen?",
    faq9_a: "Asesoramos en eficiencia, elección de sistemas, trámites de ayudas y optimización del consumo energético.",
    // Footer y comunes
    footer_contacto: "Contacto",
    footer_email: "admin@befenergy.com<br>",
    footer_telefono: "+34 93 131 56 36",
    footer_leido: "Lo más leído",
    footer_faq: "Preguntas frecuentes",
    footer_unete: "Únete",
    footer_trabaja: "Trabaja con nosotros",
    footer_siguenos: "Síguenos",
    footer_twitter: "Twitter",
    footer_copyright: "© 2025 BefEnergy. Todos los derechos reservados.",
    logo_nombre: "BefEnergy"
},

  // Traducción al catalán
   ca: {
    // header
    logo_nombre: "BefEnergy",
    inicio: "Inici",
    servicios: "Serveis",
    sobre: "Sobre Nosaltres",
    contacto: "Contacte",
    presupuesto: "Sol·licita el teu pressupost",

    //cookies
    cookie_text: "Utilitzem cookies tècniques per recordar l’idioma seleccionat. En mostrar el mapa de Google Maps, Google pot establir cookies de tercers. No utilitzem cookies de seguiment pròpies.",
    cookie_accept: "Acceptar",


    // index.html
    inicio: "Inici",
    titulo: "Benvingut a BefEnergy",
    hero_subtitulo: "Impulsem la teva energia<br><span class=\"naranja\">amb renovables</span>",
    descripcion: "Solucions professionals en energia solar i aerotèrmia per a llars i empreses.",
    hero_btn: "Sol·licita el teu pressupost",
    presentacion_titulo: "A BEF ENERGY",
    presentacion_p1: "Creiem en un món més net, eficient i autosuficient. Som una empresa especialitzada en <strong>energies renovables</strong>, compromesa amb el futur del planeta i amb el benestar dels nostres clients. Oferim solucions personalitzades de <strong>fotovoltaica</strong>, <strong>aerotèrmia</strong> i <strong>eficiència energètica</strong> per a llars, empreses i comunitats.",
    presentacion_p2: "El nostre objectiu és ajudar-te a optimitzar el teu consum energètic, reduir costos i avançar cap a un model més sostenible. Gràcies a la innovació tecnològica i a l'acompanyament del nostre equip tècnic, transformem espais en fonts d'energia neta.",
    ventaja1: "Estalvia en la teva factura des del primer dia.",
    ventaja2: "Incrementa la teva autonomia energètica.",
    ventaja3: "Contribueix activament a un futur més verd.",
    ventaja4: "Accedeix a solucions intel·ligents adaptades a les teves necessitats.",
    presentacion_eslogan: "Be Green, be BEF.",
    presentacion_cta: "Descobreix com podem ajudar-te a transformar el teu consum energètic. Explora les nostres solucions, sol·licita un estudi personalitzat i comença a estalviar avui mateix.",
    ventajas_titulo: "Per què triar BefEnergy?",
    ventaja5_titulo: "Atenció Personalitzada i Acompanyament Integral",
    ventaja5_desc: " T’assessorem de manera propera i professional en cada etapa del projecte, adaptant-nos a les teves necessitats.",
    ventaja6_titulo: "Compromís Real amb l’Eficiència Energètica i la Sostenibilitat",
    ventaja6_desc: "Promovem solucions que redueixen el consum de combustibles fòssils i fomenten l’ús d’energies renovables.",
    ventaja7_titulo: "Projectes Executats amb Màxima Qualitat i Eficiència",
    ventaja7_desc: "Ens assegurem de realitzar treballs ràpids sense sacrificar la qualitat ni el rendiment energètic.",
    ventaja8_titulo: "Àmplia Oferta de Serveis Energètics i Tècnics Especialitzats",
    ventaja8_desc: "Des d’instal·lacions fotovoltaiques i sistemes d’aerotèrmia fins a instal·lacions elèctriques, aigües pluvials i calderes eficients.",
    ventaja9_titulo: "Manteniment Preventiu per a Més Durabilitat i Seguretat",
    ventaja9_desc: "Revisions i optimització contínua per assegurar que els teus sistemes funcionin sempre al màxim rendiment.",
    ventaja10_titulo: "Rapidesa i Agilitat en l’Execució de Projectes",
    ventaja10_desc: "Treballem per minimitzar els temps sense comprometre l’excel·lència del servei.",
    ventaja11_titulo: "Inversió Eficaç i Sostenible pel teu Futur",
    ventaja11_desc: "Garantim que cada projecte sigui rendible, respectuós amb el medi ambient i una aposta segura a llarg termini.",

    
    expertos_titulo: "Experts en Instal·lacions Solars",
    expertos_desc: "El nostre equip està format per professionals certificats i apassionats per l’energia renovable. Garantim instal·lacions segures, eficients i adaptades a cada client, utilitzant tecnologia d’avantguarda i materials de màxima qualitat.",
    experto1_titulo: "Solucions Personalitzades",
    experto1_desc: "Propostes adaptades a les teves necessitats úniques d’instal·lació, manteniment i reparació de panells solars.",
    experto2_titulo: "Servei d’Alta Qualitat",
    experto2_desc: "Només materials premium i les millors pràctiques del sector per a resultats duradors i eficients.",
    experto3_titulo: "Atenció al Client Excepcional",
    experto3_desc: "Ens esforcem per superar les teves expectatives en cada interacció, amb assessorament i suport continu.",
    experto4_titulo: "Preus Competitius",
    experto4_desc: "Tarifes ajustades sense sacrificar qualitat, perquè més persones puguin accedir a l’energia solar.",

    // servicios.html
    servicios_titulo_pagina: "Serveis - BefEnergy",
    servicios_titulo: "Serveis",
    servicios_subtitulo: "Descobreix <span class=\"amarillo\">els nostres serveis</span> d’energia renovable",
    titulo_fotovoltaica: "Fotovoltaica",
    subtitulo_fotovoltaica: "Sobre Fotovoltaica",
    texto_fotovoltaica: "La fotovoltaica converteix l'<span class='naranja'>energia solar</span> en <span class='naranja'>electricitat</span> mitjançant panells solars. És una font d'<span class='naranja'>energia renovable</span>, <span class='naranja'>net</span> i <span class='naranja'>sostenible</span> que permet <span class='naranja'>estalviar a la factura elèctrica</span> i <span class='naranja'>reduir les emissions de CO₂</span>.",
    titulo_aereotermia: "Aerotèrmia",
    subtitulo_aereotermia: "Sobre Aerotèrmia",
    texto_aereotermia: "Les <span class='amarillo'>solucions d'aerotèrmia</span> ofereixen <span class='amarillo'>calefacció</span>, <span class='amarillo'>refrigeració</span> i <span class='amarillo'>aigua calenta</span> de manera <span class='amarillo'>eficient</span> i <span class='amarillo'>sostenible</span>, aprofitant l'<span class='amarillo'>energia de l'aire</span> com a recurs natural. Aquesta tecnologia permet <span class='amarillo'>reduir el consum energètic</span>, <span class='amarillo'>disminuir les emissions de CO₂</span> i <span class='amarillo'>estalviar a la factura</span>, aconseguint una <span class='amarillo'>llar més confortable i respectuosa amb el medi ambient</span>.",
    titulo_calefaccion: "Calefacció",
    subtitulo_calefaccion: "Sobre Calefacció",
    texto_calefaccion: "Instal·lem <span class='naranja'>sistemes de calefacció</span> <span class='naranja'>ecològics</span> i <span class='naranja'>econòmics</span>, adaptats a les <span class='naranja'>necessitats de cada espai</span>. Les nostres solucions permeten <span class='naranja'>estalviar a la factura energètica</span> i <span class='naranja'>reduir l'impacte ambiental</span>, garantint un <span class='naranja'>confort tèrmic eficient</span> durant tot l'any.",
    titulo_mantenimiento: "Manteniment",
    subtitulo_mantenimiento: "Sobre Manteniment",
    texto_mantenimiento: "Oferim <span class='amarillo'>plans de manteniment</span> <span class='amarillo'>preventiu</span> i <span class='amarillo'>correctiu</span> per garantir el <span class='amarillo'>rendiment òptim</span> i la <span class='amarillo'>màxima eficiència</span> de les teves <span class='amarillo'>instal·lacions energètiques</span>. Amb un bon manteniment, <span class='amarillo'>evites avaries</span>, <span class='amarillo'>prolongues la vida útil</span> dels equips i <span class='amarillo'>estalvies en reparacions costoses</span>.",
    titulo_asesoramiento: "Assessorament",
    subtitulo_asesoramiento: "Sobre Assessorament",
    texto_asesoramiento: "Oferim <span class='naranja'>assessorament expert</span> per ajudar-te a <span class='naranja'>prendre decisions informades</span> sobre les teves <span class='naranja'>necessitats energètiques</span>. T'ajudem en la <span class='naranja'>elecció de les millors solucions</span> per <span class='naranja'>estalviar energia</span>, <span class='naranja'>reduir costos</span> i <span class='naranja'>optimitzar el rendiment</span> de les teves instal·lacions.",
    titulo_compromiso: "Compromís i confiança",
    subtitulo_compromiso: "Sobre Compromís i confiança",
    texto_compromiso: "Ens <span class='amarillo'>implicam en cada projecte</span> com si fos <span class='amarillo'>únic</span>, oferint un <span class='amarillo'>tracte proper</span>, <span class='amarillo'>assessorament personalitzat</span> i un <span class='amarillo'>servei tècnic professional</span> per garantir la <span class='amarillo'>màxima satisfacció del client</span>. El nostre <span class='amarillo'>compromís</span> és acompanyar-te en tot el procés, assegurant <span class='amarillo'>qualitat</span>, <span class='amarillo'>eficiència</span> i <span class='amarillo'>resultats òptims</span>.",
    
    boton_mas: "Llegir més",
    boton_volver: "Tornar",


    // sobre-nosotros.html
    sobre_titulo_pagina: "BefEnergy - Sobre nosaltres",
    sobre_titulo: "Sobre nosaltres",
    sobre_subtitulo: "Solucions <span class=\"naranja\">sostenibles i eficients</span> amb  <span class=\"amarillo\"> compromís i innovació. </span>",
    sobre_p1: "A <strong>BEF Energy SL</strong> som una empresa compromesa amb l’eficiència energètica i la sostenibilitat. Ens especialitzem en la instal·lació i el manteniment de sistemes energètics avançats, oferint solucions que redueixen la dependència dels combustibles fòssils i fomenten l’ús d’energies renovables.",
    sobre_p2: "Amb seu a <strong>Igualada</strong>, oferim un servei proper i personalitzat, assegurant que cada projecte es dugui a terme amb la màxima qualitat, rapidesa i eficiència. Creiem fermament en la importància d’implementar aquest tipus d’instal·lacions per millorar el rendiment energètic, reduir costos i minimitzar l’impacte ambiental.",
    sobre_p3: "A <strong>BEF Energy</strong> treballem de manera àgil i efectiva, garantint que cada intervenció sigui una inversió rendible, sostenible i adaptada a les necessitats de cada client. La nostra proximitat, professionalitat i compromís amb la qualitat ens converteixen en una empresa de referència en el sector energètic.",

    // contacto.html
    contacto_titulo_pagina: "BefEnergy - Contacte",
    contacto_hero_titulo: "Parlem?",
    contacto_hero_subtitulo: "Contacta’ns per a una <span class=\"naranja\">atenció ràpida i personalitzada</span>.",
    titulo_correo: "Correu electrònic",
    titulo_telefono: "Telèfon",
    titulo_horario: "Horari",
    texto_horario: "<strong>Dilluns a Divendres:</strong> 7:00 – 13:00 | 15:00 – 17:00<br><strong>Dissabtes i Diumenges:</strong> Tancat",
    titulo_direccion: "Adreça",
    texto_direccio: "Carrer de Sant Isidre, 10, 08700 Igualada, Barcelona",
       

    // FAQ
    faq_titulo: "Preguntes Freqüents",
    faq1_q: "Quins avantatges té l’energia solar?",
    faq1_a: "L’energia solar permet estalviar en la factura elèctrica, és sostenible i redueix la petjada de carboni.",
    faq2_q: "Quant temps triga la instal·lació d’un sistema fotovoltaic?",
    faq2_a: "El temps d’instal·lació depèn de la mida del sistema, però normalment es completa en pocs dies.",
    faq3_q: "Què és l’aerotèrmia i com funciona?",
    faq3_a: "L’aerotèrmia aprofita l’energia de l’aire per climatitzar espais mitjançant bombes de calor eficients i sostenibles.",
    faq4_q: "Quins són els beneficis d’utilitzar aerotèrmia per a calefacció i refrigeració?",
    faq4_a: "Redueix el consum energètic, és ecològica i permet calefacció i refrigeració amb una sola instal·lació.",
    faq5_q: "Quins tipus de sistemes de calefacció ecològics ofereixen?",
    faq5_a: "Oferim sistemes basats en aerotèrmia, sòl radiant i calderes de biomassa, entre altres.",
    faq6_q: "Quina és la diferència entre calefacció per aerotèrmia i calefacció tradicional?",
    faq6_a: "L’aerotèrmia utilitza energia renovable i consumeix menys electricitat que els sistemes tradicionals basats en combustibles fòssils.",
    faq7_q: "Què inclou el pla de manteniment preventiu?",
    faq7_a: "Inclou inspeccions regulars, neteja i comprovació del correcte funcionament per allargar la vida útil.",
    faq8_q: "Amb quina freqüència es recomana fer el manteniment dels sistemes?",
    faq8_a: "Recomanem realitzar manteniment anual o segons les indicacions del fabricant.",
    faq9_q: "Quin tipus d’assessorament energètic ofereixen?",
    faq9_a: "Assessoram en eficiència, elecció de sistemes, tràmits d’ajudes i optimització del consum energètic.",

    // Footer i comuns
    footer_contacto: "Contacte",
    footer_email: "admin@befenergy.com<br>",
    footer_telefono: "+34 93 131 56 36",
    footer_leido: "El més llegit",
    footer_faq: "Preguntes freqüents",
    footer_unete: "Uneix-te",
    footer_trabaja: "Treballa amb nosaltres",
    footer_siguenos: "Segueix-nos",
    footer_twitter: "Twitter",
    footer_copyright: "© 2025 BefEnergy. Tots els drets reservats.",
    logo_nombre: "BefEnergy"
},
  en: {
    // header
    logo_nombre: "BefEnergy",
    inicio: "Home",
    servicios: "Services",
    sobre: "About Us",
    contacto: "Contact",
    presupuesto: "Get Your Quote",
    
    //cookies
    cookie_text: "We use technical cookies to remember your selected language. When displaying the Google Maps map, Google may set third-party cookies. We do not use our own tracking cookies.",
    cookie_accept: "Accept",

    // index.html
    inicio: "Home",
    titulo: "Welcome to BefEnergy",
    hero_subtitulo: "We boost your energy<br><span class=\"naranja\">with renewables</span>",
    descripcion: "Professional solutions in solar energy and aerothermal for homes and businesses.",
    hero_btn: "Request your quote",
    presentacion_titulo: "At BEF ENERGY",
    presentacion_p1: "We believe in a cleaner, more efficient, and self-sufficient world. We are a company specialized in <strong>renewable energies</strong>, committed to the planet's future and the well-being of our clients. We offer personalized solutions in <strong>photovoltaics</strong>, <strong>aerothermal</strong>, and <strong>energy efficiency</strong> for homes, businesses, and communities.",
    presentacion_p2: "Our goal is to help you optimize your energy consumption, reduce costs, and move towards a more sustainable model. Thanks to technological innovation and support from our technical team, we transform spaces into sources of clean energy.",
    ventaja1: "Save on your bill from day one.",
    ventaja2: "Increase your energy autonomy.",
    ventaja3: "Actively contribute to a greener future.",
    ventaja4: "Access smart solutions tailored to your needs.",
    presentacion_eslogan: "Be Green, be BEF.",
    presentacion_cta: "Discover how we can help you transform your energy consumption. Explore our solutions, request a personalized study, and start saving today.",
    ventajas_titulo: "Why choose BefEnergy?",
    ventaja5_titulo: "Personalized Attention and Comprehensive Support",
    ventaja5_desc: " We advise you in a close and professional way at every stage of the project, adapting to your needs.",
    ventaja6_titulo: "Real Commitment to Energy Efficiency and Sustainability",
    ventaja6_desc: "We promote solutions that reduce fossil fuel consumption and encourage the use of renewable energies.",
    ventaja7_titulo: "Projects Executed with Maximum Quality and Efficiency",
    ventaja7_desc: "We ensure quick work without sacrificing quality or energy performance.",
    ventaja8_titulo: "Wide Range of Specialized Energy and Technical Services",
    ventaja8_desc: "From photovoltaic installations and aerothermal systems to electrical installations, rainwater systems, and efficient boilers.",
    ventaja9_titulo: "Preventive Maintenance for Greater Durability and Safety",
    ventaja9_desc: "Regular inspections and continuous optimization to ensure your systems always perform at their best.",
    ventaja10_titulo: "Speed and Agility in Project Execution",
    ventaja10_desc: "We work to minimize times without compromising service excellence.",
    ventaja11_titulo: "Efficient and Sustainable Investment for Your Future",
    ventaja11_desc: "We guarantee that every project is profitable, environmentally friendly, and a safe long-term bet.",

    expertos_titulo: "Experts in Solar Installations",
    expertos_desc: "Our team consists of certified professionals passionate about renewable energy. We ensure safe, efficient installations tailored to each client, using cutting-edge technology and top-quality materials.",
    experto1_titulo: "Customized Solutions",
    experto1_desc: "Proposals tailored to your unique needs for installation, maintenance, and repair of solar panels.",
    experto2_titulo: "High-Quality Service",
    experto2_desc: "Only premium materials and best industry practices for long-lasting, efficient results.",
    experto3_titulo: "Exceptional Customer Care",
    experto3_desc: "We strive to exceed your expectations in every interaction, with ongoing advice and support.",
    experto4_titulo: "Competitive Pricing",
    experto4_desc: "Affordable rates without sacrificing quality, so more people can access solar energy.",



    // servicios.html
    servicios_titulo_pagina: "Services - BefEnergy",
    servicios_titulo: "Services",
    servicios_subtitulo: "Discover <span class=\"amarillo\">our renewable energy services</span>",
    titulo_fotovoltaica: "Photovoltaics",
    subtitulo_fotovoltaica: "About Photovoltaics",
    texto_fotovoltaica: "Photovoltaics convert <span class='naranja'>solar energy</span> into <span class='naranja'>electricity</span> using solar panels. It is a source of <span class='naranja'>renewable</span>, <span class='naranja'>clean</span> and <span class='naranja'>sustainable energy</span> that allows you to <span class='naranja'>save on your electricity bill</span> and <span class='naranja'>reduce CO₂ emissions</span>.",
    titulo_aereotermia: "Aerothermal",
    subtitulo_aereotermia: "About Aerothermal",
    texto_aereotermia: "<span class='amarillo'>Aerothermal solutions</span> provide <span class='amarillo'>heating</span>, <span class='amarillo'>cooling</span>, and <span class='amarillo'>hot water</span> efficiently and sustainably, taking advantage of <span class='amarillo'>air energy</span> as a natural resource. This technology helps <span class='amarillo'>reduce energy consumption</span>, <span class='amarillo'>lower CO₂ emissions</span>, and <span class='amarillo'>save on your bill</span>, creating a <span class='amarillo'>more comfortable and environmentally friendly home</span>.",
    titulo_calefaccion: "Heating",
    subtitulo_calefaccion: "About Heating",
    texto_calefaccion: "We install <span class='naranja'>ecological</span> and <span class='naranja'>economical heating systems</span>, adapted to the <span class='naranja'>needs of each space</span>. Our solutions help you <span class='naranja'>save on your energy bill</span> and <span class='naranja'>reduce environmental impact</span>, ensuring <span class='naranja'>efficient thermal comfort</span> all year round.",
    titulo_mantenimiento: "Maintenance",
    subtitulo_mantenimiento: "About Maintenance",
    texto_mantenimiento: "We offer <span class='amarillo'>preventive</span> and <span class='amarillo'>corrective maintenance plans</span> to guarantee <span class='amarillo'>optimal performance</span> and <span class='amarillo'>maximum efficiency</span> of your <span class='amarillo'>energy installations</span>. With proper maintenance, you <span class='amarillo'>avoid breakdowns</span>, <span class='amarillo'>extend equipment life</span>, and <span class='amarillo'>save on costly repairs</span>.",
    titulo_asesoramiento: "Advisory",
    subtitulo_asesoramiento: "About Advisory",
    texto_asesoramiento: "We provide <span class='naranja'>expert advice</span> to help you <span class='naranja'>make informed decisions</span> about your <span class='naranja'>energy needs</span>. We guide you in <span class='naranja'>choosing the best solutions</span> to <span class='naranja'>save energy</span>, <span class='naranja'>reduce costs</span>, and <span class='naranja'>optimize performance</span> of your installations.",
    titulo_compromiso: "Commitment and Trust",
    subtitulo_compromiso: "About Commitment and Trust",
    texto_compromiso: "We <span class='amarillo'>commit to each project</span> as if it were <span class='amarillo'>unique</span>, offering <span class='amarillo'>personalized service</span>, <span class='amarillo'>expert advice</span>, and <span class='amarillo'>professional technical support</span> to guarantee <span class='amarillo'>maximum customer satisfaction</span>. Our <span class='amarillo'>commitment</span> is to accompany you throughout the process, ensuring <span class='amarillo'>quality</span>, <span class='amarillo'>efficiency</span>, and <span class='amarillo'>optimal results</span>.",
    boton_mas: "Read more",
    boton_volver: "Go back",
        

    // sobre-nosotros.html
    sobre_titulo_pagina: "BefEnergy - About Us",
    sobre_titulo: "About Us",
    sobre_subtitulo: "Sustainable and <span class=\"naranja\"> efficient solutions</span> with  <span class=\"amarillo\"> commitment and innovation. </span>",
    sobre_p1: "At <strong>BEF Energy SL</strong> we are a company committed to energy efficiency and sustainability. We specialize in the installation and maintenance of advanced energy systems, offering solutions that reduce dependence on fossil fuels and promote the use of renewable energies.",
    sobre_p2: "Based in <strong>Igualada</strong>, we provide close and personalized service, ensuring that every project is carried out with maximum quality, speed, and efficiency. We strongly believe in the importance of implementing these types of installations to improve energy performance, reduce costs, and minimize environmental impact.",
    sobre_p3: "At <strong>BEF Energy</strong> we work quickly and effectively, ensuring that every intervention is a profitable, sustainable investment tailored to each client's needs. Our closeness, professionalism, and commitment to quality make us a reference company in the energy sector.",

    // contacto.html
    contacto_titulo_pagina: "BefEnergy - Contact",
    contacto_hero_titulo: "Shall we talk?",
    contacto_hero_subtitulo: "Contact us for <span class=\"naranja\">fast and personalized attention</span>.",
    titulo_correo: "Email",
    titulo_telefono: "Phone",
    titulo_horario: "Opening hours",
    texto_horario: "Monday to Friday: 7:00 – 13:00 | 15:00 – 17:00<br>Saturdays and Sundays: Closed",
    titulo_direccion: "Address",
    texto_direccion: "Carrer d'Itàlia, 2, nau 2,<br>08700 Igualada, Barcelona",
  

 
    // FAQ
    faq_titulo: "Frequently Asked Questions",
    faq1_q: "What are the advantages of solar energy?",
    faq1_a: "Solar energy allows you to save on your electricity bill, is sustainable, and reduces the carbon footprint.",
    faq2_q: "How long does the installation of a photovoltaic system take?",
    faq2_a: "Installation time depends on the system size but is usually completed in a few days.",
    faq3_q: "What is aerothermal and how does it work?",
    faq3_a: "Aerothermal harnesses air energy to heat and cool spaces using efficient and sustainable heat pumps.",
    faq4_q: "What are the benefits of using aerothermal for heating and cooling?",
    faq4_a: "It reduces energy consumption, is ecological, and allows heating and cooling with a single installation.",
    faq5_q: "What types of ecological heating systems do you offer?",
    faq5_a: "We offer systems based on aerothermal, underfloor heating, and biomass boilers, among others.",
    faq6_q: "What is the difference between aerothermal heating and traditional heating?",
    faq6_a: "Aerothermal uses renewable energy and consumes less electricity than traditional fossil fuel-based systems.",
    faq7_q: "What does the preventive maintenance plan include?",
    faq7_a: "Includes regular inspections, cleaning, and checking correct functioning to extend service life.",
    faq8_q: "How often is maintenance recommended?",
    faq8_a: "We recommend annual maintenance or according to the manufacturer's guidelines.",
    faq9_q: "What type of energy consulting do you offer?",
    faq9_a: "We advise on efficiency, system selection, aid procedures, and energy consumption optimization.",

    // Footer and common
    footer_contacto: "Contact",
    footer_email: "admin@befenergy.com<br>",
    footer_telefono: "+34 93 131 56 36",
    footer_leido: "Most read",
    footer_faq: "Frequently asked questions",
    footer_unete: "Join us",
    footer_trabaja: "Work with us",
    footer_siguenos: "Follow us",
    footer_twitter: "Twitter",
    footer_copyright: "© 2025 BefEnergy. All rights reserved.",
    logo_nombre: "BefEnergy"
}, 

  };

// Traduce elementos según el idioma seleccionado
function setLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (el.closest('.idioma-float')) return;
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else if (el.tagName === "IMG") {
        el.src = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Cambiar bandera del botón flotante
  function getFlagPath(lang) {
    // Si el HTML está en src/ (index.html), usa 'assets/flags/xx.svg'
    // Si está en src/pages/, usa '../assets/flags/xx.svg'
    if (location.pathname.endsWith('index.html')) {
      return `assets/flags/${lang}.svg`;
    } else {
      return `../assets/flags/${lang}.svg`;
    }
  }

  const icon = document.getElementById("idiomaFloatIcon");
  if (icon) icon.src = getFlagPath(lang);

  localStorage.setItem("befenergy_lang", lang);
}

// Configura el comportamiento del botón flotante de idioma
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("befenergy_lang") || "es";
  setLang(savedLang);

  const btn = document.getElementById("idiomaFloatBtn");
  const menu = document.getElementById("idiomaFloatMenu");

  if (btn && menu) {
    // Mostrar/ocultar menú al pulsar el botón
    btn.onclick = () => {
      menu.classList.toggle("open");
    };

    // Cambiar idioma al hacer clic en una opción
    document.querySelectorAll(".idioma-float-opcion").forEach(b => {
      b.onclick = () => {
        const lang = b.getAttribute("data-lang");
        setLang(lang);
        menu.classList.remove("open");
      };
    });

    // Cerrar el menú si se hace clic fuera
    document.addEventListener("click", e => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("open");
      }
    });
  }
});
