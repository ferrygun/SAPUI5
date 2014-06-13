sap.ui.controller("sap.ui.demo.myFiori.view.DSalesOrder", {

	onNavButtonTap: function() {
		app.ref.AppView.splitApp.backMaster();
	},
  

	materialListTap: function(evt){  
		var bindingContext = evt.getSource().getBindingContext(); 


		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", { 
			id : "dmaterial",
			data : {
				context : bindingContext
			}
		});

		
		/*this.getView().getParent().to("dmaterial", {  
            context: oEvent.getSource().getBindingContext()  
        }); */ 


	}   
});  

