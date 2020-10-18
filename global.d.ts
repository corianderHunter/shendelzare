declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV:
      | "weapp"
      | "swan"
      | "alipay"
      | "h5"
      | "rn"
      | "tt"
      | "quickapp"
      | "qq"
      | "jd";
    [key: string]: any;
  };
};

// promisify wx api
declare const AsyncMethods: [
  "canvasGetImageData",
  "canvasPutImageData",
  "canvasToTempFilePath",
  "setEnableDebug",
  "startAccelerometer",
  "stopAccelerometer",
  "getBatteryInfo",
  "getClipboardData",
  "setClipboardData",
  "startCompass",
  "stopCompass",
  "addPhoneContact",
  "startGyroscope",
  "stopGyroscope",
  "startBeaconDiscovery",
  "stopBeaconDiscovery",
  "getBeacons",
  "startLocalServiceDiscovery",
  "stopLocalServiceDiscovery",
  "startDeviceMotionListening",
  "stopDeviceMotionListening",
  "getNetworkType",
  "makePhoneCall",
  "scanCode",
  "getSystemInfo",
  "vibrateShort",
  "vibrateLong",
  "getExtConfig",
  "chooseLocation",
  "getLocation",
  "openLocation",
  "chooseMessageFile",
  "loadFontFace",
  "chooseImage",
  "previewImage",
  "getImageInfo",
  "saveImageToPhotosAlbum",
  "compressImage",
  "chooseVideo",
  "saveVideoToPhotosAlbum",
  "downloadFile",
  "request",
  "connectSocket",
  "closeSocket",
  "sendSocketMessage",
  "uploadFile",
  "login",
  "checkSession",
  "chooseAddress",
  "authorize",
  "addCard",
  "openCard",
  "chooseInvoice",
  "chooseInvoiceTitle",
  "getUserInfo",
  "requestPayment",
  "getWeRunData",
  "showModal",
  "showToast",
  "hideToast",
  "showLoading",
  "hideLoading",
  "showActionSheet",
  "pageScrollTo",
  "startPullDownRefresh",
  "stopPullDownRefresh",
  "setBackgroundColor",
  "setBackgroundTextStyle",
  "setTabBarBadge",
  "removeTabBarBadge",
  "showTabBarRedDot",
  "hideTabBarRedDot",
  "showTabBar",
  "hideTabBar",
  "setTabBarStyle",
  "setTabBarItem",
  "setTopBarText",
  "saveFile",
  "openDocument",
  "getSavedFileList",
  "getSavedFileInfo",
  "removeSavedFile",
  "getFileInfo",
  "getStorage",
  "setStorage",
  "removeStorage",
  "clearStorage",
  "getStorageInfo",
  "closeBLEConnection",
  "closeBluetoothAdapter",
  "createBLEConnection",
  "getBLEDeviceCharacteristics",
  "getBLEDeviceServices",
  "getBluetoothAdapterState",
  "getBluetoothDevices",
  "getConnectedBluetoothDevices",
  "notifyBLECharacteristicValueChange",
  "openBluetoothAdapter",
  "readBLECharacteristicValue",
  "startBluetoothDevicesDiscovery",
  "stopBluetoothDevicesDiscovery",
  "writeBLECharacteristicValue",
  "getHCEState",
  "sendHCEMessage",
  "startHCE",
  "stopHCE",
  "getScreenBrightness",
  "setKeepScreenOn",
  "setScreenBrightness",
  "connectWifi",
  "getConnectedWifi",
  "getWifiList",
  "setWifiList",
  "startWifi",
  "stopWifi",
  "getBackgroundAudioPlayerState",
  "playBackgroundAudio",
  "pauseBackgroundAudio",
  "seekBackgroundAudio",
  "stopBackgroundAudio",
  "getAvailableAudioSources",
  "startRecord",
  "stopRecord",
  "setInnerAudioOption",
  "playVoice",
  "pauseVoice",
  "stopVoice",
  "getSetting",
  "openSetting",
  "getShareInfo",
  "hideShareMenu",
  "showShareMenu",
  "updateShareMenu",
  "checkIsSoterEnrolledInDevice",
  "checkIsSupportSoterAuthentication",
  "startSoterAuthentication",
  "navigateBackMiniProgram",
  "navigateToMiniProgram",
  "setNavigationBarTitle",
  "showNavigationBarLoading",
  "hideNavigationBarLoading",
  "setNavigationBarColor",
  "redirectTo",
  "reLaunch",
  "navigateTo",
  "switchTab",
  "navigateBack"
];

type AsyncMethodsType = typeof AsyncMethods[number];

type PromisifyApi<T,K extends keyof T> = {
  [P in keyof Pick<T, K>]: T[P];
};

type Wxp = PromisifyApi<WechatMiniprogram.Wx,AsyncMethodsType>;
