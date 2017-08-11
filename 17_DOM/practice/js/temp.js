<div class="col-xs-6 form-group">
    <input type="button" id="Save" class="btn btn-primary" value="Save"/>
    <input type="button" id="Reset" class="btn btn-default" value="Reset"/>
</div>


function cancelButonHandler(event) {
        event.preventDefault();
        document.getElementById('Name').value = '';
        document.getElementById('Lastname').value = '';
        document.getElementById('Email').value = '';
        document.getElementById('Skils').value = '';
    }

    var cancelButton = document.getElementById('Reset');
    cancelButton.addEventListener('click', cancelButonHandler);