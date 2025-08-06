function toggleSection() {
    const section = document.getElementById('infoSection');
    const arrow = document.getElementById('arrow');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.textContent = '🔼';
    } else {
        section.style.display = 'none';
        arrow.textContent = '🔽';
    }
}

function toggleSection1() {
    const section = document.getElementById('infoSection1');
    const arrow = document.getElementById('arrow1');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.textContent = '🔼';
    } else {
        section.style.display = 'none';
        arrow.textContent = '🔽';
    }
}
function toggleSection2() {
    const section = document.getElementById('infoSection2');
    const arrow = document.getElementById('arrow2');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.textContent = '🔼';
    } else {
        section.style.display = 'none';
        arrow.textContent = '🔽';
    }
}
function toggleSection3() {
    const section = document.getElementById('infoSection3');
    const arrow = document.getElementById('arrow3');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.textContent = '🔼';
    } else {
        section.style.display = 'none';
        arrow.textContent = '🔽';
    }
}
function toggleSection4() {
    const section = document.getElementById('infoSection4');
    const arrow = document.getElementById('arrow4');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.textContent = '🔼';
    } else {
        section.style.display = 'none';
        arrow.textContent = '🔽';
    }
}
function toggleSection5() {
    const section = document.getElementById('infoSection5');
    const arrow = document.getElementById('arrow5');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.textContent = '🔼';
    } else {
        section.style.display = 'none';
        arrow.textContent = '🔽';
    }
}
function toggleSection6() {
    const section = document.getElementById('infoSection6');
    const arrow = document.getElementById('arrow6');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.textContent = '🔼';
    } else {
        section.style.display = 'none';
        arrow.textContent = '🔽';
    }
}
function toggleSection7() {
    const section = document.getElementById('infoSection7');
    const arrow = document.getElementById('arrow7');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.textContent = '🔼';
    } else {
        section.style.display = 'none';
        arrow.textContent = '🔽';
    }
}

function toggleSection8() {
    const section = document.getElementById('infoSection8');
    const arrow = document.getElementById('arrow8');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.textContent = '🔼';
    } else {
        section.style.display = 'none';
        arrow.textContent = '🔽';
    }
}

function toggleSection9() {
    const section = document.getElementById('infoSection9');
    const arrow = document.getElementById('arrow9');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.textContent = '🔼';
    } else {
        section.style.display = 'none';
        arrow.textContent = '🔽';
    }
}

function toggleSection10() {
    const section = document.getElementById('infoSection10');
    const arrow = document.getElementById('arrow10');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.textContent = '🔼';
    } else {
        section.style.display = 'none';
        arrow.textContent = '🔽';
    }
}

// toggleSection('infoSection', 'arrow');
// toggleSection('infoSection2', 'arrow2');
// toggleSection('infoSection3', 'arrow3');
// toggleSection('infoSection4', 'arrow4');
// toggleSection('infoSection5', 'arrow5');
// toggleSection('infoSection6', 'arrow6');
// toggleSection('infoSection7', 'arrow7');
// toggleSection('infoSection8', 'arrow8');

window.addEventListener('load', function() {
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
});
window.onload = function() {
    window.scrollTo(0, 0);
};
window.onscroll = function() {
    const button = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
};  
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const navLinks = document.querySelectorAll('nav a');
            
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault();       
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);      
        if (targetSection) {
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('highlight');
            });
            targetSection.classList.add('highlight');     
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            setTimeout(() => {
                targetSection.classList.remove('highlight');
            }, 1000);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;          
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
            
    updateToggleButton(savedTheme);
            
    themeToggle.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
                
        updateToggleButton(newTheme);
    });
    function updateToggleButton(theme) {
        const sunIcon = document.querySelector('.sun');
        const moonIcon = document.querySelector('.moon');
                
        if (theme === 'dark') {
            sunIcon.style.transform = 'translateY(-40px)';
            moonIcon.style.transform = 'translateY(0)';
        } else {
            sunIcon.style.transform = 'translateY(0)';
            moonIcon.style.transform = 'translateY(40px)';
        }
    }
            
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches && !localStorage.getItem('theme')) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateToggleButton('dark');
    }
            
    prefersDark.addListener(e => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            htmlElement.setAttribute('data-theme', newTheme);
            updateToggleButton(newTheme);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navbar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
// Função para alternar o menu
    function toggleMenu() {
        hamburgerBtn.classList.toggle('open');
        navbar.classList.toggle('open');
        overlay.classList.toggle('active');
                
// Desabilita o scroll do body quando o menu está aberto
        if (navbar.classList.contains('open')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }
// Evento de clique no botão hamburger
    hamburgerBtn.addEventListener('click', toggleMenu);
// Evento de clique no overlay para fechar o menu
    overlay.addEventListener('click', toggleMenu);
// Fechar o menu ao clicar em um link (opcional)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
// Fechar o menu ao redimensionar a janela para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navbar.classList.contains('open')) {
            toggleMenu();
        }
    });
});
