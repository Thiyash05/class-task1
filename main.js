// Write a JavaScript program to create a class 
// called "Person" with properties for name, age and country. 
// Include a method to display the person's details. 
// Create two instances of the 'Person' class and display their details.

 class Person{
	constructor(name,age,country){
		this.name=name;
		this.age=age;
		this.country=country;
	}
	
	display(){
		console.log(`i am ${this.name}, my age ${this.age}, my country ${this.country}`);
	}
 }
 
 let ans=new Person("santhiya",20,"India");
 ans.display()
 
 