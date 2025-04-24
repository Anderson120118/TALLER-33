ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-79.514403, -10.885155, -74.835742, -7.995960]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GEOLOGIADEANCASH_1 = new ol.format.GeoJSON();
var features_GEOLOGIADEANCASH_1 = format_GEOLOGIADEANCASH_1.readFeatures(json_GEOLOGIADEANCASH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GEOLOGIADEANCASH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGIADEANCASH_1.addFeatures(features_GEOLOGIADEANCASH_1);
var lyr_GEOLOGIADEANCASH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGIADEANCASH_1, 
                style: style_GEOLOGIADEANCASH_1,
                popuplayertitle: 'GEOLOGIA DE ANCASH',
                interactive: true,
    title: 'GEOLOGIA DE ANCASH<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_0.png" /> A-a<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_1.png" /> Ad-c<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_2.png" /> Ao-b<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_3.png" /> C_poblados<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_4.png" /> C-d<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_5.png" /> Fv2-a<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_6.png" /> Fv3-a<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_7.png" /> Lagunas<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_8.png" /> Ll-a<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_9.png" /> Lld-c<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_10.png" /> Llo-b<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_11.png" /> Nv<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_12.png" /> V-a<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_13.png" /> Vc-d<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_14.png" /> Vc-e<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_15.png" /> Vg-a<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_16.png" /> Vs1-d<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_17.png" /> Vs1-e<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_18.png" /> Vs2-d<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_19.png" /> Vs2-e<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_20.png" /> Vs3-d<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_21.png" /> Vs3-e<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_22.png" /> Vsa-b<br />\
    <img src="styles/legend/GEOLOGIADEANCASH_1_23.png" /> Vso-c<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GEOLOGIADEANCASH_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GEOLOGIADEANCASH_1];
lyr_GEOLOGIADEANCASH_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SIMBOLO_': 'SIMBOLO_', 'REGION': 'REGION', 'FORMAS_DEL': 'FORMAS_DEL', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_GEOLOGIADEANCASH_1.set('fieldImages', {'OBJECTID': 'Hidden', 'SIMBOLO_': 'TextEdit', 'REGION': 'Hidden', 'FORMAS_DEL': 'Hidden', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_GEOLOGIADEANCASH_1.set('fieldLabels', {'SIMBOLO_': 'inline label - always visible', 'Area': 'inline label - always visible', 'Perimetro': 'inline label - always visible', });
lyr_GEOLOGIADEANCASH_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});