<template>
    <div class="catalog-display">
        <ul>
            <li v-bind:key='p.id' v-for="(p) in plansList">
                <plan-display :plan= p></plan-display>
            </li>
        </ul>
        <!-- <button v-on:click="handleCheckout">Checkout</button> -->
    </div>
</template>

<script>
import PlanDisplay from './PlanDisplay.vue';

    export default {
        name: 'catalog-display',
        components: {
            PlanDisplay
        },
        computed: {
            plansList(){
                return this.$store.state.cart
            }    
        },
        methods: {
            // handleCheckout() {
            //     this.$router.push({name: 'CheckoutPage'});
            // }
        }
    }
</script>

<style lang="css" scoped>
    
</style>