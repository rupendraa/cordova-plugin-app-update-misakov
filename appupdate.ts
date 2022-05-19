import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';



/**
 * @name AppUpdatePlay
 * @description
 * This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported.
 * It is a maintained fork from unmaintained ionic-navite plugin called Firebase.
 *
 * @usage
 * ```typescript
 * import { AppUpdate } from 'plugin-interfaces/appupdate';
 *
 *
 * constructor(private appUpdate: AppUpdate) { }
 *
 * ...
 *
 *
 * this.appUpdate.needsUpdate()
 *   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
 *   .catch(error => console.error('Error getting token', error));
 *
 * @interfaces
 * IChannelOptions
 *
 */
//declare let window: any;


@Plugin({
  pluginName: 'AppUpdatePlay',
  plugin: 'cordova-plugin-codeplay-in-app-update',
  pluginRef: 'cordova.plugins.inappupdate',
  repo: 'https://github.com/merbin2012/cordova-plugin-codeplay-in-app-update',
  platforms: ['Android'],
})
@Injectable()
export class AppUpdatePlay extends IonicNativePlugin {
  /**
   * Get the current FCM token.
   * @return {Promise<null | string>} Note that token will be null if it has not been established yet
   */
  // @Cordova()
  // needsUpdate(success, error,force_api_url?,force_api_response_key?): Promise<any> { 
  //   return window.AppUpdate.needsUpdate(success, error,force_api_url,force_api_response_key);
  // }

  @Cordova() 
  isUpdateAvailable(): Promise<any> { 
    return; 
  }  

  @Cordova() 
  update(arg0: any): Promise<any> { 
    return arg0; 
  }  
  //cordova.plugins.inappupdate.update("flexible",function(){},function(){});

}


