  // Hero slider JS
  $('.hero-slider').owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'heartBeat',
      items: 1,
      loop: true,
      nav: true,
      dots: true,
      keyboard: true
  });

  // Accordion Jquery..
  $(function() {
      $("#accordion").accordion({
          collapsible: true,
      });
      $("input").each(function() {
          $(this).change(function() {
              if ($(this).attr("id") == "disableaccordion") {
                  $("#accordion").accordion("option", "disabled", true);
              } else {
                  $("#accordion").accordion("option", "disabled", false);
              }
          });
      });
  });

  //Calendar 
  const myCalendar = new TavoCalendar('#my-calendar', {

      date: "2020-10-1",
      highlight_sunday: false,
      //  highlight_saturday: false,
      selected: ['2020-10-20'],
      frozen: true
  });
  $(".tavo-calendar__header").css({ 'background-color': 'grey', 'height': '20px' });