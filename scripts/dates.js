
// enter ("Month day, year") for dates
//Dates are here:
//https://portlandps.incidentiq.com/ Knowledge Base  [Year] Grading Reporting Timeline

YEAR1: "2026"
YEAR2: "2027"

var startDates = [
    new Date("August 26, " + YEAR1), // quarter 1
    new Date("November 2, " + YEAR1), // quarter 2
    new Date("January 27, " + YEAR2), // quarter 3
    new Date("April 12, " + YEAR2), // quarter 4
]

var endDates = [
    new Date("October 28, " + YEAR1), // quarter 1
    new Date("January 22, " + YEAR2), // quarter 2
    new Date("April 7, " + YEAR2), // quarter 3
    new Date("June 8, " + YEAR2), // quarter 4
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

