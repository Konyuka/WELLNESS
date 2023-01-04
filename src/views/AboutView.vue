<script setup>
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="bg-gradient-to-l from-gray-100 to-red-800 h-screen">
    
    <div class="bg-white">
      <header class="relative bg-red-800 pb-24 sm:pb-32">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt="">
          <div class="absolute inset-0 bg-gradient-to-l from-red-800 to-red-700 mix-blend-multiply" aria-hidden="true">
          </div>
        </div>
        <div class="relative z-10 h-40">
         
        </div>
    
        <div class="relative mx-auto mt-24 max-w-md px-4 sm:mt-32 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
          <p class="mt-6 max-w-3xl text-xl text-cyan-100">Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non
            adipisicing elit distinctio.</p>
        </div>
      </header>
    
      <main>
    
        <!-- FAQ -->
        <div class="bg-warm-gray-50">
          <div class="mx-auto max-w-md py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 class="text-3xl font-bold tracking-tight text-warm-gray-900">Frequently asked questions</h2>
                <p class="mt-4 text-lg text-warm-gray-500">Can’t find the answer you’re looking for? Reach out to our <a
                    href="#" class="font-medium text-red-700 hover:text-red-600">customer support</a> team.</p>
              </div>
              <div class="mt-12 lg:col-span-2 lg:mt-0">
                <dl class="space-y-12">
                  <div>
                    <dt class="text-lg font-medium text-warm-gray-900">How do you make holy water?</dt>
                    <dd class="mt-2 text-base text-warm-gray-500">You boil the hell out of it. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                  </div>
    
                  <div>
                    <dt class="text-lg font-medium text-warm-gray-900">What&#039;s the best thing about Switzerland?</dt>
                    <dd class="mt-2 text-base text-warm-gray-500">I don&#039;t know, but the flag is a big plus. Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                  </div>
    
                  <div>
                    <dt class="text-lg font-medium text-warm-gray-900">What do you call someone with no body and no nose?
                    </dt>
                    <dd class="mt-2 text-base text-warm-gray-500">Nobody knows. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                  </div>
    
                  <div>
                    <dt class="text-lg font-medium text-warm-gray-900">Why do you never see elephants hiding in trees?</dt>
                    <dd class="mt-2 text-base text-warm-gray-500">Because they&#039;re so good at it. Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                  </div>
                </dl>
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
                <h2 class="text-3xl font-bold tracking-tight text-white">Sign up for our newsletter</h2>
                <p class="mt-4 max-w-3xl text-lg text-cyan-100">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat.</p>
              </div>
              <div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form class="sm:flex">
                  <label for="email-address" class="sr-only">Email address</label>
                  <input id="email-address" name="email-address" type="email" autocomplete="email" required
                    class="w-full rounded-md border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
                    placeholder="Enter your email">
                  <button type="submit"
                    class="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-cyan-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Notify
                    me</button>
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
