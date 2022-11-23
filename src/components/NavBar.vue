<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'


defineProps({
  msg: {
    // type: String,
    // required: true
  }
})

const whoWeAre = ref(false)
const whatWeDo = ref(false)


</script>

<template>
  <div class="shadow-2xl">
    <div class="relative shadow bg-gradient-to-r from-gray-50 to-gray-100">
      <div class="mx-auto max-w-8xl px-4 sm:px-6">
        <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <RouterLink to="/">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
            </RouterLink>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <button type="button"
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
            <div class="relative">
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <button @mouseover="whoWeAre=true, whatWeDo=false" type="button"
                class="hover:font-bold  transform transition hover:scale-95 duration-700 text-gray-500 group inline-flex items-center rounded-md  text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-expanded="false">
                <span>Who We Are</span>
                <!--
                        Heroicon name: mini/chevron-down
        
                        Item active: "text-gray-600", Item inactive: "text-gray-400"
                      -->
                <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </button>
    
              <!--
                      'Solutions' flyout menu, show/hide based on flyout menu state.
        
                      Entering: "transition ease-out duration-200"
                        From: "opacity-0 translate-y-1"
                        To: "opacity-100 translate-y-0"
                      Leaving: "transition ease-in duration-150"
                        From: "opacity-100 translate-y-0"
                        To: "opacity-0 translate-y-1"
                    -->
              <div
                v-if="whoWeAre"
                class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                <div @mouseleave="whoWeAre=false" class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 bg-gray-50 px-5 py-6 sm:gap-8 sm:p-8">
                    <a href="#" class="-m-3 flex items-start rounded-lg p-3 group transform transition hover:scale-105 duration-700 bg-gradient-to-l hover:from-blue-200 hover:to-indigo-50">
                      <i class=" fa-solid fa-clock-rotate-left text-indigo-800 fa-xl mt-3"></i>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Our History</p>
                      </div>
                    </a>
    
                    <a href="#" class="-m-3 flex items-start rounded-lg p-3 group transform transition hover:scale-105 duration-700 bg-gradient-to-l hover:from-blue-200 hover:to-indigo-50">
                      <i class="fa-solid fa-sitemap text-indigo-800 fa-xl mt-3"></i>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Organization Structure</p>
                      </div>
                    </a>
    
                    <a href="#" class="-m-3 flex items-start rounded-lg p-3 group transform transition hover:scale-105 duration-700 bg-gradient-to-l hover:from-blue-200 hover:to-indigo-50">
                      <i class="fa-solid fa-chess text-indigo-800 fa-xl mt-3"></i>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Board of Directors</p>
                      </div>
                    </a>
    
                    <a href="#" class="-m-3 flex items-start rounded-lg p-3 group transform transition hover:scale-105 duration-700 bg-gradient-to-l hover:from-blue-200 hover:to-indigo-50">
                      <i class="fa-solid fa-users text-indigo-800 fa-xl mt-3"></i>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Advisory Panel</p>
                      </div>
                    </a>
    
                  </div>
                  <div class="space-y-6 bg-gradient-to-r from-gray-50 to-indigo-100 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                  </div>
                </div>
              </div>

            </div>
    
            <div class="relative">
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <button @mouseover="whatWeDo=true, whoWeAre=false" type="button"
                class="hover:font-bold  transform transition hover:scale-95 duration-700 text-gray-500 group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-expanded="false">
                <span>What We Do</span>
                <!--
                        Heroicon name: mini/chevron-down
        
                        Item active: "text-gray-600", Item inactive: "text-gray-400"
                      -->
                <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </button>
    
              <!--
                      'More' flyout menu, show/hide based on flyout menu state.
        
                      Entering: "transition ease-out duration-200"
                        From: "opacity-0 translate-y-1"
                        To: "opacity-100 translate-y-0"
                      Leaving: "transition ease-in duration-150"
                        From: "opacity-100 translate-y-0"
                        To: "opacity-0 translate-y-1"
                    -->
              <div v-if="whatWeDo"
               class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                <div @mouseleave="whatWeDo=false" class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 bg-gray-50 px-5 py-6 sm:gap-8 sm:p-8">
                    <a href="#" class="-m-3 flex items-start rounded-lg p-3 group transform transition hover:scale-105 duration-700 bg-gradient-to-l hover:from-blue-200 hover:to-indigo-50">
                      <i class="fa-solid fa-magnifying-glass-location text-indigo-800 fa-xl mt-3"></i>
                      <div class="ml-4">
                        <p class="text-base font-medium transition group-hover:scale-90 duration-700 group-hover:font-bold text-gray-900">Forensic Labaratory</p>
                      </div>
                    </a>
    
                    <a href="#" class="-m-3 flex items-start rounded-lg p-3 group transform transition hover:scale-105 duration-700 bg-gradient-to-l hover:from-blue-200 hover:to-indigo-50">
                      <i class="fa-solid fa-house-flag text-indigo-800 fa-xl mt-3"></i>
                      <div class="ml-4">
                        <p class="text-base font-medium transition group-hover:scale-90 duration-700 group-hover:font-bold text-gray-900">Family Village</p>
                      </div>
                    </a>
    
                    <a href="#" class="-m-3 flex items-start rounded-lg p-3 group transform transition hover:scale-105 duration-700 bg-gradient-to-l hover:from-blue-200 hover:to-indigo-50">
                      <i class="fa-solid fa-chalkboard-user text-indigo-800 fa-xl mt-3"></i>
                      <div class="ml-4">
                        <p class="text-base font-medium transition group-hover:scale-90 duration-700 group-hover:font-bold text-gray-900">Research & Training Institute</p>
                      </div>
                    </a>
    
                    <a href="#" class="-m-3 flex items-start rounded-lg p-3 group transform transition hover:scale-105 duration-700 bg-gradient-to-l hover:from-blue-200 hover:to-indigo-50">
                      <i class="fa-solid fa-person-breastfeeding text-indigo-800 fa-xl mt-3"></i>
                      <div class="ml-4">
                        <p class="text-base font-medium transition group-hover:scale-90 duration-700 group-hover:font-bold text-gray-900">Pediatric Care</p>
                      </div>
                    </a>

                    <a href="#" class="-m-3 flex items-start rounded-lg p-3 group transform transition hover:scale-105 duration-700 bg-gradient-to-l hover:from-blue-200 hover:to-indigo-50">
                      <i class="fa-solid fa-face-sad-tear text-indigo-800 fa-xl mt-3"></i>
                      <div class="ml-4">
                        <p class="text-base font-medium transition group-hover:scale-90 duration-700 group-hover:font-bold text-gray-900">Gender-Based Violence Recovery Centre</p>
                      </div>
                    </a>

                    <a href="#" class="-m-3 flex items-start rounded-lg p-3 group transform transition hover:scale-105 duration-700 bg-gradient-to-l hover:from-blue-200 hover:to-indigo-50">
                      <i class="fa-solid fa-suitcase-medical text-indigo-800 fa-xl mt-3"></i>
                      <div class="ml-4">
                        <p class="text-base font-medium transition group-hover:scale-90 duration-700 group-hover:font-bold text-gray-900">HIV/AIDS Out-Patient Clinic</p>
                      </div>
                    </a>

                    <a href="#" class="-m-3 flex items-start rounded-lg p-3 group transform transition hover:scale-105 duration-700 bg-gradient-to-l hover:from-blue-200 hover:to-indigo-50">
                      <i class="fa-solid fa-person-falling-burst text-indigo-800 fa-xl mt-3"></i>
                      <div class="ml-4">
                        <p class="text-base font-medium transition group-hover:scale-90 duration-700 group-hover:font-bold text-gray-900">Burn Units</p>
                      </div>
                    </a>
                  </div>

                </div>
              </div>
            </div>

            <RouterLink to="/blogs" class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-medium text-gray-500 hover:text-gray-900">Blog Articles</RouterLink>
            <RouterLink to="/contacts" class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-medium text-gray-500 hover:text-gray-900">Contacts</RouterLink>
            <RouterLink to="/gallery" class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-medium text-gray-500 hover:text-gray-900">Gallery</RouterLink>
            <RouterLink to="/resources" class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-medium text-gray-500 hover:text-gray-900">Resources</RouterLink>
            <RouterLink to="/csr" class="hover:font-bold  transform transition hover:scale-95 duration-700 text-base font-medium text-gray-500 hover:text-gray-900">CSR</RouterLink>
    
          </nav>
          <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          
            <div>
              <div class="relative mt-1 rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <i class="fa-solid fa-magnifying-glass fa-xl text-gray-400"></i>
                </div>
                <input type="email" name="email" id="email"
                  class="ml-1 block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 text-sm text-bold"
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
      <div class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company">
              </div>
              <div class="-mr-2">
                <button type="button"
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x-mark -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <!-- Heroicon name: outline/chart-bar -->
                  <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">Analytics</span>
                </a>
    
                <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <!-- Heroicon name: outline/cursor-arrow-rays -->
                  <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">Engagement</span>
                </a>
    
                <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <!-- Heroicon name: outline/shield-check -->
                  <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">Security</span>
                </a>
    
                <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <!-- Heroicon name: outline/squares-2x2 -->
                  <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">Integrations</span>
                </a>
    
                <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <!-- Heroicon name: outline/arrow-path -->
                  <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">Automations</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>
    
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Docs</a>
    
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Help Center</a>
    
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Guides</a>
    
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Events</a>
    
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Security</a>
            </div>
            <div>
              <a href="#"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign
                up</a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" class="text-indigo-600 hover:text-indigo-500">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
