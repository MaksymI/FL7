$(function() {

    var timer;
    var start;
    var steps = 0;
    var pointFrom;
    var pointTo;

    $('.grid').click(function(event) {
        steps++;
        // console.log(event);
       
        if (event.target.children.length === 0) {
            pointFrom = event.target.parentNode;
        } else {
            pointFrom = event.target;
        }
        if (pointFrom.previousElementSibling && pointFrom.previousElementSibling.id == 'white') {
            pointTo = pointFrom.previousElementSibling;
        } else if(pointFrom.nextElementSibling && pointFrom.nextElementSibling.id == 'white') {
            pointTo = pointFrom.nextElementSibling;
        } else if(pointFrom.nextElementSibling && pointFrom.nextElementSibling.nextElementSibling && pointFrom.nextElementSibling.nextElementSibling.nextElementSibling && pointFrom.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling && pointFrom.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.id == 'white') {
            pointTo = pointFrom.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        } else if(pointFrom.previousElementSibling && pointFrom.previousElementSibling.previousElementSibling && pointFrom.previousElementSibling.previousElementSibling.previousElementSibling && pointFrom.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling && pointFrom.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.id == 'white') {
            pointTo = pointFrom.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
        } 
        console.log(pointTo);

        $(pointFrom).fadeOut("slow", function(){
            // $(this).replaceWith(pointTo);
            $(pointFrom).fadeIn("slow");
        });

      });
      
    
    $('.new-game').on("click", newGame);
    $('.win').on("click", win);

    var items = $(".grid").children().toArray();
    var plainItems = [].concat(items);

    function shuffle(arr) {
        var newArr = [];
        var k = arr.length;
        for (var i=0; i < k; i++) {
            newArr.push($(arr[i]).clone()[0]);
        }
        while (--k) {
            var j = Math.floor(Math.random() * (k + 1)),
                tempk = newArr[k],
                tempj = newArr[j];
                newArr[k] = tempj;
                newArr[j] = tempk;
        }
        return newArr.reverse();
    }

    var newItems = shuffle(items);
    
    // $(items[0]).fadeOut("slow", function(){
    //     // var div = $("<div id='foo'>test2</div>").hide();
    //     $(this).replaceWith(newItems[0]);
    //     $(items[0]).fadeIn("slow");
    //  });
    //  $(items[1]).fadeOut("slow", function(){
    //     // var div = $("<div id='foo'>test2</div>").hide();
    //     $(this).replaceWith(newItems[1]);
    //     $(items[1]).fadeIn("slow");
    //  });

    //  $(items[2]).fadeOut("slow", function(){
    //     // var div = $("<div id='foo'>test2</div>").hide();
    //     $(this).replaceWith(newItems[2]);
    //     $(items[0]).fadeIn("slow");
    //  });

    //  $(items[3]).fadeOut("slow", function(){
    //     // var div = $("<div id='foo'>test2</div>").hide();
    //     $(this).replaceWith(newItems[3]);
    //     $(items[3]).fadeIn("slow");
    //  });
    //  $(items[4]).fadeOut("slow", function(){
    //     // var div = $("<div id='foo'>test2</div>").hide();
    //     $(this).replaceWith(newItems[4]);
    //     $(items[4]).fadeIn("slow");
    //  });

    
   
    function newGame() {
                
        for (let i=0; i < items.length; i++) {
            $(items[i]).fadeOut("slow", function(){
                $(this).replaceWith(newItems[i]);
                $(items[i]).fadeIn("slow");
            });
        }

        start = new Date;
        
        timer = setInterval(function() {
            $('.clock').text(parseInt((new Date - start) / 1000));
            $('.steps-num').text(steps);
        }, 500);
        
    }

    function win() {
        location.reload();
        // clearInterval(timer);
        // $('.clock').text('0');
        // start = new Date;
        // var currentItems = $(".grid").children().toArray();
        // for (let i=0; i < items.length; i++) {
        //     $(currentItems[i]).fadeOut("slow", function(){
        //         $(this).replaceWith(items[i]);
        //         $(currentItems[i]).fadeIn("slow");
        //     });
        // }
    }

});
