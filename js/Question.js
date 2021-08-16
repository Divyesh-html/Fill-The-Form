class Question {

  constructor() {
    this.title = createElement('h1')
    this.input12 = createElement('h4')
    this.input22= createElement('h4')
    this.input1 = createInput("");
   //Create a input box to enter the number
this.input2 = createInput("")



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
this.question = createElement('h2')
this.option1 = createElement('h3')
this.option2 = createElement('h3')
this.option3 = createElement('h3')
this.option4 = createElement('h3')


    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.input2.hide()
    this.input12.hide()
    this.input22.hide()
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.question.hide()
    this.option1.hide()
    this.option2.hide()
    this.option3.hide()
    this.option4.hide()




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- Who found out about gravity?");
    this.option1.html("A: Isaac Newton")
    this.option2.html("B: Albert Einstein")
    this.option3.html("C: Galileo")
    this.option4.html("D: Nikola Tesla")
    this.input12.html("Enter Your Name Below👇")
    this.input22.html("Enter Correct Option No Below👇")

    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 270);
    this.input2.position(350,270)
    this.button.position(290, 300);
    this.question.position(100,80)
    this.option1.position(100,120)
    this.option2.position(100,140)
    this.option3.position(100,160)
    this.option4.position(100,180)
    this.input12.position(150,226)
    this.input22.position(350,226)

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank you! Your Answer Has Been Submitted")
      this.message.position(200,350)
    
    })


  }
}
