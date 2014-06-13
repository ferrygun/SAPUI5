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
			 	new sap.m.DisplayListItem({label:"Material:",value:{
			 		path:"Materials",
			 		formatter:function(iValue){ 
			 			alert('Here!!');
						var test = this.getBindingContext();  
						console.log('SS:' + test);

						var currentdate = new Date(); 
						var datetime = "Last Sync: " + currentdate.getDate() + "/"
										+ (currentdate.getMonth()+1)  + "/" 
										+ currentdate.getFullYear() + " @ "  
										+ currentdate.getHours() + ":"  
										+ currentdate.getMinutes() + ":" 
										+ currentdate.getSeconds();

			 			return currentdate + " sq km";
			 		}
			 	}})
			 ]});
		oPage.addContent(oList);
		


		this.addEventDelegate({
			onBeforeShow: function(evt) {
				this.setBindingContext(evt.data);
				console.log(evt.data.getObject().name);
			}
		}, this); // give this (= the View) as additional parameter to make it available inside the delegate's functions as "this" object

		return oPage;
	}

});   
