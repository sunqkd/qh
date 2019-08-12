<template>
	<div class="hello">
		<h1>
			<p>
				{{ $t('navbar.contact') }}
			</p>
		</h1>
		<button @click="change()">切换中英文</button>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	methods:{
		change(){
			let locale = this.$i18n.locale;
			locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
		}
	}
}
</script>
<style lang="scss">

</style>
