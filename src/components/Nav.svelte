<script>
  import { fly } from "svelte/transition";
  import { constants } from "../helpers/constants";

  import Remix from "../components/logos/Remix.svelte";
  import Nextjs from "../components/logos/Nextjs.svelte";
  import AstroLogo from "../components/logos/Astro.svelte";
  import Redwood from "../components/logos/Redwood.svelte";
  import Sveltekit from "../components/logos/Sveltekit.svelte";
  import NavRecentBlogPosts from "./NavRecentBlogPosts.svelte";
  import NavMoreTech from "./NavMoreTech.svelte";

  let isNavShowing = false;

  const toggleNav = () => {
    isNavShowing = !isNavShowing;
  };
</script>

<!-- prevents the body from scrolling when the nav is open -->
<svelte:head>
  {#if isNavShowing}
    <style lang="postcss">
      body {
        @apply overflow-hidden;
      }
    </style>
  {/if}
</svelte:head>

<!-- hamburger -->
<div class="fixed top-6 left-6 z-hamburger">
  <button
    class="center px-3 py-5 flex-col gap-3 hover:bg-white group"
    class:bg-black={isNavShowing}
    class:text-white={isNavShowing}
    class:bg-icterine={!isNavShowing}
    class:text-black={!isNavShowing}
    on:click={toggleNav}
    on:keydown={(e) => {
      if (e.key === "Escape") isNavShowing = false;
    }}
  >
    <div
      class="h-[2px] w-[52px] bg-current transition-transform duration-300 ease-in-out group-hover:bg-mardiGras"
      class:rotate-45={isNavShowing}
      class:translate-y-[14px]={isNavShowing}
    />
    <div
      class="h-[2px] w-[52px] bg-current transition-opacity duration-300 ease-in-out group-hover:bg-mardiGras"
      class:opacity-0={isNavShowing}
    />
    <div
      class="h-[2px] w-[52px] bg-current transition-transform duration-300 ease-in-out group-hover:bg-mardiGras"
      class:-rotate-45={isNavShowing}
      class:-translate-y-[14px]={isNavShowing}
    />
  </button>
</div>

<!-- nav -->
{#if isNavShowing}
  <nav
    class="fixed inset-0 bg-mardiGras page-grid z-navigation py-[124px]"
    transition:fly={{ opacity: 0, y: "-100%" }}
  >
    <!-- left column -->
    <div class="col-span-3 col-start-2 flex flex-col justify-between">
      <div>
        <!-- <a href="/" class="mb-10 block">
          <img src="/images/logo--white.svg" alt="Brazilian Nut News" />
        </a> -->
        <a
          href="/signup"
          class="w-full block bg-icterine font-bold text-4xl tracking-tight py-6 mb-5 text-center hover:bg-white"
          >Sign Up</a
        >
        <a
          href="/login"
          class="text-icterine bg-mamba py-6 tracking-tight text-4xl font-bold text-center block w-full hover:bg-white hover:text-black mb-5"
          >Login</a
        >
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4>Sponsored By</h4>
        <a href={constants.SENTRY}
          ><img src="/images/logo__sentry.svg" alt="Sentry" width="250" /></a
        >
      </div>
    </div>

    <!-- middle column -->
    <div class="col-start-6 col-span-4">
      <h4><a href="/side-by-side" class="hover:text-white">Side-By-Side</a></h4>
      <ul>
        <li><a href="/side-by-side/installing">Installing</a></li>
        <li><a href="/side-by-side/tailwind">SETTING UP TAILWIND</a></li>
        <li><a href="/side-by-side/router">ROUTER</a></li>
        <li><a href="/side-by-side/fetching-data">FETCHING DATA</a></li>
        <li><a href="/side-by-side/api">BUILDING AN API</a></li>
        <li><a href="/side-by-side/components">BUILDING COMPONENTS</a></li>
        <li><a href="/side-by-side/server-components">SERVER COMPONENTS</a></li>
        <li><a href="/side-by-side/auth">AUTH</a></li>
        <li><a href="/side-by-side/meta">META DATA / OG IMAGES</a></li>
        <li><a href="/side-by-side/rendering">RENDERING</a></li>
        <li><a href="/side-by-side/deployment">DEPLOYMENT</a></li>
        <li><a href="/side-by-side/sentry">Sentry</a></li>
        <li><a href="/side-by-side/performance">PERFORMANCE</a></li>
        <li><a href="/side-by-side/conclusion">CONCLUSION</a></li>
      </ul>
    </div>

    <!-- right column -->
    <div class="col-span-2 col-start-10 flex flex-col justify-between">
      <div>
        <h4><a href="/framework" class="hover:text-white">Courses</a></h4>
        <ul class="framework-nav">
          <li>
            <a href="/remix">
              <Remix width={92} />
            </a>
          </li>

          <li>
            <a
              href="/nextjs-pages"
              class="text-white font-sans flex whitespace-nowrap text-base gap-2 items-baseline capitalize font-medium"
            >
              <Nextjs width={96} />
              <div class="mt-auto relative -bottom-[2px]">Pages Router</div>
            </a>
          </li>

          <li>
            <a
              href="/nextjs-app"
              class="text-white font-sans flex whitespace-nowrap text-base gap-2 items-baseline capitalize font-medium"
            >
              <Nextjs width={96} />
              <div class="mt-auto relative -bottom-[2px]">App Router</div>
            </a>
          </li>

          <li>
            <a href="/astro">
              <AstroLogo width={121} />
            </a>
          </li>

          <li>
            <a href="/redwoodjs">
              <Redwood width={175} />
            </a>
          </li>

          <li>
            <a href="/sveltekit">
              <Sveltekit width={184} />
            </a>
          </li>
        </ul>
      </div>

      <!-- <NavRecentBlogPosts /> -->
      <NavMoreTech />
    </div>
  </nav>
{/if}
