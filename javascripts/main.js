(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const plate = document.getElementById('svg-plate');
        const centerPlate = document.getElementById('svg-center-plate');
        const UmiaTitle = document.getElementById('umia-title');
        const cuisineVoyages = document.getElementById('CuisineVoyages');
        const iconPhoneCall = document.getElementById('phone-call-out');
        const telephone = document.getElementById('telephone');
        const address = document.getElementById('address');
        setTimeout(() => {
            plate.classList.add('rotate');
            centerPlate.classList.add('antirotate');
            effects.fadeIn(UmiaTitle);
            setTimeout(() => {
                effects.fadeIn(cuisineVoyages);
                setTimeout(() => {
                    effects.fadeIn(iconPhoneCall);
                    effects.fadeIn(telephone);
                    setTimeout(() => {
                        effects.fadeIn(address);
                    }, 500);
                }, 500);
            }, 1000);
        }, 300);
    });
}());

const effects = {
    fadeIn: el => {
        el.classList.remove('hide');
        let op = 0;
        let bl = 5;
        el.display = 'block';
        const timer = setInterval(() => {
            if (op >= 1) {
                clearInterval(timer);
            }
            el.style.opacity = op;
            el.style.filter = `blur(${bl})px`;
            op += 0.005;
            bl -= .025;
        }, 1);
    },
};