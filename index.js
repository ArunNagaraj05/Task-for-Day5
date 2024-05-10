// Class holdsperson details:
class Person{
    constructor(name,age,height,weight,mobile,city,education,email){
          this.name=name
          this.age=age
          this.height=height
          this.weight=weight
          this.mobile=mobile
          this.city=city
          this.education=education
          this.email=email
    }
    displayPerson(){
        console.log(this.name,this.age,this.height,this.weight,this.mobile,this.city,this.education,this.email)
    }
}
let details = new Person("Arun","25","5'9","72","8776454422","Erode","BE","arun@gmail.com")
details.displayPerson()


//Calculate uber price:
class UberPrice{
    constructor(boarding_point,dropping_point,kilometer,estimate_time,Peak_hoursPrice=30,perKMPrice=10,peak_hours="yes"){
          this.starting_point=boarding_point
          this.ending_point=dropping_point
          this.distance=kilometer
          this.time=estimate_time
          this.peak_hours=peak_hours
          this.perKMPrice=perKMPrice
          this.Peak_hoursPrice=Peak_hoursPrice
    }
    diplayPrice(){
        if(this.peak_hours==="yes"){
            console.log(`Started at ${this.starting_point} destination at ${this.ending_point} Price is ${Number(this.distance)*Number(this.perKMPrice)+Number(this.Peak_hoursPrice)}rs esitmate time to reach destination ${this.time}`)
        }else{
            console.log(`Started at ${this.starting_point} destination at ${this.ending_point} Price is ${this.distance*this.perKMPrice}rs esitmate time to reach destination ${this.time}`)
        }
    }
}
let priceDetails = new UberPrice("Shollinganallur","Koyembedu","17","45mins")
priceDetails.diplayPrice()

//Class holds movie details:
class Movie{
    constructor(title,studio,rating="PG"){
         this.movieTitle=title
         this.ProductionCompany=studio
         this.rating=rating
    }
    displayMovieDetails(){
       console.log(`The title of the movie is ${this.movieTitle} it is produced by ${this.ProductionCompany} and the rating of the movie is ${this.rating}`)
    }
}
let movieDetails = new Movie("Casino Royale","Eon Productions","PG­13")
movieDetails.displayMovieDetails()

//Class holds circle details
class Circle{
    constructor(radius,colour){
     this.radius=radius
     this.colour=colour
    }
  displayCircle(){
    console.log(`Area of the circle is ${22/7*(this.radius*this.radius)} Circumference of the circle is ${2*(22/7)*this.radius} and colour of the circle is ${this.colour}`)
  }
}
let cir = new Circle(1.0,"Red")
cir.displayCircle()
