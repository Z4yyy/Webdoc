// 1. Initialisation de la carte centrée sur la France métropolitaine
// Coordonnées [46.6033, 1.8883] avec un zoom adapté pour voir tout le pays.
const map = L.map('map').setView([46.6033, 1.8883], 6); 

// 2. Fond de carte officiel en Français d'OpenStreetMap France
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap France contributors',
    maxZoom: 20
}).addTo(map);

// 3. Logique d'affichage à droite au clic
function afficherContenuDroite(titre, texte, listeMedias) {
    const message = document.getElementById('instruction-message');
    if (message) {
        message.style.display = 'none';
    }
    
    document.getElementById('contenu-escale').classList.remove('hidden');
    document.getElementById('escale-titre').innerText = titre;
    document.getElementById('escale-texte').innerText = texte;
    
    const galerie = document.getElementById('escale-galerie');
    galerie.innerHTML = ""; 
    
    listeMedias.forEach(mediaHTML => {
        galerie.innerHTML += mediaHTML;
    });

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
// 5. LES 5 ESCALES STRATÉGIQUES EN FRANCE (Avec 3 Médias chacune)
// =========================================================================

// ESCALE 1 : PARIS (Les Cafés Littéraires)
ajouterEscale(
    48.8546, 2.3344,
    "Paris : Saint-Germain-des-Prés",
    "Cœur battant de la vie intellectuelle et littéraire française. C'est aux terrasses du Café de Flore ou des Deux Magots que les écrivains, philosophes et artistes ont réécrit le monde autour d'un simple espresso noir.",
    [
        `<img src="https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=600" alt="Café de Flore Paris">`,
        `<img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600" alt="Terrasse parisienne">`,
        `<img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600" alt="Ambiance Paris">`
    ]
);

// ESCALE 2 : BRETAGNE (Les Cafés du Port)
ajouterEscale(
    48.6481, -2.0075,
    "Saint-Malo & la Côte Émeraude",
    "Dans les rudes cités corsaires ou sur les quais bretons, le café se boit chaud face aux vents d'ouest. Les bistrots maritimes y sont de véritables refuges chargés d'histoires de mer et de terre.",
    [
        `<img src="https://images.unsplash.com/photo-1511216113906-8f57bb83e776?w=600" alt="Côte Bretonne">`,
        `<img src="https://images.unsplash.com/photo-1505881502353-a1986add3762?w=600" alt="Port de pêche">`,
        `<img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600" alt="Phare en mer">`
    ]
);

// ESCALE 3 : LYON (Bistrots et Bouchons)
ajouterEscale(
    45.7640, 4.8357,
    "Lyon : La Presqu'île",
    "Capitale mondiale de la gastronomie. Entre deux 'mâchons' traditionnels, les comptoirs lyonnais et les bistrots de quartier incarnent l'art du bien-vivre, du partage et de la convivialité pure.",
    [
        `<img src="https://images.unsplash.com/photo-1600683350284-88f5539fa9e1?w=600" alt="Vieux Lyon">`,
        `<img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600" alt="Intérieur de bistrot">`,
        `<video controls src="videos/interview-lyon.mp4" poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600">Votre navigateur ne lit pas les vidéos.</video>`
    ]
);

// ESCALE 4 : PROVENCE (Les Rives de la Méditerranée)
ajouterEscale(
    43.5297, 5.4474,
    "Aix-en-Provence : Le Cours Mirabeau",
    "Ici, le temps s'arrête sous les platanes. Le rituel du café s'accompagne du chant des cigales et de la lumière dorée chère aux peintres. C'est l'épicentre de la douceur de vivre du Midi.",
    [
        `<img src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=600" alt="Terrasse en Provence">`,
        `<img src="https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?w=600" alt="Champs de lavande">`,
        `<img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" alt="Ruelle ensoleillée">`
    ]
);

// ESCALE EXTRA : TOULOUSE
ajouterEscale(
    43.6047, 1.4442,
    "Toulouse : La Ville Rose",
    "Sur la vibrante place du Capitole ou le long des berges de la Garonne, les terrasses toulousaines s'animent au rythme de la vie étudiante et de la douceur du Sud-Ouest. Un carrefour de rencontres incontournable où le café se prolonge souvent en fin de journée.",
    [
        `<img src="https://images.unsplash.com/photo-1595115596483-faeb372a74c2?w=600" alt="Place du Capitole Toulouse">`,
        `<img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600" alt="Ambiance bistrot Toulouse">`,
        `<img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600" alt="Les berges de la Garonne">`
    ]
);

// ESCALE 5 : BORDEAUX (Cafés et Vignobles)
ajouterEscale(
    44.8378, -0.5792,
    "Bordeaux : Place de la Comédie",
    "Entre élégance architecturale du XVIIIe siècle et culture des grands crus. Les grands cafés de la place font écho au terroir mondialement réputé qui entoure la ville de la Garonne.",
    [
        `<img src="https://images.unsplash.com/photo-1590502593747-42a996133562?w=600" alt="Bordeaux Miroir d'eau">`,
        `<iframe width="100%" height="220" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>`,
        `<img src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600" alt="Vignoble bordelais">`
    ]
);