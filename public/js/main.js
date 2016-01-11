new WOW().init();

var today = new Date();
var year = today.getFullYear();

$('.service-ul').columnize({ width: 500 });

$(document).ready(function() {
    $('#equipment').DataTable({
    	paging: false
    });
} );