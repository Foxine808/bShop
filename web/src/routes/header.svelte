<script lang="ts">
  import Logo from "$lib/icons/logo.svg";
  import AccountIcon from "$lib/icons/account.svg";
  import CartIcon from "$lib/icons/cart.svg";
  import Menu from "$lib/icons/menu.svg";

  const navigation_links = [
    {
      icon: {
        url: AccountIcon,
        alt: "account",
      },
      name: "Профиль",
      href: "/profile",
    },
    {
      icon: {
        url: CartIcon,
        alt: "cart",
      },
      name: "Корзина",
      href: "/",
    },
  ];

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target as HTMLFormElement;
    const searchInput = form.querySelector<HTMLInputElement>('input[type="search"]');
    
    const searchQuery = encodeURIComponent(searchInput ? searchInput.value : '');
    window.location.href = `/catalog?search=${searchQuery}`;
  }
</script>

<header>
  <input type="checkbox" id="toggle" class="pages-container-checkbox" />

  <div class="upper">
    <a href="/" class="logo">
      <img src={Logo} alt="logo" />
      <h1>bShop</h1>
    </a>

    <form class="search" on:submit={handleSubmit}>
      <input type="search" />
      <input type="submit" value="" />
    </form>

    <label for="toggle"><img class="menu-icon" src={Menu} alt="menu" /></label>
  </div>
  <div class="pages">
    {#each navigation_links as link}
      <a href={link.href}>
        <img class="icon" src={link.icon.url} alt={link.icon.alt} />
        {link.name}
      </a>
    {/each}
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    padding: 10px 0px;
  }

  .search {
    display: flex;
    flex-direction: row;
    padding: 5px 10px;
    border: solid 2px black;
    border-radius: 100px;
  }

  .search input[type="search"] {
    border: none;
    border-radius: unset;
    width: 100%;
    font-size: 18px;
  }

  .search input[type="search"]:focus-visible {
    outline: none;
  }

  .search input[type="submit"] {
    background-color: transparent;
    border: none;
    border-radius: unset;
    width: 35px;
    height: 30px;
    cursor: pointer;
    background-image: url("$lib/icons/search.svg");
    background-size: 30px;
    background-repeat: no-repeat;
  }

  .logo {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .logo img {
    height: fit-content;
    width: 150px;
  }

  .pages {
    display: flex;
  }

  .pages a {
    display: flex;
    align-items: center;
    margin: 0px 10px;
    font-size: 20px;
  }

  .pages img {
    margin: 0px 5px;
  }

  .pages-container-checkbox {
    display: none;
  }

  .menu-container {
    display: none;
  }

  input[type="search"] {
    width: 50%;
    height: 30px;
  }

  .icon {
    height: 30px;
    width: 30px;
  }

  .upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .menu-icon {
    display: none;
  }

  @media (max-width: 640px) {
    header {
      position: relative;
      overflow: visible;
      flex-direction: column;
      height: fit-content;
      padding: 0;
      margin: 0;
    }

    .logo {
      flex-direction: column;
    }

    .logo img {
      width: 10vh;
    }

    .logo h1 {
      font-size: 2vh;
    }

    .pages {
      display: none;
      border-top: var(--main-color) 0.5vh solid;
      border-bottom: var(--main-color) 0.5vh solid;
      padding: 1vh;
      width: 100vw;
      grid-template-columns: 1fr max-content 1fr;
      flex-direction: column;
      height: fit-content;
      align-items: center;
    }

    .pages a {
      width: fit-content;
      grid-column: 2;
      font-size: 4vh;
    }

    .icon {
      height: 4vh;
    }

    .menu-icon {
      display: block;
      width: 7vh;
      margin: 0 1vh;
    }

    #toggle:checked ~ .pages {
      display: grid;
      transition: ease-in 0.2s display;
    }

    #toggle:active .menu-icon {
      width: 1rem;
    }
  }
</style>
