import Vue from 'vue';
import Router from 'vue-router';
import EditMember from '../pages/EditMember.vue';
import TeamMemberList from '../components/TeamMemberList.vue';
import AddMember from '../pages/AddMember.vue';

Vue.use(Router);

export default new Router({
    name: 'router',
    routes: [
        {
            path: '/',
            name:'TeamMemberList',
            component: TeamMemberList
        },
        {
            path: '/AddMember',
            name: 'AddMember',
            component: AddMember
        },
        {
            path: '/EditMember/:id',
            name: 'EditMember',
            component: EditMember
        }

    ]
})