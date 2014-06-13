sap.ui.controller("sap.ui.demo.myFiori.view.App", {
	
	onListItemTap: function(viewName) {
		app.ref.AppView.splitApp.toDetail(viewName);
	},

	onInit : function() {

			
				
		// subscribe to event bus
		var bus = sap.ui.getCore().getEventBus();
		bus.subscribe("nav", "to", this.navToHandler, this);
		bus.subscribe("nav", "back", this.navBackHandler, this);
	},

	navToHandler : function(channelId, eventId, data) {
		if (data && data.id) {
			console.log('data.id:' + data.id);
			console.log('data.data.context: ' + data.data.context);


			app.ref.AppView.splitApp.to(data.id, data.data.context);
			//app.ref.AppView.splitApp.toDetail("dsalesorder");

			// lazy load view
			/*if (this.splitApp.getPage(data.id) === null) {
				jQuery.sap.log.info("now loading page '" + data.id + "'");
				console.log("now loading page '" + data.id + "'");
				this.app.addPage(sap.ui.jsview(data.id, "sap.m.mvc." + data.id));
			}

			console.log("data.data.context: '" + data.data.context);
			// Navigate to given page (include bindingContext)
			this.app.to(data.id, data.data.context);
			*/


		} else {
			jQuery.sap.log.error("nav-to event cannot be processed. Invalid data: " + data);
			console.log("nav-to event cannot be processed. Invalid data: " + data);
		}
	},

	navBackHandler : function() {
		app.ref.AppView.splitApp.back();
	}


});
