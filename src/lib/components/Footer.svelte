<script>
	import { mainStore } from "$scripts/store.js";
</script>

<footer>
	<button on:click={mainStore.toggleSettings}> <!--a11y-->
		<img alt="" src="/images/icon-settings.svg" />
	</button>
	<p class="attribution">
		Challenge by <a href="https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G" target="_blank" rel="noreferrer">Frontend Mentor</a>.
		Coded by <a href="https://github.com/MLongobardi/FEM-pomodoro-app" target="_blank" rel="noreferrer">Mlongobardi</a>.
	</p>
</footer>

<style>
	footer {
		text-align: center;
	}

	button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}
	button img {
		transform: rotate(0);
		transition: transform 0.5s;
	}
	button:hover img{
		transform: rotate(180deg);
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