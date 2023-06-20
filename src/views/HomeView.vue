<script setup>
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router'

</script>

<template>
  <div class="bg-fixed h-screen">
    <section class="relative bg-[url(/bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
      <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/100 sm:to-white/25">
      </div>

      <div
        class="justify-center relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-screen text-center">
          <h1 class="text-5xl font-extrabold sm:text-6xl">
            Mich

            <strong class="block font-extrabold text-red-800">
              Digital
            </strong>
          </h1>

          <p class="mt-4 max-w-lg sm:text-2xl sm:leading-relaxed">
            The Science of Attention & Persuasion
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">

            <a href="/docs/Mich Digital Profile.pdf" download
              class="transform transition hover:scale-105 duration-700 block w-full rounded bg-red-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
              <span class="font-medium">Company Profile</span> <i class="ml-5 fa-solid fa-address-card"></i>
            </a>

            <RouterLink to="/about-us"
              class="transform transition hover:scale-105 duration-700 bg-red-800 block w-full rounded px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto">
              More About Us
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <div class="relative bg-red-800">
      <div class="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white" preserveAspectRatio="none">
          <path
            d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
          </path>
        </svg>
      </div>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 class="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            A Brief About the Organisation<br class="hidden md:block" />
          </h2>
          <p class="mb-6 text-base text-red-100 md:text-lg">
            In the last ten years, we’ve learnt more about
            the brain than ever done since humankind
            existed.
            <br>
            <br>
            Our Marketing technique is based on how the
            human mind works, how it processes and
            recalls information, and how that information
            gets stamped in our brains.
            <br>
            <br>
            Our marketing
            strategy aims to create a major milestone in
            how you connect, engage and generate
            revenue.
          </p>
          <form class="pt-5 flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input required="" type="email"
              class="flex-grow w-full h-12 px-4 mb-3 text-black font-bold transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline" />
            <a href="#"
              class="inline-flex items-center justify-center w-full h-12 px-6 font-bold tracking-wide text-gray-900 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-gray-100 hover:bg-black hover:text-white hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none">
              NewsLetters
            </a>
          </form>
          <a aria-label="Scroll down"
            class="mt-10 flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path
                d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
              </path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="mt-28 max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
      <div>
        <p
          class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Mich Digital
        </p>
      </div>
      <h2 class="max-w-lg mb-6 font-extrabold text-3xl text-red-800 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor"
            class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="18302e52-9e2a-4c8e-9550-0cbb21b38e55" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)" width="52" height="24"></rect>
          </svg>
          <span class="relative">Our</span>
        </span>
        Services
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Strategies that hold human attention

      </p>
    </div>

    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 mb-14">
      <div class="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-2">
        <RouterLink to="/servcies/digital"
          class="bg-gradient-to-l hover:from-gray-100 hover:to-red-200 hover:cursor-pointer transform translate hover:scale-90 duration-700 shadow-lg hover:shadow-xl p-10">
          <div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-red-200">
            <svg class="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">DIGITAL MARKETING</h6>
          <p class="mb-5 text-sm text-gray-900">
          </p>
          <p href="/" aria-label=""
            class="text-sm inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn
            more <i class="fas fa-caret-right text-red-800 ml-2 mt-1"></i></p>
        </RouterLink>
        <RouterLink to="/servcies/branding"
          class="bg-gradient-to-l hover:from-gray-100 hover:to-red-200 hover:cursor-pointer transform translate hover:scale-90 duration-700 shadow-lg hover:shadow-xl p-10">
          <div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-red-200">
            <svg class="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">PERSONAL BRANDING</h6>
          <p href="/" aria-label=""
            class="text-sm inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn
            more <i class="fas fa-caret-right text-red-800 ml-2 mt-1"></i></p>
        </RouterLink>
        <RouterLink to="/servcies/adverts"
          class="bg-gradient-to-l hover:from-gray-100 hover:to-red-200 hover:cursor-pointer transform translate hover:scale-90 duration-700 shadow-lg hover:shadow-xl p-10">
          <div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-red-200">
            <svg class="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">ADVERTISING</h6>
          <p href="/" aria-label=""
            class="text-sm inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn
            more <i class="fas fa-caret-right text-red-800 ml-2 mt-1"></i></p>
        </RouterLink>
        <RouterLink to="/servcies/seo"
          class="bg-gradient-to-l hover:from-gray-100 hover:to-red-200 hover:cursor-pointer transform translate hover:scale-90 duration-700 shadow-lg hover:shadow-xl p-10">
          <div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-red-200">
            <svg class="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">SEARCH ENGINE OPTIMIZATION</h6>
          <p href="/" aria-label=""
            class="text-sm inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn
            more <i class="fas fa-caret-right text-red-800 ml-2 mt-1"></i></p>
        </RouterLink>
        <RouterLink to="/servcies/media"
          class="bg-gradient-to-l hover:from-gray-100 hover:to-red-200 hover:cursor-pointer transform translate hover:scale-90 duration-700 shadow-lg hover:shadow-xl p-10">
          <div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-red-200">
            <svg class="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">SOCIAL MEDIA MANAGEMENT</h6>
          <p href="/" aria-label=""
            class="text-sm inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn
            more <i class="fas fa-caret-right text-red-800 ml-2 mt-1"></i></p>
        </RouterLink>
        <RouterLink to="/servcies/content"
          class="bg-gradient-to-l hover:from-gray-100 hover:to-red-200 hover:cursor-pointer transform translate hover:scale-90 duration-700 shadow-lg hover:shadow-xl p-10">
          <div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-red-200">
            <svg class="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">CREATIVE CONTENT MARKETING
          </h6>
          <p href="/" aria-label=""
            class="text-sm inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn
            more <i class="fas fa-caret-right text-red-800 ml-2 mt-1"></i></p>
        </RouterLink>
        <RouterLink to="/servcies/digital"
          class="bg-gradient-to-l hover:from-gray-100 hover:to-red-200 hover:cursor-pointer transform translate hover:scale-90 duration-700 shadow-lg hover:shadow-xl p-10">
          <div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-red-200">
            <svg class="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">DIGITAL MARKETING
            TRAINING</h6>
          <p href="/" aria-label=""
            class="text-sm inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn
            more <i class="fas fa-caret-right text-red-800 ml-2 mt-1"></i></p>
        </RouterLink>
        <RouterLink to="/servcies/website"
          class="bg-gradient-to-l hover:from-gray-100 hover:to-red-200 hover:cursor-pointer transform translate hover:scale-90 duration-700 shadow-lg hover:shadow-xl p-10">
          <div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-red-200">
            <svg class="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">WEBSITE CREATION AND MAINTAINANCE
          </h6>
          <p href="/" aria-label=""
            class="text-sm inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn
            more <i class="fas fa-caret-right text-red-800 ml-2 mt-1"></i></p>
        </RouterLink>
      </div>
    </div>

    <section id="testimonials" aria-label="What our customers are saying" class="bg-red-800 py-20 sm:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl md:text-center">
          <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">Loved by businesses worldwide.</h2>
          <p class="mt-4 text-lg tracking-tight text-gray-200">Our service is so simple that people can’t help but fall
            in
            love with it. Simplicity is easy when you just skip tons of mission-critical features.</p>
        </div>
        <ul role="list"
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          <li>
            <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                    width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg>
                  <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-900">Successfully engineered our digital
                      shift in Strategy & Communication
                      at Kenya Hospital Association
                    </p>
                  </blockquote>
                  <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div class="font-bold text-base text-slate-900">Dr. Joseph Aluoch</div>
                      <div class="mt-1 text-sm text-red-800 font-bold">President Pan African Thoracic
                        Society</div>
                    </div>
                    <div class="overflow-hidden rounded-full bg-slate-50"><img alt="" src="@/assets/aluoch.jpeg"
                        width="56" height="56" decoding="async" data-nimg="1" class="h-14 w-14 object-cover"
                        loading="lazy" style="color:transparent"></div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                    width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg>
                  <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-900">They understand consumer behaviour
                      even through uncertain times. A key
                      support system during Covid19 onset</p>
                  </blockquote>
                  <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div class="font-bold text-base text-slate-900">Michael Adwera</div>
                      <div class="mt-1 text-sm text-red-800 font-bold">Head of Business Development, Vivo
                        Energy</div>
                    </div>
                    <div class="overflow-hidden rounded-full bg-slate-50"><img alt="" src="@/assets/db.jpeg" width="56"
                        height="56" decoding="async" data-nimg="1" class="h-14 w-14 object-cover" loading="lazy"
                        style="color:transparent"></div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                    width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg>
                  <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-900">
                      Excellently executed a National campaign for the official opening of AAR Hospital by the President
                    </p>
                  </blockquote>
                  <figcaption class="relative flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <div class="font-bold text-base text-slate-900">Steve Okeyo</div>
                      <div class="mt-1 text-sm text-red-800 font-bold">CEO Hospital Holdings Investment (AAR Group)
                      </div>
                    </div>
                    <div class="overflow-hidden rounded-full bg-slate-50"><img alt="" src="@/assets/steve.jpeg" width="56"
                        height="56" decoding="async" data-nimg="1" class="h-14 w-14 object-cover" loading="lazy"
                        style="color:transparent"></div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                    width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg>
                  <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-900">An extremely pro-active team on
                      deliverables and very passionate
                      about their art</p>
                  </blockquote>
                  <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div class="font-bold text-base text-slate-900">Abel Munda</div>
                      <div class="mt-1 text-sm text-red-800 font-bold">MD, Liberty Kenya</div>
                    </div>
                    <div class="overflow-hidden rounded-full bg-slate-50"><img alt="" src="@/assets/abel.jpeg" width="56"
                        height="56" decoding="async" data-nimg="1" class="h-14 w-14 object-cover" loading="lazy"
                        style="color:transparent"></div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                    width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg>
                  <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-900">
                      More competitive, credible & convincing in competitive markets. The team actualizes impressive
                      conversions from social
                      traffic to real-time clients within 90 days.
                    </p>
                  </blockquote>
                  <figcaption class="relative flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <div class="font-bold text-base text-slate-900">Chrispin Oduor</div>
                      <div class="mt-1 text-sm text-red-800 font-bold">CEO Langu Green
                        Technologies</div>
                    </div>
                    <div class="overflow-hidden rounded-full bg-slate-50"><img alt="" src="@/assets/odipo.jpeg" width="56"
                        height="56" decoding="async" data-nimg="1" class="h-14 w-14 object-cover" loading="lazy"
                        style="color:transparent"></div>
                  </figcaption>
                </figure>
              </li>
            </ul>
            
          </li>
        </ul>
      </div>
    </section>

    <section id="sponsors" aria-label="Sponsors" class="py-20 sm:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          class="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-black sm:text-5xl">
          Some of our clients</h2>
        <div
          class="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols- md:gap-x-16 lg:gap-x-32">


          <img class="" src="@/assets/20.png" alt="">
        </div>
      </div>
    </section>


    <Footer />

  </div>
</template>
