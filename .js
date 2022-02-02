var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};


xhr.open('GET', '../data/employees.json');
xhr.send();



var xhrNew = new XMLHttpRequest();
xhrNew.onreadystatechange = function () {
  if(xhrNew.readyState === 4 && xhrNew.status === 200) {
    var roomList = JSON.parse(xhrNew.responseText);
    var roomstatusHTML = '<ul class="bulleted">';
    for (var i=0; i<roomList.length; i += 1) {
      if (roomList[i].available === true) {
        roomstatusHTML += '<li class="in">';
      } else {
        roomstatusHTML += '<li class="out">';
      }
      roomstatusHTML += roomList[i].room;
      roomstatusHTML += '</li>';
    }
    roomstatusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = roomstatusHTML;
  }
};
xhrNew.open('GET', '../data/rooms.json');
xhrNew.send();
