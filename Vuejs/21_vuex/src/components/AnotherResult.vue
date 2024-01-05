<template>
  <div>
    <!-- 
        using mapGetters as a list of getters
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
     -->

    <!-- using mapGetters as an object of getters -->
    <p>Counter is: {{ counter }}</p>
    <p>Number of Clicks: {{ clicks }}</p>
    <p>add our own computed property: {{ ourOwnProperty  }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    // props: ['counter']

    /*
        // using $store instead up code
        computed:{
            counter(){

                // using state
                // return this.$store.state.counter * 2;

                // using getters
                return this.$store.getters.doubleCounter;
            },
            clicks(){
                return this.$store.getters.stringCounter;
            }
        }
    */
    /*
        // using mapGetters as a list of getters
        computed: mapGetters([
            'doubleCounter',
            'stringCounter'
        ])
    */
    /*
        // using mapGetters as an object of getters
        computed: mapGetters({
            counter: 'doubleCounter',
            clicks: 'stringCounter',
        })
    */

    computed: {
        /*
            with ES6 we get this spread operator '...', the three dots
            the three dots basically allow us to tell javascript please pull out
            all the properties and methods in the object you have here and create
            separate key-value pairs for each of them. so we could still write our own
            computed property here and have no issue at all.
        */
        ...mapGetters({
            counter: 'doubleCounter',
            clicks: 'stringCounter',
        }),
        ourOwnProperty(){
            return 'just for test'
        }
    }
}
</script>
