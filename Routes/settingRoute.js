const  express =require('express');
const router = express.Router();

var office_locationController =require('../controller/office_locationController');

var Financial_yearController =require('../controller/financial_yearController');

var Head_departmentController =require('../controller/headDepartmentController');

var Sub_departmentController =require('../controller/subDepartmentContoller');

var designationController =require('../controller/designationController');

var qualificationController =require('../controller/qualificationController');

var packageController =require('../controller/packageController');

var shiftController =require('../controller/shiftController');

var vsrValueController =require('../controller/vsrValueController');
var ledgerController =require('../controller/ledgerController');
var streamController =require('../controller/streamController')

var batchSizeController =require('../controller/batchSizeController')

var trainerController =require('../controller/trainerController')

var relievingController =require('../controller/relievingController')



router.post('/location',office_locationController.addLocation);
router.get('/location',office_locationController.getAllLocations);
router.delete('/location/:id',office_locationController.deleteLocations);
router.put('/location/:id',office_locationController.updateLocations);


router.post('/financial',Financial_yearController.addYear);
router.get('/financial',Financial_yearController.getAllYear);
router.delete('/financial/:id',Financial_yearController.deleteYear);
router.put('/financial/:id',Financial_yearController.updateYear);

router.post('/department',Head_departmentController.addDepartment);
router.get('/department',Head_departmentController.getAllDepartments);
router.delete('/department/:id',Head_departmentController.deleteDepartment);
router.put('/department/:id',Head_departmentController.updateDepartment);

router.post('/sub_department',Sub_departmentController.addSubDepartment);
router.get('/sub_department',Sub_departmentController.getAllSubDepartment);
router.delete('/sub_department/:id',Sub_departmentController.deleteSubDepartment);
router.put('/sub_department/:id',Sub_departmentController.updateSubDepartment);

router.post('/designation',designationController.addDesignation);
router.get('/designation',designationController.getAllDesignation);
router.delete('/designation/:id',designationController.deleteDesignation);
router.put('/designation/:id',designationController.updateDesignation);

router.post('/qualification',qualificationController.addQualification);
router.get('/qualification',qualificationController.getAllQualification);
router.delete('/qualification/:id',qualificationController.deleteQualification);
router.put('/qualification/:id',qualificationController.updateQualification);


router.post('/stream',streamController.addStream);
router.get('/stream',streamController.getAllStream);
router.delete('/stream/:id',streamController.deleteStream);
router.put('/stream/:id',streamController.updateStream);

router.post('/package',packageController.addPackage);
router.get('/package',packageController.getAllPackage);
router.delete('/package/:id',packageController.deletePackage);
router.put('/package/:id',packageController.updatePackage);

router.post('/shift',shiftController.addShift);
router.get('/shift',shiftController.getAllShift);
router.delete('/shift/:id',shiftController.deleteShift);
router.put('/shift/:id',shiftController.updateShift);

router.post('/vsrValue',vsrValueController.addVsrValue);
router.get('/vsrValue',vsrValueController.getAllVsrValue);
router.delete('/vsrValue/:id',vsrValueController.deleteVsrValue);
router.put('/vsrValue/:id',vsrValueController.updateVsrvalue);

router.post('/ledger',ledgerController.addLedger);
router.get('/ledger',ledgerController.getAllLedger);
router.delete('/ledger/:id',ledgerController.deleteLedger);
router.put('/ledger/:id',ledgerController.updateLedger);

router.post('/batchSize',batchSizeController.addBatchSize);
router.get('/batchSize',batchSizeController.getAllBatchSize);
router.delete('/batchSize/:id',batchSizeController.deleteBatchSize);
router.put('/batchSize/:id',batchSizeController.updateBatchSize);

router.post('/trainer',trainerController.addTrainer);
router.get('/trainer',trainerController.getAllTrainer);
router.delete('/trainer/:id',trainerController.deleteTrainer);
router.put('/trainer/:id',trainerController.updateTrainer);

router.post('/relieving',relievingController.addRelieving);
router.get('/relieving',relievingController.getAllRelieving);
router.delete('/relieving/:id',relievingController.deleteRelieving);
router.put('/relieving/:id',relievingController.updateRelieving);

module.exports=router;