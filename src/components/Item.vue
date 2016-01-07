<template>
<div class="steam-list" v-for="item in items">
	<section class="steam-list-item">
		<div class="man-picture">
			<img :src="item.member.avatar_mini">
		</div>
		<div class="summary">
			<div class="title">{{item.title}}</div>
			<ul class="list-inline tags">
				<li class="tag">{{item.node.title}}</li>
			</ul>
			<ul class="list-inline author">
				<li class="author">{{item.member.username}}</li>
				<span class="split">·</span>
				<li class="last-modify-time">{{item.last_modified}}</li>
				<!-- <span class="split">·</span>
				<li class="views">1500</li>
				<span class="split">·</span>
				<li class="answers">20</li> -->
			</ul>
		</div>
	</section>
</div>
</template>
<script>
	export default {
		name:"Item",

		data(){
			return {
				items:{}
			}
		}
	}
</script>
<style>
	.steam-list{
		margin-top: 10px;
	}
	.man-picture{
		padding: 5px;
		margin-right: 10px;
	}
	.list-inline{
		margin: 0;
		display: inline-block;
	}
	.list-inline>li{
		display: inline-block;
	}
	.steam-list-item{
		width: 100%;
		display: inline-flex;
		border-bottom: 1px solid #333;
		padding: 5px 0;
	}

</style>
