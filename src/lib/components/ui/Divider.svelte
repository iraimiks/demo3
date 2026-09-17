<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<hr class="divider {className}" />

<style>
	.divider {
		margin: 0;
		border: none;
		border-top: 1px solid var(--color-border);
	}
</style>