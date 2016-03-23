;
(function() {
 
    loadHomePage();
    var detached;

    function loadHomePage() {
      console.log($.getJSON("../json/homepage.json"));
        $.getJSON("../json/homepage.json", function(data) {
            var output = '';
            $.each(data, function(key, val) {
                output += val.block;
            });
            $('#homepage').html(output);
            frontpage();
        });
    }

    function loadApp() {
        $('#homepage').remove();
        $.getJSON("../json/app.json", function(data) {
            var output = '';
            $.each(data, function(key, val) {
                output += val.block;
            });
            $('#app').html(output);
          
           appPage();
        });
    }


    $('#homepage').on('click', '.tryDemo', function() {
      console.log('click');
        if (detached !== undefined) {
            $('body').prepend(detached);
        }
        detached = $('#homepage').detach();
        loadApp();
       

        console.log(detached);
        return detached;
    });

    $('#app').on('click', '#signOut', function() {
        $('body').prepend(detached);

        detached = $('#app').detach();
        console.log(detached);
        loadHomePage();
        return detached;
    });

})();