(function splash() {
    var splash = window.document.querySelector('.splash');
    var progress = window.document.querySelector('.splash__progress-indicator');
    if (splash && progress) {
        var stepCount = 15;
        var step = 0;
        var width = 0;
        var timer = null;

        var dismiss = function dismiss() {
            clearTimeout(timer);
            progress.style.width = '100%';
            splash.className += ' splash_dismissed';
            setTimeout(function hideSplash() {
                splash.style.display = 'none';
            }, 500);
        };

        var makeStep = function makeStep() {
            timer = setTimeout(
                function setWidth() {
                    width += 100 / stepCount;
                    step += 1;
                    progress.style.width = width + '%';
                    if (step < stepCount - 1) {
                        makeStep();
                    }
                },
                step ? Math.floor(Math.random() * 1000) : 50,
            );
        };
        makeStep();
        window.splash = {
            dismiss: dismiss,
        };
    }
})();
