export default {
    /**
     * Computed properties
     */
    computed: {
        isMobile() {
            return window.innerWidth <= 768
        }
    },

    filters: {
        toTitleCase(value) {
            return value.split(' ').map(word => {
                return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
            }).join(' ');
        }
    },

    /**
     * Methods to be available to all
     * Saves current route as recent
     */
    methods: {
        navigateTo(route) {
            if (route) {
                if (typeof route === 'object') {
                    this.$router.push(route);
                } else {
                    let prevTypes = ['back', 'prev', 'previous', 'backwards', '-1', -1];
                    let nextTypes = ['forward', 'front', 'next', 1];

                    if (prevTypes.indexOf(route) > -1) {
                        this.$router.go(-1)
                    } else if (nextTypes.indexOf(route) > -1) {
                        this.$router.go(1)
                    }
                }
            }
        }
    }
}