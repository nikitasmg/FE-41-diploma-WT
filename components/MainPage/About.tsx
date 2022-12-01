import React from 'react'

const About = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <h2 className="mb-l mb-8 text-4xl font-medium uppercase">о нас</h2>
            <div className="space-y-5 border-l-8 border-accent pl-5 text-2xl">
                <p>
                    Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет
                    мы наблюдаем, как с каждым днем все больше людей заказывают
                    жд билеты через интернет.
                </p>
                <p>
                    Сегодня можно заказать железнодорожные билеты онлайн всего в
                    2 клика, но стоит ли это делать? Мы расскажем о
                    преимуществах заказа через интернет.
                </p>
                <p className="font-black">
                    Покупать жд билеты дешево можно за 90 суток до отправления
                    поезда. Благодаря динамическому ценообразованию цена на
                    билеты в это время самая низкая.
                </p>
            </div>
        </div>
    )
}

export default About
