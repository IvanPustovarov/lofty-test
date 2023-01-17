<script setup>
import { ref } from '@vue/reactivity'
import Modal from "./Modal.vue"
</script>

<template>
    <header>
       <div class="sign-in">
            <Modal msg="sign in"/>
       </div>
    </header>
    <div class="items-container">
        <div v-for="item in 6" :key="item" class="item"></div>
    </div>
</template>

<style scoped>
header{
    max-width: 100%;
    height: 80px;
    background: #393E48;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 5rem;
}

.sign-in{
    text-transform: uppercase;
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #7A7A7A;
    cursor: pointer;
}

.items-container{
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 800px;
}

.item{
    width: 200px;
    height: 100px;
    background-color: #C4C4C4;

}


@media (max-width: 1024px) {
    .items-container{
        max-width: 600px;
    }
}

@media (max-width: 430px) {
    .items-container{
        max-width: 300px;
    }
}
</style>
