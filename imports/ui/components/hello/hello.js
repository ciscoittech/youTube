import './hello.html';
import { Template } from 'meteor/templating'

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

//   Slides over the side pannel


Template.hello.events({
  'click button'(event, instance){
    let main = $("#mainSectionContainer");
    let nav = $("#sideNavContainer")

    if(main.hasClass("leftPadding")){
      nav.hide();
    }
    else {
      nav.show()
    }

    main.toggleClass("leftPadding")

}
})
