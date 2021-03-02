Demo PWA App using ionic & angular
===================================

### Generate splash & icon assets ###
```
1)Create a new directory:
$>mkdir -p assets/generated

2) Change to that directory:
$>cd assets/generated

3) Run command to auto generate all the assets after changing "logo.png" image and the below command matching your needs:
$>npx pwa-asset-generator ../logo.png -b "linear-gradient(to right, #fa709a 0%, #fee140 100%)"

4) It will print some html code on terminal which needs to be added to the index.html and the menifest file manually.
(Do not forget to change the relative path references to the images.)

```

### Import Notes: ###
```
- Always add 'npx' before runing any 'ng' commands otherwise it will fail.

```

### References:
```
- https://ionicthemes.com/tutorials/about/the-complete-guide-to-progressive-web-apps-with-ionic4
- https://github.com/angular/angularfire/blob/master/docs/messaging/messaging.md#setting-up-the-firebase-messaging-service-worker
- https://itnext.io/build-a-production-ready-pwa-with-angular-and-firebase-8f2a69824fcc
- https://dockyard.com/blog/2017/09/27/encouraging-pwa-installation-on-ios
- https://www.netguru.com/codestories/few-tips-that-will-make-your-pwa-on-ios-feel-like-native
- https://github.com/onderceylan/pwa-asset-generator
- https://web.dev/install-criteria/
- 
```
