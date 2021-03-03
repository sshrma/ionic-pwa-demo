import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showBtn: any = false;
  deferredPrompt;
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private afMessaging: AngularFireMessaging) {}

  ionViewWillEnter(){
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('Event "beforeinstallprompt" fired');
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later on the button event.
      this.deferredPrompt = e;
    // Update UI by showing a button to notify the user they can add to home screen
      this.showBtn = true;
    });

    // Detect when the PWA was successfully installed
    window.addEventListener('appinstalled', (event) => {
      console.log('PWA app installed');
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('display-mode is standalone');
    }
  }

  public add_to_home(e){

    // hide our user interface that shows our button
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the prompt');
      } else {
        console.log('User dismissed the prompt');
      }
      this.deferredPrompt = null;
    });
  }

  // Track how the PWA was launched
  public getPWADisplayMode() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (document.referrer.startsWith('android-app://')) {
      return 'twa';
    } else if (isStandalone) {
      return 'standalone';
    }
    return 'browser';
  }

  public requestPermission() {
    this.afMessaging.requestPermission
    .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); },
        (error) => { console.error(error); },
      );
  }

  public startListening() {
    this.afMessaging.messages
      .subscribe((message) => { console.log(message); });
  }

  public deleteToken() {
    this.afMessaging.getToken
      .pipe(mergeMapTo(token => this.afMessaging.deleteToken(token)))
      .subscribe(
        (token) => { console.log('Token deleted!'); },
      );
  }
}
