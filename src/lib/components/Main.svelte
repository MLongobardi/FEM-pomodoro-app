<script>
	import { mainStore } from "$scripts/store.js";

	const timeCSS = [
		"letter-spacing: -0.05em; padding-right: 0.05em",
		"letter-spacing: normal;",
		"letter-spacing: -10px; padding-right: 10px;",
	]; //use fontIndex as index

	let width;

	function addZero(n) {
		if (n < 10) {
			return "0" + n;
		}
		return n;
	}
</script>

<main>
	<div class="clock" bind:clientWidth={width} style:--mainColor={$mainStore.activeColor}>
		<div class="darker-background">
			<svg>
				{#key width} <!--recalculates radius on resizing-->
					<circle style:--progress={$mainStore.timer.progress || 0} />
				{/key}
			</svg>
			<div class="inner">
				<span class="time" style:--clockWeight={$mainStore.fontIndex == 2 ? 400 : 700} style={timeCSS[$mainStore.fontIndex]}>
					{addZero($mainStore.timer.minutes)}:{addZero($mainStore.timer.seconds)}
				</span>
				
				{#if $mainStore.timer.end}
					<button on:click={()=>{mainStore.setMode($mainStore.activeMode)}}>RESTART</button>
				{:else if $mainStore.timer.running}
					<button on:click={mainStore.pauseTimer}>PAUSE</button>
				{:else}
					<button on:click={mainStore.startTimer}>START</button>
				{/if}
			</div>
		</div>
	</div>
</main>

<style>
	main {
		flex-grow: 100;
		max-height: 663px;
		display: flex;
		align-items: center;
	}

	.clock {
		--min-size: 300;
		--max-size: 410;
		border-radius: 50%;
		width: var(--clampedSize);
		height: var(--clampedSize);
		box-sizing: border-box;
		padding: 5.36667%;
		background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
		box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;
	}

	.darker-background {
		background: #161932;
		border-radius: 100%;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 3.3%;
		position: relative;
	}

	svg {
		box-sizing: border-box;
		transform: rotate(-90deg);
		width: 100%;
		height: 100%;
	}
	svg circle {
		--strokeWidth: 3.3%;
		--radius: 48.35%; /*calc(50% - var(--strokeWidth) / 2);*/
		--circumference: 303.78305%; /*calc(2 * 3.1415 * var(--radius));*/
		cx: 50%;
		cy: 50%;
		r: var(--radius);
		fill: none;
		stroke: var(--mainColor);
		stroke-width: var(--strokeWidth);
		stroke-linecap: round;
		stroke-dasharray: var(--circumference);
		stroke-dashoffset: calc(var(--circumference) * (var(--progress) / 100));
		transition: stroke-dashoffset 0.3s;
	}

	.inner {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #d7e0ff;
	}

	.time {
		--min-size: 80;
		--max-size: 100;
		font-size: var(--clampedSize);
		font-weight: var(--clockWeight);
	}

	.inner button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		letter-spacing: 0.9375em;
		padding-left: 0.9375em;
		--min-size: 14;
		--max-size: 16;
		font-size: var(--clampedSize);
		color: #d7e0ff;
	}
	.inner button:hover, .inner button:active {
		color: var(--mainColor);
	}
</style>
