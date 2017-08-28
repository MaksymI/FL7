$(function() {

    var timer;
    var start;
    var steps = 0;
    var pointFrom;
    var pointTo;
    var newItems;

    $.fn.swapWith = function(that) {
        var $this = this;
        var $that = $(that);
      
        // create temporary placeholder
        var $temp = $("<div>");
      
        // 3-step swap

        // $this.fadeOut("slow", function(){
        //         var tmp = this;
        //         $(tmp).before($temp);
        //         $(tmp).fadeIn("slow");
        //     });
        $this.before($temp);
        $that.before($this);
        $temp.after($that).remove();
      
        return $this;
      }

  

    $('.grid').click(function(event) {
        steps++;
        // console.log(event);
        pointFrom = null;
        pointTo = null;
       
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

        $(pointFrom).swapWith(pointTo);


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

        
    function newGame() {

        newItems = shuffle(items);
                
        for (let i=0; i < items.length; i++) {
            $(items[i]).fadeOut("slow", function(){
                $(this).replaceWith(newItems[i]);
                $(items[i]).fadeIn("slow");
            });
        }

        start = new Date;
        // var elapsedInSec = parseInt((new Date - start) / 1000);
        // var elapsedInMinSec = `${(parseInt((new Date - start) / 1000))/60} : ${(parseInt((new Date - start) / 1000))%60}`
        
        timer = setInterval(function() {
            $('.clock').text(`${parseInt((parseInt((new Date - start) / 1000))/60)} : ${(parseInt((new Date - start) / 1000))%60}`);
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
