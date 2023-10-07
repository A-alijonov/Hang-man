let btn = document.querySelector('.btn');
let container = document.querySelector('.container-fluid2');
let container1 = document.querySelector('.container-fluid');
let words = document.querySelector('.words');
let letters = document.querySelectorAll('.nasa');
let time = document.querySelector('.p');
let score = document.querySelector('.pi');
let h3 = document.querySelector('.mod');
let h1 = document.querySelector('h1')
let showNumber = document.getElementById('showNumber');
let favDialog = document.getElementById('favDialog');
let number = document.getElementById('number');
let p = document.querySelector("p");
let c = document.getElementById("myCanvas");


let data = ['samar', 'bobur', 'oybek', 'diyor', 'abror', 'fayoz', 'abbos']

let word = data[Math.floor(Math.random() * data.length)];
    console.log(word);

    data.forEach(item => {
        p.innerHTML +=  "(" + " " + item  + ")" + ",";
        
    })
let minut = 0;
let second = 0;
let interval;
let scoreWords = 0;

btn.addEventListener('click', () => {
    container.style.display = 'flex'
    container1.style.display = 'none'


 interval = setInterval(() => {
       second++
       time.innerHTML = `${minut}m ${second}s`

       if(second == 60){
        second = 0;
        minut++;
        time.innerHTML = `${minut}m ${second}s`
    }
    }, 1000)

})


let i = word.length
let count = 0;
for(; i > 0; i--){
    words.innerHTML += `<div class="apple apple${count}"></div>`
    count += 1;
 
}
       
let boxes = document.querySelectorAll('.apple')
let complete = []
let wrong = 1
letters.forEach(item => {
    item.addEventListener('click', () => {
        item.style.visibility = 'hidden'
        let letter = item.attributes.data.nodeValue;
        let indexPlace = word.indexOf(letter.toLowerCase())
        let indexPlace2 = word.lastIndexOf(letter.toLowerCase());                                                                                                                                                                                       

        if(indexPlace == '-1' || indexPlace2 == '-1'){
            console.log(",");
            if(letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U'){
            }else{
                switch(wrong){
                    case 1:
                        drawLine([20, 140], [120, 140]) //line 1
                    break;
                    case 2:
                        drawLine([40, 140], [40, 20]) //line 2
                    break
                    case 3:
                        drawLine([20, 20], [200, 20]) //line 3
                     break
                     case 4:
                        drawSize()
                     break 
                     
                     case 5:
                        drawLine([180, 60], [180, 100])//line 4
                     break
                    case 6:
                    
                         drawLine([210, 90], [180, 64])//left arm
                     break 
                     case 7:
                         drawLine([180, 64], [145, 94])//right arm  
                     break
                     case 8:
                        drawLine([180, 100], [210, 120])//left leg                  
                     break
                    case 9:
                        drawLine([180, 100], [145, 120])//right leg
                    break
                    case 10:
                        drawLine([180, 20], [180, 50])//line 5
                        let ctx = c.getContext("2d");
                        ctx.clearRect(0, 0, c.width, c.height);
                        drawLine([20, 140], [120, 140]) //line 1
                        drawLine([40, 140], [40, 20]) //line 2
                        drawLine([20, 20], [200, 20]) //line 3
                        drawLine([180, 60], [180, 100])//line 4
                        drawLine([180, 100], [170, 120])//right leg
                        drawLine([180, 100], [190, 120])//left leg
                        drawLine([180, 65], [170, 95])//right arm 
                        drawLine([180, 60], [190, 95])//left arm
                        drawSize()
                        drawLine([180, 20], [180, 40])//line 5

                        
                      setTimeout(()=> {

                        let completeWorld = complete.join("")
                        if(word !== completeWorld){
                        boxes.forEach(item => {
                           item.classList.add("app2")
                             clearInterval(interval) 
                             favDialog.style.display = 'block';
                             let ctx = c.getContext("2d");
                             ctx.clearRect(0, 0, c.width, c.height);
                             h3.innerHTML = `(${word})`
                             favDialog.style.background = 'url("images.png")'
                             favDialog.style.backgroundRepeat = 'no-repeat'
                             favDialog.style.backgroundSize = '100% 100%'
        })
    }
                      }, 400)
                      wrong = 0;
                    break
                }

                wrong += 1


            }
            scoreWords = scoreWords - 100
            score.innerHTML = scoreWords
        }else if(indexPlace == indexPlace2){
            let apple = document.querySelector('.apple' + indexPlace)
            apple.innerHTML = letter;
            complete[indexPlace] = letter.toLowerCase()
            scoreWords = scoreWords + 200;
            score.innerHTML = scoreWords;
        }else{
            let apple1 = document.querySelector('.apple' + indexPlace);
            let apple2 = document.querySelector('.apple' + indexPlace2);
            apple1.innerHTML = letter;
            apple2.innerHTML = letter;
            complete[indexPlace] = letter.toLowerCase()
            complete[indexPlace2] = letter.toLowerCase()
            scoreWords = scoreWords + 400     
            score.innerHTML = scoreWords
        }


        setTimeout(()=> {
            let completeWorld = complete.join("")
            if(word == completeWorld){
                boxes.forEach(item => {
                   item.classList.add("app")
                   clearInterval(interval) 
                   favDialog.style.display = 'block';
                   let ctx = c.getContext("2d");
                   h1.innerHTML = 'You Won'
                   h1.style.color = 'green'
                   ctx.clearRect(0, 0, c.width, c.height);
                   h3.innerHTML = `${scoreWords}ball ${minut}m ${second - 1}s`;
                   wrong = 0;
                   favDialog.style.background = 'url("4.jfif")'
                   favDialog.style.backgroundRepeat = 'no-repeat'
                   favDialog.style.backgroundSize = '100% 100%'
                })
            }
    
        }, 300)
    })

})

let back = document.querySelector(".back")

let new1 = document.querySelector(".new")

new1.addEventListener('click', () => {
    favDialog.style.display = 'none'
    console.log("dsf");
    data = ['samar', 'bobur', 'oybek', 'diyor', 'abror', 'fayoz', 'abbos']
 
    word = data[Math.floor(Math.random() * data.length)];
    console.log(word);

    let i = word.length
    let count = 0;
    words.innerHTML = ''

    for(; i > 0; i--){
        words.innerHTML += `<div class="apple apple${count}"></div>`
        count += 1;
 
    }

    letters.forEach(item => {
          item.style.visibility = 'visible'
    })

    minut = 0;
    second = 0;
    scoreWords = 0;

    score.innerHTML = scoreWords


    interval = setInterval(() => {
        second++
        time.innerHTML = `${minut}m ${second}s`
 
        if(second == 60){
         second = 0;
         minut++;
         time.innerHTML = `${minut}m ${second}s`
     }
     }, 1000)
})


function drawLine(moveTo, lineTo){
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(...moveTo);
    ctx.lineTo(...lineTo);
    ctx.strokeStyle = "white";
    ctx.lineWidth = "3";
    ctx.stroke();
}







function drawSize(){
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(180, 50, 12, 0, 2 * Math.PI);
    ctx.stroke();
}


