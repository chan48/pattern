(function(w) {
    if (!w.parent.initDone && w.location.pathname === '/context.html') {
        w.parent.initDone = true;
        w.open('/debug.html', '_blank');
    }
})(window);
