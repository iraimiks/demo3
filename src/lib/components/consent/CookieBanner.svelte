<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { getConsent, setConsent } from '$lib/consent';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	let visible = $state(false);

	if (typeof window !== 'undefined') {
		visible = getConsent() === null;
	}

	function accept() {
		setConsent({ analytics: true, preferences: false });
		visible = false;
	}

	function decline() {
		setConsent({ analytics: false, preferences: false });
		visible = false;
	}
</script>

{#if visible}
	<div class="cookie-banner" role="dialog" aria-label={m.cookieBannerTitle()}>
		<Container>
			<div class="cookie-banner-inner">
				<p class="cookie-text">{m.cookieBannerText()}</p>
				<div class="cookie-actions">
					<Button onclick={decline} variant="ghost">{m.cookieBannerDecline()}</Button>
					<Button onclick={accept}>{m.cookieBannerAccept()}</Button>
				</div>
			</div>
		</Container>
	</div>
{/if}

<style>
	.cookie-banner {
		position: fixed;
		inset-inline: 0;
		bottom: 0;
		z-index: 50;
		background-color: var(--color-surface);
		border-top: 1px solid var(--color-border);
		box-shadow: var(--shadow-md);
	}

	.cookie-banner-inner {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.25rem 0;
	}

	.cookie-text {
		margin: 0;
		color: var(--color-text-secondary);
	}

	.cookie-actions {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	@media (min-width: 640px) {
		.cookie-banner-inner {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			gap: 2rem;
		}

		.cookie-actions {
			flex-direction: row;
			flex-shrink: 0;
		}
	}
</style>