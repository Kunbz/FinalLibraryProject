var namesOfStudents=[];   // used to hold x amount of names of students, so should be empty
var namesOfBooks =[
	{name:"The Emperor's Children by Claire Messud", qty:15, image:"ImagesForBooks/3648.jpg"},
	{name:"Invisible Man by Ralph Ellison", qty:15, image:"ImagesForBooks/invisible man.jpg"},
	{name:"Giovanni's Room by James Baldwin", qty:15, image:"ImagesForBooks/groom.jpg"},
	{name:"Go Tell It On The Mountain by James Baldwin", qty:15, image:"ImagesForBooks/9780375701870.jpeg"},
	{name:"You Cant Touch My Hair: And Other Things I Still Have To Explain by Phoebe Robinson", qty:15, image:"ImagesForBooks/9780143129202.jpeg"},
	{name:"The Subtle Art Of Not Giving A Fuck by Mark Manson", qty:15, image:"ImagesForBooks/51zyjmrT1yL.jpg"},
	{name:"The Hate You Give by Angie Thomas", qty:15, image:"ImagesForBooks/171216.jpg"},
	{name:"Sister Outsider: Essays & Speeches by Audre Lorde", qty:15,image:"ImagesForBooks/sisteroutsider.jpeg"},
	{name:"I Know Why The Caged Bird Sings by Maya Angelou", qty:15, image:"ImagesForBooks/I know why the caged bird sings.jpg"},
	{name:"The Misadventures of Awkward Black Girl by Issa Rae", qty:15, image:"ImagesForBooks/issa rae.jpg"},
	{name:"The Color Purple by Alice Walker", qty:15, image:"ImagesForBooks/m-2368.jpg"},
	{name:"Women, Race and Class by Angela V.Davis", qty:15, image:"ImagesForBooks/635635.jpg"},
	{name:"Assata: A Biography", qty:15, image:"ImagesForBooks/100322.jpg"},
	{name:"Americanah by Chimamanda N. Adichie", qty:15, image:"ImagesForBooks/americanah.jpg"},
	{name:"Half Of A Yellow Sun by Chimamanda N. Adichie", qty:15, image:"ImagesForBooks/18749.jpg"},
	{name:"Akata Witch by Nkechi Okafor", qty:15, image:"ImagesForBooks/9780142420911.jpeg"},
	{name:"Beloved by Toni Morrison", qty:15, image:"ImagesForBooks/beloved2.jpg"},
	{name:"We Should All Be Feminists by Chimamanda N. Adichie", qty:15, image:"ImagesForBooks/feminists.jpg"},
	{name:"The Autobiography of Malcolm X as told by Alex Haley", qty:15, image:"ImagesForBooks/the-autobiography-of-malcolm-x-cover.jpg"},
	{name:"That Thing Around Your Neck by Chimamanda N. Adichie", qty:15, image:"ImagesForBooks/the-thing-around-your-neck1.jpg"},
	{name:"Things Fall Apart by Chinua Adichie", qty:15, image:"ImagesForBooks/9780141186887.jpg"}
];  //hold 21 names of books// should not be empty
		
		var select=document.getElementById("bookName"); // used the id book name to affect the id
		for(var i=0; i<namesOfBooks.length; i++){ //this is a forloop goimg through the array
		   var el= document.createElement("option");// i used the option element because i am trying to make options
			el.textContent=namesOfBooks[i].name;// the .name is cause im trying to get the names in the object
			el.value = namesOfBooks[i].name;
			select.appendChild(el);
		 }


		function updateInfo(){ // this is for checkout 
				var name = document.getElementById("studentName").value;
				var title = document.getElementById("bookName").value;
				for (var i=0; i<namesOfBooks.length; i++){
					if (title==namesOfBooks[i].name) { //this is basically comparing the title and the name ==
						if (namesOfBooks[i].qty >0) {
							namesOfBooks[i].qty-- //once a student takes a book / reduce qty of book in the library
							var student = {
								name: name, // object is name and name is value i'm grtting from the input box 
								time:new Date().toString(), // this line is a variable in JS
								book:title
							}
							namesOfStudents.push(student)// pushing the student(object) into the student array
							document.getElementById("display").innerHTML += "<br>" + student.name + " has taken " + student.book + " at " + student.time + " from the library ";
						}
						else{ // means theres no condition
							document.getElementById("display").innerHTML += "Book is unavailable" + "<br>";
						}
						break; // stop looping through the array
					}

				}
			}


			function updateReturn(){ //student is giving back book borrowed
				var name = document.getElementById("studentName").value;
				var title = document.getElementById("bookName").value;
				var studentIndex;
				for(var i= 0; i<namesOfStudents.length; i++){
					if(title==namesOfStudents[i].book && namesOfStudents[i].name==name){ //comparing 
						studentIndex=i; //i means the index you want to start from

						break; // end loop

					}

				}

				if(studentIndex == undefined){
					document.getElementById("display").innerHTML += "<br>" + name +" "+ 'does not have the book'; //if student doesnt have the book print out this message/ student can retiurn book they havet taken
				}else{
					var student = namesOfStudents.splice(studentIndex,1) //basically deletes
				// console.log(student)
				
					document.getElementById("display").innerHTML += "<br>" + student[0].name + " has returned " + student[0].book + " at " + student[0].time + " to the library ";
			
				}
				

				
			}

			function updateAdd(){ //sophia is adding more books to the library
				var addedNewBook = document.getElementById("newBook").value;
				var newBook ={
					name: addedNewBook,
					qty:15,

				}
				namesOfBooks.push(newBook)
			    document.getElementById("display").innerHTML += "<br>" + " Sophia added " + newBook.name + " at " + new Date().toString() + " to the library ";

			    var el= document.createElement("option");// i used the option element because i am trying to make options
				el.textContent=newBook.name;// the .name is cause im trying to get the names in the object
				el.value = newBook.name;
				select.appendChild(el);
			}
				
				function displayImages(){ // function to display image
					
					var bookName =document.getElementById("bookName").value
					for (var i =0; i<namesOfBooks.length; i++) {
						if (namesOfBooks[i].name==bookName) {
							document.getElementById("displayImage").src = namesOfBooks[i].image// to call image
						}
					}
				}
					
			
		
					

				

























