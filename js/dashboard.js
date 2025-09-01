// Dashboard Script for VibeCopilot Dashboard
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Check if user is logged in
        if (sessionStorage.getItem('isLoggedIn') !== 'true') {
            window.location.href = 'login.html';
            return;
        }

        // Initialize dashboard
        initializeDashboard();
        setupEventListeners();
        loadDashboardData();

    } catch (error) {
        console.error('Dashboard initialization error:', error);
    }
});

// Initialize dashboard components
function initializeDashboard() {
    try {
        // Add fade-in animation to dashboard content
        const dashboardContent = document.querySelector('.dashboard-content');
        if (dashboardContent) {
            dashboardContent.classList.add('fade-in');
        }

        // Set user info in header
        const userEmail = sessionStorage.getItem('userEmail');
        if (userEmail) {
            // You could update user display here if needed
            console.log('Logged in user:', userEmail);
        }

        // Initialize sidebar navigation
        initializeSidebar();

    } catch (error) {
        console.error('Dashboard initialization error:', error);
    }
}

// Setup event listeners
function setupEventListeners() {
    try {
        // Sidebar navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavigation);
        });

        // User dropdown (logout functionality)
        const userDropdown = document.querySelector('.user-dropdown');
        if (userDropdown) {
            userDropdown.addEventListener('click', handleUserDropdown);
        }

        // Card hover effects
        const dashboardCards = document.querySelectorAll('.dashboard-card');
        dashboardCards.forEach(card => {
            card.addEventListener('mouseenter', handleCardHover);
            card.addEventListener('mouseleave', handleCardLeave);
        });

        // Chart interactions
        const chartCards = document.querySelectorAll('.chart-card');
        chartCards.forEach(card => {
            card.addEventListener('click', handleChartClick);
        });

        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMobileMenu);
        }

        // Filter selects
        const filterSelects = document.querySelectorAll('.filter-select');
        filterSelects.forEach(select => {
            select.addEventListener('change', handleFilterChange);
        });

    } catch (error) {
        console.error('Event listener setup error:', error);
    }
}

// Initialize sidebar
function initializeSidebar() {
    try {
        const navItems = document.querySelectorAll('.nav-item');
        
        // Set active state for dashboard (assuming it's the second item)
        if (navItems.length > 1) {
            navItems[1].classList.add('active');
        }

        // Add slide-in animation to sidebar items
        navItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('slide-in');
            }, index * 100);
        });

    } catch (error) {
        console.error('Sidebar initialization error:', error);
    }
}

// Handle navigation clicks
function handleNavigation(event) {
    event.preventDefault();
    
    try {
        // Remove active class from all nav items
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked item
        const clickedItem = event.target.closest('.nav-item');
        if (clickedItem) {
            clickedItem.classList.add('active');
        }

        // Simulate navigation (in a real app, this would route to different pages)
        const navIndex = Array.from(navItems).indexOf(clickedItem);
        simulatePageChange(navIndex);

    } catch (error) {
        console.error('Navigation error:', error);
    }
}

// Handle user dropdown click
function handleUserDropdown(event) {
    try {
        // Create dropdown menu
        const existingDropdown = document.querySelector('.dropdown-menu');
        if (existingDropdown) {
            existingDropdown.remove();
            return;
        }

        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown-menu';
        dropdown.innerHTML = `
            <div class="dropdown-item" onclick="logout()">Logout</div>
            <div class="dropdown-item" onclick="showProfile()">Profile</div>
            <div class="dropdown-item" onclick="showSettings()">Settings</div>
        `;

        // Position dropdown
        const rect = event.target.getBoundingClientRect();
        dropdown.style.position = 'absolute';
        dropdown.style.top = (rect.bottom + 5) + 'px';
        dropdown.style.right = '24px';
        dropdown.style.background = 'white';
        dropdown.style.border = '1px solid #e5e7eb';
        dropdown.style.borderRadius = '8px';
        dropdown.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        dropdown.style.zIndex = '1000';
        dropdown.style.minWidth = '120px';

        document.body.appendChild(dropdown);

        // Close dropdown when clicking outside
        setTimeout(() => {
            document.addEventListener('click', function closeDropdown(e) {
                if (!dropdown.contains(e.target)) {
                    dropdown.remove();
                    document.removeEventListener('click', closeDropdown);
                }
            });
        }, 100);

    } catch (error) {
        console.error('User dropdown error:', error);
    }
}

