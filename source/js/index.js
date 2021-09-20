var headerTapCounter = 0;

currentFirmware = function(userAgent) {
    return userAgent.match(/\OS (.*?)\ like/)[1].replaceAll("_", ".");
};

function EasterEgg() {
    headerTapCounter++;
    if (headerTapCounter == 10) {
        $('section.header .title h1').html('Mantisus')
        $('body').removeClass('default').addClass('sus')
    }
}


async function pwnMe() { 
	if (location.protocol === "https:") {
	  if (
		navigator.userAgent.includes("iPhone") ||
		navigator.userAgent.includes("iPad")
	  ) {
		if (navigator.userAgent.includes("Macintosh")) {
		  alert("MacOS is not supported");
		  return;
		}
		
		if (currentFirmware(navigator.userAgent).startsWith("14.5")) {
		  socket.emit("log_normal", "Starting exploitation for iOS 14.5");
		  await kickstart145();
		  return;
		}
		
		if (currentFirmware(navigator.userAgent).startsWith("14.6")) {
		  socket.emit("log_normal", "Starting exploitation for iOS 14.6");
		  var iframe = document.createElement("iframe");
		  iframe.style.display = "none";
		  iframe.src = "./pwn_14.6.html";
		  document.body.appendChild(iframe);
		  return;
		}
	  } else {
		alert("Detected a unsupported version/device");
		socket.emit("error", "Detected a unsupported version/device");
		return;
	  }
	} else {
	  document.getElementById("jbButton").disabled = true;
	  alert("exploitation only works over https");
	}
};

if (
    navigator.userAgent.includes("iPhone") ||
    navigator.userAgent.includes("iPad")
) {
    if (currentFirmware(navigator.userAgent).startsWith("14.5")) {
        console.log("Starting exploitation for iOS 14.5");
        $('section.info .comp .content').html('Your iPhone on iOS 14.5 is compatible with Manticore')
    }

    if (currentFirmware(navigator.userAgent).startsWith("14.6")) {
        console.log("Starting exploitation for iOS 14.6");
        $('section.info .comp .content').html('Your iPhone on iOS 14.6 is comaptible with Manticore')
    }
} else {
    console.log("error", "Detected a unsupported version/device");
    $('section.info .comp .content').html('Cannot detect device/version.')
};

if (navigator.userAgent.includes("Windows")) {
    console.log("Windows is not supported");
    $('section.info .comp .content').html('You are using Windows you idiot, what are you doing.')
}

const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    doc.style.setProperty("--app-height-neg", `-${window.innerHeight}px`);
    doc.style.setProperty("--app-width", `${window.innerWidth}px`);
    doc.style.setProperty("--app-width-neg", `-${window.innerWidth}px`);
};

window.addEventListener("resize", appHeight);
appHeight();

// window.onload = () => {
//	//force redirect to https
//	if (window.location.protocol !== "https:") {
//		window.location.protocol = "https:";
//	}
// }

