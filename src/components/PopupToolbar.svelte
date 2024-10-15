<script lang="ts">
  import Icon from "./Icon.svelte";
  import TableOfContents from "./TableOfContents.svelte";
  import Share from "./Share.svelte";
  import Comments from "./Comments.svelte";

  let tableOfContentsShowing = false;
  let commentsShowing = false;
  let shareShowing = false;
  let popupShowing = false;

  const closeAll = () => {
    tableOfContentsShowing = false;
    commentsShowing = false;
    shareShowing = false;
  };
</script>

<div
  tabindex="0"
  role="button"
  class="fixed bottom-0 w-full bg-transparent h-14 left-0 right-0"
  on:focus={() => {
    popupShowing = true;
  }}
  on:blur={() => {
    popupShowing = false;
  }}
  on:mouseover={() => {
    popupShowing = true;
  }}
  on:mouseleave={() => {
    popupShowing = false;
  }}
>
  <ul
    class="text-white bg-cinder border-2 border-mamba rounded-full flex px-8 py-2 gap-8 items-cneter justify-center fixed left-1/2 -translate-x-1/2 transition-translate duration-300"
    class:bottom-2={popupShowing}
    class:-bottom-12={!popupShowing}
  >
    <!-- table of contents -->
    <li>
      <button
        class="hover:text-icterine w-8 h-8 center"
        on:click={() => {
          tableOfContentsShowing = !tableOfContentsShowing;
        }}
        on:keydown={(e) => {
          if (e.key === "Escape") {
            closeAll();
          }
        }}
      >
        <Icon id="tableOfContents" />
      </button>
    </li>

    <!-- comments -->
    <li>
      <button
        class="hover:text-icterine w-8 h-8 center"
        on:click={() => {
          commentsShowing = !commentsShowing;
        }}
        on:keydown={(e) => {
          if (e.key === "Escape") {
            closeAll();
          }
        }}
      >
        <Icon id="comments" />
      </button>
    </li>

    <!-- share -->
    <li>
      <button
        class="hover:text-icterine w-8 h-8 center"
        on:click={() => {
          shareShowing = !shareShowing;
        }}
        on:keydown={(e) => {
          if (e.key === "Escape") {
            closeAll();
          }
        }}
      >
        <Icon id="share" />
      </button>
    </li>
  </ul>
</div>
{#if tableOfContentsShowing}<TableOfContents />{/if}
{#if commentsShowing}<Comments />{/if}
{#if shareShowing}<Share />{/if}
