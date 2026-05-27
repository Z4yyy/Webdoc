// 1. Initialisation de la carte à gauche centrée sur la Tunisie
const map = L.map('map').setView([34.3000, 9.4000], 7.5); 

// 2. Fond de carte classique en Français
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap France contributors',
    maxZoom: 20
}).addTo(map);

// 3. Logique d'affichage à droite au clic
function afficherContenuDroite(titre, texte, listeMedias) {
    // Fait disparaître complètement le message d'instruction
    const message = document.getElementById('instruction-message');
    if (message) {
        message.style.display = 'none';
    }
    
    // Rend la partie droite visible
    document.getElementById('contenu-escale').classList.remove('hidden');
    
    // Injecte les titres et textes
    document.getElementById('escale-titre').innerText = titre;
    document.getElementById('escale-texte').innerText = texte;
    
    // Vide la galerie précédente et génère la nouvelle
    const galerie = document.getElementById('escale-galerie');
    galerie.innerHTML = ""; 
    
    listeMedias.forEach(mediaHTML => {
        galerie.innerHTML += mediaHTML;
    });

    // Ramène le panneau de droite tout en haut à chaque nouveau clic
    document.getElementById('panel-droite').scrollTop = 0;
}

// 4. Fonction pour ajouter les repères
function ajouterEscale(latitude, longitude, titre, texte, listeMedias) {
    const marqueur = L.marker([latitude, longitude]).addTo(map);
    
    marqueur.on('click', function() {
        afficherContenuDroite(titre, texte, listeMedias);
    });
}

// =========================================================================
// 5. CONFIGURATION DE VOS 5 EMBLEMES PERSONNALISÉS
// =========================================================================

// TUNIS 1 : SIDI BOU SAÏD
ajouterEscale(
    36.8702, 10.3414,
    "Sidi Bou Saïd : Les Terrasses Azur",
    "Sous le soleil éclatant ou dans la douceur des nuits méditerranéennes, le rituel du café à Sidi Bou Saïd est une ode à la sérénité. Flânant dans les ruelles pavées, on se laisse d'abord séduire par un petit comptoir de charme orné de mosaïques traditionnelles, parfait pour une pause à l'ombre d'une pergola en bois. Puis, l'invitation se prolonge sur les hauteurs de la falaise, où de vastes terrasses en gradins s'ouvrent sur l'immensité marine. Éclairé par les lumières de la côte et bercé par la brise nocturne, chaque espace devient un balcon suspendu au-dessus du vide, idéal pour savourer un café aux pignons à l'abri du monde.", [
        `<img src="Sidi.jpg" alt="Sidi Bou Said">`,
        `<img src="Sidi2.jpg" alt="Sidi Bou Said">`
        ]
);

// TUNIS 2 : MEDINA ARBI
ajouterEscale(
    36.8008, 10.1706,
    "La Médina de Tunis (Medina Arbi)",
    "Passé le seuil des lourdes portes en bois clouté, l’agitation des souks s'efface pour laisser place à la fraîcheur mystique des voûtes de pierre millénaires. Dans ces refuges secrets, le temps semble suspendre sa course. À la lueur dorée et tamisée des lanternes ciselées, l'atmosphère se fait feutrée, presque sacrée. Le regard s'attarde sur le miroitement chaleureux des grands plateaux de cuivre et sur la géométrie délicate des faïences anciennes qui habillent les murs. Confortablement installé, on se laisse bercer par le murmure des conversations discrètes et le parfum envoûtant de la menthe fraîchement infusée. Une escale profondément magnétique, idéale pour savourer la douceur de vivre à l'abri du monde moderne.", [
        `<img src="medina.jpg" alt="Medina">`,
        `<img src="medina2.jpeg" alt="Medina">`,
        `<img src="medina3.jpeg" alt="Medina">`
    ]
);

// TUNIS 3 : CARTHAGE
ajouterEscale(
    36.8529, 10.3234,
    "Carthage : Les Terrasses de l'Histoire",
    "Sur la colline sacrée, face à l'immensité de la Méditerranée, le temps suspend son vol au cœur de Carthage. Ici, le rituel du café s’habille d'un bleu profond, écho éternel au ciel et à la mer qui fusionnent à l'horizon. Sous l'ombre bienveillante d'une pergola en bois blanchi par le sel, on s'installe face au spectacle de la côte illuminée et des silhouettes des bateaux qui glissent doucement. Le parfum du jasmin se mêle à la brise marine, tandis que la douce lueur des lanternes ciselées réchauffe l'atmosphère. Une escale contemplative et profondément sereine, où chaque tasse invite à savourer l'instant présent à l'abri des vents de l'histoire.",
       [ `<img src="Carthage.jpg" alt="Colonnes de Carthage">`
  ]
);

// POINT 4 : TOZEUR
ajouterEscale(
    33.9197, 8.1336,
    "Tozeur : L'Âme du Sahara",
    "Au seuil du désert, le temps suspend son vol pour s’habiller d’ocre et d’argile. Sous la fraîcheur géométrique d'une pergola de palmes tressées, ces patios oasiens abritent le plus chaleureux des refuges. Qu'on s'installe face aux façades de briques traditionnelles baignées de soleil ou à l'ombre bienveillante des grandes arcades de terre, le rituel du café s'y vit en toute sérénité. Une escale intemporelle enveloppée de l'arôme du jasmin et des effluves de café noir, où chaque tasse révèle un fragment de l'âme du Sahara..",
    [
        `<img src="Tozeur.jpg" alt="Architecture Tozeur">`,
        `<img src="Tozeur2.jpg" alt="Architecture Tozeur">`,
              `<video controls src="Tozeur.mp4" poster="Tozeur3.jpeg">Votre navigateur ne lit pas les vidéos.</video>`
    ]
);

// POINT 5 : DJERBA
ajouterEscale(
    33.8075, 10.8451,
    "L'Île de Djerba : La Douceur du Sud",
    "La vraie vie de Djerba se ressent dans ces trois cafés simples, calmes et colorés. On s'installe d'abord dans une cour fraîche et toute blanche, abritée par un toit en paille. On peut aussi choisir une table en fer forgé dans une ruelle pavée, juste à côté d'un grand mur peint en couleur. Enfin, on découvre un petit coin secret derrière une jolie porte d'un bleu éclatant. C'est l'endroit parfait pour s'asseoir sur des tapis traditionnels, boire son café tranquillement et profiter du vent de la mer.", [
        `<img src="Djerba.jpg" alt="Djerbahood">`,
        `<img src="Djerba2.jpg" alt="Djerbahood">`,
        `<img src="Djerba3.jpg" alt="Djerbahood">`,
]
);

