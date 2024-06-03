
import managerFinanceImg from '../img/my-projects/manager-finance.jpg';
import vegetablesImg from '../img/my-projects/vegetables.jpg';
import discoverImg from '../img/my-projects/discover.jpg';
import transformYourImg from '../img/my-projects/transform-your.jpg';
import traditionsUkraineImg from '../img/my-projects/traditions-ukraine.jpg';
import getBodyImg from '../img/my-projects/get-body.jpg';
import miminoImg from '../img/my-projects/mimino.jpg';
import brandImg from '../img/my-projects/brand.jpg';
import freshImg from '../img/my-projects/fresh.jpg';
import turnYourImg from '../img/my-projects/turn-your.jpg';
import arrowIcon from '../img/symbol-defs.svg#icon-arrow';

const projects = [
    {
        title: "Wallet Webservice",
        image: managerFinanceImg,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Wallet Webservice Project",
        svg: arrowIcon
    },
    {
        title: "Green harvest webservice",
        image: vegetablesImg,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Green harvest",
        svg: arrowIcon
    },
    {
        title: "English Exellence webservice",
        image: discoverImg,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "English Exellence",
        svg: arrowIcon
    },
    {
        title: "Transform your webservice",
        image: transformYourImg,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Transform your",
        svg: arrowIcon
    },
    {
        title: "Ukraine traditions webservice",
        image: traditionsUkraineImg,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Ukraine traditions",
        svg: arrowIcon
    },
    {
        title: "Stay Healthy webservice",
        image: getBodyImg,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Stay Healthy",
        svg: arrowIcon
    },
    {
        title: "Mimino webservice",
        image: miminoImg,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Mimino",
        svg: arrowIcon
    },
    {
        title: "Transformation with a Touch of the Brush webservice",
        image: brandImg,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Transformation with a Touch of the Brush",
        svg: arrowIcon
    },
    {
        title: "Fresh harvest box webservice",
        image: freshImg,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Fresh harvest box",
        svg: arrowIcon
    },
    {
        title: "Transform your business webservice",
        image: turnYourImg,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Transform your business",
        svg: arrowIcon
    }
];


    let currentIndex = 0;
    const projectsPerPage = 3;
    let observer;

    function loadProjects() {
        const projectListEl = document.querySelector('.project-list');
        const projectsToLoad = projects.slice(currentIndex, currentIndex + projectsPerPage);

        const projectsItems = projectsToLoad.map(({image, alt, techStack, title, link, svg }, index) => {
            const directionClass = (currentIndex + index) % 2 === 0 ? 'left' : 'right';
            return `
            <li class="project-item ${directionClass}">
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
        
        
        const newProjectItems = document.querySelectorAll('.project-item:not(.observed)');
        newProjectItems.forEach((item) => {
            observer.observe(item);
            item.classList.add('observed');
        });
        // if (newProjectItems.length > 0) {
        //     newProjectItems[newProjectItems.length - 1].scrollIntoView({ behavior: 'smooth' });
        // }
        
        currentIndex += projectsPerPage;
    

        if (currentIndex >= projects.length) {
            document.querySelector('.load-more').style.display = 'none';
        }
    }

    document.querySelector('.load-more').addEventListener('click', loadProjects);

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    });
    loadProjects();
