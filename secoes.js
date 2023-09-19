function loadSection(sectionName) {
  fetch(sectionName + '.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('content').innerHTML = data;
      })
      .catch(error => {
          console.error('Erro ao carregar a seção:', error);
      });
}
