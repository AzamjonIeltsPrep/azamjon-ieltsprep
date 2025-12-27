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
