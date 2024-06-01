export default {
	install(app, options) {
		app.mixin({
			methods: {
				customEvent: function (el, eventName, func) {
					if (!this.__customEvents) this.__customEvents = [];
					this.__customEvents.push({ el, eventName, func });
					el.addEventListener(eventName, func);
				}
			},
			unmounted() {
				if (!this.__customEvents) return;
				for (let ev of this.__customEvents) {
					ev.el.removeEventListener(ev.eventName, ev.func);
				}
			},
		})
	}
}