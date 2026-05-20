async function afficherCategories() {
    const categories = await getAll("categorie");
    const tableau = document.getElementById("tableau-categories");
    tableau.innerHTML = "";

    categories.forEach(categorie => {
        const ligne = document.createElement("tr");
        ligne.innerHTML = `
            <td>${categorie.id}</td>
            <td>${categorie.nom}</td>
            <td>${categorie.description}</td>
            <td>
                <button class="btn-supprimer" onclick="supprimerCategorie(${categorie.id})">
                    Supprimer
                </button>
            </td>
        `;
        tableau.appendChild(ligne);
    });
}

document.getElementById("form-categorie").addEventListener("submit", async function(e) {
    e.preventDefault();

    const nouvelle = {
        id: Date.now(),
        nom: document.getElementById("nom").value,
        description: document.getElementById("description").value
    };

    await create("categorie", nouvelle);
    this.reset();
    afficherCategories();
});

async function supprimerCategorie(id) {
    await remove("categorie", id);
    afficherCategories();
}

afficherCategories();
