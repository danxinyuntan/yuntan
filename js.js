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
    


 // 添加下拉選單功能 - 兼容版本
function initMobileDropdowns() {
    const allNavItems = document.querySelectorAll('nav li');
    const dropdownParents = [];
    
    // 找出所有有下拉選單的項目
    allNavItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
            dropdownParents.push(item);
            
            const dropdownLink = item.querySelector('a');
            
            dropdownLink.addEventListener('click', function(e) {
                // 只在手機版上處理點擊事件
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // 關閉其他打開的下拉選單
                    dropdownParents.forEach(otherParent => {
                        if (otherParent !== item && otherParent.classList.contains('active')) {
                            otherParent.classList.remove('active');
                            otherParent.querySelector('.dropdown').classList.remove('active');
                        }
                    });
                    
                    // 切換當前下拉選單
                    item.classList.toggle('active');
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
    
    // 點擊頁面其他地方關閉下拉選單
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !e.target.closest('nav li')) {
            dropdownParents.forEach(parent => {
                parent.classList.remove('active');
                const dropdown = parent.querySelector('.dropdown');
                if (dropdown) dropdown.classList.remove('active');
            });
        }
    });
    
    // 窗口大小改變時重置狀態
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            dropdownParents.forEach(parent => {
                parent.classList.remove('active');
                const dropdown = parent.querySelector('.dropdown');
                if (dropdown) dropdown.classList.remove('active');
            });
        }
    });
}

// 在DOM加載完成後初始化
document.addEventListener('DOMContentLoaded', function() {
    // ... 您原有的輪播代碼 ...
    
    // 初始化手機下拉選單
    initMobileDropdowns();
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