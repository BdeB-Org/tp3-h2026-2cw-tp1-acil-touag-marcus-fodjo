async function afficherClients() {
    const clients = await getAll("client");
    const tableau = document.getElementById("tableau-clients");
    tableau.innerHTML = "";

    clients.forEach(client => {
        const ligne = document.createElement("tr");
        ligne.innerHTML = `
            <td>${client.id}</td>
            <td>${client.nom}</td>
            <td>${client.prenom}</td>
            <td>${client.courriel}</td>
            <td>${client.telephone}</td>
            <td>
                <button class="btn-supprimer" onclick="supprimerClient(${client.id})">
                    Supprimer
                </button>
            </td>
        `;
        tableau.appendChild(ligne);
    });
}

document.getElementById("form-client").addEventListener("submit", async function(e) {
    e.preventDefault();

    const nouveau = {
        id: Date.now(),
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        courriel: document.getElementById("courriel").value,
        telephone: document.getElementById("telephone").value
    };

    await create("client", nouveau);
    this.reset();
    afficherClients();
});

async function supprimerClient(id) {
    await remove("client", id);
    afficherClients();
}

afficherClients();