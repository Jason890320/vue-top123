<script>
import { ref } from '@vue/reactivity';
import router from '../../router';
export default {
    setup() {
        const account = ref('');
        const password = ref('');
        const pwdstate = ref(false);

        const login = () => {
            console.log(account.value);
            console.log(password.value);
            router.push('/home');
        }

        const pwdtype = () => {
            pwdstate.value = !pwdstate.value;
        }

        return { account, password, login, pwdstate, pwdtype }
    }
}
</script>

<template>
    <div class="w-screen h-screen bg-zinc-800 flex justify-center items-center">
        <div
            class="bg-zinc-800 text-gray-400 px-20 pt-16 pb-8 w-[500px] flex flex-col items-center shadow-md shadow-zinc-900 border-t border-l border-zinc-700"
        >
            <form class="w-full" @submit.prevent="login">
                <div class="w-full flex flex-col justify-center items-start my-2 mb-5">
                    <label class="block mb-3">後臺帳號</label>
                    <input
                        type="text"
                        v-model="account"
                        class="w-full bg-transparent py-2 px-1 border-b border-gray-500 focus:outline-none"
                    />
                </div>
                <div class="w-full flex flex-col justify-center items-start my-2 mb-16 relative">
                    <label class="block mb-3">後臺密碼</label>
                    <input
                        :type="pwdstate ? 'text' : 'password'"
                        v-model="password"
                        class="w-full bg-transparent py-2 px-1 border-b border-gray-500 focus:outline-none"
                    />
                    <font-awesome-icon
                        v-show="!pwdstate"
                        @click="pwdtype"
                        class="absolute bottom-3 right-1 hover:cursor-pointer mr-1"
                        :icon="['fas', 'eye']"
                    />
                    <font-awesome-icon
                        v-show="pwdstate"
                        @click="pwdtype"
                        class="absolute bottom-3 right-1 hover:cursor-pointer mr-[3px]"
                        :icon="['fas', 'eye-slash']"
                    />
                </div>
                <div class="w-full my-2">
                    <input
                        type="submit"
                        value="登入"
                        class="w-full bg-zinc-700 text-gray-500 font-semibold border border-gray-500 py-3 hover:cursor-pointer hover:bg-yellow-600 hover:text-gray-900 hover:border-yellow-600 duration-500"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

<style>
</style>