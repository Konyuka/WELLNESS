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
              Feel free to contact us if you have comments or suggestions about this website, tutorial and examples.
              We at KWCWC appreciate your taking time to visit our site, and would love to hear from you.
              
              Please feel free to send us a message of encouragement or otherwise, comments or suggestions about this website, or any
              of our programs and we would be glad to act upon it. We will also endeavour to respond to all the messages sent as soon
              as possible. Thank you for visiting our site and for contacting us
            </p>
            <div class="flex pb-4 items-center">
              <div aria-label="phone icon" role="img">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg1.svg" alt="phone" />
    
              </div>
              <p class="pl-4 text-white text-base">
                +254 717 723 073 <br>
                +254 737 302 963 <br>
                +254 703 302 963 <br>
              </p>
            </div>
            <div class="flex items-center">
              <div aria-label="email icon" role="img">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg2.svg" alt="email" />
    
              </div>
              <p class="pl-4 text-white text-base">Info@kwcwc.org</p>
            </div>
            <p class="text-md text-white pt-5 tracking-wide">
              Kenya Women & Children's Wellness Centre,
              <br />
              P. O. Box 16681 - 00620,
              <br />
              Nairobi - Kenya.
            </p>
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
                class="focus:outline-none bg-red-800 transition duration-150 ease-in-out hover:bg-black rounded text-white px-8 py-3 text-sm leading-6 focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 font-bold">Submit <i class="ml-2 fas fa-paper-plane"></i> </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="container mx-auto overflow-hidden bg-red-800">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <div class="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Our Physical Location <br class="hidden md:block" />
            </h2>
            <p class="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
              Head Office, <br/>
              Riverside Drive, Westlands, <br />
              Nairobi - Kenya. <br /> <br />
              
              Community Outreach Program (COP) Office, <br />
              United States International University, <br />
              Kasarani, Nairobi - Kenya.
            </p>
            <a href="/" aria-label=""
              class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-white">
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
                    <input placeholder=""  type="text"
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
