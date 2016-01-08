<template>
<div class="steam-list" v-for="item in items" v-show="show">
	<section class="steam-list-item"
				v-link="{ name: 'content',params: { id: item.id}}">
		<div class="man-picture">
			<img :src="item.member.avatar_mini">
		</div>
		<div class="summary">
			<div class="title">{{item.title}}</div>
			<ul class="list-inline tags">
				<li class="tag">{{item.node.title}}</li>
				<span class="split">·</span>
			</ul>
			<ul class="list-inline author">
				<li class="author">{{item.member.username}}</li>
				<span class="split">·</span>
				<li class="last-modify-time">{{item.last_modified | getLastTimeStr true}}回复</li>
			</ul>
		</div>
	</section>
</div>
</template>
<script>
	export default {
		name:"Item",

		props:['show'],

		data(){
			return {
				items:Object
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
		padding: 0;
		display: inline-block;
	}
	.steam-list-item{
		width: 100%;
		display: inline-flex;
		border-bottom: 1px solid #eee;
		padding: 5px 0;
	}
	ul.list-inline.author {
	    font-size: 13px;
	    color: #999;
	}

</style>
