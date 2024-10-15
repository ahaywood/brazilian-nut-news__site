<script lang="ts">
  export let id,
    size = 24;
</script>

<svg width={size} height={size}>
  <use href={`/images/icons/sprite.svg#${id}`}></use>
</svg>
