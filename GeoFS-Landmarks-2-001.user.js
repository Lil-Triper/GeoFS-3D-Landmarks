// ==UserScript==
// @name   GeoFS Landmarks 2.# v2
// @author ExtendDevelopment Team
// @description GeoFS addon giving users famous world landmarks.
// @namespace ExtendDevelopment Inc
// @match https://www.geo-fs.com/geofs.php*
// @match https://geo-fs.com/geofs.php*
// @run-at document-end
// @version 0.0.2
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant unsafeWindow
// ==/UserScript==
console.log("©️2020-2021 ExtendDevelopment Inc, all rights reserved.")
console.log("GeoFS 3D Data Loading...")

var addBuildings = function(){
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../models/objects/carrier/carrier.gltf"), [40.76683642677340, -74.0029338852795, 0], [110, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/compass0.glb"), [40.704029, -74.015504, 20], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("https://129066664-566439557718181686.preview.editmysite.com/uploads/1/2/9/0/129066664/onewtc.gltf"), [40.713003, -74.013184, 20], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/jfkatc.glb"), [40.642468, -73.781306, 0], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/genericatc.glb"), [33.944006649127665, -118.40384478693352, 0], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/genericatc.glb"), [51.47178486314496, -0.4654623912115562, 0], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/genericatc.glb"), [49.003465520509174, 2.573483109426901, 0], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/genericatc.glb"), [37.615913114472754, -122.3838715058867, 0], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/genericatc.glb"), [25.797520104826276, -80.28080030099528, 0], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/gateway.glb"), [38.62467160719759, -90.1849294458611, 0], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/operahouse.glb"), [-33.85709212131164, 151.2151553844974, 0], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/shard_2.glb"), [51.50439997167663, -0.0865319044008741, 60], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/sears_towers.glb"), [41.87888906449908, -87.63587381204945, 100], [0, 0, 0], [10, 10, 10])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/spaceneedle.glb"), [47.62054867355818, -122.34929125332603, 0], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/gherkin_2.glb"), [51.514478444303336, -0.0803259937534029, 60], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("../../../../backend/aircraft/repository/3D%20buildings_267286_3670/leaning_tower_of_pisa_2.glb"), [43.72301853292317, 10.39663055392561, 30], [0, 0, 0], [1, 1, 1])
    geofs.api.setModelPositionOrientationAndScale(geofs.api.loadModel("https://129066664-566439557718181686.preview.editmysite.com/uploads/1/2/9/0/129066664/big_ben-_for_project_proper_h.glb"), [51.50072163386705, -0.12460950809854282, 50], [0, 0, 0], [1, 1, 1])
};

setTimeout(addBuildings, 2000);
