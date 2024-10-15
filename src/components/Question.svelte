<script lang="ts">
  import { slide } from "svelte/transition";

  export let question: string;
  let isOpen = false;

  const handleClick = () => {
    isOpen = !isOpen;
  };
</script>

<div class="bg-gallery py-3 px-8 mb-6">
  <button
    on:click={handleClick}
    class="inline-flex gap-2 justify-start items-center hover:text-mamba"
  >
    <img
      src="/images/triangle--right.svg"
      alt=""
      class="transition-transform duration-300 ease-in-out"
      class:rotate-90={isOpen}
    />
    <h3 class="text-xl font-bold">{question}</h3>
  </button>
  {#if isOpen}
    <div transition:slide={{ duration: 300 }} class="px-6 pb-2 leading-loose">
      <slot />
    </div>
  {/if}
</div>
