<script lang="ts">
  import SvelteMarkdown from '@humanspeak/svelte-markdown';
  import Content from './content.md?raw';


</script>

<div class="container">
  <SvelteMarkdown
    source={Content}
  />
</div>

<style>
  :global(p,li) {
    font-size: 20px;
  }
</style>

