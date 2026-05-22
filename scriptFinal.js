document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // MODIFICATION DE LA CARTE INTERACTIVE : DÉCA -> MATCHA
    // ==========================================================================
    document.querySelectorAll('.objet-interactif').forEach(carte => {
        const nomActuel = carte.getAttribute('data-nom');
        if (nomActuel === 'Déca' || nomActuel === 'Deca') {
            // Mise à jour des attributs pour la modale
            carte.setAttribute('data-nom', 'Matcha');
            carte.setAttribute('data-desc', "Un incontournable absolu dans les cafés contemporains, finement moulu, offrant une texture onctueuse et une saveur herbacée riche.");
            
            // Changement des textes visibles sur la carte
            const titre = carte.querySelector('.card-item-title');
            const description = carte.querySelector('.card-item-desc');
            if (titre) titre.textContent = 'Matcha';
            if (description) description.textContent = 'Émulsion traditionnelle, notes végétales et texture veloutée.';
            
            // Changement de couleur de l'icône de la carte en vert sauge luxe
            const icone = carte.querySelector('.card-icon');
            if (icone) {
                icone.style.borderColor = '#798e7c';
                icone.style.color = '#798e7c';
                icone.style.background = 'rgba(121, 142, 124, 0.05)';
            }
        }
    });
    // ==========================================================================
    // On récupère les éléments HTML indispensables
    const videoTunisie = document.getElementById('videoTunisie');
    const videoFrance = document.getElementById('videoFrance');
    const modale = document.getElementById('maModale');
    const closeBtn = document.querySelector('.close-btn');
    const modalNom = document.getElementById('modalNom');
    const modalDesc = document.getElementById('modalDescription');
    const modalPhoto = document.getElementById('modalPhoto');

    // On sélectionne tous les objets café de la page
    const objets = document.querySelectorAll('.objet-interactif');

    // On ajoute l'écouteur de clic sur chaque café
    objets.forEach(objet => {
        objet.addEventListener('click', () => {
            
            const nom = objet.getAttribute('data-nom');
            const desc = objet.getAttribute('data-desc');
            const img = objet.getAttribute('data-img');

            // On remplit la modale avec les infos du café cliqué
            modalNom.textContent = nom;
            modalDesc.textContent = desc;
            modalPhoto.src = img;





// ================================================================
            // PROFILS ET CARACTÉRISTIQUES UNIQUES ET RÉALISTES PAR CAFÉ
            // ================================================================
            
            // 1. Création ou récupération propre du conteneur dans la modale
            let caraContainer = document.querySelector('.modal-caracteristiques');
            if (!caraContainer) {
                caraContainer = document.createElement('div');
                caraContainer.className = 'modal-caracteristiques';
                const modalContent = document.querySelector('.modal-content');
                if (modalContent) modalContent.appendChild(caraContainer);
            }

            // 2. Base de données réaliste basée sur vos vrais cafés du HTML
            const profilsCafes = {
                "Café Arbi (قهوة عربي)": {
                    t: { desc: "Petite tasse", n: 1 }, i: { desc: "Très corsé (Zazwa)", n: 5 },
                    p: { desc: "Brûlant", n: 5 }, s: { desc: "Cuit ensemble", n: 4 }
                },
                "Express": {
                    t: { desc: "Tasse expresso", n: 1 }, i: { desc: "Serré & robuste", n: 4 },
                    p: { desc: "Très chaud", n: 4 }, s: { desc: "Selon goût", n: 1 }
                },
                "Cappuccino": {
                    t: { desc: "Tasse moyenne", n: 3 }, i: { desc: "Équilibré & onctueux", n: 3 },
                    p: { desc: "Chaud", n: 3 }, s: { desc: "Doux", n: 3 }
                },
                "Café Glacé": {
                    t: { desc: "Grand verre", n: 5 }, i: { desc: "Rafraîchissant", n: 2 },
                    p: { desc: "Glacé", n: 0 }, s: { desc: "Sucré", n: 3 }
                },
                "Café au Lait": {
                    t: { desc: "Grande tasse", n: 4 }, i: { desc: "Doux & crémeux", n: 2 },
                    p: { desc: "Chaud", n: 3 }, s: { desc: "Légèrement sucré", n: 2 }
                },
                "Café Allongé": {
                    t: { desc: "Tasse moyenne", n: 3 }, i: { desc: "Léger en bouche", n: 2 },
                    p: { desc: "Chaud", n: 4 }, s: { desc: "Optionnel", n: 1 }
                },
                "Noisette": {
                    t: { desc: "Petite tasse", n: 1 }, i: { desc: "Nuage de lait", n: 4 },
                    p: { desc: "Très chaud", n: 4 }, s: { desc: "Selon goût", n: 2 }
                },
                "Matcha": {
                    t: { desc: "Tasse moyenne", n: 3 }, i: { desc: "Herbacé & riche", n: 3 },
                    p: { desc: "Chaud (Émulsionné)", n: 3 }, s: { desc: "Nature / Doux", n: 2 }
                }
            };

            // Sélection du profil correspondant au titre cliqué
            const p = profilsCafes[nom] || {
                t: { desc: "Standard", n: 3 }, i: { desc: "Équilibré", n: 3 },
                p: { desc: "Chaud", n: 3 }, s: { desc: "Au choix", n: 2 }
            };

            // 3. Remplissage du HTML
            caraContainer.innerHTML = `
                <div class="modal-cara-row">
                    <div class="modal-cara-icon">☕</div>
                    <div class="modal-cara-info">
                        <h4>Taille</h4>
                        <span>${p.t.desc}</span>
                        <div class="modal-cara-bars">
                            <span class="modal-bar ${p.t.n >= 1 ? 'active' : ''}"></span><span class="modal-bar ${p.t.n >= 2 ? 'active' : ''}"></span><span class="modal-bar ${p.t.n >= 3 ? 'active' : ''}"></span><span class="modal-bar ${p.t.n >= 4 ? 'active' : ''}"></span><span class="modal-bar ${p.t.n >= 5 ? 'active' : ''}"></span>
                        </div>
                    </div>
                </div>
                <div class="modal-cara-row">
                    <div class="modal-cara-icon">⚡</div>
                    <div class="modal-cara-info">
                        <h4>Intensité</h4>
                        <span>${p.i.desc}</span>
                        <div class="modal-cara-bars">
                            <span class="modal-bar ${p.i.n >= 1 ? 'active' : ''}"></span><span class="modal-bar ${p.i.n >= 2 ? 'active' : ''}"></span><span class="modal-bar ${p.i.n >= 3 ? 'active' : ''}"></span><span class="modal-bar ${p.i.n >= 4 ? 'active' : ''}"></span><span class="modal-bar ${p.i.n >= 5 ? 'active' : ''}"></span>
                        </div>
                    </div>
                </div>
                <div class="modal-cara-row">
                    <div class="modal-cara-icon">🌡️</div>
                    <div class="modal-cara-info">
                        <h4>Température</h4>
                        <span>${p.p.desc}</span>
                        <div class="modal-cara-bars">
                            <span class="modal-bar ${p.p.n >= 1 ? 'active' : ''}"></span><span class="modal-bar ${p.p.n >= 2 ? 'active' : ''}"></span><span class="modal-bar ${p.p.n >= 3 ? 'active' : ''}"></span><span class="modal-bar ${p.p.n >= 4 ? 'active' : ''}"></span><span class="modal-bar ${p.p.n >= 5 ? 'active' : ''}"></span>
                        </div>
                    </div>
                </div>
                <div class="modal-cara-row">
                    <div class="modal-cara-icon">💧</div>
                    <div class="modal-cara-info">
                        <h4>Sucre</h4>
                        <span>${p.s.desc}</span>
                        <div class="modal-cara-bars">
                            <span class="modal-bar ${p.s.n >= 1 ? 'active' : ''}"></span><span class="modal-bar ${p.s.n >= 2 ? 'active' : ''}"></span><span class="modal-bar ${p.s.n >= 3 ? 'active' : ''}"></span><span class="modal-bar ${p.s.n >= 4 ? 'active' : ''}"></span><span class="modal-bar ${p.s.n >= 5 ? 'active' : ''}"></span>
                        </div>
                    </div>
                </div>
            `;
            // ================================================================












            
            // On met en pause les deux vidéos en arrière-plan
            if(videoTunisie) videoTunisie.pause();
            if(videoFrance) videoFrance.pause();
            
            // On affiche la modale à l'écran
            modale.style.display = 'block';
        });
    });

    // Fonction pour fermer la modale
    function fermerModale() {
        modale.style.display = 'none';
        
        // On relance les vidéos
        if(videoTunisie) videoTunisie.play();
        if(videoFrance) videoFrance.play();
    }

    // Clic sur la croix (X) pour fermer
    if(closeBtn) {
        closeBtn.addEventListener('click', fermerModale);
    }

    // Clic en dehors de la boîte blanche pour fermer également
    window.addEventListener('click', (e) => {
        if (e.target === modale) {
            fermerModale();
        }
    });

});

