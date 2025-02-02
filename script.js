




// Conteneur où afficher les utilisateurs
const userList = document.getElementById("user-list");

// Fonction pour récupérer les données JSON
async function fetchUsers() {
  try {
    const response = await fetch("/DATA/data.json");
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    const data = await response.json(); // Convertit en JSON
    displayUsers(data); // Affiche les données
  } catch (error) {
    console.error(error);
    userList.innerHTML = "<p>Impossible de charger les données.</p>";
  }
}

// Fonction pour afficher les utilisateurs
function displayUsers(users) {
  users.forEach(user => {
    const userCard = document.createElement("div");
    userCard.className = "user-card";

    userCard.innerHTML = `
      <p><strong>Nom :</strong> ${user.name}</p>
      <p><strong>Âge :</strong> ${user.age}</p>
      <p><strong>Email :</strong> ${user.email}</p>
      <img src="${user.image}" alt="${user.name}">
    `;

    userList.appendChild(userCard);
  });
}

// Appelle la fonction pour récupérer les données
fetchUsers();

