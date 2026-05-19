const BASE_URL = "http://localhost:8080/ords/commande";

async function getAll(table) {
  const response = await fetch(`${BASE_URL}/${table}/`);
  const data = await response.json();
  return data.items;
}

async function getById(table, id) {
  const response = await fetch(`${BASE_URL}/${table}/${id}`);
  const data = await response.json();
  return data;
}

async function create(table, body) {
  const response = await fetch(`${BASE_URL}/${table}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return await response.json();
}

async function update(table, id, body) {
  const response = await fetch(`${BASE_URL}/${table}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return await response.json();
}

async function remove(table, id) {
  const response = await fetch(`${BASE_URL}/${table}/${id}`, {
    method: "DELETE",
  });
  return response.ok;
}