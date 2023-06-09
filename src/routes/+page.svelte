<script>
	export let data;

	console.log(data);
</script>

<h1 class="text-4xl font-bold py-6">Welcome to SvelteKit</h1>
<div class="space-x-4">
	<button class="text-blue-700 underline underline-offset-4">index</button>
	<a href="/about" class="hover:text-blue-700">about</a>
</div>

{#await data then}
	{#if data.error}
		<div class="my-2">
			<p class="text-red-700">错误代码：{data.error.code}</p>
			<p class="text-green-700">错误消息：{data.error.message}</p>
		</div>
	{:else if data.data}
		{#each data.data as item}
			<div class="my-2 p-3 border rounded-lg">
				<p class="text-gray-700">id：{item.id}</p>
				<p class="text-gray-700">title：{item.title}</p>
				<p class="text-gray-700">content：{item.content}</p>
				<p class="text-gray-700">published：{item.published}</p>
				<p class="text-gray-700">authorId：{item.authorId}</p>
			</div>
		{/each}
	{/if}
{/await}
