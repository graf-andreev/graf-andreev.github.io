const items = document.querySelectorAll(".page-support__question__close");
const itemsMobile = document.querySelectorAll('.page-support__question__header');
const buttons = document.querySelectorAll(".component-products__content-block__item__product-block__button-block");
const contentBlock = document.querySelector('.component-products__content-block');
const images = document.querySelectorAll('.advantage-img');
const advantageBlocks = document.querySelectorAll('.Advantages_advantage');
const productsButtons = document.querySelectorAll('.component-products__carousel__item__short');
const mobileAccordion = document.querySelectorAll('.page-support__title-mobile');
const mobileStepsContainer = document.querySelector('.sign-up-steps-mobile__tabs');
const mobileSteps = document.querySelectorAll('.sign-up-steps-mobile__tabs__item');
const mobileStepsCarousel = document.querySelector('.sign-up-steps-mobile__carousel');
const closeMobileStepsCarousel = document.querySelectorAll('.sign-up-steps-mobile__carousel__item__close');
const phoneInput = document.querySelector('#phone');
const phoneButton = document.querySelector('#send-phone');
const rangeStart = document.querySelector('.Range_edgePointStart');
const rangeEnd = document.querySelector('.Range_edgePointEnd');
const itemsStars = document.querySelectorAll('.RequirementsBar_item');
const menuOpen = document.querySelector('.subnav__item');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('#close-menu');
const mobileMenuClick = document.querySelectorAll('.mobile-menu__item-click');
const popupCloseButton = document.querySelector('.CreditLine_popupButton');
const creditLinePopup = document.querySelector('.CreditLine_popupOverlay');
const creditInfoButton = document.querySelector('.CreditLine_infoButton');
const rangeInput = document.querySelector('#input');
const showMoreButton = document.querySelector('.show-more__button');
const hiddenText = document.querySelector('.show-more__hidden-text');

$(document).ready(function () {
    $('.component-products__carousel').slick({
        dots: true,
        arrows: false,
        centerMode: true,
        infinite: false,
        centerPadding: `0vw`,
        slidesToShow: 1,
        variableWidth: true,
        speed: 400,
        initialSlide: 0,
    });

    $('.sign-up-steps-mobile__carousel').slick({
        dots: true,
        arrows: false,
        centerMode: true,
        infinite: false,
        centerPadding: `0vw`,
        slidesToShow: 1,
        variableWidth: true,
        speed: 400,
        touchThreshold: 30,
    });
});

showMoreButton.addEventListener('click', function () {
    hiddenText.style.display = 'block';
    this.style.display = 'none';
})
creditInfoButton.addEventListener('click', function (){
    creditLinePopup.style.display = 'block'
});

popupCloseButton.addEventListener('click', function () {
    creditLinePopup.style.display = 'none'
});

const phoneFormat = {
    raw: (value) => `+${String(value).replace(/\D/g, '')}`,
    format: (value) => {
        let cleanValue = String(value)
            .replace(/^\+8/, '')
            .replace(/^\+7/, '')
            .replace(/\D/g, '');

        // In case of autofill from browser storage.
        if (cleanValue.length === 11) {
            cleanValue = cleanValue.slice(1);
        }

        const groups = cleanValue.match(
            /([0-9]{1,3})?([0-9]{1,3})?([0-9]{1,2})?([0-9]{1,2})?/
        );
        let result = '';

        if (groups[1]) {
            result += `+7 (${groups[1]}`;
        }

        if (groups[2]) {
            result += `) ${groups[2]}`;
        }

        if (groups[3]) {
            result += `-${groups[3]}`;
        }

        if (groups[4]) {
            result += `-${groups[4]}`;
        }

        return result;
    },
};

phoneInput.addEventListener('keydown', function (e) {
    phoneInput.value = `${phoneFormat.format(e.target.value).replace(/^\+7 \(/, '')}`;
    if (phoneInput.value.length === 14) {
        phoneButton.removeAttribute('disabled')
    }
})
function hideMobileStepsCarousel() {
    mobileStepsContainer.style.display = 'block';
    mobileStepsCarousel.style.display = 'none'
}

closeMobileStepsCarousel.forEach(item => item.addEventListener('click', hideMobileStepsCarousel));
function showMobileStepsCarousel(e) {
    $('.sign-up-steps-mobile__carousel').slick('slickGoTo', e.target.getAttribute('aria-valuetext'));
    mobileStepsContainer.style.display = 'none';
    mobileStepsCarousel.style.display = 'block'
}

mobileSteps.forEach(item => item.addEventListener('click', (e) => showMobileStepsCarousel(e)));
function showProductsMobile(e) {
    if (e.target.innerText === 'Подробнее') {
        e.target.parentNode.parentNode.classList.add('component-products__carousel__item_opened');
    }
    if (e.target.className.baseVal === 'component-products__carousel__item__short__title__icon') {
        e.target.parentNode.parentNode.parentNode.classList.remove('component-products__carousel__item_opened');
    }
}

productsButtons.forEach(item => item.addEventListener('click', (e) => showProductsMobile(e)));

