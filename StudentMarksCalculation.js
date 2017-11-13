window.onload = function() 
{

  // function to calculate student marks
  function CalculateStudentMarks(maths, physics, chemisty ,row) {
	
	// if atleast one of the subjects is less than 35 then fail status is set to false
	var failStatus = maths < 35 || physics < 35 || chemisty < 35;
	var grade;

	if(failStatus)
		grade = "FAIL";
	else
		grade = "PASS";

	// Calculate total marks and grade
	var totalMarks = maths + physics + chemisty;
	var average = Math.round(totalMarks / 3 , 2); 

	// Update the Grade, TotalMarks and average of a specific row
	if(row !== '')
	{
		row.cells[4].innerText = totalMarks;
		row.cells[5].innerText = Number(average);
		row.cells[6].innerHTML = grade;

		// add red background color if student fails else add green
		row.cells[6].style.backgroundColor = grade === "PASS" ? "#4CAF50" : "red";
	}

  }

// anonymous function to iterate through html table
this.calculateGrades = function() {
	var table = document.getElementById('studentstable');

	// iterate from 1st row (exclude headings)
	for (var i = 1, row; row = table.rows[i]; i++) {
    
    	// as subjects marks are in 2nd, 3rd and 4th columns only get those cell values
    
    	// Convert string to Number Use ? operator to check if cell data is not a NaN
    	// if cell data is NaN then consider it as 0
   		maths = Number(row.cells[1].innerText) ? Number(row.cells[1].innerText) : 0;
   		physics = Number(row.cells[2].innerText) ? Number(row.cells[2].innerText) : 0;
   		chemisty =  Number(row.cells[3].innerText) ? Number(row.cells[3].innerText) : 0;

   		// Pass each subject marks and that row to function that calculates scores and update html table
   		CalculateStudentMarks(maths, physics, chemisty, row);  		 	

    }  
  }


}


 
 