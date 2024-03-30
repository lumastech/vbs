<template>
    <nav class="bg-secondary-900 text-primary-600">
        <div class="bg-secondary-800">
            <div class="flex max-w-7xl mx-auto px-2 py-1 space-x-2" >
                <img src="../../assets/logo_yellow.png" alt="mfumu" class="w-32">
                <p class="flex-auto"></p>
                <p class="text-secondary-100 self-center"><i class="fas fa-phone"></i> +260 97 9729 858</p>
                <div class="bg-secondary-300 rounded overflow-hidden">
                    <input type="tel" class="hidden md:inline h-full px-2 bg-secondary-900 p-0 focus:outline-none focus:border-0border border-0 outline-none">
                    <button class="bg-primary-700 text-secondary-200 hover:bg-primary-800 transition md:border-l h-full px-2"><i class="fas fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>
        <div class="flex max-w-7xl mx-auto flex px-2">
            <div class="flex-auto md:hidden">
                <button @click="navShow = !navShow" :class="{'hidden':navShow}" class="p-2 hover:text-secondary-200 transition"><i class="fas fa-bars"></i></button>
            </div>
            <div class="uppercase flex-auto hidden md:flex">
                <Link href="/" class="p-2 inline-block hover:bg-primary-900 hover:text-secondary-200 transition"><i class="fas fa-home"></i> Home</Link>
                <Link href="#" class="p-2 inline-block hover:bg-primary-900 hover:text-secondary-200 transition">House Plans</Link>
                <Link href="/about" class="p-2 inline-block hover:bg-primary-900 hover:text-secondary-200 transition">About US</Link>
                <Link href="#" class="p-2 inline-block hover:bg-primary-900 hover:text-secondary-200 transition">contact us</Link>
            </div>
            <div class="uppercase">
                <div v-if="$page.props.auth" class="inline">
                    <Link href="#" class="p-2 inline-block hover:text-secondary-200 transition">dashboard <i class="fas fa-angle-down"></i></Link>
                </div>
                <div v-else class="inline">
                    <Link href="/login" class="p-2 inline-block hover:text-secondary-200 transition">Login</Link>
                    <Link href="/register" class="p-2 inline-block hover:text-secondary-200 transition">Register</Link>
                </div>
                <Link href="#" class="px-2 inline-block hover:text-secondary-200 transition border-x border-secondary-600"><i class="fas fa-heart"></i></Link>
                <Link href="#" class="p-2 inline-block hover:text-secondary-200 transition">0 <i class="fas fa-cart-shopping"></i></Link>
            </div>

        </div>
    </nav>
    <!-- side nav -->
    <div @click="navShow = false" :class="{'w-0': !navShow, 'w-full': navShow, 'delay-300': !navShow, 'delay-0':navShow, 'bg-none':!navShow, 'bg-gray-900/70': !user_agent_suport, 'bg-gray-900/10': user_agent_suport}" class="fixed transition-w duration-0 h-full top-0 left-0 z-50 backdrop-filter backdrop-blur-sm">
      <div class="overflow-x-hidden h-full bg-secondary-900 text-secondary-200 transition-all duration-500 ease-in-out shadow-md w-2/3 md:w-72" :class="{'-translate-x-full': !navShow}">
        <img src="../../assets/logo_yellow.png" alt="mfumu" class="w-full bg-secondary-600 py-7">
            <Link href="/" class="p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"><i class="fas w-7 fa-home mr-4"></i> Home</Link>
            <Link href="#" class="p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"><i class="fas w-7 fa-solid fa-puzzle-piece mr-4"></i>House Plans</Link>
            <Link href="/about" class="p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"><i class="fas w-7 fa-solid fa-circle-info mr-4"></i>About US</Link>
            <Link href="/contacts" class="p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"><i class="fas w-7 fa-solid fa-address-card mr-4"></i>Contact us</Link>
            <hr class="w-2/3 mx-auto border-t border-secondary-800">
      </div>
      <button>
        <i class="fa fa-close text-2xl absolute top-6 right-8 text-white font-thin hover:text-red-500 transition"></i>
      </button>

    </div>
</template>

<script>
import { ref } from 'vue'
import {Link} from '@inertiajs/vue3'

export default {
    components: { Link },
  setup() {
    const navShow = ref(false)
    const user_agent_suport = ref(true)

    return {
      navShow, user_agent_suport
    }
  },

  created(){
    if (navigator.userAgent.search('Chrome') == -1) {
      this.user_agent_suport = false
    }
  }
}
</script>

