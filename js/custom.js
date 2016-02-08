$(function() {
    $("body").scrollspy({target:".sidebar"});
    
    $(window).on("load",function(){$("body").scrollspy("refresh")});
    
    // Disable sidebar links' default action
    $(".sidebar-container [href=#]").click(function(a){a.preventDefault()});
    
    // Enable the fixed sidebar
    $(".sidebar").affix({offset: {top: $(".sidebar-container").position().top}});
    
    // Show the anchors for the CV sections
    anchors.options = {
        visible: 'always',
        placement: 'left',
        icon: ''
    };
    
    anchors.add('h2');
});