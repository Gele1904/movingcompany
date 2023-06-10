function mail() {
    var email = 'angelnineski@gmail.com';
    var subject = 'Regarding your moving furniture services';
    var body = 'Hello, I would like to inquire about your moving furniture services.';
  
    var mailto = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  
    window.open(mailto, '_blank');
  }