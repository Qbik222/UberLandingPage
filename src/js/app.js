import * as flsFunctions from "./modules/functions.js";
 flsFunctions.isWebp();

window.addEventListener("DOMContentLoaded", () =>{

class AdventegesCard {
    constructor(src, alt, title, descr, parrentSelector ){
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



});