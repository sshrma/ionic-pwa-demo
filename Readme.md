Demo PWA App using ionic & angular
===================================

### Installation & running PWA ###
```
1) Clone GIT repository and go to the folder cloned
2) Add custom code to custom service workers available at "src/app/sw/"
3) Configure caching strategies in the file "ngsw-config.json"
4) Get valid SSL certs for your domain and replace the key and cert files in the folder "apache/certificate/" with the same names as the respective files there
5) Create firebase hosting project & replace the values of config information in the file "firebase-messaging-sw.js"
6) Local setup,
  - Local setup is fine only for development for PWAS testing you need a live environment.
  - Open PWA app in browser at http://localhost:14080/
  - If SSL redirects is configured then it will throw SSL cert error so, in order to fully test the PWA features like Add To Home Screen, you need to deploy it in the live environment with a FQDN and valid SSL for that.
7) Production or Staging setup, 
  - In file ".env", change the values of environment vars "HOST_HTTP_PORT=80" & "HOST_HTTPS_PORT=443"
  - In file "demo.apache.conf", change the port from "14443" to "443"
  - App is accessible at http://<YOUR_DOMAIN>/
8) Build app in production mode to enable service workers
$>npx ng build --prod 
OR
$>ionic build --prod
9) Start dockerized apache to serve the PWA app by following command,
$> docker-compose up -d 
10) Go to developer tools > Application > service worker tab to view the services workers running
11) Open the side menu and see the buttons on bottom to check features like Add To Home Screen

```

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
- For security reasons, as others have written as well, browsers don't allow you to manually trigger the install event. However, there is a way you can test it yourself. Go to chrome://flags and search / enable "Bypass user engagement checks"
- App must fullfill the criteria mentioned in the separate link below in order to trigger event handling the App Install.

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
- https://dev.to/oskarlarsson/designing-native-like-progressive-web-apps-for-ios-510o
- https://web.dev/customize-install/#criteria

```
