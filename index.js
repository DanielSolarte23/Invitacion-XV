 // Animación de scroll
        const sections = document.querySelectorAll('.section');
        
        function checkScroll() {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const scroll = window.pageYOffset;
                const windowHeight = window.innerHeight;
                
                if (scroll > (sectionTop - windowHeight + sectionHeight/3)) {
                    section.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', checkScroll);
        checkScroll();

        // Carrusel
        let currentSlide = 0;
        const totalSlides = 5;
        
        function createIndicators() {
            const indicatorsContainer = document.getElementById('indicators');
            for (let i = 0; i < totalSlides; i++) {
                const indicator = document.createElement('div');
                indicator.className = 'indicator';
                if (i === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => goToSlide(i));
                indicatorsContainer.appendChild(indicator);
            }
        }
        
        function updateCarousel() {
            const track = document.getElementById('carouselTrack');
            const indicators = document.querySelectorAll('.indicator');
            
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }
        
        function moveCarousel(direction) {
            currentSlide += direction;
            if (currentSlide >= totalSlides) currentSlide = 0;
            if (currentSlide < 0) currentSlide = totalSlides - 1;
            updateCarousel();
        }
        
        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateCarousel();
        }
        
        // Auto-play del carrusel
        setInterval(() => {
            moveCarousel(1);
        }, 4000);
        
        createIndicators();

        // Corazones flotantes
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💖';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            document.getElementById('hearts').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }
        
        setInterval(createHeart, 2000);

        // Formulario de confirmación
        document.getElementById('confirmationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío del formulario
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            console.log('Datos del formulario:', data);
            
            // Mostrar mensaje de confirmación
            document.getElementById('confirmationMessage').style.display = 'block';
            
            // Limpiar formulario
            this.reset();
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                document.getElementById('confirmationMessage').style.display = 'none';
            }, 5000);
        });

        // Scroll suave para enlaces internos
        document.addEventListener('DOMContentLoaded', function() {
            // Agregar smooth scroll
            document.documentElement.style.scrollBehavior = 'smooth';
        });