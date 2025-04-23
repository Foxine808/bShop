<script lang="ts">
  import Placeholder from "$lib/images/placeholder.jpg";

  const { name, cost, image = Placeholder } = $props();
</script>

<div class="item">
  <a href="/catalog/item" >
    <img src={image} alt="name" />
  </a>

  <p class="price">{cost}</p>

  <a href="/catalog/item" class="name">
    <span class="name"> {name} </span>
  </a>
</div>

<style>
  .item {
    width: 100%;
  }

  .item img {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    border-radius: 30px;
    object-fit: cover;
  }

  .price {
    color: var(--main-color);
    font-size: 24px;
    font-weight: 600;
    margin: 4px;
  }

  .name {
    cursor: pointer;
    margin: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
  }

  @media(max-width: 640px) {
    .item {
      width: 100%;
    }

    .item img {
      width: 100%;
      height: auto;
    }
  }
</style>