//Section Ambiance 
// ==========================================================================
// CODE SCRIPT DÉDIÉ À LA SECTION AMBIANCE (SÉPARÉ ET PROTÉGÉ)
// ==========================================================================

const sonsAmbiance = {
    tn: "youtube", 
    fr: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"  
};

const infosPaysAmbiance = {
    tn: {
        nom: "Les secrets de la Chkof",
        desc: "Une fois le café traditionnel terminé, le dépôt épais resté au fond de la tasse sert à un art divinatoire ancestral : la caféomancie. On retourne la tasse sur la soucoupe, on patiente, puis les formes laissées par le marc révèlent des messages et des destins croisés. Un moment suspendu de confidence et d'écoute.",
        img: "imagesretournee.png",
        cta: "Lire l'avenir dans le marc ?"
    },
    fr: {
        nom: "L'esprit de la Belote",
        desc: "Le bruit de fond des tasses s'accompagne souvent du claquement des cartes abattues sur le bois ou le tapis vert. En France, le café de quartier est indissociable des parties de Belote, de Manille ou de dés entre habitués, transformant le comptoir en un prolongement vivant du salon familial.",
        img: "imagescartes-belote.png",
        cta: "On tape le carton ?"
    }
};

let currentRiveAmbiance = 'tn'; 
let audioAmbiance = new Audio(sonsAmbiance[currentRiveAmbiance]);
let isPlayingAmbiance = false;

