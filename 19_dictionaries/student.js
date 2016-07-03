// Write a function as specified in each of the paragraphs below.

// Write a function callled `showPerson`.  It takes a dictionary with
// attributes 'name' and 'email'.  It gives back a string. For example,
// showPerson({'name': 'Daniel Bergey', 'email': 'dbergey@friendscentral.org'})
// returns "Daniel Bergey <dbergey@friendscentral.org>"

var showPerson = function(p) {
    return p.name + ' <' + p.email + '>'
};

// Write `showDate`.
// Input: {year: 1970, month: 01, day:01, hour: 0, minute: 0, second: 0}
// Output: "1970-01-31T12:59:59" Note the T between date and time

var showDate = function(r) {
    if (r.year < 10) {
        r.year = '0' + r.year
    }
    if (r.month < 10) {
        r.month = '0' + r.month
    }
    if (r.day < 10) {
        r.day = '0' + r.day
    }
    if (r.hour < 10) {
        r.hour = '0' + r.hour
    }
    if (r.minute < 10) {
        r.minute = '0' + r.minute
    }
    if (r.second < 10) {
        r.second = '0' + r.second
    }
    return r.year + '-' + r.month + '-' + r.day + 'T' + r.hour + ':' + r.minute + ':' + r.second
};

// compareInts
// Input: 2 integer numbers
// Output: one of "LT", "EQ", or "GT" (less than, equal, or greater than)

var compareInts = function(x, y) {
    if (x < y) {
        return "LT";
    }
    if (x == y) {
        return "EQ";
    }
    if (x > y) {
        return "GT";
    }
};

// compareDates
// Input: Two dates, in the format:
// {year: 1969, month: 7, day: 24, hour: 16, minute: 50, second: 35}
// Output: one of "LT", "EQ", or "GT"

var compareDates = function(x, y) {
    if (x.year < y.year) {
       return "LT";
    } else if (x.year == y.year) {
        if (x.month < y.month) {
            return "LT";
        } else if (x.month == y.month) {
            if (x.day < y.day) {
                return "LT";
            } else if (x.day == y.day) {
                if (x.hour < y.hour) {
                    return "LT";
                } else if (x.hour == y.hour) {
                    if (x.minute < y.minute) {
                        return "LT";
                    } else if (x.minute == y.minute) {
                        if (x.second < y.second) {
                            return "LT";
                        }
                    }
                } 
            }
        }
    }
    if (x.year == y.year && x.month == y.month && x.day == y.day && x.hour == y.hour && x.minute == y.minute && x.second == y.second) {
       return "EQ";
    } 
    if (x.year > y.year) {
       return "GT";
    } else if (x.year == y.year) {
        if (x.month > y.month) {
            return "GT";
        } else if (x.month == y.month) {
            if (x.day > y.day) {
                return "GT";
            } else if (x.day == y.day) {
                if (x.hour > y.hour) {
                    return "GT";
                } else if (x.hour == y.hour) {
                    if (x.minute > y.minute) {
                        return "GT";
                    } else if (x.minute == y.minute) {
                        if (x.second > y.second) {
                            return "GT";
                        }
                    }
                } 
            }
        }
    }
};

// elementOf
// Input: a String and a list of Strings
// Output: true or false (lowercase - these are JS keywords)
// return true if the first input is present in the list (second input)

var elementOf = function(x, y) {
    var count = 0;
    while (count < y.length) {
        if (x == y[count]) {
            return true;
        } 
        count++;
    } if (count == y.length) {
        return false;
    }
};

// hasTag
// Input: a String and an Email
// Email has the following attributes:
// sender, recipients, subject, date, body, tags
// Output: true or false
// return true if the first input is present in the tags of the email

var hasTag = function(checkedString, checkedEmail) {
    var contain = false;
    var count = 0;
    while (count < checkedEmail.tags.length) {
        if (checkedString == checkedEmail.tags[count]) {
            contain = true;
        } 
        count++;
    }
    return contain;
};

// filterByTag
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list with those emails that have the first input in their tags
// return the emails in the same order they appear in the input
// use hasTag

var filterByTag = function(checkedString, emailArray) {
    var emailMatches = [];
    var count = 0;
    while (count < emailArray.length) {
      if (hasTag(checkedString, emailArray[count])) {
        emailMatches.push(emailArray[count]); 
      }
      count++;
    }
    return emailMatches;
};

// parseYear
// Input: String, in the format "2016"
// Output: Int, 2016
// use `parseInt`:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

var parseYear = function(yearString) {
    return parseInt(yearString);
};

// parseDate
// Input: String, in the format"2016-01-20T13:41:00"
// Output: A Date dictionary, with the attributes:
// year, month, day, hour, minute, second
// use parseInt and substr:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

var parseDate = function(dateString) {
    var year = dateString.substr(0, 4);
    var month = dateString.substr(5, 2);
    var day = dateString.substr(8, 2);
    var hour = dateString.substr(11, 2);
    var minute = dateString.substr(14, 2);
    var second = dateString.substr(17, 2);
    
    return {
        "year": parseInt(year),
        "month": parseInt(month),
        "day": parseInt(day),
        "hour": parseInt(hour),
        "minute": parseInt(minute),
        "second": parseInt(second),
    };
};

// inSubject
// Input: a String and an Email, in the same format as hasTag
// Output: true or false
// return true if the first input is part of the 'subject' field of the Email
// use .includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

var inSubject = function(checkedString, checkedEmail) {
    if (checkedEmail.subject.includes(checkedString)) {
        return true;
    } else {
        return false;
    }
};

// filterBySubject
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list of the emails that have the first email in their subject
// use inSubject

var filterBySubject = function(checkedString, emailArray) {
    var emailMatches = [];
    var count = 0;
    while (count < emailArray.length) {
        if (inSubject(checkedString, emailArray[count])) {
            emailMatches.push(emailArray[count]);
        }
        count++;
    }
    return emailMatches;
};

// inBody
// Input: a String and an Email, in the same format as hasTag
// Output: true or false
// return true if the first input is part of the 'body' field of the Email

var inBody = function(checkedString, checkedEmail) {
    if (checkedEmail.body.includes(checkedString)) {
        return true;
    } else {
        return false;
    }
};

// filterByBody
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list of the emails that have the first email in their body
// use inBody

var filterByBody = function(checkedString, emailArray) {
    var emailMatches = [];
    var count = 0;
    while (count < emailArray.length) {
        if (inBody(checkedString, emailArray[count])) {
            emailMatches.push(emailArray[count]);
        }
        count++;
    }
    return emailMatches;
};