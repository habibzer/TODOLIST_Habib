import Vue from "nativescript-vue";

import Master from './components/Master';

new Vue({
    template: `
        <Frame>
            <Master />
        </Frame>`,
    components: {
        Master
    }
}).$start();