// for qty
// so your array is name of books then to get the qty you do names of books [i].qty















//['book1', 'book2', 'book3']
//[{name:'book1', q:15}, {name:'book2', q:6}, ]

// var select = document.getElementById("selectNumber"); 
// var options = ["1", "2", "3", "4", "5"]; 

// for(var i = 0; i < options.length; i++) {
//     var opt = options[i];
//     var el = document.createElement("option");
//     el.textContent = opt;
//     el.value = opt;
//     select.appendChild(el);
// }​
// var namesOfBooks =["The Emperor's Children by Claire Messud","What She Saw by Lucinda Rosenfield","Giovanni's Room by James Baldwin","Go Tell It On The Mountain by James Baldwin","The Hate You Give by Angie Thomas","The Subtle Art Of Not Giving A Fuck by Mark Manson","The Hate You Give by Angie Thomas","Sister Outsider: Essays & Speeches by Audre Lorde","I Know Why The Caged Bird Sings by Maya Angelou","The Misadventures of Awkward Black Girl by Issa Rae","The Color Purple by Alice Walker","Women, Race and Class by Angela V.Davis","Assata: A Biography","Americanah by Chimamanda N. Adichie","Half Of A Yellow Sun by Chimamanda N. Adichie","Akata Witch by Nkechi Okafor","Beloved by Toni Morrison","We Should All Be Feminists by Chimamanda N. Adichie","The Autobiography of Malcolm X as told by Alex Haley","Waiting to Exhale by Terry McMillian","Things Fall Apart by Chinua Adichie"];  //hold 20 names of books// should not be empty
// var select=document.getElementById("BookName");
// for(var i=0; i<namesOfBooks.length; i++){
// 	var el= document.createElement("option");// i used the option element because i am trying to make options
// 	el.textContent=namesOfBooks[i];
// 	el.value = namesOfBooks[i];
// 	select.appendChild(el);
// }
// for the array namesOfBooks i changed to to objects to make it easier for me and add qty to it/ instead of making another array for objects
