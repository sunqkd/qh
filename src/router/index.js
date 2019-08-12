import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import guest from '@/components/guest'
import industry from '@/components/industry'
import media from '@/components/media'
Vue.use(Router)

export default new Router({
	// mode: 'history',
	routes: [
		{ // 主页
			path: '/',
			name: 'homePage',
			component: homePage
		},
		{ // 嘉宾评委报名
			path:'/guest',
			name: 'guest',
			component: guest
		},
		{ // 前海产业对接
			path:'/industry',
			name: 'industry',
			component: industry
		},
		{ // 媒体商务
			path:'/media',
			name: 'media',
			component: media
		}
	]
})
