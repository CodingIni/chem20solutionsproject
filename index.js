document.querySelectorAll('nav-bar').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 
    const page = this.getAttribute('href');
    
    fetch(page)
      .then(response => response.text())
      .then(html => {
        document.getElementById('main-content').innerHTML = html;
      });
  });
});
