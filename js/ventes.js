
async function afficherVentes() {
    const ventes = await getAll("vente");
    const tableau = document.getElementById("tableau-ventes");
    tableau.innerHTML = "";

    ventes.forEach(vente => {
        const ligne = document.createElement("tr");
        ligne.innerHTML = `
            <td>${vente.ID}</td>
            <td>${vente.VOITURE_ID}</td>
            <td>${vente.CLIENT_ID}</td>
            <td>${vente.DATE_VENTE}</td>
            <td>${vente.PRIX_VENTE} $</td>
            <td>
                <button class="btn-supprimer" onclick="supprimerVente(${vente.ID})">
                    Supprimer
                </button>
            </td>
        `;
        tableau.appendChild(ligne);
    });
}

document.getElementById("form-vente").addEventListener("submit", async function(e) {
    e.preventDefault();

    const nouvelle = {
        id: Date.now(),
        voiture_id: document.getElementById("voiture_id").value,
        client_id: document.getElementById("client_id").value,
        date_vente: document.getElementById("date_vente").value,
        prix_vente: document.getElementById("prix_vente").value
    };

    await create("vente", nouvelle);
    this.reset();
    afficherVentes();
});

async function supprimerVente(id) {
    await remove("vente", id);
    afficherVentes();
}

afficherVentes();