$(document).ready( function () {
    $('#table_id').DataTable();
} );

$('#exampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  $('#exampleModal2').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
    $('#exampleModal3').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
      $('#exampleModal4').on('shown.bs.modal', function () {
          $('#myInput').trigger('focus')
        })


        function productUpdate() {
          if ($("#productname").val() != null &&
              $("#productname").val() != '') {
            // Add product to Table
            productAddToTable();
            // Clear form fields
            formClear();
            // Focus to product name field
            $("#productname").focus();
          }
        }
        function formClear() {
          $("#productname").val("");
          $("#introdate").val("");
          $("#url").val("");
        } 
        