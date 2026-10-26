//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), c = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, l = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, u = (n, r, o) => (o = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), d = (e) => a.call(e, "module.exports") ? e["module.exports"] : l(t({}, "__esModule", { value: !0 }), e), f = (/* @__PURE__ */ u((/* @__PURE__ */ s(((e, t) => {
	t.exports = {
		name: "TabMaster",
		author: "Travis Lane (Tormak), Jesse Bofill, & Kernel Panic",
		flags: ["debug"],
		api_version: 1,
		publish: {
			tags: [
				"Customization",
				"Library",
				"Tabs"
			],
			description: "Gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs.",
			image: "https://raw.githubusercontent.com/Tormak9970/TabMaster/main/assets/thumbnail.png"
		}
	};
})))())).default, p = 2;
if (!f?.name) throw Error("[@decky/api]: Failed to find plugin manifest.");
var m = window.__DECKY_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_deckyLoaderAPIInit;
if (!m) throw Error("[@decky/api]: Failed to connect to the loader as as the loader API was not initialized. This is likely a bug in Decky Loader.");
var h;
try {
	h = m.connect(p, f.name);
} catch {
	h = m.connect(1, f.name), console.warn(`[@decky/api] Requested API version ${p} but the running loader only supports version 1. Some features may not work.`);
}
h._version != p && console.warn(`[@decky/api] Requested API version ${p} but the running loader only supports version ${h._version}. Some features may not work.`);
var g = h.call;
h.callable, h.addEventListener, h.removeEventListener;
var _ = h.routerHook, v = h.toaster, y = h.openFilePicker;
h.executeInTab, h.injectCssIntoTab, h.removeCssFromTab, h.fetchNoCors, h.getExternalResourceURL, h.useQuickAccessVisible;
var b = (e) => (...t) => e(...t), x = /* @__PURE__ */ u((/* @__PURE__ */ s(((e, t) => {
	t.exports = SP_REACT;
})))()), S = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
}, C = x.default.createContext && x.default.createContext(S), w = window && window.__assign || function() {
	return w = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, w.apply(this, arguments);
}, T = window && window.__rest || function(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
};
function E(e) {
	return e && e.map(function(e, t) {
		return x.default.createElement(e.tag, w({ key: t }, e.attr), E(e.child));
	});
}
function D(e) {
	return function(t) {
		return x.default.createElement(O, w({ attr: w({}, e.attr) }, t), E(e.child));
	};
}
function O(e) {
	var t = function(t) {
		var n = e.attr, r = e.size, i = e.title, a = T(e, [
			"attr",
			"size",
			"title"
		]), o = r || t.size || "1em", s;
		return t.className && (s = t.className), e.className && (s = (s ? s + " " : "") + e.className), x.default.createElement("svg", w({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, t.attr, n, a, {
			className: s,
			style: w(w({ color: e.color || t.color }, t.style), e.style),
			height: o,
			width: o,
			xmlns: "http://www.w3.org/2000/svg"
		}), i && x.default.createElement("title", null, i), e.children);
	};
	return C === void 0 ? t(S) : x.default.createElement(C.Consumer, null, function(e) {
		return t(e);
	});
}
//#endregion
//#region node_modules/.pnpm/react-icons@4.12.0_react@19.1.0/node_modules/react-icons/tb/index.esm.js
function k(e) {
	return D({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			strokeWidth: "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		},
		child: [
			{
				tag: "path",
				attr: {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}
			},
			{
				tag: "path",
				attr: { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" }
			},
			{
				tag: "path",
				attr: { d: "M16 3l0 4" }
			},
			{
				tag: "path",
				attr: { d: "M8 3l0 4" }
			},
			{
				tag: "path",
				attr: { d: "M4 11l16 0" }
			},
			{
				tag: "path",
				attr: { d: "M8 15h2v2h-2z" }
			}
		]
	})(e);
}
function A(e) {
	return D({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			strokeWidth: "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		},
		child: [
			{
				tag: "path",
				attr: {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}
			},
			{
				tag: "path",
				attr: { d: "M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" }
			},
			{
				tag: "path",
				attr: { d: "M4 9h16" }
			},
			{
				tag: "path",
				attr: { d: "M10 14l2 2l2 -2" }
			}
		]
	})(e);
}
var j = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, M = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, N = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Geteilter Bildschirm/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-Op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Geteilter Bildschirm/Split Screen Co-Op",
	LABEL_SHARED_SPLIT_SCREEN: "Geteilter Bildschirm/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Plattformübergreifender Mehrspieler",
	LABEL_TRACKED_MOTION_CONTROLLER: "Bewegungserfassende Controller",
	LABEL_VR_SUPPORTED: "VR unterstützt",
	LABEL_VR_ONLY: "Nur VR",
	LABEL_STEAM_TRADING_CARDS: "Steam-Sammelkarten",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR-Sammelstücke",
	LABEL_IN_APP_PURCHASES: "In-App Käufe",
	LABEL_VAC_ENABLED: "VAC aktiviert",
	LABEL_STEAM_LEADERBOARDS: "Steam-Ranglisten",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Zug Benachrichtigung",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote-Wiedergabe auf Handy",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote-Wiedergabe auf Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote-Wiedergabe auf PC",
	DESCRIPTION_COLLECTION_FILTER: "Wählt Apps aus einer bestimmten Steam Sammlung aus.",
	DESCRIPTION_INSTALLED_FILTER: "Wählt installierte/deinstallierte Apps aus.",
	DESCRIPTION_REGEX_FILTER: "Wählt Apps aus, dessen Titel mit einem regulären Ausdruck übereinstimmt.",
	DESCRIPTION_FRIENDS_FILTER: "Wählt Apps, welche auch von Freunden besitzt werden.",
	DESCRIPTION_TAGS_FILTER: "Wählt Apps mit bestimmten Community Tags.",
	DESCRIPTION_WHITELIST_FILTER: "Wählt Apps, die zur Liste hinzugefügt werden.",
	DESCRIPTION_BLACKLIST_FILTER: "Wählt Apps, die nicht zur Liste hinzugefügt werden.",
	DESCRIPTION_MERGE_FILTER: "Wählt Apps aus, die eine Untergruppe von Filtern erfüllen.",
	DESCRIPTION_PLATFORM_FILTER: "Wählt Steam- oder Nicht-Steam-Apps aus.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Wählt Apps aus, die einen bestimmten Steam Deck Kompatibilitätsstatus haben.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Wählt Apps mit einem bestimmten SteamOS-Kompatibilitätsstatus aus.",
	DESCRIPTION_REVIEW_FILTER: "Wählt Apps basierend auf ihren Metacritic/Steam-Bewertungswerten aus.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Wählt Apps basierend auf deiner Spielzeit aus.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Wählt Apps basierend auf ihrer Installationsgröße aus.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Wählt Apps basierend auf ihrem Veröffentlichungsdatum.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Wählt Apps basierend auf dem Kaufdatum aus.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Ausnahmeliste",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Kann gestreamt werden",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Datum auswählen...",
	LABEL_MONTH: "Monat",
	LABEL_DAY: "Tag",
	LABEL_YEAR: "Jahr",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, P = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, ee = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, te = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "PvP Online",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Pantalla Dividida/Compartida PvP",
	LABEL_ONLINE_COOP: "Co-op Online",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "Solo VR",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selecciona apps que están instaladas/desinstaladas.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "Compatibilidad con SteamOS",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Tiempo jugado",
	LABEL_SIZE_ON_DISK_FILTER: "Tamaño en disco",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Logros",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "Tarjeta MicroSD",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "¡ADVERTENCIA!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errores",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Seleccionar Fecha...",
	LABEL_MONTH: "Mes",
	LABEL_DAY: "Día",
	LABEL_YEAR: "Año",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, ne = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, re = {
	LOGIC_MODE_AND: "et",
	LOGIC_MODE_OR: "ou",
	LABEL_COUNT: "Nombre",
	LABEL_PERCENT: "Pourcentage",
	LABEL_AT_LEAST: "Au moins",
	LABEL_AT_MOST: "Au max",
	LABEL_EARLIEST: "Le plus ancien",
	LABEL_LATEST: "Le plus récent",
	LABEL_BY_DAY: "Par jour",
	LABEL_BY_MONTH: "Par mois",
	LABEL_BY_YEAR: "Par année",
	LABEL_BY_DAYS_AGO: "Par date de dernière partie",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Heures",
	LABEL_DAYS: "Jours",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Score Metacritic égal ou au-dessus de {scoreThreshold}",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Score Metacritic égal ou en dessous de {scoreThreshold}",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "Au moins {scoreThreshold}% de notes positives sur Steam",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "Au maximum {scoreThreshold}% de notes positives sur Steam",
	LABEL_DAY_SINGULAR: "jour",
	LABEL_DAY_PLURAL: "jours",
	LABEL_HOUR_SINGULAR: "heure",
	LABEL_HOUR_Plural: "heures",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "ou plus",
	LABEL_TIME_PLAYED_FILTER_BELOW: "ou moins",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Temps de jeu de {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Dernière partie",
	LABEL_RELEASE_DATE_PREFIX: "Date de sortie",
	LABEL_PURCHASE_DATE_PREFIX: "Date d'achat",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "En {dateLabel} ou après",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "En {dateLabel} ou avant",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "Il y a {daysAgo} jour ou moins",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "Il y a {daysAgo} jour ou plus",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "Il y a {daysAgo} jours ou moins",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "Il y a {daysAgo} jour ou plus",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "ou + de succès terminés",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "ou - d'accomplissements terminés",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "ou + sur le disque",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "ou - sur le disque",
	LABEL_ONLINE_PVP: "PvP en ligne",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "PvP en écran partagé",
	LABEL_ONLINE_COOP: "Co-op en ligne",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Co-op en écran partagé",
	LABEL_SHARED_SPLIT_SCREEN: "Écran Partagé",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Multijoueur Crossplay",
	LABEL_TRACKED_MOTION_CONTROLLER: "Manette à suivi de mouvement",
	LABEL_VR_SUPPORTED: "VR prise en charge",
	LABEL_VR_ONLY: "VR uniquement",
	LABEL_STEAM_TRADING_CARDS: "Cartes à collectionner Steam",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam Workshop chinois",
	LABEL_STEAM_VR_COLLECTIBLES: "Objets à collectionner SteamVR",
	LABEL_IN_APP_PURCHASES: "Achats intégrés",
	LABEL_VAC_ENABLED: "Avec VAC",
	LABEL_STEAM_LEADERBOARDS: "Classements Steam",
	LABEL_STEAM_TURN_NOTIFICATION: "Notifications Steam Turn",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play sur téléphone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play sur tablette",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play sur télé",
	DESCRIPTION_COLLECTION_FILTER: "Sélectionne les applis qui font partie d'une certaine collection Steam.",
	DESCRIPTION_INSTALLED_FILTER: "Sélectionne les applis qui sont installées/désinstallées.",
	DESCRIPTION_REGEX_FILTER: "Sélectionne les applications dont le titre correspond à une expression régulière.",
	DESCRIPTION_FRIENDS_FILTER: "Sélectionne les applis que vos amis ont aussi.",
	DESCRIPTION_TAGS_FILTER: "Sélectionne les applis qui ont certains tags de la communauté.",
	DESCRIPTION_WHITELIST_FILTER: "Sélectionne les applis ajoutées à la liste.",
	DESCRIPTION_BLACKLIST_FILTER: "Sélectionne les applis pas ajoutées à la liste.",
	DESCRIPTION_MERGE_FILTER: "Sélectionne les applis qui passent un sous-groupe de filtres.",
	DESCRIPTION_PLATFORM_FILTER: "Sélectionne les applis Steam ou non-Steam.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Sélectionne les applis qui ont un certain statut de compatibilité Steam Deck.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Sélectionne les applis qui ont un certain statut de compatibilité SteamOS.",
	DESCRIPTION_REVIEW_FILTER: "Sélectionne les applis en fonction de leur score Metacritic/Sapeur.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Sélectionne les applis en fonction de votre temps de jeu.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Sélectionne les applis en fonction de leur taille d'installation.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Sélectionne les applis en fonction de leur date de sortie.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Sélectionne les applis en fonction de leur date d'achat.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Sélectionne les applis en fonction de quand vous y avez joué en dernier.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Sélectionne les applis en fonction de leur pourcentage d'achèvement.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Sélectionne les applis qui supportent certaines fonctionnalités Steam.",
	DESCRIPTION_SD_CARD_FILTER: "Sélectionne les applis qui sont présentes sur la carte Micro SD insérée ou une carte Micro SD spécifique.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Sélectionne les applications qui sont installées dans un dossier d'installation Steam spécifique.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installées",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Ami(e)s",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Liste-blanche",
	LABEL_BLACKLIST_FILTER: "Liste-noire",
	LABEL_MERGE_FILTER: "Fusionner",
	LABEL_PLATFORM_FILTER: "Plateforme",
	LABEL_DECK_COMPAT_FILTER: "Compatibilité avec le Deck",
	LABEL_MACHINE_COMPAT_FILTER: "Compatibilité SteamOS",
	LABEL_REVIEW_FILTER: "Note de la critique",
	LABEL_TIME_PLAYED_FILTER: "Temps joué",
	LABEL_SIZE_ON_DISK_FILTER: "Taille sur le disque",
	LABEL_RELEASE_DATE_FILTER: "Date de sortie",
	LABEL_PURCHASE_DATE_FILTER: "Date d'achat",
	LABEL_LAST_PLAYED_FILTER: "Dernière partie",
	LABEL_FAMILY_SHARING_FILTER: "Partage familial",
	LABEL_DEMO_FILTER: "Démo",
	LABEL_COMING_SOON_FILTER: "Bientôt disponible",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Succès",
	LABEL_STEAM_FEATURES_FILTER: "Fonctionnalités Steam",
	LABEL_SD_CARD_FILTER: "Carte MicroSD",
	LABEL_INSTALL_FOLDER_FILTER: "Dossier d'installation",
	LABEL_DEFAULT_SORT: "Par défaut",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Suppression de l'onglet",
	LABEL_TAB: "Onglet",
	TITLE_ERROR: "Erreur",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "Toutes les erreurs doivent être résolues avant d'enregistrer",
	TITLE_ALL_CAPS_WARNING: "ATTENTION !",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Enregistrer les modifications",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Annuler les modifications",
	TITLE_FIXING_MERGE_GROUP: "Corriger le groupe de fusion dans l'onglet {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "Toutes les erreurs ont été corrigées.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Voulez-vous vraiment supprimer ce filtre ?",
	LABEL_SELECTED_COLLECTION: "Collection sélectionnée",
	LABEL_RESOLVED: "Résolu",
	LABEL_FIX_MERGE_GROUP: "Corriger le groupe de fusion",
	LABEL_INSERTED_CARD: "Carte insérée",
	LABEL_SPECIFIC_CARD: "Carte spécifique",
	LABEL_ANY_CARD: "N'importe quelle carte",
	LABEL_SELECTED_CARD: "Carte sélectionnée",
	TITLE_ERRORS: "Erreurs",
	TITLE_FILTER_TYPE: "Type de filtre",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Veuillez corriger tous les onglets avant d'enregistrer",
	TITLE_TAB_FIXES_NEEDED: "Un ou plusieurs onglets ont besoin de corrections",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster a trouvé un problème avec un ou plusieurs de vos onglets. Veuillez prendre le temps d'examiner les problèmes ci-dessous et de les corriger.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster a trouvé un problème avec un de vos onglets ou +. Veuillez prendre le temps d'examiner les problèmes ci-dessous et de les corriger.",
	TITLE_TABS_WITH_ERRORS: "Onglets avec erreurs",
	LABEL_APPLY_YOUR_FIXES: "Appliquer vos corrections",
	LABEL_APPLY_TAB_FIXES: "Appliquer les corrections",
	TITLE_CHANGE_FILTER_TYPE: "Changer le type de filtre",
	MESSAGE_REQUIRES_MICROSDECK: "nécessite MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Par défaut",
	LABEL_FILTER_INVERSION_INVERT: "Inverser",
	LABEL_REMOVE: "Supprimer",
	LABEL_SEARCH: "Rechercher",
	PLACEHOLDER_SEARCH: "Rechercher",
	LABEL_AND: "et",
	LABEL_OR: "ou",
	LABEL_ALL_MODES_SELECTED: "Tous les éléments sélectionnés",
	LABEL_MAX_MODES_SELECTED: "Maximum sélectionné",
	LABEL_CHANGE_FILTER_MODE: "Changer le mode de filtrage",
	TITLE_CANT_SAVE_MERGE_GROUP: "Impossible d'enregistrer le groupe de fusion",
	MESSAGE_INCOMPLETE_FILTERS: "Certains filtres sont incomplets",
	MESSAGE_NEED_TWO_FILTERS: "Un groupe de fusion doit avoir au moins 2 filtres",
	TITLE_MERGE_GROUP: "Groupe de fusion",
	LABEL_SAVE_GROUP: "Sauvegarder le groupe",
	LABEL_FILTER_INVERTED: "inversé",
	LABEL_YES: "oui",
	LABEL_NO: "non",
	LABEL_FRIEND_SINGULAR: "ami(e)",
	LABEL_FRIENDS_PLURAL: "ami(e)s",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "sur la liste blanche",
	LABEL_BLACKLISTED: "sur la liste blanche",
	LABEL_GROUPED_FILTERS: "filtres groupés",
	LABEL_FEATURE_SINGULAR: "fonctionnalité",
	LABEL_FEATURE_PLURAL: "fonctionnalités",
	LABEL_ANY: "Peu importe",
	LABEL_INSERTED: "Insérée",
	LABEL_SELECT_DATE: "Sélectionnez la date...",
	LABEL_MONTH: "Mois",
	LABEL_DAY: "Jour",
	LABEL_YEAR: "Année",
	LABEL_IS_INSTALLED: "Est installé ?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Entrez une expression régulière",
	LABEL_SELECTED_FRIENDS: "Ami(e)s sélectionné(e)s",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Ajouter un(e) ami(e)",
	LABEL_SELECTED_TAGS: "Tags sélectionnés",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Ajouter un tag",
	LABEL_WHITELISTED_APPS: "Applis sur liste-blanche",
	LABEL_ADD_APP: "Ajouter une appli",
	LABEL_YOUR_APPS: "Vos Applis",
	LABEL_BLACKLISTED_APPS: "Applis sur liste noire",
	LABEL_EDIT: "Modifier",
	LABEL_CREATE: "Créer",
	LABEL_MERGE_MODE: "Mode Fusion",
	TITLE_FILTERS: "Filtres",
	LABEL_SELECTED_PLATFORM: "Plateforme sélectionnée",
	LABEL_SELECTED_COMPATIBILITY: "Compatibilité sélectionnée",
	LABEL_FAMILY_SHARING_OPTION: "Provient d'un membre de la famille ?",
	LABEL_IS_DEMO_OPTION: "Est une démo ?",
	LABEL_IS_COMING_SOON: "Sort bientôt ?",
	LABEL_IS_STREAMABLE_OPTION: "Est streamable ?",
	LABEL_SELECTED_FEATURES: "Fonctionnalités sélectionnées",
	LABEL_ADD_FEATURE: "Ajouter une fonctionnalité",
	LABEL_MICROSD_CARD: "Carte Micro SD",
	LABEL_SELECT_INSTALL_FILTERS: "Dossier d'installation sélectionné",
	LABEL_INSTALL_FOLDERS: "Dossiers d'installation",
	LABEL_FILTER: "Filtre",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Logique de combinaison de groupe",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Veuillez terminer le filtre actuel avant d'en ajouter un autre",
	LABEL_ADD_FILTER: "Ajouter un filtre",
	TITLE_CANT_SAVE_TAB: "Impossible de sauvegarder l'onglet",
	LABEL_SAVE_TAB: "Sauvegarder",
	PLACEHOLDER_TAB_TITLE: "Le titre de cet onglet",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Veuillez ajouter un nom et au moins 1 filtre",
	TITLE_MODIFYING_TAB: "Modification en cours",
	TITLE_CREATE_TAB: "Créer un nouvel onglet",
	LABEL_TAB_NAME: "Nom",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Masquer automatiquement l'onglet s'il est vide",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Les autres utilisateurs peuvent copier cet onglet",
	LABEL_SORT_TAB_BY: "Trier les applications par",
	LABEL_INCLUDE_IN_TAB: "Inclure dans l'onglet",
	LABEL_QUICK_TABS: "Onglets rapides",
	LABEL_CREATE_TAB: "Créer un Onglet",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Compatibilité avec le Deck",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Carte insérée",
	LABEL_SCROLL_UP: "Scroller vers le haut",
	LABEL_SCROLL_DOWN: "Scroller vers le bas",
	TITLE_CREATE_NEW_TAB_PROFILE: "Créer un nouveau profil d'onglet",
	TITLE_PROFILE_NAME: "Nom du profil",
	PLACEHOLDER_TAB_PROFILE_NAME: "Le nom de ce profil d'onglets",
	TITLE_OVERWRITING_PROFILE: "Écrasement du profil",
	TITLE_PROFILE_NEW_TABS: "Nouveaux onglets",
	TITLE_PROFILE_EXISTING_TABS: "Onglets existants",
	LABEL_MANAGE_TAB_PROFILES: "Gérer les profils d'onglets",
	TITLE_CREATE_PROFILE: "Créer un profil",
	LABEL_APPLY_PROFILE: "Appliquer le profil",
	LABEL_DELETE_PROFILE: "Supprimer le profil",
	LABEL_OVERWRITE_PROFILE: "Écraser le profil",
	TITLE_DELETE_PROFILE: "Suppression du profil",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Êtes-vous sûr(e) de vouloir supprimer ce profil ?",
	LABEL_ADD_TAB: "Ajouter un Onglet",
	LABEL_REORDER_TABS: "Réarranger les onglets",
	LABEL_UNHIDE_TABS: "Ne plus cacher les onglets",
	LABEL_EDIT_TAB: "Modifier",
	LABEL_DUPLICATE_TAB: "Dupliquer",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Créer une collection à partir de cet onglet",
	LABEL_SNAPSHOT_TAB: "Capture",
	LABEL_HIDE_TAB: "Cacher",
	LABEL_DELETE_TAB: "Supprimer",
	LABEL_TAB_UNHIDE: "Ne plus cacher",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Ne plus cacher et gérer",
	TITLE_COLLECTIONS_HIDDEN: "L'onglet Collections est caché par Tab Master !",
	MESSAGE_COLLECTIONS_UNHIDE: "Pour gérer les applis cachées, Tab Master ne peux pas chacher votre onglet Collections.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "Vous avez des onglets qui dépendent du plugin MicroSDeck, mais une incompatibilité de version a été détectée. TabMaster nécessite la version {libVersion}, mais la version {pluginVersion} est installée.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Veuillez mettre à jour MicroSDeck vers la version spécifiée.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Veuillez mettre à jour TabMaster si possible ou installer la version spécifiée de MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Veuillez essayer de mettre à jour TabMaster ou MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "Vous avez quelques onglets qui nécessitent le plugin MicroSDeck, mais il n'est pas installé.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Veuillez installer MicroSDeck pour que ces onglets fonctionnent.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "En attendant, ces onglets ne seront pas affichés dans la bibliothèque.",
	MESSAGE_RESET: "Réinitialiser",
	TITLE_RESET_TABS: "Réinitialiser les onglets",
	MESSAGE_RESET_TABS_WARNING: "Êtes-vous sûr(e) de vouloir réinitialiser les onglets ? Une sauvegarde sera créée dans ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Impossible de charger les paramètres",
	MESSAGE_LOAD_SETTINGS_ERROR: "Le fichier de configuration ne respecte pas la structure attendue et n'a pas pu être chargé. Cela peut être dû à diverses raisons comme un changement dans Steam ou un bug dans TabMaster. Le problème doit être corrigé pour continuer. Vous pouvez également réinitialiser les paramètres de l'onglet à leurs valeurs par défaut. Ceci effacera tous les paramètres, mais une copie des paramètres actuels sera automatiquement enregistrée en tant que sauvegarde. Une future mise à jour de TabMaster sera peut être en mesure de corriger le problème, mais la restauration manuelle de la sauvegarde sera toujours nécessaire.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Ouvrir les options des onglets",
	TITLE_TABS: "Onglets",
	TITLE_HIDDEN_TABS: "Onglets Cachés",
	LABEL_UNHIDE_TAB: "Ne plus cacher les onglets",
	MESSAGE_SHOW_TAB: "Afficher",
	LABEL_CLEAR_ERROR: "Effacer l'erreur",
	MESSAGE_TABMASTER_ERROR: "Tab Master a rencontré une erreur",
	LABEL_TABS: "Onglets",
	LABEL_FILTER_PLURAL: "Filtres",
	TITLE_SHARED_TABS: "Onglets partagés",
	TITLE_RESTART_STEAM: "Redémarrer Steam ?",
	LABEL_RESTART_LATER: "Plus tard",
	LABEL_RESTART_NOW: "Redémarrer maintenant",
	MESSAGE_RESTART_REASON: "Votre sauvegarde a été restaurée. TabMaster a été configuré pour ne pas enregistrer les modifications tant que vous ne redémarrez pas pour éviter d'écraser vos paramètres restaurés. Il est fortement recommandé de redémarrer dès que possible",
	MESSAGE_SUPPORT_REACHOUT: "Veuillez contacter",
	MESSAGE_SUPPORT_OR: "ou",
	MESSAGE_SUPPORT_END: "pour obtenir de l'aide",
	LABEL_HIDE_NOTICE: "Masquer l'avertissement",
	MESSAGE_QAM_DESCRIPTION: "Ici, vous pouvez ajouter, réorganiser ou supprimer des onglets de la bibliothèque.",
	LABEL_ADD_QUICK_TAB: "Ajouter Onglet Rapide",
	LABEL_VIEW_SHARED_TABS: "Voir les onglets partagés",
	LABEL_RESTORE_SETTINGS: "Restaurer les paramètres",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, ie = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "PvP Online",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Schermo Condiviso PvP",
	LABEL_ONLINE_COOP: "Co-op Online",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Schermo Condivisoo Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Schermo Condiviso",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Multigiocatore Cross-Piattaforma",
	LABEL_TRACKED_MOTION_CONTROLLER: "Controller Motion Tracciato",
	LABEL_VR_SUPPORTED: "Supporto VR",
	LABEL_VR_ONLY: "Solo VR",
	LABEL_STEAM_TRADING_CARDS: "Carte Steam",
	LABEL_STEAM_CHINA_WORKSHOP: "Workshop Steam Cina",
	LABEL_STEAM_VR_COLLECTIBLES: "Collezionabili SteamVR",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Giorno",
	LABEL_YEAR: "Anno",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, ae = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, oe = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, se = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, ce = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, le = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, ue = {
	LOGIC_MODE_AND: "e",
	LOGIC_MODE_OR: "ou",
	LABEL_COUNT: "Contar",
	LABEL_PERCENT: "Porcentagem",
	LABEL_AT_LEAST: "Pelo menos",
	LABEL_AT_MOST: "No máximo",
	LABEL_EARLIEST: "Antigos",
	LABEL_LATEST: "Recentes",
	LABEL_BY_DAY: "Por Dia",
	LABEL_BY_MONTH: "Por Mês",
	LABEL_BY_YEAR: "Por Ano",
	LABEL_BY_DAYS_AGO: "Por Dias Atrás",
	LABEL_MINUTES: "Minutos",
	LABEL_HOURS: "Horas",
	LABEL_DAYS: "Dias",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Pontuação no Metacritic de {scoreThreshold} ou mais",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Pontuação no Metacritic de {scoreThreshold} ou menos",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "Pelo menos {scoreThreshold}% de análises positivas no Steam",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "No máx. {scoreThreshold}% de análises positivas no Steam",
	LABEL_DAY_SINGULAR: "dia",
	LABEL_DAY_PLURAL: "dias",
	LABEL_HOUR_SINGULAR: "hora",
	LABEL_HOUR_Plural: "horas",
	LABEL_MINUTE_SINGULAR: "minuto",
	LABEL_MINUTE_Plural: "minutos",
	LABEL_TIME_ABOVE: "ou mais",
	LABEL_TIME_PLAYED_FILTER_BELOW: "ou menos",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Jogado por {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Última vez jogado",
	LABEL_RELEASE_DATE_PREFIX: "Lançado",
	LABEL_PURCHASE_DATE_PREFIX: "Comprado",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "Em ou após {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "Em ou antes de {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} dia atrás ou mais",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} dia atrás ou menos",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} dias atrás ou mais",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} dias atrás ou menos",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "ou mais conquistas desbloqueadas",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "ou menos conquistas desbloqueadas",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "ou mais em disco",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "ou menos em disco",
	LABEL_ONLINE_PVP: "PVP Online",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "PVP de Tela Divida/Compartilhada",
	LABEL_ONLINE_COOP: "Co-op Online",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Co-op de Tela Dividida/Compartilhada",
	LABEL_SHARED_SPLIT_SCREEN: "Tela Dividida/Compartilhada",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Multijogador Multiplataforma",
	LABEL_TRACKED_MOTION_CONTROLLER: "Controle de Movimento Rastreado",
	LABEL_VR_SUPPORTED: "Compatível com VR",
	LABEL_VR_ONLY: "Apenas VR",
	LABEL_STEAM_TRADING_CARDS: "Cartas Colecionáveis Steam",
	LABEL_STEAM_CHINA_WORKSHOP: "Oficina Steam China",
	LABEL_STEAM_VR_COLLECTIBLES: "Colecionáveis do SteamVR",
	LABEL_IN_APP_PURCHASES: "Compras em Aplicativo",
	LABEL_VAC_ENABLED: "VAC Ativo",
	LABEL_STEAM_LEADERBOARDS: "Classificações Steam",
	LABEL_STEAM_TURN_NOTIFICATION: "Notificações de turno no Steam",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play no Celular",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play no Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play na TV",
	DESCRIPTION_COLLECTION_FILTER: "Seleciona aplicativos que estão em certa Coleção do Steam.",
	DESCRIPTION_INSTALLED_FILTER: "Seleciona aplicativos que estão instalados/desinstalados.",
	DESCRIPTION_REGEX_FILTER: "Seleciona aplicativos cujo título corresponde a uma expressão regular (\"regex\").",
	DESCRIPTION_FRIENDS_FILTER: "Seleciona aplicativos em comum com seus amigos.",
	DESCRIPTION_TAGS_FILTER: "Seleciona aplicativos que possuam tags específicas.",
	DESCRIPTION_WHITELIST_FILTER: "Seleciona aplicativos que são adicionados à lista.",
	DESCRIPTION_BLACKLIST_FILTER: "Seleciona aplicativos que não são adicionadas à lista.",
	DESCRIPTION_MERGE_FILTER: "Seleciona aplicativos que passem um subgrupo de filtros.",
	DESCRIPTION_PLATFORM_FILTER: "Seleciona aplicativos Steam e não-Steam.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Seleciona aplicativos que possuam uma avaliação específica de compatibilidade com o Steam Deck.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Seleciona aplicativos que possuam uma avaliação específica de compatibilidade com o SteamOS.",
	DESCRIPTION_REVIEW_FILTER: "Seleciona aplicativos baseado na sua avaliação do metacritic/steam.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Seleciona aplicativos baseado no seu tempo de jogo.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Seleciona aplicativos baseado no tamanho de sua instalação.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Seleciona aplicativos baseado na sua data de lançamento.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Seleciona aplicativos baseado na sua data de compra.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Seleciona aplicativos baseado na última vez que foram abertos.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Seleciona aplicativos baseado na porcentagem de suas conquistas.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Seleciona aplicativos que possuam Recursos Steam específicos.",
	DESCRIPTION_SD_CARD_FILTER: "Seleciona aplicativos que estão presentes em um Cartão de Memória inserido/específico.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Seleciona aplicativos que estão instalados em uma Pasta de Instalação da Steam específica.",
	LABEL_COLLECTION_FILTER: "Coleção",
	LABEL_INSTALLED_FILTER: "Instalado",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Amigos",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Permitir",
	LABEL_BLACKLIST_FILTER: "Bloquear",
	LABEL_MERGE_FILTER: "Mesclar",
	LABEL_PLATFORM_FILTER: "Plataforma",
	LABEL_DECK_COMPAT_FILTER: "Compatibilidade com Steam Deck",
	LABEL_MACHINE_COMPAT_FILTER: "Compatibilidade com SteamOS",
	LABEL_REVIEW_FILTER: "Pontuação da Análise",
	LABEL_TIME_PLAYED_FILTER: "Tempo de Jogo",
	LABEL_SIZE_ON_DISK_FILTER: "Tamanho no Disco",
	LABEL_RELEASE_DATE_FILTER: "Data de Lançamento",
	LABEL_PURCHASE_DATE_FILTER: "Data de aquisição",
	LABEL_LAST_PLAYED_FILTER: "Última sessão",
	LABEL_FAMILY_SHARING_FILTER: "Compartilhamento em Família",
	LABEL_DEMO_FILTER: "Demonstração",
	LABEL_COMING_SOON_FILTER: "Em breve",
	LABEL_STREAMABLE_FILTER: "Permite Transmitir",
	LABEL_ACHIEVEMENTS_FILTER: "Conquistas",
	LABEL_STEAM_FEATURES_FILTER: "Recursos Steam",
	LABEL_SD_CARD_FILTER: "Cartão de Memória",
	LABEL_INSTALL_FOLDER_FILTER: "Pasta de Instalação",
	LABEL_DEFAULT_SORT: "Padrão",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deletando Aba",
	LABEL_TAB: "Aba",
	TITLE_ERROR: "Erro",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "Todos os erros devem ser resolvidos antes de salvar",
	TITLE_ALL_CAPS_WARNING: "AVISO!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Salvar Alterações",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Descartar Alterações",
	TITLE_FIXING_MERGE_GROUP: "Corrija o Grupo Mesclado na Aba {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "Todos os erros foram resolvidos.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Tem certeza que deseja deletar este filtro?",
	LABEL_SELECTED_COLLECTION: "Coleção Selecionada",
	LABEL_RESOLVED: "Resolvido",
	LABEL_FIX_MERGE_GROUP: "Corrigir Grupo Mesclado",
	LABEL_INSERTED_CARD: "Cartão Inserido",
	LABEL_SPECIFIC_CARD: "Cartão Específico",
	LABEL_ANY_CARD: "Qualquer Cartão",
	LABEL_SELECTED_CARD: "Cartão Selecionado",
	TITLE_ERRORS: "Erros",
	TITLE_FILTER_TYPE: "Tipo de Filtro",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Por favor corrija todas as abas antes de salvar",
	TITLE_TAB_FIXES_NEEDED: "Correções Necessárias Para Uma ou Mais Abas",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "O TabMaster encontrou problemas com uma ou mais abas. Por favor verifique os problemas abaixo, e corrija-os.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "O TabMaster encontrou um problema com uma ou mais abas. Por favor verifique o problema abaixo, e corrija-o.",
	TITLE_TABS_WITH_ERRORS: "Abas Com Erros",
	LABEL_APPLY_YOUR_FIXES: "Aplicar Suas Correções",
	LABEL_APPLY_TAB_FIXES: "Aplicar Correções",
	TITLE_CHANGE_FILTER_TYPE: "Alterar Tipo de Filtro",
	MESSAGE_REQUIRES_MICROSDECK: "requer MicroSDDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Padrão",
	LABEL_FILTER_INVERSION_INVERT: "Inverter",
	LABEL_REMOVE: "Remover",
	LABEL_SEARCH: "Procurar",
	PLACEHOLDER_SEARCH: "Procurar",
	LABEL_AND: "E",
	LABEL_OR: "Ou",
	LABEL_ALL_MODES_SELECTED: "Todos selecionados",
	LABEL_MAX_MODES_SELECTED: "Máx. selecionado",
	LABEL_CHANGE_FILTER_MODE: "Alterar modo do filtro",
	TITLE_CANT_SAVE_MERGE_GROUP: "Não foi Possível Salvar o Grupo Mesclado",
	MESSAGE_INCOMPLETE_FILTERS: "Alguns filtros estão incompletos",
	MESSAGE_NEED_TWO_FILTERS: "Um Grupo Mesclado deve ter pelo menos 2 filtros",
	TITLE_MERGE_GROUP: "Grupo Mesclado",
	LABEL_SAVE_GROUP: "Salvar Grupo",
	LABEL_FILTER_INVERTED: "invertido",
	LABEL_YES: "sim",
	LABEL_NO: "não",
	LABEL_FRIEND_SINGULAR: "amigo",
	LABEL_FRIENDS_PLURAL: "amigos",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "adicionado à lista Permitir",
	LABEL_BLACKLISTED: "adicionado à lista Bloquear",
	LABEL_GROUPED_FILTERS: "filtros agrupados",
	LABEL_FEATURE_SINGULAR: "recurso",
	LABEL_FEATURE_PLURAL: "recursos",
	LABEL_ANY: "Qualquer",
	LABEL_INSERTED: "Inserido",
	LABEL_SELECT_DATE: "Selecionar Data...",
	LABEL_MONTH: "Mês",
	LABEL_DAY: "Dia",
	LABEL_YEAR: "Ano",
	LABEL_IS_INSTALLED: "Está instalado?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Digite uma Expressão Regular",
	LABEL_SELECTED_FRIENDS: "Amigos Selecionados",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Adicionar amigo",
	LABEL_SELECTED_TAGS: "Tags Selecionadas",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Adicionar tag",
	LABEL_WHITELISTED_APPS: "Aplicativos Permitidos",
	LABEL_ADD_APP: "Adicionar aplicativo",
	LABEL_YOUR_APPS: "Seus Aplicativos",
	LABEL_BLACKLISTED_APPS: "Aplicativos Não-Permitidos",
	LABEL_EDIT: "Editar",
	LABEL_CREATE: "Criar",
	LABEL_MERGE_MODE: "Modo Mesclar",
	TITLE_FILTERS: "Filtros",
	LABEL_SELECTED_PLATFORM: "Plataforma Selecionada",
	LABEL_SELECTED_COMPATIBILITY: "Compatibilidade Selecionada",
	LABEL_FAMILY_SHARING_OPTION: "É de um membro da família?",
	LABEL_IS_DEMO_OPTION: "É uma demonstração?",
	LABEL_IS_COMING_SOON: "Irá Lançar em Breve?",
	LABEL_IS_STREAMABLE_OPTION: "Permite transmitir?",
	LABEL_SELECTED_FEATURES: "Recursos Selecionados",
	LABEL_ADD_FEATURE: "Adicionar Recurso",
	LABEL_MICROSD_CARD: "Cartão de Memória",
	LABEL_SELECT_INSTALL_FILTERS: "Pasta de Instalação Selecionada",
	LABEL_INSTALL_FOLDERS: "Pastas de Instalação",
	LABEL_FILTER: "Filtro",
	MESSAGE_MODE: "modo",
	LABEL_GROUP_COMBINATION_LOGIC: "Lógica da Combinação de Grupo",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Por favor finalize o filtro atual antes de adicionar outro",
	LABEL_ADD_FILTER: "Adicionar Filtro",
	TITLE_CANT_SAVE_TAB: "Não Foi Possível Salvar Aba",
	LABEL_SAVE_TAB: "Salvar",
	PLACEHOLDER_TAB_TITLE: "Título da aba",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Por favor adicione um nome e pelo menos 1 filtro",
	TITLE_MODIFYING_TAB: "Editando",
	TITLE_CREATE_TAB: "Criar Nova Aba",
	LABEL_TAB_NAME: "Nome",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Ocultar aba vazia automaticamente",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Outros usuários podem copiar esta aba",
	LABEL_SORT_TAB_BY: "Ordernar aplicativos por",
	LABEL_INCLUDE_IN_TAB: "Incluir na Aba",
	LABEL_QUICK_TABS: "Abas Rápidas",
	LABEL_CREATE_TAB: "Criar Aba",
	LABEL_COLLECTION: "Coleção",
	LABEL_DECK_COMPATIBILITY: "Compatibilidade com Steam Deck",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Cartão Inserido",
	LABEL_SCROLL_UP: "Rolar para Cima",
	LABEL_SCROLL_DOWN: "Rolar para Baixo",
	TITLE_CREATE_NEW_TAB_PROFILE: "Criar Novo Perfil de Aba",
	TITLE_PROFILE_NAME: "Nome do Perfil",
	PLACEHOLDER_TAB_PROFILE_NAME: "Nome desse perfil de aba",
	TITLE_OVERWRITING_PROFILE: "Sobrescrevendo Perfil",
	TITLE_PROFILE_NEW_TABS: "Novas Abas",
	TITLE_PROFILE_EXISTING_TABS: "Abas Existentes",
	LABEL_MANAGE_TAB_PROFILES: "Gerenciar Perfil de Abas",
	TITLE_CREATE_PROFILE: "Criar Perfil",
	LABEL_APPLY_PROFILE: "Aplicar Perfil",
	LABEL_DELETE_PROFILE: "Deletar Perfil",
	LABEL_OVERWRITE_PROFILE: "Sobrescrever Perfil",
	TITLE_DELETE_PROFILE: "Deletando Perfil",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Tem certeza que deseja deletar este perfil?",
	LABEL_ADD_TAB: "Adicionar Aba",
	LABEL_REORDER_TABS: "Reordenar Abas",
	LABEL_UNHIDE_TABS: "Exibir Abas Ocultas",
	LABEL_EDIT_TAB: "Editar",
	LABEL_DUPLICATE_TAB: "Duplicar",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Criar uma coleção com esta aba",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Ocultar",
	LABEL_DELETE_TAB: "Deletar",
	LABEL_TAB_UNHIDE: "Exibir",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Exibir e Gerenciar",
	TITLE_COLLECTIONS_HIDDEN: "Aba de Coleções ocultada pelo TabMaster!",
	MESSAGE_COLLECTIONS_UNHIDE: "Para gerenciar aplicativos ocultos, o TabMaster precisa exibir sua Aba de Coleções.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "Voçê possui algumas abas que usam o plugin MicroSDeck, porém foi encontrada uma incompatibilidade de versões. O TabMaster exige a versão {libVersion}, mas a versão {pluginVersion} está instalada.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Por favor atualize o MicroSDeck para a versão correta.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Por favor atualize o TabMaster se disponível ou use a versão correta do MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Por favor tente atualizar o TabMaster ou MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "Voçê possui algumas abas que usam o plugin MicroSDeck, porém ele não está instalado.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Por favor instale o MicroSDeck para que estas abas possam funcionar.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Enquanto isso, estas abas não serão exibidas na biblioteca.",
	MESSAGE_RESET: "Redefinir",
	TITLE_RESET_TABS: "Redefinir Abas",
	MESSAGE_RESET_TABS_WARNING: "Tem certeza que deseja redefinir as abas? Um backup será criado em ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Não foi Possível Carregar Configurações",
	MESSAGE_LOAD_SETTINGS_ERROR: "O arquivo de configurações não contém a estrutura correta ou não pode ser carregado. Isso pode acontecer por vários motivos, como, uma mudança do Steam ou um bug no TabMaster. Para poder continuar, o problema deve ser corrigido. Como alternativa voçê pode redefinir a aba de configurações para seus valores padrões. Isso irá apagar todas as configurações, mas uma cópia das configurações atuais será salva automaticamente como backup. Uma atualização futura poderá ser capaz de corrigir o problema, entretanto o backup deverá ser restaurado manualmente.",
	LABEL_TAB_ACTIONS: "Ações",
	LABEL_OPEN_TAB_OPTIONS: "Abrir opções das abas",
	TITLE_TABS: "Abas",
	TITLE_HIDDEN_TABS: "Abas Ocultas",
	LABEL_UNHIDE_TAB: "Exibir Aba",
	MESSAGE_SHOW_TAB: "Exibir",
	LABEL_CLEAR_ERROR: "Erro",
	MESSAGE_TABMASTER_ERROR: "Ocorreu um erro com o TabMaster",
	LABEL_TABS: "Abas",
	LABEL_FILTER_PLURAL: "Filtros",
	TITLE_SHARED_TABS: "Abas Compartilhadas",
	TITLE_RESTART_STEAM: "Reiniciar Steam?",
	LABEL_RESTART_LATER: "Mais tarde",
	LABEL_RESTART_NOW: "Reiniciar Agora",
	MESSAGE_RESTART_REASON: "Seu backup foi restaurado. Para evitar que suas configurações restauradas sejam sobrescritas. O TabMaster não irá salvar alterações até que seja reiniciado. É altamente recomendado que voçê reinicie o mais breve possível",
	MESSAGE_SUPPORT_REACHOUT: "Por favor entre em contato com",
	MESSAGE_SUPPORT_OR: "ou",
	MESSAGE_SUPPORT_END: "para suporte.",
	LABEL_HIDE_NOTICE: "Ocultar Aviso",
	MESSAGE_QAM_DESCRIPTION: "Aqui voçê pode adicionar, reordenar, ou remover abas da biblioteca.",
	LABEL_ADD_QUICK_TAB: "Adicionar Aba Rápida",
	LABEL_VIEW_SHARED_TABS: "Ver Abas Compartilhadas",
	LABEL_RESTORE_SETTINGS: "Restaurar Configurações",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, de = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, fe = {
	LOGIC_MODE_AND: "И",
	LOGIC_MODE_OR: "ИЛИ",
	LABEL_COUNT: "Количество",
	LABEL_PERCENT: "Процент",
	LABEL_AT_LEAST: "Как минимум",
	LABEL_AT_MOST: "Как максимум",
	LABEL_EARLIEST: "Самый ранний",
	LABEL_LATEST: "Самый последний",
	LABEL_BY_DAY: "По дням",
	LABEL_BY_MONTH: "По месяцам",
	LABEL_BY_YEAR: "По годам",
	LABEL_BY_DAYS_AGO: "По дням назад",
	LABEL_MINUTES: "Минуты",
	LABEL_HOURS: "Часы",
	LABEL_DAYS: "Дни",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Рейтинг MetaCritic не ниже {scoreThreshold}",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Рейтинг MetaCritic не выше {scoreThreshold}",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "Не меньше {scoreThreshold}% положительных отзывов Steam",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "Не больше {scoreThreshold}% положительных отзывов Steam",
	LABEL_DAY_SINGULAR: "день",
	LABEL_DAY_PLURAL: "дни",
	LABEL_HOUR_SINGULAR: "час",
	LABEL_HOUR_Plural: "часы",
	LABEL_MINUTE_SINGULAR: "минута",
	LABEL_MINUTE_Plural: "минуты",
	LABEL_TIME_ABOVE: "или больше",
	LABEL_TIME_PLAYED_FILTER_BELOW: "или меньше",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Игралось {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Последний раз запускалось",
	LABEL_RELEASE_DATE_PREFIX: "Вышло",
	LABEL_PURCHASE_DATE_PREFIX: "Куплено",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "Не раньше {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "Не позже {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} день назад или позже",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} день назад или раньше",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} дней назад или позже",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} дней назад или раньше",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "или больше достижений получено",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "или меньше достижений получено",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "или больше на диске",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "или меньше на диске",
	LABEL_ONLINE_PVP: "Онлайн PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Общий / Разделенный экран PvP",
	LABEL_ONLINE_COOP: "Онлайн кооператив",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Кооператив на общем или разделённом экране",
	LABEL_SHARED_SPLIT_SCREEN: "Общий или разделённый экран",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Кроссплатформенный мультиплеер",
	LABEL_TRACKED_MOTION_CONTROLLER: "Контроллер с гироскопом",
	LABEL_VR_SUPPORTED: "Поддержка VR",
	LABEL_VR_ONLY: "Только VR",
	LABEL_STEAM_TRADING_CARDS: "Коллекционные карточки Steam",
	LABEL_STEAM_CHINA_WORKSHOP: "Мастерская Steam для Китая",
	LABEL_STEAM_VR_COLLECTIBLES: "Коллекционные предметы Steam VR",
	LABEL_IN_APP_PURCHASES: "Внутриигровые покупки",
	LABEL_VAC_ENABLED: "VAC включен",
	LABEL_STEAM_LEADERBOARDS: "Таблица рекордов Steam",
	LABEL_STEAM_TURN_NOTIFICATION: "Уведомления о вашем ходе",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play на телефоне",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play на планшете",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play на ТВ",
	DESCRIPTION_COLLECTION_FILTER: "Выбирает приложения из конкретной Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Выбирает приложения, которое установлены или удалены.",
	DESCRIPTION_REGEX_FILTER: "Выбирает приложения, название которого соответствует регулярного выражению.",
	DESCRIPTION_FRIENDS_FILTER: "Выбирает приложения, которые есть у ваших друзей.",
	DESCRIPTION_TAGS_FILTER: "Выбирает приложения с конкретными тегами сообщества.",
	DESCRIPTION_WHITELIST_FILTER: "Выбирает приложения, добавленные в список.",
	DESCRIPTION_BLACKLIST_FILTER: "Выбирает приложения, не добавленные в список.",
	DESCRIPTION_MERGE_FILTER: "Выбирает приложения, которые попадают в компоновку фильтров.",
	DESCRIPTION_PLATFORM_FILTER: "Выбирает приложения не из Steam.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Выбирает приложения с конкретным статусом поддержки Steam Deck.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Выбирает приложения с конкретным статусом поддержки SteamOS.",
	DESCRIPTION_REVIEW_FILTER: "Выбирает приложения по их рейтингу на MetaCritic/Steam Review.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Выбирает приложения по количеству наигранных часов.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Выбирает приложения по размеру на диске.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Выбирает приложения по дате выхода.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Выбирает приложения по дате покупки.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Выбирает приложения по времени последнего запуска.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Выбирает приложения по проценту полученных достижений.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Выбирает приложения по конкретным функциям Steam.",
	DESCRIPTION_SD_CARD_FILTER: "Выбирает приложения на MicroSD карте.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Выбирает приложения в конкретной папке установки.",
	LABEL_COLLECTION_FILTER: "Коллекция",
	LABEL_INSTALLED_FILTER: "Установлено",
	LABEL_REGEX_FILTER: "Регулярное выражение",
	LABEL_FRIENDS_FILTER: "Друзья",
	LABEL_TAGS_FILTER: "Теги",
	LABEL_WHITELIST_FILTER: "Список разрешённых",
	LABEL_BLACKLIST_FILTER: "Список запрещённых",
	LABEL_MERGE_FILTER: "Скомпоновать",
	LABEL_PLATFORM_FILTER: "Платформа",
	LABEL_DECK_COMPAT_FILTER: "Совместимо со SteamDeck",
	LABEL_MACHINE_COMPAT_FILTER: "Совместимо со SteamOS",
	LABEL_REVIEW_FILTER: "Рейтинг",
	LABEL_TIME_PLAYED_FILTER: "Время в игре",
	LABEL_SIZE_ON_DISK_FILTER: "Размер на диске",
	LABEL_RELEASE_DATE_FILTER: "Дата выхода",
	LABEL_PURCHASE_DATE_FILTER: "Дата покупки",
	LABEL_LAST_PLAYED_FILTER: "Запущено в последний раз",
	LABEL_FAMILY_SHARING_FILTER: "Семейный доступ",
	LABEL_DEMO_FILTER: "Демоверсия",
	LABEL_COMING_SOON_FILTER: "Выходит скоро",
	LABEL_STREAMABLE_FILTER: "Можно стримить",
	LABEL_ACHIEVEMENTS_FILTER: "Достижения",
	LABEL_STEAM_FEATURES_FILTER: "Функции Steam",
	LABEL_SD_CARD_FILTER: "Карта MicroSD",
	LABEL_INSTALL_FOLDER_FILTER: "Папка установки",
	LABEL_DEFAULT_SORT: "По-умолчанию",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Удаление вкладки",
	LABEL_TAB: "Вкладка",
	TITLE_ERROR: "Ошибка",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "Перед сохранением все ошибки надо исправить",
	TITLE_ALL_CAPS_WARNING: "ВНИМАНИЕ!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Сохранить изменения компоновки",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Отменить изменения компоновки",
	TITLE_FIXING_MERGE_GROUP: "Исправить проблемы компоновки во вкладке {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "Все ошибки были исправлены.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Точно удаляем фильтр?",
	LABEL_SELECTED_COLLECTION: "Выбранная коллекция",
	LABEL_RESOLVED: "Решено",
	LABEL_FIX_MERGE_GROUP: "Исправить компоновку группы",
	LABEL_INSERTED_CARD: "Вставленная карта",
	LABEL_SPECIFIC_CARD: "Конкретная карта",
	LABEL_ANY_CARD: "Любая карта",
	LABEL_SELECTED_CARD: "Выбранная карта",
	TITLE_ERRORS: "Ошибки",
	TITLE_FILTER_TYPE: "Тип фильтра",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Пожалуйста, исправьте все вкладки перед сохранением",
	TITLE_TAB_FIXES_NEEDED: "Надо исправить одну или несколько вкладок",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster нашёл проблемные вкладки. Давайте посмотрим на них и исправим",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster нашёл проблемные вкладки. Давайте посмотрим на них и исправим",
	TITLE_TABS_WITH_ERRORS: "Вкладки с ошибками",
	LABEL_APPLY_YOUR_FIXES: "Применить ваши исправления",
	LABEL_APPLY_TAB_FIXES: "Применить исправления",
	TITLE_CHANGE_FILTER_TYPE: "Сменить тип фильтра",
	MESSAGE_REQUIRES_MICROSDECK: "требуется плагин MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "По-умолчанию",
	LABEL_FILTER_INVERSION_INVERT: "НЕ",
	LABEL_REMOVE: "Удалить",
	LABEL_SEARCH: "Найти",
	PLACEHOLDER_SEARCH: "Найти",
	LABEL_AND: "И",
	LABEL_OR: "ИЛИ",
	LABEL_ALL_MODES_SELECTED: "Все выбранные",
	LABEL_MAX_MODES_SELECTED: "Все выбранные",
	LABEL_CHANGE_FILTER_MODE: "Сменить режим фильтра",
	TITLE_CANT_SAVE_MERGE_GROUP: "Не удаётся сохранить компоновку группы",
	MESSAGE_INCOMPLETE_FILTERS: "Некоторые фильтры не настроены",
	MESSAGE_NEED_TWO_FILTERS: "Нужно больше одного фильтра для создания компоновки группы",
	TITLE_MERGE_GROUP: "Компоновка группы",
	LABEL_SAVE_GROUP: "Сохранить группу",
	LABEL_FILTER_INVERTED: "НЕ",
	LABEL_YES: "да",
	LABEL_NO: "нет",
	LABEL_FRIEND_SINGULAR: "друг",
	LABEL_FRIENDS_PLURAL: "друзья",
	LABEL_TAG_SINGULAR: "тег",
	LABEL_TAGS_PLURAL: "теги",
	LABEL_WHITELISTED: "Добавлено в список разрешённых",
	LABEL_BLACKLISTED: "Добавлено в список запрещённых",
	LABEL_GROUPED_FILTERS: "сгруппированные фильтры",
	LABEL_FEATURE_SINGULAR: "функция",
	LABEL_FEATURE_PLURAL: "функции",
	LABEL_ANY: "ЛЮБОЙ  ИЗ",
	LABEL_INSERTED: "Вставлено",
	LABEL_SELECT_DATE: "Выбрать дату…",
	LABEL_MONTH: "Месяц",
	LABEL_DAY: "День",
	LABEL_YEAR: "Год",
	LABEL_IS_INSTALLED: "Установлено?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Введите регулярное выражение",
	LABEL_SELECTED_FRIENDS: "Выбранные друзья",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Добавить друга",
	LABEL_SELECTED_TAGS: "Выбранные теги",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Добавить тег",
	LABEL_WHITELISTED_APPS: "Список разрешённых приложений",
	LABEL_ADD_APP: "Добавить приложение",
	LABEL_YOUR_APPS: "Ваши приложения",
	LABEL_BLACKLISTED_APPS: "Список запрещённых приложений",
	LABEL_EDIT: "Редактировать",
	LABEL_CREATE: "Создать",
	LABEL_MERGE_MODE: "Режим компоновки",
	TITLE_FILTERS: "Фильтры",
	LABEL_SELECTED_PLATFORM: "Выбранная платформа",
	LABEL_SELECTED_COMPATIBILITY: "Совместимо с ",
	LABEL_FAMILY_SHARING_OPTION: "Из семейного доступа?",
	LABEL_IS_DEMO_OPTION: "Есть демоверсия?",
	LABEL_IS_COMING_SOON: "Скоро релиз?",
	LABEL_IS_STREAMABLE_OPTION: "Можно стримить?",
	LABEL_SELECTED_FEATURES: "Выбранные функции",
	LABEL_ADD_FEATURE: "Добавить функцию",
	LABEL_MICROSD_CARD: "Карта MicroSD",
	LABEL_SELECT_INSTALL_FILTERS: "Выбранная папка для установки",
	LABEL_INSTALL_FOLDERS: "Папки установки",
	LABEL_FILTER: "Фильтр",
	MESSAGE_MODE: "режим",
	LABEL_GROUP_COMBINATION_LOGIC: "Логика компоновки групп",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Прежде чем добавлять новый фильтр, сначала закончите с этим",
	LABEL_ADD_FILTER: "Добавить фильтр",
	TITLE_CANT_SAVE_TAB: "Не получается сохранить вкладку",
	LABEL_SAVE_TAB: "Сохранить",
	PLACEHOLDER_TAB_TITLE: "Название для этой вкладки",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Пожалуйста, добавьте имя и хотя бы 1 фильтр",
	TITLE_MODIFYING_TAB: "Изменение",
	TITLE_CREATE_TAB: "Создать новую вкладку",
	LABEL_TAB_NAME: "Имя",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Автоматически скрывать вкладку, если она пуста",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Другие пользователи могут скопировать эту вкладку",
	LABEL_SORT_TAB_BY: "Сортировать приложение по",
	LABEL_INCLUDE_IN_TAB: "Включить в вкладку",
	LABEL_QUICK_TABS: "Быстрые вкладки",
	LABEL_CREATE_TAB: "Создать вкладку",
	LABEL_COLLECTION: "Коллекция",
	LABEL_DECK_COMPATIBILITY: "Совместимо со SteamDeck",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Вставленная карта",
	LABEL_SCROLL_UP: "Прокрутить вверх",
	LABEL_SCROLL_DOWN: "Прокрутить вниз",
	TITLE_CREATE_NEW_TAB_PROFILE: "Создать новый профиль вкладок",
	TITLE_PROFILE_NAME: "Имя профиля",
	PLACEHOLDER_TAB_PROFILE_NAME: "Название этого профиля вкладок",
	TITLE_OVERWRITING_PROFILE: "Перезаписать профиль",
	TITLE_PROFILE_NEW_TABS: "Новые вкладки",
	TITLE_PROFILE_EXISTING_TABS: "Существующие вкладки",
	LABEL_MANAGE_TAB_PROFILES: "Настроить профили вкладок",
	TITLE_CREATE_PROFILE: "Создать профиль",
	LABEL_APPLY_PROFILE: "Применить профиль",
	LABEL_DELETE_PROFILE: "Удалить профиль",
	LABEL_OVERWRITE_PROFILE: "Перезаписать профиль",
	TITLE_DELETE_PROFILE: "Удалить профиль",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Точно удаляем профиль?",
	LABEL_ADD_TAB: "Добавить вкладку",
	LABEL_REORDER_TABS: "Поменять порядок вкладок",
	LABEL_UNHIDE_TABS: "Отобразить вкладки",
	LABEL_EDIT_TAB: "Редактировать",
	LABEL_DUPLICATE_TAB: "Сделать копию",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Создать коллекцию из этой вкладки",
	LABEL_SNAPSHOT_TAB: "Снимок состояния",
	LABEL_HIDE_TAB: "Скрыть",
	LABEL_DELETE_TAB: "Удалить",
	LABEL_TAB_UNHIDE: "Показать",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Показать и настроить",
	TITLE_COLLECTIONS_HIDDEN: "Вкладка коллекции скрыта Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "Чтобы настраивать скрытые приложения, Tab Master не должен скрывать вкладку Коллекции.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "У вас есть вкладки, которые зависят от плагина MicroSDeck, но его версия не подходит. TabMaster ожидает версию {libVersion}, а установлена {pluginVersion}.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Пожалуйста, обновите плагин MicroSDeck до указанной версии.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Попробуйте установить обновление плагина TabMaster, если доступно, или установите его совместимую версию.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Пожалуйста, попробуйте обновить плагины TabMaster и MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "У вас есть вкладки, которые зависят от плагина MicroSDeck, но он не установлен.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Пожалуйста, установите плагин MicroSDeck для работы с этими вкладками.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "А пока эти вкладки не будут отображаться в библиотеке.",
	MESSAGE_RESET: "Сброс",
	TITLE_RESET_TABS: "Сбросить вкладки",
	MESSAGE_RESET_TABS_WARNING: "Точно спрасываем вкладки? Резервная копия будет лежать в ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Не получилось загрузить настройки",
	MESSAGE_LOAD_SETTINGS_ERROR: "Структура файла настроек не будет загружена, так как не соответствует ожидаемой схеме. Может быть произошли изменения Steam или ошибка в TabMaster. Файл необходимо исправить или вернуться к заводским настройкам. Возвращение к заводским настройкам сбросит конфигурацию, но их копия будет сохранена как резервная. Возможно следующие версии TabMaster сможет его импортировать, но сделать это надо будет вручную.",
	LABEL_TAB_ACTIONS: "Действия",
	LABEL_OPEN_TAB_OPTIONS: "Открыть настройки вкладки",
	TITLE_TABS: "Вкладки",
	TITLE_HIDDEN_TABS: "Скрытые вкладки",
	LABEL_UNHIDE_TAB: "Показать вкладки",
	MESSAGE_SHOW_TAB: "Показать",
	LABEL_CLEAR_ERROR: "Очистить ошибки",
	MESSAGE_TABMASTER_ERROR: "Произошла ошибка Tab Master",
	LABEL_TABS: "Вкладки",
	LABEL_FILTER_PLURAL: "Фильтры",
	TITLE_SHARED_TABS: "Общие вкладки",
	TITLE_RESTART_STEAM: "Перезапустить Steam?",
	LABEL_RESTART_LATER: "Позже",
	LABEL_RESTART_NOW: "Перезагрузить сейчас",
	MESSAGE_RESTART_REASON: "Ваша резервная копия была восстановлена. TabMaster был настроен не сохранить изменения, до перезагрузки. Так мы избегаем перезаписи восстановленных параметров. Перезагрузитесь как можно быстрее.",
	MESSAGE_SUPPORT_REACHOUT: "Пожалуйста, свяжитесь с",
	MESSAGE_SUPPORT_OR: "или",
	MESSAGE_SUPPORT_END: "для поддержки",
	LABEL_HIDE_NOTICE: "Скрыть уведомление",
	MESSAGE_QAM_DESCRIPTION: "Тут вы можете добавлять, изменять порядок или удалять вкладки из библиотеки.",
	LABEL_ADD_QUICK_TAB: "Добавить Быструю Вкладку",
	LABEL_VIEW_SHARED_TABS: "Просмотреть общие вкладки",
	LABEL_RESTORE_SETTINGS: "Восстановить настройки",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, pe = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, me = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags",
	TITLE_TABMASTER_SETTINGS: "TabMaster Settings"
}, he = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Поділити/Розділити екран PvP",
	LABEL_ONLINE_COOP: "Онлайн кооператив",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Міжплатформовий мультиплеєр",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR підтримується",
	LABEL_VR_ONLY: "Тільки VR",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Віддалене відтворення на телефоні",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Оберіть дату...",
	LABEL_MONTH: "Місяць",
	LABEL_DAY: "День",
	LABEL_YEAR: "Рік",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, ge = {
	LOGIC_MODE_AND: "且",
	LOGIC_MODE_OR: "或",
	LABEL_COUNT: "计数",
	LABEL_PERCENT: "百分比",
	LABEL_AT_LEAST: "至少",
	LABEL_AT_MOST: "至多",
	LABEL_EARLIEST: "最早",
	LABEL_LATEST: "最近",
	LABEL_BY_DAY: "按日",
	LABEL_BY_MONTH: "按月",
	LABEL_BY_YEAR: "按年",
	LABEL_BY_DAYS_AGO: "按距今天数",
	LABEL_MINUTES: "分钟",
	LABEL_HOURS: "小时",
	LABEL_DAYS: "天",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic 得分 {scoreThreshold} 或更高",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic 得分 {scoreThreshold} 或更低",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "Steam 评分不低于 {scoreThreshold}% 为好评",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "Steam 评分不高于 {scoreThreshold}% 为好评",
	LABEL_DAY_SINGULAR: "天",
	LABEL_DAY_PLURAL: "天",
	LABEL_HOUR_SINGULAR: "小时",
	LABEL_HOUR_Plural: "小时",
	LABEL_MINUTE_SINGULAR: "分钟",
	LABEL_MINUTE_Plural: "分钟",
	LABEL_TIME_ABOVE: "或多于",
	LABEL_TIME_PLAYED_FILTER_BELOW: "或少于",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "已游玩 {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "上次游玩",
	LABEL_RELEASE_DATE_PREFIX: "发布于",
	LABEL_PURCHASE_DATE_PREFIX: "已购买",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "在 {dateLabel} 及之后",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "在 {dateLabel} 及之前",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} 天前或更晚",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} 天前或更早",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} 天前或更晚",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} 天前或更早",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "或更多项成就已完成",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "或更少项成就已完成",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "或更多在磁盘上",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "或更少在磁盘上",
	LABEL_ONLINE_PVP: "在线对抗",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "共享/分屏对抗",
	LABEL_ONLINE_COOP: "在线合作",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "共享/分屏合作",
	LABEL_SHARED_SPLIT_SCREEN: "共享/分屏",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "跨平台多玩家",
	LABEL_TRACKED_MOTION_CONTROLLER: "跟踪移动控制器",
	LABEL_VR_SUPPORTED: "支持 VR",
	LABEL_VR_ONLY: "仅限 VR",
	LABEL_STEAM_TRADING_CARDS: "Steam 集换式卡牌",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China 创意工坊",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR 收藏品",
	LABEL_IN_APP_PURCHASES: "应用程序内购",
	LABEL_VAC_ENABLED: "VAC 已启用",
	LABEL_STEAM_LEADERBOARDS: "Steam 排行榜",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam 切换通知",
	LABEL_REMOTE_PLAY_ON_PHONE: "手机上远程同乐",
	LABEL_REMOTE_PLAY_ON_TABLET: "平板电脑上远程同乐",
	LABEL_REMOTE_PLAY_ON_TV: "电视上远程同乐",
	DESCRIPTION_COLLECTION_FILTER: "选择在特定 Steam 合集中的应用。",
	DESCRIPTION_INSTALLED_FILTER: "选择已安装/卸载的应用。",
	DESCRIPTION_REGEX_FILTER: "选择其标题匹配正则表达式的应用。",
	DESCRIPTION_FRIENDS_FILTER: "选择朋友也同时拥有的应用。",
	DESCRIPTION_TAGS_FILTER: "选择具有特定社区标签的应用。",
	DESCRIPTION_WHITELIST_FILTER: "选择添加到列表的应用。",
	DESCRIPTION_BLACKLIST_FILTER: "选择未添加到列表中的应用。",
	DESCRIPTION_MERGE_FILTER: "选择满足一组筛选器的应用。",
	DESCRIPTION_PLATFORM_FILTER: "选择 Steam 或非 Steam 应用。",
	DESCRIPTION_DECK_COMPAT_FILTER: "选择具有特定 Steam Deck 兼容状态的应用。",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "选择具有特定 SteamOS 兼容状态的应用。",
	DESCRIPTION_REVIEW_FILTER: "按其 metacritic/steam 评分选择应用。",
	DESCRIPTION_TIME_PLAYED_FILTER: "按您的游玩时长选择应用。",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "按其安装大小选择应用。",
	DESCRIPTION_RELEASE_DATE_FILTER: "按其发布日期选择应用。",
	DESCRIPTION_PURCHASE_DATE_FILTER: "按您的购买时间选择应用。",
	DESCRIPTION_LAST_PLAYED_FILTER: "按上次游玩距今时间选择应用。",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "按完成百分比选择应用。",
	DESCRIPTION_STEAM_FEATURES_FILTER: "选择支持特定 Steam 功能的应用。",
	DESCRIPTION_SD_CARD_FILTER: "选择已插入/特定的 MicroSD 卡上存在的应用。",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "选择安装在特定 Steam 安装目录中的应用。",
	LABEL_COLLECTION_FILTER: "合集",
	LABEL_INSTALLED_FILTER: "已安装",
	LABEL_REGEX_FILTER: "正则表达式",
	LABEL_FRIENDS_FILTER: "好友",
	LABEL_TAGS_FILTER: "标签",
	LABEL_WHITELIST_FILTER: "白名单",
	LABEL_BLACKLIST_FILTER: "黑名单",
	LABEL_MERGE_FILTER: "合并",
	LABEL_PLATFORM_FILTER: "平台",
	LABEL_DECK_COMPAT_FILTER: "Deck 兼容性",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS 兼容性",
	LABEL_REVIEW_FILTER: "评分",
	LABEL_TIME_PLAYED_FILTER: "游玩时长",
	LABEL_SIZE_ON_DISK_FILTER: "磁盘空间",
	LABEL_RELEASE_DATE_FILTER: "发布日期",
	LABEL_PURCHASE_DATE_FILTER: "购买日期",
	LABEL_LAST_PLAYED_FILTER: "最近游玩",
	LABEL_FAMILY_SHARING_FILTER: "家庭共享",
	LABEL_DEMO_FILTER: "演示版",
	LABEL_COMING_SOON_FILTER: "即将推出",
	LABEL_STREAMABLE_FILTER: "可串流",
	LABEL_ACHIEVEMENTS_FILTER: "成就",
	LABEL_STEAM_FEATURES_FILTER: "Steam 功能",
	LABEL_SD_CARD_FILTER: "MicroSD 卡",
	LABEL_INSTALL_FOLDER_FILTER: "安装目录",
	LABEL_DEFAULT_SORT: "默认值",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "删除标签页",
	LABEL_TAB: "标签页",
	TITLE_ERROR: "错误",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "保存前必须解决所有错误",
	TITLE_ALL_CAPS_WARNING: "警告！",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "保存变更",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "放弃变更",
	TITLE_FIXING_MERGE_GROUP: "修复标签页 {tabName} 中的合并组",
	MESSAGE_ALL_ERRORS_RESOLVED: "所有错误都已解决。",
	MESSAGE_DELETE_FILTER_CONFIRM: "您确定要删除这个筛选器吗？",
	LABEL_SELECTED_COLLECTION: "已选中合集",
	LABEL_RESOLVED: "已解决",
	LABEL_FIX_MERGE_GROUP: "修复合并组",
	LABEL_INSERTED_CARD: "已插入存储卡",
	LABEL_SPECIFIC_CARD: "特定存储卡",
	LABEL_ANY_CARD: "任意存储卡",
	LABEL_SELECTED_CARD: "已选中存储卡",
	TITLE_ERRORS: "错误",
	TITLE_FILTER_TYPE: "筛选器类型",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "保存前请修复所有标签页",
	TITLE_TAB_FIXES_NEEDED: "一个或多个标签页需要修复",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster 在一个或多个您的标签中发现问题。请花点时间查看下面的若干问题并予以纠正。",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster 在一个或多个您的标签中发现问题。请花点时间查看下面的问题并予以纠正。",
	TITLE_TABS_WITH_ERRORS: "有错误的标签",
	LABEL_APPLY_YOUR_FIXES: "应用您的修复",
	LABEL_APPLY_TAB_FIXES: "应用修复",
	TITLE_CHANGE_FILTER_TYPE: "更改筛选器类型",
	MESSAGE_REQUIRES_MICROSDECK: "需要 MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "默认",
	LABEL_FILTER_INVERSION_INVERT: "反向选择",
	LABEL_REMOVE: "移除",
	LABEL_SEARCH: "搜索",
	PLACEHOLDER_SEARCH: "搜索",
	LABEL_AND: "且",
	LABEL_OR: "或",
	LABEL_ALL_MODES_SELECTED: "已选中全部",
	LABEL_MAX_MODES_SELECTED: "已选中最大",
	LABEL_CHANGE_FILTER_MODE: "更改筛选模式",
	TITLE_CANT_SAVE_MERGE_GROUP: "无法保存合并组",
	MESSAGE_INCOMPLETE_FILTERS: "某些过滤器不完整",
	MESSAGE_NEED_TWO_FILTERS: "合并组应该至少有 2 个过滤器",
	TITLE_MERGE_GROUP: "合并组",
	LABEL_SAVE_GROUP: "保存组",
	LABEL_FILTER_INVERTED: "已倒置",
	LABEL_YES: "是",
	LABEL_NO: "否",
	LABEL_FRIEND_SINGULAR: "好友",
	LABEL_FRIENDS_PLURAL: "好友",
	LABEL_TAG_SINGULAR: "标签",
	LABEL_TAGS_PLURAL: "标签",
	LABEL_WHITELISTED: "已列入白名单",
	LABEL_BLACKLISTED: "已列入黑名单",
	LABEL_GROUPED_FILTERS: "分组的筛选器",
	LABEL_FEATURE_SINGULAR: "功能",
	LABEL_FEATURE_PLURAL: "功能",
	LABEL_ANY: "任意",
	LABEL_INSERTED: "已插入",
	LABEL_SELECT_DATE: "选择日期......",
	LABEL_MONTH: "月",
	LABEL_DAY: "日",
	LABEL_YEAR: "年",
	LABEL_IS_INSTALLED: "已安装？",
	PLACEHOLDER_REGULAR_EXPRESSION: "输入正则表达式",
	LABEL_SELECTED_FRIENDS: "已选中好友",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "添加好友",
	LABEL_SELECTED_TAGS: "已选中标签",
	LABEL_TAGS_OPTIONS_ADD_TAG: "添加标签",
	LABEL_WHITELISTED_APPS: "白名单应用",
	LABEL_ADD_APP: "添加应用",
	LABEL_YOUR_APPS: "您的应用",
	LABEL_BLACKLISTED_APPS: "黑名单应用",
	LABEL_EDIT: "编辑",
	LABEL_CREATE: "创建",
	LABEL_MERGE_MODE: "合并模式",
	TITLE_FILTERS: "筛选器",
	LABEL_SELECTED_PLATFORM: "已选中平台",
	LABEL_SELECTED_COMPATIBILITY: "已选中兼容性",
	LABEL_FAMILY_SHARING_OPTION: "来自家庭成员？",
	LABEL_IS_DEMO_OPTION: "演示版？",
	LABEL_IS_COMING_SOON: "尚未发行？",
	LABEL_IS_STREAMABLE_OPTION: "可串流？",
	LABEL_SELECTED_FEATURES: "已选中功能",
	LABEL_ADD_FEATURE: "添加功能",
	LABEL_MICROSD_CARD: "Micro SD 卡",
	LABEL_SELECT_INSTALL_FILTERS: "已选中安装目录",
	LABEL_INSTALL_FOLDERS: "安装目录",
	LABEL_FILTER: "筛选器",
	MESSAGE_MODE: "模式",
	LABEL_GROUP_COMBINATION_LOGIC: "组间合并逻辑",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "请先完成当前筛选器再添加新的",
	LABEL_ADD_FILTER: "添加筛选器",
	TITLE_CANT_SAVE_TAB: "无法保存标签页",
	LABEL_SAVE_TAB: "保存",
	PLACEHOLDER_TAB_TITLE: "本标签页的标题",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "请添加名称和至少一个筛选器",
	TITLE_MODIFYING_TAB: "正在修改",
	TITLE_CREATE_TAB: "创建新标签页",
	LABEL_TAB_NAME: "名称",
	LABEL_AUTOMATICALLY_HIDE_TAB: "内容为空时自动隐藏标签页",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "其他用户可以复制此标签页",
	LABEL_SORT_TAB_BY: "应用排序依据",
	LABEL_INCLUDE_IN_TAB: "在标签页中包含",
	LABEL_QUICK_TABS: "快速标签页",
	LABEL_CREATE_TAB: "创建标签页",
	LABEL_COLLECTION: "合集",
	LABEL_DECK_COMPATIBILITY: "Deck 兼容性",
	LABEL_PRESET_TITLE_INSERTED_CARD: "已插入存储卡",
	LABEL_SCROLL_UP: "向上滚动",
	LABEL_SCROLL_DOWN: "向下滚动",
	TITLE_CREATE_NEW_TAB_PROFILE: "创建新的标签页配置档案",
	TITLE_PROFILE_NAME: "配置档案名称",
	PLACEHOLDER_TAB_PROFILE_NAME: "本标签页配置档案的名称",
	TITLE_OVERWRITING_PROFILE: "覆盖配置档案",
	TITLE_PROFILE_NEW_TABS: "新建标签页",
	TITLE_PROFILE_EXISTING_TABS: "已有标签页",
	LABEL_MANAGE_TAB_PROFILES: "管理标签页配置档案",
	TITLE_CREATE_PROFILE: "创建配置档案",
	LABEL_APPLY_PROFILE: "应用配置档案",
	LABEL_DELETE_PROFILE: "删除配置档案",
	LABEL_OVERWRITE_PROFILE: "覆盖配置档案",
	TITLE_DELETE_PROFILE: "即将删除配置档案",
	MESSAGE_CONFIRM_DELETE_PROFILE: "您确定要删除此配置档案吗？",
	LABEL_ADD_TAB: "添加标签页",
	LABEL_REORDER_TABS: "重排标签页",
	LABEL_UNHIDE_TABS: "取消隐藏标签页",
	LABEL_EDIT_TAB: "编辑",
	LABEL_DUPLICATE_TAB: "创建副本",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "基于此标签页创建合集",
	LABEL_SNAPSHOT_TAB: "快照",
	LABEL_HIDE_TAB: "隐藏",
	LABEL_DELETE_TAB: "删除",
	LABEL_TAB_UNHIDE: "取消隐藏",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "取消隐藏并管理",
	TITLE_COLLECTIONS_HIDDEN: "合集标签页已被 TabMaster 隐藏！",
	MESSAGE_COLLECTIONS_UNHIDE: "为了管理隐藏的应用，TabMaster 必须取消隐藏您的合集标签页。",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "您有一些依赖于 MicroSDeck 插件的标签页，但是检测到存在版本不匹配的问题。TabMaster 期望其版本为 {libVersion}，而当前安装的版本为 {pluginVersion}。",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "请更新 MicroSDeck 到指定版本。",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "请在 TabMaster 更新可用时对其进行更新，或者选择安装 MicroSDeck 的指定版本。",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "请尝试更新 TabMaster 或 MicroSDeck。",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "您有一些依赖 MicroSDeck 插件的标签页，但它尚未安装。",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "请安装 MicroSDeck 以使这些标签页正常工作。",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "在此之前，这些标签页将不会显示在库中。",
	MESSAGE_RESET: "重置",
	TITLE_RESET_TABS: "重置标签页",
	MESSAGE_RESET_TABS_WARNING: "您确定要重置标签吗？备份将在 ~/homebrew/settings/TabMaster 中创建。",
	TITLE_CANT_LOAD_SETTINGS: "无法加载设置",
	MESSAGE_LOAD_SETTINGS_ERROR: "设置文件不符合预期的结构，无法加载。 这可能是由于多种原因，例如 Steam 的更改或 TabMaster 的程序缺陷。 要继续运行，必须先纠正此问题。此外您也可以重置标签页设置回到默认设置。 这将清除所有设置项，而当前设置的副本将自动保存为备份。未来的TabMaster 更新有可能能够纠正这个问题，但那时您将需要基于备份执行手动还原操作。",
	LABEL_TAB_ACTIONS: "动作",
	LABEL_OPEN_TAB_OPTIONS: "打开标签页选项",
	TITLE_TABS: "标签页",
	TITLE_HIDDEN_TABS: "隐藏的标签页",
	LABEL_UNHIDE_TAB: "取消隐藏标签页",
	MESSAGE_SHOW_TAB: "显示",
	LABEL_CLEAR_ERROR: "清除错误",
	MESSAGE_TABMASTER_ERROR: "TabMaster 遇到错误",
	LABEL_TABS: "标签页",
	LABEL_FILTER_PLURAL: "筛选器",
	TITLE_SHARED_TABS: "共享标签页",
	TITLE_RESTART_STEAM: "重新启动Steam吗？",
	LABEL_RESTART_LATER: "稍后",
	LABEL_RESTART_NOW: "立即重新启动",
	MESSAGE_RESTART_REASON: "您的备份已经恢复。TabMaster 已被设置为在重新启动之前不保存更改，以避免覆盖您已恢复的设置。强烈建议尽快重新启动",
	MESSAGE_SUPPORT_REACHOUT: "请联系",
	MESSAGE_SUPPORT_OR: "或",
	MESSAGE_SUPPORT_END: "以获得支持。",
	LABEL_HIDE_NOTICE: "隐藏通知",
	MESSAGE_QAM_DESCRIPTION: "您可以在这里添加、重新排序或删除库中的标签页。",
	LABEL_ADD_QUICK_TAB: "添加快速标签页",
	LABEL_VIEW_SHARED_TABS: "查看共享标签页",
	LABEL_RESTORE_SETTINGS: "还原设置",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags",
	TITLE_TABMASTER_SETTINGS: "TabMaster Settings"
}, _e = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags",
	TITLE_TABMASTER_SETTINGS: "TabMaster Settings"
}, ve = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, ye = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_BY_UNKNOWN: "By Unknown Date",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE: "Last played date is unknown",
	LABEL_DATE_FILTER_BY_UNKNOWN_DATE: "Purchase date is unknown",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_DISPLAY_TAB_AS_COLLECTION: "Display this tab as a Steam Collection",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	LABEL_TAG_OVERRIDE_ADD: "Add",
	LABEL_TAG_OVERRIDE_IGNORE: "Ignore",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM: "Are you sure you want to delete this tag from your overrides? This can't be undone.",
	LABEL_YOUR_TAGS: "Your Tags",
	LABEL_TAG_OVERRIDE_SINGULAR: "Override",
	LABEL_TAG_OVERRIDE_PLURAL: "Overrides",
	LABEL_TAG_OVERRIDE_COLLAPSE: "Collapse",
	LABEL_TAG_OVERRIDE_EXPAND: "Expand",
	MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM: "Are you sure you want to delete this game from your overrides? This can't be undone.",
	LABEL_ADD_TAG: "Add Tag",
	LABEL_TAG_OVERRIDES: "App Tag Overrides",
	DESCRIPTION_TAG_OVERRIDES: "Allows you to override specific tags for apps you own.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags"
}, be = {
	LOGIC_MODE_AND: "and",
	LOGIC_MODE_OR: "or",
	LABEL_COUNT: "Count",
	LABEL_PERCENT: "Percent",
	LABEL_AT_LEAST: "At least",
	LABEL_AT_MOST: "At most",
	LABEL_EARLIEST: "Earliest",
	LABEL_LATEST: "Latest",
	LABEL_BY_DAY: "By Day",
	LABEL_BY_MONTH: "By Month",
	LABEL_BY_YEAR: "By Year",
	LABEL_BY_DAYS_AGO: "By Days Ago",
	LABEL_MINUTES: "Minutes",
	LABEL_HOURS: "Hours",
	LABEL_DAYS: "Days",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE: "Metacritic of {scoreThreshold} or higher",
	LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW: "Metacritic of {scoreThreshold} or lower",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE: "At least {scoreThreshold}% positive Steam reviews",
	LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW: "At most {scoreThreshold}% positive Steam reviews",
	LABEL_DAY_SINGULAR: "day",
	LABEL_DAY_PLURAL: "days",
	LABEL_HOUR_SINGULAR: "hour",
	LABEL_HOUR_Plural: "hours",
	LABEL_MINUTE_SINGULAR: "minute",
	LABEL_MINUTE_Plural: "minutes",
	LABEL_TIME_ABOVE: "or more",
	LABEL_TIME_PLAYED_FILTER_BELOW: "or less",
	LABEL_TIME_PLAYED_PLAYED_FOR_TIME: "Played for {time}",
	LABEL_TIME_PLAYED_TIME: "{time}",
	LABEL_LAST_PLAYED_PREFIX: "Last played",
	LABEL_RELEASE_DATE_PREFIX: "Released",
	LABEL_PURCHASE_DATE_PREFIX: "Purchased",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE: "In or after {dateLabel}",
	LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW: "In or before {dateLabel}",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER: "{daysAgo} day ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER: "{daysAgo} day ago or earlier",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER: "{daysAgo} days ago or later",
	LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER: "{daysAgo} days ago or earlier",
	LABEL_ACHIEVEMENTS_FILTER_ABOVE: "or more achievements completed",
	LABEL_ACHIEVEMENTS_FILTER_BELOW: "or less achievements completed",
	LABEL_SIZE_ON_DISK_FILTER_ABOVE: "or more on disk",
	LABEL_SIZE_ON_DISK_FILTER_BELOW: "or less on disk",
	LABEL_ONLINE_PVP: "Online PvP",
	LABEL_SHARED_SPLIT_SCREEN_PVP: "Shared/Split Screen PvP",
	LABEL_ONLINE_COOP: "Online Co-op",
	LABEL_SHARED_SPLIT_SCREEN_COOP: "Shared/Split Screen Co-op",
	LABEL_SHARED_SPLIT_SCREEN: "Shared/Split Screen",
	LABEL_CROSS_PLATFORM_MULTIPLAYER: "Cross-Platform Multiplayer",
	LABEL_TRACKED_MOTION_CONTROLLER: "Tracked Motion Controller",
	LABEL_VR_SUPPORTED: "VR Supported",
	LABEL_VR_ONLY: "VR Only",
	LABEL_STEAM_TRADING_CARDS: "Steam Trading Cards",
	LABEL_STEAM_CHINA_WORKSHOP: "Steam China Workshop",
	LABEL_STEAM_VR_COLLECTIBLES: "SteamVR Collectibles",
	LABEL_IN_APP_PURCHASES: "In-App Purchases",
	LABEL_VAC_ENABLED: "VAC Enabled",
	LABEL_STEAM_LEADERBOARDS: "Steam Leaderboards",
	LABEL_STEAM_TURN_NOTIFICATION: "Steam Turn Notifications",
	LABEL_REMOTE_PLAY_ON_PHONE: "Remote Play on Phone",
	LABEL_REMOTE_PLAY_ON_TABLET: "Remote Play on Tablet",
	LABEL_REMOTE_PLAY_ON_TV: "Remote Play on TV",
	DESCRIPTION_COLLECTION_FILTER: "Selects apps that are in a certain Steam Collection.",
	DESCRIPTION_INSTALLED_FILTER: "Selects apps that are installed/uninstalled.",
	DESCRIPTION_REGEX_FILTER: "Selects apps whose titles match a regular expression.",
	DESCRIPTION_FRIENDS_FILTER: "Selects apps that are also owned by friends.",
	DESCRIPTION_TAGS_FILTER: "Selects apps that have specific community tags.",
	DESCRIPTION_WHITELIST_FILTER: "Selects apps that are added to the list.",
	DESCRIPTION_BLACKLIST_FILTER: "Selects apps that are not added to the list.",
	DESCRIPTION_MERGE_FILTER: "Selects apps that pass a subgroup of filters.",
	DESCRIPTION_PLATFORM_FILTER: "Selects Steam or non-Steam apps.",
	DESCRIPTION_DECK_COMPAT_FILTER: "Selects apps that have a specific Steam Deck compatibilty status.",
	DESCRIPTION_MACHINE_COMPAT_FILTER: "Selects apps that have a specific SteamOS compatibilty status.",
	DESCRIPTION_REVIEW_FILTER: "Selects apps based on their metacritic/steam review score.",
	DESCRIPTION_TIME_PLAYED_FILTER: "Selects apps based on your play time.",
	DESCRIPTION_SIZE_ON_DISK_FILTER: "Selects apps based on their install size.",
	DESCRIPTION_RELEASE_DATE_FILTER: "Selects apps based on their release date.",
	DESCRIPTION_PURCHASE_DATE_FILTER: "Selects apps based on when you purchased them.",
	DESCRIPTION_LAST_PLAYED_FILTER: "Selects apps based on when they were last played.",
	DESCRIPTION_FAMILY_SHARING_FILTER: "Selects apps that are/aren't shared from family members.",
	DESCRIPTION_DEMO_FILTER: "Selects apps that are/aren't demos.",
	DESCRIPTION_COMING_SOON_FILTER: "Selects apps that are/aren't soon to be released.",
	DESCRIPTION_STREAMABLE_FILTER: "Selects apps that can/can't be streamed from another computer.",
	DESCRIPTION_ACHIEVEMENTS_FILTER: "Selects apps based on their completion percentage.",
	DESCRIPTION_STEAM_FEATURES_FILTER: "Selects apps that support specific Steam Features.",
	DESCRIPTION_SD_CARD_FILTER: "Selects apps that are present on the inserted/specific MicroSD Card.",
	DESCRIPTION_INSTALL_FOLDER_FILTER: "Selects apps that are installed in a specific Steam Install Folder.",
	LABEL_COLLECTION_FILTER: "Collection",
	LABEL_INSTALLED_FILTER: "Installed",
	LABEL_REGEX_FILTER: "Regex",
	LABEL_FRIENDS_FILTER: "Friends",
	LABEL_TAGS_FILTER: "Tags",
	LABEL_WHITELIST_FILTER: "Whitelist",
	LABEL_BLACKLIST_FILTER: "Blacklist",
	LABEL_MERGE_FILTER: "Merge",
	LABEL_PLATFORM_FILTER: "Platform",
	LABEL_DECK_COMPAT_FILTER: "Deck Compatibility",
	LABEL_MACHINE_COMPAT_FILTER: "SteamOS Compatibility",
	LABEL_REVIEW_FILTER: "Review Score",
	LABEL_TIME_PLAYED_FILTER: "Time Played",
	LABEL_SIZE_ON_DISK_FILTER: "Size On Disk",
	LABEL_RELEASE_DATE_FILTER: "Release Date",
	LABEL_PURCHASE_DATE_FILTER: "Purchase Date",
	LABEL_LAST_PLAYED_FILTER: "Last Played",
	LABEL_FAMILY_SHARING_FILTER: "Family Sharing",
	LABEL_DEMO_FILTER: "Demo",
	LABEL_COMING_SOON_FILTER: "Coming Soon",
	LABEL_STREAMABLE_FILTER: "Streamable",
	LABEL_ACHIEVEMENTS_FILTER: "Achievements",
	LABEL_STEAM_FEATURES_FILTER: "Steam Features",
	LABEL_SD_CARD_FILTER: "MicroSD Card",
	LABEL_INSTALL_FOLDER_FILTER: "Install Folder",
	LABEL_DEFAULT_SORT: "Default",
	MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB: "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.",
	MESSAGE_DELETING_TAB: "Deleting Tab",
	LABEL_TAB: "Tab",
	TITLE_ERROR: "Error",
	MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS: "All errors must be resolved before saving",
	TITLE_ALL_CAPS_WARNING: "WARNING!",
	MESSAGE_FIXING_MERGE_GROUP_IS_FINAL: "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.",
	LABEL_MERGE_GROUP_SAVE_CHANGES: "Save Changes",
	LABEL_MERGE_GROUP_DISCARD_CHANGES: "Discard Changes",
	TITLE_FIXING_MERGE_GROUP: "Fix Merge Group in Tab {tabName}",
	MESSAGE_ALL_ERRORS_RESOLVED: "All errors have been resolved.",
	MESSAGE_DELETE_FILTER_CONFIRM: "Are you sure you want to delete this filter?",
	LABEL_SELECTED_COLLECTION: "Selected Collection",
	LABEL_RESOLVED: "Resolved",
	LABEL_FIX_MERGE_GROUP: "Fix Merge Group",
	LABEL_INSERTED_CARD: "Inserted Card",
	LABEL_SPECIFIC_CARD: "Specific Card",
	LABEL_ANY_CARD: "Any Card",
	LABEL_SELECTED_CARD: "Selected Card",
	TITLE_ERRORS: "Errors",
	TITLE_FILTER_TYPE: "Filter Type",
	MESSAGE_DELETE_CANT_BE_UNDONE: "Are you sure you want to delete this Tab? This can't be undone.",
	MESSAGE_MUST_FIX_ALL_TAB_ERRORS: "Please fix all tabs before saving",
	TITLE_TAB_FIXES_NEEDED: "Fixes Needed for One or More Tabs",
	MESSAGE_TAB_ERRORS_FOUND_PLURAL: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.",
	MESSAGE_TAB_ERRORS_FOUND_SINGULAR: "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it.",
	TITLE_TABS_WITH_ERRORS: "Tabs With Errors",
	LABEL_APPLY_YOUR_FIXES: "Apply Your Fixes",
	LABEL_APPLY_TAB_FIXES: "Apply Fixes",
	TITLE_CHANGE_FILTER_TYPE: "Change Filter Type",
	MESSAGE_REQUIRES_MICROSDECK: "requires MicroSDeck",
	LABEL_FILTER_INVERSION_DEFAULT: "Default",
	LABEL_FILTER_INVERSION_INVERT: "Invert",
	LABEL_REMOVE: "Remove",
	LABEL_SEARCH: "Search",
	PLACEHOLDER_SEARCH: "Search",
	LABEL_AND: "And",
	LABEL_OR: "Or",
	LABEL_ALL_MODES_SELECTED: "All selected",
	LABEL_MAX_MODES_SELECTED: "Max selected",
	LABEL_CHANGE_FILTER_MODE: "Change the filter mode",
	TITLE_CANT_SAVE_MERGE_GROUP: "Cannot Save Merge Group",
	MESSAGE_INCOMPLETE_FILTERS: "Some filters are incomplete",
	MESSAGE_NEED_TWO_FILTERS: "A Merge group should have at least 2 filters",
	TITLE_MERGE_GROUP: "Merge Group",
	LABEL_SAVE_GROUP: "Save Group",
	LABEL_FILTER_INVERTED: "inverted",
	LABEL_YES: "yes",
	LABEL_NO: "no",
	LABEL_FRIEND_SINGULAR: "friend",
	LABEL_FRIENDS_PLURAL: "friends",
	LABEL_TAG_SINGULAR: "tag",
	LABEL_TAGS_PLURAL: "tags",
	LABEL_WHITELISTED: "whitelisted",
	LABEL_BLACKLISTED: "blacklisted",
	LABEL_GROUPED_FILTERS: "grouped filters",
	LABEL_FEATURE_SINGULAR: "feature",
	LABEL_FEATURE_PLURAL: "features",
	LABEL_ANY: "Any",
	LABEL_INSERTED: "Inserted",
	LABEL_SELECT_DATE: "Select Date...",
	LABEL_MONTH: "Month",
	LABEL_DAY: "Day",
	LABEL_YEAR: "Year",
	LABEL_IS_INSTALLED: "Is installed?",
	PLACEHOLDER_REGULAR_EXPRESSION: "Input a Regular Expression",
	LABEL_SELECTED_FRIENDS: "Selected Friends",
	LABEL_FRIENDS_OPTIONS_ADD_FRIEND: "Add a friend",
	LABEL_SELECTED_TAGS: "Selected Tags",
	LABEL_TAGS_OPTIONS_ADD_TAG: "Add a tag",
	LABEL_WHITELISTED_APPS: "Whitelisted Apps",
	LABEL_ADD_APP: "Add an app",
	LABEL_YOUR_APPS: "Your Apps",
	LABEL_BLACKLISTED_APPS: "Blacklisted Apps",
	LABEL_EDIT: "Edit",
	LABEL_CREATE: "Create",
	LABEL_MERGE_MODE: "Merge Mode",
	TITLE_FILTERS: "Filters",
	LABEL_SELECTED_PLATFORM: "Selected Platform",
	LABEL_SELECTED_COMPATIBILITY: "Selected Compatibility",
	LABEL_FAMILY_SHARING_OPTION: "Is from a family member?",
	LABEL_IS_DEMO_OPTION: "Is demo?",
	LABEL_IS_COMING_SOON: "Is Coming Soon?",
	LABEL_IS_STREAMABLE_OPTION: "Is streamable?",
	LABEL_SELECTED_FEATURES: "Selected Features",
	LABEL_ADD_FEATURE: "Add a feature",
	LABEL_MICROSD_CARD: "Micro SD Card",
	LABEL_SELECT_INSTALL_FILTERS: "Selected Install Folder",
	LABEL_INSTALL_FOLDERS: "Install Folders",
	LABEL_FILTER: "Filter",
	MESSAGE_MODE: "mode",
	LABEL_GROUP_COMBINATION_LOGIC: "Group Combination Logic",
	MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING: "Please finish the current filter before adding another",
	LABEL_ADD_FILTER: "Add Filter",
	TITLE_CANT_SAVE_TAB: "Cannot Save Tab",
	LABEL_SAVE_TAB: "Save",
	PLACEHOLDER_TAB_TITLE: "The title for this tab",
	MESSAGE_ADD_TAB_NAMEE_AND_FILTER: "Please add a name and at least 1 filter",
	TITLE_MODIFYING_TAB: "Modifying",
	TITLE_CREATE_TAB: "Create New Tab",
	LABEL_TAB_NAME: "Name",
	LABEL_AUTOMATICALLY_HIDE_TAB: "Automatically hide tab if empty",
	LABEL_OTHER_USERS_CAN_COPY_TAB: "Other users can copy this tab",
	LABEL_SORT_TAB_BY: "Sort apps by",
	LABEL_INCLUDE_IN_TAB: "Include in tab",
	LABEL_QUICK_TABS: "Quick Tabs",
	LABEL_CREATE_TAB: "Create Tab",
	LABEL_COLLECTION: "Collection",
	LABEL_DECK_COMPATIBILITY: "Deck Compatibility",
	LABEL_PRESET_TITLE_INSERTED_CARD: "Inserted Card",
	LABEL_SCROLL_UP: "Scroll Up",
	LABEL_SCROLL_DOWN: "Scroll Down",
	TITLE_CREATE_NEW_TAB_PROFILE: "Create New Tab Profile",
	TITLE_PROFILE_NAME: "Profile Name",
	PLACEHOLDER_TAB_PROFILE_NAME: "The name of this tab profile",
	TITLE_OVERWRITING_PROFILE: "Overwriting Profile",
	TITLE_PROFILE_NEW_TABS: "New Tabs",
	TITLE_PROFILE_EXISTING_TABS: "Existing Tabs",
	LABEL_MANAGE_TAB_PROFILES: "Manage Tab Profiles",
	TITLE_CREATE_PROFILE: "Create Profile",
	LABEL_APPLY_PROFILE: "Apply Profile",
	LABEL_DELETE_PROFILE: "Delete Profile",
	LABEL_OVERWRITE_PROFILE: "Overwrite Profile",
	TITLE_DELETE_PROFILE: "Deleting Profile",
	MESSAGE_CONFIRM_DELETE_PROFILE: "Are you sure you want to delete this profile?",
	LABEL_ADD_TAB: "Add Tab",
	LABEL_REORDER_TABS: "Reorder Tabs",
	LABEL_UNHIDE_TABS: "Unhide Tabs",
	LABEL_EDIT_TAB: "Edit",
	LABEL_DUPLICATE_TAB: "Duplicate",
	LABEL_TAB_SNAPSHOT_DESCRIPTION: "Create a collection from this tab",
	LABEL_SNAPSHOT_TAB: "Snapshot",
	LABEL_HIDE_TAB: "Hide",
	LABEL_DELETE_TAB: "Delete",
	LABEL_TAB_UNHIDE: "Unhide",
	LABEL_COLLECTIONS_UNHIDE_MANAGE: "Unhide and Manage",
	TITLE_COLLECTIONS_HIDDEN: "Collections Tab is hidden by Tab Master!",
	MESSAGE_COLLECTIONS_UNHIDE: "In order to manage hidden apps, Tab Master must unhide your Collections tab.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH: "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW: "Please update MicroSDeck to specified version.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH: "Please update TabMaster if available or install specified version of MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN: "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN: "Please try updating TabMaster or MicroSDeck.",
	MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED: "You have some tabs that rely on the MicroSDeck plugin, but it is not installed.",
	MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED: "Please install MicroSDeck for these tabs to work.",
	MESSAGE_MICROSDECK_NOTICE_CONCLUSION: "Until then, these tabs will not be displayed in the library.",
	MESSAGE_RESET: "Reset",
	TITLE_RESET_TABS: "Reset Tabs",
	MESSAGE_RESET_TABS_WARNING: "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.",
	TITLE_CANT_LOAD_SETTINGS: "Cannot Load Settings",
	MESSAGE_LOAD_SETTINGS_ERROR: "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.",
	LABEL_TAB_ACTIONS: "Actions",
	LABEL_OPEN_TAB_OPTIONS: "Open tab options",
	TITLE_TABS: "Tabs",
	TITLE_HIDDEN_TABS: "Hidden Tabs",
	LABEL_UNHIDE_TAB: "Unhide Tab",
	MESSAGE_SHOW_TAB: "Show",
	LABEL_CLEAR_ERROR: "Clear Error",
	MESSAGE_TABMASTER_ERROR: "Tab Master encountered an error",
	LABEL_TABS: "Tabs",
	LABEL_FILTER_PLURAL: "Filters",
	TITLE_SHARED_TABS: "Shared Tabs",
	TITLE_RESTART_STEAM: "Restart Steam?",
	LABEL_RESTART_LATER: "Later",
	LABEL_RESTART_NOW: "Restart Now",
	MESSAGE_RESTART_REASON: "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible",
	MESSAGE_SUPPORT_REACHOUT: "Please reach out to",
	MESSAGE_SUPPORT_OR: "or",
	MESSAGE_SUPPORT_END: "for support.",
	LABEL_HIDE_NOTICE: "Hide Notice",
	MESSAGE_QAM_DESCRIPTION: "Here you can add, re-order, or remove tabs from the library.",
	LABEL_ADD_QUICK_TAB: "Add Quick Tab",
	LABEL_VIEW_SHARED_TABS: "View Shared Tabs",
	LABEL_RESTORE_SETTINGS: "Restore Settings",
	LABEL_OPEN_SETTINGS: "Open Settings",
	TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS: "Lead Developers",
	TITLE_SETTINGS_ABOUT_CONTRIBUTORS: "Contributors",
	TITLE_SETTINGS_ABOUT_TRANSLATORS: "Translators",
	TITLE_SETTINGS_ABOUT_TRANSLATIONS: "Translations",
	MESSAGE_HELP_WITH_TRANSLATIONS: "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out",
	TITLE_SETTINGS_ABOUT: "About",
	DESCRIPTION_SETTINGS_TABMASTER_ABOUT: "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.",
	TITLE_SETTINGS_GENERAL: "General",
	TITLE_SETTINGS_TAGS: "Tags",
	TITLE_TABMASTER_SETTINGS: "TabMaster Settings"
}, xe = {
	name: "简体中文",
	strings: ge,
	credit: ["Charles Lew"]
}, Se = {
	cs: {
		name: "Čeština",
		strings: j,
		credit: []
	},
	da: {
		name: "Dansk",
		strings: M,
		credit: []
	},
	de: {
		name: "Deutsch",
		strings: N,
		credit: ["Schneppi", "pingpong6004"]
	},
	fi: {
		name: "Suomi",
		strings: P,
		credit: []
	},
	el: {
		name: "Ελληνικά",
		strings: ee,
		credit: []
	},
	es: {
		name: "Español-España",
		strings: te,
		credit: ["Sebastian Guardo Lugo"]
	},
	"es-419": {
		name: "Español-Latinoamérica",
		strings: ne,
		credit: []
	},
	fr: {
		name: "Français",
		strings: re,
		credit: ["tonymlcz"]
	},
	it: {
		name: "Italiano",
		strings: ie,
		credit: ["Lemon64k"]
	},
	ja: {
		name: "日本語",
		strings: ae,
		credit: []
	},
	ko: {
		name: "한국어",
		strings: oe,
		credit: []
	},
	nl: {
		name: "Nederlands",
		strings: se,
		credit: []
	},
	pl: {
		name: "Polski",
		strings: ce,
		credit: []
	},
	pt: {
		name: "Português",
		strings: le,
		credit: []
	},
	"pt-br": {
		name: "Português-Brasil",
		strings: ue,
		credit: ["Alberto Eberhardt"]
	},
	ro: {
		name: "Română",
		strings: de,
		credit: []
	},
	ru: {
		name: "Русский",
		strings: fe,
		credit: ["Vladimir Budylnikov"]
	},
	sv: {
		name: "Svenska",
		strings: pe,
		credit: []
	},
	tr: {
		name: "Türkçe",
		strings: me,
		credit: []
	},
	uk: {
		name: "Українська",
		strings: he,
		credit: ["Костя"]
	},
	"zh-cn": xe,
	"sc-sc": xe,
	"zh-tw": {
		name: "正體中文",
		strings: _e,
		credit: []
	},
	no: {
		name: "Norsk",
		strings: ve,
		credit: []
	},
	hu: {
		name: "Magyar",
		strings: ye,
		credit: []
	},
	th: {
		name: "ไทย",
		strings: me,
		credit: []
	},
	vn: {
		name: "Tiếng Việt",
		strings: be,
		credit: []
	}
}, Ce, we = () => {
	if (Ce) return Ce;
	let e = window.LocalizationManager.m_rgLocalesToUse[0];
	return Ce = e, e;
}, F = (e, t, n = !1) => {
	let r = we();
	return n ? window.LocalizationManager.m_mapTokens.get(e) ?? window.LocalizationManager.m_mapFallbackTokens.get(e) ?? t : r === "en" ? t : Se[r]?.strings?.[e] ?? t;
}, Te = window.LocalizationManager.m_rgLocalesToUse;
function Ee(e, t, n, r) {
	let i = {
		year: "numeric",
		month: "numeric",
		day: "numeric"
	}, a;
	if (r?.dateStyle) switch (r?.dateStyle) {
		case "full":
			a = {
				year: "numeric",
				month: "long",
				day: "numeric",
				weekday: "long"
			};
			break;
		case "long":
			a = {
				year: "numeric",
				month: "long",
				day: "numeric"
			};
			break;
		case "medium":
			a = {
				year: "numeric",
				month: "short",
				day: "numeric"
			};
			break;
		case "short":
			a = {
				year: "2-digit",
				month: "numeric",
				day: "numeric"
			};
			break;
		default: a = i;
	}
	else a = r ?? i;
	return t === void 0 && delete a.month, n === void 0 && (delete a.day, delete a.weekday), new Date(e, (t ?? 1) - 1, n ?? 1).toLocaleDateString(Te, a);
}
//#endregion
//#region src/types/DateTypes.ts
var I = /* @__PURE__ */ function(e) {
	return e[e.yearOnly = 0] = "yearOnly", e[e.monthYear = 1] = "monthYear", e[e.dayMonthYear = 2] = "dayMonthYear", e;
}({}), L = /* @__PURE__ */ function(e) {
	return e[e.INSTALLED = 0] = "INSTALLED", e[e.ANY = 1] = "ANY", e;
}({}), De = /* @__PURE__ */ function(e) {
	return e[e.FILE = 0] = "FILE", e[e.FOLDER = 1] = "FOLDER", e;
}({});
//#endregion
//#region src/utils/translationHelpers.ts
function Oe(e) {
	return e === "and" ? F("LOGIC_MODE_AND", "and") : F("LOGIC_MODE_OR", "or");
}
function ke() {
	return [{
		label: F("LABEL_COUNT", "Count"),
		data: "count"
	}, {
		label: F("LABEL_PERCENT", "Percent"),
		data: "percent"
	}];
}
function Ae() {
	return [{
		label: F("LABEL_AT_LEAST", "At least"),
		data: "above"
	}, {
		label: F("LABEL_AT_MOST", "At most"),
		data: "below"
	}];
}
function je() {
	return [{
		label: F("LABEL_EARLIEST", "Earliest"),
		data: "above"
	}, {
		label: F("LABEL_LATEST", "Latest"),
		data: "below"
	}];
}
function Me() {
	return [
		{
			label: F("LABEL_BY_DAY", "By Day"),
			data: I.dayMonthYear
		},
		{
			label: F("LABEL_BY_MONTH", "By Month"),
			data: I.monthYear
		},
		{
			label: F("LABEL_BY_YEAR", "By Year"),
			data: I.yearOnly
		},
		{
			label: F("LABEL_BY_DAYS_AGO", "By Days Ago"),
			data: "byDaysAgo"
		},
		{
			label: F("LABEL_BY_UNKNOWN", "By Unknown Date"),
			data: "byUnknown"
		}
	];
}
function Ne() {
	return [
		{
			label: F("LABEL_MINUTES", "Minutes"),
			data: "minutes"
		},
		{
			label: F("LABEL_HOURS", "Hours"),
			data: "hours"
		},
		{
			label: F("LABEL_DAYS", "Days"),
			data: "days"
		}
	];
}
function Pe(e, t, n) {
	let r = "";
	return r = n === "metacritic" ? t === "above" ? F("LABEL_REVIEW_FILTER_METACRITIC_SCORE_ABOVE", "Metacritic of {scoreThreshold} or higher") : F("LABEL_REVIEW_FILTER_METACRITIC_SCORE_BELOW", "Metacritic of {scoreThreshold} or lower") : t === "above" ? F("LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_ABOVE", "At least {scoreThreshold}% positive Steam reviews") : F("LABEL_REVIEW_FILTER_NON_METACRITIC_SCORE_BELOW", "At most {scoreThreshold}% positive Steam reviews"), r.replace("{scoreThreshold}", e.toString());
}
function Fe(e, t, n, r = !1) {
	let i = "", a = "", o = "";
	return a = n === "days" ? e === 1 ? F("LABEL_DAY_SINGULAR", "day") : F("LABEL_DAY_PLURAL", "days") : n === "hours" ? e === 1 ? F("LABEL_HOUR_SINGULAR", "hour") : F("LABEL_HOUR_Plural", "hours") : e === 1 ? F("LABEL_MINUTE_SINGULAR", "minute") : F("LABEL_MINUTE_Plural", "minutes"), i = t === "above" ? F("LABEL_TIME_ABOVE", "or more") : F("LABEL_TIME_PLAYED_FILTER_BELOW", "or less"), o = r ? F("LABEL_TIME_PLAYED_PLAYED_FOR_TIME", "Played for {time}") : F("LABEL_TIME_PLAYED_TIME", "{time}"), `${o.replace("{time}", e.toString())} ${a} ${i}`;
}
function Ie(e, t, n, r, i, a = !1) {
	let o, s = "";
	if (a && (s = e === "last played" ? F("LABEL_LAST_PLAYED_PREFIX", "Last played") + " " : e === "release date" ? F("LABEL_RELEASE_DATE_PREFIX", "Released") + " " : F("LABEL_PURCHASE_DATE_PREFIX", "Purchased") + " "), t) {
		let { day: e, month: n, year: r } = t, a = s ? "..." : Ee(r, n, e, { dateStyle: "long" });
		return o = e ? i === "above" ? F("LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE", "In or after {dateLabel}") : F("LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW", "In or before {dateLabel}") : i === "above" ? F("LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_ABOVE", "On or after {dateLabel}") : F("LABEL_DATE_FILTER_OBJECTIVE_NO_DAY_BELOW", "On or before {dateLabel}"), s + o.replace("{dateLabel}", a);
	}
	return o = n === 1 ? i === "above" ? F("LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_LATER", "{daysAgo} day ago or later") : F("LABEL_DATE_FILTER_DAYS_AGO_SINGULAR_EARLIER", "{daysAgo} day ago or earlier") : i === "above" ? F("LABEL_DATE_FILTER_DAYS_AGO_PLURAL_LATER", "{daysAgo} days ago or later") : F("LABEL_DATE_FILTER_DAYS_AGO_PLURAL_EARLIER", "{daysAgo} days ago or earlier"), r ? e === "last played" ? F("LABEL_DATE_FILTER_BY_UNKNOWN_LAST_PLAYED_DATE", "Last played date is unknown") : e === "release date" ? F("LABEL_DATE_FILTER_BY_UNKNOWN_DATE", "Release date is unknown") : F("LABEL_DATE_FILTER_BY_UNKNOWN_DATE", "Purchase date is unknown") : s + o.replace("{daysAgo}", n.toString());
}
function Le(e) {
	let t = "";
	return t = e === "above" ? F("LABEL_ACHIEVEMENTS_FILTER_ABOVE", "or more achievements completed") : F("LABEL_ACHIEVEMENTS_FILTER_BELOW", "or less achievements completed"), t;
}
function Re(e, t) {
	let n = "";
	return n = t === "above" ? F("LABEL_SIZE_ON_DISK_FILTER_ABOVE", "or more on disk") : F("LABEL_SIZE_ON_DISK_FILTER_BELOW", "or less on disk"), `${e < 1 ? e * 1e3 : e} ${e < 1 ? "MB" : "GB"} ${n}`;
}
function ze(e) {
	return e === "games" ? F("AppTypeLabel_game", "Games", !0) : e === "music" || e === "soundtracks" ? F("LibraryTab_Soundtracks", "Soundtracks", !0) : e === "software" ? F("AppTypeLabel_software", "Software", !0) : F("GameList_Category_Hidden", "Hidden", !0);
}
//#endregion
//#region node_modules/.pnpm/react-icons@4.12.0_react@19.1.0/node_modules/react-icons/io5/index.esm.js
var R = (/* @__PURE__ */ s(((e, t) => {
	t.exports = DFL;
})))();
function Be(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M472 168H40a24 24 0 010-48h432a24 24 0 010 48zm-80 112H120a24 24 0 010-48h272a24 24 0 010 48zm-96 112h-80a24 24 0 010-48h80a24 24 0 010 48z" }
		}]
	})(e);
}
function Ve(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 00352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 00-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0018.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37zM208 240h-32v32a16 16 0 01-32 0v-32h-32a16 16 0 010-32h32v-32a16 16 0 0132 0v32h32a16 16 0 010 32zm84 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-19.95A20 20 0 01336 288zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z" }
		}]
	})(e);
}
function He(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z" }
		}]
	})(e);
}
//#endregion
//#region node_modules/.pnpm/react-icons@4.12.0_react@19.1.0/node_modules/react-icons/fa6/index.esm.js
function Ue(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M187.7 153.7c-34 0-61.7 25.7-61.7 57.7 0 31.7 27.7 57.7 61.7 57.7s61.7-26 61.7-57.7c0-32-27.7-57.7-61.7-57.7zm143.4 0c-34 0-61.7 25.7-61.7 57.7 0 31.7 27.7 57.7 61.7 57.7 34.3 0 61.7-26 61.7-57.7.1-32-27.4-57.7-61.7-57.7zm156.6 90l-6 4.3V49.7c0-27.4-20.6-49.7-46-49.7H76.6c-25.4 0-46 22.3-46 49.7V248c-2-1.4-4.3-2.9-6.3-4.3-15.1-10.6-25.1 4-16 17.7 18.3 22.6 53.1 50.3 106.3 72C58.3 525.1 252 555.7 248.9 457.5c0-.7.3-56.6.3-96.6 5.1 1.1 9.4 2.3 13.7 3.1 0 39.7.3 92.8.3 93.5-3.1 98.3 190.6 67.7 134.3-124 53.1-21.7 88-49.4 106.3-72 9.1-13.8-.9-28.3-16.1-17.8zm-30.5 19.2c-68.9 37.4-128.3 31.1-160.6 29.7-23.7-.9-32.6 9.1-33.7 24.9-10.3-7.7-18.6-15.5-20.3-17.1-5.1-5.4-13.7-8-27.1-7.7-31.7 1.1-89.7 7.4-157.4-28V72.3c0-34.9 8.9-45.7 40.6-45.7h317.7c30.3 0 40.9 12.9 40.9 45.7v190.6z" }
		}]
	})(e);
}
function We(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 496 512" },
		child: [{
			tag: "path",
			attr: { d: "M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z" }
		}]
	})(e);
}
function Ge(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }
		}]
	})(e);
}
function Ke(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 448 512" },
		child: [{
			tag: "path",
			attr: { d: "M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" }
		}]
	})(e);
}
function qe(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 384 512" },
		child: [{
			tag: "path",
			attr: { d: "M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" }
		}]
	})(e);
}
function Je(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" }
		}]
	})(e);
}
function Ye(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 448 512" },
		child: [{
			tag: "path",
			attr: { d: "M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" }
		}]
	})(e);
}
function Xe(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 384 512" },
		child: [{
			tag: "path",
			attr: { d: "M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" }
		}]
	})(e);
}
function Ze(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 448 512" },
		child: [{
			tag: "path",
			attr: { d: "M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" }
		}]
	})(e);
}
function Qe(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" }
		}]
	})(e);
}
function $e(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" }
		}]
	})(e);
}
function et(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" }
		}]
	})(e);
}
function tt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 640 512" },
		child: [{
			tag: "path",
			attr: { d: "M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" }
		}]
	})(e);
}
function nt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-96-32a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM96 240c0-35 17.5-71.1 45.2-98.8S205 96 240 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.4 0-89.2 22.3-121.5 54.5S64 194.6 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16z" }
		}]
	})(e);
}
function rt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z" }
		}]
	})(e);
}
function it(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" }
		}]
	})(e);
}
function at(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" }
		}]
	})(e);
}
function ot(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }
		}]
	})(e);
}
function st(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 384 512" },
		child: [{
			tag: "path",
			attr: { d: "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" }
		}]
	})(e);
}
function ct(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 576 512" },
		child: [{
			tag: "path",
			attr: { d: "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" }
		}]
	})(e);
}
function lt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 448 512" },
		child: [{
			tag: "path",
			attr: { d: "M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }
		}]
	})(e);
}
function ut(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" }
		}]
	})(e);
}
function dt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 448 512" },
		child: [{
			tag: "path",
			attr: { d: "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" }
		}]
	})(e);
}
function ft(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 640 512" },
		child: [{
			tag: "path",
			attr: { d: "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" }
		}]
	})(e);
}
function pt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 448 512" },
		child: [{
			tag: "path",
			attr: { d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" }
		}]
	})(e);
}
function mt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 384 512" },
		child: [{
			tag: "path",
			attr: { d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }
		}]
	})(e);
}
function ht(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" }
		}]
	})(e);
}
function gt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M.3 89.5C.1 91.6 0 93.8 0 96V224 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V224 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 224H464l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192z" }
		}]
	})(e);
}
//#endregion
//#region node_modules/.pnpm/react-icons@4.12.0_react@19.1.0/node_modules/react-icons/bs/index.esm.js
function _t(e) {
	return D({
		tag: "svg",
		attr: {
			fill: "currentColor",
			viewBox: "0 0 16 16"
		},
		child: [
			{
				tag: "path",
				attr: { d: "M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" }
			},
			{
				tag: "path",
				attr: { d: "M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" }
			},
			{
				tag: "path",
				attr: { d: "M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" }
			}
		]
	})(e);
}
function vt(e) {
	return D({
		tag: "svg",
		attr: {
			fill: "currentColor",
			viewBox: "0 0 16 16"
		},
		child: [{
			tag: "path",
			attr: {
				fillRule: "evenodd",
				d: "M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 1 1 .707.707Zm9.9-.707a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.314.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707ZM6 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-6.5a.5.5 0 0 0-1 0v2.117L8.257 5.57a.5.5 0 0 0-.514.858L9.528 7.5 7.743 8.571a.5.5 0 1 0 .514.858L10 8.383V10.5a.5.5 0 1 0 1 0V8.383l1.743 1.046a.5.5 0 0 0 .514-.858L11.472 7.5l1.785-1.071a.5.5 0 1 0-.514-.858L11 6.617V4.5Z"
			}
		}]
	})(e);
}
function yt(e) {
	return D({
		tag: "svg",
		attr: {
			fill: "currentColor",
			viewBox: "0 0 16 16"
		},
		child: [{
			tag: "path",
			attr: { d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" }
		}]
	})(e);
}
function bt(e) {
	return D({
		tag: "svg",
		attr: {
			fill: "currentColor",
			viewBox: "0 0 16 16"
		},
		child: [{
			tag: "path",
			attr: { d: "M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" }
		}, {
			tag: "path",
			attr: { d: "M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z" }
		}]
	})(e);
}
//#endregion
//#region node_modules/.pnpm/react-icons@4.12.0_react@19.1.0/node_modules/react-icons/fa/index.esm.js
function xt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" }
		}]
	})(e);
}
function St(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" }
		}]
	})(e);
}
function Ct(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z" }
		}]
	})(e);
}
function wt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 576 512" },
		child: [{
			tag: "path",
			attr: { d: "M576 304v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48zm-48-80a79.557 79.557 0 0 1 30.777 6.165L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L17.223 230.165A79.557 79.557 0 0 1 48 224h480zm-48 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm-96 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z" }
		}]
	})(e);
}
function Tt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }
		}]
	})(e);
}
function Et(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z" }
		}]
	})(e);
}
function Dt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 384 512" },
		child: [{
			tag: "path",
			attr: { d: "M320 0H128L0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM160 160h-48V64h48v96zm80 0h-48V64h48v96zm80 0h-48V64h48v96z" }
		}]
	})(e);
}
function Ot(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 576 512" },
		child: [{
			tag: "path",
			attr: { d: "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" }
		}]
	})(e);
}
function kt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 352 512" },
		child: [{
			tag: "path",
			attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }
		}]
	})(e);
}
function At(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 576 512" },
		child: [{
			tag: "path",
			attr: { d: "M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z" }
		}]
	})(e);
}
function jt(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 640 512" },
		child: [{
			tag: "path",
			attr: { d: "M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" }
		}]
	})(e);
}
//#endregion
//#region src/utils/Utils.tsx
async function Mt(e, t, n) {
	return await (async () => {
		try {
			let r = e + 1;
			for (; r-- !== 0;) {
				if (await n()) return !0;
				r > 0 && await (0, R.sleep)(t);
			}
		} catch (e) {
			console.error(e);
		}
		return !1;
	})();
}
function Nt(e, t) {
	return BigInt(t) << 32n | BigInt(e);
}
function Pt(e, t) {
	return Number(Nt(e, t) - 76561197960265728n);
}
var Ft = {
	GreatOnDeck: {
		id: "GreatOnDeck",
		title: F("LibraryTab_DeckGames", "Great On Deck", !0),
		position: 0
	},
	GreatOnMachine: {
		id: "GreatOnMachine",
		title: F("LibraryTab_GreatOnMachine", "Great On Machine", !0),
		position: 0
	},
	SteamOSCompatible: {
		id: "SteamOSCompatible",
		title: F("LibraryTab_SteamOSCompatibleGames", "SteamOS Compatible", !0),
		position: 0
	},
	AllGames: {
		id: "AllGames",
		title: F("LibraryTab_AllGames", "All Games", !0),
		position: 1
	},
	Installed: {
		id: "Installed",
		title: F("LibraryTab_Installed", "Installed", !0),
		position: 2
	},
	Favorites: {
		id: "Favorites",
		title: F("LibraryTab_Favorites", "Favorites", !0),
		position: 3
	},
	Collections: {
		id: "Collections",
		title: F("LibraryTab_Collections", "Collections", !0),
		position: 4
	},
	DesktopApps: {
		id: "DesktopApps",
		title: F("LibraryTab_NonSteam", "Non-steam", !0),
		position: 5
	},
	Soundtracks: {
		id: "Soundtracks",
		title: F("LibraryTab_Soundtracks", "Soundtracks", !0),
		position: 6
	}
};
function It(e) {
	return Object.values(e).every((e) => e.filters ? (Object.keys(e).includes("filtersMode") || (e.filtersMode = "and"), e.filters.every((e) => e.type !== void 0)) : e.id === "DeckGames" || Object.keys(Ft).includes(e.id));
}
function Lt(e = !1) {
	return e ? window.App.m_CurrentUser.strSteamID : BigInt.asUintN(32, BigInt(window.App.m_CurrentUser.strSteamID)).toString();
}
function Rt(e) {
	switch (e.data.appType) {
		case 1: return Ve;
		case 8192: return nt;
		case 2: return bt;
		default: return Et;
	}
}
var z = /* @__PURE__ */ function(e) {
	return e[e.games = 1] = "games", e[e.software = 2] = "software", e[e.music = 8192] = "music", e[e.hidden = 16] = "hidden", e;
}({});
function zt(e, t) {
	let n = 0, r = 0;
	for (let e in t) {
		let i = e;
		t[i] ? n |= z[i] : r |= z[i];
	}
	return (e | n) & ~r;
}
function Bt(e) {
	let t = {
		games: !1,
		music: !1,
		software: !1,
		hidden: !1
	};
	for (let n of Object.keys(z).filter((e) => isNaN(Number(e)))) t[n] = (z[n] & e) !== 0;
	return t;
}
function Vt(e, t, n) {
	let r;
	return function() {
		let i = this, a = arguments, o = function() {
			r = null, n || e.apply(i, a);
		}, s = n && !r;
		clearTimeout(r), r = setTimeout(o, t), s && e.apply(i, a);
	};
}
function Ht(e, ...t) {
	if (e.find((e) => t.includes(e.type))) return !0;
	for (let n of e) if (n.type === "merge" && Ht(n.params.filters, ...t)) return !0;
	return !1;
}
function Ut(e) {
	settingsStore?.m_ClientSettings?.enable_ui_sounds && gr.AudioPlaybackManager.PlayAudioURL(e);
}
function Wt() {
	let e = /* @__PURE__ */ new Date();
	return `${String(e.getFullYear()).slice(-2)}${String(e.getMonth() + 1).padStart(2, "0")}${String(e.getDate()).padStart(2, "0")}-${String(e.getHours()).padStart(2, "0")}${String(e.getMinutes()).padStart(2, "0")}`;
}
function Gt(e, t) {
	return [...DeckyPluginLoader.routerHook.routerState._routePatches.get(e) ?? []].filter((e) => t.toString() === e.toString()).forEach((t) => _.removePatch(e, t)), _.addPatch(e, t);
}
//#endregion
//#region src/utils/collectionStoreHelpers.ts
var Kt = async (e, t, n) => {
	let r = `${e} (TabMaster)`, i = `${t} (TabMaster)`, a = collectionStore.GetUserCollectionsByName(r)?.[0];
	if (!n) {
		a && await a.Delete();
		return;
	}
	if (a && e !== t && (a.displayName = i), !a) {
		a = collectionStore.NewUnsavedCollection(i, void 0, n), await a.Save();
		return;
	}
	let o = a.apps, s = o.values().toArray(), c = n.map((e) => e.appid), l = s.filter((e) => !c.includes(e.appid));
	l.length > 0 && a.RemoveApps(l);
	let u = n.filter((e) => !o.has(e.appid));
	u.length > 0 && a.AddApps(u), await a.Save();
}, qt = (e) => {
	let t = [];
	for (let n of e) t = t.concat(collectionStore.appTypeCollectionMap.get(`type-${n}`).allApps);
	return t;
};
//#endregion
//#region src/utils/tabContainerHelpers.ts
function Jt(e) {
	return e.filtersMode !== void 0;
}
//#endregion
//#region src/constants.ts
var Yt = "tabmaster_settings_backup", Xt = "https://github.com/Tormak9970/TabMaster/issues", Zt = "https://discord.com/channels/960281551428522045/1049449185214206053", B = class e {
	static isDismounted = !1;
	static dismount() {
		e.isDismounted = !0;
	}
	static async getUserDesktopPath() {
		try {
			return await g("get_user_desktop");
		} catch (e) {
			return e;
		}
	}
	static async openFolder() {
		let e = await this.getUserDesktopPath();
		return e instanceof Error ? e : (await y(De.FOLDER, e, !1, !0, void 0, void 0, !1, !1)).realpath;
	}
	static async backupSettings(e) {
		try {
			return await g("backup_settings", `${e}/${Yt}_${Wt()}.json`);
		} catch (e) {
			return e;
		}
	}
	static async openJSONFile() {
		let e = await this.getUserDesktopPath();
		return e instanceof Error ? e : (await y(De.FILE, e, !0, !0, void 0, ["json"], !1, !1)).realpath;
	}
	static async restoreSettings(e) {
		try {
			return await g("restore_settings", e);
		} catch (e) {
			return e;
		}
	}
	static async backupDefaultDir(e) {
		try {
			return await g("backup_default_dir", `${e}_${Wt()}`);
		} catch (e) {
			return e;
		}
	}
	static async log(e) {
		await g("log_message", `[front-end]: ${e}`, 0);
	}
	static async warn(e) {
		await g("log_message", `[front-end]: ${e}`, 1);
	}
	static async error(e) {
		await g("log_message", `[front-end]: ${e}`, 2);
	}
	static async getUsersDict() {
		try {
			return await g("get_users_dict");
		} catch (e) {
			return e;
		}
	}
	static async setActiveSteamId(e) {
		try {
			return await g("set_active_user_id", e);
		} catch (e) {
			return e;
		}
	}
	static async removeLegacySettings() {
		try {
			return await g("remove_legacy_settings");
		} catch (e) {
			return e;
		}
	}
	static async migrateLegacySettings() {
		try {
			return await g("migrate_legacy_settings");
		} catch (e) {
			return e;
		}
	}
	static async getTabs() {
		try {
			let e = await g("get_tabs");
			return It(e) ? e : null;
		} catch (e) {
			return e;
		}
	}
	static async getTagOverrides() {
		try {
			return await g("get_tag_overrides");
		} catch (e) {
			return e;
		}
	}
	static async getSharedTabs() {
		try {
			let e = await g("get_shared_tabs");
			return Object.values(e).some((e) => !It(e)) ? null : e;
		} catch (e) {
			return e;
		}
	}
	static async getTags() {
		try {
			return await g("get_tags");
		} catch (e) {
			return e;
		}
	}
	static async getFriends() {
		try {
			return await g("get_friends");
		} catch (e) {
			return e;
		}
	}
	static async getFriendsGames() {
		try {
			let e = await g("get_friends_games"), t = Object.entries(e).map(([e, t]) => [parseInt(e), t]);
			return new Map(t);
		} catch (e) {
			return e;
		}
	}
	static async getTabProfiles() {
		try {
			return await g("get_tab_profiles");
		} catch (e) {
			return e;
		}
	}
	static async setTabs(t) {
		if (!It(t)) e.error("Tabs were corrupted when trying to set."), e.toast("Error", "Config corrupted, please restart.");
		else try {
			return await g("set_tabs", t);
		} catch (e) {
			return e;
		}
	}
	static async setTagOverrides(e) {
		try {
			return await g("set_tag_overrides", e);
		} catch (e) {
			return e;
		}
	}
	static async setTags(e) {
		try {
			return await g("set_tags", e);
		} catch (e) {
			return e;
		}
	}
	static async setFriends(e) {
		try {
			return await g("set_friends", e);
		} catch (e) {
			return e;
		}
	}
	static async setFriendGames(e) {
		let t = Object.fromEntries(Array.from(e.entries()).map(([e, t]) => [e.toString(), t]));
		try {
			return await g("set_friends_games", t);
		} catch (e) {
			return e;
		}
	}
	static async setTabProfiles(e) {
		try {
			return await g("set_tab_profiles", e);
		} catch (e) {
			return e;
		}
	}
	static toast(t, n) {
		setTimeout(() => {
			if (!e.isDismounted) try {
				v.toast({
					title: t,
					body: n,
					duration: 8e3
				});
			} catch (e) {
				console.log("Toaster Error", e);
			}
		}, 200);
	}
}, Qt = 10, V = class e {
	static errorFlag = !1;
	static errorCounts = {};
	static log(...e) {
		console.log("%c TabMaster %c INFO %c", "background: #ff6d05; color: black;", "background: #1abc9c; color: black;", "background: transparent;", ...e), B.log(e.join(" "));
	}
	static warn(...e) {
		console.warn("%c TabMaster %c WARNING %c", "background: #ff6d05; color: black;", "background: #e3c907; color: black;", "background: transparent;", ...e), B.warn(e.join(" "));
	}
	static error(...e) {
		console.error("%c TabMaster %c ERROR %c", "background: #ff6d05; color: black;", "background: #c70808; color: black;", "background: transparent;", ...e), B.error(e.join(" "));
	}
	static throw(...e) {
		throw B.error(e.join(" ")), Error([
			"%c TabMaster %c ERROR %c",
			"background: #ff6d05; color: black;",
			"background: #c70808; color: black;",
			"background: transparent;",
			...e
		].join(" "));
	}
	static raiseError = Vt((...t) => {
		let n = t.join(" ");
		B.error(n), e.error(...t), e.errorCounts[n] || (e.errorCounts[n] = 0), e.errorCounts[n] <= Qt && B.toast("TAB MASTER ERROR", n), e.errorCounts[n]++, e.errorFlag = !0;
	}, 5e3, !0);
}, $t = "0.11.0-67f2353", en = /* @__PURE__ */ function(e) {
	return e[e.NOT_INSTALLED = 0] = "NOT_INSTALLED", e[e.VERSION_TOO_LOW = 1] = "VERSION_TOO_LOW", e[e.VERSION_TOO_HIGH = 2] = "VERSION_TOO_HIGH", e[e.VERSION_UNKOWN = 3] = "VERSION_UNKOWN", e[e.VERSION_COMPATIBLE = 4] = "VERSION_COMPATIBLE", e;
}({}), H = class {
	static ref;
	static eventHandlers;
	static noticeHidden = !1;
	static initEventHandlers(e) {
		this.eventHandlers = { ...e }, this.getInstallState();
	}
	static subscribeToEvents() {
		for (let e in this.eventHandlers) e && window.MicroSDeck.eventBus.addEventListener(e, this.eventHandlers[e]);
	}
	static async waitForLoad() {
		if (V.log("Checking for installation of MicroSDeck..."), window.MicroSDeck) return V.log("MicroSDeck is installed"), !0;
		{
			for (; DeckyPluginLoader.pluginReloadQueue.find((e) => e.name === "MicroSDeck");) await (0, R.sleep)(200);
			let e = 0;
			for (; !window.MicroSDeck;) {
				if (e++, e > 10) return V.log("Could not find MicroSDeck installation"), !1;
				await (0, R.sleep)(100);
			}
			return V.log("MicroSDeck is installed"), !0;
		}
	}
	static getInstallState(e) {
		return window.MicroSDeck ? (window.MicroSDeck !== this.ref && (this.ref = window.MicroSDeck, e && this.eventHandlers.change?.(), this.subscribeToEvents()), this.checkVersion()) : 0;
	}
	static isInstallOk(e) {
		return this.getInstallState(e) === 4;
	}
	static checkVersion() {
		if (window.MicroSDeck?.Version) {
			let [e, t, n] = window.MicroSDeck.Version.split(/[.+-]/, 3).map((e) => +e), [r, i, a] = $t.split(/[.+-]/, 3).map((e) => +e);
			return isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a) ? 3 : e === 0 && r === 0 ? t > i ? 2 : t < i ? 1 : 4 : e > r ? 2 : e < r ? 1 : 4;
		}
		return 1;
	}
}, tn = (0, R.findModuleExport)((e) => {
	if (e?.RegisterForNotifyResumeFromSuspend) return e;
}), nn = class {
	hasLoggedIn = !1;
	hasLoggedOut = !1;
	registerForAuthStateChange(e, t, n, r) {
		try {
			let i = null, a = loginStore.m_strAccountName;
			return SteamClient.User.RegisterForLoginStateChange((o) => {
				o === "" ? (i !== !1 && (!n || !this.hasLoggedOut) && t && t(a), i = !1) : (i !== !0 && (!n || !this.hasLoggedIn) && e && (r && securitystore.IsLockScreenActive() ? Mt(100, 250, () => !securitystore.IsLockScreenActive()).then(() => {
					e(o);
				}) : e(o)), i = !0);
			});
		} catch (e) {
			return V.log(`error with AuthStateChange hook. [DEBUG INFO] error: ${e};`), () => {};
		}
	}
	async waitForServicesToInitialize() {
		return await Mt(20, 250, () => window.App?.WaitForServicesInitialized != null && !!appAchievementProgressCache.m_achievementProgress) ? V.log("Services found.") : V.log("Couldn't find services."), await window.App?.WaitForServicesInitialized?.().then((e) => (V.log(`Services initialized. Success: ${e}`), e)) ?? !1;
	}
	registerForOnResumeFromSuspend(e) {
		let t = SteamClient.System.RegisterForOnResumeFromSuspend?.bind(SteamClient.System) ?? tn?.RegisterForNotifyResumeFromSuspend;
		return t ? t(e) : (V.raiseError("Couldn't find resume from suspend registerer"), { unregister: () => {} });
	}
	async getLocalizedTags(e) {
		return await SteamClient.Apps.GetStoreTagLocalization(e);
	}
}, U = ({ className: e, ...t }) => /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("style", null, `.tab-master-destructive-modal button.${R.gamepadDialogClasses.Button}.DialogButton.gpfocus.Primary {
        background: #de3618;
        color: #fff
      }`), /* @__PURE__ */ window.SP_REACT.createElement(R.ConfirmModal, {
	className: "tab-master-destructive-modal" + (e ? ` ${e}` : ""),
	...t
}));
//#endregion
//#region src/lib/controllers/PluginController.tsx
function rn(e, t) {
	(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(R.ConfirmModal, {
		strOKButtonText: "Transfer",
		onOK: e,
		strCancelButtonText: "Discard",
		onCancel: async () => {
			an(t, async () => rn(e, t));
		},
		strTitle: "TabMaster: Legacy Settings Found"
	}, "TabMaster now saves settings and tabs for each user of the device. Would you like to transfer this device's previous settings to your account?"));
}
function an(e, t) {
	(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(U, {
		strOKButtonText: "Confirm",
		onOK: e,
		strCancelButtonText: "Back",
		onCancel: t,
		strTitle: "Are You Sure?"
	}, "Are you sure you want to discard the previous settings? This can't be undone."));
}
var on = class e {
	static tabMasterManager;
	static steamController;
	static onWakeSub;
	static isDismounted;
	static setup(e) {
		this.tabMasterManager = e, this.steamController = new nn();
	}
	static initOnLogin(t) {
		return this.steamController.registerForAuthStateChange(async (n) => {
			V.log(`User logged in. [DEBUG] username: ${n}.`), await this.steamController.waitForServicesToInitialize() ? (await e.init(), t()) : B.toast("Error", "Failed to initialize, try restarting.");
		}, async (e) => {
			V.log(`User logged out. [DEBUG] username: ${e}.`);
		}, !0, !0);
	}
	static async init() {
		return V.log("PluginController initialized."), this.onWakeSub = this.steamController.registerForOnResumeFromSuspend(this.onWakeFromSleep.bind(this)), new Promise(async (e, t) => {
			let n = await B.setActiveSteamId(Lt());
			n instanceof Error ? (V.raiseError("TabMaster encountered a problem during initialization process.", `PythonInterop.setActiveSteamId returned error: "${n.message}"`), e()) : (V.log(n ? "Detected Legacy Settings." : "No Legacy Settings found."), n ? rn(async () => {
				V.log("Transfering Legacy Settings..."), await B.migrateLegacySettings(), e();
			}, async () => {
				V.log("Removing Legacy Settings..."), await B.removeLegacySettings(), e();
			}) : e());
		});
	}
	static getFriendsWhoOwn(e) {
		return this.tabMasterManager.getFriendsWhoOwn(e);
	}
	static onWakeFromSleep() {
		this.tabMasterManager.buildTimeBasedFilterTabs();
	}
	static dismount() {
		B.dismount(), this.onWakeSub && this.onWakeSub.unregister(), this.tabMasterManager.disposeReactions(), V.log("PluginController dismounted.");
	}
}, sn = {
	28: {
		categoryid: 28,
		type: 3,
		internal_name: "Full Controller Support",
		display_name: F("AppDetails_Feature_FullController", "Full Controller Support", !0),
		image_url: "public/images/v6/ico/ico_controller.png",
		show_in_search: !0
	},
	18: {
		categoryid: 18,
		type: 3,
		internal_name: "Controller enabled",
		display_name: F("AppDetails_Feature_PartialController", "Partial Controller Support", !0),
		image_url: "public/images/v6/ico/ico_partial_controller.png",
		show_in_search: !0
	},
	2: {
		categoryid: 2,
		type: 1,
		internal_name: "Single-player",
		display_name: F("AppDetails_Feature_SinglePlayer", "Single-Player", !0),
		image_url: "public/images/v6/ico/ico_singlePlayer.png",
		show_in_search: !0
	},
	1: {
		categoryid: 1,
		type: 1,
		internal_name: "Multi-player",
		display_name: F("AppDetails_Feature_MultiPlayer", "Multi-Player", !0),
		image_url: "public/images/v6/ico/ico_multiPlayer.png",
		show_in_search: !0
	},
	20: {
		categoryid: 20,
		type: 1,
		internal_name: "MMO",
		display_name: "MMO",
		image_url: "public/images/v6/ico/ico_multiPlayer.png"
	},
	49: {
		categoryid: 49,
		type: 1,
		internal_name: "PvP",
		display_name: "PvP",
		image_url: "public/images/v6/ico/ico_multiPlayer.png",
		show_in_search: !0
	},
	36: {
		categoryid: 36,
		type: 1,
		internal_name: "Online PvP",
		display_name: F("LABEL_ONLINE_PVP", "Online PvP"),
		image_url: "public/images/v6/ico/ico_multiPlayer.png",
		show_in_search: !0
	},
	47: {
		categoryid: 47,
		type: 1,
		internal_name: "LAN PvP",
		display_name: "LAN PvP",
		image_url: "public/images/v6/ico/ico_multiPlayer.png",
		show_in_search: !0
	},
	37: {
		categoryid: 37,
		type: 1,
		internal_name: "Shared/Split Screen PvP",
		display_name: F("LABEL_SHARED_SPLIT_SCREEN_PVP", "Shared/Split Screen PvP"),
		image_url: "public/images/v6/ico/ico_multiPlayer.png",
		show_in_search: !0
	},
	9: {
		categoryid: 9,
		type: 1,
		internal_name: "Co-op",
		display_name: "Co-op",
		image_url: "public/images/v6/ico/ico_coop.png",
		show_in_search: !0
	},
	38: {
		categoryid: 38,
		type: 1,
		internal_name: "Online Co-op",
		display_name: F("LABEL_ONLINE_COOP", "Online Co-op"),
		image_url: "public/images/v6/ico/ico_coop.png",
		show_in_search: !0
	},
	48: {
		categoryid: 48,
		type: 1,
		internal_name: "LAN Co-op",
		display_name: "LAN Co-op",
		image_url: "public/images/v6/ico/ico_coop.png",
		show_in_search: !0
	},
	39: {
		categoryid: 39,
		type: 1,
		internal_name: "Shared/Split Screen Co-op",
		display_name: F("LABEL_SHARED_SPLIT_SCREEN_COOP", "Shared/Split Screen Co-op"),
		image_url: "public/images/v6/ico/ico_coop.png",
		show_in_search: !0
	},
	24: {
		categoryid: 24,
		type: 1,
		internal_name: "Shared/Split Screen",
		display_name: F("LABEL_SHARED_SPLIT_SCREEN", "Shared/Split Screen"),
		image_url: "public/images/v6/ico/ico_coop.png",
		show_in_search: !0
	},
	27: {
		categoryid: 27,
		type: 1,
		internal_name: "Cross-Platform Multiplayer",
		display_name: F("LABEL_CROSS_PLATFORM_MULTIPLAYER", "Cross-Platform Multiplayer"),
		image_url: "public/images/v6/ico/ico_multiPlayer.png",
		show_in_search: !0
	},
	22: {
		categoryid: 22,
		type: 2,
		internal_name: "Steam Achievements",
		display_name: F("AppDetails_Feature_SteamAchievements", "Achievements", !0),
		image_url: "public/images/v6/ico/ico_achievements.png",
		show_in_search: !0
	},
	52: {
		categoryid: 52,
		type: 2,
		internal_name: "Tracked Motion Controller",
		display_name: F("LABEL_TRACKED_MOTION_CONTROLLER", "Tracked Motion Controller"),
		image_url: "public/images/v6/ico/ico_vr_input_motion.png",
		show_in_search: !0
	},
	53: {
		categoryid: 53,
		type: 2,
		internal_name: "VR Supported",
		display_name: F("LABEL_VR_SUPPORTED", "VR Supported"),
		image_url: "public/images/v6/ico/ico_vr_support.png"
	},
	54: {
		categoryid: 54,
		type: 2,
		internal_name: "VR Only",
		display_name: F("LABEL_VR_ONLY", "VR Only"),
		image_url: "public/images/v6/ico/ico_vr_support.png"
	},
	29: {
		categoryid: 29,
		type: 2,
		internal_name: "Steam Trading Cards",
		display_name: F("LABEL_STEAM_TRADING_CARDS", "Steam Trading Cards"),
		image_url: "public/images/v6/ico/ico_cards.png",
		show_in_search: !0
	},
	31: {
		categoryid: 31,
		type: 2,
		internal_name: "VR Support",
		display_name: F("AppDetails_Feature_VRSupport", "VR Support", !0),
		image_url: "public/images/v6/ico/VRIcon.png",
		show_in_search: !0
	},
	30: {
		categoryid: 30,
		type: 2,
		internal_name: "Steam Workshop",
		display_name: F("AppDetails_Feature_SteamWorkshop", "Steam Workshop", !0),
		image_url: "public/images/v6/ico/ico_workshop.png",
		show_in_search: !0
	},
	51: {
		categoryid: 51,
		type: 2,
		internal_name: "Steam China Workshop",
		display_name: F("LABEL_STEAM_CHINA_WORKSHOP", "Steam China Workshop"),
		image_url: "public/images/v6/ico/ico_workshop.png",
		show_in_search: !0
	},
	40: {
		categoryid: 40,
		type: 2,
		internal_name: "SteamVR Collectibles",
		display_name: F("LABEL_STEAM_VR_COLLECTIBLES", "SteamVR Collectibles"),
		image_url: "public/images/v6/ico/ico_collectibles.png",
		show_in_search: !0
	},
	35: {
		categoryid: 35,
		type: 2,
		internal_name: "In-App Purchases",
		display_name: F("LABEL_IN_APP_PURCHASES", "In-App Purchases"),
		image_url: "public/images/v6/ico/ico_cart.png"
	},
	23: {
		categoryid: 23,
		type: 2,
		internal_name: "Steam Cloud",
		display_name: F("AppDetails_Feature_SteamCloud", "Cloud Saves", !0),
		image_url: "public/images/v6/ico/ico_cloud.png",
		show_in_search: !0
	},
	8: {
		categoryid: 8,
		type: 2,
		internal_name: "VAC Enabled",
		display_name: F("LABEL_VAC_ENABLED", "VAC Enabled"),
		image_url: "public/images/v6/ico/ico_vac.png",
		show_in_search: !0
	},
	25: {
		categoryid: 25,
		type: 2,
		internal_name: "Steam Leaderboards",
		display_name: F("LABEL_STEAM_LEADERBOARDS", "Steam Leaderboards"),
		image_url: "public/images/v6/ico/ico_leaderboards.png"
	},
	32: {
		categoryid: 32,
		type: 2,
		internal_name: "Async Game Notifications",
		display_name: F("LABEL_STEAM_TURN_NOTIFICATION", "Steam Turn Notifications"),
		image_url: "public/images/v6/ico/ico_turn_notifications.png"
	},
	41: {
		categoryid: 41,
		type: 2,
		internal_name: "Remote Play on Phone",
		display_name: F("LABEL_REMOTE_PLAY_ON_PHONE", "Remote Play on Phone"),
		image_url: "public/images/v6/ico/ico_remote_play.png",
		show_in_search: !0
	},
	42: {
		categoryid: 42,
		type: 2,
		internal_name: "Remote Play on Tablet",
		display_name: F("LABEL_REMOTE_PLAY_ON_TABLET", "Remote Play on Tablet"),
		image_url: "public/images/v6/ico/ico_remote_play.png",
		show_in_search: !0
	},
	43: {
		categoryid: 43,
		type: 2,
		internal_name: "Remote Play on TV",
		display_name: F("LABEL_REMOTE_PLAY_ON_TV", "Remote Play on TV"),
		image_url: "public/images/v6/ico/ico_remote_play.png",
		show_in_search: !0
	},
	44: {
		categoryid: 44,
		type: 2,
		internal_name: "Remote Play Together",
		display_name: F("AppDetails_Feature_RemotePlayTogether", "Remote Play Together", !0),
		image_url: "public/images/v6/ico/ico_remote_play_together.png",
		show_in_search: !0
	},
	61: {
		categoryid: 61,
		type: 2,
		internal_name: "HDR",
		display_name: F("AppDetails_Feature_HDR", "HDR Support", !0),
		image_url: "public/images/v6/ico/ico_hdr.png",
		show_in_search: !0
	}
}, cn = Object.keys(sn).map((e) => parseInt(e));
//#endregion
//#region node_modules/.pnpm/react-icons@4.12.0_react@19.1.0/node_modules/react-icons/si/index.esm.js
function ln(e) {
	return D({
		tag: "svg",
		attr: {
			role: "img",
			viewBox: "0 0 24 24"
		},
		child: [{
			tag: "title",
			attr: {},
			child: []
		}, {
			tag: "path",
			attr: { d: "M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" }
		}]
	})(e);
}
function un(e) {
	return D({
		tag: "svg",
		attr: {
			role: "img",
			viewBox: "0 0 24 24"
		},
		child: [{
			tag: "title",
			attr: {},
			child: []
		}, {
			tag: "path",
			attr: { d: "M8.999 0v4.309c4.242 0 7.694 3.45 7.694 7.691s-3.452 7.691-7.694 7.691V24c6.617 0 12-5.383 12-12s-5.383-12-12-12Zm0 6.011c-3.313 0-6 2.687-5.998 6a5.999 5.999 0 1 0 5.998-6z" }
		}]
	})(e);
}
//#endregion
//#region node_modules/.pnpm/react-icons@4.12.0_react@19.1.0/node_modules/react-icons/lu/index.esm.js
function dn(e) {
	return D({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		},
		child: [
			{
				tag: "rect",
				attr: {
					width: "8",
					height: "8",
					x: "2",
					y: "2",
					rx: "2"
				}
			},
			{
				tag: "path",
				attr: { d: "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" }
			},
			{
				tag: "path",
				attr: { d: "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" }
			},
			{
				tag: "path",
				attr: { d: "M10 18H5c-1.7 0-3-1.3-3-3v-1" }
			},
			{
				tag: "polyline",
				attr: { points: "7 21 10 18 7 15" }
			},
			{
				tag: "rect",
				attr: {
					width: "8",
					height: "8",
					x: "14",
					y: "14",
					rx: "2"
				}
			}
		]
	})(e);
}
//#endregion
//#region node_modules/.pnpm/react-icons@4.12.0_react@19.1.0/node_modules/react-icons/md/index.esm.js
function fn(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [{
			tag: "path",
			attr: {
				fill: "none",
				d: "M0 0h24v24H0z"
			}
		}, {
			tag: "path",
			attr: { d: "M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z" }
		}]
	})(e);
}
function pn(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [{
			tag: "path",
			attr: {
				fill: "none",
				d: "M0 0h24v24H0z"
			}
		}, {
			tag: "path",
			attr: { d: "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" }
		}]
	})(e);
}
//#endregion
//#region src/components/filters/Filters.tsx
function mn(e) {
	return e.steam_hw_compat_category_packed >> 4 & 3 || 0;
}
var hn = () => ({
	collection: {
		id: "favorite",
		name: "Favorites"
	},
	installed: { installed: !0 },
	regex: { regex: "" },
	friends: {
		friends: [],
		mode: "and"
	},
	tags: {
		tags: [],
		mode: "and"
	},
	whitelist: { games: [] },
	blacklist: { games: [] },
	merge: {
		filters: [],
		mode: "and"
	},
	platform: { platform: "steam" },
	"deck compatibility": { category: 3 },
	"steamos compatibility": { category: 2 },
	"review score": {
		scoreThreshold: 50,
		condition: "above",
		type: "metacritic"
	},
	"time played": {
		timeThreshold: 60,
		condition: "above",
		units: "minutes"
	},
	"size on disk": {
		gbThreshold: 10,
		condition: "above"
	},
	"release date": {
		date: void 0,
		condition: "above"
	},
	"purchase date": {
		date: void 0,
		condition: "above"
	},
	"last played": {
		date: void 0,
		condition: "above"
	},
	"family sharing": { isFamilyShared: !0 },
	demo: { isDemo: !0 },
	"coming soon": { isComingSoon: !0 },
	streamable: { isStreamable: !0 },
	"steam features": {
		features: [],
		mode: "and"
	},
	achievements: {
		threshold: 10,
		thresholdType: "percent",
		condition: "above"
	},
	"sd card": { card: L.INSTALLED },
	"install folder": { driveName: installFolderStore?.AllInstallFolders?.find((e) => e.bIsDefaultFolder)?.strDriveName ?? "" }
}), gn = () => ({
	collection: F("DESCRIPTION_COLLECTION_FILTER", "Selects apps that are in a certain Steam Collection."),
	installed: F("DESCRIPTION_INSTALLED_FILTER", "Selects apps that are installed/uninstalled."),
	regex: F("DESCRIPTION_REGEX_FILTER", "Selects apps whose titles match a regular expression."),
	friends: F("DESCRIPTION_FRIENDS_FILTER", "Selects apps that are also owned by friends."),
	tags: F("DESCRIPTION_TAGS_FILTER", "Selects apps that have specific community tags."),
	whitelist: F("DESCRIPTION_WHITELIST_FILTER", "Selects apps that are added to the list."),
	blacklist: F("DESCRIPTION_BLACKLIST_FILTER", "Selects apps that are not added to the list."),
	merge: F("DESCRIPTION_MERGE_FILTER", "Selects apps that pass a subgroup of filters."),
	platform: F("DESCRIPTION_PLATFORM_FILTER", "Selects Steam or non-Steam apps."),
	"deck compatibility": F("DESCRIPTION_DECK_COMPAT_FILTER", "Selects apps that have a specific Steam Deck compatibilty status."),
	"steamos compatibility": F("DESCRIPTION_MACHINE_COMPAT_FILTER", "Selects apps that have a specific SteamOS compatibilty status."),
	"review score": F("DESCRIPTION_REVIEW_FILTER", "Selects apps based on their metacritic/steam review score."),
	"time played": F("DESCRIPTION_TIME_PLAYED_FILTER", "Selects apps based on your play time."),
	"size on disk": F("DESCRIPTION_SIZE_ON_DISK_FILTER", "Selects apps based on their install size."),
	"release date": F("DESCRIPTION_RELEASE_DATE_FILTER", "Selects apps based on their release date."),
	"purchase date": F("DESCRIPTION_PURCHASE_DATE_FILTER", "Selects apps based on when you purchased them."),
	"last played": F("DESCRIPTION_LAST_PLAYED_FILTER", "Selects apps based on when they were last played."),
	"family sharing": F("DESCRIPTION_FAMILY_SHARING_FILTER", "Selects apps that are/aren't shared from family members."),
	demo: F("DESCRIPTION_DEMO_FILTER", "Selects apps that are/aren't demos."),
	"coming soon": F("DESCRIPTION_COMING_SOON_FILTER", "Selects apps that are/aren't soon to be released."),
	streamable: F("DESCRIPTION_STREAMABLE_FILTER", "Selects apps that can/can't be streamed from another computer."),
	achievements: F("DESCRIPTION_ACHIEVEMENTS_FILTER", "Selects apps based on their completion percentage."),
	"steam features": F("DESCRIPTION_STEAM_FEATURES_FILTER", "Selects apps that support specific Steam Features."),
	"sd card": F("DESCRIPTION_SD_CARD_FILTER", "Selects apps that are present on the inserted/specific MicroSD Card."),
	"install folder": F("DESCRIPTION_INSTALL_FOLDER_FILTER", "Selects apps that are installed in a specific Steam Install Folder.")
}), _n = () => ({
	collection: F("LABEL_COLLECTION_FILTER", "Collection"),
	installed: F("LABEL_INSTALLED_FILTER", "Installed"),
	regex: F("LABEL_REGEX_FILTER", "Regex"),
	friends: F("LABEL_FRIENDS_FILTER", "Friends"),
	tags: F("LABEL_TAGS_FILTER", "Tags"),
	whitelist: F("LABEL_WHITELIST_FILTER", "Whitelist"),
	blacklist: F("LABEL_BLACKLIST_FILTER", "Blacklist"),
	merge: F("LABEL_MERGE_FILTER", "Merge"),
	platform: F("LABEL_PLATFORM_FILTER", "Platform"),
	"deck compatibility": F("LABEL_DECK_COMPAT_FILTER", "Deck Compatibility"),
	"steamos compatibility": F("LABEL_MACHINE_COMPAT_FILTER", "SteamOS Compatibility"),
	"review score": F("LABEL_REVIEW_FILTER", "Review Score"),
	"time played": F("LABEL_TIME_PLAYED_FILTER", "Time Played"),
	"size on disk": F("LABEL_SIZE_ON_DISK_FILTER", "Size On Disk"),
	"release date": F("LABEL_RELEASE_DATE_FILTER", "Release Date"),
	"purchase date": F("LABEL_PURCHASE_DATE_FILTER", "Purchase Date"),
	"last played": F("LABEL_LAST_PLAYED_FILTER", "Last Played"),
	"family sharing": F("LABEL_FAMILY_SHARING_FILTER", "Family Sharing"),
	demo: F("LABEL_DEMO_FILTER", "Demo"),
	"coming soon": F("LABEL_COMING_SOON_FILTER", "Coming Soon"),
	streamable: F("LABEL_STREAMABLE_FILTER", "Streamable"),
	achievements: F("LABEL_ACHIEVEMENTS_FILTER", "Achievements"),
	"steam features": F("LABEL_STEAM_FEATURES_FILTER", "Steam Features"),
	"sd card": F("LABEL_SD_CARD_FILTER", "MicroSD Card"),
	"install folder": F("LABEL_INSTALL_FOLDER_FILTER", "Install Folder")
}), vn = {
	collection: He,
	installed: st,
	regex: vt,
	friends: jt,
	tags: ut,
	whitelist: xt,
	blacklist: Je,
	merge: dn,
	platform: We,
	"deck compatibility": un,
	"steamos compatibility": ln,
	"review score": qe,
	"time played": ht,
	"size on disk": wt,
	"release date": Ze,
	"purchase date": Ot,
	"last played": _t,
	"family sharing": ft,
	demo: nt,
	"coming soon": fn,
	streamable: tt,
	"steam features": at,
	achievements: At,
	"sd card": Dt,
	"install folder": it
};
function yn(e) {
	switch (e.type) {
		case "regex":
		case "collection":
		case "friends":
		case "tags":
		case "merge":
		case "deck compatibility":
		case "steamos compatibility":
		case "steam features":
		case "achievements":
		case "sd card":
		case "install folder": return !0;
		case "platform":
		case "installed":
		case "whitelist":
		case "blacklist":
		case "review score":
		case "time played":
		case "size on disk":
		case "release date":
		case "purchase date":
		case "last played":
		case "demo":
		case "coming soon":
		case "family sharing":
		case "streamable": return !1;
	}
}
function bn(e) {
	switch (e.type) {
		case "regex": return e.params.regex !== "";
		case "collection": return e.params.id !== "" && e.params.name !== "";
		case "friends": return e.params.friends.length !== 0;
		case "tags": return e.params.tags.length !== 0;
		case "whitelist":
		case "blacklist": return e.params.games.length !== 0;
		case "merge": return e.params.filters.length !== 0;
		case "release date":
		case "purchase date":
		case "last played": return e.params.date !== void 0 || e.params.daysAgo !== void 0 || e.params.isUnknown !== void 0;
		case "steam features": return e.params.features.length !== 0;
		case "size on disk": return e.params.gbThreshold !== 0;
		case "installed":
		case "platform":
		case "deck compatibility":
		case "steamos compatibility":
		case "review score":
		case "time played":
		case "demo":
		case "coming soon":
		case "family sharing":
		case "streamable":
		case "achievements":
		case "sd card":
		case "install folder": return !0;
	}
}
function xn(e) {
	switch (e) {
		case 0: return F("DeckVerified_CategoryLabel_Unknown", "Unknown", !0);
		case 1: return F("DeckVerified_CategoryLabel_Unsupported", "Unsupported", !0);
		case 2: return F("DeckVerified_CategoryLabel_Playable", "Playable", !0);
		case 3: return F("DeckVerified_CategoryLabel_Verified", "Verified", !0);
		default: return "";
	}
}
function Sn(e) {
	switch (e) {
		case 0: return F("SteamOS_CategoryLabel_Unknown", "Unknown", !0);
		case 1: return F("SteamOS_CategoryLabel_Unsupported", "Unsupported", !0);
		case 2: return F("SteamOS_CategoryLabel_Compatible", "Compatible", !0);
		default: return "";
	}
}
function Cn(e) {
	switch (Object.keys(e).includes("inverted") || (e.inverted = !1), e.type) {
		case "collection": {
			let t = !0, n = [], r = e;
			r.params.collection && (r.params.id = r.params.collection, delete r.params.collection);
			let i = collectionStore.GetCollection(r.params.id);
			if (i) r.params.name || (r.params.name = i.displayName);
			else if (r.params.name) {
				let e = collectionStore.userCollections.find((e) => e.displayName === r.params.name);
				e ? r.params.id = e.id : (n.push(`Collection: ${r.params.name} no longer exists`), t = !1);
			} else n.push(`Collection with id: ${r.params.id} no longer exists`), t = !1;
			return {
				passed: t,
				errors: n
			};
		}
		case "merge": {
			let t = !0, n = [], r = [];
			Object.keys(e.params).includes("includesHidden") && delete e.params.includesHidden;
			let i = e;
			for (let e = 0; e < i.params.filters.length; e++) {
				let a = i.params.filters[e], o = Cn(a);
				if (!o.passed) {
					t = !1, n.push(`Filter ${e + 1} - ${o.errors.length} ${o.errors.length === 1 ? "error" : "errors"}`);
					let i = {
						filterIdx: e,
						errors: o.errors
					};
					o.mergeErrorEntries && (i.mergeErrorEntries = o.mergeErrorEntries), r.push(i);
				}
			}
			return {
				passed: t,
				errors: n,
				mergeErrorEntries: r
			};
		}
		case "sd card": {
			let t = e, n = !0;
			return H.isInstallOk() && window.MicroSDeck.Enabled && typeof t.params.card == "string" && ((window.MicroSDeck.CardsAndGames || []).find(([e]) => t.params.card === e.uid) || (n = !1)), {
				passed: n,
				errors: n ? [] : ["Couldn't find the selected card in the list of known cards."]
			};
		}
		case "achievements": {
			let t = e;
			return t.params.completionPercentage && (t.params.threshold = t.params.completionPercentage, t.params.thresholdType = "percent", delete t.params.completionPercentage), {
				passed: !0,
				errors: []
			};
		}
		default: return {
			passed: !0,
			errors: []
		};
	}
}
function wn(e, t) {
	if (!e) return !!t.isUnknown;
	if (t.date) {
		let { day: n, month: r, year: i } = t.date;
		if (t.condition === "above") return e >= new Date(i, (r ?? 1) - 1, n ?? 1).getTime();
		switch (n === void 0 ? r === void 0 ? I.yearOnly : I.monthYear : I.dayMonthYear) {
			case I.dayMonthYear: return e < new Date(i, r - 1, n + 1).getTime();
			case I.monthYear: return e < new Date(i, r, 1).getTime();
			case I.yearOnly: return e < new Date(i + 1, 0, 1).getTime();
		}
	}
	let n = /* @__PURE__ */ new Date();
	return t.condition === "above" ? e >= new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() - t.daysAgo).getTime() : e < new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() + 1 - t.daysAgo).getTime();
}
var Tn = class e {
	static filterFunctions = {
		collection: (e, t) => collectionStore.GetCollection(e.id).allApps.includes(t),
		installed: (e, t) => e.installed ? t.installed : !t.installed,
		regex: (e, t) => new RegExp(e.regex ?? "/^$/").test(t.display_name),
		friends: (e, t) => {
			let n = on.getFriendsWhoOwn(t.appid);
			return e.mode === "and" ? e.friends.every((e) => n.includes(e)) : e.friends.some((e) => n.includes(e));
		},
		tags: (e, t, n) => {
			let r = n[t.appid], i = (e) => {
				let n = t.store_tag.includes(e);
				if (r) {
					let t = r[e];
					if (t === !1 && n) return !1;
					if (t === !0 && !n) return !0;
				}
				return n;
			};
			return e.mode === "and" ? e.tags.every(i) : e.tags.some(i);
		},
		whitelist: (e, t) => e.games.includes(t.appid),
		blacklist: (e, t) => !e.games.includes(t.appid),
		merge: (t, n, r) => t.mode === "and" ? t.filters.every((t) => e.run(t, n, r)) : t.filters.some((t) => e.run(t, n, r)),
		platform: (e, t) => e.platform === "steam" ? t.app_type !== 1073741824 && t.app_type !== 4 && t.app_type !== 2048 : e.platform === "nonSteam" && t.app_type === 1073741824,
		"deck compatibility": (e, t) => t.steam_deck_compat_category === e.category,
		"steamos compatibility": (e, t) => mn(t) === e.category,
		"review score": (e, t) => {
			let n = e.type === "metacritic" ? t.metacritic_score : t.review_percentage;
			return e.condition === "above" ? n >= e.scoreThreshold : n <= e.scoreThreshold;
		},
		"time played": (e, t) => {
			let n = e.units === "minutes" ? e.timeThreshold : e.units === "hours" ? e.timeThreshold * 60 : e.timeThreshold * 1440;
			return e.condition === "above" ? t.minutes_playtime_forever >= n : t.minutes_playtime_forever <= n;
		},
		"size on disk": (e, t) => e.condition === "above" ? Number(t.size_on_disk) / 1024 ** 3 >= e.gbThreshold : Number(t.size_on_disk) / 1024 ** 3 <= e.gbThreshold,
		"release date": (e, t) => {
			let n = null;
			return t.rt_original_release_date ? n = t.rt_original_release_date * 1e3 : t.rt_steam_release_date !== 0 && (n = t.rt_steam_release_date * 1e3), wn(n, e);
		},
		"purchase date": (e, t) => {
			let n = null;
			return t.rt_purchased_time && (n = t.rt_purchased_time * 1e3), wn(n, e);
		},
		"last played": (e, t) => {
			let n = t.rt_last_time_played * 1e3;
			return n !== 0 && wn(n, e);
		},
		"family sharing": (e, t) => {
			let n = collectionStore.sharedLibrariesCollections.some((e) => e.allApps.includes(t));
			return e.isFamilyShared ? n : !n;
		},
		demo: (e, t) => e.isDemo ? t.app_type === 8 : t.app_type !== 8,
		"coming soon": (e, t) => e.isComingSoon ? t.display_status === 13 : t.display_status !== 13,
		streamable: (e, t) => {
			let n = t.per_client_data.some((e) => e.client_name !== "This machine" && e.client_name !== "" && e.installed);
			return e.isStreamable ? n : !n;
		},
		"steam features": (e, t) => e.mode === "and" ? e.features.every((e) => t.store_category.includes(e)) : e.features.some((e) => t.store_category.includes(e)),
		achievements: (e, t) => {
			let n = appAchievementProgressCache.GetAchievementProgress(t.appid);
			if (e.thresholdType === "percent") return e.condition === "above" ? n >= e.threshold : n <= e.threshold;
			{
				let n = appAchievementProgressCache.m_achievementProgress.mapCache.get(t.appid);
				if (n) {
					let t = n.unlocked;
					return e.condition === "above" ? t >= e.threshold : t <= e.threshold;
				}
				return V.error(`Unable to get achievements cache for ${t.appid}`), !1;
			}
		},
		"sd card": (e, t) => {
			let n = (e) => !!e[1].find((e) => +e.uid == t.appid), r;
			switch (e.card) {
				case L.ANY: return window.MicroSDeck?.CardsAndGames?.find(n);
				case L.INSTALLED:
				case void 0:
					r = window.MicroSDeck?.CurrentCardAndGames;
					break;
				default: r = window.MicroSDeck?.CardsAndGames?.find(([t]) => t.uid == e.card);
			}
			return r ? n(r) : !1;
		},
		"install folder": (e, t) => {
			let n = installFolderStore.AllInstallFolders.find((t) => t.strDriveName === e.driveName);
			return !n || !n.bIsMounted ? !1 : n.vecApps.some((e) => e.nAppID === t.appid);
		}
	};
	static removeUnknownTypes(t) {
		if (!t) return;
		let n = Object.keys(e.filterFunctions);
		return t.flatMap((e) => {
			if (e.type === "merge") {
				let t = { ...e };
				return t.params.filters = this.removeUnknownTypes(t.params.filters), t;
			}
			return n.includes(e.type) ? e : [];
		});
	}
	static run(e, t, n) {
		let r;
		return r = e.type === "tags" || e.type === "merge" ? this.filterFunctions[e.type](e.params, t, n) : this.filterFunctions[e.type](e.params, t), e.inverted ? !r : r;
	}
};
(0, R.findModuleExport)((e) => {
	if (e?.toString().includes("setItem(\"AppGridDisplaySettings\"")) return e;
});
//#endregion
//#region src/hooks/useSortingMenuItems.tsx
function En(e) {
	return LocalizationManager.LocalizeString({
		1: "#Library_SortByAlphabetical",
		10: "#Library_SortByFriendsPlaying",
		2: "#Library_SortByPctAchievementsComplete",
		3: "#Library_SortByLastUpdated",
		4: "#Library_SortByHoursPlayed",
		5: "#Library_SortByLastPlayed",
		6: "#Library_SortByReleaseDate",
		7: "#Library_SortByAddedToLibrary",
		8: "#Library_SortBySizeOnDisk",
		9: "#Library_SortByMetacriticScore",
		11: "#Library_SortBySteamReview"
	}[e]);
}
function Dn() {
	return [
		1,
		10,
		2,
		4,
		5,
		6,
		7,
		8,
		9,
		11
	].map((e) => ({
		data: e,
		label: En(e)
	}));
}
var On = (e) => (0, x.useMemo)(() => [{
	label: F("LABEL_DEFAULT_SORT", "Default"),
	data: -1
}].concat(Dn()), e), kn = ({ eSortBy: e, closeModal: t }) => /* @__PURE__ */ window.SP_REACT.createElement(R.ConfirmModal, {
	strTitle: `${F("Library_SortCollectionBy", "Sort By", !0)}: ${En(e)}`,
	bAlertDialog: !0,
	closeModal: t
}, F("MESSAGE_SORTING_METHOD_IS_OVERRIDDEN_BY_TAB", "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting.")), An = class {
	id;
	title;
	position;
	filters;
	collection;
	filtersMode;
	categoriesToInclude;
	autoHide;
	visibleToOthers;
	dependsOnMicroSDeck;
	sortByOverride;
	displayAsCollection;
	constructor(e, t, n, r, i, a, o, s, c, l) {
		this.id = e, this.title = t, this.position = n, this.filters = r, this.filtersMode = i, this.categoriesToInclude = a, this.autoHide = o, this.visibleToOthers = s, this.dependsOnMicroSDeck = !1, this.displayAsCollection = c, this.sortByOverride = l, this.collection = {
			AsDeletableCollection: () => null,
			AsDragDropCollection: () => null,
			AsEditableCollection: () => null,
			GetAppCountWithToolsFilter: (e) => e && e.Matches ? this.collection.visibleApps.filter((t) => e.Matches(t)).length : this.collection.visibleApps.length,
			bAllowsDragAndDrop: !1,
			bIsDeletable: !1,
			bIsDynamic: !1,
			bIsEditable: !1,
			displayName: this.title,
			id: this.id
		}, this.position > -1 && this.buildCollection(), this.checkMicroSDeckDependency();
	}
	getActualTab(e, t, n, r = {}, i, a) {
		if (!a && this.dependsOnMicroSDeck || this.autoHide && this.collection.visibleApps.length === 0) return null;
		let o = () => (0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(kn, { eSortBy: this.sortByOverride }));
		return this.sortByOverride !== -1 && (r.onOptionsButton = o), {
			title: this.title,
			id: this.id,
			footer: r,
			content: ((e) => t ? /* @__PURE__ */ window.SP_REACT.createElement(t.Provider, { value: { label: this.title } }, e) : e)(/* @__PURE__ */ window.SP_REACT.createElement(e, {
				collection: this.collection,
				setSortBy: n.setSortBy,
				eSortBy: this.sortByOverride === -1 ? n.eSortBy : this.sortByOverride,
				showSortingContextMenu: this.sortByOverride === -1 ? n.showSortingContextMenu : o
			})),
			renderTabAddon: () => /* @__PURE__ */ window.SP_REACT.createElement("span", { className: R.gamepadTabbedPageClasses.TabCount }, this.collection.GetAppCountWithToolsFilter(i))
		};
	}
	buildCollection(e) {
		let t = G.getTagOverrides(), { hidden: n, ...r } = Bt(this.categoriesToInclude), i = n ? "allApps" : "visibleApps", a = [];
		for (let e in r) {
			let t = e;
			r[t] && (a = a.concat(collectionStore.appTypeCollectionMap.get(`type-${t}`)[i]));
		}
		let o = a.filter((e) => this.filtersMode === "and" ? this.filters.every((n) => Tn.run(n, e, t)) : this.filters.some((n) => Tn.run(n, e, t)));
		this.collection.allApps = o, this.collection.visibleApps = [...o];
		let s = /* @__PURE__ */ new Map();
		o.forEach((e) => s.set(e.appid, e)), this.collection.apps = s, this.displayAsCollection && Kt(e ?? this.title, this.title, o);
	}
	update(e) {
		let t = this.title;
		this.title = e.title, this.filtersMode = e.filtersMode, this.categoriesToInclude = e.categoriesToInclude, this.filters = e.filters, this.autoHide = e.autoHide, this.visibleToOthers = e.visibleToOthers, this.sortByOverride = e.sortByOverride, !e.displayAsCollection && this.displayAsCollection && Kt(t, this.title, null), this.displayAsCollection = e.displayAsCollection, this.buildCollection(t), this.checkMicroSDeckDependency();
	}
	checkMicroSDeckDependency() {
		this.dependsOnMicroSDeck = this.containsFilterType("sd card");
	}
	containsFilterType(...e) {
		return Ht(this.filters, ...e);
	}
	cleanupTab() {
		this.displayAsCollection && Kt(this.title, this.title, null);
	}
}, jn = (0, x.createContext)(null), Mn = (0, x.createContext)(null), Nn = () => (0, x.useContext)(Mn), Pn = ({ children: e, tabMasterManager: t }) => {
	let [n, r] = (0, x.useState)({
		...t.getTabs(),
		...t.getFriendsAndTags()
	});
	return (0, x.useEffect)(() => {
		function e() {
			r({
				...t.getTabs(),
				...t.getFriendsAndTags()
			});
		}
		return t.eventBus.addEventListener("stateUpdate", e), () => {
			t.eventBus.removeEventListener("stateUpdate", e);
		};
	}, []), /* @__PURE__ */ window.SP_REACT.createElement(Mn.Provider, { value: {
		...n,
		tabMasterManager: t
	} }, e);
}, Fn, In = /* @__PURE__ */ new Uint8Array(16);
function Ln() {
	if (!Fn && (Fn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Fn)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return Fn(In);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var W = [];
for (let e = 0; e < 256; ++e) W.push((e + 256).toString(16).slice(1));
function Rn(e, t = 0) {
	return W[e[t + 0]] + W[e[t + 1]] + W[e[t + 2]] + W[e[t + 3]] + "-" + W[e[t + 4]] + W[e[t + 5]] + "-" + W[e[t + 6]] + W[e[t + 7]] + "-" + W[e[t + 8]] + W[e[t + 9]] + "-" + W[e[t + 10]] + W[e[t + 11]] + W[e[t + 12]] + W[e[t + 13]] + W[e[t + 14]] + W[e[t + 15]];
}
var zn = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function Bn(e, t, n) {
	if (zn.randomUUID && !t && !e) return zn.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || Ln)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return Rn(r);
}
//#endregion
//#region src/presets/presets.ts
var Vn = {
	collection: (e, t) => {
		let n = z.games;
		return e === "hidden" && (n |= z.music | z.software | z.hidden), {
			filters: [{
				type: "collection",
				inverted: !1,
				params: {
					id: e,
					name: t
				}
			}],
			filtersMode: "and",
			categoriesToInclude: n
		};
	},
	"all games": () => ({
		filters: [{
			type: "installed",
			inverted: !1,
			params: { installed: !0 }
		}, {
			type: "installed",
			inverted: !1,
			params: { installed: !1 }
		}],
		filtersMode: "or",
		categoriesToInclude: z.games
	}),
	installation: (e) => ({
		filters: [{
			type: "installed",
			inverted: !1,
			params: { installed: e }
		}],
		filtersMode: "and",
		categoriesToInclude: z.games
	}),
	"deck compatibility": (e) => ({
		filters: [{
			type: "deck compatibility",
			inverted: !1,
			params: { category: e }
		}],
		filtersMode: "and",
		categoriesToInclude: z.games
	}),
	"steamos compatibility": (e) => ({
		filters: [{
			type: "steamos compatibility",
			inverted: !1,
			params: { category: e }
		}],
		filtersMode: "and",
		categoriesToInclude: z.games
	}),
	platform: (e) => ({
		filters: [{
			type: "platform",
			inverted: !1,
			params: { platform: e }
		}],
		filtersMode: "and",
		categoriesToInclude: z.games
	}),
	soundtracks: () => ({
		filters: [{
			type: "installed",
			inverted: !1,
			params: { installed: !0 }
		}, {
			type: "installed",
			inverted: !1,
			params: { installed: !1 }
		}],
		filtersMode: "or",
		categoriesToInclude: z.music
	}),
	software: () => ({
		filters: [{
			type: "installed",
			inverted: !1,
			params: { installed: !0 }
		}, {
			type: "installed",
			inverted: !1,
			params: { installed: !1 }
		}],
		filtersMode: "or",
		categoriesToInclude: z.software
	}),
	"micro sd card": (e) => ({
		filters: [{
			type: "sd card",
			inverted: !1,
			params: { card: e }
		}],
		filtersMode: "or",
		categoriesToInclude: z.games
	})
}, Hn = Object.keys(Vn);
function Un(e, ...t) {
	return Vn[e](...t);
}
//#endregion
//#region src/state/TabProfileManager.tsx
var Wn = class {
	tabProfiles;
	constructor(e) {
		Object.values(e).forEach((e) => e.forEach((t, n) => {
			t === "DeckGames" && (e[n] = "GreatOnDeck");
		})), this.tabProfiles = e;
	}
	write(e, t) {
		this.tabProfiles[e] = t, this.save();
	}
	apply(e, t) {
		let { visibleTabsList: n, hiddenTabsList: r } = t.getTabs();
		r.forEach((e) => {
			e.filters && e.collection.allApps === void 0 && e.buildCollection();
		}), n.forEach((e) => e.position = -1), t.reorderTabs(this.tabProfiles[e]);
	}
	delete(e) {
		delete this.tabProfiles[e], this.save();
	}
	onDeleteTab(e) {
		Object.values(this.tabProfiles).forEach((t) => {
			let n = t.findIndex((t) => t === e);
			n > -1 && t.splice(n, 1);
		}), this.save();
	}
	save() {
		B.setTabProfiles(this.tabProfiles);
	}
};
//#endregion
//#region src/state/tab-master/TabMasterManager.tsx
function Gn(e) {
	let t = [];
	for (let n of e) if (n.type === "merge") {
		let e = Gn(n.params.filters);
		t.push(...e);
	} else t.push(n);
	return t;
}
var Kn = class {
	tabsMap;
	visibleTabsList = [];
	hiddenTabsList = [];
	hasLoaded;
	currentUsersFriends = [];
	friendsGameMap = /* @__PURE__ */ new Map();
	allStoreTags = [];
	userHasVisibleFavorites = !1;
	userHasVisibleSoundtracks = !1;
	userCollectionIds = [];
	eventBus = new EventTarget();
	microSDeckInstalled = !1;
	disposers = [];
	collectionDisposers = {};
	tabProfileManager;
	invalidSettingsLoaded;
	constructor() {
		this.hasLoaded = !1, this.tabsMap = /* @__PURE__ */ new Map(), this.invalidSettingsLoaded = {
			isTrue: !1,
			waitForResetConfirmation: null,
			confirmReset: async () => {}
		}, this.invalidSettingsLoaded.waitForResetConfirmation = new Promise(async (e) => this.invalidSettingsLoaded.confirmReset = async () => {
			this.invalidSettingsLoaded.isTrue = !1, e(0);
		});
	}
	handleMicroSDeckChange() {
		if (!this.hasLoaded) return;
		let e = [];
		for (let t of this.tabsMap.values()) t.dependsOnMicroSDeck && e.push(t.id);
		hr.validateTabs(e, this, !0);
	}
	initReactions() {
		this.addDisposer(K(() => collectionStore.GetCollection("type-games").allApps, this.rebuildCustomTabsOnCollectionChange.bind(this), { delay: 600 })), this.addDisposer(K(() => collectionStore.GetCollection("favorite").allApps.length, this.handleNumOfVisibleFavoritesChanged.bind(this))), this.addDisposer(K(() => collectionStore.GetCollection("type-music").visibleApps.length, this.handleNumOfVisibleSoundtracksChanged.bind(this))), this.addDisposer(K(() => collectionStore.GetCollection("local-install").allApps.length, this.rebuildCustomTabsOnCollectionChange.bind(this))), this.addDisposer(K(() => collectionStore.GetCollection("hidden").allApps.length, this.rebuildCustomTabsOnCollectionChange.bind(this), { delay: 50 })), collectionStore.GetCollection("desk-desktop-apps") && this.addDisposer(K(() => collectionStore.GetCollection("desk-desktop-apps").allApps.length, this.rebuildCustomTabsOnCollectionChange.bind(this))), this.addDisposer(K(() => collectionStore.userCollections.length, this.handleUserCollectionRemove.bind(this))), this.handleUserCollectionRemove(collectionStore.userCollections.length), this.addDisposer(K(() => friendStore.allFriends, this.handleFriendsReaction.bind(this), { delay: 50 })), this.addDisposer(K(() => appStore.m_mapStoreTagLocalization, this.storeTagReaction.bind(this), { delay: 50 })), G.setTagOverrideReaction(this.tagOverridesReaction.bind(this)), this.addDisposer(K(() => appAchievementProgressCache.m_achievementProgress.mapCache.size, this.handleAchievementsReaction.bind(this))), this.addDisposer(SteamClient.GameSessions.RegisterForAppLifetimeNotifications((e) => !e.bRunning && Array.from(this.tabsMap.values()).find((e) => e.filters && e.containsFilterType("time played")) && setTimeout(() => {
			this.rebuildCustomTabs(), this.update();
		}, 3500)).unregister), this.handleFriendsReaction(friendStore.allFriends), this.storeTagReaction(appStore.m_mapStoreTagLocalization), H.initEventHandlers({ change: this.handleMicroSDeckChange.bind(this) }), this.addDisposer(SteamClient.InstallFolder.RegisterForInstallFolderChanges(() => {
			this.handleInstallFolderChanges();
		}).unregister);
	}
	handleNumOfVisibleFavoritesChanged(e) {
		if (!this.hasLoaded) return;
		let t = this.userHasVisibleFavorites;
		if (!t && e !== 0) {
			this.userHasVisibleFavorites = !0;
			let e = {
				...Ft.Favorites,
				position: this.visibleTabsList.length
			};
			this.visibleTabsList.push(this.addDefaultTabContainer(e)), this.updateAndSave();
		}
		t && e === 0 && (this.userHasVisibleFavorites = !1, this.deleteTab("Favorites"));
	}
	handleNumOfVisibleSoundtracksChanged(e) {
		if (!this.hasLoaded) return;
		let t = this.userHasVisibleSoundtracks;
		if (!t && e !== 0) {
			this.userHasVisibleSoundtracks = !0;
			let e = {
				...Ft.Soundtracks,
				position: this.visibleTabsList.length
			};
			this.visibleTabsList.push(this.addDefaultTabContainer(e)), this.updateAndSave();
		}
		t && e === 0 && (this.userHasVisibleSoundtracks = !1, this.deleteTab("Soundtracks"));
	}
	rebuildCustomTabsOnCollectionChange() {
		this.hasLoaded && this.rebuildCustomTabs();
	}
	rebuildCustomTabs() {
		this.hasLoaded && this.visibleTabsList.forEach((e) => {
			e.filters && e.filters.length !== 0 && e.buildCollection();
		});
	}
	handleUserCollectionRemove(e) {
		let t = collectionStore.userCollections;
		if (e < this.userCollectionIds.length && this.hasLoaded) {
			let e = !1, n = Object.keys(this.collectionDisposers), r = t.map((e) => e.id);
			this.userCollectionIds = this.userCollectionIds.filter((t) => {
				let i = r.includes(t);
				return !i && n.includes(t) && (e = !0, this.collectionDisposers[t](), delete this.collectionDisposers[t]), i;
			}), e && hr.validateTabs(Array.from(this.tabsMap.keys()), this);
		} else for (let e of t) this.userCollectionIds.includes(e.id) || this.userCollectionIds.push(e.id);
	}
	storeTagReaction(e) {
		if (e) {
			let t = Object.entries(e);
			this.allStoreTags = t.map(([e, t]) => ({
				tag: parseInt(e),
				string: t
			})), B.setTags(this.allStoreTags);
		} else V.error("Failed to get store tags. Both _data and data_ were undefined");
	}
	tagOverridesReaction() {
		this.visibleTabsList.filter((e) => e.filters && e.filters.length !== 0).forEach((e) => {
			e.filters.filter((e) => e.type === "tags").length > 0 && e.buildCollection();
		});
	}
	handleFriendsReaction(e) {
		this.currentUsersFriends = e.map((e) => {
			let t = e;
			return {
				steamid: Pt(t.m_persona.m_steamid.m_ulSteamID.low, t.m_persona.m_steamid.m_ulSteamID.high),
				name: t.m_strNickname && t.m_strNickname !== "" ? t.m_strNickname : t.m_persona.m_strPlayerName
			};
		}), B.setFriends(this.currentUsersFriends), Promise.all(this.currentUsersFriends.map((e) => {
			friendStore.FetchOwnedGames(e.steamid).then((t) => {
				this.friendsGameMap.set(e.steamid, t ? Array.from(t.setApps) : []);
			});
		})).then(() => {
			if (B.setFriendGames(this.friendsGameMap), !this.hasLoaded) return;
			let e = /* @__PURE__ */ new Set(), t = this.visibleTabsList.filter((e) => e.filters && e.filters.length !== 0);
			t.forEach((t) => {
				let n = t.filters.filter((e) => e.type === "friends").map((e) => e.params.friends);
				if (n.length > 0) {
					let t = [...new Set(n.flat())];
					for (let n of t) this.currentUsersFriends.find((e) => e.steamid === n) || e.add(n);
				}
			}), t.forEach((t) => {
				let n = !1;
				t.filters.filter((e) => e.type === "friends").forEach((t) => {
					for (let r of e) {
						let e = t.params.friends.indexOf(r);
						e >= 0 && (n = !0, t.params.friends.splice(e, 1));
					}
				}), n && t.buildCollection();
			});
		});
	}
	handleInstallFolderChanges() {
		this.visibleTabsList.forEach((e) => {
			if (e.filters) {
				let t = e;
				t.containsFilterType("install folder") && t.buildCollection();
			}
		});
	}
	handleAchievementsReaction(e) {
		this.visibleTabsList.forEach((e) => {
			if (e.filters) {
				let t = e;
				t.containsFilterType("achievements") && t.buildCollection();
			}
		});
	}
	buildTimeBasedFilterTabs() {
		this.visibleTabsList.forEach((e) => {
			if (e.filters) {
				let t = e;
				t.containsFilterType("last played", "release date") && (t.containsFilterType("merge") || t.filters.find((e) => e.params.daysAgo !== void 0)) && t.buildCollection();
			}
		});
	}
	addDisposer(e) {
		this.disposers.push(e);
	}
	disposeReactions() {
		this.disposers.forEach((e) => e());
		for (let e of Object.values(this.collectionDisposers)) e();
	}
	updateCustomTab(e, t) {
		this.tabsMap.get(e).update(t);
		let n = t.filters;
		n && this.addCollectionReactionsForFilters(Gn(n)), this.updateAndSave();
	}
	reorderTabs(e) {
		for (let t = 0; t < e.length; t++) this.tabsMap.get(e[t]).position = t;
		this.rebuildTabLists(), this.updateAndSave();
	}
	hideTab(e) {
		let t = this.tabsMap.get(e);
		this.hiddenTabsList.push(this.visibleTabsList.splice(t.position, 1)[0]), this.visibleTabsList.slice(t.position).forEach((e) => e.position--), t.position = -1, this.updateAndSave();
	}
	showTab(e) {
		let t = this.tabsMap.get(e);
		if (t.position > -1) return;
		let n = this.hiddenTabsList.findIndex((e) => e === t);
		t.position = this.visibleTabsList.length, this.visibleTabsList.push(this.hiddenTabsList.splice(n, 1)[0]), t.filters && t.collection.allApps === void 0 && t.buildCollection(), this.updateAndSave();
	}
	deleteTab(e) {
		let t = this.tabsMap.get(e);
		Jt(t) && t.cleanupTab();
		let n, r = !1, i;
		if (t.position > -1 ? (n = this.visibleTabsList, i = t.position, r = !0) : (n = this.hiddenTabsList, i = this.hiddenTabsList.findIndex((e) => e === t)), n.splice(i, 1), r) for (let e = i; e < this.visibleTabsList.length; e++) this.visibleTabsList[e].position--;
		this.tabsMap.delete(e), this.tabProfileManager?.onDeleteTab(e), this.tabProfileManager || V.error("Attempted to delete a tab before TabProfileManager has been initialized.", "This should not be possible."), this.updateAndSave();
	}
	createCustomTab(e, t, n, r, i, a, o, s, c) {
		let l = Bn();
		this.addCollectionReactionsForFilters(Gn(n)), this.visibleTabsList.push(this.addCustomTabContainer(l, e, t, n, r, i, a, o, s, c)), this.updateAndSave();
	}
	createPresetTab(e, t, ...n) {
		let { filters: r, filtersMode: i, categoriesToInclude: a } = Un(e, ...n);
		this.createCustomTab(t, this.visibleTabsList.length, r, i, a, !1, !1, !1, -1);
	}
	addCollectionReactionsForFilters(e) {
		let t = e.filter((e) => e.type === "collection");
		if (t.length > 0) for (let e of t) {
			let t = e.params.id;
			this.collectionDisposers[t] || (this.collectionDisposers[t] = K(() => collectionStore.GetCollection(t).allApps.length, () => {
				this.rebuildCustomTabsOnCollectionChange();
			}));
		}
	}
	loadUserDataAsync() {
		B.getTags().then((e) => {
			e instanceof Error ? V.raiseError(`Error loading tags \n ${e.message}`) : this.allStoreTags.length === 0 && (this.allStoreTags = e);
		}), B.getFriends().then((e) => {
			e instanceof Error ? V.raiseError(`Error loading friends \n ${e.message}`) : this.currentUsersFriends.length === 0 && (this.currentUsersFriends = e);
		}), B.getFriendsGames().then((e) => {
			e instanceof Error ? V.raiseError(`Error loading friends games \n ${e.message}`) : this.friendsGameMap.size === 0 && (this.friendsGameMap = e);
		});
	}
	loadTabs = async () => {
		this.initReactions();
		let e = await B.getTabs(), t = await B.getTabProfiles();
		this.loadUserDataAsync();
		try {
			if (e instanceof Error) throw Error(`Error loading tab settings \n ${e.message}`);
			if (t instanceof Error) throw Error(`Error loading tab profiles \n ${t.message}`);
			if (!e) {
				if (B.error("Tabs were corrupted."), B.toast("TabMaster Settings Couldn't Load", "Tab settings did not follow the expected format and could not load"), this.invalidSettingsLoaded.isTrue = !0, await this.invalidSettingsLoaded.waitForResetConfirmation, await B.backupDefaultDir("backup") !== !0) return V.raiseError("Couldn't backup settings");
				e = {};
			}
			this.tabProfileManager = new Wn(t), hr.validateSettingsOnLoad(Object.keys(e).length > 0 ? e : Ft, this, this.finishLoadingTabs.bind(this));
		} catch (e) {
			e instanceof Error && V.raiseError(`Encountered an error while loading \n ${e.message}`);
		}
	};
	finishLoadingTabs(e) {
		let t = [], n = [], r = [], i = collectionStore.GetCollection("favorite"), a = collectionStore.GetCollection("type-music");
		this.userHasVisibleFavorites = i && i.visibleApps.length > 0, this.userHasVisibleSoundtracks = a && a.visibleApps.length > 0;
		let o = null, s = null;
		e.Favorites && !this.userHasVisibleFavorites && (o = e.Favorites.position, delete e.Favorites), e.Soundtracks && !this.userHasVisibleSoundtracks && (s = e.Soundtracks.position, delete e.Soundtracks);
		for (let i in e) {
			let { id: a, title: c, filters: l, position: u, filtersMode: d, categoriesToInclude: f, autoHide: p, visibleToOthers: m, sortByOverride: h, displayAsCollection: g = !1 } = e[i], _ = Tn.removeUnknownTypes(l), v = _ ? this.addCustomTabContainer(a, c, u, _, d, f, p, m, g, h) : this.addDefaultTabContainer(e[i]);
			if (o !== null && o > -1 && v.position > o && v.position--, s !== null && s > -1 && v.position > s && v.position--, v.position > -1 ? t[v.position] ? r.push(v) : t[v.position] = v : n.push(v), _) {
				let e = Gn(_);
				this.addCollectionReactionsForFilters(e);
			}
		}
		r.forEach((e) => t.splice(e.position, 0, e)), this.visibleTabsList = t.filter((e) => e), this.visibleTabsList.forEach((e, t) => e.position = t), this.hiddenTabsList = n, this.hasLoaded = !0, this.updateAndSave();
	}
	getTabs() {
		return {
			visibleTabsList: this.visibleTabsList,
			hiddenTabsList: this.hiddenTabsList,
			tabsMap: this.tabsMap
		};
	}
	getFriendsAndTags() {
		return {
			currentUsersFriends: this.currentUsersFriends,
			allStoreTags: this.allStoreTags
		};
	}
	get hasSettingsLoaded() {
		return this.hasLoaded;
	}
	getFriendsWhoOwn(e) {
		return Array.from(this.friendsGameMap.entries()).filter(([, t]) => t.includes(e)).map(([e]) => e);
	}
	saveTabs() {
		V.log("Saving Tabs...");
		let e = {};
		this.tabsMap.forEach((t) => {
			let n = t.filters ? {
				id: t.id,
				title: t.title,
				position: t.position,
				filters: t.filters,
				filtersMode: t.filtersMode,
				categoriesToInclude: t.categoriesToInclude,
				autoHide: t.autoHide,
				visibleToOthers: t.visibleToOthers,
				sortByOverride: t.sortByOverride
			} : t;
			e[t.id] = n;
		}), B.setTabs(e);
	}
	addCustomTabContainer(e, t, n, r, i, a, o, s, c, l = -1) {
		let u = new An(e, t, n, r, i, a, o, s, c, l);
		return this.tabsMap.set(e, u), u;
	}
	addDefaultTabContainer(e) {
		return this.tabsMap.set(e.id, e), e;
	}
	rebuildTabLists() {
		let e = [], t = [];
		this.tabsMap.forEach((n) => {
			n.position > -1 ? e[n.position] = n : t.push(n);
		}), this.visibleTabsList = e, this.hiddenTabsList = t;
	}
	updateAndSave() {
		this.saveTabs(), this.update();
	}
	update() {
		this.eventBus.dispatchEvent(new Event("stateUpdate")), this.rerenderLibrary();
	}
	rerenderLibrary() {}
	registerRerenderLibraryHandler(e) {
		this.rerenderLibrary = e;
	}
}, G = class e {
	static userTagOverrides = {};
	static onTagOverrideChangeReaction = (e) => {};
	static eventBus = new EventTarget();
	static async loadSettings() {
		let t = await B.getTagOverrides();
		t instanceof Error ? V.raiseError(`Error loading tag overrides \n ${t.message}`) : (e.userTagOverrides = t ?? {}, e.eventBus.dispatchEvent(new Event("stateUpdate")));
	}
	static getTagOverrides() {
		return e.userTagOverrides;
	}
	static async setTagOverrides(t) {
		let n = await B.setTagOverrides(t);
		n instanceof Error ? V.raiseError(`Error saving tag overrides \n ${n.message}`) : (e.userTagOverrides = t, e.onTagOverrideChangeReaction(t), e.eventBus.dispatchEvent(new Event("stateUpdate")));
	}
	static async setTagOverrideReaction(e) {
		this.onTagOverrideChangeReaction = e;
	}
}, qn = (0, x.createContext)(null), Jn = () => (0, x.useContext)(qn), Yn = ({ children: e }) => {
	let [t, n] = (0, x.useState)({
		tagOverrides: G.getTagOverrides(),
		setTagOverrides: (e) => G.setTagOverrides(e)
	});
	return (0, x.useEffect)(() => {
		function e() {
			n({
				tagOverrides: G.getTagOverrides(),
				setTagOverrides: (e) => G.setTagOverrides(e)
			});
		}
		return G.eventBus.addEventListener("stateUpdate", e), () => {
			G.eventBus.removeEventListener("stateUpdate", e);
		};
	}, []), /* @__PURE__ */ window.SP_REACT.createElement(qn.Provider, { value: { ...t } }, e);
};
//#endregion
//#region node_modules/.pnpm/react-icons@4.12.0_react@19.1.0/node_modules/react-icons/bi/index.esm.js
function Xn(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [{
			tag: "path",
			attr: { d: "M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" }
		}]
	})(e);
}
function Zn(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [{
			tag: "path",
			attr: { d: "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" }
		}]
	})(e);
}
function Qn(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [{
			tag: "path",
			attr: { d: "M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z" }
		}]
	})(e);
}
function $n(e) {
	return D({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [{
			tag: "path",
			attr: { d: "M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z" }
		}]
	})(e);
}
//#endregion
//#region src/components/accordions/TabErrorsAccordion.tsx
var er = ({ index: e, tab: t, open: n, isDeleted: r, isPassing: i }) => r ? /* @__PURE__ */ window.SP_REACT.createElement("div", {
	className: "check-cont",
	style: { pointerEvents: "none" }
}, /* @__PURE__ */ window.SP_REACT.createElement(et, { fill: "red" }), F("MESSAGE_DELETING_TAB", "Deleting Tab"), " ", e + 1, " - ", t.title) : /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("div", {
	className: "check-cont",
	style: { pointerEvents: "none" }
}, i ? /* @__PURE__ */ window.SP_REACT.createElement(Qe, { fill: "#00f500" }) : /* @__PURE__ */ window.SP_REACT.createElement($e, { fill: "yellow" }), F("LABEL_TAB", "Tab"), " ", e + 1, " - ", t.title), /* @__PURE__ */ window.SP_REACT.createElement(Zn, { style: {
	animation: "transform 0.2s ease-in-out",
	transform: n ? "" : "rotate(90deg)",
	fontSize: "0.8em",
	marginLeft: "5px",
	pointerEvents: "none"
} })), tr = ({ index: e, isPassing: t, isDeleted: n, tab: r, isOpen: i, children: a }) => {
	let [o, s] = (0, x.useState)(i);
	function c(e) {
		e.stopPropagation(), Ut("/sounds/deck_ui_misc_01.wav"), s(!o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
		width: "100%",
		padding: "0"
	} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		className: "filter-start-cont styled-btn highlight-on-focus",
		focusClassName: "start-focused",
		focusWithinClassName: "start-focused"
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.ButtonItem, { onClick: c }, /* @__PURE__ */ window.SP_REACT.createElement(er, {
		index: e,
		tab: r,
		open: o,
		isDeleted: n,
		isPassing: t
	}))), o && !n && a);
}, nr = ({}) => /* @__PURE__ */ window.SP_REACT.createElement("style", null, `
      .tab-master-fix-modal-scope .${R.gamepadDialogClasses.GamepadDialogContent} .DialogHeader {
        margin-left: 15px;
      }

      .tab-master-fix-modal-scope .${R.gamepadDialogClasses.ModalPosition} > .${R.gamepadDialogClasses.GamepadDialogContent} {
        background: radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%);
      }
      
      /* The button item */
      .tab-master-fix-modal-scope .styled-btn {
        padding: 0 !important;
      }
      .tab-master-fix-modal-scope .styled-btn .${R.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      .tab-master-fix-modal-scope .styled-btn .${R.gamepadDialogClasses.FieldChildrenInner} {
        width: 100%;
      }
      .tab-master-fix-modal-scope .styled-btn .${R.gamepadDialogClasses.FieldChildrenWithIcon} {
        width: 100%;
      }
      .tab-master-fix-modal-scope .styled-btn .${R.gamepadDialogClasses.FieldLeftColumn} {
        display: none;
      }
      .tab-master-fix-modal-scope .styled-btn .${R.gamepadDialogClasses.FieldRightColumn} {
        width: 100%;
        max-width: 100% !important;
      }

      /* The button item wrapper */
      .tab-master-fix-modal-scope .filter-entry .${R.gamepadDialogClasses.Field} {
        padding: 0;
        margin: 0;
      }
      /* The button item label */
      .tab-master-fix-modal-scope .filter-entry .${R.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      /* The button item */
      .tab-master-fix-modal-scope .filter-entry .${R.gamepadDialogClasses.FieldChildrenInner} > button.${R.gamepadDialogClasses.Button}.DialogButton {
        padding: 10px;
        min-width: 45px;
      }

      .tab-master-fix-modal-scope .no-sep .${R.gamepadDialogClasses.Field}.${R.gamepadDialogClasses.WithBottomSeparatorStandard}::after,
      .tab-master-fix-modal-scope .no-sep.${R.gamepadDialogClasses.Field}.${R.gamepadDialogClasses.WithBottomSeparatorStandard}::after {
        display: none
      }

      /* Filter section start */
      .tab-master-fix-modal-scope .filter-start-cont {
        width: 114%;
        margin-left: -40px;
        padding: 0;

        font-size: 14px;
      }
      
      /* Focused styles */
      .tab-master-fix-modal-scope .filter-start-cont.start-focused,
      .tab-master-fix-modal-scope .filter-start-cont.tab-errors.start-focused {
        background-color: #3d4450 !important;
      }

      /* merge entries */
      .tab-master-fix-modal-scope .merge-filter-entries .merge-filter-entry {
        margin: 5px;
      }

      /* Error Accordion styles */
      .tab-master-fix-modal-scope .filter-start-cont.styled-btn button {
        padding: 0rem 2rem;
        margin: 0px;
        background: transparent !important;
        outline: none;
        border: none;
        box-shadow: none !important;

        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .tab-master-fix-modal-scope .filter-start-cont.tab-errors {
        background-color: #23262e;
      }
      .tab-master-fix-modal-scope .filter-start-cont .check-cont {
        color: #a9a9a9;
      }
      .tab-master-fix-modal-scope .filter-start-cont > button > svg {
        fill: #a9a9a9;
      }
      
      /* Focused styles */
      .tab-master-fix-modal-scope .filter-start-cont.start-focused .check-cont {
        color: #f5f5f5;
      }
      .tab-master-fix-modal-scope .filter-start-cont.start-focused > button > svg {
        fill: #f5f5f5;
      }

      /* merge entries */
      .tab-master-fix-modal-scope .merge-filter-entries .merge-filter-entry {
        margin: 5px;
      }

      .tab-master-fix-modal-scope .check-cont {
        display: flex;
        align-items: center;
      }
    
      .tab-master-fix-modal-scope .check-cont svg {
        margin-left: -6px;
        margin-right: 10px;
      }
    `), rr = ({ mergeParams: e, mergeErrorEntries: t, isPassingOuter: n, setIsPassingOuter: r, saveMerge: i, closeModal: a, tabName: o }) => {
	let [s, c] = (0, x.useState)(e.filters), [l, u] = (0, x.useState)(n);
	function d(e, t) {
		c(e);
		let n = t.every((e) => e.length === 0);
		u(n);
	}
	function f() {
		if (l) {
			let t = {
				filters: s.flatMap((e) => e).filter((e) => !!e),
				mode: e.mode
			};
			r(!0), i(t), a();
		} else B.toast(F("TITLE_ERROR", "Error"), F("MESSAGE_MUST_FIX_ALL_MERGE_GROUP_ERRORS", "All errors must be resolved before saving"));
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement(nr, null), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-fix-modal-scope" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ConfirmModal, {
		onOK: () => {
			(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(U, {
				onOK: f,
				strTitle: F("TITLE_ALL_CAPS_WARNING", "WARNING!")
			}, F("MESSAGE_FIXING_MERGE_GROUP_IS_FINAL", "Are you sure you want save these fixes to this merge group? This can't be can't be changed later.")));
		},
		bOKDisabled: !l,
		strOKButtonText: F("LABEL_MERGE_GROUP_SAVE_CHANGES", "Save Changes"),
		onCancel: a,
		strCancelButtonText: F("LABEL_MERGE_GROUP_DISCARD_CHANGES", "Discard Changes"),
		strTitle: F("TITLE_FIXING_MERGE_GROUP", "Fix Merge Group in Tab {tabName}").replace("{tabName}", o)
	}, l && /* @__PURE__ */ window.SP_REACT.createElement("div", null, F("MESSAGE_ALL_ERRORS_RESOLVED", "All errors have been resolved.")), /* @__PURE__ */ window.SP_REACT.createElement(jn.Provider, { value: o }, /* @__PURE__ */ window.SP_REACT.createElement(dr, {
		isMergeGroup: !0,
		filters: s,
		errorEntries: t,
		onChange: d
	})))));
}, ir = ({ onClick: e, style: t }) => /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
	onClick: e,
	style: {
		minWidth: "45px",
		padding: "10px 16px",
		minHeight: "40px",
		display: "flex",
		...t ?? {}
	}
}, /* @__PURE__ */ window.SP_REACT.createElement(dt, {
	size: ".9em",
	style: {
		margin: "auto",
		flex: "auto"
	}
})), ar = (e) => {
	let { title: t, confirmationMessage: n, onDelete: r, style: i } = e;
	return /* @__PURE__ */ window.SP_REACT.createElement(ir, {
		style: i,
		onClick: () => {
			(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(U, {
				onOK: r,
				strTitle: t
			}, n));
		}
	});
}, or = (e) => {
	let { onFilterDelete: t, numFilters: n, isMergeGroup: r } = e;
	return /* @__PURE__ */ window.SP_REACT.createElement(ar, {
		title: F("TITLE_ALL_CAPS_WARNING", "WARNING!"),
		confirmationMessage: F("MESSAGE_DELETE_FILTER_CONFIRM", "Are you sure you want to delete this filter?") + " " + (n === 1 ? (r ? F("MESSAGE_NO_FILTERS_IN_GROUP", "There are no other filters in this merge group. Deleting it will automatically delete the merge filter as well.") : F("MESSAGE_NO_FILTERS_IN_TAB", "There are no other filters in this tab. Deleting it will automatically delete the tab as well.")) + " " : "") + "This can't be undone.",
		onDelete: t
	});
}, sr = ({ isMergeGroup: e, numFilters: t, filter: n, onFilterUpdate: r, onFilterDelete: i }) => {
	let a = collectionStore.userCollections.map((e) => ({
		label: e.displayName,
		data: e.id
	}));
	function o(e) {
		let t = { ...n };
		t.params.id = e.data, t.params.name = e.label, r(t);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: F("LABEL_SELECTED_COLLECTION", "Selected Collection"),
		description: /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "filter-entry" }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			width: "100%",
			display: "flex",
			flexDirection: "row"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: { width: "calc(100% - 55px)" } }, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: a,
			selectedOption: n.params.id,
			onChange: o
		})), /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			marginLeft: "10px",
			width: "45px"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(or, {
			onFilterDelete: i,
			numFilters: t,
			isMergeGroup: e ?? !1
		}))))
	});
}, cr = ({ isMergeGroup: e, numFilters: t, filter: n, mergeErrorEntries: r, onFilterUpdate: i, onFilterDelete: a }) => {
	let o = (0, x.useContext)(jn), [s, c] = (0, x.useState)(r.length === 0), l = {
		filters: [...n.params.filters],
		mode: n.params.mode
	}, [u, d] = (0, x.useState)(l);
	function f(e) {
		let t = { ...n };
		t.params.filters = e.filters, t.params.mode = e.mode, i(e.filters.length === 0 ? null : t), d({ ...e }), r.length = 0;
	}
	function p() {
		let e = { instance: null };
		e.instance = (0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(rr, {
			isPassingOuter: s,
			setIsPassingOuter: c,
			mergeParams: u,
			mergeErrorEntries: r,
			saveMerge: f,
			closeModal: () => e.instance.Close(),
			tabName: o
		}));
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, { description: /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "filter-entry" }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		className: "styled-btn",
		style: {
			width: "100%",
			display: "flex",
			flexDirection: "row"
		}
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: { width: "calc(100% - 55px)" } }, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
		onClick: p,
		disabled: s,
		style: { width: "100%" }
	}, s ? F("LABEL_RESOLVED", "Resolved") : F("LABEL_FIX_MERGE_GROUP", "Fix Merge Group"))), /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
		marginLeft: "10px",
		width: "45px"
	} }, /* @__PURE__ */ window.SP_REACT.createElement(or, {
		onFilterDelete: a,
		numFilters: t,
		isMergeGroup: e ?? !1
	})))) });
}, lr = ({ isMergeGroup: e, numFilters: t, filter: n, onFilterUpdate: r, onFilterDelete: i }) => {
	let a = window.MicroSDeck?.CardsAndGames || [], o = [
		{
			label: F("LABEL_INSERTED_CARD", "Inserted Card"),
			data: L.INSTALLED
		},
		{
			label: F("LABEL_SPECIFIC_CARD", "Specific Card"),
			options: a.map(([e]) => ({
				label: e.name || e.uid,
				data: e.uid
			}))
		},
		{
			label: F("LABEL_ANY_CARD", "Any Card"),
			data: L.ANY
		}
	];
	function s({ data: e }) {
		let t = { ...n };
		t.params.card = e, r(t);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: F("LABEL_SELECTED_CARD", "Selected Card"),
		description: /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "filter-entry" }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			width: "100%",
			display: "flex",
			flexDirection: "row"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: { width: "calc(100% - 55px)" } }, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: o,
			selectedOption: n.params.card ?? L.INSTALLED,
			onChange: s
		})), " ", /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			marginLeft: "10px",
			width: "45px"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(or, {
			onFilterDelete: i,
			numFilters: t,
			isMergeGroup: e ?? !1
		}))))
	});
}, ur = ({ isMergeGroup: e, numFilters: t, filter: n, mergeErrorEntries: r, onFilterUpdate: i, onFilterDelete: a }) => {
	if (n) {
		let o = {
			...n,
			params: { ...n.params }
		};
		switch (n.type) {
			case "collection": return /* @__PURE__ */ window.SP_REACT.createElement(sr, {
				isMergeGroup: e,
				numFilters: t,
				filter: o,
				onFilterUpdate: i,
				onFilterDelete: a
			});
			case "merge": return /* @__PURE__ */ window.SP_REACT.createElement(cr, {
				isMergeGroup: e,
				numFilters: t,
				filter: o,
				mergeErrorEntries: r,
				onFilterUpdate: i,
				onFilterDelete: a
			});
			case "sd card": return /* @__PURE__ */ window.SP_REACT.createElement(lr, {
				isMergeGroup: e,
				numFilters: t,
				filter: o,
				onFilterUpdate: i,
				onFilterDelete: a
			});
			default: throw Error(`FilterErrorOption for ${n.type} not implemented!`);
		}
	} else return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null);
}, dr = ({ filters: e, errorEntries: t, onChange: n, isMergeGroup: r }) => {
	let [i, a] = (0, x.useState)(t.map((e) => e.errors));
	function o(t, r, o) {
		let s = [...i];
		s[r] = [], a(s);
		let c = [...e];
		c[t] = o, n(c, s);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, t.flatMap((n, a) => {
		let s = e[n.filterIdx];
		return s ? /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "filter-error-entry" }, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
			color: "#8b929a",
			fontWeight: "600",
			marginTop: "10px"
		} }, F("TITLE_ERRORS", "Errors")), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "filter-error-messages" }, i[a].map((e) => /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "filter-error-msg" }, e))), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
			color: "#8b929a",
			fontWeight: "600",
			marginTop: "10px"
		} }, F("TITLE_FILTER_TYPE", "Filter Type"), " - ", s.type), /* @__PURE__ */ window.SP_REACT.createElement(ur, {
			isMergeGroup: r,
			numFilters: e.flatMap((e) => e).length,
			filter: s,
			onFilterUpdate: (e) => o(n.filterIdx, a, e),
			onFilterDelete: () => o(n.filterIdx, a, null),
			mergeErrorEntries: t[a].mergeErrorEntries
		})) : /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null);
	}));
}, fr = ({ index: e, tab: t, errorEntries: n, onTabStatusChange: r }) => {
	let [i, a] = (0, x.useState)(t.filters), [o, s] = (0, x.useState)(!1), [c, l] = (0, x.useState)(!1);
	function u(e, n) {
		let i = { ...t }, o = e.filter((e) => !!e);
		i.filters = [...o], a(o);
		let c = n.every((e) => e.length === 0);
		s(c), l(e.flatMap((e) => e).length === 0), r(i, c);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(tr, {
		index: e,
		tab: t,
		isPassing: o,
		isOpen: !0,
		isDeleted: c
	}, /* @__PURE__ */ window.SP_REACT.createElement(jn.Provider, { value: t.title }, /* @__PURE__ */ window.SP_REACT.createElement(dr, {
		filters: i,
		errorEntries: n,
		onChange: u
	})), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "styled-btn no-sep" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ButtonItem, { onClick: () => {
		(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(U, {
			onOK: () => u([], [[]]),
			strTitle: F("TITLE_ALL_CAPS_WARNING", "WARNING!")
		}, F("MESSAGE_DELETE_CANT_BE_UNDONE", "Are you sure you want to delete this Tab? This can't be undone.")));
	} }, "Delete Tab")));
}, pr = ({ closeModal: e, onConfirm: t, tabs: n, erroredFiltersMap: r, tabMasterManager: i }) => /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement(nr, null), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-fix-modal-scope" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ModalRoot, {
	bAllowFullSize: !0,
	onCancel: () => {}
}, /* @__PURE__ */ window.SP_REACT.createElement(Pn, { tabMasterManager: i }, /* @__PURE__ */ window.SP_REACT.createElement(mr, {
	onConfirm: t,
	closeModal: e,
	tabs: { ...n },
	erroredFiltersMap: r
}))))), mr = ({ onConfirm: e, closeModal: t, tabs: n, erroredFiltersMap: r }) => {
	let [i, a] = (0, x.useState)(Object.fromEntries(Object.entries(n).filter(([e]) => r.has(e)))), [o, s] = (0, x.useState)(Object.fromEntries(Array.from(r.keys(), (e) => [e, !1]))), [c, l] = (0, x.useState)(!1);
	(0, x.useEffect)(() => {
		l(Object.values(o).every((e) => e));
	}, [o]);
	function u(e, t) {
		let n = { ...o };
		n[e.id] = t, s(n);
		let r = { ...i };
		r[e.id] = e, a(r);
	}
	function d() {
		if (c) {
			let r = { ...n };
			for (let e of Object.values(i)) e.filters = e.filters.flatMap((e) => e), r[e.id] = e;
			e(r), t();
		} else B.toast(F("TITLE_ERROR", "Error"), F("MESSAGE_MUST_FIX_ALL_TAB_ERRORS", "Please fix all tabs before saving"));
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSection, null, /* @__PURE__ */ window.SP_REACT.createElement("h1", null, F("TITLE_TAB_FIXES_NEEDED", "Fixes Needed for One or More Tabs")), /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSectionRow, null, r.size > 1 ? F("MESSAGE_TAB_ERRORS_FOUND_PLURAL", "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issues below, and correct them.") : F("MESSAGE_TAB_ERRORS_FOUND_SINGULAR", "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue below, and correct it."))), /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSection, { title: F("TITLE_TABS_WITH_ERRORS", "Tabs With Errors") }, /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSectionRow, null, Object.values(i).map((e, t) => /* @__PURE__ */ window.SP_REACT.createElement(fr, {
		index: t,
		tab: e,
		errorEntries: r.get(e.id),
		onTabStatusChange: u
	})))), /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSection, null, /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSectionRow, null, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
		onOKButton: d,
		onOKActionDescription: F("LABEL_APPLY_YOUR_FIXES", "Apply Your Fixes"),
		onClick: d,
		disabled: !c
	}, F("LABEL_APPLY_TAB_FIXES", "Apply Fixes")))));
}, hr = class {
	static validationLock = !0;
	static validationQueue = [];
	static validateInternal(e, t) {
		this.validationLock = !0;
		let n = t.getTabs().tabsMap, r = {};
		e.forEach((e) => {
			let t = n.get(e.tabId);
			t && t.filters && (Object.keys(t) || (t.visibleToOthers = !1), r[e.tabId] = t);
		});
		let i = this.checkForBrokenFilters(r);
		Object.keys(r).forEach((t) => {
			!i.has(t) && e.find((e) => t === e.tabId && e.rebuildCollectionIfValid) && n.get(t).buildCollection();
		}), i.size > 0 ? (V.warn(`There were ${i.size} tabs that failed validation!`), (0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(pr, {
			onConfirm: (e) => {
				for (let n of Object.values(e)) i.has(n.id) && (n.filters.length === 0 ? t.deleteTab(n.id) : t.updateCustomTab(n.id, n));
				this.processQueue(t);
			},
			tabs: r,
			erroredFiltersMap: i,
			tabMasterManager: t
		}))) : this.processQueue(t);
	}
	static processQueue = (e) => {
		let t = this.validationQueue.splice(0, this.validationQueue.length);
		t.length > 0 ? this.validateInternal(t, e) : this.validationLock = !1;
	};
	static checkForBrokenFilters(e) {
		let t = /* @__PURE__ */ new Map();
		for (let [n, r] of Object.entries(e)) if (r.filters) {
			let e = [];
			for (let t = 0; t < r.filters.length; t++) {
				let n = r.filters[t], i = Cn(n);
				if (!i) e.push({
					filterIdx: t,
					errors: [F("MESSAGE_FILTER_NOT_VALID", "Filter \"{filter.type}\" cannot be validated. It has likely been removed.").replace("{filter.type}", _n()[n.type])]
				});
				else if (!i.passed) {
					let n = {
						filterIdx: t,
						errors: i.errors
					};
					i.mergeErrorEntries && (n.mergeErrorEntries = i.mergeErrorEntries), e.push(n);
				}
			}
			e.length > 0 && t.set(n, e);
		}
		return t;
	}
	static validateSettingsOnLoad(e, t, n) {
		e.DeckGames && (e.GreatOnDeck = e.DeckGames, e.GreatOnDeck.id = "GreatOnDeck", delete e.DeckGames);
		let r = this.checkForBrokenFilters(e);
		r.size > 0 ? (V.warn(`There were ${r.size} tabs that failed validation!`), (0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(pr, {
			onConfirm: (e) => {
				let i = [];
				for (let t of Object.values(e)) r.has(t.id) && t.filters.length === 0 && i.push(t.id);
				n(e), i.forEach((e) => t.deleteTab(e)), this.processQueue(t);
			},
			tabs: e,
			erroredFiltersMap: r,
			tabMasterManager: t
		}))) : (n(e), this.processQueue(t));
	}
	static validateTabs(e, t, n) {
		e.forEach((e) => {
			let t = this.validationQueue.find((t) => e === t.tabId);
			t ? n && (t.rebuildCollectionIfValid = !0) : this.validationQueue.push({
				tabId: e,
				rebuildCollectionIfValid: n
			});
		}), !this.validationLock && this.processQueue(t);
	}
}, gr = (0, R.findModuleExport)((e) => {
	if (e?.GamepadUIAudio) return e;
}).GamepadUIAudio, _r = (0, R.findModuleExport)((e) => {
	if (typeof e == "function" && e.length === 3 && e.toString().includes("fireImmediately") && e.toString().includes("requiresObservable")) return e;
});
_r || V.raiseError("Could not find mobx.reaction");
var K = _r || (() => {}), vr = ({}) => /* @__PURE__ */ window.SP_REACT.createElement("style", null, `
      .tab-master-modal-scope .${R.gamepadDialogClasses.GamepadDialogContent} .DialogHeader {
        margin-left: 15px;
      }

      .tab-master-modal-scope .${R.gamepadDialogClasses.ModalPosition} > .${R.gamepadDialogClasses.GamepadDialogContent} {
        background: radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%);
      }
      
      /* The button item */
      .tab-master-modal-scope .styled-btn {
        padding: 0 !important;
      }
      .tab-master-modal-scope .styled-btn > div {
        padding: 0 !important;
        margin-top: 0.5rem;
      }
      .tab-master-modal-scope .styled-btn .${R.gamepadDialogClasses.FieldLeftColumn} {
        display: none;
      }
      .tab-master-modal-scope .styled-btn .${R.gamepadDialogClasses.FieldRightColumn} {
        width: 100%;
        max-width: 100% !important;
      }
      .tab-master-modal-scope .styled-btn .${R.gamepadDialogClasses.FieldChildrenInner} {
        width: 100%;
      }
      .tab-master-modal-scope .styled-btn .${R.gamepadDialogClasses.FieldChildrenWithIcon} {
        width: 100%;
      }

      /* The button item wrapper */
      .tab-master-modal-scope .filter-entry .${R.gamepadDialogClasses.Field} {
        padding: 0;
        margin: 0;
      }
      /* The button item label */
      .tab-master-modal-scope .filter-entry .${R.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      /* The button item */
      .tab-master-modal-scope .filter-entry .${R.gamepadDialogClasses.FieldChildrenInner} > button.${R.gamepadDialogClasses.Button}.DialogButton {
        padding: 10px;
        min-width: 45px;
      }
      .tab-master-modal-scope .name-field .${R.gamepadDialogClasses.Field} {
        padding-bottom: 16px;
        padding-top: 0px;
      }
      .tab-master-modal-scope .${R.gamepadDialogClasses.Field}.${R.gamepadDialogClasses.WithBottomSeparatorStandard}::after {
        left: 1vw;
        right: 1vw;
      }

      .tab-master-modal-scope .no-sep .${R.gamepadDialogClasses.Field}.${R.gamepadDialogClasses.WithBottomSeparatorStandard}::after,
      .tab-master-modal-scope .no-sep.${R.gamepadDialogClasses.Field}.${R.gamepadDialogClasses.WithBottomSeparatorStandard}::after {
        display: none
      }

      .tab-master-modal-scope .edit-filters-container.Panel > div {
          margin: 0px;
          padding: 0px;
      }

      /* Filter section start */
      .tab-master-modal-scope .filter-start-cont {
        margin-left: -1.5rem;
        margin-right: -1.5rem;
        padding: 0;

        font-size: 14px;
      }
      .tab-master-modal-scope .filter-start-cont > div:first-child {
          background-color: transparent !important;
      }
      .tab-master-modal-scope .filter-start-cont button.DialogButton._DialogLayout.Secondary.Focusable {
        width: 100%;
        padding: 0px;
        margin: 0px;
        background: transparent;
        outline: none;
        border: none;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .tab-master-modal-scope .filter-start-cont .filter-line {
        height: 2px;
        
        background: #23262e;
      }
      .tab-master-modal-scope .filter-start-cont .filter-accordion-arrow,
      .tab-master-modal-scope .filter-start-cont .filter-label {
        margin: 0px 5px;
        color: #343945;
      }

      .tab-master-modal-scope .group-combination-logic-field {
          margin-bottom: 0.5rem;
      }
      
      /* Focused styles */
      .tab-master-modal-scope .start-focused {
        background-color: rgba(255, 255, 255, 0.15);
        animation-name: gamepaddialog_ItemFocusAnim-darkGrey_2zfa-;
      }
      .tab-master-modal-scope .highlight-on-focus {
        animation-duration: .5s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.17, 0.45, 0.14, 0.83);
      }
      .tab-master-modal-scope .filter-start-cont.start-focused .filter-line {
        background: #a9a9a9;
      }
      .tab-master-modal-scope .filter-start-cont.start-focused .filter-accordion-arrow,
      .tab-master-modal-scope .filter-start-cont.start-focused .filter-label {
        color: #a9a9a9;
      }

      /* Filter Option styles */
      .tab-master-modal-scope .size-on-disk-row > div:first-child {
        flex-grow: 1;
      }

      .field-item-container .${R.gamepadDialogClasses.Field} {
        padding: 10px calc(28px + 1.4vw);
      }

      .field-item-container .${R.gamepadDialogClasses.FieldLabel} {
        color: #8b929a;
        font-size: 12px;
      }
    `), yr = ({}) => /* @__PURE__ */ window.SP_REACT.createElement("style", null, `
      .tab-master-filter-select {
        width: 100%;
        height: auto;
      }

      .tab-master-filter-select .${R.gamepadDialogClasses.ModalPosition} > .${R.gamepadDialogClasses.GamepadDialogContent} {
        background: radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%);
      }

      .tab-master-filter-select .entry-label {
        font-size: 22px;
        text-align: initial;
      }

      .tab-master-filter-select .entry-disabled {
        color: #92939B;
        background-color: #20222996;
      }

      .tab-master-filter-select .entry-desc {
        font-size: 16px;
        text-align: initial;
      }
    `), br = /* @__PURE__ */ function(e) {
	return e[e.highlight = 0] = "highlight", e[e.ring = 1] = "ring", e;
}({}), xr = ({ audioSFX: e, noAudio: t, disabled: n, focusable: r, transparent: i, focusMode: a, onFocus: o, onBlur: s, onClick: c, style: l, className: u, containerStyle: d, containerClassName: f, focusClassName: p, onOKActionDescription: m, children: h, ...g }) => {
	let [_, v] = (0, x.useState)(!1), y = a ?? 0, b = `/sounds/${e ?? "deck_ui_default_activation.wav"}`, S = (e) => {
		n || (!t && Ut(b), c?.(e));
	};
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		onClick: S,
		className: Sr("custom-button-container", f),
		style: d,
		onActivate: r ?? !0 ? S : void 0,
		onFocus: (e) => {
			v(!0), o?.(e);
		},
		onBlur: (e) => {
			v(!1), s?.(e);
		},
		noFocusRing: !(a ?? !1),
		onOKActionDescription: n ? "" : m,
		...g
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
		className: Sr("custom-button", u, y === 0 && _ && "gpfocus", _ && p),
		style: Object.assign(i && (y === 1 || !_) ? { background: "transparent" } : {}, l ?? {}),
		focusable: !1,
		disabled: n
	}, h));
};
function Sr(...e) {
	return e.filter((e) => e).join(" ");
}
//#endregion
//#region src/components/generic/CustomDropdown.tsx
var Cr = ({ rgOptions: e, selectedOption: t, style: n, labelStyle: r, labelChangedStyle: i, containerClassName: a, labelOverride: o, strDefaultLabel: s, labelCenter: c, menuLabel: l, noDropdownIcon: u, customDropdownIcon: d, focusMode: f, transparent: p, onChange: m, useCustomModal: h, onMenuOpened: g, ..._ }) => {
	let v = d ?? (h ? /* @__PURE__ */ window.SP_REACT.createElement(yt, { style: { margin: "auto" } }) : /* @__PURE__ */ window.SP_REACT.createElement("svg", {
		style: {
			height: "1em",
			margin: "auto"
		},
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 36 36",
		fill: "none"
	}, /* @__PURE__ */ window.SP_REACT.createElement("path", {
		d: "M17.98 26.54L3.20996 11.77H32.75L17.98 26.54Z",
		fill: "currentColor"
	}))), [y, b] = (0, x.useState)(e?.find((e) => e.data === t)), [S, C] = (0, x.useState)(!1);
	(0, x.useEffect)(() => {
		S && setTimeout(() => C(!1), 15);
	}, [S]), (0, x.useEffect)(() => {
		y?.data !== t && (C(!0), b(e?.find((e) => e.data === t)));
	}, [t, e?.length]);
	let w = (e) => {
		C(!0), b(e), m?.(e);
	}, T = () => {
		(0, R.showContextMenu)(/* @__PURE__ */ window.SP_REACT.createElement(R.Menu, { label: l ?? "" }, e?.map((e) => /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
			selected: e === y,
			onClick: () => w(e)
		}, e.label)))), g?.();
	};
	return /* @__PURE__ */ window.SP_REACT.createElement(xr, {
		containerClassName: wr("custom-dropdown-container", a),
		style: {
			padding: "10px 16px",
			...n
		},
		noAudio: !0,
		focusMode: f,
		transparent: p,
		onClick: () => {
			h ? (0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(h, {
				onSelectOption: (e) => w(e),
				selectedOption: y?.data,
				rgOptions: e
			})) : e && T();
		},
		..._
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		display: "flex",
		overflow: "hidden"
	} }, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		overflow: "hidden",
		flex: "auto"
	} }, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		style: Object.assign({
			textAlign: c ? "center" : "left",
			minHeight: "20px"
		}, S ? i : r),
		className: wr("custom-dropdown-label", S && "selection-changed")
	}, o ?? y?.label ?? s)), !u && /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		display: "flex",
		marginLeft: "1ch",
		flex: "none"
	} }, v)));
};
function wr(...e) {
	return e.filter((e) => e).join(" ");
}
//#endregion
//#region src/components/filters/FilterSelect.tsx
var Tr = ({ rgOptions: e, selectedOption: t, onSelectOption: n, closeModal: r }) => {
	let [i, a] = (0, x.useState)(!1);
	(0, x.useEffect)(() => {
		setTimeout(() => a(!0), 10);
	}, []);
	function o(e) {
		n(e), r();
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement(yr, null), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-filter-select" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ModalRoot, {
		onCancel: r,
		onEscKeypress: r
	}, /* @__PURE__ */ window.SP_REACT.createElement("h1", { style: {
		marginBlockEnd: "10px",
		marginBlockStart: "0px",
		overflowX: "hidden",
		fontSize: "1.5em",
		whiteSpace: "nowrap"
	} }, F("TITLE_CHANGE_FILTER_TYPE", "Change Filter Type")), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: R.mainMenuAppRunningClasses.OverlayAchievements }, e?.map((e) => /* @__PURE__ */ window.SP_REACT.createElement(Er, {
		filterType: e.data,
		onClick: () => o(e),
		focusable: i || t === e.data
	}))))));
}, Er = ({ filterType: e, focusable: t, onClick: n }) => {
	let r = !1, i = "";
	if (e === "sd card") {
		r = !H.isInstallOk();
		let [e, t, n] = $t.split(/[.+-]/, 3);
		+e > 0 && (i = e + ".x.x"), +e == 0 && (i = `0.${t}.${n}`);
	}
	let a = t && !r;
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		focusWithinClassName: "gpfocuswithin",
		style: {
			width: "100%",
			margin: 0,
			marginBottom: "10px",
			padding: 0
		},
		onActivate: a ? n : void 0,
		onClick: a ? n : void 0
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: `${R.achievementClasses.AchievementListItemBase} ${r && "entry-disabled"}`,
		style: {
			display: "flex",
			flexDirection: "column",
			padding: "0.5em",
			height: "60px"
		}
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "entry-label",
		style: {
			display: "flex",
			alignItems: "baseline"
		}
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginRight: "7px" } }, (0, x.createElement)(vn[e], { size: ".8em" })), /* @__PURE__ */ window.SP_REACT.createElement("div", null, _n()[e]), e === "sd card" && /* @__PURE__ */ window.SP_REACT.createElement("small", { style: { fontSize: "0.5em" } }, `${F("MESSAGE_REQUIRES_MICROSDECK", "requires MicroSDeck")} ${i}`)), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "entry-desc" }, gn()[e])));
}, Dr = ({ selectedOption: e, onChange: t }) => {
	let n = Object.keys(hn()).map((e) => ({
		label: _n()[e],
		data: e
	}));
	return /* @__PURE__ */ window.SP_REACT.createElement(Cr, {
		useCustomModal: Tr,
		customDropdownIcon: /* @__PURE__ */ window.SP_REACT.createElement(Be, { style: {
			margin: "auto",
			height: ".9em"
		} }),
		onChange: (n) => n.data !== e && t(n.data),
		selectedOption: e,
		rgOptions: n
	});
}, Or = ({ index: e, filter: t, containingGroupFilters: n, setContainingGroupFilters: r, onFilterDelete: i, shouldFocus: a }) => {
	let o = [{
		label: F("LABEL_FILTER_INVERSION_DEFAULT", "Default"),
		data: !1
	}, {
		label: F("LABEL_FILTER_INVERSION_INVERT", "Invert"),
		data: !0
	}], [s, c] = (0, x.useState)(t.inverted);
	function l(t) {
		let i = {
			type: t,
			inverted: !1,
			params: { ...hn()[t] }
		}, a = [...n];
		a[e] = i, r(a);
	}
	function u(i) {
		let a = { ...t };
		a.inverted = i.data;
		let o = [...n];
		o[e] = a, c(i.data), r(o);
	}
	function d() {
		let t = [...n];
		t.splice(e, 1), i(e), r(t);
	}
	if (t) {
		let e = /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: yn(t) ? { width: "calc(100% - 185px)" } : { width: "calc(100% - 55px)" } }, /* @__PURE__ */ window.SP_REACT.createElement(Dr, {
			selectedOption: t.type,
			onChange: l
		}));
		return a && (0, R.afterPatch)(e.type, "render", (e, t) => (setTimeout(() => t.props.value.BTakeFocus(3), 1), t), { singleShot: !0 }), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "filter-entry" }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			width: "100%",
			display: "flex",
			flexDirection: "row"
		} }, yn(t) ? /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, e, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			marginLeft: "10px",
			width: "120px"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: o,
			selectedOption: s,
			onChange: u
		}))) : e, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			marginLeft: "10px",
			width: "45px"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(ir, { onClick: d }))));
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null);
}, kr = ({}) => /* @__PURE__ */ window.SP_REACT.createElement("style", null, `
      /* The button item wrapper */
      .tab-master-modal-scope .multi-select .${R.gamepadDialogClasses.Field} {
        padding: 0;
        margin: 0;
      }
      /* The button item label */
      .tab-master-modal-scope .multi-select .${R.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      /* The button item */
      .tab-master-modal-scope .multi-select button.${R.gamepadDialogClasses.Button}.DialogButton {
        min-width: 45px;
      }
    `), Ar = ({ option: e, fieldProps: t, onRemove: n }) => /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
	label: e.label,
	...t
}, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
	display: "flex",
	width: "100%",
	position: "relative"
} }, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
	style: {
		height: "40px",
		minWidth: "40px",
		width: "40px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "10px"
	},
	onClick: () => n(e),
	onOKButton: () => n(e),
	onOKActionDescription: `${F("LABEL_REMOVE", "Remove")} ${e.label}`
}, /* @__PURE__ */ window.SP_REACT.createElement(kt, null))));
//#endregion
//#region node_modules/.pnpm/vite-plugin-node-polyfills@0.28.0_rollup@4.64.7_vite@8.3.4_@types+node@26.6.5_terser@5.43.1_/node_modules/vite-plugin-node-polyfills/shims/process/dist/index.js
function jr(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mr = { exports: {} }, q = Mr.exports = {}, J, Y;
function Nr() {
	throw Error("setTimeout has not been defined");
}
function Pr() {
	throw Error("clearTimeout has not been defined");
}
(function() {
	try {
		J = typeof setTimeout == "function" ? setTimeout : Nr;
	} catch {
		J = Nr;
	}
	try {
		Y = typeof clearTimeout == "function" ? clearTimeout : Pr;
	} catch {
		Y = Pr;
	}
})();
function Fr(e) {
	if (J === setTimeout) return setTimeout(e, 0);
	if ((J === Nr || !J) && setTimeout) return J = setTimeout, setTimeout(e, 0);
	try {
		return J(e, 0);
	} catch {
		try {
			return J.call(null, e, 0);
		} catch {
			return J.call(this, e, 0);
		}
	}
}
function Ir(e) {
	if (Y === clearTimeout) return clearTimeout(e);
	if ((Y === Pr || !Y) && clearTimeout) return Y = clearTimeout, clearTimeout(e);
	try {
		return Y(e);
	} catch {
		try {
			return Y.call(null, e);
		} catch {
			return Y.call(this, e);
		}
	}
}
var X = [], Lr = !1, Rr, zr = -1;
function Br() {
	Lr && Rr && (Lr = !1, Rr.length ? X = Rr.concat(X) : zr = -1, X.length && Vr());
}
function Vr() {
	if (!Lr) {
		var e = Fr(Br);
		Lr = !0;
		for (var t = X.length; t;) {
			for (Rr = X, X = []; ++zr < t;) Rr && Rr[zr].run();
			zr = -1, t = X.length;
		}
		Rr = null, Lr = !1, Ir(e);
	}
}
q.nextTick = function(e) {
	var t = Array(arguments.length - 1);
	if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
	X.push(new Hr(e, t)), X.length === 1 && !Lr && Fr(Vr);
};
function Hr(e, t) {
	this.fun = e, this.array = t;
}
Hr.prototype.run = function() {
	this.fun.apply(null, this.array);
}, q.title = "browser", q.browser = !0, q.env = {}, q.argv = [], q.version = "", q.versions = {};
function Z() {}
q.on = Z, q.addListener = Z, q.once = Z, q.off = Z, q.removeListener = Z, q.removeAllListeners = Z, q.emit = Z, q.prependListener = Z, q.prependOnceListener = Z, q.listeners = function(e) {
	return [];
}, q.binding = function(e) {
	throw Error("process.binding is not supported");
}, q.cwd = function() {
	return "/";
}, q.chdir = function(e) {
	throw Error("process.chdir is not supported");
}, q.umask = function() {
	return 0;
};
var Ur = Mr.exports, Wr = /*@__PURE__*/ jr(Ur);
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/extends.js
function Gr() {
	return Gr = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Gr.apply(null, arguments);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function Kr(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function qr(e, t) {
	return qr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, qr(e, t);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Jr(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, qr(e, t);
}
//#endregion
//#region node_modules/.pnpm/memoize-one@5.2.1/node_modules/memoize-one/dist/memoize-one.esm.js
var Yr = Number.isNaN || function(e) {
	return typeof e == "number" && e !== e;
};
function Xr(e, t) {
	return !!(e === t || Yr(e) && Yr(t));
}
function Zr(e, t) {
	if (e.length !== t.length) return !1;
	for (var n = 0; n < e.length; n++) if (!Xr(e[n], t[n])) return !1;
	return !0;
}
function Qr(e, t) {
	t === void 0 && (t = Zr);
	var n, r = [], i, a = !1;
	function o() {
		var o = [...arguments];
		return a && n === this && t(o, r) || (i = e.apply(this, o), a = !0, n = this, r = o), i;
	}
	return o;
}
//#endregion
//#region node_modules/.pnpm/react-window@1.8.11_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-window/dist/index.esm.js
var $r = typeof performance == "object" && typeof performance.now == "function" ? function() {
	return performance.now();
} : function() {
	return Date.now();
};
function ei(e) {
	cancelAnimationFrame(e.id);
}
function ti(e, t) {
	var n = $r();
	function r() {
		$r() - n >= t ? e.call(null) : i.id = requestAnimationFrame(r);
	}
	var i = { id: requestAnimationFrame(r) };
	return i;
}
var ni = -1;
function ri(e) {
	if (e === void 0 && (e = !1), ni === -1 || e) {
		var t = document.createElement("div"), n = t.style;
		n.width = "50px", n.height = "50px", n.overflow = "scroll", document.body.appendChild(t), ni = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
	}
	return ni;
}
var ii = null;
function ai(e) {
	if (e === void 0 && (e = !1), ii === null || e) {
		var t = document.createElement("div"), n = t.style;
		n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
		var r = document.createElement("div"), i = r.style;
		return i.width = "100px", i.height = "100px", t.appendChild(r), document.body.appendChild(t), t.scrollLeft > 0 ? ii = "positive-descending" : (t.scrollLeft = 1, ii = t.scrollLeft === 0 ? "negative" : "positive-ascending"), document.body.removeChild(t), ii;
	}
	return ii;
}
Wr.env.NODE_ENV !== "production" && typeof window < "u" && window.WeakSet;
var oi = 150, si = function(e, t) {
	return e;
}, ci = null, li = null;
Wr.env.NODE_ENV !== "production" && typeof window < "u" && window.WeakSet !== void 0 && (ci = /*#__PURE__*/ new WeakSet(), li = /*#__PURE__*/ new WeakSet());
function ui(e) {
	var t, n = e.getItemOffset, r = e.getEstimatedTotalSize, i = e.getItemSize, a = e.getOffsetForIndexAndAlignment, o = e.getStartIndexForOffset, s = e.getStopIndexForStartIndex, c = e.initInstanceProps, l = e.shouldResetStyleCacheOnItemSizeChange, u = e.validateProps;
	return t = /*#__PURE__*/ function(e) {
		Jr(t, e);
		function t(t) {
			var r = e.call(this, t) || this;
			return r._instanceProps = c(r.props, Kr(r)), r._outerRef = void 0, r._resetIsScrollingTimeoutId = null, r.state = {
				instance: Kr(r),
				isScrolling: !1,
				scrollDirection: "forward",
				scrollOffset: typeof r.props.initialScrollOffset == "number" ? r.props.initialScrollOffset : 0,
				scrollUpdateWasRequested: !1
			}, r._callOnItemsRendered = void 0, r._callOnItemsRendered = Qr(function(e, t, n, i) {
				return r.props.onItemsRendered({
					overscanStartIndex: e,
					overscanStopIndex: t,
					visibleStartIndex: n,
					visibleStopIndex: i
				});
			}), r._callOnScroll = void 0, r._callOnScroll = Qr(function(e, t, n) {
				return r.props.onScroll({
					scrollDirection: e,
					scrollOffset: t,
					scrollUpdateWasRequested: n
				});
			}), r._getItemStyle = void 0, r._getItemStyle = function(e) {
				var t = r.props, a = t.direction, o = t.itemSize, s = t.layout, c = r._getItemStyleCache(l && o, l && s, l && a), u;
				if (c.hasOwnProperty(e)) u = c[e];
				else {
					var d = n(r.props, e, r._instanceProps), f = i(r.props, e, r._instanceProps), p = a === "horizontal" || s === "horizontal", m = a === "rtl", h = p ? d : 0;
					c[e] = u = {
						position: "absolute",
						left: m ? void 0 : h,
						right: m ? h : void 0,
						top: p ? 0 : d,
						height: p ? "100%" : f,
						width: p ? f : "100%"
					};
				}
				return u;
			}, r._getItemStyleCache = void 0, r._getItemStyleCache = Qr(function(e, t, n) {
				return {};
			}), r._onScrollHorizontal = function(e) {
				var t = e.currentTarget, n = t.clientWidth, i = t.scrollLeft, a = t.scrollWidth;
				r.setState(function(e) {
					if (e.scrollOffset === i) return null;
					var t = r.props.direction, o = i;
					if (t === "rtl") switch (ai()) {
						case "negative":
							o = -i;
							break;
						case "positive-descending": o = a - n - i;
					}
					return o = Math.max(0, Math.min(o, a - n)), {
						isScrolling: !0,
						scrollDirection: e.scrollOffset < o ? "forward" : "backward",
						scrollOffset: o,
						scrollUpdateWasRequested: !1
					};
				}, r._resetIsScrollingDebounced);
			}, r._onScrollVertical = function(e) {
				var t = e.currentTarget, n = t.clientHeight, i = t.scrollHeight, a = t.scrollTop;
				r.setState(function(e) {
					if (e.scrollOffset === a) return null;
					var t = Math.max(0, Math.min(a, i - n));
					return {
						isScrolling: !0,
						scrollDirection: e.scrollOffset < t ? "forward" : "backward",
						scrollOffset: t,
						scrollUpdateWasRequested: !1
					};
				}, r._resetIsScrollingDebounced);
			}, r._outerRefSetter = function(e) {
				var t = r.props.outerRef;
				r._outerRef = e, typeof t == "function" ? t(e) : typeof t == "object" && t && t.hasOwnProperty("current") && (t.current = e);
			}, r._resetIsScrollingDebounced = function() {
				r._resetIsScrollingTimeoutId !== null && ei(r._resetIsScrollingTimeoutId), r._resetIsScrollingTimeoutId = ti(r._resetIsScrolling, oi);
			}, r._resetIsScrolling = function() {
				r._resetIsScrollingTimeoutId = null, r.setState({ isScrolling: !1 }, function() {
					r._getItemStyleCache(-1, null);
				});
			}, r;
		}
		t.getDerivedStateFromProps = function(e, t) {
			return di(e, t), u(e), null;
		};
		var d = t.prototype;
		return d.scrollTo = function(e) {
			e = Math.max(0, e), this.setState(function(t) {
				return t.scrollOffset === e ? null : {
					scrollDirection: t.scrollOffset < e ? "forward" : "backward",
					scrollOffset: e,
					scrollUpdateWasRequested: !0
				};
			}, this._resetIsScrollingDebounced);
		}, d.scrollToItem = function(e, t) {
			t === void 0 && (t = "auto");
			var n = this.props, r = n.itemCount, i = n.layout, o = this.state.scrollOffset;
			e = Math.max(0, Math.min(e, r - 1));
			var s = 0;
			if (this._outerRef) {
				var c = this._outerRef;
				s = i === "vertical" ? c.scrollWidth > c.clientWidth ? ri() : 0 : c.scrollHeight > c.clientHeight ? ri() : 0;
			}
			this.scrollTo(a(this.props, e, t, o, this._instanceProps, s));
		}, d.componentDidMount = function() {
			var e = this.props, t = e.direction, n = e.initialScrollOffset, r = e.layout;
			if (typeof n == "number" && this._outerRef != null) {
				var i = this._outerRef;
				t === "horizontal" || r === "horizontal" ? i.scrollLeft = n : i.scrollTop = n;
			}
			this._callPropsCallbacks();
		}, d.componentDidUpdate = function() {
			var e = this.props, t = e.direction, n = e.layout, r = this.state, i = r.scrollOffset;
			if (r.scrollUpdateWasRequested && this._outerRef != null) {
				var a = this._outerRef;
				if (t === "horizontal" || n === "horizontal") {
					if (t === "rtl") switch (ai()) {
						case "negative":
							a.scrollLeft = -i;
							break;
						case "positive-ascending":
							a.scrollLeft = i;
							break;
						default:
							var o = a.clientWidth;
							a.scrollLeft = a.scrollWidth - o - i;
					}
					else a.scrollLeft = i;
				} else a.scrollTop = i;
			}
			this._callPropsCallbacks();
		}, d.componentWillUnmount = function() {
			this._resetIsScrollingTimeoutId !== null && ei(this._resetIsScrollingTimeoutId);
		}, d.render = function() {
			var e = this.props, t = e.children, n = e.className, i = e.direction, a = e.height, o = e.innerRef, s = e.innerElementType, c = e.innerTagName, l = e.itemCount, u = e.itemData, d = e.itemKey, f = d === void 0 ? si : d, p = e.layout, m = e.outerElementType, h = e.outerTagName, g = e.style, _ = e.useIsScrolling, v = e.width, y = this.state.isScrolling, b = i === "horizontal" || p === "horizontal", S = b ? this._onScrollHorizontal : this._onScrollVertical, C = this._getRangeToRender(), w = C[0], T = C[1], E = [];
			if (l > 0) for (var D = w; D <= T; D++) E.push((0, x.createElement)(t, {
				data: u,
				key: f(D, u),
				index: D,
				isScrolling: _ ? y : void 0,
				style: this._getItemStyle(D)
			}));
			var O = r(this.props, this._instanceProps);
			return (0, x.createElement)(m || h || "div", {
				className: n,
				onScroll: S,
				ref: this._outerRefSetter,
				style: Gr({
					position: "relative",
					height: a,
					width: v,
					overflow: "auto",
					WebkitOverflowScrolling: "touch",
					willChange: "transform",
					direction: i
				}, g)
			}, (0, x.createElement)(s || c || "div", {
				children: E,
				ref: o,
				style: {
					height: b ? "100%" : O,
					pointerEvents: y ? "none" : void 0,
					width: b ? O : "100%"
				}
			}));
		}, d._callPropsCallbacks = function() {
			if (typeof this.props.onItemsRendered == "function" && this.props.itemCount > 0) {
				var e = this._getRangeToRender(), t = e[0], n = e[1], r = e[2], i = e[3];
				this._callOnItemsRendered(t, n, r, i);
			}
			if (typeof this.props.onScroll == "function") {
				var a = this.state, o = a.scrollDirection, s = a.scrollOffset, c = a.scrollUpdateWasRequested;
				this._callOnScroll(o, s, c);
			}
		}, d._getRangeToRender = function() {
			var e = this.props, t = e.itemCount, n = e.overscanCount, r = this.state, i = r.isScrolling, a = r.scrollDirection, c = r.scrollOffset;
			if (t === 0) return [
				0,
				0,
				0,
				0
			];
			var l = o(this.props, c, this._instanceProps), u = s(this.props, l, c, this._instanceProps), d = !i || a === "backward" ? Math.max(1, n) : 1, f = !i || a === "forward" ? Math.max(1, n) : 1;
			return [
				Math.max(0, l - d),
				Math.max(0, Math.min(t - 1, u + f)),
				l,
				u
			];
		}, t;
	}(x.PureComponent), t.defaultProps = {
		direction: "ltr",
		itemData: void 0,
		layout: "vertical",
		overscanCount: 2,
		useIsScrolling: !1
	}, t;
}
var di = function(e, t) {
	var n = e.children, r = e.direction, i = e.height, a = e.layout, o = e.innerTagName, s = e.outerTagName, c = e.width, l = t.instance;
	if (Wr.env.NODE_ENV !== "production") {
		(o != null || s != null) && li && !li.has(l) && (li.add(l), console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));
		var u = r === "horizontal" || a === "horizontal";
		switch (r) {
			case "horizontal":
			case "vertical":
				ci && !ci.has(l) && (ci.add(l), console.warn("The direction prop should be either \"ltr\" (default) or \"rtl\". Please use the layout prop to specify \"vertical\" (default) or \"horizontal\" orientation."));
				break;
			case "ltr":
			case "rtl": break;
			default: throw Error("An invalid \"direction\" prop has been specified. Value should be either \"ltr\" or \"rtl\". " + ("\"" + r + "\" was specified."));
		}
		switch (a) {
			case "horizontal":
			case "vertical": break;
			default: throw Error("An invalid \"layout\" prop has been specified. Value should be either \"horizontal\" or \"vertical\". " + ("\"" + a + "\" was specified."));
		}
		if (n == null) throw Error("An invalid \"children\" prop has been specified. Value should be a React component. " + ("\"" + (n === null ? "null" : typeof n) + "\" was specified."));
		if (u && typeof c != "number") throw Error("An invalid \"width\" prop has been specified. Horizontal lists must specify a number for width. " + ("\"" + (c === null ? "null" : typeof c) + "\" was specified."));
		if (!u && typeof i != "number") throw Error("An invalid \"height\" prop has been specified. Vertical lists must specify a number for height. " + ("\"" + (i === null ? "null" : typeof i) + "\" was specified."));
	}
}, fi = /*#__PURE__*/ ui({
	getItemOffset: function(e, t) {
		return t * e.itemSize;
	},
	getItemSize: function(e, t) {
		return e.itemSize;
	},
	getEstimatedTotalSize: function(e) {
		var t = e.itemCount;
		return e.itemSize * t;
	},
	getOffsetForIndexAndAlignment: function(e, t, n, r, i, a) {
		var o = e.direction, s = e.height, c = e.itemCount, l = e.itemSize, u = e.layout, d = e.width, f = o === "horizontal" || u === "horizontal" ? d : s, p = Math.max(0, c * l - f), m = Math.min(p, t * l), h = Math.max(0, t * l - f + l + a);
		switch (n === "smart" && (n = r >= h - f && r <= m + f ? "auto" : "center"), n) {
			case "start": return m;
			case "end": return h;
			case "center":
				var g = Math.round(h + (m - h) / 2);
				return g < Math.ceil(f / 2) ? 0 : g > p + Math.floor(f / 2) ? p : g;
			default: return r >= h && r <= m ? r : r < h ? h : m;
		}
	},
	getStartIndexForOffset: function(e, t) {
		var n = e.itemCount, r = e.itemSize;
		return Math.max(0, Math.min(n - 1, Math.floor(t / r)));
	},
	getStopIndexForStartIndex: function(e, t, n) {
		var r = e.direction, i = e.height, a = e.itemCount, o = e.itemSize, s = e.layout, c = e.width, l = r === "horizontal" || s === "horizontal", u = t * o, d = Math.ceil(((l ? c : i) + n - u) / o);
		return Math.max(0, Math.min(a - 1, t + d - 1));
	},
	initInstanceProps: function(e) {},
	shouldResetStyleCacheOnItemSizeChange: !0,
	validateProps: function(e) {
		var t = e.itemSize;
		if (Wr.env.NODE_ENV !== "production" && typeof t != "number") throw Error("An invalid \"itemSize\" prop has been specified. Value should be a number. " + ("\"" + (t === null ? "null" : typeof t) + "\" was specified."));
	}
}), pi, mi = o((() => {
	pi = globalThis || self;
}));
//#endregion
//#region node_modules/.pnpm/react-virtualized-auto-sizer@1.0.26_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js
mi();
var hi = typeof window < "u" ? window : typeof self < "u" ? self : pi, gi = null, _i = null, vi = 20, yi = hi.clearTimeout, bi = hi.setTimeout, xi = hi.cancelAnimationFrame || hi.mozCancelAnimationFrame || hi.webkitCancelAnimationFrame, Si = hi.requestAnimationFrame || hi.mozRequestAnimationFrame || hi.webkitRequestAnimationFrame;
xi == null || Si == null ? (gi = yi, _i = function(e) {
	return bi(e, vi);
}) : (gi = function([e, t]) {
	xi(e), yi(t);
}, _i = function(e) {
	let t = Si(function() {
		yi(n), e();
	}), n = bi(function() {
		xi(t), e();
	}, vi);
	return [t, n];
});
function Ci(e) {
	let t, n, r, i, a, o, s, c = typeof document < "u" && document.attachEvent;
	if (!c) {
		o = function(e) {
			let t = e.__resizeTriggers__, n = t.firstElementChild, r = t.lastElementChild, i = n.firstElementChild;
			r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, i.style.width = n.offsetWidth + 1 + "px", i.style.height = n.offsetHeight + 1 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight;
		}, a = function(e) {
			return e.offsetWidth !== e.__resizeLast__.width || e.offsetHeight !== e.__resizeLast__.height;
		}, s = function(e) {
			if (e.target.className && typeof e.target.className.indexOf == "function" && e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0) return;
			let t = this;
			o(this), this.__resizeRAF__ && gi(this.__resizeRAF__), this.__resizeRAF__ = _i(function() {
				a(t) && (t.__resizeLast__.width = t.offsetWidth, t.__resizeLast__.height = t.offsetHeight, t.__resizeListeners__.forEach(function(n) {
					n.call(t, e);
				}));
			});
		};
		let e = !1, c = "";
		r = "animationstart";
		let l = "Webkit Moz O ms".split(" "), u = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "), d = "";
		{
			let t = document.createElement("fakeelement");
			if (t.style.animationName !== void 0 && (e = !0), e === !1) {
				for (let n = 0; n < l.length; n++) if (t.style[l[n] + "AnimationName"] !== void 0) {
					d = l[n], c = "-" + d.toLowerCase() + "-", r = u[n], e = !0;
					break;
				}
			}
		}
		n = "resizeanim", t = "@" + c + "keyframes " + n + " { from { opacity: 0; } to { opacity: 0; } } ", i = c + "animation: 1ms " + n + "; ";
	}
	let l = function(n) {
		if (!n.getElementById("detectElementResize")) {
			let r = (t || "") + ".resize-triggers { " + (i || "") + "visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }", a = n.head || n.getElementsByTagName("head")[0], o = n.createElement("style");
			o.id = "detectElementResize", o.type = "text/css", e != null && o.setAttribute("nonce", e), o.styleSheet ? o.styleSheet.cssText = r : o.appendChild(n.createTextNode(r)), a.appendChild(o);
		}
	};
	return {
		addResizeListener: function(e, t) {
			if (c) e.attachEvent("onresize", t);
			else {
				if (!e.__resizeTriggers__) {
					let t = e.ownerDocument, i = hi.getComputedStyle(e);
					i && i.position === "static" && (e.style.position = "relative"), l(t), e.__resizeLast__ = {}, e.__resizeListeners__ = [], (e.__resizeTriggers__ = t.createElement("div")).className = "resize-triggers";
					let a = t.createElement("div");
					a.className = "expand-trigger", a.appendChild(t.createElement("div"));
					let c = t.createElement("div");
					c.className = "contract-trigger", e.__resizeTriggers__.appendChild(a), e.__resizeTriggers__.appendChild(c), e.appendChild(e.__resizeTriggers__), o(e), e.addEventListener("scroll", s, !0), r && (e.__resizeTriggers__.__animationListener__ = function(t) {
						t.animationName === n && o(e);
					}, e.__resizeTriggers__.addEventListener(r, e.__resizeTriggers__.__animationListener__));
				}
				e.__resizeListeners__.push(t);
			}
		},
		removeResizeListener: function(e, t) {
			if (c) e.detachEvent("onresize", t);
			else if (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1), !e.__resizeListeners__.length) {
				e.removeEventListener("scroll", s, !0), e.__resizeTriggers__.__animationListener__ && (e.__resizeTriggers__.removeEventListener(r, e.__resizeTriggers__.__animationListener__), e.__resizeTriggers__.__animationListener__ = null);
				try {
					e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__);
				} catch {}
			}
		}
	};
}
var wi = class extends x.Component {
	constructor(...e) {
		super(...e), this.state = {
			height: this.props.defaultHeight || 0,
			width: this.props.defaultWidth || 0
		}, this._autoSizer = null, this._detectElementResize = null, this._didLogDeprecationWarning = !1, this._parentNode = null, this._resizeObserver = null, this._timeoutId = null, this._onResize = () => {
			this._timeoutId = null;
			let { disableHeight: e, disableWidth: t, onResize: n } = this.props;
			if (this._parentNode) {
				let r = window.getComputedStyle(this._parentNode) || {}, i = parseFloat(r.paddingLeft || "0"), a = parseFloat(r.paddingRight || "0"), o = parseFloat(r.paddingTop || "0"), s = parseFloat(r.paddingBottom || "0"), c = this._parentNode.getBoundingClientRect(), l = c.height - o - s, u = c.width - i - a;
				if (!e && this.state.height !== l || !t && this.state.width !== u) {
					this.setState({
						height: l,
						width: u
					});
					let e = () => {
						this._didLogDeprecationWarning || (this._didLogDeprecationWarning = !0, console.warn("scaledWidth and scaledHeight parameters have been deprecated; use width and height instead"));
					};
					typeof n == "function" && n({
						height: l,
						width: u,
						get scaledHeight() {
							return e(), l;
						},
						get scaledWidth() {
							return e(), u;
						}
					});
				}
			}
		}, this._setRef = (e) => {
			this._autoSizer = e;
		};
	}
	componentDidMount() {
		let { nonce: e } = this.props, t = this._autoSizer ? this._autoSizer.parentNode : null;
		if (t != null && t.ownerDocument && t.ownerDocument.defaultView && t instanceof t.ownerDocument.defaultView.HTMLElement) {
			this._parentNode = t;
			let n = t.ownerDocument.defaultView.ResizeObserver;
			n == null ? (this._detectElementResize = Ci(e), this._detectElementResize.addResizeListener(t, this._onResize)) : (this._resizeObserver = new n(() => {
				this._timeoutId = setTimeout(this._onResize, 0);
			}), this._resizeObserver.observe(t)), this._onResize();
		}
	}
	componentWillUnmount() {
		this._parentNode && (this._detectElementResize && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize), this._timeoutId !== null && clearTimeout(this._timeoutId), this._resizeObserver && this._resizeObserver.disconnect());
	}
	render() {
		let { children: e, defaultHeight: t, defaultWidth: n, disableHeight: r = !1, disableWidth: i = !1, doNotBailOutOnEmptyChildren: a = !1, nonce: o, onResize: s, style: c = {}, tagName: l = "div", ...u } = this.props, { height: d, width: f } = this.state, p = { overflow: "visible" }, m = {}, h = !1;
		return r || (d === 0 && (h = !0), p.height = 0, m.height = d, m.scaledHeight = d), i || (f === 0 && (h = !0), p.width = 0, m.width = f, m.scaledWidth = f), a && (h = !1), (0, x.createElement)(l, {
			ref: this._setRef,
			style: {
				...p,
				...c
			},
			...u
		}, !h && e(m));
	}
}, Ti = ({}) => /* @__PURE__ */ window.SP_REACT.createElement("style", null, `
      .tab-master-list-search-modal .${R.quickAccessControlsClasses.PanelSection} {
        margin: 0px;
        padding: 0px;
      }
      .tab-master-list-search-modal .${R.quickAccessControlsClasses.PanelSection}:first-of-type {
        margin: 0px;
      }

      .tab-master-list-search-modal .${R.gamepadDialogClasses.ModalPosition} > .${R.gamepadDialogClasses.GamepadDialogContent} {
        background: radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%);
      }

      @keyframes tab-master-arrow-bounce-up {
        0% { transform: translateY(1px)  }
        50% { transform: translateY(-2px) }
        100% { transform: translateY(1px) }
      }

      @keyframes tab-master-arrow-bounce-down {
        0% { transform: translateY(-1px)  }
        50% { transform: translateY(2px) }
        100% { transform: translateY(-1px) }
      }
      
      .tab-master-list-search-modal .more-above-arrow {
        position: absolute;
        top: 14px;

        display: flex;
        justify-content: center;
        width: 100%;

        transition: visibility 0.2s ease-in-out;

        animation: tab-master-arrow-bounce-up 2.7s infinite ease-in-out;
      }

      .tab-master-list-search-modal .more-below-arrow {
        position: absolute;
        bottom: -16px;

        display: flex;
        justify-content: center;
        width: 100%;

        transition: visibility 0.2s ease-in-out;

        animation: tab-master-arrow-bounce-down 2.7s infinite ease-in-out;
      }
    `), Ei = {
	paddingRight: "10px",
	width: "1em"
}, Di = ({ rgOptions: e, entryLabel: t, determineEntryIcon: n, onSelectOption: r, closeModal: i }) => {
	let [a, o] = (0, x.useState)(""), [s, c] = (0, x.useState)(e), [l, u] = (0, x.useState)(!1), [d, f] = (0, x.useState)(!0), p = (0, x.useRef)(null), m = (0, x.useRef)(null);
	(0, x.useEffect)(() => {
		c(e.filter((e) => e.label.toLowerCase().includes(a.toLowerCase())));
	}, [a]);
	function h({ visibleStartIndex: e, visibleStopIndex: t }) {
		!l && e !== 0 ? u(!0) : l && e === 0 && u(!1), !d && t !== s.length - 1 ? f(!0) : d && t === s.length - 1 && f(!1);
	}
	let g = (0, x.useMemo)(() => ({ index: e, style: t }) => {
		let a = n(s[e]);
		return /* @__PURE__ */ window.SP_REACT.createElement("div", {
			style: t,
			className: "post"
		}, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
			key: `${s[e].label}`,
			style: {
				borderRadius: "unset",
				margin: "0",
				padding: "10px",
				scrollMarginTop: "0"
			},
			onClick: () => {
				r(s[e]), i();
			}
		}, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
			display: "flex",
			flexDirection: "row",
			alignItems: "center"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(a, { style: Ei }), /* @__PURE__ */ window.SP_REACT.createElement(R.Marquee, null, s[e].label))));
	}, [s]), _ = {
		onButtonDown: (e) => {
			e.detail.button === R.GamepadButton.SELECT && (p?.current?.Focus?.(), p?.current?.element?.click?.());
		},
		actionDescriptionMap: { [R.GamepadButton.SELECT]: F("LABEL_SEARCH", "Search") }
	};
	return /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-list-search-modal" }, /* @__PURE__ */ window.SP_REACT.createElement(Ti, null), /* @__PURE__ */ window.SP_REACT.createElement(R.ModalRoot, {
		onCancel: i,
		onEscKeypress: i
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogBody, null, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogControlsSection, null, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		"flow-children": "right",
		style: { display: "flex" },
		..._
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		minWidth: "unset",
		width: "40px",
		borderRadius: "unset",
		margin: "0",
		padding: "10px",
		paddingLeft: "0px"
	} }, /* @__PURE__ */ window.SP_REACT.createElement(ot, null)), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { width: "100%" } }, /* @__PURE__ */ window.SP_REACT.createElement(R.TextField, {
		value: a,
		placeholder: `${F("PLACEHOLDER_SEARCH", "Search")} ${t}...`,
		onChange: (e) => {
			m.current?.scrollToItem(0), o(e.target.value);
		},
		style: { height: "100%" },
		ref: p
	})))), /* @__PURE__ */ window.SP_REACT.createElement(R.DialogControlsSection, { style: { marginTop: "1em" } }, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		width: "100%",
		position: "relative"
	} }, /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "more-above-arrow" }, l && /* @__PURE__ */ window.SP_REACT.createElement($n, { style: {
		fontSize: "0.8em",
		color: "#343945"
	} })), /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSection, { title: `${t} - ${s.length}` }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		style: {
			display: "flex",
			gap: "4px",
			flexDirection: "column",
			height: "48.7vh",
			overflow: "scroll"
		},
		key: s.length,
		..._
	}, /* @__PURE__ */ window.SP_REACT.createElement(wi, null, ({ height: e, width: t }) => /* @__PURE__ */ window.SP_REACT.createElement(fi, {
		width: t,
		height: e,
		itemCount: s.length,
		itemSize: 44,
		onItemsRendered: h,
		overscanCount: 10,
		ref: m
	}, g)))), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "more-below-arrow" }, d && /* @__PURE__ */ window.SP_REACT.createElement(Zn, { style: {
		fontSize: "0.8em",
		color: "#343945"
	} })))))));
};
function Oi({ entryLabel: e, labelOverride: t, options: n, onChange: r, TriggerIcon: i, determineEntryIcon: a, disabled: o }) {
	return /* @__PURE__ */ window.SP_REACT.createElement(Cr, {
		rgOptions: n,
		labelOverride: t,
		customDropdownIcon: /* @__PURE__ */ window.SP_REACT.createElement(i, { style: { margin: "auto" } }),
		onChange: r,
		useCustomModal: ({ onSelectOption: t, rgOptions: n, closeModal: r }) => /* @__PURE__ */ window.SP_REACT.createElement(Di, {
			entryLabel: e,
			rgOptions: n,
			onSelectOption: t,
			determineEntryIcon: a,
			closeModal: r
		}),
		disabled: o
	});
}
function ki({ entryLabel: e, rgOptions: t, selectedOption: n, onChange: r, TriggerIcon: i, determineEntryIcon: a, disabled: o }) {
	let [s, c] = (0, x.useState)(t.find((e) => e.data === n));
	function l(e) {
		c(e), r(e);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(Oi, {
		entryLabel: e,
		options: t,
		onChange: l,
		labelOverride: s.label,
		disabled: o ?? !1,
		TriggerIcon: i,
		determineEntryIcon: a
	});
}
//#endregion
//#region src/components/multi-selects/ModeMultiSelect.tsx
var Ai = ({ options: e, selected: t, fieldLabel: n, dropdownLabel: r, mode: i = "and", onChange: a = () => {}, maxOptions: o, fieldProps: s, entryLabel: c, determineEntryIcon: l, EntryIcon: u, TriggerIcon: d }) => {
	let [f, p] = (0, x.useState)(t), [m, h] = (0, x.useState)(e.filter((e) => !t.includes(e))), [g, _] = (0, x.useState)(i), [v, y] = (0, x.useState)({
		label: r,
		data: ""
	}), b = [{
		label: F("LABEL_AND", "And"),
		data: "and"
	}, {
		label: F("LABEL_OR", "Or"),
		data: "or"
	}];
	(0, x.useEffect)(() => {
		let t = e.filter((e) => !f.some((t) => t.data === e.data));
		h(t), y({
			label: t.length == 0 ? F("LABEL_ALL_MODES_SELECTED", "All selected") : o && f.length == o ? F("LABEL_MAX_MODES_SELECTED", "Max selected") : r,
			data: ""
		}), a(f, g);
	}, [f]);
	let S = (e) => {
		let n = [...f];
		n.splice(f.indexOf(e), 1), t = n, p(t);
	};
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, null, /* @__PURE__ */ window.SP_REACT.createElement(kr, null), /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: n,
		description: /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "multi-select" }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			width: "100%",
			display: "flex",
			flexDirection: "row",
			marginBottom: "5px"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: { width: "calc(100% - 100px)" } }, /* @__PURE__ */ window.SP_REACT.createElement(Oi, {
			entryLabel: c,
			options: m,
			onChange: (e) => {
				t = [...f, e], p(t);
			},
			labelOverride: v.label,
			disabled: m.length == 0 || !!o && t.length == o,
			TriggerIcon: d,
			determineEntryIcon: (e) => l ? l(e) : u
		})), /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			marginLeft: "10px",
			width: "90px"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: b,
			selectedOption: g,
			onChange: (e) => {
				_(e.data), a(f, e.data);
			},
			focusable: !0,
			onOKActionDescription: F("LABEL_CHANGE_FILTER_MODE", "Change the filter mode")
		}))))
	}), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		width: "100%",
		marginBottom: "14px"
	} }, f.map((e) => /* @__PURE__ */ window.SP_REACT.createElement(Ar, {
		option: e,
		onRemove: S,
		fieldProps: s
	}))));
}, ji = ({ closeModal: e, mergeParams: t, saveMerge: n, isEditing: r }) => {
	let [i, a] = (0, x.useState)(t.filters), [o, s] = (0, x.useState)(t.mode), [c, l] = (0, x.useState)(!1), [u, d] = (0, x.useState)(!0), [f, p] = (0, x.useState)(!0), m = F("TITLE_CANT_SAVE_MERGE_GROUP", "Cannot Save Merge Group");
	(0, x.useEffect)(() => {
		p(!1);
	}, []), (0, x.useEffect)(() => {
		l(i.length >= 2 && u);
	}, [i, u]), (0, x.useEffect)(() => {
		d(i.length == 0 || i.every((e) => bn(e)));
	}, [i]);
	function h() {
		let e = [...i];
		e.push({
			type: "collection",
			inverted: !1,
			params: hn().collection
		}), a(e);
	}
	function g() {
		c ? (n({
			filters: [...i],
			mode: o
		}), e()) : u ? B.toast(m, F("MESSAGE_NEED_TWO_FILTERS", "A Merge group should have at least 2 filters")) : B.toast(m, F("MESSAGE_INCOMPLETE_FILTERS", "Some filters are incomplete"));
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement(vr, null), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-modal-scope" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ConfirmModal, {
		onOK: g,
		onCancel: e,
		strTitle: F("TITLE_MERGE_GROUP", "Merge Group"),
		strOKButtonText: F("LABEL_SAVE_GROUP", "Save Group")
	}, /* @__PURE__ */ window.SP_REACT.createElement(no, {
		groupFilters: i,
		setGroupFilters: a,
		addFilter: h,
		groupLogicMode: o,
		setGroupLogicMode: s,
		canAddFilter: u,
		shouldFocusAddButton: f,
		collapseFilters: r
	}))));
}, Mi = ({ options: e, selected: t, fieldLabel: n, dropdownLabel: r, onChange: i = () => {}, maxOptions: a, fieldProps: o, entryLabel: s, determineEntryIcon: c, TriggerIcon: l }) => {
	let [u, d] = (0, x.useState)(t), [f, p] = (0, x.useState)(e.filter((e) => !t.includes(e))), [m, h] = (0, x.useState)({
		label: r,
		data: ""
	});
	(0, x.useEffect)(() => {
		let t = e.filter((e) => !u.some((t) => JSON.stringify(t.data) === JSON.stringify(e.data)));
		p(t), h({
			label: t.length == 0 ? F("LABEL_ALL_MODES_SELECTED", "All selected") : a && u.length == a ? F("LABEL_MAX_MODES_SELECTED", "Max selected") : r,
			data: ""
		}), i(u);
	}, [u]);
	let g = (e) => {
		let n = [...u];
		n.splice(u.indexOf(e), 1), t = n, d(t);
	};
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, null, /* @__PURE__ */ window.SP_REACT.createElement(kr, null), /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: n,
		description: /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "multi-select" }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			width: "100%",
			marginBottom: "5px"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(Oi, {
			entryLabel: s,
			options: f,
			onChange: (e) => {
				t = [...u, e], d(t);
			},
			labelOverride: m.label,
			disabled: f.length == 0 || !!a && t.length == a,
			TriggerIcon: l,
			determineEntryIcon: c
		})))
	}), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		width: "100%",
		marginBottom: "14px"
	} }, u.map((e) => /* @__PURE__ */ window.SP_REACT.createElement(Ar, {
		option: e,
		onRemove: g,
		fieldProps: o
	}))));
}, Q = ({ filter: e, displayData: t, isInverted: n }) => /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { display: "flex" } }, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginRight: "7px" } }, (0, x.createElement)(vn[e.type], { size: ".8em" })), /* @__PURE__ */ window.SP_REACT.createElement("div", null, /* @__PURE__ */ window.SP_REACT.createElement("b", null, _n()[e.type]), " - " + t + (n ? ` (${F("LABEL_FILTER_INVERTED", "inverted")})` : ""))), Ni = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: e.params.name ?? e.params.id,
	isInverted: e.inverted
}), Pi = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: e.params.installed ? F("LABEL_YES", "yes") : F("LABEL_NO", "no")
}), Fi = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: e.params.regex,
	isInverted: e.inverted
}), Ii = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: `${e.params.friends.length} ${e.params.friends.length == 1 ? F("LABEL_FRIEND_SINGULAR", "friend") : F("LABEL_FRIENDS_PLURAL", "friends")}`,
	isInverted: e.inverted
}), Li = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: `${e.params.tags.length} ${e.params.tags.length == 1 ? F("LABEL_TAG_SINGULAR", "tag") : F("LABEL_TAGS_PLURAL", "tags")}`,
	isInverted: e.inverted
}), Ri = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: `${e.params.games.length} ${F("LABEL_WHITELISTED", "whitelisted")}`
}), zi = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: `${e.params.games.length} ${F("LABEL_BLACKLISTED", "blacklisted")}`
}), Bi = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: `${e.params.filters.length} ${F("LABEL_GROUPED_FILTERS", "grouped filters")}`,
	isInverted: e.inverted
}), Vi = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: e.params.platform === "steam" ? "Steam" : F("LibraryTab_NonSteam", "Non Steam", !0)
}), Hi = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: xn(e.params.category),
	isInverted: e.inverted
}), Ui = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: Sn(e.params.category),
	isInverted: e.inverted
}), Wi = ({ filter: e }) => {
	let { scoreThreshold: t, condition: n, type: r } = e.params, i = Pe(t, n, r);
	return /* @__PURE__ */ window.SP_REACT.createElement(Q, {
		filter: e,
		displayData: i
	});
}, Gi = ({ filter: e }) => {
	let { timeThreshold: t, condition: n, units: r } = e.params;
	return /* @__PURE__ */ window.SP_REACT.createElement(Q, {
		filter: e,
		displayData: Fe(t, n, r)
	});
}, Ki = ({ filter: e }) => {
	let { gbThreshold: t, condition: n } = e.params;
	return /* @__PURE__ */ window.SP_REACT.createElement(Q, {
		filter: e,
		displayData: Re(t, n)
	});
}, qi = ({ filter: e }) => {
	let t = Ie(e.type, e.params.date, e.params.daysAgo, e.params.isUnknown, e.params.condition);
	return /* @__PURE__ */ window.SP_REACT.createElement(Q, {
		filter: e,
		displayData: t
	});
}, Ji = ({ filter: e }) => {
	let t = Ie(e.type, e.params.date, e.params.daysAgo, e.params.isUnknown, e.params.condition);
	return /* @__PURE__ */ window.SP_REACT.createElement(Q, {
		filter: e,
		displayData: t
	});
}, Yi = ({ filter: e }) => {
	let t = Ie(e.type, e.params.date, e.params.daysAgo, e.params.isUnknown, e.params.condition);
	return /* @__PURE__ */ window.SP_REACT.createElement(Q, {
		filter: e,
		displayData: t
	});
}, Xi = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: e.params.isFamilyShared ? F("LABEL_YES", "yes") : F("LABEL_NO", "no")
}), Zi = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: e.params.isDemo ? F("LABEL_YES", "yes") : F("LABEL_NO", "no")
}), Qi = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: e.params.isComingSoon ? F("LABEL_YES", "yes") : F("LABEL_NO", "no")
}), $i = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: e.params.isStreamable ? F("LABEL_YES", "yes") : F("LABEL_NO", "no")
}), ea = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: `${e.params.features.length} ${e.params.features.length == 1 ? F("LABEL_FEATURE_SINGULAR", "feature") : F("LABEL_FEATURE_PLURAL", "features")}`,
	isInverted: e.inverted
}), ta = ({ filter: e }) => {
	let { threshold: t, thresholdType: n, condition: r } = e.params, i = Le(r);
	return /* @__PURE__ */ window.SP_REACT.createElement(Q, {
		filter: e,
		displayData: `${t}${n === "percent" ? "%" : ""} ${i}`
	});
}, na = ({ filter: e }) => {
	let t;
	switch (e.params.card) {
		case L.ANY:
			t = F("LABEL_ANY", "Any");
			break;
		case L.INSTALLED:
		case void 0:
			t = F("LABEL_INSERTED", "Inserted");
			break;
		default: t = H.isInstallOk() && window.MicroSDeck?.CardsAndGames.find(([t]) => t.uid === e.params.card)?.[0].name || e.params.card;
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(Q, {
		filter: e,
		displayData: t,
		isInverted: e.inverted
	});
}, ra = ({ filter: e }) => /* @__PURE__ */ window.SP_REACT.createElement(Q, {
	filter: e,
	displayData: e.params.driveName,
	isInverted: e.inverted
}), ia = ({ filter: e }) => {
	if (e) switch (e.type) {
		case "collection": return /* @__PURE__ */ window.SP_REACT.createElement(Ni, { filter: e });
		case "installed": return /* @__PURE__ */ window.SP_REACT.createElement(Pi, { filter: e });
		case "regex": return /* @__PURE__ */ window.SP_REACT.createElement(Fi, { filter: e });
		case "friends": return /* @__PURE__ */ window.SP_REACT.createElement(Ii, { filter: e });
		case "tags": return /* @__PURE__ */ window.SP_REACT.createElement(Li, { filter: e });
		case "whitelist": return /* @__PURE__ */ window.SP_REACT.createElement(Ri, { filter: e });
		case "blacklist": return /* @__PURE__ */ window.SP_REACT.createElement(zi, { filter: e });
		case "merge": return /* @__PURE__ */ window.SP_REACT.createElement(Bi, { filter: e });
		case "platform": return /* @__PURE__ */ window.SP_REACT.createElement(Vi, { filter: e });
		case "deck compatibility": return /* @__PURE__ */ window.SP_REACT.createElement(Hi, { filter: e });
		case "steamos compatibility": return /* @__PURE__ */ window.SP_REACT.createElement(Ui, { filter: e });
		case "review score": return /* @__PURE__ */ window.SP_REACT.createElement(Wi, { filter: e });
		case "time played": return /* @__PURE__ */ window.SP_REACT.createElement(Gi, { filter: e });
		case "size on disk": return /* @__PURE__ */ window.SP_REACT.createElement(Ki, { filter: e });
		case "release date": return /* @__PURE__ */ window.SP_REACT.createElement(qi, { filter: e });
		case "purchase date": return /* @__PURE__ */ window.SP_REACT.createElement(Ji, { filter: e });
		case "last played": return /* @__PURE__ */ window.SP_REACT.createElement(Yi, { filter: e });
		case "family sharing": return /* @__PURE__ */ window.SP_REACT.createElement(Xi, { filter: e });
		case "demo": return /* @__PURE__ */ window.SP_REACT.createElement(Zi, { filter: e });
		case "coming soon": return /* @__PURE__ */ window.SP_REACT.createElement(Qi, { filter: e });
		case "streamable": return /* @__PURE__ */ window.SP_REACT.createElement($i, { filter: e });
		case "steam features": return /* @__PURE__ */ window.SP_REACT.createElement(ea, { filter: e });
		case "achievements": return /* @__PURE__ */ window.SP_REACT.createElement(ta, { filter: e });
		case "sd card": return /* @__PURE__ */ window.SP_REACT.createElement(na, { filter: e });
		case "install folder": return /* @__PURE__ */ window.SP_REACT.createElement(ra, { filter: e });
		default: return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null);
	}
	else return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null);
}, aa = "#bbc1c94a", oa = `
  .slider-container.highlight-slider .${R.gamepadDialogClasses.Field}.gpfocuswithin .${R.gamepadSliderClasses.SliderControl} {
    background-color: ${aa};
    box-shadow: 0px 0px 8px 8px ${aa};
    border-radius: 10px;
  }

  .slider-container .${R.gamepadDialogClasses.Field} {
    padding: 0;
    flex: auto;
    --field-negative-horizontal-margin: 0
  }

  .slider-container .${R.gamepadSliderClasses.SliderControl} {
    transition-property: background-color, box-shadow;
    transition-duration: .20s;
    height: 6px;
  }

  .slider-container .${R.gamepadSliderClasses.SliderHandle} {
    top: -8px;
  }

  .slider-container .${R.gamepadSliderClasses.SliderNotchTick} {
    height: 4px;
  }

  .slider-container .${R.gamepadSliderClasses.SliderNotchContainer} {
    margin-top: 4px;
  }
`, sa = ({ highlightOnFocus: e, ...t }) => /* @__PURE__ */ window.SP_REACT.createElement("div", {
	className: `slider-container${e ?? !0 ? " highlight-slider" : ""}`,
	style: {
		minHeight: "40px",
		display: "flex",
		alignItems: "center",
		flex: "auto"
	}
}, /* @__PURE__ */ window.SP_REACT.createElement("style", null, oa), /* @__PURE__ */ window.SP_REACT.createElement(R.SliderField, {
	...t,
	highlightOnFocus: !1
})), ca = "deck_ui_tab_transition_01.wav", la = "deck_ui_bumper_end_02.wav", ua = "deck_ui_misc_01.wav", da = "deck_ui_message_toast.wav", fa = /* @__PURE__ */ function(e) {
	return e[e.none = 0] = "none", e[e.selection = 1] = "selection", e[e.all = 2] = "all", e[e.buttons = 3] = "buttons", e;
}({}), pa = /* @__PURE__ */ function(e) {
	return e[e.never = 0] = "never", e[e.transparentOnly = 1] = "transparentOnly", e[e.always = 2] = "always", e;
}({}), ma = ({ rgOptions: e, selectedOption: t, onChange: n, noWrapAround: r, showDropdownIcon: i, focusDropdown: a, transparencyMode: o, fullWidth: s, selectionBoxWidth: c, spacing: l, buttonWidth: u, focusRingMode: d, alternateSFX: f, sfxMain: p, sfxInvalid: m, animate: h, animationDuration: g, disabled: _, ...v }) => {
	let y = r ?? !1, b = c !== void 0, S = o ?? 0, C = S === 3 || S === 2, w = S === 1 || S === 2, T = d ?? 0, E = p ?? f ? ua : ca, D = m ?? f ? da : la, O = (e) => {
		switch (T) {
			case 2: return br.ring;
			case 0: return br.highlight;
			case 1: return e ? br.ring : br.highlight;
		}
	}, k = O(w), A = O(C), j = (0, x.useMemo)(() => {
		let n = e.findIndex((e) => e.data === t);
		return n === -1 ? 0 : n;
	}, [t, e.length]), [M, N] = (0, x.useState)(j), [P, ee] = (0, x.useState)({});
	(0, x.useEffect)(() => {
		M !== j && N(j);
	}, [t, e.length]);
	let te = (t) => y && (M === e.length - 1 && t === 1 || M === 0 && t === -1) ? D : E, ne = (t, n) => {
		let r = e.length;
		if (n > 0) {
			let e = (t + 1) % r;
			return e === 0 && y ? r - 1 : e;
		}
		{
			let e = t - 1;
			return e < 0 ? y ? 0 : r - 1 : e;
		}
	}, re = (t) => {
		let r = ne(M, t);
		r !== M && (N(r), h && ee({ transform: `translate(${100 * t}%)` }), n?.(e[r]));
	}, ie = (t) => {
		let r = e.indexOf(t);
		N(r), h && ee({}), n?.(e[r]);
	}, ae = l || "12px", oe = {
		width: u || "40px",
		minHeight: "40px",
		minWidth: "initial",
		padding: "initial"
	}, se = {
		height: "1.5em",
		width: "1.5em",
		display: "block",
		margin: "auto"
	};
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		className: "enhanced-selector",
		style: {
			display: "flex",
			justifyContent: "center"
		}
	}, /* @__PURE__ */ window.SP_REACT.createElement(xr, {
		audioSFX: te(-1),
		onClick: () => re(-1),
		className: ha("direction-button", "direction-left"),
		containerStyle: { marginRight: ae },
		transparent: C,
		focusMode: A,
		style: oe,
		disabled: _,
		focusable: !_
	}, /* @__PURE__ */ window.SP_REACT.createElement(Xn, {
		style: Object.assign({ transform: "rotate(180deg)" }, se),
		className: "direction-icon"
	})), /* @__PURE__ */ window.SP_REACT.createElement(Cr, {
		rgOptions: e,
		selectedOption: e?.[M]?.data,
		focusable: a === !0 && !_,
		onChange: ie,
		focusMode: k,
		transparent: w,
		noDropdownIcon: !i,
		containerStyle: s && !b ? { width: "100%" } : {},
		style: b ? {
			width: c,
			minWidth: c
		} : { minWidth: "100px" },
		labelStyle: h ? { transition: `transform ${g ?? 300}ms ease-out` } : {},
		labelChangedStyle: P,
		disabled: _,
		...v
	}), /* @__PURE__ */ window.SP_REACT.createElement(xr, {
		audioSFX: te(1),
		onClick: () => re(1),
		className: ha("direction-button", "direction-right"),
		containerStyle: { marginLeft: ae },
		transparent: C,
		focusMode: A,
		style: oe,
		disabled: _,
		focusable: !_
	}, /* @__PURE__ */ window.SP_REACT.createElement(Xn, {
		style: se,
		className: "direction-icon"
	}))));
};
function ha(...e) {
	return e.filter((e) => e).join(" ");
}
//#endregion
//#region src/components/generic/DatePickers.tsx
var ga = ({ modalType: e, selectedDate: t, buttonLabelCenter: n, buttonIcon: r, noIcon: i, buttonStyle: a, buttonContainerStyle: o, strDefaultLabel: s, toLocaleStringOptions: c, dateIncludes: l, onChange: u, disabled: d = !1, ...f }) => {
	let p = e === "pretty" ? va : _a, m = l ?? I.dayMonthYear, [h, g] = (0, x.useState)(!1);
	(0, x.useEffect)(() => g(!0), []);
	let { day: _, month: v, year: y } = t ?? {}, [b, S] = (0, x.useState)(m === I.dayMonthYear ? _ ?? 1 : void 0), [C, w] = (0, x.useState)(m >= I.monthYear ? v ?? 1 : void 0), [T, E] = (0, x.useState)(y), D = wa(b, C, T);
	(0, x.useEffect)(() => {
		if (h) {
			let { day: e, month: n, year: r } = t ?? {};
			t && wa(e, n, r) && (E(r), w(n), S(e));
		}
	}, [
		_,
		v,
		y
	]);
	let O = { year: T };
	C && (O.month = C), b && (O.day = b);
	let A = (0, x.useMemo)(() => D ? O : void 0, [
		b,
		C,
		T,
		D,
		m
	]), j = (0, x.useMemo)(() => D ? [{
		label: Ee(T, C, b, c),
		data: A
	}] : void 0, [
		b,
		C,
		T,
		D,
		m
	]);
	return (0, x.useEffect)(() => {
		if (D && h) {
			let e = { ...j[0].data };
			switch (m) {
				case I.dayMonthYear:
					e.day ||= 1, e.month ||= 1;
					break;
				case I.monthYear:
					e.month ||= 1, delete e.day;
					break;
				case I.yearOnly: delete e.day, delete e.month;
			}
			E(e.year), w(e.month), S(e.day), u?.({
				label: Ee(e.year, e.month, e.day, c),
				data: e
			});
		}
	}, [m]), /* @__PURE__ */ window.SP_REACT.createElement(Cr, {
		onChange: u,
		selectedOption: A,
		rgOptions: j,
		strDefaultLabel: s ?? F("LABEL_SELECT_DATE", "Select Date..."),
		labelCenter: n,
		customDropdownIcon: r ?? /* @__PURE__ */ window.SP_REACT.createElement(k, { style: { margin: "auto" } }),
		noDropdownIcon: i ?? !1,
		style: a,
		containerStyle: o,
		containerClassName: "date-picker",
		useCustomModal: ({ onSelectOption: e, selectedOption: t, closeModal: n }) => /* @__PURE__ */ window.SP_REACT.createElement(p, {
			onSelectDate: (t) => {
				e(t), E(t.data.year), w(t.data.month), S(t.data.day);
			},
			selectedDate: t,
			dateIncludes: m,
			toLocaleStringOptions: c,
			closeModal: n,
			...f
		}),
		disabled: d
	});
}, _a = ({ onSelectDate: e, selectedDate: t, toLocaleStringOptions: n, focusDropdowns: r, showDropdownIcons: i, centerSelectorLabels: a, startYear: o, endYear: s, dateIncludes: c, closeModal: l, ...u }) => {
	let d = (/* @__PURE__ */ new Date()).getUTCFullYear(), { day: f, month: p, year: m } = t ?? {}, h = c ?? I.dayMonthYear, [g, _] = (0, x.useState)(h === I.dayMonthYear ? f ?? 1 : void 0), [v, y] = (0, x.useState)(h >= I.monthYear ? p ?? 1 : void 0), [b, S] = (0, x.useState)(m ?? d), C = o ?? 1970, w = s ?? d, T = (0, x.useMemo)(() => ba(), []), E = (0, x.useMemo)(() => xa(), []), D = (0, x.useMemo)(() => Sa(b < C ? b : C, b > w ? b : w), []), O = () => {
		let t = Ee(b, v, g, n), r = { year: b };
		g && (r.day = g), v && (r.month = v), e?.({
			label: t,
			data: r
		});
	}, k = (0, x.useMemo)(() => {
		if (!g) return;
		let e = Ca(v, b), t = g;
		return g > e && (t = e, _(e)), /* @__PURE__ */ window.SP_REACT.createElement(ma, {
			selectionBoxWidth: `${50 + (i ? 25 : 0)}px`,
			onChange: (e) => _(e.data),
			focusDropdown: r ?? !0,
			showDropdownIcon: i,
			labelCenter: a ?? !0,
			...u,
			rgOptions: T.slice(0, e),
			selectedOption: t
		});
	}, [v, b]), A = (0, x.useMemo)(() => {
		if (v) return /* @__PURE__ */ window.SP_REACT.createElement(ma, {
			selectionBoxWidth: `${110 + (i ? 25 : 0)}px`,
			onChange: (e) => y(e.data),
			focusDropdown: r ?? !0,
			showDropdownIcon: i,
			labelCenter: a ?? !0,
			...u,
			rgOptions: E,
			selectedOption: v
		});
	}, []), j = (0, x.useMemo)(() => /* @__PURE__ */ window.SP_REACT.createElement(ma, {
		selectionBoxWidth: `${72 + (i ? 25 : 0)}px`,
		onChange: (e) => S(e.data),
		focusDropdown: r ?? !0,
		showDropdownIcon: i,
		labelCenter: a ?? !0,
		...u,
		rgOptions: D,
		selectedOption: b
	}), []), M = { justifyContent: "center" }, N = g ? {} : { flex: "1" }, P = Ta(R.quickAccessMenuClasses.PanelSectionTitle, "date-picker-modal-title");
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("style", null, ".date-picker-modal .DialogHeader { display: none !important; }"), /* @__PURE__ */ window.SP_REACT.createElement(R.ConfirmModal, {
		className: "date-picker-modal",
		closeModal: l,
		onOK: O
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: Object.assign({ display: "flex" }, g ? { justifyContent: "space-between" } : {}) }, v && /* @__PURE__ */ window.SP_REACT.createElement("div", { style: N }, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		style: M,
		className: P
	}, F("LABEL_MONTH", "Month")), A), g && /* @__PURE__ */ window.SP_REACT.createElement("div", { style: N }, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		style: M,
		className: P
	}, F("LABEL_DAY", "Day")), k), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: N }, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		style: M,
		className: P
	}, F("LABEL_YEAR", "Year")), j))));
}, va = ({}) => null, ya = window.LocalizationManager.m_rgLocalesToUse;
function ba() {
	let e = [];
	for (let t = 1; t <= 31; t++) e.push({
		label: t,
		data: t
	});
	return e;
}
function xa() {
	let e = [];
	for (let t = 1; t <= 12; t++) e.push({
		label: new Date(2e3, t - 1).toLocaleDateString(ya, { month: "long" }),
		data: t
	});
	return e;
}
function Sa(e, t) {
	let n = [];
	for (let r = e; r <= t; r++) n.push({
		label: r,
		data: r
	});
	return n;
}
function Ca(e, t) {
	return new Date(t, e, 0).getDate();
}
function wa(e, t, n) {
	return !(n === void 0 || e !== void 0 && t === void 0 || t !== void 0 && (t < 1 || t > 12) || e !== void 0 && (e < 1 || e > Ca(t, n)));
}
function Ta(...e) {
	return e.filter((e) => e).join(" ");
}
//#endregion
//#region src/components/filters/utils/DateFilterOptions.tsx
var Ea = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let i = n.type, [a, o] = (0, x.useState)(n.params.date), [s, c] = (0, x.useState)(n.params.date && n.params.date.day === void 0 ? n.params.date.month === void 0 ? I.yearOnly : I.monthYear : I.dayMonthYear), [l, u] = (0, x.useState)(n.params.condition), [d, f] = (0, x.useState)(n.params.daysAgo !== void 0), [p, m] = (0, x.useState)(n.params.isUnknown !== void 0), [h, g] = (0, x.useState)(n.params.daysAgo ?? 30);
	function _(i) {
		let a = { ...n };
		a.params.date = i.data;
		let s = [...r];
		s[e] = a, t(s), o(i.data);
	}
	function v({ data: i }) {
		let a = { ...n };
		a.params.condition = i;
		let o = [...r];
		o[e] = a, t(o), u(i);
	}
	function y(i) {
		let o = { ...n };
		i ? (delete o.params.date, o.params.daysAgo = h) : (delete o.params.daysAgo, o.params.date = a);
		let s = [...r];
		s[e] = o, t(s), f(i);
	}
	function b(i) {
		let o = { ...n };
		i ? (delete o.params.date, o.params.isUnknown = i) : (delete o.params.isUnknown, o.params.date = a);
		let s = [...r];
		s[e] = o, t(s), m(i);
	}
	function S(i) {
		let a = { ...n };
		a.params.daysAgo = i;
		let o = [...r];
		o[e] = a, t(o), g(i);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: Ie(i, a, h, p, l),
		description: /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			display: "flex",
			flexDirection: "row"
		} }, p ? /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null) : d ? /* @__PURE__ */ window.SP_REACT.createElement(sa, {
			value: h,
			min: 0,
			max: 3e3,
			onChange: S
		}) : /* @__PURE__ */ window.SP_REACT.createElement(ga, {
			focusDropdowns: !0,
			modalType: "simple",
			buttonContainerStyle: { flex: 1 },
			onChange: _,
			dateIncludes: s,
			selectedDate: a,
			toLocaleStringOptions: { dateStyle: "long" },
			animate: !0,
			transparencyMode: fa.selection,
			focusRingMode: pa.transparentOnly
		}), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: p ? { width: "100%" } : { margin: "0 10px" } }, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: Me(),
			selectedOption: s,
			onChange: (e) => {
				e.data === "byUnknown" ? (d && y(!1), b(!0)) : e.data === "byDaysAgo" ? (p && b(!1), y(!0)) : (p && b(!1), d && y(!1), c(e.data));
			}
		})), !p && /* @__PURE__ */ window.SP_REACT.createElement("div", null, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: je(),
			selectedOption: l,
			onChange: v
		})))
	});
};
//#endregion
//#region src/components/filters/FilterOptions.tsx
function Da(e) {
	return collectionStore.userCollections.find((t) => t.id === e.data)?.bIsEditable ? pt : We;
}
var Oa = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let i = collectionStore.userCollections.concat([{
		displayName: F("GameList_Category_Hidden", "Hidden", !0),
		id: "hidden"
	}]).map((e) => ({
		label: e.displayName,
		data: e.id
	}));
	function a(i) {
		let a = { ...n };
		a.params.id = i.data, a.params.name = i.label;
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: F("LABEL_SELECTED_COLLECTION", "Selected Collection"),
		description: /* @__PURE__ */ window.SP_REACT.createElement(ki, {
			entryLabel: F("LibraryTab_Collections", "Collections", !0),
			rgOptions: i,
			selectedOption: n.params.id,
			onChange: a,
			TriggerIcon: He,
			determineEntryIcon: Da
		})
	});
}, ka = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	function i(i) {
		let a = { ...n };
		a.params.installed = i ?? !1;
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.ToggleField, {
		label: F("LABEL_IS_INSTALLED", "Is installed?"),
		checked: n.params.installed,
		onChange: i
	});
}, Aa = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	function i(i) {
		let a = { ...n };
		a.params.regex = i?.target.value;
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: "Regex",
		description: /* @__PURE__ */ window.SP_REACT.createElement(R.TextField, {
			value: n.params.regex,
			placeholder: F("PLACEHOLDER_REGULAR_EXPRESSION", "Input a Regular Expression"),
			onChange: i
		})
	});
}, ja = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let { currentUsersFriends: i } = Nn(), a = i.sort((e, t) => e.name.localeCompare(t.name)).map((e) => ({
		label: e.name,
		data: e.steamid
	})), o = n.params.friends.map((e) => ({
		label: i.find((t) => t.steamid === e).name,
		data: e
	})), s = n.params.mode;
	function c(i, a) {
		let o = { ...n };
		o.params.friends = i.map((e) => e.data), o.params.mode = a;
		let s = [...r];
		s[e] = o, t(s);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(Ai, {
		fieldLabel: F("LABEL_SELECTED_FRIENDS", "Selected Friends"),
		dropdownLabel: F("LABEL_FRIENDS_OPTIONS_ADD_FRIEND", "Add a friend"),
		mode: s,
		options: a,
		selected: o,
		onChange: c,
		entryLabel: F("LABEL_FRIENDS_PLURAL", "friends"),
		EntryIcon: pt,
		TriggerIcon: jt
	});
}, Ma = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let { allStoreTags: i } = Nn(), a = i.sort((e, t) => e.string.localeCompare(t.string)).map((e) => ({
		label: e.string,
		data: e.tag
	})), o = n.params.tags.map((e) => ({
		label: i.find((t) => t.tag === e).string,
		data: e
	})), s = n.params.mode;
	function c(i, a) {
		let o = { ...n };
		o.params.tags = i.map((e) => e.data), o.params.mode = a;
		let s = [...r];
		s[e] = o, t(s);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(Ai, {
		fieldLabel: F("LABEL_SELECTED_TAGS", "Selected Tags"),
		dropdownLabel: F("LABEL_TAGS_OPTIONS_ADD_TAG", "Add a tag"),
		mode: s,
		options: a,
		selected: o,
		onChange: c,
		entryLabel: F("LABEL_TAGS_PLURAL", "tags"),
		EntryIcon: lt,
		TriggerIcon: ut
	});
}, Na = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let i = qt([
		"games",
		"music",
		"software"
	]), a = [];
	for (let e of n.params.games) {
		let t = i.find((t) => t.appid === e);
		t && a.push({
			label: t.display_name,
			data: {
				appid: t.appid,
				appType: t.app_type
			}
		});
	}
	let o = i.map((e) => ({
		label: e.display_name,
		data: {
			appid: e.appid,
			appType: e.app_type
		}
	}));
	function s(i) {
		let a = { ...n };
		a.params.games = i.map((e) => e.data.appid);
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(Mi, {
		fieldLabel: F("LABEL_WHITELISTED_APPS", "Whitelisted Apps"),
		dropdownLabel: F("LABEL_ADD_APP", "Add an app"),
		options: o,
		selected: a,
		onChange: s,
		entryLabel: F("LABEL_YOUR_APPS", "Your Apps"),
		determineEntryIcon: Rt,
		TriggerIcon: pn
	});
}, Pa = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let i = qt([
		"games",
		"music",
		"software"
	]), a = [];
	for (let e of n.params.games) {
		let t = i.find((t) => t.appid === e);
		t && a.push({
			label: t.display_name,
			data: {
				appid: t.appid,
				appType: t.app_type
			}
		});
	}
	let o = i.map((e) => ({
		label: e.display_name,
		data: {
			appid: e.appid,
			appType: e.app_type
		}
	}));
	function s(i) {
		let a = { ...n };
		a.params.games = i.map((e) => e.data.appid);
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(Mi, {
		fieldLabel: F("LABEL_BLACKLISTED_APPS", "Blacklisted Apps"),
		dropdownLabel: F("LABEL_ADD_APP", "Add an app"),
		options: o,
		selected: a,
		onChange: s,
		entryLabel: F("LABEL_YOUR_APPS", "Your Apps"),
		determineEntryIcon: Rt,
		TriggerIcon: pn
	});
}, Fa = ({ index: e, filter: t, containingGroupFilters: n, setContainingGroupFilters: r }) => {
	let i = Nn().tabMasterManager, a = {
		filters: [...t.params.filters],
		mode: t.params.mode
	}, [o, s] = (0, x.useState)(t.params.filters.length !== 0), [c, l] = (0, x.useState)(a);
	function u(i) {
		let a = { ...t };
		a.params.filters = i.filters, a.params.mode = i.mode;
		let o = [...n];
		o[e] = a, s(!0), l({ ...i }), r(o);
	}
	function d() {
		let e = { instance: null };
		e.instance = (0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(Pn, { tabMasterManager: i }, /* @__PURE__ */ window.SP_REACT.createElement(ji, {
			mergeParams: c,
			saveMerge: u,
			closeModal: () => e.instance.Close(),
			isEditing: o
		})));
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { className: "styled-btn" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ButtonItem, { onClick: d }, (o ? F("LABEL_EDIT", "Edit") : F("LABEL_CREATE", "Create")) + " " + F("TITLE_MERGE_GROUP", "Merge Group")), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginTop: "7px" } }, /* @__PURE__ */ window.SP_REACT.createElement("b", null, F("LABEL_MERGE_MODE", "Merge Mode")), " - ", Oe(c.mode)), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		marginTop: "7px",
		fontWeight: "bold"
	} }, F("TITLE_FILTERS", "Filters"), ":"), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "merge-filter-entries" }, c.filters.map((e) => /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginTop: "3px" } }, /* @__PURE__ */ window.SP_REACT.createElement(ia, { filter: e })))));
}, Ia = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let i = [{
		label: "Steam",
		data: "steam"
	}, {
		label: F("LibraryTab_NonSteam", "Non Steam", !0),
		data: "nonSteam"
	}];
	function a(i) {
		let a = { ...n };
		a.params.platform = i.data;
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: F("LABEL_SELECTED_PLATFORM", "Selected Platform"),
		description: /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: i,
			selectedOption: n.params.platform,
			onChange: a
		})
	});
}, La = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let i = [
		0,
		1,
		2,
		3
	].map((e) => ({
		label: xn(e),
		data: e
	}));
	function a(i) {
		let a = { ...n };
		a.params.category = i.data;
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: F("LABEL_SELECTED_COMPATIBILITY", "Selected Compatibility"),
		description: /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: i,
			selectedOption: n.params.category,
			onChange: a
		})
	});
}, Ra = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let i = [
		0,
		1,
		2
	].map((e) => ({
		label: Sn(e),
		data: e
	}));
	function a(i) {
		let a = { ...n };
		a.params.category = i.data;
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: F("LABEL_SELECTED_COMPATIBILITY", "Selected Compatibility"),
		description: /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: i,
			selectedOption: n.params.category,
			onChange: a
		})
	});
}, za = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let [i, a] = (0, x.useState)(n.params.scoreThreshold), [o, s] = (0, x.useState)(n.params.condition), [c, l] = (0, x.useState)(n.params.type);
	function u(i, a, o) {
		let s = { ...n };
		s.params.scoreThreshold = i, s.params.condition = a, s.params.type = o;
		let c = [...r];
		c[e] = s, t(c);
	}
	function d(e) {
		u(e, o, c), a(e);
	}
	function f({ data: e }) {
		u(i, e, c), s(e);
	}
	function p({ data: e }) {
		u(i, o, e), l(e);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: Pe(i, o, c),
		description: /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			display: "flex",
			flexDirection: "row"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(sa, {
			value: i,
			min: 0,
			max: 100,
			onChange: d
		}), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
			marginLeft: "12px",
			marginRight: "10px"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: [{
				label: "Metacritic",
				data: "metacritic"
			}, {
				label: "Steam ",
				data: "steampercent"
			}],
			selectedOption: c,
			onChange: p
		})), /* @__PURE__ */ window.SP_REACT.createElement("div", null, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: Ae(),
			selectedOption: o,
			onChange: f
		})))
	});
}, Ba = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let [i, a] = (0, x.useState)(n.params.timeThreshold), [o, s] = (0, x.useState)(n.params.units), [c, l] = (0, x.useState)(n.params.condition);
	function u(i, a, o) {
		let s = { ...n };
		s.params.timeThreshold = i, s.params.condition = a, s.params.units = o;
		let c = [...r];
		c[e] = s, t(c);
	}
	function d(e) {
		u(e, c, o), a(e);
	}
	function f({ data: e }) {
		u(i, c, e), s(e);
	}
	function p({ data: e }) {
		u(i, e, o), l(e);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: Fe(i, c, o),
		description: /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			display: "flex",
			flexDirection: "row"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(sa, {
			value: i,
			min: 0,
			max: 300,
			onChange: d
		}), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
			marginLeft: "12px",
			marginRight: "10px"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: Ne(),
			selectedOption: o,
			onChange: f
		})), /* @__PURE__ */ window.SP_REACT.createElement("div", null, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: Ae(),
			selectedOption: c,
			onChange: p
		})))
	});
}, Va = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let [i, a] = (0, x.useState)(n.params.gbThreshold.toString()), [o, s] = (0, x.useState)(n.params.gbThreshold), [c, l] = (0, x.useState)(n.params.condition);
	function u(i, a) {
		let o = { ...n };
		o.params.gbThreshold = i, o.params.condition = a;
		let s = [...r];
		s[e] = o, t(s);
	}
	function d(e) {
		let t = 0;
		e?.target.value !== "" && !isNaN(parseFloat(e?.target.value)) && (t = parseFloat(e?.target.value)), u(t, c), s(t), a(e?.target.value);
	}
	function f({ data: e }) {
		u(o, e), l(e);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: Re(o, c),
		description: /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
			style: {
				display: "flex",
				flexDirection: "row"
			},
			className: "size-on-disk-row"
		}, /* @__PURE__ */ window.SP_REACT.createElement(R.TextField, {
			value: i,
			onChange: d
		}), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginLeft: "12px" } }, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: Ae(),
			selectedOption: c,
			onChange: f
		})))
	});
}, Ha = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => /* @__PURE__ */ window.SP_REACT.createElement(Ea, {
	index: e,
	setContainingGroupFilters: t,
	filter: n,
	containingGroupFilters: r
}), Ua = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => /* @__PURE__ */ window.SP_REACT.createElement(Ea, {
	index: e,
	setContainingGroupFilters: t,
	filter: n,
	containingGroupFilters: r
}), Wa = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => /* @__PURE__ */ window.SP_REACT.createElement(Ea, {
	index: e,
	setContainingGroupFilters: t,
	filter: n,
	containingGroupFilters: r
}), Ga = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	function i(i) {
		let a = { ...n };
		a.params.isFamilyShared = i ?? !1;
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.ToggleField, {
		label: F("LABEL_FAMILY_SHARING_OPTION", "Is from a family member?"),
		checked: n.params.isFamilyShared,
		onChange: i
	});
}, Ka = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	function i(i) {
		let a = { ...n };
		a.params.isDemo = i ?? !1;
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.ToggleField, {
		label: F("LABEL_IS_DEMO_OPTION", "Is demo?"),
		checked: n.params.isDemo,
		onChange: i
	});
}, qa = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	function i(i) {
		let a = { ...n };
		a.params.isComingSoon = i ?? !1;
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.ToggleField, {
		label: F("LABEL_IS_COMING_SOON", "Is Coming Soon?"),
		checked: n.params.isComingSoon,
		onChange: i
	});
}, Ja = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	function i(i) {
		let a = { ...n };
		a.params.isStreamable = i ?? !1;
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.ToggleField, {
		label: F("LABEL_IS_STREAMABLE_OPTION", "Is streamable?"),
		checked: n.params.isStreamable,
		onChange: i
	});
}, Ya = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let i = cn.map((e) => ({
		label: sn[e.toString()].display_name,
		data: e
	})), a = n.params.features.map((e) => ({
		label: sn[e.toString()].display_name,
		data: e
	})), o = n.params.mode;
	function s(i, a) {
		let o = { ...n };
		o.params.features = i.map((e) => e.data), o.params.mode = a;
		let s = [...r];
		s[e] = o, t(s);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(Ai, {
		fieldLabel: F("LABEL_SELECTED_FEATURES", "Selected Features"),
		dropdownLabel: F("LABEL_ADD_FEATURE", "Add a feature"),
		mode: o,
		options: i,
		selected: a,
		onChange: s,
		entryLabel: F("LABEL_FEATURE_PLURAL", "features"),
		EntryIcon: We,
		TriggerIcon: at
	});
}, Xa = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let [i, a] = (0, x.useState)(n.params.threshold), [o, s] = (0, x.useState)(n.params.thresholdType), [c, l] = (0, x.useState)(n.params.condition);
	function u(i, a, o) {
		let s = { ...n };
		s.params.threshold = i, s.params.condition = a, s.params.thresholdType = o;
		let c = [...r];
		c[e] = s, t(c);
	}
	function d(e) {
		u(e, c, o), a(e);
	}
	function f({ data: e }) {
		u(i, e, o), l(e);
	}
	function p({ data: e }) {
		u(i, c, e), s(e);
	}
	let m = Le(c);
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: `${i}${o === "percent" ? "%" : ""} ${m}`,
		description: /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
			display: "flex",
			flexDirection: "row"
		} }, /* @__PURE__ */ window.SP_REACT.createElement(sa, {
			value: i,
			min: 0,
			max: 100,
			onChange: d
		}), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginLeft: "12px" } }, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: Ae(),
			selectedOption: c,
			onChange: f
		})), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginLeft: "12px" } }, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: ke(),
			selectedOption: o,
			onChange: p
		})))
	});
}, Za = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let i = (0, x.useMemo)(() => H.isInstallOk(), []), a = window.MicroSDeck?.CardsAndGames || [], o = [
		{
			label: F("LABEL_INSERTED_CARD", "Inserted Card"),
			data: L.INSTALLED
		},
		{
			label: F("LABEL_SPECIFIC_CARD", "Specific Card"),
			options: a.map(([e]) => ({
				label: e.name || e.uid,
				data: e.uid
			}))
		},
		{
			label: F("LABEL_ANY_CARD", "Any Card"),
			data: L.ANY
		}
	];
	function s({ data: i }) {
		let a = { ...n };
		a.params.card = i;
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: F("LABEL_MICROSD_CARD", "Micro SD Card"),
		description: /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
			rgOptions: o,
			selectedOption: n.params.card ?? L.INSTALLED,
			onChange: s,
			disabled: !i
		})
	});
}, Qa = ({ index: e, setContainingGroupFilters: t, filter: n, containingGroupFilters: r }) => {
	let i = installFolderStore.AllInstallFolders.map((e) => ({
		label: e.strUserLabel || e.strDriveName,
		data: e.strDriveName
	}));
	function a(i) {
		let a = { ...n };
		a.params.driveName = i.data;
		let o = [...r];
		o[e] = a, t(o);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: F("LABEL_SELECT_INSTALL_FILTERS", "Selected Install Folder"),
		description: /* @__PURE__ */ window.SP_REACT.createElement(ki, {
			entryLabel: F("LABEL_INSTALL_FOLDERS", "Install Folders"),
			rgOptions: i,
			selectedOption: n.params.driveName,
			onChange: a,
			TriggerIcon: He,
			determineEntryIcon: (e) => e.bIsDefaultFolder ? ct : it
		})
	});
}, $a = ({ index: e, filter: t, containingGroupFilters: n, setContainingGroupFilters: r }) => {
	if (t) {
		let i = {
			...t,
			params: { ...t.params }
		};
		switch (t.type) {
			case "collection": return /* @__PURE__ */ window.SP_REACT.createElement(Oa, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "installed": return /* @__PURE__ */ window.SP_REACT.createElement(ka, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "regex": return /* @__PURE__ */ window.SP_REACT.createElement(Aa, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "friends": return /* @__PURE__ */ window.SP_REACT.createElement(ja, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "tags": return /* @__PURE__ */ window.SP_REACT.createElement(Ma, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "whitelist": return /* @__PURE__ */ window.SP_REACT.createElement(Na, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "blacklist": return /* @__PURE__ */ window.SP_REACT.createElement(Pa, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "merge": return /* @__PURE__ */ window.SP_REACT.createElement(Fa, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "platform": return /* @__PURE__ */ window.SP_REACT.createElement(Ia, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "deck compatibility": return /* @__PURE__ */ window.SP_REACT.createElement(La, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "steamos compatibility": return /* @__PURE__ */ window.SP_REACT.createElement(Ra, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "review score": return /* @__PURE__ */ window.SP_REACT.createElement(za, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "time played": return /* @__PURE__ */ window.SP_REACT.createElement(Ba, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "size on disk": return /* @__PURE__ */ window.SP_REACT.createElement(Va, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "release date": return /* @__PURE__ */ window.SP_REACT.createElement(Ha, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "purchase date": return /* @__PURE__ */ window.SP_REACT.createElement(Ua, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "last played": return /* @__PURE__ */ window.SP_REACT.createElement(Wa, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "family sharing": return /* @__PURE__ */ window.SP_REACT.createElement(Ga, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "demo": return /* @__PURE__ */ window.SP_REACT.createElement(Ka, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "coming soon": return /* @__PURE__ */ window.SP_REACT.createElement(qa, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "streamable": return /* @__PURE__ */ window.SP_REACT.createElement(Ja, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "steam features": return /* @__PURE__ */ window.SP_REACT.createElement(Ya, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "achievements": return /* @__PURE__ */ window.SP_REACT.createElement(Xa, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "sd card": return /* @__PURE__ */ window.SP_REACT.createElement(Za, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			case "install folder": return /* @__PURE__ */ window.SP_REACT.createElement(Qa, {
				index: e,
				filter: i,
				containingGroupFilters: n,
				setContainingGroupFilters: r
			});
			default: return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null);
		}
	} else return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null);
};
//#endregion
//#region node_modules/.pnpm/react-icons@4.12.0_react@19.1.0/node_modules/react-icons/cg/index.esm.js
function eo(e) {
	return D({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z",
				fill: "currentColor"
			}
		}]
	})(e);
}
//#endregion
//#region src/components/accordions/FilterSectionAccordion.tsx
var to = ({ index: e, filter: t, isOpen: n, children: r }) => {
	let [i, a] = (0, x.useState)(n);
	function o() {
		Ut("/sounds/deck_ui_misc_01.wav"), a(!i);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
		width: "100%",
		padding: "0"
	} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		className: "filter-start-cont styled-btn highlight-on-focus",
		focusClassName: "start-focused",
		focusWithinClassName: "start-focused"
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.ButtonItem, { onClick: o }, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "filter-line",
		style: {
			width: "1.25rem",
			pointerEvents: "none"
		}
	}), /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "filter-label",
		style: {
			display: "flex",
			alignItems: "center",
			pointerEvents: "none"
		}
	}, bn(t) ? /* @__PURE__ */ window.SP_REACT.createElement(eo, {
		viewBox: "5 5 14 14",
		size: "0.9em",
		style: {
			marginRight: "3px",
			color: "#009e0eb3"
		}
	}) : /* @__PURE__ */ window.SP_REACT.createElement(mt, {
		size: "0.9em",
		style: { marginRight: "3px" },
		fill: "#ff0016a3"
	}), F("LABEL_FILTER", "Filter"), " ", e + 1, " - ", _n()[t.type], t.type === "merge" ? ` - ${F("MESSAGE_MODE", "mode")}: ${Oe(t.params.mode)}` : ""), /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "filter-line",
		style: {
			flexGrow: "1",
			pointerEvents: "none"
		}
	}), /* @__PURE__ */ window.SP_REACT.createElement(Zn, {
		className: "filter-accordion-arrow",
		style: {
			transition: "transform 0.2s ease-in-out",
			transform: i ? "" : "rotate(90deg)",
			fontSize: "0.8em",
			pointerEvents: "none"
		}
	}), /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "filter-line",
		style: {
			width: "1.25rem",
			pointerEvents: "none"
		}
	}))), i && r);
}, no = ({ groupFilters: e, groupLogicMode: t, setGroupFilters: n, setGroupLogicMode: r, addFilter: i, canAddFilter: a, shouldFocusAddButton: o, collapseFilters: s }) => {
	let c = [{
		label: F("LABEL_AND", "And"),
		data: "and"
	}, {
		label: F("LABEL_OR", "Or"),
		data: "or"
	}], l = (0, x.useRef)(!1), u = (0, x.useRef)(-1);
	function d() {
		l.current = !0, i();
	}
	function f(e) {
		u.current = e;
	}
	(0, x.useEffect)(() => {
		u.current !== -1 && (u.current = -1), l.current &&= !1;
	});
	let p = /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		style: { marginTop: "24px" },
		className: "edit-filters-container"
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSection, { title: F("TITLE_FILTERS", "Filters") }, /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSectionRow, null, /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: F("LABEL_GROUP_COMBINATION_LOGIC", "Group Combination Logic"),
		childrenLayout: "inline",
		childrenContainerWidth: "min",
		inlineWrap: "keep-inline",
		className: "no-sep group-combination-logic-field"
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { width: "100px" } }, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
		rgOptions: c,
		selectedOption: t,
		onChange: (e) => r(e.data),
		focusable: !0
	})))), /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSectionRow, null, e.map((t, r) => /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement(to, {
		index: r,
		filter: t,
		isOpen: (l.current ? r === e.length - 1 : !s) || u.current !== -1 && (u.current === e.length ? r === e.length - 1 : r === u.current)
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "no-sep",
		key: `${t.type}`
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "no-sep" }, /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: F("TITLE_FILTER_TYPE", "Filter Type"),
		description: /* @__PURE__ */ window.SP_REACT.createElement(Or, {
			index: r,
			filter: t,
			containingGroupFilters: e,
			setContainingGroupFilters: n,
			onFilterDelete: f,
			shouldFocus: l.current && r === e.length - 1 || u.current !== -1 && (u.current === e.length ? r === e.length - 1 : r === u.current)
		})
	})), /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "no-sep",
		style: { marginTop: "0.5rem" }
	}, /* @__PURE__ */ window.SP_REACT.createElement($a, {
		index: r,
		filter: t,
		containingGroupFilters: e,
		setContainingGroupFilters: n
	})))), r == e.length - 1 ? /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "filter-start-cont",
		style: { marginTop: "0.5rem" }
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "filter-line" })) : /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null)))), /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSectionRow, null, /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "styled-btn no-sep" }, a ? /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null) : /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginTop: "10px" } }, F("MESSAGE_FINISH_CURRENT_FILTER_BEFORE_ADDING", "Please finish the current filter before adding another")), /* @__PURE__ */ window.SP_REACT.createElement(R.ButtonItem, {
		onClick: d,
		disabled: !a
	}, F("LABEL_ADD_FILTER", "Add Filter"))))));
	return o && (0, R.afterPatch)(p.type, "render", (e, t) => (setTimeout(() => t.props.value.BFocusLastChild(3), 1), t), { singleShot: !0 }), p;
}, ro = ({ closeModal: e, onConfirm: t, tabId: n, tabTitle: r, tabFilters: i, tabMasterManager: a, filtersMode: o, categoriesToInclude: s, autoHide: c, visibleToOthers: l, displayAsCollection: u, sortBy: d }) => {
	let [f, p] = (0, x.useState)(r ?? ""), [m, h] = (0, x.useState)(i), [g, _] = (0, x.useState)(o), [v, y] = (0, x.useState)(s), [b, S] = (0, x.useState)(!1), [C, w] = (0, x.useState)(!0), [T, E] = (0, x.useState)(!0), [D, O] = (0, x.useState)(c), [k, A] = (0, x.useState)(l), [j, M] = (0, x.useState)(u), [N, P] = (0, x.useState)(d), ee = On([]), te = F("TITLE_CANT_SAVE_TAB", "Cannot Save Tab"), ne = F("LABEL_SAVE_TAB", "Save"), re = /* @__PURE__ */ window.SP_REACT.createElement(R.TextField, {
		value: f,
		placeholder: F("PLACEHOLDER_TAB_TITLE", "The title for this tab"),
		onChange: ae
	}), ie;
	T && (0, R.afterPatch)(re.type.prototype, "render", function(e, t) {
		return ie = this, t;
	}, { singleShot: !0 }), (0, x.useEffect)(() => {
		ie.Focus(), E(!1);
	}, []), (0, x.useEffect)(() => {
		S(f != "" && m.length > 0 && C);
	}, [
		f,
		m,
		C
	]), (0, x.useEffect)(() => {
		w(m.length == 0 || m.every((e) => bn(e)));
	}, [m]);
	function ae(e) {
		p(e?.target.value);
	}
	function oe() {
		b ? (t(n, {
			title: f,
			filters: m,
			filtersMode: g,
			categoriesToInclude: v,
			autoHide: D,
			sortByOverride: N,
			visibleToOthers: k,
			displayAsCollection: j
		}), e()) : C ? B.toast(te, F("MESSAGE_ADD_TAB_NAMEE_AND_FILTER", "Please add a name and at least 1 filter")) : B.toast(te, F("MESSAGE_INCOMPLETE_FILTERS", "Some filters are incomplete"));
	}
	function se() {
		let e = [...m];
		e.push({
			type: "collection",
			inverted: !1,
			params: hn().collection
		}), h(e);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(Pn, { tabMasterManager: a }, /* @__PURE__ */ window.SP_REACT.createElement(vr, null), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-modal-scope" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ConfirmModal, {
		bAllowFullSize: !0,
		onCancel: e,
		onEscKeypress: e,
		strTitle: r ? `${F("TITLE_MODIFYING_TAB", "Modifying")}: ${r}` : F("TITLE_CREATE_TAB", "Create New Tab"),
		onOK: oe,
		strOKButtonText: ne
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		onMenuButton: oe,
		onMenuActionDescription: ne
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		style: { padding: "10px 0px" },
		className: "name-field"
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.Field, { description: /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		style: { paddingBottom: "6px" },
		className: R.quickAccessControlsClasses.PanelSectionTitle
	}, F("LABEL_TAB_NAME", "Name")), re) })), /* @__PURE__ */ window.SP_REACT.createElement(io, {
		categoriesToInclude: v,
		setCategoriesToInclude: y
	}), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "field-item-container" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ToggleField, {
		label: F("LABEL_AUTOMATICALLY_HIDE_TAB", "Automatically hide tab if empty"),
		checked: D,
		onChange: (e) => O(e),
		bottomSeparator: "thick"
	}), /* @__PURE__ */ window.SP_REACT.createElement(R.ToggleField, {
		label: F("LABEL_OTHER_USERS_CAN_COPY_TAB", "Other users can copy this tab"),
		checked: k,
		onChange: (e) => A(e),
		bottomSeparator: "thick"
	}), /* @__PURE__ */ window.SP_REACT.createElement(R.ToggleField, {
		label: F("LABEL_DISPLAY_TAB_AS_COLLECTION", "Display this tab as a Steam Collection"),
		checked: j,
		onChange: (e) => M(e),
		bottomSeparator: "thick"
	}), /* @__PURE__ */ window.SP_REACT.createElement(R.DropdownItem, {
		label: F("LABEL_SORT_TAB_BY", "Sort apps by"),
		rgOptions: ee,
		selectedOption: N,
		onChange: (e) => P(e.data),
		bottomSeparator: "thick"
	})), /* @__PURE__ */ window.SP_REACT.createElement(no, {
		groupFilters: m,
		setGroupFilters: h,
		addFilter: se,
		groupLogicMode: g,
		setGroupLogicMode: _,
		canAddFilter: C,
		collapseFilters: !!r
	})))));
}, io = ({ categoriesToInclude: e, setCategoriesToInclude: t }) => {
	let [n, r] = (0, x.useState)(!1), i = Bt(e), a = Object.entries(i).filter(([e]) => e !== "hidden").some(([e, t]) => t), o = [];
	for (let e in i) i[e] && (e !== "hidden" || a) && o.push(ze(e));
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("div", null, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		style: { margin: "0 calc(-12px - 1.4vw)" },
		onActivate: () => {
			Ut("/sounds/deck_ui_misc_01.wav"), r((e) => !e);
		},
		noFocusRing: !0,
		className: "highlight-on-focus",
		focusClassName: "start-focused"
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		margin: "0 calc(12px + 1.4vw)",
		padding: "0 16px"
	} }, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		display: "flex",
		alignItems: "center"
	} }, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		style: {
			padding: "12px 0",
			float: "left"
		},
		className: R.quickAccessControlsClasses.PanelSectionTitle
	}, F("LABEL_INCLUDE_IN_TAB", "Include in tab")), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		padding: "12px 40px",
		flex: "1"
	} }, !n && /* @__PURE__ */ window.SP_REACT.createElement("span", { style: {
		fontSize: "12px",
		lineHeight: "12px",
		color: "#8b929a"
	} }, o.join(", "))), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		paddingRight: "10px",
		display: "flex",
		alignItems: "center"
	} }, /* @__PURE__ */ window.SP_REACT.createElement(Zn, { style: {
		transform: n ? "" : "rotate(90deg)",
		transition: "transform 0.2s ease-in-out"
	} }))))), n && /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { padding: "10px 18px" } }, Object.entries(i).map(([e, n]) => {
		let r = ze(e);
		return e === "hidden" && !a ? null : /* @__PURE__ */ window.SP_REACT.createElement(R.DialogCheckbox, {
			checked: n,
			onChange: (n) => {
				Ut(n ? "/sounds/deck_ui_switch_toggle_on.wav" : "/sounds/deck_ui_switch_toggle_off.wav"), t((t) => zt(t, { [e]: n }));
			},
			label: r
		});
	}))), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		position: "relative",
		left: "calc(16px - 1.8vw)",
		right: "calc(16px - 1.8vw)",
		height: "1px",
		background: "#ffffff1a"
	} }));
};
function ao(e) {
	(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(ro, {
		onConfirm: (t, n) => {
			e.createCustomTab(n.title, e.getTabs().visibleTabsList.length, n.filters, n.filtersMode, n.categoriesToInclude, n.autoHide, n.visibleToOthers, n.displayAsCollection, n.sortByOverride);
		},
		tabFilters: [],
		tabMasterManager: e,
		filtersMode: "and",
		categoriesToInclude: z.games,
		autoHide: !1,
		visibleToOthers: !1,
		displayAsCollection: !1,
		sortBy: -1
	}));
}
function oo(e, t) {
	(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(ro, {
		onConfirm: (e, n) => {
			t.createCustomTab(n.title, t.getTabs().visibleTabsList.length, n.filters, n.filtersMode, n.categoriesToInclude, n.autoHide, n.visibleToOthers, n.displayAsCollection, n.sortByOverride);
		},
		tabMasterManager: t,
		tabFilters: structuredClone(e.filters),
		filtersMode: e.filtersMode,
		categoriesToInclude: e.categoriesToInclude,
		autoHide: e.autoHide,
		visibleToOthers: e.visibleToOthers,
		displayAsCollection: e.displayAsCollection,
		sortBy: e.sortByOverride
	}));
}
function so(e, t) {
	(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(ro, {
		onConfirm: (e, n) => {
			t.updateCustomTab(e, n);
		},
		tabId: e.id,
		tabTitle: e.title,
		tabFilters: e.filters,
		tabMasterManager: t,
		filtersMode: e.filtersMode,
		categoriesToInclude: e.categoriesToInclude,
		autoHide: e.autoHide,
		visibleToOthers: e.visibleToOthers,
		displayAsCollection: e.displayAsCollection,
		sortBy: e.sortByOverride
	}));
}
//#endregion
//#region src/components/styles/LibraryMenuStyles.tsx
var co = ({}) => /* @__PURE__ */ window.SP_REACT.createElement("style", null, `
      .${R.gamepadContextMenuClasses.BasicContextMenuHeader} {
        margin: 0;
      }

      .tab-master-library-menu-reorderable-group .tab-label-cont {
        display: flex;
        align-items: center;
        margin-left: 12px;
      }
      
      .tab-master-library-menu-reorderable-group .tab-label-cont .tab-label {
        margin-right: 5px;
      }
    `), lo = ({ tabMasterManager: e, isMicroSDeckInstalled: t }) => /* @__PURE__ */ window.SP_REACT.createElement(R.Menu, { label: F("LABEL_QUICK_TABS", "Quick Tabs") }, /* @__PURE__ */ window.SP_REACT.createElement(uo, {
	tabMasterManager: e,
	isMicroSDeckInstalled: t
})), uo = ({ tabMasterManager: e, isMicroSDeckInstalled: t }) => {
	function n(e) {
		return { onOKActionDescription: `${F("LABEL_CREATE_TAB", "Create Tab")} "${e}"` };
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, Hn.map((r) => {
		switch (r) {
			case "collection": return /* @__PURE__ */ window.SP_REACT.createElement(R.MenuGroup, { label: F("LABEL_COLLECTION", "Collection") }, collectionStore.userCollections.concat([{
				displayName: F("GameList_Category_Hidden", "Hidden", !0),
				id: "hidden"
			}]).map(({ displayName: t, id: i }) => /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
				onClick: () => e.createPresetTab(r, t, i, t),
				...n(t)
			}, t)));
			case "installation": return /* @__PURE__ */ window.SP_REACT.createElement(R.MenuGroup, { label: "Installation" }, [F("LibraryTab_Installed", "Installed", !0), F("LABEL_NOT_INSTALLED", "Not Installed")].map((t) => /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
				onClick: () => e.createPresetTab(r, t, t === F("LibraryTab_Installed", "Installed", !0)),
				...n(t)
			}, t)));
			case "deck compatibility": return /* @__PURE__ */ window.SP_REACT.createElement(R.MenuGroup, { label: F("LABEL_DECK_COMPATIBILITY", "Deck Compatibility") }, [
				0,
				1,
				2,
				3
			].map((t) => {
				let i = xn(t);
				return /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
					onClick: () => e.createPresetTab(r, i, t),
					...n(i)
				}, i);
			}));
			case "steamos compatibility": return /* @__PURE__ */ window.SP_REACT.createElement(R.MenuGroup, { label: F("LABEL_MACHINE_COMPAT_FILTER", "SteamOS Compatibility") }, [
				0,
				1,
				2
			].map((t) => {
				let i = Sn(t);
				return /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
					onClick: () => e.createPresetTab(r, i, t),
					...n(i)
				}, i);
			}));
			case "platform": return /* @__PURE__ */ window.SP_REACT.createElement(R.MenuGroup, { label: "Platform" }, ["steam", "nonSteam"].map((t) => {
				let i = t === "nonSteam" ? F("LibraryTab_NonSteam", "Non-Steam", !0) : "Steam";
				return /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
					onClick: () => e.createPresetTab(r, i, t),
					...n(i)
				}, i);
			}));
			case "micro sd card": return /* @__PURE__ */ window.SP_REACT.createElement(R.MenuGroup, {
				label: F("LABEL_MICROSD_CARD", "Micro SD Card"),
				disabled: !t
			}, /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
				onClick: () => e.createPresetTab(r, F("LABEL_PRESET_TITLE_INSERTED_CARD", "Inserted Card")),
				...n(F("LABEL_INSERTED_CARD", "Inserted Card"))
			}, F("LABEL_INSERTED_CARD", "Inserted Card")), /* @__PURE__ */ window.SP_REACT.createElement(R.MenuGroup, { label: F("LABEL_SPECIFIC_CARD", "Specific Card") }, window.MicroSDeck?.CardsAndGames.map(([t]) => {
				let i = t.name || t.uid;
				return /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
					onClick: () => e.createPresetTab(r, i, t.uid),
					...n(i)
				}, i);
			})));
			default:
				let i = ze(r);
				return /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
					onClick: () => e.createPresetTab(r, i),
					...n(i)
				}, i);
		}
	}));
}, fo = ({ tabContainer: e, microSDeckDisabled: t, style: n }) => /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
	display: "flex",
	alignItems: "center",
	width: "100%",
	...n
} }, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginRight: "5px" } }, e.title), e.filters ? e.dependsOnMicroSDeck ? /* @__PURE__ */ window.SP_REACT.createElement(Dt, { fill: t ? "#92939b61" : "currentColor" }) : /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null) : /* @__PURE__ */ window.SP_REACT.createElement(We, null), e.position !== -1 && e.autoHide && e.collection.visibleApps.length === 0 && /* @__PURE__ */ window.SP_REACT.createElement(Qn, { style: { marginLeft: "auto" } })), po = ({}) => /* @__PURE__ */ window.SP_REACT.createElement("style", null, `
      .tab-master-tab-profile-modal-scope .${R.gamepadDialogClasses.GamepadDialogContent} .DialogHeader {
        margin-left: 15px;
      }

      .tab-master-tab-profile-modal-scope .${R.gamepadDialogClasses.ModalPosition} > .${R.gamepadDialogClasses.GamepadDialogContent} {
        background: radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%);
      }
      
      /* The button item */
      .tab-master-tab-profile-modal-scope .styled-btn {
        padding: 0 !important;
      }
      .tab-master-tab-profile-modal-scope .styled-btn .${R.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      .tab-master-tab-profile-modal-scope .styled-btn .${R.gamepadDialogClasses.FieldChildrenInner} {
        width: 100%;
      }
      .tab-master-tab-profile-modal-scope .styled-btn .${R.gamepadDialogClasses.FieldChildrenWithIcon} {
        width: 100%;
      }

      /* The button item wrapper */
      .tab-master-tab-profile-modal-scope .name-field .${R.gamepadDialogClasses.Field} {
        padding-bottom: 16px;
        padding-top: 0px;
      }
      .tab-master-tab-profile-modal-scope .${R.gamepadDialogClasses.Field}.${R.gamepadDialogClasses.WithBottomSeparatorStandard}::after {
        left: 1vw;
        right: 1vw;
      }
      
      /* Focused styles */
      .tab-master-tab-profile-modal-scope .start-focused {
        background-color: rgba(255, 255, 255, 0.15);
        animation-name: gamepaddialog_ItemFocusAnim-darkGrey_2zfa-;
      }
      .tab-master-tab-profile-modal-scope .highlight-on-focus {
        animation-duration: .5s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.17, 0.45, 0.14, 0.83);
      }
    `), mo = ({ height: e, fadeAmount: t, scrollBarWidth: n, alwaysFocus: r, noScrollDescription: i, children: a, actionDescriptionMap: o, ...s }) => {
	let c = t === void 0 || t === "" ? "10px" : t, l = n === void 0 || n === "" ? "4px" : n, [u, d] = (0, x.useState)(!1), f = (0, x.useRef)();
	(0, x.useLayoutEffect)(() => {
		let { current: e } = f;
		e && (() => {
			if (e) {
				let t = e.scrollHeight > e.clientHeight;
				d(t);
			}
		})();
	}, [a, e]);
	let p = /* @__PURE__ */ window.SP_REACT.createElement(R.ScrollPanelGroup, {
		ref: f,
		focusable: !1,
		style: {
			flex: 1,
			minHeight: 0
		}
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		key: "scrollable-window-focusable-element",
		noFocusRing: !0,
		actionDescriptionMap: Object.assign(i ? {} : {
			[R.GamepadButton.DIR_UP]: F("LABEL_SCROLL_UP", "Scroll Up"),
			[R.GamepadButton.DIR_DOWN]: F("LABEL_SCROLL_DOWN", "Scroll Down")
		}, o ?? {}),
		focusable: r || u,
		...s
	}, a));
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("style", null, `.modal-position-container .${R.gamepadDialogClasses.ModalPosition} {
          top: 0;
          bottom: 0;
          padding: 0;
        }
        .modal-position-container .${R.scrollPanelClasses.ScrollPanel}::-webkit-scrollbar {
          display: initial !important;
          width: ${l};
        }
        .modal-position-container .${R.scrollPanelClasses.ScrollPanel}::-webkit-scrollbar-thumb {
          border: 0;
        }
        .modal-position-container .${R.scrollPanelClasses.ScrollPanel}.gpfocuswithin::-webkit-scrollbar-thumb {
          background-color: currentColor;
        }`), /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "modal-position-container",
		style: {
			position: "relative",
			height: e,
			WebkitMask: `linear-gradient(to right , transparent, transparent calc(100% - ${l}), white calc(100% - ${l})), linear-gradient(to bottom, transparent, black ${c}, black calc(100% - ${c}), transparent 100%)`
		}
	}, u ? /* @__PURE__ */ window.SP_REACT.createElement(R.ModalPosition, { key: "scrollable-window-modal-position" }, p) : /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: `${R.gamepadDialogClasses.ModalPosition} ${R.gamepadDialogClasses.WithStandardPadding} Panel`,
		key: "modal-position"
	}, p)));
}, ho = ({ tabMasterManager: e, closeModal: t }) => {
	let [n, r] = (0, x.useState)(""), i = e.getTabs().visibleTabsList;
	function a(e) {
		r(e?.target.value);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(Pn, { tabMasterManager: e }, /* @__PURE__ */ window.SP_REACT.createElement(po, null), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-tab-profile-modal-scope" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ConfirmModal, {
		strTitle: F("TITLE_CREATE_NEW_TAB_PROFILE", "Create New Tab Profile"),
		onOK: () => {
			e.tabProfileManager?.write(n, i.map((e) => e.id)), t();
		},
		onCancel: () => t()
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		style: { padding: "4px 16px 1px" },
		className: "name-field"
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.Field, { description: /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		style: { paddingBottom: "6px" },
		className: R.quickAccessControlsClasses.PanelSectionTitle
	}, F("TITLE_PROFILE_NAME", "Profile Name")), /* @__PURE__ */ window.SP_REACT.createElement(R.TextField, {
		value: n,
		placeholder: F("PLACEHOLDER_TAB_PROFILE_NAME", "The name of this tab profile"),
		onChange: a
	})) })), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginRight: "-4px" } }, /* @__PURE__ */ window.SP_REACT.createElement(mo, {
		height: "180px",
		fadeAmount: "12px",
		onCancel: () => t()
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { padding: "0 20px" } }, i.map((e) => /* @__PURE__ */ window.SP_REACT.createElement(_o, null, /* @__PURE__ */ window.SP_REACT.createElement(fo, {
		tabContainer: e,
		microSDeckDisabled: !1
	})))))))));
}, go = ({ profileName: e, tabMasterManager: t, closeModal: n }) => {
	let { visibleTabsList: r, tabsMap: i } = t.getTabs(), a = t.tabProfileManager.tabProfiles[e].map((e) => i.get(e));
	return /* @__PURE__ */ window.SP_REACT.createElement(Pn, { tabMasterManager: t }, /* @__PURE__ */ window.SP_REACT.createElement(po, null), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-tab-profile-modal-scope" }, /* @__PURE__ */ window.SP_REACT.createElement(U, {
		strTitle: `${F("TITLE_OVERWRITING_PROFILE", "Overwriting Profile")}: ${e}`,
		onOK: () => {
			t.tabProfileManager?.write(e, r.map((e) => e.id)), n();
		},
		onCancel: () => n()
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", null, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		display: "flex",
		flexDirection: "row",
		padding: "0 20px",
		gap: "30px"
	} }, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: R.quickAccessControlsClasses.PanelSectionTitle,
		style: {
			flex: 1,
			paddingBottom: 0
		}
	}, F("TITLE_PROFILE_NEW_TABS", "New Tabs")), /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: R.quickAccessControlsClasses.PanelSectionTitle,
		style: {
			flex: 1,
			paddingBottom: 0
		}
	}, F("TITLE_PROFILE_EXISTING_TABS", "Existing Tabs"))), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		height: "1.5px",
		background: "#ffffff1a"
	} }), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginRight: "-4px" } }, /* @__PURE__ */ window.SP_REACT.createElement(mo, {
		height: "200px",
		fadeAmount: "12px",
		onCancel: () => n()
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		display: "flex",
		flexDirection: "row",
		padding: "0 20px",
		gap: "30px"
	} }, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { flex: 1 } }, r.map((e) => /* @__PURE__ */ window.SP_REACT.createElement(_o, null, /* @__PURE__ */ window.SP_REACT.createElement(fo, {
		tabContainer: e,
		microSDeckDisabled: !1
	})))), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { flex: 1 } }, a.map((e) => /* @__PURE__ */ window.SP_REACT.createElement(_o, null, /* @__PURE__ */ window.SP_REACT.createElement(fo, {
		tabContainer: e,
		microSDeckDisabled: !1
	})))))))))));
}, _o = ({ children: e }) => /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
	padding: "0 15px",
	height: "28px",
	display: "flex",
	fontSize: "small"
} }, e), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
	height: ".5px",
	background: "#ffffff1a"
} })), vo = ({ tabMasterManager: e }) => /* @__PURE__ */ window.SP_REACT.createElement(R.Menu, { label: F("LABEL_MANAGE_TAB_PROFILES", "Manage Tab Profiles") }, /* @__PURE__ */ window.SP_REACT.createElement(bo, { tabMasterManager: e })), yo = ({ tabMasterManager: e }) => /* @__PURE__ */ window.SP_REACT.createElement(R.MenuGroup, { label: F("LABEL_MANAGE_TAB_PROFILES", "Manage Tab Profiles") }, /* @__PURE__ */ window.SP_REACT.createElement(bo, { tabMasterManager: e })), bo = ({ tabMasterManager: e }) => {
	let [t, n] = (0, x.useState)(!0);
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, { onClick: () => (0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(ho, { tabMasterManager: e })) }, F("TITLE_CREATE_PROFILE", "Create Profile")), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: R.gamepadContextMenuClasses.ContextMenuSeparator }), Object.keys(e.tabProfileManager?.tabProfiles ?? {}).map((t) => /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
		onClick: () => e.tabProfileManager?.apply(t, e),
		actionDescriptionMap: {
			[R.GamepadButton.OK]: F("LABEL_APPLY_PROFILE", "Apply Profile"),
			[R.GamepadButton.SECONDARY]: F("LABEL_DELETE_PROFILE", "Delete Profile"),
			[R.GamepadButton.OPTIONS]: F("LABEL_OVERWRITE_PROFILE", "Overwrite Profile")
		},
		onSecondaryButton: () => (0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(U, {
			onOK: () => {
				e.tabProfileManager?.delete(t), n((e) => !e);
			},
			strTitle: `${F("TITLE_DELETE_PROFILE", "Deleting Profile")}: ${t}`
		}, F("MESSAGE_CONFIRM_DELETE_PROFILE", "Are you sure you want to delete this profile?"))),
		onOptionsButton: () => (0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(go, {
			profileName: t,
			tabMasterManager: e
		}))
	}, t)));
}, xo = (0, R.findModuleExport)((e) => {
	if (e?.toString().includes("\"#GameAction_NewCollectionDialogTitle\"")) return e;
}), So = (e) => xo(window, e, "context-menu"), Co = ({ closeMenu: e, selectedTabId: t, tabMasterManager: n }) => {
	let r = H.isInstallOk();
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Menu, { label: /* @__PURE__ */ window.SP_REACT.createElement("div", null, /* @__PURE__ */ window.SP_REACT.createElement("h3", { style: { margin: 0 } }, "Tab Master"), /* @__PURE__ */ window.SP_REACT.createElement("small", null, n.getTabs().tabsMap.get(t)?.title)) }, /* @__PURE__ */ window.SP_REACT.createElement(co, null), /* @__PURE__ */ window.SP_REACT.createElement(Pn, { tabMasterManager: n }, /* @__PURE__ */ window.SP_REACT.createElement(wo, {
		selectedTabId: t,
		closeMenu: e,
		isMicroSDeckInstalled: r
	})));
}, wo = ({ selectedTabId: e, closeMenu: t, isMicroSDeckInstalled: n }) => {
	let { tabsMap: r, visibleTabsList: i, hiddenTabsList: a, tabMasterManager: o } = Nn(), s = o.getTabs().tabsMap.get(e)?.title, c = r.get(e), l = !!c?.filters;
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
		className: R.gamepadContextMenuClasses.Positive,
		onOKActionDescription: F("LABEL_ADD_TAB", "Add Tab"),
		onClick: () => ao(o)
	}, "Add Tab"), /* @__PURE__ */ window.SP_REACT.createElement(R.MenuGroup, { label: F("LABEL_QUICK_TABS", "Quick Tabs") }, /* @__PURE__ */ window.SP_REACT.createElement(uo, {
		tabMasterManager: o,
		isMicroSDeckInstalled: n
	})), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: R.gamepadContextMenuClasses.ContextMenuSeparator }), /* @__PURE__ */ window.SP_REACT.createElement(yo, { tabMasterManager: o }), /* @__PURE__ */ window.SP_REACT.createElement(R.MenuGroup, { label: F("LABEL_REORDER_TABS", "Reorder Tabs") }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		style: {
			width: "240px",
			background: "#23262e",
			margin: "0"
		},
		className: "tab-master-library-menu-reorderable-group",
		onOKActionDescription: ""
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.ReorderableList, {
		entries: i.map((e) => ({
			label: /* @__PURE__ */ window.SP_REACT.createElement(fo, {
				tabContainer: e,
				microSDeckDisabled: !n,
				style: { marginLeft: "12px" }
			}),
			position: e.position,
			data: { id: e.id }
		})),
		onSave: (e) => {
			let t = i.sort((e, t) => e.position - t.position).map((e) => e.id), n = e.map((e) => e.data.id);
			JSON.stringify(t) !== JSON.stringify(n) && o.reorderTabs(n);
		}
	}))), a.length > 0 && /* @__PURE__ */ window.SP_REACT.createElement(R.MenuGroup, {
		label: F("LABEL_UNHIDE_TABS", "Unhide Tabs"),
		disabled: a.length === 0
	}, /* @__PURE__ */ window.SP_REACT.createElement(To, {
		onSelectTab: (e) => o.showTab(e),
		hiddenTabsList: a,
		isMicroSDeckInstalled: n
	})), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: R.gamepadContextMenuClasses.ContextMenuSeparator }), l && /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
		onOKActionDescription: `${F("LABEL_EDIT_TAB", "Edit")} "${s}"`,
		onClick: () => so(c, o)
	}, F("LABEL_EDIT_TAB", "Edit")), l && /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
		onOKActionDescription: `${F("LABEL_DUPLICATE_TAB", "Duplicate")} "${s}"`,
		onClick: () => oo(c, o)
	}, F("LABEL_DUPLICATE_TAB", "Duplicate")), l && /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
		onOKActionDescription: F("LABEL_TAB_SNAPSHOT_DESCRIPTION", "Create a collection from this tab"),
		onClick: () => {
			let e = c;
			e.buildCollection(), So(e.collection.allApps);
		}
	}, F("LABEL_SNAPSHOT_TAB", "Snapshot")), /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
		onClick: () => o.hideTab(e),
		onOKActionDescription: `${F("LABEL_HIDE_TAB", "Hide")} "${s}"`
	}, F("LABEL_HIDE_TAB", "Hide")), l && /* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, {
		onOKActionDescription: `${F("LABEL_DELETE_TAB", "Delete")} "${s}"`,
		className: R.gamepadContextMenuClasses.Destructive,
		onClick: () => {
			(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(U, {
				onOK: () => {
					o.deleteTab(e), t();
				},
				closeModal: () => {},
				strTitle: F("TITLE_ALL_CAPS_WARNING", "WARNING!")
			}, F("MESSAGE_DELETE_CANT_BE_UNDONE", "Are you sure you want to delete this Tab? This can't be undone."), " "));
		}
	}, F("LABEL_DELETE_TAB", "Delete")));
}, To = ({ hiddenTabsList: e, isMicroSDeckInstalled: t, onSelectTab: n }) => {
	let [r, i] = (0, x.useState)(!0);
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, e.map((e) => /* @__PURE__ */ window.SP_REACT.createElement(Eo, {
		onOKActionDescription: F("LABEL_TAB_UNHIDE", "Unhide"),
		onClick: () => {
			n(e.id), i((e) => !e);
		}
	}, /* @__PURE__ */ window.SP_REACT.createElement(fo, {
		tabContainer: e,
		microSDeckDisabled: !t
	}))));
}, Eo = ({ onClick: e, disabled: t, className: n, children: r, ...i }) => /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
	className: `${R.gamepadContextMenuClasses.contextMenuItem} contextMenuItem` + (n ? ` ${n}` : "") + (t ? " disabled" : ""),
	focusClassName: R.gamepadContextMenuClasses.Focused,
	onActivate: t ? void 0 : e,
	noFocusRing: !0,
	...i
}, r), Do, Oo = (e) => Gt("/library", (t) => ((0, R.afterPatch)(t.children, "type", (t, n) => {
	if (!n?.type) return V.raiseError("Failed to find outer library element to patch"), n;
	let [r, i] = (0, x.useState)(!1), a, o;
	(0, x.useEffect)(() => (e.registerRerenderLibraryHandler(() => i(!r)), a.unpatch()));
	let s = H.isInstallOk(!0);
	return (0, R.afterPatch)(n, "type", (t, n) => {
		if (!n?.type) return V.raiseError("Failed to find inner library element to patch"), n;
		if (o) n.type = o;
		else {
			let t = n.type.type;
			(0, R.wrapReactType)(n), a = (0, R.replacePatch)(n.type, "type", (n) => {
				let r = window.SP_REACT?.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentDispatcher?.current || Object.values(window.SP_REACT?.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE).find((e) => e?.useEffect), i = r.useMemo;
				r.useMemo = (t, n) => i(() => {
					let r = t(), i = Array.isArray(r) && Array.isArray(r[0]), a = i ? r[0] : r;
					if (!Array.isArray(a)) return V.raiseError("No array returned when trying to retrieve default tabs"), r;
					let [o, c, l] = n, u = {
						eSortBy: o,
						setSortBy: c,
						showSortingContextMenu: l
					}, d = n.find((e) => typeof e?.Matches == "function");
					if (d === void 0) return V.raiseError("Couldn't find collection filter function to copy from"), r;
					let f = a.find((e) => e?.id === "AllGames");
					if (f === void 0) return V.raiseError("Couldn't find default tab \"AllGames\" to copy from"), r;
					let p = Do ?? (0, R.findInReactTree)(f.content, (e) => e.type && e.type.toString?.().includes("Library_FilteredByHeader"))?.type;
					if (p === void 0) return V.raiseError("Couldn't find Tab component"), r;
					Do ||= p;
					let m = f.content.type._context, h;
					return h = e.hasSettingsLoaded ? e.getTabs().visibleTabsList.flatMap((t) => {
						if (t.filters) {
							let n = {
								...f.footer ?? {},
								onMenuButton: ko(t.id, e),
								onMenuActionDescription: "Tab Master"
							};
							return t.getActualTab(p, m, u, n, d, s) || [];
						}
						return a.find((n) => n.id === t.id && (n.footer ||= {}, n.footer.onMenuActionDescription = "Tab Master", n.footer.onMenuButton = ko(t.id, e), !0)) ?? [];
					}) : a, i ? [h, r[1]] : h;
				}, n);
				let a = t(...n);
				return r.useMemo = i, a;
			}), o = n.type;
		}
		return n;
	}), n;
}), t));
function ko(e, t) {
	return () => {
		let n;
		n = (0, R.showContextMenu)(/* @__PURE__ */ window.SP_REACT.createElement(Co, {
			selectedTabId: e,
			tabMasterManager: t,
			closeMenu: () => n.Hide()
		}));
	};
}
//#endregion
//#region src/patches/SettingsPatch.tsx
var Ao = (e) => (0, R.findInTree)(e, (e) => e?.type?.toString?.().includes("#HomeSettings_ShowingLess"), { walkable: [
	"props",
	"children",
	"pages",
	"content"
] }), jo = (e) => Gt("/settings", (t) => ((0, R.afterPatch)(t.children, "type", (t, n) => {
	if (!n?.type) return V.raiseError("Failed to find settings element to patch"), n;
	let r, i;
	return r ? (n.type = r, n) : ((0, R.afterPatch)(n, "type", (t, n) => {
		let r = n?.props?.children?.props?.pages?.find((e) => e.route === "/settings/home");
		r || V.warn("Location of \"home\" page setting has changed");
		let a = Ao(r ?? n);
		return a ? i ? (a.type = i, n) : ((0, R.afterPatch)(a, "type", (t, n) => {
			let r = (0, R.findInReactTree)(n, (e) => e?.type?.toString?.().includes("HomeSettings"));
			return r === void 0 ? (V.raiseError("Couldn't find manage button component to patch in settings"), n) : ((0, R.afterPatch)(r, "type", (t, n) => {
				if (n && !n.props?.onClick) return V.raiseError("Couldn't patch button onClick fn in settings"), n;
				if (!n) return n;
				let r = n.props.onClick;
				return n.props.onClick = () => {
					e.getTabs().tabsMap.get("Collections").position === -1 ? (0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(R.ConfirmModal, {
						strOKButtonText: F("LABEL_COLLECTIONS_UNHIDE_MANAGE", "Unhide and Manage"),
						onOK: () => {
							e.showTab("Collections"), r();
						},
						bDestructiveWarning: !0,
						strTitle: F("TITLE_COLLECTIONS_HIDDEN", "Collections Tab is hidden by Tab Master!")
					}, F("MESSAGE_COLLECTIONS_UNHIDE", "In order to manage hidden apps, Tab Master must unhide your Collections tab."))) : r();
				}, n;
			}), n);
		}), i = a.type, n) : (V.raiseError("Couldn't find home element to patch in settings"), n);
	}), r = n.type, n);
}), t));
//#endregion
//#region node_modules/.pnpm/react-icons@4.12.0_react@19.1.0/node_modules/react-icons/pi/index.esm.js
function Mo(e) {
	return D({
		tag: "svg",
		attr: {
			viewBox: "0 0 256 256",
			fill: "currentColor"
		},
		child: [{
			tag: "path",
			attr: { d: "M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm104,40H40a12,12,0,0,0,0,24H144a12,12,0,0,0,0-24Zm88,0H220V168a12,12,0,0,0-24,0v12H184a12,12,0,0,0,0,24h12v12a12,12,0,0,0,24,0V204h12a12,12,0,0,0,0-24Z" }
		}]
	})(e);
}
//#endregion
//#region src/components/styles/QamStyles.tsx
var No = "tab_undefined", Po = ({}) => /* @__PURE__ */ window.SP_REACT.createElement("style", null, `
      .${No}.${R.scrollPanelClasses.ScrollPanel} {
        scroll-padding: 48px 0px 0px;
      }
        
      .tab-master-scope {
        width: inherit;
        height: inherit;

        flex: 1 1 1px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: stretch;
      }

      .tab-master-scope .${R.quickAccessControlsClasses.PanelSection} {
        padding: 0px;
      }
      .tab-master-scope .${R.quickAccessControlsClasses.PanelSectionTitle} {
        margin-top: 3px;
        margin-left: 5px;
      }

      .tab-master-scope .${R.gamepadDialogClasses.FieldChildrenInner} {
        margin: 0px 16px;
      }
      .tab-master-scope .${R.gamepadDialogClasses.FieldLabel} {
        margin-left: 16px;
      }

      .tab-master-scope .add-tab-btn .${R.gamepadDialogClasses.Field}.${R.gamepadDialogClasses.WithBottomSeparatorStandard}::after {
        display: none;
      }
      .tab-master-scope .add-tab-btn .${R.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      .tab-master-scope .add-tab-btn .${R.gamepadDialogClasses.FieldChildrenInner} {
        width: calc(100% - 32px);
      }

      .tab-master-scope .seperator {
        width: 100%;
        height: 1px;
        background: #23262e;
      }

      .tab-master-scope .hidden-tab-btn button.${R.gamepadDialogClasses.Button}.DialogButton {
        min-width: 50px;
      }
      .tab-master-scope .hidden-tab-btn .${R.gamepadDialogClasses.FieldChildrenInner} {
        min-width: 50px;
        margin-right: 8px;
      }


      .tab-master-scope .tab-label-cont {
        display: flex;
        align-items: center;
      }

      .tab-master-scope .tab-label-cont .tab-label {
        margin-right: 5px;
      }

      .tab-master-scope .no-sep .${R.gamepadDialogClasses.FieldLabel},
      .tab-master-scope .no-sep .${R.gamepadDialogClasses.Field}.${R.gamepadDialogClasses.WithBottomSeparatorStandard}::after,
      .tab-master-scope .no-sep.${R.gamepadDialogClasses.Field}.${R.gamepadDialogClasses.WithBottomSeparatorStandard}::after {
        display: none
      }

      .tab-master-scope .no-sep .${R.gamepadDialogClasses.FieldChildrenInner} {
        width: 100%;
      }
      .tab-master-scope .no-sep .${R.gamepadDialogClasses.FieldChildrenWithIcon} {
        width: calc(100% - 10px);
      }

      .tab-master-scope .notice-field-cont .${R.gamepadDialogClasses.Field} {
        padding-top: 0;
      }
      .tab-master-scope .notice-field-cont .${R.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
    `), Fo = ({ intallState: e, pluginVersion: t, libVersion: n, style: r }) => {
	let i = "", a = "";
	switch (e) {
		case en.VERSION_TOO_LOW:
		case en.VERSION_TOO_HIGH:
			i = F("MESSAGE_MICROSDECK_PROBLEM_VERSION_MISSMATCH", "You have some tabs that rely on the MicroSDeck plugin, but a version mismatch was detected. TabMaster expects version {libVersion}, but version {pluginVersion} is installed.").replace("{libVersion}", n).replace("{pluginVersion}", t), a = e === en.VERSION_TOO_LOW ? F("MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_LOW", "Please update MicroSDeck to specified version.") : F("MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_TOO_HIGH", "Please update TabMaster if available or install specified version of MicroSDeck.");
			break;
		case en.VERSION_UNKOWN:
			i = F("MESSAGE_MICROSDECK_PROBLEM_VERSION_UNKOWN", "You have some tabs that rely on the MicroSDeck plugin, but TabMaster couldn't correctly determine which version it expects or which version is installed."), a = F("MESSAGE_MICROSDECK_RECOMMENDATION_VERSION_UNKOWN", "Please try updating TabMaster or MicroSDeck.");
			break;
		case en.NOT_INSTALLED: i = F("MESSAGE_MICROSDECK_PROBLEM_NOT_INSTALLED", "You have some tabs that rely on the MicroSDeck plugin, but it is not installed."), a = F("MESSAGE_MICROSDECK_RECOMMENDATION_NOT_INSTALLED", "Please install MicroSDeck for these tabs to work.");
	}
	return /* @__PURE__ */ window.SP_REACT.createElement("div", { style: r }, /* @__PURE__ */ window.SP_REACT.createElement("div", null, i), /* @__PURE__ */ window.SP_REACT.createElement("div", null, a), /* @__PURE__ */ window.SP_REACT.createElement("div", null, F("MESSAGE_MICROSDECK_NOTICE_CONCLUSION", "Until then, these tabs will not be displayed in the library.")));
}, Io = ({ onOk: e, children: t }) => {
	let n = F("MESSAGE_RESET", "Reset");
	return /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "notice-field-cont",
		style: { paddingBottom: "10px" }
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.Field, { description: /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		margin: "8px",
		fontSize: "12px"
	} }, /* @__PURE__ */ window.SP_REACT.createElement("h3", null, /* @__PURE__ */ window.SP_REACT.createElement($e, {
		style: {
			height: ".8em",
			marginRight: "5px"
		},
		fill: "red"
	}), F("TITLE_CANT_LOAD_SETTINGS", "Cannot Load Settings")), /* @__PURE__ */ window.SP_REACT.createElement("div", null, F("MESSAGE_LOAD_SETTINGS_ERROR", "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected. Alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary.")), t, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		display: "flex",
		flexDirection: "column"
	} }, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
		style: {
			margin: "10px 8px 0px",
			width: "auto"
		},
		onClick: () => {
			(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(U, {
				onOK: e,
				strTitle: F("TITLE_RESET_TABS", "Reset Tabs")
			}, F("MESSAGE_RESET_TABS_WARNING", "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster.")));
		},
		onOKActionDescription: n
	}, n))) }));
}, Lo = ({ tabContainer: e, tabMasterManager: t }) => {
	let n = [/* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, { onSelected: () => t.hideTab(e.id) }, F("LABEL_HIDE_TAB", "Hide"))];
	return e.filters && (n.unshift(/* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, { onClick: () => {
		let t = e;
		t.buildCollection(), So(t.collection.allApps);
	} }, F("LABEL_SNAPSHOT_TAB", "Snapshot"))), n.unshift(/* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, { onSelected: () => oo(e, t) }, F("LABEL_DUPLICATE_TAB", "Duplicate"))), n.unshift(/* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, { onSelected: () => so(e, t) }, F("LABEL_EDIT_TAB", "Edit"))), n.push(/* @__PURE__ */ window.SP_REACT.createElement(R.MenuItem, { onSelected: () => {
		e.filters && (0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(U, {
			onOK: () => {
				t.deleteTab(e.id);
			},
			strTitle: F("TITLE_ALL_CAPS_WARNING", "WARNING!")
		}, F("MESSAGE_DELETE_CANT_BE_UNDONE", "Are you sure you want to delete this Tab? This can't be undone.")));
	} }, F("LABEL_DELETE_TAB", "Delete")))), /* @__PURE__ */ window.SP_REACT.createElement(R.Menu, { label: F("LABEL_TAB_ACTIONS", "Actions") }, n);
}, Ro = (e) => {
	let t = () => {
		(0, R.showContextMenu)(/* @__PURE__ */ window.SP_REACT.createElement(Lo, e));
	};
	return /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
		style: {
			height: "40px",
			minWidth: "40px",
			width: "40px",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			padding: "10px",
			marginRight: "8px"
		},
		onClick: t,
		onOKButton: t,
		onOKActionDescription: F("LABEL_OPEN_TAB_OPTIONS", "Open tab options")
	}, /* @__PURE__ */ window.SP_REACT.createElement(Ct, null));
}, zo = ({ isMicroSDeckInstalled: e }) => {
	let { visibleTabsList: t, hiddenTabsList: n, tabsMap: r, tabMasterManager: i } = Nn();
	function a({ entry: e }) {
		let t = r.get(e.data.id);
		return /* @__PURE__ */ window.SP_REACT.createElement(Ro, {
			tabContainer: t,
			tabMasterManager: i
		});
	}
	let o = t.map((t) => ({
		label: /* @__PURE__ */ window.SP_REACT.createElement(fo, {
			tabContainer: t,
			microSDeckDisabled: !e
		}),
		position: t.position,
		data: { id: t.id }
	}));
	return i.hasSettingsLoaded ? /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSection, { title: F("TITLE_TABS", "Tabs") }, /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "seperator" }), /* @__PURE__ */ window.SP_REACT.createElement(R.ReorderableList, {
		entries: o,
		interactables: a,
		onSave: (e) => {
			i.reorderTabs(e.map((e) => e.data.id));
		}
	})), /* @__PURE__ */ window.SP_REACT.createElement(R.PanelSection, { title: F("TITLE_HIDDEN_TABS", "Hidden Tabs") }, /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "seperator" }), n.map((t) => /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "hidden-tab-btn" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ButtonItem, {
		label: /* @__PURE__ */ window.SP_REACT.createElement(fo, {
			tabContainer: t,
			microSDeckDisabled: !e
		}),
		onClick: () => i.showTab(t.id),
		onOKActionDescription: F("LABEL_UNHIDE_TAB", "Unhide Tab")
	}, F("MESSAGE_SHOW_TAB", "Show")))))) : /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%"
	} }, /* @__PURE__ */ window.SP_REACT.createElement("img", {
		alt: "Loading...",
		src: "/images/steam_spinner.png",
		style: { width: "150px" }
	}));
}, Bo = ({ onDismiss: e, children: t }) => /* @__PURE__ */ window.SP_REACT.createElement("div", {
	className: "notice-field-cont",
	style: { paddingBottom: "10px" }
}, /* @__PURE__ */ window.SP_REACT.createElement(R.Field, { description: /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
	margin: "8px",
	fontSize: "12px"
} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
	onActivate: () => {},
	onSecondaryButton: e,
	onSecondaryActionDescription: F("LABEL_CLEAR_ERROR", "Clear Error")
}, /* @__PURE__ */ window.SP_REACT.createElement("h3", null, /* @__PURE__ */ window.SP_REACT.createElement($e, {
	style: {
		height: ".8em",
		marginRight: "5px"
	},
	fill: "red"
}), F("MESSAGE_TABMASTER_ERROR", "Tab Master encountered an error")), t)) })), Vo = ({}) => /* @__PURE__ */ window.SP_REACT.createElement("style", null, `
      .tab-master-shared-tabs-modal .${R.quickAccessControlsClasses.PanelSection} {
        margin: 0px;
        padding: 0px;
      }
      .tab-master-shared-tabs-modal .${R.quickAccessControlsClasses.PanelSection}:first-of-type {
        margin: 0px;
      }

      .tab-master-shared-tabs-modal .${R.gamepadDialogClasses.ModalPosition} > .${R.gamepadDialogClasses.GamepadDialogContent} {
        background: radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%);
      }

      /* Filter section start */
      .tab-master-shared-tabs-modal .filter-start-cont {
        margin-left: -2.8vw;
        margin-right: -2.8vw;
        padding: 0;

        font-size: 14px;
      }
      .tab-master-shared-tabs-modal .filter-start-cont .filter-line {
        height: 2px;
        
        background: #23262e;
      }
      .tab-master-shared-tabs-modal .filter-start-cont .filter-accordion-arrow,
      .tab-master-shared-tabs-modal .filter-start-cont .filter-label {
        margin: 0px 5px;
        color: #343945;
      }
      
      /* Focused styles */
      .tab-master-shared-tabs-modal .start-focused {
        background-color: rgba(255, 255, 255, 0.15);
        animation-name: gamepaddialog_ItemFocusAnim-darkGrey_2zfa-;
      }
      .tab-master-shared-tabs-modal .highlight-on-focus {
        animation-duration: .5s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.17, 0.45, 0.14, 0.83);
      }
      .tab-master-shared-tabs-modal .filter-start-cont.start-focused .filter-line {
        background: #a9a9a9;
      }
      .tab-master-shared-tabs-modal .filter-start-cont.start-focused .filter-accordion-arrow,
      .tab-master-shared-tabs-modal .filter-start-cont.start-focused .filter-label {
        color: #a9a9a9;
      }

      .tab-master-shared-tabs-modal .spinnyboi {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        position: fixed;
        height: 100vh;
        top: 0;
        flex: 1;
        left: 0;
        right: 0;
        z-index: 6;
        background: #0E141B;
        transition: opacity ease-out 250ms, z-index 0s;
        will-change: opacity;
      }

      .tab-master-shared-tabs-modal .spinnyboi > img {
        transform: scale(0.75);
        transition: transform ease-out 300ms;
        will-change: transform;
        margin-top: calc(var(--basicui-header-height) * -1);
      }

      .tab-master-shared-tabs-modal .spinnyboi.loaded {
        z-index: -1;
        opacity: 0;
        transition-delay: 0ms, 300ms;
      }

      .tab-master-shared-tabs-modal .spinnyboi.loaded > img {
        transform: scale(0.6);
      }
    `), Ho = ({ user: e, tabs: t, isOpen: n, children: r }) => {
	let [i, a] = (0, x.useState)(n), o = t.length;
	function s() {
		Ut("/sounds/deck_ui_misc_01.wav"), a(!i);
	}
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
		width: "100%",
		padding: "0"
	} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		className: "filter-start-cont styled-btn highlight-on-focus",
		focusClassName: "start-focused",
		focusWithinClassName: "start-focused"
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.ButtonItem, { onClick: s }, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "filter-line",
		style: {
			width: "1.25rem",
			pointerEvents: "none"
		}
	}), /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "filter-label",
		style: {
			display: "flex",
			alignItems: "center",
			pointerEvents: "none"
		}
	}, /* @__PURE__ */ window.SP_REACT.createElement(pt, {
		size: "0.9em",
		style: {
			marginRight: "3px",
			color: "#009e0eb3"
		}
	}), e, " - ", o, " ", o === 1 ? F("LABEL_TAB", "Tab") : F("LABEL_TABS", "Tabs")), /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "filter-line",
		style: {
			flexGrow: "1",
			pointerEvents: "none"
		}
	}), /* @__PURE__ */ window.SP_REACT.createElement(Zn, {
		className: "filter-accordion-arrow",
		style: {
			transition: "transform 0.2s ease-in-out",
			transform: i ? "" : "rotate(90deg)",
			fontSize: "0.8em",
			pointerEvents: "none"
		}
	}), /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "filter-line",
		style: {
			width: "1.25rem",
			pointerEvents: "none"
		}
	}))), i && r);
}, Uo = ({ tab: e, closeModal: t, onConfirm: n }) => /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "post" }, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
	style: {
		borderRadius: "unset",
		margin: "0",
		padding: "10px",
		scrollMarginTop: "0"
	},
	onClick: () => {
		n(e), t();
	}
}, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
	display: "flex",
	flexDirection: "row",
	alignItems: "center"
} }, /* @__PURE__ */ window.SP_REACT.createElement(gt, { style: {
	paddingRight: "10px",
	width: "1em"
} }), /* @__PURE__ */ window.SP_REACT.createElement(R.Marquee, null, e.title, " - ", e.filters?.length ?? 0, " ", e.filters?.length === 1 ? F("LABEL_FILTER", "Filter") : F("LABEL_FILTER_PLURAL", "Filters"))))), Wo = ({ closeModal: e, onConfirm: t, tabMasterManager: n }) => {
	let [r, i] = (0, x.useState)(!0), [a, o] = (0, x.useState)({}), { currentUsersFriends: s } = (0, x.useMemo)(() => n.getFriendsAndTags(), [n]), c = (0, x.useMemo)(() => r ? [] : Array.from(Object.entries(a).map(([e, t]) => ({
		user: s.find((t) => t.steamid.toString() === e)?.name ?? e,
		tabs: Array.from(Object.values(t))
	}))), [a, s]);
	return (0, x.useEffect)(() => {
		B.getSharedTabs().then((e) => {
			e?.message || !e ? o({}) : o(e), i(!1);
		});
	}, []), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-shared-tabs-modal" }, /* @__PURE__ */ window.SP_REACT.createElement(Vo, null), /* @__PURE__ */ window.SP_REACT.createElement(R.ModalRoot, {
		onCancel: e,
		onEscKeypress: e,
		bDisableBackgroundDismiss: !1,
		bHideCloseIcon: !1
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogHeader, null, F("TITLE_SHARED_TABS", "Shared Tabs")), /* @__PURE__ */ window.SP_REACT.createElement(R.DialogBody, null, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogControlsSection, null, /* @__PURE__ */ window.SP_REACT.createElement("div", { className: (0, R.joinClassNames)("spinnyboi", r ? "" : "loaded") }, /* @__PURE__ */ window.SP_REACT.createElement("img", {
		alt: "Loading...",
		src: "/images/steam_spinner.png"
	})), c.map((n, r) => /* @__PURE__ */ window.SP_REACT.createElement(Ho, {
		user: n.user,
		tabs: n.tabs,
		isOpen: !0,
		key: r
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
		display: "flex",
		gap: "4px",
		flexDirection: "column",
		padding: "4px 0px"
	} }, n.tabs.map((n) => /* @__PURE__ */ window.SP_REACT.createElement(Uo, {
		tab: n,
		onConfirm: t,
		closeModal: e
	})))))))));
};
function Go(e) {
	(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(Wo, {
		onConfirm: (t) => {
			oo(new An(Bn(), "", t.position, t.filters, t.filtersMode ?? "and", t.categoriesToInclude, t.autoHide ?? !1, t.visibleToOthers ?? !1, t.sortByOverride ?? -1), e);
		},
		tabMasterManager: e
	}));
}
//#endregion
//#region src/components/qam/QuickAccessContent.tsx
var Ko = () => {
	SteamClient.System.RestartPC();
}, qo = () => {
	(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(R.ConfirmModal, {
		strTitle: F("TITLE_RESTART_STEAM", "Restart Steam?"),
		strCancelButtonText: F("LABEL_RESTART_LATER", "Later"),
		strOKButtonText: F("LABEL_RESTART_NOW", "Restart Now"),
		strDescription: F("MESSAGE_RESTART_REASON", "Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible"),
		onOK: Ko
	}));
}, Jo = ({}) => {
	let [e, t] = (0, x.useState)(H.noticeHidden), [n, r] = (0, x.useState)(V.errorFlag), { visibleTabsList: i, tabMasterManager: a } = Nn(), [o, s] = (0, x.useState)(a.invalidSettingsLoaded.isTrue), c = H.getInstallState(), l = c === en.VERSION_COMPATIBLE, u = !!i.find((e) => e.dependsOnMicroSDeck), d = async () => {
		let e = await B.openJSONFile();
		e instanceof Error ? V.raiseError("TabMaster encountered a problem opening the filepicker.", e.message) : (await B.restoreSettings(e), qo());
	}, f = async () => {
		let e = await B.openFolder();
		e instanceof Error ? V.raiseError("TabMaster encountered a problem opening the filepicker.", e.message) : await B.backupSettings(e) ? B.toast("Success!", "Settings backup finished.") : B.toast("Error!", "Settings backup failed.");
	}, p = async () => {
		await a.invalidSettingsLoaded.confirmReset(), s(!1);
	}, m = /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { wordWrap: "break-word" } }, F("MESSAGE_SUPPORT_REACHOUT", "Please reach out to"), /* @__PURE__ */ window.SP_REACT.createElement("br", null), /* @__PURE__ */ window.SP_REACT.createElement("a", { href: Xt }, Xt), /* @__PURE__ */ window.SP_REACT.createElement("br", null), F("MESSAGE_SUPPORT_OR", "or"), /* @__PURE__ */ window.SP_REACT.createElement("br", null), /* @__PURE__ */ window.SP_REACT.createElement("a", { href: Zt }, Zt), /* @__PURE__ */ window.SP_REACT.createElement("br", null), F("MESSAGE_SUPPORT_END", "for support."));
	return /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-scope" }, n && /* @__PURE__ */ window.SP_REACT.createElement(Bo, { onDismiss: () => r(V.errorFlag = !1) }, m), o && /* @__PURE__ */ window.SP_REACT.createElement(Io, { onOk: p }, m), u && !l && !e && /* @__PURE__ */ window.SP_REACT.createElement("div", {
		className: "notice-field-cont",
		style: { paddingBottom: "10px" }
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.Field, null, /* @__PURE__ */ window.SP_REACT.createElement(Fo, {
		intallState: c,
		pluginVersion: window.MicroSDeck?.Version ?? "",
		libVersion: $t,
		style: {
			margin: "8px",
			fontSize: "11px"
		}
	}), /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		display: "flex",
		flexDirection: "column"
	} }, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
		style: {
			margin: "10px 8px 0px",
			width: "auto"
		},
		onClick: () => {
			H.noticeHidden = !0, t(!0);
		}
	}, F("LABEL_HIDE_NOTICE", "Hide Notice"))))), /* @__PURE__ */ window.SP_REACT.createElement(Po, null), !o && /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, null, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		margin: "5px",
		marginTop: "0px"
	} }, F("MESSAGE_QAM_DESCRIPTION", "Here you can add, re-order, or remove tabs from the library.")), /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		childrenContainerWidth: "max",
		className: "no-sep"
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
		width: "100%",
		display: "flex"
	} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { className: "add-tab-btn" }, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
		disabled: !a.hasSettingsLoaded,
		style: {
			height: "40px",
			width: "42px",
			minWidth: 0,
			padding: "10px 12px",
			marginLeft: "auto",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		onClick: () => ao(a),
		onOKActionDescription: F("LABEL_ADD_TAB", "Add Tab")
	}, /* @__PURE__ */ window.SP_REACT.createElement(rt, { size: "1em" }))), /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		className: "add-tab-btn",
		style: { marginLeft: "10px" }
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
		disabled: !a.hasSettingsLoaded,
		style: {
			height: "40px",
			width: "42px",
			minWidth: 0,
			padding: "10px 12px",
			marginLeft: "auto",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		onOKActionDescription: F("LABEL_ADD_QUICK_TAB", "Add Quick Tab"),
		onClick: () => (0, R.showContextMenu)(/* @__PURE__ */ window.SP_REACT.createElement(lo, {
			tabMasterManager: a,
			isMicroSDeckInstalled: l
		}))
	}, /* @__PURE__ */ window.SP_REACT.createElement(Mo, { size: "1.4em" }))), /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		className: "add-tab-btn",
		style: { marginLeft: "10px" }
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
		disabled: !a.hasSettingsLoaded,
		style: {
			height: "40px",
			width: "42px",
			minWidth: 0,
			padding: "10px 12px",
			marginLeft: "auto",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		onOKActionDescription: F("LABEL_VIEW_SHARED_TABS", "View Shared Tabs"),
		onClick: () => Go(a)
	}, /* @__PURE__ */ window.SP_REACT.createElement(Ue, { size: "1.4em" }))), /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		className: "add-tab-btn",
		style: { marginLeft: "10px" }
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
		disabled: !a.hasSettingsLoaded,
		style: {
			height: "40px",
			width: "42px",
			minWidth: 0,
			padding: "10px 12px",
			marginLeft: "auto",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		onOKActionDescription: F("LABEL_RESTORE_SETTINGS", "Restore Settings"),
		onClick: d
	}, /* @__PURE__ */ window.SP_REACT.createElement(Ge, {
		size: "1em",
		rotate: 90
	}))), /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
		className: "add-tab-btn",
		style: { marginLeft: "10px" }
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
		disabled: !a.hasSettingsLoaded,
		style: {
			height: "40px",
			width: "42px",
			minWidth: 0,
			padding: "10px 12px",
			marginLeft: "auto",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			marginRight: "8px"
		},
		onOKActionDescription: "Backup Settings",
		onClick: f
	}, /* @__PURE__ */ window.SP_REACT.createElement(Ke, { size: "1em" }))))), /* @__PURE__ */ window.SP_REACT.createElement(zo, { isMicroSDeckInstalled: l }), u && !l && e && /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { onActivate: () => {} }, /* @__PURE__ */ window.SP_REACT.createElement(Fo, {
		intallState: c,
		pluginVersion: window.MicroSDeck?.Version ?? "",
		libVersion: $t,
		style: {
			margin: "8px",
			fontSize: "11px"
		}
	}))));
}, Yo = {
	height: "28px",
	width: "40px",
	minWidth: 0,
	padding: 0,
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}, Xo = ({ title: e, tabMasterManager: t }) => /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
	style: {
		display: "flex",
		padding: "0",
		flex: "auto",
		boxShadow: "none"
	},
	className: R.quickAccessMenuClasses.Title
}, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginRight: "auto" } }, e), /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
	disabled: !t.hasSettingsLoaded,
	onOKActionDescription: F("LABEL_MANAGE_TAB_PROFILES", "Manage Tab Profiles"),
	style: Yo,
	onClick: () => (0, R.showContextMenu)(/* @__PURE__ */ window.SP_REACT.createElement(vo, { tabMasterManager: t }))
}, /* @__PURE__ */ window.SP_REACT.createElement(Xe, { size: "0.9em" })), /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
	onOKActionDescription: F("LABEL_OPEN_SETTINGS", "Open Settings"),
	style: Yo,
	onClick: () => {
		R.Navigation.CloseSideMenus(), R.Navigation.Navigate("/tab-master-settings");
	}
}, /* @__PURE__ */ window.SP_REACT.createElement(St, { size: "0.9em" }))), Zo = /* @__PURE__ */ c({
	AElig: () => "Æ",
	AMP: () => "&",
	Aacute: () => "Á",
	Abreve: () => "Ă",
	Acirc: () => "Â",
	Acy: () => "А",
	Afr: () => $o,
	Agrave: () => "À",
	Alpha: () => "Α",
	Amacr: () => "Ā",
	And: () => "⩓",
	Aogon: () => "Ą",
	Aopf: () => ts,
	ApplyFunction: () => "⁡",
	Aring: () => "Å",
	Ascr: () => rs,
	Assign: () => "≔",
	Atilde: () => "Ã",
	Auml: () => "Ä",
	Backslash: () => "∖",
	Barv: () => "⫧",
	Barwed: () => "⌆",
	Bcy: () => "Б",
	Because: () => "∵",
	Bernoullis: () => "ℬ",
	Beta: () => "Β",
	Bfr: () => as,
	Bopf: () => ls,
	Breve: () => "˘",
	Bscr: () => "ℬ",
	Bumpeq: () => "≎",
	CHcy: () => "Ч",
	COPY: () => "©",
	Cacute: () => "Ć",
	Cap: () => "⋒",
	CapitalDifferentialD: () => "ⅅ",
	Cayleys: () => "ℭ",
	Ccaron: () => "Č",
	Ccedil: () => "Ç",
	Ccirc: () => "Ĉ",
	Cconint: () => "∰",
	Cdot: () => "Ċ",
	Cedilla: () => "¸",
	CenterDot: () => "·",
	Cfr: () => "ℭ",
	Chi: () => "Χ",
	CircleDot: () => "⊙",
	CircleMinus: () => "⊖",
	CirclePlus: () => "⊕",
	CircleTimes: () => "⊗",
	ClockwiseContourIntegral: () => "∲",
	CloseCurlyDoubleQuote: () => "”",
	CloseCurlyQuote: () => "’",
	Colon: () => "∷",
	Colone: () => "⩴",
	Congruent: () => "≡",
	Conint: () => "∯",
	ContourIntegral: () => "∮",
	Copf: () => "ℂ",
	Coproduct: () => "∐",
	CounterClockwiseContourIntegral: () => "∳",
	Cross: () => "⨯",
	Cscr: () => hs,
	Cup: () => "⋓",
	CupCap: () => "≍",
	DD: () => "ⅅ",
	DDotrahd: () => "⤑",
	DJcy: () => "Ђ",
	DScy: () => "Ѕ",
	DZcy: () => "Џ",
	Dagger: () => "‡",
	Darr: () => "↡",
	Dashv: () => "⫤",
	Dcaron: () => "Ď",
	Dcy: () => "Д",
	Del: () => "∇",
	Delta: () => "Δ",
	Dfr: () => vs,
	DiacriticalAcute: () => "´",
	DiacriticalDot: () => "˙",
	DiacriticalDoubleAcute: () => "˝",
	DiacriticalGrave: () => "`",
	DiacriticalTilde: () => "˜",
	Diamond: () => "⋄",
	DifferentialD: () => "ⅆ",
	Dopf: () => bs,
	Dot: () => "¨",
	DotDot: () => "⃜",
	DotEqual: () => "≐",
	DoubleContourIntegral: () => "∯",
	DoubleDot: () => "¨",
	DoubleDownArrow: () => "⇓",
	DoubleLeftArrow: () => "⇐",
	DoubleLeftRightArrow: () => "⇔",
	DoubleLeftTee: () => "⫤",
	DoubleLongLeftArrow: () => "⟸",
	DoubleLongLeftRightArrow: () => "⟺",
	DoubleLongRightArrow: () => "⟹",
	DoubleRightArrow: () => "⇒",
	DoubleRightTee: () => "⊨",
	DoubleUpArrow: () => "⇑",
	DoubleUpDownArrow: () => "⇕",
	DoubleVerticalBar: () => "∥",
	DownArrow: () => "↓",
	DownArrowBar: () => "⤓",
	DownArrowUpArrow: () => "⇵",
	DownBreve: () => "̑",
	DownLeftRightVector: () => "⥐",
	DownLeftTeeVector: () => "⥞",
	DownLeftVector: () => "↽",
	DownLeftVectorBar: () => "⥖",
	DownRightTeeVector: () => "⥟",
	DownRightVector: () => "⇁",
	DownRightVectorBar: () => "⥗",
	DownTee: () => "⊤",
	DownTeeArrow: () => "↧",
	Downarrow: () => "⇓",
	Dscr: () => Ss,
	Dstrok: () => "Đ",
	ENG: () => "Ŋ",
	ETH: () => "Ð",
	Eacute: () => "É",
	Ecaron: () => "Ě",
	Ecirc: () => "Ê",
	Ecy: () => "Э",
	Edot: () => "Ė",
	Efr: () => ws,
	Egrave: () => "È",
	Element: () => "∈",
	Emacr: () => "Ē",
	EmptySmallSquare: () => "◻",
	EmptyVerySmallSquare: () => "▫",
	Eogon: () => "Ę",
	Eopf: () => Es,
	Epsilon: () => "Ε",
	Equal: () => "⩵",
	EqualTilde: () => "≂",
	Equilibrium: () => "⇌",
	Escr: () => "ℰ",
	Esim: () => "⩳",
	Eta: () => "Η",
	Euml: () => "Ë",
	Exists: () => "∃",
	ExponentialE: () => "ⅇ",
	Fcy: () => "Ф",
	Ffr: () => Os,
	FilledSmallSquare: () => "◼",
	FilledVerySmallSquare: () => "▪",
	Fopf: () => As,
	ForAll: () => "∀",
	Fouriertrf: () => "ℱ",
	Fscr: () => "ℱ",
	GJcy: () => "Ѓ",
	GT: () => ">",
	Gamma: () => "Γ",
	Gammad: () => "Ϝ",
	Gbreve: () => "Ğ",
	Gcedil: () => "Ģ",
	Gcirc: () => "Ĝ",
	Gcy: () => "Г",
	Gdot: () => "Ġ",
	Gfr: () => Ps,
	Gg: () => "⋙",
	Gopf: () => Is,
	GreaterEqual: () => "≥",
	GreaterEqualLess: () => "⋛",
	GreaterFullEqual: () => "≧",
	GreaterGreater: () => "⪢",
	GreaterLess: () => "≷",
	GreaterSlantEqual: () => "⩾",
	GreaterTilde: () => "≳",
	Gscr: () => Rs,
	Gt: () => "≫",
	HARDcy: () => "Ъ",
	Hacek: () => "ˇ",
	Hat: () => "^",
	Hcirc: () => "Ĥ",
	Hfr: () => "ℌ",
	HilbertSpace: () => "ℋ",
	Hopf: () => "ℍ",
	HorizontalLine: () => "─",
	Hscr: () => "ℋ",
	Hstrok: () => "Ħ",
	HumpDownHump: () => "≎",
	HumpEqual: () => "≏",
	IEcy: () => "Е",
	IJlig: () => "Ĳ",
	IOcy: () => "Ё",
	Iacute: () => "Í",
	Icirc: () => "Î",
	Icy: () => "И",
	Idot: () => "İ",
	Ifr: () => "ℑ",
	Igrave: () => "Ì",
	Im: () => "ℑ",
	Imacr: () => "Ī",
	ImaginaryI: () => "ⅈ",
	Implies: () => "⇒",
	Int: () => "∬",
	Integral: () => "∫",
	Intersection: () => "⋂",
	InvisibleComma: () => "⁣",
	InvisibleTimes: () => "⁢",
	Iogon: () => "Į",
	Iopf: () => Gs,
	Iota: () => "Ι",
	Iscr: () => "ℐ",
	Itilde: () => "Ĩ",
	Iukcy: () => "І",
	Iuml: () => "Ï",
	Jcirc: () => "Ĵ",
	Jcy: () => "Й",
	Jfr: () => Js,
	Jopf: () => Xs,
	Jscr: () => Qs,
	Jsercy: () => "Ј",
	Jukcy: () => "Є",
	KHcy: () => "Х",
	KJcy: () => "Ќ",
	Kappa: () => "Κ",
	Kcedil: () => "Ķ",
	Kcy: () => "К",
	Kfr: () => ec,
	Kopf: () => nc,
	Kscr: () => ic,
	LJcy: () => "Љ",
	LT: () => "<",
	Lacute: () => "Ĺ",
	Lambda: () => "Λ",
	Lang: () => "⟪",
	Laplacetrf: () => "ℒ",
	Larr: () => "↞",
	Lcaron: () => "Ľ",
	Lcedil: () => "Ļ",
	Lcy: () => "Л",
	LeftAngleBracket: () => "⟨",
	LeftArrow: () => "←",
	LeftArrowBar: () => "⇤",
	LeftArrowRightArrow: () => "⇆",
	LeftCeiling: () => "⌈",
	LeftDoubleBracket: () => "⟦",
	LeftDownTeeVector: () => "⥡",
	LeftDownVector: () => "⇃",
	LeftDownVectorBar: () => "⥙",
	LeftFloor: () => "⌊",
	LeftRightArrow: () => "↔",
	LeftRightVector: () => "⥎",
	LeftTee: () => "⊣",
	LeftTeeArrow: () => "↤",
	LeftTeeVector: () => "⥚",
	LeftTriangle: () => "⊲",
	LeftTriangleBar: () => "⧏",
	LeftTriangleEqual: () => "⊴",
	LeftUpDownVector: () => "⥑",
	LeftUpTeeVector: () => "⥠",
	LeftUpVector: () => "↿",
	LeftUpVectorBar: () => "⥘",
	LeftVector: () => "↼",
	LeftVectorBar: () => "⥒",
	Leftarrow: () => "⇐",
	Leftrightarrow: () => "⇔",
	LessEqualGreater: () => "⋚",
	LessFullEqual: () => "≦",
	LessGreater: () => "≶",
	LessLess: () => "⪡",
	LessSlantEqual: () => "⩽",
	LessTilde: () => "≲",
	Lfr: () => cc,
	Ll: () => "⋘",
	Lleftarrow: () => "⇚",
	Lmidot: () => "Ŀ",
	LongLeftArrow: () => "⟵",
	LongLeftRightArrow: () => "⟷",
	LongRightArrow: () => "⟶",
	Longleftarrow: () => "⟸",
	Longleftrightarrow: () => "⟺",
	Longrightarrow: () => "⟹",
	Lopf: () => uc,
	LowerLeftArrow: () => "↙",
	LowerRightArrow: () => "↘",
	Lscr: () => "ℒ",
	Lsh: () => "↰",
	Lstrok: () => "Ł",
	Lt: () => "≪",
	Map: () => "⤅",
	Mcy: () => "М",
	MediumSpace: () => " ",
	Mellintrf: () => "ℳ",
	Mfr: () => hc,
	MinusPlus: () => "∓",
	Mopf: () => _c,
	Mscr: () => "ℳ",
	Mu: () => "Μ",
	NJcy: () => "Њ",
	Nacute: () => "Ń",
	Ncaron: () => "Ň",
	Ncedil: () => "Ņ",
	Ncy: () => "Н",
	NegativeMediumSpace: () => "​",
	NegativeThickSpace: () => "​",
	NegativeThinSpace: () => "​",
	NegativeVeryThinSpace: () => "​",
	NestedGreaterGreater: () => "≫",
	NestedLessLess: () => "≪",
	NewLine: () => "\n",
	Nfr: () => Oc,
	NoBreak: () => "⁠",
	NonBreakingSpace: () => "\xA0",
	Nopf: () => "ℕ",
	Not: () => "⫬",
	NotCongruent: () => "≢",
	NotCupCap: () => "≭",
	NotDoubleVerticalBar: () => "∦",
	NotElement: () => "∉",
	NotEqual: () => "≠",
	NotEqualTilde: () => Gc,
	NotExists: () => "∄",
	NotGreater: () => "≯",
	NotGreaterEqual: () => "≱",
	NotGreaterFullEqual: () => Kc,
	NotGreaterGreater: () => qc,
	NotGreaterLess: () => "≹",
	NotGreaterSlantEqual: () => Jc,
	NotGreaterTilde: () => "≵",
	NotHumpDownHump: () => Yc,
	NotHumpEqual: () => Xc,
	NotLeftTriangle: () => "⋪",
	NotLeftTriangleBar: () => $c,
	NotLeftTriangleEqual: () => "⋬",
	NotLess: () => "≮",
	NotLessEqual: () => "≰",
	NotLessGreater: () => "≸",
	NotLessLess: () => el,
	NotLessSlantEqual: () => tl,
	NotLessTilde: () => "≴",
	NotNestedGreaterGreater: () => nl,
	NotNestedLessLess: () => rl,
	NotPrecedes: () => "⊀",
	NotPrecedesEqual: () => il,
	NotPrecedesSlantEqual: () => "⋠",
	NotReverseElement: () => "∌",
	NotRightTriangle: () => "⋫",
	NotRightTriangleBar: () => al,
	NotRightTriangleEqual: () => "⋭",
	NotSquareSubset: () => ol,
	NotSquareSubsetEqual: () => "⋢",
	NotSquareSuperset: () => sl,
	NotSquareSupersetEqual: () => "⋣",
	NotSubset: () => cl,
	NotSubsetEqual: () => "⊈",
	NotSucceeds: () => "⊁",
	NotSucceedsEqual: () => ll,
	NotSucceedsSlantEqual: () => "⋡",
	NotSucceedsTilde: () => ul,
	NotSuperset: () => dl,
	NotSupersetEqual: () => "⊉",
	NotTilde: () => "≁",
	NotTildeEqual: () => "≄",
	NotTildeFullEqual: () => "≇",
	NotTildeTilde: () => "≉",
	NotVerticalBar: () => "∤",
	Nscr: () => yl,
	Ntilde: () => "Ñ",
	Nu: () => "Ν",
	OElig: () => "Œ",
	Oacute: () => "Ó",
	Ocirc: () => "Ô",
	Ocy: () => "О",
	Odblac: () => "Ő",
	Ofr: () => Il,
	Ograve: () => "Ò",
	Omacr: () => "Ō",
	Omega: () => "Ω",
	Omicron: () => "Ο",
	Oopf: () => Rl,
	OpenCurlyDoubleQuote: () => "“",
	OpenCurlyQuote: () => "‘",
	Or: () => "⩔",
	Oscr: () => Bl,
	Oslash: () => "Ø",
	Otilde: () => "Õ",
	Otimes: () => "⨷",
	Ouml: () => "Ö",
	OverBar: () => "‾",
	OverBrace: () => "⏞",
	OverBracket: () => "⎴",
	OverParenthesis: () => "⏜",
	PartialD: () => "∂",
	Pcy: () => "П",
	Pfr: () => Vl,
	Phi: () => "Φ",
	Pi: () => "Π",
	PlusMinus: () => "±",
	Poincareplane: () => "ℌ",
	Popf: () => "ℙ",
	Pr: () => "⪻",
	Precedes: () => "≺",
	PrecedesEqual: () => "⪯",
	PrecedesSlantEqual: () => "≼",
	PrecedesTilde: () => "≾",
	Prime: () => "″",
	Product: () => "∏",
	Proportion: () => "∷",
	Proportional: () => "∝",
	Pscr: () => Wl,
	Psi: () => "Ψ",
	QUOT: () => "\"",
	Qfr: () => Kl,
	Qopf: () => "ℚ",
	Qscr: () => Yl,
	RBarr: () => "⤐",
	REG: () => "®",
	Racute: () => "Ŕ",
	Rang: () => "⟫",
	Rarr: () => "↠",
	Rarrtl: () => "⤖",
	Rcaron: () => "Ř",
	Rcedil: () => "Ŗ",
	Rcy: () => "Р",
	Re: () => "ℜ",
	ReverseElement: () => "∋",
	ReverseEquilibrium: () => "⇋",
	ReverseUpEquilibrium: () => "⥯",
	Rfr: () => "ℜ",
	Rho: () => "Ρ",
	RightAngleBracket: () => "⟩",
	RightArrow: () => "→",
	RightArrowBar: () => "⇥",
	RightArrowLeftArrow: () => "⇄",
	RightCeiling: () => "⌉",
	RightDoubleBracket: () => "⟧",
	RightDownTeeVector: () => "⥝",
	RightDownVector: () => "⇂",
	RightDownVectorBar: () => "⥕",
	RightFloor: () => "⌋",
	RightTee: () => "⊢",
	RightTeeArrow: () => "↦",
	RightTeeVector: () => "⥛",
	RightTriangle: () => "⊳",
	RightTriangleBar: () => "⧐",
	RightTriangleEqual: () => "⊵",
	RightUpDownVector: () => "⥏",
	RightUpTeeVector: () => "⥜",
	RightUpVector: () => "↾",
	RightUpVectorBar: () => "⥔",
	RightVector: () => "⇀",
	RightVectorBar: () => "⥓",
	Rightarrow: () => "⇒",
	Ropf: () => "ℝ",
	RoundImplies: () => "⥰",
	Rrightarrow: () => "⇛",
	Rscr: () => "ℛ",
	Rsh: () => "↱",
	RuleDelayed: () => "⧴",
	SHCHcy: () => "Щ",
	SHcy: () => "Ш",
	SOFTcy: () => "Ь",
	Sacute: () => "Ś",
	Sc: () => "⪼",
	Scaron: () => "Š",
	Scedil: () => "Ş",
	Scirc: () => "Ŝ",
	Scy: () => "С",
	Sfr: () => tu,
	ShortDownArrow: () => "↓",
	ShortLeftArrow: () => "←",
	ShortRightArrow: () => "→",
	ShortUpArrow: () => "↑",
	Sigma: () => "Σ",
	SmallCircle: () => "∘",
	Sopf: () => iu,
	Sqrt: () => "√",
	Square: () => "□",
	SquareIntersection: () => "⊓",
	SquareSubset: () => "⊏",
	SquareSubsetEqual: () => "⊑",
	SquareSuperset: () => "⊐",
	SquareSupersetEqual: () => "⊒",
	SquareUnion: () => "⊔",
	Sscr: () => cu,
	Star: () => "⋆",
	Sub: () => "⋐",
	Subset: () => "⋐",
	SubsetEqual: () => "⊆",
	Succeeds: () => "≻",
	SucceedsEqual: () => "⪰",
	SucceedsSlantEqual: () => "≽",
	SucceedsTilde: () => "≿",
	SuchThat: () => "∋",
	Sum: () => "∑",
	Sup: () => "⋑",
	Superset: () => "⊃",
	SupersetEqual: () => "⊇",
	Supset: () => "⋑",
	THORN: () => "Þ",
	TRADE: () => "™",
	TSHcy: () => "Ћ",
	TScy: () => "Ц",
	Tab: () => "	",
	Tau: () => "Τ",
	Tcaron: () => "Ť",
	Tcedil: () => "Ţ",
	Tcy: () => "Т",
	Tfr: () => uu,
	Therefore: () => "∴",
	Theta: () => "Θ",
	ThickSpace: () => fu,
	ThinSpace: () => " ",
	Tilde: () => "∼",
	TildeEqual: () => "≃",
	TildeFullEqual: () => "≅",
	TildeTilde: () => "≈",
	Topf: () => pu,
	TripleDot: () => "⃛",
	Tscr: () => hu,
	Tstrok: () => "Ŧ",
	Uacute: () => "Ú",
	Uarr: () => "↟",
	Uarrocir: () => "⥉",
	Ubrcy: () => "Ў",
	Ubreve: () => "Ŭ",
	Ucirc: () => "Û",
	Ucy: () => "У",
	Udblac: () => "Ű",
	Ufr: () => _u,
	Ugrave: () => "Ù",
	Umacr: () => "Ū",
	UnderBar: () => "_",
	UnderBrace: () => "⏟",
	UnderBracket: () => "⎵",
	UnderParenthesis: () => "⏝",
	Union: () => "⋃",
	UnionPlus: () => "⊎",
	Uogon: () => "Ų",
	Uopf: () => yu,
	UpArrow: () => "↑",
	UpArrowBar: () => "⤒",
	UpArrowDownArrow: () => "⇅",
	UpDownArrow: () => "↕",
	UpEquilibrium: () => "⥮",
	UpTee: () => "⊥",
	UpTeeArrow: () => "↥",
	Uparrow: () => "⇑",
	Updownarrow: () => "⇕",
	UpperLeftArrow: () => "↖",
	UpperRightArrow: () => "↗",
	Upsi: () => "ϒ",
	Upsilon: () => "Υ",
	Uring: () => "Ů",
	Uscr: () => xu,
	Utilde: () => "Ũ",
	Uuml: () => "Ü",
	VDash: () => "⊫",
	Vbar: () => "⫫",
	Vcy: () => "В",
	Vdash: () => "⊩",
	Vdashl: () => "⫦",
	Vee: () => "⋁",
	Verbar: () => "‖",
	Vert: () => "‖",
	VerticalBar: () => "∣",
	VerticalLine: () => "|",
	VerticalSeparator: () => "❘",
	VerticalTilde: () => "≀",
	VeryThinSpace: () => " ",
	Vfr: () => Du,
	Vopf: () => ju,
	Vscr: () => Nu,
	Vvdash: () => "⊪",
	Wcirc: () => "Ŵ",
	Wedge: () => "⋀",
	Wfr: () => zu,
	Wopf: () => Vu,
	Wscr: () => Uu,
	Xfr: () => Gu,
	Xi: () => "Ξ",
	Xopf: () => qu,
	Xscr: () => Yu,
	YAcy: () => "Я",
	YIcy: () => "Ї",
	YUcy: () => "Ю",
	Yacute: () => "Ý",
	Ycirc: () => "Ŷ",
	Ycy: () => "Ы",
	Yfr: () => Zu,
	Yopf: () => $u,
	Yscr: () => td,
	Yuml: () => "Ÿ",
	ZHcy: () => "Ж",
	Zacute: () => "Ź",
	Zcaron: () => "Ž",
	Zcy: () => "З",
	Zdot: () => "Ż",
	ZeroWidthSpace: () => "​",
	Zeta: () => "Ζ",
	Zfr: () => "ℨ",
	Zopf: () => "ℤ",
	Zscr: () => ad,
	aacute: () => "á",
	abreve: () => "ă",
	ac: () => "∾",
	acE: () => Qo,
	acd: () => "∿",
	acirc: () => "â",
	acute: () => "´",
	acy: () => "а",
	aelig: () => "æ",
	af: () => "⁡",
	afr: () => es,
	agrave: () => "à",
	alefsym: () => "ℵ",
	aleph: () => "ℵ",
	alpha: () => "α",
	amacr: () => "ā",
	amalg: () => "⨿",
	amp: () => "&",
	and: () => "∧",
	andand: () => "⩕",
	andd: () => "⩜",
	andslope: () => "⩘",
	andv: () => "⩚",
	ang: () => "∠",
	ange: () => "⦤",
	angle: () => "∠",
	angmsd: () => "∡",
	angmsdaa: () => "⦨",
	angmsdab: () => "⦩",
	angmsdac: () => "⦪",
	angmsdad: () => "⦫",
	angmsdae: () => "⦬",
	angmsdaf: () => "⦭",
	angmsdag: () => "⦮",
	angmsdah: () => "⦯",
	angrt: () => "∟",
	angrtvb: () => "⊾",
	angrtvbd: () => "⦝",
	angsph: () => "∢",
	angst: () => "Å",
	angzarr: () => "⍼",
	aogon: () => "ą",
	aopf: () => ns,
	ap: () => "≈",
	apE: () => "⩰",
	apacir: () => "⩯",
	ape: () => "≊",
	apid: () => "≋",
	apos: () => "'",
	approx: () => "≈",
	approxeq: () => "≊",
	aring: () => "å",
	ascr: () => is,
	ast: () => "*",
	asymp: () => "≈",
	asympeq: () => "≍",
	atilde: () => "ã",
	auml: () => "ä",
	awconint: () => "∳",
	awint: () => "⨑",
	bNot: () => "⫭",
	backcong: () => "≌",
	backepsilon: () => "϶",
	backprime: () => "‵",
	backsim: () => "∽",
	backsimeq: () => "⋍",
	barvee: () => "⊽",
	barwed: () => "⌅",
	barwedge: () => "⌅",
	bbrk: () => "⎵",
	bbrktbrk: () => "⎶",
	bcong: () => "≌",
	bcy: () => "б",
	bdquo: () => "„",
	becaus: () => "∵",
	because: () => "∵",
	bemptyv: () => "⦰",
	bepsi: () => "϶",
	bernou: () => "ℬ",
	beta: () => "β",
	beth: () => "ℶ",
	between: () => "≬",
	bfr: () => os,
	bigcap: () => "⋂",
	bigcirc: () => "◯",
	bigcup: () => "⋃",
	bigodot: () => "⨀",
	bigoplus: () => "⨁",
	bigotimes: () => "⨂",
	bigsqcup: () => "⨆",
	bigstar: () => "★",
	bigtriangledown: () => "▽",
	bigtriangleup: () => "△",
	biguplus: () => "⨄",
	bigvee: () => "⋁",
	bigwedge: () => "⋀",
	bkarow: () => "⤍",
	blacklozenge: () => "⧫",
	blacksquare: () => "▪",
	blacktriangle: () => "▴",
	blacktriangledown: () => "▾",
	blacktriangleleft: () => "◂",
	blacktriangleright: () => "▸",
	blank: () => "␣",
	blk12: () => "▒",
	blk14: () => "░",
	blk34: () => "▓",
	block: () => "█",
	bne: () => ss,
	bnequiv: () => cs,
	bnot: () => "⌐",
	bopf: () => us,
	bot: () => "⊥",
	bottom: () => "⊥",
	bowtie: () => "⋈",
	boxDL: () => "╗",
	boxDR: () => "╔",
	boxDl: () => "╖",
	boxDr: () => "╓",
	boxH: () => "═",
	boxHD: () => "╦",
	boxHU: () => "╩",
	boxHd: () => "╤",
	boxHu: () => "╧",
	boxUL: () => "╝",
	boxUR: () => "╚",
	boxUl: () => "╜",
	boxUr: () => "╙",
	boxV: () => "║",
	boxVH: () => "╬",
	boxVL: () => "╣",
	boxVR: () => "╠",
	boxVh: () => "╫",
	boxVl: () => "╢",
	boxVr: () => "╟",
	boxbox: () => "⧉",
	boxdL: () => "╕",
	boxdR: () => "╒",
	boxdl: () => "┐",
	boxdr: () => "┌",
	boxh: () => "─",
	boxhD: () => "╥",
	boxhU: () => "╨",
	boxhd: () => "┬",
	boxhu: () => "┴",
	boxminus: () => "⊟",
	boxplus: () => "⊞",
	boxtimes: () => "⊠",
	boxuL: () => "╛",
	boxuR: () => "╘",
	boxul: () => "┘",
	boxur: () => "└",
	boxv: () => "│",
	boxvH: () => "╪",
	boxvL: () => "╡",
	boxvR: () => "╞",
	boxvh: () => "┼",
	boxvl: () => "┤",
	boxvr: () => "├",
	bprime: () => "‵",
	breve: () => "˘",
	brvbar: () => "¦",
	bscr: () => ds,
	bsemi: () => "⁏",
	bsim: () => "∽",
	bsime: () => "⋍",
	bsol: () => "\\",
	bsolb: () => "⧅",
	bsolhsub: () => "⟈",
	bull: () => "•",
	bullet: () => "•",
	bump: () => "≎",
	bumpE: () => "⪮",
	bumpe: () => "≏",
	bumpeq: () => "≏",
	cacute: () => "ć",
	cap: () => "∩",
	capand: () => "⩄",
	capbrcup: () => "⩉",
	capcap: () => "⩋",
	capcup: () => "⩇",
	capdot: () => "⩀",
	caps: () => fs,
	caret: () => "⁁",
	caron: () => "ˇ",
	ccaps: () => "⩍",
	ccaron: () => "č",
	ccedil: () => "ç",
	ccirc: () => "ĉ",
	ccups: () => "⩌",
	ccupssm: () => "⩐",
	cdot: () => "ċ",
	cedil: () => "¸",
	cemptyv: () => "⦲",
	cent: () => "¢",
	centerdot: () => "·",
	cfr: () => ps,
	chcy: () => "ч",
	check: () => "✓",
	checkmark: () => "✓",
	chi: () => "χ",
	cir: () => "○",
	cirE: () => "⧃",
	circ: () => "ˆ",
	circeq: () => "≗",
	circlearrowleft: () => "↺",
	circlearrowright: () => "↻",
	circledR: () => "®",
	circledS: () => "Ⓢ",
	circledast: () => "⊛",
	circledcirc: () => "⊚",
	circleddash: () => "⊝",
	cire: () => "≗",
	cirfnint: () => "⨐",
	cirmid: () => "⫯",
	cirscir: () => "⧂",
	clubs: () => "♣",
	clubsuit: () => "♣",
	colon: () => ":",
	colone: () => "≔",
	coloneq: () => "≔",
	comma: () => ",",
	commat: () => "@",
	comp: () => "∁",
	compfn: () => "∘",
	complement: () => "∁",
	complexes: () => "ℂ",
	cong: () => "≅",
	congdot: () => "⩭",
	conint: () => "∮",
	copf: () => ms,
	coprod: () => "∐",
	copy: () => "©",
	copysr: () => "℗",
	crarr: () => "↵",
	cross: () => "✗",
	cscr: () => gs,
	csub: () => "⫏",
	csube: () => "⫑",
	csup: () => "⫐",
	csupe: () => "⫒",
	ctdot: () => "⋯",
	cudarrl: () => "⤸",
	cudarrr: () => "⤵",
	cuepr: () => "⋞",
	cuesc: () => "⋟",
	cularr: () => "↶",
	cularrp: () => "⤽",
	cup: () => "∪",
	cupbrcap: () => "⩈",
	cupcap: () => "⩆",
	cupcup: () => "⩊",
	cupdot: () => "⊍",
	cupor: () => "⩅",
	cups: () => _s,
	curarr: () => "↷",
	curarrm: () => "⤼",
	curlyeqprec: () => "⋞",
	curlyeqsucc: () => "⋟",
	curlyvee: () => "⋎",
	curlywedge: () => "⋏",
	curren: () => "¤",
	curvearrowleft: () => "↶",
	curvearrowright: () => "↷",
	cuvee: () => "⋎",
	cuwed: () => "⋏",
	cwconint: () => "∲",
	cwint: () => "∱",
	cylcty: () => "⌭",
	dArr: () => "⇓",
	dHar: () => "⥥",
	dagger: () => "†",
	daleth: () => "ℸ",
	darr: () => "↓",
	dash: () => "‐",
	dashv: () => "⊣",
	dbkarow: () => "⤏",
	dblac: () => "˝",
	dcaron: () => "ď",
	dcy: () => "д",
	dd: () => "ⅆ",
	ddagger: () => "‡",
	ddarr: () => "⇊",
	ddotseq: () => "⩷",
	default: () => sd,
	deg: () => "°",
	delta: () => "δ",
	demptyv: () => "⦱",
	dfisht: () => "⥿",
	dfr: () => ys,
	dharl: () => "⇃",
	dharr: () => "⇂",
	diam: () => "⋄",
	diamond: () => "⋄",
	diamondsuit: () => "♦",
	diams: () => "♦",
	die: () => "¨",
	digamma: () => "ϝ",
	disin: () => "⋲",
	div: () => "÷",
	divide: () => "÷",
	divideontimes: () => "⋇",
	divonx: () => "⋇",
	djcy: () => "ђ",
	dlcorn: () => "⌞",
	dlcrop: () => "⌍",
	dollar: () => "$",
	dopf: () => xs,
	dot: () => "˙",
	doteq: () => "≐",
	doteqdot: () => "≑",
	dotminus: () => "∸",
	dotplus: () => "∔",
	dotsquare: () => "⊡",
	doublebarwedge: () => "⌆",
	downarrow: () => "↓",
	downdownarrows: () => "⇊",
	downharpoonleft: () => "⇃",
	downharpoonright: () => "⇂",
	drbkarow: () => "⤐",
	drcorn: () => "⌟",
	drcrop: () => "⌌",
	dscr: () => Cs,
	dscy: () => "ѕ",
	dsol: () => "⧶",
	dstrok: () => "đ",
	dtdot: () => "⋱",
	dtri: () => "▿",
	dtrif: () => "▾",
	duarr: () => "⇵",
	duhar: () => "⥯",
	dwangle: () => "⦦",
	dzcy: () => "џ",
	dzigrarr: () => "⟿",
	eDDot: () => "⩷",
	eDot: () => "≑",
	eacute: () => "é",
	easter: () => "⩮",
	ecaron: () => "ě",
	ecir: () => "≖",
	ecirc: () => "ê",
	ecolon: () => "≕",
	ecy: () => "э",
	edot: () => "ė",
	ee: () => "ⅇ",
	efDot: () => "≒",
	efr: () => Ts,
	eg: () => "⪚",
	egrave: () => "è",
	egs: () => "⪖",
	egsdot: () => "⪘",
	el: () => "⪙",
	elinters: () => "⏧",
	ell: () => "ℓ",
	els: () => "⪕",
	elsdot: () => "⪗",
	emacr: () => "ē",
	empty: () => "∅",
	emptyset: () => "∅",
	emptyv: () => "∅",
	emsp: () => " ",
	emsp13: () => " ",
	emsp14: () => " ",
	eng: () => "ŋ",
	ensp: () => " ",
	eogon: () => "ę",
	eopf: () => Ds,
	epar: () => "⋕",
	eparsl: () => "⧣",
	eplus: () => "⩱",
	epsi: () => "ε",
	epsilon: () => "ε",
	epsiv: () => "ϵ",
	eqcirc: () => "≖",
	eqcolon: () => "≕",
	eqsim: () => "≂",
	eqslantgtr: () => "⪖",
	eqslantless: () => "⪕",
	equals: () => "=",
	equest: () => "≟",
	equiv: () => "≡",
	equivDD: () => "⩸",
	eqvparsl: () => "⧥",
	erDot: () => "≓",
	erarr: () => "⥱",
	escr: () => "ℯ",
	esdot: () => "≐",
	esim: () => "≂",
	eta: () => "η",
	eth: () => "ð",
	euml: () => "ë",
	euro: () => "€",
	excl: () => "!",
	exist: () => "∃",
	expectation: () => "ℰ",
	exponentiale: () => "ⅇ",
	fallingdotseq: () => "≒",
	fcy: () => "ф",
	female: () => "♀",
	ffilig: () => "ﬃ",
	fflig: () => "ﬀ",
	ffllig: () => "ﬄ",
	ffr: () => ks,
	filig: () => "ﬁ",
	fjlig: () => "fj",
	flat: () => "♭",
	fllig: () => "ﬂ",
	fltns: () => "▱",
	fnof: () => "ƒ",
	fopf: () => js,
	forall: () => "∀",
	fork: () => "⋔",
	forkv: () => "⫙",
	fpartint: () => "⨍",
	frac12: () => "½",
	frac13: () => "⅓",
	frac14: () => "¼",
	frac15: () => "⅕",
	frac16: () => "⅙",
	frac18: () => "⅛",
	frac23: () => "⅔",
	frac25: () => "⅖",
	frac34: () => "¾",
	frac35: () => "⅗",
	frac38: () => "⅜",
	frac45: () => "⅘",
	frac56: () => "⅚",
	frac58: () => "⅝",
	frac78: () => "⅞",
	frasl: () => "⁄",
	frown: () => "⌢",
	fscr: () => Ms,
	gE: () => "≧",
	gEl: () => "⪌",
	gacute: () => "ǵ",
	gamma: () => "γ",
	gammad: () => "ϝ",
	gap: () => "⪆",
	gbreve: () => "ğ",
	gcirc: () => "ĝ",
	gcy: () => "г",
	gdot: () => "ġ",
	ge: () => "≥",
	gel: () => "⋛",
	geq: () => "≥",
	geqq: () => "≧",
	geqslant: () => "⩾",
	ges: () => "⩾",
	gescc: () => "⪩",
	gesdot: () => "⪀",
	gesdoto: () => "⪂",
	gesdotol: () => "⪄",
	gesl: () => Ns,
	gesles: () => "⪔",
	gfr: () => Fs,
	gg: () => "≫",
	ggg: () => "⋙",
	gimel: () => "ℷ",
	gjcy: () => "ѓ",
	gl: () => "≷",
	glE: () => "⪒",
	gla: () => "⪥",
	glj: () => "⪤",
	gnE: () => "≩",
	gnap: () => "⪊",
	gnapprox: () => "⪊",
	gne: () => "⪈",
	gneq: () => "⪈",
	gneqq: () => "≩",
	gnsim: () => "⋧",
	gopf: () => Ls,
	grave: () => "`",
	gscr: () => "ℊ",
	gsim: () => "≳",
	gsime: () => "⪎",
	gsiml: () => "⪐",
	gt: () => ">",
	gtcc: () => "⪧",
	gtcir: () => "⩺",
	gtdot: () => "⋗",
	gtlPar: () => "⦕",
	gtquest: () => "⩼",
	gtrapprox: () => "⪆",
	gtrarr: () => "⥸",
	gtrdot: () => "⋗",
	gtreqless: () => "⋛",
	gtreqqless: () => "⪌",
	gtrless: () => "≷",
	gtrsim: () => "≳",
	gvertneqq: () => zs,
	gvnE: () => Bs,
	hArr: () => "⇔",
	hairsp: () => " ",
	half: () => "½",
	hamilt: () => "ℋ",
	hardcy: () => "ъ",
	harr: () => "↔",
	harrcir: () => "⥈",
	harrw: () => "↭",
	hbar: () => "ℏ",
	hcirc: () => "ĥ",
	hearts: () => "♥",
	heartsuit: () => "♥",
	hellip: () => "…",
	hercon: () => "⊹",
	hfr: () => Vs,
	hksearow: () => "⤥",
	hkswarow: () => "⤦",
	hoarr: () => "⇿",
	homtht: () => "∻",
	hookleftarrow: () => "↩",
	hookrightarrow: () => "↪",
	hopf: () => Hs,
	horbar: () => "―",
	hscr: () => Us,
	hslash: () => "ℏ",
	hstrok: () => "ħ",
	hybull: () => "⁃",
	hyphen: () => "‐",
	iacute: () => "í",
	ic: () => "⁣",
	icirc: () => "î",
	icy: () => "и",
	iecy: () => "е",
	iexcl: () => "¡",
	iff: () => "⇔",
	ifr: () => Ws,
	igrave: () => "ì",
	ii: () => "ⅈ",
	iiiint: () => "⨌",
	iiint: () => "∭",
	iinfin: () => "⧜",
	iiota: () => "℩",
	ijlig: () => "ĳ",
	imacr: () => "ī",
	image: () => "ℑ",
	imagline: () => "ℐ",
	imagpart: () => "ℑ",
	imath: () => "ı",
	imof: () => "⊷",
	imped: () => "Ƶ",
	incare: () => "℅",
	infin: () => "∞",
	infintie: () => "⧝",
	inodot: () => "ı",
	int: () => "∫",
	intcal: () => "⊺",
	integers: () => "ℤ",
	intercal: () => "⊺",
	intlarhk: () => "⨗",
	intprod: () => "⨼",
	iocy: () => "ё",
	iogon: () => "į",
	iopf: () => Ks,
	iota: () => "ι",
	iprod: () => "⨼",
	iquest: () => "¿",
	iscr: () => qs,
	isin: () => "∈",
	isinE: () => "⋹",
	isindot: () => "⋵",
	isins: () => "⋴",
	isinsv: () => "⋳",
	isinv: () => "∈",
	it: () => "⁢",
	itilde: () => "ĩ",
	iukcy: () => "і",
	iuml: () => "ï",
	jcirc: () => "ĵ",
	jcy: () => "й",
	jfr: () => Ys,
	jmath: () => "ȷ",
	jopf: () => Zs,
	jscr: () => $s,
	jsercy: () => "ј",
	jukcy: () => "є",
	kappa: () => "κ",
	kappav: () => "ϰ",
	kcedil: () => "ķ",
	kcy: () => "к",
	kfr: () => tc,
	kgreen: () => "ĸ",
	khcy: () => "х",
	kjcy: () => "ќ",
	kopf: () => rc,
	kscr: () => ac,
	lAarr: () => "⇚",
	lArr: () => "⇐",
	lAtail: () => "⤛",
	lBarr: () => "⤎",
	lE: () => "≦",
	lEg: () => "⪋",
	lHar: () => "⥢",
	lacute: () => "ĺ",
	laemptyv: () => "⦴",
	lagran: () => "ℒ",
	lambda: () => "λ",
	lang: () => "⟨",
	langd: () => "⦑",
	langle: () => "⟨",
	lap: () => "⪅",
	laquo: () => "«",
	larr: () => "←",
	larrb: () => "⇤",
	larrbfs: () => "⤟",
	larrfs: () => "⤝",
	larrhk: () => "↩",
	larrlp: () => "↫",
	larrpl: () => "⤹",
	larrsim: () => "⥳",
	larrtl: () => "↢",
	lat: () => "⪫",
	latail: () => "⤙",
	late: () => "⪭",
	lates: () => oc,
	lbarr: () => "⤌",
	lbbrk: () => "❲",
	lbrace: () => "{",
	lbrack: () => "[",
	lbrke: () => "⦋",
	lbrksld: () => "⦏",
	lbrkslu: () => "⦍",
	lcaron: () => "ľ",
	lcedil: () => "ļ",
	lceil: () => "⌈",
	lcub: () => "{",
	lcy: () => "л",
	ldca: () => "⤶",
	ldquo: () => "“",
	ldquor: () => "„",
	ldrdhar: () => "⥧",
	ldrushar: () => "⥋",
	ldsh: () => "↲",
	le: () => "≤",
	leftarrow: () => "←",
	leftarrowtail: () => "↢",
	leftharpoondown: () => "↽",
	leftharpoonup: () => "↼",
	leftleftarrows: () => "⇇",
	leftrightarrow: () => "↔",
	leftrightarrows: () => "⇆",
	leftrightharpoons: () => "⇋",
	leftrightsquigarrow: () => "↭",
	leftthreetimes: () => "⋋",
	leg: () => "⋚",
	leq: () => "≤",
	leqq: () => "≦",
	leqslant: () => "⩽",
	les: () => "⩽",
	lescc: () => "⪨",
	lesdot: () => "⩿",
	lesdoto: () => "⪁",
	lesdotor: () => "⪃",
	lesg: () => sc,
	lesges: () => "⪓",
	lessapprox: () => "⪅",
	lessdot: () => "⋖",
	lesseqgtr: () => "⋚",
	lesseqqgtr: () => "⪋",
	lessgtr: () => "≶",
	lesssim: () => "≲",
	lfisht: () => "⥼",
	lfloor: () => "⌊",
	lfr: () => lc,
	lg: () => "≶",
	lgE: () => "⪑",
	lhard: () => "↽",
	lharu: () => "↼",
	lharul: () => "⥪",
	lhblk: () => "▄",
	ljcy: () => "љ",
	ll: () => "≪",
	llarr: () => "⇇",
	llcorner: () => "⌞",
	llhard: () => "⥫",
	lltri: () => "◺",
	lmidot: () => "ŀ",
	lmoust: () => "⎰",
	lmoustache: () => "⎰",
	lnE: () => "≨",
	lnap: () => "⪉",
	lnapprox: () => "⪉",
	lne: () => "⪇",
	lneq: () => "⪇",
	lneqq: () => "≨",
	lnsim: () => "⋦",
	loang: () => "⟬",
	loarr: () => "⇽",
	lobrk: () => "⟦",
	longleftarrow: () => "⟵",
	longleftrightarrow: () => "⟷",
	longmapsto: () => "⟼",
	longrightarrow: () => "⟶",
	looparrowleft: () => "↫",
	looparrowright: () => "↬",
	lopar: () => "⦅",
	lopf: () => dc,
	loplus: () => "⨭",
	lotimes: () => "⨴",
	lowast: () => "∗",
	lowbar: () => "_",
	loz: () => "◊",
	lozenge: () => "◊",
	lozf: () => "⧫",
	lpar: () => "(",
	lparlt: () => "⦓",
	lrarr: () => "⇆",
	lrcorner: () => "⌟",
	lrhar: () => "⇋",
	lrhard: () => "⥭",
	lrm: () => "‎",
	lrtri: () => "⊿",
	lsaquo: () => "‹",
	lscr: () => fc,
	lsh: () => "↰",
	lsim: () => "≲",
	lsime: () => "⪍",
	lsimg: () => "⪏",
	lsqb: () => "[",
	lsquo: () => "‘",
	lsquor: () => "‚",
	lstrok: () => "ł",
	lt: () => "<",
	ltcc: () => "⪦",
	ltcir: () => "⩹",
	ltdot: () => "⋖",
	lthree: () => "⋋",
	ltimes: () => "⋉",
	ltlarr: () => "⥶",
	ltquest: () => "⩻",
	ltrPar: () => "⦖",
	ltri: () => "◃",
	ltrie: () => "⊴",
	ltrif: () => "◂",
	lurdshar: () => "⥊",
	luruhar: () => "⥦",
	lvertneqq: () => pc,
	lvnE: () => mc,
	mDDot: () => "∺",
	macr: () => "¯",
	male: () => "♂",
	malt: () => "✠",
	maltese: () => "✠",
	map: () => "↦",
	mapsto: () => "↦",
	mapstodown: () => "↧",
	mapstoleft: () => "↤",
	mapstoup: () => "↥",
	marker: () => "▮",
	mcomma: () => "⨩",
	mcy: () => "м",
	mdash: () => "—",
	measuredangle: () => "∡",
	mfr: () => gc,
	mho: () => "℧",
	micro: () => "µ",
	mid: () => "∣",
	midast: () => "*",
	midcir: () => "⫰",
	middot: () => "·",
	minus: () => "−",
	minusb: () => "⊟",
	minusd: () => "∸",
	minusdu: () => "⨪",
	mlcp: () => "⫛",
	mldr: () => "…",
	mnplus: () => "∓",
	models: () => "⊧",
	mopf: () => vc,
	mp: () => "∓",
	mscr: () => yc,
	mstpos: () => "∾",
	mu: () => "μ",
	multimap: () => "⊸",
	mumap: () => "⊸",
	nGg: () => Pc,
	nGt: () => Fc,
	nGtv: () => Ic,
	nLeftarrow: () => "⇍",
	nLeftrightarrow: () => "⇎",
	nLl: () => Vc,
	nLt: () => Hc,
	nLtv: () => Uc,
	nRightarrow: () => "⇏",
	nVDash: () => "⊯",
	nVdash: () => "⊮",
	nabla: () => "∇",
	nacute: () => "ń",
	nang: () => bc,
	nap: () => "≉",
	napE: () => xc,
	napid: () => Sc,
	napos: () => "ŉ",
	napprox: () => "≉",
	natur: () => "♮",
	natural: () => "♮",
	naturals: () => "ℕ",
	nbsp: () => "\xA0",
	nbump: () => Cc,
	nbumpe: () => wc,
	ncap: () => "⩃",
	ncaron: () => "ň",
	ncedil: () => "ņ",
	ncong: () => "≇",
	ncongdot: () => Tc,
	ncup: () => "⩂",
	ncy: () => "н",
	ndash: () => "–",
	ne: () => "≠",
	neArr: () => "⇗",
	nearhk: () => "⤤",
	nearr: () => "↗",
	nearrow: () => "↗",
	nedot: () => Ec,
	nequiv: () => "≢",
	nesear: () => "⤨",
	nesim: () => Dc,
	nexist: () => "∄",
	nexists: () => "∄",
	nfr: () => kc,
	ngE: () => Ac,
	nge: () => "≱",
	ngeq: () => "≱",
	ngeqq: () => jc,
	ngeqslant: () => Mc,
	nges: () => Nc,
	ngsim: () => "≵",
	ngt: () => "≯",
	ngtr: () => "≯",
	nhArr: () => "⇎",
	nharr: () => "↮",
	nhpar: () => "⫲",
	ni: () => "∋",
	nis: () => "⋼",
	nisd: () => "⋺",
	niv: () => "∋",
	njcy: () => "њ",
	nlArr: () => "⇍",
	nlE: () => Lc,
	nlarr: () => "↚",
	nldr: () => "‥",
	nle: () => "≰",
	nleftarrow: () => "↚",
	nleftrightarrow: () => "↮",
	nleq: () => "≰",
	nleqq: () => Rc,
	nleqslant: () => zc,
	nles: () => Bc,
	nless: () => "≮",
	nlsim: () => "≴",
	nlt: () => "≮",
	nltri: () => "⋪",
	nltrie: () => "⋬",
	nmid: () => "∤",
	nopf: () => Wc,
	not: () => "¬",
	notin: () => "∉",
	notinE: () => Qc,
	notindot: () => Zc,
	notinva: () => "∉",
	notinvb: () => "⋷",
	notinvc: () => "⋶",
	notni: () => "∌",
	notniva: () => "∌",
	notnivb: () => "⋾",
	notnivc: () => "⋽",
	npar: () => "∦",
	nparallel: () => "∦",
	nparsl: () => fl,
	npart: () => pl,
	npolint: () => "⨔",
	npr: () => "⊀",
	nprcue: () => "⋠",
	npre: () => hl,
	nprec: () => "⊀",
	npreceq: () => ml,
	nrArr: () => "⇏",
	nrarr: () => "↛",
	nrarrc: () => gl,
	nrarrw: () => _l,
	nrightarrow: () => "↛",
	nrtri: () => "⋫",
	nrtrie: () => "⋭",
	nsc: () => "⊁",
	nsccue: () => "⋡",
	nsce: () => vl,
	nscr: () => bl,
	nshortmid: () => "∤",
	nshortparallel: () => "∦",
	nsim: () => "≁",
	nsime: () => "≄",
	nsimeq: () => "≄",
	nsmid: () => "∤",
	nspar: () => "∦",
	nsqsube: () => "⋢",
	nsqsupe: () => "⋣",
	nsub: () => "⊄",
	nsubE: () => xl,
	nsube: () => "⊈",
	nsubset: () => Sl,
	nsubseteq: () => "⊈",
	nsubseteqq: () => Cl,
	nsucc: () => "⊁",
	nsucceq: () => wl,
	nsup: () => "⊅",
	nsupE: () => Tl,
	nsupe: () => "⊉",
	nsupset: () => El,
	nsupseteq: () => "⊉",
	nsupseteqq: () => Dl,
	ntgl: () => "≹",
	ntilde: () => "ñ",
	ntlg: () => "≸",
	ntriangleleft: () => "⋪",
	ntrianglelefteq: () => "⋬",
	ntriangleright: () => "⋫",
	ntrianglerighteq: () => "⋭",
	nu: () => "ν",
	num: () => "#",
	numero: () => "№",
	numsp: () => " ",
	nvDash: () => "⊭",
	nvHarr: () => "⤄",
	nvap: () => Ol,
	nvdash: () => "⊬",
	nvge: () => kl,
	nvgt: () => Al,
	nvinfin: () => "⧞",
	nvlArr: () => "⤂",
	nvle: () => jl,
	nvlt: () => Ml,
	nvltrie: () => Nl,
	nvrArr: () => "⤃",
	nvrtrie: () => Pl,
	nvsim: () => Fl,
	nwArr: () => "⇖",
	nwarhk: () => "⤣",
	nwarr: () => "↖",
	nwarrow: () => "↖",
	nwnear: () => "⤧",
	oS: () => "Ⓢ",
	oacute: () => "ó",
	oast: () => "⊛",
	ocir: () => "⊚",
	ocirc: () => "ô",
	ocy: () => "о",
	odash: () => "⊝",
	odblac: () => "ő",
	odiv: () => "⨸",
	odot: () => "⊙",
	odsold: () => "⦼",
	oelig: () => "œ",
	ofcir: () => "⦿",
	ofr: () => Ll,
	ogon: () => "˛",
	ograve: () => "ò",
	ogt: () => "⧁",
	ohbar: () => "⦵",
	ohm: () => "Ω",
	oint: () => "∮",
	olarr: () => "↺",
	olcir: () => "⦾",
	olcross: () => "⦻",
	oline: () => "‾",
	olt: () => "⧀",
	omacr: () => "ō",
	omega: () => "ω",
	omicron: () => "ο",
	omid: () => "⦶",
	ominus: () => "⊖",
	oopf: () => zl,
	opar: () => "⦷",
	operp: () => "⦹",
	oplus: () => "⊕",
	or: () => "∨",
	orarr: () => "↻",
	ord: () => "⩝",
	order: () => "ℴ",
	orderof: () => "ℴ",
	ordf: () => "ª",
	ordm: () => "º",
	origof: () => "⊶",
	oror: () => "⩖",
	orslope: () => "⩗",
	orv: () => "⩛",
	oscr: () => "ℴ",
	oslash: () => "ø",
	osol: () => "⊘",
	otilde: () => "õ",
	otimes: () => "⊗",
	otimesas: () => "⨶",
	ouml: () => "ö",
	ovbar: () => "⌽",
	par: () => "∥",
	para: () => "¶",
	parallel: () => "∥",
	parsim: () => "⫳",
	parsl: () => "⫽",
	part: () => "∂",
	pcy: () => "п",
	percnt: () => "%",
	period: () => ".",
	permil: () => "‰",
	perp: () => "⊥",
	pertenk: () => "‱",
	pfr: () => Hl,
	phi: () => "φ",
	phiv: () => "ϕ",
	phmmat: () => "ℳ",
	phone: () => "☎",
	pi: () => "π",
	pitchfork: () => "⋔",
	piv: () => "ϖ",
	planck: () => "ℏ",
	planckh: () => "ℎ",
	plankv: () => "ℏ",
	plus: () => "+",
	plusacir: () => "⨣",
	plusb: () => "⊞",
	pluscir: () => "⨢",
	plusdo: () => "∔",
	plusdu: () => "⨥",
	pluse: () => "⩲",
	plusmn: () => "±",
	plussim: () => "⨦",
	plustwo: () => "⨧",
	pm: () => "±",
	pointint: () => "⨕",
	popf: () => Ul,
	pound: () => "£",
	pr: () => "≺",
	prE: () => "⪳",
	prap: () => "⪷",
	prcue: () => "≼",
	pre: () => "⪯",
	prec: () => "≺",
	precapprox: () => "⪷",
	preccurlyeq: () => "≼",
	preceq: () => "⪯",
	precnapprox: () => "⪹",
	precneqq: () => "⪵",
	precnsim: () => "⋨",
	precsim: () => "≾",
	prime: () => "′",
	primes: () => "ℙ",
	prnE: () => "⪵",
	prnap: () => "⪹",
	prnsim: () => "⋨",
	prod: () => "∏",
	profalar: () => "⌮",
	profline: () => "⌒",
	profsurf: () => "⌓",
	prop: () => "∝",
	propto: () => "∝",
	prsim: () => "≾",
	prurel: () => "⊰",
	pscr: () => Gl,
	psi: () => "ψ",
	puncsp: () => " ",
	qfr: () => ql,
	qint: () => "⨌",
	qopf: () => Jl,
	qprime: () => "⁗",
	qscr: () => Xl,
	quaternions: () => "ℍ",
	quatint: () => "⨖",
	quest: () => "?",
	questeq: () => "≟",
	quot: () => "\"",
	rAarr: () => "⇛",
	rArr: () => "⇒",
	rAtail: () => "⤜",
	rBarr: () => "⤏",
	rHar: () => "⥤",
	race: () => Zl,
	racute: () => "ŕ",
	radic: () => "√",
	raemptyv: () => "⦳",
	rang: () => "⟩",
	rangd: () => "⦒",
	range: () => "⦥",
	rangle: () => "⟩",
	raquo: () => "»",
	rarr: () => "→",
	rarrap: () => "⥵",
	rarrb: () => "⇥",
	rarrbfs: () => "⤠",
	rarrc: () => "⤳",
	rarrfs: () => "⤞",
	rarrhk: () => "↪",
	rarrlp: () => "↬",
	rarrpl: () => "⥅",
	rarrsim: () => "⥴",
	rarrtl: () => "↣",
	rarrw: () => "↝",
	ratail: () => "⤚",
	ratio: () => "∶",
	rationals: () => "ℚ",
	rbarr: () => "⤍",
	rbbrk: () => "❳",
	rbrace: () => "}",
	rbrack: () => "]",
	rbrke: () => "⦌",
	rbrksld: () => "⦎",
	rbrkslu: () => "⦐",
	rcaron: () => "ř",
	rcedil: () => "ŗ",
	rceil: () => "⌉",
	rcub: () => "}",
	rcy: () => "р",
	rdca: () => "⤷",
	rdldhar: () => "⥩",
	rdquo: () => "”",
	rdquor: () => "”",
	rdsh: () => "↳",
	real: () => "ℜ",
	realine: () => "ℛ",
	realpart: () => "ℜ",
	reals: () => "ℝ",
	rect: () => "▭",
	reg: () => "®",
	rfisht: () => "⥽",
	rfloor: () => "⌋",
	rfr: () => Ql,
	rhard: () => "⇁",
	rharu: () => "⇀",
	rharul: () => "⥬",
	rho: () => "ρ",
	rhov: () => "ϱ",
	rightarrow: () => "→",
	rightarrowtail: () => "↣",
	rightharpoondown: () => "⇁",
	rightharpoonup: () => "⇀",
	rightleftarrows: () => "⇄",
	rightleftharpoons: () => "⇌",
	rightrightarrows: () => "⇉",
	rightsquigarrow: () => "↝",
	rightthreetimes: () => "⋌",
	ring: () => "˚",
	risingdotseq: () => "≓",
	rlarr: () => "⇄",
	rlhar: () => "⇌",
	rlm: () => "‏",
	rmoust: () => "⎱",
	rmoustache: () => "⎱",
	rnmid: () => "⫮",
	roang: () => "⟭",
	roarr: () => "⇾",
	robrk: () => "⟧",
	ropar: () => "⦆",
	ropf: () => $l,
	roplus: () => "⨮",
	rotimes: () => "⨵",
	rpar: () => ")",
	rpargt: () => "⦔",
	rppolint: () => "⨒",
	rrarr: () => "⇉",
	rsaquo: () => "›",
	rscr: () => eu,
	rsh: () => "↱",
	rsqb: () => "]",
	rsquo: () => "’",
	rsquor: () => "’",
	rthree: () => "⋌",
	rtimes: () => "⋊",
	rtri: () => "▹",
	rtrie: () => "⊵",
	rtrif: () => "▸",
	rtriltri: () => "⧎",
	ruluhar: () => "⥨",
	rx: () => "℞",
	sacute: () => "ś",
	sbquo: () => "‚",
	sc: () => "≻",
	scE: () => "⪴",
	scap: () => "⪸",
	scaron: () => "š",
	sccue: () => "≽",
	sce: () => "⪰",
	scedil: () => "ş",
	scirc: () => "ŝ",
	scnE: () => "⪶",
	scnap: () => "⪺",
	scnsim: () => "⋩",
	scpolint: () => "⨓",
	scsim: () => "≿",
	scy: () => "с",
	sdot: () => "⋅",
	sdotb: () => "⊡",
	sdote: () => "⩦",
	seArr: () => "⇘",
	searhk: () => "⤥",
	searr: () => "↘",
	searrow: () => "↘",
	sect: () => "§",
	semi: () => ";",
	seswar: () => "⤩",
	setminus: () => "∖",
	setmn: () => "∖",
	sext: () => "✶",
	sfr: () => nu,
	sfrown: () => "⌢",
	sharp: () => "♯",
	shchcy: () => "щ",
	shcy: () => "ш",
	shortmid: () => "∣",
	shortparallel: () => "∥",
	shy: () => "­",
	sigma: () => "σ",
	sigmaf: () => "ς",
	sigmav: () => "ς",
	sim: () => "∼",
	simdot: () => "⩪",
	sime: () => "≃",
	simeq: () => "≃",
	simg: () => "⪞",
	simgE: () => "⪠",
	siml: () => "⪝",
	simlE: () => "⪟",
	simne: () => "≆",
	simplus: () => "⨤",
	simrarr: () => "⥲",
	slarr: () => "←",
	smallsetminus: () => "∖",
	smashp: () => "⨳",
	smeparsl: () => "⧤",
	smid: () => "∣",
	smile: () => "⌣",
	smt: () => "⪪",
	smte: () => "⪬",
	smtes: () => ru,
	softcy: () => "ь",
	sol: () => "/",
	solb: () => "⧄",
	solbar: () => "⌿",
	sopf: () => au,
	spades: () => "♠",
	spadesuit: () => "♠",
	spar: () => "∥",
	sqcap: () => "⊓",
	sqcaps: () => ou,
	sqcup: () => "⊔",
	sqcups: () => su,
	sqsub: () => "⊏",
	sqsube: () => "⊑",
	sqsubset: () => "⊏",
	sqsubseteq: () => "⊑",
	sqsup: () => "⊐",
	sqsupe: () => "⊒",
	sqsupset: () => "⊐",
	sqsupseteq: () => "⊒",
	squ: () => "□",
	square: () => "□",
	squarf: () => "▪",
	squf: () => "▪",
	srarr: () => "→",
	sscr: () => lu,
	ssetmn: () => "∖",
	ssmile: () => "⌣",
	sstarf: () => "⋆",
	star: () => "☆",
	starf: () => "★",
	straightepsilon: () => "ϵ",
	straightphi: () => "ϕ",
	strns: () => "¯",
	sub: () => "⊂",
	subE: () => "⫅",
	subdot: () => "⪽",
	sube: () => "⊆",
	subedot: () => "⫃",
	submult: () => "⫁",
	subnE: () => "⫋",
	subne: () => "⊊",
	subplus: () => "⪿",
	subrarr: () => "⥹",
	subset: () => "⊂",
	subseteq: () => "⊆",
	subseteqq: () => "⫅",
	subsetneq: () => "⊊",
	subsetneqq: () => "⫋",
	subsim: () => "⫇",
	subsub: () => "⫕",
	subsup: () => "⫓",
	succ: () => "≻",
	succapprox: () => "⪸",
	succcurlyeq: () => "≽",
	succeq: () => "⪰",
	succnapprox: () => "⪺",
	succneqq: () => "⪶",
	succnsim: () => "⋩",
	succsim: () => "≿",
	sum: () => "∑",
	sung: () => "♪",
	sup: () => "⊃",
	sup1: () => "¹",
	sup2: () => "²",
	sup3: () => "³",
	supE: () => "⫆",
	supdot: () => "⪾",
	supdsub: () => "⫘",
	supe: () => "⊇",
	supedot: () => "⫄",
	suphsol: () => "⟉",
	suphsub: () => "⫗",
	suplarr: () => "⥻",
	supmult: () => "⫂",
	supnE: () => "⫌",
	supne: () => "⊋",
	supplus: () => "⫀",
	supset: () => "⊃",
	supseteq: () => "⊇",
	supseteqq: () => "⫆",
	supsetneq: () => "⊋",
	supsetneqq: () => "⫌",
	supsim: () => "⫈",
	supsub: () => "⫔",
	supsup: () => "⫖",
	swArr: () => "⇙",
	swarhk: () => "⤦",
	swarr: () => "↙",
	swarrow: () => "↙",
	swnwar: () => "⤪",
	szlig: () => "ß",
	target: () => "⌖",
	tau: () => "τ",
	tbrk: () => "⎴",
	tcaron: () => "ť",
	tcedil: () => "ţ",
	tcy: () => "т",
	tdot: () => "⃛",
	telrec: () => "⌕",
	tfr: () => du,
	there4: () => "∴",
	therefore: () => "∴",
	theta: () => "θ",
	thetasym: () => "ϑ",
	thetav: () => "ϑ",
	thickapprox: () => "≈",
	thicksim: () => "∼",
	thinsp: () => " ",
	thkap: () => "≈",
	thksim: () => "∼",
	thorn: () => "þ",
	tilde: () => "˜",
	times: () => "×",
	timesb: () => "⊠",
	timesbar: () => "⨱",
	timesd: () => "⨰",
	tint: () => "∭",
	toea: () => "⤨",
	top: () => "⊤",
	topbot: () => "⌶",
	topcir: () => "⫱",
	topf: () => mu,
	topfork: () => "⫚",
	tosa: () => "⤩",
	tprime: () => "‴",
	trade: () => "™",
	triangle: () => "▵",
	triangledown: () => "▿",
	triangleleft: () => "◃",
	trianglelefteq: () => "⊴",
	triangleq: () => "≜",
	triangleright: () => "▹",
	trianglerighteq: () => "⊵",
	tridot: () => "◬",
	trie: () => "≜",
	triminus: () => "⨺",
	triplus: () => "⨹",
	trisb: () => "⧍",
	tritime: () => "⨻",
	trpezium: () => "⏢",
	tscr: () => gu,
	tscy: () => "ц",
	tshcy: () => "ћ",
	tstrok: () => "ŧ",
	twixt: () => "≬",
	twoheadleftarrow: () => "↞",
	twoheadrightarrow: () => "↠",
	uArr: () => "⇑",
	uHar: () => "⥣",
	uacute: () => "ú",
	uarr: () => "↑",
	ubrcy: () => "ў",
	ubreve: () => "ŭ",
	ucirc: () => "û",
	ucy: () => "у",
	udarr: () => "⇅",
	udblac: () => "ű",
	udhar: () => "⥮",
	ufisht: () => "⥾",
	ufr: () => vu,
	ugrave: () => "ù",
	uharl: () => "↿",
	uharr: () => "↾",
	uhblk: () => "▀",
	ulcorn: () => "⌜",
	ulcorner: () => "⌜",
	ulcrop: () => "⌏",
	ultri: () => "◸",
	umacr: () => "ū",
	uml: () => "¨",
	uogon: () => "ų",
	uopf: () => bu,
	uparrow: () => "↑",
	updownarrow: () => "↕",
	upharpoonleft: () => "↿",
	upharpoonright: () => "↾",
	uplus: () => "⊎",
	upsi: () => "υ",
	upsih: () => "ϒ",
	upsilon: () => "υ",
	upuparrows: () => "⇈",
	urcorn: () => "⌝",
	urcorner: () => "⌝",
	urcrop: () => "⌎",
	uring: () => "ů",
	urtri: () => "◹",
	uscr: () => Su,
	utdot: () => "⋰",
	utilde: () => "ũ",
	utri: () => "▵",
	utrif: () => "▴",
	uuarr: () => "⇈",
	uuml: () => "ü",
	uwangle: () => "⦧",
	vArr: () => "⇕",
	vBar: () => "⫨",
	vBarv: () => "⫩",
	vDash: () => "⊨",
	vangrt: () => "⦜",
	varepsilon: () => "ϵ",
	varkappa: () => "ϰ",
	varnothing: () => "∅",
	varphi: () => "ϕ",
	varpi: () => "ϖ",
	varpropto: () => "∝",
	varr: () => "↕",
	varrho: () => "ϱ",
	varsigma: () => "ς",
	varsubsetneq: () => Cu,
	varsubsetneqq: () => wu,
	varsupsetneq: () => Tu,
	varsupsetneqq: () => Eu,
	vartheta: () => "ϑ",
	vartriangleleft: () => "⊲",
	vartriangleright: () => "⊳",
	vcy: () => "в",
	vdash: () => "⊢",
	vee: () => "∨",
	veebar: () => "⊻",
	veeeq: () => "≚",
	vellip: () => "⋮",
	verbar: () => "|",
	vert: () => "|",
	vfr: () => Ou,
	vltri: () => "⊲",
	vnsub: () => ku,
	vnsup: () => Au,
	vopf: () => Mu,
	vprop: () => "∝",
	vrtri: () => "⊳",
	vscr: () => Pu,
	vsubnE: () => Fu,
	vsubne: () => Iu,
	vsupnE: () => Lu,
	vsupne: () => Ru,
	vzigzag: () => "⦚",
	wcirc: () => "ŵ",
	wedbar: () => "⩟",
	wedge: () => "∧",
	wedgeq: () => "≙",
	weierp: () => "℘",
	wfr: () => Bu,
	wopf: () => Hu,
	wp: () => "℘",
	wr: () => "≀",
	wreath: () => "≀",
	wscr: () => Wu,
	xcap: () => "⋂",
	xcirc: () => "◯",
	xcup: () => "⋃",
	xdtri: () => "▽",
	xfr: () => Ku,
	xhArr: () => "⟺",
	xharr: () => "⟷",
	xi: () => "ξ",
	xlArr: () => "⟸",
	xlarr: () => "⟵",
	xmap: () => "⟼",
	xnis: () => "⋻",
	xodot: () => "⨀",
	xopf: () => Ju,
	xoplus: () => "⨁",
	xotime: () => "⨂",
	xrArr: () => "⟹",
	xrarr: () => "⟶",
	xscr: () => Xu,
	xsqcup: () => "⨆",
	xuplus: () => "⨄",
	xutri: () => "△",
	xvee: () => "⋁",
	xwedge: () => "⋀",
	yacute: () => "ý",
	yacy: () => "я",
	ycirc: () => "ŷ",
	ycy: () => "ы",
	yen: () => "¥",
	yfr: () => Qu,
	yicy: () => "ї",
	yopf: () => ed,
	yscr: () => nd,
	yucy: () => "ю",
	yuml: () => "ÿ",
	zacute: () => "ź",
	zcaron: () => "ž",
	zcy: () => "з",
	zdot: () => "ż",
	zeetrf: () => "ℨ",
	zeta: () => "ζ",
	zfr: () => rd,
	zhcy: () => "ж",
	zigrarr: () => "⇝",
	zopf: () => id,
	zscr: () => od,
	zwj: () => "‍",
	zwnj: () => "‌"
}), Qo, $o, es, ts, ns, rs, is, as, os, ss, cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As, js, Ms, Ns, Ps, Fs, Is, Ls, Rs, zs, Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs, $s, ec, tc, nc, rc, ic, ac, oc, sc, cc, lc, uc, dc, fc, pc, mc, hc, gc, _c, vc, yc, bc, xc, Sc, Cc, wc, Tc, Ec, Dc, Oc, kc, Ac, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl, il, al, ol, sl, cl, ll, ul, dl, fl, pl, ml, hl, gl, _l, vl, yl, bl, xl, Sl, Cl, wl, Tl, El, Dl, Ol, kl, Al, jl, Ml, Nl, Pl, Fl, Il, Ll, Rl, zl, Bl, Vl, Hl, Ul, Wl, Gl, Kl, ql, Jl, Yl, Xl, Zl, Ql, $l, eu, tu, nu, ru, iu, au, ou, su, cu, lu, uu, du, fu, pu, mu, hu, gu, _u, vu, yu, bu, xu, Su, Cu, wu, Tu, Eu, Du, Ou, ku, Au, ju, Mu, Nu, Pu, Fu, Iu, Lu, Ru, zu, Bu, Vu, Hu, Uu, Wu, Gu, Ku, qu, Ju, Yu, Xu, Zu, Qu, $u, ed, td, nd, rd, id, ad, od, sd, cd = o((() => {
	Qo = "∾̳", $o = "𝔄", es = "𝔞", ts = "𝔸", ns = "𝕒", rs = "𝒜", is = "𝒶", as = "𝔅", os = "𝔟", ss = "=⃥", cs = "≡⃥", ls = "𝔹", us = "𝕓", ds = "𝒷", fs = "∩︀", ps = "𝔠", ms = "𝕔", hs = "𝒞", gs = "𝒸", _s = "∪︀", vs = "𝔇", ys = "𝔡", bs = "𝔻", xs = "𝕕", Ss = "𝒟", Cs = "𝒹", ws = "𝔈", Ts = "𝔢", Es = "𝔼", Ds = "𝕖", Os = "𝔉", ks = "𝔣", As = "𝔽", js = "𝕗", Ms = "𝒻", Ns = "⋛︀", Ps = "𝔊", Fs = "𝔤", Is = "𝔾", Ls = "𝕘", Rs = "𝒢", zs = "≩︀", Bs = "≩︀", Vs = "𝔥", Hs = "𝕙", Us = "𝒽", Ws = "𝔦", Gs = "𝕀", Ks = "𝕚", qs = "𝒾", Js = "𝔍", Ys = "𝔧", Xs = "𝕁", Zs = "𝕛", Qs = "𝒥", $s = "𝒿", ec = "𝔎", tc = "𝔨", nc = "𝕂", rc = "𝕜", ic = "𝒦", ac = "𝓀", oc = "⪭︀", sc = "⋚︀", cc = "𝔏", lc = "𝔩", uc = "𝕃", dc = "𝕝", fc = "𝓁", pc = "≨︀", mc = "≨︀", hc = "𝔐", gc = "𝔪", _c = "𝕄", vc = "𝕞", yc = "𝓂", bc = "∠⃒", xc = "⩰̸", Sc = "≋̸", Cc = "≎̸", wc = "≏̸", Tc = "⩭̸", Ec = "≐̸", Dc = "≂̸", Oc = "𝔑", kc = "𝔫", Ac = "≧̸", jc = "≧̸", Mc = "⩾̸", Nc = "⩾̸", Pc = "⋙̸", Fc = "≫⃒", Ic = "≫̸", Lc = "≦̸", Rc = "≦̸", zc = "⩽̸", Bc = "⩽̸", Vc = "⋘̸", Hc = "≪⃒", Uc = "≪̸", Wc = "𝕟", Gc = "≂̸", Kc = "≧̸", qc = "≫̸", Jc = "⩾̸", Yc = "≎̸", Xc = "≏̸", Zc = "⋵̸", Qc = "⋹̸", $c = "⧏̸", el = "≪̸", tl = "⩽̸", nl = "⪢̸", rl = "⪡̸", il = "⪯̸", al = "⧐̸", ol = "⊏̸", sl = "⊐̸", cl = "⊂⃒", ll = "⪰̸", ul = "≿̸", dl = "⊃⃒", fl = "⫽⃥", pl = "∂̸", ml = "⪯̸", hl = "⪯̸", gl = "⤳̸", _l = "↝̸", vl = "⪰̸", yl = "𝒩", bl = "𝓃", xl = "⫅̸", Sl = "⊂⃒", Cl = "⫅̸", wl = "⪰̸", Tl = "⫆̸", El = "⊃⃒", Dl = "⫆̸", Ol = "≍⃒", kl = "≥⃒", Al = ">⃒", jl = "≤⃒", Ml = "<⃒", Nl = "⊴⃒", Pl = "⊵⃒", Fl = "∼⃒", Il = "𝔒", Ll = "𝔬", Rl = "𝕆", zl = "𝕠", Bl = "𝒪", Vl = "𝔓", Hl = "𝔭", Ul = "𝕡", Wl = "𝒫", Gl = "𝓅", Kl = "𝔔", ql = "𝔮", Jl = "𝕢", Yl = "𝒬", Xl = "𝓆", Zl = "∽̱", Ql = "𝔯", $l = "𝕣", eu = "𝓇", tu = "𝔖", nu = "𝔰", ru = "⪬︀", iu = "𝕊", au = "𝕤", ou = "⊓︀", su = "⊔︀", cu = "𝒮", lu = "𝓈", uu = "𝔗", du = "𝔱", fu = "  ", pu = "𝕋", mu = "𝕥", hu = "𝒯", gu = "𝓉", _u = "𝔘", vu = "𝔲", yu = "𝕌", bu = "𝕦", xu = "𝒰", Su = "𝓊", Cu = "⊊︀", wu = "⫋︀", Tu = "⊋︀", Eu = "⫌︀", Du = "𝔙", Ou = "𝔳", ku = "⊂⃒", Au = "⊃⃒", ju = "𝕍", Mu = "𝕧", Nu = "𝒱", Pu = "𝓋", Fu = "⫋︀", Iu = "⊊︀", Lu = "⫌︀", Ru = "⊋︀", zu = "𝔚", Bu = "𝔴", Vu = "𝕎", Hu = "𝕨", Uu = "𝒲", Wu = "𝓌", Gu = "𝔛", Ku = "𝔵", qu = "𝕏", Ju = "𝕩", Yu = "𝒳", Xu = "𝓍", Zu = "𝔜", Qu = "𝔶", $u = "𝕐", ed = "𝕪", td = "𝒴", nd = "𝓎", rd = "𝔷", id = "𝕫", ad = "𝒵", od = "𝓏", sd = {
		Aacute: "Á",
		aacute: "á",
		Abreve: "Ă",
		abreve: "ă",
		ac: "∾",
		acd: "∿",
		acE: Qo,
		Acirc: "Â",
		acirc: "â",
		acute: "´",
		Acy: "А",
		acy: "а",
		AElig: "Æ",
		aelig: "æ",
		af: "⁡",
		Afr: $o,
		afr: es,
		Agrave: "À",
		agrave: "à",
		alefsym: "ℵ",
		aleph: "ℵ",
		Alpha: "Α",
		alpha: "α",
		Amacr: "Ā",
		amacr: "ā",
		amalg: "⨿",
		amp: "&",
		AMP: "&",
		andand: "⩕",
		And: "⩓",
		and: "∧",
		andd: "⩜",
		andslope: "⩘",
		andv: "⩚",
		ang: "∠",
		ange: "⦤",
		angle: "∠",
		angmsdaa: "⦨",
		angmsdab: "⦩",
		angmsdac: "⦪",
		angmsdad: "⦫",
		angmsdae: "⦬",
		angmsdaf: "⦭",
		angmsdag: "⦮",
		angmsdah: "⦯",
		angmsd: "∡",
		angrt: "∟",
		angrtvb: "⊾",
		angrtvbd: "⦝",
		angsph: "∢",
		angst: "Å",
		angzarr: "⍼",
		Aogon: "Ą",
		aogon: "ą",
		Aopf: ts,
		aopf: ns,
		apacir: "⩯",
		ap: "≈",
		apE: "⩰",
		ape: "≊",
		apid: "≋",
		apos: "'",
		ApplyFunction: "⁡",
		approx: "≈",
		approxeq: "≊",
		Aring: "Å",
		aring: "å",
		Ascr: rs,
		ascr: is,
		Assign: "≔",
		ast: "*",
		asymp: "≈",
		asympeq: "≍",
		Atilde: "Ã",
		atilde: "ã",
		Auml: "Ä",
		auml: "ä",
		awconint: "∳",
		awint: "⨑",
		backcong: "≌",
		backepsilon: "϶",
		backprime: "‵",
		backsim: "∽",
		backsimeq: "⋍",
		Backslash: "∖",
		Barv: "⫧",
		barvee: "⊽",
		barwed: "⌅",
		Barwed: "⌆",
		barwedge: "⌅",
		bbrk: "⎵",
		bbrktbrk: "⎶",
		bcong: "≌",
		Bcy: "Б",
		bcy: "б",
		bdquo: "„",
		becaus: "∵",
		because: "∵",
		Because: "∵",
		bemptyv: "⦰",
		bepsi: "϶",
		bernou: "ℬ",
		Bernoullis: "ℬ",
		Beta: "Β",
		beta: "β",
		beth: "ℶ",
		between: "≬",
		Bfr: as,
		bfr: os,
		bigcap: "⋂",
		bigcirc: "◯",
		bigcup: "⋃",
		bigodot: "⨀",
		bigoplus: "⨁",
		bigotimes: "⨂",
		bigsqcup: "⨆",
		bigstar: "★",
		bigtriangledown: "▽",
		bigtriangleup: "△",
		biguplus: "⨄",
		bigvee: "⋁",
		bigwedge: "⋀",
		bkarow: "⤍",
		blacklozenge: "⧫",
		blacksquare: "▪",
		blacktriangle: "▴",
		blacktriangledown: "▾",
		blacktriangleleft: "◂",
		blacktriangleright: "▸",
		blank: "␣",
		blk12: "▒",
		blk14: "░",
		blk34: "▓",
		block: "█",
		bne: ss,
		bnequiv: cs,
		bNot: "⫭",
		bnot: "⌐",
		Bopf: ls,
		bopf: us,
		bot: "⊥",
		bottom: "⊥",
		bowtie: "⋈",
		boxbox: "⧉",
		boxdl: "┐",
		boxdL: "╕",
		boxDl: "╖",
		boxDL: "╗",
		boxdr: "┌",
		boxdR: "╒",
		boxDr: "╓",
		boxDR: "╔",
		boxh: "─",
		boxH: "═",
		boxhd: "┬",
		boxHd: "╤",
		boxhD: "╥",
		boxHD: "╦",
		boxhu: "┴",
		boxHu: "╧",
		boxhU: "╨",
		boxHU: "╩",
		boxminus: "⊟",
		boxplus: "⊞",
		boxtimes: "⊠",
		boxul: "┘",
		boxuL: "╛",
		boxUl: "╜",
		boxUL: "╝",
		boxur: "└",
		boxuR: "╘",
		boxUr: "╙",
		boxUR: "╚",
		boxv: "│",
		boxV: "║",
		boxvh: "┼",
		boxvH: "╪",
		boxVh: "╫",
		boxVH: "╬",
		boxvl: "┤",
		boxvL: "╡",
		boxVl: "╢",
		boxVL: "╣",
		boxvr: "├",
		boxvR: "╞",
		boxVr: "╟",
		boxVR: "╠",
		bprime: "‵",
		breve: "˘",
		Breve: "˘",
		brvbar: "¦",
		bscr: ds,
		Bscr: "ℬ",
		bsemi: "⁏",
		bsim: "∽",
		bsime: "⋍",
		bsolb: "⧅",
		bsol: "\\",
		bsolhsub: "⟈",
		bull: "•",
		bullet: "•",
		bump: "≎",
		bumpE: "⪮",
		bumpe: "≏",
		Bumpeq: "≎",
		bumpeq: "≏",
		Cacute: "Ć",
		cacute: "ć",
		capand: "⩄",
		capbrcup: "⩉",
		capcap: "⩋",
		cap: "∩",
		Cap: "⋒",
		capcup: "⩇",
		capdot: "⩀",
		CapitalDifferentialD: "ⅅ",
		caps: fs,
		caret: "⁁",
		caron: "ˇ",
		Cayleys: "ℭ",
		ccaps: "⩍",
		Ccaron: "Č",
		ccaron: "č",
		Ccedil: "Ç",
		ccedil: "ç",
		Ccirc: "Ĉ",
		ccirc: "ĉ",
		Cconint: "∰",
		ccups: "⩌",
		ccupssm: "⩐",
		Cdot: "Ċ",
		cdot: "ċ",
		cedil: "¸",
		Cedilla: "¸",
		cemptyv: "⦲",
		cent: "¢",
		centerdot: "·",
		CenterDot: "·",
		cfr: ps,
		Cfr: "ℭ",
		CHcy: "Ч",
		chcy: "ч",
		check: "✓",
		checkmark: "✓",
		Chi: "Χ",
		chi: "χ",
		circ: "ˆ",
		circeq: "≗",
		circlearrowleft: "↺",
		circlearrowright: "↻",
		circledast: "⊛",
		circledcirc: "⊚",
		circleddash: "⊝",
		CircleDot: "⊙",
		circledR: "®",
		circledS: "Ⓢ",
		CircleMinus: "⊖",
		CirclePlus: "⊕",
		CircleTimes: "⊗",
		cir: "○",
		cirE: "⧃",
		cire: "≗",
		cirfnint: "⨐",
		cirmid: "⫯",
		cirscir: "⧂",
		ClockwiseContourIntegral: "∲",
		CloseCurlyDoubleQuote: "”",
		CloseCurlyQuote: "’",
		clubs: "♣",
		clubsuit: "♣",
		colon: ":",
		Colon: "∷",
		Colone: "⩴",
		colone: "≔",
		coloneq: "≔",
		comma: ",",
		commat: "@",
		comp: "∁",
		compfn: "∘",
		complement: "∁",
		complexes: "ℂ",
		cong: "≅",
		congdot: "⩭",
		Congruent: "≡",
		conint: "∮",
		Conint: "∯",
		ContourIntegral: "∮",
		copf: ms,
		Copf: "ℂ",
		coprod: "∐",
		Coproduct: "∐",
		copy: "©",
		COPY: "©",
		copysr: "℗",
		CounterClockwiseContourIntegral: "∳",
		crarr: "↵",
		cross: "✗",
		Cross: "⨯",
		Cscr: hs,
		cscr: gs,
		csub: "⫏",
		csube: "⫑",
		csup: "⫐",
		csupe: "⫒",
		ctdot: "⋯",
		cudarrl: "⤸",
		cudarrr: "⤵",
		cuepr: "⋞",
		cuesc: "⋟",
		cularr: "↶",
		cularrp: "⤽",
		cupbrcap: "⩈",
		cupcap: "⩆",
		CupCap: "≍",
		cup: "∪",
		Cup: "⋓",
		cupcup: "⩊",
		cupdot: "⊍",
		cupor: "⩅",
		cups: _s,
		curarr: "↷",
		curarrm: "⤼",
		curlyeqprec: "⋞",
		curlyeqsucc: "⋟",
		curlyvee: "⋎",
		curlywedge: "⋏",
		curren: "¤",
		curvearrowleft: "↶",
		curvearrowright: "↷",
		cuvee: "⋎",
		cuwed: "⋏",
		cwconint: "∲",
		cwint: "∱",
		cylcty: "⌭",
		dagger: "†",
		Dagger: "‡",
		daleth: "ℸ",
		darr: "↓",
		Darr: "↡",
		dArr: "⇓",
		dash: "‐",
		Dashv: "⫤",
		dashv: "⊣",
		dbkarow: "⤏",
		dblac: "˝",
		Dcaron: "Ď",
		dcaron: "ď",
		Dcy: "Д",
		dcy: "д",
		ddagger: "‡",
		ddarr: "⇊",
		DD: "ⅅ",
		dd: "ⅆ",
		DDotrahd: "⤑",
		ddotseq: "⩷",
		deg: "°",
		Del: "∇",
		Delta: "Δ",
		delta: "δ",
		demptyv: "⦱",
		dfisht: "⥿",
		Dfr: vs,
		dfr: ys,
		dHar: "⥥",
		dharl: "⇃",
		dharr: "⇂",
		DiacriticalAcute: "´",
		DiacriticalDot: "˙",
		DiacriticalDoubleAcute: "˝",
		DiacriticalGrave: "`",
		DiacriticalTilde: "˜",
		diam: "⋄",
		diamond: "⋄",
		Diamond: "⋄",
		diamondsuit: "♦",
		diams: "♦",
		die: "¨",
		DifferentialD: "ⅆ",
		digamma: "ϝ",
		disin: "⋲",
		div: "÷",
		divide: "÷",
		divideontimes: "⋇",
		divonx: "⋇",
		DJcy: "Ђ",
		djcy: "ђ",
		dlcorn: "⌞",
		dlcrop: "⌍",
		dollar: "$",
		Dopf: bs,
		dopf: xs,
		Dot: "¨",
		dot: "˙",
		DotDot: "⃜",
		doteq: "≐",
		doteqdot: "≑",
		DotEqual: "≐",
		dotminus: "∸",
		dotplus: "∔",
		dotsquare: "⊡",
		doublebarwedge: "⌆",
		DoubleContourIntegral: "∯",
		DoubleDot: "¨",
		DoubleDownArrow: "⇓",
		DoubleLeftArrow: "⇐",
		DoubleLeftRightArrow: "⇔",
		DoubleLeftTee: "⫤",
		DoubleLongLeftArrow: "⟸",
		DoubleLongLeftRightArrow: "⟺",
		DoubleLongRightArrow: "⟹",
		DoubleRightArrow: "⇒",
		DoubleRightTee: "⊨",
		DoubleUpArrow: "⇑",
		DoubleUpDownArrow: "⇕",
		DoubleVerticalBar: "∥",
		DownArrowBar: "⤓",
		downarrow: "↓",
		DownArrow: "↓",
		Downarrow: "⇓",
		DownArrowUpArrow: "⇵",
		DownBreve: "̑",
		downdownarrows: "⇊",
		downharpoonleft: "⇃",
		downharpoonright: "⇂",
		DownLeftRightVector: "⥐",
		DownLeftTeeVector: "⥞",
		DownLeftVectorBar: "⥖",
		DownLeftVector: "↽",
		DownRightTeeVector: "⥟",
		DownRightVectorBar: "⥗",
		DownRightVector: "⇁",
		DownTeeArrow: "↧",
		DownTee: "⊤",
		drbkarow: "⤐",
		drcorn: "⌟",
		drcrop: "⌌",
		Dscr: Ss,
		dscr: Cs,
		DScy: "Ѕ",
		dscy: "ѕ",
		dsol: "⧶",
		Dstrok: "Đ",
		dstrok: "đ",
		dtdot: "⋱",
		dtri: "▿",
		dtrif: "▾",
		duarr: "⇵",
		duhar: "⥯",
		dwangle: "⦦",
		DZcy: "Џ",
		dzcy: "џ",
		dzigrarr: "⟿",
		Eacute: "É",
		eacute: "é",
		easter: "⩮",
		Ecaron: "Ě",
		ecaron: "ě",
		Ecirc: "Ê",
		ecirc: "ê",
		ecir: "≖",
		ecolon: "≕",
		Ecy: "Э",
		ecy: "э",
		eDDot: "⩷",
		Edot: "Ė",
		edot: "ė",
		eDot: "≑",
		ee: "ⅇ",
		efDot: "≒",
		Efr: ws,
		efr: Ts,
		eg: "⪚",
		Egrave: "È",
		egrave: "è",
		egs: "⪖",
		egsdot: "⪘",
		el: "⪙",
		Element: "∈",
		elinters: "⏧",
		ell: "ℓ",
		els: "⪕",
		elsdot: "⪗",
		Emacr: "Ē",
		emacr: "ē",
		empty: "∅",
		emptyset: "∅",
		EmptySmallSquare: "◻",
		emptyv: "∅",
		EmptyVerySmallSquare: "▫",
		emsp13: " ",
		emsp14: " ",
		emsp: " ",
		ENG: "Ŋ",
		eng: "ŋ",
		ensp: " ",
		Eogon: "Ę",
		eogon: "ę",
		Eopf: Es,
		eopf: Ds,
		epar: "⋕",
		eparsl: "⧣",
		eplus: "⩱",
		epsi: "ε",
		Epsilon: "Ε",
		epsilon: "ε",
		epsiv: "ϵ",
		eqcirc: "≖",
		eqcolon: "≕",
		eqsim: "≂",
		eqslantgtr: "⪖",
		eqslantless: "⪕",
		Equal: "⩵",
		equals: "=",
		EqualTilde: "≂",
		equest: "≟",
		Equilibrium: "⇌",
		equiv: "≡",
		equivDD: "⩸",
		eqvparsl: "⧥",
		erarr: "⥱",
		erDot: "≓",
		escr: "ℯ",
		Escr: "ℰ",
		esdot: "≐",
		Esim: "⩳",
		esim: "≂",
		Eta: "Η",
		eta: "η",
		ETH: "Ð",
		eth: "ð",
		Euml: "Ë",
		euml: "ë",
		euro: "€",
		excl: "!",
		exist: "∃",
		Exists: "∃",
		expectation: "ℰ",
		exponentiale: "ⅇ",
		ExponentialE: "ⅇ",
		fallingdotseq: "≒",
		Fcy: "Ф",
		fcy: "ф",
		female: "♀",
		ffilig: "ﬃ",
		fflig: "ﬀ",
		ffllig: "ﬄ",
		Ffr: Os,
		ffr: ks,
		filig: "ﬁ",
		FilledSmallSquare: "◼",
		FilledVerySmallSquare: "▪",
		fjlig: "fj",
		flat: "♭",
		fllig: "ﬂ",
		fltns: "▱",
		fnof: "ƒ",
		Fopf: As,
		fopf: js,
		forall: "∀",
		ForAll: "∀",
		fork: "⋔",
		forkv: "⫙",
		Fouriertrf: "ℱ",
		fpartint: "⨍",
		frac12: "½",
		frac13: "⅓",
		frac14: "¼",
		frac15: "⅕",
		frac16: "⅙",
		frac18: "⅛",
		frac23: "⅔",
		frac25: "⅖",
		frac34: "¾",
		frac35: "⅗",
		frac38: "⅜",
		frac45: "⅘",
		frac56: "⅚",
		frac58: "⅝",
		frac78: "⅞",
		frasl: "⁄",
		frown: "⌢",
		fscr: Ms,
		Fscr: "ℱ",
		gacute: "ǵ",
		Gamma: "Γ",
		gamma: "γ",
		Gammad: "Ϝ",
		gammad: "ϝ",
		gap: "⪆",
		Gbreve: "Ğ",
		gbreve: "ğ",
		Gcedil: "Ģ",
		Gcirc: "Ĝ",
		gcirc: "ĝ",
		Gcy: "Г",
		gcy: "г",
		Gdot: "Ġ",
		gdot: "ġ",
		ge: "≥",
		gE: "≧",
		gEl: "⪌",
		gel: "⋛",
		geq: "≥",
		geqq: "≧",
		geqslant: "⩾",
		gescc: "⪩",
		ges: "⩾",
		gesdot: "⪀",
		gesdoto: "⪂",
		gesdotol: "⪄",
		gesl: Ns,
		gesles: "⪔",
		Gfr: Ps,
		gfr: Fs,
		gg: "≫",
		Gg: "⋙",
		ggg: "⋙",
		gimel: "ℷ",
		GJcy: "Ѓ",
		gjcy: "ѓ",
		gla: "⪥",
		gl: "≷",
		glE: "⪒",
		glj: "⪤",
		gnap: "⪊",
		gnapprox: "⪊",
		gne: "⪈",
		gnE: "≩",
		gneq: "⪈",
		gneqq: "≩",
		gnsim: "⋧",
		Gopf: Is,
		gopf: Ls,
		grave: "`",
		GreaterEqual: "≥",
		GreaterEqualLess: "⋛",
		GreaterFullEqual: "≧",
		GreaterGreater: "⪢",
		GreaterLess: "≷",
		GreaterSlantEqual: "⩾",
		GreaterTilde: "≳",
		Gscr: Rs,
		gscr: "ℊ",
		gsim: "≳",
		gsime: "⪎",
		gsiml: "⪐",
		gtcc: "⪧",
		gtcir: "⩺",
		gt: ">",
		GT: ">",
		Gt: "≫",
		gtdot: "⋗",
		gtlPar: "⦕",
		gtquest: "⩼",
		gtrapprox: "⪆",
		gtrarr: "⥸",
		gtrdot: "⋗",
		gtreqless: "⋛",
		gtreqqless: "⪌",
		gtrless: "≷",
		gtrsim: "≳",
		gvertneqq: zs,
		gvnE: Bs,
		Hacek: "ˇ",
		hairsp: " ",
		half: "½",
		hamilt: "ℋ",
		HARDcy: "Ъ",
		hardcy: "ъ",
		harrcir: "⥈",
		harr: "↔",
		hArr: "⇔",
		harrw: "↭",
		Hat: "^",
		hbar: "ℏ",
		Hcirc: "Ĥ",
		hcirc: "ĥ",
		hearts: "♥",
		heartsuit: "♥",
		hellip: "…",
		hercon: "⊹",
		hfr: Vs,
		Hfr: "ℌ",
		HilbertSpace: "ℋ",
		hksearow: "⤥",
		hkswarow: "⤦",
		hoarr: "⇿",
		homtht: "∻",
		hookleftarrow: "↩",
		hookrightarrow: "↪",
		hopf: Hs,
		Hopf: "ℍ",
		horbar: "―",
		HorizontalLine: "─",
		hscr: Us,
		Hscr: "ℋ",
		hslash: "ℏ",
		Hstrok: "Ħ",
		hstrok: "ħ",
		HumpDownHump: "≎",
		HumpEqual: "≏",
		hybull: "⁃",
		hyphen: "‐",
		Iacute: "Í",
		iacute: "í",
		ic: "⁣",
		Icirc: "Î",
		icirc: "î",
		Icy: "И",
		icy: "и",
		Idot: "İ",
		IEcy: "Е",
		iecy: "е",
		iexcl: "¡",
		iff: "⇔",
		ifr: Ws,
		Ifr: "ℑ",
		Igrave: "Ì",
		igrave: "ì",
		ii: "ⅈ",
		iiiint: "⨌",
		iiint: "∭",
		iinfin: "⧜",
		iiota: "℩",
		IJlig: "Ĳ",
		ijlig: "ĳ",
		Imacr: "Ī",
		imacr: "ī",
		image: "ℑ",
		ImaginaryI: "ⅈ",
		imagline: "ℐ",
		imagpart: "ℑ",
		imath: "ı",
		Im: "ℑ",
		imof: "⊷",
		imped: "Ƶ",
		Implies: "⇒",
		incare: "℅",
		in: "∈",
		infin: "∞",
		infintie: "⧝",
		inodot: "ı",
		intcal: "⊺",
		int: "∫",
		Int: "∬",
		integers: "ℤ",
		Integral: "∫",
		intercal: "⊺",
		Intersection: "⋂",
		intlarhk: "⨗",
		intprod: "⨼",
		InvisibleComma: "⁣",
		InvisibleTimes: "⁢",
		IOcy: "Ё",
		iocy: "ё",
		Iogon: "Į",
		iogon: "į",
		Iopf: Gs,
		iopf: Ks,
		Iota: "Ι",
		iota: "ι",
		iprod: "⨼",
		iquest: "¿",
		iscr: qs,
		Iscr: "ℐ",
		isin: "∈",
		isindot: "⋵",
		isinE: "⋹",
		isins: "⋴",
		isinsv: "⋳",
		isinv: "∈",
		it: "⁢",
		Itilde: "Ĩ",
		itilde: "ĩ",
		Iukcy: "І",
		iukcy: "і",
		Iuml: "Ï",
		iuml: "ï",
		Jcirc: "Ĵ",
		jcirc: "ĵ",
		Jcy: "Й",
		jcy: "й",
		Jfr: Js,
		jfr: Ys,
		jmath: "ȷ",
		Jopf: Xs,
		jopf: Zs,
		Jscr: Qs,
		jscr: $s,
		Jsercy: "Ј",
		jsercy: "ј",
		Jukcy: "Є",
		jukcy: "є",
		Kappa: "Κ",
		kappa: "κ",
		kappav: "ϰ",
		Kcedil: "Ķ",
		kcedil: "ķ",
		Kcy: "К",
		kcy: "к",
		Kfr: ec,
		kfr: tc,
		kgreen: "ĸ",
		KHcy: "Х",
		khcy: "х",
		KJcy: "Ќ",
		kjcy: "ќ",
		Kopf: nc,
		kopf: rc,
		Kscr: ic,
		kscr: ac,
		lAarr: "⇚",
		Lacute: "Ĺ",
		lacute: "ĺ",
		laemptyv: "⦴",
		lagran: "ℒ",
		Lambda: "Λ",
		lambda: "λ",
		lang: "⟨",
		Lang: "⟪",
		langd: "⦑",
		langle: "⟨",
		lap: "⪅",
		Laplacetrf: "ℒ",
		laquo: "«",
		larrb: "⇤",
		larrbfs: "⤟",
		larr: "←",
		Larr: "↞",
		lArr: "⇐",
		larrfs: "⤝",
		larrhk: "↩",
		larrlp: "↫",
		larrpl: "⤹",
		larrsim: "⥳",
		larrtl: "↢",
		latail: "⤙",
		lAtail: "⤛",
		lat: "⪫",
		late: "⪭",
		lates: oc,
		lbarr: "⤌",
		lBarr: "⤎",
		lbbrk: "❲",
		lbrace: "{",
		lbrack: "[",
		lbrke: "⦋",
		lbrksld: "⦏",
		lbrkslu: "⦍",
		Lcaron: "Ľ",
		lcaron: "ľ",
		Lcedil: "Ļ",
		lcedil: "ļ",
		lceil: "⌈",
		lcub: "{",
		Lcy: "Л",
		lcy: "л",
		ldca: "⤶",
		ldquo: "“",
		ldquor: "„",
		ldrdhar: "⥧",
		ldrushar: "⥋",
		ldsh: "↲",
		le: "≤",
		lE: "≦",
		LeftAngleBracket: "⟨",
		LeftArrowBar: "⇤",
		leftarrow: "←",
		LeftArrow: "←",
		Leftarrow: "⇐",
		LeftArrowRightArrow: "⇆",
		leftarrowtail: "↢",
		LeftCeiling: "⌈",
		LeftDoubleBracket: "⟦",
		LeftDownTeeVector: "⥡",
		LeftDownVectorBar: "⥙",
		LeftDownVector: "⇃",
		LeftFloor: "⌊",
		leftharpoondown: "↽",
		leftharpoonup: "↼",
		leftleftarrows: "⇇",
		leftrightarrow: "↔",
		LeftRightArrow: "↔",
		Leftrightarrow: "⇔",
		leftrightarrows: "⇆",
		leftrightharpoons: "⇋",
		leftrightsquigarrow: "↭",
		LeftRightVector: "⥎",
		LeftTeeArrow: "↤",
		LeftTee: "⊣",
		LeftTeeVector: "⥚",
		leftthreetimes: "⋋",
		LeftTriangleBar: "⧏",
		LeftTriangle: "⊲",
		LeftTriangleEqual: "⊴",
		LeftUpDownVector: "⥑",
		LeftUpTeeVector: "⥠",
		LeftUpVectorBar: "⥘",
		LeftUpVector: "↿",
		LeftVectorBar: "⥒",
		LeftVector: "↼",
		lEg: "⪋",
		leg: "⋚",
		leq: "≤",
		leqq: "≦",
		leqslant: "⩽",
		lescc: "⪨",
		les: "⩽",
		lesdot: "⩿",
		lesdoto: "⪁",
		lesdotor: "⪃",
		lesg: sc,
		lesges: "⪓",
		lessapprox: "⪅",
		lessdot: "⋖",
		lesseqgtr: "⋚",
		lesseqqgtr: "⪋",
		LessEqualGreater: "⋚",
		LessFullEqual: "≦",
		LessGreater: "≶",
		lessgtr: "≶",
		LessLess: "⪡",
		lesssim: "≲",
		LessSlantEqual: "⩽",
		LessTilde: "≲",
		lfisht: "⥼",
		lfloor: "⌊",
		Lfr: cc,
		lfr: lc,
		lg: "≶",
		lgE: "⪑",
		lHar: "⥢",
		lhard: "↽",
		lharu: "↼",
		lharul: "⥪",
		lhblk: "▄",
		LJcy: "Љ",
		ljcy: "љ",
		llarr: "⇇",
		ll: "≪",
		Ll: "⋘",
		llcorner: "⌞",
		Lleftarrow: "⇚",
		llhard: "⥫",
		lltri: "◺",
		Lmidot: "Ŀ",
		lmidot: "ŀ",
		lmoustache: "⎰",
		lmoust: "⎰",
		lnap: "⪉",
		lnapprox: "⪉",
		lne: "⪇",
		lnE: "≨",
		lneq: "⪇",
		lneqq: "≨",
		lnsim: "⋦",
		loang: "⟬",
		loarr: "⇽",
		lobrk: "⟦",
		longleftarrow: "⟵",
		LongLeftArrow: "⟵",
		Longleftarrow: "⟸",
		longleftrightarrow: "⟷",
		LongLeftRightArrow: "⟷",
		Longleftrightarrow: "⟺",
		longmapsto: "⟼",
		longrightarrow: "⟶",
		LongRightArrow: "⟶",
		Longrightarrow: "⟹",
		looparrowleft: "↫",
		looparrowright: "↬",
		lopar: "⦅",
		Lopf: uc,
		lopf: dc,
		loplus: "⨭",
		lotimes: "⨴",
		lowast: "∗",
		lowbar: "_",
		LowerLeftArrow: "↙",
		LowerRightArrow: "↘",
		loz: "◊",
		lozenge: "◊",
		lozf: "⧫",
		lpar: "(",
		lparlt: "⦓",
		lrarr: "⇆",
		lrcorner: "⌟",
		lrhar: "⇋",
		lrhard: "⥭",
		lrm: "‎",
		lrtri: "⊿",
		lsaquo: "‹",
		lscr: fc,
		Lscr: "ℒ",
		lsh: "↰",
		Lsh: "↰",
		lsim: "≲",
		lsime: "⪍",
		lsimg: "⪏",
		lsqb: "[",
		lsquo: "‘",
		lsquor: "‚",
		Lstrok: "Ł",
		lstrok: "ł",
		ltcc: "⪦",
		ltcir: "⩹",
		lt: "<",
		LT: "<",
		Lt: "≪",
		ltdot: "⋖",
		lthree: "⋋",
		ltimes: "⋉",
		ltlarr: "⥶",
		ltquest: "⩻",
		ltri: "◃",
		ltrie: "⊴",
		ltrif: "◂",
		ltrPar: "⦖",
		lurdshar: "⥊",
		luruhar: "⥦",
		lvertneqq: pc,
		lvnE: mc,
		macr: "¯",
		male: "♂",
		malt: "✠",
		maltese: "✠",
		Map: "⤅",
		map: "↦",
		mapsto: "↦",
		mapstodown: "↧",
		mapstoleft: "↤",
		mapstoup: "↥",
		marker: "▮",
		mcomma: "⨩",
		Mcy: "М",
		mcy: "м",
		mdash: "—",
		mDDot: "∺",
		measuredangle: "∡",
		MediumSpace: " ",
		Mellintrf: "ℳ",
		Mfr: hc,
		mfr: gc,
		mho: "℧",
		micro: "µ",
		midast: "*",
		midcir: "⫰",
		mid: "∣",
		middot: "·",
		minusb: "⊟",
		minus: "−",
		minusd: "∸",
		minusdu: "⨪",
		MinusPlus: "∓",
		mlcp: "⫛",
		mldr: "…",
		mnplus: "∓",
		models: "⊧",
		Mopf: _c,
		mopf: vc,
		mp: "∓",
		mscr: yc,
		Mscr: "ℳ",
		mstpos: "∾",
		Mu: "Μ",
		mu: "μ",
		multimap: "⊸",
		mumap: "⊸",
		nabla: "∇",
		Nacute: "Ń",
		nacute: "ń",
		nang: bc,
		nap: "≉",
		napE: xc,
		napid: Sc,
		napos: "ŉ",
		napprox: "≉",
		natural: "♮",
		naturals: "ℕ",
		natur: "♮",
		nbsp: "\xA0",
		nbump: Cc,
		nbumpe: wc,
		ncap: "⩃",
		Ncaron: "Ň",
		ncaron: "ň",
		Ncedil: "Ņ",
		ncedil: "ņ",
		ncong: "≇",
		ncongdot: Tc,
		ncup: "⩂",
		Ncy: "Н",
		ncy: "н",
		ndash: "–",
		nearhk: "⤤",
		nearr: "↗",
		neArr: "⇗",
		nearrow: "↗",
		ne: "≠",
		nedot: Ec,
		NegativeMediumSpace: "​",
		NegativeThickSpace: "​",
		NegativeThinSpace: "​",
		NegativeVeryThinSpace: "​",
		nequiv: "≢",
		nesear: "⤨",
		nesim: Dc,
		NestedGreaterGreater: "≫",
		NestedLessLess: "≪",
		NewLine: "\n",
		nexist: "∄",
		nexists: "∄",
		Nfr: Oc,
		nfr: kc,
		ngE: Ac,
		nge: "≱",
		ngeq: "≱",
		ngeqq: jc,
		ngeqslant: Mc,
		nges: Nc,
		nGg: Pc,
		ngsim: "≵",
		nGt: Fc,
		ngt: "≯",
		ngtr: "≯",
		nGtv: Ic,
		nharr: "↮",
		nhArr: "⇎",
		nhpar: "⫲",
		ni: "∋",
		nis: "⋼",
		nisd: "⋺",
		niv: "∋",
		NJcy: "Њ",
		njcy: "њ",
		nlarr: "↚",
		nlArr: "⇍",
		nldr: "‥",
		nlE: Lc,
		nle: "≰",
		nleftarrow: "↚",
		nLeftarrow: "⇍",
		nleftrightarrow: "↮",
		nLeftrightarrow: "⇎",
		nleq: "≰",
		nleqq: Rc,
		nleqslant: zc,
		nles: Bc,
		nless: "≮",
		nLl: Vc,
		nlsim: "≴",
		nLt: Hc,
		nlt: "≮",
		nltri: "⋪",
		nltrie: "⋬",
		nLtv: Uc,
		nmid: "∤",
		NoBreak: "⁠",
		NonBreakingSpace: "\xA0",
		nopf: Wc,
		Nopf: "ℕ",
		Not: "⫬",
		not: "¬",
		NotCongruent: "≢",
		NotCupCap: "≭",
		NotDoubleVerticalBar: "∦",
		NotElement: "∉",
		NotEqual: "≠",
		NotEqualTilde: Gc,
		NotExists: "∄",
		NotGreater: "≯",
		NotGreaterEqual: "≱",
		NotGreaterFullEqual: Kc,
		NotGreaterGreater: qc,
		NotGreaterLess: "≹",
		NotGreaterSlantEqual: Jc,
		NotGreaterTilde: "≵",
		NotHumpDownHump: Yc,
		NotHumpEqual: Xc,
		notin: "∉",
		notindot: Zc,
		notinE: Qc,
		notinva: "∉",
		notinvb: "⋷",
		notinvc: "⋶",
		NotLeftTriangleBar: $c,
		NotLeftTriangle: "⋪",
		NotLeftTriangleEqual: "⋬",
		NotLess: "≮",
		NotLessEqual: "≰",
		NotLessGreater: "≸",
		NotLessLess: el,
		NotLessSlantEqual: tl,
		NotLessTilde: "≴",
		NotNestedGreaterGreater: nl,
		NotNestedLessLess: rl,
		notni: "∌",
		notniva: "∌",
		notnivb: "⋾",
		notnivc: "⋽",
		NotPrecedes: "⊀",
		NotPrecedesEqual: il,
		NotPrecedesSlantEqual: "⋠",
		NotReverseElement: "∌",
		NotRightTriangleBar: al,
		NotRightTriangle: "⋫",
		NotRightTriangleEqual: "⋭",
		NotSquareSubset: ol,
		NotSquareSubsetEqual: "⋢",
		NotSquareSuperset: sl,
		NotSquareSupersetEqual: "⋣",
		NotSubset: cl,
		NotSubsetEqual: "⊈",
		NotSucceeds: "⊁",
		NotSucceedsEqual: ll,
		NotSucceedsSlantEqual: "⋡",
		NotSucceedsTilde: ul,
		NotSuperset: dl,
		NotSupersetEqual: "⊉",
		NotTilde: "≁",
		NotTildeEqual: "≄",
		NotTildeFullEqual: "≇",
		NotTildeTilde: "≉",
		NotVerticalBar: "∤",
		nparallel: "∦",
		npar: "∦",
		nparsl: fl,
		npart: pl,
		npolint: "⨔",
		npr: "⊀",
		nprcue: "⋠",
		nprec: "⊀",
		npreceq: ml,
		npre: hl,
		nrarrc: gl,
		nrarr: "↛",
		nrArr: "⇏",
		nrarrw: _l,
		nrightarrow: "↛",
		nRightarrow: "⇏",
		nrtri: "⋫",
		nrtrie: "⋭",
		nsc: "⊁",
		nsccue: "⋡",
		nsce: vl,
		Nscr: yl,
		nscr: bl,
		nshortmid: "∤",
		nshortparallel: "∦",
		nsim: "≁",
		nsime: "≄",
		nsimeq: "≄",
		nsmid: "∤",
		nspar: "∦",
		nsqsube: "⋢",
		nsqsupe: "⋣",
		nsub: "⊄",
		nsubE: xl,
		nsube: "⊈",
		nsubset: Sl,
		nsubseteq: "⊈",
		nsubseteqq: Cl,
		nsucc: "⊁",
		nsucceq: wl,
		nsup: "⊅",
		nsupE: Tl,
		nsupe: "⊉",
		nsupset: El,
		nsupseteq: "⊉",
		nsupseteqq: Dl,
		ntgl: "≹",
		Ntilde: "Ñ",
		ntilde: "ñ",
		ntlg: "≸",
		ntriangleleft: "⋪",
		ntrianglelefteq: "⋬",
		ntriangleright: "⋫",
		ntrianglerighteq: "⋭",
		Nu: "Ν",
		nu: "ν",
		num: "#",
		numero: "№",
		numsp: " ",
		nvap: Ol,
		nvdash: "⊬",
		nvDash: "⊭",
		nVdash: "⊮",
		nVDash: "⊯",
		nvge: kl,
		nvgt: Al,
		nvHarr: "⤄",
		nvinfin: "⧞",
		nvlArr: "⤂",
		nvle: jl,
		nvlt: Ml,
		nvltrie: Nl,
		nvrArr: "⤃",
		nvrtrie: Pl,
		nvsim: Fl,
		nwarhk: "⤣",
		nwarr: "↖",
		nwArr: "⇖",
		nwarrow: "↖",
		nwnear: "⤧",
		Oacute: "Ó",
		oacute: "ó",
		oast: "⊛",
		Ocirc: "Ô",
		ocirc: "ô",
		ocir: "⊚",
		Ocy: "О",
		ocy: "о",
		odash: "⊝",
		Odblac: "Ő",
		odblac: "ő",
		odiv: "⨸",
		odot: "⊙",
		odsold: "⦼",
		OElig: "Œ",
		oelig: "œ",
		ofcir: "⦿",
		Ofr: Il,
		ofr: Ll,
		ogon: "˛",
		Ograve: "Ò",
		ograve: "ò",
		ogt: "⧁",
		ohbar: "⦵",
		ohm: "Ω",
		oint: "∮",
		olarr: "↺",
		olcir: "⦾",
		olcross: "⦻",
		oline: "‾",
		olt: "⧀",
		Omacr: "Ō",
		omacr: "ō",
		Omega: "Ω",
		omega: "ω",
		Omicron: "Ο",
		omicron: "ο",
		omid: "⦶",
		ominus: "⊖",
		Oopf: Rl,
		oopf: zl,
		opar: "⦷",
		OpenCurlyDoubleQuote: "“",
		OpenCurlyQuote: "‘",
		operp: "⦹",
		oplus: "⊕",
		orarr: "↻",
		Or: "⩔",
		or: "∨",
		ord: "⩝",
		order: "ℴ",
		orderof: "ℴ",
		ordf: "ª",
		ordm: "º",
		origof: "⊶",
		oror: "⩖",
		orslope: "⩗",
		orv: "⩛",
		oS: "Ⓢ",
		Oscr: Bl,
		oscr: "ℴ",
		Oslash: "Ø",
		oslash: "ø",
		osol: "⊘",
		Otilde: "Õ",
		otilde: "õ",
		otimesas: "⨶",
		Otimes: "⨷",
		otimes: "⊗",
		Ouml: "Ö",
		ouml: "ö",
		ovbar: "⌽",
		OverBar: "‾",
		OverBrace: "⏞",
		OverBracket: "⎴",
		OverParenthesis: "⏜",
		para: "¶",
		parallel: "∥",
		par: "∥",
		parsim: "⫳",
		parsl: "⫽",
		part: "∂",
		PartialD: "∂",
		Pcy: "П",
		pcy: "п",
		percnt: "%",
		period: ".",
		permil: "‰",
		perp: "⊥",
		pertenk: "‱",
		Pfr: Vl,
		pfr: Hl,
		Phi: "Φ",
		phi: "φ",
		phiv: "ϕ",
		phmmat: "ℳ",
		phone: "☎",
		Pi: "Π",
		pi: "π",
		pitchfork: "⋔",
		piv: "ϖ",
		planck: "ℏ",
		planckh: "ℎ",
		plankv: "ℏ",
		plusacir: "⨣",
		plusb: "⊞",
		pluscir: "⨢",
		plus: "+",
		plusdo: "∔",
		plusdu: "⨥",
		pluse: "⩲",
		PlusMinus: "±",
		plusmn: "±",
		plussim: "⨦",
		plustwo: "⨧",
		pm: "±",
		Poincareplane: "ℌ",
		pointint: "⨕",
		popf: Ul,
		Popf: "ℙ",
		pound: "£",
		prap: "⪷",
		Pr: "⪻",
		pr: "≺",
		prcue: "≼",
		precapprox: "⪷",
		prec: "≺",
		preccurlyeq: "≼",
		Precedes: "≺",
		PrecedesEqual: "⪯",
		PrecedesSlantEqual: "≼",
		PrecedesTilde: "≾",
		preceq: "⪯",
		precnapprox: "⪹",
		precneqq: "⪵",
		precnsim: "⋨",
		pre: "⪯",
		prE: "⪳",
		precsim: "≾",
		prime: "′",
		Prime: "″",
		primes: "ℙ",
		prnap: "⪹",
		prnE: "⪵",
		prnsim: "⋨",
		prod: "∏",
		Product: "∏",
		profalar: "⌮",
		profline: "⌒",
		profsurf: "⌓",
		prop: "∝",
		Proportional: "∝",
		Proportion: "∷",
		propto: "∝",
		prsim: "≾",
		prurel: "⊰",
		Pscr: Wl,
		pscr: Gl,
		Psi: "Ψ",
		psi: "ψ",
		puncsp: " ",
		Qfr: Kl,
		qfr: ql,
		qint: "⨌",
		qopf: Jl,
		Qopf: "ℚ",
		qprime: "⁗",
		Qscr: Yl,
		qscr: Xl,
		quaternions: "ℍ",
		quatint: "⨖",
		quest: "?",
		questeq: "≟",
		quot: "\"",
		QUOT: "\"",
		rAarr: "⇛",
		race: Zl,
		Racute: "Ŕ",
		racute: "ŕ",
		radic: "√",
		raemptyv: "⦳",
		rang: "⟩",
		Rang: "⟫",
		rangd: "⦒",
		range: "⦥",
		rangle: "⟩",
		raquo: "»",
		rarrap: "⥵",
		rarrb: "⇥",
		rarrbfs: "⤠",
		rarrc: "⤳",
		rarr: "→",
		Rarr: "↠",
		rArr: "⇒",
		rarrfs: "⤞",
		rarrhk: "↪",
		rarrlp: "↬",
		rarrpl: "⥅",
		rarrsim: "⥴",
		Rarrtl: "⤖",
		rarrtl: "↣",
		rarrw: "↝",
		ratail: "⤚",
		rAtail: "⤜",
		ratio: "∶",
		rationals: "ℚ",
		rbarr: "⤍",
		rBarr: "⤏",
		RBarr: "⤐",
		rbbrk: "❳",
		rbrace: "}",
		rbrack: "]",
		rbrke: "⦌",
		rbrksld: "⦎",
		rbrkslu: "⦐",
		Rcaron: "Ř",
		rcaron: "ř",
		Rcedil: "Ŗ",
		rcedil: "ŗ",
		rceil: "⌉",
		rcub: "}",
		Rcy: "Р",
		rcy: "р",
		rdca: "⤷",
		rdldhar: "⥩",
		rdquo: "”",
		rdquor: "”",
		rdsh: "↳",
		real: "ℜ",
		realine: "ℛ",
		realpart: "ℜ",
		reals: "ℝ",
		Re: "ℜ",
		rect: "▭",
		reg: "®",
		REG: "®",
		ReverseElement: "∋",
		ReverseEquilibrium: "⇋",
		ReverseUpEquilibrium: "⥯",
		rfisht: "⥽",
		rfloor: "⌋",
		rfr: Ql,
		Rfr: "ℜ",
		rHar: "⥤",
		rhard: "⇁",
		rharu: "⇀",
		rharul: "⥬",
		Rho: "Ρ",
		rho: "ρ",
		rhov: "ϱ",
		RightAngleBracket: "⟩",
		RightArrowBar: "⇥",
		rightarrow: "→",
		RightArrow: "→",
		Rightarrow: "⇒",
		RightArrowLeftArrow: "⇄",
		rightarrowtail: "↣",
		RightCeiling: "⌉",
		RightDoubleBracket: "⟧",
		RightDownTeeVector: "⥝",
		RightDownVectorBar: "⥕",
		RightDownVector: "⇂",
		RightFloor: "⌋",
		rightharpoondown: "⇁",
		rightharpoonup: "⇀",
		rightleftarrows: "⇄",
		rightleftharpoons: "⇌",
		rightrightarrows: "⇉",
		rightsquigarrow: "↝",
		RightTeeArrow: "↦",
		RightTee: "⊢",
		RightTeeVector: "⥛",
		rightthreetimes: "⋌",
		RightTriangleBar: "⧐",
		RightTriangle: "⊳",
		RightTriangleEqual: "⊵",
		RightUpDownVector: "⥏",
		RightUpTeeVector: "⥜",
		RightUpVectorBar: "⥔",
		RightUpVector: "↾",
		RightVectorBar: "⥓",
		RightVector: "⇀",
		ring: "˚",
		risingdotseq: "≓",
		rlarr: "⇄",
		rlhar: "⇌",
		rlm: "‏",
		rmoustache: "⎱",
		rmoust: "⎱",
		rnmid: "⫮",
		roang: "⟭",
		roarr: "⇾",
		robrk: "⟧",
		ropar: "⦆",
		ropf: $l,
		Ropf: "ℝ",
		roplus: "⨮",
		rotimes: "⨵",
		RoundImplies: "⥰",
		rpar: ")",
		rpargt: "⦔",
		rppolint: "⨒",
		rrarr: "⇉",
		Rrightarrow: "⇛",
		rsaquo: "›",
		rscr: eu,
		Rscr: "ℛ",
		rsh: "↱",
		Rsh: "↱",
		rsqb: "]",
		rsquo: "’",
		rsquor: "’",
		rthree: "⋌",
		rtimes: "⋊",
		rtri: "▹",
		rtrie: "⊵",
		rtrif: "▸",
		rtriltri: "⧎",
		RuleDelayed: "⧴",
		ruluhar: "⥨",
		rx: "℞",
		Sacute: "Ś",
		sacute: "ś",
		sbquo: "‚",
		scap: "⪸",
		Scaron: "Š",
		scaron: "š",
		Sc: "⪼",
		sc: "≻",
		sccue: "≽",
		sce: "⪰",
		scE: "⪴",
		Scedil: "Ş",
		scedil: "ş",
		Scirc: "Ŝ",
		scirc: "ŝ",
		scnap: "⪺",
		scnE: "⪶",
		scnsim: "⋩",
		scpolint: "⨓",
		scsim: "≿",
		Scy: "С",
		scy: "с",
		sdotb: "⊡",
		sdot: "⋅",
		sdote: "⩦",
		searhk: "⤥",
		searr: "↘",
		seArr: "⇘",
		searrow: "↘",
		sect: "§",
		semi: ";",
		seswar: "⤩",
		setminus: "∖",
		setmn: "∖",
		sext: "✶",
		Sfr: tu,
		sfr: nu,
		sfrown: "⌢",
		sharp: "♯",
		SHCHcy: "Щ",
		shchcy: "щ",
		SHcy: "Ш",
		shcy: "ш",
		ShortDownArrow: "↓",
		ShortLeftArrow: "←",
		shortmid: "∣",
		shortparallel: "∥",
		ShortRightArrow: "→",
		ShortUpArrow: "↑",
		shy: "­",
		Sigma: "Σ",
		sigma: "σ",
		sigmaf: "ς",
		sigmav: "ς",
		sim: "∼",
		simdot: "⩪",
		sime: "≃",
		simeq: "≃",
		simg: "⪞",
		simgE: "⪠",
		siml: "⪝",
		simlE: "⪟",
		simne: "≆",
		simplus: "⨤",
		simrarr: "⥲",
		slarr: "←",
		SmallCircle: "∘",
		smallsetminus: "∖",
		smashp: "⨳",
		smeparsl: "⧤",
		smid: "∣",
		smile: "⌣",
		smt: "⪪",
		smte: "⪬",
		smtes: ru,
		SOFTcy: "Ь",
		softcy: "ь",
		solbar: "⌿",
		solb: "⧄",
		sol: "/",
		Sopf: iu,
		sopf: au,
		spades: "♠",
		spadesuit: "♠",
		spar: "∥",
		sqcap: "⊓",
		sqcaps: ou,
		sqcup: "⊔",
		sqcups: su,
		Sqrt: "√",
		sqsub: "⊏",
		sqsube: "⊑",
		sqsubset: "⊏",
		sqsubseteq: "⊑",
		sqsup: "⊐",
		sqsupe: "⊒",
		sqsupset: "⊐",
		sqsupseteq: "⊒",
		square: "□",
		Square: "□",
		SquareIntersection: "⊓",
		SquareSubset: "⊏",
		SquareSubsetEqual: "⊑",
		SquareSuperset: "⊐",
		SquareSupersetEqual: "⊒",
		SquareUnion: "⊔",
		squarf: "▪",
		squ: "□",
		squf: "▪",
		srarr: "→",
		Sscr: cu,
		sscr: lu,
		ssetmn: "∖",
		ssmile: "⌣",
		sstarf: "⋆",
		Star: "⋆",
		star: "☆",
		starf: "★",
		straightepsilon: "ϵ",
		straightphi: "ϕ",
		strns: "¯",
		sub: "⊂",
		Sub: "⋐",
		subdot: "⪽",
		subE: "⫅",
		sube: "⊆",
		subedot: "⫃",
		submult: "⫁",
		subnE: "⫋",
		subne: "⊊",
		subplus: "⪿",
		subrarr: "⥹",
		subset: "⊂",
		Subset: "⋐",
		subseteq: "⊆",
		subseteqq: "⫅",
		SubsetEqual: "⊆",
		subsetneq: "⊊",
		subsetneqq: "⫋",
		subsim: "⫇",
		subsub: "⫕",
		subsup: "⫓",
		succapprox: "⪸",
		succ: "≻",
		succcurlyeq: "≽",
		Succeeds: "≻",
		SucceedsEqual: "⪰",
		SucceedsSlantEqual: "≽",
		SucceedsTilde: "≿",
		succeq: "⪰",
		succnapprox: "⪺",
		succneqq: "⪶",
		succnsim: "⋩",
		succsim: "≿",
		SuchThat: "∋",
		sum: "∑",
		Sum: "∑",
		sung: "♪",
		sup1: "¹",
		sup2: "²",
		sup3: "³",
		sup: "⊃",
		Sup: "⋑",
		supdot: "⪾",
		supdsub: "⫘",
		supE: "⫆",
		supe: "⊇",
		supedot: "⫄",
		Superset: "⊃",
		SupersetEqual: "⊇",
		suphsol: "⟉",
		suphsub: "⫗",
		suplarr: "⥻",
		supmult: "⫂",
		supnE: "⫌",
		supne: "⊋",
		supplus: "⫀",
		supset: "⊃",
		Supset: "⋑",
		supseteq: "⊇",
		supseteqq: "⫆",
		supsetneq: "⊋",
		supsetneqq: "⫌",
		supsim: "⫈",
		supsub: "⫔",
		supsup: "⫖",
		swarhk: "⤦",
		swarr: "↙",
		swArr: "⇙",
		swarrow: "↙",
		swnwar: "⤪",
		szlig: "ß",
		Tab: "	",
		target: "⌖",
		Tau: "Τ",
		tau: "τ",
		tbrk: "⎴",
		Tcaron: "Ť",
		tcaron: "ť",
		Tcedil: "Ţ",
		tcedil: "ţ",
		Tcy: "Т",
		tcy: "т",
		tdot: "⃛",
		telrec: "⌕",
		Tfr: uu,
		tfr: du,
		there4: "∴",
		therefore: "∴",
		Therefore: "∴",
		Theta: "Θ",
		theta: "θ",
		thetasym: "ϑ",
		thetav: "ϑ",
		thickapprox: "≈",
		thicksim: "∼",
		ThickSpace: fu,
		ThinSpace: " ",
		thinsp: " ",
		thkap: "≈",
		thksim: "∼",
		THORN: "Þ",
		thorn: "þ",
		tilde: "˜",
		Tilde: "∼",
		TildeEqual: "≃",
		TildeFullEqual: "≅",
		TildeTilde: "≈",
		timesbar: "⨱",
		timesb: "⊠",
		times: "×",
		timesd: "⨰",
		tint: "∭",
		toea: "⤨",
		topbot: "⌶",
		topcir: "⫱",
		top: "⊤",
		Topf: pu,
		topf: mu,
		topfork: "⫚",
		tosa: "⤩",
		tprime: "‴",
		trade: "™",
		TRADE: "™",
		triangle: "▵",
		triangledown: "▿",
		triangleleft: "◃",
		trianglelefteq: "⊴",
		triangleq: "≜",
		triangleright: "▹",
		trianglerighteq: "⊵",
		tridot: "◬",
		trie: "≜",
		triminus: "⨺",
		TripleDot: "⃛",
		triplus: "⨹",
		trisb: "⧍",
		tritime: "⨻",
		trpezium: "⏢",
		Tscr: hu,
		tscr: gu,
		TScy: "Ц",
		tscy: "ц",
		TSHcy: "Ћ",
		tshcy: "ћ",
		Tstrok: "Ŧ",
		tstrok: "ŧ",
		twixt: "≬",
		twoheadleftarrow: "↞",
		twoheadrightarrow: "↠",
		Uacute: "Ú",
		uacute: "ú",
		uarr: "↑",
		Uarr: "↟",
		uArr: "⇑",
		Uarrocir: "⥉",
		Ubrcy: "Ў",
		ubrcy: "ў",
		Ubreve: "Ŭ",
		ubreve: "ŭ",
		Ucirc: "Û",
		ucirc: "û",
		Ucy: "У",
		ucy: "у",
		udarr: "⇅",
		Udblac: "Ű",
		udblac: "ű",
		udhar: "⥮",
		ufisht: "⥾",
		Ufr: _u,
		ufr: vu,
		Ugrave: "Ù",
		ugrave: "ù",
		uHar: "⥣",
		uharl: "↿",
		uharr: "↾",
		uhblk: "▀",
		ulcorn: "⌜",
		ulcorner: "⌜",
		ulcrop: "⌏",
		ultri: "◸",
		Umacr: "Ū",
		umacr: "ū",
		uml: "¨",
		UnderBar: "_",
		UnderBrace: "⏟",
		UnderBracket: "⎵",
		UnderParenthesis: "⏝",
		Union: "⋃",
		UnionPlus: "⊎",
		Uogon: "Ų",
		uogon: "ų",
		Uopf: yu,
		uopf: bu,
		UpArrowBar: "⤒",
		uparrow: "↑",
		UpArrow: "↑",
		Uparrow: "⇑",
		UpArrowDownArrow: "⇅",
		updownarrow: "↕",
		UpDownArrow: "↕",
		Updownarrow: "⇕",
		UpEquilibrium: "⥮",
		upharpoonleft: "↿",
		upharpoonright: "↾",
		uplus: "⊎",
		UpperLeftArrow: "↖",
		UpperRightArrow: "↗",
		upsi: "υ",
		Upsi: "ϒ",
		upsih: "ϒ",
		Upsilon: "Υ",
		upsilon: "υ",
		UpTeeArrow: "↥",
		UpTee: "⊥",
		upuparrows: "⇈",
		urcorn: "⌝",
		urcorner: "⌝",
		urcrop: "⌎",
		Uring: "Ů",
		uring: "ů",
		urtri: "◹",
		Uscr: xu,
		uscr: Su,
		utdot: "⋰",
		Utilde: "Ũ",
		utilde: "ũ",
		utri: "▵",
		utrif: "▴",
		uuarr: "⇈",
		Uuml: "Ü",
		uuml: "ü",
		uwangle: "⦧",
		vangrt: "⦜",
		varepsilon: "ϵ",
		varkappa: "ϰ",
		varnothing: "∅",
		varphi: "ϕ",
		varpi: "ϖ",
		varpropto: "∝",
		varr: "↕",
		vArr: "⇕",
		varrho: "ϱ",
		varsigma: "ς",
		varsubsetneq: Cu,
		varsubsetneqq: wu,
		varsupsetneq: Tu,
		varsupsetneqq: Eu,
		vartheta: "ϑ",
		vartriangleleft: "⊲",
		vartriangleright: "⊳",
		vBar: "⫨",
		Vbar: "⫫",
		vBarv: "⫩",
		Vcy: "В",
		vcy: "в",
		vdash: "⊢",
		vDash: "⊨",
		Vdash: "⊩",
		VDash: "⊫",
		Vdashl: "⫦",
		veebar: "⊻",
		vee: "∨",
		Vee: "⋁",
		veeeq: "≚",
		vellip: "⋮",
		verbar: "|",
		Verbar: "‖",
		vert: "|",
		Vert: "‖",
		VerticalBar: "∣",
		VerticalLine: "|",
		VerticalSeparator: "❘",
		VerticalTilde: "≀",
		VeryThinSpace: " ",
		Vfr: Du,
		vfr: Ou,
		vltri: "⊲",
		vnsub: ku,
		vnsup: Au,
		Vopf: ju,
		vopf: Mu,
		vprop: "∝",
		vrtri: "⊳",
		Vscr: Nu,
		vscr: Pu,
		vsubnE: Fu,
		vsubne: Iu,
		vsupnE: Lu,
		vsupne: Ru,
		Vvdash: "⊪",
		vzigzag: "⦚",
		Wcirc: "Ŵ",
		wcirc: "ŵ",
		wedbar: "⩟",
		wedge: "∧",
		Wedge: "⋀",
		wedgeq: "≙",
		weierp: "℘",
		Wfr: zu,
		wfr: Bu,
		Wopf: Vu,
		wopf: Hu,
		wp: "℘",
		wr: "≀",
		wreath: "≀",
		Wscr: Uu,
		wscr: Wu,
		xcap: "⋂",
		xcirc: "◯",
		xcup: "⋃",
		xdtri: "▽",
		Xfr: Gu,
		xfr: Ku,
		xharr: "⟷",
		xhArr: "⟺",
		Xi: "Ξ",
		xi: "ξ",
		xlarr: "⟵",
		xlArr: "⟸",
		xmap: "⟼",
		xnis: "⋻",
		xodot: "⨀",
		Xopf: qu,
		xopf: Ju,
		xoplus: "⨁",
		xotime: "⨂",
		xrarr: "⟶",
		xrArr: "⟹",
		Xscr: Yu,
		xscr: Xu,
		xsqcup: "⨆",
		xuplus: "⨄",
		xutri: "△",
		xvee: "⋁",
		xwedge: "⋀",
		Yacute: "Ý",
		yacute: "ý",
		YAcy: "Я",
		yacy: "я",
		Ycirc: "Ŷ",
		ycirc: "ŷ",
		Ycy: "Ы",
		ycy: "ы",
		yen: "¥",
		Yfr: Zu,
		yfr: Qu,
		YIcy: "Ї",
		yicy: "ї",
		Yopf: $u,
		yopf: ed,
		Yscr: td,
		yscr: nd,
		YUcy: "Ю",
		yucy: "ю",
		yuml: "ÿ",
		Yuml: "Ÿ",
		Zacute: "Ź",
		zacute: "ź",
		Zcaron: "Ž",
		zcaron: "ž",
		Zcy: "З",
		zcy: "з",
		Zdot: "Ż",
		zdot: "ż",
		zeetrf: "ℨ",
		ZeroWidthSpace: "​",
		Zeta: "Ζ",
		zeta: "ζ",
		zfr: rd,
		Zfr: "ℨ",
		ZHcy: "Ж",
		zhcy: "ж",
		zigrarr: "⇝",
		zopf: id,
		Zopf: "ℤ",
		Zscr: ad,
		zscr: od,
		zwj: "‍",
		zwnj: "‌"
	};
})), ld = /* @__PURE__ */ s(((e, t) => {
	t.exports = (cd(), d(Zo).default);
})), ud = /* @__PURE__ */ s(((e, t) => {
	t.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
})), dd = /* @__PURE__ */ s(((e, t) => {
	var n = {};
	function r(e) {
		var t, r, i = n[e];
		if (i) return i;
		for (i = n[e] = [], t = 0; t < 128; t++) r = String.fromCharCode(t), /^[0-9a-z]$/i.test(r) ? i.push(r) : i.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
		for (t = 0; t < e.length; t++) i[e.charCodeAt(t)] = e[t];
		return i;
	}
	function i(e, t, n) {
		var a, o, s, c, l, u = "";
		for (typeof t != "string" && (n = t, t = i.defaultChars), n === void 0 && (n = !0), l = r(t), a = 0, o = e.length; a < o; a++) if (s = e.charCodeAt(a), n && s === 37 && a + 2 < o && /^[0-9a-f]{2}$/i.test(e.slice(a + 1, a + 3))) u += e.slice(a, a + 3), a += 2;
		else if (s < 128) u += l[s];
		else if (s >= 55296 && s <= 57343) {
			if (s >= 55296 && s <= 56319 && a + 1 < o && (c = e.charCodeAt(a + 1), c >= 56320 && c <= 57343)) {
				u += encodeURIComponent(e[a] + e[a + 1]), a++;
				continue;
			}
			u += "%EF%BF%BD";
		} else u += encodeURIComponent(e[a]);
		return u;
	}
	i.defaultChars = ";/?:@&=+$,-_.!~*'()#", i.componentChars = "-_.!~*'()", t.exports = i;
})), fd = /* @__PURE__ */ s(((e, t) => {
	var n = {};
	function r(e) {
		var t, r, i = n[e];
		if (i) return i;
		for (i = n[e] = [], t = 0; t < 128; t++) r = String.fromCharCode(t), i.push(r);
		for (t = 0; t < e.length; t++) r = e.charCodeAt(t), i[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
		return i;
	}
	function i(e, t) {
		var n;
		return typeof t != "string" && (t = i.defaultChars), n = r(t), e.replace(/(%[a-f0-9]{2})+/gi, function(e) {
			var t, r, i, a, o, s, c, l = "";
			for (t = 0, r = e.length; t < r; t += 3) i = parseInt(e.slice(t + 1, t + 3), 16), i < 128 ? l += n[i] : (i & 224) == 192 && t + 3 < r && (a = parseInt(e.slice(t + 4, t + 6), 16), (a & 192) == 128) ? (c = i << 6 & 1984 | a & 63, l += c < 128 ? "��" : String.fromCharCode(c), t += 3) : (i & 240) == 224 && t + 6 < r && (a = parseInt(e.slice(t + 4, t + 6), 16), o = parseInt(e.slice(t + 7, t + 9), 16), (a & 192) == 128 && (o & 192) == 128) ? (c = i << 12 & 61440 | a << 6 & 4032 | o & 63, l += c < 2048 || c >= 55296 && c <= 57343 ? "���" : String.fromCharCode(c), t += 6) : (i & 248) == 240 && t + 9 < r && (a = parseInt(e.slice(t + 4, t + 6), 16), o = parseInt(e.slice(t + 7, t + 9), 16), s = parseInt(e.slice(t + 10, t + 12), 16), (a & 192) == 128 && (o & 192) == 128 && (s & 192) == 128) ? (c = i << 18 & 1835008 | a << 12 & 258048 | o << 6 & 4032 | s & 63, c < 65536 || c > 1114111 ? l += "����" : (c -= 65536, l += String.fromCharCode(55296 + (c >> 10), 56320 + (c & 1023))), t += 9) : l += "�";
			return l;
		});
	}
	i.defaultChars = ";/?:@&=+$,#", i.componentChars = "", t.exports = i;
})), pd = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e) {
		var t = "";
		return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
	};
})), md = /* @__PURE__ */ s(((e, t) => {
	function n() {
		this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
	}
	var r = /^([a-z0-9.+-]+:)/i, i = /:[0-9]*$/, a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, o = [
		"%",
		"/",
		"?",
		";",
		"#",
		"'",
		"{",
		"}",
		"|",
		"\\",
		"^",
		"`",
		"<",
		">",
		"\"",
		"`",
		" ",
		"\r",
		"\n",
		"	"
	], s = [
		"/",
		"?",
		"#"
	], c = 255, l = /^[+a-z0-9A-Z_-]{0,63}$/, u = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, d = {
		javascript: !0,
		"javascript:": !0
	}, f = {
		http: !0,
		https: !0,
		ftp: !0,
		gopher: !0,
		file: !0,
		"http:": !0,
		"https:": !0,
		"ftp:": !0,
		"gopher:": !0,
		"file:": !0
	};
	function p(e, t) {
		if (e && e instanceof n) return e;
		var r = new n();
		return r.parse(e, t), r;
	}
	n.prototype.parse = function(e, t) {
		var n, i, p, m, h, g = e;
		if (g = g.trim(), !t && e.split("#").length === 1) {
			var _ = a.exec(g);
			if (_) return this.pathname = _[1], _[2] && (this.search = _[2]), this;
		}
		var v = r.exec(g);
		if (v && (v = v[0], p = v.toLowerCase(), this.protocol = v, g = g.substr(v.length)), (t || v || g.match(/^\/\/[^@\/]+@[^@\/]+/)) && (h = g.substr(0, 2) === "//", h && !(v && d[v]) && (g = g.substr(2), this.slashes = !0)), !d[v] && (h || v && !f[v])) {
			var y = -1;
			for (n = 0; n < s.length; n++) m = g.indexOf(s[n]), m !== -1 && (y === -1 || m < y) && (y = m);
			var b, x = y === -1 ? g.lastIndexOf("@") : g.lastIndexOf("@", y);
			for (x !== -1 && (b = g.slice(0, x), g = g.slice(x + 1), this.auth = b), y = -1, n = 0; n < o.length; n++) m = g.indexOf(o[n]), m !== -1 && (y === -1 || m < y) && (y = m);
			y === -1 && (y = g.length), g[y - 1] === ":" && y--;
			var S = g.slice(0, y);
			g = g.slice(y), this.parseHost(S), this.hostname = this.hostname || "";
			var C = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
			if (!C) {
				var w = this.hostname.split(/\./);
				for (n = 0, i = w.length; n < i; n++) {
					var T = w[n];
					if (T && !T.match(l)) {
						for (var E = "", D = 0, O = T.length; D < O; D++) T.charCodeAt(D) > 127 ? E += "x" : E += T[D];
						if (!E.match(l)) {
							var k = w.slice(0, n), A = w.slice(n + 1), j = T.match(u);
							j && (k.push(j[1]), A.unshift(j[2])), A.length && (g = A.join(".") + g), this.hostname = k.join(".");
							break;
						}
					}
				}
			}
			this.hostname.length > c && (this.hostname = ""), C && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
		}
		var M = g.indexOf("#");
		M !== -1 && (this.hash = g.substr(M), g = g.slice(0, M));
		var N = g.indexOf("?");
		return N !== -1 && (this.search = g.substr(N), g = g.slice(0, N)), g && (this.pathname = g), f[p] && this.hostname && !this.pathname && (this.pathname = ""), this;
	}, n.prototype.parseHost = function(e) {
		var t = i.exec(e);
		t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
	}, t.exports = p;
})), hd = /* @__PURE__ */ s(((e, t) => {
	t.exports.encode = dd(), t.exports.decode = fd(), t.exports.format = pd(), t.exports.parse = md();
})), gd = /* @__PURE__ */ s(((e, t) => {
	t.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
})), _d = /* @__PURE__ */ s(((e, t) => {
	t.exports = /[\0-\x1F\x7F-\x9F]/;
})), vd = /* @__PURE__ */ s(((e, t) => {
	t.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
})), yd = /* @__PURE__ */ s(((e, t) => {
	t.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
})), bd = /* @__PURE__ */ s(((e) => {
	e.Any = gd(), e.Cc = _d(), e.Cf = vd(), e.P = ud(), e.Z = yd();
})), $ = /* @__PURE__ */ s(((e) => {
	function t(e) {
		return Object.prototype.toString.call(e);
	}
	function n(e) {
		return t(e) === "[object String]";
	}
	var r = Object.prototype.hasOwnProperty;
	function i(e, t) {
		return r.call(e, t);
	}
	function a(e) {
		return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
			if (t) {
				if (typeof t != "object") throw TypeError(t + "must be object");
				Object.keys(t).forEach(function(n) {
					e[n] = t[n];
				});
			}
		}), e;
	}
	function o(e, t, n) {
		return [].concat(e.slice(0, t), n, e.slice(t + 1));
	}
	function s(e) {
		return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) == 65535 || (e & 65535) == 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
	}
	function c(e) {
		if (e > 65535) {
			e -= 65536;
			var t = 55296 + (e >> 10), n = 56320 + (e & 1023);
			return String.fromCharCode(t, n);
		}
		return String.fromCharCode(e);
	}
	var l = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, u = RegExp(l.source + "|&([a-z#][a-z0-9]{1,31});", "gi"), d = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i, f = ld();
	function p(e, t) {
		var n;
		return i(f, t) ? f[t] : t.charCodeAt(0) === 35 && d.test(t) && (n = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10), s(n)) ? c(n) : e;
	}
	function m(e) {
		return e.indexOf("\\") < 0 ? e : e.replace(l, "$1");
	}
	function h(e) {
		return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(u, function(e, t, n) {
			return t || p(e, n);
		});
	}
	var g = /[&<>"]/, _ = /[&<>"]/g, v = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;"
	};
	function y(e) {
		return v[e];
	}
	function b(e) {
		return g.test(e) ? e.replace(_, y) : e;
	}
	var x = /[.?*+^$[\]\\(){}|-]/g;
	function S(e) {
		return e.replace(x, "\\$&");
	}
	function C(e) {
		switch (e) {
			case 9:
			case 32: return !0;
		}
		return !1;
	}
	function w(e) {
		if (e >= 8192 && e <= 8202) return !0;
		switch (e) {
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 32:
			case 160:
			case 5760:
			case 8239:
			case 8287:
			case 12288: return !0;
		}
		return !1;
	}
	var T = ud();
	function E(e) {
		return T.test(e);
	}
	function D(e) {
		switch (e) {
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 123:
			case 124:
			case 125:
			case 126: return !0;
			default: return !1;
		}
	}
	function O(e) {
		return e = e.trim().replace(/\s+/g, " "), e.toLowerCase().toUpperCase();
	}
	e.lib = {}, e.lib.mdurl = hd(), e.lib.ucmicro = bd(), e.assign = a, e.isString = n, e.has = i, e.unescapeMd = m, e.unescapeAll = h, e.isValidEntityCode = s, e.fromCodePoint = c, e.escapeHtml = b, e.arrayReplaceAt = o, e.isSpace = C, e.isWhiteSpace = w, e.isMdAsciiPunct = D, e.isPunctChar = E, e.escapeRE = S, e.normalizeReference = O;
})), xd = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e, t, n) {
		var r, i, a, o, s = -1, c = e.posMax, l = e.pos;
		for (e.pos = t + 1, r = 1; e.pos < c;) {
			if (a = e.src.charCodeAt(e.pos), a === 93 && (r--, r === 0)) {
				i = !0;
				break;
			}
			if (o = e.pos, e.md.inline.skipToken(e), a === 91) {
				if (o === e.pos - 1) r++;
				else if (n) return e.pos = l, -1;
			}
		}
		return i && (s = e.pos), e.pos = l, s;
	};
})), Sd = /* @__PURE__ */ s(((e, t) => {
	var n = $().unescapeAll;
	t.exports = function(e, t, r) {
		var i, a, o = t, s = {
			ok: !1,
			pos: 0,
			lines: 0,
			str: ""
		};
		if (e.charCodeAt(o) === 60) {
			for (o++; o < r;) {
				if (i = e.charCodeAt(o), i === 10 || i === 60) return s;
				if (i === 62) return s.pos = o + 1, s.str = n(e.slice(t + 1, o)), s.ok = !0, s;
				i === 92 && o + 1 < r ? o += 2 : o++;
			}
			return s;
		}
		for (a = 0; o < r && (i = e.charCodeAt(o), !(i === 32 || i < 32 || i === 127));) if (i === 92 && o + 1 < r) {
			if (e.charCodeAt(o + 1) === 32) break;
			o += 2;
		} else {
			if (i === 40 && (a++, a > 32)) return s;
			if (i === 41) {
				if (a === 0) break;
				a--;
			}
			o++;
		}
		return t === o || a !== 0 || (s.str = n(e.slice(t, o)), s.pos = o, s.ok = !0), s;
	};
})), Cd = /* @__PURE__ */ s(((e, t) => {
	var n = $().unescapeAll;
	t.exports = function(e, t, r) {
		var i, a, o = 0, s = t, c = {
			ok: !1,
			pos: 0,
			lines: 0,
			str: ""
		};
		if (s >= r || (a = e.charCodeAt(s), a !== 34 && a !== 39 && a !== 40)) return c;
		for (s++, a === 40 && (a = 41); s < r;) {
			if (i = e.charCodeAt(s), i === a) return c.pos = s + 1, c.lines = o, c.str = n(e.slice(t + 1, s)), c.ok = !0, c;
			if (i === 40 && a === 41) return c;
			i === 10 ? o++ : i === 92 && s + 1 < r && (s++, e.charCodeAt(s) === 10 && o++), s++;
		}
		return c;
	};
})), wd = /* @__PURE__ */ s(((e) => {
	e.parseLinkLabel = xd(), e.parseLinkDestination = Sd(), e.parseLinkTitle = Cd();
})), Td = /* @__PURE__ */ s(((e, t) => {
	var n = $().assign, r = $().unescapeAll, i = $().escapeHtml, a = {};
	a.code_inline = function(e, t, n, r, a) {
		var o = e[t];
		return "<code" + a.renderAttrs(o) + ">" + i(o.content) + "</code>";
	}, a.code_block = function(e, t, n, r, a) {
		var o = e[t];
		return "<pre" + a.renderAttrs(o) + "><code>" + i(e[t].content) + "</code></pre>\n";
	}, a.fence = function(e, t, n, a, o) {
		var s = e[t], c = s.info ? r(s.info).trim() : "", l = "", u = "", d, f, p, m, h;
		return c && (p = c.split(/(\s+)/g), l = p[0], u = p.slice(2).join("")), d = n.highlight && n.highlight(s.content, l, u) || i(s.content), d.indexOf("<pre") === 0 ? d + "\n" : c ? (f = s.attrIndex("class"), m = s.attrs ? s.attrs.slice() : [], f < 0 ? m.push(["class", n.langPrefix + l]) : (m[f] = m[f].slice(), m[f][1] += " " + n.langPrefix + l), h = { attrs: m }, "<pre><code" + o.renderAttrs(h) + ">" + d + "</code></pre>\n") : "<pre><code" + o.renderAttrs(s) + ">" + d + "</code></pre>\n";
	}, a.image = function(e, t, n, r, i) {
		var a = e[t];
		return a.attrs[a.attrIndex("alt")][1] = i.renderInlineAsText(a.children, n, r), i.renderToken(e, t, n);
	}, a.hardbreak = function(e, t, n) {
		return n.xhtmlOut ? "<br />\n" : "<br>\n";
	}, a.softbreak = function(e, t, n) {
		return n.breaks ? n.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
	}, a.text = function(e, t) {
		return i(e[t].content);
	}, a.html_block = function(e, t) {
		return e[t].content;
	}, a.html_inline = function(e, t) {
		return e[t].content;
	};
	function o() {
		this.rules = n({}, a);
	}
	o.prototype.renderAttrs = function(e) {
		var t, n, r;
		if (!e.attrs) return "";
		for (r = "", t = 0, n = e.attrs.length; t < n; t++) r += " " + i(e.attrs[t][0]) + "=\"" + i(e.attrs[t][1]) + "\"";
		return r;
	}, o.prototype.renderToken = function(e, t, n) {
		var r, i = "", a = !1, o = e[t];
		return o.hidden ? "" : (o.block && o.nesting !== -1 && t && e[t - 1].hidden && (i += "\n"), i += (o.nesting === -1 ? "</" : "<") + o.tag, i += this.renderAttrs(o), o.nesting === 0 && n.xhtmlOut && (i += " /"), o.block && (a = !0, o.nesting === 1 && t + 1 < e.length && (r = e[t + 1], (r.type === "inline" || r.hidden || r.nesting === -1 && r.tag === o.tag) && (a = !1))), i += a ? ">\n" : ">", i);
	}, o.prototype.renderInline = function(e, t, n) {
		for (var r, i = "", a = this.rules, o = 0, s = e.length; o < s; o++) r = e[o].type, a[r] === void 0 ? i += this.renderToken(e, o, t) : i += a[r](e, o, t, n, this);
		return i;
	}, o.prototype.renderInlineAsText = function(e, t, n) {
		for (var r = "", i = 0, a = e.length; i < a; i++) e[i].type === "text" ? r += e[i].content : e[i].type === "image" ? r += this.renderInlineAsText(e[i].children, t, n) : e[i].type === "softbreak" && (r += "\n");
		return r;
	}, o.prototype.render = function(e, t, n) {
		var r, i, a, o = "", s = this.rules;
		for (r = 0, i = e.length; r < i; r++) a = e[r].type, a === "inline" ? o += this.renderInline(e[r].children, t, n) : s[a] === void 0 ? o += this.renderToken(e, r, t, n) : o += s[a](e, r, t, n, this);
		return o;
	}, t.exports = o;
})), Ed = /* @__PURE__ */ s(((e, t) => {
	function n() {
		this.__rules__ = [], this.__cache__ = null;
	}
	n.prototype.__find__ = function(e) {
		for (var t = 0; t < this.__rules__.length; t++) if (this.__rules__[t].name === e) return t;
		return -1;
	}, n.prototype.__compile__ = function() {
		var e = this, t = [""];
		e.__rules__.forEach(function(e) {
			e.enabled && e.alt.forEach(function(e) {
				t.indexOf(e) < 0 && t.push(e);
			});
		}), e.__cache__ = {}, t.forEach(function(t) {
			e.__cache__[t] = [], e.__rules__.forEach(function(n) {
				n.enabled && (t && n.alt.indexOf(t) < 0 || e.__cache__[t].push(n.fn));
			});
		});
	}, n.prototype.at = function(e, t, n) {
		var r = this.__find__(e), i = n || {};
		if (r === -1) throw Error("Parser rule not found: " + e);
		this.__rules__[r].fn = t, this.__rules__[r].alt = i.alt || [], this.__cache__ = null;
	}, n.prototype.before = function(e, t, n, r) {
		var i = this.__find__(e), a = r || {};
		if (i === -1) throw Error("Parser rule not found: " + e);
		this.__rules__.splice(i, 0, {
			name: t,
			enabled: !0,
			fn: n,
			alt: a.alt || []
		}), this.__cache__ = null;
	}, n.prototype.after = function(e, t, n, r) {
		var i = this.__find__(e), a = r || {};
		if (i === -1) throw Error("Parser rule not found: " + e);
		this.__rules__.splice(i + 1, 0, {
			name: t,
			enabled: !0,
			fn: n,
			alt: a.alt || []
		}), this.__cache__ = null;
	}, n.prototype.push = function(e, t, n) {
		var r = n || {};
		this.__rules__.push({
			name: e,
			enabled: !0,
			fn: t,
			alt: r.alt || []
		}), this.__cache__ = null;
	}, n.prototype.enable = function(e, t) {
		Array.isArray(e) || (e = [e]);
		var n = [];
		return e.forEach(function(e) {
			var r = this.__find__(e);
			if (r < 0) {
				if (t) return;
				throw Error("Rules manager: invalid rule name " + e);
			}
			this.__rules__[r].enabled = !0, n.push(e);
		}, this), this.__cache__ = null, n;
	}, n.prototype.enableOnly = function(e, t) {
		Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(e) {
			e.enabled = !1;
		}), this.enable(e, t);
	}, n.prototype.disable = function(e, t) {
		Array.isArray(e) || (e = [e]);
		var n = [];
		return e.forEach(function(e) {
			var r = this.__find__(e);
			if (r < 0) {
				if (t) return;
				throw Error("Rules manager: invalid rule name " + e);
			}
			this.__rules__[r].enabled = !1, n.push(e);
		}, this), this.__cache__ = null, n;
	}, n.prototype.getRules = function(e) {
		return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
	}, t.exports = n;
})), Dd = /* @__PURE__ */ s(((e, t) => {
	var n = /\r\n?|\n/g, r = /\0/g;
	t.exports = function(e) {
		var t = e.src.replace(n, "\n");
		t = t.replace(r, "�"), e.src = t;
	};
})), Od = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e) {
		var t;
		e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
	};
})), kd = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e) {
		for (var t = e.tokens, n, r = 0, i = t.length; r < i; r++) n = t[r], n.type === "inline" && e.md.inline.parse(n.content, e.md, e.env, n.children);
	};
})), Ad = /* @__PURE__ */ s(((e, t) => {
	var n = $().arrayReplaceAt;
	function r(e) {
		return /^<a[>\s]/i.test(e);
	}
	function i(e) {
		return /^<\/a\s*>/i.test(e);
	}
	t.exports = function(e) {
		var t, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b = e.tokens, x;
		if (e.md.options.linkify) {
			for (a = 0, o = b.length; a < o; a++) if (b[a].type === "inline" && e.md.linkify.pretest(b[a].content)) {
				for (s = b[a].children, g = 0, t = s.length - 1; t >= 0; t--) if (l = s[t], l.type === "link_close") for (t--; s[t].level !== l.level && s[t].type !== "link_open";) t--;
				else if (l.type === "html_inline" && (r(l.content) && g > 0 && g--, i(l.content) && g++), !(g > 0) && l.type === "text" && e.md.linkify.test(l.content)) {
					for (f = l.content, x = e.md.linkify.match(f), u = [], h = l.level, m = 0, x.length > 0 && x[0].index === 0 && t > 0 && s[t - 1].type === "text_special" && (x = x.slice(1)), d = 0; d < x.length; d++) _ = x[d].url, v = e.md.normalizeLink(_), e.md.validateLink(v) && (y = x[d].text, y = x[d].schema ? x[d].schema === "mailto:" && !/^mailto:/i.test(y) ? e.md.normalizeLinkText("mailto:" + y).replace(/^mailto:/, "") : e.md.normalizeLinkText(y) : e.md.normalizeLinkText("http://" + y).replace(/^http:\/\//, ""), p = x[d].index, p > m && (c = new e.Token("text", "", 0), c.content = f.slice(m, p), c.level = h, u.push(c)), c = new e.Token("link_open", "a", 1), c.attrs = [["href", v]], c.level = h++, c.markup = "linkify", c.info = "auto", u.push(c), c = new e.Token("text", "", 0), c.content = y, c.level = h, u.push(c), c = new e.Token("link_close", "a", -1), c.level = --h, c.markup = "linkify", c.info = "auto", u.push(c), m = x[d].lastIndex);
					m < f.length && (c = new e.Token("text", "", 0), c.content = f.slice(m), c.level = h, u.push(c)), b[a].children = s = n(s, t, u);
				}
			}
		}
	};
})), jd = /* @__PURE__ */ s(((e, t) => {
	var n = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, r = /\((c|tm|r)\)/i, i = /\((c|tm|r)\)/gi, a = {
		c: "©",
		r: "®",
		tm: "™"
	};
	function o(e, t) {
		return a[t.toLowerCase()];
	}
	function s(e) {
		var t, n, r = 0;
		for (t = e.length - 1; t >= 0; t--) n = e[t], n.type === "text" && !r && (n.content = n.content.replace(i, o)), n.type === "link_open" && n.info === "auto" && r--, n.type === "link_close" && n.info === "auto" && r++;
	}
	function c(e) {
		var t, r, i = 0;
		for (t = e.length - 1; t >= 0; t--) r = e[t], r.type === "text" && !i && n.test(r.content) && (r.content = r.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—").replace(/(^|\s)--(?=\s|$)/gm, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–")), r.type === "link_open" && r.info === "auto" && i--, r.type === "link_close" && r.info === "auto" && i++;
	}
	t.exports = function(e) {
		var t;
		if (e.md.options.typographer) for (t = e.tokens.length - 1; t >= 0; t--) e.tokens[t].type === "inline" && (r.test(e.tokens[t].content) && s(e.tokens[t].children), n.test(e.tokens[t].content) && c(e.tokens[t].children));
	};
})), Md = /* @__PURE__ */ s(((e, t) => {
	var n = $().isWhiteSpace, r = $().isPunctChar, i = $().isMdAsciiPunct, a = /['"]/, o = /['"]/g, s = "’";
	function c(e, t, n) {
		return e.slice(0, t) + n + e.slice(t + 1);
	}
	function l(e, t) {
		var a, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E = [], D, O;
		for (a = 0; a < e.length; a++) {
			for (l = e[a], m = e[a].level, w = E.length - 1; w >= 0 && !(E[w].level <= m); w--);
			if (E.length = w + 1, l.type === "text") {
				u = l.content, f = 0, p = u.length;
				OUTER: for (; f < p && (o.lastIndex = f, d = o.exec(u), d);) {
					if (S = C = !0, f = d.index + 1, T = d[0] === "'", g = 32, d.index - 1 >= 0) g = u.charCodeAt(d.index - 1);
					else for (w = a - 1; w >= 0 && e[w].type !== "softbreak" && e[w].type !== "hardbreak"; w--) if (e[w].content) {
						g = e[w].content.charCodeAt(e[w].content.length - 1);
						break;
					}
					if (_ = 32, f < p) _ = u.charCodeAt(f);
					else for (w = a + 1; w < e.length && e[w].type !== "softbreak" && e[w].type !== "hardbreak"; w++) if (e[w].content) {
						_ = e[w].content.charCodeAt(0);
						break;
					}
					if (v = i(g) || r(String.fromCharCode(g)), y = i(_) || r(String.fromCharCode(_)), b = n(g), x = n(_), x ? S = !1 : y && (b || v || (S = !1)), b ? C = !1 : v && (x || y || (C = !1)), _ === 34 && d[0] === "\"" && g >= 48 && g <= 57 && (C = S = !1), S && C && (S = v, C = y), !S && !C) T && (l.content = c(l.content, d.index, s));
					else {
						if (C) {
							for (w = E.length - 1; w >= 0 && (h = E[w], !(E[w].level < m)); w--) if (h.single === T && E[w].level === m) {
								h = E[w], T ? (D = t.md.options.quotes[2], O = t.md.options.quotes[3]) : (D = t.md.options.quotes[0], O = t.md.options.quotes[1]), l.content = c(l.content, d.index, O), e[h.token].content = c(e[h.token].content, h.pos, D), f += O.length - 1, h.token === a && (f += D.length - 1), u = l.content, p = u.length, E.length = w;
								continue OUTER;
							}
						}
						S ? E.push({
							token: a,
							pos: d.index,
							single: T,
							level: m
						}) : C && T && (l.content = c(l.content, d.index, s));
					}
				}
			}
		}
	}
	t.exports = function(e) {
		var t;
		if (e.md.options.typographer) for (t = e.tokens.length - 1; t >= 0; t--) e.tokens[t].type === "inline" && a.test(e.tokens[t].content) && l(e.tokens[t].children, e);
	};
})), Nd = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e) {
		var t, n, r, i, a, o, s = e.tokens;
		for (t = 0, n = s.length; t < n; t++) if (s[t].type === "inline") {
			for (r = s[t].children, a = r.length, i = 0; i < a; i++) r[i].type === "text_special" && (r[i].type = "text");
			for (i = o = 0; i < a; i++) r[i].type === "text" && i + 1 < a && r[i + 1].type === "text" ? r[i + 1].content = r[i].content + r[i + 1].content : (i !== o && (r[o] = r[i]), o++);
			i !== o && (r.length = o);
		}
	};
})), Pd = /* @__PURE__ */ s(((e, t) => {
	function n(e, t, n) {
		this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
	}
	n.prototype.attrIndex = function(e) {
		var t, n, r;
		if (!this.attrs) return -1;
		for (t = this.attrs, n = 0, r = t.length; n < r; n++) if (t[n][0] === e) return n;
		return -1;
	}, n.prototype.attrPush = function(e) {
		this.attrs ? this.attrs.push(e) : this.attrs = [e];
	}, n.prototype.attrSet = function(e, t) {
		var n = this.attrIndex(e), r = [e, t];
		n < 0 ? this.attrPush(r) : this.attrs[n] = r;
	}, n.prototype.attrGet = function(e) {
		var t = this.attrIndex(e), n = null;
		return t >= 0 && (n = this.attrs[t][1]), n;
	}, n.prototype.attrJoin = function(e, t) {
		var n = this.attrIndex(e);
		n < 0 ? this.attrPush([e, t]) : this.attrs[n][1] = this.attrs[n][1] + " " + t;
	}, t.exports = n;
})), Fd = /* @__PURE__ */ s(((e, t) => {
	var n = Pd();
	function r(e, t, n) {
		this.src = e, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = t;
	}
	r.prototype.Token = n, t.exports = r;
})), Id = /* @__PURE__ */ s(((e, t) => {
	var n = Ed(), r = [
		["normalize", Dd()],
		["block", Od()],
		["inline", kd()],
		["linkify", Ad()],
		["replacements", jd()],
		["smartquotes", Md()],
		["text_join", Nd()]
	];
	function i() {
		this.ruler = new n();
		for (var e = 0; e < r.length; e++) this.ruler.push(r[e][0], r[e][1]);
	}
	i.prototype.process = function(e) {
		var t, n, r = this.ruler.getRules("");
		for (t = 0, n = r.length; t < n; t++) r[t](e);
	}, i.prototype.State = Fd(), t.exports = i;
})), Ld = /* @__PURE__ */ s(((e, t) => {
	var n = $().isSpace;
	function r(e, t) {
		var n = e.bMarks[t] + e.tShift[t], r = e.eMarks[t];
		return e.src.slice(n, r);
	}
	function i(e) {
		var t = [], n = 0, r = e.length, i, a = !1, o = 0, s = "";
		for (i = e.charCodeAt(n); n < r;) i === 124 && (a ? (s += e.substring(o, n - 1), o = n) : (t.push(s + e.substring(o, n)), s = "", o = n + 1)), a = i === 92, n++, i = e.charCodeAt(n);
		return t.push(s + e.substring(o)), t;
	}
	t.exports = function(e, t, a, o) {
		var s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
		if (t + 2 > a || (f = t + 1, e.sCount[f] < e.blkIndent) || e.sCount[f] - e.blkIndent >= 4 || (l = e.bMarks[f] + e.tShift[f], l >= e.eMarks[f]) || (C = e.src.charCodeAt(l++), C !== 124 && C !== 45 && C !== 58) || l >= e.eMarks[f] || (w = e.src.charCodeAt(l++), w !== 124 && w !== 45 && w !== 58 && !n(w)) || C === 45 && n(w)) return !1;
		for (; l < e.eMarks[f];) {
			if (s = e.src.charCodeAt(l), s !== 124 && s !== 45 && s !== 58 && !n(s)) return !1;
			l++;
		}
		for (c = r(e, t + 1), p = c.split("|"), g = [], u = 0; u < p.length; u++) {
			if (_ = p[u].trim(), !_) {
				if (u === 0 || u === p.length - 1) continue;
				return !1;
			}
			if (!/^:?-+:?$/.test(_)) return !1;
			_.charCodeAt(_.length - 1) === 58 ? g.push(_.charCodeAt(0) === 58 ? "center" : "right") : _.charCodeAt(0) === 58 ? g.push("left") : g.push("");
		}
		if (c = r(e, t).trim(), c.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4 || (p = i(c), p.length && p[0] === "" && p.shift(), p.length && p[p.length - 1] === "" && p.pop(), m = p.length, m === 0 || m !== g.length)) return !1;
		if (o) return !0;
		for (b = e.parentType, e.parentType = "table", S = e.md.block.ruler.getRules("blockquote"), h = e.push("table_open", "table", 1), h.map = v = [t, 0], h = e.push("thead_open", "thead", 1), h.map = [t, t + 1], h = e.push("tr_open", "tr", 1), h.map = [t, t + 1], u = 0; u < p.length; u++) h = e.push("th_open", "th", 1), g[u] && (h.attrs = [["style", "text-align:" + g[u]]]), h = e.push("inline", "", 0), h.content = p[u].trim(), h.children = [], h = e.push("th_close", "th", -1);
		for (h = e.push("tr_close", "tr", -1), h = e.push("thead_close", "thead", -1), f = t + 2; f < a && !(e.sCount[f] < e.blkIndent); f++) {
			for (x = !1, u = 0, d = S.length; u < d; u++) if (S[u](e, f, a, !0)) {
				x = !0;
				break;
			}
			if (x || (c = r(e, f).trim(), !c) || e.sCount[f] - e.blkIndent >= 4) break;
			for (p = i(c), p.length && p[0] === "" && p.shift(), p.length && p[p.length - 1] === "" && p.pop(), f === t + 2 && (h = e.push("tbody_open", "tbody", 1), h.map = y = [t + 2, 0]), h = e.push("tr_open", "tr", 1), h.map = [f, f + 1], u = 0; u < m; u++) h = e.push("td_open", "td", 1), g[u] && (h.attrs = [["style", "text-align:" + g[u]]]), h = e.push("inline", "", 0), h.content = p[u] ? p[u].trim() : "", h.children = [], h = e.push("td_close", "td", -1);
			h = e.push("tr_close", "tr", -1);
		}
		return y && (h = e.push("tbody_close", "tbody", -1), y[1] = f), h = e.push("table_close", "table", -1), v[1] = f, e.parentType = b, e.line = f, !0;
	};
})), Rd = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e, t, n) {
		var r, i, a;
		if (e.sCount[t] - e.blkIndent < 4) return !1;
		for (i = r = t + 1; r < n;) if (e.isEmpty(r)) r++;
		else if (e.sCount[r] - e.blkIndent >= 4) r++, i = r;
		else break;
		return e.line = i, a = e.push("code_block", "code", 0), a.content = e.getLines(t, i, 4 + e.blkIndent, !1) + "\n", a.map = [t, e.line], !0;
	};
})), zd = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e, t, n, r) {
		var i, a, o, s, c, l, u, d = !1, f = e.bMarks[t] + e.tShift[t], p = e.eMarks[t];
		if (e.sCount[t] - e.blkIndent >= 4 || f + 3 > p || (i = e.src.charCodeAt(f), i !== 126 && i !== 96) || (c = f, f = e.skipChars(f, i), a = f - c, a < 3) || (u = e.src.slice(c, f), o = e.src.slice(f, p), i === 96 && o.indexOf(String.fromCharCode(i)) >= 0)) return !1;
		if (r) return !0;
		for (s = t; s++, !(s >= n || (f = c = e.bMarks[s] + e.tShift[s], p = e.eMarks[s], f < p && e.sCount[s] < e.blkIndent));) if (e.src.charCodeAt(f) === i && !(e.sCount[s] - e.blkIndent >= 4) && (f = e.skipChars(f, i), !(f - c < a) && (f = e.skipSpaces(f), !(f < p)))) {
			d = !0;
			break;
		}
		return a = e.sCount[t], e.line = s + +!!d, l = e.push("fence", "code", 0), l.info = o, l.content = e.getLines(t + 1, s, a, !0), l.markup = u, l.map = [t, e.line], !0;
	};
})), Bd = /* @__PURE__ */ s(((e, t) => {
	var n = $().isSpace;
	t.exports = function(e, t, r, i) {
		var a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T = e.lineMax, E = e.bMarks[t] + e.tShift[t], D = e.eMarks[t];
		if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(E) !== 62) return !1;
		if (i) return !0;
		for (m = [], h = [], v = [], y = [], S = e.md.block.ruler.getRules("blockquote"), _ = e.parentType, e.parentType = "blockquote", f = t; f < r && (w = e.sCount[f] < e.blkIndent, E = e.bMarks[f] + e.tShift[f], D = e.eMarks[f], !(E >= D)); f++) if (e.src.charCodeAt(E++) === 62 && !w) {
			for (c = e.sCount[f] + 1, e.src.charCodeAt(E) === 32 ? (E++, c++, a = !1, b = !0) : e.src.charCodeAt(E) === 9 ? (b = !0, (e.bsCount[f] + c) % 4 == 3 ? (E++, c++, a = !1) : a = !0) : b = !1, p = c, m.push(e.bMarks[f]), e.bMarks[f] = E; E < D && (o = e.src.charCodeAt(E), n(o));) o === 9 ? p += 4 - (p + e.bsCount[f] + +!!a) % 4 : p++, E++;
			u = E >= D, h.push(e.bsCount[f]), e.bsCount[f] = e.sCount[f] + 1 + +!!b, v.push(e.sCount[f]), e.sCount[f] = p - c, y.push(e.tShift[f]), e.tShift[f] = E - e.bMarks[f];
		} else {
			if (u) break;
			for (x = !1, s = 0, l = S.length; s < l; s++) if (S[s](e, f, r, !0)) {
				x = !0;
				break;
			}
			if (x) {
				e.lineMax = f, e.blkIndent !== 0 && (m.push(e.bMarks[f]), h.push(e.bsCount[f]), y.push(e.tShift[f]), v.push(e.sCount[f]), e.sCount[f] -= e.blkIndent);
				break;
			}
			m.push(e.bMarks[f]), h.push(e.bsCount[f]), y.push(e.tShift[f]), v.push(e.sCount[f]), e.sCount[f] = -1;
		}
		for (g = e.blkIndent, e.blkIndent = 0, C = e.push("blockquote_open", "blockquote", 1), C.markup = ">", C.map = d = [t, 0], e.md.block.tokenize(e, t, f), C = e.push("blockquote_close", "blockquote", -1), C.markup = ">", e.lineMax = T, e.parentType = _, d[1] = e.line, s = 0; s < y.length; s++) e.bMarks[s + t] = m[s], e.tShift[s + t] = y[s], e.sCount[s + t] = v[s], e.bsCount[s + t] = h[s];
		return e.blkIndent = g, !0;
	};
})), Vd = /* @__PURE__ */ s(((e, t) => {
	var n = $().isSpace;
	t.exports = function(e, t, r, i) {
		var a, o, s, c, l = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
		if (e.sCount[t] - e.blkIndent >= 4 || (a = e.src.charCodeAt(l++), a !== 42 && a !== 45 && a !== 95)) return !1;
		for (o = 1; l < u;) {
			if (s = e.src.charCodeAt(l++), s !== a && !n(s)) return !1;
			s === a && o++;
		}
		return o < 3 ? !1 : (i || (e.line = t + 1, c = e.push("hr", "hr", 0), c.map = [t, e.line], c.markup = Array(o + 1).join(String.fromCharCode(a))), !0);
	};
})), Hd = /* @__PURE__ */ s(((e, t) => {
	var n = $().isSpace;
	function r(e, t) {
		var r, i = e.bMarks[t] + e.tShift[t], a = e.eMarks[t], o;
		return r = e.src.charCodeAt(i++), r !== 42 && r !== 45 && r !== 43 || i < a && (o = e.src.charCodeAt(i), !n(o)) ? -1 : i;
	}
	function i(e, t) {
		var r, i = e.bMarks[t] + e.tShift[t], a = i, o = e.eMarks[t];
		if (a + 1 >= o || (r = e.src.charCodeAt(a++), r < 48 || r > 57)) return -1;
		for (;;) {
			if (a >= o) return -1;
			if (r = e.src.charCodeAt(a++), r >= 48 && r <= 57) {
				if (a - i >= 10) return -1;
			} else {
				if (r === 41 || r === 46) break;
				return -1;
			}
		}
		return a < o && (r = e.src.charCodeAt(a), !n(r)) ? -1 : a;
	}
	function a(e, t) {
		var n, r, i = e.level + 2;
		for (n = t + 2, r = e.tokens.length - 2; n < r; n++) e.tokens[n].level === i && e.tokens[n].type === "paragraph_open" && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2);
	}
	t.exports = function(e, t, n, o) {
		var s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P = t, ee = !1, te = !0;
		if (e.sCount[P] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[P] - e.listIndent >= 4 && e.sCount[P] < e.blkIndent) return !1;
		if (o && e.parentType === "paragraph" && e.sCount[P] >= e.blkIndent && (ee = !0), (O = i(e, P)) >= 0) {
			if (p = !0, A = e.bMarks[P] + e.tShift[P], y = Number(e.src.slice(A, O - 1)), ee && y !== 1) return !1;
		} else if ((O = r(e, P)) >= 0) p = !1;
		else return !1;
		if (ee && e.skipSpaces(O) >= e.eMarks[P]) return !1;
		if (o) return !0;
		for (v = e.src.charCodeAt(O - 1), _ = e.tokens.length, p ? (N = e.push("ordered_list_open", "ol", 1), y !== 1 && (N.attrs = [["start", y]])) : N = e.push("bullet_list_open", "ul", 1), N.map = g = [P, 0], N.markup = String.fromCharCode(v), k = !1, M = e.md.block.ruler.getRules("list"), C = e.parentType, e.parentType = "list"; P < n;) {
			for (D = O, b = e.eMarks[P], f = x = e.sCount[P] + O - (e.bMarks[P] + e.tShift[P]); D < b;) {
				if (s = e.src.charCodeAt(D), s === 9) x += 4 - (x + e.bsCount[P]) % 4;
				else if (s === 32) x++;
				else break;
				D++;
			}
			if (c = D, d = c >= b ? 1 : x - f, d > 4 && (d = 1), u = f + d, N = e.push("list_item_open", "li", 1), N.markup = String.fromCharCode(v), N.map = m = [P, 0], p && (N.info = e.src.slice(A, O - 1)), E = e.tight, T = e.tShift[P], w = e.sCount[P], S = e.listIndent, e.listIndent = e.blkIndent, e.blkIndent = u, e.tight = !0, e.tShift[P] = c - e.bMarks[P], e.sCount[P] = x, c >= b && e.isEmpty(P + 1) ? e.line = Math.min(e.line + 2, n) : e.md.block.tokenize(e, P, n, !0), (!e.tight || k) && (te = !1), k = e.line - P > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = S, e.tShift[P] = T, e.sCount[P] = w, e.tight = E, N = e.push("list_item_close", "li", -1), N.markup = String.fromCharCode(v), P = e.line, m[1] = P, P >= n || e.sCount[P] < e.blkIndent || e.sCount[P] - e.blkIndent >= 4) break;
			for (j = !1, l = 0, h = M.length; l < h; l++) if (M[l](e, P, n, !0)) {
				j = !0;
				break;
			}
			if (j) break;
			if (p) {
				if (O = i(e, P), O < 0) break;
				A = e.bMarks[P] + e.tShift[P];
			} else if (O = r(e, P), O < 0) break;
			if (v !== e.src.charCodeAt(O - 1)) break;
		}
		return N = p ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1), N.markup = String.fromCharCode(v), g[1] = P, e.line = P, e.parentType = C, te && a(e, _), !0;
	};
})), Ud = /* @__PURE__ */ s(((e, t) => {
	var n = $().normalizeReference, r = $().isSpace;
	t.exports = function(e, t, i, a) {
		var o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S = 0, C = e.bMarks[t] + e.tShift[t], w = e.eMarks[t], T = t + 1;
		if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(C) !== 91) return !1;
		for (; ++C < w;) if (e.src.charCodeAt(C) === 93 && e.src.charCodeAt(C - 1) !== 92) {
			if (C + 1 === w || e.src.charCodeAt(C + 1) !== 58) return !1;
			break;
		}
		for (l = e.lineMax, b = e.md.block.ruler.getRules("reference"), h = e.parentType, e.parentType = "reference"; T < l && !e.isEmpty(T); T++) if (!(e.sCount[T] - e.blkIndent > 3) && !(e.sCount[T] < 0)) {
			for (y = !1, d = 0, f = b.length; d < f; d++) if (b[d](e, T, l, !0)) {
				y = !0;
				break;
			}
			if (y) break;
		}
		for (v = e.getLines(t, T, e.blkIndent, !1).trim(), w = v.length, C = 1; C < w; C++) {
			if (o = v.charCodeAt(C), o === 91) return !1;
			if (o === 93) {
				m = C;
				break;
			}
			o === 10 ? S++ : o === 92 && (C++, C < w && v.charCodeAt(C) === 10 && S++);
		}
		if (m < 0 || v.charCodeAt(m + 1) !== 58) return !1;
		for (C = m + 2; C < w; C++) if (o = v.charCodeAt(C), o === 10) S++;
		else if (!r(o)) break;
		if (g = e.md.helpers.parseLinkDestination(v, C, w), !g.ok || (u = e.md.normalizeLink(g.str), !e.md.validateLink(u))) return !1;
		for (C = g.pos, S += g.lines, s = C, c = S, _ = C; C < w; C++) if (o = v.charCodeAt(C), o === 10) S++;
		else if (!r(o)) break;
		for (g = e.md.helpers.parseLinkTitle(v, C, w), C < w && _ !== C && g.ok ? (x = g.str, C = g.pos, S += g.lines) : (x = "", C = s, S = c); C < w && (o = v.charCodeAt(C), r(o));) C++;
		if (C < w && v.charCodeAt(C) !== 10 && x) for (x = "", C = s, S = c; C < w && (o = v.charCodeAt(C), r(o));) C++;
		return C < w && v.charCodeAt(C) !== 10 || (p = n(v.slice(1, m)), !p) ? !1 : 
		/*istanbul ignore if*/
		(a || (e.env.references === void 0 && (e.env.references = {}), e.env.references[p] === void 0 && (e.env.references[p] = {
			title: x,
			href: u
		}), e.parentType = h, e.line = t + S + 1), !0);
	};
})), Wd = /* @__PURE__ */ s(((e, t) => {
	t.exports = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.section.source.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split(".");
})), Gd = /* @__PURE__ */ s(((e, t) => {
	var n = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>", r = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", i = RegExp("^(?:" + n + "|" + r + "|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"), a = RegExp("^(?:" + n + "|" + r + ")");
	t.exports.HTML_TAG_RE = i, t.exports.HTML_OPEN_CLOSE_TAG_RE = a;
})), Kd = /* @__PURE__ */ s(((e, t) => {
	var n = Wd(), r = Gd().HTML_OPEN_CLOSE_TAG_RE, i = [
		[
			/^<(script|pre|style|textarea)(?=(\s|>|$))/i,
			/<\/(script|pre|style|textarea)>/i,
			!0
		],
		[
			/^<!--/,
			/-->/,
			!0
		],
		[
			/^<\?/,
			/\?>/,
			!0
		],
		[
			/^<![A-Z]/,
			/>/,
			!0
		],
		[
			/^<!\[CDATA\[/,
			/\]\]>/,
			!0
		],
		[
			RegExp("^</?(" + n.join("|") + ")(?=(\\s|/?>|$))", "i"),
			/^$/,
			!0
		],
		[
			RegExp(r.source + "\\s*$"),
			/^$/,
			!1
		]
	];
	t.exports = function(e, t, n, r) {
		var a, o, s, c, l = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
		if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(l) !== 60) return !1;
		for (c = e.src.slice(l, u), a = 0; a < i.length && !i[a][0].test(c); a++);
		if (a === i.length) return !1;
		if (r) return i[a][2];
		if (o = t + 1, !i[a][1].test(c)) {
			for (; o < n && !(e.sCount[o] < e.blkIndent); o++) if (l = e.bMarks[o] + e.tShift[o], u = e.eMarks[o], c = e.src.slice(l, u), i[a][1].test(c)) {
				c.length !== 0 && o++;
				break;
			}
		}
		return e.line = o, s = e.push("html_block", "", 0), s.map = [t, o], s.content = e.getLines(t, o, e.blkIndent, !0), !0;
	};
})), qd = /* @__PURE__ */ s(((e, t) => {
	var n = $().isSpace;
	t.exports = function(e, t, r, i) {
		var a, o, s, c, l = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
		if (e.sCount[t] - e.blkIndent >= 4 || (a = e.src.charCodeAt(l), a !== 35 || l >= u)) return !1;
		for (o = 1, a = e.src.charCodeAt(++l); a === 35 && l < u && o <= 6;) o++, a = e.src.charCodeAt(++l);
		return o > 6 || l < u && !n(a) ? !1 : (i || (u = e.skipSpacesBack(u, l), s = e.skipCharsBack(u, 35, l), s > l && n(e.src.charCodeAt(s - 1)) && (u = s), e.line = t + 1, c = e.push("heading_open", "h" + String(o), 1), c.markup = "########".slice(0, o), c.map = [t, e.line], c = e.push("inline", "", 0), c.content = e.src.slice(l, u).trim(), c.map = [t, e.line], c.children = [], c = e.push("heading_close", "h" + String(o), -1), c.markup = "########".slice(0, o)), !0);
	};
})), Jd = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e, t, n) {
		var r, i, a, o, s, c, l, u, d, f = t + 1, p, m = e.md.block.ruler.getRules("paragraph");
		if (e.sCount[t] - e.blkIndent >= 4) return !1;
		for (p = e.parentType, e.parentType = "paragraph"; f < n && !e.isEmpty(f); f++) if (!(e.sCount[f] - e.blkIndent > 3)) {
			if (e.sCount[f] >= e.blkIndent && (c = e.bMarks[f] + e.tShift[f], l = e.eMarks[f], c < l && (d = e.src.charCodeAt(c), (d === 45 || d === 61) && (c = e.skipChars(c, d), c = e.skipSpaces(c), c >= l)))) {
				u = d === 61 ? 1 : 2;
				break;
			}
			if (!(e.sCount[f] < 0)) {
				for (i = !1, a = 0, o = m.length; a < o; a++) if (m[a](e, f, n, !0)) {
					i = !0;
					break;
				}
				if (i) break;
			}
		}
		return u ? (r = e.getLines(t, f, e.blkIndent, !1).trim(), e.line = f + 1, s = e.push("heading_open", "h" + String(u), 1), s.markup = String.fromCharCode(d), s.map = [t, e.line], s = e.push("inline", "", 0), s.content = r, s.map = [t, e.line - 1], s.children = [], s = e.push("heading_close", "h" + String(u), -1), s.markup = String.fromCharCode(d), e.parentType = p, !0) : !1;
	};
})), Yd = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e, t, n) {
		var r, i, a, o, s, c, l = t + 1, u = e.md.block.ruler.getRules("paragraph");
		for (c = e.parentType, e.parentType = "paragraph"; l < n && !e.isEmpty(l); l++) if (!(e.sCount[l] - e.blkIndent > 3) && !(e.sCount[l] < 0)) {
			for (i = !1, a = 0, o = u.length; a < o; a++) if (u[a](e, l, n, !0)) {
				i = !0;
				break;
			}
			if (i) break;
		}
		return r = e.getLines(t, l, e.blkIndent, !1).trim(), e.line = l, s = e.push("paragraph_open", "p", 1), s.map = [t, e.line], s = e.push("inline", "", 0), s.content = r, s.map = [t, e.line], s.children = [], s = e.push("paragraph_close", "p", -1), e.parentType = c, !0;
	};
})), Xd = /* @__PURE__ */ s(((e, t) => {
	var n = Pd(), r = $().isSpace;
	function i(e, t, n, i) {
		var a, o, s, c, l, u, d, f;
		for (this.src = e, this.md = t, this.env = n, this.tokens = i, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", o = this.src, f = !1, s = c = u = d = 0, l = o.length; c < l; c++) {
			if (a = o.charCodeAt(c), !f) {
				if (r(a)) {
					u++, a === 9 ? d += 4 - d % 4 : d++;
					continue;
				}
				f = !0;
			}
			(a === 10 || c === l - 1) && (a !== 10 && c++, this.bMarks.push(s), this.eMarks.push(c), this.tShift.push(u), this.sCount.push(d), this.bsCount.push(0), f = !1, u = 0, d = 0, s = c + 1);
		}
		this.bMarks.push(o.length), this.eMarks.push(o.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
	}
	i.prototype.push = function(e, t, r) {
		var i = new n(e, t, r);
		return i.block = !0, r < 0 && this.level--, i.level = this.level, r > 0 && this.level++, this.tokens.push(i), i;
	}, i.prototype.isEmpty = function(e) {
		return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
	}, i.prototype.skipEmptyLines = function(e) {
		for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
		return e;
	}, i.prototype.skipSpaces = function(e) {
		for (var t, n = this.src.length; e < n && (t = this.src.charCodeAt(e), r(t)); e++);
		return e;
	}, i.prototype.skipSpacesBack = function(e, t) {
		if (e <= t) return e;
		for (; e > t;) if (!r(this.src.charCodeAt(--e))) return e + 1;
		return e;
	}, i.prototype.skipChars = function(e, t) {
		for (var n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++);
		return e;
	}, i.prototype.skipCharsBack = function(e, t, n) {
		if (e <= n) return e;
		for (; e > n;) if (t !== this.src.charCodeAt(--e)) return e + 1;
		return e;
	}, i.prototype.getLines = function(e, t, n, i) {
		var a, o, s, c, l, u, d, f = e;
		if (e >= t) return "";
		for (u = Array(t - e), a = 0; f < t; f++, a++) {
			for (o = 0, d = c = this.bMarks[f], l = f + 1 < t || i ? this.eMarks[f] + 1 : this.eMarks[f]; c < l && o < n;) {
				if (s = this.src.charCodeAt(c), r(s)) s === 9 ? o += 4 - (o + this.bsCount[f]) % 4 : o++;
				else if (c - d < this.tShift[f]) o++;
				else break;
				c++;
			}
			o > n ? u[a] = Array(o - n + 1).join(" ") + this.src.slice(c, l) : u[a] = this.src.slice(c, l);
		}
		return u.join("");
	}, i.prototype.Token = n, t.exports = i;
})), Zd = /* @__PURE__ */ s(((e, t) => {
	var n = Ed(), r = [
		[
			"table",
			Ld(),
			["paragraph", "reference"]
		],
		["code", Rd()],
		[
			"fence",
			zd(),
			[
				"paragraph",
				"reference",
				"blockquote",
				"list"
			]
		],
		[
			"blockquote",
			Bd(),
			[
				"paragraph",
				"reference",
				"blockquote",
				"list"
			]
		],
		[
			"hr",
			Vd(),
			[
				"paragraph",
				"reference",
				"blockquote",
				"list"
			]
		],
		[
			"list",
			Hd(),
			[
				"paragraph",
				"reference",
				"blockquote"
			]
		],
		["reference", Ud()],
		[
			"html_block",
			Kd(),
			[
				"paragraph",
				"reference",
				"blockquote"
			]
		],
		[
			"heading",
			qd(),
			[
				"paragraph",
				"reference",
				"blockquote"
			]
		],
		["lheading", Jd()],
		["paragraph", Yd()]
	];
	function i() {
		this.ruler = new n();
		for (var e = 0; e < r.length; e++) this.ruler.push(r[e][0], r[e][1], { alt: (r[e][2] || []).slice() });
	}
	i.prototype.tokenize = function(e, t, n) {
		for (var r, i, a, o = this.ruler.getRules(""), s = o.length, c = t, l = !1, u = e.md.options.maxNesting; c < n && (e.line = c = e.skipEmptyLines(c), !(c >= n || e.sCount[c] < e.blkIndent));) {
			if (e.level >= u) {
				e.line = n;
				break;
			}
			for (a = e.line, i = 0; i < s; i++) if (r = o[i](e, c, n, !1), r) {
				if (a >= e.line) throw Error("block rule didn't increment state.line");
				break;
			}
			if (!r) throw Error("none of the block rules matched");
			e.tight = !l, e.isEmpty(e.line - 1) && (l = !0), c = e.line, c < n && e.isEmpty(c) && (l = !0, c++, e.line = c);
		}
	}, i.prototype.parse = function(e, t, n, r) {
		var i;
		e && (i = new this.State(e, t, n, r), this.tokenize(i, i.line, i.lineMax));
	}, i.prototype.State = Xd(), t.exports = i;
})), Qd = /* @__PURE__ */ s(((e, t) => {
	function n(e) {
		switch (e) {
			case 10:
			case 33:
			case 35:
			case 36:
			case 37:
			case 38:
			case 42:
			case 43:
			case 45:
			case 58:
			case 60:
			case 61:
			case 62:
			case 64:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 123:
			case 125:
			case 126: return !0;
			default: return !1;
		}
	}
	t.exports = function(e, t) {
		for (var r = e.pos; r < e.posMax && !n(e.src.charCodeAt(r));) r++;
		return r !== e.pos && (t || (e.pending += e.src.slice(e.pos, r)), e.pos = r, !0);
	};
})), $d = /* @__PURE__ */ s(((e, t) => {
	var n = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
	t.exports = function(e, t) {
		var r, i, a, o, s, c, l, u;
		return !e.md.options.linkify || e.linkLevel > 0 || (r = e.pos, i = e.posMax, r + 3 > i) || e.src.charCodeAt(r) !== 58 || e.src.charCodeAt(r + 1) !== 47 || e.src.charCodeAt(r + 2) !== 47 || (a = e.pending.match(n), !a) || (o = a[1], s = e.md.linkify.matchAtStart(e.src.slice(r - o.length)), !s) || (c = s.url, c.length <= o.length) || (c = c.replace(/\*+$/, ""), l = e.md.normalizeLink(c), !e.md.validateLink(l)) ? !1 : (t || (e.pending = e.pending.slice(0, -o.length), u = e.push("link_open", "a", 1), u.attrs = [["href", l]], u.markup = "linkify", u.info = "auto", u = e.push("text", "", 0), u.content = e.md.normalizeLinkText(c), u = e.push("link_close", "a", -1), u.markup = "linkify", u.info = "auto"), e.pos += c.length - o.length, !0);
	};
})), ef = /* @__PURE__ */ s(((e, t) => {
	var n = $().isSpace;
	t.exports = function(e, t) {
		var r, i, a, o = e.pos;
		if (e.src.charCodeAt(o) !== 10) return !1;
		if (r = e.pending.length - 1, i = e.posMax, !t) {
			if (r >= 0 && e.pending.charCodeAt(r) === 32) {
				if (r >= 1 && e.pending.charCodeAt(r - 1) === 32) {
					for (a = r - 1; a >= 1 && e.pending.charCodeAt(a - 1) === 32;) a--;
					e.pending = e.pending.slice(0, a), e.push("hardbreak", "br", 0);
				} else e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
			} else e.push("softbreak", "br", 0);
		}
		for (o++; o < i && n(e.src.charCodeAt(o));) o++;
		return e.pos = o, !0;
	};
})), tf = /* @__PURE__ */ s(((e, t) => {
	for (var n = $().isSpace, r = [], i = 0; i < 256; i++) r.push(0);
	"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
		r[e.charCodeAt(0)] = 1;
	}), t.exports = function(e, t) {
		var i, a, o, s, c, l = e.pos, u = e.posMax;
		if (e.src.charCodeAt(l) !== 92 || (l++, l >= u)) return !1;
		if (i = e.src.charCodeAt(l), i === 10) {
			for (t || e.push("hardbreak", "br", 0), l++; l < u && (i = e.src.charCodeAt(l), n(i));) l++;
			return e.pos = l, !0;
		}
		return s = e.src[l], i >= 55296 && i <= 56319 && l + 1 < u && (a = e.src.charCodeAt(l + 1), a >= 56320 && a <= 57343 && (s += e.src[l + 1], l++)), o = "\\" + s, t || (c = e.push("text_special", "", 0), i < 256 && r[i] !== 0 ? c.content = s : c.content = o, c.markup = o, c.info = "escape"), e.pos = l + 1, !0;
	};
})), nf = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e, t) {
		var n, r, i, a, o, s, c, l, u = e.pos;
		if (e.src.charCodeAt(u) !== 96) return !1;
		for (n = u, u++, r = e.posMax; u < r && e.src.charCodeAt(u) === 96;) u++;
		if (i = e.src.slice(n, u), c = i.length, e.backticksScanned && (e.backticks[c] || 0) <= n) return t || (e.pending += i), e.pos += c, !0;
		for (s = u; (o = e.src.indexOf("`", s)) !== -1;) {
			for (s = o + 1; s < r && e.src.charCodeAt(s) === 96;) s++;
			if (l = s - o, l === c) return t || (a = e.push("code_inline", "code", 0), a.markup = i, a.content = e.src.slice(u, o).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e.pos = s, !0;
			e.backticks[l] = o;
		}
		return e.backticksScanned = !0, t || (e.pending += i), e.pos += c, !0;
	};
})), rf = /* @__PURE__ */ s(((e, t) => {
	t.exports.tokenize = function(e, t) {
		var n, r, i, a, o, s = e.pos, c = e.src.charCodeAt(s);
		if (t || c !== 126 || (r = e.scanDelims(e.pos, !0), a = r.length, o = String.fromCharCode(c), a < 2)) return !1;
		for (a % 2 && (i = e.push("text", "", 0), i.content = o, a--), n = 0; n < a; n += 2) i = e.push("text", "", 0), i.content = o + o, e.delimiters.push({
			marker: c,
			length: 0,
			token: e.tokens.length - 1,
			end: -1,
			open: r.can_open,
			close: r.can_close
		});
		return e.pos += r.length, !0;
	};
	function n(e, t) {
		var n, r, i, a, o, s = [], c = t.length;
		for (n = 0; n < c; n++) i = t[n], i.marker === 126 && i.end !== -1 && (a = t[i.end], o = e.tokens[i.token], o.type = "s_open", o.tag = "s", o.nesting = 1, o.markup = "~~", o.content = "", o = e.tokens[a.token], o.type = "s_close", o.tag = "s", o.nesting = -1, o.markup = "~~", o.content = "", e.tokens[a.token - 1].type === "text" && e.tokens[a.token - 1].content === "~" && s.push(a.token - 1));
		for (; s.length;) {
			for (n = s.pop(), r = n + 1; r < e.tokens.length && e.tokens[r].type === "s_close";) r++;
			r--, n !== r && (o = e.tokens[r], e.tokens[r] = e.tokens[n], e.tokens[n] = o);
		}
	}
	t.exports.postProcess = function(e) {
		var t, r = e.tokens_meta, i = e.tokens_meta.length;
		for (n(e, e.delimiters), t = 0; t < i; t++) r[t] && r[t].delimiters && n(e, r[t].delimiters);
	};
})), af = /* @__PURE__ */ s(((e, t) => {
	t.exports.tokenize = function(e, t) {
		var n, r, i, a = e.pos, o = e.src.charCodeAt(a);
		if (t || o !== 95 && o !== 42) return !1;
		for (r = e.scanDelims(e.pos, o === 42), n = 0; n < r.length; n++) i = e.push("text", "", 0), i.content = String.fromCharCode(o), e.delimiters.push({
			marker: o,
			length: r.length,
			token: e.tokens.length - 1,
			end: -1,
			open: r.can_open,
			close: r.can_close
		});
		return e.pos += r.length, !0;
	};
	function n(e, t) {
		for (var n = t.length - 1, r, i, a, o, s; n >= 0; n--) r = t[n], (r.marker === 95 || r.marker === 42) && r.end !== -1 && (i = t[r.end], s = n > 0 && t[n - 1].end === r.end + 1 && t[n - 1].marker === r.marker && t[n - 1].token === r.token - 1 && t[r.end + 1].token === i.token + 1, o = String.fromCharCode(r.marker), a = e.tokens[r.token], a.type = s ? "strong_open" : "em_open", a.tag = s ? "strong" : "em", a.nesting = 1, a.markup = s ? o + o : o, a.content = "", a = e.tokens[i.token], a.type = s ? "strong_close" : "em_close", a.tag = s ? "strong" : "em", a.nesting = -1, a.markup = s ? o + o : o, a.content = "", s && (e.tokens[t[n - 1].token].content = "", e.tokens[t[r.end + 1].token].content = "", n--));
	}
	t.exports.postProcess = function(e) {
		var t, r = e.tokens_meta, i = e.tokens_meta.length;
		for (n(e, e.delimiters), t = 0; t < i; t++) r[t] && r[t].delimiters && n(e, r[t].delimiters);
	};
})), of = /* @__PURE__ */ s(((e, t) => {
	var n = $().normalizeReference, r = $().isSpace;
	t.exports = function(e, t) {
		var i, a, o, s, c, l, u, d, f, p = "", m = "", h = e.pos, g = e.posMax, _ = e.pos, v = !0;
		if (e.src.charCodeAt(e.pos) !== 91 || (c = e.pos + 1, s = e.md.helpers.parseLinkLabel(e, e.pos, !0), s < 0)) return !1;
		if (l = s + 1, l < g && e.src.charCodeAt(l) === 40) {
			for (v = !1, l++; l < g && (a = e.src.charCodeAt(l), r(a) || a === 10); l++);
			if (l >= g) return !1;
			if (_ = l, u = e.md.helpers.parseLinkDestination(e.src, l, e.posMax), u.ok) {
				for (p = e.md.normalizeLink(u.str), e.md.validateLink(p) ? l = u.pos : p = "", _ = l; l < g && (a = e.src.charCodeAt(l), r(a) || a === 10); l++);
				if (u = e.md.helpers.parseLinkTitle(e.src, l, e.posMax), l < g && _ !== l && u.ok) for (m = u.str, l = u.pos; l < g && (a = e.src.charCodeAt(l), r(a) || a === 10); l++);
			}
			(l >= g || e.src.charCodeAt(l) !== 41) && (v = !0), l++;
		}
		if (v) {
			if (e.env.references === void 0) return !1;
			if (l < g && e.src.charCodeAt(l) === 91 ? (_ = l + 1, l = e.md.helpers.parseLinkLabel(e, l), l >= 0 ? o = e.src.slice(_, l++) : l = s + 1) : l = s + 1, o ||= e.src.slice(c, s), d = e.env.references[n(o)], !d) return e.pos = h, !1;
			p = d.href, m = d.title;
		}
		return t || (e.pos = c, e.posMax = s, f = e.push("link_open", "a", 1), f.attrs = i = [["href", p]], m && i.push(["title", m]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, f = e.push("link_close", "a", -1)), e.pos = l, e.posMax = g, !0;
	};
})), sf = /* @__PURE__ */ s(((e, t) => {
	var n = $().normalizeReference, r = $().isSpace;
	t.exports = function(e, t) {
		var i, a, o, s, c, l, u, d, f, p, m, h, g, _ = "", v = e.pos, y = e.posMax;
		if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91 || (l = e.pos + 2, c = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1), c < 0)) return !1;
		if (u = c + 1, u < y && e.src.charCodeAt(u) === 40) {
			for (u++; u < y && (a = e.src.charCodeAt(u), r(a) || a === 10); u++);
			if (u >= y) return !1;
			for (g = u, f = e.md.helpers.parseLinkDestination(e.src, u, e.posMax), f.ok && (_ = e.md.normalizeLink(f.str), e.md.validateLink(_) ? u = f.pos : _ = ""), g = u; u < y && (a = e.src.charCodeAt(u), r(a) || a === 10); u++);
			if (f = e.md.helpers.parseLinkTitle(e.src, u, e.posMax), u < y && g !== u && f.ok) for (p = f.str, u = f.pos; u < y && (a = e.src.charCodeAt(u), r(a) || a === 10); u++);
			else p = "";
			if (u >= y || e.src.charCodeAt(u) !== 41) return e.pos = v, !1;
			u++;
		} else {
			if (e.env.references === void 0) return !1;
			if (u < y && e.src.charCodeAt(u) === 91 ? (g = u + 1, u = e.md.helpers.parseLinkLabel(e, u), u >= 0 ? s = e.src.slice(g, u++) : u = c + 1) : u = c + 1, s ||= e.src.slice(l, c), d = e.env.references[n(s)], !d) return e.pos = v, !1;
			_ = d.href, p = d.title;
		}
		return t || (o = e.src.slice(l, c), e.md.inline.parse(o, e.md, e.env, h = []), m = e.push("image", "img", 0), m.attrs = i = [["src", _], ["alt", ""]], m.children = h, m.content = o, p && i.push(["title", p])), e.pos = u, e.posMax = y, !0;
	};
})), cf = /* @__PURE__ */ s(((e, t) => {
	var n = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, r = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
	t.exports = function(e, t) {
		var i, a, o, s, c, l, u = e.pos;
		if (e.src.charCodeAt(u) !== 60) return !1;
		for (c = e.pos, l = e.posMax;;) {
			if (++u >= l || (s = e.src.charCodeAt(u), s === 60)) return !1;
			if (s === 62) break;
		}
		return i = e.src.slice(c + 1, u), r.test(i) ? (a = e.md.normalizeLink(i), e.md.validateLink(a) ? (t || (o = e.push("link_open", "a", 1), o.attrs = [["href", a]], o.markup = "autolink", o.info = "auto", o = e.push("text", "", 0), o.content = e.md.normalizeLinkText(i), o = e.push("link_close", "a", -1), o.markup = "autolink", o.info = "auto"), e.pos += i.length + 2, !0) : !1) : n.test(i) ? (a = e.md.normalizeLink("mailto:" + i), e.md.validateLink(a) ? (t || (o = e.push("link_open", "a", 1), o.attrs = [["href", a]], o.markup = "autolink", o.info = "auto", o = e.push("text", "", 0), o.content = e.md.normalizeLinkText(i), o = e.push("link_close", "a", -1), o.markup = "autolink", o.info = "auto"), e.pos += i.length + 2, !0) : !1) : !1;
	};
})), lf = /* @__PURE__ */ s(((e, t) => {
	var n = Gd().HTML_TAG_RE;
	function r(e) {
		return /^<a[>\s]/i.test(e);
	}
	function i(e) {
		return /^<\/a\s*>/i.test(e);
	}
	function a(e) {
		var t = e | 32;
		return t >= 97 && t <= 122;
	}
	t.exports = function(e, t) {
		var o, s, c, l, u = e.pos;
		return !e.md.options.html || (c = e.posMax, e.src.charCodeAt(u) !== 60 || u + 2 >= c) || (o = e.src.charCodeAt(u + 1), o !== 33 && o !== 63 && o !== 47 && !a(o)) || (s = e.src.slice(u).match(n), !s) ? !1 : (t || (l = e.push("html_inline", "", 0), l.content = s[0], r(l.content) && e.linkLevel++, i(l.content) && e.linkLevel--), e.pos += s[0].length, !0);
	};
})), uf = /* @__PURE__ */ s(((e, t) => {
	var n = ld(), r = $().has, i = $().isValidEntityCode, a = $().fromCodePoint, o = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, s = /^&([a-z][a-z0-9]{1,31});/i;
	t.exports = function(e, t) {
		var c, l, u, d, f = e.pos, p = e.posMax;
		if (e.src.charCodeAt(f) !== 38 || f + 1 >= p) return !1;
		if (c = e.src.charCodeAt(f + 1), c === 35) {
			if (u = e.src.slice(f).match(o), u) return t || (l = u[1][0].toLowerCase() === "x" ? parseInt(u[1].slice(1), 16) : parseInt(u[1], 10), d = e.push("text_special", "", 0), d.content = i(l) ? a(l) : a(65533), d.markup = u[0], d.info = "entity"), e.pos += u[0].length, !0;
		} else if (u = e.src.slice(f).match(s), u && r(n, u[1])) return t || (d = e.push("text_special", "", 0), d.content = n[u[1]], d.markup = u[0], d.info = "entity"), e.pos += u[0].length, !0;
		return !1;
	};
})), df = /* @__PURE__ */ s(((e, t) => {
	function n(e) {
		var t, n, r, i, a, o, s, c, l = {}, u = e.length;
		if (u) {
			var d = 0, f = -2, p = [];
			for (t = 0; t < u; t++) if (r = e[t], p.push(0), (e[d].marker !== r.marker || f !== r.token - 1) && (d = t), f = r.token, r.length = r.length || 0, r.close) {
				for (l.hasOwnProperty(r.marker) || (l[r.marker] = [
					-1,
					-1,
					-1,
					-1,
					-1,
					-1
				]), a = l[r.marker][(r.open ? 3 : 0) + r.length % 3], n = d - p[d] - 1, o = n; n > a; n -= p[n] + 1) if (i = e[n], i.marker === r.marker && i.open && i.end < 0 && (s = !1, (i.close || r.open) && (i.length + r.length) % 3 == 0 && (i.length % 3 != 0 || r.length % 3 != 0) && (s = !0), !s)) {
					c = n > 0 && !e[n - 1].open ? p[n - 1] + 1 : 0, p[t] = t - n + c, p[n] = c, r.open = !1, i.end = t, i.close = !1, o = -1, f = -2;
					break;
				}
				o !== -1 && (l[r.marker][(r.open ? 3 : 0) + (r.length || 0) % 3] = o);
			}
		}
	}
	t.exports = function(e) {
		var t, r = e.tokens_meta, i = e.tokens_meta.length;
		for (n(e.delimiters), t = 0; t < i; t++) r[t] && r[t].delimiters && n(r[t].delimiters);
	};
})), ff = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e) {
		var t, n, r = 0, i = e.tokens, a = e.tokens.length;
		for (t = n = 0; t < a; t++) i[t].nesting < 0 && r--, i[t].level = r, i[t].nesting > 0 && r++, i[t].type === "text" && t + 1 < a && i[t + 1].type === "text" ? i[t + 1].content = i[t].content + i[t + 1].content : (t !== n && (i[n] = i[t]), n++);
		t !== n && (i.length = n);
	};
})), pf = /* @__PURE__ */ s(((e, t) => {
	var n = Pd(), r = $().isWhiteSpace, i = $().isPunctChar, a = $().isMdAsciiPunct;
	function o(e, t, n, r) {
		this.src = e, this.env = n, this.md = t, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
	}
	o.prototype.pushPending = function() {
		var e = new n("text", "", 0);
		return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
	}, o.prototype.push = function(e, t, r) {
		this.pending && this.pushPending();
		var i = new n(e, t, r), a = null;
		return r < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), i.level = this.level, r > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], a = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(i), this.tokens_meta.push(a), i;
	}, o.prototype.scanDelims = function(e, t) {
		var n = e, o, s, c, l, u, d, f, p, m, h = !0, g = !0, _ = this.posMax, v = this.src.charCodeAt(e);
		for (o = e > 0 ? this.src.charCodeAt(e - 1) : 32; n < _ && this.src.charCodeAt(n) === v;) n++;
		return c = n - e, s = n < _ ? this.src.charCodeAt(n) : 32, f = a(o) || i(String.fromCharCode(o)), m = a(s) || i(String.fromCharCode(s)), d = r(o), p = r(s), p ? h = !1 : m && (d || f || (h = !1)), d ? g = !1 : f && (p || m || (g = !1)), t ? (l = h, u = g) : (l = h && (!g || f), u = g && (!h || m)), {
			can_open: l,
			can_close: u,
			length: c
		};
	}, o.prototype.Token = n, t.exports = o;
})), mf = /* @__PURE__ */ s(((e, t) => {
	var n = Ed(), r = [
		["text", Qd()],
		["linkify", $d()],
		["newline", ef()],
		["escape", tf()],
		["backticks", nf()],
		["strikethrough", rf().tokenize],
		["emphasis", af().tokenize],
		["link", of()],
		["image", sf()],
		["autolink", cf()],
		["html_inline", lf()],
		["entity", uf()]
	], i = [
		["balance_pairs", df()],
		["strikethrough", rf().postProcess],
		["emphasis", af().postProcess],
		["fragments_join", ff()]
	];
	function a() {
		var e;
		for (this.ruler = new n(), e = 0; e < r.length; e++) this.ruler.push(r[e][0], r[e][1]);
		for (this.ruler2 = new n(), e = 0; e < i.length; e++) this.ruler2.push(i[e][0], i[e][1]);
	}
	a.prototype.skipToken = function(e) {
		var t, n, r = e.pos, i = this.ruler.getRules(""), a = i.length, o = e.md.options.maxNesting, s = e.cache;
		if (s[r] !== void 0) e.pos = s[r];
		else {
			if (e.level < o) {
				for (n = 0; n < a; n++) if (e.level++, t = i[n](e, !0), e.level--, t) {
					if (r >= e.pos) throw Error("inline rule didn't increment state.pos");
					break;
				}
			} else e.pos = e.posMax;
			t || e.pos++, s[r] = e.pos;
		}
	}, a.prototype.tokenize = function(e) {
		for (var t, n, r, i = this.ruler.getRules(""), a = i.length, o = e.posMax, s = e.md.options.maxNesting; e.pos < o;) {
			if (r = e.pos, e.level < s) {
				for (n = 0; n < a; n++) if (t = i[n](e, !1), t) {
					if (r >= e.pos) throw Error("inline rule didn't increment state.pos");
					break;
				}
			}
			if (t) {
				if (e.pos >= o) break;
			} else e.pending += e.src[e.pos++];
		}
		e.pending && e.pushPending();
	}, a.prototype.parse = function(e, t, n, r) {
		var i, a, o, s = new this.State(e, t, n, r);
		for (this.tokenize(s), a = this.ruler2.getRules(""), o = a.length, i = 0; i < o; i++) a[i](s);
	}, a.prototype.State = pf(), t.exports = a;
})), hf = /* @__PURE__ */ s(((e, t) => {
	t.exports = function(e) {
		var t = {};
		e ||= {}, t.src_Any = gd().source, t.src_Cc = _d().source, t.src_Z = yd().source, t.src_P = ud().source, t.src_ZPCc = [
			t.src_Z,
			t.src_P,
			t.src_Cc
		].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
		var n = "[><｜]";
		return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + "|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + "|[}]).)*\\}|\\\"(?:(?!" + t.src_ZCc + "|[\"]).)+\\\"|\\'(?:(?!" + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = "[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\\"\\.a-zA-Z0-9_]*", t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + "|\"|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
	};
})), gf = /* @__PURE__ */ s(((e, t) => {
	function n(e) {
		return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
			t && Object.keys(t).forEach(function(n) {
				e[n] = t[n];
			});
		}), e;
	}
	function r(e) {
		return Object.prototype.toString.call(e);
	}
	function i(e) {
		return r(e) === "[object String]";
	}
	function a(e) {
		return r(e) === "[object Object]";
	}
	function o(e) {
		return r(e) === "[object RegExp]";
	}
	function s(e) {
		return r(e) === "[object Function]";
	}
	function c(e) {
		return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
	}
	var l = {
		fuzzyLink: !0,
		fuzzyEmail: !0,
		fuzzyIP: !1
	};
	function u(e) {
		return Object.keys(e || {}).reduce(function(e, t) {
			return e || l.hasOwnProperty(t);
		}, !1);
	}
	var d = {
		"http:": { validate: function(e, t, n) {
			var r = e.slice(t);
			return n.re.http || (n.re.http = RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0;
		} },
		"https:": "http:",
		"ftp:": "http:",
		"//": { validate: function(e, t, n) {
			var r = e.slice(t);
			return n.re.no_http || (n.re.no_http = RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(r) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : r.match(n.re.no_http)[0].length : 0;
		} },
		"mailto:": { validate: function(e, t, n) {
			var r = e.slice(t);
			return n.re.mailto || (n.re.mailto = RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0;
		} }
	}, f = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", p = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
	function m(e) {
		e.__index__ = -1, e.__text_cache__ = "";
	}
	function h(e) {
		return function(t, n) {
			var r = t.slice(n);
			return e.test(r) ? r.match(e)[0].length : 0;
		};
	}
	function g() {
		return function(e, t) {
			t.normalize(e);
		};
	}
	function _(e) {
		var t = e.re = hf()(e.__opts__), n = e.__tlds__.slice();
		e.onCompile(), e.__tlds_replaced__ || n.push(f), n.push(t.src_xn), t.src_tlds = n.join("|");
		function r(e) {
			return e.replace("%TLDS%", t.src_tlds);
		}
		t.email_fuzzy = RegExp(r(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(r(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(r(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(r(t.tpl_host_fuzzy_test), "i");
		var l = [];
		e.__compiled__ = {};
		function u(e, t) {
			throw Error("(LinkifyIt) Invalid schema \"" + e + "\": " + t);
		}
		Object.keys(e.__schemas__).forEach(function(t) {
			var n = e.__schemas__[t];
			if (n !== null) {
				var r = {
					validate: null,
					link: null
				};
				e.__compiled__[t] = r, a(n) ? (o(n.validate) ? r.validate = h(n.validate) : s(n.validate) ? r.validate = n.validate : u(t, n), s(n.normalize) ? r.normalize = n.normalize : n.normalize ? u(t, n) : r.normalize = g()) : i(n) ? l.push(t) : u(t, n);
			}
		}), l.forEach(function(t) {
			e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize);
		}), e.__compiled__[""] = {
			validate: null,
			normalize: g()
		};
		var d = Object.keys(e.__compiled__).filter(function(t) {
			return t.length > 0 && e.__compiled__[t];
		}).map(c).join("|");
		e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + d + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + d + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"), m(e);
	}
	function v(e, t) {
		var n = e.__index__, r = e.__last_index__, i = e.__text_cache__.slice(n, r);
		this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = r + t, this.raw = i, this.text = i, this.url = i;
	}
	function y(e, t) {
		var n = new v(e, t);
		return e.__compiled__[n.schema].normalize(n, e), n;
	}
	function b(e, t) {
		if (!(this instanceof b)) return new b(e, t);
		t || u(e) && (t = e, e = {}), this.__opts__ = n({}, l, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, d, e), this.__compiled__ = {}, this.__tlds__ = p, this.__tlds_replaced__ = !1, this.re = {}, _(this);
	}
	b.prototype.add = function(e, t) {
		return this.__schemas__[e] = t, _(this), this;
	}, b.prototype.set = function(e) {
		return this.__opts__ = n(this.__opts__, e), this;
	}, b.prototype.test = function(e) {
		if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
		var t, n, r, i, a, o, s, c, l;
		if (this.re.schema_test.test(e)) {
			for (s = this.re.schema_search, s.lastIndex = 0; (t = s.exec(e)) !== null;) if (i = this.testSchemaAt(e, t[2], s.lastIndex), i) {
				this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + i;
				break;
			}
		}
		return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test), c >= 0 && (this.__index__ < 0 || c < this.__index__) && (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (a = n.index + n[1].length, (this.__index__ < 0 || a < this.__index__) && (this.__schema__ = "", this.__index__ = a, this.__last_index__ = n.index + n[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = e.indexOf("@"), l >= 0 && (r = e.match(this.re.email_fuzzy)) !== null && (a = r.index + r[1].length, o = r.index + r[0].length, (this.__index__ < 0 || a < this.__index__ || a === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = a, this.__last_index__ = o))), this.__index__ >= 0;
	}, b.prototype.pretest = function(e) {
		return this.re.pretest.test(e);
	}, b.prototype.testSchemaAt = function(e, t, n) {
		return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0;
	}, b.prototype.match = function(e) {
		var t = 0, n = [];
		this.__index__ >= 0 && this.__text_cache__ === e && (n.push(y(this, t)), t = this.__last_index__);
		for (var r = t ? e.slice(t) : e; this.test(r);) n.push(y(this, t)), r = r.slice(this.__last_index__), t += this.__last_index__;
		return n.length ? n : null;
	}, b.prototype.matchAtStart = function(e) {
		if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return null;
		var t = this.re.schema_at_start.exec(e);
		if (!t) return null;
		var n = this.testSchemaAt(e, t[2], t[0].length);
		return n ? (this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + n, y(this, 0)) : null;
	}, b.prototype.tlds = function(e, t) {
		return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(e, t, n) {
			return e !== n[t - 1];
		}).reverse(), _(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, _(this), this);
	}, b.prototype.normalize = function(e) {
		e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
	}, b.prototype.onCompile = function() {}, t.exports = b;
})), _f = /* @__PURE__ */ s(((e, t, n) => {
	mi(), (function(n) {
		var r = typeof e == "object" && e && !e.nodeType && e, i = typeof t == "object" && t && !t.nodeType && t, a = typeof pi == "object" && pi;
		(a.global === a || a.window === a || a.self === a) && (n = a);
		var o, s = 2147483647, c = 36, l = 1, u = 26, d = 38, f = 700, p = 72, m = 128, h = "-", g = /^xn--/, _ = /[^\x20-\x7E]/, v = /[\x2E\u3002\uFF0E\uFF61]/g, y = {
			overflow: "Overflow: input needs wider integers to process",
			"not-basic": "Illegal input >= 0x80 (not a basic code point)",
			"invalid-input": "Invalid input"
		}, b = c - l, x = Math.floor, S = String.fromCharCode, C;
		function w(e) {
			throw RangeError(y[e]);
		}
		function T(e, t) {
			for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
			return r;
		}
		function E(e, t) {
			var n = e.split("@"), r = "";
			n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(v, ".");
			var i = T(e.split("."), t).join(".");
			return r + i;
		}
		function D(e) {
			for (var t = [], n = 0, r = e.length, i, a; n < r;) i = e.charCodeAt(n++), i >= 55296 && i <= 56319 && n < r ? (a = e.charCodeAt(n++), (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--)) : t.push(i);
			return t;
		}
		function O(e) {
			return T(e, function(e) {
				var t = "";
				return e > 65535 && (e -= 65536, t += S(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += S(e), t;
			}).join("");
		}
		function k(e) {
			return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : c;
		}
		function A(e, t) {
			return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
		}
		function j(e, t, n) {
			var r = 0;
			for (e = n ? x(e / f) : e >> 1, e += x(e / t); e > b * u >> 1; r += c) e = x(e / b);
			return x(r + (b + 1) * e / (e + d));
		}
		function M(e) {
			var t = [], n = e.length, r, i = 0, a = m, o = p, d = e.lastIndexOf(h), f, g, _, v, y, b, S, C;
			for (d < 0 && (d = 0), f = 0; f < d; ++f) e.charCodeAt(f) >= 128 && w("not-basic"), t.push(e.charCodeAt(f));
			for (g = d > 0 ? d + 1 : 0; g < n;) {
				for (_ = i, v = 1, y = c; g >= n && w("invalid-input"), b = k(e.charCodeAt(g++)), (b >= c || b > x((s - i) / v)) && w("overflow"), i += b * v, S = y <= o ? l : y >= o + u ? u : y - o, !(b < S); y += c) C = c - S, v > x(s / C) && w("overflow"), v *= C;
				r = t.length + 1, o = j(i - _, r, _ == 0), x(i / r) > s - a && w("overflow"), a += x(i / r), i %= r, t.splice(i++, 0, a);
			}
			return O(t);
		}
		function N(e) {
			var t, n, r, i, a, o, d, f, g, _, v, y = [], b, C, T, E;
			for (e = D(e), b = e.length, t = m, n = 0, a = p, o = 0; o < b; ++o) v = e[o], v < 128 && y.push(S(v));
			for (r = i = y.length, i && y.push(h); r < b;) {
				for (d = s, o = 0; o < b; ++o) v = e[o], v >= t && v < d && (d = v);
				for (C = r + 1, d - t > x((s - n) / C) && w("overflow"), n += (d - t) * C, t = d, o = 0; o < b; ++o) if (v = e[o], v < t && ++n > s && w("overflow"), v == t) {
					for (f = n, g = c; _ = g <= a ? l : g >= a + u ? u : g - a, !(f < _); g += c) E = f - _, T = c - _, y.push(S(A(_ + E % T, 0))), f = x(E / T);
					y.push(S(A(f, 0))), a = j(n, C, r == i), n = 0, ++r;
				}
				++n, ++t;
			}
			return y.join("");
		}
		function P(e) {
			return E(e, function(e) {
				return g.test(e) ? M(e.slice(4).toLowerCase()) : e;
			});
		}
		function ee(e) {
			return E(e, function(e) {
				return _.test(e) ? "xn--" + N(e) : e;
			});
		}
		if (o = {
			version: "1.4.1",
			ucs2: {
				decode: D,
				encode: O
			},
			decode: M,
			encode: N,
			toASCII: ee,
			toUnicode: P
		}, typeof define == "function" && typeof define.amd == "object" && define.amd) define("punycode", function() {
			return o;
		});
		else if (r && i) {
			if (t.exports == r) i.exports = o;
			else for (C in o) o.hasOwnProperty(C) && (r[C] = o[C]);
		} else n.punycode = o;
	})(n);
})), vf = /* @__PURE__ */ s(((e, t) => {
	t.exports = {
		options: {
			html: !1,
			xhtmlOut: !1,
			breaks: !1,
			langPrefix: "language-",
			linkify: !1,
			typographer: !1,
			quotes: "“”‘’",
			highlight: null,
			maxNesting: 100
		},
		components: {
			core: {},
			block: {},
			inline: {}
		}
	};
})), yf = /* @__PURE__ */ s(((e, t) => {
	t.exports = {
		options: {
			html: !1,
			xhtmlOut: !1,
			breaks: !1,
			langPrefix: "language-",
			linkify: !1,
			typographer: !1,
			quotes: "“”‘’",
			highlight: null,
			maxNesting: 20
		},
		components: {
			core: { rules: [
				"normalize",
				"block",
				"inline",
				"text_join"
			] },
			block: { rules: ["paragraph"] },
			inline: {
				rules: ["text"],
				rules2: ["balance_pairs", "fragments_join"]
			}
		}
	};
})), bf = /* @__PURE__ */ s(((e, t) => {
	t.exports = {
		options: {
			html: !0,
			xhtmlOut: !0,
			breaks: !1,
			langPrefix: "language-",
			linkify: !1,
			typographer: !1,
			quotes: "“”‘’",
			highlight: null,
			maxNesting: 20
		},
		components: {
			core: { rules: [
				"normalize",
				"block",
				"inline",
				"text_join"
			] },
			block: { rules: [
				"blockquote",
				"code",
				"fence",
				"heading",
				"hr",
				"html_block",
				"lheading",
				"list",
				"reference",
				"paragraph"
			] },
			inline: {
				rules: [
					"autolink",
					"backticks",
					"emphasis",
					"entity",
					"escape",
					"html_inline",
					"image",
					"link",
					"newline",
					"text"
				],
				rules2: [
					"balance_pairs",
					"emphasis",
					"fragments_join"
				]
			}
		}
	};
})), xf = /* @__PURE__ */ s(((e, t) => {
	var n = $(), r = wd(), i = Td(), a = Id(), o = Zd(), s = mf(), c = gf(), l = hd(), u = _f(), d = {
		default: vf(),
		zero: yf(),
		commonmark: bf()
	}, f = /^(vbscript|javascript|file|data):/, p = /^data:image\/(gif|png|jpeg|webp);/;
	function m(e) {
		var t = e.trim().toLowerCase();
		return !f.test(t) || !!p.test(t);
	}
	var h = [
		"http:",
		"https:",
		"mailto:"
	];
	function g(e) {
		var t = l.parse(e, !0);
		if (t.hostname && (!t.protocol || h.indexOf(t.protocol) >= 0)) try {
			t.hostname = u.toASCII(t.hostname);
		} catch {}
		return l.encode(l.format(t));
	}
	function _(e) {
		var t = l.parse(e, !0);
		if (t.hostname && (!t.protocol || h.indexOf(t.protocol) >= 0)) try {
			t.hostname = u.toUnicode(t.hostname);
		} catch {}
		return l.decode(l.format(t), l.decode.defaultChars + "%");
	}
	function v(e, t) {
		if (!(this instanceof v)) return new v(e, t);
		t || n.isString(e) || (t = e || {}, e = "default"), this.inline = new s(), this.block = new o(), this.core = new a(), this.renderer = new i(), this.linkify = new c(), this.validateLink = m, this.normalizeLink = g, this.normalizeLinkText = _, this.utils = n, this.helpers = n.assign({}, r), this.options = {}, this.configure(e), t && this.set(t);
	}
	v.prototype.set = function(e) {
		return n.assign(this.options, e), this;
	}, v.prototype.configure = function(e) {
		var t = this, r;
		if (n.isString(e) && (r = e, e = d[r], !e)) throw Error("Wrong `markdown-it` preset \"" + r + "\", check name");
		if (!e) throw Error("Wrong `markdown-it` preset, can't be empty");
		return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(n) {
			e.components[n].rules && t[n].ruler.enableOnly(e.components[n].rules), e.components[n].rules2 && t[n].ruler2.enableOnly(e.components[n].rules2);
		}), this;
	}, v.prototype.enable = function(e, t) {
		var n = [];
		Array.isArray(e) || (e = [e]), [
			"core",
			"block",
			"inline"
		].forEach(function(t) {
			n = n.concat(this[t].ruler.enable(e, !0));
		}, this), n = n.concat(this.inline.ruler2.enable(e, !0));
		var r = e.filter(function(e) {
			return n.indexOf(e) < 0;
		});
		if (r.length && !t) throw Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
		return this;
	}, v.prototype.disable = function(e, t) {
		var n = [];
		Array.isArray(e) || (e = [e]), [
			"core",
			"block",
			"inline"
		].forEach(function(t) {
			n = n.concat(this[t].ruler.disable(e, !0));
		}, this), n = n.concat(this.inline.ruler2.disable(e, !0));
		var r = e.filter(function(e) {
			return n.indexOf(e) < 0;
		});
		if (r.length && !t) throw Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
		return this;
	}, v.prototype.use = function(e) {
		var t = [this].concat(Array.prototype.slice.call(arguments, 1));
		return e.apply(e, t), this;
	}, v.prototype.parse = function(e, t) {
		if (typeof e != "string") throw Error("Input data should be a String");
		var n = new this.core.State(e, this, t);
		return this.core.process(n), n.tokens;
	}, v.prototype.render = function(e, t) {
		return t ||= {}, this.renderer.render(this.parse(e, t), this.options, t);
	}, v.prototype.parseInline = function(e, t) {
		var n = new this.core.State(e, this, t);
		return n.inlineMode = !0, this.core.process(n), n.tokens;
	}, v.prototype.renderInline = function(e, t) {
		return t ||= {}, this.renderer.render(this.parseInline(e, t), this.options, t);
	}, t.exports = v;
})), Sf = new (/* @__PURE__ */ u((/* @__PURE__ */ s(((e, t) => {
	t.exports = xf();
})))(), 1)).default({ html: !0 }), Cf = ({ content: e }) => /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("style", null, `
        .tab-master-docs table {
          border: 1px solid;
          border-collapse: collapse;
        }

        .tab-master-docs th {
          padding: 0 7px;
          border: 1px solid;
        }

        .tab-master-docs td {
          padding: 0 7px;
          border: 1px solid;
        }

        .tab-master-docs tr:nth-child(odd) {
          background-color: #1B2838;
        }

        .tab-master-docs .${R.gamepadDialogClasses.ModalPosition} {
          padding: 0;
        }

        .tab-master-docs > .Panel.Focusable.gpfocuswithin {
          background-color: #868da117;
        }

        .tab-master-docs img {
          max-width: 588px;
        }

        .tab-master-docs code {
          color: #f1ac4f;
          padding: 2px 4px;
          border-radius: 4px;
        }
      `), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-docs" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ModalPosition, null, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
	display: "flex",
	flexDirection: "column",
	minHeight: 0
} }, /* @__PURE__ */ window.SP_REACT.createElement(R.ScrollPanelGroup, {
	focusable: !1,
	style: {
		flex: 1,
		minHeight: 0,
		padding: "12px"
	},
	scrollPaddingTop: 32
}, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
	onActivate: () => {},
	noFocusRing: !0
}, /* @__PURE__ */ window.SP_REACT.createElement("div", { dangerouslySetInnerHTML: { __html: Sf.render(e) } }))))))), wf = {
	Filters: "## Filters\n\n### Table of Contents\n\n- Overview\n- Inverting Filters\n- Available Filters\n    - Collection\n    - Installed\n    - Friends\n    - Community Tags\n    - Whitelist\n    - Blacklist\n    - Platform\n    - Deck Compatibility\n    - SteamOS Compatibility\n    - Regex\n    - Merge\n    - Platform\n    - Deck Compatability\n    - Review Score\n    - Time Played\n    - Size on Disk\n    - Release Date\n    - Last Played\n    - Demo\n    - Streamable\n    - Steam Features\n    - Achievements\n    - MicroSD Card (Requires MicroSDeck)\n\n<br/>\n\n### Overview\n\nBelow you will find information on the options and behavior of each filter, as well as an example of how to use it. Keep in mind that while most of the examples simply show how the filter is used on its own, each filter can be combined together to create very complexed selections. The `merge filter` example demonstrates this\n\n<br/>\n\n### Inverting Filters\n\nMost filters have an option to invert them. This can be used to do the exact opposite of what the filter would normally do!<br/>\nExample: Inverting a `Collection` filter would cause it to include any apps **not in** that collection, instead of **in** it.\n\n<br/>\n\n### Available Filters\n\n#### Collection\n\n**Options:**<br/>\n`collection` - The collection to use.\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\nFilters apps based on if they are included in the collection.\n\n**Example:**<br/>\n<img title=\"Collection Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_collection-example.png\" />\n\n<br/>\n\n#### Installed\n\n**Options:**<br/>\n`installed` - A toggle. On is `installed`, off is `uninstalled`.\n\n**Behavior:**<br/>\nFilters apps based on their install state.\n\n**Example:**<br/>\n<img title=\"Installed Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_installed-example.png\" />\n\n<br/>\n\n#### Friends\n\n**Options:**<br/>\n`friends` - A list of your users in your Steam Friends list.\n`logic mode` - Specifies whether to use `and` vs. `or` mode.\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\n\n- `and`: Filters apps based on if they are owned by all listed friends.\n- `or`: Filters apps based on if they are owned by any listed friend.\n\n**Example:**<br/>\n<img title=\"Friends Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_friends-example.png\" />\n\n<br/>\n\n#### Community Tags\n\n**Options:**<br/>\n`tags` - A list of community tags.\n`logic mode` - Specifies whether to use `and` vs. `or` mode.\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\n\n- `and`: Filters apps based on if they have all listed tags.\n- `or`: Filters apps based on if they have any listed tag.\n\n**NOTE:** You can override tags on a per-game basis in the `Tag Overrides` section of the `Tags` settings page!\n\n**Example:**<br/>\n<img title=\"Tags Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_tags-example.png\" />\n\n<br/>\n\n#### Whitelist\n\n**Options:**<br/>\n`apps` - A list of apps to whitelist.\n\n**Behavior:**<br/>\nFilters apps by if they are in the list.\n\n**Example:**<br/>\n<img title=\"Whitelist Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_whitelist-example.png\" />\n\n<br/>\n\n#### Blacklist\n\n**Options:**<br/>\n`apps` - A list of apps to blacklist.\n\n**Behavior:**<br/>\nFilters apps by if they are not in the list.\n\n**Example:**<br/>\n<img title=\"Blacklist Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_blacklist-example.png\" />\n\n<br/>\n\n#### Regex\n\n**Options:**<br/>\n`regex` - The regular expression to use.\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\nFilters apps by testing if their title matches a regular expression .\n\n**Tip:**<br/>\nRegular expressions can seem daunting and confusing. You can test yours before hand by looking up a \"Regex Tester\" website.<br/>\nAlso, by typing a phrase like \"Zelda\" into the regex field, it will include any game with that phrase in its title.\n\n**Example:**<br/>\n<img title=\"Regex Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_regex-example.png\" />\n\n<br/>\n\n#### Merge\n\n**Options:**<br/>\n`filters` - The filters for this group.\n`logic mode` - Specifies whether to use `and` vs. `or` mode.\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\nGroups a set of filters, allowing you to change the logic mode for smaller sets of filters.\n\n**Tip:**<br/>\nBy grouping filters you are able to specify the mode for filters in the group seperately, significantly increasing the utility of TabMaster\n\n**Example:**<br/>\n<img title=\"Merge Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_merge-example.png\" />\n\n<br/>\n\n#### Platform\n\n**Options:**<br/>\n`platform` - The desired platform, either Steam or Non Steam.\n\n**Behavior:**<br/>\nFilters apps based on their platform.\n\n**Example:**<br/>\n<img title=\"Platform Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_platform-example.png\" />\n\n<br/>\n\n#### Deck Compatability\n\n**Options:**<br/>\n`compatability level` - The desired compatability level, either \"Verified\", \"Playable\", \"Unsupported\", or \"Unkown\".\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\nFilters apps based on their Steam Deck compatability.\n\n**Example:**<br/>\n<img title=\"Deck Compat Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_deck-compat-example.png\" />\n\n<br/>\n\n#### SteamOS Compatability\n\n**Options:**<br/>\n`compatability level` - The desired compatability level, either \"Compatible\", \"Unsupported\", or \"Unkown\".\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\nFilters apps based on their SteamOS Deck compatability.\n\n**Example:**<br/>\n<img title=\"SteamOS Compat Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_SteamOS-compat-example.png\" />\n\n<br/>\n\n#### Review Score\n\n**Options:**<br/>\n`score` - The desired review score.\n`type` - The desired review type to use, Metacritic or Steam.\n`greater/less` - Whether to include apps that have a review score greater than or equal to the provided score, or less than or equal to it.\n\n**Behavior:**<br/>\nFilters apps based on their review score.\n\n**Example:**<br/>\n<img title=\"Review Score Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_review-score-example.png\" />\n\n<br/>\n\n#### Time Played\n\n**Options:**<br/>\n`play time` - The desired amount of time in the selected interval.\n`time interval` - The time interval to use, \"minutes\", \"hours\", or \"days\".\n`greater/less` - Whether to include apps that are greater than or equal to the provided score, or less than or equal to it.\n\n**Behavior:**<br/>\nFilters apps based on your time spent playing them.\n\n**Example:**<br/>\n<img title=\"Time Played Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_time-played-example.png\" />\n\n<br/>\n\n#### Size on Disk\n\n**Options:**<br/>\n`size` - The desired size of apps to include.\n`greater/less` - Whether to include apps that are greater than or equal to the provided score, or less than or equal to it.\n\n**Behavior:**<br/>\nFilters apps based on their size.\n\n**Example:**<br/>\n<img title=\"Size on Disk Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_size-on-disk-example.png\" />\n\n<br/>\n\n#### Release Date\n\n**Options:**<br/>\n`date` - The desired release date of apps to include.\n`time period` - Whether you want to specify only the year, just the month and year, or the day, month, and year.\n`before/after` - Whether to include apps that were released before or after the provided date.\n\n**Behavior:**<br/>\nFilters apps based on their release date.\n\n**Example:**<br/>\n<img title=\"Release Date Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_release-date-example.png\" />\n\n<br/>\n\n#### Purchase Date\n\n**Options:**<br/>\n`date` - The desired purchase date of apps to include.\n`time period` - Whether you want to specify only the year, just the month and year, or the day, month, and year.\n`before/after` - Whether to include apps that were purchased before or after the provided date.\n\n**Behavior:**<br/>\nFilters apps based on their purchase date.\n\n**Example:**<br/>\n<img title=\"Purchase Date Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_purchase-date-example.png\" />\n\n<br/>\n\n#### Last Played\n\n**Options:**<br/>\n`date` - The desired last played date of apps to include.\n`time period` - Whether you want to specify only the year, just the month and year, or the day, month, and year.\n`before/after` - Whether to include apps that were last played before or after the provided date.\n\n**Behavior:**<br/>\nFilters apps based on when they were last played.\n\n**Example:**<br/>\n<img title=\"Last Played Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_last-played-example.png\" />\n\n<br/>\n\n#### Family Sharing\n\n**Options:**<br/>\n`Is from family member` - Whether to only include games that are shared from a family member, or only those that aren't.\n\n**Behavior:**<br/>\nFilters apps based on if they are a shared by a family member or not.\n\n**Example:**<br/>\n<img title=\"Family Sharing Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_family-sharing-example.png\" />\n\n<br/>\n\n#### Demo\n\n**Options:**<br/>\n`Is demo` - Whether to only include games that are demos, or only those that aren't.\n\n**Behavior:**<br/>\nFilters apps based on if they are a demo or not.\n\n**Example:**<br/>\n<img title=\"Demo Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_demo-example.png\" />\n\n<br/>\n\n#### Coming Soon\n\n**Options:**<br/>\n`Is Coming Soon` - Whether to only include games that are coming soon, or only those that aren't.\n\n**Behavior:**<br/>\nFilters apps based on if they are a coming soon or not.\n\n**Example:**<br/>\n<img title=\"Coming Soon Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_coming-soon-example.png\" />\n\n<br/>\n\n#### Streamable\n\n**Options:**<br/>\n`Is Streamable` - Whether to only include games that can be streamed, or only those that can't.\n\n**Behavior:**<br/>\nFilters apps based on if they can be streamed or not.\n\n**Example:**<br/>\n<img title=\"Streamable Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_streamable-example.png\" />\n\n<br/>\n\n#### Steam Features\n\n**Options:**<br/>\n`features` - A list of Steam features.\n`logic mode` - Specifies whether to use `and` vs. `or` mode.\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\n\n- `and`: Filters apps based on if they have all listed features.\n- `or`: Filters apps based on if they have any listed features.\n\n**Example:**<br/>\n<img title=\"Steam Features Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_steam-features-example.png\" />\n\n<br/>\n\n#### Achievements\n\n**Options:**<br/>\n`percentage` - The desired achievement percentage completion (or count) of apps to include.\n`greater/less` - Whether to include apps that have an achievement completion percentage greater than or equal to the provided percentage, or less than or equal to it.\n`Type` - Whether to use filter by the number of unlocked achievements, or the completion percentage\n\n**Behavior:**<br/>\nFilters apps based on their achievement completion percentage or count.\n\n**Example:**<br/>\n<img title=\"Achievements Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_achievements-example.png\" />\n\n<br/>\n\n#### MicroSD Card (Requires MicroSDeck)\n\n**Options:**<br/>\n`MicroSD card` - The MicroSD card to use (if none are showing up, make sure they are showing up in MicroSDeck).\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\nFilters apps based on if they are installed on the specified MicroSD card.\n\n**Example:**<br/>\n<img title=\"MicroSD Card Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_microsd-card-example.png\" />\n\n<br/>\n\n#### Install Folder\n\n**Options:**<br/>\n`Install Folder` - The Install Folder to use.\n\n**Behavior:**<br/>\nFilters apps based on if they are installed in the specified Steam Install Folder.\n\n**Example:**<br/>\n<img title=\"Install Folder Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_install-folder-example.png\" />\n\n<br/>\n\n###### © Travis Lane (Tormak), Jessebofill\n",
	Overview: "## Overview\n\n### About\nThe purpose of TabMaster is to provide a robust sytem for custom library tabs, while making the experience feel like its always been a part of SteamOS.\n\n<br/>\n\n\n### Docs\nThese docs serve as a reference for questions you may have, and a guide for helping you understand the full extend of TabMaster's features. Below you will find the table of contents listing each doc page and providing a short description of each. Simply select the page from the menu to the left to view it.\n\n<br/>\n\n\n### Table of Contents\n* Overview\n  * General overview of the plugin and docs. **You are here**\n* Tabs\n  * What is a tab, parts of a tab, and default vs custom.\n* Filters\n  * What are filters, descriptions/tips for each, and examples.\n* Tab Profiles\n  * User made groups of tabs that can be swapped out on the fly.\n* The Fix System\n  * TabMaster's system for handling changes that could potentially break it.\n\n<br/>\n\n\n###### © Travis Lane (Tormak), Jessebofill\n",
	Tab_Profiles: "## Tab Profiles\n\n### Table of Contents\n - Overview\n - The Tab Profiles Context Menu\n - Creating Profiles\n - Applying Profiles\n - Overwriting Profiles\n - Deleting Profiles\n\n<br/>\n\n\n### Overview\nHere you can find everything about Tab Profiles, including adding, applying, overwriting, and deleting them. To get started, use the button pictured below or the TabMaster context menu to open the Tab Profiles Menu.\n\n<img title=\"Managing Tab Profiles\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_managing-tab-profiles.png\" />\n\n<br/>\n\n\n### The Tab Profiles Context Menu\n<img title=\"Tab Profiles Context Menu\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/tab-profiles/docs_tab-profiles-context-menu.png\" />\n<br/>\nThe Tab Profiles context menu is where you can manage your profiles. You can create new ones, and apply, overwrite, and delete existing profiles from here.\n\n<br/>\n\n\n### Creating Profiles\n<img title=\"Creating Tab Profiles\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/tab-profiles/docs_creating-tab-profiles.png\" />\n<br/>\nCreating profiles is straightforward. First, ensure that the tabs you want included in the profile are all visible, then open the Tab Profiles context menu using one of the two methods mentioned above. Click \"Create Profile\", entire a name, and the profile will be created.\n\n<br/>\n\n\n### Applying Profiles\nOverwriting a profile is easy! Just open the Tab Profiles menu, and navigate to the profile you want to apply. Click \"A\", and the profile will be applied, showing all tabs in the profile, and hiding any that aren't.\n\n<br/>\n\n\n### Overwriting Profiles\n<img title=\"Overwriting Tab Profiles\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/tab-profiles/docs_coverwriting-tab-profiles.png\" />\n<br/>\nMade a mistake while making a profile, or just decide something needed to change? Well its easy to overwrite profiles, just open the profiles menu and navigate to the profile you want to delete and click \"Y\". A window will show up comparing what's in the profile, to what you're overwriting it with, allowing you to see the changes that will be made. Simply confirm here, and the profile will be overwritten.\n\n<br/>\n\n\n### Deleting Profiles\nDecide you don't like a profile anymore? Well deleting it is easy too! Just open the same Tab Profiles menu, and navigate to the profile you want to delete and click \"X\". You will be prompted to confirm if you really want to delete the profile, and confirming will delete it.\n\n<br/>\n\n\n###### © Travis Lane (Tormak), Jessebofill\n",
	Tabs: "## Tabs\n\n### Table of Contents\n\n- Overview\n- Custom vs. Default\n- The TabMaster Context Menu\n- Quick Tabs\n- Adding Tabs\n    - New Tab Options\n- Editing Tabs\n    - Changing Tabs\n    - Reordering Tabs\n    - Hiding Tabs\n- Duplicating Tabs\n- Removing Tabs\n- Sharing Tabs\n\n<br/>\n\n### Overview\n\nHere you can find everything about tabs, including adding, availale options, reordering, hiding, and deleting them.\n\n<br/>\n\n### Custom vs. Default\n\nBefore you continue, it is important to understand that there are two types of tabs, default tabs (marked with the Steam logo) and custom tabs (ones you make). Default tabs can only be hidden, while custom tabs have all the following features.\n\n<br/>\n\n### The TabMaster Context Menu\n\n<img title=\"TabMaster Context Menu\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_context-menu.png\" />\n<br/>\nThe TabMaster context menu aims to provide access to all of TabMaster's features straight from the library page. Simply navigate to a tab in the library header, and hit the menu button to open the context menu.\n\n<br/>\n\n### Quick Tabs\n\n<img title=\"Quick Tabs UI\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_quick-tabs.png\" />\n<br/>\nQuick Tabs are premade tabs that allow you to quickly generate a new tab for a variety of use cases. They are modifiable just like a regular tab as well.\n\n<br/>\n\n### Adding Tabs\n\n<img title=\"Add UI\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_create-tab.png\" />\n<br/>\nThis is where you can add new tabs to your library. You can find the various options explained below.\n\n#### Options:\n\n**Name** - The name of the tab (This will show up in your Steam Library).\n\n**Include** - The types of apps to include (defaults to games).\n\n**Sort apps by** - The order to sort apps by. This overrides the order from Steam's library sort feature.\n\n**Display as Collection** - When checked, TabMaster will create and automatically update a collection named `tabName (TabMaster)`. This will show up across devices, and be automatically deleted when the tab is deleted.\n\n**Auto Hide** - Whether this tab should automatically be hidden from the library when it has no games (this preserves the order of the tabs, unlike hiding it manually).\n\n**Logic Mode** - Two modes, `And` (apps must match all filters) and `Or` (apps must match at least one filter).\n\n**Filters** - The filters for this tab. More details on these can be found on the next page.\n\n<br/>\n\n### Editing Tabs\n\n#### Changing Tabs (Custom Tabs Only)\n\n<img title=\"Edit UI\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_edit-ui.png\" />\n<br/>\nTo get to this menu, focus the tab you want to reorder in the QAM (Quick Access Menu), and hit `A` to open the tab's options. If the tab is a custom tab, you will see an `Edit` option, select that. You will see the same options as when you add a tab. You can edit any of these and the tab will update once you save.\n\n<br/>\n\n#### Reordering Tabs\n\n<img title=\"Reorder UI\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_reorder-ui.png\" />\n<br/>\nReordering a tab is just as straightforward. Simply focus the tab you want to reorder in the QAM. Hit `X`, and use the left joystick to move the tab up/down in the order. Once you are satisfied, hit `X` again to save.\n\n<br/>\n\n#### Hiding Tabs\n\nTabs can be hidden from the library as well. This means they won't appear in your library, but you don't have to completely delete them. This option is found in the same menu as the `edit` option from earlier.\n\n<br/>\n\n### Duplicating Tabs\n\nTabs can be duplicated from either the Library Context Menu or the QAM Menu. This will bring you to the \"Create Tab\" modal with the filters pre-filtered.\n\n<br/>\n\n### Removing Tabs (Custom Tabs Only)\n\nIf you decide your custom tab just isn't cutting it, you can completely remove it too. To do this, navigate to the tab's menu (the same one where you edit and hide tabs), and click `delete`. You will be prompted to confirm (as this can't be undone!), and once you do, the tab will be perminantly removed from TabMaster.\n\n<br/>\n\n### Sharing Tabs\n\nTabs can be shared with other users on your device. Simply toggle \"Other users can copy this tab\" to true, and it will show up for them in the shared tabs modal.\n\n<br/>\n\n###### © Travis Lane (Tormak), Jessebofill\n",
	The_Fix_System: "## The Fix System\n\n### Table of Contes\n- What is the Fix System?\n- How to use the Fix System\n  - Fixing a Filter\n  - Fixing a Filter in a Group\n\n<br/>\n\n\n### What is the Fix System?\nThe fix system is TabMaster's solution for tough situations, where the plugin is unable to automatically fix issues. In these cases, we thought it best to leave the decision of what to do up to you, the user.<br/>\n**Causes:**\n - Deleting a collection used as a filter\n\n<br/>\n\n\n### How to use the Fix System\nWe've tried to make this system as simple and easy to use as possible. When an issue that would break TabMaster occurs, it will show the fix system window, and let you know what went wrong.<br/>\n**Note!**: You need to fix the issue! If you don't TabMaster will not work, and will show the fix system each time you log in until you fix it!\n\n#### Fixing a Filter\nTo fix a filter, simply set its options to new values, or remove it completely. TabMaster will update the filter according to your changes when you save.<br/>\n<img title=\"Fix UI\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_fix-ui.png\" />\n(initial popup)<br/>\n<img title=\"Fix Applied\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_filter-fixed.png\" />\n\n\n<br/>\n\n#### Fixing a Filter in a Group\nIn order to fix a filter in a merge group, you need to open the group. Once done, you can fix it just like a regular filter.\n\n<br/>\n\n\n###### © Travis Lane (Tormak), Jessebofill\n"
}, Tf = ["Travis Lane", "Jesse Bofill"], Ef = [
	"Kernel Panic",
	"CEbbinghaus",
	"Denilson Sá Maia",
	"KennethThomson1212",
	"Simon Ma",
	"Joshua Freudenhammer",
	"Vladimir Budylnikov"
], Df = Object.values(Se).map((e) => [e.name, e.credit]), Of = () => /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
	display: "flex",
	flexDirection: "column",
	fontSize: "0.9em"
} }, /* @__PURE__ */ window.SP_REACT.createElement("div", null, /* @__PURE__ */ window.SP_REACT.createElement("h2", { style: {
	fontWeight: "bold",
	fontSize: "1.5em",
	marginBottom: "0px"
} }, F("TITLE_SETTINGS_ABOUT_LEAD_DEVELOPERS", "Lead Developers")), /* @__PURE__ */ window.SP_REACT.createElement("ul", { style: {
	marginTop: "0px",
	marginBottom: "0px"
} }, Tf.map((e) => /* @__PURE__ */ window.SP_REACT.createElement("li", null, /* @__PURE__ */ window.SP_REACT.createElement("span", null, e))))), /* @__PURE__ */ window.SP_REACT.createElement("div", null, /* @__PURE__ */ window.SP_REACT.createElement("h2", { style: {
	fontWeight: "bold",
	fontSize: "1.5em",
	marginBottom: "0px"
} }, F("TITLE_SETTINGS_ABOUT_CONTRIBUTORS", "Contributors")), /* @__PURE__ */ window.SP_REACT.createElement("ul", { style: {
	marginTop: "0px",
	marginBottom: "0px"
} }, Ef.map((e) => /* @__PURE__ */ window.SP_REACT.createElement("li", null, /* @__PURE__ */ window.SP_REACT.createElement("span", null, e))))), /* @__PURE__ */ window.SP_REACT.createElement("div", null, /* @__PURE__ */ window.SP_REACT.createElement("h2", { style: {
	fontWeight: "bold",
	fontSize: "1.5em",
	marginBottom: "0px"
} }, F("TITLE_SETTINGS_ABOUT_TRANSLATORS", "Translators")), /* @__PURE__ */ window.SP_REACT.createElement("ul", { style: {
	marginTop: "0px",
	marginBottom: "0px"
} }, Df.map(([e, t]) => /* @__PURE__ */ window.SP_REACT.createElement("li", null, /* @__PURE__ */ window.SP_REACT.createElement("span", null, /* @__PURE__ */ window.SP_REACT.createElement("b", null, e, ":"), " ", t.join(", "))))))), kf = () => /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { marginBottom: "0.5rem" } }, /* @__PURE__ */ window.SP_REACT.createElement("h2", { style: {
	fontWeight: "bold",
	fontSize: "1.5em",
	marginBottom: "0px"
} }, F("TITLE_SETTINGS_ABOUT_TRANSLATIONS", "Translations")), /* @__PURE__ */ window.SP_REACT.createElement("div", null, F("MESSAGE_HELP_WITH_TRANSLATIONS", "We're working on translating TabMaster so yall can view use it in whatever language you'd like! If you know a language other than English please check out"), " ", /* @__PURE__ */ window.SP_REACT.createElement("a", { href: "https://crowdin.com/project/tabmaster" }, "https://crowdin.com/project/tabmaster"))), Af = () => /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("style", null, "\n                .tab-master-about ul {\n                  padding-left: 1rem\n                }\n        \n                .tab-master-about > .Panel.Focusable.gpfocuswithin {\n                  background-color: #868da117;\n                }\n              "), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-about" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ModalPosition, null, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
	display: "flex",
	flexDirection: "column",
	minHeight: 0
} }, /* @__PURE__ */ window.SP_REACT.createElement(R.ScrollPanelGroup, {
	focusable: !1,
	style: {
		flex: 1,
		minHeight: 0,
		padding: "12px"
	},
	scrollPaddingTop: 32
}, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, {
	onActivate: () => {},
	noFocusRing: !0
}, /* @__PURE__ */ window.SP_REACT.createElement("h2", { style: {
	fontWeight: "bold",
	fontSize: "1.75em",
	margin: "0rem",
	marginBottom: "0.25rem",
	marginTop: "-0.5rem"
} }, F("TITLE_SETTINGS_ABOUT", "About")), /* @__PURE__ */ window.SP_REACT.createElement("div", null, /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "img-container" }, /* @__PURE__ */ window.SP_REACT.createElement("img", {
	src: "https://raw.githubusercontent.com/Tormak9970/TabMaster/main/assets/thumbnail.png",
	alt: "TabMaster Splashscreen",
	style: { width: "100%" }
})), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "description" }, F("DESCRIPTION_SETTINGS_TABMASTER_ABOUT", "TabMaster gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs. It is a labor of love from Travis Lane and Jesse Bofill, and we strive to make TabMaster feel like it was always a part of SteamOS.")), /* @__PURE__ */ window.SP_REACT.createElement(kf, null), /* @__PURE__ */ window.SP_REACT.createElement(Of, null)))))))), jf = ({ tag: e, overrideState: t, onChange: n }) => {
	let [r, i] = (0, x.useState)(t), a = appStore.m_mapStoreTagLocalization[e.toString()];
	return /* @__PURE__ */ window.SP_REACT.createElement(R.Field, { label: a }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
		width: "100%",
		display: "flex"
	} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: { marginRight: "0.5rem" } }, /* @__PURE__ */ window.SP_REACT.createElement(R.Dropdown, {
		rgOptions: [{
			label: F("LABEL_TAG_OVERRIDE_ADD", "Add"),
			data: !0
		}, {
			label: F("LABEL_TAG_OVERRIDE_IGNORE", "Ignore"),
			data: !1
		}],
		selectedOption: r,
		onChange: (t) => {
			i(t.data), n(e, t.data);
		}
	})), /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, null, /* @__PURE__ */ window.SP_REACT.createElement(ar, {
		title: F("TITLE_ALL_CAPS_WARNING", "WARNING!"),
		style: {
			height: "40px",
			width: "42px",
			minWidth: 0,
			padding: "10px 12px",
			marginLeft: "auto",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		confirmationMessage: F("MESSAGE_DELETE_GAME_TAG_OVERRIDE_TAG_CONFIRM", "Are you sure you want to delete this tag from your overrides? This can't be undone."),
		onDelete: () => {
			n(e, null);
		}
	}))));
}, Mf = ({ onSelect: e, dropdownOptions: t, closeModal: n }) => /* @__PURE__ */ window.SP_REACT.createElement(Di, {
	entryLabel: F("LABEL_YOUR_TAGS", "Your Tags"),
	rgOptions: t,
	onSelectOption: e,
	determineEntryIcon: () => lt,
	closeModal: n
}), Nf = ({ tags: e, appid: t, name: n, overrides: r, onChange: i }) => {
	let [a, o] = (0, x.useState)(!1), s = (0, x.useMemo)(() => Object.entries(r).map(([e, t]) => ({
		tag: parseInt(e),
		override: t
	})), [r]), c = s.map((e) => e.tag), l = e.filter((e) => !c.includes(e.tag)).sort((e, t) => e.string.localeCompare(t.string)).map((e) => ({
		label: e.string,
		data: e.tag
	})), u = (e) => {
		i(t, {
			...r,
			[e.data]: !1
		});
	};
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "game-entry" }, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		margin: "0",
		width: "calc(100% - 2rem)",
		padding: "0 16px"
	} }, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%"
	} }, /* @__PURE__ */ window.SP_REACT.createElement("div", {
		style: {
			padding: "12px 0",
			float: "left"
		},
		className: R.quickAccessControlsClasses.PanelSectionTitle
	}, n, " - ", s.length, " ", s.length === 1 ? F("LABEL_TAG_OVERRIDE_SINGULAR", "Override") : F("LABEL_TAG_OVERRIDE_PLURAL", "Overrides")), /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		childrenContainerWidth: "max",
		className: "no-sep"
	}, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: {
		width: "100%",
		display: "flex"
	} }, /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, { style: { marginRight: "0.5rem" } }, /* @__PURE__ */ window.SP_REACT.createElement(R.DialogButton, {
		onClick: () => {
			Ut("/sounds/deck_ui_misc_01.wav"), o((e) => !e);
		},
		style: {
			height: "40px",
			width: "42px",
			minWidth: 0,
			padding: "10px 12px",
			marginLeft: "auto",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		onOKActionDescription: a ? F("LABEL_TAG_OVERRIDE_COLLAPSE", "Collapse") : F("LABEL_TAG_OVERRIDE_EXPAND", "Expand")
	}, /* @__PURE__ */ window.SP_REACT.createElement(Zn, { style: {
		transform: a ? "" : "rotate(90deg)",
		transition: "transform 0.2s ease-in-out"
	} }))), /* @__PURE__ */ window.SP_REACT.createElement(R.Focusable, null, /* @__PURE__ */ window.SP_REACT.createElement(ar, {
		title: F("TITLE_ALL_CAPS_WARNING", "WARNING!"),
		style: {
			height: "40px",
			width: "42px",
			minWidth: 0,
			padding: "10px 12px",
			marginLeft: "auto",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		confirmationMessage: F("MESSAGE_DELETE_GAME_TAG_OVERRIDE_CONFIRM", "Are you sure you want to delete this game from your overrides? This can't be undone."),
		onDelete: () => {
			i(t, null);
		}
	})))))), a && /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("div", { style: { padding: "10px 18px" } }, s.map((e) => /* @__PURE__ */ window.SP_REACT.createElement(jf, {
		key: `${e.tag}|${e.override}`,
		tag: e.tag,
		overrideState: e.override,
		onChange: (e, n) => {
			let a = { ...r };
			n === null ? delete a[e] : a[e] = n, i(t, a);
		}
	}))), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "styled-btn no-sep" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ButtonItem, { onClick: () => {
		(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(Mf, {
			onSelect: (e) => u(e),
			dropdownOptions: l
		}));
	} }, F("LABEL_ADD_TAG", "Add Tag"))))));
}, Pf = ({ tagOverrides: e, appsMap: t, setTagOverrides: n }) => {
	let { allStoreTags: r } = Nn(), i = (0, x.useMemo)(() => Object.keys(e), [e]), a = (0, x.useMemo)(() => i.map((n) => ({
		appid: n,
		override: e[n],
		name: t[n]?.display_name ?? ""
	})), [
		i,
		e,
		t
	]);
	return /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tag-overrides" }, a.map((t) => /* @__PURE__ */ window.SP_REACT.createElement(Nf, {
		key: `${t.appid}|${t.name}`,
		tags: r,
		appid: t.appid,
		overrides: t.override,
		name: t.name,
		onChange: (t, r) => {
			let i = { ...e };
			r === null ? delete i[t] : i[t] = r, n(i);
		}
	})));
}, Ff = ({ onSelect: e, dropdownOptions: t, closeModal: n }) => /* @__PURE__ */ window.SP_REACT.createElement(Di, {
	entryLabel: F("LABEL_YOUR_APPS", "Your Apps"),
	rgOptions: t,
	onSelectOption: e,
	determineEntryIcon: Rt,
	closeModal: n
}), If = () => {
	let { tagOverrides: e, setTagOverrides: t } = Jn(), n = (0, x.useMemo)(() => Object.keys(e), [e]), r = qt([
		"games",
		"music",
		"software"
	]), i = Object.fromEntries(r.map((e) => [e.appid, e])), a = r.filter((e) => !n?.includes(e.appid.toString())).map((e) => ({
		label: e.display_name,
		data: {
			appid: e.appid,
			appType: e.app_type
		}
	})), o = (n) => {
		t({
			...e,
			[n.data.appid]: {}
		});
	};
	return /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null, /* @__PURE__ */ window.SP_REACT.createElement("style", null, `
              /* The button item */
              .tab-master-tag-settings .styled-btn {
                padding: 0 !important;
              }
              .tab-master-tag-settings .styled-btn > div {
                margin-top: 0.5rem;
              }
              .tab-master-tag-settings .styled-btn .${R.gamepadDialogClasses.FieldLeftColumn} {
                display: none;
              }
              .tab-master-tag-settings .styled-btn .${R.gamepadDialogClasses.FieldRightColumn} {
                width: 100%;
                max-width: 100% !important;
              }
              .tab-master-tag-settings .${R.gamepadDialogClasses.FieldRightColumn} .styled-btn > div {
                padding: 0rem !important;
              }
              .tab-master-tag-settings .styled-btn .${R.gamepadDialogClasses.FieldChildrenInner} {
                width: 100%;
              }
              .tab-master-tag-settings .styled-btn .${R.gamepadDialogClasses.FieldChildrenWithIcon} {
                width: 100%;
              }

              .tab-master-tag-settings .game-entry {
                background-color: #23262e;
                margin-top: 0.5rem;
              }
                
              .tab-master-tag-settings .game-entry > div > div > .${R.gamepadDialogClasses.Field} {
                background: #23262e !important;
                margin-top: 0 !important;
                padding-right: 0 !important;
              }
            `), /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "tab-master-tag-settings" }, /* @__PURE__ */ window.SP_REACT.createElement(R.Field, {
		label: F("LABEL_TAG_OVERRIDES", "App Tag Overrides"),
		description: F("DESCRIPTION_TAG_OVERRIDES", "Allows you to override specific tags for apps you own.")
	}, /* @__PURE__ */ window.SP_REACT.createElement("div", { className: "styled-btn" }, /* @__PURE__ */ window.SP_REACT.createElement(R.ButtonItem, { onClick: () => {
		(0, R.showModal)(/* @__PURE__ */ window.SP_REACT.createElement(Ff, {
			onSelect: (e) => o(e),
			dropdownOptions: a
		}));
	} }, F("LABEL_TAGS_ADD_APP", "Add App")))), /* @__PURE__ */ window.SP_REACT.createElement(Pf, {
		tagOverrides: e,
		appsMap: i,
		setTagOverrides: t
	})));
}, Lf = () => {
	let e = "/tab-master-settings", t = (0, x.useMemo)(() => {
		let t = {};
		return F("TITLE_SETTINGS_GENERAL", "General"), Object.entries(wf).map(([n, r]) => {
			n = n.replace(/_/g, " "), t[n] = {
				title: n,
				content: /* @__PURE__ */ window.SP_REACT.createElement(Cf, { content: r }),
				route: `${e}/docs-${n.toLowerCase().replace(/ /g, "-")}`,
				icon: /* @__PURE__ */ window.SP_REACT.createElement(Ye, null),
				visible: !0,
				hideTitle: !0
			};
		}), [
			{
				title: F("TITLE_SETTINGS_TAGS", "Tags"),
				content: /* @__PURE__ */ window.SP_REACT.createElement(If, null),
				route: `${e}/tags`,
				icon: /* @__PURE__ */ window.SP_REACT.createElement(lt, null)
			},
			{
				title: F("TITLE_SETTINGS_ABOUT", "About"),
				content: /* @__PURE__ */ window.SP_REACT.createElement(Af, null),
				route: `${e}/about`,
				icon: /* @__PURE__ */ window.SP_REACT.createElement(Tt, null),
				hideTitle: !0
			},
			"separator",
			t.Overview,
			t.Tabs,
			t.Filters,
			t["Tab Profiles"],
			t["The Fix System"]
		];
	}, [e]);
	return /* @__PURE__ */ window.SP_REACT.createElement(R.SidebarNavigation, {
		title: "TabMaster",
		showTitle: !0,
		pages: t
	});
}, Rf = b(() => {
	let e, t, n = new Kn();
	on.setup(n);
	let r = on.initOnLogin(async () => {
		await H.waitForLoad(), await G.loadSettings(), await n.loadTabs(), e = Oo(n), t = jo(n);
	});
	return _.addRoute("/tab-master-settings", () => /* @__PURE__ */ window.SP_REACT.createElement(Yn, null, /* @__PURE__ */ window.SP_REACT.createElement(Pn, { tabMasterManager: n }, /* @__PURE__ */ window.SP_REACT.createElement(Lf, null)))), {
		name: "TabMaster",
		title: /* @__PURE__ */ window.SP_REACT.createElement(x.Fragment, null),
		titleView: /* @__PURE__ */ window.SP_REACT.createElement(Xo, {
			title: "TabMaster",
			tabMasterManager: n
		}),
		content: /* @__PURE__ */ window.SP_REACT.createElement(Yn, null, /* @__PURE__ */ window.SP_REACT.createElement(Pn, { tabMasterManager: n }, /* @__PURE__ */ window.SP_REACT.createElement(Jo, null))),
		icon: /* @__PURE__ */ window.SP_REACT.createElement(A, null),
		onDismount: () => {
			_.removePatch("/library", e), _.removePatch("/settings", t), _.removeRoute("/tab-master-settings"), r.unregister(), on.dismount();
		}
	};
});
//#endregion
export { Rf as default };

//# sourceMappingURL=index.js.map