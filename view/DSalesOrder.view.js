sap.ui.jsview("sap.ui.demo.myFiori.view.DSalesOrder", {

	onNavButtonTap: function() {
		app.ref.AppView.splitApp.backMaster();

	},
	
	getControllerName : function() {
		return "sap.ui.demo.myFiori.view.DSalesOrder";
	},

	createContent : function(oController) {

		var oListStandardNoImageNoHeader = new sap.m.List({
			inset : false
        });


		var sServiceUrl = "proxy/http/ssy1d1d.com:8000/sap/opu/odata/sap/ZGW_MATERIAL_SRV/";
        var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, false, "KKUMARR96", "r321");
        
        
		var oFilter1 = new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.GT, "270000001");
		var oFilter2 = new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.LE, "279999999");

		oListStandardNoImageNoHeader.setModel(oModel);   
		//sap.ui.getCore().setModel(oModel,"mainModel");  

		oListStandardNoImageNoHeader.bindAggregation("items", {
			path : "/Materials",
            filters: [ oFilter1, oFilter2 ],
            template : new sap.m.StandardListItem({
				title : '{Material}',
                type : sap.m.ListType.Active,
                description : "{MatlDesc}",
                press : [ oController.materialListTap, oController ]
            })

         });


		var page1 = new sap.m.Page("page1", {
			title:"Material",
			showNavButton: true,
			navButtonTap: [oController.onNavButtonTap],
            content : [oListStandardNoImageNoHeader],
            enableScrolling: true
		});

		return page1;
	},
});   
