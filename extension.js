const Main = imports.ui.main;
const Lang = imports.lang;

let oldSlideIn, hideSliderId;

function init() {
}

function enable() {
    Main.overview._controls._thumbnailsBox.actor.hide();
    hideSliderId = Main.overview.connect('showing', Lang.bind(this, function() {
        Main.overview._controls._thumbnailsSlider.actor.hide();
    }))
    Main.overview._controls._thumbnailsSlider.actor.track_hover = false;
    oldSlideIn = Main.overview._controls._thumbnailsSlider.slideIn;
    Main.overview._controls._thumbnailsSlider.slideIn = empty;
}

function disable() {
    Main.overview._controls._thumbnailsSlider.slideIn = oldSlideIn;
    Main.overview.disconnect(hideSliderId);
    Main.overview._controls._thumbnailsSlider.actor.track_hover = true;
}

function empty() {}
