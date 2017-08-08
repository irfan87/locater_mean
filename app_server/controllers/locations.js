module.exports.homeList = function(req, res){
	res.render('locations-list', {
		title: 'Loc8r - Find a place to work with Wi-Fi',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find places to work with Wi-Fi near you!'
		},
		sidebar: "Looking for Wi-Fi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
		locations: [{
			name: 'Startcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot Drinks', 'Food', 'Wi-Fi'],
			distance: '100m'
		}, {
			name: 'Coffee Hero',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 4,
			facilities: ['Hot Drinks', 'Food', 'Wi-Fi'],
			distance: '200m'
		}, {
			name: 'Burger Queen',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 1,
			facilities: ['Food', 'Wi-Fi'],
			distance: '150m'
		}, {
			name: 'Kopitiam Kita',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 5,
			facilities: ['Hot Drinks', 'Food'],
			distance: '150m'
		}]
	});
}

module.exports.locationInfo = function(req, res){
	res.render('location-info', {title: 'Location info'});
}

module.exports.addReview = function(req, res){
	res.render('location-review-form', {title: 'Add review'});
}