// Handle card hover effects
function handleCardHover(event) {
    try {
        const card = event.target;
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    } catch (error) {
        console.error('Card hover error:', error);
    }
}

function handleCardLeave(event) {
    try {
        const card = event.target;
        card.style.transform = '';
        card.style.boxShadow = '';
    } catch (error) {
        console.error('Card leave error:', error);
    }
}

// Handle chart clicks
function handleChartClick(event) {
    try {
        const chartCard = event.target.closest('.chart-card');
        const chartTitle = chartCard.querySelector('.chart-title').textContent;
        
        // Simulate chart interaction
        console.log(`Chart clicked: ${chartTitle}`);
        
        // Add a visual feedback
        chartCard.style.transform = 'scale(0.98)';
        setTimeout(() => {
            chartCard.style.transform = '';
        }, 150);

    } catch (error) {
        console.error('Chart click error:', error);
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    try {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('open');
    } catch (error) {
        console.error('Mobile menu toggle error:', error);
    }
}

// Handle filter changes
function handleFilterChange(event) {
    try {
        const select = event.target;
        const value = select.value;
        
        console.log(`Filter changed: ${value}`);
        
        // Simulate data filtering
        simulateDataFilter(value);

    } catch (error) {
        console.error('Filter change error:', error);
    }
}

// Load dashboard data (simulated)
function loadDashboardData() {
    try {
        // Simulate loading delay
        const cards = document.querySelectorAll('.dashboard-card, .stat-card');
        
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
                
                // Animate numbers
                const valueElement = card.querySelector('.card-value, .stat-value');
                if (valueElement) {
                    animateNumber(valueElement);
                }
            }, index * 100);
        });

        // Load chart data
        setTimeout(() => {
            loadChartData();
        }, 1000);

    } catch (error) {
        console.error('Dashboard data loading error:', error);
    }
}

// Animate numbers
function animateNumber(element) {
    try {
        const finalValue = parseInt(element.textContent);
        const duration = 1000;
        const steps = 30;
        const increment = finalValue / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
                element.textContent = finalValue;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, duration / steps);

    } catch (error) {
        console.error('Number animation error:', error);
    }
}

// Load chart data (simulated)
function loadChartData() {
    try {
        const charts = document.querySelectorAll('.pie-chart');
        
        charts.forEach(chart => {
            // Add animation class
            chart.style.opacity = '0';
            chart.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                chart.style.transition = 'all 0.5s ease';
                chart.style.opacity = '1';
                chart.style.transform = 'scale(1)';
            }, 500);
        });

    } catch (error) {
        console.error('Chart data loading error:', error);
    }
}

// Simulate page change
function simulatePageChange(navIndex) {
    try {
        const pageNames = ['Profile', 'Dashboard', 'Team', 'Tasks', 'Assets', 'Devices', 'Analytics', 'Mobile', 'Reports', 'Network'];
        const pageName = pageNames[navIndex] || 'Dashboard';
        
        console.log(`Navigating to: ${pageName}`);
        
        // In a real application, you would route to different pages here
        // For demo purposes, we'll just show a notification
        showNotification(`Navigated to ${pageName}`);

    } catch (error) {
        console.error('Page change simulation error:', error);
    }
}

// Simulate data filtering
function simulateDataFilter(filterValue) {
    try {
        console.log(`Filtering data by: ${filterValue}`);
        
        // Add loading state to cards
        const cards = document.querySelectorAll('.dashboard-card');
        cards.forEach(card => {
            card.classList.add('loading');
        });

        // Remove loading state after delay
        setTimeout(() => {
            cards.forEach(card => {
                card.classList.remove('loading');
            });
            showNotification(`Data filtered by ${filterValue}`);
        }, 1000);

    } catch (error) {
        console.error('Data filter simulation error:', error);
    }
}

// Show notification
function showNotification(message) {
    try {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            font-weight: 500;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);

    } catch (error) {
        console.error('Notification error:', error);
    }
}

// Global functions for dropdown menu
window.logout = function() {
    try {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Logout error:', error);
    }
};

window.showProfile = function() {
    showNotification('Profile page would open here');
};

window.showSettings = function() {
    showNotification('Settings page would open here');
};

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // Refresh data when page becomes visible
        console.log('Page visible - refreshing data');
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    // Adjust layout for responsive design
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
    }
});
