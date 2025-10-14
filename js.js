// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');
    const slideCount = slides.length;
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    


    // 添加下拉選單功能
    const dropdownParents = document.querySelectorAll('nav li:has(.dropdown)');
    
    // 為所有有下拉選單的項目添加標記和事件
    dropdownParents.forEach(parent => {
        parent.classList.add('has-dropdown');
        
        const dropdownLink = parent.querySelector('a');
        
        dropdownLink.addEventListener('click', function(e) {
            // 只在手機版上處理點擊事件
            if (window.innerWidth <= 768) {
                e.preventDefault();
                
                // 關閉其他打開的下拉選單
                dropdownParents.forEach(otherParent => {
                    if (otherParent !== parent && otherParent.classList.contains('active')) {
                        otherParent.classList.remove('active');
                        otherParent.querySelector('.dropdown').classList.remove('active');
                    }
                });
                
                // 切換當前下拉選單
                parent.classList.toggle('active');
                const dropdown = parent.querySelector('.dropdown');
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // 點擊頁面其他地方關閉下拉選單
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !e.target.closest('nav li')) {
            dropdownParents.forEach(parent => {
                parent.classList.remove('active');
                parent.querySelector('.dropdown').classList.remove('active');
            });
        }
    });









    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (n + slideCount) % slideCount;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Set up dot controls
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Auto advance slides
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
});