function mail() {
    var email = 'angelnineski@gmail.com';
    var subject = 'Regarding your moving furniture services';
    var body = 'Hello, I would like to inquire about your moving furniture services.';
  
    var mailto = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  
    window.open(mailto, '_blank');
  }


  function contact() {
    var email = 'angelnineski@gmail.com';
    var subject = 'I need help with ...... (tell us your issue)';
    var body = 'Hello, I would like to inquire assistance on ...... (Your issue here)';
  
    var mailto = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  
    window.open(mailto, '_blank');
  }