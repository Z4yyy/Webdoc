document.addEventListener('DOMContentLoaded', () => {

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
    tn: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", 
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