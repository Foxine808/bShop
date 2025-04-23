<script lang="ts">
    import type { Data } from "./+page.server";

  let { data }: { data: Data } = $props();
</script>

{#each data.products as item}
  {JSON.stringify(item)}
{/each}
