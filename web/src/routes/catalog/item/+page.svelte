<script lang="ts">
  import Placeholder from "$lib/images/placeholder.jpg";
  import Catalog from "$lib/components/catalog/index.svelte";

  const data = {
    item: {
      images: Array.from({ length: 10 }, () => Placeholder),
      name: "Крутая очень прям штука очень нпжо тебе отвечаю",
      price: "5000",
      currency: "P",
      about: {
        Тип: "Инструменты",
        Страна: "Россия",
      },
    },
  };


  let current_image = $state(0);

  const about_as_array: string[][] = Object.keys(data.item.about).map((key) => [
    key,
    // @ts-ignore: FIX
    data.item.about[key],
  ]);

  function goToDescription() {
    const description = document.getElementById("description");

    description?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<title>{data.item.name}</title>

<div class="container">
  <div class="main">
    <section class="item_images">
      <div class="image_list">
        {#each data.item.images as image, idx}
          <button
            onclick={() => {
              current_image = idx;
            }}
          >
            <img
              class={`${current_image === idx ? "selected" : ""} `}
              src={image}
              alt={`image_${idx}`}
            />
          </button>
        {/each}
      </div>
      <div class="current_image">
        <img src={data.item.images[current_image]} alt="selected_image" />
      </div>
    </section>

    <section class="item_info">
      <h2>{data.item.name}</h2>
      <span class="about_header"
        ><h3>О товаре</h3>
        <button onclick={goToDescription}>Перейти к описанию ></button></span
      >
      <div class="about">
        {#each about_as_array as about}
          <div class="about_info">
            <span class="prop">{about[0]}</span>
            <span class="value">{about[1]}</span>
          </div>
        {/each}
      </div>
    </section>

    <section class="buy_info">
      <span class="price">
        {data.item.price}
        {data.item.currency}
      </span>
      <div class="buy_buttons">
        <button class="accent_button">Купить</button>
        <button class="contrast_button">В корзину</button>
      </div>
    </section>
  </div>

  <h2>Похожие товары</h2>
  <Catalog rows={1} />

  <h2>Вместе с эти покупают</h2>
  <Catalog rows={1} />

  <h2 id="description">Описание</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis impedit
    reiciendis molestias nam voluptatum labore blanditiis, natus in ex? Quo
    commodi debitis velit ea ex labore hic pariatur quam, quisquam harum eius
    dolores odit molestiae beatae neque nulla nostrum quia laudantium aut
    assumenda ipsa enim obcaecati vero? Aliquid eveniet dolore inventore
    molestias itaque dolorum officia repellat voluptatibus cum, tempora
    provident. <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident pariatur reprehenderit
    placeat, iste earum natus adipisci, obcaecati aliquid doloribus at omnis labore
    illo quia cumque optio iure quidem architecto sapiente! <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore, hic
    accusantium nemo reiciendis asperiores deleniti aspernatur. Natus sunt unde veritatis
    fugiat corrupti possimus eligendi nam reiciendis saepe? Eius harum fugiat laboriosam,
    quis, saepe voluptatem natus, odit culpa aliquam beatae est repudiandae voluptate
    sint velit nobis voluptatum molestiae incidunt nulla modi? Perferendis ut assumenda
    cum dignissimos quibusdam recusandae, repellat accusamus maiores, quo facilis
    libero id eligendi exercitationem, pariatur est aut.
  </p>

  <h2>Характеристики</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis impedit
    reiciendis molestias nam voluptatum labore blanditiis, natus in ex? Quo
    commodi debitis velit ea ex labore hic pariatur quam, quisquam harum eius
    dolores odit molestiae beatae neque nulla nostrum quia laudantium aut
    assumenda ipsa enim obcaecati vero? Aliquid eveniet dolore inventore
    molestias itaque dolorum officia repellat voluptatibus cum, tempora
    provident. <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident pariatur reprehenderit
    placeat, iste earum natus adipisci, obcaecati aliquid doloribus at omnis labore
    illo quia cumque optio iure quidem architecto sapiente! <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore, hic
    accusantium nemo reiciendis asperiores deleniti aspernatur. Natus sunt unde veritatis
    fugiat corrupti possimus eligendi nam reiciendis saepe? Eius harum fugiat laboriosam,
    quis, saepe voluptatem natus, odit culpa aliquam beatae est repudiandae voluptate
    sint velit nobis voluptatum molestiae incidunt nulla modi? Perferendis ut assumenda
    cum dignissimos quibusdam recusandae, repellat accusamus maiores, quo facilis
    libero id eligendi exercitationem, pariatur est aut.
  </p>

  <div class="buy_buttons buy_buttons_mobile">
    <button class="accent_button">Купить</button>
    <button class="contrast_button">В корзину</button>
  </div>
</div>

<style>
  .main {
    display: flex;
    justify-content: space-between;
  }

  .item_images {
    height: 100%;
    display: inline-flex;
  }

  .image_list {
    width: 110px;
    height: 400px;
    overflow-y: scroll;
  }

  .image_list button {
    all: unset;
  }

  .image_list img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    padding: 3px;
    border: 4px solid transparent;
    cursor: pointer;
  }

  .selected {
    border-color: var(--main-color) !important;
  }

  .image_list img:hover {
    border-color: var(--main-color);
  }

  .current_image {
    height: 100%;
  }

  .current_image img {
    height: auto;
    width: 400px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    margin-left: 4px;
    margin-right: 4px;
    border-radius: 40px;
  }

  .item_info h2 {
    font-size: 25px;
    max-width: 400px;
  }

  .about_header {
    display: flex;
    justify-content: space-between;
  }

  .about_header h3 {
    height: fit-content;
    margin: 0;
  }

  .about_header button {
    height: fit-content;
  }

  .about {
    display: grid;
    background: #cccccc;
    grid: auto-flow / auto-flow;
    gap: 2px;
  }

  .about_info {
    display: flex;
    background: white;
    width: 100%;
    padding: 10px 5px;
  }

  .prop {
    width: 50%;
    color: grey;
  }

  .value {
    width: 50%;
  }

  .buy_info {
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  .price {
    background: #0ead43;
    color: white;
    font-size: 28px;
    font-weight: 700;
    border-radius: 1000px;
    padding: 10px;
    width: fit-content;
    height: fit-content;
  }

  .buy_buttons {
    margin: 20px 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .buy_buttons button {
    width: 48%;
    font-size: 18px;
  }

  .buy_buttons_mobile {
    display: none;
  }

  @media (max-width: 640px) {
    .main {
      flex-direction: column;
    }

    .buy_buttons {
      display: none;
    }

    .buy_buttons_mobile {
      display: flex;
      position: sticky;
      bottom: 0;
      background: white;
      padding: 10px 0;
    }

    .current_image {
      display: none;
    }

    .image_list {
      display: flex;
      overflow-x: auto;
      width: 100vw;
      height: auto;
      scroll-snap-type: x mandatory;
      padding-bottom: 10px;
    }

    .image_list button {
      all: unset;
      min-width: 100%;
      height: fit-content;
    }

    .image_list img {
      border: none;
      padding: 0;
      min-width: 100%;
      aspect-ratio: 1/1;
      height: auto;
      scroll-snap-align: start;
    }
  }
</style>
