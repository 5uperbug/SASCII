(function($){
    $(function(){

        //init select
        $('select').material_select();
        
        //Side bar on mobile devices
        $('.button-collapse').sideNav();

        //Hide output controls
        hideOutputControls();

        $('.goBack').click(function () {
            hideOutputControls();
            showInputControls();
            $('#txtInput').val('');
        });

        //Generate awesomesuace ASCII Art
        $('#btnGenerate').click(function() {
            var txtString = $('#txtInput').val();
            if (txtString == '') {
                // toast(message, displayLength, className, completeCallback);
                toast('Add text!', 1000) // 4000 is the duration of the toast
            } 
            else {
                $("#txtOutput").figlet(txtString, $('#selectFont').val());
                hideInputControls();
                showOutputControls();
            }
            
        });

        //Copy content to clipboard
        $('#btnCopy').click(function() {
            $('txtOutput').html('hjgasd');
        });

        function hideInputControls() {
            $('#divInput').hide();
        }

        function showInputControls() {
            $('#divInput').show();
        }

        function hideOutputControls() {
            $('#divOutput').hide();
        }

        function showOutputControls() {
            $('#divOutput').show();
        }
    }); // end of document ready
})(jQuery); // end of jQuery name space