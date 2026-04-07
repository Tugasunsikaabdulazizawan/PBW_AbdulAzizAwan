document.addEventListener('DOMContentLoaded', () => {
    
    const radioMonthly = document.getElementById('monthly');
    const radioYearly = document.getElementById('yearly');
    const priceDisplays = document.querySelectorAll('.price-display');
    const periodTexts = document.querySelectorAll('.period-text');
    const discountLabels = document.querySelectorAll('.discount-label');

    const updatePricing = (isYearly) => {
        priceDisplays.forEach((el, index) => {
            const basePrice = parseInt(el.getAttribute('data-price'));
            
            if (isYearly) {
                const yearlyPrice = (basePrice * 12) * 0.8;
                el.innerText = `Rp ${yearlyPrice.toLocaleString('id-ID')}`;
                periodTexts[index].innerText = "per tahun";
                discountLabels[index].classList.remove('d-none');
            } else {
                el.innerText = `Rp ${basePrice.toLocaleString('id-ID')}`;
                periodTexts[index].innerText = "per bulan";
                discountLabels[index].classList.add('d-none');
            }
        });
    };

    radioMonthly.addEventListener('change', () => updatePricing(false));
    radioYearly.addEventListener('change', () => updatePricing(true));


    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        [name, email, message].forEach(input => input.classList.remove('is-invalid'));
        successMsg.classList.add('d-none');

        if (name.value.trim() === "") {
            name.classList.add('is-invalid');
            isValid = false;
        }

        if (email.value.trim() === "" || !email.value.includes('@')) {
            email.classList.add('is-invalid');
            isValid = false;
        }

        if (message.value.trim() === "") {
            message.classList.add('is-invalid');
            isValid = false;
        }

        if (isValid) {
            successMsg.classList.remove('d-none');
            
            contactForm.reset();

            setTimeout(() => {
                successMsg.classList.add('d-none');
            }, 5000);
            
            console.log("Form Berhasil Dikirim!");
        }
    });
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark', 'shadow-lg');
            navbar.style.padding = "10px 0";
        } else {
            navbar.style.padding = "15px 0";
        }
    });
});