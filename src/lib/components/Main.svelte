<script>
	import { mainStore } from "$scripts/store.js";

	const timeCSS = [
		"letter-spacing: -0.05em; padding-right: 0.05em",
		"letter-spacing: normal;",
		"letter-spacing: -10px; padding-right: 10px;",
	]; //use fontIndex as index
	let width;
	let progress = 22;
	$: clockTime = $mainStore.activeTime * (100 - progress) / 100;
	$: minutes = Math.floor(clockTime);
	$: seconds = Math.floor((clockTime - minutes) * 60);
</script>

<main>
	<div class="true" bind:clientWidth={width}>
		<div class="darker">
			<svg>
				{#key width} <!--recalculates radius on resizing-->
					<circle style:--progress={progress || 0} style:--color={$mainStore.activeColor} />
				{/key}
			</svg>
			<div class="text">
				<span class="time" style:--clockWeight={$mainStore.fontIndex == 2 ? 400 : 700} style={timeCSS[$mainStore.fontIndex]}>{minutes < 10 ? "0" : ""}{minutes}:{seconds < 10 ? "0" : ""}{seconds}</span>
				<span>PAUSE</span>
			</div>
		</div>
	</div>
</main>

<label style="color: white; z-index: 1;">
	progress (temp):
	<input type="number" bind:value={progress} min="0" max="100" step={100 / ($mainStore.activeTime * 60)}/>
</label>

<style>
	main {
		flex-grow: 1;
		display: flex;
		align-items: center;
	}

	.true {
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

	.darker {
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
		stroke: var(--color);
		stroke-width: var(--strokeWidth);
		stroke-linecap: round;
		stroke-dasharray: var(--circumference);
		stroke-dashoffset: calc(var(--circumference) * (var(--progress) / 100));
		transition: stroke-dashoffset 0.3s;
	}

	.text {
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

	.time + span {
		letter-spacing: 0.9375em;
		padding-left: 0.9375em;
		--min-size: 14;
		--max-size: 16;
		font-size: var(--clampedSize);
		text-align: center;
	}
</style>
