function validateForm() {
    var name = document.getElementById("name");
    var group = document.getElementById("group");
    var idcard = document.getElementById("idcard");
    var dob = document.getElementById("dob");
    var email = document.getElementById("email");
  
    var namePattern = /^[А-Яа-яІіЇїЄє]+\s[А-Яа-яІіЇїЄє]\.[А-Яа-яІіЇїЄє]\.$/;
    var groupPattern = /^[А-Яа-яІіЇїЄє]{2}-\d{2}$/;
    var idcardPattern = /^[А-Яа-яІіЇїЄє]{2}\s№\d{6}$/;
    var dobPattern = /^\d{2}\.\d{2}\.\d{4}$/;
    var emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    const nameProbe = namePattern.test(name.value);
    const groupProbe = groupPattern.test(group.value);
    const idcardProbe = idcardPattern.test(idcard.value);
    const dobProbe = dobPattern.test(dob.value);
    const emailProbe = emailPattern.test(email.value);


    var message = "Некоректне заповнення форми, правильне заповнення нижче\n";
  
    if (!nameProbe) {
        name.style.borderColor = "red";
        message+="ПІБ: ТТТТТТ Т.Т.\n";
      } else {
        name.style.borderColor = "green";
      }
      
      if (!groupProbe) {
        group.style.borderColor = "red";
        message+="Група: ТТ-ЧЧ \n";
      } else {
        group.style.borderColor = "green";
      }
      
      if (!idcardProbe) {
        idcard.style.borderColor = "red";
        message+="ID-card: ТТ №ЧЧЧЧЧЧ \n";
      } else {
        idcard.style.borderColor = "green";
      }
      
      if (!dobProbe) {
        dob.style.borderColor = "red";
        message+="Дата народження: ЧЧ.ЧЧ.ЧЧЧЧ \n";
      } else {
        dob.style.borderColor = "green";
      }
      
      if (!emailProbe) {
        email.style.borderColor = "red";
        message+="e-mail: тттттт@ттттт.com \n";
      } else {
        email.style.borderColor = "green";
      }

      if (nameProbe && groupProbe && idcardProbe && dobProbe && emailProbe) {
        const output = document.getElementById("output");
        output.style.textAlign = "center";
        output.innerHTML += "Введена інформація: <br>"
        output.innerHTML += "ПІБ: " + name.value + "<br>";
        output.innerHTML += "Група: " + group.value + "<br>";
        output.innerHTML += "ID-card: " + idcard.value + "<br>";
        output.innerHTML += "Дата народження: " + dob.value + "<br>";
        output.innerHTML += "e-mail: " + email.value + "<br>";
    } else {
        message += "де Т-символ, Ч-число";
        alert(message);
    }
}

// Функція для генерації випадкового кольору
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
  // Створення таблиці
  var table = document.getElementById("table");
  for (var i = 0; i < 6; i++) {
    var row = table.insertRow(i);
    for (var j = 0; j < 6; j++) {
      var cell = row.insertCell(j);
      var index = i * 6 + j + 1
      cell.innerHTML = index;
      cell.id = "cell-" + index;
      cell.style.backgroundColor = "white";
    }
  }

  var cell = document.getElementById("cell-26");
  var colorPicker = document.getElementById("colorPicker");

  // Зміна кольору при наведенні
  cell.onmouseover = function() {
    this.style.backgroundColor = getRandomColor();
  }
  
  colorPicker.onchange = function() {
    cell.style.backgroundColor = colorPicker.value;
  }

  // Зміна кольору при натисканні
  var clickTimeout;
    cell.onclick = function() {
      clearTimeout(clickTimeout);
      clickTimeout = setTimeout(function() {
        colorPicker.click();
      }, 200);
    }

  // Зміна кольору стовпця при подвійному натисканні
  cell.ondblclick = function() {
    clearTimeout(clickTimeout);
    var index = this.cellIndex;
    var colorToChangeTo = this.style.backgroundColor;
    for (var k = index; k < table.rows[0].cells.length; k += 2) {
      for (var l = 0; l < table.rows.length; l++) {
        table.rows[l].cells[k].style.backgroundColor = colorToChangeTo; 
      }
    }
  }
