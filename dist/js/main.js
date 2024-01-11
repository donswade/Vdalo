fetch(`https://656293beee04015769a680af.mockapi.io/vdalo`).then((response) => response.json()).then(data => data.forEach(element => dataFromMock.push(element)))
var dataFromMock = []
var isBodyActive = false
function headerMobileMenu() {
    var menu = document.querySelector('.header__block')
    var contactButton = document.querySelector(".header__button")
    var button = document.querySelector(".header__mobile")
    var body = document.body
    var links = document.querySelectorAll("a.header__li")
    function toggleClass() {
        body.classList.toggle("body__active")
        button.classList.toggle("header__mobile_active")
        menu.classList.toggle("header__block_active")
        contactButton.classList.toggle("header__button_active")
        isBodyActive ? isBodyActive = false : isBodyActive = true
        console.log(isBodyActive)
    }
    function closeMenu() {
        body.classList.remove("body__active")

        button.classList.remove("header__mobile_active")
        menu.classList.remove("header__block_active")
        contactButton.classList.remove("header__button_active")
        isBodyActive = false
        console.log(isBodyActive)
    }

    button.addEventListener("click", () => {
        toggleClass()
    })

    links.forEach((element) => {
        element.addEventListener("click", closeMenu)
    })
}
function headerServiceListFunc() {
    var headerServiceButton = document.querySelector("div.header__link")
    var headerServiceWrapper = document.querySelector('.header__li_wrapper')


    function HideBlock(event) {
        var targetElement = event.relatedTarget
        if (!headerServiceWrapper.contains(targetElement)) {
            headerServiceWrapper.classList.remove('header__li_wrapper_active')
        }
    }

    headerServiceButton.addEventListener("mouseover", () => {
        headerServiceWrapper.classList.add("header__li_wrapper_active")
    })

    headerServiceButton.addEventListener('mouseout', (e) => HideBlock(e))




    headerServiceButton.addEventListener("click", () => {
        headerServiceWrapper.classList.toggle("header__li_wrapper_active")
    })

}
function allSliders() {
    var ourClientsSwipers = document.querySelectorAll(".ourClients__swiper").forEach((slider, index) => {
        var mySwiper = new Swiper(slider, {
            loop: true,
            direction: 'horizontal',
            autoplay: {
                delay: 500, // Затримка між слайдами у мілісекундах
            },
            pauseOnMouseEnter: true,
            breakpoints: {
                // when window width is >= 320px
                280: {
                    slidesPerView: 2.1,
                },
                // when window width is >= 480px
                520: {
                    slidesPerView: 3.5,
                },
                // when window width is >= 640px
                768: {
                    slidesPerView: 4.5,
                },
                1080: {
                    slidesPerView: 5.5,

                }

            }
        })
        slider.addEventListener('mouseenter', () => {
            mySwiper.autoplay.stop()
        })

        slider.addEventListener('mouseleave', () => {
            mySwiper.autoplay.start()
        })
    })
    var caseSwiper = new Swiper(".case__swiper", {
        breakpoints: {
            // when window width is >= 320px
            280: {
                slidesPerView: 3.1,
            },
            // when window width is >= 480px
            600: {
                slidesPerView: 4,
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 5,
            }
        }
    })
    var aboutServiceSwiper = new Swiper(".aboutService__swiper", {
        spaceBetween: 16,

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragClass: "swiper-drag"
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 1,
            },
            1080: {
                slidesPerView: 2.1,

            }

        }
    })
    var recomendationSwiper = new Swiper(".recomendation__swiper", {
        spaceBetween: 16,
        navigation: {
            nextEl: ".recomendation__swiper-button-next",
            prevEl: ".recomendation__swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            280: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            600: {
                slidesPerView: 2,
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 2.5,
            },
            1080: {
                slidesPerView: 3,

            }

        }
    })
    var historyAboutSwiper = new Swiper(".historyAboutSwiper", {
        spaceBetween: 16,

        breakpoints: {
            280: {
                spaceBetween: 0,

                enabled: false,

            },
            // when window width is >= 640px
            768: {
                spaceBetween: 16,

                grid: {
                    rows: 2,
                },
                enabled: true,
                slidesPerView: 1.1,
            },
            1080: {
                grid: {
                    rows: 2,
                },
                slidesPerView: 2.4,

            }

        }
    })
    var teamSwiper = new Swiper('.ourTeam__swiper', {
        direction: 'horizontal',
        spaceBetween: 16,
        navigation: {
            nextEl: '.ourTeam__swiper-button-next',
            prevEl: '.ourTeam__swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            280: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            600: {
                slidesPerView: 2,
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 2.5,
            },
            1080: {
                slidesPerView: 4,

            }

        }

    })
    var usefullSwiper = new Swiper('.usefulBlog__swiper', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 16,

        navigation: {
            nextEl: '.usefulBlog__swiper-button-next',
            prevEl: '.usefulBlog__swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            280: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            600: {
                slidesPerView: 2,
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 2.5,
            },
            1080: {
                slidesPerView: 3,

            }

        }
    })
    var usHistorySwiper = new Swiper('.usHistory__swiper', {
        direction: 'horizontal',
        breakpoints: {

            // when window width is >= 320px
            280: {
                spaceBetween: 16,
                slidesPerView: 1.1,
            },
            // when window width is >= 640px
            768: {
                spaceBetween: 16,
                enabled: false,
                slidesPerView: 3,
            }

        }
    })
    var aboutUsSwiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })
}
function smoothAnchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            }, 2000)
        })
    })
}
function toggleBlogMenu() {
    var button = document.querySelector(".blog__label_button")
    var themeButtons = document.querySelectorAll('.case__swiper-slide')
    var wrapper = document.querySelector(".blog__label_wrapperBlock")
    var body = document.body
    function toggleTheme() {
        button.classList.toggle("blog__label_button__active")
        themeButtons.forEach(element => element.classList.toggle("case__swiper-slide__active"))
        wrapper.classList.toggle("blog__label_wrapperBlock__active")
        body.classList.toggle("body__active")

    }
    wrapper.addEventListener("click", (e) => {
        if (e.target.classList[0] === "blog__label_wrapperBlock") {
            toggleTheme()
        }
    })

    button.addEventListener("click", toggleTheme)
    themeButtons.forEach(element => {
        if (window.innerWidth < 768) {
            element.addEventListener("click", () => {
                button.textContent = element.textContent
                toggleTheme()
            })

        }
    })
}
function scrollOnArrowClick() {
    var arrowDown = document.querySelector(".arrow-down ")

    arrowDown.addEventListener('click', () => {
        window.scrollBy({
            top: window.innerHeight * 0.8,
            behavior: 'smooth' // Use smooth scrolling
        })
    })
}
function showHideText() {
    var textsElement = document.querySelectorAll(".popularQuestions__column_description")
    var buttons = document.querySelectorAll(".popularQuestions__column_link")
    var maxLength = 100
    var texts = []


    function hideText(index) {
        texts[index].isShow = false
        textsElement[index].innerHTML = texts[index].text.substring(0, maxLength) + "..."
        buttons[index].textContent = "Дізнатися більше"
    }
    function showText(index) {
        texts[index].isShow = true
        textsElement[index].innerHTML = texts[index].text
        buttons[index].textContent = "Згорнути деталі"
    }

    textsElement.forEach((textElement, index) => {
        texts.push({ text: textElement.textContent, isShow: false })
        textsElement[index].innerHTML = texts[index].text.substring(0, maxLength) + "..."
    })

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            console.dir(texts)
            texts[index].isShow ? hideText(index) : showText(index)

        })
    })

}
function animationElement(elements) {
    var observer = new IntersectionObserver(onEntry, options)
    var options = {
        threshold: [0.5]
    }
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('show')
            }
        })
    }

    for (var index = 0; index < elements.length; index++) {
        observer.observe(elements[index])
    }
}
function startAllAnimation() {
    try { animationElement([document.querySelector('.firstScreen__title')]) } catch { console.log("not found firstScreen__title") }
    try { animationElement(document.querySelectorAll('.title')) } catch { console.log("not found title") }
    try { animationElement([...document.querySelectorAll('.white-opacity'), ...document.querySelectorAll('.white-opacity-50')]) } catch { console.log("not found") }
    try { animationElement([document.querySelector('.firstSection__button')]) } catch { console.log("not found firstSection__button") }
    try { animationElement(document.querySelectorAll(".firstSection__benefit_title")) } catch { console.log("not found firstSection__benefit_title") }
    try { animationElement(document.querySelectorAll('.animationRightToLeft')) } catch { console.log("not found animationRightToLeft") }
    try { animationElement(document.querySelectorAll('.animationLeftToRight')) } catch { console.log("not found animationLeftToRight") }
    try { animationElement(document.querySelectorAll(".animationTopToBottom")) } catch { console.log("not found animationTopToBottom") }
    try { animationElement(document.querySelectorAll(".animationBottomToTop")) } catch { console.log("not found animationTopToBottom") }
}
function movingTitleOnScroll() {
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) {
            var scrollTop = window.scrollY || document.documentElement.scrollTop
            var movingElement = document.querySelector('.firstScreen__title.show')
            var newPosition = scrollTop / 1
            movingElement.style.left = newPosition + 'px'
        }
    })
}
function changeCase() {
    var caseButtons = document.querySelectorAll(".case__swiper-slide")
    caseButtons.forEach((button) => button.addEventListener("click", () => {
        caseButtons.forEach(button => button.classList.remove("case__swiper-slide_active"))
        button.classList.add("case__swiper-slide_active")
        renderCase(button.getAttribute('aria-name'))
    }))
    function renderCase(type) {
        var wrapper = document.querySelector(".case__wrapper")
        var carts = []
        var cases = ""

        dataFromMock.map(elemente => {
            if (elemente.type == type) {
                carts.push(elemente)
            }
        })

        carts.forEach(elemente => {
            cases += `
        <article class="case__column br-20">
        <div class="case__imgWrapper">
          <img
            src="./images/${elemente.img}"
            alt="case img"
            class="case__img"
          />
        </div>
        <h1 class="case__columnTitle">${elemente.name}</h1>
        <p class="case__columnDescription white-opacity">
          ${elemente.text}
        </p>
        <div class="case__block">
          <div class="case__row">
            <span class="case__price"> ${elemente.budget}$ </span>
            <span class="case__text white-opacity"
              >Витрачений <br />
              бюджет</span
            >
          </div>
          <div class="case__row">
            <span class="case__price"> ${elemente.priceForRequest}$ </span>
            <span class="case__text white-opacity"
              >Ціна за <br />
              заявку</span
            >
          </div>
          <div class="case__row">
            <span class="case__price"> ${elemente.sellingPrice}$ </span>
            <span class="case__text white-opacity"
              >Вартість <br />
              продажу</span
            >
          </div>
        </div>
        <button class="case__button bt-90">Детальніше про кейс</button>
      </article>`
        })
        wrapper.innerHTML = cases
        startAllAnimation()

    }
}
function changeBlog() {
    var buttons = document.querySelectorAll('.blog__case_button.case__swiper-slide')
    var wrapper = document.querySelector('.blog__wrapper')
    var body = document.body

    buttons.forEach((button) => button.addEventListener("click", () => {
        buttons.forEach(button => button.classList.remove("case__swiper-slide_active"))
        button.classList.add("case__swiper-slide_active")
        renderCase(button.getAttribute('aria-name'))
    }))

    function renderCase(type) {
        var cases = ""
        var carts = []
        dataFromMock.map(elemente => {
            if (elemente.type == type) {
                carts.push(elemente)
            }
        })
        carts.forEach(elemente => {
            cases += `
                <article class="usefulBlog__swiper-slide swiper-slide br-20">
                <a href="${elemente.link}">
                  <div class="usefulBlog__swiper_imgBlock">
                    <img
                      src="./images/${elemente.img}"
                      alt=""
                      class="usefulBlog__swiper_img"
                    />
                  </div>
                  <div class="usefulBlog__swiper_block">
                    <div class="usefulBlog__swiper_span purpleBlock">Topic</div>
                    <div class="usefulBlog__swiper_time white-opacity">
                        ${elemente.time}
                    </div>
                    <h3 class="usefulBlog__swiper_title animationLeftToRight">
                      ${elemente.name}
                    </h3>
                  </div>
                </a>
              </article>`


        })
        wrapper.innerHTML = cases
        startAllAnimation()
    }

}
function animationForMainArrow() {
    // animation for arrow on first page
    var pathElement = document.getElementById('myPath')

    gsap.to(pathElement, {
        duration: 2,
        attr: {
            d: "M17 342.131L9 351.289M9 351.289L1 342.131M9 351.289V1",
        },
        ease: "power2.inOut", // You can use different easing functions
    })
}
function toggleModalFrom() {
    var buttons = document.querySelectorAll(".toggleModalWindow")
    var modalWindow = document.querySelector(".modal")
    var body = document.body
    var exitButton = document.querySelector(".modal__exit")

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            isBodyActive ? null : body.classList.add("body__active")
            modalWindow.classList.add("active")
        })
    })
    modalWindow.addEventListener("click", (e) => {
        if (e.target.classList[0] === "modal" || e.target.classList[0] === "modal__exit" || e.target.classList[0] === "modal__exit_span") {
            isBodyActive ? null : body.classList.remove("body__active")
            modalWindow.classList.remove("active")
        }
    })


}
function changeTitleForIniamtions() {
    var titles = document.querySelectorAll(".title")
    titles.forEach((title) => {
        var titleText = title.textContent
        title.innerHTML = `
        <div>${titleText} </div>`
    })

}
function changeConsultationText() {
    const title = document.querySelector('.consultation__title')
    if(window.innerWidth<768){
        title.innerHTML = `
        <div>
        ХОЧЕТЕ ЧЕРЕЗ СОЦМЕРЕЖІ ЗНАХОДИТИ ЛІДІВ ДЛЯ B2B ТА продавати ДЛЯ В2С?
</div>
`
        window.addEventListener("resize", ()=>{
            if(window.innerWidth<768){
                title.innerHTML = `
        <div>
        ХОЧЕТЕ ЧЕРЕЗ СОЦМЕРЕЖІ ЗНАХОДИТИ ЛІДІВ ДЛЯ B2B ТА продавати ДЛЯ В2С?
</div>
`}
        })
    }
}


try { toggleModalFrom() } catch { console.log("modal not working") }
try { headerMobileMenu() } catch { console.log("mobile menu not working") }
try { headerServiceListFunc() } catch { console.log("") }
try { allSliders() } catch { console.log("sliders is not working") }
try { smoothAnchorScroll() } catch { console.log("anchor not found") }
try { toggleBlogMenu() } catch { console.log("is not") }
try { scrollOnArrowClick() } catch { console.log("is not first page ") }
try { showHideText() } catch { console.log("is not correct page") }
try { changeCase() } catch { console.log("") }
try { startAllAnimation() } catch { console.log("animations ") }
try { movingTitleOnScroll() } catch { console.log("not found Title") }
try { changeBlog() } catch { console.log("is not blog page") }
try { animationForMainArrow() } catch { console.log("is not first page") }
try { changeTitleForIniamtions() } catch { console.log("not working animation for title") }
try { changeConsultationText()}catch (e){console.log(e)}