function toggleAccordionMobile() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < mobileAccordion.length; i++) {
        mobileAccordion[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

mobileAccordion.forEach(item => item.addEventListener('click', toggleAccordionMobile));


function toggleProducts() {
    const itemToggle = this.getAttribute('aria-expanded');
    const itemsType = this.getAttribute('data-type');

    for (i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }

    if (itemsType == 'percentage') {
        contentBlock.classList.toggle('percentage');
    }

    if (itemsType == 'payment-deferment') {
        contentBlock.classList.toggle('payment-deferment');
    }
}

buttons.forEach(item => item.addEventListener('click', toggleProducts));

if (window.innerWidth > 1080) {
    var currentIndex = 1;

    function showNextImage() {
        for (var i = 0; i < images.length; i++) {
            if (i === currentIndex) {
                images[i].style.display = 'block';
            } else {
                images[i].style.display = 'none';
            }
        }
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(showNextImage, 5000);

    var currentIndexAdv = 1;

    function showNextAdv() {
        for (var i = 0; i < advantageBlocks.length; i++) {
            if (i === currentIndexAdv) {
                advantageBlocks[i].classList.add('active');
            } else {
                advantageBlocks[i].classList.remove('active');
            }
        }
        currentIndexAdv = (currentIndexAdv + 1) % advantageBlocks.length;
    }

    setInterval(showNextAdv, 5000);

    window.addEventListener('load', function () {
        advantageBlocks[0].classList.add('active');
    })

    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        for (i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }

        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));
} else {
    function faqMobile() {
        const itemToggle = this.getAttribute('aria-expanded');

        for (i = 0; i < itemsMobile.length; i++) {
            itemsMobile[i].setAttribute('aria-expanded', 'false');
        }

        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    itemsMobile.forEach(item => item.addEventListener('click', faqMobile));
}

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    });
    return response.json(); //
}


phoneButton.addEventListener('click', function (){
    postData('mail-service/admin/request-call', {phone: `+7${phoneInput.value.replace(/[\s()-]/g, '')}`})
    phoneInput.value = ''
    phoneButton.setAttribute('disabled', true)
})

var valueBubble = '<output class="rangeslider__value-bubble" />';

document.querySelector('#input')

function updateValueBubble(pos, value, context) {
    pos = pos || context.position;
    value = value || context.value;
    var $valueBubble = $('.rangeslider__value-bubble', context.$range);
    var tempPosition = pos + context.grabPos;
    var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

    if (context.value === 15000 || context.value === 300000) {
        $valueBubble[0].style.display = 'none'
    } else {
        $valueBubble[0].style.display = 'block'
    }
    // console.log(context)
    // if (context.value >= 30000) {
    //     context.step = 30000
    // } else {
    //     context.step = 15000
    // }
    console.log(context)
    if ($valueBubble.length) {
        $valueBubble[0].style.left = Math.ceil(position) + 'px';
        $valueBubble[0].innerHTML = value;
    }
}

$('input[type="range"]').rangeslider({
    polyfill: false,
    step: [15000, 30000, 60000, 90000, 120000, 150000, 180000, 210000, 240000, 270000, 300000],
    onInit: function() {
        this.$range.append($(valueBubble));
        updateValueBubble(null, null, this);
    },
    onSlide: function(pos, value) {
        updateValueBubble(pos, value, this);
        if (value === 15000) {

            rangeStart.classList.add('Range_edgePoint_selected');
        } else {
            rangeStart.classList.remove('Range_edgePoint_selected');
        }
        if (value === 300000) {
            rangeEnd.classList.add('Range_edgePoint_selected');
        } else {
            rangeEnd.classList.remove('Range_edgePoint_selected');
        }
        if (window.innerWidth > 850) {
            if (value >= 60000) {
                itemsStars[1].classList.add('active');
            } else {
                itemsStars[1].classList.remove('active');
            }
            if (value >= 90000) {
                itemsStars[2].classList.add('active');
            } else {
                itemsStars[2].classList.remove('active');
            }
            if (value >= 120000) {
                itemsStars[3].classList.add('active');
            } else {
                itemsStars[3].classList.remove('active');
            }
            if (value >= 300000) {
                itemsStars[4].classList.add('active');
            } else {
                itemsStars[4].classList.remove('active');
            }
        } else {
            if (value < 60000) {
                itemsStars[0].classList.add('RequirementsBar_currentItem');
            } else {
                itemsStars[0].classList.remove('RequirementsBar_currentItem');
            }
            if (value >= 60000 && value < 90000) {
                itemsStars[1].classList.add('RequirementsBar_currentItem');
            } else {
                itemsStars[1].classList.remove('RequirementsBar_currentItem');
            }
            if (value >= 90000 && value < 120000 ) {
                itemsStars[2].classList.add('RequirementsBar_currentItem');
            } else {
                itemsStars[2].classList.remove('RequirementsBar_currentItem');
            }
            if (value >= 120000 && value < 300000) {
                itemsStars[3].classList.add('RequirementsBar_currentItem');
            } else {
                itemsStars[3].classList.remove('RequirementsBar_currentItem');
            }
            if (value >= 300000) {
                itemsStars[4].classList.add('RequirementsBar_currentItem');
            } else {
                itemsStars[4].classList.remove('RequirementsBar_currentItem');
            }
        }
    }
});

function checkSlide() {
    const creditLine = document.getElementById('creditLine');
    const subnav = document.querySelector('.subnav');
    const windowHeight = window.innerHeight;
    const elementTop = creditLine?.getBoundingClientRect().top;
    if (subnav && elementTop < windowHeight) {
        subnav.classList.add('slide');
    } else {
        subnav.classList.remove('slide');
    }
}
window.addEventListener('scroll', checkSlide);

menuOpen.addEventListener('click', function () {
    mobileMenu.style.display = 'flex';
});

closeMenuButton.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
});

function toggleMobileMenu() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < mobileMenuClick.length; i++) {
        mobileMenuClick[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

mobileMenuClick.forEach(item => item.addEventListener('click', toggleMobileMenu));
