$(document).ready(function() {
    $('#button-submit').on('click', function(event){
        event.preventDefault();
        const newTaskTxt = $('#form3').val();
        $('#form3').val('');

        createNewTask(newTaskTxt);
    });

    function createNewTask(text){
        const listGroup = $('#list-group');
        const listGroupItem = $('<li></li>').addClass('list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2');
        const containerItemContent = $('<div></div>').addClass('d-flex align-items-center');
        const input = $('<input>').addClass('form-check-input me-2').attr('type', 'checkbox');
        const taskText = $('<span></span>').text(text);

        containerItemContent.append(input).append(taskText);

        const removeLink = $('<a></a>').attr({
            href: '#!',
            'data-mdb-tooltip-init': '',
            title: 'Remove item'
        });
        const removeIcon = $('<i></i>').addClass('fas fa-times text-primary custom-styling-remove-button').text('Remove');
        $(removeIcon).css(' ')
        removeLink.append(removeIcon);

        listGroupItem.append(containerItemContent).append(removeLink);
        listGroup.append(listGroupItem);
    }

    $('#list-group').on('click', 'li', function(event){
        if ($(event.target).hasClass('form-check-input')) {
            console.log('Checkbox was clicked');
        } else if ($(event.target).hasClass('fa-times')) {
            console.log('Remove icon was clicked');
            $(event.target).closest('li').remove();
        }
    });
});
