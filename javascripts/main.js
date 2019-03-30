(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const plate = document.getElementById('svg-plate');
        const centerPlate = document.getElementById('svg-center-plate');
        const UmiaTitle = document.getElementById('umia-title');
        setTimeout(() => {
            plate.classList.add('rotate');
            centerPlate.classList.add('antirotate');
            effects.fadeIn(UmiaTitle);
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