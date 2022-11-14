<script>
	import { mainStore } from "$scripts/store.js";

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
            mainStore.setTimes(data.times)
        }
        
        if ($mainStore.activeFont !== data.font) {
            mainStore.setFont(data.font)
        }
        
        if ($mainStore.activeColor !== data.color) {
            mainStore.setColor(data.color)
        }
    }
</script>

<div class="settings-body">
	<form on:submit|preventDefault={parseData}>
		<fieldset class="time-section">
			<legend>TIME (MINUTES)</legend>
			{#each $mainStore.modes as mode, i}
				<label
					>{mode}<input type="number" name="times" min="1" max="99" value={$mainStore.times[i]} />
				</label>
			{/each}
		</fieldset>

		<fieldset class="font-section">
			<legend>FONT</legend>
			{#each $mainStore.fonts as font}
				<label style="font-family: {font}"
					>Aa<input type="radio" name="font" value={font} checked={font == $mainStore.activeFont} />
				</label>
			{/each}
		</fieldset>

		<fieldset class="color-section">
			<legend>COLOR</legend>
			{#each $mainStore.colors as color}
				<label style="background: {color}"
					>X<input type="radio" name="color" value={color} checked={color == $mainStore.activeColor} />
				</label>
			{/each}
		</fieldset>

		<input type="submit" value="Apply" />
	</form>
	<!--<div class="test">test</div>-->
</div>

<style>
	.settings-body {
		padding: 0 var(--padding);
		padding-bottom: 0;
		text-align: center;
	}

	fieldset {
		border: none;
		padding: 20px 0;
		margin: 0;
	}
	legend {
		text-align: center;
	}

	input[type="radio"] {
		width: 0;
	}

	.font-section,
	.color-section {
		text-align: center;
	}
	:is(.font-section, .color-section) label {
		display: inline-block;
		font-size: 15px;
		font-weight: 700;
		border-radius: 50%;
		width: 40px;
		line-height: 40px;
		text-align: center;
		background: #eff1fa;
	}
	.font-section label:has(input:checked) {
		background: #161932;
		color: white;
	}
	.color-section label {
		color: transparent;
	}
	.color-section label:has(input:checked) {
		color: #161932;
	}

	/*
	.test {
		background: red;
		width: var(--clampedSize);
		margin-left: calc(-1 * var(--padding));
	}
    */
</style>
