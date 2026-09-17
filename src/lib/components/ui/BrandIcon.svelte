<script lang="ts">
	let { name, size = 24, strokeWidth = 1.8 }: { name: string; size?: number; strokeWidth?: number } = $props();
</script>

<svg class="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
	{#if name === 'choice'}
		<path d="M4 7h16M7 12h10M10 17h4" /><circle cx="7" cy="7" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="12" cy="17" r="2" />
	{:else if name === 'fresh'}
		<path d="M19 4c-7 .2-12.2 3.8-12.2 9.3 0 3 2.1 5.2 5.1 5.2 5.4 0 7.1-6.3 7.1-14.5Z" /><path d="M5 20c1.8-5.2 5.5-8.6 10.7-10.6" />
	{:else if name === 'phone'}
		<path d="M6.7 3.5 9.3 7l-1.8 2.1a15.6 15.6 0 0 0 7.4 7.4l2.1-1.8 3.5 2.6-.8 3.1c-.2.8-1 1.3-1.8 1.2C9.8 20.7 3.3 14.2 2.4 6.1c-.1-.8.4-1.6 1.2-1.8l3.1-.8Z" />
	{:else if name === 'pin'}
		<path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" />
	{:else if name === 'clock'}
		<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
	{:else if name === 'takeaway'}
		<path d="M7 8h10l-1 12H8L7 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2M4 12H2m20 0h-2" />
	{:else if name === 'kebab'}
		<path d="M5 8c3-3.5 11-3.5 14 0l-2 10H7L5 8Z" /><path d="m7 10 10 5M8 6l8 12" />
	{:else if name === 'plate'}
		<ellipse cx="12" cy="13" rx="9" ry="6" /><ellipse cx="12" cy="13" rx="5.5" ry="3" /><path d="M7 5v3M10 4v4M14 4v4M17 5v3" />
	{:else if name === 'burger'}
		<path d="M4 11c.7-4 3.7-6 8-6s7.3 2 8 6H4ZM3 14h18M5 17h14l-1.5 2h-11L5 17Z" /><path d="M7 14.1c1 1.2 2 1.2 3 0 1 1.2 2 1.2 3 0 1 1.2 2 1.2 3 0" />
	{:else if name === 'snack'}
		<path d="M7 7h10l1 13H6L7 7ZM9 7l1-3h4l1 3" /><path d="m9 11 1.5 6M15 11l-1.5 6" />
	{:else if name === 'sauce'}
		<path d="M8 4h8l-1 4H9L8 4ZM9 8h6l2 11H7L9 8Z" /><path d="M10 13h4" />
	{:else if name === 'facebook'}
		<path d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.7 1.8-1.7H18V3.8c-.4-.1-1.7-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8V10H7.5v3h3v8" />
	{:else if name === 'arrow'}
		<path d="M5 12h14M14 7l5 5-5 5" />
	{/if}
</svg>

<style>
	.icon { display: block; flex: none; }
</style>
