<template>
    <section class="register-section">
        <div class="container px-6 py-12 h-full">
            <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        class="w-full"
                        alt="Phone image"
                    />
                </div>
                <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                    <form @submit.prevent="register">
                        <!-- Email input -->
                        <div class="mb-6">
                            <input
                                v-model="form.email"
                                :class="{ 'border-red-500': form.errors.has('email') }"
                                type="email"
                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Email address"
                            />

                            <span v-if="form.errors.has('email')" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
			                    {{ form.errors.get('email') }}
		                    </span>
                        </div>

                        <!-- Password input -->
                        <div class="mb-6">
                            <input
                                v-model="form.password"
                                :class="{ 'border-red-500': form.errors.has('password') }"
                                type="password"
                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Password"
                            />
                        </div>

                        <!-- Name input -->
                        <div class="mb-6">
                            <input
                                v-model="form.name"
                                type="text"
                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Name"
                            />
                        </div>

                        <!-- Submit button -->
                        <button
                            type="submit"
                            class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            :disabled="form.busy"
                        >
                            Register
                        </button>

                        <div
                            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p class="text-center font-semibold mx-4 mb-0">OR</p>
                        </div>

                        <router-link
                            :to="{name: 'login'}"
                            class="mt-2 inline-block px-7 py-3 bg-blue-600 text-white text-center font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        >
                            Login
                        </router-link>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Form from 'vform';
import Swal from 'sweetalert2';

export default {
    name: "Register",
    mixins: [],
    data: () => {
        return {
            form: new Form({
                email: '',
                password: '',
                name: ''
            })
        }
    },
    methods: {
        async register() {
            const { data } = await this.form.post('/api/register');

            if (data.code === 200) {
                const { token } = data;
                this.$store.dispatch('auth/saveToken', { token }).then(() => {
                    Swal.fire({
                        title: data.message,
                        timer: 1000,
                        icon: 'success',
                    })
                });
            }
        }
    }
}
</script>

<style scoped>

</style>
