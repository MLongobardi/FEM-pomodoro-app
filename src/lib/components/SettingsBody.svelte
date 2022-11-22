<script>
	import { mainStore } from "$scripts/store.js";
	import { FancyInputNumber, FancyRadio } from "$comps";

	let hack; //managed to do almost everything with pure css, but I had to use Svelte to change the text alignment of the last two h3 tags

	function parseData(e) {
		const temp = new FormData(e.target);
		const data = {};
		for (let [key, value] of temp) {
			if (key == "times") value = parseInt(value);
			if (data[key]) {
				if (!Array.isArray(data[key])) data[key] = [data[key]].concat(value);
				else data[key] = data[key].concat(value);
			} else {
				data[key] = value;
			}
		}

		applyChanges(data);
		mainStore.toggleSettings();
	}

	function applyChanges(data) {
		// {times: [25, 5, 15], font: "KumbhSans", color: "#F87070"}
		if ($mainStore.times !== data.times) {
			mainStore.setTimes(data.times);
		}

		if ($mainStore.activeFont !== data.font) {
			mainStore.setFont(data.font);
		}

		if ($mainStore.activeColor !== data.color) {
			mainStore.setColor(data.color);
		}

		mainStore.setMode($mainStore.activeMode);
	}
</script>

<div class="settings-body">
	<form on:submit|preventDefault={parseData}>
		<fieldset class="time-section">
			<legend>TIME (MINUTES)</legend>
			<h3>TIME (MINUTES)</h3>
			<span class="take-up-row" />
			{#each $mainStore.modes as mode, i}
				<FancyInputNumber {mode} value={$mainStore.times[i]} />
			{/each}
		</fieldset>

		<fieldset class="font-section">
			<legend>FONT</legend>
			<h3 bind:clientWidth={hack} style:text-align={hack > 168 ? "center" : "start"}>FONT</h3>
			<div class="radio-list">
				{#each $mainStore.fonts as font}
					<FancyRadio name="font" value={font} checked={font == $mainStore.activeFont}
						>Aa</FancyRadio
					>
				{/each}
			</div>
		</fieldset>

		<fieldset class="color-section">
			<legend>COLOR</legend>
			<h3 style:text-align={hack > 168 ? "center" : "start"}>COLOR</h3>
			<div class="radio-list">
				{#each $mainStore.colors as color}
					<FancyRadio name="color" value={color} checked={color == $mainStore.activeColor} />
				{/each}
			</div>
		</fieldset>

		<input type="submit" value="Apply" />
	</form>
</div>

<style>
	.settings-body {
		padding: 0 var(--padding); /*from parent*/
		padding-bottom: 0;
		text-align: center;
	}

	fieldset {
		border: none;
		padding: 24px 0;
		margin: 0;
	}
	legend {
		/*hidden except for screen readers*/
		position: absolute !important;
		height: 1px;
		width: 1px;
		overflow: hidden;
		clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
		clip: rect(1px, 1px, 1px, 1px);
		white-space: nowrap; /* added line */
	}

	h3 {
		--min-size: 11;
		--max-size: 13;
		font-size: var(--clampedSize);
		letter-spacing: 0.38461em;
		padding-left: 0.38461em;
		margin: 0;
	}

	.time-section {
		--cols: 3;
		--min-item-width: 140px;
		--gap: max(5px, (100% - 3 * var(--min-item-width)) / (var(--cols) - 1));
		--magic-number: clamp(
			100% / var(--cols) - var(--gap),
			(var(--min-item-width) * var(--cols) - var(--gap) * 2 - 100%) * 999,
			100%
		); /*the middle argument is either a negative or a positive value that is multiplied by 999, forcing clamp's result to be either the first or the last argument*/

		display: grid;
		column-gap: var(--gap);
		row-gap: 8px;
		grid-template-columns: repeat(auto-fit, minmax(var(--magic-number), 1fr));
	}
	.time-section h3 {
		white-space: nowrap;
		text-align: center;
	}
	.time-section .take-up-row {
		grid-column: 1 / -1;
		--min-size: 0;
		--max-size: 10;
		--min-screen: 657;
		--max-screen: 658; /*screen size at which grid collapses*/
		display: inline-block;
		height: var(--clampedSize);
	}

	.font-section {
		border-top: solid 1px #e3e1e1;
		border-bottom: solid 1px #e3e1e1;
	}
	.font-section,
	.color-section {
		display: grid;
		--width: 168px; /*width of radio-list*/
		grid-template-columns: repeat(auto-fit, minmax(var(--width), 1fr));
		column-gap: calc(100% - 2 * var(--width));
		row-gap: 18px;
		align-items: center;
	}

	input[type="submit"] {
		position: relative;
		top: 26.5px;
		margin-top: -26.5px;
		width: 140px;
		border: none;
		border-radius: 26.5px;
		background: #f87070;
		color: white;
		font-weight: 700;
		line-height: 20px;
		padding: 16.5px 47px;
		cursor: pointer;
	}
	input[type="submit"]:hover,
	input[type="submit"]:active {
		background: #f98d8d;
	}
</style>
