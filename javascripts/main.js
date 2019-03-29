(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const plate = document.getElementById('svg-plate');
        const centerPlate = document.getElementById('svg-center-plate');
        plate.classList.add('rotate');
        centerPlate.classList.add('antirotate');
    });
}());