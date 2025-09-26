// 加载header和footer组件
document.addEventListener('DOMContentLoaded', function() {
    // 加载header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-header').innerHTML = data;
            // 重新绑定移动菜单事件
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navMenu = document.querySelector('nav ul');
            
            if (mobileMenuBtn && navMenu) {
                mobileMenuBtn.addEventListener('click', function() {
                    navMenu.classList.toggle('show');
                });
            }
        });
    
    // 加载footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-footer').innerHTML = data;
        });
});