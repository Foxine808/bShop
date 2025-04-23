<script lang="ts">
  import Category from "../category.svelte";

  const side_data = {
    categories: Array.from({ length: 7 }, () => ({
      href: "/category",
      name: "Категория",
    })),
    prices: [
      {
        from: 500,
        to: 2000,
      },
      {
        from: 2000,
        to: 5000,
      },
      {
        from: 5000,
        to: 10000,
      },
      {
        from: 10000,
        to: 20000,
      },
      {
        from: 20000,
        to: 50000,
      },
    ],
  };
</script>

<aside>
  <input class="category_menu hidden" id="category" type="checkbox" />
  <label for="category">
    <h3>Категория</h3>
  </label>

  <div class="popup category">
    <label for="category" class="menu_apply">Назад</label>
    {#each side_data.categories as category}
      <a href={category.href}>{category.name}</a>
    {/each}
  </div>

  <input class="price_menu hidden" id="price" type="checkbox" />
  <label for="price">
    <h3>Цена</h3>
  </label>

  <div class="popup price">
    <label class="menu_apply" for="price">Применить</label>
    <div class="specific">
      <input type="number" />
      <input type="number" />
    </div>
    {#each side_data.prices as price, idx}
      <div class="price_container">
        <input type="radio" name="price" id={`price_${idx}`} />
        <label class="price_label" for={`price_${idx}`}
          >{price.from} - {price.to}</label
        >
      </div>
    {/each}
  </div>
</aside>

<style>
  aside {
    width: 240px;
    margin-right: 10px;
  }

  a {
    width: fit-content;
  }

  h3 {
    font-size: 18px;
    margin: 0;
    margin-top: 20px;
  }

  .price {
    display: flex;
    flex-direction: column;
  }

  .price input[type="radio"] {
    width: 20px;
    height: 20px;
  }

  .price label {
    font-size: 18px;
    cursor: pointer;
  }

  .specific {
    display: inline-flex;
    justify-content: space-between;
  }

  .specific input {
    width: 38%;
    font-size: 16px;
    border-radius: 6px;
    border-color: grey;
  }

  .category {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
  }

  .category a {
    margin-top: 8px;
    font-size: 18px;
  }

  .hidden {
    display: none;
  }

  .menu_apply {
    display: none;
  }

  @media (not(max-width: 640px)) {
    .mobile_container {
      all: inherit;
    }
  }

  @media (max-width: 640px) {
    h3 {
      background: grey;
      color: white;
      padding: 0.5vh 3vh;
      border-radius: 100px;
      margin: 1vh;
    }

    aside {
      display: inline-flex;
      width: 100%;
    }

    .menu_apply {
      display: initial;
      color: var(--main-color);
      font-size: 2.5vh;
      font-weight: 600;
      margin-left: auto;
    }

    #category:not(:checked) ~ .category {
      display: none;
    }

    #price:not(:checked) ~ .price {
      display: none;
    }

    .popup {
      position: fixed;
      width: 96vw;
      height: 96vh;
      padding: 2vh 2vw;
      top: 0;
      left: 0;
      touch-action: pinch-zoom;
      background: white;
    }

    .category {
      display: flex;
      align-items: center;
    }

    .category a {
      font-size: 3vh;
      margin: 2vh;
    }

    .price {
      display: flex;
    }

    .price input[type="number"] {
      font-size: 4vh;
    }

    .price input[type="radio"] {
      width: 3vh;
      height: 3vh;
    }

    .specific {
      margin-top: 2vh;
      justify-content: space-evenly;
    }

    .price label {
      font-size: 3vh;
    }

    .price_container {
      margin: 1vh;
    }
  }
</style>
