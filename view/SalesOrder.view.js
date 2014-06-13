sap.ui.jsview("sap.ui.demo.myFiori.view.SalesOrder", {

	getControllerName : function() {
		return "sap.ui.demo.myFiori.view.SalesOrder";
	},

    createContent : function(oController) {

		this.oLPRB1_SO = new sap.m.RadioButton({  
			text: "Display Sales Order",  
			selected: true,  
			groupName:"LPMethodGroup", 
		}).addStyleClass('margin');
		
		
		
		var oLPVBox_SO = new sap.m.VBox("LPVBox_SO", {
			alignItems: sap.m.FlexAlignItems.Left,
			items:[
				this.oLPRB1_SO,
		
			]
		});

		this.oPath = new sap.m.Input({type: 'Text', width: '300px'}).addStyleClass('margin');
		var oPathVBox_SO = new sap.m.VBox("pathVBox_SO", {
			alignItems: sap.m.FlexAlignItems.Left,
			items:[
				new sap.m.Label({text: "", design: sap.m.LabelDesign.Bold}).addStyleClass('margin'),
				new sap.m.Label({text: "Path", design: sap.m.LabelDesign.Bold}).addStyleClass('margin'),
				this.oPath
			]
		});

		return new sap.m.Page( {
			title: "{i18n>salesorder}",
			showNavButton: true,
			navButtonTap: [oController.onNavButtonTap],
			content: [
				new sap.m.Label({
					text: "Please select the following options:", 
					design: sap.m.LabelDesign.Bold
				}).addStyleClass('margin'),
				oLPVBox_SO,
				new sap.m.Button({
					text: "{i18n>ok}", 
					type: sap.m.ButtonType.Emphasized,						
					press: function() {oController.submitLPForm();}
				}).addStyleClass('margin') 
				
			]
		});
    }

});
