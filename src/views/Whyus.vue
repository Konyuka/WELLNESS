<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="bg-white">
    <div class="relative overflow-hidden bg-white h-auto">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Why you should </span>
                <span class="block text-red-800 xl:inline">choose us?</span>
              </h1>

              <h2 class="mt-20 text-left text-lg font-bold leading-8 tracking-tight text-gray-900 sm:text-xl"><i
                  class="fas fa-caret-right text-red-800"></i> What we do best</h2>
              <p
                class="mt-10 text-base sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-md lg:mx-0">
                Attention & Persuasion, are digital currencies
                earned through exchange of value that goes
                beyond your service/product. People have
                insatiable desire to seek, learn and discover.
                <br>
                Our strategy is a combination of three things
                that holds the human attention:
                <br>
                  <span class="ml-5"> <i class="fas fa-circle text-gray-200"></i> Mystery</span><br>
                  <span class="ml-5"> <i class="fas fa-circle text-gray-200"></i> Curiosity</span><br>
                  <span class="ml-5"> <i class="fas fa-circle text-gray-200"></i> Authenticity</span>


              </p>

              <h2 class="mt-20 text-left text-lg font-bold leading-8 tracking-tight text-gray-900 sm:text-xl"><i
                  class="fas fa-caret-right text-red-800"></i> Innovative Ideas</h2>
              <p
                class="mt-10 text-base sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-md lg:mx-0">
                We treat digital platforms as less of
                technology and more of sociology &
                psychology.
                Our services are customized as per every
                client's current needs & challenges. We
                love data, we love numbers and we only
                care about delivering results

              </p>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="@/assets/illustration.jpg"
          alt="">
      </div>
    </div>

    <div class="overflow-hidden bg-white py-16 lg:py-24">
      <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <svg class="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block" width="404"
          height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
          <defs>
            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20"
              patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div class="relative">
          <h2 class="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Creative
            Development</h2>
          <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">Creativity is seeing what others see and thinking what no one else ever thought.</p>
        </div>

        <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div class="relative">
            <!-- <h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Transfer funds world-wide</h3>
            <p class="mt-3 text-lg text-gray-500">Lorem </p> -->

            <dl class="mt-10 space-y-10">
              <div class="relative">
                <dt>
                  <div class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-red-800 text-white">
                    <i class="fas fa-users text-white fa-xl"></i>
                  </div>
                  <p class="ml-16 text-lg font-bold leading-6 text-gray-900">Messaging Strategy
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">A keen focus not only in who
                  your target audience are but
                  also what they want at the
                  moment.</dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-red-800 text-white">
                    <i class="fa-brands fa-connectdevelop text-white fa-xl"></i>
                  </div>
                  <p class="ml-16 text-lg font-bold leading-6 text-gray-900">Brand Positioning</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">This is link-building, online
                  Community and Generating
                  buzz around your brand
                  through healthy organic
                  back-links
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-red-800 text-white">
                    <!-- <i class="fas fa-users text-white fa-xl"></i> -->
                    <i class="fas fa-bullseye text-white fa-xl"></i>
                  </div>
                  <p class="ml-16 text-lg font-bold leading-6 text-gray-900">Target Market
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">Targets editors, influential bloggers, referral partners
                  and key social media accounts with content that
                  does a mileage for your brand footprint
                </dd>
              </div>
            </dl>
          </div>

          <div class="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <svg class="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden" width="784" height="404"
              fill="none" viewBox="0 0 784 404">
              <defs>
                <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20"
                  patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img class="relative mx-auto" width="490" src="@/assets/illustration2.jpg"
              alt="">
          </div>
        </div>

        
        
      </div>
    </div>



    <Footer class="bg-white mt-40" />
  </div>
</template>

<style>

</style>
