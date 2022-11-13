import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hm.hustmediapro',
  appName: 'HustMedia',
  webDir: 'dist',
  bundledWebRuntime: false ,
  "server": {
    "allowNavigation": [
      "localhost",
      "hust.media" , "*.hust.media"
    ]
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      // layoutName: "launch_screen",
      // useDialog: true,
    },
  },
};

export default config;
