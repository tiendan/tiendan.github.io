$(document).ready(function () {
    var runPageScripts = function(pagePath) {
        // Custom scripts for each page
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
            // Enable abstract drawers for publications
            $("a.publication-more").click(function(event) {
                var parent = $(event.target);
                
                if(parent.hasClass("glyphicon"))
                    parent = parent.parent();
                
                parent.toggleClass("drawer-open");
                
                // Find the base publication element
                while(!parent.hasClass("publication"))
                    parent = parent.parent();
                
                // Toggle the abstract
                parent.find(".publication-abstract").slideToggle();
            })
        }
        else if(pagePath == "projects/broquil") {
            $("#broquil-demo>img").monitorize({type: "phone", size: "large"});
        }
        else if(pagePath == "projects/eyetracker") {
            $("#eyetracker-demo>img").monitorize({type: "laptop"});
        }
        else if(pagePath == "projects/memoryfields") {
            $("#mf-first-display>img").monitorize();
            $("#mf-second-display>img").monitorize({base: false, size: "small"});
        }
        else if(pagePath == "projects/dictionary") {
            $("#dictionary-demo>img").monitorize({type: "phone", size: "large"});
        }
        
        // Add listeners for left/right keys to switch between projects
        if(pagePath.startsWith("projects")) {
            $("body").keydown(function(e) {
                if(e.target.tagName.toLowerCase() === 'input' || 
                   e.target.tagName.toLowerCase() === 'textarea')
                    return;
                
                if(e.keyCode == 37) { // left
                    if($('.pager-previous a').length)
                        window.location = $('.pager-previous a').attr('href');
                }
                else if(e.keyCode == 39) { // right
                    if($('.pager-next a').length)
                        window.location = $('.pager-next a').attr('href');
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
        if(pagePath == "")
            pagePath = "home"
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