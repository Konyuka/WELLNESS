<script setup>
import Footer from '../components/Footer.vue'
// psuh
</script>

<template>
  <div class="bg-gradient-to-l from-gray-100 to-red-800 h-screen">
    
    <div class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blogs</h2>
          <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
            <p class="text-xl text-gray-500">Blogging for the chronically curious and unapologetically punny</p>
            <form class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email-address" type="email" autocomplete="email" required
                  class="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-red-500 lg:max-w-xs"
                  placeholder="Email Address">
              </div>
              <div class="mt-2 flex w-full flex-shrink-0 rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto">
                <button type="button"
                  class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-800 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:inline-flex sm:w-auto">Notify
                  me</button>
              </div>
            </form>
          </div>
        </div>
        <div class="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          <div>
            <p class="text-sm text-gray-500">
              <time datetime="2020-03-16">Mar 16, 2021</time>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">Building Your Online Presence: Tips for Personal Branding in the Digital Age</p>
              <p class="mt-3 text-base text-gray-500">
                In today's digital world, your online presence is just as important as your real-life reputation. Join us as we explore
                the ins and outs of personal branding and how to make a lasting impact in the digital space
              </p>
            </a>
            <div class="mt-3">
              <a href="#" class="text-base font-semibold text-red-800 hover:text-red-500">Read full story</a>
            </div>
          </div>
    
          <div>
            <p class="text-sm text-gray-500">
              <time datetime="2020-03-10">Dec 10, 2021</time>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">The Power of Digital Marketing: Strategies for Growing Your Business</p>
              <p class="mt-3 text-base text-gray-500">
                Discover the secret to unlocking the full potential of your business with the right digital marketing strategies. From
                search engine optimization to social media advertising, we cover it all to help you reach and engage your target
                audience.
              </p>
            </a>
            <div class="mt-3">
              <a href="#" class="text-base font-semibold text-red-800 hover:text-red-500">Read full story</a>
            </div>
          </div>
    
          <div>
            <p class="text-sm text-gray-500">
              <time datetime="2020-02-12">Feb 12, 2022</time>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">Personal Branding: Crafting Your Unique Story and Image Online</p>
              <p class="mt-3 text-base text-gray-500">
                Your personal brand is your ticket to success in the digital world. Learn how to craft a compelling story and image that
                sets you apart from the competition and helps you build a strong online reputation
              </p>
            </a>
            <div class="mt-3">
              <a href="#" class="text-base font-semibold text-red-800 hover:text-red-500">Read full story</a>
            </div>
          </div>
    
          <div>
            <p class="text-sm text-gray-500">
              <time datetime="2020-01-29">Jan 29, 2023</time>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">Maximizing Your Reach: The Benefits of Digital Marketing for Small Businesses</p>
              <p class="mt-3 text-base text-gray-500">
                Small businesses don't have to get left behind in the digital marketing game. From cost-effective advertising options to
                building a loyal online following, we showcase the benefits of digital marketing for small businesses and how you can
                make the most of it.
              </p>
            </a>
            <div class="mt-3">
              <a href="#" class="text-base font-semibold text-red-800 hover:text-red-500">Read full story</a>
            </div>
          </div>
        </div>
      </div>
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
