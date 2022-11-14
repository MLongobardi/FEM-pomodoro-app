<script>
	import { mainStore } from "$scripts/store.js";
</script>

<footer>
	<a href on:click={mainStore.toggleSettings}> <!--a11y-->
		<img alt="" src="/images/icon-settings.svg" />
	</a>
	<p class="attribution">
		Challenge by <a href="https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G" target="_blank" rel="noreferrer">Frontend Mentor</a>.
		Coded by <a href="https://github.com/MLongobardi/FEM-pomodoro-app" target="_blank" rel="noreferrer">Mlongobardi</a>.
	</p>
</footer>

<style>
	footer {
		text-align: center;
	}

	.attribution {
		font-family: "KumbhSans";
		margin: 36px 0 4px 0;
		color: white;
		font-size: 0.7em;
		text-align: center;
	}
	.attribution a {
		color: hsl(228, 45%, 44%);
	}
</style>