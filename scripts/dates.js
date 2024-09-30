
// enter ("Month day, year") for dates
//Dates are here:
//https://support.pps.net/support/solutions/articles/8000045931

var startDates = [
    new Date("August 27, 2024"), // quarter 1
    new Date("November 5, 2024"), // quarter 2
    new Date("January 29, 2025"), // quarter 3
    new Date("April 8, 2025"), // quarter 4
]

var endDates = [
    new Date("October 31, 2024"), // quarter 1
    new Date("January 24, 2025"), // quarter 2
    new Date("April 3, 2025"), // quarter 3
    new Date("June 10, 2025"), // quarter 4
]

var currentSchoolYear = endDates[3].getFullYear() // year that appears in sis_course_id for each course

var selectedTerm // this is set by the term selector

function filterDate(date) {
    let filteredDate = date
    switch(selectedTerm) {
        case "Quarter 1":
            if (date.getTime() < startDates[0].getTime()) filteredDate = startDates[0]
            if (date.getTime() > endDates[0].getTime()) filteredDate = endDates[0]
            break
        case "Quarter 2":
            if (date.getTime() < startDates[0].getTime()) filteredDate = startDates[0]
            if (date.getTime() > endDates[1].getTime()) filteredDate = endDates[1]
            if (endDates[0].getTime() < date.getTime() && date.getTime() < startDates[1].getTime()) filteredDate = endDates[0]
            break
        case "Quarter 3":
            if (date.getTime() < startDates[2].getTime()) filteredDate = startDates[2]
            if (date.getTime() > endDates[2].getTime()) filteredDate = endDates[2]
            break
        case "Quarter 4":
            if (date.getTime() < startDates[2].getTime()) filteredDate = startDates[2]
            if (date.getTime() > endDates[3].getTime()) filteredDate = endDates[3]
            if (endDates[2].getTime() < date.getTime() && date.getTime() < startDates[3].getTime()) filteredDate = endDates[2]
            break
    }
    return filteredDate
}

