import { reactive } from 'vue'

export const store = reactive({
    thirdCards: [
        {
            img: '../src/assets/img/event1.jpg',
            title: 'Toronto Cycling Event 2023',
            date: '2022-06-22 @ 01:30 - 2024-08-23 @ 07:00',
            location: 'Toronto',
            bike: 'Bicycle Race',
            numberClip: ['22', '23'],
            monthClip: ['JUN', 'AUG'],
        },
        {
            img: '../src/assets/img/event2.jpg',
            title: 'Istanbul Cycling Event 2023',
            date: '2024-06-30 @ 01:30 - 2024-10-19 @ 03:30',
            location: 'Istanbul',
            bike: 'Bike Sport',
            numberClip: ['30', '19'],
            monthClip: ['JUN', 'OCT'],
        },
        {
            img: '../src/assets/img/event3.jpg',
            title: 'Paris Cycling Event 2023',
            date: '2022-06-22 @ 07:30 - 2024-11-08 @ 16:30',
            location: 'Paris',
            bike: 'Cycling Tour',
            numberClip: ['22', '08'],
            monthClip: ['JUN', 'NOV'],
        },
        {
            img: '../src/assets/img/event4.jpg',
            title: 'New Jersey Cycling Event 2023',
            date: '2022-06-25 @ 08:30 - 2024-08-24 @ 05:30',
            location: 'New Jersey',
            bike: 'Bicycle Race',
            numberClip: ['25', '24'],
            monthClip: ['JUN', 'AUG'],
        },
        {
            img: '../src/assets/img/event5.jpg',
            title: 'London Cycling Event 2023',
            date: '2024-06-28 @ 08:30 - 2024-07-26 @ 12:00',
            location: 'London',
            bike: 'Bike Sport',
            numberClip: ['28', '26'],
            monthClip: ['JUN', 'JUL'],
        },
        {
            img: '../src/assets/img/event6.jpg',
            title: 'Kiev Cycling Event 2023',
            date: '2022-06-29 @ 10:00 - 2024-05-18 @ 04:30',
            location: 'Kiev',
            bike: 'Bicycle Race',
            numberClip: ['29', '18'],
            monthClip: ['JUN', 'MAY'],
        },
        {
            img: '../src/assets/img/event7.jpg',
            title: 'Colorado Cycling Event 2023',
            date: '2022-06-28 @ 08:30 - 2024-08-14 @ 05:30',
            location: 'Colorado',
            bike: 'Bicycle Race',
            numberClip: ['28', '14'],
            monthClip: ['JUN', 'AUG'],
        },
        {
            img: '../src/assets/img/event8.jpg',
            title: 'Amsterdam Cycling Event 2023',
            date: '2024-06-28 @ 10:30 - 2024-10-24 @ 10:30',
            location: 'Amsterdam',
            bike: 'Bicycle Race',
            numberClip: ['28', '24'],
            monthClip: ['JUN', 'OCT'],
        },
        {
            img: '../src/assets/img/event9.jpg',
            title: 'Toronto Cycling Event 2023',
            date: '2022-06-22 @ 09:30 - 2024-09-27 @ 17:30',
            location: 'Toronto',
            bike: 'Bicycle Race',
            numberClip: ['22', '27'],
            monthClip: ['JUN', 'SEPT'],
        },
        {
            img: '../src/assets/img/event10.jpg',
            title: 'Paris Cycling Event 2023',
            date: '2022-06-26 @ 05:30 - 2024-12-20 @ 14:00',
            location: 'Paris',
            bike: 'Bicycle Race',
            numberClip: ['26', '20'],
            monthClip: ['JUN', 'DEC'],
        },
        
    ],
    thirdCardsApi: [],
    months: {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sept',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec'
    },
    header: {
        logo: './src/assets/img/logo-gobike.png',
        favicon: './src/assets/img/favicon-gobike.png',
        buttonLogo: './src/assets/img/helmet.png',
        links: [
            { text: 'Home', url: '#' },
            { text: 'About Us', url: '#' },
            { text: 'Trainings', url: '#'},
            { text: 'Packages', url: '#' },
            { text: 'Blog', url: '#' },
            { text: 'Contact', url: '#' }
        ]
    },
    headerDropDownTrainings:[
        { text: 'Riding Lessons', url: '#'},
        { text: 'Safe Driving', url: '#'},
        { text: 'Mountain Bike', url: '#'},
        { text: 'Trail Drive', url: '#'},
        { text: 'Pedaling', url: '#'},
        { text: 'All Trainings', url: '#'}
    ],
    articles: [
        {
            image: '../src/assets/img/news-bike3.jpg',
            title: 'How much should you cycle in a day?',
            date: '22-06-2022 - bike',
            description: 'In order to get the right benefit from the exercise [...]',
        },
        {
            image: '../src/assets/img/news-bike4.jpg',
            title: 'Road bike or mountain bike?',
            date: '22-06-2022 - bike',
            description: 'It takes 5 Km and 10 minutes, sir. But at [...]',
        },
        {
            image: '../src/assets/img/news-bike5.jpg',
            title: 'Road bike or mountain bike?',
            date: '22-06-2022 - bike',
            description: 'Compared to similar road bikes with a solid frame structure, [...]',
        },
        {
            image: '../src/assets/img/news-bike6-373x223.jpg',
            title: 'Wath is mountain biking called?',
            date: '22-06-2022 - bike',
            description: 'Mountain biking is one of the most popular outdoor sports, [...]',
        }
    ], 
    slidesObject:[
        {
        name:'Riding Lesson',
        image:'./src/assets/img/training-box-1.jpg',
        view: true,
    },
    {
        name:'Safe Driving',
        image:'./src/assets/img/training-box-2.jpg',
        view: true,
    },
    {
        name:'Mountain Bike',
        image:'./src/assets/img/training-box-3.jpg',
        view: true,
    },
    {
        name:'Trail Drive',
        image:'./src/assets/img/training-box-4.jpg',
        view: true,
    },
    {
        name:'Pedaling',
        image:'./src/assets/img/training-box-5.jpg',
        view: true,
    },
],
// footer element
listaElementiFooter: [
    { indirizzo: 'New Jersey, USA', telefono: '+1 (234) 567 89 10', email: 'example@exemple.com' },
    { titolo: 'Join Our Newsletter', li_1: 'Subscribe to receive ureful infotmation.' },
    { titolo: 'Training', li_1: 'Riding Lesson',  li_2: 'Safe Driving', li_3: 'Mountain Bike', li_4: 'Trail Drive', li_5: 'Pedaling' },
    { titolo: 'Quick Links', li_1: 'Home',  li_2: 'About Us', li_3: 'Blog', li_4: 'Packages', li_5: 'Contact' },
],
// fine dati footer
});