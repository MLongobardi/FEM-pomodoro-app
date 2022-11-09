<main>
	<div class="test">
		<div class="testing">
		<div class="temp">
			<div>
				<span class="time">17:59</span>
				<span>PAUSE</span>
			</div>
		</div>
		</div>
	</div>
</main>

<style>
	main {
		flex-grow: 1;
		display: flex;
		align-items: center;
	}

	.test {
		border-radius: 50%;
		background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
		box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;
		padding: 22px;
	}

	.testing {
		padding: 13.5px;
		background: #161932;
		border-radius: 50%;
	}

	.temp {
		--min-size: 300;
		--max-size: 410;
		width: var(--clampedSize);
		height: var(--clampedSize);
		background: #f87070;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	.temp div {
		width: 94%;
		height: 94%;
		border-radius: 50%;
		background: #161932;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
	}

	.time {
		--min-size: 80;
		--max-size: 100;
		font-size: var(--clampedSize);
		font-weight: 700;
		letter-spacing: -0.05em;
		padding-right: 0.05em; /*prevents letter-spacing from messing up centering*/
	}

	.time + span {
		letter-spacing: 0.9375em;
		padding-left: 0.9375em;
		--min-size: 14;
		--max-size: 16;
		font-size: var(--clampedSize);
		text-align: center;
	}
</style>
