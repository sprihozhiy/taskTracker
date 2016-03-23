function appPage() {
(function() {
  //Initializing functions
  function addTask() {
    var task = $('#taskInput').val();
    if (task != '') {
      $('#taskList').append('<li><input type="checkbox">' + task + '</li>');
      task = $('#taskInput').val('');
    } else {
      alert("Please, enter a task");
    }
  }

  function hideRemoveBtn() {
    if ($('.check').length === 0) {
      $('#removeTask').hide();
    }
  }
  //Triggering functions
  hideRemoveBtn();

  //Event handling
  $('#addTask').on('click', function() {
    addTask();
  });

  $('#taskInput').on('keypress', function(e) {
    if (e.keyCode === 13) {
      addTask();
    }
  });

  $('#removeTask').on('click', function() {
    $('input:checked').parent().remove();
    hideRemoveBtn();
  });

  $('#taskList').on('click', 'input[type="checkbox"]', function(e) {
    $(this).parent().toggleClass('check');
    if ($('.check').length > 0) {
      $('#removeTask').show();
    }
    hideRemoveBtn();
  });
  
  $('#taskList').on('dblclick', 'li', function(){
    var checkValidation = $(this).hasClass('check');
    if(checkValidation === true) {
      alert ('You cann\'t edit checked task.');
    } else {
      var clickedItem = $(this).text();
      $(this).html('<input type="text" value="' + clickedItem + '">');
    }
     
  });
  
  $('#taskList').on('blur', 'input[type="text"]', function(){
    var inputText = $(this).val();
    $(this).parent().html('<input type="checkbox">' + inputText + '');
  });
  
  $('#taskList').on('keypress', 'input[type="text"]', function(e) {
    if (e.keyCode === 13) {
      var inputText = $(this).val();
      $(this).parent().html('<input type="checkbox">' + inputText + '');
    }
  });
  
  

  ///I SHOULD ADD A "SELECT ALL" BUTTON, WHICH CAN CHANGE ITS NAME FOR "UNSELECT ALL" WHEN EVEN IS SELECTED ONE

})();
  
  }