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
      listView.init();
      listView.render();

      sortView.init();
      sortView.render();

      briefView.init();

      scoresView.init();
      scoresView.render();

      profileView.init();
    },

    getAllNames: function(){
      return model.allPersons.map(element => element.name);
    },

    getAllScores: function(){
      return model.allPersons.map(element => element.score);
    },

    setCurrentPerson: function(index){
      model.currentPerson = model.allPersons[index];
      this.viewCurrentProfile();
    },

    getCurrentPerson: function(){
      return model.currentPerson;
    },

    viewCurrentProfile: function(){
      profileView.render();
      briefView.render();
    },

    setCurrentPersonScore: function(value){
      model.currentPerson.score = value;
      this.viewCurrentProfile();
      scoresView.render();
    },

    sortUpPersons: function(){
      model.allPersons.sort((a, b) => a.name.localeCompare(b.name));
      sortView.render();
      listView.render();
      scoresView.render();
    },

    sortDownPersons: function(){
      model.allPersons.sort((a, b) => b.name.localeCompare(a.name));
      sortView.render();
      listView.render();
      scoresView.render();
    }
};

var listView = {
    init: function(){
      this.names = $('.names');
      this.handleClicks();
    },

    render: function(){
      var list = '';
      control.getAllNames().forEach((element) => {
       list += `<li>${element}</li>`
      });
      this.names.html(list);
    },

    handleClicks: function(){
      this.names.click((event) => {
        var id = $(event.target).index();
        control.setCurrentPerson(id);
      });
    }
};


var scoresView = {
    init: function(){
      this.scores = $('.scores');
      this.handleClicks();
    },

    render: function(){
      var scoresList = '';
      control.getAllScores().forEach( element => 
      scoresList += `<li>
                     <input class='score-input hidden' value=${element}>
                     <span>${element}</span>
                     </li>`
      );
      this.scores.html(scoresList);
    },

    handleClicks: function(){
      this.scores.on('click', 'li', function(e){
        var $currentLi = $(e.target);
        var $currentSpan = $currentLi.find('span');
        var $currentInput = $currentLi.find('input.score-input');
        var currentIndex = $currentLi.index();
        if(!$currentInput.is('.hidden')) {
            return false;
        }
        control.setCurrentPerson(currentIndex);
        
        $currentSpan.addClass('hidden');
        $currentInput.removeClass('hidden').focus();
      });

      this.scores.on('focusout .score-input', function(e){
        var newScore = $(e.target).val();
        control.setCurrentPersonScore(newScore);
        $(e.target).toggleClass('hidden');
        $(e.target).siblings().toggleClass('hidden');
      });
    }
};

var profileView = {
    init: function(){
      this.profile = $('.profile');
    },

    render: function(){
      var currentPerson = control.getCurrentPerson();
      var innerhtml = `<img src="${currentPerson.photoUrl}"></img>
                       <h3>${currentPerson.name}</h3>
                       <p>Score: ${currentPerson.score}</p>`
      this.profile.html(innerhtml);
    }
};

var briefView = {
    init: function(){
      this.info = $('.brief');
    },

    render: function(){
      var currentPerson = control.getCurrentPerson();
      var innerhtml = `<p>Selected person is <b>${currentPerson.name}</b>. Person's score is: ${currentPerson.score}</p>`
      this.info.html(innerhtml);
  }
};

var sortView = {
    init: function(){
      this.sort = $('.sort');
      this.handleClicks();
    },

    render: function(){
      var list = '';
      control.getAllNames().forEach((element) => {
      list += `<li><div class="arrow up"></div><div class="arrow down"></div></li>`
      });
      this.sort.html(list);
    },

    handleClicks: function(){
    
      this.sort.on('click', '.up', (event) => {
        control.sortUpPersons();
      });
      this.sort.on('click', '.down', (event) => {
        control.sortDownPersons();
      });
    }
};

control.init();