<script lang="ts">
	import type { FullAutoFill } from 'svelte/elements';

	let {
		value = $bindable(''),
		id,
		name,
		type = 'text',
		placeholder = '',
		required = false,
		autocomplete,
		class: className = ''
	}: {
		value?: string;
		id?: string;
		name?: string;
		type?: string;
		placeholder?: string;
		required?: boolean;
		autocomplete?: FullAutoFill | null;
		class?: string;
	} = $props();
</script>

<input
	class="input {className}"
	{id}
	{name}
	{type}
	{value}
	{placeholder}
	{required}
	{autocomplete}
	oninput={(e) => (value = e.currentTarget.value)}
/>

<style>
	.input {
		width: 100%;
		min-height: 2.75rem;
		padding: 0.625rem 0.875rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		background-color: var(--color-surface);
		color: var(--color-text);
		font-size: 1rem;
		font-family: var(--font-sans);
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	.input::placeholder {
		color: var(--color-text-muted);
	}

	.input:focus {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 3px var(--color-focus-ring);
	}
</style>