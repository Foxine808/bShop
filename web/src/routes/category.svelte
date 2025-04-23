<script lang="ts">
  const { name, label } = $props();
</script>

<a href={`/catalog?catergory=${name}`} class="category">
  <h3>{label}</h3>
</a>

<style>
  .category {
    border-radius: 10px;
    height: 358px;
    position: relative;
    background: var(--background) center;
    background-size: auto 100%;
    transition: background-size ease-out 0.1s;
    cursor:pointer
  }

  .category:hover {
    background-size: auto 120%;
    transition: background-size ease-out 0.1s;
  }

  .category h3 {
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); 
  }

  @media(max-width: 640px) {
    .category {
      height: 40vh;
      width: 20vh;
    }
  }
</style>
