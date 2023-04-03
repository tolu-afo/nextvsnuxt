<script >
    // whatever currActive is equal to, will be the active text, we need to make it such that it is set on click of the header buttons below.
    export default {
        data () {
            return {
                tabs: [
                    { id: 1, name: 'home', isActive: true, href: '/'},
                    { id: 2, name: 'about', isActive: false, href: '/about'},
                    { id: 3, name: 'contact', isActive: false, href: '/contact'},
                ]
            }
        },
        methods:{
            setActive(clickedIndex) {
                this.tabs = this.tabs.map((tab) => ({...tab, isActive: false,}))
                return this.$set(this.tabs, clickedIndex, {
                    ...this.tabs[clickedIndex], isActive: true,
                })
            },
        },
    }
</script>

<template>
    <div class="DefaultLayout">
        <nav>
            <ul>
                <li v-for="(tab, index) in tabs" :key="tab.id"><NuxtLink @click="setActive(index)" :class="{'active': tab.isActive }" :id="tab.id" :to="tab.href"><a @click="setActive(index)">{{ tab.name }}</a></NuxtLink></li>
            </ul>
        </nav>
        <main>
            <Nuxt/>
        </main>
    </div>
</template>



<!-- <script>
export default {
    data(){
        return {
            currActive: "home"
        }
    },

    methods: {
        setActive(){

        }
    }
}



</script> -->