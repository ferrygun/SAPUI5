sap.ui.controller("sap.ui.demo.myFiori.view.DMaterial", {

	onNavButtonTap: function() {
		app.ref.AppView.splitApp.backMaster();

	},


    onInit : function() {  
		var oBus = new sap.ui.getCore().getEventBus();  
		oBus.subscribe("nav", "to", this.handleFetchDetails, this);  
	},  
		
	handleFetchDetails : function(sCannelID, sEvtId, oData) {  
		var oContext = oData.data.context; 

		console.log('oContext:' + oContext);
		if (oContext) {  
			this.getView().setBindingContext(oContext);  
		}  
	}  
  
});  

