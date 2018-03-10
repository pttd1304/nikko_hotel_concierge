function getData(){
$.getJSON('../test-data/test-data.json', function(result){
    var t = $('#datatable').DataTable();  

    $.each(result, function(i, field){
        t.row.add([
            field.time,
            field.name,
            field.room,
            field.flight,
            field.route,
            field.charged,
            field.checkNo,
            field.driver,
            field.vehiclePilate,
            field.remarks
        ]).draw();

    });             
});
}
$(document).ready(function(){ 
    getData();
});
