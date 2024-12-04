import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page1 {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        return browser.url(`https://the-internet.herokuapp.com/`)
    }

    get ForAbtest () {
        return $('a[href="/abtest"]')
    }

   /**  
    get For () {
        return $('a[href=""]')
    }
        */
    
    get ForAddRemove () {
        return $('a[href="/add_remove_elements/"]')
    }

    get ForBasicAuth () {
        return $('a[href="/basic_auth"]')
    }

    get ForBrokenImages () {
        return $('a[href="/broken_images"]')
    }

    get ForChallengingDOM () {
        return $('a[href="/challenging_dom"]')
    }

    get ForCheckboxes () {
        return $('a[href="/checkboxes"]')
    }

    get ForContextMenu () {
        return $('a[href="/context_menu"]')
    }

    get ForDigestAuth () {
        return $('a[href="/digest_auth"]')
    }

    get ForDisappearingElements () {
        return $('a[href="/disappearing_elements"]')
    }

    get ForDragnDrop () {
        return $('a[href="/drag_and_drop"]')
    }

    get ForDropDown () {
        return $('a[href="/dropdown"]')
    }

    get ForDynamicContent () {
        return $('a[href="/dynamic_content"]')
    }

    get ForDynamicControl () {
        return $('a[href="/dynamic_control"]')
    }

    get ForDynamicLoading () {
        return $('a[href="/dynamic_loading"]')
    }

    get ForEntryAd () {
        return $('a[href="/entry_ad"]')
    }

    get ForExitIntent () {
        return $('a[href="/exit_intent"]')
    }

    get ForDownload () {
        return $('a[href="/download"]')
    }

    get ForUpload () {
        return $('a[href="/upload"]')
    }

    get ForFloatingMenu () {
        return $('a[href="/floating_menu"]')
    }

    get ForForgotPass () {
        return $('a[href="/forgot_password"]')
    }

    get ForLogIn () {
        return $('a[href="/login"]')
    }

    get ForFrames () {
        return $('a[href="/frames"]')
    }

    get ForGeolocaton () {
        return $('a[href="/geolocation"]')
    }

    get ForHorizontalSlider () {
        return $('a[href="/horizontal_slider"]')
    }

    get ForHovers () {
        return $('a[href="/hovers"]')
    }

    get ForInfiniteScroll () {
        return $('a[href="/infinite_scroll"]')
    }

    get ForInputs () {
        return $('a[href="/inputs"]')
    }

    get ForJqueryMenu () {
        return $('a[href="/jqueryui/menu"]')
    }

    get ForJavascriptAlerts () {
        return $('a[href="/javascript_alerts"]')
    }

    get ForJavaScriptError () {
        return $('a[href="/javascript_error"]')
    }

    get ForKeyPresses () {
        return $('a[href="/key_presses"]')
    }

    get ForLarge () {
        return $('a[href="/large"]')
    }

    get ForWindows () {
        return $('a[href="/windows"]')
    }

    get ForNestedFrames () {
        return $('a[href="/nested_frames"]')
    }

    get ForNotifications () {
        return $('a[href="/notification_messages"]')
    }

    get ForRedirectors () {
        return $('a[href="/redirector"]')
    }

    get ForSecureDownload () {
        return $('a[href="/download_secure"]')
    }

    get ForShadowDom () {
        return $('a[href="/shadowdom"]')
    }

    get ForShiftingContent () {
        return $('a[href="/shifting_content"]')
    }

    get ForSlowResource () {
        return $('a[href="/slow"]')
    }

    get ForTables () {
        return $('a[href="/tables"]')
    }

    get ForStatusCodes () {
        return $('a[href="/status_codes"]')
    }

    get ForTypos () {
        return $('a[href="/typos"]')
    }

    get ForWYSIWYGEditor () {
        return $('a[href="/tinymce"]')
    }

    



    
}
