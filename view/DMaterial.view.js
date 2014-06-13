sap.ui.jsview("sap.ui.demo.myFiori.view.DMaterial", {

	
	getControllerName : function() {
		return "sap.ui.demo.myFiori.view.DMaterial";
	},

	
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title:"Details",
			showNavButton:true,
			navButtonText: "Countries",
			navButtonPress : [ oController.onNavButtonTap, oController ]
		});

		// create the page content structure
		
		var oList = new sap.m.List({headerText: "Material Details", items:
			[
		 	
			 	new sap.m.DisplayListItem({label:"Material:",value:"{Material}"}),
				new sap.m.DisplayListItem({label:"Description:",value:"{MatlDesc}"}),
			 	
			 ]});
		oPage.addContent(oList);
		


		this.addEventDelegate({
			onBeforeShow: function(evt) {
				this.setBindingContext(evt.data);
				console.log(evt.data.getObject().name);

				this.setModel(sap.ui.getCore().getModel());
			}
		}, this); // give this (= the View) as additional parameter to make it available inside the delegate's functions as "this" object

		return oPage;
	}

});   
