<template>
    <form @submit="submitForm">
        <div>
            <label for="name">Name:</label>
            <input type="text" v-model="name" required />
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" v-model="email" required />
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" v-model="password" required />
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        async submitForm() {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    password: this.password,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
        },
    },
};
</script>