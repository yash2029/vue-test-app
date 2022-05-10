import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    name: 'store',
    state: {
        members: [
            {
                id: '0Yash',
                name: 'Yash Thapliyal',
                email: 'yash.thapliyal@chargebee.com',
                dp: './assets/userDp.jpg',
                role: 'Owner',
                editable: false,
                removable: false
            },
            {
                id: '1Jane',
                name: 'Jane Doe',
                email: 'jane.doe@chargebee.com',
                dp: '../assets/userDp.jpg',
                role: 'Admin',
                editable: true,
                removable: true
            },
            {
                id: '2Jackson',
                name: 'Jackson Smith',
                email: 'j.smith@chargebee.com',
                dp: '../assets/userDp.jpg',
                role: 'Analyst',
                editable: true,
                removable: true
            }
        ],
        cart:[
            {
                id: 1,
                name: '1 month plan',
                price: 500,
                quantity: 1,
                totalPrice: 0,
                planType: "1-month-plan-INR-Monthly",
                //checkoutButton: " <button  href=\"javascript:void(0)\" data-cb-type=\"checkout\" data-cb-item-0= \"1-month-plan-INR-Monthly\" data-cb-item-0-quantity=\"1\" data-cb-item-1=\"1-month-addon-checkout-INR-Monthly\" data-cb-item-1-quantity=\"1\" >subscribe</button> "
            },
            {
                id: 2,
                name: '3 month plan',
                price: 1000,
                quantity: 1,
                totalPrice: 0,
                planType: "3-month-plan-INR-Monthly",
                //checkoutButton: " <button  href=\"javascript:void(0)\" data-cb-type=\"checkout\" data-cb-item-0= \"3-month-plan-INR-Monthly\" data-cb-item-0-quantity=\"1\" data-cb-item-1=\"1-month-addon-checkout-INR-Monthly\" data-cb-item-1-quantity=\"1\" >subscribe</button> "
            },
            {
                id: 3,
                name: '6 month plan',
                price: 2000,
                quantity: 1,
                totalPrice: 0,
                planType: "6-months-plan-INR-Monthly",
                //checkoutButton: " <button  href=\"javascript:void(0)\" data-cb-type=\"checkout\" data-cb-item-0= \"6-months-plan-INR-Monthly\" data-cb-item-0-quantity=\"1\" data-cb-item-1=\"1-month-addon-checkout-INR-Monthly\" data-cb-item-1-quantity=\"1\" >subscribe</button> "
            },
            {
                id: 4,
                name: '12 month plan',
                price: 4000,
                quantity: 1,
                totalPrice: 0,
                planType: "12-months-plan-INR-Monthly",
                //checkoutButton: " <button  href=\"javascript:void(0)\" data-cb-type=\"checkout\" data-cb-item-0= \"12-months-plan-INR-Monthly\" data-cb-item-0-quantity=\"1\" data-cb-item-1=\"1-month-addon-checkout-INR-Monthly\" data-cb-item-1-quantity=\"1\" >subscribe</button> "
            }
        ]
    },
    mutations:{
        add(state, member){
            state.members.push(member);
        },
        remove(state,id){
            state.members = state.members.filter(a => a.id != id);
        },
        edit(state,newMember){
            var objIndex = state.members.findIndex((obj => obj.id == newMember.id));
            state.members[objIndex].role = newMember.role;
        },
        editCart(state, cartItem){
            var objIndex = state.cart.findIndex((obj => obj.id == cartItem.id));
            state.cart[objIndex].quantity = cartItem.quantity;
            state.cart[objIndex].totalPrice = cartItem.totalPrice;
        }
    }
})