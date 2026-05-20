// Afficher toutes les voitures
async function afficherVoitures() {
    const voitures = await getAll("voiture");
    const tableau = document.getElementById("tableau-voitures");
    tableau.innerHTML = "";

    voitures.forEach(voiture => {
        const ligne = document.createElement("tr");
        ligne.innerHTML = `
            <td>${voiture.id}</td>
            <td>${voiture.marque}</td>
            <td>${voiture.modele}</td>
            <td>${voiture.annee}</td>
            <td>${voiture.prix} $</td>
            <td>${voiture.statut}</td>
            <td>
                <button class="btn-supprimer" onclick="supprimerVoiture(${voiture.id})">
                    Supprimer
                </button>
            </td>
        `;
        tableau.appendChild(ligne);
    });
}

// Ajouter une voiture
document.getElementById("form-voiture").addEventListener("submit", async function(e) {
    e.preventDefault();

    const nouvelle = {
        id: Date.now(),
        marque: document.getElementById("marque").value,
        modele: document.getElementById("modele").value,
        annee: document.getElementById("annee").value,
        prix: document.getElementById("prix").value,
        statut: document.getElementById("statut").value,
        categorie_id: document.getElementById("categorie_id").value
    };

    await create("voiture", nouvelle);
    this.reset();
    afficherVoitures();
});

// Supprimer une voiture
async function supprimerVoiture(id) {
    await remove("voiture", id);
    afficherVoitures();
}

// Lancer au chargement
afficherVoitures();
