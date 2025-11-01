// Script de interactividad

document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuBtn = document.getElementById('menuBtn');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            const nav = document.querySelector('nav ul');
            if (nav) {
                nav.classList.toggle('hidden');
            }
        });
    }

    // Efecto de scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animación de elementos al entrar en la vista
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Efecto parallax suave en el hero
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('#inicio');
        if (hero) {
            hero.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        }
    });

    // Galería de imágenes con modal
    const galleryItems = document.querySelectorAll('.image-gallery');
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const imageSrc = this.getAttribute('data-image');
            const imageAlt = this.getAttribute('data-alt');
            openImageModal(imageSrc, imageAlt);
        });
    });

    // Delegación de eventos para elementos agregados dinámicamente
    document.addEventListener('click', function(e) {
        if (e.target.closest('.image-gallery')) {
            e.stopPropagation();
            const gallery = e.target.closest('.image-gallery');
            const imageSrc = gallery.getAttribute('data-image');
            const imageAlt = gallery.getAttribute('data-alt');
            openImageModal(imageSrc, imageAlt);
        }
    });

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });

    // Botón para abrir modal de PDF
    const openPdfBtn = document.getElementById('openPdfBtn');
    if (openPdfBtn) {
        openPdfBtn.addEventListener('click', function() {
            const pdfModal = document.getElementById('pdfModal');
            if (pdfModal) {
                pdfModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Cerrar modal de PDF cuando se hace click en el fondo
    const pdfModal = document.getElementById('pdfModal');
    if (pdfModal) {
        pdfModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Botón para abrir modal de documento Excel de Casos de Uso
    const openUseCasesDocBtn = document.getElementById('openUseCasesDocBtn');
    if (openUseCasesDocBtn) {
        openUseCasesDocBtn.addEventListener('click', function() {
            const useCasesModal = document.getElementById('useCasesModal');
            if (useCasesModal) {
                useCasesModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Cerrar modal de Excel cuando se hace click en el fondo
    const useCasesModal = document.getElementById('useCasesModal');
    if (useCasesModal) {
        useCasesModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const pdfModal = document.getElementById('pdfModal');
            const useCasesModal = document.getElementById('useCasesModal');
            if (pdfModal && !pdfModal.classList.contains('hidden')) {
                pdfModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
            if (useCasesModal && !useCasesModal.classList.contains('hidden')) {
                useCasesModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Inicializar iconos de Lucide (si se usa)
    lucide.createIcons();
});

// Función para abrir el modal de imagen
function openImageModal(imageSrc, imageAlt) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    if (modal && modalImage) {
        modalImage.src = imageSrc;
        modalImage.alt = imageAlt;
        modal.classList.remove('hidden');
        modal.classList.add('animate-in', 'fade-in');
        document.body.style.overflow = 'hidden';
    }
}

// Función para cerrar el modal de imagen
function closeImageModal(event) {
    const modal = document.getElementById('imageModal');
    // Si se pasa un evento, solo cerrar si es click en el fondo
    if (event && event.target && event.target.id !== 'imageModal') {
        return;
    }
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('animate-in', 'fade-in');
        document.body.style.overflow = 'auto';
    }
}

// Función para descargar documento (personalizar según necesites)
function downloadDocument() {
    alert('Descarga de documento implementada aquí');
    // window.location.href = 'ruta/del/documento.pdf';
}

// Función para enviar formulario de contacto
function submitForm(event) {
    event.preventDefault();
    alert('Formulario enviado exitosamente');
    // Aquí puedes agregar lógica para enviar el formulario
}
