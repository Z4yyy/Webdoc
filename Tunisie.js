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
    "Sidi Bou Saïd",
    "Le célèbre village perché qui domine le golfe de Tunis. Ses façades blanchies à la chaux, ses moucharabiehs et ses portes d'un bleu azur intense en font un paradis pour les artistes.",
    [
        `<img src="https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600" alt="Sidi Bou Said">`,
        `<img src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600" alt="Café des Délices">`,
        `<img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600" alt="Porte Bleue">`
    ]
);

// TUNIS 2 : MEDINA ARBI
ajouterEscale(
    36.8008, 10.1706,
    "La Médina de Tunis (Medina Arbi)",
    "Un labyrinthe envoûtant de ruelles couvertes datant du VIIe siècle, classé au patrimoine mondial de l'UNESCO. C'est ici que bat le cœur traditionnel de la capitale entre les souks de parfums.",
    [
        `<img src="https://images.unsplash.com/photo-1527359443443-84a18a16df18?w=600" alt="Souk Médina">`,
        `<img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600" alt="Artisanat">`,
        `<img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600" alt="Patio Tunisien">`
    ]
);

// TUNIS 3 : CARTHAGE
ajouterEscale(
    36.8529, 10.3234,
    "Les Ruines de Carthage",
    "Ancienne superpuissance de la Méditerranée et rivale de Rome. Les thermes d'Antonin en bord de mer et les ports puniques témoignent de l'histoire grandiose de la cité.",
    [
        `<img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600" alt="Colonnes de Carthage">`,
        `<img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600" alt="Vue sur le golfe">`,
        `<img src="https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600" alt="Histoire antique">`
    ]
);

// POINT 4 : TOZEUR
ajouterEscale(
    33.9197, 8.1336,
    "Tozeur & Les Oasis du Jérid",
    "La majestueuse cité du désert, célèbre pour ses architectures uniques en briques d'argile couleur sable. Sa palmeraie immense et ses canyons environnants ouvrent les portes du grand Sahara.",
    [
        `<img src="https://images.unsplash.com/photo-1605809772861-1e1641049987?w=600" alt="Architecture Tozeur">`,
        `<img src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600" alt="Palmeraie">`,
        `<video controls src="videos/interview-tozeur.mp4" poster="https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600">Votre navigateur ne lit pas les vidéos.</video>`
    ]
);

// POINT 5 : DJERBA
ajouterEscale(
    33.8075, 10.8451,
    "L'Île de Djerba",
    "Surnommée « Djerba la douce », cette île est un carrefour culturel harmonieux. Ses plages dorées, ses marchés et le musée à ciel ouvert de Djerbahood en font un espace unique au monde.",
    [
        `<img src="https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600" alt="Street art Djerbahood">`,
        `<iframe width="100%" height="220" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>`,
        `<img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" alt="Plage Djerba">`
    ]
);

