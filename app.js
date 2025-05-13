const sidebar = document.getElementById("sidebar")

function toggleSidebar() {
    sidebar.classList.toggle('show')
}

document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.querySelector("#sidebar ul");
  const headers = document.querySelectorAll("main h2");
  sidebar.innerHTML = "";
  headers.forEach(header => {
    const id = header.parentElement.id;
    const text = header.textContent;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + id;
    a.textContent = text;
    li.appendChild(a);
    sidebar.appendChild(li);
  });
});