<script>
	import { Header, Main, Footer } from "$comps";
	let fonts = ["KumbhSans", "RobotoSlab", "SpaceMono"];
	let clockFontWeights = [700,700,400];
	let colors = ["#F87070","#70F3F8","#D881F8"];
	let currentFont = 2;
</script>

<div class="page" style:--font={fonts[currentFont]} style:--mainColor={colors[currentFont]} style:--clockWeight={clockFontWeights[currentFont]}>
	<Header />
	<Main />
	<div class="temp" style="margin-bottom: 20px;">
		{#each fonts as font, i}
			<button disabled={currentFont==i} on:click={()=>{currentFont=i}} style:background={colors[i]}>{font}</button>
		{/each}
	</div>
	<Footer />
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
	}

	.page {
		font-family: var(--font);
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		background: #1E213F;
	}
</style>
