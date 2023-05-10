<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="bg-gradient-to-l from-gray-100 to-red-800 h-screen">
    
    <div class="bg-white">
      <header class="relative bg-red-800 pb-24 sm:pb-36">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1507561942779-d2a26d42d51f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="">
          <div class="absolute inset-0 bg-gradient-to-l from-red-600 to-red-800 mix-blend-multiply" aria-hidden="true">
          </div>
        </div>
        <div class="relative z-10 h-20">
         
        </div>
    
        <div class="relative mx-auto mt-10 max-w-md px-4 sm:mt-10 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 class="flex justify-center text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-7xl">About Us</h1>
        </div>
      </header>
    
      <main>
    
        <!-- FAQ -->
        <div class="bg-warm-gray-50">
          <div class="mx-auto max-w-md py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-1 lg:gap-8">
              <div>
                <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-warm-gray-900">More about Mich Digital....</h2>
                <p class="mt-10 text-lg text-warm-gray-500">
                  Welcome to Mich Digital, where we help individuals and businesses build their online presence and reach their full
                  potential. Our team of experts is passionate about all things digital marketing and personal branding, and we're
                  dedicated to helping you succeed in the fast-paced world of the internet.
                  <br> <br>
                  We understand the importance of having a strong online presence in today's digital age. Whether you're looking to grow
                  your business, enhance your personal brand, or simply make a lasting impact, we're here to help. With our comprehensive
                  services, you'll have the tools and knowledge you need to achieve your goals and stand out in a crowded online
                  marketplace.
                  <br> <br>
                  Our team of experts has extensive experience in the fields of digital marketing and personal branding, and we stay ahead
                  of the curve by staying up-to-date with the latest trends and best practices. From search engine optimization to social
                  media advertising, we cover it all to help you reach and engage your target audience.
                  <br> <br>
                  At Mich Digital, we're more than just a digital marketing agency. We're your partners in success, and we're committed
                  to helping you build a strong online presence and reach your full potential. Whether you're just starting out or looking
                  to take your online efforts to the next level, we're here to help.
                  <br> <br>
                  Get in touch with us today to learn more about our services and how we can help you achieve your goals. We look forward
                  to working with you!
                </p>
              </div>
              
            </div>
          </div>
        </div>
    
        <!-- Newsletter -->
        <div class="relative">
          <div class="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true"></div>
          <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div
              class="rounded-3xl bg-gradient-to-l from-red-800 to-red-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
              <div class="lg:w-0 lg:flex-1">
                <h2 class="text-3xl font-bold tracking-tight text-white">Why not book an appointment?</h2>
              </div>
              <div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form class="sm:flex">
                  <label for="email-address" class="sr-only">Email address</label>
                  <input id="email-address" name="email-address" type="email" autocomplete="email" required
                    class="w-full rounded-md border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
                    placeholder="Enter your email">
                  <button type="submit"
                    class="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-cyan-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                    Notify Mich Digital's Team
                  </button>
                </form>
                <p class="mt-3 text-sm text-cyan-100">
                  We care about the protection of your data. Read our
                  <a href="#" class="font-medium text-white underline">Privacy Policy.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    
    </div>



    <Footer class="bg-white mt-40" />


  </div>
</template>

<style scoped>
.video-docker video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.video-docker::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.video-content {
  z-index: 2;
}
</style>
