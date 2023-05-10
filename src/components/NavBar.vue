<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'


defineProps({
  msg: {
    // type: String,
    // required: true
  }
})

const mobileMenu = ref(false)


</script>

<template>
  <div class="shadow-2xl">
    <div class="relative shadow bg-gradient-to-r from-gray-50 to-gray-100">
      <div class="mx-auto max-w-8xl px-4 sm:px-6">
        <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <RouterLink to="/">
              <span class="sr-only">Mich Digital</span>
              <img class="h-24 w-auto sm:h-40" src="/logo.png" alt="">
            </RouterLink>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <button @click="mobileMenu = !mobileMenu" type="button"
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-expanded="false">
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/bars-3 -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <nav class="hidden space-x-10 md:flex">
            <RouterLink to="/" class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-bold text-black hover:text-red-900">Our Services <i class="text-red-800 fa-solid fa-business-time"></i> </RouterLink>
            <!-- <RouterLink to="/services" class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-bold text-black hover:text-red-900">Our Services <i class="text-red-800 fa-solid fa-business-time"></i> </RouterLink> -->
            <RouterLink to="/about-us" class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-bold text-black hover:text-red-900">About Us <i class="text-red-800 fa-solid fa-user-tie"></i> </RouterLink>
            <RouterLink to="/contacts" class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-bold text-black hover:text-red-900">Contact Us <i class="text-red-800 fa-solid fa-address-book"></i> </RouterLink>
            <RouterLink to="/why-us" class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-bold text-black hover:text-red-900">Why Us ? <i class="text-red-800 fa-solid fa-circle-question"></i> </RouterLink>
            <RouterLink to="/blogs" class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-bold text-black hover:text-red-900">Blogs <i class="text-red-800 fa-solid fa-blog"></i> </RouterLink>
    
          </nav>
          <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          
            <div>
              <div class="relative mt-1 rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <i class="fa-solid fa-magnifying-glass fa-xl text-red-800"></i>
                </div>
                <input type="text" name="text" id="text"
                  class="ml-1 block w-full rounded-md border-gray-300 pl-10 focus:border-red-500 focus:ring-red-500 text-sm font-bold"
                  placeholder="search">
              </div>
            </div>

          </div>
        </div>
      </div>
    
      <!--
              Mobile menu, show/hide based on mobile menu state.
        
              Entering: "duration-200 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
              Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            -->
      <div  v-if="mobileMenu" class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <RouterLink to="/">
                <img class="h-24 w-auto" src="/logo.png"
                  alt="Your Company">
              </RouterLink>
              <div class="-mr-2">
                <button @click="mobileMenu = !mobileMenu" type="button"
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x-mark -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="mt-8">
              <nav class="grid gap-y-8">
                

                <RouterLink to="/"
                  class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-bold text-black hover:text-red-900">
                  Our Services <i class="text-red-800 fa-solid fa-business-time"></i> 
                </RouterLink>
                
                  <RouterLink to="/about-us"
                    class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-bold text-black hover:text-red-900">
                    About Us <i class="text-red-800 fa-solid fa-user-tie"></i> </RouterLink>
                  <RouterLink to="/contacts"
                    class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-bold text-black hover:text-red-900">
                    Contact Us <i class="text-red-800 fa-solid fa-address-book"></i> </RouterLink>
                  <RouterLink to="/why-us"
                    class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-bold text-black hover:text-red-900">
                    Why Us ? <i class="text-red-800 fa-solid fa-circle-question"></i> </RouterLink>
                  <RouterLink to="/blogs"
                    class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-bold text-black hover:text-red-900">
                    Blogs <i class="text-red-800 fa-solid fa-blog"></i> </RouterLink>
    
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            
            <div>
              <button href="#"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700">
                Search <i class="ml-2 fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
