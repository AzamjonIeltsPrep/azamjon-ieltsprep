// script.js for Azamjon IELTS Prep

document.addEventListener('DOMContentLoaded', function() {
    console.log('Azamjon IELTS Prep loaded successfully!');
    
    // DOM Elements
    const startTestBtn = document.getElementById('start-test-btn');
    const progressBar = document.querySelector('.progress-fill');
    
    // Check if progress exists in localStorage
    loadProgress();
    
    // Event Listeners
    if (startTestBtn) {
        startTestBtn.addEventListener('click', startTest);
    }
    
    // Initialize smooth scrolling for navigation links
    initSmoothScroll();
    
    // Function to start a test
    function startTest() {
        alert('Starting IELTS Practice Test! This feature will be available soon.\n\nIn the meantime, check out our preparation materials.');
        
        // Simulate progress update
        updateProgress(10);
        
        // In a real app, this would redirect to a test page
        console.log('Test started at:', new Date().toLocaleTimeString());
    }
    
    // Function to update progress
    function updateProgress(percentage) {
        let currentProgress = localStorage.getItem('ieltsProgress') || 0;
        currentProgress = Math.min(100, Math.max(parseInt(currentProgress), 0) + percentage);
        
        // Save to localStorage
        localStorage.setItem('ieltsProgress', currentProgress);
        
        // Update progress bar if it exists
        if (progressBar) {
            progressBar.style.width = currentProgress + '%';
            progressBar.textContent = currentProgress + '%';
        }
        
        console.log('Progress updated to:', currentProgress + '%');
        return currentProgress;
    }
    
    // Function to load progress from localStorage
    function loadProgress() {
        const savedProgress = localStorage.getItem('ieltsProgress');
        
        if (savedProgress && progressBar) {
            progressBar.style.width = savedProgress + '%';
            progressBar.textContent = savedProgress + '%';
            console.log('Loaded progress from storage:', savedProgress + '%');
        } else if (progressBar) {
            // Set initial progress to 0%
            progressBar.style.width = '0%';
            localStorage.setItem('ieltsProgress', 0);
        }
    }
    
    // Function for smooth scrolling
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if it's just "#"
                if (href === '#') return;
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Feature cards interaction
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            console.log('Selected feature:', title);
            
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Initialize sample data for demonstration
    initializeSampleData();
    
    function initializeSampleData() {
        // Check if sample data is already initialized
        if (!localStorage.getItem('sampleDataInitialized')) {
            // Initialize sample IELTS test data structure
            const sampleData = {
                lastAccessed: new Date().toISOString(),
                testsCompleted: 0,
                averageScore: 0,
                studyPlan: {
                    dailyGoal: '30 minutes',
                    focusAreas: ['Reading', 'Listening']
                }
            };
            
            localStorage.setItem('ieltsUserData', JSON.stringify(sampleData));
            localStorage.setItem('sampleDataInitialized', 'true');
            console.log('Sample data initialized');
        }
    }
    
    // Display welcome message on first visit
    if (!localStorage.getItem('welcomeShown')) {
        setTimeout(() => {
            console.log('Welcome to Azamjon IELTS Prep! 🎯');
            localStorage.setItem('welcomeShown', 'true');
        }, 1000);
    }
});

/* ====== ENHANCED NAVIGATION ====== */
.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
}

.nav-links li {
    position: relative;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-links a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.nav-links a::before {
    content: '→';
    opacity: 0;
    transition: opacity 0.3s ease;
}

.nav-links a:hover::before {
    opacity: 1;
}

/* Active state */
.nav-links a.active {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Mobile menu */
.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
}

/* ====== HERO SECTION ENHANCEMENT ====== */
.hero {
    text-align: center;
    padding: 5rem 2rem;
    background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%);
    color: white;
    border-radius: 0 0 30px 30px;
    margin-bottom: 3rem;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.05)"/></svg>');
    background-size: cover;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero p {
    font-size: 1.3rem;
    max-width: 700px;
    margin: 0 auto 2.5rem;
    opacity: 0.9;
}

/* Enhanced CTA Button */
.cta-button {
    background: linear-gradient(135deg, #FF7E5F 0%, #FEB47B 100%);
    color: white;
    border: none;
    padding: 1.2rem 3rem;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(255, 126, 95, 0.4);
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
    z-index: -1;
}

.cta-button:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(255, 126, 95, 0.6);
}

.cta-button:hover::before {
    left: 100%;
}

.cta-button:active {
    transform: translateY(-2px);
}

/* Button variants */
.cta-button.secondary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.cta-button.outline {
    background: transparent;
    border: 2px solid white;
    color: white;
    box-shadow: none;
}

.cta-button.outline:hover {
    background: white;
    color: #1a2980;
}
