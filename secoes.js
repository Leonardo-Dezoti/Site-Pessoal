function loadSection(sectionName) {
    // Remove a classe 'ativa' de todos os elementos <a> com a classe 'secao-link'
    const links = document.querySelectorAll('.secao-link');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Adiciona a classe 'ativa' ao elemento <a> que corresponde à seção atual
    const activeLink = document.querySelector('.secao-link[href="#"][onclick="loadSection(\'' + sectionName + '\')"]');
    if (activeLink) {
        activeLink.classList.add('active');
    }

    fetch(sectionName + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar a seção:', error);
        });

    // Atualiza a imagem da div 'logo' de acordo com a seção ativa
    const logo = document.querySelector('.logo img');
    switch (sectionName) {
        case 'sobre':
            logo.src = 'imgs/perfilPessoal.jpg';
            break;
        case 'galeria':
            logo.src = 'imgs/perfilPessoal.jpg';
            break;
        case 'familia':
            logo.src = 'imgs/perfilPessoal.jpg';
            break;
        case 'namoro':
            logo.src = 'imgs/perfilPessoal.jpg';
            break;
        case 'conhecimento':
            logo.src = 'imgs/perfilProfissional.jpg';
            break;
        case 'experiencia':
            logo.src = 'imgs/perfilProfissional.jpg';
            break;
    }
}
