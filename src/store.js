import { reactive } from 'vue'

export const store = reactive({
    header: {
            logo: './src/assets/img/logo-gobike.png',
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
        ] 
    }
);