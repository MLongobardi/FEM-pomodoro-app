<script>
	export let name = "", //font || color
		value = "",
		checked = false;
</script>

<label class={name} style:--passedStyle={value}
	><input type="radio" {name} {value} {checked} /><slot>
		<!--slot fallback-->
		<span>&#10004;</span>
	</slot></label
>

<style>
	input {
		width: 0;
	}

	label {
		display: inline-block;
		font-size: 15px;
		font-weight: 700;
		font-family: var(--passedStyle);
		border-radius: 50%;
		width: 40px;
		line-height: 40px;
		text-align: center;
		background-color: #eff1fa;
		margin: 0 8px;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}
	label:not(:has(input:checked)):hover,
	label:not(:has(input:checked)):active {
		box-shadow: 0px 0px 0px 5px white, 0px 0px 0px 6px #eff1fa;
	}

	label.font {
		font-family: var(--passedStyle);
	}
	label.font:has(input:checked) {
		background: #161932;
		color: white;
	}

	label.color {
		background: var(--passedStyle);
		color: #161932;
	}
	label.color span {
		display: none;
	}
	label.color:has(input:checked) span {
		display: initial;
	}
</style>
