<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="h-screen">

    <div class="container mx-auto pt-16">
      <div class="lg:flex">
        <div class="xl:w-2/5 lg:w-2/5 bg-red-800 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
          <div class="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <h1 class="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
            <p class="text-md text-white pb-8 leading-relaxed font-normal lg:pr-4">
              We at Mich Digital enjoy keeping in touch with our clientele

              Please feel free to send us a message of encouragement, comments or suggestions about our services.
              We endeavour respond to all the messages sent as soon
              as possible.
            </p>
            <div class="flex pb-4 items-center">
              <div aria-label="phone icon" role="img">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg1.svg" alt="phone" />

              </div>
              <p class="pl-4 text-white text-base">
                + 254 702 624 784 <br>
              </p>
            </div>
            <div class="flex items-center">
              <div aria-label="email icon" role="img">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg2.svg" alt="email" />

              </div>
              <p class="pl-4 text-white text-base">julian@michdigital.co.ke
              </p>
            </div>

            <div class="mt-10 flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
              <p class="text-md text-gray-100 font-semibold">
                @michdigital
              </p>
              <div class="flex items-center mt-4 space-x-4 sm:mt-0">
                <a href="https://twitter.com/MichDigital_KE" target="_blank" class="tranform transition hover:scale-150 duration-700 text-white hover:text-red-200">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                      d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z">
                    </path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/michdigital/" target="_blank" class="tranform transition hover:scale-150 duration-700 text-white hover:text-red-200">
                  <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                    <circle cx="15" cy="15" r="4"></circle>
                    <path
                      d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z">
                    </path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/MichDigital" target="_blank" class="tranform transition hover:scale-150 duration-700 text-white hover:text-red-200">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                      d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-3/5 lg:w-3/5 dark:bg-gray-600 h-full pt-10 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
          <form id="contact" class="bg-white dark:bg-gray-800 py-4 px-8 rounded-tr rounded-br">
            <h1 class="text-4xl text-gray-800 dark:text-white font-extrabold mb-6">Enter Details</h1>
            <div class="block xl:flex w-full flex-wrap justify-between mb-6">
              <div class="w-2/4 max-w-xs mb-6 xl:mb-0">
                <div class="flex flex-col">
                  <label for="full_name"
                    class="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2">Full
                    Name</label>
                  <input required id="full_name" name="full_name" type="text"
                    class="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-red-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Full Name" aria-label="enter your full name input" />
                </div>
              </div>
              <div class="w-2/4 max-w-xs xl:flex xl:justify-end">
                <div class="flex flex-col">
                  <label for="email"
                    class="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2">Email</label>
                  <input required id="email" name="email" type="email"
                    class="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-red-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="example@email.com" aria-label="enter your email input" />
                </div>
              </div>
            </div>
            <div class="flex w-full flex-wrap">
              <div class="w-2/4 max-w-xs">
                <div class="flex flex-col">
                  <label for="phone"
                    class="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2">Phone</label>
                  <input required id="phone" name="phone" type="tel"
                    class="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-red-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="+254 716 202 298" aria-label="enter your phone number input" />
                </div>
              </div>
            </div>
            <div class="w-full mt-6">
              <div class="flex flex-col">
                <label class="text-sm font-semibold text-gray-800 dark:text-white mb-2" for="message">Message</label>
                <textarea placeholder="" name="message"
                  class="dark:bg-gray-900 dark:text-white dark:border-gray-700 border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-red-700"
                  rows="8" id="message" aria-label="enter your message input"></textarea>
              </div>
              <button type="submit"
                class="focus:outline-none bg-red-800 transition duration-150 ease-in-out hover:bg-black rounded text-white px-8 py-3 text-sm leading-6 focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 font-bold">Submit
                <i class="ml-2 fas fa-paper-plane"></i> </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="container mx-auto overflow-hidden bg-red-800">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <div class="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2
              class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Our Physical Location <br class="hidden md:block" />
            </h2>
            <p class="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
              Kofisi Square, 45 Africa Reit, <br>
              Karen road, Karen Nairobi.
              <br />
              Nairobi - Kenya. <br /> <br />

              Mich Digital Limited
            </p>
            <a target="_blank" href="https://www.google.com/maps/place/45+Africa+Reit/@-1.3287491,36.7123553,17z/data=!3m1!4b1!4m5!3m4!1s0x182f1b5b2bb5461d:0x8d3e8fdbe28f534e!8m2!3d-1.3287545!4d36.7172262" aria-label=""
              class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-gray-400 hover:text-white">
              View on Google Maps
              <svg class=" inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path
                  d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
                </path>
              </svg>
            </a>
          </div>
          <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div class="relative">
              <svg viewBox="0 0 52 24" fill="currentColor"
                class="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block">
                <defs>
                  <pattern id="766323e1-e594-4ffd-a688-e7275079d540" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#766323e1-e594-4ffd-a688-e7275079d540)" width="52" height="24"></rect>
              </svg>
              <div class="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Subscribe For Newsletters
                </h3>
                <form>
                  <div class="mb-1 sm:mb-2">
                    <label for="name" class="inline-block mb-1 font-medium">Name</label>
                    <input placeholder="" type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name" name="name" />
                  </div>
                  <div class="mb-1 sm:mb-2">
                    <label for="email" class="inline-block mb-1 font-medium">E-mail</label>
                    <input placeholder="" type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email" name="email" />
                  </div>
                  <div class="mt-4 mb-2 sm:mb-4">
                    <button type="submit"
                      class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-800 hover:bg-black hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                      Subscribe
                    </button>
                  </div>
                  <p class="text-xs text-gray-600 sm:text-sm font-bold">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer class="pt-20" />

  </div>
</template>

<style>

</style>
