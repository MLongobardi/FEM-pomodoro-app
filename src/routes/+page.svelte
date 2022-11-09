<script>
	import { Header, Main, Footer } from "$comps";
</script>

<div class="page">
	<Header />
	<Main />
	<Footer />
</div>

<style>
	:global(body) {
		height: 100vh;
	}

	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		background: #1E213F;
	}
</style>
