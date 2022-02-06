<template>
    <div class="team-member-list">
        <div>
            <p>{{ 'Team Members(' +  memberList.length + ')'}}</p>
            <button class="add-member-button" v-on:click= addMember >+ Add New</button>
        </div>
        <team-member v-bind:key='n.id' :person= n v-for="(n) in memberList">
        </team-member>
    </div>
</template>

<script>
import TeamMember from '../components/TeamMember.vue';
    export default {
        name: 'team-member-list',
        components: {
            TeamMember
        },
        computed: {
            memberList() {
                return this.$store.state.members
            }
        },
        methods:{
            addMember(){
                this.$router.push({ name: 'AddMember' });
            }
        }
    }

</script>

<style lang="css" scoped>
    p{
        display: inline-block;
        font-family: 'Courier New', Courier, monospace;
        font-size: 30px;
        color: black;
        font-weight: bold;
        margin-left: 65px;
    }
    .add-member-button{
        width: 150px;
        height: 40px;
        margin-left: 300px;
        background: rgb(175, 246, 248);
        font-family: 'Courier New', Courier, monospace;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        font-size: 15px;
    }
    .add-member-button:hover{
        background: rgb(112, 155, 156);
    }
</style>