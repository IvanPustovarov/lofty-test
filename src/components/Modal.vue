<script setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const open = ref(false)
const name = ref('')
const password = ref('')

async function request () {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: name,
        body: password,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    const resToJson = result.json();
    console.log(resToJson);

    open.value = false;
    }

function clickOut () {
    open.value = false;
}
</script>

<template>
    <div @click="open = true" v-click-outside="clickOut">
        <div class="modal-msg">{{ msg }}</div>

        <Teleport to="body">
            <div v-if="open" class="modal">
                <input v-model="name" type="text" name="" id="" class="input-field" placeholder="username">
                <input v-model="password" type="text" name="" id="" class="input-field" placeholder="password">
                <button @click="request" class="btn-close">send</button>
            </div>
        </Teleport>
    </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: #1A1D24;
  padding: 15px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-field{
    height: 35px;
    border-radius: 0px;
    border-width: 0px;
    padding: 8px;
    background-color: #393E48;
    color: #CCCCCC;
}

.input-field:focus{
    outline: none;
}

.input-field::placeholder{
    text-transform: uppercase;
    color: #CCCCCC;
    font-weight: 600;
}

.btn-close{
    padding: 0;
    width: 80px;
    align-self: center;
    border: none;
    height: 40px;
    background-color: #F4CC3E;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
}

.modal-msg{
    font-weight: 600;
}
</style>