$(document).ready(function() {
    console.log("document loaded");
    $("section.header").addClass('load');

    console.log("Loading Theme");
    themesLoad()
    // prep-start
    setTimeout(function() {
        $("body").addClass('start');
        $("section.header").removeClass('load');
        console.log("prep animation");
    }, 100);

    // Start Animation
    setTimeout(function() {
        $("section.header").addClass('start');
        $("body").removeClass('start').addClass('loading');
        console.log("started animation");
    }, 1000);

    // prep-end Animation
    setTimeout(function() {
        $("body").removeClass('loading').addClass('finalizing');
    }, 2000);

    // End Animation
    setTimeout(function() {
        $("section.header").removeClass('start');
        $("body").removeClass('finalizing').addClass('loaded');
        console.log("finished animation");
    }, 3000);

    // sike, it did not end lmao. move all elements up now.
    setTimeout(function() {
        $("body").addClass('home');
        console.log("really finished the animation this time.");
    }, 4100);

    // show badges
    setTimeout(function() {
        $(".badge").removeClass('hidden');
        console.log("showing badges");
    }, 5100);


    if ((navigator.userAgent).includes("Windows")) {
        console.log("detected Mozilla");
    };

    if ((navigator.userAgent).includes("Mac")) {
        console.log("detected Mac");
    };

    /* swipe up - open */
    $('section.info').swipeup(function(e) {
        console.log('swiped up .info');
        $('section.info .options').addClass("active");
        $('body').addClass("options");
        $('section.header').addClass('hidden');
        $('section.content').addClass('hidden');
        setTimeout(function() {
            $('html').css("--options-top-width", `${$('.top .items').innerWidth()}px`);
        }, 500);
    });

    /* tap - open */
    $('section.info .options').tap(function(e) {
        if (!$(this).hasClass('active')) {
            $('section.info .options').addClass("active");
            $('body').addClass("options");
            $('section.header').addClass('hidden');
            $('section.content').addClass('hidden');
            console.log('pushed .options');
        };
    });

    /* swipe - close */
    $('section.info .options').swipedown(function(e) {
        if($("section.info section .wrap > .content .wrap:hover").length != 0){
            console.log('swiped down .options');
            $('section.info .options').removeClass("active");
            $('body').removeClass("options");
            $('section.header').removeClass('hidden');
            $('section.content').removeClass('hidden');
        } else{
            console.log('Swiped outside');
        }
    });

    $('section.info .options .main .head .button').bind('click', function(ev) {
        console.log('pushed .button');
        $('section.info .options').removeClass("active");
        $('body').removeClass("options");
        $('section.header').removeClass('hidden');
        $('section.content').removeClass('hidden');
    });

    $('section.info .options .sub .head .button').bind('click', function(ev) {
        console.log('pushed .button on .sub');
        $('.options section').removeClass('active');
        $('.options section.main').addClass('active');
    });

    $('section.info .options .sub').swiperight(function(e) {
        if($("section.info .options .sub .items:hover").length != 0){
            console.log("Swiped inside, ingnoring");
        } else{
            console.log('Swiped outside');
            $('.options section').removeClass('active');
            $('.options section.main').addClass('active');
        }
    });
    // Options - Select Manager
    $('section.info .items .item').click(function() {
        if ($('section.info .items .item').hasClass('active')) {
            $('section.info .items .item').removeClass('active');
        };
        $(this).addClass('active');
    });
});

