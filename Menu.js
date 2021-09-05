const sidebarBtn = document.querySelector('.barBtn');

sidebarBtn.addEventListener('click', function() {
  document.getElementById('sidebar').classList.toggle('sbActive');
});

let titleColor = document.getElementById('changeColor');

titleColor.addEventListener("click", function() {
  document.querySelector('h1').style.color = 'green';
});
