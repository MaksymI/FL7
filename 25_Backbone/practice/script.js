var President = Backbone.Model.extend({
    defaults: {
        rate: 0,
        name: 'John', // defaults are overwritten with whatever passed on instantiation
        surname: ''
    },
    validate: function( attributes ){
        if( attributes.surname === '' ){
            // throw new Error('surname can not be a empty')
            return 'surname can not be a empty';
        }
        if( attributes.name === '' ){
            return 'name can not be a empty';
        }
    },

});


var PresidentsCollection = Backbone.Collection.extend({
    // with 'model' property set, raw data converted as a model of a proper type
    model: President
});

var presidentsCollection = new PresidentsCollection ([
    { name: 'George', surname: 'Washington', rate: 0 },
    { name: 'Barack', surname: 'Obama', rate: 5 },
    { name: 'Bill', surname: 'Clinton', rate: 4 }
]);



presidentsCollection.push(new President({ name: 'Petro', surname: 'Poroshenko', rate: 9}));

presidentsCollection.comparator = 'rate';

presidentsCollection.sort();



var PresidentsCollectionView = Backbone.View.extend({
    tagName: 'tbody',
    render: function(){
        var el = this.$el;
        el.html(`<tr> 
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Rate</th>
                 </tr>`);
        this.model.models.forEach(function(element) {
            el.append( new PresidentView({ model: element }).render().$el );
        });
        return this;
    }
});

var PresidentView = Backbone.View.extend({
    tagName: 'tr',
    render: function(){
      this.$el.html('<td>' + this.model.get('name') + '</td>' + '<td>' + this.model.get('surname') + '</td>' + '<td>' + this.model.get('rate') + '</td>');
      return this;
    },
    initialize: function(atr){
        var that = this;
        atr.model.on('change', function(){
            that.render();
        });
    }
});

var presidentsCollectionView = new PresidentsCollectionView({ model: presidentsCollection });

$('#app').html( presidentsCollectionView.render().$el );


var FormView = Backbone.View.extend({
    initialize: function(presCollection){
        var name = $('#name')[0];
        var lastname = $('#lastname')[0];
        var rate = $('#rate')[0];
        $('#add').on('click', function(event){
            presCollection.model.models.push(new President ({ name: name.value, surname: lastname.value, rate: rate.value}));
            presCollection.render();
            name.value = '';
            lastname.value = '';
            rate.value = '';
        });
        $('#reset').on('click', function(event){
            name.value = '';
            lastname.value = '';
            rate.value = '';
        });
    }
});

var formView = new FormView (presidentsCollectionView);
