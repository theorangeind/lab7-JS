var $modalOverlay = document.querySelector('.js-modal-overlay');
var $modalButtonsShow = document.querySelectorAll('.js-modal-show');
var $modalButtonsClose = document.querySelectorAll('.js-modal-close');
var $modalButtonsConfirm = document.querySelectorAll('.js-modal-confirm');
var $modalButtonsCross = document.querySelectorAll('.js-modal-cross');

//current modal window
var modalCurrent = null;
//if current modal window transition isn't over
var transiting = false;

//SHOW MODAL WINDOW button
$modalButtonsShow.forEach(function(item)
{
    item.addEventListener('click', function()
    {
        var modalName = this.getAttribute('modal-name');
        var modal = document.querySelector('.js-modal[modal-name="' + modalName + '"]');
        //set modal window and overlay visible by adding the 'visible' class
        modal.classList.add('visible');
        $modalOverlay.classList.add('visible');
        //class 'visible' added and transition started so 'transiting' flag need to be checked
        transiting = true;
        //save modal window as current
        modalCurrent = modal;
        //wait for transition end
        modalCurrent.addEventListener('transitionend', function()
        {
            transiting = false;
        }, 
        {
            once: true
        })
    });
})


//CONFIRM button
$modalButtonsConfirm.forEach(function(item)
{
    item.addEventListener('click', function()
    {
        /*--SOME CONFIRM CODE HERE--*/
        
        closeModal();
    });
})

//CLOSE button
$modalButtonsClose.forEach(function(item)
{
    item.addEventListener('click', closeModal);
})

//CROSS button
$modalButtonsCross.forEach(function(item)
{
    item.addEventListener('click', closeModal);
})

//prevent instant closing modal
$modalOverlay.addEventListener('click', function()
{
    if(!transiting) 
    {
        closeModal();
    }
})

function closeModal()
{
    if(modalCurrent != null)
    {
        modalCurrent.classList.remove('visible');
        $modalOverlay.classList.remove('visible');
        modalCurrent = null;
    }
}