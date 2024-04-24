<template>
    <div>
        <label for="nombre">Nombre</label>
        <br>
        <input v-model="nombre">
    </div>
    <br>
    <div>
        <label for="apellido">Apellido</label>
        <br>
        <input v-model="apellido">
    </div>
    <br>
    <button v-on:click="addUser">Agregar</button>


    <ul>
        <li v-for="user in lista" :key="user">
            {{ user.nombre }} {{ user.apellido }}
        </li>
    </ul>
</template>

<script>

export default {
    data() {
        return {
            nombre: '',
            apellido: '',
            lista: []
        }
    },
    methods: {
        addUser() {
            const user = { nombre: this.nombre, apellido: this.apellido };
            this.lista.push(user);
        }
    }
}
</script>