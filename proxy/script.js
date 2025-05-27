let proxies = JSON.parse(localStorage.getItem("proxies") || "[]");

function renderList() {
  const tbody = document.getElementById("proxyList");
  tbody.innerHTML = "";
  proxies.forEach((proxy, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td><input type="text" class="proxy-edit" value="${proxy}" onchange="editProxy(${i}, this.value)"></td>
      <td>
        <button onclick="deleteProxy(${i})">🗑️ Xóa</button>
      </td>`;
    tbody.appendChild(row);
  });
}

function addProxy() {
  const newProxy = document.getElementById("newProxy").value.trim();
  if (newProxy) {
    proxies.push(newProxy);
    localStorage.setItem("proxies", JSON.stringify(proxies));
    renderList();
    document.getElementById("newProxy").value = "";
  }
}

function deleteProxy(index) {
  proxies.splice(index, 1);
  localStorage.setItem("proxies", JSON.stringify(proxies));
  renderList();
}

function editProxy(index, value) {
  proxies[index] = value.trim();
  localStorage.setItem("proxies", JSON.stringify(proxies));
}

renderList();
