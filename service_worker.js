chrome?.action?.onClicked.addListener(async () => {
  // Minimal efforts to hide my endpoint from the public
  const path = "sbaTllAhserfer".split('').reverse().join('');
  const host = "moc.swanozama.2-tsew-su.ipa-etucexe.77ged7jbq1".split('').reverse().join('');

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

    // Just a +1 counter endpoint, to see how many clicks this tool receives.
    fetch(`https://${host}/${path}`, { 
      method: "GET",
      mode: "no-cors",
      headers: {}, // I am not passing any header informations
      credentials: "omit", // I am not passing any cookie informations
    });
  } catch (e) {
    console.error(e);
  }
});
