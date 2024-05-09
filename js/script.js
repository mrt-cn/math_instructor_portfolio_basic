function toggleMenu() {
    var menu = document.getElementById("slideMenu");
    if (menu.style.width === '250px') {
        menu.style.width = '0';
    } else {
        menu.style.width = '250px';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    let testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, idx) => {
            if (idx === index) {
                testimonial.classList.add('active');
            } else {
                testimonial.classList.remove('active');
            }
        });
    }

    document.querySelector('.prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });

    document.querySelector('.next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    // Başlangıçta ilk testimotial'ı göster
    showTestimonial(currentIndex);
});
