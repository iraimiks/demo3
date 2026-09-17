<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		variant = 'default',
		class: className = ''
	}: {
		children: Snippet;
		variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
		class?: string;
	} = $props();
</script>

<span class="badge badge-{variant} {className}">
	{@render children()}
</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius-full);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		line-height: 1.5;
	}

	.badge-default {
		background-color: var(--color-surface-muted);
		color: var(--color-text-secondary);
	}

	.badge-primary {
		background-color: var(--color-primary);
		color: var(--color-text-inverse);
	}

	.badge-success {
		background-color: var(--color-success);
		color: var(--color-text-inverse);
	}

	.badge-warning {
		background-color: var(--color-warning);
		color: var(--color-text-inverse);
	}

	.badge-danger {
		background-color: var(--color-danger);
		color: var(--color-text-inverse);
	}
</style>