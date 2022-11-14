<script>
	import { mainStore } from "$scripts/store.js";
</script>

<header>
	<h1>pomodoro</h1>
	<div>
		<span class="slider" style:--offset={$mainStore.modeIndex} style:--color={$mainStore.activeColor}/>
		{#each $mainStore.modes as mode}
			<button class:active={$mainStore.activeMode == mode} on:click={()=>{mainStore.setMode(mode)}}>
				{mode}
			</button>
		{/each}
	</div>
</header>

<style>
	header {
		z-index: 1; /*stay over main's box shadow*/
	}

	h1 {
		font-family: "KumbhSans";
		color: #d7e0ff;
		text-align: center;
		margin: 40px 0;
	}
	
	div {
		--min-size: 313;
		--max-size: 360;
		--padding: 8px;
		border-radius: 31.5px;
		background: #161932;
		padding: var(--padding);
		width: var(--clampedSize);
		position: relative;
		z-index: 1;
	}

	.slider {
		--width: calc((100% - 2 * var(--padding)) / 3);
		position: absolute;
		background: var(--color);
		height: calc(100% - 2 * var(--padding));
		left: calc(var(--padding) + var(--offset) * var(--width));
		border-radius: 26.5px;
		width: var(--width);
		transition: left 0.3s;
		z-index: -1;
	}

	button {
		--min-size: 12;
		--max-size: 14;
		width: 33.33%;
		font-size: var(--clampedSize);
		background: transparent;
		color: #D7E0FF;
		border: none;
		padding: 18px 0;
		font-weight: 700;
		opacity: 0.4;
		transition: opacity 0.3s, color 0.4s;
	}
	button.active {
		color: #1E213F;
	}
	button.active, button:hover {
		opacity: 1;
	}
</style>
