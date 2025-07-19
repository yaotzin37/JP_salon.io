const translations = {
    es: {
        // Navigation
        'nav-home': 'Inicio',
        'nav-services': 'Servicios',
        'nav-schedule': 'Horario',
        'nav-contact': 'Contacto',
        
        // Hero Section
        'hero-title': 'Transformando Estilos, Creando Confianza',
        'hero-subtitle': 'Servicios profesionales de belleza y barbería en un ambiente de lujo y comodidad',
        'hero-cta': 'Reserva tu cita ahora',
        
        // Services Section
        'services-title': 'Nuestros Servicios',
        'haircut-title': 'Cortes de Cabello',
        'haircut-desc': 'Estilos modernos para damas y caballeros, cortes personalizados para cada tipo de rostro y personalidad.',
        'color-title': 'Colorimetría',
        'color-desc': 'Técnicas profesionales de coloración para lograr el tono perfecto que realza tu belleza natural.',
        'treatment-title': 'Tratamientos Capilares',
        'treatment-desc': 'Alaciados con keratina japonesa, permanentes, rizos y ondulados para cabello saludable y radiante.',
        'barber-title': 'Barbería Premium',
        'barber-desc': 'Afeitado de precisión, acondicionamiento de barba, rasurado de cabeza y servicios exclusivos para caballero.',
        'nails-title': 'Manicura y Pedicura',
        'nails-desc': 'Uñas de Felisa, esculturales y tratamientos profesionales para manos y pies impecables.',
        'makeup-title': 'Maquillaje Social',
        'makeup-desc': 'Maquillaje profesional para eventos especiales que realza tu belleza natural con un toque de glamour.',
        
        // Schedule Section
        'schedule-title': 'Horario de Atención',
        'day': 'Día',
        'hours': 'Horario',
        'monday': 'Lunes',
        'tuesday': 'Martes',
        'wednesday': 'Miércoles',
        'thursday': 'Jueves',
        'friday': 'Viernes',
        'saturday': 'Sábado',
        'sunday': 'Domingo',
        'closed': 'Cerrado',
        
        // Contact Section
        'contact-title': 'Contacto y Ubicación',
        'phone': 'Teléfono',
        'address': 'Dirección',
        'bookings': 'Reservas',
        'booking-text': 'Recomendamos reservar cita con anticipación para garantizar tu horario preferido.',
        
        // Footer
        'featured-services': 'Servicios Destacados',
        'contact-info': 'Información de Contacto',
        'copyright': '© 2023 José Plascencia Salón. Todos los derechos reservados.',
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-schedule': 'Schedule',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Transforming Styles, Building Confidence',
        'hero-subtitle': 'Professional beauty and barbering services in a luxurious and comfortable environment',
        'hero-cta': 'Book your appointment now',
        
        // Services Section
        'services-title': 'Our Services',
        'haircut-title': 'Haircuts',
        'haircut-desc': 'Modern styles for ladies and gentlemen, customized cuts for every face type and personality.',
        'color-title': 'Hair Coloring',
        'color-desc': 'Professional coloring techniques to achieve the perfect tone that enhances your natural beauty.',
        'treatment-title': 'Hair Treatments',
        'treatment-desc': 'Japanese keratin straightening, perms, curls, and waves for healthy and radiant hair.',
        'barber-title': 'Premium Barbering',
        'barber-desc': 'Precision shaving, beard conditioning, head shaving, and exclusive services for gentlemen.',
        'nails-title': 'Manicure & Pedicure',
        'nails-desc': 'Sculptural nails and professional treatments for impeccable hands and feet.',
        'makeup-title': 'Social Makeup',
        'makeup-desc': 'Professional makeup for special events that enhances your natural beauty with a touch of glamour.',
        
        // Schedule Section
        'schedule-title': 'Opening Hours',
        'day': 'Day',
        'hours': 'Hours',
        'monday': 'Monday',
        'tuesday': 'Tuesday',
        'wednesday': 'Wednesday',
        'thursday': 'Thursday',
        'friday': 'Friday',
        'saturday': 'Saturday',
        'sunday': 'Sunday',
        'closed': 'Closed',
        
        // Contact Section
        'contact-title': 'Contact & Location',
        'phone': 'Phone',
        'address': 'Address',
        'bookings': 'Bookings',
        'booking-text': 'We recommend booking in advance to ensure your preferred time slot.',
        
        // Footer
        'featured-services': 'Featured Services',
        'contact-info': 'Contact Information',
        'copyright': '© 2023 José Plascencia Salon. All rights reserved.',
    }
};

let currentLanguage = localStorage.getItem('language') || 'es';

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    translatePage();
}

function translatePage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Initialize translation on page load
document.addEventListener('DOMContentLoaded', () => {
    translatePage();
});
