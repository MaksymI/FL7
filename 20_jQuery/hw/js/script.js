$(function() {
    
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
        // while (--k) {
        //     var j = Math.floor(Math.random() * (k + 1)),
        //         tempk = newArr[k],
        //         tempj = newArr[j];
        //         newArr[k] = tempj;
        //         newArr[j] = tempk;
        // }
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
                // var div = $("<div id='foo'>test2</div>").hide();
                $(this).replaceWith(newItems[i]);
                $(items[i]).fadeIn("slow");
            });
        }
    }

    function win() {
        var currentItems = $(".grid").children().toArray();
        for (let i=0; i < items.length; i++) {
            $(currentItems[i]).fadeOut("slow", function(){
                // var div = $("<div id='foo'>test2</div>").hide();
                $(this).replaceWith(items[i]);
                $(currentItems[i]).fadeIn("slow");
            });
        }
    }

});
