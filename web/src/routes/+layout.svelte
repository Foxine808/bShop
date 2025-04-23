<script lang="ts">
	import '../app.css';
	import PhoneIcon from '$lib/icons/phone.svg';
	import Header from './header.svelte';
  import Footer from './footer.svelte';

	let { children } = $props();
</script>

<div class="top_bar">
	<div class="container">
		<span>
			<img class="phone_icon" src={PhoneIcon} alt="phone"/>
			 +7 (999) 999 99-99
		</span>
	</div>
</div>

<div class="container">
	<Header />
</div>

<div class="app">
	{@render children()}
</div>

<div class="footer-container">
	<div class="container"> <Footer /> </div>
</div>

<style>
  .top_bar {
    background: var(--main-color);
    padding: 2px 0;
    display: flex;
  }

  span {
  	color: white;
    display: flex;
    align-items: center;
  }

  .phone_icon {
  	height: 20px;
  	width: 20px;
  	color: white;
  	margin-right: 10px;
  }

  .footer-container {
  	border-top: 10px var(--main-color) solid;
  	background: #333333;
  }

  .app {
  	flex: 1;
  }
</style>
