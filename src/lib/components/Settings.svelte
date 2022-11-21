<script>
	import { mainStore } from "$scripts/store.js";
	import { SettingsHeader, SettingsBody } from "$comps";
</script>

<!--there's already a close button, so it should be fine to ignore this-->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="overlay" on:click|self={mainStore.toggleSettings}>
	<div class="settings-wrapper">
		<SettingsHeader />
		<SettingsBody />
	</div>
</div>

<style>
	.overlay {
		display: flex;
		position: fixed;
		top: 0;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, 0.6);
		width: 100%;
		height: 100%;
		z-index: 2;
	}

	.settings-wrapper {
		--min-size: 328;
		--max-size: 540;
		width: var(--clampedSize);
		background: white;
		--padding: calc(var(--clampedSize) * 7.36 / 100); /*fixed at 7.36% of this size*/
		border-radius: calc(var(--clampedSize) * 4.6 / 100); /*acts weirdly when using percentage*/
		font-family: "KumbhSans";
		color: #161932;
		font-weight: 700;
	}
</style>
