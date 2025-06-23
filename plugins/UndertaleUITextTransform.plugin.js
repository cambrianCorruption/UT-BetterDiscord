/**
 * @name UndertaleUI-TextTransform
 * @author You
 * @version 1.0.0
 * @description Forces ALL CAPS on specific Discord UI text to match Undertale-style.
 */

module.exports = class UndertaleUITextTransform {
  start() {
    this.uppercaseAll();
    this.observer = new MutationObserver(() => this.uppercaseAll());
    this.observer.observe(document.body, { childList: true, subtree: true });
  }

  stop() {
    if (this.observer) this.observer.disconnect();
  }

  uppercaseAll() {
    const selectors = [
      '.username-h_Y3Us',              // usernames in chat
      '.member-2gU6Ar .username-3JLfHz', // member list
      '.name-3Uvkvr',                  // server name
      '.name-28HaxV',                  // channel names
      '.channelName-3KPsGw',           // sidebar channels
      '.title-338goq',                 // home titles
      '.item-2GWPIy',                  // settings sidebar items
      '.tabBar-31WnJk .tab-2j5AEF',    // top nav tabs
    ];

    for (const selector of selectors) {
      document.querySelectorAll(selector).forEach(el => {
        if (el.dataset.undertaleCap !== "true") {
          el.textContent = el.textContent.toUpperCase();
          el.dataset.undertaleCap = "true"; // prevent double processing
        }
      });
    }
  }
};