function changeRiveAmbiance(rive) {
    if (currentRiveAmbiance === rive) return;
    currentRiveAmbiance = rive;

    document.getElementById('btn-tn-ambiance').classList.toggle('active', rive === 'tn');
    document.getElementById('btn-fr-ambiance').classList.toggle('active', rive === 'fr');

    audioAmbiance.pause();
    audioAmbiance = new Audio(sonsAmbiance[currentRiveAmbiance]);

    if (isPlayingAmbiance) {
        audioAmbiance.play();
        updateInteractiveObjectAmbiance();
    } else {
        hideInteractiveObjectAmbiance();
    }
}

function togglePlayAmbiance() {
    const playIcon = document.getElementById('play-icon-ambiance');
    const pauseIcon = document.getElementById('pause-icon-ambiance');
    const playLabel = document.getElementById('play-label-ambiance');
    const audioCard = document.getElementById('audio-card-ambiance');

    if (!isPlayingAmbiance) {
        audioAmbiance.play();
        isPlayingAmbiance = true;
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        playLabel.innerText = "Ambiance en cours...";
        audioCard.classList.add('playing'); 
        updateInteractiveObjectAmbiance();
    } else {
        audioAmbiance.pause();
        isPlayingAmbiance = false;
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        playLabel.innerText = "Appuyez pour écouter";
        audioCard.classList.remove('playing');
        hideInteractiveObjectAmbiance();
    }
}

function updateInteractiveObjectAmbiance() {
    const wrapper = document.getElementById('surprise-element-ambiance');
    const img = document.getElementById('object-img-ambiance');
    const ctaText = document.getElementById('cta-text-ambiance');
    
    img.src = infosPaysAmbiance[currentRiveAmbiance].img;
    img.alt = infosPaysAmbiance[currentRiveAmbiance].nom;
    ctaText.innerText = infosPaysAmbiance[currentRiveAmbiance].cta;
    
    wrapper.className = "surprise-wrapper-ambiance rive-" + currentRiveAmbiance;
    
    wrapper.style.display = "block";
    setTimeout(() => {
        wrapper.style.opacity = "1";
        wrapper.style.transform = "translateY(0) scale(1)";
    }, 10);
}

function hideInteractiveObjectAmbiance() {
    const wrapper = document.getElementById('surprise-element-ambiance');
    if(wrapper) {
        wrapper.style.opacity = "0";
        wrapper.style.transform = "translateY(-10px) scale(0.9)";
        setTimeout(() => {
            wrapper.style.display = "none";
        }, 400);
    }
}

function openModalAmbiance() {
    document.getElementById('modalNom-ambiance').innerText = infosPaysAmbiance[currentRiveAmbiance].nom;
    document.getElementById('modalDescription-ambiance').innerText = infosPaysAmbiance[currentRiveAmbiance].desc;
    document.getElementById('modalPhoto-ambiance').src = infosPaysAmbiance[currentRiveAmbiance].img;
    document.getElementById('infoModal-ambiance').style.display = "block";
}

function closeModalAmbiance() {
    document.getElementById('infoModal-ambiance').style.display = "none";
}

// Écouteur global sécurisé (ne ferme pas l'autre modale vidéo)
window.addEventListener('click', (event) => {
    const modalAmb = document.getElementById('infoModal-ambiance');
    if (event.target === modalAmb) {
        closeModalAmbiance();
    }
});

audioAmbiance.onended = function() {
    isPlayingAmbiance = false;
    document.getElementById('play-icon-ambiance').style.display = 'block';
    document.getElementById('pause-icon-ambiance').style.display = 'none';
    document.getElementById('play-label-ambiance').innerText = "Appuyez pour écouter";
    document.getElementById('audio-card-ambiance').classList.remove('playing');
    hideInteractiveObjectAmbiance();
};