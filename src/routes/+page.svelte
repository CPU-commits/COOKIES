<script lang="ts">
    export let data

    console.log(data)

    import axios from 'axios'

    async function logIn() {
        const hola = await axios.post('/api/auth/login', {
            name: 'Fleipe',
            password: 'password321',
        })
    }

    async function getData() {
        await axios.get('/api/data')
    }
</script>

<button on:click={logIn}>Iniciar sesion</button>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
