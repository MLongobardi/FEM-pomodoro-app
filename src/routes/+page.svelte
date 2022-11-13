<script>
	import { Header, Main, Footer, Settings } from "$comps";
	import { mainStore } from "$scripts/store.js"
</script>

<div class="page" style:font-family={$mainStore.activeFont}>
	<Header />
	<Main />
	<div class="temp" style="margin-bottom: 20px; z-index: 1;">
		{#each $mainStore.fonts as font, i}
			<button disabled={$mainStore.activeFont==font} on:click={()=>{mainStore.setFont(i)}}>{font}</button>
		{/each}
		<br>
		{#each $mainStore.colors as color, i}
			<button disabled={$mainStore.activeColor==color} on:click={()=>{mainStore.setColor(i)}} style:background={$mainStore.colors[i]}>{color}</button>
		{/each}
	</div>
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
		height: 100vh;
		background: #1E213F;
	}

	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}
</style>
