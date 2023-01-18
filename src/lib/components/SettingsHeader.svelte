<script>
	import { mainStore } from "$scripts/store.js";
</script>

<div class="settings-header">
	<h2>Settings</h2>
	<button class="close" on:click={mainStore.toggleSettings} />
</div>

<style>
	.settings-header {
		--min-size: 24;
		--max-size: 29.5;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--clampedSize) var(--padding); /*from parent*/
		border-bottom: solid 1px #e3e1e1;
	}
	.settings-header h2 {
		--min-size: 20;
		--max-size: 28;
		font-size: var(--clampedSize);
		margin: 0;
	}
	.close {
		position: relative;
		background: transparent;
		border: none;
		width: 23px;
		height: 23px;
		padding: 0;
		cursor: pointer;
		transform: scale(2);
	}
	.close:before,
	.close:after {
		position: absolute;
		left: 47%;
		top: 18%;
		content: " ";
		height: 16px;
		width: 2px;
		background-color: #979797;
	}
	.close:hover:before,
	.close:hover:after {
		background-color: #161932;
	}
	.close:before {
		transform: scale(0.5) rotate(45deg);
	}
	.close:after {
		transform: scale(0.5) rotate(-45deg);
	}
</style>
