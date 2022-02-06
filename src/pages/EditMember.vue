<template>
    <div class="edit-member-form">
        <div class="close-button" v-on:click="handleClick"><font-awesome-icon icon="window-close" /></div>
            <p class="input-text">
                You can either let your team members access everything in this site, or assign them specific roles
            </p>
            <p class="input-text" :style="{marginTop: '50px'}">
                Select user access level
            </p>
            <label class="role-label">
                <input class='role-button' type="radio" v-model="pick" value="Admin">
                Admin
            </label>
            <p class="role-description">Access everything in Chargebee</p>
            <label class="role-label">
                <input class='role-button' type="radio" v-model="pick" value="Tech Support">
                Tech Support
            </label>
            <p class="role-description">
                User can view "Subscriptions" and "Product Catalogue" tabs, can also view add comments to, send, download
                Invoices/Credit Notes
            </p>
            <label class="role-label">
                <input class='role-button' type="radio" v-model="pick" value="Analyst">
                Analyst
            </label>
            <p class="role-description">In addition to Tech Support level access, user will also have access to SaaS metrics</p>
        <button value="Save" class="save-button" v-on:click= 'handleSave'>Save</button>
    </div>
</template>

<script>

export default {
    data(){
        return {
            pick: 'Admin'
        }
    },
    methods:{
        handleSave(){
            console.log(this.$route.params.id);
            this.$store.commit('edit',{
                id: this.$route.params.id,
                role: this.pick
            })
            alert('Changes Saved');
            this.$router.push({ name: 'TeamMemberList' });

        },
        handleClick(){
            this.$router.push({name: 'TeamMemberList'});   
        }
    }
}
</script>

<style lang="css" scoped>
    .close-button{
        font-size: 20px;
        cursor: pointer;
        margin-left: 780px;
    }
    .edit-member-form{
        display: block;
        height: 600px;
        width: 800px;
        border-radius: 5px;
        background-color: rgb(255, 255, 255);
        box-shadow: rgb(68, 67, 67) 0 5px 5px 0;
        margin-top: 100px;
    }

    .input-text{
        font-size: 15px;
        color: darkgray;
        font-family: 'Courier New', Courier, monospace;
        margin-left: 50px;
    }

    .role-button{
        margin-left: 50px;
    }

    .role-label{
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
    }

    .role-description{
        font-size: 15px;
        margin-left: 50px;
        color: gray;
        font-family: 'Courier New', Courier, monospace;
    }

    .save-button{
        height: 30px;
        width: 140px;
        margin-left: 320px;
        margin-top: 50px;
        background: rgb(175, 246, 248);
        color: black;
        border: 0;
        border-radius: 7px;
        cursor: pointer;
        font-weight: bold;
        font-size: 15px;
        font-family: 'Courier New', Courier, monospace;
    }
    .save-button:hover{
        background: rgb(112, 155, 156);
    }
</style>