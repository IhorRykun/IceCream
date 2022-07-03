window.addEventListener("load", windowLoad);

function windowLoad() {
    let runningAnimation = {};

    // Функція ініціалізації
    function digitsCountersInit(digitsCountersItems) {
        let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
        if (digitsCounters) {
            digitsCounters.forEach(digitsCounter => {
                if (!runningAnimation[digitsCounter.id]) {
                    digitsCountersAnimate(digitsCounter);
                }
            });
        }
    }
    // Функція анімації
    function digitsCountersAnimate(digitsCounter) {
        let startTimestamp = null;
        runningAnimation[digitsCounter.id] = true;
        const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
        const startValue = parseInt(digitsCounter.innerHTML);
        const startPosition = 0;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                runningAnimation[digitsCounter.id] = false;
            }
        };
        window.requestAnimationFrame(step);
    }
    // Пуск при завантаженні сторінки
    //digitsCountersInit();

    // //Пуск при скролі (появі блока з лічильниками)
    let options = {
        threshold: 0.3
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElement = entry.target;
                const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
                if (digitsCountersItems.length) {
                    digitsCountersInit(digitsCountersItems);
                }
                //  Вимкнути відслідковування після спрацювання
                //observer.unobserve(targetElement);
            }
        });

    }, options);

    let sections = document.querySelectorAll('.advantages, .hero__statistics');
    //if (sections.length) {
        sections.forEach(section => {
            observer.observe(section);
        });
    //}
}
