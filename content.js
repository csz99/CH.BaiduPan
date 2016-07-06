var index = 0;
var tryTimes = 0;
var handler = null;
var selectItems = [];
$(function() {
    var btnBatchOfflineBtDownload = $("<a class=\"g-button\" href=\"javascript:void(0);\" id=\"btn-batch-offline-bt-download\"><span class=\"g-button-right\"><em class=\"icon icon-download-gray\" title=\"批量离线BT任务\"></em><span class=\"text\" style=\"width: auto;\">批量离线BT任务</span></span></a>");
    $(".list-header-operate .icon-download-gray").eq(0).parent().parent().after(btnBatchOfflineBtDownload);
    btnBatchOfflineBtDownload.click(function() {
        selectItems = $(".list-view .item-active .file-name .filename");
        if (selectItems.length > 0) {
            index = 0;
            step1();
        }
    });
});

function simulateClick(element) {
    var evt = document.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, false, document, 0, 0, 0, 0, 0, false,
        false, false, false, 0, null);
    element.dispatchEvent(evt);
}

function step1() {

    if (index > selectItems.length - 1) {
        return;
    }
    if (handler != null) {
        clearInterval(handler);
        tryTimes = 0;
    }

    simulateClick(selectItems[index]);
    handler = setInterval(function() {
        tryTimes++;
        if ($(".dialog-offlinebtlist-dialog").length > 0) {
            step2();
            return;
        }

        if (tryTimes > 10) {
            index++;
            step1()
        }
    }, 1000);
}


function step2() {
    if (handler != null) {
        clearInterval(handler);
        tryTimes = 0;
    }

    

}
