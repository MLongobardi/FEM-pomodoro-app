<script>
    import { mainStore } from "$scripts/store.js"
</script>

<!--there's already a close button, so it should be fine to ignore this-->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="overlay" on:click|self={mainStore.toggleSettings}>
    <div class="settings-box">
        <button on:click={mainStore.toggleSettings}>Close</button><br>
        temptemptemp<br>
        temptemptemp<br>
        temptemptemp<br>
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

    .settings-box {
        background: white;
    }
</style>