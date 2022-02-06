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
        }
    }
})