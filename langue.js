// fichier langue.js

function changeLanguage(lang) {
    document.documentElement.lang = lang;

    // Contenu traduisible barre de naviguation
    updateMenuItem('presentation-fr', lang, 'Présentation', 'Presentation');
    updateMenuItem('competences-fr', lang, 'Compétences', 'Skills');
    updateMenuItem('diplomes-fr', lang, 'Diplômes', 'Diplomas');
    updateMenuItem('portfolio-fr', lang, 'Portfolio', 'Portfolio');
    updateMenuItem('experiences-fr', lang, 'Expériences', 'Experiences');
    updateMenuItem('loisirs-fr', lang, 'Loisirs', 'Hobbies');
    updateMenuItem('contact-fr', lang, 'Contact', 'Contact');
    

// Contenu traduisible presentation du projet
updateMenuItem('presentation-heading', lang, 'Mon aventure dans le développement web:', 'My Journey in Web Development:');
updateMenuItem('presentation-text', lang, 'Création de mon site portfolio-cv', 'Creation of my portfolio-cv website');
updateMenuItem('lead', lang, 'Découverte et curiosité', 'Discovery and curiosity');
updateMenuItem('paragraph-1', lang, 'Il y a quelques mois, j\'ai entrepris de créer mon propre site internet, plongeant ainsi dans le monde du développement web sans aucune formation préalable.', 'A few months ago, I embarked on creating my own website, diving into the world of web development without any prior training.');
updateMenuItem('active-learning', lang, 'Apprentissage actif', 'Active Learning');
updateMenuItem('paragraph-2', lang, 'Privilégiant l\'apprentissage par la pratique, j\'ai exploré GitHub, utilisé les commandes de base de Git, et créé mon propre site portfolio-cv. Avec un souci de design moderne et responsive, j\'ai opté pour le framework Bootstrap. Netlify Forms est un service efficace de gestion automatisée des soumissions de formulaire HTML, j\'ai opté pour cette solution qui est gratuite selon le trafic. Vous trouverez un repository public avec une version qui utilise d\'autres technologies telles que React pour l\'interface utilisateur et Node.js pour le côté serveur de ce site. Cette expérience m\'a permis d\'approfondir ma compréhension des frameworks, les appliquant directement dans la réalisation de mon projet. J\'ai également exploré des outils d\'assistance tels que GPT 3.5 et Copilot, qui m\'ont permis d\'aller au-delà de mes attentes.', 'Preferring learning by practice, I explored GitHub, used basic Git commands, and created my own portfolio-cv website. With a concern for modern and responsive design, I opted for the Bootstrap framework. Netlify Forms is an effective service for automated management of HTML form submissions, I opted for this solution which is free depending on traffic. You will find a public repository with a version that uses other technologies such as React for the user interface and Node.js for the server side of this site. This experience allowed me to deepen my understanding of frameworks, applying them directly in the realization of my project. I also explored support tools like GPT 3.5 and Copilot, which allowed me to go above and beyond my expectations.');
updateMenuItem('collaborative-experience', lang, 'Expérience collaborative', 'Collaborative Experience');
updateMenuItem('paragraph-3', lang, 'Enrichissant mon parcours autodidacte, j\'ai eu le privilège de collaborer avec un développeur expérimenté. Ensemble, nous avons mis en œuvre avec succès un formulaire de contact fonctionnel en local d\'une version de ce site, utilisant les technologies React et Node.js. Cette collaboration a été une opportunité précieuse d\'intégrer l\'expertise d\'un professionnel chevronné à mon projet, conduisant à des résultats concrets et renforçant davantage mes compétences dans le développement web.', 'Enriching my self-taught journey, I had the privilege of collaborating with an experienced developer. Together, we successfully implemented a functional contact form on-premises version of this site, using React and Node.js technologies. This collaboration was a valuable opportunity to integrate the expertise of a seasoned professional into my project, leading to concrete results and further strengthening my skills in web development.');
updateMenuItem('motivation-and-victories', lang, 'Motivation et victoires', 'Motivation and Victories');
updateMenuItem('paragraph-4', lang, 'Ce projet m\'a permis d\'acquérir des compétences techniques et de renforcer ma confiance en moi, atteignant des étapes gratifiantes le long du chemin.', 'This project allowed me to acquire technical skills and strengthen my confidence, reaching rewarding milestones along the way.');
updateMenuItem('why-portfolio', lang, 'Pourquoi ce site portfolio-cv?', 'Why this portfolio-cv site?');
updateMenuItem('paragraph-5', lang, 'Mon site est une vitrine reflétant mes compétences et ma créativité dans plusieurs domaines. Mon apprentissage n\'est pas orienté vers une carrière professionnelle, mais je continue à apprendre et à me perfectionner pour le plaisir et le défi. Explorez mon portfolio pour en savoir plus sur mes compétences spécifiques, dont la création d\'un logo que j\'ai mis en situation sur divers supports. Cette expérience est un clin d\'œil à mon passé de styliste-infographiste, démontrant ma démarche créative et ma capacité à fusionner des compétences variées. N\'hésitez pas à me contacter pour échanger sur nos expériences dans le domaine du développement web ou sur le contenu de site.',
'My site is a showcase reflecting my skills and creativity in various fields. My learning is not oriented towards a professional career, but I continue to learn and improve for pleasure and challenge. Explore my portfolio to learn more about my specific skills, including creating a logo that I have placed in various contexts. This experience is a nod to my past as a stylist-graphic designer, demonstrating my creative approach and ability to merge diverse skills. Feel free to contact me to discuss our experiences in the field of web development or the content of the site.');
updateMenuItem('download-cv', lang, 'Télécharger mon CV','Download My CV');

// Contenu traduisible barres de competences
updateMenuItem('competences-title', lang, 'Compétences', 'Skills');

updateMenuItem('human-skills-title', lang, 'Humaines', 'Skills');
updateMenuItem('responsibility', lang, 'Responsabilité', 'Responsibility');
updateMenuItem('communication', lang, 'Communication', 'Communication');
updateMenuItem('pedagogy', lang, 'Pédagogie', 'Pedagogy');
updateMenuItem('organization', lang, 'Organisation', 'Organization');
updateMenuItem('creative-title', lang, 'Créatives', 'Creative');
updateMenuItem('sense-of-aesthetics', lang, 'Sens de l\'esthétique', 'Sense of aesthetics');
updateMenuItem('generate-ideas', lang, 'Générer des idées', 'Generate ideas');
updateMenuItem('critical-sense', lang, 'Sens critique', 'Critical sense');
updateMenuItem('curiosity', lang, 'Curiosité', 'Curiosity');
updateMenuItem('techniques-title', lang, 'Techniques', 'Techniques');
updateMenuItem('technical-drawing', lang, 'Dessin technique', 'Technical drawing');
updateMenuItem('mastery-of-adobe-software', lang, 'Maîtrise des logiciels Adobe', 'Mastery of Adobe software');
updateMenuItem('managing-files-and-folders', lang, 'Gestion de fichiers et dossiers', 'Managing files and folders');
updateMenuItem('anticipation-of-market-needs', lang, 'Anticipation des besoins du Marché', 'Anticipation of market needs');

// Contenu traduisible des diplomes
updateMenuItem('diplome-title', lang, 'Diplômes', 'Diplomas');

updateMenuItem('youth-training-national-vocational-qualification', lang, 'CAP AEPE', 'Youth training NVQ (National Vocational Qualification) Early childhood level 1 et 2');
updateMenuItem('free-candidate-prefix', lang, 'Candidat libre - Juin 2020', 'Free Candidate - June 2020');
updateMenuItem('diploma-early-childhood', lang, 'CAP Accompagnant éducatif petite enfance.', 'Youth training NVQ (National Vocational Qualification) Early childhood level 1 et 2.');
updateMenuItem('description-early-childhood-1', lang, 'Le titulaire de ce diplôme est un professionnel qualifié qui exerce ses activités auprès de l’enfant de moins de six ans dans le souci constant du respect de ses besoins, de ses droits et de son individualité. Il établit avec les enfants et les parents une relation de confiance et crée les conditions nécessaires à un accueil et un accompagnement de qualité.', 'The holder of this diploma is a qualified professional who carries out his activities with children under the age of six with constant concern for respecting their needs, their rights and their individuality. It establishes a relationship of trust with children and parents and creates the conditions necessary for quality reception and support.');
updateMenuItem('description-early-childhood-2', lang, 'Il peut exercer son activité :', 'He can carry out his activity:');
updateMenuItem('description-early-childhood-3', lang, '• en structure collective : crèches, écoles maternelles, etc.', '• in collective structures: nurseries, nursery schools, etc.');
updateMenuItem('description-early-childhood-4', lang, '• en accueil individuel : à son domicile ou au domicile des parents.', '• in individual care: at home or at the parents\' home.');
updateMenuItem('description-early-childhood-5', lang, 'Certification professionnelle enregistrée au Répertoire National des Certifications Professionnelles (RNCP) sous la référence RNCP28048, code NSF 332.', 'Professional certification registered in the National Directory of Professional Certifications (RNCP) under the reference RNCP28048, NSF code 332.');
updateMenuItem('bachelor', lang, 'BAC+3 Stylisme / modélisme option textile', 'BA (Bachelor of Arts) Fashion design / pattern maker and design textile option ');
updateMenuItem('description-bachelor-1', lang, 'Formation préparant au titre de Styliste designer de mode.', 'Training preparing for the title of Fashion Designer Stylist.');
updateMenuItem('description-bachelor-2', lang, 'Certification professionnelle enregistrée au Répertoire National des Certifications Professionnelles (RNCP) sous la référence RNCP35659, code NSF 240, 242n, 242.', 'Professional certification registered in the National Directory of Professional Certifications (RNCP) under the reference RNCP35659, NSF code 240, 242n, 242.');
updateMenuItem('national-diploma-advanced', lang, 'BAC PRO Artisanat et métiers d\'Art', 'BTEC National Diploma et Advanced (NVQ Level 3) Crafts and artistic professions');
updateMenuItem('high-school-2004', lang, 'Lycée immaculée conception Laval - 2004', 'Immaculate Conception High School Laval - 2004');
updateMenuItem('description-advanced-1', lang, 'BAC PRO Artisanat et métiers d\'Art, option vêtement et accessoire de mode.', 'BTEC National Diploma et Advanced (NVQ Level 3) Crafts and artistic professions, clothing and fashion accessories option.');
updateMenuItem('description-advanced-2', lang, 'Le titulaire de ce diplôme travaille dans un bureau des méthodes.', 'The holder of this diploma works in a methods office. Based on the project of a creative designer, he creates prototypes of clothing and fashion accessories intended to be reproduced in series.');
updateMenuItem('description-advanced-3', lang, 'Certification professionnelle enregistrée au Répertoire National des Certifications Professionnelles (RNCP) sous la référence RNCP4771, code NSF 242.', 'Professional certification registered in the National Directory of Professional Certifications (RNCP) under the reference RNCP4771, NSF code 242.');
updateMenuItem('youth-training-national-vocational-qualification-fashion', lang, 'CAP Prêt-à-porter', 'Youth training NVQ (National Vocational Qualification) Ready-to-wear level 1 et 2');
updateMenuItem('high-school-2003', lang, 'Lycée immaculée conception Laval - 2003', 'Immaculate Conception High School Laval - 2003');
updateMenuItem('description-ready-to-wear-1', lang, 'Le titulaire de ce diplôme est un opérateur intervenant dans la réalisation de produits textiles. Il travaille selon la technique du "flou" afin de réaliser des vêtements souples et déstructurés, par opposition à la réalisation tailleur. Cet ouvrier qualifié exerce dans des grandes entreprises, des PME ou des entreprises artisanales qui ont une activité dans le prêt-à-porter, le moyen et haut de gamme. Son activité principale consiste à fabriquer tout ou partie d\'un produit (coupe, assemblage, repassage, finition). Il décode des données techniques pour la réalisation d\'un vêtement (patrons, plans de coupe). Il organise le poste de travail pour le piquage ou la finition. Il assure une maintenance simple du matériel. Il contrôle la réalisation du produit fini.', 'The holder of this diploma is an operator involved in the production of textile products. He works using the “blur” technique to create soft and unstructured clothing, as opposed to tailoring. This qualified worker works in large companies, SMEs or craft businesses which have an activity in ready-to-wear, medium and high-end clothing. Its main activity consists of manufacturing all or part of a product (cutting, assembly, ironing, finishing). It decodes technical data for the creation of a garment (patterns, cutting plans). It organizes the workstation for stitching or finishing. It ensures simple maintenance of the equipment. He controls the production of the finished product.');
updateMenuItem('description-ready-to-wear-2', lang, 'Certification professionnelle enregistrée au Répertoire National des Certifications Professionnelles (RNCP) sous la référence RNCP448, code NSF 242.', 'Professional certification registered in the National Directory of Professional Certifications (RNCP) under the reference RNCP448, NSF code 242.');
updateMenuItem('first-diploma', lang, 'BEP Métiers de la mode et des industries connexes', 'BTEC First Diploma GNVQ Foundation (NVQ Level 1) Mode Profession and Related Industries');
updateMenuItem('high-school-2002', lang, 'Lycée immaculée conception Laval - 2002', 'Immaculate Conception High School Laval - 2002');
updateMenuItem('description-mode-profession-1', lang, 'BEP Métiers de la mode et des industries connexes dominante prêt à porter.', 'BTEC First Diploma GNVQ Foundation (NVQ Level 1) Mode Profession and Related Industries dominant ready to wear.');
updateMenuItem('description-mode-profession-2', lang, 'Le titulaire de ce diplôme maîtrise les techniques de moulage, de tracé ou de patronage indispensables à la préparation. Après avoir réglé les matériels, il coupe et assemble les différentes pièces. Ensuite c\'est la phase d\'essayage, de retouche et de finition. Il sait intégrer les critères de qualité, de temps et de coût du produit. Il sait organiser son poste de travail et appliquer des consignes de sécurité. Autonome, il a aussi acquis une méthode d\'observation, d\'analyse sur le plan esthétique et technique.', 'The holder of this diploma masters the molding, tracing or patterning techniques essential for preparation. After adjusting the materials, he cuts and assembles the different parts. Then it’s the fitting, alteration and finishing phase. He knows how to integrate the criteria of quality, time and cost of the product. He knows how to organize his workstation and apply safety instructions. Autonomous, he also acquired a method of observation and analysis on an aesthetic and technical level.');
updateMenuItem('description-mode-profession-3', lang, 'Certification professionnelle enregistrée au Répertoire National des Certifications Professionnelles (RNCP) sous la référence RNCP1112, code NSF 242.', 'Professional certification registered in the National Directory of Professional Certifications (RNCP) under the reference RNCP1112, NSF code 242.');

// Contenu traduisible du portfolio
updateMenuItem('portfolio-title', lang, 'Portfolio', 'Portfolio');

updateMenuItem('about-text', lang, 'A PROPOS', 'ABOUT');
updateMenuItem('description-about-text-1', lang, 'Incarnant la confiance, la créativité et l\'indépendance, j\'ai imaginé des pièces uniques en partant d\'un logo à l\'ADN affirmé pour s\'approprier un look sportwear ou imprimer ma marque sur différentes silhouettes.', 'Embodying confidence, creativity and independence, I imagined unique pieces starting from a logo with strong DNA to appropriate a sportswear look or imprint my brand on different silhouettes.');
updateMenuItem('description-about-text-2', lang, 'Les motifs graphiques ornementaux, évoquant l\'esthétique du graffiti et les éléments de design facilement identifiables représentent la force et la singularité.', 'Ornamental graphic patterns, evoking the aesthetic of graffiti and easily identifiable design elements represent strength and singularity.');

updateMenuItem('discover-ch', lang, 'Découvrir CH', 'Discover CH');
updateMenuItem('other-color-1', lang, 'Autre couleur', 'Other color');
updateMenuItem('other-color-2', lang, 'Autre couleur', 'Other color');

updateMenuItem('monogram-text', lang, 'MONOGRAMME C&H', 'C&H MONOGRAM');
updateMenuItem('description-monogram-1', lang, 'Mon travail a été axé sur la conception d\'un logo.', 'My work focused on designing a logo.');
updateMenuItem('description-monogram-2', lang, 'J\'ai décliné ce monogramme en allover sur un sac, en motif placé sur un carré de soie, ainsi qu\'en broderie sur du denim.', 'I used this monogram as an allover on a bag, as a pattern placed on a square of silk, as well as as an embroidery on denim.');
updateMenuItem('description-monogram-3', lang, 'Cette approche démontre ma capacité à décliner efficacement un élément graphique central sur divers supports, renforçant ainsi la cohérence de l\'identité de la marque.', 'This approach demonstrates my ability to effectively display a central graphic element on various media, thus reinforcing the coherence of the brand identity.');

updateMenuItem('technical-text', lang, 'DOSSIER TECHNIQUE', 'TECHNICAL FILE');
updateMenuItem('description-technical-1', lang, 'Le dossier technique, crée avec des logiciels comme Adobe Illustrator, vise une compréhension visuelle universelle, transcendant les barrières linguistiques.', 'The technical file, created with software such as Adobe Illustrator, aims for universal visual understanding, transcending language barriers.');
updateMenuItem('description-technical-2', lang, 'Ces documents détaillés sont cruciaux dans la collaboration avec d\'autres professionnels, garantissant clarté, efficacité, et respect des délais au sein d\'une équipe.', 'These detailed documents are crucial in collaborating with other professionals, ensuring clarity, efficiency, and meeting deadlines within a team.');
updateMenuItem('technical', lang, 'Technique', 'Technical');

// Contenu traduisible de la frise chronologique des experiences
updateMenuItem('experiences-title', lang, 'Expériences', 'Experiences');
updateMenuItem('nursery', lang, 'ASSISTANTE MATERNELLE AGRÉÉE', 'REGISTERED CHILDMINDER');
updateMenuItem('reception-project', lang, 'Site de mon projet d\'accueil en projet', 'Website of my planned reception project');
updateMenuItem('independent', lang, 'Indépendante', 'Independent');
updateMenuItem('present', lang, '2017 à aujourd\'hui', '2017 to present');
updateMenuItem('responsibility-keyword', lang, 'Responsabilité', 'Responsibility');
updateMenuItem('communication-keyword', lang, 'Communication', 'communication');
updateMenuItem('pedagogy-keyword', lang, 'Pédagogie', 'Pedagogy');
updateMenuItem('organization-keyword', lang, 'Organisation', 'organization');
updateMenuItem('discover-exp-1', lang, 'Découvrir', 'Discover');
updateMenuItem('training-1', lang, 'FORMATION 16h - Apprentissage de la propreté - Organisme de formation PLANETE ENFANCE', 'TRAINING 16 hours - Toilet training - PLANETE ENFANCE training Center');
updateMenuItem('training-2', lang, 'FORMATION 21h - Accompagner une personne avec un trouble du spectre de l\'autisme - Organisme de formation PLANETE ENFANCE', 'TRAINING 21 hours - Supporting a person with an autism spectrum disorder - PLANETE ENFANCE training Center');
updateMenuItem('training-3', lang, 'FORMATION 7h - Recyclage sauveteur secouriste du travail - Centre de Formation L’HORIZON', 'TRAINING 7 hours - Workplace first aid worker retraining - HORIZON Training Center');
updateMenuItem('training-4', lang, '- Accueil, soins et supervision des enfants âgés de 0 à 3 ans', '- Reception, care and supervision of children aged 0 to 3 years old');
updateMenuItem('training-5', lang, '- Planification et mise en œuvre d\'activités éducatives et récréatives adaptées à l\'âge et aux besoins des enfants', '- Planning and implementation of educational and recreational activities adapted to the age and needs of children');
updateMenuItem('training-6', lang, '- Préparation de repas équilibrés et nutritifs, en tenant compte des allergies et des régimes alimentaires spécifiques', '- Preparation of balanced and nutritious meals, taking into account allergies and specific diets');
updateMenuItem('training-7', lang, '- Observation attentive du développement des enfants et transmission régulière des progrès', '- Careful observation of children\'s development and regular reporting of progress');
updateMenuItem('training-8', lang, '- Communication régulière avec les parents pour assurer une collaboration et une compréhension mutuelle', '- Regular communication with parents to ensure collaboration and mutual understanding');
updateMenuItem('training-9', lang, '- Création d\'un environnement sûr, propre et stimulant pour les enfants', '- Creating a safe, clean and stimulating environment for children');
updateMenuItem('training-10', lang, '- Respect strict des réglementations en matière de sécurité et de santé liées à l\'accueil des enfants', '- Strict compliance with safety and health regulations relating to the reception of children');

updateMenuItem('stylist', lang, 'ASSISTANTE STYLISTE-INFOGRAPHISTE - RIU PARIS', 'ASSISTANT STYLIST-INFO GRAPHIC DESIGNER - RIU PARIS');
updateMenuItem('permanent-contract', lang, 'CDI', 'Permanent contract');
updateMenuItem('present-stylist', lang, 'juin 2012-oct 2016', 'June 2012-Oct 2016');
updateMenuItem('generate-ideas-keyword', lang, 'Générer des idées', 'Generate ideas');
updateMenuItem('technical-drawings-keyword-1', lang, 'Dessins techniques', 'Technical drawings');
updateMenuItem('anticipation-keyword', lang, 'Anticipation des besoins du Marché', 'Anticipation of market needs');
updateMenuItem('software-keyword-1', lang, 'Logiciels Adobe', 'Adobe Software');
updateMenuItem('discover-exp-2', lang, 'Découvrir', 'Discover');
updateMenuItem('riu-1', lang, '- Création de dessins originaux et de motifs placés ou répétitifs pour les collections de vêtements et d’accessoires', '- Creation of original designs and placed or repetitive patterns for clothing and accessories collections');
updateMenuItem('riu-2', lang, '- Utilisation de logiciels de conception pour réaliser des illustrations et des dessins techniques', '- Use of design software to produce illustrations and technical drawings');
updateMenuItem('riu-3', lang, '- Collaboration étroite avec les équipes de production chinoises pour s’assurer de la faisabilité et de la qualité des produits finis', '- Close collaboration with Chinese production teams to ensure the feasibility and quality of finished products');

updateMenuItem('infographic', lang, 'INFOGRAPHISTE - SUN CITY GROUP', 'INFOGRAPHIC DESIGNER - SUN CITY GROUP');
updateMenuItem('fixed-term-contract', lang, 'CDD', 'Fixed-term contract');
updateMenuItem('present-infographic', lang, 'avr. 2011-avr. 2012', 'Apr. 2011-Apr. 2012');
updateMenuItem('technical-drawings-keyword-2', lang, 'Dessins techniques', 'Technical drawings');
updateMenuItem('graphic-charter-keyword', lang, 'Respect de la charte graphique', 'Compliance with the graphic charter');
updateMenuItem('software-keyword-2', lang, 'Logiciels Adobe', 'Adobe Software');
updateMenuItem('discover-exp-3', lang, 'Découvrir', 'Discover');
updateMenuItem('suncity-1', lang, '- Création de lignes enfant et femme nightwear et daywear afin de répondre aux appels d’offres de nos clients', '- Creation of children\'s and women\'s nightwear and daywear lines in order to respond to calls for tenders from our customers');
updateMenuItem('suncity-2', lang, '- Réalisation de dossiers techniques nécessaires à la production', '- Creation of technical files necessary for production');

// Contenu traduisible des loisirs
updateMenuItem('loisirs-title', lang, 'Loisirs', 'Hobbies');
updateMenuItem('web-development', lang, 'Développement web', 'Web development');
updateMenuItem('personal-illustration', lang, 'Illustration personnelle', 'Personal illustration');
updateMenuItem('support', lang, '#support pages roman #support toile 50X150 cm #encre de chine', '#novel page support #canvas support 50X150 cm #Indian ink');
updateMenuItem('decoration', lang, 'Décoration intérieure', 'Interior decoration');
updateMenuItem('kozikaza', lang, '#kozikaza #décoration personnelle', '#kozikaza #personal decoration');
updateMenuItem('diy', lang, 'Bricolage', 'DIY');
updateMenuItem('recycling', lang, '#relooking de meubles #recyclage #potentiel objet', '#furniture makeover #recycling #object potential');
updateMenuItem('sewing', lang, 'Couture', 'Sewing');
updateMenuItem('modeling', lang, '#modelisme #stylisme #recyclage #patronages #moulage #volume 3D #mode&déco', '#modeling #styling #recycling #patterning #molding #3D volume #fashion&deco');

// Contenu traduisible des informations de contact
updateMenuItem('contact-title', lang, 'Contact', 'Contact');
updateMenuItem('contact-text', lang, 'N\'hésitez pas à me contacter à cette adresse:ou par formulaire de contact:', 'Do not hesitate to contact me at this address:');
updateMenuItem('contact-form-text', lang, 'ou par formulaire de contact, c\'est avec plaisir que j\'échangerai avec vous.', 'or by contact form, I will be happy to speak with you.');
updateMenuItem('name', lang, 'Nom', 'Name');
updateMenuItem('first-name', lang, 'Prénom', 'First name');
updateMenuItem('send', lang, 'Envoyer', 'Send');
updateMenuItem('enable-dark-mode', lang, 'Désactiver le mode sombre', 'Disable dark mode');
updateMenuItem('enable-dark-mode', lang, 'Activer le mode sombre', 'Enable dark mode');


    // Contenu traduisible du menu choix de langues
    updateMenuItem('langue-text', lang, 'LANGUE', 'LANGUAGE');
    
// Contenu traduisible du texte en pied de page
    updateMenuItem('copyright', lang, '© 2024 Céline Hubert &nbsp;&nbsp;', '© 2024 Céline Hubert &nbsp;&nbsp;');
    updateMenuItem('designed-with', lang, 'Conçu avec <i class="fas fa-heart" style="color: #C26C6B;"></i>', 'Designed with <i class="fas fa-heart" style="color: #C26C6B;"></i>');
    updateMenuItem('by', lang, ' par Céline Hubert', ' by Céline Hubert');
    


   
}

function updateMenuItem(elementId, lang, textFr, textEn) {
    var menuItemElement = document.querySelector('[data-lang="' + elementId + '"]');

    if (menuItemElement) {
        menuItemElement.innerHTML = (lang === 'fr') ? textFr : textEn;
    }
}
