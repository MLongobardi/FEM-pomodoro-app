<script>
	import { mainStore } from "$scripts/store.js";
</script>

<footer>
	<a href on:click={mainStore.toggleSettings}> <!--a11y-->
		<img alt="" src="/images/icon-settings.svg" />
	</a>
</footer>

<style>
	footer {
		margin-bottom: 48px;
	}
</style>