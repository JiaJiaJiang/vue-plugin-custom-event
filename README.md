# vue-plugin-custom-event
add scope event support, registed events will be removed automaticly when unmounted

# Usage

Install the plugin to vue app.
 
 ```javascript
import { createApp } from 'vue'
import customEvent from 'vue-plugin-custom-event'
const app = createApp(xxxx);
app.use(customEvent);
 ```
Add events

 ```javascript
mounted(){
	this.customEvent(window, 'keydown', ev => {
		//listen for keydown event on window
		console.log(ev);
	});
	//this event will be removed when this component is unmounted
}
```