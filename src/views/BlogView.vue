<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="bg-gradient-to-l from-gray-100 to-red-800 h-screen">
    <div>
      <p class="text-center pt-10 lg:text-4xl text-xs text-white dark:text-gray-300 font-medium leading-none">About Us</p>
    </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="bg-gradient-to-l from-gray-50 to-red-50 p-8 rounded shadow-xl sm:p-16">
        <div class="flex flex-col lg:flex-row">
          <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Mich
            
              <strong class="block font-extrabold text-red-800">
                Digital
              </strong>
            </h1>
          </div>
          <div class="lg:w-1/2">
            <p class="mb-4 text-base text-black">
              Is the the founder and president of the James R. Jordan Foundation International, and the mother of the world's most
              famous USA basketball player Michael Jordan. Besides being an accomplished author and a philathropist, Mrs. Deloris
              Jordan is also a visionary who has set her eyes to build a better future for the women across the world and in Kenya
              specifically.

              <br>
              <br>
              <br>
              
              <span class="font-bold text-black">Read more about us from these blogs and newspaper articles:</span> <br><br>

              • <span class="text-red-800 font-bold">The People Daily</span> - "Why I fell in love with Kenya." - [July 29, 2015] <br>
              • <span class="text-red-800 font-bold">The Huffington Post's Global Motherhood</span> - #WomenInspire - And Build a Better Future <br>
              • <span class="text-red-800 font-bold">The Standard Digital</span> - "I love helping Kenya's women and children" <br>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" src="/loop.mp4" 
          autoplay muted loop type="video/mp4"></video>
      </div>
      <div class="video-content space-y-2">
        <h1 class="font-light text-6xl">full Hero Video</h1>
        <h3 class="font-light text-3xl">with TailwindCSS</h3>
      </div>
    </section> -->

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
