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
    "Paris : Les Cocons Bohèmes",
    "Envie de fuir l'agitation parisienne ? Poussez la porte de ces cafés au style bohème unique. Entre brocante et jungle urbaine, vous y découvrirez des mobiliers en bois brut dépareillés, de grandes plantes vertes et des décors vintages à souhait. Avec leurs poutres apparentes et leurs cafés d'origine inscrits à l'ardoise, ces cocons intimistes sont les adresses parfaites pour chiller avec une boisson chaude.",
    [
        '<img src="Paris.jpg" alt="Café Paris">', 
        '<img src="Paris2.jpg" alt="Café Paris 2 ">'
    ]
);

// ESCALE 2 : BRETAGNE (Les Cafés du Port)
ajouterEscale(
    48.6481, -2.0075,
    "Saint-Malo & la Côte Émeraude",
    "Dans les rudes cités corsaires ou le long des quais bretons, le café se boit chaud pour braver les vents d'ouest. Ces bistrots maritimes se révèlent être de véritables refuges chargés d'histoires, suspendus entre la terre et l'immensité de l'océan. D'un côté, on s'abrite derrière la splendeur lumineuse d'une immense verrière d'époque, où le bleu des vagues s'invite sur les tapis et où de grands globes de lumière éclairent des salons feutrés. De l'autre, on se love sur une terrasse en bois flotté, abritée par des toiles de navire, où les coussins colorés invitent à contempler l'horizon infini. Deux escales marines uniques, parfaites pour écouter le murmure des marées.", [
        `<img src="Bretagne.jpg" alt="Côte Bretonne">`,
        `<img src="Bretagne2.jpg" alt="Port de pêche">`
    ]
);

// ESCALE 3 : LYON (Bistrots et Bouchons)
ajouterEscale(
    45.7640, 4.8357,
    "Lyon : Les Contrastes Chaleureux",
    "Capitale mondiale de la gastronomie. Entre deux 'mâchons' traditionnels, ces refuges lyonnais réinventent l'art du bien-vivre et de la convivialité pure. D'un côté, le regard s'anime face à l'énergie d'un grand comptoir en bois brut, rythmé par des chaises d'école au jaune éclatant et un sol aux motifs graphiques. De l'autre, l'atmosphère se fait plus secrète, lovée sous une arche de pierre séculaire où des cascades d'ampoules suspendues diffusent une lueur dorée. Deux espaces, deux ambiances, mais une même invitation au partage et à la douceur d'une pause suspendue.",
    [
        `<img src="Lyon.jpg" alt="café lyon moderne">`,
        `<img src="Lyon2.jpg" alt="café lyon">`
    ]
);

// ESCALE 4 : PROVENCE (Les Rives de la Méditerranée)
ajouterEscale(
    43.5297, 5.4474,
    "Aix-en-Provence : Les Ombres Dorées",
    "Ici, le temps s'arrête sous la caresse du soleil de Provence. Accompagné du chant des cigales, le rituel du café se vit en terrasse, baigné par la lumière dorée chère aux artistes. Que vous choisissiez l'effervescence colorée d'une place historique aux tables jaune vif ou la fraîcheur intimiste d'une guinguette ombragée sous les arbres, ces adresses célèbrent l'art de vivre et la douceur pure du Midi.",
    [    `<img src="AEP.jpg" alt="café aix en Provence">`,
        `<img src="AEP2.jpg" alt="Café Aix en provence 2">`
    ]
);

// ESCALE EXTRA : TOULOUSE
ajouterEscale(
    43.6047, 1.4442,
    "Toulouse : La Ville Rose",
    "Sur la vibrante place du Capitole ou au cœur des charmantes places cachées comme celle de la Trinité, les terrasses toulousaines s’animent au rythme de la vie étudiante et de la douceur du Sud-Ouest. Portées par le prestige de leurs grandes arcades en briques roses ou bercées par le murmure d'une fontaine sculptée, ces escales incontournables invitent à suspendre le temps. Que ce soit sous les parasols blancs à l'heure du déjeuner ou baignés par les lumières dorées qui embrasent la brique dès la nuit tombée, chaque comptoir devient un carrefour de rencontres idéal où le café se prolonge joyeusement en fin de journée.",
    [
        `<img src="Toulouse.jpg" alt="Place du Capitole Toulouse">`,
        `<img src="Toulouse2.jpg" alt="Place du Capitole Toulouse">`,
       ]
);

// ESCALE 5 : BORDEAUX (Cafés et Vignobles)
ajouterEscale(
    44.8378, -0.5792,
    "Bordeaux : Les Terrasses Intemporelles",
    "Entre l'élégance architecturale du XVIIIe siècle et la culture des grands crus, Bordeaux dévoile des terrasses au charme intemporel. Lovées au cœur des ruelles pavées, ces adresses incontournables font écho au terroir mondialement réputé de la cité de la Garonne. D'un côté, on s'installe au pied de la majestueuse Grosse Cloche pour une pause littéraire et feutrée en terrasse. De l'autre, on se laisse envoûter par la splendeur Art nouveau d'une façade historique illuminée, où les chaises en rotin invitent à prolonger la douceur des soirées bordelaises. Une véritable promesse de partage, de douceur et d'art de vivre.",
     [    
    `<img src="Bordeaux.jpg" alt="Bordeaux café 1">`,
    `<img src="Bordeaux2.jpg" alt="Bordeaux café 2">`
    ]
);