$(document).ready(function() {
    //Badges
    const globalState = {
        badges: [
            { name: 'WEB', bg: '#2196f3', color: 'white' },
            { name: 'Beta', bg: '#f44336', color: 'white' },
            { name: 'Deluxe', bg: '#9c27b0', color: 'white' },
            { name: 'PRO', bg: '#ffc107', color: 'white' },
            { name: 'DEV', bg: '#009688', color: 'white' },
            { name: 'EGG', bg: '#9e9e9e', color: 'white' }
        ],
        themes: [
            {
                title: 'Manticore',
                icon: 'url(images/themes/high/manticore-ico.png)',
                bg: 'url(images/themes/high/manticore-screen.png)',
                color: '#000',
            },
            {
                title: 'Gooned',
                icon: 'url(images/themes/high/gooned-ico.png)',
                bg: 'url(images/themes/high/gooned-screen.png)',
                color: '#1C1F24',
            },
            {
                title: 'Goon',
                icon: 'url(images/themes/high/goon-ico.png)',
                bg: 'url(images/themes/high/goon-screen.png)',
                color: '#2b313c',
            },
            {
                title: 'Nord',
                icon: 'url(images/themes/high/nord-ico.png)',
                bg: 'url(images/themes/high/nord-screen.png)',
                color: '#3b4252',
            },
            {
                title: 'Water',
                icon: 'url(images/themes/high/water-ico.png)',
                bg: 'url(images/themes/high/water-screen.png)',
                color: '#6c7394',
            },
            {
                title: 'Earth',
                icon: 'url(images/themes/high/earth-ico.png)',
                bg: 'url(images/themes/high/earth-screen.png)',
                color: '#7f5539',
            },
            {
                title: 'Grass',
                icon: 'url(images/themes/high/grass-ico.png)',
                bg: 'url(images/themes/high/grass-screen.png)',
                color: '#48786e',
            },
            {
                title: 'Fire',
                icon: 'url(images/themes/high/fire-ico.png)',
                bg: 'url(images/themes/high/fire-screen.png)',
                color: '#8c5353',
            },
            {
                title: 'Coal',
                icon: 'url(images/themes/high/coal-ico.png)',
                bg: 'url(images/themes/high/coal-screen.png)',
                color: '#4d4d4d',
            },
            {
                title: 'Iron',
                icon: 'url(images/themes/high/iron-ico.png)',
                bg: 'url(images/themes/high/iron-screen.png)',
                color: '#cccccc',
            },
            {
                title: 'Pudding',
                icon: 'url(images/themes/high/pudding-ico.png)',
                bg: 'url(images/themes/high/pudding-screen.png)',
                color: '#ffb947',
            },
            {
                title: 'Cherry Pop',
                icon: 'url(images/themes/high/cherry-ico.png)',
                bg: 'url(images/themes/high/cherry-screen.png)',
                color: '#ff5d34',
            },
        ],
        settings: [
            { area: 'tweaks'},
            { area: 'themes'}
        ],
        managers: [{
                title: 'Cydia',
                icon: 'url(images/themes/high/manticore-ico.png)',
                bg: 'url(images/themes/high/manticore-screen.png)',
                color: '#fff',
            },
            {
                title: 'Sileo',
                bg: 'url("https://getsileo.app/img/icon.png")',
                color: '',
            },
            {
                title: 'Zebra',
                bg: 'url("https://getzbra.com/assets/zeeb.svg")',
                color: '',
            },
            {
                title: 'Saily',
                bg: 'url("https://sailyteam.github.io/img/icon.png")',
                color: '',
            }
        ],
        tweaks: [{
                title: 'Restore RootFS',
                icon: 'rays',
                bg: '#FF910B',
                color: '#fff',
            },
            {
                title: 'Disable Updates',
                icon: 'lock_slash_fill',
                bg: '#007EFD',
                color: '',
            },
            {
                title: 'Max Memory Limit',
                icon: 'shift_fill',
                bg: '#007EFD',
                color: '',
            },
            {
                title: 'Load Tweaks',
                icon: 'shippingbox_fill',
                bg: '#2FCB55',
            },
            {
                title: 'Load Deamons',
                icon: 'rocket',
                bg: '#2FCB55',
            },
            {
                title: 'Show Log Window',
                icon: 'square_favorites_fill',
                bg: '#c76666',
            },
            {
                title: 'Disable Screen Time',
                icon: 'hourglass',
                bg: '',
            },
        ],
        wrapperThemes: {
            themesGroup: 4,
        },
    };

    //Insert badges
    function badge(badges) {
        let html = '';
        badges.map((badge) => {
            html += `<div class="hidden badge" style=" background: ${badge.bg}; color: ${badge.color};">${badge.name}</div>`;
        });
        $('.header .title .top .badges').append(html);
    };
    setTimeout(function() {
        badge(globalState.badges, $('.header .title .top .badges'));
    }, 4400);

    //Set category items
    function settings(settings) {
        let html = '';
        settings.map((setting) => {
            html += `<div class="section ${setting.area}"></div>`;
        })
        $('section.info .options .main .content .wrap').append(html);
    };

    //Set sub-category items - options
    function tweaks(tweaks) {
        let html = '';
        tweaks.map((tweak) => {
            html += `<div class="tweak" data-tweak="${'tweak' + sanearString(tweak.title)}">
	            <div class="wrap-icon"><div class="icon" style="background: ${tweak.bg};"><i class="f7-icons" style="color: ${tweak.color};">${tweak.icon}</i></div></div>
	            <div class="wrap-title"><p class="title">${tweak.title}</p></div>
	            <div class="wrap-toggle"><div class="toggle"><div class="arrow"><i class="f7-icons">chevron_right</i></div><div class="switch"></div></div></div>
	        </div>
	        <div class="seperator"></div>`;
        });
        $('section.info .options .main .content .tweaks').append(html);
        $("section.info .options .main .content .tweaks").children(".seperator:last-child").remove();
    };

    //Set category items - themes
    $(document).ready(function() {
        $('section.info .options .main .content .section.themes').append(`
            <div class="theme" data-tweak="themes" onclick="themesOption();"> 
                <div class="wrap-icon"><div class="icon" style="background: #FF910B;"><i class="f7-icons" style="color: white;">paintbrush_fill</i></div></div>
                <div class="wrap-title"><p class="title">Themes</p></div>
                <div class="wrap-toggle"><div class="toggle"><div class="arrow"><i class="f7-icons">chevron_right</i></div><div class="switch"></div></div></div>
            </div>`
        );
    });
    //Set sub-category items - options
    function themes(themes) {
        globalState.wrapperThemes.groups = Math.ceil(themes.length / globalState.wrapperThemes.themesGroup);
        let themeCount = 1;
        let html = '';
        themes.map((theme) => {
            if (themeCount == 1) html += '<div class="splide__slide">';
            html += `<div class="item theme" data-theme="${sanearString(theme.title)}" onclick="themesSelect(); $(this).addClass('active')">
	            <div class="wrap-icon"><div class="icon" style="background: ${theme.icon};"><i class="f7-icons" style="color: ${theme.color};"></i></div></div>
                <div class="wrap-bg" style="background-color: ${theme.color};"><div class="bg" style="background: ${theme.bg};"></div></div>
	            <div class="wrap-title"><p class="title">${theme.title}</p></div>
	        </div>`;
            if (themeCount == globalState.wrapperThemes.themesGroup) {
                html += '</div>';
                themeCount = 1;
                return false;
            }
            theme.type == 'theme' ? themeCount = themeCount + 4 : themeCount++;
        });
        $('section.info .options .sub .top .items .splide__list').append(html);
    };
    settings(globalState.settings);
    tweaks(globalState.tweaks);
    themes(globalState.themes);
    function sanearString(string) {
        return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '');
    };

setTimeout(function() {
    new Splide( '.main .splide' ).mount();
    new Splide( '.sub .splide' ).mount();
}, 800);
});

