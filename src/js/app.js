import * as flsFunctions from "./modules/functions.js";
 flsFunctions.isWebp();

window.addEventListener("DOMContentLoaded", () =>{

class AdventegesCard {
    constructor(src, alt, title, descr, parrentSelector , normalize){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.parrent = document.querySelector(parrentSelector);


    }

    render(){
        const element = document.createElement("div");
        element.classList.add("advantages__item");

        element.innerHTML = `
            <div class="adventeges__img">
                <img src="${this.src}" alt="${this.alt}">
            </div>
            <p>
                <span>"${this.title}"</span> <br>
              "${this.descr}"
            </p>
            `;
        this.parrent.append(element);

    }
}


function addAdventegesCard (src, alt, title, descr, parentSelector){
    new AdventegesCard(
        src,
        alt,
        title,
        descr,
        parentSelector,
    ).render();
}

addAdventegesCard( "./img/Wallet.png",
"wallet",
"Никаких наличных, оплата происходит автоматически",
`Стоимость поездки оплачивается пассажиром привязанной банковской карты, 
т.е. нет никаких рисков связанныхс перевозкой наличности как 
для пассажира, так и для водителя, Вам не нужно искать мелкие деньги 
для размена`,
".advantages__content");
addAdventegesCard("./img/Table.png",
"table",
"Комиссия 8% + БОНУСЫ",
`У нас минимальная комиссия и мы
 выплачиваем бонусы за каждую поездку, некоторые наши 
 конкуренты оставляют бонусы себе. Мы работаем честно 
 и с нами водители зарабатывают больше!`,
 ".advantages__content",
);
addAdventegesCard("./img/money.png",
"money",
"Высокий доход с гарантированными выплатами",
`Мы выплачиваем заработную плату на личную 
банковскую карту водителя! Вам не нужно 
оформлять ООО, ИП, платить налоги, подавать 
декларацию, оплачивать бухгалтерские услуги
 и ведение банковского счета.`,
 ".advantages__content",
);
addAdventegesCard("./img/Calendar.png",
"Calendar",
"Работа в удобное время, никаких графиков ",
`Вы просто нажимаете кнопку выйти на линию для начала работы,
 когда решите закончить, нажимаете выйти с линии. Вы можете подраба-
тывать только утром, вечером, в выходные или праздничные дни! `,
 ".advantages__content",
);
addAdventegesCard("./img/key.png",
"key",
"Комфортное, прозрачное и простоеподключение",
`Мы подключаем дистанционно и бесплатно,
 Вам нет необходимости приезжать к нам! 
 Вы присылаете нам копии документов, мы регистрируем 
 Вас и присылаем данные для подключения, через 1-2 дня 
 Вы можете начинать работать!`,
 ".advantages__content",
 ".advantages__key",
);
addAdventegesCard("./img/GPSicon.png",
"GPS",
"Всегда большое количество заказов",
`Приложение показывает, 
где на данный момент больше всего заказов и где действуют 
повышенные тарифы. У Вас не будет простоя и холостых пробегов. 
Наши пассажиры всегда приятные и 
абсолютно неконфликтные люди, которых приятно возить.`,
 ".advantages__content",
);

addAdventegesCard("./img/phoneCall.png",
"phoneCall",
"Круглосуточная поддержка",
`В Uber действует круглосуточная поддержка
водителей по электронной почте. Если что-то непонятно, 
Вы всегда можете задать вопрос через On-line консультацию.`,
 ".advantages__content",
);
addAdventegesCard("./img/car.png",
"car",
"Без шашечек и наклеек",
`Вам не нужно менять цвет, устанавливать 
«шашки» на автомобиль
 и обклеивать его наклейками.`,
 ".advantages__content",
);

class mobileAppCard extends AdventegesCard{
    constructor(src,bgSrc, alt, title, parrentSelector, ){
        super(src, alt, title, parrentSelector);
        this.bgSrc = bgSrc;
        this.parrent = document.querySelector(parrentSelector);
    }
        
            render(){
            const element = document.createElement("div");
            element.classList.add("mobileApp__card");
            element.style.background = this.bgSrc;
            element.innerHTML = `
                <p>
                    ${this.title}
                </p>
                <div class="card__img">
                    <img src="${this.src}" alt="${this.alt}">
                </div>
            `;
            this.parrent.append(element);
        }
    }


function addMobileAppCard (src, bgSrc, alt, title, parentSelector){
    new mobileAppCard(
        src,
        bgSrc,
        alt,
        title,
        parentSelector,
    ).render();
}

addMobileAppCard(
    "./img/Plus.png",
    "url(../img/mobileAppCard1.png) center/cover no-repeat",
    "plus button",
    "оформление заказа одним касанием",
    ".mobileApp__cardWrapper"
);
addMobileAppCard(
    "./img/Plus.png",
    "url(../img/mobileAppCard2.png) center/cover no-repeat",
    "plus button",
    "надежная подача",
    ".mobileApp__cardWrapper"
);
addMobileAppCard(
    "./img/Plus.png",
    "url(../img/mobileAppCard3.png) center/cover no-repeat",
    "plus button",
    "прозрачные цены",
    ".mobileApp__cardWrapper"
);
addMobileAppCard(
    "./img/Plus.png",
    "url(../img/mobileAppCard4.png) center/cover no-repeat",
    "plus button",
    "безналичная оплата",
    ".mobileApp__cardWrapper"
);
addMobileAppCard(
    "./img/Plus.png",
    "url(../img/mobileAppCard5.png) center/cover no-repeat",
    "plus button",
    "обратная связь",
    ".mobileApp__cardWrapper"
);
addMobileAppCard(
    "./img/Plus.png",
    "url(../img/mobileAppCard6.png) center/cover no-repeat",
    "plus button",
    "разделить стоимость поездки",
    ".mobileApp__cardWrapper"
);

});

