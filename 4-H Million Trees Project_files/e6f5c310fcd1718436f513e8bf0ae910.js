Bootstrapper.bindDependencyImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var _dl=__dataLayer,site=_dl.site||{},siteSite=site.site||"",page=_dl.page||{},pageName=page.page_name||"",storyTitle=page.story_title||"",realPath=window.location.pathname||"",pageSection=page.section_1||realPath.split("/")[1]||"",configId,nielsenMetadata;switch(true){case /fivethirtyeight|538/i.test(siteSite):configId=nielsenConfig.fivethirtyeight.static;break;
case /andscape/i.test(siteSite):configId=nielsenConfig.andscape.static;break;case /(the)?undefeated/i.test(siteSite):configId=nielsenConfig.theundefeated.static;break;case /abcn(ews)?/i.test(siteSite):configId=nielsenConfig.abcn.static;break;case /goodmorningamerica|gma/i.test(siteSite):configId=nielsenConfig.gma.static;break;case /6abc/i.test(siteSite):configId=nielsenConfig.WPVI.static;break;case /abc11/i.test(siteSite):configId=nielsenConfig.WTVD.static;break;case /abc13/i.test(siteSite):configId=
nielsenConfig.KTRK.static;break;case /abc30/i.test(siteSite):configId=nielsenConfig.KFSN.static;break;case /abc7chicago/i.test(siteSite):configId=nielsenConfig.WLS.static;break;case /abc7ny/i.test(siteSite):configId=nielsenConfig.WABC.static;break;case /abc7news/i.test(siteSite):configId=nielsenConfig.KGO.static;break;case /abc7/i.test(siteSite):configId=nielsenConfig.KABC.static;break;default:configId=null;break}nielsenMetadata={type:"static",assetid:storyTitle||pageName||realPath,section:pageSection||
pageName||realPath};for(var key in nielsenMetadata){var val=nielsenMetadata[key];if(typeof val==="string")nielsenMetadata[key]=val.replace(/\s+/ig,"-").replace(/[^a-z-]/ig,"")}configId&&Bootstrapper.initNielsen(configId,nielsenMetadata)},3866243,[3877441],694696,[645962],-1);
Bootstrapper.bindDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;function trackVision(app,guestInfo,page){var waitVision=setInterval(function(){if(typeof VISION!=="undefined"){clearInterval(waitVision);appUrl="https://vision.fn-pz.com/v2/";VISION.setConfigs({app_id:"abcnews-web",app_bundle_id:app.app_id,app_suite:"wdgnewabcnwebprod",app_platform:"web",app_version:"0",url:appUrl,debugMode:window.debugMode||null});var SWID=Bootstrapper.Cookies.get("SWID");
var UNID=Bootstrapper.Cookies.get("UNID");if(SWID!=""){var loggedIn=SWID.indexOf("{")>=0;VISION.addGuestId(SWID,"swid",loggedIn,"primary")}if(UNID!="")VISION.addGuestId(UNID,"unid",false,"secondary");window.vision=new VISION;window.visionParams={event_name:"page_view",page_url:page.page_url,page_location:page.page_location,page_nav_method:page.page_nav_method,page_type:page.page_type};vision.track(visionParams)}})}if(typeof __dataLayer!=="undefined"&&typeof __dataLayer.subscribe==="function"){var app=
{app_id:__dataLayer.site.site};var guestInfo={status:__dataLayer.pzn.login_status,entitlements:__dataLayer.pzn.entitlements};var page={page_url:__dataLayer.page.page_url,page_location:__dataLayer.page.section,page_previous_url:__dataLayer.page.prev_page,page_nav_method:__dataLayer.page.nav_method,page_type:__dataLayer.page.content_type};trackVision(app,guestInfo,page)}},3863700,694810,-1);