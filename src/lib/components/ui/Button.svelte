<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className = '',
		variant = 'primary',
		size = 'md',
		href,
		type = 'button',
		disabled = false,
		onclick
	}: {
		children: Snippet;
		class?: string;
		variant?: 'primary' | 'secondary' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		onclick?: () => void;
	} = $props();
</script>

{#if href}
	<a
		{href}
		{onclick}
		class="button button-{variant} button-{size} {className}"
		>{@render children()}</a
	>
{:else}
	<button
		{type}
		{disabled}
		{onclick}
		class="button button-{variant} button-{size} {className}"
	>
		{@render children()}
	</button>
{/if}

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		border-radius: var(--radius-full);
		font-weight: 600;
		line-height: 1;
		cursor: pointer;
		text-decoration: none;
		border: 1px solid transparent;
		transition:
			background-color 0.15s ease,
			color 0.15s ease,
			border-color 0.15s ease;
	}

	.button:focus-visible {
		outline: 2px solid var(--color-focus-ring);
		outline-offset: 2px;
	}

	.button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.button-sm {
		min-height: 2.5rem;
		padding: 0.625rem 1.25rem;
		font-size: 0.875rem;
	}

	.button-md {
		min-height: 2.75rem;
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
	}

	.button-lg {
		min-height: 3.25rem;
		padding: 0.875rem 1.75rem;
		font-size: 1.125rem;
	}

	.button-primary {
		background-color: var(--color-primary);
		color: var(--color-text-inverse);
	}

	.button-primary:hover {
		background-color: var(--color-primary-hover);
	}

	.button-secondary {
		background-color: transparent;
		color: var(--color-primary);
		border-color: var(--color-primary);
	}

	.button-secondary:hover {
		background-color: var(--color-primary);
		color: var(--color-text-inverse);
	}

	.button-ghost {
		background-color: transparent;
		color: var(--color-text-secondary);
	}

	.button-ghost:hover {
		color: var(--color-primary);
		background-color: var(--color-surface-muted);
	}
</style>