$(document).ready(function () {
    var runPageScripts = function(pagePath) {
        if(pagePath == "home") {
            $("body").scrollspy({target:".sidebar"});
            $(window).on("load",function(){$("body").scrollspy("refresh")});

            // Disable sidebar links' default action
            $(".sidebar-container [href=#]").click(function(a){a.preventDefault()});

            // Enable the fixed sidebar
            $(".sidebar").affix({offset: {top: $(".sidebar-container").position().top+100}});

            // Show the anchors for the CV sections
            anchors.options = {
                visible: 'always',
                placement: 'left',
                icon: ''
            };

            anchors.add('h2');
        }
        else if(pagePath == "academic") {
            $("a.publication-more").click(function(event) {
                var parent = $(event.target);
                
                if(parent.hasClass("glyphicon"))
                    parent = parent.parent();
                
                parent.toggleClass("drawer-open");
                
                while(!parent.hasClass("publication"))
                    parent = parent.parent();
                
                parent.find(".publication-abstract").slideToggle();
            })
        }
        else if(pagePath == "projects/broquil") {
            $("#broquil-demo").monitorize();
        }
        else if(pagePath == "projects/eyetracker") {
            $("#eyetracker-demo").monitorize({type: "laptop"});
        }
        else if(pagePath == "projects/memoryfields") {
            $("#mf-first-display>img").monitorize();
            $("#mf-second-display>img").monitorize({base: false, size: "small"});
        }
        
        // Add listeners for left/right keys to switch between projects
        if(pagePath.startsWith("projects")) {
            $("body").keydown(function(e) {
                if(e.target.tagName.toLowerCase() === 'input' || 
                   e.target.tagName.toLowerCase() === 'textarea')
                    return;
                    
                if(e.keyCode == 37) { // left
                    if($('li.previous > a').length)
                        window.location = $('li.previous > a').attr('href');
                }
                else if(e.keyCode == 39) { // right
                    if($('li.next > a').length)
                        window.location = $('li.next > a').attr('href');
                }
            });
        }
        
        // Make the current menu option active
        $(".top-nav > ul > li").removeClass('active');
        $("#menu-" + pagePath.split("/")[0]).addClass('active');
        console.log(pagePath.split("/"));
    }
    
    var showPage = function(pagePath) {
        if(pagePath == "projects")
            pagePath = "projects/memoryfields"
        $.ajax({
            url: "pages/" + pagePath + ".html",
            context: document.body
        }).done(function(data) {
            $("#primary").hide()
            $("#primary").html(data);
            $("#primary").fadeIn();
            runPageScripts(pagePath);
        });
    }
    
    if(window.location.hash == "")
        showPage("home");
    else
        showPage(window.location.hash.substr(1));
        
    // Enable navigating through pages using the hash parameter via JS
    $(window).bind('hashchange', function() {
        showPage(window.location.hash.substr(1));
    });
    
    /*
    // Enable the resizing header
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.header-container').addClass('header-shrinked');
        } else {
            $('.header-container').removeClass('header-shrinked');
        }
    });*/
});