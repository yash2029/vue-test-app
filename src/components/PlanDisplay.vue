<template>
    <div>
        {{ plan.name + ': ' + plan.price }}
        <button :ref="plan.id" v-on:click="handleAdd">+</button>
        {{ plan.quantity }}
        <button :ref="plan.id" v-on:click="handleDelete">-</button>
        <button  href="javascript:void(0)" data-cb-type="checkout" :data-cb-item-0="plan.planType" :data-cb-item-0-quantity="plan.quantity" data-cb-item-1="1-month-addon-checkout-INR-Monthly" data-cb-item-1-quantity="1" >subscribe</button>
        <!-- <span v-html= "plan.checkoutButton" /> -->
    </div>
</template>

<script>

export default {
    name: 'plan-display',
    props: ['plan'],
    data() {
        return {
            quant: 1
        }
    },
    methods:{
        handleAdd(){
            this.$store.commit('editCart',{
                id: this.plan.id,
                quantity: this.plan.quantity+1,
                totalPrice: this.plan.totalPrice + this.plan.price
            })
            this.quant++;
        },
        handleDelete(){
            if(this.plan.quantity != 0){
                this.$store.commit('editCart',{
                    id: this.plan.id,
                    quantity: this.plan.quantity-1,
                    totalPrice: this.plan.totalPrice - this.plan.price
                })
            }
            this.quant--;
        }
    }
}

</script>

<style scoped>

</style>