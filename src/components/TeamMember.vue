<template>
    <div class="team-member">
        <div class="member-dp">
            <div class="dp">
                {{ this.person.name[0] }}
            </div>
        </div>
        <div class="member-details">
            <div class="member-name">
                Name: {{ person.name + '(' + this.person.role + ')'}}
                <router-link v-if="this.person.editable == true" :to="{ name:'EditMember', params:{ id: this.person.id }}"><font-awesome-icon icon="pen-square" /></router-link>
                <div class='remove-button' v-if="this.person.removable == true" v-on:click="removeMember"><font-awesome-icon icon="trash" /></div>
            </div>
            <div class="member-email">Email: {{ person.email }}</div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'team-member',
        data(){
            return {
            }
        },
        methods:{
            removeMember(){
                if(confirm('support@chargebee.com will not be to access this site.')){
                    this.$store.commit('remove',this.person.id)
                }
            }
        },
        props: ['person'] 
    }
</script>

<style lang="css" scoped>
    .team-member{
        display: flex;
        height: 100px;
        width: 790px;
        margin-top: 5px;
        background: whitesmoke;
        border-radius: 5px;
        border: solid black 1px;
    }
    .member-dp{
        display: inline-block;
        width: 150px;
        height: 100px;
    }

    .dp{
        display: inline-block;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        border: solid 2px black;
        margin: 20px 0 0 60px;
        background-color: lightgray;
        text-align: center;
        font-size: 40px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        color: black;
    }

    .member-details{
        display: inline-block;
        margin-top: 20px;
        width: 500px;
        height: 80px;
    }

    .member-name{
        font-weight: bold;
        margin-left: 30px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 20px;
        color: black;
    }

    .member-email{
        font-weight: bold;
        margin-left: 30px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 20px;
        color: black;
    }
    .remove-button{
        display: inline-block;
        margin-left: 5px;
        cursor: pointer;
    }
</style>