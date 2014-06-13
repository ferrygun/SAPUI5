sap.ui.controller("sap.ui.demo.myFiori.view.SalesOrder", {

	onNavButtonTap: function() {
		app.ref.AppView.splitApp.backMaster();

	},

	submitLPForm: function() {
		var view = this.getView();
		if (view.oLPRB1_SO.getSelected()) {
			app.ref.AppView.splitApp.toDetail("dsalesorder");
		} 
		
		
	}
});
