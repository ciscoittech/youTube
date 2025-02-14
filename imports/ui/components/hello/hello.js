import './hello.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


$(document).ready(function () {
  $(".navShowHide").on("click", function () {
    let main = $("#mainSectionContainer");
    let nav = $("#sideNavContainer")

    if(main.hasClass("leftPadding")){
      nav.hide();
    }
    else {
      nav.show()
    }

    main.toggleClass("leftPadding")
  })
})