// Options button functionality

// Options - Themes
function themesOption() { 
    $('.options section').removeClass('active');
    $('.options section.sub').addClass('active');
    console.log('pushed themes option');
};

function themesSelect() { 
    if ($('section.info .items .item').hasClass('active')) {
        $('section.info .items .item').removeClass('active');
    };


    $('.sub .info').html('');

    setTimeout(function() {
        var activeTheme = $('.sub .theme.active').attr('data-theme');
        $('html').removeClass().addClass(activeTheme)
        console.log(activeTheme);
        $('[data-theme=' + activeTheme + '] .wrap-bg').clone().appendTo(".sub .info");
        themesLog();
        Cookies.set('theme', activeTheme);
    }, 300);
};
function themesLoad() {
    $('html').removeClass(':not(".Default")').addClass(Cookies.get('theme'));
    themesLog()
};
function themesLog() { 
    //Check theme on load
        var activeTheme = $('html').attr('class');
        var activeThemeBg = $('.' + activeTheme).css("--app-color-bg");
        var activeThemeColor = $('.' + activeTheme).css("--app-color-title");
        var activeThemeBorder = $('.' + activeTheme).css("--app-color-border");
        var activeThemeIcon = 'url(images/themes/high/' + lowerCase(activeTheme) +'-ico.png)';
        
    
        var ThemeLog= [
            'font-family: Inter',
            'font-weight: 600',
            'background-color:'+ activeThemeBg,
            'background-image: '+ activeThemeIcon,
            'background-repeat: no-repeat',
            'background-size: 100px',
            'color:' + activeThemeColor,
            'font-size: 3em',
            'padding: 12px 12px',
            'margin: 12px 12px',
            'border: 3px solid' + activeThemeBorder,
            'border-radius: 12px',
            'line-height: 35px'
        ].join(';');
    
        console.log('\ntheme selected:\n%c'+activeTheme, ThemeLog, '\nShort Info:', '\ncurrent active theme: ' + activeTheme, '\ncurrent active theme color: ' + activeThemeColor, '\ncurrent active theme border: ' + activeThemeBorder, '\ncurrent active theme icon: ' + activeThemeIcon);

        function lowerCase(string) {
            return string.charAt(0).toLowerCase() + string.slice(1);
        };
};