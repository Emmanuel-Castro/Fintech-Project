const sidebarBtn = document.querySelector('.barBtn');

sidebarBtn.addEventListener('click', function() {
  document.getElementById('sidebar').classList.toggle('sbActive');
});

const message = document.getElementById('calc');

message.addEventListener("click", function() {
  window.alert('Coming Soon');
});
