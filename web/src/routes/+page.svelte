<script lang="ts">
  import Category from "./category.svelte";
  //@ts-ignore
  import Catalog from "$lib/components/catalog/index.svelte";

  import building_material_img from "$lib/images/categorioes/bg-stroi.png";
  import instruments_img from "$lib/images/categorioes/instruments.jpg";
  import materials_img from "$lib/images/categorioes/materials.jpg";
  import water_img from "$lib/images/categorioes/water.jpg";
  import electrics_img from "$lib/images/categorioes/electrics.jpg";
  import garden_img from "$lib/images/categorioes/garden.webp";

  export const categories = [
    {
      name: "building_materials",
      label: "Строительные материалы",
      image: building_material_img,
    },
    {
      name: "tools",
      label: "Инструменты и оборудование",
      image: instruments_img,
    },
    {
      name: "facing_materials",
      label: "Отделочные материалы",
      image: materials_img,
    },
    {
      name: "heat_water_systems",
      label: "Системы отопления и водоснабжения",
      image: water_img,
    },
    {
      name: "electrics",
      label: "Электрика",
      image: electrics_img,
    },
    {
      name: "garden",
      label: "Сад и огород",
      image: garden_img,
    },
  ];

  const banner_main = {
    header: `Стрйте Свое Будущее<br/>Вместе с Нами!`,
    paragraph: `Создайте пространство своей мечты с нашими 
                качественными материалами и решениями для
                любых проектов!`,
  };
</script>

<title>BShop</title>

<div class="banner">
  <div class="container">
    <div class="banner-message">
      <h1>{@html banner_main.header}</h1>
      <p>{@html banner_main.paragraph}</p>
      <button class="accent_button">Узнать больше</button>
    </div>
  </div>
</div>

<div class="categories">
  <div class="container">
    <h2>Категории</h2>
    <div class="categories_list">
      {#each categories as category}
        <Category
          name={category.name}
          label={category.label}
          --background={`url(${category.image})`}
        />
      {/each}
    </div>
  </div>
</div>

<div class="discount-banner">
  <div class="container">
    <div class="banner-message">
      <h2>20% Экономия</h2>
      <p>При покупке цемента, песка и щебня</p>
      <button class="accent_button learn_more">Узнать больше</button>
    </div>
  </div>
</div>

<div class="catalog">
  <div class="container">
    <h2>Популярыне товары</h2>
    <Catalog />
  </div>
</div>

<style>
  .banner {
    background: url("src/lib/images/house.jpg") left;
    background-size: 140%;
    height: 400px;
    padding: 0;
  }

  .discount-banner {
    background: url("src/lib/images/cement.webp");
    background-size: 100%;
    height: 300px;
    padding: 0;
    margin: 40px 0;
  }
  .banner {
    background: url("src/lib/images/house.jpg") left;
    background-size: 140%;
    height: 400px;
    padding: 0;
  }

  .banner-message {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: rgb(255, 255, 255, 0.5);
    backdrop-filter: brightness(150%) blur(5px);
    height: 100%;
    width: fit-content;
    padding: 10px;
  }

  .banner-message p {
    max-width: 500px;
    font-size: 20px;
    font-weight: 400;
  }

  .banner-message button {
    width: fit-content;
    font-size: 18px;
  }
  .categories_list {
    display: grid;
    grid-column-gap: 23px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
  }

  @media (max-width: 640px) {
    .categories_list {
      overflow-x: scroll;
      padding-bottom: 1vh;
    }
  }
</style>
