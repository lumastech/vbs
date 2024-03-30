<template>
    <div class="fixed w-full h-full blurd-bg text-secondary-500">
        <div class="md:flex h-full bg-secondary-100/60 backdrop-blur-lg">
            <aside @click="sideToggle" class="z-50 md:w-[60px] hover:w-[200px] lg:w-[300px] shrink-0 bg-white/50 backdrop-blur shadow py-7 h-full md:mb-7 md:mt-2 md:mx-2 md:bottom-7 md:left-2 rounded-md overflow-x-hidd overflow-y-auto absolute md:static md:translate-x-0 -translate-x-full transition-all">
                <nav class="flex flex-col px-2 md:px-2 text-secondary-600">
                    <div class="text-center border-b pb-4 mb-7 border-secondary-200">
                        <div class="rounded-full bg-white ring w-12 h-12 lg:w-24 lg:h-24 mx-auto transition-all"></div>
                        <p class="mt-4 md:hidden lg:block">{{$page.props.auth.name}}</p>
                        <a href="/user" class="flex flex-nowrap place-items-center overflow-hidden px-4 py-2 rounded md:rounded-lg bg-white shadow-sm mb-1 mt-4 hover:bg-secondary-500 hover:text-white transition">
                            <i class="fa-solid fa-lock w-7 mr-4"></i>
                            <span class="line-clamp-1">LOG OUT</span>
                        </a>
                    </div>
                    <a href="/dashboard" class="flex line-clamp-1 place-items-center overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition">
                        <i class="fa-solid fa-home w-7 mr-3"></i>
                        DASHBOARD
                    </a>
                    <a href="/user" class="flex line-clamp-1 place-items-center overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition">
                        <i class="fa-solid fa-users w-7 mr-3"></i>
                        USERS
                    </a>
                    <a href="/order" class="flex line-clamp-1 place-items-center overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition">
                        <i class="fa-solid fa-file-invoice-dollar w-7 mr-4"></i>
                        ORDERS
                    </a>
                    <a href="/plans" class="flex line-clamp-1 place-items-center overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition">
                        <i class="fa-solid fa-ticket w-7 mr-3"></i>
                        PLANS
                    </a>
                    <a :href="route('plans.create')" class="flex line-clamp-1 place-items-cent~er overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition">
                        <i class="fa-solid fa-plus-circle w-7 mr-3"></i>
                        ADD PLAN
                    </a>

                    <hr class="border-t border-secondary-200 my-4">
                </nav>
            </aside>
            <main class="flex-auto h-full text-gray-500">
                <div class="flex justify-between p-4 m-2 rounded-md place-items-center backdrop-blur bg-white/60 border-b">
                    <h2 class="text-gray-500">DASHBOARD</h2>
                    <div class="flex space-x-4">
                        <div class="hidden md:flex rounded-md border border-secondary-400 bg-white overflow-hidden">
                            <input type="search" name="search" id="search" class="border-0 bg-none" placeholder="Search">
                            <button class="px-2 border-l bg-secondary-50 hover:bg-secondary-500 hover:text-white text-secondary-500 transition">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                        <p class="rounded-full p-2 bg-secondary-50 border border-secondary-400 w-10 h-10 flex place-items-center justify-center text-secondary-500 ">
                            <i class="fa-solid fa-user"></i>
                        </p>
                        <Link href="/logout" as="button" type="button" method="post" class="rounded-md p-2 bg-secondary-50 border border-secondary-400  h-10 flex gap-2 place-items-center justify-center text-secondary-500 hover:bg-secondary-500 hover:text-white transition ">
                            <i class="fa-solid fa-sign-out"></i>
                            <span class="hidden md:inline">Logout</span>
                        </Link>
                        <!-- menu button -->
                        <button @click="sideToggle" class="xl:hidden rounded-md p-2 bg-secondary-50 border border-secondary-400  h-10 flex gap-2 place-items-center justify-center text-secondary-500 hover:bg-secondary-500 hover:text-white transition ">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>
                <div class="pt-10 h-full w-full overflow-auto md:pb-32">
                    <slot></slot>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
export default {
    components: { Link },
    setup() {
        const sideToggle = () => {
            const aside = document.querySelector('aside');
            aside.classList.toggle('-translate-x-full');
        }
        return {
            sideToggle
        }
    }
}
</script>

<style>
.blurd-bg {
    background-image: url("../../assets/GRADIENT_BG_PX.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>