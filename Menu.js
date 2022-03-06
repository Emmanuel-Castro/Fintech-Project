const sidebarBtn = document.querySelector('.barBtn');

sidebarBtn.addEventListener('click', function() {
  document.getElementById('sidebar').classList.toggle('sbActive');
});

const message = document.getElementById('calc');

message.addEventListener("click", function() {
  window.alert('Coming Soon');
});

let navInfo = `
Browser Code Name: ${navigator.appCodeName}
Browser Name: ${navigator.appName}
Browser Version: ${navigator.appVersion}
Browser Platform: ${navigator.platform}
Browser Language: ${navigator.language}
`;

console.log(navInfo);
