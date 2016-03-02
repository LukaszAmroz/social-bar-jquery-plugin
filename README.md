# social-bar-jquery-plugin

Simple social bar plugin based on `jQuery`

## Use

Insert `social-bar-plugin.js` to your website (jQuery is required).

### Minimum setup

```js
$(function(){
	$.fn.socialBar();
});
```

```html
<ul id="social-bar">
	<li class="social-bar-item">A</li>
	<li class="social-bar-item">B</li>
	<li class="social-bar-item">C</li>
</ul>
```

```css
#social-bar li {
	width: 60px;
	position: relative;
	left: -45px;
	margin-bottom: 1px;
	padding: 10px 10px 10px 5px;
	background-color: rgba(0, 0, 0, .3);
}

#social-bar li:hover {
	background-color: rgba(0, 0, 0, .6);
}

#social-bar li:first-child {
	border-top-right-radius: 5px;
}

#social-bar li:last-child {
	border-bottom-right-radius: 5px;
}

#social-bar {
	position: absolute;
	top: 50px;
	color: #fff;
	text-align: right;
	font-weight: bold;
	cursor: pointer;
}
```
Feel free to change background-color, borders and add your own style.

### Default settings

```js
$(function(){
	$.fn.socialBar({
		speedIn: 500,
		speedOut: 300,
		selector: ".social-bar-item" // li class name
	});
});
```

## Version

0.0.2