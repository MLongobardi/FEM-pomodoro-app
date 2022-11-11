<script>
	let progress = 22;
	let width;
</script>

<main>
	<div class="true" bind:clientWidth={width}>
		<div class="darker">
			<svg>
				{#key width} <!--recalculates radius on resizing-->
					<circle style:--progress={progress} />
				{/key}
			</svg>
			<div class="text">
				<span class="time">17:59</span>
				<span>PAUSE</span>
			</div>
		</div>
	</div>
	
</main>
<label style="color: white;">
	progress:
	<input type="number" bind:value={progress} min=0 max=100>
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
		transform: rotate(90deg) scaleX(-1);
		width: 100%;
		height: 100%;
	}
	svg circle {
		--strokeWidth: 3.3%;
		--radius: calc(50% - var(--strokeWidth) / 2);
		--circumference: calc(2 * 3.1415 * var(--radius));
		cx: 50%;
		cy: 50%;
		r: var(--radius);
		fill: none;
		stroke: var(--mainColor);
		stroke-width: var(--strokeWidth);
		stroke-linecap: round;
		stroke-dasharray: var(--circumference);
		stroke-dashoffset: calc(var(--circumference) * (100 - var(--progress) / 100));
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
		letter-spacing: -0.05em; /*This is for Kumbh, Roboto should have none and Space -10px*/
		padding-right: 0.05em; /*prevents letter-spacing from messing up centering*/
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
