// main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Cliq Campus initialized');

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger to close icon
            const svg = mobileMenuBtn.querySelector('svg');
            if (navMenu.classList.contains('active')) {
                svg.innerHTML = `
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                `;
            } else {
                svg.innerHTML = `
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                `;
            }
        });
    }
    // Handle Scholarship Form Submission
    const scholarshipForm = document.getElementById('scholarshipForm');
    if (scholarshipForm) {
        scholarshipForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(scholarshipForm);
            const data = Object.fromEntries(formData.entries());
            
            const submitBtn = scholarshipForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            try {
                submitBtn.disabled = true;
                submitBtn.innerText = 'Applying...';

                // Call the backend API
                const response = await fetch('http://localhost:5000/api/scholarship-apply', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok) {
                    alert(result.message || 'Application submitted successfully!');
                    scholarshipForm.reset();
                } else {
                    alert('Something went wrong. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Could not connect to the server. Make sure the backend is running.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
            }
        });
    }

    // Simple Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });

    // Add revelation style dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        section.revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // EMI Calculator Logic
    const loanAmount = document.getElementById('loanAmount');
    const interestRate = document.getElementById('interestRate');
    const loanTenure = document.getElementById('loanTenure');

    if (loanAmount && interestRate && loanTenure) {
        function updateEMI() {
            const P = parseFloat(loanAmount.value);
            const r = parseFloat(interestRate.value) / 12 / 100;
            const n = parseFloat(loanTenure.value) * 12;

            const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const totalPayment = emi * n;
            const totalInterest = totalPayment - P;

            const amountVal = document.getElementById('amountVal');
            const rateVal = document.getElementById('rateVal');
            const tenureVal = document.getElementById('tenureVal');
            const monthlyEmi = document.getElementById('monthlyEmi');
            const resPrincipal = document.getElementById('resPrincipal');
            const resInterest = document.getElementById('resInterest');

            if (amountVal) amountVal.innerText = `Rs. ${P.toLocaleString()}`;
            if (rateVal) rateVal.innerText = `${interestRate.value}%`;
            if (tenureVal) tenureVal.innerText = `${loanTenure.value} Years`;
            if (monthlyEmi) monthlyEmi.innerText = `Rs. ${Math.round(emi).toLocaleString()}`;
            if (resPrincipal) resPrincipal.innerText = `Rs. ${P.toLocaleString()}`;
            if (resInterest) resInterest.innerText = `Rs. ${Math.round(totalInterest).toLocaleString()}`;
        }

        loanAmount.addEventListener('input', updateEMI);
        interestRate.addEventListener('input', updateEMI);
        loanTenure.addEventListener('input', updateEMI);
        
        // Initial calculation
        updateEMI();
    }

    // FAQ Accordion Logic
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            parent.classList.toggle('active');
            const span = item.querySelector('span');
            if (span) {
                span.innerText = parent.classList.contains('active') ? '-' : '+';
            }
        });
    });

    // Sticky Header Logic
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Trigger on load in case page is already scrolled
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        }
    }
});
