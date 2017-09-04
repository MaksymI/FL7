var model = {
    currentPerson: {},
    allPersons: [
      {
        name: 'Lily Butler',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
      },
      {
        name: 'Waller Perry',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
      },
      {
        name: 'Tammi Donovan',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
      },
      {
        name: 'Doreen Flowers',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
      },
      {
        name: 'Price Pace',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
      },
      {
        name: 'Larson Maldonado',
        score: 1,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
      },
      {
        name: 'Berg Bolton',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
      },
      {
        name: 'Mack Lott',
        score: 3,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
      },
      {
        name: 'Rosanna Mcleod',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
      },
      {
        name: 'Rosalie Rice',
        score: 1,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
      },
      {
        name: 'Virginia Buchanan',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
      },
      {
        name: 'Lorna Stein',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
      },
      {
        name: 'Rosalie Steele',
        score: 3,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
      },
      {
        name: 'Wilcox Boyd',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
      },
      {
        name: 'Ollie Rice',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
      }
    ]
};

var control = {
    init: function(){
      listView.render();
      scoresView.render();
      listView.handleClicks();
      scoresView.handleClicks();
    },
    getAllNames: function(){
    },
    getAllScores: function(){
    },
    setCurrentPerson: function(index){
      model.currentPerson = Object.assign({}, model.allPersons[index]);
      profileView.render();
    },
    getCurrentPerson: function(){
      return model.allPersons.map(el=>el.name).indexOf(model.currentPerson.name);
    },
    viewCurrentProfile: function(){
    },
    setCurrentPersonScore: function(value){
      model.currentPerson.score = value;
      model.allPersons[control.getCurrentPerson()].score = value;
      profileView.render();
    }
};

var listView = {
    init: function(){
    
    },
    render: function(){
      model.allPersons.forEach((element)=> $('.names').append( `<li>${element.name}</li>` ));
    },
    handleClicks: function(){
      $('.names').click(function(event){
        var id = $(event.target).index();
        control.setCurrentPerson(id);
      });
    }
};


var scoresView = {
    init: function(){
    },
    render: function(){
      model.allPersons.forEach((element)=> $('.scores').append( `<li><input class='score-input hidden' value=${element.score}><span>${element.score}</span></li>` ));
    },
    handleClicks: function(){
      var tglHidden = function(evt){
        $(evt.target).find('input').toggleClass('hidden');
        $(evt.target).find('span').toggleClass('hidden');
      };
      $('.scores').click(function(event){
        var id;
        if (event.target.childNodes.length == 0) {
          id = $(event.target.parentNode).index();
        } else {
          id = $(event.target).index();
        }
        control.setCurrentPerson(id);
        tglHidden(event);
      });
      $('input').mouseout(function(){
        control.setCurrentPersonScore($(this).val());
        $(this).toggleClass('hidden');
        $(this).siblings().toggleClass('hidden');
        $(this).siblings().text(`${model.currentPerson.score}`);

      });
    }
};


var profileView = {
    init: function(){
      $('.profile').html('');
    },
    render: function(){
      $('.profile').replaceWith(`<div class="profile">
                            <img src="${model.currentPerson.photoUrl}"></img>
                            <h3>${model.currentPerson.name}</h3>
                            <p>${model.currentPerson.score}</p>
                            </div>`);
    }
};

control.init();