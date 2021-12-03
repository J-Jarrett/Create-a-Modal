// Simple Modal script:
// 
// 1. grab html elements and assign them to vars
// 2. add events to listen for
// 3. write functions for things to happen when event is triggered.
//      - including clicking outside modal-content to close ....

// 4. go back to css to add a "fade in animation" for modal,
// 5. then make another html file to make a more complicated modal with header, footer and body content
// 
// NOTE: this script includes an error and how and why to deal with it this way.

// ===============================================

// 1. grab html elements and assign them to vars
//  (modal, modalBtn, closeBtn)

const modal = document.getElementById("simpleModal");
const modalBtn = document.getElementById("modalBtn");
// const closeBtn = document.getElementById("closeBtn");
    // **** closeBtn is the error here: closeBtn in html is a class, not an id.
    // **** use getByClassName, returns an array/html collection of items sharing that class name, so even though there's only 1 we still need to remember it's at index [0]
    // **** don't change it on html to an id for a 'quick fix' - your site/app may have more modals or buttons, and need to be assigned a class for css styling.

const closeBtn = document.getElementsByClassName("closeBtn")[0];

// =============================

// 2. add events to listen for 
//  (open modal button click("Click Here"), close modal button click, close modal on "outside" click)

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// 3. write functions for things to happen when event is triggered.

function openModal() {
    // console.log(123); 
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = "none";
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
    // If we click on, ie. event passed in targets, the modal but not modal-content, that is the 'background' instead of the 'card' of content.



