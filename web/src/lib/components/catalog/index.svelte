<script lang="ts">
  import Item from "./item.svelte";

  const {rows = 2} = $props();

  const items = Array.from({ length: rows * 4 }, () => ({
    name: "Фрикнционный Молоток С алмазным напылением Двусторонний механизм",
    cost: "5000 ₽",
  }));
</script>

<div class="catalog">
  {#each items as item}
    <div class="item-container">
      <Item name={item.name} cost={item.cost} />
    </div>
  {/each}
</div>

<style>
  .catalog {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .item-container {
    width: 300px;
  }

  @media (max-width: 640px) {
    .item-container {
      width: 48%;
    }
  }
</style>
