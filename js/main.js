function akanName() {
  function akanNameFunction() {
    let date = document.getElementById("date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let gender = document.getElementById("gender").value;

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let maleNames = [
      "Kwase",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofe",
      "Kwame",
    ];

    let femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];

    let dateString = date + "#" + month + "#" + year;
    let birthDate = new Date(dateString);
    let currentDate = birthDate.getDay();
    if (date <= 0 || date > 31) {
      alert("Please Enter correct date");
    } else if (month < 1 || month > 12 || (month == 2 && day > 29)) {
      alert("please enter valid month");
    } else if (year <= 0 || year > 2050) {
      alert("Please Enter a Valid Year");
    } else if (gender.length === 0) {
      alert("Please Select your Gender");
    }
    let currentDayName = days[currentDate];
    switch (gender) {
      // if male gender is submit the following line of code will be executed.

      case "male":
        if (currentDayName == days[0]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            maleNames[0];
          return output;
        } else if (currentDayName == days[1]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            maleNames[1];
          return output;
        } else if (currentDayName == days[2]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            maleNames[2];
          return output;
        } else if (currentDayName == days[3]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            maleNames[3];
          return output;
        } else if (currentDayName == days[4]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            maleNames[4];
          return output;
        } else if (currentDayName == days[5]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            maleNames[5];
          return output;
        } else if (currentDayName == days[6]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            maleNames[6];
          return output;
        }

      // code that finds female names.

      case "female":
        if (currentDayName == days[0]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            femaleNames[0];
          return output;
        } else if (currentDayName == days[1]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            femaleNames[1];
          return output;
        } else if (currentDayName == days[2]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            femaleNames[2];
          return output;
        } else if (currentDayName == days[3]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            femaleNames[3];
          return output;
        } else if (currentDayName == days[4]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            femaleNames[4];
          return output;
        } else if (currentDayName == days[5]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            femaleNames[5];
          return output;
        } else if (currentDayName == days[6]) {
          let output =
            "You were Born on " +
            "" +
            currentDayName +
            "" +
            " and your Akan name is " +
            femaleNames[6];
          return output;
        }
        break;

      // if unexpected input is received

      default:

      // Akan name and day display
    }
  }

  document.getElementById("output").innerHTML = akanNameFunction();
}
