sap.ui.jsview("sap.ui.demo.myFiori.view.App", {

	getControllerName: function () {
		return "sap.ui.demo.myFiori.view.App";
	},
	
	createContent: function (oController) {

		jQuery.sap.declare("app.ref.AppView"); 
		app.ref.AppView = this;
		
		this.splitApp = new sap.m.SplitApp();
		
		var menu = sap.m.Page( {
			showHeader: true,
			title: "{i18n>appTitle}",
			
			content: [
				new sap.m.List({
					items : [
						new sap.m.StandardListItem({
							title: "{i18n>salesorder}", 
							type: "Navigation", 
							icon: "{img>/icon/salesorder}", 
							tap: function() {
								oController.onListItemTap("salesorder");
							}
						}),
					]
				}) 
			],
			
		
			footer: new sap.m.Bar({
				contentMiddle: new sap.m.Label({
					text: "{i18n>academy}", 
					design: sap.m.LabelDesign.Bold
				}),

			})
			
			
		});
		
		this.splitApp.addPage(menu, true);
		this.splitApp.addPage(sap.ui.jsview("salesorder", "sap.ui.demo.myFiori.view.SalesOrder"), false);
		this.splitApp.addPage(sap.ui.jsview("dsalesorder", "sap.ui.demo.myFiori.view.DSalesOrder"), false);
	    this.splitApp.addPage(sap.ui.jsview("dmaterial", "sap.ui.demo.myFiori.view.DMaterial"), false);

		return this.splitApp;
	}

});
