<script>
    import { mainStore } from "$scripts/store.js";
</script>

<div class="settings-header">
	<h2>Settings</h2>
	<button class="close" on:click={mainStore.toggleSettings} />
</div>

<style>
    /*variables are set in .settings-wrapper*/

    .settings-header {
		display: flex;
		justify-content: space-between;
        align-items: center;
		padding: var(--padding);
		border-bottom: solid 1px #e3e1e1;
	}
	.settings-header h2 {
		--min-size: 20;
		--max-size: 28;
		font-size: var(--clampedSize);
        color: #161932;
		margin: 0;
	}
	.close {
		position: relative;
        background: transparent;
        border: none;
        width: 25px;
        height: 25px;
        padding: 0;
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
    .close:hover:before, .close:hover:after {
        background-color: #161932;
    }
	.close:before {
		transform: rotate(45deg);
	}
	.close:after {
		transform: rotate(-45deg);
	}
</style>