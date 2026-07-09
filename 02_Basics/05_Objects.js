const course = {
    coursename: "backend in js",
    price: "999",
    courseInstructor: "Deeptanshu"
}

// course.courseInstructor
//total fine to write like this but if want to write a clean code and reduce the number of time writing the same thing. use this.....

const {courseInstructor: instructor, price, coursename} = course
//use this syntax

console.log(instructor)


//JSON architecture or frame
[
    {},
    {},
    {}
]