<script lang="ts">
  import Placeholder from "$lib/images/placeholder.jpg";

  const { data } = $props();
  console.log(data);
</script>

<div class="container">
  <div class="avatar">
    <img src={Placeholder} alt="avatar" />
  </div>

  <div class="info">
    <div class="about_info">
      <span class="prop">Имя</span>
      <span class="value">{data.name}</span>
    </div>

    <div class="about_info">
      <span class="prop">Фамилия</span>
      <span class="value">{data.surname}</span>
    </div>

    <div class="about_info">
      <span class="prop">Почта</span>
      <span class="value">{data.email}</span>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
  }

  .avatar {
    height: 300px;
  }

  .avatar img {
    height: 100%;
    width: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  .info {
    display: grid;
    background: #cccccc;
    grid: auto-flow / auto-flow;
    gap: 2px;
    width: 100%;
    margin-left: 10px;
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
    font-size: 20px;
  }

  .value {
    width: 50%;
    font-size: 20px;
  }
</style>
