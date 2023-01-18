import type { IUser } from '../models'

const LINKS = [
    { href: '/', text: 'О нас' },
    { href: '/', text: 'Как это работает' },
    { href: '/', text: 'Отзывы' },
    { href: '/', text: 'Контакты' },
]

const SOCIALS = [
    { icon: 'phone', value: '8 (800) 000 00 00', href: '#' },
    { icon: 'mail', value: 'inbox@mail.ru', href: '#' },
    { icon: 'skype', value: 'tu.train.tickets', href: '#' },
    {
        icon: 'geo',
        value: 'г. Москва \n ул. Московская 27-35\n 555 555',
        href: '#',
    },
]

const SUBSCRIPTIONS: string[] = [
    'youtube',
    'linkedin',
    'google',
    'facebook',
    'twitter',
]

const REVIEWS: IUser.Review[] = [
    {
        id: 1,
        img: '/avatars/avatar-1.png',
        name: 'Екатерина Вальнова',
        content: `Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.`,
    },
    {
        id: 2,
        img: '/avatars/avatar-1.png',
        name: 'Екатерина Вальнова',
        content: `Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.`,
    },
    {
        id: 3,
        img: '/avatars/avatar-1.png',
        name: 'Екатерина Вальнова',
        content: `Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.`,
    },
    {
        id: 4,
        img: '/avatars/avatar-1.png',
        name: 'Екатерина Вальнова',
        content: `Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.`,
    },
]

export const CONSTANTS = { LINKS, SOCIALS, SUBSCRIPTIONS, REVIEWS }
