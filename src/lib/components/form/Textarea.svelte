<script lang="ts">
	let {
		value = $bindable(''),
		id,
		name,
		placeholder = '',
		required = false,
		rows = 4,
		class: className = ''
	}: {
		value?: string;
		id?: string;
		name?: string;
		placeholder?: string;
		required?: boolean;
		rows?: number;
		class?: string;
	} = $props();
</script>

<textarea
	class="textarea {className}"
	{id}
	{name}
	{value}
	{placeholder}
	{required}
	{rows}
	oninput={(e) => (value = e.currentTarget.value)}
></textarea>

<style>
	.textarea {
		width: 100%;
		padding: 0.625rem 0.875rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		background-color: var(--color-surface);
		color: var(--color-text);
		font-size: 1rem;
		font-family: var(--font-sans);
		line-height: 1.5;
		resize: vertical;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	.textarea::placeholder {
		color: var(--color-text-muted);
	}

	.textarea:focus {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 3px var(--color-focus-ring);
	}
</style>