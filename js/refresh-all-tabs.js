chrome?.browserAction?.onClicked.addListener(() => {
  try {
    const chromeTabs = chrome?.tabs;
    const chromeWindows = chrome?.windows;
    const bypassCacheSetting = { bypassCache: true };
    const querySettings = { windowId: chromeWindows.WINDOW_ID_CURRENT };
    
    chromeTabs.query(querySettings, tabsList => {
      tabsList.forEach(
        ({ id }) => chromeTabs.reload(id, bypassCacheSetting),
      );
    });
  } catch (e) {
    console.error(e);
  }
});
