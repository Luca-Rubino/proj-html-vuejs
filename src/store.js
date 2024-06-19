import { reactive } from 'vue'

export const store = reactive({
    state: {
        header: {
            logo: './src/assets/img/logo-gobike.png',
            links: [
                { text: 'Home', url: '#' },
                { text: 'About Us', url: '#' },
                { text: 'Trainings', url: '#' },
                { text: 'Packages', url: '#' },
                { text: 'Blog', url: '#' },
                { text: 'Contact', url: '#' }
            ]
        }
    },
    get headerLogo() {
        return this.state.header.logo;
    },
    get headerLinks() {
        return this.state.header.links;
    }
});