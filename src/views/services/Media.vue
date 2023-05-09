<script setup>
import Footer from '../../components/Footer.vue'
// psuh
</script>

<template>
  <div class="bg-gradient-to-l from-gray-100 to-red-800 h-screen">

    <div class="bg-red-900 py-24 sm:py-32">
      <div class="relative isolate">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div
            class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="/services/social.png" alt="">
            <div class="w-full flex-auto">
              <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">SOCIAL MEDIA MANAGEMENT</h2>
              <p class="mt-6 text-lg leading-8 text-gray-300">
                We’ve designed social and search to generate equally fast results. Stay on-top of your audience’s mind
                every single day through value-packed content, vibrant and exciting videos, consistency in engagement
                and supercharged organic growth that builds a loyal social community around your brand.
              </p>

              <div class="mt-10 flex">
                <a href="#"
                  class="transform transition hover:scale-125 duration-700 ease-in text-lg font-semibold leading-6 text-white">
                  Contact us to learn us
                  <i class="fas fa-caret-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true">
          <div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)">
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
