<script>
  import { page } from '$app/stores';
  const isBeta = $page.url.searchParams.get("svm");
  const isAlpha = $page.url.searchParams.get("logistic_regression");
</script>
<svelte:head>
    <title>Faker Extension</title> 
</svelte:head>
<div class="flex flex-col bg-agray-50">
   <div class="mt-10 text-gdark text-center text-4xl font-semibold">
      Filipino Fake News Detector
      <div class="text-gdark text-center text-base font-thin">
         Project by Frongoso - Devilleres - Samonte - Sarmiento
      </div>
   </div>
   <div class="bg-gray-100 my-72 relative">
      <div>
         <div class="w-96 mx-auto" style="scroll-snap-type: x mandatory;">
            <!-- first -->
            <div class="">
               <input class="sr-only peer" type="radio" name="carousel" id="carousel-1" checked />
               <!-- content #1 -->
               <div
                  class="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                  <img class="rounded-t-lg w-96 h-56" src="/exclamation.png" alt="" />
                  <div class="py-4 px-8">
                     <h1 class="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight text-center">
                      Invalid
                     </h1>
                     <p class="hover:cursor-pointer py-3 text-gray-600 leading-6 text-justify">
                      Please make sure that the highlighted text is at least 100 words.
                     </p>
                  </div>
                  
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="mt-4 text-gdark text-center text-lg">
      All rights reserved.
   </div>
   <div class="mb-2 text-gdark text-center text-sm">
      <a href="https://github.com/H3XoRuSH/Filipino-Fake-News-Detector" class="px-2">Extension Source Code</a>
   </div>
</div>

