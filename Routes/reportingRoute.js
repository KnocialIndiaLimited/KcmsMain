const  express =require('express');
const router = express.Router();

var ReportingController =require('../controller/ReportingController');
var RecieptController =require('../controller/recieptController');
var FineController =require('../controller/fineController');
var FineWaiverController =require('../controller/fineWaiverController');
var VsrWaiverController =require('../controller/VsrWaiverController');

router.post('/reporting',ReportingController.addReporting);
router.get('/reporting',ReportingController.getAllReporting);
router.delete('/reporting/:id',ReportingController.deleteReporting);
router.put('/reporting/:id',ReportingController.updateReporting);
router.post('/validate',ReportingController.validate);
router.put('/reporting/Pending_value/:id',ReportingController.updatePendingAmount);

router.post('/reciept',RecieptController.addReciept);
router.get('/reciept',RecieptController.getAllReciept);
router.delete('/reciept/:id',RecieptController.deleteReciept);

router.post('/fine',FineController.addFine);
router.get('/fine',FineController.getAllFine);
router.delete('/fine/:id',FineController.deleteFine);

router.post('/fineWaiver',FineWaiverController.addFineWaiver);
router.get('/fineWaiver',FineWaiverController.getAllFineWaiver);
router.delete('/fineWaiver/:id',FineWaiverController.deleteFineWaiver);


router.post('/vsrWaiver',VsrWaiverController.addVsrWaiver);
router.get('/vsrWaiver',VsrWaiverController.getAllVsrWaiver);
router.delete('/vsrWaiver/:id',VsrWaiverController.deleteVsrWaiver);


module.exports=router;