<script lang="ts">
  import Item from "$lib/components/catalog/item.svelte";
  import SidePanel from "./side_panel.svelte";

  let items = $state(Array.from({ length: 30 }, () => ({
    name: "Пумпурумпик ля ля ля абоба боба боба боба",
    cost: "5000 P",
  })));

  function add_items() {
    items = items.concat(Array.from({ length: 30 }, () => ({
      name: "А меня добавили :3",
      cost: "5000 P",
    })));
  }
</script>

<title>Каталог товаров</title>

<div class="container">
  <div class="catalog">
    <SidePanel />
    <div class="items">
      {#each items as item}
        <div class="item-container">
          <Item name={item.name} cost={item.cost} />
        </div>
      {/each}
      <button onclick={add_items} class="next accent_button">Загрузить еще...</button>
    </div>
  </div>
</div>

<style>
  .catalog {
    height: 100%;
    display: flex;
  }

  .items {
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .item-container {
    width: 200px;
  }

  .next {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    font-size: 18px;
  }

  @media(max-width: 640px) {
    .catalog {
      display: flex;
      flex-direction: column;
    }    
  }
</style>
