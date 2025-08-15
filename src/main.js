import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import 'virtual:uno.css'
import uView from "uview-ui";
import Vue from 'vue'

Vue.use(uView);

export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
