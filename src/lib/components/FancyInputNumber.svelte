<script>
	import { onDestroy } from "svelte";
	export let mode, value;
	let thisInput,
		interval,
		isActive = false,
		upOrDown = "",
		startClickTarget = "";

	function start(e) {
		if (e) startClickTarget = e.target;
		step();
		document.addEventListener("mouseup", end);
		isActive = true;
		interval = setTimeout(() => {
			interval = setInterval(step, 50);
		}, 200);
	}
	function end(e) {
		if (e && e.target != startClickTarget) upOrDown = "";
		startClickTarget = "";
		isActive = false;
		clearInterval(interval);
		document.removeEventListener("mouseup", end);
	}
	function step() {
		if (upOrDown == "up") thisInput.stepUp();
		else if (upOrDown == "down") thisInput.stepDown();
		else {
			console.error("Something went wrong with " + mode + " number input");
			end();
		}
	}

	onDestroy(end);
</script>

<div class="input-holder">
	<label>
		<span class="text">{mode}</span>
		<input bind:this={thisInput} type="number" name="times" min="1" max="99" {value} />
		
		<span class="arrows" on:mousedown={start} on:mouseleave={()=>{if (!isActive) upOrDown=""}}>
			{#each ["up", "down"] as x}
				{@const dark = upOrDown == x ? "-dark" : ""}
				<button
					type="button"
					style:background-image={"url(/images/icon-arrow-" + x + dark + ".svg)"}
					on:mouseenter={() => {upOrDown = x}}
				/>
			{/each}
		</span>
	</label>
</div>

<style>
	.input-holder {
		position: relative;
		--min-size: 40;
		--max-size: 48;
		--inputHeight: var(--clampedSize);
	}

	label {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
	label .text {
		font-size: 12px;
		line-height: 15px;
		opacity: 0.4;
		margin-bottom: 8px;
	}
	input[type="number"] {
		width: var(--min-item-width); /*from parent*/
		box-sizing: border-box;
		background: #eff1fa;
		color: #161932;
		font-size: 14px;
		font-weight: 700;
		border: none;
		outline: none;
		border-radius: 10px;
		height: var(--inputHeight);
		padding: 0 16px;
		-webkit-appearance: textfield;
		-moz-appearance: textfield;
		appearance: textfield;
	}
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}

	.arrows {
		position: absolute;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		width: calc(var(--min-item-width) / 2); /*from parent, width of input*/
	}

	.arrows button {
		border: none;
		outline: none;
		padding: 0;
		cursor: pointer;
		background-color: transparent;
		background-repeat: no-repeat;
		background-position-x: 75%;
		--offset: 15%;
		background-position-y: calc(50% + var(--offset));
		width: 100%;
		height: calc(var(--inputHeight) / 2);
	}
	.arrows button:nth-child(2) {
		background-position-y: calc(50% - var(--offset));
	}
</style>
