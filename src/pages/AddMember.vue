<template>
    <div class="add-member-form">
        <div class="close-button" v-on:click="handleClick"><font-awesome-icon icon="window-close" /></div>
        <div class='member-input'>
            <h3 :style="{marginLeft: '20px'}">Invite a Team Member to use Chargebee</h3>
            <p class="input-text">
                You can either let your team members access everything in this site, or assign them specific roles
            </p>
            <label class="add-member-name">
                Name:<input type="text" class="add-member-name-input" v-model='memberName'/>
            </label>
            <label class="add-member-email">
                Email:<input type="text" class="add-member-email-input" v-model='memberEmail'/>
            </label>
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
        </div>
        <div class="add-member-buttons">
            <button class="add-button" v-on:click= 'handleAdd'>Add</button>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            memberName: '',
            memberEmail: '',
            pick: 'Admin'
        }
    },
    methods:{
        handleAdd(){
            var len = this.$store.state.members.length;
            console.log(len);
            var newId = String(len).concat(this.memberName);
            this.$store.commit('add',{
                id: newId,
                name: this.memberName,
                email: this.memberEmail,
                dp: '../assets/userDp.jpg',
                role: this.pick,
                editable: true,
                removable: true
            })
            alert('added');
            this.$router.push({name: 'TeamMemberList'});
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
    .add-member-form{
        display: block;
        height: 600px;
        width: 800px;
        border-radius: 5px;
        background-color: rgb(255, 255, 255);
        box-shadow: rgb(68, 67, 67) 0 5px 5px 0;
        margin-top: 100px;
    }

    .member-input{
        display: inline-block;
        width: 600px;
        height: 600px;
        
    }

    .add-member-buttons{
        display: inline-block;
        width: 200px;
        height: 600px;
    }

    .input-text{
        font-size: 15px;
        color: darkgray;
        font-family: 'Courier New', Courier, monospace;
        margin-left: 20px;
    }

    .add-member-name{
        display: block;
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        margin-left: 20px;
        margin-top: 40px;
    }
    .add-member-email{
        display: block;
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        margin-left: 20px;
        margin-top: 20px;
    }
    .add-member-name-input{
        height: 30px;
        width: 300px;
        margin-left: 19px;
        font-size: 15px;
        font-family: 'Courier New', Courier, monospace;
    }
    .add-member-email-input{
        height: 30px;
        width: 300px;
        margin-left: 7px;
        font-size: 15px;
        font-family: 'Courier New', Courier, monospace;
    }

    .role-button{
        margin-left: 20px;
    }

    .role-label{
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
    }

    .role-description{
        font-size: 15px;
        margin-left: 20px;
        color: gray;
        font-family: 'Courier New', Courier, monospace;
    }

    .add-button{
        height: 30px;
        width: 140px;
        margin-left: 20px;
        background: rgb(175, 246, 248);
        color: black;
        border: 0;
        border-radius: 7px;
        cursor: pointer;
        font-weight: bold;
        font-size: 15px;
        font-family: 'Courier New', Courier, monospace;
    }
    .add-button:hover{
        background: rgb(112, 155, 156);
    }
</style>