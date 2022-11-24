<script>
	import { mainStore } from "$scripts/store.js";
</script>

<footer>
	<button
		on:click={() => {
			mainStore.toggleSettings();
			mainStore.pauseTimer();
		}}
	>
		<img alt="" src="/images/icon-settings-light.svg" />
	</button>
	<span class="spacer" />
	<!--prettier-ignore-->
	<p class="attribution">
		Challenge by <a	href="https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G" target="_blank" rel="noreferrer">Frontend Mentor</a>.
		Coded by <a href="https://github.com/MLongobardi/FEM-pomodoro-app" target="_blank" rel="noreferrer">Mlongobardi</a>.
	</p>
</footer>

<style>
	footer {
		flex-grow: 3;
		max-height: 131px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}
	button img {
		opacity: 0.5;
		transform: rotate(0);
		transition: transform 0.5s;
	}
	button:hover img {
		opacity: 1;
		transform: rotate(180deg);
	}

	.spacer {
		flex-basis: 32px;
		flex-grow: 1;
	}

	.attribution {
		font-family: "KumbhSans";
		margin: 0;
		margin-bottom: 4px;
		color: white;
		font-size: 0.7em;
	}
	.attribution a {
		color: hsl(228, 45%, 44%);
	}
</style>
