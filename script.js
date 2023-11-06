
class App {
    animeArr = [
        {
            name: 'Ребёнок идола',
            img: './Anime/1.jpg',
            sound: './Anime/1.mp3',
        },
        {
            name: 'Бездомный Бог',
            img: './Anime/2.jpg',
            sound: './Anime/2.mp3',
        },
        {
            name: 'Человек-бензопила',
            img: './Anime/3.jpg',
            sound: './Anime/3.mp3',
        },
        {
            name: 'Тетрадь смерти',
            img: './Anime/4.jpg',
            sound: './Anime/4.mp3',
        },
        {
            name: 'Клинок Рассекающий Демонов',
            img: './Anime/5.jpg',
            sound: './Anime/5.mp3',
        }
    ]
    pause = './pngwing.com (4).png'
    play = './pngwing.com (5).png'

    rsSchoolImg = 'https://rs.school/images/rs_school_js.svg'
    logoSrc = './pngwing.com (3).png'
    reSchoolLink = 'https://rs.school/js-stage0/'
    soundd = new Audio();
    header = this.createElement('header', 'div')
    headerContainer = this.createElement('header-container', 'div')
    main = this.createElement('main', 'div')
    mainContainer = this.createElement('main-container', 'div')
    footer = this.createElement('footer', 'div')
    footerContainer = this.createElement('footer-container', 'div')
    logo = this.createElement('logo', 'img')
    nav = this.createElement('navs', 'nav')
    list = this.createElement('list', 'ul')
    buttonn = this.createElement('btn', 'button')
    github = this.createElement('github', 'div', `© ${new Date().getFullYear()} github`)
    githubImg = this.createElement('githubImg', 'img')


    constructor(app) {
        this.app = app
    }


    generateHtml() {
        this.soundd.src = './Anime/1.mp3'
        this.buttonn.addEventListener('click', () => {
            this.audioSwitch()
        })
        this.logo.src = this.logoSrc;
        this.animeArr.forEach(element => {

            let el = this.createElement('list-item', 'li', element.name)
            el.addEventListener('click', () => {
                this.curentLink(el)
                this.buttonn.classList.add('btn')
                this.buttonn.classList.remove('btn2')
                this.mainContainer.style.backgroundImage = `url(${element.img})`;
                this.audioAddSounds(element.sound)
            })
            this.list.append(el)
        });
        this.nav.append(this.list)
        this.headerContainer.append(this.logo)
        this.headerContainer.append(this.nav)
        this.header.append(this.headerContainer)
        this.mainContainer.append(this.buttonn)
        this.main.append(this.mainContainer)
        this.footerContainer.append(this.github)
        this.githubImg.src = this.rsSchoolImg
        this.footerContainer.append(this.githubImg)
        this.footer.append(this.footerContainer)
        this.app.append(this.header, this.main, this.footer)
    }


    createElement(classs, tag, text = '') {
        const elem = document.createElement(tag);
        elem.classList.add(classs)
        elem.textContent = text;
        return elem;
    }


    audioSwitch() {
        console.dir(this.soundd)
        if (this.soundd.paused) {
            this.soundd.play()
            this.buttonn.classList.add('btn2')
            this.buttonn.classList.remove('btn')
            console.log(this.buttonn)
        } else {
            this.soundd.pause()
            this.buttonn.classList.add('btn')
            this.buttonn.classList.remove('btn2')
        }
    }


    audioAddSounds(str) {
        this.soundd.src = str;
    }

    curentLink(elem) {
        console.log(this.list.children)
        Array.from(this.list.children).forEach(e => {
            if (e.classList.contains('active')) {
                e.classList.remove('active')
            }
            elem.classList.add('active')
        })
    }

}


const sound = new App(document.querySelector('.app'))

sound.generateHtml();