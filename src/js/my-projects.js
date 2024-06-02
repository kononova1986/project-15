
    const projects = [
        {
            title: "Wallet Webservice",
            image: "../img/my-projects/manager-finance.jpg",
            techStack: "React, JavaScript, Node JS, Git",
            link: "https://github.com/kononova1986/project-15",
            alt: "Wallet Webservice Project",
            svg: "../img/symbol-defs.svg#icon-arrow"
        },
        {
            title: "Green harvest webservice",
            image: "../img/my-projects/vegetables.jpg",
            techStack: "React, JavaScript, Node JS, Git",
            link: "https://github.com/kononova1986/project-15",
            alt: "Green harvest",
            svg: "../img/symbol-defs.svg#icon-arrow"
        },
        {
            title: "English Exellence webservice",
            image: "../img/my-projects/discover.jpg",
            techStack: "React, JavaScript, Node JS, Git",
            link: "https://github.com/kononova1986/project-15",
            alt: "English Exellence",
            svg: "../img/symbol-defs.svg#icon-arrow"
        },
        {
            title: "Transform your webservice",
            image: "../img/my-projects/transform-your.jpg",
            techStack: "React, JavaScript, Node JS, Git",
            link: "https://github.com/kononova1986/project-15",
            alt: "Transform your",
            svg: "../img/symbol-defs.svg#icon-arrow"
        },
        {
            title: "Ukraine traditions webservice",
            image: "../img/my-projects/traditions-ukraine.jpg",
            techStack: "React, JavaScript, Node JS, Git",
            link: "https://github.com/kononova1986/project-15",
            alt: "Ukraine traditions",
            svg: "../img/symbol-defs.svg#icon-arrow"
        },
        
        {
            title: "Stay Healthy webservice",
            image: "../img/my-projects/get-body.jpg",
            techStack: "React, JavaScript, Node JS, Git",
            link: "https://github.com/kononova1986/project-15",
            alt: "Stay Healthy",
            svg: "../img/symbol-defs.svg#icon-arrow"
        },
        {
            title: "Mimino webservice",
            image: "../img/my-projects/mimino.jpg",
            techStack: "React, JavaScript, Node JS, Git",
            link: "https://github.com/kononova1986/project-15",
            alt: "Mimino",
            svg: "../img/symbol-defs.svg#icon-arrow"
        },
        {
            title: "Transformation with a Touch of the Brush webservice",
            image: "../img/my-projects/brand.jpg",
            techStack: "React, JavaScript, Node JS, Git",
            link: "https://github.com/kononova1986/project-15",
            alt: "Transformation with a Touch of the Brush",
            svg: "../img/symbol-defs.svg#icon-arrow"
        },
        {
            title: "Fresh harvest box webservice",
            image: "../img/my-projects/fresh.jpg",
            techStack: "React, JavaScript, Node JS, Git",
            link: "https://github.com/kononova1986/project-15",
            alt: "Fresh harvest box",
            svg: "../img/symbol-defs.svg#icon-arrow"
        },
        {
            title: "Transform your business webservice",
            image: "../img/my-projects/turn-your.jpg",
            techStack: "React, JavaScript, Node JS, Git",
            link: "https://github.com/kononova1986/project-15",
            alt: "Transform your business",
            svg: "../img/symbol-defs.svg#icon-arrow"
        }
    ];

    let currentIndex = 0;
    const projectsPerPage = 3;

    function loadProjects() {
        const projectListEl = document.querySelector('.project-list');
        const projectsToLoad = projects.slice(currentIndex, currentIndex + projectsPerPage);

        const projectsItems = projectsToLoad.map(({ image, alt, techStack, title, link, svg }) => {
            return `
            <li class="project-item">
                <img src="${image}" alt="${alt}" class="project-image">
                <div class="project-content">
                    <p class="project-tech">${techStack}</p>
                    <div class="project-name-btn">
                        <h3 class="project-name">${title}</h3>
                        <div class="centered">
                            <button type="button" class="project-button">
                                <a href="${link}" class="project-link" target="_blank">VISIT
                                    <svg class="project-icon">
                                        <use href="${svg}"></use>
                                    </svg>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            `;
        }).join('');

        projectListEl.innerHTML += projectsItems;
        currentIndex += projectsPerPage;

        if (currentIndex >= projects.length) {
            document.querySelector('.load-more').style.display = 'none';
        }
    }

    document.querySelector('.load-more').addEventListener('click', loadProjects);

    loadProjects();
