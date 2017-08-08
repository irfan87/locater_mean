module.exports.homeList = function(req, res){
	res.render('locations-list', {
		title: 'Loc8r - Find a place to work with Wi-Fi',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find places to work with Wi-Fi near you!'
		},
		sidebar: "Looking for Wi-Fi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
		locations: [{
			name: 'Starcups',
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
	res.render('location-info', {
		title: 'Starcups',
		pageHeader: {
			title: 'Starcups'
		},
		sidebar: {
			context: 'is on Loc8r because it has accessible Wi-Fi and space to sit down with your laptop and get some work done.',
			callToAction: 'If you have been and you like it - or if you don\'t - please leave a review to help other just like you.'
		},
		location: {
				name: 'Starcups',
				address: '125 High Street, Reading, rg6 1PS',
				rating: 3,
				facilities: ['Hot Drinks', 'Food', 'Wi-Fi'],
				coords: {lat: 51.455041, lng: -0.9690884},
				openingTimes: [{
					days: 'Monday - Friday',
					opening: '7:00am',
					closing: '7:00pm',
					closed: false
				},{
					days: 'Saturday',
					opening: '8:00am',
					closing: '5:00pm',
					closed: false
				}, {
					days: 'Sunday',
					closed: true
				}],
				reviews: [{
					author: 'Simon Holmes',
					rating: 5,
					timestamp: '16 April 2017',
					reviewText: 'What a great place. I can\'t say enough good things about'
				}, {
					author: 'Charlie Chaplin',
					rating: 4,
					timestamp: '15 June 2017',
					reviewText: 'It was okay. Coffee wasn\'t great, but the Wi-Fi was fast!'
				}]
			}
	});
}

module.exports.addReview = function(req, res){
	res.render('location-review-form', {title: 'Add review'});
}