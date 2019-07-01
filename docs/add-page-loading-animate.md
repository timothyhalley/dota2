Add loading animation for the first screen
====


## demand

> In order to alleviate the user's first visit, the JS is too large, causing the user to wait for the white screen for too long and the user experience is not good, and an optimization effect is performed.



## Implementation plan

1. Place the animation loading dom element inside #app, and automatically remove all elements under #app at the beginning of the Vue life cycle.
2. Place the animation loading dom element under the body. At the beginning of the Vue life cycle, App.vue (created, mounted) calls removeLoadingAnimate(#id, timeout) under `@/utils/utll` to remove the loading animation.

last step:
Insert the style into the `public/index.html` file ``head></head>` is best written as inline `<style> animated style</style>`



----

There are currently two styles available, both in the `public/loading` folder. And pro has used a set of loading animation scheme by default, you can directly refer to `public/index.html`

##Write at the end

Currently pro has a page overflow showing the browser scroll bar, the page will shake the question.

You are welcome to provide solutions and implementation demos. If possible, please use pro to modify it if possible, and also welcome to PR directly to pro's warehouse.