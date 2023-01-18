<script>
	import { Header, Main, Footer, Settings } from "$comps";
	import { mainStore } from "$scripts/store.js";
</script>

<div class="page" style:font-family={$mainStore.activeFont}>
	<span class="spacer" />
	<Header />
	<Main />
	<Footer />
	{#if $mainStore.settingsAreOpen}
		<Settings />
	{/if}
</div>

<style>
	@font-face {
		font-family: "KumbhSans";
		src: url("/fonts/KumbhSans-VariableFont_wght.ttf") format("truetype");
		font-weight: 100 1000;
	}

	@font-face {
		font-family: "RobotoSlab";
		src: url("/fonts/RobotoSlab-VariableFont_wght.ttf") format("truetype");
		font-weight: 100 1000;
	}

	@font-face {
		font-family: "SpaceMono";
		src: url("/fonts/SpaceMono-Regular.ttf") format("truetype");
		font-weight: normal;
	}
	@font-face {
		font-family: "SpaceMono";
		src: url("/fonts/SpaceMono-Bold.ttf") format("truetype");
		font-weight: bold;
	}

	:global(body) {
		background: #1e213f;
	}
	
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		min-height: 100vh;
	}
	@supports(min-height: 100dvh) {
		.page {
			min-height: 100dvh;
		}
	}

	.spacer {
		flex-basis: 32px;
		max-height: 80px;
		flex-grow: 10;
	}

	:global(button) {
		-webkit-tap-highlight-color: transparent;
	}
</style>
